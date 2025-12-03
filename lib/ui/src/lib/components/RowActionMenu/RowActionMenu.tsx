import React, { ReactNode } from 'react';
import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuChevronTrigger,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../index';
import { cn } from '@project-ed/lib/utils';

export interface RowActionItem {
  key: string;
  label: string;
  icon?: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  variant?: 'default' | 'danger';
  separator?: boolean; // Add separator after this item
  submenu?: RowActionItem[]; // Nested submenu items
  tooltip?: string; // Tooltip text when disabled
  customRender?: ReactNode; // Custom render for complex items
}

export interface RowActionMenuProps {
  /** Primary action button configuration */
  primaryAction?: {
    label: string;
    onClick: () => void;
    disabled?: boolean;
  };
  /** Secondary actions in dropdown menu */
  actions: RowActionItem[];
  /** Custom className for the container */
  className?: string;
  /** Size of the action buttons */
  size?: 'sm' | 'lg';
}

export const RowActionMenu: React.FC<RowActionMenuProps> = ({
  primaryAction,
  actions,
  className,
  size = 'sm',
}) => {
  const buttonHeight = size === 'sm' ? 'h-8' : 'h-10';
  const buttonPadding = size === 'sm' ? '!py-1 !px-3' : '!py-2 !px-4';
  const dropdownPadding = size === 'sm' ? '!py-1 !px-2' : '!py-2 !px-3';
  // Map our size to Button component size
  const buttonSize = size === 'sm' ? 'sm' : 'default';

  const renderMenuItem = (action: RowActionItem) => {
    // Custom render takes precedence
    if (action.customRender) {
      return (
        <React.Fragment key={action.key}>{action.customRender}</React.Fragment>
      );
    }

    // Submenu items
    if (action.submenu) {
      const submenuContent = (
        <DropdownMenuSub key={action.key}>
          <DropdownMenuSubTrigger
            className="flex items-center gap-2"
            disabled={action.disabled}
          >
            {action.icon && <span className="w-4 h-4">{action.icon}</span>}
            {action.label}
          </DropdownMenuSubTrigger>
          <DropdownMenuSubContent>
            {action.submenu.map((subItem) => (
              <DropdownMenuItem
                key={subItem.key}
                onClick={subItem.onClick}
                disabled={subItem.disabled}
                className={cn(
                  'flex items-center gap-2',
                  subItem.variant === 'danger' &&
                    'text-danger-60 focus:text-danger-60',
                  subItem.disabled && 'opacity-50 cursor-not-allowed'
                )}
              >
                {subItem.icon && (
                  <span className="w-4 h-4">{subItem.icon}</span>
                )}
                {subItem.label}
              </DropdownMenuItem>
            ))}
          </DropdownMenuSubContent>
        </DropdownMenuSub>
      );

      // Wrap with tooltip if disabled and tooltip text provided
      if (action.disabled && action.tooltip) {
        return (
          <TooltipProvider key={action.key}>
            <Tooltip>
              <TooltipTrigger asChild>
                <div>{submenuContent}</div>
              </TooltipTrigger>
              <TooltipContent>
                <p>{action.tooltip}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        );
      }

      return submenuContent;
    }

    // Regular menu item
    const menuItem = (
      <DropdownMenuItem
        key={action.key}
        onClick={action.onClick}
        disabled={action.disabled}
        className={cn(
          'flex items-center gap-2',
          action.variant === 'danger' && 'text-danger-60 focus:text-danger-60',
          action.disabled && 'opacity-50 cursor-not-allowed'
        )}
      >
        {action.icon && <span className="w-4 h-4">{action.icon}</span>}
        {action.label}
      </DropdownMenuItem>
    );

    // Wrap with tooltip if disabled and tooltip text provided
    if (action.disabled && action.tooltip) {
      return (
        <TooltipProvider key={action.key}>
          <Tooltip>
            <TooltipTrigger asChild>
              <div>{menuItem}</div>
            </TooltipTrigger>
            <TooltipContent>
              <p>{action.tooltip}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      );
    }

    return menuItem;
  };

  return (
    <div className={cn('flex items-start', className)}>
      {primaryAction && (
        <Button
          variant="outline"
          className={cn(
            'bg-white hover:bg-tangBlue-90 hover:border-tangBlue-50 transition-colors',
            '!text-neutral-1000 rounded-none border-r-2 rounded-l-md border-neutral-80 border-[1px]',
            buttonHeight,
            buttonPadding
          )}
          size={buttonSize}
          onClick={primaryAction.onClick}
          disabled={primaryAction.disabled}
        >
          {primaryAction.label}
        </Button>
      )}

      <DropdownMenu>
        <DropdownMenuChevronTrigger
          className={cn(
            'bg-white hover:bg-tangBlue-90 hover:border-tangBlue-50 transition-colors',
            'border-[1px] rounded-none border-neutral-80',
            primaryAction ? 'rounded-r-md border-l-0' : 'rounded-md',
            dropdownPadding,
            buttonHeight,
            'select-none font-bold cursor-pointer outline-none'
          )}
        />

        <DropdownMenuContent className="w-[full]" side="bottom" align="end">
          {actions.map((action) => (
            <React.Fragment key={action.key}>
              {renderMenuItem(action)}
              {action.separator && <DropdownMenuSeparator />}
            </React.Fragment>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default RowActionMenu;
