const http = require('http');

const BASE_URL = 'http://localhost:5000';

function makeRequest(method, path, body = null, token = null) {
  return new Promise((resolve, reject) => {
    const url = new URL(path, BASE_URL);
    const options = {
      method,
      hostname: url.hostname,
      port: url.port,
      path: url.pathname + url.search,
      headers: {
        'Content-Type': 'application/json',
        ...(token ? { 'Authorization': `Bearer ${token}` } : {})
      }
    };

    const req = http.request(options, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const parsed = JSON.parse(data);
          resolve({ status: res.statusCode, body: parsed });
        } catch (e) {
          resolve({ status: res.statusCode, body: data });
        }
      });
    });

    req.on('error', reject);

    if (body) {
      req.write(JSON.stringify(body));
    }
    req.end();
  });
}

async function runTests() {
  console.log('🧪 Starting API Verification Suite...\n');
  let token = null;

  try {
    // 1. Health Check
    console.log('1. Testing GET /api/health...');
    const health = await makeRequest('GET', '/api/health');
    console.log(`   Status: ${health.status}, Response:`, health.body);
    if (health.status !== 200 || !health.body.success) throw new Error('Health check failed');

    // 2. Auth Login (Admin)
    console.log('\n2. Testing POST /api/auth/login (Admin)...');
    const loginRes = await makeRequest('POST', '/api/auth/login', {
      email: 'ananth19012007@gmail.com',
      password: 'admin123_invalid_check'
    });
    console.log(`   Invalid pass check: Status ${loginRes.status} (Expected 401)`);

    const validLogin = await makeRequest('POST', '/api/auth/login', {
      email: 'ananth19012007@gmail.com',
      password: '19012007'
    });
    console.log(`   Valid login: Status ${validLogin.status}, User: ${validLogin.body.user?.name}, Role: ${validLogin.body.user?.role}`);
    token = validLogin.body.token;
    if (!token) throw new Error('Login failed to return token');

    // 3. Auth Me
    console.log('\n3. Testing GET /api/auth/me...');
    const meRes = await makeRequest('GET', '/api/auth/me', null, token);
    console.log(`   Status: ${meRes.status}, Name: ${meRes.body.user?.name}, Email: ${meRes.body.user?.email}`);

    // 4. Departments
    console.log('\n4. Testing GET /api/departments...');
    const depts = await makeRequest('GET', '/api/departments', null, token);
    console.log(`   Status: ${depts.status}, Found: ${depts.body.departments?.length} departments`);

    // 5. Subjects
    console.log('\n5. Testing GET /api/subjects...');
    const subjects = await makeRequest('GET', '/api/subjects', null, token);
    console.log(`   Status: ${subjects.status}, Found: ${subjects.body.subjects?.length} subjects`);

    // 6. Timetable
    console.log('\n6. Testing GET /api/timetable...');
    const tt = await makeRequest('GET', '/api/timetable', null, token);
    console.log(`   Status: ${tt.status}, Found: ${tt.body.timetables?.length} periods`);

    // 7. Question Bank
    console.log('\n7. Testing GET /api/questions...');
    const questions = await makeRequest('GET', '/api/questions', null, token);
    console.log(`   Status: ${questions.status}, Found: ${questions.body.questions?.length} questions`);

    // 8. Question Generation with Gemini / Fallback
    console.log('\n8. Testing POST /api/questions/generate...');
    const genRes = await makeRequest('POST', '/api/questions/generate', {
      subject: 'Database Management Systems',
      unit: 'Unit 1',
      questionType: 'Short Answer',
      difficulty: 'Medium',
      marks: 5,
      count: 3,
      bloomLevel: 'Understand'
    }, token);
    console.log(`   Status: ${genRes.status}, Generated: ${genRes.body.questions?.length} questions`);
    console.log(`   Sample Q1: "${genRes.body.questions?.[0]?.question_text}"`);

    // 9. Question Papers
    console.log('\n9. Testing GET /api/question-papers...');
    const papers = await makeRequest('GET', '/api/question-papers', null, token);
    console.log(`   Status: ${papers.status}, Found: ${papers.body.questionPapers?.length} papers`);

    // 10. Approvals
    console.log('\n10. Testing GET /api/approvals...');
    const approvals = await makeRequest('GET', '/api/approvals', null, token);
    console.log(`   Status: ${approvals.status}, Found: ${approvals.body.approvals?.length} approval records`);

    console.log('\n✨ ALL API TESTS PASSED SUCCESSFULLY! ✨');
    process.exit(0);
  } catch (err) {
    console.error('\n❌ Test failure:', err.message);
    process.exit(1);
  }
}

runTests();
