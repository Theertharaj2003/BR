import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { ModernCard } from '../../components/modern/ModernCard';
import { ModernButton } from '../../components/modern/ModernButton';
import { ModernInput } from '../../components/modern/ModernInput';

const ModernLoginPage: React.FC = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [selectedRole, setSelectedRole] = useState<string>('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const roles = [
    {
      id: 'super-admin',
      name: 'Super Admin',
      icon: '👑',
      color: 'from-purple-500 to-purple-600',
      description: 'Platform management',
    },
    {
      id: 'school-admin',
      name: 'School Admin',
      icon: '🏫',
      color: 'from-primary-500 to-primary-600',
      description: 'School operations',
    },
    {
      id: 'teacher',
      name: 'Teacher',
      icon: '👨‍🏫',
      color: 'from-secondary-500 to-secondary-600',
      description: 'Teaching & classes',
    },
    {
      id: 'student',
      name: 'Student',
      icon: '👨‍🎓',
      color: 'from-success-500 to-success-600',
      description: 'Learning portal',
    },
    {
      id: 'parent',
      name: 'Parent',
      icon: '👨‍👩‍👧',
      color: 'from-warning-500 to-warning-600',
      description: 'Child monitoring',
    },
  ];

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // Simulate API call
    setTimeout(async () => {
      if (email && password && selectedRole) {
        const success = await login(email, password, selectedRole as any);
        if (success) {
          navigate('/dashboard');
        } else {
          setError('Invalid credentials');
        }
      } else {
        setError('Please fill in all fields');
      }
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-secondary-50 to-accent-50 dark:from-dark-50 dark:via-dark-100 dark:to-dark-200 flex items-center justify-center p-6">
      <div className="w-full max-w-6xl">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-primary-500 to-secondary-500 text-white text-4xl mb-4 shadow-lg">
            🎓
          </div>
          <h1 className="text-4xl font-bold text-neutral-900 dark:text-white mb-2">
            School Management System
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-400">
            Modern, AI-powered education platform
          </p>
        </div>

        {!selectedRole ? (
          <div>
            <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white text-center mb-6">
              Select Your Role
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {roles.map((role) => (
                <button
                  key={role.id}
                  onClick={() => setSelectedRole(role.id)}
                  className="group"
                >
                  <ModernCard
                    hover
                    className="h-full text-center transition-all duration-300 group-hover:scale-105"
                  >
                    <div className={`w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${role.color} flex items-center justify-center text-4xl shadow-lg group-hover:shadow-xl transition-shadow`}>
                      {role.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-1">
                      {role.name}
                    </h3>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
                      {role.description}
                    </p>
                  </ModernCard>
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="max-w-md mx-auto">
            <ModernCard>
              <div className="text-center mb-6">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${roles.find(r => r.id === selectedRole)?.color} flex items-center justify-center text-3xl shadow-lg`}>
                  {roles.find(r => r.id === selectedRole)?.icon}
                </div>
                <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-1">
                  {roles.find(r => r.id === selectedRole)?.name} Login
                </h2>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  Enter your credentials to continue
                </p>
              </div>

              <form onSubmit={handleLogin} className="space-y-4">
                <ModernInput
                  label="Email Address"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={setEmail}
                  icon={<span>📧</span>}
                  iconPosition="left"
                  fullWidth
                  required
                />

                <ModernInput
                  label="Password"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={setPassword}
                  icon={<span>🔒</span>}
                  iconPosition="left"
                  fullWidth
                  required
                />

                {error && (
                  <div className="p-3 rounded-lg bg-error-50 dark:bg-error-900/20 border border-error-200 dark:border-error-800">
                    <p className="text-sm text-error-700 dark:text-error-300">{error}</p>
                  </div>
                )}

                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      className="w-4 h-4 rounded border-neutral-300 text-primary-600 focus:ring-primary-500"
                    />
                    <span className="text-neutral-700 dark:text-neutral-300">Remember me</span>
                  </label>
                  <a href="#" className="text-primary-600 dark:text-primary-400 hover:underline">
                    Forgot password?
                  </a>
                </div>

                <ModernButton
                  type="submit"
                  variant="primary"
                  size="lg"
                  fullWidth
                  loading={loading}
                >
                  {loading ? 'Signing in...' : 'Sign In'}
                </ModernButton>

                <ModernButton
                  type="button"
                  variant="ghost"
                  size="md"
                  fullWidth
                  onClick={() => setSelectedRole('')}
                >
                  ← Back to role selection
                </ModernButton>
              </form>

              <div className="mt-6 pt-6 border-t border-neutral-200 dark:border-dark-200">
                <p className="text-center text-sm text-neutral-600 dark:text-neutral-400">
                  Demo Credentials: <span className="font-mono text-primary-600 dark:text-primary-400">demo@school.com / demo123</span>
                </p>
              </div>
            </ModernCard>

            <div className="mt-6 text-center">
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Need help? <a href="#" className="text-primary-600 dark:text-primary-400 hover:underline">Contact Support</a>
              </p>
            </div>
          </div>
        )}

        <div className="mt-12 text-center">
          <p className="text-sm text-neutral-500 dark:text-neutral-500">
            © 2026 School Management System. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ModernLoginPage;
