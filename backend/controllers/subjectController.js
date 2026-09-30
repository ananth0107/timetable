const db = require('../config/db');

// GET /api/subjects
const getSubjects = async (req, res, next) => {
  try {
    const { department_id, semester, program, search } = req.query;

    let query = `
      SELECT s.id, s.code, s.name, s.department_id, s.semester, s.credits, s.year, s.program, s.program_name, s.type, s.created_at,
             d.name AS department_name, d.code AS dept_code
      FROM subjects s
      LEFT JOIN departments d ON s.department_id = d.id
      WHERE 1=1
    `;
    const params = [];

    if (department_id) {
      query += ` AND s.department_id = ?`;
      params.push(department_id);
    }

    if (semester) {
      query += ` AND s.semester = ?`;
      params.push(semester);
    }

    if (program) {
      query += ` AND s.program = ?`;
      params.push(program);
    }

    if (search) {
      query += ` AND (s.name LIKE ? OR s.code LIKE ?)`;
      params.push(`%${search}%`, `%${search}%`);
    }

    query += ` ORDER BY s.code ASC`;

    const [rows] = await db.query(query, params);

    const subjects = rows.map(s => ({
      id: s.id,
      code: s.code,
      name: s.name,
      credits: s.credits,
      semester: s.semester,
      year: s.year || 'I',
      program: s.program || 'UG_BSCCS',
      programName: s.program_name || 'B.Sc. CS',
      dept: s.dept_code || 'CS',
      departmentId: s.department_id,
      type: s.type || 'Theory'
    }));

    return res.status(200).json({
      success: true,
      count: subjects.length,
      subjects
    });
  } catch (error) {
    next(error);
  }
};

// GET /api/subjects/:id
const getSubjectById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const [rows] = await db.query(
      `SELECT s.*, d.name AS department_name, d.code AS dept_code
       FROM subjects s
       LEFT JOIN departments d ON s.department_id = d.id
       WHERE s.id = ? OR s.code = ?`,
      [id, id]
    );

    if (rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'Subject not found.'
      });
    }

    return res.status(200).json({
      success: true,
      subject: rows[0]
    });
  } catch (error) {
    next(error);
  }
};

// POST /api/subjects
const createSubject = async (req, res, next) => {
  try {
    const { code, name, department_id = 1, semester = 'Semester I', credits = 4, year = 'I', program = 'UG_BSCCS', programName, type = 'Theory' } = req.body;

    if (!code || !name) {
      return res.status(400).json({
        success: false,
        message: 'Subject code and name are required.'
      });
    }

    const cleanCode = code.trim().toUpperCase();

    const [existing] = await db.query('SELECT id FROM subjects WHERE code = ?', [cleanCode]);
    if (existing.length > 0) {
      return res.status(400).json({
        success: false,
        message: `Subject with code ${cleanCode} already exists.`
      });
    }

    const [result] = await db.query(
      `INSERT INTO subjects (code, name, department_id, semester, credits, year, program, program_name, type)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [cleanCode, name.trim(), department_id, semester, credits, year, program, programName || (program.includes('MSC') ? 'M.Sc. CS' : 'B.Sc. CS'), type]
    );

    return res.status(201).json({
      success: true,
      message: 'Subject created successfully.',
      subjectId: result.insertId
    });
  } catch (error) {
    next(error);
  }
};

// PUT /api/subjects/:id
const updateSubject = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { code, name, department_id, semester, credits, year, program, programName, type } = req.body;

    const updates = [];
    const params = [];

    if (code) { updates.push('code = ?'); params.push(code.trim().toUpperCase()); }
    if (name) { updates.push('name = ?'); params.push(name.trim()); }
    if (department_id !== undefined) { updates.push('department_id = ?'); params.push(department_id); }
    if (semester) { updates.push('semester = ?'); params.push(semester); }
    if (credits !== undefined) { updates.push('credits = ?'); params.push(credits); }
    if (year) { updates.push('year = ?'); params.push(year); }
    if (program) { updates.push('program = ?'); params.push(program); }
    if (programName) { updates.push('program_name = ?'); params.push(programName); }
    if (type) { updates.push('type = ?'); params.push(type); }

    if (updates.length > 0) {
      params.push(id, id);
      const [result] = await db.query(`UPDATE subjects SET ${updates.join(', ')} WHERE id = ? OR code = ?`, params);
      if (result.affectedRows === 0) {
        return res.status(404).json({
          success: false,
          message: 'Subject not found.'
        });
      }
    }

    return res.status(200).json({
      success: true,
      message: 'Subject updated successfully.'
    });
  } catch (error) {
    next(error);
  }
};

// DELETE /api/subjects/:id
const deleteSubject = async (req, res, next) => {
  try {
    const { id } = req.params;

    const [result] = await db.query('DELETE FROM subjects WHERE id = ? OR code = ?', [id, id]);
    if (result.affectedRows === 0) {
      return res.status(404).json({
        success: false,
        message: 'Subject not found.'
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Subject deleted successfully.'
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getSubjects,
  getSubjectById,
  createSubject,
  updateSubject,
  deleteSubject
};
