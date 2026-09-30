import React, { createContext, useContext, useState, useEffect } from 'react';
import { authAPI } from '../services/api';
import { MOCK_USERS } from '../data/mockData';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem('apex_auth') === 'true' && Boolean(localStorage.getItem('apex_token'));
  });

  const [currentUser, setCurrentUser] = useState(() => {
    const isAuth = localStorage.getItem('apex_auth') === 'true';
    if (isAuth) {
      const saved = localStorage.getItem('apex_user');
      if (saved) {
        try { return JSON.parse(saved); } catch (e) { /* ignore */ }
      }
    }
    return null;
  });

  const [isLoadingAuth, setIsLoadingAuth] = useState(true);

  // Restore authenticated session from backend on mount
  useEffect(() => {
    const restoreSession = async () => {
      const token = localStorage.getItem('apex_token');
      if (token) {
        try {
          const res = await authAPI.getMe();
          if (res.success && res.user) {
            setCurrentUser(res.user);
            setIsAuthenticated(true);
            localStorage.setItem('apex_user', JSON.stringify(res.user));
            localStorage.setItem('apex_auth', 'true');
          }
        } catch (err) {
          console.warn('[AuthContext] Session restore note:', err.message);
          // If offline, keep local user if available, otherwise reset
          const saved = localStorage.getItem('apex_user');
          if (saved) {
            try {
              setCurrentUser(JSON.parse(saved));
              setIsAuthenticated(true);
            } catch (e) {}
          }
        }
      }
      setIsLoadingAuth(false);
    };

    restoreSession();
  }, []);

  useEffect(() => {
    if (currentUser && isAuthenticated) {
      localStorage.setItem('apex_user', JSON.stringify(currentUser));
      localStorage.setItem('apex_auth', 'true');
    }
  }, [currentUser, isAuthenticated]);

  const login = async (email, password, selectedRole = 'staff') => {
    const cleanEmail = (email || '').trim().toLowerCase();
    const role = (selectedRole || 'staff').toLowerCase();

    try {
      // Connect to real backend
      const res = await authAPI.login(cleanEmail, password, role);
      if (res.success && res.token) {
        localStorage.setItem('apex_token', res.token);
        localStorage.setItem('apex_auth', 'true');
        localStorage.setItem('apex_user', JSON.stringify(res.user));
        setCurrentUser(res.user);
        setIsAuthenticated(true);
        return { success: true, user: res.user };
      }
      return { success: false, message: res.message || 'Login failed.' };
    } catch (err) {
      console.warn('[AuthContext] Backend login attempt:', err.message);
      
      // Fallback for offline mock testing if backend server is unreachable
      if (err.message?.includes('Unable to connect to backend')) {
        let matchedUser = MOCK_USERS.find(
          u => u.email.toLowerCase() === cleanEmail && u.role.toLowerCase() === role
        ) || MOCK_USERS.find(u => u.role.toLowerCase() === role) || {
          id: `usr_${role}_${Date.now()}`,
          name: cleanEmail.split('@')[0] || 'User',
          email: cleanEmail,
          role: role,
          department: 'Department of Computer Science',
          deptCode: 'CS',
          designation: role === 'admin' ? 'Administrator' : role === 'hod' ? 'Head of Department' : 'Assistant Professor',
          empId: 'FAC-001',
          status: 'Active'
        };

        localStorage.setItem('apex_token', 'mock_jwt_token_offline_fallback');
        localStorage.setItem('apex_auth', 'true');
        localStorage.setItem('apex_user', JSON.stringify(matchedUser));
        setCurrentUser(matchedUser);
        setIsAuthenticated(true);
        return { success: true, user: matchedUser };
      }

      return { success: false, message: err.message || 'Authentication failed.' };
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    setCurrentUser(null);
    localStorage.removeItem('apex_token');
    localStorage.removeItem('apex_auth');
    localStorage.removeItem('apex_user');
  };

  return (
    <AuthContext.Provider value={{
      currentUser,
      isAuthenticated,
      isLoadingAuth,
      role: currentUser?.role || 'staff',
      login,
      logout
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
