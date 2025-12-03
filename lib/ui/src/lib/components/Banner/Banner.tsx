import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils';
import { Info, CheckCircle, AlertTriangle, X } from 'lucide-react';
import { LocalStorage } from '@project-ed/lib/utils';

const bannerVariants = cva(
  'gap-x-[12px] relative w-full rounded-lg border p-4 flex items-start justify-start [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground',
  {
    variants: {
      variant: {
        default:
          'bg-neutral-100 text-neutral-20 border-neutral-80 [&>svg]:text-neutral-5',
        informational:
          'bg-info-95 text-tangBlue-40 border-info-70 [&>svg]:text-info-40',
        success:
          'bg-success-95 text-success-40 border-success-70 [&>svg]:text-success-40',
        error:
          'bg-danger-95 text-danger-40 border-danger-70 [&>svg]:text-danger-40',
        warning:
          'bg-warning-95 text-warning-40 border-warning-70 [&>svg]:text-warning-40',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

interface BannerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof bannerVariants> {
  removable?: boolean;
}

const Banner = React.forwardRef<HTMLDivElement, BannerProps>(
  ({ className, variant, removable = false, ...props }, ref) => {
    const localStorageKey = 'banner-visible';
    const [visible, setVisible] = React.useState<boolean>(() => {
      if (typeof window === 'undefined') return true; // Avoid SSR issues
      const storedValue = LocalStorage.get<boolean>(localStorageKey);
      return storedValue !== false;
    });

    const handleClose = () => {
      setVisible(false);
      // Store the visibility state in localStorage
      LocalStorage.set(localStorageKey, false);
    };

    if (!visible) return null;

    const renderIcon = () => {
      switch (variant) {
        case 'informational':
          return <Info />;
        case 'success':
          return <CheckCircle />;
        case 'error':
          return <AlertTriangle />;
        case 'warning':
          return <Info />;
        default:
          return <Info />;
      }
    };

    return (
      <div
        ref={ref}
        role="alert"
        className={cn('', bannerVariants({ variant }), className)}
        {...props}
      >
        <div className="w-6 h-6">{renderIcon()}</div>
        <div className="flex-1 text-justify text-[16px] leading-[20.8px] font-normal">
          {props.children}
        </div>
        {removable && (
          <button
            onClick={() => setVisible(false)}
            className="text-current hover:opacity-70 transition-opacity"
          >
            <X className="w-6 h-6" />
          </button>
        )}
      </div>
    );
  }
);
Banner.displayName = 'Banner';

const BannerDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('text-sm [&_p]:leading-relaxed', className)}
    {...props}
  />
));
BannerDescription.displayName = 'BannerDescription';

export { Banner, BannerDescription };
