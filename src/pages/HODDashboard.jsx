import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useAcademic } from '../context/AcademicContext';
import { Link } from 'react-router-dom';
import {
  Users,
  CheckSquare,
  CalendarDays,
  FileText,
  FileQuestion,
  Database,
  UserCheck,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import { StatCard } from '../components/common/StatCard';
import { Badge } from '../components/common/Badge';

export const HODDashboard = () => {
  const { currentUser } = useAuth();
  const {
    questionPapers = [],
    questionBank = [],
    users = []
  } = useAcademic();

  const facultyMembers = users.filter(u => u.role === 'staff' || u.role === 'hod');

  return (
    <div className="page-enter" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
      {/* Official Academic Welcome Bar */}
      <div
        className="card"
        style={{
          borderLeft: '4px solid var(--primary-700)',
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
            Head of Department (HOD) — {currentUser?.name}
          </h1>
          <p style={{ fontSize: '0.8rem', margin: '0.2rem 0 0 0', color: 'var(--text-secondary)' }}>
            Department of Computer Science • B.Sc. CS (UG) & M.Sc. CS (PG) Curriculum Governance
          </p>
        </div>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <Link to="/question-paper/create" className="btn btn-primary btn-sm">
            <FileText size={15} />
            <span>Exam Paper Builder</span>
          </Link>
          <Link to="/timetable" className="btn btn-outline btn-sm">
            <CalendarDays size={15} />
            <span>Master Timetable</span>
          </Link>
        </div>
      </div>

      {/* Practical Stats Grid */}
      <div className="grid-4">
        <StatCard
          title="Question Bank Repository"
          value={questionBank.length}
          subtitle="Verified technical questions"
          icon={Database}
          variant="primary"
        />
        <StatCard
          title="Department Faculty"
          value={facultyMembers.length}
          subtitle="Teaching staff & professors"
          icon={Users}
        />
        <StatCard
          title="Exam Blueprints"
          value={questionPapers.length}
          subtitle="Ready for examination & print"
          icon={FileText}
          variant="success"
        />
        <StatCard
          title="Active Batches"
          value="5 Batches"
          subtitle="UG: I, II, III • PG: I, II"
          icon={CalendarDays}
        />
      </div>

      {/* Department Question Papers & Blueprints */}
      <div className="card">
        <div className="card-header">
          <div>
            <div className="card-title">
              <FileText size={17} style={{ color: 'var(--primary-600)' }} />
              <span>Department Question Papers & Exam Blueprints</span>
            </div>
            <div className="card-subtitle">
              Continuous internal assessments and semester examination papers
            </div>
          </div>
          <Link to="/question-paper/create" className="btn btn-primary btn-sm">
            <FileText size={14} />
            <span>Create New Paper</span>
          </Link>
        </div>

        {questionPapers.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '1.5rem', color: 'var(--text-muted)' }}>
            <p style={{ margin: 0, fontSize: '0.85rem' }}>
              No question papers created yet.
            </p>
          </div>
        ) : (
          <div className="table-container">
            <table className="academic-table">
              <thead>
                <tr>
                  <th>Paper Title</th>
                  <th>Course</th>
                  <th>Faculty Author</th>
                  <th>Exam Type & Marks</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {questionPapers.map(paper => (
                  <tr key={paper.id}>
                    <td>
                      <div style={{ fontWeight: 600 }}>{paper.title}</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                        {paper.semester} • {paper.programName}
                      </div>
                    </td>
                    <td>
                      <div style={{ fontWeight: 600 }}>{paper.subjectCode}</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                        {paper.subject}
                      </div>
                    </td>
                    <td style={{ fontSize: '0.82rem' }}>{paper.author || 'Faculty Member'}</td>
                    <td>
                      <Badge variant="neutral">
                        {paper.examType} • {paper.maxMarks}M
                      </Badge>
                    </td>
                    <td>
                      <Badge variant="success">Ready</Badge>
                    </td>
                    <td>
                      <div style={{ display: 'flex', gap: '0.4rem' }}>
                        <Link
                          to="/question-paper/create"
                          className="btn btn-outline btn-sm"
                          style={{ padding: '0.2rem 0.55rem', fontSize: '0.75rem' }}
                        >
                          Open Builder
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Grid: Faculty Directory & Department Quick Management */}
      <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: '1.25rem' }}>
        {/* Department Faculty Directory */}
        <div className="card">
          <div className="card-header">
            <div>
              <div className="card-title">
                <Users size={17} style={{ color: 'var(--primary-600)' }} />
                <span>Department Faculty Members</span>
              </div>
              <div className="card-subtitle">Teaching staff and academic designations</div>
            </div>
            <Link to="/users" style={{ fontSize: '0.78rem', fontWeight: 600 }}>
              Manage Users →
            </Link>
          </div>

          <div className="table-container">
            <table className="academic-table">
              <thead>
                <tr>
                  <th>Faculty Name</th>
                  <th>Designation</th>
                  <th>Department Role</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {facultyMembers.slice(0, 6).map(member => (
                  <tr key={member.id}>
                    <td>
                      <div style={{ fontWeight: 600 }}>{member.name}</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                        {member.email}
                      </div>
                    </td>
                    <td style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                      {member.designation || 'Faculty'}
                    </td>
                    <td style={{ fontSize: '0.8rem' }}>
                      <Badge variant={member.role === 'hod' ? 'purple' : 'neutral'}>
                        {member.role === 'hod' ? 'Head of Dept' : 'Faculty'}
                      </Badge>
                    </td>
                    <td>
                      <Badge variant={member.status === 'Active' ? 'success' : 'neutral'}>
                        {member.status || 'Active'}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Department Management Shortcuts */}
        <div className="card">
          <div className="card-header">
            <div>
              <div className="card-title">
                <CalendarDays size={17} style={{ color: 'var(--primary-600)' }} />
                <span>Department Administration</span>
              </div>
              <div className="card-subtitle">Governance & operational shortcuts</div>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <Link
              to="/timetable"
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
                  <CalendarDays size={18} />
                </div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: '0.85rem' }}>Master Timetable Schedule</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Class timetables, periods, and room allocations</div>
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
                  <div style={{ fontWeight: 600, fontSize: '0.85rem' }}>Exam Paper Architect</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Build, blueprint, and print examination question papers</div>
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
                  <div style={{ fontWeight: 600, fontSize: '0.85rem' }}>Question Bank Management</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{questionBank.length} questions cataloged across courses</div>
                </div>
              </div>
              <ArrowRight size={15} style={{ color: 'var(--text-muted)' }} />
            </Link>

            <Link
              to="/users"
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
                  <UserCheck size={18} />
                </div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: '0.85rem' }}>Department User Management</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Faculty accounts, roles, and course assignments</div>
                </div>
              </div>
              <ArrowRight size={15} style={{ color: 'var(--text-muted)' }} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HODDashboard;
