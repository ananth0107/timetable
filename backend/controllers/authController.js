const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../config/db');

/**
 * Generate JWT token
 */
const generateToken = (user) => {
  const secret = process.env.JWT_SECRET || 'academic_secret_jwt_key_2026_super_secure_voc';
  return jwt.sign(
    {
      id: user.id,
      email: user.email,
      role: user.role
    },
    secret,
    { expiresIn: '7d' }
  );
};

/**
 * POST /api/auth/register
 */
const register = async (req, res, next) => {
  try {
    const { name, email, password, role = 'faculty', department_id, designation, emp_id, phone } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: 'Name, email, and password are required fields.'
      });
    }

    const cleanEmail = email.trim().toLowerCase();

    // Check if user already exists
    const [existing] = await db.query('SELECT id FROM users WHERE email = ?', [cleanEmail]);
    if (existing.length > 0) {
      return res.status(400).json({
        success: false,
        message: 'An account with this email address already exists.'
      });
    }

    // Normalize role: staff -> faculty
    const normalizedRole = role === 'staff' ? 'faculty' : role;
    const hashedPassword = await bcrypt.hash(password, 10);

    const [result] = await db.query(
      `INSERT INTO users (name, email, password, role, department_id, designation, emp_id, phone, status)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, 'Active')`,
      [name.trim(), cleanEmail, hashedPassword, normalizedRole, department_id || null, designation || null, emp_id || null, phone || null]
    );

    const [userRows] = await db.query(
      `SELECT u.id, u.name, u.email, u.role, u.department_id, u.designation, u.emp_id, u.phone, u.avatar, u.status,
              d.name AS department_name, d.code AS dept_code
       FROM users u
       LEFT JOIN departments d ON u.department_id = d.id
       WHERE u.id = ?`,
      [result.insertId]
    );

    const user = userRows[0];
    const token = generateToken(user);

    const safeUser = {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role === 'faculty' ? 'staff' : user.role,
      department: user.department_name || 'Department of Computer Science',
      deptCode: user.dept_code || 'CS',
      designation: user.designation,
      empId: user.emp_id,
      phone: user.phone,
      avatar: user.avatar,
      status: user.status
    };

    return res.status(201).json({
      success: true,
      message: 'Account registered successfully.',
      token,
      user: safeUser
    });
  } catch (error) {
    next(error);
  }
};

/**
 * POST /api/auth/login
 */
const login = async (req, res, next) => {
  try {
    const { email, password, role } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: 'Please provide both email and password.'
      });
    }

    const cleanEmail = email.trim().toLowerCase();

    // Query user by email
    const [rows] = await db.query(
      `SELECT u.id, u.name, u.email, u.password, u.role, u.department_id, u.designation, u.emp_id, u.phone, u.avatar, u.status,
              d.name AS department_name, d.code AS dept_code
       FROM users u
       LEFT JOIN departments d ON u.department_id = d.id
       WHERE u.email = ?`,
      [cleanEmail]
    );

    let user = rows[0];

    if (!user) {
      // Fallback: If demo login clicked by role (e.g. staff/hod/admin) and matching email exists
      const targetRole = role === 'staff' ? 'faculty' : role;
      if (targetRole) {
        const [roleRows] = await db.query(
          `SELECT u.id, u.name, u.email, u.password, u.role, u.department_id, u.designation, u.emp_id, u.phone, u.avatar, u.status,
                  d.name AS department_name, d.code AS dept_code
           FROM users u
           LEFT JOIN departments d ON u.department_id = d.id
           WHERE u.role = ?
           LIMIT 1`,
          [targetRole]
        );
        if (roleRows.length > 0) {
          user = roleRows[0];
        }
      }
    }

    if (!user) {
      return res.status(401).json({
        success: false,
        message: 'Invalid credentials. User not found.'
      });
    }

    if (user.status === 'Inactive') {
      return res.status(403).json({
        success: false,
        message: 'Account is deactivated. Please contact the administrator.'
      });
    }

    // Verify password with bcrypt
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: 'Invalid password. Please check your credentials.'
      });
    }

    const token = generateToken(user);

    const safeUser = {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role === 'faculty' ? 'staff' : user.role,
      department: user.department_name || 'Department of Computer Science',
      deptCode: user.dept_code || 'CS',
      designation: user.designation,
      empId: user.emp_id,
      phone: user.phone,
      avatar: user.avatar,
      status: user.status
    };

    return res.status(200).json({
      success: true,
      message: 'Authentication successful.',
      token,
      user: safeUser
    });
  } catch (error) {
    next(error);
  }
};

/**
 * GET /api/auth/me
 */
const getMe = async (req, res, next) => {
  try {
    return res.status(200).json({
      success: true,
      user: req.user
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  register,
  login,
  getMe
};
