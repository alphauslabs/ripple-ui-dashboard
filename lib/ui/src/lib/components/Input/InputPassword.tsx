import * as React from 'react';
import { cn } from '../../utils';
import { CloseEyeIcon, OpenEyeIcon } from '@project-ed/lib/icons'; // Replace with your icons

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  togglePasswordVisibility?: boolean; // Enable/disable password toggle
  status?: { type: 'success' | 'error'; msg?: string }; // Status prop with type and optional message
}

const InputPassword = React.forwardRef<HTMLInputElement, InputProps>(
  (
    { className, type, togglePasswordVisibility = false, status, ...props },
    ref
  ) => {
    const [showPassword, setShowPassword] = React.useState(false);
    const isPassword = type === 'password';

    const toggleVisibility = () => {
      setShowPassword((prev) => !prev);
    };

    const hasStatus = !!status;
    const isError = hasStatus && status?.type === 'error';
    const isSuccess = hasStatus && status?.type === 'success';

    return (
      <div>
        <div className="relative flex items-center">
          <input
            type={
              isPassword && showPassword && togglePasswordVisibility
                ? 'text'
                : type
            }
            className={cn(
              'flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50',
              isError
                ? 'border-danger-600 focus-visible:ring-danger-600'
                : isSuccess
                ? 'border-success-600 focus-visible:ring-success-600'
                : 'border-input',
              className
            )}
            ref={ref}
            {...props}
          />
          {isPassword && togglePasswordVisibility && (
            <button
              type="button"
              onClick={toggleVisibility}
              className="absolute right-2 flex items-center justify-center focus:outline-none"
            >
              {showPassword ? (
                <CloseEyeIcon
                  aria-label="Hide password"
                  color={
                    isError ? '#D2444C' : isSuccess ? '#128a15' : 'currentColor'
                  }
                />
              ) : (
                <OpenEyeIcon
                  aria-label="Show password"
                  color={
                    isError ? '#D2444C' : isSuccess ? '#128a15' : 'currentColor'
                  }
                />
              )}
            </button>
          )}
        </div>
        {hasStatus && status?.msg && (
          <p
            className={cn(
              'mt-1 text-xs',
              isError ? 'text-danger-600' : isSuccess ? 'text-success-600' : ''
            )}
          >
            {status.msg}
          </p>
        )}
      </div>
    );
  }
);

InputPassword.displayName = 'InputPassword';

export { InputPassword };
