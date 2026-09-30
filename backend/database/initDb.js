const mysql = require('mysql2/promise');
const fs = require('fs');
const path = require('path');
const bcrypt = require('bcryptjs');
const dotenv = require('dotenv');

dotenv.config({ path: path.join(__dirname, '../.env') });

async function initializeDatabase() {
  console.log('[DB Init] Starting Database Setup...');

  const host = process.env.DB_HOST || 'localhost';
  const user = process.env.DB_USER || 'root';
  const password = process.env.DB_PASSWORD || '';
  const databaseName = process.env.DB_NAME || 'academic_management';
  const port = parseInt(process.env.DB_PORT, 10) || 3306;

  try {
    // 1. Connect without selecting database to create database if not exists
    const rootConn = await mysql.createConnection({
      host,
      user,
      password,
      port,
      multipleStatements: true
    });

    console.log(`[DB Init] Connected to MySQL server at ${host}:${port}`);
    await rootConn.query(`CREATE DATABASE IF NOT EXISTS \`${databaseName}\` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;`);
    console.log(`[DB Init] Database \`${databaseName}\` created or verified.`);
    await rootConn.end();

    // 2. Connect to the database
    const conn = await mysql.createConnection({
      host,
      user,
      password,
      database: databaseName,
      port,
      multipleStatements: true
    });

    // 3. Run schema.sql
    const schemaSql = fs.readFileSync(path.join(__dirname, 'schema.sql'), 'utf-8');
    await conn.query(schemaSql);
    console.log('[DB Init] Schema tables created or verified.');

    // 4. Seed Departments
    const [deptRows] = await conn.query('SELECT COUNT(*) as count FROM departments');
    if (deptRows[0].count === 0) {
      console.log('[DB Init] Seeding departments...');
      await conn.query(`
        INSERT INTO departments (name, code) VALUES
        ('Department of Computer Science', 'CS'),
        ('Central Academic Affairs', 'ADMIN'),
        ('Department of Information Technology', 'IT'),
        ('Department of Mathematics', 'MATH');
      `);
    }

    // Get Department IDs
    const [depts] = await conn.query('SELECT id, code FROM departments');
    const csDept = depts.find(d => d.code === 'CS') || depts[0];
    const adminDept = depts.find(d => d.code === 'ADMIN') || depts[0];

    // 5. Seed Users (with bcrypt hashed passwords)
    const [userRows] = await conn.query('SELECT COUNT(*) as count FROM users');
    if (userRows[0].count === 0) {
      console.log('[DB Init] Seeding default users...');
      const adminPass = await bcrypt.hash('19012007', 10);
      const hodPass = await bcrypt.hash('hod123', 10);
      const facultyPass = await bcrypt.hash('faculty123', 10);

      const usersToSeed = [
        [
          'Ananth',
          'ananth19012007@gmail.com',
          adminPass,
          'admin',
          adminDept.id,
          'Chief Academic Registrar & Administrator',
          'ADM-SYS-001',
          '+91 94431 00001',
          'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80',
          'Active'
        ],
        [
          'Dr. M. Gomathinayagam',
          'gomathinayagam@gmail.com',
          hodPass,
          'hod',
          csDept.id,
          'Professor & Head of Department',
          'HOD-CS-001',
          '+91 94432 12345',
          'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
          'Active'
        ],
        [
          'Prof. Alan Davis',
          'alan.davis@voccollege.edu.in',
          facultyPass,
          'faculty',
          csDept.id,
          'Associate Professor',
          'FAC-CS-002',
          '+91 94432 12346',
          'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
          'Active'
        ],
        [
          'Dr. K. Ramesh',
          'ramesh.k@voccollege.edu.in',
          facultyPass,
          'faculty',
          csDept.id,
          'Associate Professor',
          'FAC-CS-003',
          '+91 94432 12347',
          'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
          'Active'
        ],
        [
          'Prof. Priya Sharma',
          'priya.sharma@voccollege.edu.in',
          facultyPass,
          'faculty',
          csDept.id,
          'Assistant Professor',
          'FAC-CS-004',
          '+91 94432 12348',
          'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80',
          'Active'
        ],
        [
          'Prof. R. Senthil',
          'senthil.r@voccollege.edu.in',
          facultyPass,
          'faculty',
          csDept.id,
          'Assistant Professor',
          'FAC-CS-005',
          '+91 94432 12349',
          'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
          'Active'
        ],
        [
          'Dr. M. Meenakshi',
          'meenakshi.m@voccollege.edu.in',
          facultyPass,
          'faculty',
          csDept.id,
          'Assistant Professor',
          'FAC-CS-006',
          '+91 94432 12350',
          'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80',
          'Active'
        ],
        [
          'Prof. David Wilson',
          'david.wilson@voccollege.edu.in',
          facultyPass,
          'faculty',
          csDept.id,
          'Assistant Professor',
          'FAC-CS-007',
          '+91 94432 12351',
          'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80',
          'Active'
        ]
      ];

      for (const u of usersToSeed) {
        await conn.query(
          `INSERT INTO users (name, email, password, role, department_id, designation, emp_id, phone, avatar, status)
           VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
          u
        );
      }
    }

    // 6. Seed Subjects
    const [subjectRows] = await conn.query('SELECT COUNT(*) as count FROM subjects');
    if (subjectRows[0].count === 0) {
      console.log('[DB Init] Seeding curriculum subjects...');
      const subjectsToSeed = [
        ['CS101', 'Programming in C & Data Structures', csDept.id, 'Semester I', 4, 'I', 'UG_BSCCS', 'B.Sc. CS', 'Theory + Lab'],
        ['CS102', 'Digital Principles & Architecture', csDept.id, 'Semester II', 4, 'I', 'UG_BSCCS', 'B.Sc. CS', 'Theory'],
        ['CS201', 'Object Oriented Programming with C++', csDept.id, 'Semester III', 4, 'II', 'UG_BSCCS', 'B.Sc. CS', 'Theory + Lab'],
        ['CS301', 'Database Management Systems', csDept.id, 'Semester IV', 4, 'II', 'UG_BSCCS', 'B.Sc. CS', 'Theory + Lab'],
        ['CS302', 'Operating Systems', csDept.id, 'Semester IV', 4, 'II', 'UG_BSCCS', 'B.Sc. CS', 'Theory'],
        ['CS303', 'Python for Data Science', csDept.id, 'Semester IV', 3, 'II', 'UG_BSCCS', 'B.Sc. CS', 'Theory + Lab'],
        ['CS304', 'Java Programming', csDept.id, 'Semester IV', 4, 'II', 'UG_BSCCS', 'B.Sc. CS', 'Theory + Lab'],
        ['CS305', 'Computer Networks', csDept.id, 'Semester IV', 3, 'II', 'UG_BSCCS', 'B.Sc. CS', 'Theory'],
        ['CS306', 'Web Technologies', csDept.id, 'Semester IV', 3, 'II', 'UG_BSCCS', 'B.Sc. CS', 'Theory + Lab'],
        ['CS401', 'Artificial Intelligence & Expert Systems', csDept.id, 'Semester VI', 4, 'III', 'UG_BSCCS', 'B.Sc. CS', 'Theory'],
        ['CS402', 'Cloud Computing & Security', csDept.id, 'Semester VI', 4, 'III', 'UG_BSCCS', 'B.Sc. CS', 'Theory'],
        ['MCS101', 'Advanced Data Structures & Algorithms', csDept.id, 'Semester I', 4, 'I', 'PG_MSCCS', 'M.Sc. CS', 'Theory'],
        ['MCS102', 'Advanced Java Enterprise Systems', csDept.id, 'Semester I', 4, 'I', 'PG_MSCCS', 'M.Sc. CS', 'Theory + Lab'],
        ['MCS201', 'Machine Learning & Neural Computing', csDept.id, 'Semester II', 4, 'I', 'PG_MSCCS', 'M.Sc. CS', 'Theory + Lab'],
        ['MCS202', 'Distributed Databases & Big Data', csDept.id, 'Semester II', 4, 'I', 'PG_MSCCS', 'M.Sc. CS', 'Theory'],
        ['MCS301', 'Deep Learning & NLP', csDept.id, 'Semester III', 4, 'II', 'PG_MSCCS', 'M.Sc. CS', 'Theory + Lab'],
        ['MCS302', 'Cryptography & Cyber Security', csDept.id, 'Semester III', 4, 'II', 'PG_MSCCS', 'M.Sc. CS', 'Theory'],
        ['MCS401', 'Cloud Native Microservices', csDept.id, 'Semester IV', 4, 'II', 'PG_MSCCS', 'M.Sc. CS', 'Theory']
      ];

      for (const s of subjectsToSeed) {
        await conn.query(
          `INSERT INTO subjects (code, name, department_id, semester, credits, year, program, program_name, type)
           VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
          s
        );
      }
    }

    // Get Subject & User mappings
    const [allSubjects] = await conn.query('SELECT id, code, name FROM subjects');
    const [allUsers] = await conn.query('SELECT id, name, role, email FROM users');
    const getSubId = (code) => allSubjects.find(s => s.code === code)?.id || null;
    const getUserId = (email) => allUsers.find(u => u.email === email)?.id || allUsers[0].id;

    // 7. Seed Questions
    const [qRows] = await conn.query('SELECT COUNT(*) as count FROM questions');
    if (qRows[0].count === 0) {
      console.log('[DB Init] Seeding initial Question Bank...');
      const questionsToSeed = [
        {
          subjectCode: 'CS301',
          text: 'Define Primary Key, Candidate Key, and Foreign Key with a real-world banking database example.',
          type: 'Short Answer',
          marks: 5,
          difficulty: 'Medium',
          bloom: 'Understand',
          unit: 'Unit 1',
          topic: 'Relational Model & Keys',
          hint: 'Primary key uniquely identifies a row; foreign key references primary key of another table.',
          authorEmail: 'alan.davis@voccollege.edu.in'
        },
        {
          subjectCode: 'CS301',
          text: 'Explain the Three-Schema Architecture with a neat diagram. Differentiate Physical and Logical Data Independence.',
          type: 'Long Answer',
          marks: 8,
          difficulty: 'Hard',
          bloom: 'Analyze',
          unit: 'Unit 1',
          topic: 'Database Architecture',
          hint: 'External, Conceptual, and Internal levels.',
          authorEmail: 'alan.davis@voccollege.edu.in'
        },
        {
          subjectCode: 'CS301',
          text: 'What is BCNF? How does it differ from 3NF? Demonstrate with an anomalous relation and normalize it.',
          type: 'Long Answer',
          marks: 8,
          difficulty: 'Hard',
          bloom: 'Evaluate',
          unit: 'Unit 2',
          topic: 'Normalization',
          hint: 'BCNF requires every determinant to be a super key.',
          authorEmail: 'alan.davis@voccollege.edu.in'
        },
        {
          subjectCode: 'CS302',
          text: 'Explain the 5-state process lifecycle diagram. What is the role of the PCB (Process Control Block)?',
          type: 'Short Answer',
          marks: 5,
          difficulty: 'Medium',
          bloom: 'Understand',
          unit: 'Unit 1',
          topic: 'Process Management',
          hint: 'New, Ready, Running, Waiting, Terminated states.',
          authorEmail: 'ramesh.k@voccollege.edu.in'
        },
        {
          subjectCode: 'CS302',
          text: 'Given 4 processes with arrival times [0, 1, 2, 3] and burst times [6, 8, 7, 3], calculate average waiting time using Round Robin (Quantum = 2).',
          type: 'Long Answer',
          marks: 8,
          difficulty: 'Hard',
          bloom: 'Apply',
          unit: 'Unit 2',
          topic: 'CPU Scheduling',
          hint: 'Draw Gantt chart and compute completion time minus arrival time minus burst time.',
          authorEmail: 'ramesh.k@voccollege.edu.in'
        },
        {
          subjectCode: 'CS304',
          text: 'Differentiate Abstract Class and Interface in Java with code snippets demonstrating multiple inheritance.',
          type: 'Short Answer',
          marks: 5,
          difficulty: 'Medium',
          bloom: 'Apply',
          unit: 'Unit 1',
          topic: 'OOP Concepts',
          hint: 'Interfaces allow full multiple inheritance of type in Java.',
          authorEmail: 'priya.sharma@voccollege.edu.in'
        },
        {
          subjectCode: 'CS305',
          text: 'Explain the functions and protocols of each layer in the OSI 7-Layer Architecture with an illustration.',
          type: 'Long Answer',
          marks: 8,
          difficulty: 'Medium',
          bloom: 'Understand',
          unit: 'Unit 1',
          topic: 'OSI Reference Model',
          hint: 'Physical, Data Link, Network, Transport, Session, Presentation, Application.',
          authorEmail: 'meenakshi.m@voccollege.edu.in'
        },
        {
          subjectCode: 'CS303',
          text: 'Explain how Pandas DataFrame handles missing values using dropna() and fillna(). Write syntax examples.',
          type: 'Short Answer',
          marks: 5,
          difficulty: 'Easy',
          bloom: 'Apply',
          unit: 'Unit 1',
          topic: 'NumPy & Pandas',
          hint: 'dropna drops rows/cols with NaN; fillna imputes with scalar or method.',
          authorEmail: 'senthil.r@voccollege.edu.in'
        }
      ];

      for (const q of questionsToSeed) {
        await conn.query(
          `INSERT INTO questions (subject_id, question_text, question_type, marks, difficulty, bloom_level, unit, topic, answer_hint, created_by)
           VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
          [
            getSubId(q.subjectCode),
            q.text,
            q.type,
            q.marks,
            q.difficulty,
            q.bloom,
            q.unit,
            q.topic,
            q.hint,
            getUserId(q.authorEmail)
          ]
        );
      }
    }

    // 8. Seed Timetable entries
    const [ttRows] = await conn.query('SELECT COUNT(*) as count FROM timetables');
    if (ttRows[0].count === 0) {
      console.log('[DB Init] Seeding default timetable schedule...');
      const days = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
      const periods = ['1', '2', '3', '4', '5'];
      const cs301Id = getSubId('CS301');
      const cs302Id = getSubId('CS302');
      const cs303Id = getSubId('CS303');
      const cs304Id = getSubId('CS304');
      const cs305Id = getSubId('CS305');
      const facultyAlan = getUserId('alan.davis@voccollege.edu.in');
      const facultyRamesh = getUserId('ramesh.k@voccollege.edu.in');
      const facultyPriya = getUserId('priya.sharma@voccollege.edu.in');
      const facultySenthil = getUserId('senthil.r@voccollege.edu.in');
      const facultyMeenakshi = getUserId('meenakshi.m@voccollege.edu.in');

      const scheduleMap = [
        { day: 'MON', period: '1', sub: cs301Id, fac: facultyAlan, room: 'LH-201' },
        { day: 'MON', period: '2', sub: cs302Id, fac: facultyRamesh, room: 'LH-201' },
        { day: 'MON', period: '3', sub: cs303Id, fac: facultySenthil, room: 'LH-201' },
        { day: 'MON', period: '4', sub: cs304Id, fac: facultyPriya, room: 'LH-201' },
        { day: 'MON', period: '5', sub: cs305Id, fac: facultyMeenakshi, room: 'LH-201' },

        { day: 'TUE', period: '1', sub: cs304Id, fac: facultyPriya, room: 'LH-201' },
        { day: 'TUE', period: '2', sub: cs301Id, fac: facultyAlan, room: 'LH-201' },
        { day: 'TUE', period: '3', sub: cs305Id, fac: facultyMeenakshi, room: 'LH-201' },
        { day: 'TUE', period: '4', sub: cs302Id, fac: facultyRamesh, room: 'LH-201' },
        { day: 'TUE', period: '5', sub: cs303Id, fac: facultySenthil, room: 'LH-201' },

        { day: 'WED', period: '1', sub: cs301Id, fac: facultyAlan, room: 'CS-Lab-1' },
        { day: 'WED', period: '2', sub: cs301Id, fac: facultyAlan, room: 'CS-Lab-1' },
        { day: 'WED', period: '3', sub: cs304Id, fac: facultyPriya, room: 'LH-201' },
        { day: 'WED', period: '4', sub: cs302Id, fac: facultyRamesh, room: 'LH-201' },
        { day: 'WED', period: '5', sub: cs303Id, fac: facultySenthil, room: 'LH-201' },

        { day: 'THU', period: '1', sub: cs303Id, fac: facultySenthil, room: 'LH-201' },
        { day: 'THU', period: '2', sub: cs304Id, fac: facultyPriya, room: 'LH-201' },
        { day: 'THU', period: '3', sub: cs301Id, fac: facultyAlan, room: 'LH-201' },
        { day: 'THU', period: '4', sub: cs304Id, fac: facultyPriya, room: 'CS-Lab-2' },
        { day: 'THU', period: '5', sub: cs304Id, fac: facultyPriya, room: 'CS-Lab-2' },

        { day: 'FRI', period: '1', sub: cs305Id, fac: facultyMeenakshi, room: 'LH-201' },
        { day: 'FRI', period: '2', sub: cs302Id, fac: facultyRamesh, room: 'LH-201' },
        { day: 'FRI', period: '3', sub: cs303Id, fac: facultySenthil, room: 'CS-Lab-1' },
        { day: 'FRI', period: '4', sub: cs303Id, fac: facultySenthil, room: 'CS-Lab-1' },
        { day: 'FRI', period: '5', sub: cs301Id, fac: facultyAlan, room: 'LH-201' },

        { day: 'SAT', period: '1', sub: cs301Id, fac: facultyAlan, room: 'LH-201' },
        { day: 'SAT', period: '2', sub: cs302Id, fac: facultyRamesh, room: 'LH-201' },
        { day: 'SAT', period: '3', isFree: true, customLabel: 'Mentoring Period', room: 'LH-201' },
        { day: 'SAT', period: '4', sub: cs304Id, fac: facultyPriya, room: 'LH-201' },
        { day: 'SAT', period: '5', isFree: true, customLabel: 'Technical Association', room: 'LH-201' }
      ];

      for (const item of scheduleMap) {
        await conn.query(
          `INSERT INTO timetables (department_id, subject_id, faculty_id, day, period, room, semester, academic_year, section, program_id, is_free, custom_label)
           VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
          [
            csDept.id,
            item.sub || null,
            item.fac || null,
            item.day,
            item.period,
            item.room || 'LH-201',
            'Semester IV',
            '2025-2026',
            'Section A',
            'UG_BSCCS',
            item.isFree ? 1 : 0,
            item.customLabel || null
          ]
        );
      }
    }

    // 9. Seed Question Papers & Approvals
    const [qpRows] = await conn.query('SELECT COUNT(*) as count FROM question_papers');
    if (qpRows[0].count === 0) {
      console.log('[DB Init] Seeding Question Papers & Approvals...');
      const alanId = getUserId('alan.davis@voccollege.edu.in');
      const rameshId = getUserId('ramesh.k@voccollege.edu.in');
      const priyaId = getUserId('priya.sharma@voccollege.edu.in');
      const hodId = getUserId('gomathinayagam@gmail.com');

      const blueprint1 = {
        partA: {
          title: 'PART A',
          count: 2,
          total: 2,
          questions: [
            { id: 'q1', text: 'Define Primary Key and its primary constraint.', marks: 1, bloomLevel: 'Remember', unit: 'Unit 1' },
            { id: 'q2', text: 'What is cardinality in relational schema?', marks: 1, bloomLevel: 'Remember', unit: 'Unit 1' }
          ]
        },
        partB: {
          title: 'PART B',
          count: 2,
          total: 10,
          questions: [
            { id: 'q3', text: 'Explain the 3-Schema database architecture with a neat diagram.', marks: 5, bloomLevel: 'Understand', unit: 'Unit 1' },
            { id: 'q4', text: 'Differentiate between DDL, DML, and DCL commands with SQL examples.', marks: 5, bloomLevel: 'Apply', unit: 'Unit 2' }
          ]
        },
        partC: {
          title: 'PART C',
          count: 1,
          total: 8,
          questions: [
            { id: 'q5', text: 'What is Normalization? Explain 1NF, 2NF, and 3NF with step-by-step table anomalies.', marks: 8, bloomLevel: 'Analyze', unit: 'Unit 2' }
          ]
        }
      };

      const [res1] = await conn.query(
        `INSERT INTO question_papers (title, subject_id, created_by, status, total_marks, duration, exam_type, semester, academic_year, hod_remarks, blueprint_data)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [
          'Continuous Internal Assessment - I (CIA-1)',
          getSubId('CS301'),
          alanId,
          'Approved',
          20,
          '60 Minutes',
          'Internal Exam',
          'Semester IV',
          '2025-2026',
          'Approved for CIA-1 examination. Quality and taxonomy balance are satisfactory.',
          JSON.stringify(blueprint1)
        ]
      );

      // Add approval record for paper 1
      await conn.query(
        `INSERT INTO approvals (question_paper_id, submitted_by, reviewed_by, status, comments, reviewed_at)
         VALUES (?, ?, ?, ?, ?, NOW())`,
        [res1.insertId, alanId, hodId, 'approved', 'Approved for CIA-1 examination. Quality and taxonomy balance are satisfactory.']
      );

      const blueprint2 = {
        partA: {
          title: 'PART A',
          count: 2,
          total: 2,
          questions: [
            { id: 'q1', text: 'What is a system call? Give two examples.', marks: 1, bloomLevel: 'Remember', unit: 'Unit 1' },
            { id: 'q2', text: 'Define process starvation in priority scheduling.', marks: 1, bloomLevel: 'Remember', unit: 'Unit 1' }
          ]
        },
        partB: {
          title: 'PART B',
          count: 2,
          total: 10,
          questions: [
            { id: 'q3', text: 'Explain the 5-state process lifecycle with diagram.', marks: 5, bloomLevel: 'Understand', unit: 'Unit 1' },
            { id: 'q4', text: 'Differentiate Preemptive and Non-Preemptive scheduling.', marks: 5, bloomLevel: 'Understand', unit: 'Unit 1' }
          ]
        },
        partC: {
          title: 'PART C',
          count: 1,
          total: 8,
          questions: [
            { id: 'q5', text: 'Calculate average turnaround and waiting time for FCFS vs SJF algorithms on 4 given processes.', marks: 8, bloomLevel: 'Apply', unit: 'Unit 2' }
          ]
        }
      };

      const [res2] = await conn.query(
        `INSERT INTO question_papers (title, subject_id, created_by, status, total_marks, duration, exam_type, semester, academic_year, hod_remarks, blueprint_data)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [
          'Continuous Internal Assessment - I (CIA-1)',
          getSubId('CS302'),
          rameshId,
          'Submitted',
          20,
          '60 Minutes',
          'Internal Exam',
          'Semester IV',
          '2025-2026',
          'Awaiting HOD verification',
          JSON.stringify(blueprint2)
        ]
      );

      // Add approval record for paper 2
      await conn.query(
        `INSERT INTO approvals (question_paper_id, submitted_by, reviewed_by, status, comments)
         VALUES (?, ?, ?, ?, ?)`,
        [res2.insertId, rameshId, null, 'pending', 'Submitted by faculty. Pending HOD review.']
      );

      const [res3] = await conn.query(
        `INSERT INTO question_papers (title, subject_id, created_by, status, total_marks, duration, exam_type, semester, academic_year, hod_remarks, blueprint_data)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [
          'Mid-Term Assessment Examination',
          getSubId('CS304'),
          priyaId,
          'Draft',
          20,
          '60 Minutes',
          'Internal Exam',
          'Semester IV',
          '2025-2026',
          '',
          JSON.stringify(blueprint1)
        ]
      );
    }

    await conn.end();
    console.log('[DB Init] ✅ Database initialization and seeding completed successfully!');
  } catch (error) {
    console.error('[DB Init] ❌ Error initializing database:', error);
    process.exit(1);
  }
}

if (require.main === module) {
  initializeDatabase();
}

module.exports = initializeDatabase;
