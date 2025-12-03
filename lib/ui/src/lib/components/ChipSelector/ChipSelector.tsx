import * as React from 'react';
import * as PopoverPrimitive from '@radix-ui/react-popover';
import { cn } from '../../utils';
import { isAllItemSelected, isItemSelected, countAllItems } from './utils';
import { ChevronUpIcon, ChevronDownIcon } from 'lucide-react';
import {
  ChipSelectorProps,
  ChipSelectorTriggerProps,
  ChipSelectorContentProps,
  ChipSelectorItemProps,
} from './ChipSelector.types';
import { Chip } from '../Chip/Chip';
import { cva } from 'class-variance-authority';
import { ChevronSmallIcon } from '@project-ed/lib/icons';

// const chipSelectorTriggerStyles = cva('', {
//   variants: {
//     variant: {
//       default: 'bg-[#FFFFFF] border-[#DFE2F6] text-[#434657]',
//       error: ' bg-[#FFFFFF] border-[#D2444C] text-[#D2444C]',
//       success: 'bg-[#FFFFFF] border-[#128A15] text-[#128A15]',
//       disabled: 'bg-[#EEF0FF] border-[#DFE2F6] text-[#DFE2F6]',
//     },
//   },
//   defaultVariants: {
//     variant: 'default',
//   },
// });

// Create a context for the ChipSelector component
const ChipSelectorContext = React.createContext<{
  allItems: { value: string; displayText: string }[];
  selectedItems: { value: string; displayText: string }[];
  onSelectionChange: (
    selectedItems: { value: string; displayText: string }[]
  ) => void;
  handleAllItemsChange: (
    items: { value: string; displayText: string }[]
  ) => void;
  open: boolean;
  setOpen: (open: boolean) => void;
} | null>(null);

// ChipSelector component
const ChipSelector: React.FC<ChipSelectorProps> = ({
  allItems = [],
  selectedItems,
  onSelectionChange,
  children,
  open: controlledOpen,
  onOpenChange: controlledOnOpenChange,
  ...props
}) => {
  const [currentAllItems, setAllItems] = React.useState(allItems);
  const [open, setOpen] = React.useState(controlledOpen || false);

  const handleAllItemsChange = React.useCallback(
    (items: { value: string; displayText: string }[]) => {
      setAllItems(items);
    },
    []
  );

  const contextValue = React.useMemo(
    () => ({
      allItems: currentAllItems,
      selectedItems,
      onSelectionChange,
      handleAllItemsChange,
      open,
      setOpen,
    }),
    [
      currentAllItems,
      selectedItems,
      onSelectionChange,
      handleAllItemsChange,
      open,
      setOpen,
    ]
  );

  const handleOpenChange = (isOpen: boolean) => {
    setOpen(isOpen);
    if (controlledOnOpenChange) {
      controlledOnOpenChange(isOpen);
    }
  };

  return (
    <ChipSelectorContext.Provider value={contextValue}>
      <PopoverPrimitive.Root
        open={open}
        onOpenChange={handleOpenChange}
        {...props}
      >
        {children}
      </PopoverPrimitive.Root>
    </ChipSelectorContext.Provider>
  );
};

// ChipSelectorTrigger component
const ChipSelectorTrigger = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Trigger>,
  ChipSelectorTriggerProps
>(({ className, label, required, placeholder, ...props }, ref) => {
  const context = React.useContext(ChipSelectorContext);
  if (!context) {
    throw new Error(
      'ChipSelectorTrigger must be used within a ChipSelector context'
    );
  }
  const { allItems, selectedItems, open } = context;

  return (
    <div className="w-[202px] h-auto gap-[8px]">
      {label && (
        <label className="text-[14px] leading-[16px] tracking-[-0.01em] font-medium text-left text-[#161B29] disabled:text-[#8E90A3]">
          {label}
          {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <div>
        <PopoverPrimitive.Trigger
          ref={ref}
          className={cn(
            className,
            open ? 'border-tangBlue-50' : 'border-neutral-80',
            'bg-[#FFFFFF] text-[#434657] w-full inline-flex h-auto py-[4px] px-[10px] rounded-[8px] border-[2px] disabled:bg-[#EEF0FF] disabled:border-[#DFE2F6] disabled:text-[#DFE2F6]'
          )}
          {...props}
        >
          <div className="w-full flex justify-between items-center">
            {selectedItems.length === 0 ? (
              <span className="text-[#747688] font-normal text-[16px] leading-[24px] tracking-[-0.01em]">
                {placeholder || 'Select Items'}
              </span>
            ) : (
              <span className="space-x-[6px]">
                <Chip variant={'default'} size="md">
                  {selectedItems[0].displayText}
                </Chip>
                {selectedItems.length > 1 && (
                  <Chip variant={'default'} size="md">
                    +{selectedItems.length - 1}
                  </Chip>
                )}
              </span>
            )}
          </div>

          <div className="flex items-center">
            <ChevronSmallIcon
              className={cn(
                `transition-transform duration-200 size-[24px]`,
                open ? '-rotate-180' : ''
              )}
            />
          </div>
        </PopoverPrimitive.Trigger>
      </div>
    </div>
  );
});
ChipSelectorTrigger.displayName = PopoverPrimitive.Trigger.displayName;

// ChipSelectorContent component
const ChipSelectorContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  ChipSelectorContentProps
>(
  (
    { className, align = 'center', sideOffset = 4, children, ...props },
    ref
  ) => {
    const context = React.useContext(ChipSelectorContext);
    if (!context) {
      throw new Error(
        'ChipSelectorContent must be used within a ChipSelector context'
      );
    }
    const { allItems, selectedItems, onSelectionChange, handleAllItemsChange } =
      context;

    const handleSelect = (item: { value: string; displayText: string }) => {
      const isSelected = isItemSelected(item, allItems, selectedItems);
      if (item.value === 'all') {
        onSelectionChange(
          isSelected ? [] : allItems.filter((i) => i.value !== 'all')
        );
      } else {
        onSelectionChange(
          isSelected
            ? selectedItems.filter((i) => i.value !== item.value)
            : [...selectedItems, item]
        );
      }
    };

    const childrenWithProps = React.Children.map(children, (child) => {
      if (React.isValidElement(child)) {
        const isSelected = isItemSelected(
          { value: child.props.value, displayText: child.props.displayText },
          allItems,
          selectedItems
        );

        return React.cloneElement(
          child as React.ReactElement<ChipSelectorItemProps>,
          {
            isSelected,
            onSelect: handleSelect,
          }
        );
      }
      return child;
    });

    const checkForDuplicateValues = (
      items: { value: string; displayText: string }[]
    ) => {
      const valueCount = items.reduce((acc, item) => {
        acc[item.value] = (acc[item.value] || 0) + 1;
        return acc;
      }, {} as Record<string, number>);

      Object.entries(valueCount).forEach(([value, count]) => {
        if (count > 1) {
          console.warn(
            `Duplicate value found in ChipSelector component: ${value}. This warning is caused by having multiple items with the same value in the ChipSelector component. Please ensure all items have unique values.`
          );
        }
      });
    };

    React.useEffect(() => {
      const updatedAllItems = React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return {
            value: child.props.value,
            displayText: child.props.displayText,
          };
        }
        return child;
      });
      if (updatedAllItems) {
        handleAllItemsChange(
          updatedAllItems as { value: string; displayText: string }[]
        );
        checkForDuplicateValues(
          updatedAllItems as { value: string; displayText: string }[]
        );
      }
    }, []);

    return (
      <PopoverPrimitive.Portal>
        <PopoverPrimitive.Content
          ref={ref}
          align={align}
          sideOffset={sideOffset}
          className={cn(
            'bg-white border border-gray-300 shadow-sm rounded-md p-[8px]',
            className
          )}
          {...props}
        >
          <ul>{childrenWithProps}</ul>
        </PopoverPrimitive.Content>
      </PopoverPrimitive.Portal>
    );
  }
);

ChipSelectorContent.displayName = PopoverPrimitive.Content.displayName;

// ChipSelectorItem component
const ChipSelectorItem: React.FC<ChipSelectorItemProps> = ({
  className,
  value,
  displayText,
  isSelected = false,
  onSelect,
}) => {
  return (
    <li className={cn('w-full h-auto', className)}>
      <label className="flex text-[#161B29] items-center space-x-2 w-full hover:bg-[#EFF0FF] active:bg-[#DBE1FF] disabled:text-[#A7ABBE] cursor-pointer p-[12px]">
        <input
          type="checkbox"
          checked={isSelected}
          onChange={() => onSelect && onSelect({ value, displayText })}
          className="form-checkbox h-4 w-4 text-[#1D55CE] transition duration-150 ease-in-out"
        />
        <span className="text-[#161B29] font-normal text-[16px] leading-[24px] tracking-[-0.01em]">
          {displayText}
        </span>
      </label>
    </li>
  );
};

export {
  ChipSelector,
  ChipSelectorTrigger,
  ChipSelectorContent,
  ChipSelectorItem,
};
