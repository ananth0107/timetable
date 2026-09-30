const jwt = require('jsonwebtoken');
const db = require('../config/db');

const authenticateToken = async (req, res, next) => {
  try {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.startsWith('Bearer ') ? authHeader.split(' ')[1] : null;

    if (!token) {
      return res.status(401).json({
        success: false,
        message: 'Access token required. Please sign in.'
      });
    }

    const secret = process.env.JWT_SECRET || 'academic_secret_jwt_key_2026_super_secure_voc';

    jwt.verify(token, secret, async (err, decoded) => {
      if (err) {
        return res.status(401).json({
          success: false,
          message: 'Invalid or expired session token. Please sign in again.'
        });
      }

      // Fetch latest user details from database
      try {
        const [rows] = await db.query(
          `SELECT u.id, u.name, u.email, u.role, u.department_id, u.designation, u.emp_id, u.phone, u.avatar, u.status,
                  d.name AS department_name, d.code AS dept_code
           FROM users u
           LEFT JOIN departments d ON u.department_id = d.id
           WHERE u.id = ?`,
          [decoded.id]
        );

        if (rows.length === 0 || rows[0].status === 'Inactive') {
          return res.status(401).json({
            success: false,
            message: 'User account not found or deactivated.'
          });
        }

        const user = rows[0];
        req.user = {
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role === 'faculty' ? 'staff' : user.role, // normalize faculty/staff for compatibility
          dbRole: user.role,
          departmentId: user.department_id,
          department: user.department_name || 'Department of Computer Science',
          deptCode: user.dept_code || 'CS',
          designation: user.designation,
          empId: user.emp_id,
          phone: user.phone,
          avatar: user.avatar,
          status: user.status
        };

        next();
      } catch (dbErr) {
        console.error('[Auth Middleware DB Error]:', dbErr);
        return res.status(500).json({
          success: false,
          message: 'Database error during user verification.'
        });
      }
    });
  } catch (error) {
    console.error('[Auth Middleware Error]:', error);
    return res.status(500).json({
      success: false,
      message: 'Authentication processing error.'
    });
  }
};

module.exports = { authenticateToken };
