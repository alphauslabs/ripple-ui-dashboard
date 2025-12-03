import * as React from 'react';
import * as RadixSwitch from '@radix-ui/react-switch';
import { cn } from '../../utils';

import {
  switchRootVariants,
  switchThumbVariants,
  SwitchProps,
} from './Switch.types';

const Switch = React.forwardRef<
  React.ElementRef<typeof RadixSwitch.Root>,
  Omit<SwitchProps, 'onCopy'>
>(({ className, variant = 'off', onChange, label, ...props }, ref) => (
  <div className="inline-flex items-center space-x-2">
    <RadixSwitch.Root
      ref={ref as React.Ref<HTMLButtonElement>}
      className={cn(switchRootVariants({ variant }), className)}
      onCheckedChange={onChange}
      {...(props as RadixSwitch.SwitchProps)}
    >
      <RadixSwitch.Thumb className={cn(switchThumbVariants({ variant }))} />
    </RadixSwitch.Root>
    {label && (
      <span className="font-normal text-base leading-[150%] tracking-[-0.01em] text-[rgba(22,27,41,1)]">
        {label}
      </span>
    )}
  </div>
));

Switch.displayName = 'Switch';

export { Switch };
