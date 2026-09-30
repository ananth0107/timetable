const express = require('express');
const router = express.Router();
const departmentController = require('../controllers/departmentController');
const { authenticateToken } = require('../middleware/authMiddleware');
const { authorizeRoles } = require('../middleware/roleMiddleware');

router.get('/', authenticateToken, departmentController.getDepartments);
router.get('/:id', authenticateToken, departmentController.getDepartmentById);
router.post('/', authenticateToken, authorizeRoles('admin'), departmentController.createDepartment);
router.put('/:id', authenticateToken, authorizeRoles('admin'), departmentController.updateDepartment);
router.delete('/:id', authenticateToken, authorizeRoles('admin'), departmentController.deleteDepartment);

module.exports = router;
