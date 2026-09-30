import React from 'react';
import { CheckCircle2, Circle, Loader2, Sparkles } from 'lucide-react';

export const LoadingAnimation = ({
  steps = [],
  currentStep = 0,
  title = 'AI Engine Processing...',
  subtitle = 'Please wait while the neural model computes the optimal academic structure'
}) => {
  return (
    <div
      style={{
        padding: '2rem 1.5rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center'
      }}
    >
      {/* Glow icon */}
      <div
        style={{
          width: '64px',
          height: '64px',
          borderRadius: '50%',
          backgroundColor: 'var(--primary-50)',
          color: 'var(--primary-600)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '1.25rem',
          animation: 'pulseGlow 2s infinite'
        }}
      >
        <Sparkles size={32} />
      </div>

      <h3 style={{ margin: 0, fontSize: '1.25rem', fontWeight: 600 }}>{title}</h3>
      <p style={{ margin: '0.4rem 0 1.75rem 0', fontSize: '0.85rem', color: 'var(--text-muted)', maxWidth: '420px' }}>
        {subtitle}
      </p>

      {/* Steps Pipeline */}
      {steps.length > 0 && (
        <div
          style={{
            width: '100%',
            maxWidth: '460px',
            backgroundColor: 'var(--bg-surface-hover)',
            borderRadius: 'var(--radius-lg)',
            padding: '1.25rem 1.5rem',
            border: '1px solid var(--border-light)',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.85rem'
          }}
        >
          {steps.map((step, idx) => {
            const isCompleted = idx < currentStep;
            const isActive = idx === currentStep;
            const isPending = idx > currentStep;

            return (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.85rem',
                  textAlign: 'left',
                  color: isCompleted
                    ? 'var(--success-600)'
                    : isActive
                    ? 'var(--primary-600)'
                    : 'var(--text-light)',
                  fontWeight: isActive ? 600 : 500,
                  fontSize: '0.9rem',
                  transition: 'all var(--transition-base)'
                }}
              >
                <div style={{ flexShrink: 0 }}>
                  {isCompleted ? (
                    <CheckCircle2 size={18} style={{ color: 'var(--success-500)' }} />
                  ) : isActive ? (
                    <Loader2 size={18} className="animate-spin" style={{ color: 'var(--primary-600)' }} />
                  ) : (
                    <Circle size={18} style={{ color: 'var(--border-medium)' }} />
                  )}
                </div>
                <span style={{ color: isPending ? 'var(--text-muted)' : 'inherit' }}>
                  {step}
                </span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
