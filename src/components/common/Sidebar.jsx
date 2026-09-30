import React from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import {
  LayoutDashboard,
  CalendarDays,
  FileQuestion,
  Database,
  FileText,
  CheckSquare,
  Users,
  Settings,
  LogOut,
  GraduationCap,
  X
} from 'lucide-react';

export const Sidebar = ({ isOpen, isCollapsed, onToggleCollapse, onClose }) => {
  const { role, currentUser, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const navLinkStyle = (isActive) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '0.65rem',
    padding: isCollapsed ? '0.6rem 0' : '0.5rem 0.75rem',
    justifyContent: isCollapsed ? 'center' : 'flex-start',
    borderRadius: 'var(--radius-sm)',
    color: isActive ? 'var(--text-sidebar-bright)' : 'var(--text-sidebar)',
    backgroundColor: isActive ? 'var(--bg-sidebar-active)' : 'transparent',
    fontWeight: isActive ? 600 : 400,
    fontSize: '0.84rem',
    textDecoration: 'none',
    position: 'relative',
    transition: 'background-color var(--transition-fast)'
  });

  const sectionHeaderStyle = {
    padding: '0.65rem 0.75rem 0.25rem',
    fontSize: '0.68rem',
    fontWeight: 700,
    textTransform: 'uppercase',
    letterSpacing: '0.06em',
    color: '#94a3b8',
    display: isCollapsed ? 'none' : 'block'
  };

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div
          className="mobile-backdrop"
          onClick={onClose}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(15, 23, 42, 0.5)',
            zIndex: 90,
            display: 'none'
          }}
        />
      )}

      <aside
        className={`sidebar-container ${isOpen ? 'open' : ''} ${isCollapsed ? 'collapsed' : ''}`}
        style={{
          width: isCollapsed ? 'var(--sidebar-collapsed-width)' : 'var(--sidebar-width)',
          backgroundColor: 'var(--bg-sidebar)',
          color: 'var(--text-sidebar)',
          display: 'flex',
          flexDirection: 'column',
          flexShrink: 0,
          height: '100vh',
          position: 'sticky',
          top: 0,
          left: 0,
          zIndex: 95,
          borderRight: '1px solid rgba(255, 255, 255, 0.08)'
        }}
      >
        {/* Institutional Branding */}
        <div
          style={{
            height: 'var(--header-height)',
            padding: isCollapsed ? '0 0.5rem' : '0 1.25rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: isCollapsed ? 'center' : 'space-between',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              cursor: isCollapsed ? 'pointer' : 'default',
              overflow: 'hidden'
            }}
            onClick={isCollapsed ? onToggleCollapse : undefined}
          >
            <div
              style={{
                width: '38px',
                height: '38px',
                borderRadius: 'var(--radius-md)',
                backgroundColor: 'var(--primary-600)',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}
            >
              <GraduationCap size={22} />
            </div>
            {!isCollapsed && (
              <div style={{ whiteSpace: 'nowrap' }}>
                <span
                  style={{
                    fontSize: '0.96rem',
                    fontWeight: 700,
                    color: 'var(--text-sidebar-bright)',
                    display: 'block',
                    lineHeight: 1.2
                  }}
                >
                  V.O.C. College
                </span>
                <span style={{ fontSize: '0.72rem', color: '#93c5fd' }}>
                  Computer Science Portal
                </span>
              </div>
            )}
          </div>

          <button
            onClick={onClose}
            className="mobile-close-btn"
            style={{
              background: 'transparent',
              border: 'none',
              color: 'var(--text-sidebar)',
              cursor: 'pointer',
              display: 'none',
              padding: '0.25rem'
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Navigation Sections */}
        <nav
          style={{
            flex: 1,
            padding: isCollapsed ? '0.6rem 0.35rem' : '0.6rem 0.5rem',
            overflowY: 'auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.2rem'
          }}
        >
          {/* 1. Dashboard */}
          <NavLink
            to="/dashboard"
            title={isCollapsed ? 'Dashboard' : undefined}
            style={({ isActive }) => navLinkStyle(isActive)}
            onClick={() => {
              if (window.innerWidth <= 992) onClose();
            }}
          >
            <LayoutDashboard size={17} style={{ flexShrink: 0 }} />
            {!isCollapsed && <span>Dashboard</span>}
          </NavLink>

          {/* 2. Academic Section */}
          <div style={sectionHeaderStyle}>Academic</div>

          <NavLink
            to="/timetable"
            title={isCollapsed ? 'Timetable' : undefined}
            style={({ isActive }) => navLinkStyle(isActive)}
            onClick={() => {
              if (window.innerWidth <= 992) onClose();
            }}
          >
            <CalendarDays size={17} style={{ flexShrink: 0 }} />
            {!isCollapsed && <span>Timetable</span>}
          </NavLink>

          {/* 3. Question Management Section */}
          <div style={sectionHeaderStyle}>Question Management</div>

          <NavLink
            to="/questions/generate"
            title={isCollapsed ? 'Question Generator' : undefined}
            style={({ isActive }) => navLinkStyle(isActive)}
            onClick={() => {
              if (window.innerWidth <= 992) onClose();
            }}
          >
            <FileQuestion size={17} style={{ flexShrink: 0 }} />
            {!isCollapsed && <span>Question Generator</span>}
          </NavLink>

          <NavLink
            to="/questions/bank"
            title={isCollapsed ? 'Question Bank' : undefined}
            style={({ isActive }) => navLinkStyle(isActive)}
            onClick={() => {
              if (window.innerWidth <= 992) onClose();
            }}
          >
            <Database size={17} style={{ flexShrink: 0 }} />
            {!isCollapsed && <span>Question Bank</span>}
          </NavLink>

          <NavLink
            to="/question-paper/create"
            title={isCollapsed ? 'Question Paper' : undefined}
            style={({ isActive }) => navLinkStyle(isActive)}
            onClick={() => {
              if (window.innerWidth <= 992) onClose();
            }}
          >
            <FileText size={17} style={{ flexShrink: 0 }} />
            {!isCollapsed && <span>Question Paper</span>}
          </NavLink>

          {/* 4. Administration Section (Admin only) */}
          {role === 'admin' && (
            <>
              <div style={sectionHeaderStyle}>Administration</div>
              <NavLink
                to="/users"
                title={isCollapsed ? 'User Management' : undefined}
                style={({ isActive }) => navLinkStyle(isActive)}
                onClick={() => {
                  if (window.innerWidth <= 992) onClose();
                }}
              >
                <Users size={17} style={{ flexShrink: 0 }} />
                {!isCollapsed && <span>User Management</span>}
              </NavLink>
            </>
          )}

          {/* 6. Settings */}
          <div style={{ marginTop: 'auto', paddingTop: '0.5rem' }}>
            <NavLink
              to="/settings"
              title={isCollapsed ? 'Settings' : undefined}
              style={({ isActive }) => navLinkStyle(isActive)}
              onClick={() => {
                if (window.innerWidth <= 992) onClose();
              }}
            >
              <Settings size={17} style={{ flexShrink: 0 }} />
              {!isCollapsed && <span>Settings</span>}
            </NavLink>
          </div>
        </nav>

        {/* User Identity & Logout */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            padding: isCollapsed ? '0.65rem 0.35rem' : '0.65rem 0.75rem',
            backgroundColor: 'rgba(0, 0, 0, 0.15)'
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: isCollapsed ? 'center' : 'space-between',
              gap: '0.4rem'
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                overflow: 'hidden'
              }}
            >
              <img
                src={
                  currentUser?.avatar ||
                  'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80'
                }
                alt={currentUser?.name || 'User'}
                style={{
                  width: '30px',
                  height: '30px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  flexShrink: 0
                }}
              />
              {!isCollapsed && (
                <div style={{ overflow: 'hidden' }}>
                  <div
                    style={{
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      color: 'var(--text-sidebar-bright)',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis'
                    }}
                  >
                    {currentUser?.name || 'Academic User'}
                  </div>
                  <div
                    style={{
                      fontSize: '0.68rem',
                      color: '#94a3b8',
                      whiteSpace: 'nowrap',
                      textTransform: 'capitalize'
                    }}
                  >
                    {role === 'admin' ? 'Administrator' : role === 'hod' ? 'HOD • CS Dept' : 'Faculty • CS Dept'}
                  </div>
                </div>
              )}
            </div>

            {!isCollapsed && (
              <button
                onClick={handleLogout}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: '#f87171',
                  padding: '0.35rem',
                  borderRadius: 'var(--radius-sm)',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
                title="Sign Out"
              >
                <LogOut size={16} />
              </button>
            )}
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
