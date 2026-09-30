// Frontend API Service Layer
// Communicates with Node.js + Express Backend at /api

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

/**
 * Core fetch wrapper with JWT header injection and standardized error handling
 */
async function request(endpoint, options = {}) {
  const url = `${API_BASE_URL}${endpoint.startsWith('/') ? endpoint : `/${endpoint}`}`;
  
  const token = localStorage.getItem('apex_token');
  const headers = {
    'Content-Type': 'application/json',
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
    ...options.headers
  };

  const config = {
    ...options,
    headers
  };

  if (config.body && typeof config.body === 'object' && !(config.body instanceof FormData)) {
    config.body = JSON.stringify(config.body);
  }

  try {
    const response = await fetch(url, config);
    const data = await response.json().catch(() => ({}));

    if (!response.ok) {
      const errorMsg = data.message || `Request failed with status ${response.status}`;
      const error = new Error(errorMsg);
      error.status = response.status;
      error.data = data;
      throw error;
    }

    return data;
  } catch (err) {
    if (err.name === 'TypeError' && err.message.includes('fetch')) {
      console.warn(`[API Network Error] Backend server might be offline at ${API_BASE_URL}`);
      throw new Error('Unable to connect to backend server. Please ensure the backend is running on port 5000.');
    }
    throw err;
  }
}

// 1. Authentication APIs
export const authAPI = {
  login: (email, password, role) =>
    request('/auth/login', {
      method: 'POST',
      body: { email, password, role }
    }),

  register: (userData) =>
    request('/auth/register', {
      method: 'POST',
      body: userData
    }),

  getMe: () =>
    request('/auth/me', {
      method: 'GET'
    })
};

// 2. User Management APIs
export const userAPI = {
  getAll: (params = {}) => {
    const query = new URLSearchParams(params).toString();
    return request(`/users${query ? `?${query}` : ''}`);
  },

  getById: (id) => request(`/users/${id}`),

  create: (userData) =>
    request('/users', {
      method: 'POST',
      body: userData
    }),

  update: (id, userData) =>
    request(`/users/${id}`, {
      method: 'PUT',
      body: userData
    }),

  delete: (id) =>
    request(`/users/${id}`, {
      method: 'DELETE'
    })
};

// 3. Department APIs
export const departmentAPI = {
  getAll: () => request('/departments'),
  getById: (id) => request(`/departments/${id}`),
  create: (data) =>
    request('/departments', {
      method: 'POST',
      body: data
    }),
  update: (id, data) =>
    request(`/departments/${id}`, {
      method: 'PUT',
      body: data
    }),
  delete: (id) =>
    request(`/departments/${id}`, {
      method: 'DELETE'
    })
};

// 4. Subject APIs
export const subjectAPI = {
  getAll: (params = {}) => {
    const query = new URLSearchParams(params).toString();
    return request(`/subjects${query ? `?${query}` : ''}`);
  },
  getById: (id) => request(`/subjects/${id}`),
  create: (data) =>
    request('/subjects', {
      method: 'POST',
      body: data
    }),
  update: (id, data) =>
    request(`/subjects/${id}`, {
      method: 'PUT',
      body: data
    }),
  delete: (id) =>
    request(`/subjects/${id}`, {
      method: 'DELETE'
    })
};

// 5. Timetable APIs
export const timetableAPI = {
  getAll: (params = {}) => {
    const query = new URLSearchParams(params).toString();
    return request(`/timetable${query ? `?${query}` : ''}`);
  },
  getById: (id) => request(`/timetable/${id}`),
  create: (data) =>
    request('/timetable', {
      method: 'POST',
      body: data
    }),
  update: (id, data) =>
    request(`/timetable/${id}`, {
      method: 'PUT',
      body: data
    }),
  delete: (id) =>
    request(`/timetable/${id}`, {
      method: 'DELETE'
    })
};

// 6. Question Bank & AI Question Generation APIs
export const questionAPI = {
  getAll: (params = {}) => {
    const query = new URLSearchParams(params).toString();
    return request(`/questions${query ? `?${query}` : ''}`);
  },
  getById: (id) => request(`/questions/${id}`),
  create: (data) =>
    request('/questions', {
      method: 'POST',
      body: data
    }),
  update: (id, data) =>
    request(`/questions/${id}`, {
      method: 'PUT',
      body: data
    }),
  delete: (id) =>
    request(`/questions/${id}`, {
      method: 'DELETE'
    }),
  
  // Google Gemini Question Generation Endpoint
  generateAI: (generationParams) =>
    request('/questions/generate', {
      method: 'POST',
      body: generationParams
    })
};

// 7. Question Paper Blueprint APIs
export const questionPaperAPI = {
  getAll: (params = {}) => {
    const query = new URLSearchParams(params).toString();
    return request(`/question-papers${query ? `?${query}` : ''}`);
  },
  getById: (id) => request(`/question-papers/${id}`),
  create: (data) =>
    request('/question-papers', {
      method: 'POST',
      body: data
    }),
  update: (id, data) =>
    request(`/question-papers/${id}`, {
      method: 'PUT',
      body: data
    }),
  delete: (id) =>
    request(`/question-papers/${id}`, {
      method: 'DELETE'
    }),
  addQuestion: (paperId, data) =>
    request(`/question-papers/${paperId}/questions`, {
      method: 'POST',
      body: data
    }),
  removeQuestion: (paperId, questionId) =>
    request(`/question-papers/${paperId}/questions/${questionId}`, {
      method: 'DELETE'
    })
};

// 8. Approval Workflow APIs
export const approvalAPI = {
  getAll: (params = {}) => {
    const query = new URLSearchParams(params).toString();
    return request(`/approvals${query ? `?${query}` : ''}`);
  },
  getById: (id) => request(`/approvals/${id}`),
  submit: (question_paper_id, comments) =>
    request('/approvals', {
      method: 'POST',
      body: { question_paper_id, comments }
    }),
  update: (id, status, comments) =>
    request(`/approvals/${id}`, {
      method: 'PUT',
      body: { status, comments }
    })
};

export default {
  auth: authAPI,
  users: userAPI,
  departments: departmentAPI,
  subjects: subjectAPI,
  timetable: timetableAPI,
  questions: questionAPI,
  questionPapers: questionPaperAPI,
  approvals: approvalAPI
};
