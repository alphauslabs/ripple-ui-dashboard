import * as React from 'react';

export interface InputOTPProps {
  /** Maximum number of characters */
  maxLength: number;
  /** Current value */
  value?: string;
  /** Change handler */
  onChange?: (value: string) => void;
  /** Pattern for input validation */
  pattern?: string;
  /** Disabled state */
  disabled?: boolean;
  /** Auto focus */
  autoFocus?: boolean;
  /** Custom container class */
  containerClassName?: string;
  /** Custom input class */
  className?: string;
  /** Children (slots) */
  children?: React.ReactNode;
}

export interface InputOTPGroupProps extends React.ComponentProps<'div'> {}

export interface InputOTPSlotProps extends React.ComponentProps<'div'> {
  index: number;
}

export interface InputOTPSeparatorProps extends React.ComponentProps<'div'> {}

export interface InputOTPWithLabelProps extends InputOTPProps {
  /** Optional label */
  label?: string;
  /** Whether the field is required */
  required?: boolean;
  /** Helper text displayed below the input */
  helperText?: string;
  /** Error state */
  error?: boolean;
}
