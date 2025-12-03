import { InputHTMLAttributes, ReactNode } from 'react';

import { inputVariants } from './Input';
import { VariantProps } from 'class-variance-authority';

export type InputVariant = VariantProps<typeof inputVariants>;

export interface InputProps
  extends InputHTMLAttributes<HTMLInputElement>,
    InputVariant {
  label?: string;
  required?: boolean;
  helperText?: string;
  iconRight?: ReactNode;
  labelRightSlot?: ReactNode;
  iconLeft?: ReactNode;
  showSearchIcon?: boolean;
}
