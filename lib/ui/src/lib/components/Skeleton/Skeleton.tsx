import React from 'react';
import { cn } from '../../utils';

interface SkeletonProps {
  isSquare?: boolean;
  className?: string;
}

const Skeleton: React.FC<SkeletonProps> = ({ isSquare = false, className }) => {
  return (
    <div
      className={cn(isSquare ? '' : 'rounded-full', className)}
      style={{
        background:
          'linear-gradient(90deg, rgba(165, 165, 165, 0.1) 25%, rgba(165, 165, 165, 0.3) 50%, rgba(165, 165, 165, 0.1) 75%)',
        backgroundSize: '200% 100%',
        animation: 'gradient 2s ease-in-out infinite',
      }}
    ></div>
  );
};

const style = document.createElement('style');
style.innerHTML = `
  @keyframes gradient {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }
`;
document.head.appendChild(style);

export { Skeleton };
