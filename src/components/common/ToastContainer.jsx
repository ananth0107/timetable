import React from 'react';
import { useAcademic } from '../../context/AcademicContext';
import { CheckCircle, AlertCircle, Info, X } from 'lucide-react';

export const ToastContainer = () => {
  const { toasts, removeToast } = useAcademic();

  if (!toasts || toasts.length === 0) return null;

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        zIndex: 99999,
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        pointerEvents: 'none'
      }}
    >
      {toasts.map((toast) => {
        const isSuccess = toast.type === 'success';
        const isWarning = toast.type === 'warning';
        const isDanger = toast.type === 'danger';

        const bg = isSuccess ? 'var(--bg-surface)' : isWarning ? 'var(--warning-50)' : isDanger ? 'var(--danger-50)' : 'var(--bg-surface)';
        const borderColor = isSuccess ? 'var(--success-500)' : isWarning ? 'var(--warning-500)' : isDanger ? 'var(--danger-500)' : 'var(--primary-500)';
        const iconColor = isSuccess ? 'var(--success-600)' : isWarning ? 'var(--warning-600)' : isDanger ? 'var(--danger-600)' : 'var(--primary-600)';

        return (
          <div
            key={toast.id}
            style={{
              pointerEvents: 'auto',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '12px',
              padding: '12px 16px',
              backgroundColor: bg,
              borderRadius: 'var(--radius-md)',
              borderLeft: `4px solid ${borderColor}`,
              boxShadow: 'var(--shadow-lg)',
              borderTop: '1px solid var(--border-light)',
              borderRight: '1px solid var(--border-light)',
              borderBottom: '1px solid var(--border-light)',
              minWidth: '280px',
              maxWidth: '420px',
              animation: 'fadeSlideUp 0.25s ease-out'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ color: iconColor, display: 'flex' }}>
                {isSuccess ? <CheckCircle size={18} /> : isWarning || isDanger ? <AlertCircle size={18} /> : <Info size={18} />}
              </span>
              <span style={{ fontSize: '0.88rem', fontWeight: 500, color: 'var(--text-primary)' }}>
                {toast.message}
              </span>
            </div>
            <button
              onClick={() => removeToast(toast.id)}
              style={{
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                color: 'var(--text-muted)',
                padding: '2px',
                display: 'flex'
              }}
            >
              <X size={15} />
            </button>
          </div>
        );
      })}
    </div>
  );
};
