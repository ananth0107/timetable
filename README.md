# Academic Timetable & Question Bank Management System

An institutional-grade Academic Management System featuring Timetable Scheduling, Question Bank Management, Gemini AI Question Generation, Question Paper Blueprint Authoring, and HOD Academic Approval Governance.

---

## 🏗️ Technology Architecture

* **Frontend**: React + Vite + Vanilla CSS / Modern Design Tokens
* **Backend**: Node.js + Express.js
* **Database**: MySQL (`academic_management`)
* **Authentication**: JWT (JSON Web Tokens) with Bcrypt Password Hashing
* **AI Integration**: Google Gemini API via Node.js Backend (`@google/generative-ai`)
* **API Communication**: REST API with centralized error handling & CORS

## ⚡ 1-Command Startup (All-in-One)

You can start the **Database checks & seeding**, **Backend API**, and **Frontend App** all together with a single command from the project root:

```bash
npm start
```
*(or `npm run dev:all`)*

This will:
1. Initialize and seed the MySQL database if not already done.
2. Launch the Node.js Express backend at `http://localhost:5000`.
3. Launch the React + Vite frontend at `http://localhost:5173`.

---

## 🚀 Step-by-Step Manual Setup Guide

### 1. Database Setup (MySQL)

Ensure MySQL is running on `localhost:3306`.

1. Create the MySQL database:
   ```sql
   CREATE DATABASE academic_management;
   ```

2. Run the database initialization and seed script:
   ```bash
   cd backend
   npm run db:init
   ```
   *(Alternatively, run the SQL commands from [`backend/database/schema.sql`](file:///d:/antigravity/timetable/backend/database/schema.sql) in MySQL Workbench or CLI)*

---

### 2. Backend Setup

1. Open a terminal in the `backend/` directory:
   ```bash
   cd backend
   npm install
   ```

2. Configure environment variables in `backend/.env` (based on `backend/.env.example`):
   ```env
   PORT=5000

   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=your_mysql_password
   DB_NAME=academic_management

   JWT_SECRET=your_jwt_secret

   GEMINI_API_KEY=your_gemini_api_key
   GEMINI_MODEL=gemini-1.5-flash
   ```

3. Start the backend development server:
   ```bash
   npm run dev
   ```

Backend API will be accessible at:
```text
http://localhost:5000
```
Health check:
```text
http://localhost:5000/api/health
```

---

### 3. Frontend Setup

1. In the project root directory:
   ```bash
   npm install
   npm run dev
   ```

Frontend Portal will be accessible at:
```text
http://localhost:5173
```

---

## 🔑 Default Credentials

The system comes pre-seeded with three core academic roles:

| Role | Email | Default Password | Features Accessible |
| :--- | :--- | :--- | :--- |
| **System Administrator** | `ananth19012007@gmail.com` | `19012007` | User Management, Curriculum Configuration, Approvals, All Modules |
| **Head of Department (HOD)** | `gomathinayagam@gmail.com` | `hod123` | Department Timetable Governance, Question Paper Moderation & Approvals |
| **Teaching Faculty** | `alan.davis@voccollege.edu.in` | `faculty123` | Timetable Viewing, AI Question Generator, Question Bank, Paper Builder |

---

## 🤖 Google Gemini AI Question Generator

To enable live Google Gemini AI generation:
1. Obtain an API Key from [Google AI Studio](https://aistudio.google.com/).
2. Add your key to `backend/.env`:
   ```env
   GEMINI_API_KEY=AIzaSy...
   ```
3. Restart the backend server. If no API key is specified, the system utilizes a curriculum fallback generator for testing.
