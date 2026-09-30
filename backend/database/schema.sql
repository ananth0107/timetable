-- Academic Timetable & Question Bank Management System
-- Database Schema for MySQL

CREATE DATABASE IF NOT EXISTS academic_management;
USE academic_management;

-- 1. Departments Table
CREATE TABLE IF NOT EXISTS departments (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  code VARCHAR(50) NOT NULL UNIQUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 2. Users Table
CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  role ENUM('faculty', 'hod', 'admin') NOT NULL DEFAULT 'faculty',
  department_id INT NULL,
  designation VARCHAR(255) NULL,
  emp_id VARCHAR(50) NULL,
  phone VARCHAR(50) NULL,
  avatar VARCHAR(500) NULL,
  status VARCHAR(20) DEFAULT 'Active',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (department_id) REFERENCES departments(id) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 3. Subjects Table
CREATE TABLE IF NOT EXISTS subjects (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  code VARCHAR(50) NOT NULL UNIQUE,
  department_id INT NULL,
  semester VARCHAR(50) NOT NULL,
  credits INT DEFAULT 3,
  year VARCHAR(10) NULL,
  program VARCHAR(100) NULL,
  program_name VARCHAR(100) NULL,
  type VARCHAR(50) NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (department_id) REFERENCES departments(id) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 4. Timetables Table
CREATE TABLE IF NOT EXISTS timetables (
  id INT AUTO_INCREMENT PRIMARY KEY,
  department_id INT NULL,
  subject_id INT NULL,
  faculty_id INT NULL,
  day VARCHAR(20) NOT NULL,
  period VARCHAR(20) NOT NULL,
  room VARCHAR(50) NULL,
  semester VARCHAR(50) NULL,
  academic_year VARCHAR(50) NULL,
  section VARCHAR(50) NULL,
  program_id VARCHAR(50) NULL,
  is_break BOOLEAN DEFAULT FALSE,
  is_free BOOLEAN DEFAULT FALSE,
  custom_label VARCHAR(100) NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (department_id) REFERENCES departments(id) ON DELETE CASCADE,
  FOREIGN KEY (subject_id) REFERENCES subjects(id) ON DELETE SET NULL,
  FOREIGN KEY (faculty_id) REFERENCES users(id) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 5. Questions Table
CREATE TABLE IF NOT EXISTS questions (
  id INT AUTO_INCREMENT PRIMARY KEY,
  subject_id INT NULL,
  question_text TEXT NOT NULL,
  question_type ENUM('MCQ', 'Short Answer', 'Long Answer', 'Essay') NOT NULL DEFAULT 'Short Answer',
  marks INT NOT NULL DEFAULT 5,
  difficulty ENUM('Easy', 'Medium', 'Hard') NOT NULL DEFAULT 'Medium',
  bloom_level VARCHAR(50) NOT NULL DEFAULT 'Understand',
  unit VARCHAR(50) NOT NULL DEFAULT 'Unit 1',
  topic VARCHAR(255) NULL,
  answer_hint TEXT NULL,
  created_by INT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (subject_id) REFERENCES subjects(id) ON DELETE CASCADE,
  FOREIGN KEY (created_by) REFERENCES users(id) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 6. Question Papers Table
CREATE TABLE IF NOT EXISTS question_papers (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  subject_id INT NULL,
  created_by INT NULL,
  status ENUM('Draft', 'Submitted', 'Pending Approval', 'Approved', 'Rejected', 'Changes Required') DEFAULT 'Draft',
  total_marks INT NOT NULL DEFAULT 20,
  duration VARCHAR(50) DEFAULT '60 Minutes',
  exam_type VARCHAR(100) DEFAULT 'Internal Exam',
  semester VARCHAR(50) NULL,
  academic_year VARCHAR(50) NULL,
  hod_remarks TEXT NULL,
  blueprint_data JSON NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (subject_id) REFERENCES subjects(id) ON DELETE SET NULL,
  FOREIGN KEY (created_by) REFERENCES users(id) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 7. Question Paper Questions Table
CREATE TABLE IF NOT EXISTS question_paper_questions (
  id INT AUTO_INCREMENT PRIMARY KEY,
  question_paper_id INT NOT NULL,
  question_id INT NULL,
  question_number VARCHAR(20) NOT NULL,
  marks INT NOT NULL,
  section VARCHAR(50) NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (question_paper_id) REFERENCES question_papers(id) ON DELETE CASCADE,
  FOREIGN KEY (question_id) REFERENCES questions(id) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 8. Approval System Table
CREATE TABLE IF NOT EXISTS approvals (
  id INT AUTO_INCREMENT PRIMARY KEY,
  question_paper_id INT NOT NULL,
  submitted_by INT NOT NULL,
  reviewed_by INT NULL,
  status ENUM('pending', 'approved', 'rejected') DEFAULT 'pending',
  comments TEXT NULL,
  reviewed_at TIMESTAMP NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (question_paper_id) REFERENCES question_papers(id) ON DELETE CASCADE,
  FOREIGN KEY (submitted_by) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY (reviewed_by) REFERENCES users(id) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
