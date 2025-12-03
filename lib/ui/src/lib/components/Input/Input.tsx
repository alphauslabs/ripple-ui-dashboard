'use client';

import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { cn } from '../../utils';
import type { InputProps } from './Input.types';
import { cva } from 'class-variance-authority';

export const inputVariants = cva(
  cn(
    // Layout
    'flex w-full',
    // Shape & Background
    'rounded-[8px] bg-[#FFFFFF] border-[2px]',
    // Spacing - adjusted padding to achieve 36px height
    'px-[10px] py-[6px] space-[8px]',
    // Typography - adjusted line height to 16px
    'text-[#747688] font-normal text-[16px] leading-[20px] tracking-[-0.01em]',
    // File input styling
    'file:border-0 file:bg-transparent file:text-sm file:font-medium',
    // States
    'focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50'
    // Explicitly set height
    //'h-[36px]'
  ),
  {
    variants: {
      variant: {
        active: 'border-tangBlue-50',
        default: 'border-neutral-80 text-neutral-50',
        disabled: 'border-neutral-80 bg-neutral-95 text-neutral-70',
        error: 'border-danger-50',
        filled: 'border-neutral-80 text-neutral-10',
        success: 'border-success-50',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type = 'text',
      label,
      required = false,
      helperText,
      maxLength,
      value,
      iconLeft,
      iconRight,
      labelRightSlot,
      variant = 'default',
      showSearchIcon = false,
      ...props
    },
    ref
  ) => {
    const [inputVariant, setInputVariant] = useState<any>(variant);

    // Automatically set iconRight to search icon if showSearchIcon is true
    // If iconRight is provided, it takes precedence over showSearchIcon
    const effectiveIconRight =
      iconRight ||
      (showSearchIcon ? (
        <Search className="w-4 h-4 text-neutral-50" />
      ) : undefined);

    return (
      <div className="flex flex-col space-2">
        <div className="flex flex-row justify-between items-center">
          {label && (
            <label className="text-sm font-medium leading-4 tracking-tight text-left mb-2">
              {label}
              {required && <span className="text-red-500 ml-1">*</span>}
            </label>
          )}
          {labelRightSlot && labelRightSlot}
        </div>
        <div className="relative">
          <input
            type={type}
            className={cn(
              inputVariants({ variant: inputVariant, className }),
              iconLeft ? 'pl-10' : '',
              effectiveIconRight ? 'pr-10' : ''
            )}
            maxLength={maxLength}
            ref={ref}
            disabled={variant === 'disabled'}
            onFocus={() => {
              setInputVariant('active');
            }}
            onBlur={() => {
              setInputVariant(value ? 'filled' : 'default');
            }}
            value={value}
            {...props}
          />
          {iconLeft && (
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 flex items-center justify-center w-4 h-4 pointer-events-none">
              {iconLeft}
            </div>
          )}
          {effectiveIconRight && (
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center justify-center w-4 h-4 pointer-events-none">
              {effectiveIconRight}
            </div>
          )}
        </div>

        <div className="flex flex-row justify-between">
          {helperText && (
            <p className="text-xs text-[#595D6E] max-w-[75%] break-words">
              {helperText}
            </p>
          )}
          {maxLength && (
            <p
              className={`text-xs text-[#595D6E] ${
                !helperText ? 'ml-auto' : 'text-right'
              }`}
            >
              {`${
                typeof value === 'string' || Array.isArray(value)
                  ? value.length
                  : 0
              }/${maxLength}`}
            </p>
          )}
        </div>
      </div>
    );
  }
);

Input.displayName = 'Input';

export { Input };
