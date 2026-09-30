import React, { useRef, useEffect } from 'react';
import { useAcademic } from '../../context/AcademicContext';
import { useNavigate } from 'react-router-dom';
import { Check, CheckCheck, Trash2, Bell, Sparkles, AlertCircle } from 'lucide-react';
import { Badge } from './Badge';

export const NotificationPanel = ({ isOpen, onClose }) => {
  const { notifications, markNotificationAsRead, markAllNotificationsAsRead, clearAllNotifications } = useAcademic();
  const panelRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (panelRef.current && !panelRef.current.contains(e.target) && !e.target.closest('#notification-bell-btn')) {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div
      ref={panelRef}
      style={{
        position: 'absolute',
        top: 'calc(100% + 10px)',
        right: '0',
        width: '380px',
        maxWidth: '92vw',
        backgroundColor: 'var(--bg-surface)',
        borderRadius: 'var(--radius-lg)',
        boxShadow: 'var(--shadow-dropdown)',
        border: '1px solid var(--border-light)',
        zIndex: 1000,
        animation: 'fadeSlideDown 0.2s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        overflow: 'hidden'
      }}
    >
      {/* Header */}
      <div
        style={{
          padding: '0.9rem 1.15rem',
          borderBottom: '1px solid var(--border-light)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: 'var(--bg-surface-hover)'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Bell size={16} style={{ color: 'var(--primary-600)' }} />
          <h4 style={{ margin: 0, fontSize: '0.95rem' }}>Notifications</h4>
          {unreadCount > 0 && (
            <Badge variant="primary" size="sm">{unreadCount} new</Badge>
          )}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
          {unreadCount > 0 && (
            <button
              onClick={markAllNotificationsAsRead}
              title="Mark all as read"
              style={{
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                color: 'var(--primary-600)',
                fontSize: '0.78rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.2rem',
                padding: '0.2rem 0.4rem',
                borderRadius: 'var(--radius-sm)'
              }}
            >
              <CheckCheck size={14} /> Mark Read
            </button>
          )}
          {notifications.length > 0 && (
            <button
              onClick={clearAllNotifications}
              title="Clear all"
              style={{
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                color: 'var(--text-muted)',
                padding: '0.25rem',
                borderRadius: 'var(--radius-sm)',
                display: 'flex'
              }}
            >
              <Trash2 size={14} />
            </button>
          )}
        </div>
      </div>

      {/* List */}
      <div style={{ maxHeight: '360px', overflowY: 'auto' }}>
        {notifications.length === 0 ? (
          <div style={{ padding: '2rem 1rem', textAlign: 'center', color: 'var(--text-muted)' }}>
            <Bell size={28} style={{ opacity: 0.3, marginBottom: '0.5rem' }} />
            <p style={{ margin: 0, fontSize: '0.85rem' }}>No notifications right now</p>
          </div>
        ) : (
          notifications.map((item) => {
            const isUnread = !item.read;
            return (
              <div
                key={item.id}
                onClick={() => {
                  markNotificationAsRead(item.id);
                  if (item.link) {
                    navigate(item.link);
                    onClose();
                  }
                }}
                style={{
                  padding: '0.85rem 1.15rem',
                  borderBottom: '1px solid var(--border-subtle)',
                  backgroundColor: isUnread ? 'var(--primary-50)' : 'transparent',
                  cursor: 'pointer',
                  transition: 'background-color var(--transition-fast)',
                  display: 'flex',
                  gap: '0.75rem',
                  alignItems: 'flex-start'
                }}
              >
                <div
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    backgroundColor: isUnread ? 'var(--primary-500)' : 'transparent',
                    marginTop: '6px',
                    flexShrink: 0
                  }}
                />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem' }}>
                    <span style={{ fontSize: '0.85rem', fontWeight: isUnread ? 600 : 500, color: 'var(--text-primary)' }}>
                      {item.title}
                    </span>
                    <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', whiteSpace: 'nowrap' }}>
                      {item.time}
                    </span>
                  </div>
                  <p style={{ margin: '0.2rem 0 0 0', fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: 1.35 }}>
                    {item.message}
                  </p>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
