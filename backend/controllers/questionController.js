const db = require('../config/db');
const geminiService = require('../services/geminiService');

// GET /api/questions
const getQuestions = async (req, res, next) => {
  try {
    const { subject_id, subject_code, question_type, marks, difficulty, bloom_level, unit, search } = req.query;

    let query = `
      SELECT q.id, q.subject_id, q.question_text, q.question_type, q.marks, q.difficulty,
             q.bloom_level, q.unit, q.topic, q.answer_hint, q.created_by, q.created_at, q.updated_at,
             s.name AS subject_name, s.code AS subject_code,
             u.name AS author_name, u.email AS author_email
      FROM questions q
      LEFT JOIN subjects s ON q.subject_id = s.id
      LEFT JOIN users u ON q.created_by = u.id
      WHERE 1=1
    `;
    const params = [];

    if (subject_id) {
      query += ' AND q.subject_id = ?';
      params.push(subject_id);
    }

    if (subject_code) {
      query += ' AND s.code = ?';
      params.push(subject_code);
    }

    if (question_type && question_type !== 'All') {
      query += ' AND q.question_type = ?';
      params.push(question_type);
    }

    if (marks && marks !== 'All') {
      query += ' AND q.marks = ?';
      params.push(parseInt(marks, 10));
    }

    if (difficulty && difficulty !== 'All') {
      query += ' AND q.difficulty = ?';
      params.push(difficulty);
    }

    if (bloom_level && bloom_level !== 'All') {
      query += ' AND q.bloom_level LIKE ?';
      params.push(`%${bloom_level}%`);
    }

    if (unit && unit !== 'All') {
      query += ' AND q.unit = ?';
      params.push(unit);
    }

    if (search) {
      query += ' AND (q.question_text LIKE ? OR q.topic LIKE ? OR s.name LIKE ?)';
      params.push(`%${search}%`, `%${search}%`, `%${search}%`);
    }

    query += ' ORDER BY q.created_at DESC';

    const [rows] = await db.query(query, params);

    const formatted = rows.map(q => ({
      id: q.id,
      subjectId: q.subject_id,
      subject: q.subject_name || 'Database Management Systems',
      subjectCode: q.subject_code || 'CS301',
      unit: q.unit,
      topic: q.topic || q.unit,
      question: q.question_text,
      questionText: q.question_text,
      questionType: q.question_type,
      marks: q.marks,
      difficulty: q.difficulty,
      bloomLevel: q.bloom_level,
      author: q.author_name || 'Prof. Alan Davis',
      createdDate: q.created_at ? new Date(q.created_at).toISOString().split('T')[0] : '2026-03-20',
      answerHint: q.answer_hint
    }));

    return res.status(200).json({
      success: true,
      count: formatted.length,
      questions: formatted
    });
  } catch (error) {
    next(error);
  }
};

// GET /api/questions/:id
const getQuestionById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const [rows] = await db.query(
      `SELECT q.*, s.name AS subject_name, s.code AS subject_code, u.name AS author_name
       FROM questions q
       LEFT JOIN subjects s ON q.subject_id = s.id
       LEFT JOIN users u ON q.created_by = u.id
       WHERE q.id = ?`,
      [id]
    );

    if (rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'Question not found.'
      });
    }

    const q = rows[0];
    return res.status(200).json({
      success: true,
      question: {
        id: q.id,
        subjectId: q.subject_id,
        subject: q.subject_name,
        subjectCode: q.subject_code,
        unit: q.unit,
        topic: q.topic,
        question: q.question_text,
        questionText: q.question_text,
        questionType: q.question_type,
        marks: q.marks,
        difficulty: q.difficulty,
        bloomLevel: q.bloom_level,
        author: q.author_name,
        answerHint: q.answer_hint
      }
    });
  } catch (error) {
    next(error);
  }
};

// POST /api/questions
const createQuestion = async (req, res, next) => {
  try {
    const questionsInput = Array.isArray(req.body) ? req.body : [req.body];

    if (questionsInput.length === 0) {
      return res.status(400).json({
        success: false,
        message: 'No questions provided to insert.'
      });
    }

    const insertedIds = [];
    const userId = req.user?.id || 1;

    for (const q of questionsInput) {
      const text = q.questionText || q.question_text || q.question;
      if (!text) continue;

      let subjectId = q.subject_id || q.subjectId;
      if (!subjectId && (q.subjectCode || q.subject)) {
        const [subRows] = await db.query('SELECT id FROM subjects WHERE code = ? OR name = ? LIMIT 1', [q.subjectCode || q.subject, q.subject || q.subjectCode]);
        if (subRows.length > 0) subjectId = subRows[0].id;
      }
      if (!subjectId) subjectId = 1;

      const [result] = await db.query(
        `INSERT INTO questions (subject_id, question_text, question_type, marks, difficulty, bloom_level, unit, topic, answer_hint, created_by)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [
          subjectId,
          text.trim(),
          q.question_type || q.questionType || 'Short Answer',
          parseInt(q.marks, 10) || 5,
          q.difficulty || 'Medium',
          q.bloom_level || q.bloomLevel || 'Understand',
          q.unit || 'Unit 1',
          q.topic || 'General Concept',
          q.answer_hint || q.answerHint || q.hint || null,
          userId
        ]
      );
      insertedIds.push(result.insertId);
    }

    return res.status(201).json({
      success: true,
      message: `Successfully saved ${insertedIds.length} question(s) to Question Bank.`,
      insertedIds
    });
  } catch (error) {
    next(error);
  }
};

// PUT /api/questions/:id
const updateQuestion = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { questionText, question_text, question, question_type, questionType, marks, difficulty, bloom_level, bloomLevel, unit, topic, answer_hint, answerHint, subject_id } = req.body;

    const updates = [];
    const params = [];

    const text = questionText || question_text || question;
    if (text) { updates.push('question_text = ?'); params.push(text.trim()); }
    if (question_type || questionType) { updates.push('question_type = ?'); params.push(question_type || questionType); }
    if (marks !== undefined) { updates.push('marks = ?'); params.push(parseInt(marks, 10)); }
    if (difficulty) { updates.push('difficulty = ?'); params.push(difficulty); }
    if (bloom_level || bloomLevel) { updates.push('bloom_level = ?'); params.push(bloom_level || bloomLevel); }
    if (unit) { updates.push('unit = ?'); params.push(unit); }
    if (topic !== undefined) { updates.push('topic = ?'); params.push(topic); }
    if (answer_hint !== undefined || answerHint !== undefined) { updates.push('answer_hint = ?'); params.push(answer_hint || answerHint); }
    if (subject_id) { updates.push('subject_id = ?'); params.push(subject_id); }

    if (updates.length > 0) {
      params.push(id);
      const [result] = await db.query(`UPDATE questions SET ${updates.join(', ')} WHERE id = ?`, params);
      if (result.affectedRows === 0) {
        return res.status(404).json({
          success: false,
          message: 'Question not found.'
        });
      }
    }

    return res.status(200).json({
      success: true,
      message: 'Question details updated successfully.'
    });
  } catch (error) {
    next(error);
  }
};

// DELETE /api/questions/:id
const deleteQuestion = async (req, res, next) => {
  try {
    const { id } = req.params;

    const [result] = await db.query('DELETE FROM questions WHERE id = ?', [id]);
    if (result.affectedRows === 0) {
      return res.status(404).json({
        success: false,
        message: 'Question not found.'
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Question deleted from Question Bank successfully.'
    });
  } catch (error) {
    next(error);
  }
};

// POST /api/questions/generate (Gemini AI Question Generation)
const generateAIQuestions = async (req, res, next) => {
  try {
    const {
      subject = 'Database Management Systems',
      unit = 'Unit 1',
      questionType = 'Short Answer',
      difficulty = 'Medium',
      marks = 5,
      count = 5,
      bloomLevel = 'Understand',
      topic = ''
    } = req.body;

    const generated = await geminiService.generateQuestions({
      subject,
      unit,
      questionType,
      difficulty,
      marks: parseInt(marks, 10) || 5,
      count: parseInt(count, 10) || 5,
      bloomLevel,
      topic
    });

    return res.status(200).json({
      success: true,
      message: `Successfully generated ${generated.length} question(s) with Gemini AI.`,
      count: generated.length,
      questions: generated
    });
  } catch (error) {
    console.error('[Question Generation Error]:', error);
    return res.status(500).json({
      success: false,
      message: error.message || 'Unable to generate questions with AI.'
    });
  }
};

module.exports = {
  getQuestions,
  getQuestionById,
  createQuestion,
  updateQuestion,
  deleteQuestion,
  generateAIQuestions
};
