'use client';

import React from 'react';
import * as CollapsiblePrimitive from '@radix-ui/react-collapsible';

import {
  CollapsibleRootProps,
  CollapsibleTriggerProps,
  CollapsibleContentProps,
} from './Collabsilbe.types';

const Collapsible = React.forwardRef<
  React.ElementRef<typeof CollapsiblePrimitive.Root>,
  CollapsibleRootProps
>(({ className, children, ...props }, ref) => (
  <CollapsiblePrimitive.Root
    ref={ref}
    className={`bg-[#FFFFFF] border  border-[#DFE2F6] rounded-[8px] p-[16px] gap-[16px] shadow-md ${className}`}
    {...props}
  >
    {children}
  </CollapsiblePrimitive.Root>
));

Collapsible.displayName = CollapsiblePrimitive.Root.displayName;

const CollapsibleTrigger = React.forwardRef<
  React.ElementRef<typeof CollapsiblePrimitive.Trigger>,
  CollapsibleTriggerProps
>(({ className, children, asChild, ...props }, ref) => (
  <CollapsiblePrimitive.Trigger
    asChild
    ref={ref}
    className={className}
    {...props}
  >
    {children}
  </CollapsiblePrimitive.Trigger>
));

CollapsibleTrigger.displayName = CollapsiblePrimitive.Trigger.displayName;

const CollapsibleContent = React.forwardRef<
  React.ElementRef<typeof CollapsiblePrimitive.Content>,
  CollapsibleContentProps
>(({ className, children, ...props }, ref) => (
  <CollapsiblePrimitive.Content ref={ref} className={className} {...props}>
    {children}
  </CollapsiblePrimitive.Content>
));

CollapsibleContent.displayName = CollapsiblePrimitive.Content.displayName;

export { Collapsible, CollapsibleTrigger, CollapsibleContent };
