import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useAcademic } from '../context/AcademicContext';
import { Link } from 'react-router-dom';
import {
  Users,
  ShieldCheck,
  CalendarDays,
  Settings,
  BookOpen,
  Plus,
  Building,
  GraduationCap
} from 'lucide-react';
import { StatCard } from '../components/common/StatCard';
import { Badge } from '../components/common/Badge';

export const AdminDashboard = () => {
  const { currentUser } = useAuth();
  const { users = [], programs = [], subjects = [] } = useAcademic();

  const facultyCount = users.filter(u => u.role === 'staff').length;
  const hodCount = users.filter(u => u.role === 'hod').length;
  const adminCount = users.filter(u => u.role === 'admin').length;

  return (
    <div className="page-enter" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
      {/* Institutional Admin Banner */}
      <div
        className="card"
        style={{
          borderLeft: '4px solid var(--danger-600)',
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
            System Administration Portal — {currentUser?.name}
          </h1>
          <p style={{ fontSize: '0.8rem', margin: '0.2rem 0 0 0', color: 'var(--text-secondary)' }}>
            Institutional Access Governance & Master Academic Data Management
          </p>
        </div>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <Link to="/users" className="btn btn-primary btn-sm">
            <Users size={15} />
            <span>Manage Users</span>
          </Link>
          <Link to="/settings" className="btn btn-outline btn-sm">
            <Settings size={15} />
            <span>System Settings</span>
          </Link>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid-4">
        <StatCard
          title="Registered Users"
          value={users.length}
          subtitle={`${facultyCount} Faculty • ${hodCount} HOD • ${adminCount} Admin`}
          icon={Users}
          variant="primary"
        />
        <StatCard
          title="Academic Programs"
          value={programs.length}
          subtitle="B.Sc. CS (UG) & M.Sc. CS (PG)"
          icon={GraduationCap}
        />
        <StatCard
          title="Master Courses"
          value={subjects.length}
          subtitle="Curriculum subjects active"
          icon={BookOpen}
          variant="success"
        />
        <StatCard
          title="Departments"
          value="1 Dept"
          subtitle="Department of Computer Science"
          icon={Building}
        />
      </div>

      {/* User Roster Summary */}
      <div className="card">
        <div className="card-header">
          <div>
            <div className="card-title">
              <Users size={17} style={{ color: 'var(--primary-600)' }} />
              <span>Academic Personnel Roster</span>
            </div>
            <div className="card-subtitle">
              Active faculty, HOD, and administrative user accounts
            </div>
          </div>
          <Link to="/users" className="btn btn-primary btn-sm">
            <Plus size={14} />
            <span>Add User</span>
          </Link>
        </div>

        <div className="table-container">
          <table className="academic-table">
            <thead>
              <tr>
                <th>User Details</th>
                <th>Employee ID</th>
                <th>Institutional Role</th>
                <th>Department</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map(u => (
                <tr key={u.id}>
                  <td>
                    <div style={{ fontWeight: 600 }}>{u.name}</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{u.email}</div>
                  </td>
                  <td style={{ fontSize: '0.8rem', fontWeight: 500 }}>{u.empId || '—'}</td>
                  <td>
                    <Badge
                      variant={
                        u.role === 'admin'
                          ? 'danger'
                          : u.role === 'hod'
                          ? 'primary'
                          : 'neutral'
                      }
                    >
                      {u.role?.toUpperCase()}
                    </Badge>
                  </td>
                  <td style={{ fontSize: '0.8rem' }}>{u.department}</td>
                  <td>
                    <Badge variant={u.status === 'Active' ? 'success' : 'neutral'}>
                      {u.status || 'Active'}
                    </Badge>
                  </td>
                  <td>
                    <Link
                      to="/users"
                      className="btn btn-outline btn-sm"
                      style={{ padding: '0.2rem 0.5rem', fontSize: '0.75rem' }}
                    >
                      Manage
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
