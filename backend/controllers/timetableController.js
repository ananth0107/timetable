const db = require('../config/db');

// GET /api/timetable
const getTimetables = async (req, res, next) => {
  try {
    const { department_id, semester, academic_year, faculty_id, day, program_id, section } = req.query;

    let query = `
      SELECT t.id, t.department_id, t.subject_id, t.faculty_id, t.day, t.period, t.room,
             t.semester, t.academic_year, t.section, t.program_id, t.is_break, t.is_free, t.custom_label,
             s.name AS subject_name, s.code AS subject_code, s.type AS subject_type,
             u.name AS faculty_name, u.email AS faculty_email,
             d.name AS department_name, d.code AS dept_code
      FROM timetables t
      LEFT JOIN subjects s ON t.subject_id = s.id
      LEFT JOIN users u ON t.faculty_id = u.id
      LEFT JOIN departments d ON t.department_id = d.id
      WHERE 1=1
    `;
    const params = [];

    if (department_id) { query += ' AND t.department_id = ?'; params.push(department_id); }
    if (semester) { query += ' AND t.semester = ?'; params.push(semester); }
    if (academic_year) { query += ' AND t.academic_year = ?'; params.push(academic_year); }
    if (faculty_id) { query += ' AND t.faculty_id = ?'; params.push(faculty_id); }
    if (day) { query += ' AND t.day = ?'; params.push(day); }
    if (program_id) { query += ' AND t.program_id = ?'; params.push(program_id); }
    if (section) { query += ' AND t.section = ?'; params.push(section); }

    query += ' ORDER BY FIELD(t.day, "MON", "TUE", "WED", "THU", "FRI", "SAT"), t.period ASC';

    const [rows] = await db.query(query, params);

    const formattedList = rows.map(r => ({
      id: r.id,
      departmentId: r.department_id,
      department: r.department_name,
      deptCode: r.dept_code,
      subjectId: r.subject_id,
      subject: r.subject_name || '',
      code: r.subject_code || '',
      isLab: r.subject_type?.includes('Lab') || false,
      facultyId: r.faculty_id,
      faculty: r.faculty_name || '',
      day: r.day,
      period: r.period,
      room: r.room || 'LH-201',
      semester: r.semester,
      academicYear: r.academic_year,
      section: r.section,
      programId: r.program_id,
      isBreak: Boolean(r.is_break),
      isFree: Boolean(r.is_free),
      label: r.custom_label || (r.is_free ? 'Free Period' : r.subject_name || '')
    }));

    return res.status(200).json({
      success: true,
      count: formattedList.length,
      timetables: formattedList
    });
  } catch (error) {
    next(error);
  }
};

// GET /api/timetable/:id
const getTimetableById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const [rows] = await db.query(
      `SELECT t.*, s.name AS subject_name, s.code AS subject_code, u.name AS faculty_name
       FROM timetables t
       LEFT JOIN subjects s ON t.subject_id = s.id
       LEFT JOIN users u ON t.faculty_id = u.id
       WHERE t.id = ?`,
      [id]
    );

    if (rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'Timetable entry not found.'
      });
    }

    return res.status(200).json({
      success: true,
      timetable: rows[0]
    });
  } catch (error) {
    next(error);
  }
};

// POST /api/timetable
const createTimetable = async (req, res, next) => {
  try {
    const {
      department_id = 1,
      subject_id,
      faculty_id,
      day,
      period,
      room = 'LH-201',
      semester = 'Semester IV',
      academic_year = '2025-2026',
      section = 'Section A',
      program_id = 'UG_BSCCS',
      is_break = false,
      is_free = false,
      custom_label
    } = req.body;

    if (!day || !period) {
      return res.status(400).json({
        success: false,
        message: 'Day and period are required.'
      });
    }

    const [result] = await db.query(
      `INSERT INTO timetables (department_id, subject_id, faculty_id, day, period, room, semester, academic_year, section, program_id, is_break, is_free, custom_label)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [department_id, subject_id || null, faculty_id || null, day, period, room, semester, academic_year, section, program_id, is_break ? 1 : 0, is_free ? 1 : 0, custom_label || null]
    );

    return res.status(201).json({
      success: true,
      message: 'Timetable period scheduled successfully.',
      timetableId: result.insertId
    });
  } catch (error) {
    next(error);
  }
};

// PUT /api/timetable/:id
const updateTimetable = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { department_id, subject_id, faculty_id, day, period, room, semester, academic_year, section, program_id, is_break, is_free, custom_label } = req.body;

    const updates = [];
    const params = [];

    if (department_id !== undefined) { updates.push('department_id = ?'); params.push(department_id); }
    if (subject_id !== undefined) { updates.push('subject_id = ?'); params.push(subject_id); }
    if (faculty_id !== undefined) { updates.push('faculty_id = ?'); params.push(faculty_id); }
    if (day) { updates.push('day = ?'); params.push(day); }
    if (period) { updates.push('period = ?'); params.push(period); }
    if (room !== undefined) { updates.push('room = ?'); params.push(room); }
    if (semester !== undefined) { updates.push('semester = ?'); params.push(semester); }
    if (academic_year !== undefined) { updates.push('academic_year = ?'); params.push(academic_year); }
    if (section !== undefined) { updates.push('section = ?'); params.push(section); }
    if (program_id !== undefined) { updates.push('program_id = ?'); params.push(program_id); }
    if (is_break !== undefined) { updates.push('is_break = ?'); params.push(is_break ? 1 : 0); }
    if (is_free !== undefined) { updates.push('is_free = ?'); params.push(is_free ? 1 : 0); }
    if (custom_label !== undefined) { updates.push('custom_label = ?'); params.push(custom_label); }

    if (updates.length > 0) {
      params.push(id);
      const [result] = await db.query(`UPDATE timetables SET ${updates.join(', ')} WHERE id = ?`, params);
      if (result.affectedRows === 0) {
        return res.status(404).json({
          success: false,
          message: 'Timetable entry not found.'
        });
      }
    }

    return res.status(200).json({
      success: true,
      message: 'Timetable slot updated successfully.'
    });
  } catch (error) {
    next(error);
  }
};

// DELETE /api/timetable/:id
const deleteTimetable = async (req, res, next) => {
  try {
    const { id } = req.params;

    const [result] = await db.query('DELETE FROM timetables WHERE id = ?', [id]);
    if (result.affectedRows === 0) {
      return res.status(404).json({
        success: false,
        message: 'Timetable entry not found.'
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Timetable slot removed successfully.'
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getTimetables,
  getTimetableById,
  createTimetable,
  updateTimetable,
  deleteTimetable
};
