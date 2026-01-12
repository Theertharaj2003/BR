import React from 'react';

interface ModernButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  disabled?: boolean;
  loading?: boolean;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  className?: string;
}

export const ModernButton: React.FC<ModernButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  loading = false,
  type = 'button',
  onClick,
  className = '',
}) => {
  const baseClasses = 'inline-flex items-center justify-center gap-2 font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';

  const variantClasses = {
    primary: 'bg-primary-600 hover:bg-primary-700 text-white focus:ring-primary-500 shadow-sm hover:shadow-md',
    secondary: 'bg-secondary-600 hover:bg-secondary-700 text-white focus:ring-secondary-500 shadow-sm hover:shadow-md',
    success: 'bg-success-600 hover:bg-success-700 text-white focus:ring-success-500 shadow-sm hover:shadow-md',
    warning: 'bg-warning-600 hover:bg-warning-700 text-white focus:ring-warning-500 shadow-sm hover:shadow-md',
    error: 'bg-error-600 hover:bg-error-700 text-white focus:ring-error-500 shadow-sm hover:shadow-md',
    outline: 'bg-transparent border-2 border-neutral-300 dark:border-dark-300 hover:bg-neutral-50 dark:hover:bg-dark-200 text-neutral-700 dark:text-neutral-300 focus:ring-primary-500',
    ghost: 'bg-transparent hover:bg-neutral-100 dark:hover:bg-dark-200 text-neutral-700 dark:text-neutral-300 focus:ring-primary-500',
  };

  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  const disabledClasses = 'opacity-50 cursor-not-allowed';

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`
        ${baseClasses}
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        ${fullWidth ? 'w-full' : ''}
        ${disabled || loading ? disabledClasses : ''}
        ${className}
      `}
    >
      {loading && (
        <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      )}
      {children}
    </button>
  );
};

interface ModernIconButtonProps {
  icon: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'primary' | 'danger';
  tooltip?: string;
  onClick?: () => void;
  className?: string;
}

export const ModernIconButton: React.FC<ModernIconButtonProps> = ({
  icon,
  size = 'md',
  variant = 'default',
  tooltip,
  onClick,
  className = '',
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8 text-sm',
    md: 'w-10 h-10 text-base',
    lg: 'w-12 h-12 text-lg',
  };

  const variantClasses = {
    default: 'bg-neutral-100 dark:bg-dark-200 hover:bg-neutral-200 dark:hover:bg-dark-300 text-neutral-700 dark:text-neutral-300',
    primary: 'bg-primary-100 dark:bg-primary-900/30 hover:bg-primary-200 dark:hover:bg-primary-900/50 text-primary-700 dark:text-primary-300',
    danger: 'bg-error-100 dark:bg-error-900/30 hover:bg-error-200 dark:hover:bg-error-900/50 text-error-700 dark:text-error-300',
  };

  return (
    <button
      onClick={onClick}
      title={tooltip}
      className={`
        inline-flex items-center justify-center
        rounded-lg transition-all duration-200
        focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2
        ${sizeClasses[size]}
        ${variantClasses[variant]}
        ${className}
      `}
    >
      {icon}
    </button>
  );
};

interface ModernButtonGroupProps {
  children: React.ReactNode;
  className?: string;
}

export const ModernButtonGroup: React.FC<ModernButtonGroupProps> = ({ children, className = '' }) => {
  return (
    <div className={`inline-flex rounded-lg shadow-sm ${className}`}>
      {React.Children.map(children, (child, index) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child as React.ReactElement<any>, {
            className: `
              ${(child as React.ReactElement<any>).props.className || ''}
              ${index === 0 ? 'rounded-r-none' : ''}
              ${index === React.Children.count(children) - 1 ? 'rounded-l-none' : ''}
              ${index > 0 && index < React.Children.count(children) - 1 ? 'rounded-none' : ''}
              ${index > 0 ? 'border-l-0' : ''}
            `,
          });
        }
        return child;
      })}
    </div>
  );
};
