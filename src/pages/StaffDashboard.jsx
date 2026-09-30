import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useAcademic } from '../context/AcademicContext';
import { Link } from 'react-router-dom';
import {
  CalendarDays,
  BookOpen,
  FileText,
  FileQuestion,
  CheckCircle2,
  Database,
  Sparkles,
  ArrowRight,
  Plus
} from 'lucide-react';
import { StatCard } from '../components/common/StatCard';
import { Badge } from '../components/common/Badge';

export const StaffDashboard = () => {
  const { currentUser } = useAuth();
  const {
    questionPapers = [],
    questionBank = [],
    subjects = [],
    classTimetables,
    CS_MORNING_SLOTS
  } = useAcademic();

  const facultyLastName = currentUser?.name?.split(' ').slice(-1)[0]?.toLowerCase() || '';

  // Filter papers created by current staff
  const staffPapers = questionPapers.filter(
    p =>
      p.author?.toLowerCase().includes(facultyLastName) ||
      p.author?.toLowerCase().includes(currentUser?.name?.toLowerCase() || '')
  );

  const pendingPapersCount = staffPapers.filter(
    p => p.status === 'Draft' || p.status === 'Changes Required'
  ).length;

  const approvedPapersCount = staffPapers.filter(p => p.status === 'Approved').length;

  // Extract today's classes for this faculty
  const todayClasses = [];
  const days = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const dayIndex = new Date().getDay(); // 0 = Sun, 1 = Mon, ..., 6 = Sat
  const todayKey = dayIndex >= 1 && dayIndex <= 6 ? days[dayIndex - 1] : 'MON';

  if (classTimetables) {
    Object.entries(classTimetables).forEach(([clsKey, tbl]) => {
      if (todayKey === 'SAT' && tbl?.saturdayMode === 'OFF') return;

      const isSaturdayMorning = todayKey === 'SAT' && tbl?.saturdayMode === 'MORNING';
      const daySlots = tbl?.grid?.[todayKey] || [];
      daySlots.forEach((slot, pIdx) => {
        if (!slot.isBreak && !slot.isFree && slot.code) {
          const isMyClass =
            slot.faculty?.toLowerCase().includes(facultyLastName) ||
            currentUser?.assignedSubjects?.some(as => as.includes(slot.code));
          if (isMyClass) {
            const timeDisplay =
              isSaturdayMorning && CS_MORNING_SLOTS
                ? CS_MORNING_SLOTS[pIdx]?.time || `Period ${pIdx + 1}`
                : tbl.slots?.[pIdx]?.time || `Period ${pIdx + 1}`;

            todayClasses.push({
              period: timeDisplay,
              periodNumber: pIdx + 1,
              code: slot.code,
              subject: slot.subject || slot.name,
              section: `${tbl.year || ''} Year ${
                tbl.programId === 'UG_BSCCS' ? 'B.Sc. CS' : 'M.Sc. CS'
              } (${tbl.section || ''})`,
              room: slot.room || 'LH-101',
              isLab: slot.isLab || false
            });
          }
        }
      });
    });
  }

  const assignedCount = currentUser?.assignedSubjects?.length || (subjects.length > 0 ? Math.min(subjects.length, 3) : 2);

  return (
    <div className="page-enter" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
      {/* Official Academic Welcome Bar */}
      <div
        className="card"
        style={{
          borderLeft: '4px solid var(--primary-600)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem',
          padding: '1rem 1.25rem'
        }}
      >
        <div>
          <h1 style={{ fontSize: '1.25rem', margin: 0, fontWeight: 700 }}>
            Faculty Academic Portal — {currentUser?.name}
          </h1>
          <p style={{ fontSize: '0.8rem', margin: '0.2rem 0 0 0', color: 'var(--text-secondary)' }}>
            {currentUser?.designation || 'Faculty'} • Department of Computer Science • Emp ID: {currentUser?.empId || 'FAC-CS'}
          </p>
        </div>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <Link to="/questions/generate" className="btn btn-primary btn-sm">
            <FileQuestion size={15} />
            <span>Generate Questions</span>
          </Link>
          <Link to="/timetable" className="btn btn-outline btn-sm">
            <CalendarDays size={15} />
            <span>View Full Timetable</span>
          </Link>
        </div>
      </div>

      {/* Practical Stats Grid */}
      <div className="grid-4">
        <StatCard
          title="Today's Teaching Schedule"
          value={todayClasses.length}
          subtitle={`Periods assigned for ${todayKey}`}
          icon={CalendarDays}
          variant="primary"
        />
        <StatCard
          title="Assigned Courses"
          value={assignedCount}
          subtitle="Active curriculum subjects"
          icon={BookOpen}
        />
        <StatCard
          title="Question Papers"
          value={staffPapers.length}
          subtitle="Examination blueprints ready"
          icon={FileText}
          variant="primary"
        />
        <StatCard
          title="Question Bank Repository"
          value={questionBank.length}
          subtitle="Total verified questions"
          icon={Database}
          variant="success"
        />
      </div>

      {/* Main Content: Today's Classes & Quick Actions */}
      <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: '1.25rem' }}>
        {/* Today's Classes */}
        <div className="card">
          <div className="card-header">
            <div>
              <div className="card-title">
                <CalendarDays size={17} style={{ color: 'var(--primary-600)' }} />
                <span>Today's Class Schedule ({todayKey})</span>
              </div>
              <div className="card-subtitle">Official lecture & laboratory assignments</div>
            </div>
            <Link to="/timetable" style={{ fontSize: '0.78rem', fontWeight: 600 }}>
              Class Schedule →
            </Link>
          </div>

          {todayClasses.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '2rem 1rem', color: 'var(--text-muted)' }}>
              <p style={{ margin: 0, fontSize: '0.85rem' }}>No classes scheduled for today.</p>
            </div>
          ) : (
            <div className="table-container">
              <table className="academic-table">
                <thead>
                  <tr>
                    <th>Timing</th>
                    <th>Course Code & Title</th>
                    <th>Class Batch</th>
                    <th>Room / Lab</th>
                  </tr>
                </thead>
                <tbody>
                  {todayClasses.map((cls, idx) => (
                    <tr key={idx}>
                      <td style={{ fontWeight: 600, fontSize: '0.8rem', whiteSpace: 'nowrap' }}>
                        {cls.period}
                      </td>
                      <td>
                        <div style={{ fontWeight: 600 }}>{cls.code}</div>
                        <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
                          {cls.subject}
                        </div>
                      </td>
                      <td style={{ fontSize: '0.8rem' }}>{cls.section}</td>
                      <td>
                        <Badge variant={cls.isLab ? 'warning' : 'neutral'}>
                          {cls.room} {cls.isLab && '• Lab'}
                        </Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Academic Quick Actions & Tools */}
        <div className="card">
          <div className="card-header">
            <div>
              <div className="card-title">
                <Sparkles size={17} style={{ color: 'var(--primary-600)' }} />
                <span>Academic Quick Actions</span>
              </div>
              <div className="card-subtitle">Assessment and curriculum tools</div>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <Link
              to="/questions/generate"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0.85rem 1rem',
                backgroundColor: 'var(--bg-app)',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--border-light)',
                textDecoration: 'none',
                color: 'inherit',
                transition: 'all 0.15s ease'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{ color: 'var(--primary-600)' }}>
                  <Sparkles size={18} />
                </div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: '0.85rem' }}>Generate Questions with AI</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Create Bloom's taxonomy mapped questions</div>
                </div>
              </div>
              <ArrowRight size={15} style={{ color: 'var(--text-muted)' }} />
            </Link>

            <Link
              to="/question-paper/create"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0.85rem 1rem',
                backgroundColor: 'var(--bg-app)',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--border-light)',
                textDecoration: 'none',
                color: 'inherit',
                transition: 'all 0.15s ease'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{ color: 'var(--primary-600)' }}>
                  <FileText size={18} />
                </div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: '0.85rem' }}>Build Question Paper</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Assemble and balance CIA examination papers</div>
                </div>
              </div>
              <ArrowRight size={15} style={{ color: 'var(--text-muted)' }} />
            </Link>

            <Link
              to="/questions/bank"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0.85rem 1rem',
                backgroundColor: 'var(--bg-app)',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--border-light)',
                textDecoration: 'none',
                color: 'inherit',
                transition: 'all 0.15s ease'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{ color: 'var(--primary-600)' }}>
                  <Database size={18} />
                </div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: '0.85rem' }}>Question Bank Repository</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Browse, filter and manage question bank items</div>
                </div>
              </div>
              <ArrowRight size={15} style={{ color: 'var(--text-muted)' }} />
            </Link>
          </div>
        </div>
      </div>

      {/* Question Papers Status Table */}
      <div className="card">
        <div className="card-header">
          <div>
            <div className="card-title">
              <FileText size={17} style={{ color: 'var(--primary-600)' }} />
              <span>Assessment & Question Papers</span>
            </div>
            <div className="card-subtitle">Internal examination blueprints and submission statuses</div>
          </div>
          <Link to="/question-paper/create" className="btn btn-primary btn-sm">
            <Plus size={14} />
            <span>Create New Question Paper</span>
          </Link>
        </div>

        {staffPapers.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '1.5rem', color: 'var(--text-muted)' }}>
            <p style={{ margin: 0, fontSize: '0.85rem' }}>No question papers created yet. Click above to create one.</p>
          </div>
        ) : (
          <div className="table-container">
            <table className="academic-table">
              <thead>
                <tr>
                  <th>Paper Title & Exam</th>
                  <th>Course</th>
                  <th>Max Marks</th>
                  <th>Status</th>
                  <th>HOD Verification Remarks</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {staffPapers.map(paper => (
                  <tr key={paper.id}>
                    <td>
                      <div style={{ fontWeight: 600 }}>{paper.title}</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                        {paper.examType} • {paper.semester}
                      </div>
                    </td>
                    <td>
                      <div style={{ fontWeight: 600 }}>{paper.subjectCode}</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                        {paper.subject}
                      </div>
                    </td>
                    <td style={{ fontWeight: 600 }}>{paper.maxMarks} Marks</td>
                    <td>
                      <Badge
                        variant={
                          paper.status === 'Approved'
                            ? 'success'
                            : paper.status === 'Submitted'
                            ? 'primary'
                            : paper.status === 'Changes Required'
                            ? 'danger'
                            : 'neutral'
                        }
                      >
                        {paper.status}
                      </Badge>
                    </td>
                    <td style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', maxWidth: '240px' }}>
                      {paper.hodRemarks || '—'}
                    </td>
                    <td>
                      <Link
                        to={`/question-paper/create?edit=${paper.id}`}
                        className="btn btn-outline btn-sm"
                        style={{ padding: '0.2rem 0.5rem', fontSize: '0.75rem' }}
                      >
                        Edit / View
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default StaffDashboard;
