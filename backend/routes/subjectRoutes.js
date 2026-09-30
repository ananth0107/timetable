const express = require('express');
const router = express.Router();
const subjectController = require('../controllers/subjectController');
const { authenticateToken } = require('../middleware/authMiddleware');
const { authorizeRoles } = require('../middleware/roleMiddleware');

router.get('/', authenticateToken, subjectController.getSubjects);
router.get('/:id', authenticateToken, subjectController.getSubjectById);
router.post('/', authenticateToken, authorizeRoles('admin', 'hod'), subjectController.createSubject);
router.put('/:id', authenticateToken, authorizeRoles('admin', 'hod'), subjectController.updateSubject);
router.delete('/:id', authenticateToken, authorizeRoles('admin', 'hod'), subjectController.deleteSubject);

module.exports = router;
