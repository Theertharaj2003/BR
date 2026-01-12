import React from 'react';
import { cn } from '../../utils/cn';

const Card = ({
  children,
  className,
  padding = 'md',
  shadow = 'md',
  ...props
}) => {
  const paddings = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  const shadows = {
    none: '',
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
    xl: 'shadow-xl',
  };

  return (
    <div
      className={cn(
        'bg-white rounded-xl border border-neutral-200 dark:bg-neutral-800 dark:border-neutral-700',
        paddings[padding],
        shadows[shadow],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

const CardHeader = ({ children, className, ...props }) => (
  <div
    className={cn('mb-4', className)}
    {...props}
  >
    {children}
  </div>
);

const CardTitle = ({ children, className, ...props }) => (
  <h3
    className={cn('text-lg font-semibold text-neutral-900 dark:text-neutral-100', className)}
    {...props}
  >
    {children}
  </h3>
);

const CardDescription = ({ children, className, ...props }) => (
  <p
    className={cn('text-sm text-neutral-600 dark:text-neutral-400', className)}
    {...props}
  >
    {children}
  </p>
);

const CardContent = ({ children, className, ...props }) => (
  <div
    className={cn('', className)}
    {...props}
  >
    {children}
  </div>
);

const CardFooter = ({ children, className, ...props }) => (
  <div
    className={cn('mt-4 flex items-center justify-between', className)}
    {...props}
  >
    {children}
  </div>
);

Card.Header = CardHeader;
Card.Title = CardTitle;
Card.Description = CardDescription;
Card.Content = CardContent;
Card.Footer = CardFooter;

export default Card;