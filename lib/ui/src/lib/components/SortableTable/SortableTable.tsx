import React, { useState } from 'react';
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  TableCaption,
} from '../Table/Table'; // Adjust path to where your components are located
import { ArrowIcon } from '@project-ed/lib/icons';

import { Checkbox } from '../Checkbox';

// Define types for columns and table props
export interface Column<T> {
  key: keyof T;
  label: string;
  sortable?: boolean;
  render?: (row: T) => React.ReactNode;
  headerAlign?: 'left' | 'center' | 'right'; // Add this property
  cellAlign?: 'left' | 'center' | 'right'; // Add this property
}

export interface TableProps<T> {
  data: T[];
  columns: Column<T>[];
  caption?: string;
  isCheckable?: boolean;
  selectedData?: T[];
  selectKey?: keyof T;
  onSelectAll?: () => void;
  onSelect?: (row: T) => void;
}

// Utility function to ensure the value is renderable
const getDisplayValue = (value: unknown): React.ReactNode => {
  if (
    typeof value === 'string' ||
    typeof value === 'number' ||
    typeof value === 'boolean'
  ) {
    return value.toString(); // Render string, number, or boolean directly
  }
  return JSON.stringify(value); // For objects or arrays, display a JSON string representation
};

function getCheckedAllStatus<T>(data: T[], selectedData: T[]) {
  return data.length && data.length === selectedData.length
    ? 'checked'
    : 'unchecked';
}

function SortableTable<T>({
  data,
  columns,
  caption,
  isCheckable = false,
  selectedData = [],
  selectKey,
  onSelectAll,
  onSelect,
}: TableProps<T>) {
  const [sortConfig, setSortConfig] = useState<{
    key: keyof T;
    direction: 'asc' | 'desc';
  } | null>(null);

  const handleSort = (key: keyof T) => {
    let direction: 'asc' | 'desc' = 'asc';
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === 'asc'
    ) {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const getSortIcon = (columnKey: keyof T) => {
    const isActive = sortConfig && sortConfig.key === columnKey;
    if (!isActive) return null; // Only show icon for the actively sorted column
    const direction = sortConfig.direction === 'asc' ? 'up' : 'down';
    return <ArrowIcon direction={direction} />;
  };

  const sortedData = React.useMemo(() => {
    if (!sortConfig) return data;
    return [...data].sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === 'asc' ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === 'asc' ? 1 : -1;
      }
      return 0;
    });
  }, [data, sortConfig]);

  return (
    <Table className="!mt-1">
      {caption && <TableCaption>{caption}</TableCaption>}
      <TableHeader className="!border-t-[1px] !border-b-[1px] !border-[#DFE2F6]">
        <TableRow className="border-neutral-300 border-y-[1px] item-center">
          {isCheckable && (
            <TableHead className="w-12 text-left">
              <Checkbox
                variant={getCheckedAllStatus(data, selectedData)}
                onClick={() => onSelectAll && onSelectAll()}
              />
            </TableHead>
          )}
          {columns.map((column) => (
            <TableHead
              key={String(column.key)}
              className="!text-neutral-1200"
              style={{ textAlign: column.headerAlign || 'left' }} // Use custom alignment
            >
              <div
                onClick={() => column.sortable && handleSort(column.key)}
                className={`flex items-center gap-1 ${
                  column.headerAlign === 'right'
                    ? 'justify-end'
                    : column.headerAlign === 'center'
                    ? 'justify-center'
                    : 'justify-start'
                } ${
                  column.sortable
                    ? 'cursor-pointer hover:text-tangBlue-50 transition-colors duration-200'
                    : ''
                }`}
              >
                {column.label}
                {column.sortable && getSortIcon(column.key)}
              </div>
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>

      <TableBody>
        {sortedData.map((row, rowIndex) => (
          <TableRow key={rowIndex}>
            {isCheckable && (
              <TableCell
                key={rowIndex}
                style={{ textAlign: 'left' }} // Align body cells similarly
              >
                <Checkbox
                  variant={
                    selectKey &&
                    selectedData.some(
                      (rowItem) => rowItem[selectKey] === row[selectKey]
                    )
                      ? 'checked'
                      : 'unchecked'
                  }
                  onClick={() => onSelect && onSelect(row)}
                />
              </TableCell>
            )}
            {columns.map((column, colIndex) => (
              <TableCell
                key={column.key.toString()}
                style={{ textAlign: column.cellAlign || 'left' }} // Use custom alignment
              >
                {column.render
                  ? column.render(row)
                  : getDisplayValue(row[column.key])}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export { SortableTable };
