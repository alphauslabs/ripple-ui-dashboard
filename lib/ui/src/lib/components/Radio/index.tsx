import * as React from 'react';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import { Circle } from 'lucide-react';

import { cva } from 'class-variance-authority';

import { cn } from '../../utils';

import { Label } from '../Label';

import { RadioProps } from './Radio.types';

const RadioButton = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, ...props }, ref) => {
  return (
    <div className="flex items-center space-x-2">
      <RadioGroupPrimitive.Item
        ref={ref}
        className={cn(
          'aspect-square h-4 w-4 rounded-full border border-primary text-primary shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
          className
        )}
        {...props}
      >
        <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
          <Circle className="h-3.5 w-3.5 fill-primary" />
        </RadioGroupPrimitive.Indicator>
      </RadioGroupPrimitive.Item>
      <Label htmlFor="option-one">Option One</Label>
    </div>
  );
});
RadioButton.displayName = RadioGroupPrimitive.Item.displayName;

const radioVariants = cva(
  'relative inline-flex items-center justify-center w-6 h-6 border-2 rounded-full cursor-pointer',
  {
    variants: {
      variant: {
        unselected: 'bg-white border-[#C2C5D9]',
        selected: 'bg-white border-[rgba(29,85,206,1)] text-[rgba(22,27,41,1)]',
        disabled:
          'bg-[rgba(223,226,246,1)] border-[rgba(223,226,246,1)] text-[rgba(142,144,163,1)] cursor-not-allowed pointer-events-none',
      },
    },
    defaultVariants: {
      variant: 'unselected',
    },
  }
);

const Radio = React.forwardRef<HTMLDivElement, RadioProps>(
  ({ className, variant, onClick, label, ...props }, ref) => (
    <label className="inline-flex items-center space-x-2">
      <div
        ref={ref}
        role="radio"
        className={cn(radioVariants({ variant }), className)}
        onClick={onClick}
        {...props}
      >
        {variant === 'selected' && (
          <div className="w-3 h-3 bg-[rgba(29,85,206,1)] rounded-full"></div>
        )}
      </div>
      {label && (
        <span
          className={cn(
            'font-normal font-weight-400 text-base leading-[150%] tracking-[-0.01em]',
            variant === 'disabled'
              ? 'text-[rgba(142,144,163,1)]'
              : 'text-[rgba(22,27,41,1)]',
            variant === 'disabled' && 'cursor-not-allowed',
            (variant === 'selected' || variant === 'unselected') &&
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
Radio.displayName = 'Radio';

export { Radio, RadioButton, radioVariants };
