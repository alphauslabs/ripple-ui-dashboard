'use client';

import * as React from 'react';
import * as ProgressPrimitive from '@radix-ui/react-progress';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils';

const progressVariants = cva(
  'relative w-full overflow-hidden rounded-full bg-neutral-90',
  {
    variants: {
      size: {
        default: 'h-2',
        sm: 'h-1',
        lg: 'h-3',
      },
      variant: {
        default: '',
        success: '',
        warning: '',
        info: '',
        error: '',
      },
    },
    defaultVariants: {
      size: 'default',
      variant: 'default',
    },
  }
);

const progressIndicatorVariants = cva('h-full w-full flex-1 transition-all', {
  variants: {
    variant: {
      default: 'bg-neutral-50',
      success: 'bg-success-50',
      warning: 'bg-warning-50',
      info: 'bg-info-50',
      error: 'bg-danger-50',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export interface ProgressProps
  extends React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>,
    VariantProps<typeof progressVariants> {
  value?: number;
  max?: number;
  label?: string;
  valueFormat?: 'percentage' | 'fraction' | 'none';
  statusText?: string;
}

const ProgressBar = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  ProgressProps
>(
  (
    {
      className,
      value = 0,
      max = 100,
      label,
      valueFormat = 'none',
      statusText,
      variant = 'default',
      size,
      ...props
    },
    ref
  ) => {
    const percentage = Math.round((value / max) * 100);

    return (
      <div className="w-full space-y-[8px]">
        <div className="flex justify-between items-center">
          {label && (
            <p
              className={cn(
                'text-sm font-inter font-semibold text-[14px] leading-none tracking-tighter uppercase',
                variant === 'error' ? 'text-red-600' : 'text-slate-700'
              )}
            >
              {label}
            </p>
          )}
          {valueFormat === 'percentage' && (
            <p className="text-sm font-inter font-medium text-[14px] leading-none tracking-tighter uppercase ml-2 text-neutral-800">
              {percentage}%
            </p>
          )}
          {valueFormat === 'fraction' && (
            <p className="text-sm font-inter font-medium text-[14px] leading-none tracking-tighter uppercase ml-2 text-neutral-800">
              {Math.round(value)}/{max} completed
            </p>
          )}
        </div>
        <ProgressPrimitive.Root
          ref={ref}
          className={cn(progressVariants({ variant, size, className }))}
          {...props}
          value={value}
          max={max}
        >
          <ProgressPrimitive.Indicator
            className={cn(progressIndicatorVariants({ variant }))}
            style={{ transform: `translateX(-${100 - percentage}%)` }}
          />
        </ProgressPrimitive.Root>
        {statusText && (
          <p className="text-sm font-inter font-normal text-[14px] leading-none tracking-[-0.01em]">
            {statusText}
          </p>
        )}
      </div>
    );
  }
);
ProgressBar.displayName = ProgressPrimitive.Root.displayName;

export { ProgressBar };
