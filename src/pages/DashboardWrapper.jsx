import React from 'react';
import { useAuth } from '../context/AuthContext';
import { StaffDashboard } from './StaffDashboard';
import { HODDashboard } from './HODDashboard';
import { AdminDashboard } from './AdminDashboard';

export const DashboardWrapper = () => {
  const { role } = useAuth();

  if (role === 'admin') {
    return <AdminDashboard />;
  }
  if (role === 'hod') {
    return <HODDashboard />;
  }
  return <StaffDashboard />;
};
