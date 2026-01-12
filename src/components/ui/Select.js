import React, { useState } from 'react';
import { ChevronDown, Check } from 'lucide-react';
import { cn } from '../../utils/cn';

const Select = ({
  label,
  options = [],
  value,
  onChange,
  placeholder = 'Select an option',
  error,
  helperText,
  className,
  containerClassName,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const selectedOption = options.find(option => option.value === value);

  const handleSelect = (option) => {
    onChange(option.value);
    setIsOpen(false);
  };

  return (
    <div className={cn('relative space-y-1', containerClassName)}>
      {label && (
        <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">
          {label}
        </label>
      )}
      <div className="relative">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            'relative w-full bg-white border border-neutral-300 rounded-lg px-3 py-2 text-left shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-neutral-800 dark:border-neutral-600 dark:text-neutral-100',
            error && 'border-red-500 focus:ring-red-500 focus:border-red-500',
            className
          )}
          {...props}
        >
          <span className={cn(
            'block truncate',
            !selectedOption && 'text-neutral-400 dark:text-neutral-500'
          )}>
            {selectedOption ? selectedOption.label : placeholder}
          </span>
          <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
            <ChevronDown className="w-5 h-5 text-neutral-400" />
          </span>
        </button>

        {isOpen && (
          <>
            <div
              className="fixed inset-0 z-10"
              onClick={() => setIsOpen(false)}
            />
            <div className="absolute z-20 mt-1 w-full bg-white shadow-lg max-h-60 rounded-lg py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none dark:bg-neutral-800 dark:ring-neutral-700">
              {options.map((option) => (
                <button
                  key={option.value}
                  onClick={() => handleSelect(option)}
                  className={cn(
                    'w-full text-left px-3 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-700 flex items-center justify-between',
                    selectedOption?.value === option.value && 'bg-primary-50 text-primary-900 dark:bg-primary-900 dark:text-primary-100'
                  )}
                >
                  <span>{option.label}</span>
                  {selectedOption?.value === option.value && (
                    <Check className="w-4 h-4 text-primary-600" />
                  )}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
      {error && (
        <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
      )}
      {helperText && !error && (
        <p className="text-sm text-neutral-500 dark:text-neutral-400">{helperText}</p>
      )}
    </div>
  );
};

export default Select;