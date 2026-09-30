import React from 'react';
import { AlertTriangle, RefreshCw, Home, Trash2 } from 'lucide-react';

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Antigravity Application Crash Caught by ErrorBoundary:', error, errorInfo);
    this.setState({ errorInfo });
  }

  handleReload = () => {
    window.location.reload();
  };

  handleResetCacheAndReload = () => {
    try {
      localStorage.removeItem('apex_clean_programs_v4');
      localStorage.removeItem('apex_clean_subjects_v4');
      localStorage.removeItem('apex_clean_class_timetables_v4');
      localStorage.removeItem('apex_clean_timetable_v4');
      localStorage.removeItem('apex_clean_users_list_v4');
      localStorage.removeItem('apex_clean_subjects');
      localStorage.removeItem('apex_clean_class_timetables_v3');
      localStorage.removeItem('apex_clean_timetable_v3');
      localStorage.removeItem('apex_clean_qbank');
      localStorage.removeItem('apex_clean_qpapers');
      localStorage.removeItem('apex_clean_events');
      localStorage.removeItem('apex_clean_notifs');
      localStorage.removeItem('apex_clean_users_list');
    } catch (e) {
      console.error('Failed to clear cache:', e);
    }
    window.location.href = '/dashboard';
  };

  handleGoHome = () => {
    window.location.href = '/dashboard';
  };

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'var(--bg-app, #f8fafc)',
            color: 'var(--text-primary, #0f172a)',
            padding: '2rem',
            fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif"
          }}
        >
          <div
            style={{
              maxWidth: '540px',
              width: '100%',
              backgroundColor: 'var(--bg-surface, #ffffff)',
              borderRadius: '16px',
              border: '1px solid var(--border-light, #e2e8f0)',
              boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.05)',
              padding: '2.25rem',
              textAlign: 'center'
            }}
          >
            <div
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                backgroundColor: 'rgba(239, 68, 68, 0.12)',
                color: '#ef4444',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.25rem auto'
              }}
            >
              <AlertTriangle size={32} />
            </div>

            <h2 style={{ fontSize: '1.4rem', fontWeight: 700, margin: '0 0 0.5rem 0', color: 'var(--text-primary, #0f172a)' }}>
              Something Went Wrong
            </h2>

            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary, #475569)', lineHeight: 1.5, margin: '0 0 1.5rem 0' }}>
              The application encountered an unexpected runtime error during page rendering. Your session data is intact.
            </p>

            {this.state.error && (
              <div
                style={{
                  textAlign: 'left',
                  backgroundColor: 'var(--bg-app, #f1f5f9)',
                  borderRadius: '8px',
                  padding: '0.85rem 1rem',
                  fontSize: '0.8rem',
                  fontFamily: 'monospace',
                  color: '#dc2626',
                  border: '1px solid #fee2e2',
                  marginBottom: '1.5rem',
                  overflowX: 'auto',
                  maxHeight: '120px'
                }}
              >
                {this.state.error.toString()}
              </div>
            )}

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <button
                onClick={this.handleReload}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  padding: '0.75rem 1.25rem',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  backgroundColor: '#2563eb',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '10px',
                  cursor: 'pointer',
                  transition: 'background-color 0.15s'
                }}
              >
                <RefreshCw size={16} /> Reload Page
              </button>

              <button
                onClick={this.handleResetCacheAndReload}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  padding: '0.75rem 1.25rem',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  backgroundColor: 'rgba(239, 68, 68, 0.1)',
                  color: '#ef4444',
                  border: '1px solid rgba(239, 68, 68, 0.25)',
                  borderRadius: '10px',
                  cursor: 'pointer',
                  transition: 'background-color 0.15s'
                }}
              >
                <Trash2 size={16} /> Reset Corrupted Cache & Restore Default Data
              </button>

              <button
                onClick={this.handleGoHome}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  padding: '0.65rem 1.25rem',
                  fontSize: '0.85rem',
                  fontWeight: 500,
                  backgroundColor: 'transparent',
                  color: 'var(--text-secondary, #64748b)',
                  border: 'none',
                  borderRadius: '10px',
                  cursor: 'pointer'
                }}
              >
                <Home size={15} /> Return to Dashboard
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
export default ErrorBoundary;
