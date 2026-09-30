import React from 'react';

export const DashboardCard = ({
  title,
  subtitle,
  action,
  icon: Icon,
  children,
  className = '',
  style = {}
}) => {
  return (
    <div className={`card ${className}`} style={style}>
      {(title || action) && (
        <div className="card-header">
          <div className="card-title">
            {Icon && (
              <span style={{ color: 'var(--primary-600)', display: 'inline-flex' }}>
                <Icon size={18} />
              </span>
            )}
            <div>
              <span>{title}</span>
              {subtitle && <div className="card-subtitle">{subtitle}</div>}
            </div>
          </div>
          {action && <div>{action}</div>}
        </div>
      )}
      <div className="card-body">
        {children}
      </div>
    </div>
  );
};
