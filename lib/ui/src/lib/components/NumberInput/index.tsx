import React, { useState, InputHTMLAttributes } from 'react';

import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '../../utils';

export const numberInputVariants = cva(
  'flex h-auto w-full rounded-[8px] border-2 bg-[#FFFFFF] p-[10px] space-[8px] text-sm text-[#747688] font-normal text-[16px] leading-[24px] tracking-[-0.01em] file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      variant: {
        active: 'border-[#1D55CE]',
        default: 'border-[#DFE2F6] text-[#747688]',
        disabled: 'border-[#DFE2F6] bg-[#EEF0FF] text-[#A7ABBE]',
        error: 'border-[#D2444C]',
        filled: 'border-[#DFE2F6] text-[#161B29]',
        success: 'border-[#128A15]',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export type NumberInputVariants = VariantProps<typeof numberInputVariants>;

interface NumberInputProps
  extends InputHTMLAttributes<HTMLInputElement>,
    NumberInputVariants {
  label: string;
  value: number;
  unit: string;
  maxValue?: number;
}

const NumbeInput = React.forwardRef<HTMLInputElement, NumberInputProps>(
  ({ unit, label, className, maxValue, variant, ...props }, ref) => {
    const [inputVariant, setInputVariant] = useState<any>(variant);

    return (
      <div className="flex flex-col space-2">
        <div className="flex flex-row justify-between items-center">
          {label && (
            <label className="text-sm font-medium leading-4 tracking-tight text-left mb-2">
              {label}
            </label>
          )}
        </div>
        <div className="relative">
          <input
            ref={ref}
            type="number"
            className={cn(
              numberInputVariants({ variant: 'default', className }),
              unit ? 'pr-10' : ''
            )}
            disabled={variant === 'disabled'}
            onFocus={() => {
              setInputVariant('active');
            }}
            onBlur={() => {
              setInputVariant(props.value ? 'filled' : 'default');
            }}
            {...props}
          />
        </div>
      </div>
    );
  }
);

export default NumbeInput;
