const express = require('express');
const router = express.Router();
const timetableController = require('../controllers/timetableController');
const { authenticateToken } = require('../middleware/authMiddleware');
const { authorizeRoles } = require('../middleware/roleMiddleware');

router.get('/', authenticateToken, timetableController.getTimetables);
router.get('/:id', authenticateToken, timetableController.getTimetableById);
router.post('/', authenticateToken, authorizeRoles('admin', 'hod'), timetableController.createTimetable);
router.put('/:id', authenticateToken, authorizeRoles('admin', 'hod'), timetableController.updateTimetable);
router.delete('/:id', authenticateToken, authorizeRoles('admin', 'hod'), timetableController.deleteTimetable);

module.exports = router;
