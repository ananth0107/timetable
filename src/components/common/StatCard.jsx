import React from 'react';

export const StatCard = ({
  title,
  value,
  icon: Icon,
  subtitle,
  variant = 'default' // 'default' | 'primary' | 'success' | 'warning' | 'danger'
}) => {
  const variantStyles = {
    default: {
      border: 'var(--border-light)',
      iconBg: 'var(--bg-app)',
      iconColor: 'var(--text-secondary)'
    },
    primary: {
      border: 'var(--primary-200)',
      iconBg: 'var(--primary-50)',
      iconColor: 'var(--primary-700)'
    },
    success: {
      border: 'var(--success-100)',
      iconBg: 'var(--success-50)',
      iconColor: 'var(--success-700)'
    },
    warning: {
      border: 'var(--warning-100)',
      iconBg: 'var(--warning-50)',
      iconColor: 'var(--warning-700)'
    },
    danger: {
      border: 'var(--danger-100)',
      iconBg: 'var(--danger-50)',
      iconColor: 'var(--danger-700)'
    }
  };

  const style = variantStyles[variant] || variantStyles.default;

  return (
    <div
      className="card"
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderColor: style.border,
        gap: '0.65rem',
        padding: '1.1rem 1.25rem'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-muted)' }}>
          {title}
        </span>
        {Icon && (
          <div
            style={{
              width: '32px',
              height: '32px',
              borderRadius: 'var(--radius-sm)',
              backgroundColor: style.iconBg,
              color: style.iconColor,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}
          >
            <Icon size={16} />
          </div>
        )}
      </div>

      <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
        <div style={{ fontSize: '1.65rem', fontWeight: 700, color: 'var(--text-primary)', lineHeight: 1 }}>
          {value}
        </div>
      </div>

      {subtitle && (
        <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
          {subtitle}
        </div>
      )}
    </div>
  );
};

export default StatCard;
