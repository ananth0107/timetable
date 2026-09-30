import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const PageHeader = ({
  title,
  subtitle,
  breadcrumbs = [],
  actions,
  badge
}) => {
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        gap: '1rem',
        marginBottom: '1.75rem',
        paddingBottom: '1rem',
        borderBottom: '1px solid var(--border-light)'
      }}
    >
      <div>
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              fontSize: '0.8rem',
              color: 'var(--text-muted)',
              marginBottom: '0.4rem'
            }}
          >
            {breadcrumbs.map((crumb, idx) => (
              <React.Fragment key={idx}>
                {idx > 0 && <ChevronRight size={13} style={{ color: 'var(--text-light)' }} />}
                {crumb.to ? (
                  <Link to={crumb.to} style={{ color: 'var(--text-muted)' }}>
                    {crumb.label}
                  </Link>
                ) : (
                  <span style={{ color: 'var(--text-secondary)', fontWeight: 500 }}>{crumb.label}</span>
                )}
              </React.Fragment>
            ))}
          </nav>
        )}

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <h1 style={{ margin: 0 }}>{title}</h1>
          {badge && <div>{badge}</div>}
        </div>

        {subtitle && (
          <p style={{ margin: '0.25rem 0 0 0', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
            {subtitle}
          </p>
        )}
      </div>

      {actions && (
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', flexWrap: 'wrap' }}>
          {actions}
        </div>
      )}
    </div>
  );
};
