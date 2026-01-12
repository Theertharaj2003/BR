import React from 'react';

interface ModernCardProps {
  children: React.ReactNode;
  className?: string;
  padding?: 'none' | 'sm' | 'md' | 'lg';
  hover?: boolean;
  onClick?: () => void;
}

export const ModernCard: React.FC<ModernCardProps> = ({
  children,
  className = '',
  padding = 'md',
  hover = false,
  onClick,
}) => {
  const paddingClasses = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  return (
    <div
      onClick={onClick}
      className={`
        bg-white dark:bg-dark-100 
        rounded-xl 
        border border-neutral-200 dark:border-dark-200
        shadow-sm
        ${hover ? 'hover:shadow-md hover:border-primary-300 dark:hover:border-primary-700 cursor-pointer' : ''}
        ${paddingClasses[padding]}
        transition-all duration-200
        ${className}
      `}
    >
      {children}
    </div>
  );
};

interface ModernStatCardProps {
  title: string;
  value: string | number;
  change?: string;
  changeType?: 'positive' | 'negative' | 'neutral';
  trend?: 'up' | 'down' | 'stable';
  icon?: React.ReactNode;
  className?: string;
}

export const ModernStatCard: React.FC<ModernStatCardProps> = ({
  title,
  value,
  change,
  changeType = 'neutral',
  trend,
  icon,
  className = '',
}) => {
  const changeColors = {
    positive: 'text-success-600 dark:text-success-400 bg-success-50 dark:bg-success-900/20',
    negative: 'text-error-600 dark:text-error-400 bg-error-50 dark:bg-error-900/20',
    neutral: 'text-neutral-600 dark:text-neutral-400 bg-neutral-50 dark:bg-neutral-800',
  };

  const trendIcons = {
    up: '↗',
    down: '↘',
    stable: '→',
  };

  return (
    <ModernCard className={className}>
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-neutral-600 dark:text-neutral-400 mb-1">
            {title}
          </p>
          <p className="text-3xl font-bold text-neutral-900 dark:text-white mb-2">
            {value}
          </p>
          {change && (
            <div className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${changeColors[changeType]}`}>
              {trend && <span>{trendIcons[trend]}</span>}
              {change}
            </div>
          )}
        </div>
        {icon && (
          <div className="w-12 h-12 rounded-lg bg-primary-50 dark:bg-primary-900/20 flex items-center justify-center text-primary-600 dark:text-primary-400">
            {icon}
          </div>
        )}
      </div>
    </ModernCard>
  );
};

interface ModernMetricCardProps {
  label: string;
  value: string | number;
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'error';
  icon?: React.ReactNode;
}

export const ModernMetricCard: React.FC<ModernMetricCardProps> = ({
  label,
  value,
  color = 'primary',
  icon,
}) => {
  const colorClasses = {
    primary: 'bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 border-primary-200 dark:border-primary-800',
    secondary: 'bg-secondary-50 dark:bg-secondary-900/20 text-secondary-600 dark:text-secondary-400 border-secondary-200 dark:border-secondary-800',
    success: 'bg-success-50 dark:bg-success-900/20 text-success-600 dark:text-success-400 border-success-200 dark:border-success-800',
    warning: 'bg-warning-50 dark:bg-warning-900/20 text-warning-600 dark:text-warning-400 border-warning-200 dark:border-warning-800',
    error: 'bg-error-50 dark:bg-error-900/20 text-error-600 dark:text-error-400 border-error-200 dark:border-error-800',
  };

  return (
    <div className={`p-4 rounded-lg border ${colorClasses[color]} transition-all duration-200 hover:shadow-md`}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium opacity-80 mb-1">{label}</p>
          <p className="text-2xl font-bold">{value}</p>
        </div>
        {icon && <div className="text-3xl opacity-80">{icon}</div>}
      </div>
    </div>
  );
};

interface ModernGlassCardProps {
  children: React.ReactNode;
  className?: string;
}

export const ModernGlassCard: React.FC<ModernGlassCardProps> = ({ children, className = '' }) => {
  return (
    <div
      className={`
        backdrop-blur-lg bg-white/70 dark:bg-dark-100/70
        rounded-xl border border-white/20 dark:border-dark-200/20
        shadow-xl
        p-6
        ${className}
      `}
    >
      {children}
    </div>
  );
};

interface ModernGradientCardProps {
  children: React.ReactNode;
  gradient?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'purple';
  className?: string;
}

export const ModernGradientCard: React.FC<ModernGradientCardProps> = ({
  children,
  gradient = 'primary',
  className = '',
}) => {
  const gradients = {
    primary: 'from-primary-500 to-primary-600',
    secondary: 'from-secondary-500 to-secondary-600',
    success: 'from-success-500 to-success-600',
    warning: 'from-warning-500 to-warning-600',
    error: 'from-error-500 to-error-600',
    purple: 'from-purple-500 to-purple-600',
  };

  return (
    <div
      className={`
        bg-gradient-to-br ${gradients[gradient]}
        rounded-xl shadow-lg
        p-6 text-white
        ${className}
      `}
    >
      {children}
    </div>
  );
};
