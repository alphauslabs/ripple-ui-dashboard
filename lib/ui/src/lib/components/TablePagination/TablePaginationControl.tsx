import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  IconButton,
} from '../index';

export interface TablePaginationProps {
  currentPage: number;
  totalItems: number;
  pageSize: number;
  pageSizeOptions?: number[];
  onPageChange: (page: number) => void;
  onPageSizeChange: (pageSize: number) => void;
  showPageSizeSelector?: boolean;
  className?: string;
}

export function TablePaginationControl({
  currentPage,
  totalItems,
  pageSize,
  pageSizeOptions = [10, 25, 50, 100, 200],
  onPageChange,
  onPageSizeChange,
  showPageSizeSelector = true,
  className = '',
}: TablePaginationProps) {
  const { t } = useTranslation();

  const handleNextPage = () => {
    if (currentPage < Math.ceil(totalItems / pageSize)) {
      onPageChange(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const startItem = Math.min((currentPage - 1) * pageSize + 1, totalItems);
  const endItem = Math.min(currentPage * pageSize, totalItems);

  return (
    <div
      className={`flex justify-between content-end w-full pb-4 items-center ${className}`}
    >
      {/* Pagination Info */}
      <span>
        {t('Showing {{startItem}} - {{endItem}} of {{totalItems}} results', {
          startItem,
          endItem,
          totalItems,
        })}
      </span>

      <div className="flex content-end space-x-[16px]">
        {/* Page size selector */}
        {showPageSizeSelector && (
          <div className="space-x-[16px] flex items-center">
            <span>{t('Records per page:')}</span>
            <Select
              value={pageSize.toString()}
              onValueChange={(value) => onPageSizeChange(Number(value))}
            >
              <SelectTrigger className="w-[76px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent
                side="bottom"
                align="start"
                className="bg-white w-[76px]"
              >
                {pageSizeOptions.map((option) => (
                  <SelectItem key={option} value={option.toString()}>
                    {option}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        )}

        {/* Page Control */}
        <div className="space-x-[12px]">
          <IconButton
            variant="secondary"
            size="md"
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
          >
            <ChevronLeftIcon className="size-[16px]" />
          </IconButton>
          <IconButton
            variant="secondary"
            size="md"
            onClick={handleNextPage}
            disabled={
              currentPage === Math.ceil(totalItems / pageSize) ||
              totalItems === 0
            }
          >
            <ChevronRightIcon className="size-[16px]" />
          </IconButton>
        </div>
      </div>
    </div>
  );
}
