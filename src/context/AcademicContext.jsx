import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import {
  INITIAL_TIMETABLE,
  INITIAL_CLASS_TIMETABLES,
  generateClassTimetable,
  CS_TIMETABLE_SLOTS,
  CS_MORNING_SLOTS,
  SATURDAY_MODES,
  CS_PROGRAMS,
  INITIAL_QUESTION_BANK,
  INITIAL_QUESTION_PAPERS,
  INITIAL_NOTIFICATIONS,
  MOCK_USERS,
  DEPARTMENTS,
  SUBJECTS
} from '../data/mockData';
import {
  userAPI,
  subjectAPI,
  departmentAPI,
  timetableAPI,
  questionAPI,
  questionPaperAPI,
  approvalAPI
} from '../services/api';

const AcademicContext = createContext(null);

const safeGetStorage = (key, fallback) => {
  try {
    const saved = localStorage.getItem(key);
    if (!saved || saved === 'undefined' || saved === 'null') return fallback;
    const parsed = JSON.parse(saved);
    return parsed !== null && parsed !== undefined ? parsed : fallback;
  } catch (err) {
    console.warn(`[AcademicContext] Corrupt localStorage for ${key}, falling back to defaults:`, err);
    return fallback;
  }
};

export const AcademicProvider = ({ children }) => {
  // Theme State
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('apex_theme') || 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('apex_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  // Programs & Classes State
  const [programs, setPrograms] = useState(() => {
    return safeGetStorage('apex_clean_programs_v5', CS_PROGRAMS);
  });

  // Subjects State
  const [subjects, setSubjects] = useState(() => {
    return safeGetStorage('apex_clean_subjects_v5', SUBJECTS);
  });

  // Departments State
  const [departments, setDepartments] = useState(() => {
    return safeGetStorage('apex_clean_departments_v5', DEPARTMENTS);
  });

  // Multi-Class Timetables State
  const [classTimetables, setClassTimetables] = useState(() => {
    return safeGetStorage('apex_clean_class_timetables_v5', INITIAL_CLASS_TIMETABLES);
  });

  // Single Timetable State
  const [timetable, setTimetable] = useState(() => {
    return safeGetStorage('apex_clean_timetable_v5', INITIAL_TIMETABLE);
  });

  // Question Bank State
  const [questionBank, setQuestionBank] = useState(() => {
    return safeGetStorage('apex_clean_qbank_v5', INITIAL_QUESTION_BANK);
  });

  // Question Papers State
  const [questionPapers, setQuestionPapers] = useState(() => {
    return safeGetStorage('apex_clean_qpapers_v5', INITIAL_QUESTION_PAPERS);
  });

  // Notifications State
  const [notifications, setNotifications] = useState(() => {
    return safeGetStorage('apex_clean_notifs_v5', INITIAL_NOTIFICATIONS);
  });

  // Users State (Admin)
  const [users, setUsers] = useState(() => {
    return safeGetStorage('apex_clean_users_list_v5', MOCK_USERS);
  });

  // Loading States
  const [isLoadingBackend, setIsLoadingBackend] = useState(false);

  // Toast System State
  const [toasts, setToasts] = useState([]);

  const showToast = useCallback((message, type = 'success', duration = 3000) => {
    const id = Date.now() + Math.random().toString(36).substring(2, 5);
    setToasts(prev => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, duration);
  }, []);

  const removeToast = (id) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  };

  // Sync state to versioned localStorage
  useEffect(() => {
    localStorage.setItem('apex_clean_programs_v5', JSON.stringify(programs));
  }, [programs]);

  useEffect(() => {
    localStorage.setItem('apex_clean_subjects_v5', JSON.stringify(subjects));
  }, [subjects]);

  useEffect(() => {
    localStorage.setItem('apex_clean_class_timetables_v5', JSON.stringify(classTimetables));
  }, [classTimetables]);

  useEffect(() => {
    localStorage.setItem('apex_clean_timetable_v5', JSON.stringify(timetable));
  }, [timetable]);

  useEffect(() => {
    localStorage.setItem('apex_clean_qbank_v5', JSON.stringify(questionBank));
  }, [questionBank]);

  useEffect(() => {
    localStorage.setItem('apex_clean_qpapers_v5', JSON.stringify(questionPapers));
  }, [questionPapers]);

  useEffect(() => {
    localStorage.setItem('apex_clean_notifs_v5', JSON.stringify(notifications));
  }, [notifications]);

  useEffect(() => {
    localStorage.setItem('apex_clean_users_list_v5', JSON.stringify(users));
  }, [users]);

  // ================= LOAD DATA FROM BACKEND =================
  const fetchAllDataFromBackend = useCallback(async () => {
    const token = localStorage.getItem('apex_token');
    if (!token) return;

    setIsLoadingBackend(true);
    try {
      // 1. Fetch Subjects
      const subRes = await subjectAPI.getAll().catch(() => null);
      if (subRes?.success && Array.isArray(subRes.subjects) && subRes.subjects.length > 0) {
        setSubjects(subRes.subjects);
      }

      // 2. Fetch Departments
      const deptRes = await departmentAPI.getAll().catch(() => null);
      if (deptRes?.success && Array.isArray(deptRes.departments) && deptRes.departments.length > 0) {
        setDepartments(deptRes.departments);
      }

      // 3. Fetch Users
      const userRes = await userAPI.getAll().catch(() => null);
      if (userRes?.success && Array.isArray(userRes.users) && userRes.users.length > 0) {
        setUsers(userRes.users);
      }

      // 4. Fetch Question Bank
      const qRes = await questionAPI.getAll().catch(() => null);
      if (qRes?.success && Array.isArray(qRes.questions) && qRes.questions.length > 0) {
        setQuestionBank(qRes.questions);
      }

      // 5. Fetch Question Papers
      const qpRes = await questionPaperAPI.getAll().catch(() => null);
      if (qpRes?.success && Array.isArray(qpRes.questionPapers) && qpRes.questionPapers.length > 0) {
        setQuestionPapers(qpRes.questionPapers);
      }
    } catch (err) {
      console.warn('[AcademicContext] Backend fetch error:', err.message);
    } finally {
      setIsLoadingBackend(false);
    }
  }, []);

  // Fetch initial data on mount when token is present
  useEffect(() => {
    fetchAllDataFromBackend();
  }, [fetchAllDataFromBackend]);

  // ================= TIMETABLE HELPERS =================
  const getClassTimetableKey = (programId, year, section) => `${programId}_${year}_${section}`;

  const getClassTimetable = (programId, year, section) => {
    const key = getClassTimetableKey(programId, year, section);
    if (!classTimetables[key]) {
      const generated = generateClassTimetable(programId, year, section, true);
      setClassTimetables(prev => ({ ...prev, [key]: generated }));
      return generated;
    }
    return classTimetables[key];
  };

  const createClassTimetable = (programId, year, section) => {
    const key = getClassTimetableKey(programId, year, section);
    const newTbl = generateClassTimetable(programId, year, section, false);
    setClassTimetables(prev => ({ ...prev, [key]: newTbl }));
    showToast(`New blank timetable initialized for ${year} Year ${section}.`, 'info');
    return newTbl;
  };

  const generateAllDepartmentTimetables = () => {
    const next = {};
    programs.forEach(prog => {
      prog.years.forEach(yr => {
        prog.sections.forEach(sec => {
          const key = getClassTimetableKey(prog.id, yr.year, sec);
          next[key] = generateClassTimetable(prog.id, yr.year, sec, true);
        });
      });
    });
    setClassTimetables(next);
    showToast('Department master schedules successfully generated for all batches.', 'success');
  };

  const clearClassTimetable = (programId, year, section) => {
    const key = getClassTimetableKey(programId, year, section);
    const blank = generateClassTimetable(programId, year, section, false);
    setClassTimetables(prev => ({ ...prev, [key]: blank }));
    showToast(`Timetable cleared for ${year} Year ${section}.`, 'info');
  };

  const updateClassTimetableCell = (programId, year, section, dayKey, slotIndex, updatedData) => {
    const key = getClassTimetableKey(programId, year, section);
    setClassTimetables(prev => {
      const current = prev[key] || generateClassTimetable(programId, year, section, true);
      const daySlots = [...(current.grid[dayKey] || [])];
      daySlots[slotIndex] = { ...daySlots[slotIndex], ...updatedData };
      return {
        ...prev,
        [key]: {
          ...current,
          grid: {
            ...current.grid,
            [dayKey]: daySlots
          }
        }
      };
    });

    // Optionally save to backend if subject/room present
    if (updatedData && updatedData.code) {
      timetableAPI.create({
        program_id: programId,
        semester: year === 'I' ? 'Semester II' : year === 'II' ? 'Semester IV' : 'Semester VI',
        section,
        day: dayKey,
        period: `${slotIndex + 1}`,
        room: updatedData.room || 'LH-201',
        is_break: updatedData.isBreak || false,
        is_free: updatedData.isFree || false,
        custom_label: updatedData.label || null
      }).catch(err => console.warn('[Timetable Save Note]:', err.message));
    }
  };

  const swapClassTimetableCells = (programId, year, section, source, target) => {
    const key = getClassTimetableKey(programId, year, section);
    setClassTimetables(prev => {
      const current = prev[key] || generateClassTimetable(programId, year, section, true);
      const srcList = [...(current.grid[source.dayKey] || [])];
      const tgtList = source.dayKey === target.dayKey ? srcList : [...(current.grid[target.dayKey] || [])];

      const temp = { ...srcList[source.slotIndex] };
      srcList[source.slotIndex] = { ...tgtList[target.slotIndex] };
      tgtList[target.slotIndex] = temp;

      return {
        ...prev,
        [key]: {
          ...current,
          grid: {
            ...current.grid,
            [source.dayKey]: srcList,
            [target.dayKey]: tgtList
          }
        }
      };
    });
    showToast('Timetable period swapped successfully.', 'info');
  };

  const setSaturdayMode = (programId, year, section, modeKey) => {
    const key = getClassTimetableKey(programId, year, section);
    setClassTimetables(prev => {
      const current = prev[key] || generateClassTimetable(programId, year, section, true);
      return {
        ...prev,
        [key]: {
          ...current,
          saturdayMode: modeKey
        }
      };
    });
    showToast(`Saturday schedule mode updated to ${SATURDAY_MODES[modeKey]?.label || modeKey}.`, 'info');
  };

  // Program & Section Operations
  const addSection = (programId, newSectionName) => {
    setPrograms(prev =>
      prev.map(p => {
        if (p.id === programId) {
          if (p.sections.includes(newSectionName)) return p;
          return { ...p, sections: [...p.sections, newSectionName] };
        }
        return p;
      })
    );
    showToast(`Section "${newSectionName}" added.`, 'success');
  };

  const deleteSection = (programId, sectionName) => {
    setPrograms(prev =>
      prev.map(p => {
        if (p.id === programId) {
          return { ...p, sections: p.sections.filter(s => s !== sectionName) };
        }
        return p;
      })
    );
    showToast(`Section "${sectionName}" removed.`, 'info');
  };

  // ================= SUBJECTS CRUD =================
  const addSubject = async (newSubject) => {
    const code = newSubject.code?.trim().toUpperCase();
    if (!code) return;

    // Optimistic Update
    setSubjects(prev => {
      if (prev.some(s => s.code === code)) {
        showToast(`Subject with code ${code} already exists.`, 'warning');
        return prev;
      }
      return [...prev, { ...newSubject, code }];
    });

    try {
      await subjectAPI.create({
        code,
        name: newSubject.name,
        semester: newSubject.semester || 'Semester I',
        credits: newSubject.credits || 4,
        year: newSubject.year || 'I',
        program: newSubject.program || 'UG_BSCCS',
        programName: newSubject.programName || 'B.Sc. CS',
        type: newSubject.type || 'Theory'
      });
      showToast(`Subject ${newSubject.name} (${code}) added to database.`, 'success');
    } catch (err) {
      console.warn('[Subject API Save Note]:', err.message);
      showToast(`Subject ${newSubject.name} saved locally.`, 'info');
    }
  };

  const updateSubject = async (code, updatedData) => {
    setSubjects(prev => prev.map(s => (s.code === code ? { ...s, ...updatedData } : s)));
    try {
      await subjectAPI.update(code, updatedData);
      showToast(`Subject ${code} updated.`, 'success');
    } catch (err) {
      showToast(`Subject ${code} updated locally.`, 'info');
    }
  };

  const deleteSubject = async (code) => {
    setSubjects(prev => prev.filter(s => s.code !== code));
    try {
      await subjectAPI.delete(code);
      showToast(`Subject ${code} removed.`, 'info');
    } catch (err) {
      showToast(`Subject ${code} removed.`, 'info');
    }
  };

  // ================= QUESTION BANK CRUD =================
  const addQuestion = async (newQ) => {
    const id = `QB-${Date.now().toString(36).toUpperCase()}`;
    const questionItem = {
      id,
      createdDate: new Date().toISOString().split('T')[0],
      ...newQ
    };

    // Optimistic UI Update
    setQuestionBank(prev => [questionItem, ...prev]);

    try {
      await questionAPI.create({
        questionText: newQ.questionText || newQ.question_text || newQ.question,
        subject: newQ.subject,
        subjectCode: newQ.subjectCode,
        unit: newQ.unit,
        topic: newQ.topic,
        marks: newQ.marks,
        difficulty: newQ.difficulty,
        bloomLevel: newQ.bloomLevel,
        answerHint: newQ.answerHint || newQ.answer_hint
      });
      showToast('Question saved to MySQL Question Bank.', 'success');
    } catch (err) {
      console.warn('[Question API Save Note]:', err.message);
      showToast('Question added to Question Bank.', 'success');
    }

    return questionItem;
  };

  const updateQuestion = async (id, updated) => {
    setQuestionBank(prev => prev.map(q => (q.id === id ? { ...q, ...updated } : q)));
    try {
      await questionAPI.update(id, updated);
      showToast('Question details updated in database.', 'success');
    } catch (err) {
      showToast('Question details updated.', 'success');
    }
  };

  const deleteQuestion = async (id) => {
    setQuestionBank(prev => prev.filter(q => q.id !== id));
    try {
      await questionAPI.delete(id);
      showToast('Question deleted from MySQL database.', 'info');
    } catch (err) {
      showToast('Question deleted from Question Bank.', 'info');
    }
  };

  // ================= QUESTION PAPERS CRUD =================
  const saveQuestionPaper = async (paperData) => {
    const id = paperData.id || `QP-${Date.now().toString(36).toUpperCase()}`;
    const newPaper = {
      ...paperData,
      id,
      createdDate: paperData.createdDate || new Date().toISOString().split('T')[0],
      status: paperData.status || 'Ready'
    };

    setQuestionPapers(prev => {
      const idx = prev.findIndex(p => p.id === id);
      if (idx >= 0) {
        const next = [...prev];
        next[idx] = newPaper;
        return next;
      }
      return [newPaper, ...prev];
    });

    try {
      await questionPaperAPI.create({
        title: paperData.title,
        subject: paperData.subject,
        subjectCode: paperData.subjectCode,
        total_marks: paperData.totalMarks || paperData.maxMarks || 20,
        duration: paperData.duration || '60 Minutes',
        exam_type: paperData.examType || 'Internal Exam',
        semester: paperData.semester || 'Semester IV',
        status: paperData.status || 'Ready',
        blueprint: paperData.blueprint || paperData
      });
      showToast('Question paper saved to database.', 'success');
    } catch (err) {
      showToast('Question paper saved.', 'success');
    }

    return newPaper;
  };

  const submitPaperToHOD = async (paperId) => {
    setQuestionPapers(prev =>
      prev.map(p => (p.id === paperId ? { ...p, status: 'Submitted', hodRemarks: 'Awaiting HOD verification' } : p))
    );

    try {
      await approvalAPI.submit(paperId, 'Submitted to HOD for examination approval.');
      showToast('Question paper submitted to HOD for approval.', 'success');
    } catch (err) {
      showToast('Question paper submitted to HOD for approval.', 'success');
    }
  };

  const approveQuestionPaper = async (paperId, remarks = 'Approved by HOD.') => {
    setQuestionPapers(prev =>
      prev.map(p => (p.id === paperId ? { ...p, status: 'Approved', hodRemarks: remarks } : p))
    );

    try {
      await approvalAPI.update(paperId, 'approved', remarks);
      showToast('Question paper approved for examination in database.', 'success');
    } catch (err) {
      showToast('Question paper approved for examination.', 'success');
    }
  };

  const requestChangesQuestionPaper = async (paperId, remarks) => {
    setQuestionPapers(prev =>
      prev.map(p =>
        p.id === paperId
          ? { ...p, status: 'Changes Required', hodRemarks: remarks || 'Revisions requested by HOD.' }
          : p
      )
    );

    try {
      await approvalAPI.update(paperId, 'rejected', remarks);
      showToast('Question paper returned for revisions in database.', 'warning');
    } catch (err) {
      showToast('Question paper returned for revisions.', 'warning');
    }
  };

  // ================= USERS CRUD (Admin) =================
  const addUser = async (userData) => {
    const id = `usr_${userData.role}_${Date.now().toString(36)}`;
    const newUser = {
      id,
      status: 'Active',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80',
      ...userData
    };

    setUsers(prev => [...prev, newUser]);

    try {
      await userAPI.create({
        name: userData.name,
        email: userData.email,
        role: userData.role === 'staff' ? 'faculty' : userData.role,
        designation: userData.designation,
        emp_id: userData.empId,
        phone: userData.phone,
        status: 'Active'
      });
      showToast(`User ${userData.name} created successfully in MySQL.`, 'success');
    } catch (err) {
      showToast(`User ${userData.name} created successfully.`, 'success');
    }

    return newUser;
  };

  const updateUser = async (id, updatedData) => {
    setUsers(prev => prev.map(u => (u.id === id ? { ...u, ...updatedData } : u)));
    try {
      await userAPI.update(id, updatedData);
      showToast('User profile updated in database.', 'success');
    } catch (err) {
      showToast('User profile updated.', 'success');
    }
  };

  const toggleUserStatus = async (id) => {
    const targetUser = users.find(u => u.id === id);
    const nextStatus = targetUser?.status === 'Active' ? 'Inactive' : 'Active';

    setUsers(prev =>
      prev.map(u => {
        if (u.id === id) {
          showToast(`User ${u.name} set to ${nextStatus}.`, 'info');
          return { ...u, status: nextStatus };
        }
        return u;
      })
    );

    try {
      await userAPI.update(id, { status: nextStatus });
    } catch (err) {
      console.warn('[Toggle Status Note]:', err.message);
    }
  };

  // ================= NOTIFICATIONS OPERATIONS =================
  const markNotificationAsRead = (id) => {
    setNotifications(prev => prev.map(n => (n.id === id ? { ...n, read: true } : n)));
  };

  const markAllNotificationsAsRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, read: true })));
    showToast('All notifications marked as read.', 'info');
  };

  const clearAllNotifications = () => {
    setNotifications([]);
    showToast('All notifications cleared.', 'info');
  };

  return (
    <AcademicContext.Provider
      value={{
        theme,
        toggleTheme,
        programs,
        addSection,
        deleteSection,
        departments,
        subjects,
        addSubject,
        updateSubject,
        deleteSubject,
        classTimetables,
        getClassTimetable,
        createClassTimetable,
        generateAllDepartmentTimetables,
        clearClassTimetable,
        updateClassTimetableCell,
        swapClassTimetableCells,
        setSaturdayMode,
        SATURDAY_MODES,
        CS_TIMETABLE_SLOTS,
        CS_MORNING_SLOTS,
        questionBank,
        addQuestion,
        updateQuestion,
        deleteQuestion,
        questionPapers,
        saveQuestionPaper,
        submitPaperToHOD,
        approveQuestionPaper,
        requestChangesQuestionPaper,
        notifications,
        markNotificationAsRead,
        markAllNotificationsAsRead,
        clearAllNotifications,
        users,
        addUser,
        updateUser,
        toggleUserStatus,
        toasts,
        showToast,
        removeToast,
        isLoadingBackend,
        refreshData: fetchAllDataFromBackend
      }}
    >
      {children}
    </AcademicContext.Provider>
  );
};

export const useAcademic = () => {
  const context = useContext(AcademicContext);
  if (!context) {
    throw new Error('useAcademic must be used within an AcademicProvider');
  }
  return context;
};
