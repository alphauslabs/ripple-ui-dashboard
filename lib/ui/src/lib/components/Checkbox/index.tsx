import * as React from 'react';
import { cva } from 'class-variance-authority';

import { cn } from '../../utils';

import { CheckboxProps } from './Checkbox.types';

const checkboxVariants = cva(
  'relative inline-flex items-center justify-center w-6 h-6 border rounded-md cursor-pointer',
  {
    variants: {
      variant: {
        unchecked:
          'box-border bg-white border-2 border-[#C2C5D9] text-[rgba(22,27,41,1)]',
        checked:
          'bg-[rgba(29,85,206,1)] border-[rgba(29,85,206,1)] text-[rgba(22,27,41,1)]',
        indetermined:
          'bg-[rgba(29,85,206,1)] border-[rgba(29,85,206,1)] text-[rgba(22,27,41,1)]',
        disabled:
          'bg-[rgba(223,226,246,1)] border-[rgba(223,226,246,1)] text-[rgba(142,144,163,1)] cursor-not-allowed pointer-events-none',
      },
    },
    defaultVariants: {
      variant: 'unchecked',
    },
  }
);

const Checkbox = React.forwardRef<HTMLDivElement, CheckboxProps>(
  ({ className, variant, onClick, label, dataTestid, ...props }, ref) => (
    <label className="inline-flex items-start space-x-2">
      <div
        ref={ref}
        role="checkbox"
        className={cn(checkboxVariants({ variant }), className)}
        onClick={onClick}
        data-testid={`checkbox-${dataTestid}`}
        {...props}
      >
        {variant === 'checked' && (
          <svg
            className="absolute w-4 h-4 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            data-testid={`checkbox-checked-${dataTestid}`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
              d="M5 13l4 4L19 7"
            />
          </svg>
        )}
        {variant === 'indetermined' && (
          <svg
            className="absolute w-4 h-4 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
              d="M5 12h14"
            />
          </svg>
        )}
      </div>
      {label && (
        <span
          className={cn(
            'font-normal font-weight-400 text-base leading-[150%] tracking-[-0.01em]',
            variant === 'disabled'
              ? 'text-[rgba(142,144,163,1)]'
              : 'text-[rgba(22,27,41,1)]',
            (variant === 'disabled' || variant === 'indetermined') &&
              'cursor-not-allowed',
            (variant === 'checked' || variant === 'unchecked') &&
              'cursor-pointer'
          )}
          onClick={onClick}
        >
          {label}
        </span>
      )}
    </label>
  )
);
Checkbox.displayName = 'Checkbox';

export { Checkbox, checkboxVariants };
