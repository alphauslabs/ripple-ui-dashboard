import { currencySymbol } from '@project-ed/lib/utils';
import { InvoiceCostResponse } from '@stores/invoiceCosts';
import React from 'react';
import { DataRow } from '@stores/dashboard/types';

import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

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

export default function InvoiceCostChart({
  prefix,
  data,
  onDataClick,
}: {
  prefix: string;
  data: InvoiceCostResponse[];
  onDataClick?: (row: DataRow) => void;
}) {
  // Add at the start of InvoiceCostChart component function
  console.log('InvoiceCostChart received data:', data);
  console.log('InvoiceCostChart prefix:', prefix);
  const formattedData =
    data && data.length > 0
      ? data
          .map((i) => {
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

            // Ensure target exists and has all needed properties
            if (!target) {
              console.warn('Target data is missing for', prefix);
              return null; // Will be filtered out below
            }

            // Get currency from target data
            const itemCurrency = target.currency || 'usd';

            const safeFormat = (value: any) => {
              // First check if value exists at all
              if (value === undefined || value === null) {
                return 0;
              }

              // Convert to number first to ensure it has toFixed method
              const numValue = Number(value);

              // Check if it's a valid number
              if (isNaN(numValue)) {
                return 0;
              }

              // Ensure we return only positive values or 0
              const formattedValue = Number(numValue.toFixed(2));
              return Math.max(0, formattedValue);
            };

            return {
              name: formatYearMonth(target.yearMonth),
              totalInvoiceAmount: safeFormat(target?.invoiceCost),
              totalProcurementCost: safeFormat(target?.procurementCost),
              profit: safeFormat(target?.profitCost),
              totalCost: safeFormat(target?.totalDetail?.totalCost),
              sppDiscount: safeFormat(target?.totalDetail?.sppDiscount),
              thirdProfitItem: safeFormat(target?.totalDetail?.thirdProfitItem),
              action: 'View Details',
              currency: itemCurrency, // Add currency to each data point
              thirdProfitItemDetails: target?.thirdProfitItem || [],
              totalDetail: target?.totalDetail,
            };
          })
          .filter(Boolean)
      : []; // Filter out null values

  // Custom click handler for chart data
  const handleBarClick = (data: any) => {
    if (onDataClick && data && data.activePayload && data.activePayload[0]) {
      const clickedData = data.activePayload[0].payload;
      onDataClick(clickedData);
    }
  };

  // Custom tooltip formatter to include currency symbols
  const customTooltipFormatter = (value: number, name: string, entry: any) => {
    const currency = entry?.payload?.currency || 'usd';
    return [`${currencySymbol(currency)}${value.toLocaleString()}`, name];
  };

  return (
    <ResponsiveContainer
      width="100%"
      height={300}
      data-test="invoice-cost-chart"
    >
      <BarChart
        data={formattedData}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        onClick={handleBarClick}
        style={{ cursor: onDataClick ? 'pointer' : 'default' }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis fontSize={12} dataKey="name" />
        <YAxis
          fontSize={12}
          domain={[0, 'dataMax']}
          allowDecimals={false}
          minTickGap={5}
          tickCount={5}
        />
        <Tooltip formatter={customTooltipFormatter} />
        <Legend />
        <Bar
          dataKey="totalInvoiceAmount"
          fill="#1D55CE"
          name="Invoice cost"
          fontSize={12}
          barSize={20}
        />
        <Bar
          dataKey="totalProcurementCost"
          fill="#4574E3"
          name="Procurement cost"
          fontSize={12}
          barSize={20}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
