const express = require('express');
const router = express.Router();
const questionController = require('../controllers/questionController');
const { authenticateToken } = require('../middleware/authMiddleware');

// AI Question Generation API (Uses Google Gemini via Node backend)
router.post('/generate', authenticateToken, questionController.generateAIQuestions);

// Standard Question Bank CRUD APIs
router.get('/', authenticateToken, questionController.getQuestions);
router.get('/:id', authenticateToken, questionController.getQuestionById);
router.post('/', authenticateToken, questionController.createQuestion);
router.put('/:id', authenticateToken, questionController.updateQuestion);
router.delete('/:id', authenticateToken, questionController.deleteQuestion);

module.exports = router;
