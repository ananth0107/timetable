const db = require('../config/db');

// GET /api/question-papers
const getQuestionPapers = async (req, res, next) => {
  try {
    const { status, subject_id, created_by } = req.query;

    let query = `
      SELECT qp.id, qp.title, qp.subject_id, qp.created_by, qp.status, qp.total_marks,
             qp.duration, qp.exam_type, qp.semester, qp.academic_year, qp.hod_remarks,
             qp.blueprint_data, qp.created_at, qp.updated_at,
             s.name AS subject_name, s.code AS subject_code, s.program, s.program_name, s.year,
             u.name AS author_name, u.email AS author_email
      FROM question_papers qp
      LEFT JOIN subjects s ON qp.subject_id = s.id
      LEFT JOIN users u ON qp.created_by = u.id
      WHERE 1=1
    `;
    const params = [];

    if (status && status !== 'All') {
      query += ' AND qp.status = ?';
      params.push(status);
    }

    if (subject_id) {
      query += ' AND qp.subject_id = ?';
      params.push(subject_id);
    }

    if (created_by) {
      query += ' AND qp.created_by = ?';
      params.push(created_by);
    }

    query += ' ORDER BY qp.created_at DESC';

    const [rows] = await db.query(query, params);

    const formattedPapers = rows.map(p => {
      let blueprint = null;
      if (p.blueprint_data) {
        try {
          blueprint = typeof p.blueprint_data === 'string' ? JSON.parse(p.blueprint_data) : p.blueprint_data;
        } catch (e) {
          blueprint = null;
        }
      }

      return {
        id: p.id,
        title: p.title,
        subjectId: p.subject_id,
        subject: p.subject_name || 'Database Management Systems',
        subjectCode: p.subject_code || 'CS301',
        program: p.program || 'UG_BSCCS',
        programName: p.program_name || 'B.Sc. Computer Science',
        year: p.year || 'II',
        semester: p.semester || 'Semester IV',
        examType: p.exam_type || 'Continuous Internal Assessment (CIA)',
        duration: p.duration || '60 Minutes',
        maxMarks: p.total_marks || 20,
        totalMarks: p.total_marks || 20,
        status: p.status,
        author: p.author_name || 'Prof. Alan Davis',
        createdDate: p.created_at ? new Date(p.created_at).toISOString().split('T')[0] : '2026-03-20',
        hodRemarks: p.hod_remarks || '',
        blueprint: blueprint,
        questions: blueprint?.questions || []
      };
    });

    return res.status(200).json({
      success: true,
      count: formattedPapers.length,
      questionPapers: formattedPapers
    });
  } catch (error) {
    next(error);
  }
};

// GET /api/question-papers/:id
const getQuestionPaperById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const [rows] = await db.query(
      `SELECT qp.*, s.name AS subject_name, s.code AS subject_code, s.program, s.program_name, s.year,
              u.name AS author_name, u.email AS author_email
       FROM question_papers qp
       LEFT JOIN subjects s ON qp.subject_id = s.id
       LEFT JOIN users u ON qp.created_by = u.id
       WHERE qp.id = ?`,
      [id]
    );

    if (rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'Question paper not found.'
      });
    }

    const p = rows[0];
    let blueprint = null;
    if (p.blueprint_data) {
      try {
        blueprint = typeof p.blueprint_data === 'string' ? JSON.parse(p.blueprint_data) : p.blueprint_data;
      } catch (e) {
        blueprint = null;
      }
    }

    // Also fetch associated questions from junction table if present
    const [junctionRows] = await db.query(
      `SELECT qpq.*, q.question_text, q.question_type, q.difficulty, q.bloom_level, q.unit
       FROM question_paper_questions qpq
       LEFT JOIN questions q ON qpq.question_id = q.id
       WHERE qpq.question_paper_id = ?
       ORDER BY qpq.question_number ASC`,
      [id]
    );

    return res.status(200).json({
      success: true,
      questionPaper: {
        id: p.id,
        title: p.title,
        subjectId: p.subject_id,
        subject: p.subject_name,
        subjectCode: p.subject_code,
        program: p.program,
        programName: p.program_name,
        year: p.year,
        semester: p.semester,
        examType: p.exam_type,
        duration: p.duration,
        maxMarks: p.total_marks,
        totalMarks: p.total_marks,
        status: p.status,
        author: p.author_name,
        createdDate: p.created_at ? new Date(p.created_at).toISOString().split('T')[0] : '',
        hodRemarks: p.hod_remarks,
        blueprint: blueprint,
        junctionQuestions: junctionRows
      }
    });
  } catch (error) {
    next(error);
  }
};

// POST /api/question-papers
const createQuestionPaper = async (req, res, next) => {
  try {
    const {
      title = 'Continuous Internal Assessment Blueprint',
      subject_id,
      subjectCode,
      subject,
      total_marks = 20,
      maxMarks,
      duration = '60 Minutes',
      exam_type = 'Internal Exam',
      examType,
      semester = 'Semester IV',
      academic_year = '2025-2026',
      status = 'Draft',
      blueprint,
      questions = []
    } = req.body;

    let targetSubjectId = subject_id;
    if (!targetSubjectId && (subjectCode || subject)) {
      const [subRows] = await db.query('SELECT id FROM subjects WHERE code = ? OR name = ? LIMIT 1', [subjectCode || subject, subject || subjectCode]);
      if (subRows.length > 0) targetSubjectId = subRows[0].id;
    }
    if (!targetSubjectId) targetSubjectId = 1;

    const userId = req.user?.id || 1;
    const finalMarks = total_marks || maxMarks || 20;
    const finalType = exam_type || examType || 'Internal Exam';

    const blueprintToSave = blueprint || { questions };

    const [result] = await db.query(
      `INSERT INTO question_papers (title, subject_id, created_by, status, total_marks, duration, exam_type, semester, academic_year, blueprint_data)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        title,
        targetSubjectId,
        userId,
        status,
        finalMarks,
        duration,
        finalType,
        semester,
        academic_year,
        JSON.stringify(blueprintToSave)
      ]
    );

    const paperId = result.insertId;

    // If questions array provided, insert into junction table
    if (Array.isArray(questions) && questions.length > 0) {
      for (let i = 0; i < questions.length; i++) {
        const q = questions[i];
        if (q.id && typeof q.id === 'number') {
          await db.query(
            `INSERT INTO question_paper_questions (question_paper_id, question_id, question_number, marks, section)
             VALUES (?, ?, ?, ?, ?)`,
            [paperId, q.id, `${i + 1}`, q.marks || 5, q.section || 'Part A']
          );
        }
      }
    }

    return res.status(201).json({
      success: true,
      message: 'Question paper blueprint created successfully.',
      paperId
    });
  } catch (error) {
    next(error);
  }
};

// PUT /api/question-papers/:id
const updateQuestionPaper = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title, subject_id, status, total_marks, maxMarks, duration, exam_type, examType, semester, academic_year, hod_remarks, hodRemarks, blueprint } = req.body;

    const updates = [];
    const params = [];

    if (title) { updates.push('title = ?'); params.push(title); }
    if (subject_id) { updates.push('subject_id = ?'); params.push(subject_id); }
    if (status) { updates.push('status = ?'); params.push(status); }
    if (total_marks !== undefined || maxMarks !== undefined) { updates.push('total_marks = ?'); params.push(total_marks || maxMarks); }
    if (duration) { updates.push('duration = ?'); params.push(duration); }
    if (exam_type || examType) { updates.push('exam_type = ?'); params.push(exam_type || examType); }
    if (semester) { updates.push('semester = ?'); params.push(semester); }
    if (academic_year) { updates.push('academic_year = ?'); params.push(academic_year); }
    if (hod_remarks !== undefined || hodRemarks !== undefined) { updates.push('hod_remarks = ?'); params.push(hod_remarks || hodRemarks); }
    if (blueprint) { updates.push('blueprint_data = ?'); params.push(JSON.stringify(blueprint)); }

    if (updates.length > 0) {
      params.push(id);
      const [result] = await db.query(`UPDATE question_papers SET ${updates.join(', ')} WHERE id = ?`, params);
      if (result.affectedRows === 0) {
        return res.status(404).json({
          success: false,
          message: 'Question paper not found.'
        });
      }
    }

    return res.status(200).json({
      success: true,
      message: 'Question paper blueprint updated successfully.'
    });
  } catch (error) {
    next(error);
  }
};

// DELETE /api/question-papers/:id
const deleteQuestionPaper = async (req, res, next) => {
  try {
    const { id } = req.params;

    const [result] = await db.query('DELETE FROM question_papers WHERE id = ?', [id]);
    if (result.affectedRows === 0) {
      return res.status(404).json({
        success: false,
        message: 'Question paper not found.'
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Question paper deleted successfully.'
    });
  } catch (error) {
    next(error);
  }
};

// POST /api/question-papers/:id/questions
const addQuestionToPaper = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { question_id, question_number, marks, section = 'Part A' } = req.body;

    if (!question_id || !question_number || marks === undefined) {
      return res.status(400).json({
        success: false,
        message: 'question_id, question_number, and marks are required.'
      });
    }

    const [result] = await db.query(
      `INSERT INTO question_paper_questions (question_paper_id, question_id, question_number, marks, section)
       VALUES (?, ?, ?, ?, ?)`,
      [id, question_id, question_number, marks, section]
    );

    return res.status(201).json({
      success: true,
      message: 'Question added to question paper.',
      id: result.insertId
    });
  } catch (error) {
    next(error);
  }
};

// DELETE /api/question-papers/:id/questions/:questionId
const removeQuestionFromPaper = async (req, res, next) => {
  try {
    const { id, questionId } = req.params;

    const [result] = await db.query(
      'DELETE FROM question_paper_questions WHERE question_paper_id = ? AND (question_id = ? OR id = ?)',
      [id, questionId, questionId]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({
        success: false,
        message: 'Question link not found in this paper.'
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Question removed from question paper.'
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getQuestionPapers,
  getQuestionPaperById,
  createQuestionPaper,
  updateQuestionPaper,
  deleteQuestionPaper,
  addQuestionToPaper,
  removeQuestionFromPaper
};
