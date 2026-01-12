import React from 'react';

interface ModernInputProps {
  label?: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  helperText?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
  disabled?: boolean;
  required?: boolean;
  className?: string;
}

export const ModernInput: React.FC<ModernInputProps> = ({
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  error,
  helperText,
  icon,
  iconPosition = 'left',
  fullWidth = false,
  disabled = false,
  required = false,
  className = '',
}) => {
  return (
    <div className={`${fullWidth ? 'w-full' : ''} ${className}`}>
      {label && (
        <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1.5">
          {label}
          {required && <span className="text-error-500 ml-1">*</span>}
        </label>
      )}
      <div className="relative">
        {icon && iconPosition === 'left' && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400">
            {icon}
          </div>
        )}
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          className={`
            w-full px-4 py-2.5 rounded-lg
            bg-white dark:bg-dark-100
            border ${error ? 'border-error-300 dark:border-error-700' : 'border-neutral-300 dark:border-dark-300'}
            text-neutral-900 dark:text-white
            placeholder-neutral-400 dark:placeholder-neutral-500
            focus:outline-none focus:ring-2 ${error ? 'focus:ring-error-500' : 'focus:ring-primary-500'}
            disabled:opacity-50 disabled:cursor-not-allowed
            transition-all duration-200
            ${icon && iconPosition === 'left' ? 'pl-10' : ''}
            ${icon && iconPosition === 'right' ? 'pr-10' : ''}
          `}
        />
        {icon && iconPosition === 'right' && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400">
            {icon}
          </div>
        )}
      </div>
      {error && (
        <p className="mt-1.5 text-sm text-error-600 dark:text-error-400">{error}</p>
      )}
      {helperText && !error && (
        <p className="mt-1.5 text-sm text-neutral-500 dark:text-neutral-400">{helperText}</p>
      )}
    </div>
  );
};

interface ModernTextareaProps {
  label?: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  rows?: number;
  error?: string;
  helperText?: string;
  fullWidth?: boolean;
  disabled?: boolean;
  required?: boolean;
  className?: string;
}

export const ModernTextarea: React.FC<ModernTextareaProps> = ({
  label,
  placeholder,
  value,
  onChange,
  rows = 4,
  error,
  helperText,
  fullWidth = false,
  disabled = false,
  required = false,
  className = '',
}) => {
  return (
    <div className={`${fullWidth ? 'w-full' : ''} ${className}`}>
      {label && (
        <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1.5">
          {label}
          {required && <span className="text-error-500 ml-1">*</span>}
        </label>
      )}
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        rows={rows}
        disabled={disabled}
        required={required}
        className={`
          w-full px-4 py-2.5 rounded-lg
          bg-white dark:bg-dark-100
          border ${error ? 'border-error-300 dark:border-error-700' : 'border-neutral-300 dark:border-dark-300'}
          text-neutral-900 dark:text-white
          placeholder-neutral-400 dark:placeholder-neutral-500
          focus:outline-none focus:ring-2 ${error ? 'focus:ring-error-500' : 'focus:ring-primary-500'}
          disabled:opacity-50 disabled:cursor-not-allowed
          transition-all duration-200
          resize-none
        `}
      />
      {error && (
        <p className="mt-1.5 text-sm text-error-600 dark:text-error-400">{error}</p>
      )}
      {helperText && !error && (
        <p className="mt-1.5 text-sm text-neutral-500 dark:text-neutral-400">{helperText}</p>
      )}
    </div>
  );
};

interface SelectOption {
  value: string;
  label: string;
}

interface ModernSelectProps {
  label?: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  options: SelectOption[];
  error?: string;
  helperText?: string;
  fullWidth?: boolean;
  disabled?: boolean;
  required?: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const ModernSelect: React.FC<ModernSelectProps> = ({
  label,
  placeholder,
  value,
  onChange,
  options,
  error,
  helperText,
  fullWidth = false,
  disabled = false,
  required = false,
  size = 'md',
  className = '',
}) => {
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2.5 text-base',
    lg: 'px-5 py-3 text-lg',
  };

  return (
    <div className={`${fullWidth ? 'w-full' : ''} ${className}`}>
      {label && (
        <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1.5">
          {label}
          {required && <span className="text-error-500 ml-1">*</span>}
        </label>
      )}
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
        required={required}
        className={`
          w-full rounded-lg
          bg-white dark:bg-dark-100
          border ${error ? 'border-error-300 dark:border-error-700' : 'border-neutral-300 dark:border-dark-300'}
          text-neutral-900 dark:text-white
          focus:outline-none focus:ring-2 ${error ? 'focus:ring-error-500' : 'focus:ring-primary-500'}
          disabled:opacity-50 disabled:cursor-not-allowed
          transition-all duration-200
          ${sizeClasses[size]}
        `}
      >
        {placeholder && <option value="">{placeholder}</option>}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && (
        <p className="mt-1.5 text-sm text-error-600 dark:text-error-400">{error}</p>
      )}
      {helperText && !error && (
        <p className="mt-1.5 text-sm text-neutral-500 dark:text-neutral-400">{helperText}</p>
      )}
    </div>
  );
};

interface ModernCheckboxProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
  className?: string;
}

export const ModernCheckbox: React.FC<ModernCheckboxProps> = ({
  label,
  checked,
  onChange,
  disabled = false,
  className = '',
}) => {
  return (
    <label className={`inline-flex items-center gap-2 cursor-pointer ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}>
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        disabled={disabled}
        className="w-4 h-4 rounded border-neutral-300 text-primary-600 focus:ring-primary-500"
      />
      <span className="text-sm text-neutral-700 dark:text-neutral-300">{label}</span>
    </label>
  );
};

interface ModernRadioProps {
  label: string;
  name: string;
  value: string;
  checked: boolean;
  onChange: (value: string) => void;
  disabled?: boolean;
  className?: string;
}

export const ModernRadio: React.FC<ModernRadioProps> = ({
  label,
  name,
  value,
  checked,
  onChange,
  disabled = false,
  className = '',
}) => {
  return (
    <label className={`inline-flex items-center gap-2 cursor-pointer ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}>
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
        className="w-4 h-4 border-neutral-300 text-primary-600 focus:ring-primary-500"
      />
      <span className="text-sm text-neutral-700 dark:text-neutral-300">{label}</span>
    </label>
  );
};
