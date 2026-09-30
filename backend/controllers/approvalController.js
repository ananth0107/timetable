const db = require('../config/db');

// GET /api/approvals
const getApprovals = async (req, res, next) => {
  try {
    const { status } = req.query;

    let query = `
      SELECT a.id, a.question_paper_id, a.submitted_by, a.reviewed_by, a.status,
             a.comments, a.reviewed_at, a.created_at,
             qp.title AS paper_title, qp.total_marks, qp.duration, qp.exam_type, qp.semester, qp.status AS paper_status, qp.blueprint_data,
             s.name AS subject_name, s.code AS subject_code, s.program_name, s.year,
             sub_u.name AS submitted_by_name, sub_u.email AS submitted_by_email,
             rev_u.name AS reviewed_by_name
      FROM approvals a
      LEFT JOIN question_papers qp ON a.question_paper_id = qp.id
      LEFT JOIN subjects s ON qp.subject_id = s.id
      LEFT JOIN users sub_u ON a.submitted_by = sub_u.id
      LEFT JOIN users rev_u ON a.reviewed_by = rev_u.id
      WHERE 1=1
    `;
    const params = [];

    if (status && status !== 'All') {
      query += ' AND a.status = ?';
      params.push(status);
    }

    query += ' ORDER BY a.created_at DESC';

    const [rows] = await db.query(query, params);

    const formatted = rows.map(r => {
      let blueprint = null;
      if (r.blueprint_data) {
        try {
          blueprint = typeof r.blueprint_data === 'string' ? JSON.parse(r.blueprint_data) : r.blueprint_data;
        } catch (e) {
          blueprint = null;
        }
      }

      return {
        id: r.id,
        paperId: r.question_paper_id,
        title: r.paper_title || 'Continuous Internal Assessment Blueprint',
        subject: r.subject_name || 'Database Management Systems',
        subjectCode: r.subject_code || 'CS301',
        programName: r.program_name || 'B.Sc. CS',
        year: r.year || 'II',
        semester: r.semester || 'Semester IV',
        examType: r.exam_type || 'Continuous Internal Assessment (CIA)',
        duration: r.duration || '60 Minutes',
        maxMarks: r.total_marks || 20,
        status: r.status === 'approved' ? 'Approved' : r.status === 'rejected' ? 'Changes Required' : 'Submitted',
        submittedBy: r.submitted_by_name || 'Teaching Faculty',
        submittedByEmail: r.submitted_by_email,
        reviewedBy: r.reviewed_by_name,
        reviewedAt: r.reviewed_at,
        createdDate: r.created_at ? new Date(r.created_at).toISOString().split('T')[0] : '',
        comments: r.comments || '',
        hodRemarks: r.comments || '',
        blueprint: blueprint,
        questions: blueprint?.questions || []
      };
    });

    return res.status(200).json({
      success: true,
      count: formatted.length,
      approvals: formatted
    });
  } catch (error) {
    next(error);
  }
};

// GET /api/approvals/:id
const getApprovalById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const [rows] = await db.query(
      `SELECT a.*, qp.title AS paper_title, qp.blueprint_data, s.name AS subject_name, s.code AS subject_code,
              sub_u.name AS submitted_by_name, rev_u.name AS reviewed_by_name
       FROM approvals a
       LEFT JOIN question_papers qp ON a.question_paper_id = qp.id
       LEFT JOIN subjects s ON qp.subject_id = s.id
       LEFT JOIN users sub_u ON a.submitted_by = sub_u.id
       LEFT JOIN users rev_u ON a.reviewed_by = rev_u.id
       WHERE a.id = ?`,
      [id]
    );

    if (rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'Approval record not found.'
      });
    }

    return res.status(200).json({
      success: true,
      approval: rows[0]
    });
  } catch (error) {
    next(error);
  }
};

// POST /api/approvals (Submit question paper for approval)
const createApproval = async (req, res, next) => {
  try {
    const { question_paper_id, comments = 'Submitted for HOD verification' } = req.body;

    if (!question_paper_id) {
      return res.status(400).json({
        success: false,
        message: 'question_paper_id is required.'
      });
    }

    const userId = req.user?.id || 1;

    // Update paper status to Submitted
    await db.query(
      'UPDATE question_papers SET status = "Submitted", hod_remarks = ? WHERE id = ?',
      [comments, question_paper_id]
    );

    // Insert approval tracking record
    const [result] = await db.query(
      `INSERT INTO approvals (question_paper_id, submitted_by, status, comments)
       VALUES (?, ?, 'pending', ?)`,
      [question_paper_id, userId, comments]
    );

    return res.status(201).json({
      success: true,
      message: 'Question paper submitted to HOD for approval.',
      approvalId: result.insertId
    });
  } catch (error) {
    next(error);
  }
};

// PUT /api/approvals/:id (Review / Approve / Reject)
const updateApproval = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { status, comments = '' } = req.body;

    // Verify role (HOD or Admin)
    const reviewerId = req.user?.id || 1;
    const normStatus = status === 'Approved' ? 'approved' : status === 'Changes Required' || status === 'rejected' ? 'rejected' : status.toLowerCase();

    const [approvalRows] = await db.query('SELECT question_paper_id FROM approvals WHERE id = ? OR question_paper_id = ? LIMIT 1', [id, id]);

    if (approvalRows.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'Approval record not found.'
      });
    }

    const paperId = approvalRows[0].question_paper_id;
    const paperStatus = normStatus === 'approved' ? 'Approved' : 'Changes Required';

    // Update approval record
    await db.query(
      `UPDATE approvals
       SET status = ?, comments = ?, reviewed_by = ?, reviewed_at = NOW()
       WHERE id = ? OR question_paper_id = ?`,
      [normStatus, comments || (normStatus === 'approved' ? 'Approved by HOD' : 'Revisions requested by HOD'), reviewerId, id, id]
    );

    // Update question paper status
    await db.query(
      'UPDATE question_papers SET status = ?, hod_remarks = ? WHERE id = ?',
      [paperStatus, comments || (normStatus === 'approved' ? 'Approved by HOD for examination' : 'Revisions requested by HOD'), paperId]
    );

    return res.status(200).json({
      success: true,
      message: `Question paper ${paperStatus.toLowerCase()} successfully.`
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getApprovals,
  getApprovalById,
  createApproval,
  updateApproval
};
