import React from 'react';
import { cn } from '../../utils';

interface SpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const Spinner: React.FC<SpinnerProps> = ({ size = 'md', className }) => {
  const sizeClasses = {
    sm: 'h-4 w-4 border-2',
    md: 'h-8 w-8 border-4',
    lg: 'h-12 w-12 border-4',
  };

  return (
    <div
      className={cn(
        'animate-spin rounded-full border-t-tangBlue-60 border-b-transparent border-l-transparent border-r-transparent',
        sizeClasses[size],
        className
      )}
    />
  );
};

const FullPageSpinner: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen w-screen bg-white dark:bg-gray-800">
      <div className="animate-spin rounded-full h-32 w-32 border-8 border-t-tangBlue-60 border-b-transparent"></div>
    </div>
  );
};

interface InlineSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const InlineSpinner: React.FC<InlineSpinnerProps> = ({
  size = 'md',
  className,
}) => {
  return (
    <div className={cn('flex items-center justify-center p-4', className)}>
      <Spinner size={size} />
    </div>
  );
};

export { FullPageSpinner, Spinner, InlineSpinner };
