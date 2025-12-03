import React from 'react';
import { MoneyUpVector, MoneyVectorDown } from '@project-ed/lib/icons';
import { useTranslation } from 'react-i18next';
import { currencySymbol } from '@project-ed/lib/utils';
import { TotalTabProps } from '@stores/dashboard/types';
const TotalTab: React.FC<TotalTabProps> = ({ prefix, data }) => {
  const { t } = useTranslation();
  // const items = [
  //   {
  //     title: 'Total invoice cost',
  //     value: '$120',
  //     description: '+5,000 (-12%) from last period',
  //     profit: 'UP',
  //   },
  //   {
  //     title: 'Total procurement cost',
  //     value: '$100',
  //     description: '+5,000 (-12%) from last period',
  //     profit: 'DOWN',
  //   },
  //   {
  //     title: 'Total profit',
  //     value: '$8080',
  //     description: '+5,000 (-12%) from last period',
  //     profit: 'DOWN',
  //   },
  //   {
  //     title: 'Total SPP discount amount',
  //     value: '$0',
  //   },
  // ];

  type DataType = {
    currency: string;
    invoiceCost: number;
    procurementCost: number;
    profitCost: number;
    options: {
      sppDiscountCost: number;
    };
    periodOverPeriod: {
      invoiceCost: number;
      procurementCost: number;
      profitCost: number;
      options: {
        sppDiscountCost: number;
      };
    };
  };

  const formatItem = (
    title: string,
    current: number,
    previous: number,
    currency: string,
    percent: number
  ) => {
    current = Number(current.toFixed(2));
    previous = Number(previous.toFixed(2));

    const difference = previous;
    const dateRange =
      (data.periodOverPeriod as { dateRange?: string }).dateRange || '';

    // Handle special formatting for discount amounts (typically negative values)
    const isDiscountField = title.toLowerCase().includes('discount');
    const displayValue =
      isDiscountField && current < 0
        ? `-${currencySymbol(currency)}${Math.abs(current).toLocaleString()}`
        : `${currencySymbol(currency)}${current.toLocaleString()}`;

    // Fix the percentage display - ensure consistent sign formatting
    const formatPercentage = (pct: number) => {
      if (pct === 0) return '0';
      const sign = pct > 0 ? '+' : '';
      return `${sign}${pct.toFixed(2)}`;
    };

    // Fix the difference display - ensure consistent sign formatting
    const formatDifference = (diff: number) => {
      if (diff === 0) return '0';
      const sign = diff > 0 ? '+' : '';
      return `${sign}${diff.toLocaleString()}`;
    };

    return {
      title: t(title),
      value: displayValue,
      profit: percent === 0 ? 'NONE' : percent > 0 ? 'UP' : 'DOWN',
      description: `${formatDifference(difference)} (${formatPercentage(
        percent
      )}%) ${dateRange || t('from last period')}`,
    };
  };

  const items = [
    formatItem(
      `${prefix} invoice cost`,
      data.invoiceCost,
      data.periodOverPeriod.invoiceCost,
      data.currency,
      data.periodOverPeriod.invoiceCostPoP
    ),
    formatItem(
      `${prefix} procurement cost`,
      data.procurementCost,
      data.periodOverPeriod.procurementCost,
      data.currency,
      data.periodOverPeriod.procurementCostPoP
    ),
    formatItem(
      `${prefix} profit`,
      data.profitCost,
      data.periodOverPeriod.profitCost,
      data.currency,
      data.periodOverPeriod.profitCostPoP
    ),
    formatItem(
      `${prefix} SPP discount amount`,
      data.options.sppDiscountCost,
      data.periodOverPeriod.options.sppDiscountCost,
      data.currency,
      data.periodOverPeriod.options.sppDiscountCostPoP
    ),
  ];

  const returnProfitClassName = (profit: string | undefined) => {
    if (profit === 'UP') return 'text-success-700';
    else if (profit === 'DOWN') return 'text-danger-700';
    else return;
  };

  const returnVectorColor = (profit: string | undefined) => {
    if (profit === 'UP') return '#006E08';
    else if (profit === 'DOWN') return '#B02B36';
    else return;
  };
  return (
    <div className="grid grid-cols-4 gap-4">
      {items.map((item, index) => {
        // Always show trends for consistent user experience
        const shouldShowTrend = true;

        return (
          <div
            data-test={`overview-item-${prefix.toLowerCase()}-${index}`}
            key={index}
            className="flex flex-col items-start p-4 border-r last:border-none gap-2"
          >
            <h3 className="text-sm font-medium text-gray-500">{item.title}</h3>
            <span
              className="text-2xl font-normal text-neutral-5"
              data-test="overview-value"
            >
              {item.value}
            </span>
            <span
              className="text-xs text-gray-400 mt-1 flex gap-2"
              data-test={`trend-indicator-${
                item.profit === 'UP'
                  ? 'positive'
                  : item.profit === 'DOWN'
                  ? 'negative'
                  : 'neutral'
              }`}
            >
              {shouldShowTrend && (
                <>
                  {item.profit === 'UP' ? (
                    <MoneyUpVector color={returnVectorColor(item.profit)} />
                  ) : item.profit === 'DOWN' ? (
                    <MoneyVectorDown color={returnVectorColor(item.profit)} />
                  ) : null}
                  <p className={returnProfitClassName(item.profit)}>
                    {item.description}
                  </p>
                </>
              )}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default TotalTab;
