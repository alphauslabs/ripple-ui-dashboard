import * as PopoverPrimitive from '@radix-ui/react-popover';

// Define the props for the MultiSelect component
export interface ChipSelectorProps
  extends React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Root> {
  allItems?: { value: string; displayText: string }[];
  selectedItems: { value: string; displayText: string }[];
  onSelectionChange: (
    selectedItems: { value: string; displayText: string }[]
  ) => void;
  children: React.ReactNode;
}

// Define the props for the MultiSelectTrigger component
export interface ChipSelectorTriggerProps
  extends React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Trigger> {
  placeholder?: string;
  label?: string;
  required?: boolean;
  variant?: 'success' | 'error' | 'disabled' | 'default';
}

// Define the props for the MultiSelectContent component
export interface ChipSelectorContentProps
  extends React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content> {
  className?: string;
  align?: 'start' | 'center' | 'end';
  sideOffset?: number;
  children: React.ReactNode;
}

// Define the props for the MultiSelectItem component
export interface ChipSelectorItemProps {
  value: string;
  displayText: string;
  className?: string;
  isSelected?: boolean;
  onSelect?: (item: { value: string; displayText: string }) => void;
}
