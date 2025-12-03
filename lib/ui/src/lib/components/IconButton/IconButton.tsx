import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '../../utils';

// Spinner component for loading state
const Spinner = () => (
  <svg
    className="animate-spin h-5 w-5 text-white"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
  >
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
    ></circle>
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.966 7.966 0 014 12H0c0 4.042 3.058 7.432 7 7.938v-2.647z"
    ></path>
  </svg>
);

const iconButtonVariants = cva('', {
  variants: {
    variant: {
      fill: cn(
        'text-[#FFFFFF]',
        'bg-[#1D55CE]',
        'border-[#1D55CE]',
        'hover:bg-[#406FE9] hover:border-[#406FE9]',
        'active:bg-[#002A78] active:border-[#002A78]',
        'disabled:pointer-events-none disabled:bg-[#DFE2F6] disabled:border-[#DFE2F6] disabled:text-[#A7ABBE]'
      ),
      secondary: cn(
        'text-[#161B29]',
        'bg-[#FFFFFF]',
        'border-[#DFE2F6]',
        'hover:bg-[#EEF0FF]',
        'active:border-[#1D55CE]',
        'disabled:pointer-events-none disabled:bg-[#DFE2F6] disabled:border-[#C2C5D9] disabled:text-[#A7ABBE]'
      ),
      text: cn(
        'border-transparent',
        'text-[#1D55CE]',
        'hover:text-[#406FE9]',
        'active:text-[#003EA8]',
        'disabled:pointer-events-none disabled:text-[#A7ABBE]'
      ),
    },
    size: {
      '2xs': cn('p-[2px]'),
      xs: cn('p-[4px]'),
      sm: cn('p-[6px]'),
      md: cn('p-[8px]'),
      lg: cn('p-[6px]'),
    },
  },
  defaultVariants: {
    variant: 'fill',
    size: 'md',
  },
});

export interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof iconButtonVariants> {
  asChild?: boolean;
  loading?: boolean; // Add loading prop
}

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      loading = false,
      children,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(
          'box-border border-[2px] inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-offset-2',
          iconButtonVariants({ variant, size }),
          loading && 'cursor-not-allowed'
        )}
        ref={ref}
        disabled={loading || props.disabled} // Disable button when loading
        {...props}
      >
        {loading ? (
          <Spinner />
        ) : (
          React.Children.map(children, (child) =>
            React.isValidElement(child) && child.type === 'svg'
              ? React.cloneElement(child as React.ReactElement, {
                  className: cn(
                    (child as React.ReactElement).props.className,
                    size === '2xs' && 'size-[16px]',
                    size === 'xs' && 'size-[16px]',
                    size === 'sm' && 'size-[16px]',
                    size === 'md' && 'size-[16px]',
                    size === 'lg' && 'size-[24px]'
                  ),
                })
              : child
          )
        )}
        {/* Conditionally render spinner */}
      </Comp>
    );
  }
);
IconButton.displayName = 'Button';

export { IconButton, iconButtonVariants };
