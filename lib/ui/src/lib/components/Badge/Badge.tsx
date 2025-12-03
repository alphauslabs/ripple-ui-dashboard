import React, { FC } from 'react';
import { cva } from 'class-variance-authority';
import { cn } from '../../utils';
import { BadgeProps } from './Badge.types';

const badgeStyles = cva(
  'h-fit w-fit inline-block font-medium border-[1px] rounded-[8px] px-[5px] py-[3px] gap-[4px]',
  {
    variants: {
      variant: {
        info: 'bg-[#DAE2FF] border-[#B4C5FF] text-[#00429D]',
        default: 'bg-[#EEF0FF] border-[#DFE2F6] text-[#434657]',
        error: 'bg-[#FFDAD8] border-[#FFB3B2] text-[#8F0F21]',
        success: 'bg-[#D9E7D1] border-[#ABD19F] text-[#005404]',
        warning: 'bg-[#FFDEB3] border-[#FFBA4E] text-[#634000]',
        disabled: 'bg-[#DFE2F6] border-[#C2C5D9] text-[#A7ABBE]',
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

const Badge: FC<BadgeProps> = ({
  children,
  variant = 'default',
  size = 'sm',
}) => {
  return <span className={cn(badgeStyles({ variant, size }))}>{children}</span>;
};

export { Badge, badgeStyles };
