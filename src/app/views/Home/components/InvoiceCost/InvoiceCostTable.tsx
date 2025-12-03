import React, { useMemo, useState } from 'react';
import {
  Button,
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  toast,
} from '@project-ed/lib/ui';
import { ArrowIcon } from '@project-ed/lib/icons';
import { DataRow } from '@stores/dashboard/types';
import { useTranslation } from 'react-i18next';
import { InvoiceCostResponse } from '@stores/invoiceCosts';
import { currencySymbol } from '@project-ed/lib/utils';

// Helper function to format yearMonth consistently
const formatYearMonth = (yearMonth: string): string => {
  if (!yearMonth) return 'Unknown';

  let year, month;

  // Handle YYYY-MM format (e.g., "2025-01")
  if (/^\d{4}-\d{2}$/.test(yearMonth)) {
    [year, month] = yearMonth.split('-');
    month = parseInt(month);
  }
  // Handle YYYYMM format (e.g., "202501")
  else if (/^\d{6}$/.test(yearMonth)) {
    year = yearMonth.substring(0, 4);
    month = parseInt(yearMonth.substring(4, 6));
  } else {
    return yearMonth; // Return as-is for unknown formats
  }

  // Convert month number to name
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  return `${monthNames[month - 1]} ${year}`;
};

const InvoiceCostTable: React.FC<{
  prefix: string;
  data: InvoiceCostResponse[];
  onActionClick?: (row: DataRow) => void;
}> = ({ prefix, data, onActionClick }) => {
  const { t } = useTranslation();

  // State for sorting
  const [sortConfig, setSortConfig] = useState<{
    key: keyof DataRow;
    direction: 'asc' | 'desc';
  } | null>(null);

  const handleActionClick = (row: DataRow) => {
    console.log(row);
    console.log(`Action clicked for ${row.name}`);
    if (onActionClick) {
      onActionClick(row);
    }
  };

  const handleSort = (key: keyof DataRow) => {
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

  const getSortIcon = (columnKey: keyof DataRow) => {
    const isActive = sortConfig && sortConfig.key === columnKey;
    if (!isActive) return null; // Only show icon for the actively sorted column
    const direction = sortConfig.direction === 'asc' ? 'up' : 'down';
    return <ArrowIcon direction={direction} />;
  };

  // Enhanced debugging
  console.log(
    'InvoiceCostTable received data:',
    JSON.stringify(data).substring(0, 500)
  );
  console.log('InvoiceCostTable data type:', typeof data);
  console.log('InvoiceCostTable prefix:', prefix);

  // Check if data exists
  if (!data || data.length === 0) {
    return (
      <div className="w-full p-4 text-center text-neutral-70">
        {t('No data available for the selected period')}
      </div>
    );
  }

  // Add try-catch to handle potential errors in data transformation
  try {
    const formattedData = data
      .map((i) => {
        // Check if result exists
        if (!i || !i.result) {
          console.warn('Missing result in data item:', i);
          return null;
        }

        let target;
        switch (prefix) {
          case 'Total':
            target = i.result;
            break;
          case 'AWS':
            target = i.result.awsSection;
            break;
          case 'Azure':
            target = i.result.azureSection;
            break;
          case 'GCP':
            target = i.result.gcpSection;
            break;
          default:
            target = i.result;
        }

        // Enhanced target validation
        if (!target || typeof target !== 'object') {
          console.warn(`No valid data found for ${prefix} section:`, target);
          return null;
        }

        // Log the target.yearMonth specifically for debugging
        console.log(
          `Target yearMonth for ${prefix}:`,
          target.yearMonth,
          typeof target.yearMonth
        );

        const itemCurrency = target?.currency || 'usd';

        const safeFormat = (value: any) => {
          // First check if value exists at all
          if (value === undefined || value === null) {
            return '0.00';
          }

          // Convert to number first to ensure it has toFixed method
          const numValue = Number(value);

          // Check if it's a valid number
          if (isNaN(numValue)) {
            return '0.00';
          }

          // Now safely call toFixed
          return Number(numValue.toFixed(2));
        };

        return {
          name: formatYearMonth(target.yearMonth) || 'Unknown',
          totalInvoiceAmount: safeFormat(target?.invoiceCost),
          totalProcurementCost: safeFormat(target?.procurementCost),
          profit: safeFormat(target?.profitCost),
          totalCost: safeFormat(target?.totalDetail?.totalCost),
          sppDiscount: safeFormat(target?.totalDetail?.sppDiscount),
          thirdProfitItem: safeFormat(target?.totalDetail?.thirdProfitItem),
          action: t('View Details'),
          currency: itemCurrency,
          thirdProfitItemDetails: target?.thirdProfitItem || [],
          totalDetail: target?.totalDetail,
        };
      })
      .filter(Boolean) as DataRow[]; // Filter out null entries

    // Sort the data based on sortConfig
    const sortedData = useMemo(() => {
      if (!sortConfig) return formattedData;

      return [...formattedData].sort((a, b) => {
        const aValue = a[sortConfig.key];
        const bValue = b[sortConfig.key];

        // Handle different data types
        if (typeof aValue === 'number' && typeof bValue === 'number') {
          return sortConfig.direction === 'asc'
            ? aValue - bValue
            : bValue - aValue;
        }

        // Handle strings
        const aStr = String(aValue).toLowerCase();
        const bStr = String(bValue).toLowerCase();

        if (aStr < bStr) {
          return sortConfig.direction === 'asc' ? -1 : 1;
        }
        if (aStr > bStr) {
          return sortConfig.direction === 'asc' ? 1 : -1;
        }
        return 0;
      });
    }, [formattedData, sortConfig]);

    // Check if we have data after filtering
    if (formattedData.length === 0) {
      return (
        <div className="w-full p-4 text-center text-neutral-70">
          {t('No valid data available for the selected filter')}
        </div>
      );
    }

    // Define column configurations
    const columns = [
      {
        key: 'name' as keyof DataRow,
        label: t('Month'),
        sortable: true,
        align: 'left',
      },
      {
        key: 'totalInvoiceAmount' as keyof DataRow,
        label: t('Total Invoice Amount'),
        sortable: true,
        align: 'right',
      },
      {
        key: 'totalProcurementCost' as keyof DataRow,
        label: t('Total Procurement Cost'),
        sortable: true,
        align: 'right',
      },
      {
        key: 'profit' as keyof DataRow,
        label: t('Total Profit'),
        sortable: true,
        align: 'right',
      },
      {
        key: 'action' as keyof DataRow,
        label: t('Action'),
        sortable: false,
        align: 'right',
      },
    ];

    return (
      <>
        <Table scrollable>
          <TableHeader>
            <TableRow>
              {columns.map((column) => (
                <TableHead
                  key={String(column.key)}
                  className={`${
                    column.align === 'right' ? 'text-right' : 'text-left'
                  }`}
                >
                  <div
                    onClick={() => column.sortable && handleSort(column.key)}
                    className={`flex items-center gap-1 ${
                      column.align === 'right' ? 'justify-end' : 'justify-start'
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
            {sortedData.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.name}</TableCell>
                <TableCell className="text-right">
                  {currencySymbol(row.currency)}
                  {Number(row.totalInvoiceAmount).toLocaleString('en-US', {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </TableCell>
                <TableCell className="text-right">
                  {currencySymbol(row.currency)}
                  {Number(row.totalProcurementCost).toLocaleString('en-US', {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </TableCell>
                <TableCell className="text-right">
                  {currencySymbol(row.currency)}
                  {Number(row.profit).toLocaleString('en-US', {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </TableCell>
                <TableCell className="text-right">
                  <Button
                    variant="link"
                    onClick={() => handleActionClick(row)}
                    data-test="invoice-cost-view-details"
                  >
                    {row.action}
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </>
    );
  } catch (error) {
    console.error('Error processing invoice cost data:', error);
    toast.error('Error processing data. Please try again later.');
    return (
      <div className="w-full p-4 text-center text-neutral-70">
        {t('Error processing data')}
      </div>
    );
  }
};

export default InvoiceCostTable;
