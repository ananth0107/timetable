const { GoogleGenerativeAI } = require('@google/generative-ai');

/**
 * Generate Questions using Google Gemini AI
 * @param {Object} params
 * @param {string} params.subject
 * @param {string} params.unit
 * @param {string} params.questionType - MCQ | Short Answer | Long Answer | Essay
 * @param {string} params.difficulty - Easy | Medium | Hard
 * @param {number} params.marks
 * @param {number} params.count
 * @param {string} params.bloomLevel - Remember | Understand | Apply | Analyze | Evaluate | Create
 * @param {string} [params.topic]
 * @returns {Promise<Array>} Array of generated questions
 */
async function generateQuestions(params) {
  const apiKey = process.env.GEMINI_API_KEY;
  const modelName = process.env.GEMINI_MODEL || 'gemini-1.5-flash';

  const {
    subject = 'Computer Science',
    unit = 'Unit 1',
    questionType = 'Short Answer',
    difficulty = 'Medium',
    marks = 5,
    count = 5,
    bloomLevel = 'Understand',
    topic = ''
  } = params;

  if (!apiKey || apiKey.trim() === '' || apiKey === 'your_gemini_api_key') {
    console.warn('[Gemini Service] GEMINI_API_KEY not configured. Falling back to intelligent curriculum template generator.');
    return generateCurriculumFallback(params);
  }

  try {
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: modelName });

    const prompt = `
You are an expert college professor and examination paper setter for higher education university curriculum.
Generate exactly ${count} academic examination question(s) matching the following specifications:

- Subject / Course: ${subject}
- Unit: ${unit}
${topic ? `- Topic Focus: ${topic}` : ''}
- Question Type: ${questionType} (MCQ / Short Answer / Long Answer / Essay)
- Marks per question: ${marks} Marks
- Difficulty Level: ${difficulty} (Easy / Medium / Hard)
- Bloom's Taxonomy Level: ${bloomLevel} (Remember / Understand / Apply / Analyze / Evaluate / Create)

CRITICAL INSTRUCTIONS:
1. Return strictly valid JSON ONLY. Do NOT include markdown code fences like \`\`\`json or \`\`\`. Do not include any conversational text.
2. The JSON structure MUST be an object with a "questions" array matching this exact schema:
{
  "questions": [
    {
      "question_text": "Detailed question text here",
      "question_type": "${questionType}",
      "marks": ${marks},
      "difficulty": "${difficulty}",
      "bloom_level": "${bloomLevel}",
      "unit": "${unit}",
      "topic": "${topic || unit}",
      "answer_hint": "Concise marking scheme or model answer summary"
    }
  ]
}
`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    let text = response.text();

    // Clean up potential markdown formatting from AI output
    text = text.trim();
    if (text.startsWith('```json')) {
      text = text.replace(/^```json\s*/, '').replace(/\s*```$/, '');
    } else if (text.startsWith('```')) {
      text = text.replace(/^```\s*/, '').replace(/\s*```$/, '');
    }

    const parsed = JSON.parse(text);

    if (!parsed || !Array.isArray(parsed.questions)) {
      throw new Error('Invalid JSON structure returned by Gemini API.');
    }

    // Validate and sanitize each question item
    const validatedQuestions = parsed.questions.map((q, idx) => ({
      question_text: q.question_text || `Question ${idx + 1} on ${subject} (${unit})`,
      question_type: q.question_type || questionType,
      marks: parseInt(q.marks, 10) || marks,
      difficulty: q.difficulty || difficulty,
      bloom_level: q.bloom_level || bloomLevel,
      unit: q.unit || unit,
      topic: q.topic || topic || `${unit} Concepts`,
      answer_hint: q.answer_hint || ''
    }));

    return validatedQuestions;
  } catch (err) {
    console.error('[Gemini API Error]:', err.message);
    console.warn('[Gemini Service] Falling back to structured academic questions.');
    return generateCurriculumFallback(params);
  }
}

/**
 * Intelligent Fallback Generator for offline or unconfigured API key scenarios
 */
function generateCurriculumFallback(params) {
  const {
    subject = 'Computer Science',
    unit = 'Unit 1',
    questionType = 'Short Answer',
    difficulty = 'Medium',
    marks = 5,
    count = 5,
    bloomLevel = 'Understand',
    topic = ''
  } = params;

  const questions = [];
  const samplePrompts = [
    `Explain the fundamental architecture and operational principles of ${topic || unit} in ${subject}.`,
    `Discuss the key advantages, constraints, and real-world implementation use cases for ${topic || unit}.`,
    `Analyze the step-by-step methodology used to solve problems in ${topic || unit} with an illustrative diagram.`,
    `Compare and contrast the primary mechanisms and protocols associated with ${topic || unit}.`,
    `Formulate an optimized solution demonstrating the application of ${topic || unit} in modern systems.`
  ];

  for (let i = 0; i < count; i++) {
    const text = samplePrompts[i % samplePrompts.length];
    questions.push({
      question_text: text,
      question_type: questionType,
      marks: parseInt(marks, 10) || 5,
      difficulty: difficulty,
      bloom_level: bloomLevel,
      unit: unit,
      topic: topic || `${unit} Core Concepts`,
      answer_hint: `Key criteria: Definitions (2M), Architectural explanation (2M), Practical illustration (${(parseInt(marks, 10) || 5) - 4}M).`
    });
  }

  return questions;
}

module.exports = {
  generateQuestions
};
