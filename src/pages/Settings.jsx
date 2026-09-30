import React, { useState } from 'react';
import { useAcademic } from '../context/AcademicContext';
import { useAuth } from '../context/AuthContext';
import {
  Settings as SettingsIcon,
  Moon,
  Sun,
  User,
  Building,
  Save,
  ShieldCheck,
  Sparkles,
  Bell
} from 'lucide-react';
import { PageHeader } from '../components/common/PageHeader';
import { Button } from '../components/common/Button';
import { Badge } from '../components/common/Badge';

export const Settings = () => {
  const { theme, toggleTheme, showToast } = useAcademic();
  const { currentUser } = useAuth();

  const [institutionName, setInstitutionName] = useState('V.O. Chidambaram College, Tuticorin (Manonmaniam Sundaranar University)');
  const [academicYear, setAcademicYear] = useState('2025-2026');
  const [currentSemester, setCurrentSemester] = useState('Even Semester (IV / VI / VIII)');
  const [aiStrictness, setAiStrictness] = useState('High');
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [browserAlerts, setBrowserAlerts] = useState(true);

  const handleSaveSettings = (e) => {
    e.preventDefault();
    showToast('System configuration & institutional preferences saved!', 'success');
  };

  return (
    <div className="page-enter" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      {/* Header */}
      <PageHeader
        title="Institution Settings & Preferences"
        subtitle="Manage college metadata, examination headers, AI synthesis strictness, and theme appearances"
        breadcrumbs={[
          { label: 'Dashboard', to: '/dashboard' },
          { label: 'Settings' }
        ]}
      />

      <form onSubmit={handleSaveSettings} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {/* Appearance & Theme Configuration */}
        <div className="card">
          <div className="card-header">
            <div className="card-title">
              <Sun size={18} style={{ color: 'var(--primary-600)' }} />
              <span>Appearance & Display Theme</span>
            </div>
            <Badge variant="primary">Active: {theme.toUpperCase()}</Badge>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', maxWidth: '540px' }}>
            <div
              onClick={() => theme !== 'light' && toggleTheme()}
              style={{
                border: `2px solid ${theme === 'light' ? 'var(--primary-600)' : 'var(--border-light)'}`,
                borderRadius: 'var(--radius-lg)',
                padding: '1.25rem',
                cursor: 'pointer',
                backgroundColor: '#ffffff',
                color: '#0f172a',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                boxShadow: theme === 'light' ? 'var(--shadow-md)' : 'none'
              }}
            >
              <Sun size={24} style={{ color: '#f59e0b' }} />
              <div>
                <div style={{ fontWeight: 600, fontSize: '0.92rem' }}>Academic Light Theme</div>
                <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Clean crisp daylight contrast</div>
              </div>
            </div>

            <div
              onClick={() => theme !== 'dark' && toggleTheme()}
              style={{
                border: `2px solid ${theme === 'dark' ? 'var(--primary-600)' : 'var(--border-light)'}`,
                borderRadius: 'var(--radius-lg)',
                padding: '1.25rem',
                cursor: 'pointer',
                backgroundColor: '#0f172a',
                color: '#f8fafc',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                boxShadow: theme === 'dark' ? 'var(--shadow-md)' : 'none'
              }}
            >
              <Moon size={24} style={{ color: '#38bdf8' }} />
              <div>
                <div style={{ fontWeight: 600, fontSize: '0.92rem' }}>Deep Midnight Dark</div>
                <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>High contrast low-light mode</div>
              </div>
            </div>
          </div>
        </div>

        {/* Institution & Examination Header Settings */}
        <div className="card">
          <div className="card-header">
            <div className="card-title">
              <Building size={18} style={{ color: 'var(--primary-600)' }} />
              <span>Institution Examination Header Template</span>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '1rem' }}>
            <div className="form-group">
              <label className="form-label">University / College Legal Name</label>
              <input
                type="text"
                className="form-input"
                value={institutionName}
                onChange={(e) => setInstitutionName(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Current Academic Year</label>
              <select className="form-select" value={academicYear} onChange={(e) => setAcademicYear(e.target.value)}>
                <option value="2025-2026">AY 2025-2026</option>
                <option value="2026-2027">AY 2026-2027</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Active Academic Semester Cycle</label>
            <select className="form-select" value={currentSemester} onChange={(e) => setCurrentSemester(e.target.value)}>
              <option value="Even Semester (IV / VI / VIII)">Even Semester (Semester IV / VI / VIII)</option>
              <option value="Odd Semester (I / III / V / VII)">Odd Semester (Semester I / III / V / VII)</option>
            </select>
          </div>
        </div>

        {/* AI Neural Engine & Bloom's Taxonomy Parameters */}
        <div className="card">
          <div className="card-header">
            <div className="card-title">
              <Sparkles size={18} style={{ color: 'var(--accent-purple)' }} />
              <span>AI Question & Timetable Engine Settings</span>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div className="form-group">
              <label className="form-label">Bloom's Taxonomy Strictness Level</label>
              <select className="form-select" value={aiStrictness} onChange={(e) => setAiStrictness(e.target.value)}>
                <option value="High">High Strictness (Strict Verb Verification)</option>
                <option value="Medium">Medium (Balanced)</option>
                <option value="Creative">Creative / Open-Ended</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">Timetable Solver Optimization Goal</label>
              <select className="form-select">
                <option value="balanced">Maximum Faculty Balance (16-18h)</option>
                <option value="lab_priority">Lab Equipment Utilization Priority</option>
                <option value="compact">Compact Daily Schedule (Minimal Gaps)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Notification Preferences */}
        <div className="card">
          <div className="card-header">
            <div className="card-title">
              <Bell size={18} style={{ color: 'var(--warning-500)' }} />
              <span>Notification & Alert Triggers</span>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', cursor: 'pointer' }}>
              <input
                type="checkbox"
                checked={emailNotifications}
                onChange={(e) => setEmailNotifications(e.target.checked)}
              />
              <div>
                <span style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                  Email alerts for Question Paper HOD reviews & approvals
                </span>
                <p style={{ margin: 0, fontSize: '0.76rem', color: 'var(--text-muted)' }}>
                  Sends dispatch notice immediately when a reviewer requests changes or signs off.
                </p>
              </div>
            </label>

            <label style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', cursor: 'pointer' }}>
              <input
                type="checkbox"
                checked={browserAlerts}
                onChange={(e) => setBrowserAlerts(e.target.checked)}
              />
              <div>
                <span style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                  Timetable conflict alerts & real-time room occupancy warnings
                </span>
                <p style={{ margin: 0, fontSize: '0.76rem', color: 'var(--text-muted)' }}>
                  Notifies when two faculty members are assigned to identical periods or labs.
                </p>
              </div>
            </label>
          </div>
        </div>

        {/* Submit Action */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem' }}>
          <Button type="submit" variant="primary" size="lg" icon={Save}>
            Save All Preferences
          </Button>
        </div>
      </form>
    </div>
  );
};
