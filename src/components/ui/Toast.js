import React, { useEffect } from 'react';
import { X, CheckCircle, AlertCircle, AlertTriangle, Info } from 'lucide-react';
import { cn } from '../../utils/cn';

const Toast = ({
  message,
  type = 'info',
  onClose,
  duration = 5000,
  className,
}) => {
  useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(onClose, duration);
      return () => clearTimeout(timer);
    }
  }, [duration, onClose]);

  const types = {
    success: {
      icon: CheckCircle,
      bgColor: 'bg-green-50 dark:bg-green-900',
      borderColor: 'border-green-200 dark:border-green-800',
      textColor: 'text-green-800 dark:text-green-200',
      iconColor: 'text-green-400',
    },
    error: {
      icon: AlertCircle,
      bgColor: 'bg-red-50 dark:bg-red-900',
      borderColor: 'border-red-200 dark:border-red-800',
      textColor: 'text-red-800 dark:text-red-200',
      iconColor: 'text-red-400',
    },
    warning: {
      icon: AlertTriangle,
      bgColor: 'bg-amber-50 dark:bg-amber-900',
      borderColor: 'border-amber-200 dark:border-amber-800',
      textColor: 'text-amber-800 dark:text-amber-200',
      iconColor: 'text-amber-400',
    },
    info: {
      icon: Info,
      bgColor: 'bg-blue-50 dark:bg-blue-900',
      borderColor: 'border-blue-200 dark:border-blue-800',
      textColor: 'text-blue-800 dark:text-blue-200',
      iconColor: 'text-blue-400',
    },
  };

  const config = types[type];
  const Icon = config.icon;

  return (
    <div
      className={cn(
        'flex items-center p-4 rounded-lg border shadow-lg transition-all duration-300',
        config.bgColor,
        config.borderColor,
        className
      )}
    >
      <Icon className={cn('w-5 h-5 mr-3 flex-shrink-0', config.iconColor)} />
      <p className={cn('text-sm font-medium flex-1', config.textColor)}>
        {message}
      </p>
      <button
        onClick={onClose}
        className={cn(
          'ml-3 flex-shrink-0 p-1 rounded-lg hover:bg-black hover:bg-opacity-10 transition-colors',
          config.textColor
        )}
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};

export default Toast;