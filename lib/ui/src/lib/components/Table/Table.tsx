'use client';

import * as React from 'react';

import { cn } from '../../utils';

const Table = React.forwardRef<
  HTMLTableElement,
  React.HTMLAttributes<HTMLTableElement> & {
    tableLayout?: 'fixed' | 'auto';
    scrollable?: boolean;
    maxHeight?: string;
    alternatingRows?: boolean;
  }
>(
  (
    {
      className,
      tableLayout = 'fixed',
      scrollable = false,
      maxHeight = 'max-h-96',
      alternatingRows = true,
      children,
      ...props
    },
    ref
  ) => {
    if (!scrollable) {
      // Original behavior for non-scrollable tables
      // Process children to add alternatingRows prop to TableBody
      const processedChildren = React.Children.map(children, (child) => {
        if (!React.isValidElement(child)) {
          return child;
        }

        if (child.type === TableBody) {
          return React.cloneElement(child, {
            ...child.props,
            alternatingRows,
          });
        }

        if (child.type === TableHeader) {
          return React.cloneElement(child, {
            ...child.props,
            alternatingRows,
          });
        }

        return child;
      });

      return (
        <div className="relative w-full overflow-auto bg-white">
          <table
            ref={ref}
            className={cn(
              'w-full caption-bottom text-sm',
              tableLayout === 'fixed' ? 'table-fixed' : 'table-auto',
              className
            )}
            {...props}
          >
            {processedChildren}
          </table>
        </div>
      );
    }

    // Extract header and body from children
    const childrenArray = React.Children.toArray(children);
    const header = childrenArray.find(
      (child) => React.isValidElement(child) && child.type === TableHeader
    );
    const body = childrenArray.find(
      (child) => React.isValidElement(child) && child.type === TableBody
    );
    const otherChildren = childrenArray.filter(
      (child) =>
        !React.isValidElement(child) ||
        (child.type !== TableHeader && child.type !== TableBody)
    );

    const processedHeader =
      header && React.isValidElement(header) && header.type === TableHeader
        ? React.cloneElement(header, {
            ...header.props,
            alternatingRows,
          })
        : header;

    return (
      <div className="relative w-full bg-white border border-gray-200 rounded-lg overflow-hidden">
        {/* Fixed Header */}
        {processedHeader && (
          <div className="bg-white border-b border-gray-200">
            <table
              className={cn(
                'w-full caption-bottom text-sm',
                tableLayout === 'fixed' ? 'table-fixed' : 'table-auto',
                className
              )}
            >
              {processedHeader}
            </table>
          </div>
        )}

        {/* Scrollable Body */}
        <div className={cn(maxHeight, 'overflow-y-auto')}>
          <table
            ref={ref}
            className={cn(
              'w-full caption-bottom text-sm',
              tableLayout === 'fixed' ? 'table-fixed' : 'table-auto',
              className
            )}
            {...props}
          >
            {React.isValidElement(body) && body.type === TableBody
              ? React.cloneElement(body, {
                  ...body.props,
                  alternatingRows,
                })
              : body}
            {otherChildren}
          </table>
        </div>
      </div>
    );
  }
);
Table.displayName = 'Table';
const TableHeader = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement> & {
    alternatingRows?: boolean;
  }
>(({ className, alternatingRows = false, ...props }, ref) => (
  <thead
    ref={ref}
    className={cn(
      'border-t border-b',
      alternatingRows ? 'bg-neutral-95' : '',
      className
    )}
    {...props}
  />
));
TableHeader.displayName = 'TableHeader';
const TableBody = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement> & {
    alternatingRows?: boolean;
  }
>(({ className, alternatingRows = true, children, ...props }, ref) => {
  // Add alternating row classes if enabled
  const processedChildren = alternatingRows
    ? (() => {
        let rowIndex = 0;

        const processChild = (child: React.ReactNode): React.ReactNode => {
          if (!React.isValidElement(child)) {
            return child;
          }

          // Handle React.Fragment
          if (child.type === React.Fragment) {
            return React.cloneElement(child, {
              ...child.props,
              children: React.Children.map(child.props.children, processChild),
            });
          }

          // Handle TableRow - apply alternating colors
          if (child.type === TableRow) {
            // Skip spacing rows (height-only rows) from alternating count
            const isSpacingRow =
              child.props.className?.includes('h-2') &&
              (!child.props.children ||
                React.Children.count(child.props.children) === 0);

            if (isSpacingRow) {
              // Don't apply alternating colors to spacing rows, just return as-is
              return child;
            }

            const processedRow = React.cloneElement(child, {
              ...child.props,
              className: cn(
                child.props.className,
                rowIndex % 2 === 1 ? 'bg-neutral-95' : 'bg-white'
              ),
            });
            rowIndex++;
            return processedRow;
          }

          return child;
        };

        return React.Children.map(children, processChild);
      })()
    : children;

  return (
    <tbody
      ref={ref}
      className={cn('[&_tr:last-child]:border-0', className)}
      {...props}
    >
      {processedChildren}
    </tbody>
  );
});
TableBody.displayName = 'TableBody';
const TableFooter = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tfoot
    ref={ref}
    className={cn(
      'border-t bg-muted/50 font-medium [&>tr]:last:border-b-0',
      className
    )}
    {...props}
  />
));
TableFooter.displayName = 'TableFooter';
const TableRow = React.forwardRef<
  HTMLTableRowElement,
  React.HTMLAttributes<HTMLTableRowElement>
>(({ className, ...props }, ref) => (
  <tr
    ref={ref}
    className={cn(
      'transition-colors hover:bg-neutral-90 data-[state=selected]:bg-neutral-80',
      className
    )}
    {...props}
  />
));
TableRow.displayName = 'TableRow';
const TableHead = React.forwardRef<
  HTMLTableCellElement,
  React.ThHTMLAttributes<HTMLTableCellElement> & {
    truncate?: boolean;
    wrap?: boolean;
  }
>(({ className, truncate, wrap = true, ...props }, ref) => (
  <th
    ref={ref}
    className={cn(
      'h-12 px-4 text-left align-middle text-base font-bold text-neutral-1200 [&:has([role=checkbox])]:pr-0',
      truncate ? 'truncate overflow-hidden text-ellipsis' : '',
      wrap ? 'whitespace-normal break-words' : 'whitespace-nowrap',
      className
    )}
    {...props}
  />
));
TableHead.displayName = 'TableHead';
const TableCell = React.forwardRef<
  HTMLTableCellElement,
  React.TdHTMLAttributes<HTMLTableCellElement> & {
    truncate?: boolean;
    wrap?: boolean;
  }
>(({ className, truncate, wrap = true, ...props }, ref) => (
  <td
    ref={ref}
    className={cn(
      'p-4 align-middle text-sm text-neutral-1100 [&:has([role=checkbox])]:pr-0',
      truncate ? 'truncate overflow-hidden text-ellipsis' : '',
      wrap ? 'whitespace-normal break-words' : 'whitespace-nowrap',
      className
    )}
    {...props}
  />
));
TableCell.displayName = 'TableCell';
const TableCaption = React.forwardRef<
  HTMLTableCaptionElement,
  React.HTMLAttributes<HTMLTableCaptionElement>
>(({ className, ...props }, ref) => (
  <caption
    ref={ref}
    className={cn('mt-4 text-sm text-muted-foreground', className)}
    {...props}
  />
));
TableCaption.displayName = 'TableCaption';
export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
};
