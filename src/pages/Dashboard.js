import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import SuperAdminDashboard from './dashboard/SuperAdminDashboard';
import SchoolAdminDashboard from './dashboard/SchoolAdminDashboard';
import TeacherDashboard from './dashboard/TeacherDashboard';
import StudentDashboard from './dashboard/StudentDashboard';
import ParentDashboard from './dashboard/ParentDashboard';

const Dashboard = () => {
  const { user } = useAuth();

  if (!user) {
    return <div>Loading...</div>;
  }

  const renderDashboard = () => {
    switch (user.role) {
      case 'superAdmin':
        return <SuperAdminDashboard />;
      case 'schoolAdmin':
        return <SchoolAdminDashboard />;
      case 'teacher':
        return <TeacherDashboard />;
      case 'student':
        return <StudentDashboard />;
      case 'parent':
        return <ParentDashboard />;
      default:
        return <div>Invalid role</div>;
    }
  };

  return renderDashboard();
};

export default Dashboard;