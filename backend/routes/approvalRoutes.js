const express = require('express');
const router = express.Router();
const approvalController = require('../controllers/approvalController');
const { authenticateToken } = require('../middleware/authMiddleware');
const { authorizeRoles } = require('../middleware/roleMiddleware');

router.get('/', authenticateToken, approvalController.getApprovals);
router.get('/:id', authenticateToken, approvalController.getApprovalById);
router.post('/', authenticateToken, approvalController.createApproval);
router.put('/:id', authenticateToken, authorizeRoles('hod', 'admin'), approvalController.updateApproval);

module.exports = router;
