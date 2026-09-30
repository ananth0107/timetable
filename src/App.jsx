import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import { AcademicProvider } from './context/AcademicContext';
import { Header } from './components/common/Header';
import { Sidebar } from './components/common/Sidebar';
import { ToastContainer } from './components/common/ToastContainer';

// Institutional Pages
import { Login } from './pages/Login';
import { DashboardWrapper } from './pages/DashboardWrapper';
import { Timetable } from './pages/Timetable';
import { QuestionGenerator } from './pages/QuestionGenerator';
import { QuestionBank } from './pages/QuestionBank';
import { QuestionPaperBuilder } from './pages/QuestionPaperBuilder';
import { UserManagement } from './pages/UserManagement';
import { Settings } from './pages/Settings';

import { ErrorBoundary } from './components/common/ErrorBoundary';

// Main App Shell Layout
const AppLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className="app-layout">
      <Sidebar
        isOpen={sidebarOpen}
        isCollapsed={sidebarCollapsed}
        onToggleCollapse={() => setSidebarCollapsed(prev => !prev)}
        onClose={() => setSidebarOpen(false)}
      />

      <div className="main-wrapper">
        <Header
          onToggleSidebar={() => {
            if (window.innerWidth <= 992) {
              setSidebarOpen(prev => !prev);
            } else {
              setSidebarCollapsed(prev => !prev);
            }
          }}
        />

        <main className="main-content">
          <Outlet />
        </main>
      </div>

      <ToastContainer />
    </div>
  );
};

// Route Guard
const ProtectedRoute = ({ children, allowedRoles }) => {
  const { isAuthenticated, role } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (allowedRoles && !allowedRoles.includes(role)) {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
};

// Catch-all Fallback Route
const FallbackRoute = () => {
  const { isAuthenticated } = useAuth();
  return <Navigate to={isAuthenticated ? "/dashboard" : "/login"} replace />;
};

export function App() {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <AcademicProvider>
          <BrowserRouter>
            <Routes>
              {/* Default landing page opens Login */}
              <Route path="/" element={<Navigate to="/login" replace />} />

              {/* Public Authentication Route */}
              <Route path="/login" element={<Login />} />

              {/* Protected Institutional Application Shell */}
              <Route
                element={
                  <ProtectedRoute>
                    <AppLayout />
                  </ProtectedRoute>
                }
              >
                <Route path="/dashboard" element={<DashboardWrapper />} />
                
                {/* Academic Section */}
                <Route path="/timetable" element={<Timetable />} />

                {/* Question Management Section */}
                <Route path="/questions/generate" element={<QuestionGenerator />} />
                <Route path="/questions/bank" element={<QuestionBank />} />
                <Route path="/question-paper/create" element={<QuestionPaperBuilder />} />

                {/* Administration Section */}
                <Route
                  path="/users"
                  element={
                    <ProtectedRoute allowedRoles={['admin']}>
                      <UserManagement />
                    </ProtectedRoute>
                  }
                />

                {/* Settings */}
                <Route path="/settings" element={<Settings />} />
              </Route>

              {/* Fallback */}
              <Route path="*" element={<FallbackRoute />} />
            </Routes>
          </BrowserRouter>
        </AcademicProvider>
      </AuthProvider>
    </ErrorBoundary>
  );
}

export default App;
