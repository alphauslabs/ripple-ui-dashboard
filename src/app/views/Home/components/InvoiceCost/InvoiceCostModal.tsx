import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@project-ed/lib/ui';
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from '@project-ed/lib/ui'; // Adjust path if necessary
import { barChartColors } from '@project-ed/lib/constants';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
  ReferenceLine,
} from 'recharts'; // For the chart
import { useEffect, useState } from 'react';
import { Column } from '@project-ed/lib/ui';
import { InvoiceDialogPropTypes } from '@stores/dashboard/types';
import useDashboardStore from '@stores/dashboard';
import { currencySymbol } from '@project-ed/lib/utils';
import { useTranslation } from 'react-i18next';

export default function InvoiceCostModal({
  closeDialog,
  modalData,
}: InvoiceDialogPropTypes) {
  // State to track the selected view
  const [selectedView, setSelectedView] = useState('profitItems');
  const { topTenBilling, topTenBillingIsEmpty } = useDashboardStore();
  const { t } = useTranslation();

  // Get currency from modal data instead of global store
  const dataCurrency = modalData?.data?.currency || 'usd';

  const handleSelectChange = (value: string) => {
    setSelectedView(value);
  };

  // Helper function to get profit value by ID from thirdProfitItem array
  const getProfitFromThirdProfitItem = (id: string): number => {
    const thirdProfitItems = modalData?.data?.thirdProfitItemDetails || [];
    const item = thirdProfitItems.find((item: any) => item.id === id);
    return item?.profit || 0;
  };

  // Updated data structure with profit items mapped from API response
  const profitData = [
    {
      name: t('True Unblended Profit RI'),
      value: modalData?.data?.totalDetail?.trueUnblendedProfitRi ?? 0,
      currency: dataCurrency,
    },
    {
      name: t('True Unblended Profit SP'),
      value: modalData?.data?.totalDetail?.trueUnblendedProfitSp ?? 0,
      currency: dataCurrency,
    },
    {
      name: t('Total SPP discount'),
      value:
        modalData?.data?.totalDetail?.sppDiscount ??
        modalData?.data?.sppDiscount ??
        0,
      currency: dataCurrency,
    },
    {
      name: t('Profit from Support fee'),
      value: getProfitFromThirdProfitItem('SupportFee'),
      currency: dataCurrency,
    },
    {
      name: t('Profit from Custom service'),
      value: getProfitFromThirdProfitItem('CustomizedService'),
      currency: dataCurrency,
    },
    {
      name: t('Profit from Agency fee'),
      value: getProfitFromThirdProfitItem('AgencyFee'),
      currency: dataCurrency,
    },
    {
      name: t('Profit from Miscellaneous'),
      value: getProfitFromThirdProfitItem('Miscellaneous'),
      currency: dataCurrency,
    },
  ];

  const billingData = topTenBillingIsEmpty
    ? []
    : topTenBilling.map((i) => {
        return {
          name: i.result?.id || 'Unknown',
          value: i.result?.profitCost || 0,
          currency: i.result?.currency || dataCurrency,
        };
      });

  const chartData = selectedView === 'profitItems' ? profitData : billingData;

  const safeFormat = (value: any, decimals = 2) => {
    if (value === undefined || value === null) return '0.00';
    const numValue = Number(value);
    if (isNaN(numValue)) return '0.00';
    return numValue.toLocaleString('en-US', {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    });
  };

  // Custom tooltip formatter that includes currency symbol with comma formatting
  const customTooltipFormatter = (value: any, name: string, props: any) => {
    const itemCurrency = props?.payload?.currency || dataCurrency;
    return [`${currencySymbol(itemCurrency)}${safeFormat(value)}`, name];
  };

  // Columns for the SortableTable
  const columns: Column<{ name: string; value: number; currency?: string }>[] =
    [
      {
        key: 'name',
        label:
          selectedView === 'profitItems'
            ? t('Profit Items')
            : t('Billing Group'),
        sortable: true,
        render: (row: any) => (
          <div className="py-2 break-words whitespace-pre-line leading-tight">
            {row.name}
          </div>
        ),
      },
      {
        key: 'value',
        label: t('Profit'),
        sortable: true,
        render: (row) => {
          const itemCurrency = row.currency || dataCurrency;
          return `${currencySymbol(itemCurrency)}${safeFormat(row.value)}`;
        },
      },
    ];

  return (
    <Dialog
      open={modalData.isOpen}
      onOpenChange={closeDialog}
      data-test="invoice-cost-modal"
    >
      {/* Remove any manual DialogOverlay - DialogContent handles this automatically */}
      <DialogContent className="max-h-[90vh] flex flex-col">
        <DialogHeader className="flex-shrink-0">
          <DialogTitle className="mb-4" data-test="invoice-cost-modal-title">
            {t('Breakdown details for')} {modalData.data?.name}
          </DialogTitle>
          <DialogDescription className="flex justify-between">
            <div>
              <p className="text-xs">{t('Total profit')}:</p>{' '}
              <p className="text-2xl">
                {currencySymbol(dataCurrency)}
                {selectedView === 'profitItems'
                  ? safeFormat(modalData?.data?.profit)
                  : safeFormat(
                      topTenBilling.reduce(
                        (sum, i) => sum + (i.result?.profitCost || 0),
                        0
                      )
                    )}
              </p>
            </div>
            <div className="w-fit">
              <Select
                onValueChange={handleSelectChange}
                defaultValue="selectedView"
                data-test="invoice-cost-modal-dropdown"
              >
                <SelectTrigger>
                  {selectedView === 'profitItems'
                    ? t('Profit items')
                    : t('Billing group')}
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="profitItems">
                    {t('Profit items')}
                  </SelectItem>
                  <SelectItem value="billingGroup">
                    {t('Profit by billing group')}
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </DialogDescription>
        </DialogHeader>

        {/* Scrollable content area */}
        <div className="flex-1 overflow-y-auto min-h-0">
          {/* Dynamic chart based on the selected view */}
          <div className="w-full h-[360px] flex-shrink-0">
            <ResponsiveContainer>
              <BarChart
                data={chartData}
                margin={{ top: 20, right: 30, left: 30, bottom: 50 }}
                barSize={40}
                barGap={5}
              >
                <XAxis
                  fontSize={12}
                  dataKey="name"
                  height={80}
                  interval={0}
                  tick={(props) => {
                    const { x, y, payload } = props;
                    // Handle both space-separated words and newline characters
                    const lines = payload.value.includes('\n')
                      ? payload.value.split('\n')
                      : payload.value.split(' ');

                    return (
                      <g transform={`translate(${x},${y})`}>
                        <text
                          x={0}
                          y={20}
                          textAnchor="middle"
                          fill="#666"
                          fontSize={11}
                          className="text-neutral-70"
                        >
                          {lines.map((line: string, i: number) => (
                            <tspan
                              key={i}
                              x={0}
                              dy={i === 0 ? 0 : 14}
                              className="text-neutral-70"
                            >
                              {line}
                            </tspan>
                          ))}
                        </text>
                      </g>
                    );
                  }}
                />
                <YAxis
                  fontSize={12}
                  className="text-neutral-70"
                  tickFormatter={(value) =>
                    `${value >= 1000 ? `${(value / 1000).toFixed(0)}k` : value}`
                  }
                />
                <Tooltip formatter={customTooltipFormatter} />
                <ReferenceLine
                  y={0}
                  stroke="#666"
                  strokeDasharray="5 5"
                  strokeWidth={1}
                  className="text-neutral-40"
                />
                <Bar dataKey="value" maxBarSize={60}>
                  {chartData.map((_entry, index) => {
                    const color = barChartColors[index % barChartColors.length];
                    return <Cell key={`cell-${index}`} fill={color} />;
                  })}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="mt-2">
            <Table className="!mt-1 w-full">
              <TableHeader className="!border-t-[1px] !border-b-[1px] !border-neutral-30">
                <TableRow className="border-neutral-30 border-y-[1px] item-center">
                  <TableHead
                    className="font-semibold text-left"
                    style={{ width: '50%' }}
                  >
                    {selectedView === 'profitItems'
                      ? t('Profit Items')
                      : t('Billing Group')}
                  </TableHead>
                  <TableHead
                    className="font-semibold text-right"
                    style={{ width: '25%' }}
                  >
                    {t('Profit')}
                  </TableHead>
                  {/* Empty column to create spacing */}
                  <TableHead style={{ width: '25%' }}></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {chartData.map((row, index) => {
                  const itemCurrency = row.currency || dataCurrency;
                  return (
                    <TableRow key={index}>
                      <TableCell className="text-left" style={{ width: '50%' }}>
                        <div className="py-2 break-words whitespace-pre-line leading-tight">
                          {row.name}
                        </div>
                      </TableCell>
                      <TableCell
                        className="text-right"
                        style={{ width: '25%' }}
                      >
                        <span className="tabular-nums">
                          {currencySymbol(itemCurrency)}
                          {safeFormat(row.value)}
                        </span>
                      </TableCell>
                      {/* Empty cell to match header */}
                      <TableCell style={{ width: '25%' }}></TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
