import React from 'react';

export const Badge = ({
  children,
  variant = 'primary', // 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'purple' | 'neutral'
  icon: Icon,
  className = '',
  size = 'md'
}) => {
  // Normalize status text to appropriate badge variant
  let finalVariant = variant;
  if (typeof children === 'string') {
    const text = children.toLowerCase();
    if (text.includes('approved') || text.includes('balanced') || text.includes('active') || text.includes('covered')) {
      finalVariant = 'success';
    } else if (text.includes('changes required') || text.includes('high') || text.includes('overloaded') || text.includes('danger') || text.includes('inactive')) {
      finalVariant = 'danger';
    } else if (text.includes('submitted') || text.includes('under review') || text.includes('pending') || text.includes('warning')) {
      finalVariant = 'warning';
    } else if (text.includes('draft') || text.includes('lab') || text.includes('theory')) {
      finalVariant = 'info';
    } else if (text.includes('bloom') || text.includes('understand') || text.includes('apply') || text.includes('analyze') || text.includes('create')) {
      finalVariant = 'purple';
    }
  }

  return (
    <span className={`badge badge-${finalVariant} ${size === 'sm' ? 'text-xs' : ''} ${className}`}>
      {Icon && <Icon size={12} />}
      {children}
    </span>
  );
};
