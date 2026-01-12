import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { GraduationCap } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

const Login = () => {
  const { user, login, isLoading } = useAuth();
  const [selectedRole, setSelectedRole] = useState('schoolAdmin');

  if (user) {
    return <Navigate to="/dashboard" replace />;
  }

  const roles = [
    {
      id: 'superAdmin',
      name: 'Super Admin',
      description: 'Platform administrator with access to all schools',
      icon: '👑',
    },
    {
      id: 'schoolAdmin',
      name: 'School Admin',
      description: 'School administrator managing daily operations',
      icon: '🏫',
    },
    {
      id: 'teacher',
      name: 'Teacher',
      description: 'Educator managing classes and student progress',
      icon: '👨‍🏫',
    },
    {
      id: 'student',
      name: 'Student',
      description: 'Student accessing academic information',
      icon: '🎓',
    },
    {
      id: 'parent',
      name: 'Parent',
      description: 'Parent monitoring child\'s academic progress',
      icon: '👨‍👩‍👧',
    },
  ];

  const handleLogin = async () => {
    await login(selectedRole);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-neutral-900 dark:to-neutral-800 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-600 rounded-full mb-4">
            <GraduationCap className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100">
            SchoolHub
          </h1>
          <p className="text-neutral-600 dark:text-neutral-400 mt-2">
            Modern School Operations & Management Platform
          </p>
        </div>

        {/* Login Card */}
        <Card className="p-8">
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 text-center">
                Choose Your Role
              </h2>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 text-center mt-2">
                Select a role to explore the platform features
              </p>
            </div>

            {/* Role Selection */}
            <div className="space-y-3">
              {roles.map((role) => (
                <button
                  key={role.id}
                  onClick={() => setSelectedRole(role.id)}
                  className={`w-full p-4 rounded-lg border-2 transition-all ${
                    selectedRole === role.id
                      ? 'border-primary-500 bg-primary-50 dark:bg-primary-900 dark:border-primary-400'
                      : 'border-neutral-200 dark:border-neutral-700 hover:border-neutral-300 dark:hover:border-neutral-600'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{role.icon}</span>
                    <div className="text-left">
                      <h3 className="font-medium text-neutral-900 dark:text-neutral-100">
                        {role.name}
                      </h3>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400">
                        {role.description}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* Login Button */}
            <Button
              onClick={handleLogin}
              loading={isLoading}
              className="w-full"
              size="lg"
            >
              {isLoading ? 'Signing in...' : 'Continue as ' + roles.find(r => r.id === selectedRole)?.name}
            </Button>

            <div className="text-center">
              <p className="text-xs text-neutral-500 dark:text-neutral-400">
                This is a demo application. All roles are available for testing.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Login;