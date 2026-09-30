import React, { useState } from 'react';
import { useAcademic } from '../context/AcademicContext';
import {
  Users,
  Plus,
  Search,
  Edit2,
  Lock,
  Power,
  Eye,
  ShieldCheck,
  Mail,
  Phone,
  Briefcase
} from 'lucide-react';
import { PageHeader } from '../components/common/PageHeader';
import { Table } from '../components/common/Table';
import { Button } from '../components/common/Button';
import { Badge } from '../components/common/Badge';
import { Modal } from '../components/common/Modal';
import { ConfirmDialog } from '../components/common/ConfirmDialog';

export const UserManagement = () => {
  const { users, addUser, updateUser, toggleUserStatus, showToast } = useAcademic();

  const [searchTerm, setSearchTerm] = useState('');
  const [roleFilter, setRoleFilter] = useState('All');

  // Modals
  const [isAddUserOpen, setIsAddUserOpen] = useState(false);
  const [viewUser, setViewUser] = useState(null);
  const [editUser, setEditUser] = useState(null);
  const [resetPassUser, setResetPassUser] = useState(null);
  const [newPassword, setNewPassword] = useState('');

  // New User Form
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('staff');
  const [department, setDepartment] = useState('Department of Computer Science');
  const [deptCode, setDeptCode] = useState('CS');
  const [designation, setDesignation] = useState('Assistant Professor');
  const [empId, setEmpId] = useState('');
  const [phone, setPhone] = useState('');

  const filteredUsers = users.filter(u => {
    const matchSearch = !searchTerm ||
      u.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      u.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      u.empId?.toLowerCase().includes(searchTerm.toLowerCase());

    const matchRole = roleFilter === 'All' || u.role === roleFilter;

    return matchSearch && matchRole;
  });

  const existingHOD = users.find(u => u.role === 'hod');

  const handleCreateUser = (e) => {
    e.preventDefault();
    if (role === 'hod' && existingHOD) {
      showToast(`The department already has a designated Head of Department (${existingHOD.name}). Only 1 HOD is permitted.`, 'error');
      return;
    }

    addUser({
      name,
      email,
      role,
      department: 'Department of Computer Science',
      deptCode: 'CS',
      designation,
      empId: empId || `FAC-CS-${Math.floor(100 + Math.random() * 900)}`,
      phone: phone || '+1 (555) 000-1234',
      assignedSubjects: []
    });

    setIsAddUserOpen(false);
    setName('');
    setEmail('');
    setEmpId('');
    setPhone('');
    showToast(`Faculty account created successfully for ${name}!`, 'success');
  };

  const handlePasswordReset = (e) => {
    e.preventDefault();
    if (resetPassUser) {
      showToast(`Temporary password generated and emailed to ${resetPassUser.email}`, 'success');
      setResetPassUser(null);
      setNewPassword('');
    }
  };

  const columns = [
    {
      header: 'Faculty / User',
      key: 'name',
      render: (val, row) => (
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <img
            src={row.avatar}
            alt={val}
            style={{ width: '36px', height: '36px', borderRadius: '50%', objectFit: 'cover' }}
          />
          <div>
            <span style={{ fontWeight: 600, color: 'var(--text-primary)', display: 'block' }}>
              {val}
            </span>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
              {row.email}
            </span>
          </div>
        </div>
      )
    },
    {
      header: 'Role',
      key: 'role',
      sortable: true,
      width: '100px',
      render: (val) => (
        <Badge variant={val === 'admin' ? 'danger' : val === 'hod' ? 'purple' : 'primary'}>
          {val.toUpperCase()}
        </Badge>
      )
    },
    {
      header: 'Department',
      key: 'deptCode',
      sortable: true,
      width: '90px',
      render: (val, row) => (
        <span style={{ fontWeight: 600, fontSize: '0.82rem' }} title={row.department}>
          {val}
        </span>
      )
    },
    {
      header: 'Employee ID',
      key: 'empId',
      sortable: true,
      width: '130px',
      render: (val) => <span style={{ fontSize: '0.82rem', fontFamily: 'monospace' }}>{val}</span>
    },
    {
      header: 'Status',
      key: 'status',
      sortable: true,
      width: '100px',
      render: (val) => (
        <Badge variant={val === 'Active' ? 'success' : 'danger'}>
          {val}
        </Badge>
      )
    },
    {
      header: 'Actions',
      key: 'id',
      width: '160px',
      render: (id, row) => (
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
          <button
            onClick={() => setViewUser(row)}
            className="btn btn-ghost btn-sm btn-icon"
            title="View Details"
          >
            <Eye size={15} />
          </button>
          <button
            onClick={() => setEditUser(row)}
            className="btn btn-ghost btn-sm btn-icon"
            title="Edit User"
          >
            <Edit2 size={15} />
          </button>
          <button
            onClick={() => setResetPassUser(row)}
            className="btn btn-ghost btn-sm btn-icon"
            title="Reset Password"
          >
            <Lock size={15} />
          </button>
          <button
            onClick={() => toggleUserStatus(id)}
            className="btn btn-ghost btn-sm btn-icon"
            title={row.status === 'Active' ? 'Deactivate User' : 'Activate User'}
            style={{ color: row.status === 'Active' ? 'var(--warning-600)' : 'var(--success-600)' }}
          >
            <Power size={15} />
          </button>
        </div>
      )
    }
  ];

  return (
    <div className="page-enter" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      {/* Header */}
      <PageHeader
        title="Institutional User & Identity Management"
        subtitle="Provision faculty credentials, manage department affiliations, and enforce role-based permissions"
        breadcrumbs={[
          { label: 'Dashboard', to: '/dashboard' },
          { label: 'User Management' }
        ]}
        actions={
          <Button
            variant="primary"
            size="sm"
            icon={Plus}
            onClick={() => setIsAddUserOpen(true)}
          >
            Add New User
          </Button>
        }
      />

      {/* Filter Bar */}
      <div className="card" style={{ padding: '1rem 1.25rem' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '1rem', justifyContent: 'space-between' }}>
          <div style={{ flex: 1, minWidth: '260px', position: 'relative' }}>
            <Search
              size={16}
              style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-light)', pointerEvents: 'none' }}
            />
            <input
              type="text"
              className="form-input"
              style={{ paddingLeft: '36px' }}
              placeholder="Search faculty by name, email, employee ID..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ fontSize: '0.84rem', fontWeight: 600, color: 'var(--text-secondary)' }}>Role:</span>
            <select
              className="form-select"
              value={roleFilter}
              onChange={(e) => setRoleFilter(e.target.value)}
              style={{ width: 'auto', padding: '0.45rem 0.75rem' }}
            >
              <option value="All">All Roles</option>
              <option value="staff">Staff (Faculty)</option>
              <option value="hod">HOD (Head of Dept)</option>
              <option value="admin">System Admin</option>
            </select>
          </div>
        </div>
      </div>

      {/* Users Table */}
      <Table columns={columns} data={filteredUsers} pageSize={6} />

      {/* Add User Modal */}
      <Modal
        isOpen={isAddUserOpen}
        onClose={() => setIsAddUserOpen(false)}
        title="Provision New Faculty Account"
        icon={Plus}
      >
        <form onSubmit={handleCreateUser}>
          <div className="form-group">
            <label className="form-label form-label-required">Full Name</label>
            <input
              type="text"
              className="form-input"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Prof. David Chang"
              required
            />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div className="form-group">
              <label className="form-label form-label-required">Institutional Email</label>
              <input
                type="email"
                className="form-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@apexcollege.edu"
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label form-label-required">System Role</label>
              <select className="form-select" value={role} onChange={(e) => setRole(e.target.value)}>
                <option value="staff">Staff (Teaching Faculty)</option>
                <option value="hod" disabled={!!existingHOD}>
                  HOD (Head of Department) {existingHOD ? '— [Position Filled]' : ''}
                </option>
                <option value="admin">Central Administrator</option>
              </select>
              {role === 'hod' && existingHOD && (
                <div style={{ fontSize: '0.75rem', color: 'var(--warning-600)', marginTop: '0.25rem' }}>
                  ℹ️ Active HOD: {existingHOD.name}. Only one HOD is permitted for the Department of Computer Science.
                </div>
              )}
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div className="form-group">
              <label className="form-label form-label-required">Department</label>
              <select
                className="form-select"
                value={deptCode}
                onChange={(e) => {
                  setDeptCode(e.target.value);
                  setDepartment('Department of Computer Science');
                }}
              >
                <option value="CS">Department of Computer Science (UG & PG)</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">Designation</label>
              <input
                type="text"
                className="form-input"
                value={designation}
                onChange={(e) => setDesignation(e.target.value)}
                placeholder="Assistant Professor"
              />
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.5rem', marginTop: '1.25rem' }}>
            <Button variant="outline" size="sm" onClick={() => setIsAddUserOpen(false)}>
              Cancel
            </Button>
            <Button type="submit" variant="primary" size="sm">
              Create User Account
            </Button>
          </div>
        </form>
      </Modal>

      {/* View User Modal */}
      <Modal
        isOpen={!!viewUser}
        onClose={() => setViewUser(null)}
        title="Faculty Profile & Credentials"
        icon={Users}
      >
        {viewUser && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <img src={viewUser.avatar} alt={viewUser.name} style={{ width: '60px', height: '60px', borderRadius: '50%', objectFit: 'cover' }} />
              <div>
                <h3 style={{ margin: 0, fontSize: '1.2rem' }}>{viewUser.name}</h3>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{viewUser.designation} • {viewUser.department}</div>
                <Badge variant="primary" size="sm" style={{ marginTop: '0.35rem' }}>ID: {viewUser.empId}</Badge>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', backgroundColor: 'var(--bg-surface-hover)', padding: '1rem', borderRadius: 'var(--radius-md)', fontSize: '0.85rem' }}>
              <div><strong>Email:</strong> {viewUser.email}</div>
              <div><strong>Phone:</strong> {viewUser.phone || '+1 (555) 234-8901'}</div>
              <div><strong>Role:</strong> {viewUser.role.toUpperCase()}</div>
              <div><strong>Status:</strong> <Badge>{viewUser.status}</Badge></div>
            </div>
          </div>
        )}
      </Modal>

      {/* Reset Password Modal */}
      <Modal
        isOpen={!!resetPassUser}
        onClose={() => setResetPassUser(null)}
        title="Reset User Credentials"
        subtitle={resetPassUser ? `Generating security token for ${resetPassUser.name}` : ''}
        icon={Lock}
      >
        <form onSubmit={handlePasswordReset}>
          <div className="form-group">
            <label className="form-label form-label-required">Set Temporary Password</label>
            <input
              type="text"
              className="form-input"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="e.g. ApexSecure2026!#"
              required
            />
            <span className="form-hint">A verification email will be dispatched to {resetPassUser?.email}.</span>
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.5rem', marginTop: '1.25rem' }}>
            <Button variant="outline" size="sm" onClick={() => setResetPassUser(null)}>
              Cancel
            </Button>
            <Button type="submit" variant="primary" size="sm">
              Dispatch Password Reset
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
};
