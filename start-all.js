import { spawn } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('===============================================================');
console.log('🏛️  Starting Academic Timetable & Question Management System');
console.log('===============================================================\n');

// 1. Run Database Init First
console.log('📦 Step 1/3: Checking & Initializing MySQL Database...');
const initDbProcess = spawn('node', ['backend/database/initDb.js'], {
  cwd: __dirname,
  stdio: 'inherit',
  shell: true
});

initDbProcess.on('close', (code) => {
  if (code !== 0) {
    console.error(`\n⚠️  Database initialization exited with code ${code}.`);
    console.error('Please verify that MySQL service is running on port 3306.\n');
  }

  console.log('\n🚀 Step 2/3: Launching Node.js Express Backend (Port 5000)...');
  const backendProcess = spawn('node', ['backend/server.js'], {
    cwd: __dirname,
    stdio: 'inherit',
    shell: true
  });

  console.log('⚡ Step 3/3: Launching React + Vite Frontend (Port 5173)...');
  const frontendProcess = spawn('npx', ['vite', '--host'], {
    cwd: __dirname,
    stdio: 'inherit',
    shell: true
  });

  // Handle process exits
  const cleanup = () => {
    console.log('\n🛑 Shutting down backend and frontend services...');
    backendProcess.kill();
    frontendProcess.kill();
    process.exit(0);
  };

  process.on('SIGINT', cleanup);
  process.on('SIGTERM', cleanup);
});
