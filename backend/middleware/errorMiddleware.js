// Centralized Error Handling Middleware

const notFoundHandler = (req, res, next) => {
  res.status(404).json({
    success: false,
    message: `API endpoint not found: ${req.method} ${req.originalUrl}`
  });
};

const errorHandler = (err, req, res, next) => {
  console.error(`[Unhandled Error] ${req.method} ${req.url}:`, err);

  const statusCode = res.statusCode !== 200 ? res.statusCode : 500;
  
  // Safe user-friendly error response (never leak stack trace or internal passwords)
  res.status(statusCode).json({
    success: false,
    message: err.message || 'Internal server error occurred.',
    ...(process.env.NODE_ENV === 'development' && { errorType: err.name })
  });
};

module.exports = { notFoundHandler, errorHandler };
