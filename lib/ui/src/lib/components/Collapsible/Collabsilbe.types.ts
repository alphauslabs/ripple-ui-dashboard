import * as CollapsiblePrimitive from '@radix-ui/react-collapsible';
import React from 'react';

export interface CollapsibleRootProps
  extends React.ComponentPropsWithoutRef<typeof CollapsiblePrimitive.Root> {}

export interface CollapsibleTriggerProps
  extends React.ComponentPropsWithoutRef<typeof CollapsiblePrimitive.Trigger> {}

export interface CollapsibleContentProps
  extends React.ComponentPropsWithoutRef<typeof CollapsiblePrimitive.Content> {}
