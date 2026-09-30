// Clean Institutional Academic Dataset
// V.O. Chidambaram College, Tuticorin (MS University)
// Department of Computer Science

export const MOCK_USERS = [
  {
    id: 'usr_admin_1',
    name: 'Ananth',
    email: 'ananth19012007@gmail.com',
    role: 'admin',
    department: 'Central Academic Affairs',
    deptCode: 'ADMIN',
    designation: 'Chief Academic Registrar & Administrator',
    empId: 'ADM-SYS-001',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80',
    assignedSubjects: [],
    status: 'Active',
    phone: '+91 94431 00001'
  },
  {
    id: 'usr_hod_1',
    name: 'Dr. M. Gomathinayagam',
    email: 'gomathinayagam@gmail.com',
    role: 'hod',
    department: 'Department of Computer Science',
    deptCode: 'CS',
    designation: 'Professor & Head of Department',
    empId: 'HOD-CS-001',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
    assignedSubjects: ['CS401 - Artificial Intelligence', 'MCS101 - Advanced Data Structures'],
    status: 'Active',
    phone: '+91 94432 12345'
  },
  {
    id: 'usr_staff_1',
    name: 'Prof. Alan Davis',
    email: 'alan.davis@voccollege.edu.in',
    role: 'staff',
    department: 'Department of Computer Science',
    deptCode: 'CS',
    designation: 'Associate Professor',
    empId: 'FAC-CS-002',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    assignedSubjects: ['CS301 - Database Management Systems', 'CS101 - Programming in C'],
    status: 'Active',
    phone: '+91 94432 12346'
  },
  {
    id: 'usr_staff_2',
    name: 'Dr. K. Ramesh',
    email: 'ramesh.k@voccollege.edu.in',
    role: 'staff',
    department: 'Department of Computer Science',
    deptCode: 'CS',
    designation: 'Associate Professor',
    empId: 'FAC-CS-003',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    assignedSubjects: ['CS302 - Operating Systems', 'MCS202 - Distributed Databases'],
    status: 'Active',
    phone: '+91 94432 12347'
  },
  {
    id: 'usr_staff_3',
    name: 'Prof. Priya Sharma',
    email: 'priya.sharma@voccollege.edu.in',
    role: 'staff',
    department: 'Department of Computer Science',
    deptCode: 'CS',
    designation: 'Assistant Professor',
    empId: 'FAC-CS-004',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80',
    assignedSubjects: ['CS304 - Java Programming', 'CS306 - Web Technologies'],
    status: 'Active',
    phone: '+91 94432 12348'
  },
  {
    id: 'usr_staff_4',
    name: 'Prof. R. Senthil',
    email: 'senthil.r@voccollege.edu.in',
    role: 'staff',
    department: 'Department of Computer Science',
    deptCode: 'CS',
    designation: 'Assistant Professor',
    empId: 'FAC-CS-005',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
    assignedSubjects: ['CS303 - Python for Data Science', 'MCS301 - Deep Learning & NLP'],
    status: 'Active',
    phone: '+91 94432 12349'
  },
  {
    id: 'usr_staff_5',
    name: 'Dr. M. Meenakshi',
    email: 'meenakshi.m@voccollege.edu.in',
    role: 'staff',
    department: 'Department of Computer Science',
    deptCode: 'CS',
    designation: 'Assistant Professor',
    empId: 'FAC-CS-006',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80',
    assignedSubjects: ['CS305 - Computer Networks', 'MCS302 - Cryptography & Security'],
    status: 'Active',
    phone: '+91 94432 12350'
  },
  {
    id: 'usr_staff_6',
    name: 'Prof. David Wilson',
    email: 'david.wilson@voccollege.edu.in',
    role: 'staff',
    department: 'Department of Computer Science',
    deptCode: 'CS',
    designation: 'Assistant Professor',
    empId: 'FAC-CS-007',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80',
    assignedSubjects: ['CS102 - Digital Principles', 'CS402 - Cloud Computing & Security'],
    status: 'Active',
    phone: '+91 94432 12351'
  }
];

export const CS_PROGRAMS = [
  {
    id: 'UG_BSCCS',
    code: 'BSC_CS',
    name: 'B.Sc. Computer Science',
    degree: 'B.Sc.',
    level: 'Undergraduate (UG)',
    durationYears: 3,
    totalSemesters: 6,
    sections: ['Section A', 'Section B'],
    studentCount: 180,
    years: [
      { year: 'I', label: 'Year I', semesters: ['Semester I', 'Semester II'] },
      { year: 'II', label: 'Year II', semesters: ['Semester III', 'Semester IV'] },
      { year: 'III', label: 'Year III', semesters: ['Semester V', 'Semester VI'] }
    ]
  },
  {
    id: 'PG_MSCCS',
    code: 'MSC_CS',
    name: 'M.Sc. Computer Science',
    degree: 'M.Sc.',
    level: 'Postgraduate (PG)',
    durationYears: 2,
    totalSemesters: 4,
    sections: ['Section A', 'Section B'],
    studentCount: 60,
    years: [
      { year: 'I', label: 'Year I', semesters: ['Semester I', 'Semester II'] },
      { year: 'II', label: 'Year II', semesters: ['Semester III', 'Semester IV'] }
    ]
  }
];

export const DEPARTMENTS = [
  { id: 'CS_UG', name: 'B.Sc. Computer Science', deptCode: 'CS', facultyCount: 8, studentCount: 180, hod: 'Dr. M. Gomathinayagam' },
  { id: 'CS_PG', name: 'M.Sc. Computer Science', deptCode: 'CS', facultyCount: 6, studentCount: 60, hod: 'Dr. M. Gomathinayagam' }
];

export const SUBJECTS = [
  // --- B.Sc. Computer Science (UG Curriculum) ---
  { code: 'CS101', name: 'Programming in C & Data Structures', credits: 4, semester: 'Semester I', year: 'I', program: 'UG_BSCCS', programName: 'B.Sc. CS', dept: 'CS', faculty: 'Prof. Alan Davis', type: 'Theory + Lab' },
  { code: 'CS102', name: 'Digital Principles & Architecture', credits: 4, semester: 'Semester II', year: 'I', program: 'UG_BSCCS', programName: 'B.Sc. CS', dept: 'CS', faculty: 'Prof. David Wilson', type: 'Theory' },
  { code: 'CS201', name: 'Object Oriented Programming with C++', credits: 4, semester: 'Semester III', year: 'II', program: 'UG_BSCCS', programName: 'B.Sc. CS', dept: 'CS', faculty: 'Dr. M. Gomathinayagam', type: 'Theory + Lab' },
  { code: 'CS301', name: 'Database Management Systems', credits: 4, semester: 'Semester IV', year: 'II', program: 'UG_BSCCS', programName: 'B.Sc. CS', dept: 'CS', faculty: 'Prof. Alan Davis', type: 'Theory + Lab' },
  { code: 'CS302', name: 'Operating Systems', credits: 4, semester: 'Semester IV', year: 'II', program: 'UG_BSCCS', programName: 'B.Sc. CS', dept: 'CS', faculty: 'Dr. K. Ramesh', type: 'Theory' },
  { code: 'CS303', name: 'Python for Data Science', credits: 3, semester: 'Semester IV', year: 'II', program: 'UG_BSCCS', programName: 'B.Sc. CS', dept: 'CS', faculty: 'Prof. R. Senthil', type: 'Theory + Lab' },
  { code: 'CS304', name: 'Java Programming', credits: 4, semester: 'Semester IV', year: 'II', program: 'UG_BSCCS', programName: 'B.Sc. CS', dept: 'CS', faculty: 'Prof. Priya Sharma', type: 'Theory + Lab' },
  { code: 'CS305', name: 'Computer Networks', credits: 3, semester: 'Semester IV', year: 'II', program: 'UG_BSCCS', programName: 'B.Sc. CS', dept: 'CS', faculty: 'Dr. M. Meenakshi', type: 'Theory' },
  { code: 'CS306', name: 'Web Technologies', credits: 3, semester: 'Semester IV', year: 'II', program: 'UG_BSCCS', programName: 'B.Sc. CS', dept: 'CS', faculty: 'Prof. Priya Sharma', type: 'Theory + Lab' },
  { code: 'CS401', name: 'Artificial Intelligence & Expert Systems', credits: 4, semester: 'Semester VI', year: 'III', program: 'UG_BSCCS', programName: 'B.Sc. CS', dept: 'CS', faculty: 'Dr. M. Gomathinayagam', type: 'Theory' },
  { code: 'CS402', name: 'Cloud Computing & Security', credits: 4, semester: 'Semester VI', year: 'III', program: 'UG_BSCCS', programName: 'B.Sc. CS', dept: 'CS', faculty: 'Prof. David Wilson', type: 'Theory' },

  // --- M.Sc. Computer Science (PG Curriculum) ---
  { code: 'MCS101', name: 'Advanced Data Structures & Algorithms', credits: 4, semester: 'Semester I', year: 'I', program: 'PG_MSCCS', programName: 'M.Sc. CS', dept: 'CS', faculty: 'Dr. M. Gomathinayagam', type: 'Theory' },
  { code: 'MCS102', name: 'Advanced Java Enterprise Systems', credits: 4, semester: 'Semester I', year: 'I', program: 'PG_MSCCS', programName: 'M.Sc. CS', dept: 'CS', faculty: 'Prof. Priya Sharma', type: 'Theory + Lab' },
  { code: 'MCS201', name: 'Machine Learning & Neural Computing', credits: 4, semester: 'Semester II', year: 'I', program: 'PG_MSCCS', programName: 'M.Sc. CS', dept: 'CS', faculty: 'Dr. M. Gomathinayagam', type: 'Theory + Lab' },
  { code: 'MCS202', name: 'Distributed Databases & Big Data', credits: 4, semester: 'Semester II', year: 'I', program: 'PG_MSCCS', programName: 'M.Sc. CS', dept: 'CS', faculty: 'Dr. K. Ramesh', type: 'Theory' },
  { code: 'MCS301', name: 'Deep Learning & NLP', credits: 4, semester: 'Semester III', year: 'II', program: 'PG_MSCCS', programName: 'M.Sc. CS', dept: 'CS', faculty: 'Prof. R. Senthil', type: 'Theory + Lab' },
  { code: 'MCS302', name: 'Cryptography & Cyber Security', credits: 4, semester: 'Semester III', year: 'II', program: 'PG_MSCCS', programName: 'M.Sc. CS', dept: 'CS', faculty: 'Dr. M. Meenakshi', type: 'Theory' },
  { code: 'MCS401', name: 'Cloud Native Microservices', credits: 4, semester: 'Semester IV', year: 'II', program: 'PG_MSCCS', programName: 'M.Sc. CS', dept: 'CS', faculty: 'Prof. David Wilson', type: 'Theory' }
];

// CS Department Daily Timetable Period Slots (1:45 PM to 6:20 PM - Afternoon Shift)
export const CS_TIMETABLE_SLOTS = [
  { time: '01:45 PM - 02:40 PM', period: 1, label: 'Period 1' },
  { time: '02:40 PM - 03:35 PM', period: 2, label: 'Period 2' },
  { time: '03:35 PM - 04:25 PM', period: 3, label: 'Period 3' },
  { time: '04:25 PM - 04:40 PM', period: 'Interval', isBreak: true, label: 'Interval (15m)' },
  { time: '04:40 PM - 05:30 PM', period: 4, label: 'Period 4' },
  { time: '05:30 PM - 06:20 PM', period: 5, label: 'Period 5' }
];

// Morning Session Slots (08:45 AM to 01:20 PM)
export const CS_MORNING_SLOTS = [
  { time: '08:45 AM - 09:40 AM', period: 1, label: 'Period 1' },
  { time: '09:40 AM - 10:35 AM', period: 2, label: 'Period 2' },
  { time: '10:35 AM - 11:25 AM', period: 3, label: 'Period 3' },
  { time: '11:25 AM - 11:40 AM', period: 'Interval', isBreak: true, label: 'Interval (15m)' },
  { time: '11:40 AM - 12:30 PM', period: 4, label: 'Period 4' },
  { time: '12:30 PM - 01:20 PM', period: 5, label: 'Period 5' }
];

export const SATURDAY_MODES = {
  AFTERNOON: {
    key: 'AFTERNOON',
    label: 'Afternoon Session',
    timing: '01:45 PM - 06:20 PM',
    badgeText: 'Regular Class',
    badgeVariant: 'success',
    countsForAttendance: true,
    description: 'Regular afternoon schedule included in college attendance register.'
  },
  MORNING: {
    key: 'MORNING',
    label: 'Morning Session',
    timing: '08:45 AM - 01:20 PM',
    badgeText: 'Special / Remedial',
    badgeVariant: 'warning',
    countsForAttendance: false,
    description: 'Morning session for special labs, seminars & extra classes.'
  },
  OFF: {
    key: 'OFF',
    label: 'Weekend Holiday',
    timing: 'No Classes',
    badgeText: 'Holiday',
    badgeVariant: 'neutral',
    countsForAttendance: false,
    description: 'Non-working weekend holiday.'
  }
};

export const generateClassTimetable = (programId = 'UG_BSCCS', year = 'II', section = 'Section A', populateDefault = true) => {
  const isUG = programId === 'UG_BSCCS';
  const progName = isUG ? 'B.Sc. Computer Science' : 'M.Sc. Computer Science';
  const semester = isUG
    ? (year === 'I' ? 'Semester II' : year === 'II' ? 'Semester IV' : 'Semester VI')
    : (year === 'I' ? 'Semester II' : 'Semester IV');

  const slots = [...CS_TIMETABLE_SLOTS];

  const createEmptyDay = (dayKey) => [
    { id: `${programId}_${year}_${section}_${dayKey}1`, isFree: true, label: 'Free Period' },
    { id: `${programId}_${year}_${section}_${dayKey}2`, isFree: true, label: 'Free Period' },
    { id: `${programId}_${year}_${section}_${dayKey}3`, isFree: true, label: 'Free Period' },
    { id: `${programId}_${year}_${section}_${dayKey}b`, isBreak: true, label: 'Interval (15m)' },
    { id: `${programId}_${year}_${section}_${dayKey}4`, isFree: true, label: 'Free Period' },
    { id: `${programId}_${year}_${section}_${dayKey}5`, isFree: true, label: 'Free Period' }
  ];

  if (!populateDefault) {
    return {
      department: 'Department of Computer Science',
      deptCode: 'CS',
      program: progName,
      programId,
      year,
      section,
      semester,
      saturdayMode: 'AFTERNOON',
      slots,
      grid: {
        MON: createEmptyDay('m'),
        TUE: createEmptyDay('t'),
        WED: createEmptyDay('w'),
        THU: createEmptyDay('th'),
        FRI: createEmptyDay('f'),
        SAT: createEmptyDay('sat')
      }
    };
  }

  const relevantSubjects = SUBJECTS.filter(s => s.program === programId && (s.year === year || !s.year));
  const fallbackSubjects = SUBJECTS.filter(s => s.program === programId);
  const pool = (relevantSubjects.length > 0 ? relevantSubjects : fallbackSubjects).map((s) => ({
    code: s.code,
    subject: s.name,
    faculty: s.faculty || 'Prof. Alan Davis',
    room: isUG ? `LH-${year === 'I' ? '101' : year === 'II' ? '201' : '301'}` : `PG-Lab-${year === 'I' ? '1' : '2'}`,
    isLab: s.type?.includes('Lab') || false
  }));

  const getSub = (idx) => pool[idx % pool.length];
  const offset = section.includes('B') ? 2 : 0;

  const grid = {
    'MON': [
      { id: `${programId}_${year}_${section}_m1`, ...getSub(0 + offset) },
      { id: `${programId}_${year}_${section}_m2`, ...getSub(1 + offset) },
      { id: `${programId}_${year}_${section}_m3`, ...getSub(2 + offset) },
      { id: `${programId}_${year}_${section}_mb1`, isBreak: true, label: 'Interval (15m)' },
      { id: `${programId}_${year}_${section}_m4`, ...getSub(3 + offset) },
      { id: `${programId}_${year}_${section}_m5`, ...getSub(0 + offset) }
    ],
    'TUE': [
      { id: `${programId}_${year}_${section}_t1`, ...getSub(1 + offset) },
      { id: `${programId}_${year}_${section}_t2`, ...getSub(0 + offset) },
      { id: `${programId}_${year}_${section}_t3`, ...getSub(2 + offset) },
      { id: `${programId}_${year}_${section}_tb1`, isBreak: true, label: 'Interval (15m)' },
      { id: `${programId}_${year}_${section}_t4`, ...getSub(3 + offset) },
      { id: `${programId}_${year}_${section}_t5`, ...getSub(4 + offset) }
    ],
    'WED': [
      { id: `${programId}_${year}_${section}_w1`, ...getSub(pool.length - 1), isLab: true },
      { id: `${programId}_${year}_${section}_w2`, ...getSub(pool.length - 1), isLab: true },
      { id: `${programId}_${year}_${section}_w3`, ...getSub(0 + offset) },
      { id: `${programId}_${year}_${section}_wb1`, isBreak: true, label: 'Interval (15m)' },
      { id: `${programId}_${year}_${section}_w4`, ...getSub(1 + offset) },
      { id: `${programId}_${year}_${section}_w5`, ...getSub(2 + offset) }
    ],
    'THU': [
      { id: `${programId}_${year}_${section}_th1`, ...getSub(2 + offset) },
      { id: `${programId}_${year}_${section}_th2`, ...getSub(3 + offset) },
      { id: `${programId}_${year}_${section}_th3`, ...getSub(0 + offset) },
      { id: `${programId}_${year}_${section}_thb1`, isBreak: true, label: 'Interval (15m)' },
      { id: `${programId}_${year}_${section}_th4`, ...getSub(1 + offset), isLab: true },
      { id: `${programId}_${year}_${section}_th5`, ...getSub(1 + offset), isLab: true }
    ],
    'FRI': [
      { id: `${programId}_${year}_${section}_f1`, ...getSub(4 + offset) },
      { id: `${programId}_${year}_${section}_f2`, ...getSub(1 + offset) },
      { id: `${programId}_${year}_${section}_f3`, ...getSub(2 + offset), isLab: true },
      { id: `${programId}_${year}_${section}_fb1`, isBreak: true, label: 'Interval (15m)' },
      { id: `${programId}_${year}_${section}_f4`, ...getSub(2 + offset), isLab: true },
      { id: `${programId}_${year}_${section}_f5`, ...getSub(0 + offset) }
    ],
    'SAT': [
      { id: `${programId}_${year}_${section}_sat1`, ...getSub(0 + offset) },
      { id: `${programId}_${year}_${section}_sat2`, ...getSub(1 + offset) },
      { id: `${programId}_${year}_${section}_sat3`, isFree: true, label: 'Mentoring Period' },
      { id: `${programId}_${year}_${section}_satb1`, isBreak: true, label: 'Interval (15m)' },
      { id: `${programId}_${year}_${section}_sat4`, ...getSub(3 + offset) },
      { id: `${programId}_${year}_${section}_sat5`, isFree: true, label: 'Technical Association' }
    ]
  };

  return {
    department: 'Department of Computer Science',
    deptCode: 'CS',
    program: progName,
    programId,
    year,
    section,
    semester,
    saturdayMode: 'AFTERNOON',
    slots,
    grid
  };
};

export const INITIAL_CLASS_TIMETABLES = {
  'UG_BSCCS_I_Section A': generateClassTimetable('UG_BSCCS', 'I', 'Section A', true),
  'UG_BSCCS_I_Section B': generateClassTimetable('UG_BSCCS', 'I', 'Section B', true),
  'UG_BSCCS_II_Section A': generateClassTimetable('UG_BSCCS', 'II', 'Section A', true),
  'UG_BSCCS_II_Section B': generateClassTimetable('UG_BSCCS', 'II', 'Section B', true),
  'UG_BSCCS_III_Section A': generateClassTimetable('UG_BSCCS', 'III', 'Section A', true),
  'UG_BSCCS_III_Section B': generateClassTimetable('UG_BSCCS', 'III', 'Section B', true),
  'PG_MSCCS_I_Section A': generateClassTimetable('PG_MSCCS', 'I', 'Section A', true),
  'PG_MSCCS_I_Section B': generateClassTimetable('PG_MSCCS', 'I', 'Section B', true),
  'PG_MSCCS_II_Section A': generateClassTimetable('PG_MSCCS', 'II', 'Section A', true)
};

export const INITIAL_TIMETABLE = INITIAL_CLASS_TIMETABLES['UG_BSCCS_II_Section A'];

// Realistic Question Bank Dataset
export const INITIAL_QUESTION_BANK = [
  {
    id: 'QB-DBMS-001',
    subject: 'Database Management Systems',
    subjectCode: 'CS301',
    unit: 'Unit 1',
    topic: 'Relational Model & Keys',
    question: 'Define Primary Key, Candidate Key, and Foreign Key with a real-world banking database example.',
    marks: 5,
    difficulty: 'Medium',
    bloomLevel: 'Understand',
    author: 'Prof. Alan Davis',
    createdDate: '2026-03-10'
  },
  {
    id: 'QB-DBMS-002',
    subject: 'Database Management Systems',
    subjectCode: 'CS301',
    unit: 'Unit 1',
    topic: 'Database Architecture',
    question: 'Explain the Three-Schema Architecture with a neat diagram. Differentiate Physical and Logical Data Independence.',
    marks: 8,
    difficulty: 'Hard',
    bloomLevel: 'Analyze',
    author: 'Prof. Alan Davis',
    createdDate: '2026-03-12'
  },
  {
    id: 'QB-DBMS-003',
    subject: 'Database Management Systems',
    subjectCode: 'CS301',
    unit: 'Unit 2',
    topic: 'Normalization',
    question: 'What is BCNF? How does it differ from 3NF? Demonstrate with an anomalous relation and normalize it.',
    marks: 8,
    difficulty: 'Hard',
    bloomLevel: 'Evaluate',
    author: 'Prof. Alan Davis',
    createdDate: '2026-03-15'
  },
  {
    id: 'QB-OS-001',
    subject: 'Operating Systems',
    subjectCode: 'CS302',
    unit: 'Unit 1',
    topic: 'Process Management',
    question: 'Explain the 5-state process lifecycle diagram. What is the role of the PCB (Process Control Block)?',
    marks: 5,
    difficulty: 'Medium',
    bloomLevel: 'Understand',
    author: 'Dr. K. Ramesh',
    createdDate: '2026-03-11'
  },
  {
    id: 'QB-OS-002',
    subject: 'Operating Systems',
    subjectCode: 'CS302',
    unit: 'Unit 2',
    topic: 'CPU Scheduling',
    question: 'Given 4 processes with arrival times [0, 1, 2, 3] and burst times [6, 8, 7, 3], calculate average waiting time using Round Robin (Quantum = 2).',
    marks: 8,
    difficulty: 'Hard',
    bloomLevel: 'Apply',
    author: 'Dr. K. Ramesh',
    createdDate: '2026-03-14'
  },
  {
    id: 'QB-JAVA-001',
    subject: 'Java Programming',
    subjectCode: 'CS304',
    unit: 'Unit 1',
    topic: 'OOP Concepts',
    question: 'Differentiate Abstract Class and Interface in Java with code snippets demonstrating multiple inheritance.',
    marks: 5,
    difficulty: 'Medium',
    bloomLevel: 'Apply',
    author: 'Prof. Priya Sharma',
    createdDate: '2026-03-08'
  },
  {
    id: 'QB-NET-001',
    subject: 'Computer Networks',
    subjectCode: 'CS305',
    unit: 'Unit 1',
    topic: 'OSI Reference Model',
    question: 'Explain the functions and protocols of each layer in the OSI 7-Layer Architecture with an illustration.',
    marks: 8,
    difficulty: 'Medium',
    bloomLevel: 'Understand',
    author: 'Dr. M. Meenakshi',
    createdDate: '2026-03-09'
  },
  {
    id: 'QB-PY-001',
    subject: 'Python for Data Science',
    subjectCode: 'CS303',
    unit: 'Unit 1',
    topic: 'NumPy & Pandas',
    question: 'Explain how Pandas DataFrame handles missing values using dropna() and fillna(). Write syntax examples.',
    marks: 5,
    difficulty: 'Easy',
    bloomLevel: 'Apply',
    author: 'Prof. R. Senthil',
    createdDate: '2026-03-16'
  }
];

// Realistic Question Papers Dataset
export const INITIAL_QUESTION_PAPERS = [
  {
    id: 'QP-2026-CIA1-DBMS',
    title: 'Continuous Internal Assessment - I (CIA-1)',
    subject: 'Database Management Systems',
    subjectCode: 'CS301',
    program: 'UG_BSCCS',
    programName: 'B.Sc. Computer Science',
    year: 'II',
    semester: 'Semester IV',
    examType: 'Continuous Internal Assessment (CIA)',
    date: '2026-04-05',
    duration: '60 Minutes',
    maxMarks: 20,
    status: 'Ready',
    author: 'Prof. Alan Davis',
    createdDate: '2026-03-18',
    hodRemarks: 'Ready for examination & printing.',
    questions: [
      { id: 'q1', section: 'Part A', part: 'A', marks: 1, text: 'Define Primary Key and its primary constraint.', bloom: 'Remember' },
      { id: 'q2', section: 'Part A', part: 'A', marks: 1, text: 'What is cardinality in relational schema?', bloom: 'Remember' },
      { id: 'q3', section: 'Part B', part: 'B', marks: 5, text: 'Explain the 3-Schema database architecture with a neat diagram.', bloom: 'Understand' },
      { id: 'q4', section: 'Part B', part: 'B', marks: 5, text: 'Differentiate between DDL, DML, and DCL commands with SQL examples.', bloom: 'Apply' },
      { id: 'q5', section: 'Part C', part: 'C', marks: 8, text: 'What is Normalization? Explain 1NF, 2NF, and 3NF with step-by-step table anomalies.', bloom: 'Analyze' }
    ]
  },
  {
    id: 'QP-2026-CIA1-OS',
    title: 'Continuous Internal Assessment - I (CIA-1)',
    subject: 'Operating Systems',
    subjectCode: 'CS302',
    program: 'UG_BSCCS',
    programName: 'B.Sc. Computer Science',
    year: 'II',
    semester: 'Semester IV',
    examType: 'Continuous Internal Assessment (CIA)',
    date: '2026-04-07',
    duration: '60 Minutes',
    maxMarks: 20,
    status: 'Ready',
    author: 'Dr. K. Ramesh',
    createdDate: '2026-03-20',
    hodRemarks: 'Ready for examination & printing.',
    questions: [
      { id: 'q1', section: 'Part A', part: 'A', marks: 1, text: 'What is a system call? Give two examples.', bloom: 'Remember' },
      { id: 'q2', section: 'Part A', part: 'A', marks: 1, text: 'Define process starvation in priority scheduling.', bloom: 'Remember' },
      { id: 'q3', section: 'Part B', part: 'B', marks: 5, text: 'Explain the 5-state process lifecycle with diagram.', bloom: 'Understand' },
      { id: 'q4', section: 'Part B', part: 'B', marks: 5, text: 'Differentiate Preemptive and Non-Preemptive scheduling.', bloom: 'Understand' },
      { id: 'q5', section: 'Part C', part: 'C', marks: 8, text: 'Calculate average turnaround and waiting time for FCFS vs SJF algorithms on 4 given processes.', bloom: 'Apply' }
    ]
  },
  {
    id: 'QP-2026-MID-JAVA',
    title: 'Mid-Term Assessment Examination',
    subject: 'Java Programming',
    subjectCode: 'CS304',
    program: 'UG_BSCCS',
    programName: 'B.Sc. Computer Science',
    year: 'II',
    semester: 'Semester IV',
    examType: 'Mid-Term Examination',
    date: '2026-04-12',
    duration: '90 Minutes',
    maxMarks: 50,
    status: 'Ready',
    author: 'Prof. Priya Sharma',
    createdDate: '2026-03-22',
    hodRemarks: 'Ready for examination & printing.',
    questions: [
      { id: 'q1', section: 'Part A', part: 'A', marks: 2, text: 'Explain the JVM, JRE, and JDK architecture.', bloom: 'Understand' },
      { id: 'q2', section: 'Part A', part: 'A', marks: 2, text: 'Why is multiple inheritance not supported in Java classes?', bloom: 'Understand' },
      { id: 'q3', section: 'Part B', part: 'B', marks: 8, text: 'Explain Exception Handling mechanism using try, catch, finally, throw, and throws keywords.', bloom: 'Apply' }
    ]
  }
];

export const INITIAL_NOTIFICATIONS = [
  { id: 'n1', title: 'CIA-1 Examination Schedule', message: 'CIA-1 examination timetables and question papers have been scheduled for April 5th.', timestamp: '2 hours ago', read: false, type: 'academic' },
  { id: 'n2', title: 'Department Staff Meeting', message: 'Monthly CS Department academic review meeting scheduled for Friday 3:30 PM.', timestamp: '1 day ago', read: true, type: 'info' }
];
