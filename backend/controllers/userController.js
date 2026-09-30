const bcrypt = require('bcryptjs');
const db = require('../config/db');

// GET /api/users
const getUsers = async (req, res, next) => {
  try {
    const { role, department_id, search } = req.query;

    let query = `
      SELECT u.id, u.name, u.email, u.role, u.department_id, u.designation, u.emp_id, u.phone, u.avatar, u.status, u.created_at,
             d.name AS department_name, d.code AS dept_code
      FROM users u
      LEFT JOIN departments d ON u.department_id = d.id
      WHERE 1=1
    `;
    const params = [];

    if (role) {
      const normRole = role === 'staff' ? 'faculty' : role;
      query += ` AND (u.role = ? OR (u.role = 'faculty' AND ? = 'staff'))`;
      params.push(normRole, role);
    }

    if (department_id) {
      query += ` AND u.department_id = ?`;
      params.push(department_id);
    }

    if (search) {
      query += ` AND (u.name LIKE ? OR u.email LIKE ? OR u.emp_id LIKE ?)`;
      params.push(`%${search}%`, `%${search}%`, `%${search}%`);
    }

    query += ` ORDER BY u.created_at DESC`;

    const [rows] = await db.query(query, params);

    const formattedUsers = rows.map(u => ({
      id: u.id,
      name: u.name,
      email: u.email,
      role: u.role === 'faculty' ? 'staff' : u.role,
      department: u.department_name || 'Department of Computer Science',
      deptCode: u.dept_code || 'CS',
      designation: u.designation,
      empId: u.emp_id,
      phone: u.phone,
      avatar: u.avatar,
      status: u.status,
      assignedSubjects: []
    }));

    return res.status(200).json({
      success: true,
      count: formattedUsers.length,
      users: formattedUsers
    });
  } catch (error) {
    next(error);
  }
};

// GET /api/users/:id
const getUserById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const [rows] = await db.query(
      `SELECT u.id, u.name, u.email, u.role, u.department_id, u.designation, u.emp_id, u.phone, u.avatar, u.status, u.created_at,
              d.name AS department_name, d.code AS dept_code
       FROM users u
       LEFT JOIN departments d ON u.department_id = d.id
       WHERE u.id = ?`,
      [id]
    );

    if (rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'User not found.'
      });
    }

    const u = rows[0];
    return res.status(200).json({
      success: true,
      user: {
        id: u.id,
        name: u.name,
        email: u.email,
        role: u.role === 'faculty' ? 'staff' : u.role,
        department: u.department_name || 'Department of Computer Science',
        deptCode: u.dept_code || 'CS',
        designation: u.designation,
        empId: u.emp_id,
        phone: u.phone,
        avatar: u.avatar,
        status: u.status
      }
    });
  } catch (error) {
    next(error);
  }
};

// POST /api/users
const createUser = async (req, res, next) => {
  try {
    const { name, email, password = 'faculty123', role = 'faculty', department_id, designation, emp_id, phone, status = 'Active' } = req.body;

    if (!name || !email) {
      return res.status(400).json({
        success: false,
        message: 'Name and email are required.'
      });
    }

    const cleanEmail = email.trim().toLowerCase();
    const [existing] = await db.query('SELECT id FROM users WHERE email = ?', [cleanEmail]);
    if (existing.length > 0) {
      return res.status(400).json({
        success: false,
        message: 'User with this email already exists.'
      });
    }

    const normalizedRole = role === 'staff' ? 'faculty' : role;
    const hashedPassword = await bcrypt.hash(password, 10);

    const [result] = await db.query(
      `INSERT INTO users (name, email, password, role, department_id, designation, emp_id, phone, status)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [name.trim(), cleanEmail, hashedPassword, normalizedRole, department_id || 1, designation || 'Assistant Professor', emp_id || null, phone || null, status]
    );

    return res.status(201).json({
      success: true,
      message: 'User created successfully.',
      userId: result.insertId
    });
  } catch (error) {
    next(error);
  }
};

// PUT /api/users/:id
const updateUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, email, role, department_id, designation, emp_id, phone, status, password } = req.body;

    const [existing] = await db.query('SELECT id, password FROM users WHERE id = ?', [id]);
    if (existing.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'User not found.'
      });
    }

    const updates = [];
    const params = [];

    if (name) { updates.push('name = ?'); params.push(name.trim()); }
    if (email) { updates.push('email = ?'); params.push(email.trim().toLowerCase()); }
    if (role) { updates.push('role = ?'); params.push(role === 'staff' ? 'faculty' : role); }
    if (department_id !== undefined) { updates.push('department_id = ?'); params.push(department_id); }
    if (designation !== undefined) { updates.push('designation = ?'); params.push(designation); }
    if (emp_id !== undefined) { updates.push('emp_id = ?'); params.push(emp_id); }
    if (phone !== undefined) { updates.push('phone = ?'); params.push(phone); }
    if (status) { updates.push('status = ?'); params.push(status); }
    if (password) {
      const hashed = await bcrypt.hash(password, 10);
      updates.push('password = ?');
      params.push(hashed);
    }

    if (updates.length > 0) {
      params.push(id);
      await db.query(`UPDATE users SET ${updates.join(', ')} WHERE id = ?`, params);
    }

    return res.status(200).json({
      success: true,
      message: 'User profile updated successfully.'
    });
  } catch (error) {
    next(error);
  }
};

// DELETE /api/users/:id
const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;

    const [result] = await db.query('DELETE FROM users WHERE id = ?', [id]);
    if (result.affectedRows === 0) {
      return res.status(404).json({
        success: false,
        message: 'User not found.'
      });
    }

    return res.status(200).json({
      success: true,
      message: 'User deleted successfully.'
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
};
