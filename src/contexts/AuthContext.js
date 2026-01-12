import React, { createContext, useContext, useState, useEffect } from 'react';

// Mock user data
const mockUsers = {
  superAdmin: {
    id: '1',
    name: 'Super Admin',
    email: 'admin@schoolplatform.com',
    role: 'superAdmin',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face',
    school: null,
  },
  schoolAdmin: {
    id: '2',
    name: 'Sarah Johnson',
    email: 'sarah@springfield.edu',
    role: 'schoolAdmin',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=32&h=32&fit=crop&crop=face',
    school: 'Springfield High School',
  },
  teacher: {
    id: '3',
    name: 'Mr. Anderson',
    email: 'anderson@springfield.edu',
    role: 'teacher',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face',
    school: 'Springfield High School',
    subjects: ['Mathematics', 'Physics'],
  },
  student: {
    id: '4',
    name: 'Emma Davis',
    email: 'emma.davis@springfield.edu',
    role: 'student',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32&h=32&fit=crop&crop=face',
    school: 'Springfield High School',
    grade: '10th Grade',
    rollNumber: 'S001',
  },
  parent: {
    id: '5',
    name: 'Michael Davis',
    email: 'michael.davis@email.com',
    role: 'parent',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=32&h=32&fit=crop&crop=face',
    school: 'Springfield High School',
    children: ['Emma Davis'],
  },
};

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading user from localStorage or API
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (role) => {
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    const userData = mockUsers[role];
    setUser(userData);
    localStorage.setItem('currentUser', JSON.stringify(userData));
    setIsLoading(false);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('currentUser');
  };

  const switchRole = async (newRole) => {
    if (mockUsers[newRole]) {
      await login(newRole);
    }
  };

  const value = {
    user,
    isLoading,
    login,
    logout,
    switchRole,
    availableRoles: Object.keys(mockUsers),
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};