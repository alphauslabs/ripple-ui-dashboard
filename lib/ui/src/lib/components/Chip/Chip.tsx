import React, { FC } from 'react';
import { cva } from 'class-variance-authority';
import { cn } from '../../utils';
import { ChipProps } from './Chip.types';
import { CloseIcon } from '@project-ed/lib/icons';
import { X } from 'lucide-react';

const chipStyles = cva(
  'h-[22px] w-fit inline-flex items-center font-medium border-[1px] rounded-[16px] px-[8px] py-[4px]',
  {
    variants: {
      variant: {
        info: 'bg-info-85 border-info-70 text-info-30',
        default: 'bg-neutral-95 border-neutral-80 text-neutral-40',
        error: 'bg-danger-85 border-danger-70 text-danger-30',
        success: 'bg-success-85 border-success-70 text-success-30',
        warning: 'bg-warning-85 border-warning-70 text-warning-30',
        disabled: 'bg-neutral-80 border-neutral-70 text-neutral-50',
      },
      size: {
        sm: 'text-[12px] leading-[12px]',
        md: 'text-[14px] leading-[14px]',
        lg: 'text-[16px] leading-[16px]',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'sm',
    },
  }
);

const Chip: FC<ChipProps> = ({
  children,
  variant = 'default',
  size = 'sm',
  onRemove,
}) => {
  const baseClasses = cn(chipStyles({ variant, size }));

  if (onRemove) {
    return (
      <button
        onClick={onRemove}
        className={cn(
          baseClasses,
          'cursor-pointer hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-tangBlue-50'
        )}
        aria-label="Remove chip"
        type="button"
      >
        <span>{children}</span>
        <X height="16" width="16" className="ml-1" />
      </button>
    );
  }

  return (
    <span className={baseClasses}>
      <span>{children}</span>
    </span>
  );
};

export { Chip, chipStyles };
