const authorizeRoles = (...allowedRoles) => {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: 'Authentication required.'
      });
    }

    // Normalize roles to handle 'faculty' / 'staff' interchangeably
    const userRole = (req.user.role || '').toLowerCase();
    const userDbRole = (req.user.dbRole || '').toLowerCase();
    const normalizedAllowed = allowedRoles.map(r => r.toLowerCase());

    const hasPermission =
      normalizedAllowed.includes(userRole) ||
      normalizedAllowed.includes(userDbRole) ||
      (normalizedAllowed.includes('staff') && (userRole === 'faculty' || userDbRole === 'faculty')) ||
      (normalizedAllowed.includes('faculty') && (userRole === 'staff' || userDbRole === 'staff'));

    if (!hasPermission) {
      return res.status(403).json({
        success: false,
        message: `Forbidden: Access restricted to [${allowedRoles.join(', ')}]. Current role: ${userRole}.`
      });
    }

    next();
  };
};

module.exports = { authorizeRoles };
