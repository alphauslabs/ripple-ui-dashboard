import React from 'react';
import { Column, SortableTable } from '@project-ed/lib/ui'; // Adjust the import path
import { BillingResult } from '@stores/dashboard/types';
import { useTranslation } from 'react-i18next';
import { currencySymbol } from '@project-ed/lib/utils';

interface DataRow {
  name: string;
  totalCost: number;
  procurementCost: number;
  profit: number;
  currency: string; // Add currency field
}

const data: DataRow[] = [
  {
    name: 'Group A',
    totalCost: 4000,
    procurementCost: 2400,
    profit: 1600,
    currency: 'usd',
  },
  {
    name: 'Group B',
    totalCost: 3000,
    procurementCost: 2000,
    profit: 1000,
    currency: 'usd',
  },
  {
    name: 'Group C',
    totalCost: 5000,
    procurementCost: 2500,
    profit: 2500,
    currency: 'usd',
  },
  {
    name: 'Group C',
    totalCost: 5000,
    procurementCost: 2500,
    profit: 2500,
    currency: 'usd',
  },
  {
    name: 'Group C',
    totalCost: 5000,
    procurementCost: 2500,
    profit: 2500,
    currency: 'usd',
  },
  {
    name: 'Group C',
    totalCost: 5000,
    procurementCost: 2500,
    profit: 2500,
    currency: 'usd',
  },
];

const BillingTable = ({ data }: { data: BillingResult[] }) => {
  const { t } = useTranslation();

  const columns: Column<DataRow>[] = [
    {
      key: 'name',
      label: t('Billing Group'),
      sortable: true,
      headerAlign: 'left',
      cellAlign: 'left',
      render: (row: DataRow) => <div className="py-2">{row.name}</div>,
    },
    {
      key: 'totalCost',
      label: t('Total Cost'),
      sortable: true,
      headerAlign: 'right',
      cellAlign: 'right',
      render: (row: DataRow) => (
        <span className="tabular-nums text-right block w-full">
          {currencySymbol(row.currency)}
          {row.totalCost.toLocaleString()}
        </span>
      ),
    },
    {
      key: 'procurementCost',
      label: t('Procurement Cost'),
      sortable: true,
      headerAlign: 'right',
      cellAlign: 'right',
      render: (row: DataRow) => (
        <span className="tabular-nums text-right block w-full">
          {currencySymbol(row.currency)}
          {row.procurementCost.toLocaleString()}
        </span>
      ),
    },
    {
      key: 'profit',
      label: t('Profit'),
      sortable: true,
      headerAlign: 'right',
      cellAlign: 'right',
      render: (row: DataRow) => (
        <span className="tabular-nums text-right block w-full">
          {currencySymbol(row.currency)}
          {row.profit.toLocaleString()}
        </span>
      ),
    },
  ];

  const formattedData = data.map((i) => {
    const safeFormat = (value: any) => {
      if (value === undefined || value === null) return 0;
      const numValue = Number(value);
      if (isNaN(numValue)) return 0;
      return Number(numValue.toFixed(2));
    };

    // Get currency from the API response
    const itemCurrency = i.result?.currency || 'usd';

    return {
      name: i.result.id,
      totalCost: safeFormat(i.result?.invoiceCost),
      procurementCost: safeFormat(i.result?.procurementCost),
      profit: safeFormat(i.result?.profitCost),
      currency: itemCurrency.toLowerCase(), // Ensure currency is lowercase
    };
  });

  return (
    <SortableTable<DataRow>
      data={formattedData}
      columns={columns}
      // caption="Monthly Performance Data"
    />
  );
};

export default BillingTable;
