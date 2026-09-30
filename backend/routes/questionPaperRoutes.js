const express = require('express');
const router = express.Router();
const questionPaperController = require('../controllers/questionPaperController');
const { authenticateToken } = require('../middleware/authMiddleware');

router.get('/', authenticateToken, questionPaperController.getQuestionPapers);
router.get('/:id', authenticateToken, questionPaperController.getQuestionPaperById);
router.post('/', authenticateToken, questionPaperController.createQuestionPaper);
router.put('/:id', authenticateToken, questionPaperController.updateQuestionPaper);
router.delete('/:id', authenticateToken, questionPaperController.deleteQuestionPaper);

// Junction question additions / removals
router.post('/:id/questions', authenticateToken, questionPaperController.addQuestionToPaper);
router.delete('/:id/questions/:questionId', authenticateToken, questionPaperController.removeQuestionFromPaper);

module.exports = router;
