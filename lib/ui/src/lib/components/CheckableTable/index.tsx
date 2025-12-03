import React, { useState, useMemo } from 'react';

// import { ArrowIcon } from '../../../../../icons/ArrowIcon'
import { ArrowIcon } from '@project-ed/lib/icons';

import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableHead,
  TableRow,
} from '../Table/Table';
import { Checkbox } from '../Checkbox/';

import { CheckableTableProps } from './Checkable.types';

const CheckableTable = <T,>({
  data,
  selectedData,
  columns,
  onSelectAll,
}: CheckableTableProps<T>) => {
  const [sortKey, setSortKey] = useState<keyof T | null>(null);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  const getSortIcon = (key: keyof T) => {
    if (sortKey !== key) return null;

    const isActive = sortKey === key;
    const direction = isActive ? sortOrder : 'asc';

    return <ArrowIcon direction={direction} />;
  };

  const sortedData = useMemo(() => {
    if (!sortKey) return data;

    return [...data].sort((a, b) => {
      const aValue = a[sortKey];
      const bValue = b[sortKey];

      if (typeof aValue === 'number' && typeof bValue === 'number') {
        return sortOrder === 'asc' ? aValue - bValue : bValue - aValue;
      }

      return sortOrder === 'asc'
        ? String(aValue).localeCompare(String(bValue))
        : String(bValue).localeCompare(String(aValue));
    });
  }, [data, sortKey, sortOrder]);

  const handleSort = (key: keyof T) => {
    if (sortKey === key) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortKey(key);
      setSortOrder('asc');
    }
  };
  const isCheckedAll = () =>
    data.length === 0
      ? 'unchecked'
      : selectedData.length === data.length
      ? 'checked'
      : 'unchecked';

  return (
    <div className="border-none rounded-lg overflow-hidden">
      <Table className="bg-white border-collapse border-none">
        <TableHeader className="border-t-2 border-b-2 border-gray-300 ">
          <TableRow className="flex items-center">
            <TableHead className="w-12 px-6 py-3 text-left">
              <Checkbox variant={isCheckedAll()} onClick={onSelectAll} />
            </TableHead>
            {columns.map(({ key, label, isSortable }) => (
              <TableHead
                key={String(key)}
                className={`px-6 py-3 text-left font-inter font-semibold text-[16px] leading-[150%] text-[#2D3040] ${
                  isSortable ? 'cursor-pointer' : ''
                }`}
                onClick={() => isSortable && handleSort(key)}
              >
                <div className="flex items-center gap-1">
                  {label}
                  {getSortIcon(key)}
                </div>
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {sortedData.map((row, index) => (
            <TableRow key={index}>
              {/* Checkbox Cell */}
              <TableCell className="w-12 px-4 py-3 text-left">
                <Checkbox
                  variant={selectedData.includes(row) ? 'checked' : 'unchecked'}
                  onClick={() => console.log('Select row')}
                />
              </TableCell>

              {/* Data Cells */}
              {columns.map(({ key }) => (
                <TableCell
                  key={String(key)}
                  className="px-6 py-3 text-left text-[16px] text-[#2D3040]"
                >
                  {String(row[key] ?? '')}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export { CheckableTable };
