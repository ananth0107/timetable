import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useAcademic } from '../context/AcademicContext';
import {
  GraduationCap,
  Lock,
  Mail,
  ShieldCheck,
  Briefcase,
  Layers,
  Eye,
  EyeOff,
  AlertCircle
} from 'lucide-react';

export const Login = () => {
  const { login } = useAuth();
  const { showToast } = useAcademic();
  const navigate = useNavigate();

  const [selectedRole, setSelectedRole] = useState('staff');
  const [email, setEmail] = useState('alan.davis@voccollege.edu.in');
  const [password, setPassword] = useState('faculty123');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const roleCredentials = {
    staff: {
      title: 'Teaching Faculty',
      email: 'alan.davis@voccollege.edu.in',
      pass: 'faculty123',
      badge: 'Faculty Login',
      hint: 'Course schedules, question generation & paper authoring.'
    },
    hod: {
      title: 'Head of Department',
      email: 'gomathinayagam@gmail.com',
      pass: 'hod123',
      badge: 'HOD Login',
      hint: 'Department master timetable, question paper approvals & governance.'
    },
    admin: {
      title: 'System Administrator',
      email: 'ananth19012007@gmail.com',
      pass: '19012007',
      badge: 'Admin Login',
      hint: 'Personnel IAM, degree curriculum & system configuration.'
    }
  };

  const handleRoleTabChange = (roleKey) => {
    setSelectedRole(roleKey);
    setEmail(roleCredentials[roleKey].email);
    setPassword(roleCredentials[roleKey].pass);
    setErrorMessage('');
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    if (!email.trim()) {
      setErrorMessage('Please enter your institutional email ID.');
      return;
    }

    if (!password.trim()) {
      setErrorMessage('Please enter your password.');
      return;
    }

    setIsSubmitting(true);
    try {
      const result = await login(email.trim(), password.trim(), selectedRole);
      if (result && result.success) {
        showToast(`Welcome back, ${selectedRole.toUpperCase()}!`, 'success');
        navigate('/dashboard');
      } else {
        setErrorMessage(result?.message || 'Authentication failed. Please verify your credentials or select the correct role.');
      }
    } catch (err) {
      setErrorMessage(err.message || 'Authentication failed. Please check your credentials.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: '#0f2744',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem'
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '460px',
          backgroundColor: '#ffffff',
          borderRadius: 'var(--radius-lg)',
          boxShadow: '0 20px 35px -10px rgba(0, 0, 0, 0.3)',
          overflow: 'hidden',
          border: '1px solid #cbd5e1'
        }}
      >
        {/* Institutional Card Header */}
        <div
          style={{
            backgroundColor: '#0f2744',
            color: '#ffffff',
            padding: '1.75rem 1.5rem',
            textAlign: 'center',
            borderBottom: '3px solid #1e40af'
          }}
        >
          <div
            style={{
              width: '44px',
              height: '44px',
              margin: '0 auto 0.75rem',
              borderRadius: 'var(--radius-sm)',
              backgroundColor: '#1e40af',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff'
            }}
          >
            <GraduationCap size={26} />
          </div>
          <h1 style={{ fontSize: '1.2rem', margin: 0, fontWeight: 700, color: '#ffffff', letterSpacing: '-0.01em' }}>
            V.O. Chidambaram College
          </h1>
          <p style={{ fontSize: '0.78rem', margin: '0.25rem 0 0 0', color: '#93c5fd', fontWeight: 500 }}>
            Department of Computer Science • Internal Academic Portal
          </p>
        </div>

        {/* Role Selector Tabs */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            backgroundColor: '#f1f5f9',
            borderBottom: '1px solid #e2e8f0',
            padding: '0.25rem'
          }}
        >
          {[
            { key: 'staff', label: 'Faculty', icon: Briefcase },
            { key: 'hod', label: 'HOD', icon: Layers },
            { key: 'admin', label: 'Admin', icon: ShieldCheck }
          ].map(tab => {
            const Icon = tab.icon;
            const isSelected = selectedRole === tab.key;
            return (
              <button
                key={tab.key}
                type="button"
                onClick={() => handleRoleTabChange(tab.key)}
                style={{
                  padding: '0.55rem 0.25rem',
                  fontSize: '0.8rem',
                  fontWeight: isSelected ? 600 : 500,
                  color: isSelected ? '#0f2744' : '#64748b',
                  backgroundColor: isSelected ? '#ffffff' : 'transparent',
                  border: 'none',
                  borderRadius: 'var(--radius-sm)',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.35rem',
                  boxShadow: isSelected ? '0 1px 2px rgba(0, 0, 0, 0.05)' : 'none',
                  transition: 'all 0.15s ease'
                }}
              >
                <Icon size={14} style={{ color: isSelected ? '#1e40af' : 'inherit' }} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Form Body */}
        <div style={{ padding: '1.5rem' }}>
          <div style={{ marginBottom: '1.25rem' }}>
            <div style={{ fontSize: '0.95rem', fontWeight: 600, color: '#0f172a' }}>
              {roleCredentials[selectedRole].title} Sign In
            </div>
            <div style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '0.15rem' }}>
              {roleCredentials[selectedRole].hint}
            </div>
          </div>

          {errorMessage && (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.65rem 0.85rem',
                backgroundColor: '#fef2f2',
                border: '1px solid #fee2e2',
                borderRadius: 'var(--radius-sm)',
                color: '#b91c1c',
                fontSize: '0.78rem',
                marginBottom: '1rem'
              }}
            >
              <AlertCircle size={15} style={{ flexShrink: 0 }} />
              <span>{errorMessage}</span>
            </div>
          )}

          <form onSubmit={handleLoginSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div className="form-group" style={{ margin: 0 }}>
              <label className="form-label form-label-required" style={{ color: '#0f172a' }}>
                Institutional Email / ID
              </label>
              <div style={{ position: 'relative' }}>
                <Mail
                  size={15}
                  style={{
                    position: 'absolute',
                    left: '10px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: '#94a3b8'
                  }}
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@voccollege.edu.in"
                  className="form-input"
                  style={{ paddingLeft: '32px', color: '#0f172a' }}
                  required
                />
              </div>
            </div>

            <div className="form-group" style={{ margin: 0 }}>
              <label className="form-label form-label-required" style={{ color: '#0f172a' }}>
                Password
              </label>
              <div style={{ position: 'relative' }}>
                <Lock
                  size={15}
                  style={{
                    position: 'absolute',
                    left: '10px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: '#94a3b8'
                  }}
                />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="form-input"
                  style={{ paddingLeft: '32px', paddingRight: '32px', color: '#0f172a' }}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  style={{
                    position: 'absolute',
                    right: '10px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'none',
                    border: 'none',
                    color: '#94a3b8',
                    cursor: 'pointer',
                    display: 'flex'
                  }}
                >
                  {showPassword ? <EyeOff size={15} /> : <Eye size={15} />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="btn btn-primary"
              style={{
                width: '100%',
                padding: '0.65rem',
                fontSize: '0.9rem',
                fontWeight: 600,
                marginTop: '0.25rem',
                backgroundColor: '#1e40af'
              }}
            >
              Sign In to Academic Portal
            </button>
          </form>

          {/* Institutional Note */}
          <div
            style={{
              marginTop: '1.25rem',
              paddingTop: '0.85rem',
              borderTop: '1px solid #e2e8f0',
              textAlign: 'center',
              fontSize: '0.72rem',
              color: '#64748b'
            }}
          >
            V.O.C. College Academic Management & Examination Portal • Version 2.4
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
