import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useAcademic } from '../../context/AcademicContext';
import { useNavigate } from 'react-router-dom';
import {
  Bell,
  Search,
  Moon,
  Sun,
  Menu,
  GraduationCap,
  ShieldCheck,
  Briefcase,
  Layers,
  Calendar
} from 'lucide-react';
import { NotificationPanel } from './NotificationPanel';

export const Header = ({ onToggleSidebar }) => {
  const { role, currentUser } = useAuth();
  const { theme, toggleTheme, notifications } = useAcademic();
  const [showNotifications, setShowNotifications] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const unreadCount = notifications.filter(n => !n.read).length;

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/timetable?search=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const roleLabel =
    role === 'admin'
      ? 'System Administrator'
      : role === 'hod'
      ? 'Head of Department'
      : 'Teaching Faculty';

  return (
    <header
      className="header-container"
      style={{
        height: 'var(--header-height)',
        backgroundColor: 'var(--bg-surface)',
        borderBottom: '1px solid var(--border-light)',
        position: 'sticky',
        top: 0,
        zIndex: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 1.75rem',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.04)'
      }}
    >
      {/* Left: Menu Toggle + Academic Portal Title */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <button
          onClick={onToggleSidebar}
          style={{
            background: 'var(--bg-app)',
            border: '1px solid var(--border-medium)',
            cursor: 'pointer',
            color: 'var(--text-primary)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '42px',
            height: '42px',
            borderRadius: 'var(--radius-md)',
            transition: 'all var(--transition-fast)'
          }}
          title="Toggle Navigation Menu"
        >
          <Menu size={21} />
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div>
            <h2
              style={{
                fontSize: '1.08rem',
                fontWeight: 700,
                margin: 0,
                color: 'var(--text-primary)',
                lineHeight: 1.25,
                letterSpacing: '-0.01em'
              }}
            >
              Academic Timetable & Assessment System
            </h2>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.45rem',
                fontSize: '0.78rem',
                color: 'var(--text-muted)',
                marginTop: '0.1rem'
              }}
              className="hide-on-mobile"
            >
              <span>V.O. Chidambaram College, Tuticorin</span>
              <span>•</span>
              <span>Dept. of Computer Science</span>
            </div>
          </div>
        </div>
      </div>

      {/* Center: Search Bar */}
      <div style={{ flex: 1, maxWidth: '520px', margin: '0 1.5rem' }} className="hide-on-mobile">
        <form onSubmit={handleSearchSubmit} style={{ position: 'relative' }}>
          <Search
            size={18}
            style={{
              position: 'absolute',
              left: '12px',
              top: '50%',
              transform: 'translateY(-50%)',
              color: 'var(--text-light)',
              pointerEvents: 'none'
            }}
          />
          <input
            type="text"
            placeholder="Search subjects, faculty, schedule..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="form-input"
            style={{
              paddingLeft: '38px',
              paddingRight: '12px',
              fontSize: '0.9rem',
              height: '42px',
              borderRadius: 'var(--radius-md)',
              backgroundColor: 'var(--bg-app)',
              border: '1px solid var(--border-medium)',
              width: '100%',
              transition: 'border-color var(--transition-fast)'
            }}
          />
        </form>
      </div>

      {/* Right: Academic Term + Role Badge + Theme + Notifications */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
        {/* Academic Session Indicator */}
        <div
          className="hide-on-mobile"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.45rem',
            padding: '0.42rem 0.85rem',
            backgroundColor: 'var(--bg-app)',
            border: '1px solid var(--border-light)',
            borderRadius: 'var(--radius-md)',
            fontSize: '0.82rem',
            fontWeight: 500,
            color: 'var(--text-secondary)'
          }}
        >
          <Calendar size={15} style={{ color: 'var(--primary-600)' }} />
          <span>AY 2025–26 (Even Sem)</span>
        </div>

        {/* Role Badge */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.45rem',
            padding: '0.42rem 0.95rem',
            backgroundColor:
              role === 'admin'
                ? 'var(--danger-50)'
                : role === 'hod'
                ? 'var(--primary-50)'
                : 'var(--bg-app)',
            color:
              role === 'admin'
                ? 'var(--danger-700)'
                : role === 'hod'
                ? 'var(--primary-700)'
                : 'var(--text-secondary)',
            border: `1px solid ${
              role === 'admin'
                ? 'var(--danger-100)'
                : role === 'hod'
                ? 'var(--primary-200)'
                : 'var(--border-medium)'
            }`,
            borderRadius: 'var(--radius-md)',
            fontSize: '0.78rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.04em'
          }}
        >
          {role === 'admin' ? (
            <ShieldCheck size={15} />
          ) : role === 'hod' ? (
            <Layers size={15} />
          ) : (
            <Briefcase size={15} />
          )}
          <span>{role}</span>
        </div>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          style={{
            background: 'var(--bg-app)',
            border: '1px solid var(--border-medium)',
            cursor: 'pointer',
            color: 'var(--text-secondary)',
            width: '42px',
            height: '42px',
            borderRadius: 'var(--radius-md)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all var(--transition-fast)'
          }}
          title={theme === 'light' ? 'Switch to Dark Theme' : 'Switch to Light Theme'}
        >
          {theme === 'light' ? <Moon size={18} /> : <Sun size={18} style={{ color: '#f59e0b' }} />}
        </button>

        {/* Notifications */}
        <div style={{ position: 'relative' }}>
          <button
            id="notification-bell-btn"
            onClick={() => setShowNotifications(!showNotifications)}
            style={{
              background: 'var(--bg-app)',
              border: '1px solid var(--border-medium)',
              cursor: 'pointer',
              color: 'var(--text-secondary)',
              width: '42px',
              height: '42px',
              borderRadius: 'var(--radius-md)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              transition: 'all var(--transition-fast)'
            }}
            title="Academic Notices"
          >
            <Bell size={19} />
            {unreadCount > 0 && (
              <span
                style={{
                  position: 'absolute',
                  top: '6px',
                  right: '6px',
                  width: '8px',
                  height: '8px',
                  backgroundColor: 'var(--danger-600)',
                  borderRadius: '50%',
                  border: '2px solid var(--bg-surface)'
                }}
              />
            )}
          </button>
          <NotificationPanel
            isOpen={showNotifications}
            onClose={() => setShowNotifications(false)}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
