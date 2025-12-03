import React, { forwardRef } from 'react';
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ChevronSmallIconProps extends React.SVGProps<SVGSVGElement> {
  direction?: 'up' | 'right' | 'down' | 'left';
}

const ChevronSmallIcon = forwardRef<SVGSVGElement, ChevronSmallIconProps>(
  ({ direction = 'down', className, ...props }, ref) => {
    // Calculate SVG transform based on direction
    const transformValues = {
      up: 'rotate(180 12 12)',
      left: 'rotate(90 12 12)',
      right: 'rotate(-90 12 12)',
      down: '',
    };

    return (
      <svg
        ref={ref}
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        {...props}
      >
        <g clipPath="url(#clip0_639_5213)">
          <path
            transform={transformValues[direction]}
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.46503 10.293C8.65256 10.1055 8.90686 10.0002 9.17203 10.0002C9.43719 10.0002 9.6915 10.1055 9.87903 10.293L12 12.414L14.121 10.293C14.3085 10.1053 14.5629 9.99985 14.8282 9.99976C15.0934 9.99966 15.3479 10.1049 15.5355 10.2925C15.7232 10.48 15.8286 10.7343 15.8287 10.9996C15.8288 11.2649 15.7235 11.5193 15.536 11.707L12.707 14.536C12.5195 14.7234 12.2652 14.8287 12 14.8287C11.7349 14.8287 11.4806 14.7234 11.293 14.536L8.46503 11.707C8.27756 11.5194 8.17224 11.2651 8.17224 11C8.17224 10.7348 8.27756 10.4805 8.46503 10.293Z"
            fill="#161B29"
          />
        </g>
        <defs>
          <clipPath id="clip0_639_5213">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);

ChevronSmallIcon.displayName = 'ChevronSmallIcon';

export default ChevronSmallIcon;
