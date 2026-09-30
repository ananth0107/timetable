const db = require('../config/db');

// GET /api/departments
const getDepartments = async (req, res, next) => {
  try {
    const [rows] = await db.query(`
      SELECT d.id, d.name, d.code, d.created_at,
             COUNT(DISTINCT u.id) AS faculty_count,
             COUNT(DISTINCT s.id) AS subject_count
      FROM departments d
      LEFT JOIN users u ON u.department_id = d.id AND u.role IN ('faculty', 'hod')
      LEFT JOIN subjects s ON s.department_id = d.id
      GROUP BY d.id, d.name, d.code, d.created_at
      ORDER BY d.id ASC
    `);

    const departments = rows.map(d => ({
      id: d.id,
      name: d.name,
      deptCode: d.code,
      code: d.code,
      facultyCount: Number(d.faculty_count) || 0,
      studentCount: d.code === 'CS' ? 240 : 120,
      hod: 'Dr. M. Gomathinayagam',
      created_at: d.created_at
    }));

    return res.status(200).json({
      success: true,
      count: departments.length,
      departments
    });
  } catch (error) {
    next(error);
  }
};

// GET /api/departments/:id
const getDepartmentById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const [rows] = await db.query('SELECT * FROM departments WHERE id = ?', [id]);

    if (rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'Department not found.'
      });
    }

    return res.status(200).json({
      success: true,
      department: rows[0]
    });
  } catch (error) {
    next(error);
  }
};

// POST /api/departments
const createDepartment = async (req, res, next) => {
  try {
    const { name, code } = req.body;

    if (!name || !code) {
      return res.status(400).json({
        success: false,
        message: 'Department name and code are required.'
      });
    }

    const cleanCode = code.trim().toUpperCase();

    const [existing] = await db.query('SELECT id FROM departments WHERE code = ?', [cleanCode]);
    if (existing.length > 0) {
      return res.status(400).json({
        success: false,
        message: 'Department with this code already exists.'
      });
    }

    const [result] = await db.query(
      'INSERT INTO departments (name, code) VALUES (?, ?)',
      [name.trim(), cleanCode]
    );

    return res.status(201).json({
      success: true,
      message: 'Department created successfully.',
      departmentId: result.insertId
    });
  } catch (error) {
    next(error);
  }
};

// PUT /api/departments/:id
const updateDepartment = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, code } = req.body;

    const updates = [];
    const params = [];

    if (name) { updates.push('name = ?'); params.push(name.trim()); }
    if (code) { updates.push('code = ?'); params.push(code.trim().toUpperCase()); }

    if (updates.length > 0) {
      params.push(id);
      const [result] = await db.query(`UPDATE departments SET ${updates.join(', ')} WHERE id = ?`, params);
      if (result.affectedRows === 0) {
        return res.status(404).json({
          success: false,
          message: 'Department not found.'
        });
      }
    }

    return res.status(200).json({
      success: true,
      message: 'Department updated successfully.'
    });
  } catch (error) {
    next(error);
  }
};

// DELETE /api/departments/:id
const deleteDepartment = async (req, res, next) => {
  try {
    const { id } = req.params;

    const [result] = await db.query('DELETE FROM departments WHERE id = ?', [id]);
    if (result.affectedRows === 0) {
      return res.status(404).json({
        success: false,
        message: 'Department not found.'
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Department deleted successfully.'
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getDepartments,
  getDepartmentById,
  createDepartment,
  updateDepartment,
  deleteDepartment
};
