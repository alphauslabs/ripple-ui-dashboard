import React from 'react';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { Check, ChevronDown, ChevronRight, Circle } from 'lucide-react';

import { cn } from '../../utils';

const DropdownMenu = DropdownMenuPrimitive.Root;

const DropdownMenuTrigger = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DropdownMenuPrimitive.Trigger className="outline-none" asChild>
    <button
      className={cn(
        // Base layout
        'flex items-center justify-between',
        // Sizing and spacing
        'px-3 py-2 border-neutral-80',
        // Appearance
        'rounded-md border-[2px] bg-background',
        'text-sm [&>span]:line-clamp-1',
        // Typography
        'font-[400] text-[16px] leading-[150%] tracking-[-0.01em]',
        // States
        'placeholder:text-muted-foreground',
        'disabled:cursor-not-allowed disabled:opacity-50',
        'data-[state=open]:border-tangBlue-50',
        className
      )}
      aria-label="Customise options"
    >
      {children}
    </button>
  </DropdownMenuPrimitive.Trigger>
));
DropdownMenuTrigger.displayName = DropdownMenuPrimitive.Trigger.displayName;

interface DropdownMenuChevronTriggerProps {
  className?: string;
  children?: React.ReactNode;
}

const DropdownMenuChevronTrigger = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Trigger> &
    DropdownMenuChevronTriggerProps
>(({ className, children, ...props }, ref) => (
  <DropdownMenuPrimitive.Trigger asChild>
    <button
      ref={ref}
      className={cn(
        'flex items-center rounded-md outline-none justify-between bg-white',
        'space-[6px] px-[10px] py-[8px]',
        'border-[2px] border-neutral-80 text-sm [&>span]:line-clamp-1',
        `font-normal text-[16px] leading-[16px] tracking-[-0.01em]`,
        'placeholder:text-muted-foreground',
        'disabled:cursor-not-allowed disabled:opacity-50',
        'data-[state=open]:border-tangBlue-50',
        className
      )}
      {...props}
    >
      {children}
      <DropdownMenuPrimitive.Trigger asChild className="outline-none">
        <ChevronDown
          className={cn(
            // Base size
            'size-[16px]',
            // spacing
            'ml-1',
            // Animation
            'transition-transform duration-200',
            // States
            'data-[state=open]:-rotate-180',
            'data-[disabled=true]:text-gray-300'
          )}
        />
      </DropdownMenuPrimitive.Trigger>
    </button>
  </DropdownMenuPrimitive.Trigger>
));
DropdownMenuChevronTrigger.displayName =
  DropdownMenuPrimitive.Trigger.displayName;

const DropdownMenuPortal = DropdownMenuPrimitive.Portal;

const DropdownMenuContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>
>(({ className, children, sideOffset = 4, ...props }, ref) => (
  <DropdownMenuPrimitive.Portal>
    <DropdownMenuPrimitive.Content
      ref={ref}
      className={cn(
        // Base appearance
        'bg-white border border-gray-300 shadow-sm rounded-md p-[8px]',
        // Animation states
        'w-[var(--radix-dropdown-menu-trigger-width)]', // Match trigger width
        'data-[state=open]:animate-in data-[state=closed]:animate-out',
        'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
        'data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
        // Position-specific animations
        'data-[side=bottom]:slide-in-from-top-2',
        'data-[side=left]:slide-in-from-right-2',
        'data-[side=right]:slide-in-from-left-2',
        'data-[side=top]:slide-in-from-bottom-2',
        className
      )}
      sideOffset={5}
      {...props}
    >
      {children}
    </DropdownMenuPrimitive.Content>
  </DropdownMenuPrimitive.Portal>
));
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;

const DropdownMenuItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item>
>(({ className, children, disabled, ...props }, ref) => (
  <DropdownMenuPrimitive.Item
    ref={ref}
    className={cn(
      'p-[12px] outline-none relative flex w-full cursor-default select-none items-center rounded-[8px] text-[#161B29]',
      'hover:bg-[#EFF0FF] data-[state=checked]:bg-[#DBE1FF]',
      'data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[disabled]:text-[#A7ABBE]',
      className
    )}
    disabled={disabled}
    {...props}
  >
    {children}
  </DropdownMenuPrimitive.Item>
));
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;

const DropdownMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <DropdownMenuPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      // Base layout
      'relative flex items-center',
      // Spacing and sizing
      'py-1.5 pl-8 pr-2',
      // Typography and interaction
      'cursor-default select-none text-sm',
      'rounded-sm outline-none transition-colors',
      // States
      'focus:bg-accent focus:text-accent-foreground',
      'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      className
    )}
    checked={checked}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.CheckboxItem>
));
DropdownMenuCheckboxItem.displayName =
  DropdownMenuPrimitive.CheckboxItem.displayName;

const DropdownMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <DropdownMenuPrimitive.RadioItem
    ref={ref}
    className={cn(
      // Base layout
      'relative flex items-center',
      // Spacing and sizing
      'py-1.5 pl-8 pr-2',
      // Typography and interaction
      'cursor-default select-none text-sm',
      'rounded-sm outline-none transition-colors',
      // States
      'focus:bg-accent focus:text-accent-foreground',
      'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      className
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <Circle className="h-2 w-2 fill-current" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.RadioItem>
));
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;

const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;

const DropdownMenuLabel = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Label
    ref={ref}
    className={cn(
      // Spacing and typography
      'px-2 py-1.5 text-sm font-semibold',
      // Conditional spacing
      inset && 'pl-8',
      className
    )}
    {...props}
  />
));
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName;

const DropdownMenuSeparator = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.Separator
    ref={ref}
    className={cn(
      // Sizing and spacing
      '-mx-1 my-1 h-px',
      // Color
      'bg-[#DFE2F6]',
      className
    )}
    {...props}
  />
));
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;

const DropdownMenuShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn(
        // Positioning and typography
        'ml-auto text-xs tracking-widest opacity-60',
        className
      )}
      {...props}
    />
  );
};
DropdownMenuShortcut.displayName = 'DropdownMenuShortcut';

// Add submenu components
const DropdownMenuSub = DropdownMenuPrimitive.Sub;

const DropdownMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> & {
    inset?: boolean;
  }
>(({ className, inset, children, ...props }, ref) => (
  <DropdownMenuPrimitive.SubTrigger
    ref={ref}
    className={cn(
      // Base layout
      'w-full h-auto flex items-center justify-between',
      // Spacing
      'p-[12px]',
      // Typography
      'text-[#161B29]',
      // States
      'hover:bg-[#EFF0FF] hover:outline-none outline-none',
      'active:bg-[#DBE1FF]',
      'data-[disabled]:text-[#A7ABBE] data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[disabled]:cursor-not-allowed',
      // Conditional spacing
      inset && 'pl-8',
      className
    )}
    {...props}
  >
    <div className="flex items-center space-x-2">{children}</div>
    <ChevronRight className="ml-auto size-4" />
  </DropdownMenuPrimitive.SubTrigger>
));
DropdownMenuSubTrigger.displayName =
  DropdownMenuPrimitive.SubTrigger.displayName;

const DropdownMenuSubContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.SubContent
    ref={ref}
    className={cn(
      // Base appearance
      'bg-white border border-gray-300 shadow-sm',
      // Sizing and spacing
      'rounded-md p-[8px] min-w-[8rem]',
      className
    )}
    {...props}
  />
));
DropdownMenuSubContent.displayName =
  DropdownMenuPrimitive.SubContent.displayName;

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuChevronTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
  DropdownMenuRadioGroup,
  DropdownMenuPortal,
};
