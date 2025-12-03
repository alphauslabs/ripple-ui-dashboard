import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@project-ed/lib/utils';
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

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default:
          'bg-tangBlue-50 text-white hover:bg-tangBlue-40 active:bg-tangBlue-30',
        destructive:
          'bg-danger-60 text-white hover:bg-danger-50 active:bg-danger-40',
        outline:
          'border border-neutral-30 bg-transparent hover:bg-neutral-95 hover:text-tangBlue-50',
        secondary:
          'bg-neutral-90 text-neutral-20 hover:bg-neutral-80 active:bg-neutral-70',
        ghost: 'hover:bg-neutral-95 hover:text-tangBlue-50',
        link: 'text-tangBlue-50 underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean; // Add loading prop
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
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
          buttonVariants({ variant, size, className }),
          loading && 'cursor-not-allowed'
        )}
        ref={ref}
        disabled={loading || props.disabled} // Disable button when loading
        {...props}
      >
        {loading ? (
          <>
            <Spinner />
            <div className="m-1"></div>
            {children}
          </>
        ) : (
          children
        )}
        {/* Conditionally render spinner */}
      </Comp>
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
