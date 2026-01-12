import React from 'react';
import { cn } from '../../utils/cn';

const Avatar = ({
  src,
  alt,
  fallback,
  size = 'md',
  className,
  ...props
}) => {
  const sizes = {
    xs: 'w-6 h-6 text-xs',
    sm: 'w-8 h-8 text-sm',
    md: 'w-10 h-10 text-base',
    lg: 'w-12 h-12 text-lg',
    xl: 'w-16 h-16 text-xl',
  };

  const [hasError, setHasError] = React.useState(false);

  const handleError = () => {
    setHasError(true);
  };

  return (
    <div
      className={cn(
        'relative inline-flex items-center justify-center rounded-full bg-neutral-200 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-300 font-medium',
        sizes[size],
        className
      )}
      {...props}
    >
      {src && !hasError ? (
        <img
          src={src}
          alt={alt}
          className="w-full h-full rounded-full object-cover"
          onError={handleError}
        />
      ) : (
        <span className="uppercase">
          {fallback || alt?.charAt(0) || '?'}
        </span>
      )}
    </div>
  );
};

export default Avatar;