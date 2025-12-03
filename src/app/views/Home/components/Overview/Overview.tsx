import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Spinner,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@project-ed/lib/ui';
import { useEffect, useState } from 'react';
import TotalTab from './TotalTab';
import { ITabsValues } from '../../../../../shared';
import { useTranslation } from 'react-i18next';
import useDashboardStore from '@stores/dashboard';
import { parseDate } from '@project-ed/lib/utils';
import { OverviewProps, PeriodRange } from '@stores/dashboard/types';
import { Info } from 'lucide-react';
import { axiosInstance } from '@project-ed/lib/http-service';
import { getApiUrl } from '@project-ed/lib/utils';

function Overview({ selectedDate }: OverviewProps) {
  const SelectedTabs: ITabsValues[] = ['Total', 'AWS', 'Azure', 'GCP'];
  const { t } = useTranslation('dashboard');

  const { currency, getOverview, Overview, isOverviewLoading } =
    useDashboardStore();

  const [hasGcpJpyData, setHasGcpJpyData] = useState<boolean>(false);

  useEffect(() => {
    // Helper function to convert date selection to periodRange format
    const createPeriodRange = (selectedDate: string): PeriodRange => {
      // Handle year ranges like "2021-2023"
      if (selectedDate.includes('-') && /^\d{4}-\d{4}$/.test(selectedDate)) {
        const [startYear, endYear] = selectedDate
          .split('-')
          .map((y) => parseInt(y));
        const yearDuration = endYear - startYear + 1;
        return {
          unit: 'YEAR',
          year: startYear,
          starting: 1,
          duration: yearDuration,
        };
      }

      // Handle space-separated ranges like "Q1 2023 - Q3 2023" or "Jan 2023 - Mar 2023"
      if (selectedDate.includes(' - ')) {
        const splitDate = selectedDate.split(' - ');
        const part1 = splitDate[0].trim();
        const part2 = splitDate[1].trim();

        // Parse both parts
        const startParts = part1.split(' ');
        const endParts = part2.split(' ');

        if (startParts.length === 2 && endParts.length === 2) {
          const startYear = parseInt(startParts[1]);
          const endYear = parseInt(endParts[1]);

          // Quarter range like "Q1 2023 - Q3 2023"
          if (startParts[0].startsWith('Q') && endParts[0].startsWith('Q')) {
            const startQuarter = parseInt(startParts[0].substring(1));
            const endQuarter = parseInt(endParts[0].substring(1));

            if (startYear === endYear) {
              // Same year: duration is number of quarters
              const duration = endQuarter - startQuarter + 1;
              return {
                unit: 'QUARTER',
                year: startYear,
                starting: startQuarter,
                duration: duration,
              };
            } else {
              // Different years: convert to months for multi-year quarter ranges
              const startMonth = (startQuarter - 1) * 3 + 1;
              const endMonth = endQuarter * 3;
              const totalMonths =
                (endYear - startYear) * 12 + (endMonth - startMonth + 1);
              return {
                unit: 'MONTH',
                year: startYear,
                starting: startMonth,
                duration: totalMonths,
              };
            }
          }

          // Month range like "Jan 2023 - Mar 2023"
          const monthMap: Record<string, number> = {
            Jan: 1,
            Feb: 2,
            Mar: 3,
            Apr: 4,
            May: 5,
            Jun: 6,
            Jul: 7,
            Aug: 8,
            Sep: 9,
            Oct: 10,
            Nov: 11,
            Dec: 12,
          };

          const startMonth = monthMap[startParts[0]];
          const endMonth = monthMap[endParts[0]];

          if (startMonth && endMonth) {
            if (startYear === endYear) {
              const duration = endMonth - startMonth + 1;
              return {
                unit: 'MONTH',
                year: startYear,
                starting: startMonth,
                duration: duration,
              };
            } else {
              // Multi-year month range
              const totalMonths =
                (endYear - startYear) * 12 + (endMonth - startMonth + 1);
              return {
                unit: 'MONTH',
                year: startYear,
                starting: startMonth,
                duration: totalMonths,
              };
            }
          }
        }
      } else {
        // Single selections
        const parts = selectedDate.trim().split(' ');

        if (parts.length === 2) {
          const [part1, part2] = parts;
          const year = parseInt(part2);

          // Quarter selection (Q1, Q2, Q3, Q4) - show full quarter (3 months)
          if (part1.startsWith('Q')) {
            const quarter = parseInt(part1.substring(1));
            return {
              unit: 'QUARTER',
              year: year,
              starting: quarter,
              duration: 1,
            };
          }
          // Month selection (Jan, Feb, etc.)
          else {
            const monthMap: Record<string, number> = {
              Jan: 1,
              Feb: 2,
              Mar: 3,
              Apr: 4,
              May: 5,
              Jun: 6,
              Jul: 7,
              Aug: 8,
              Sep: 9,
              Oct: 10,
              Nov: 11,
              Dec: 12,
            };

            const month = monthMap[part1];
            if (month) {
              return {
                unit: 'MONTH',
                year: year,
                starting: month,
                duration: 1,
              };
            }
          }
        } else if (parts.length === 1) {
          // Year selection like "2025" - show full year (12 months)
          const year = parseInt(parts[0]);

          return {
            unit: 'YEAR',
            year: year,
            starting: 1,
            duration: 1,
          };
        }
      }

      // Fallback to current month
      const today = new Date();
      return {
        unit: 'MONTH',
        year: today.getFullYear(),
        starting: today.getMonth() + 1,
        duration: 1,
      };
    };

    const periodRange = createPeriodRange(selectedDate);

    console.log('Overview periodRange:', { selectedDate, periodRange });

    getOverview(periodRange, currency.toLocaleLowerCase());

    // Check if GCP has JPY data when currency is USD
    if (currency.toUpperCase() === 'USD') {
      const checkGcpJpyData = async () => {
        try {
          const response = await axiosInstance.post(
            `${getApiUrl('blue', `cost/v1/invoiceoverviews:read`)}`,
            {
              usePeriodRange: true,
              periodRange,
              toCurrency: 'jpy',
            },
            {
              headers: {
                ...axiosInstance.defaults.headers.common,
              },
            }
          );

          if (response.data?.result?.gcpSection) {
            const gcpSection = response.data.result.gcpSection;
            const hasData =
              gcpSection.invoiceCost > 0 ||
              gcpSection.procurementCost > 0 ||
              gcpSection.profitCost > 0;
            setHasGcpJpyData(hasData);
          } else {
            setHasGcpJpyData(false);
          }
        } catch (error) {
          console.error('Error checking GCP JPY data:', error);
          setHasGcpJpyData(false);
        }
      };

      checkGcpJpyData();
    } else {
      setHasGcpJpyData(false);
    }
  }, [selectedDate, currency]);

  return (
    <div
      data-test="overview-section"
      className="flex flex-col rounded-lg shadow-sm bg-white"
    >
      <div className="flex p-4 justify-between items-center">
        <div className="flex items-center gap-2">
          <h2 className="text-2xl text-neutral-5">{t('Overview')}</h2>
          {currency.toUpperCase() === 'USD' && hasGcpJpyData && (
            <Tooltip>
              <TooltipTrigger asChild>
                <button className="cursor-help">
                  <Info className="h-5 w-5 text-warning-50" />
                </button>
              </TooltipTrigger>
              <TooltipContent side="right" className="max-w-xs">
                <p className="font-semibold">{t('GCP USD notice')}</p>
                <p className="text-xs mt-1">
                  {t('GCP USD notice description')}
                </p>
              </TooltipContent>
            </Tooltip>
          )}
        </div>
        {isOverviewLoading && <Spinner size="sm" />}
      </div>
      <Tabs defaultValue={SelectedTabs[0]} className="w-full">
        <TabsList>
          {SelectedTabs.map((item, index) => {
            return (
              <TabsTrigger
                data-test={`overview-tab-${item.toLowerCase()}`}
                key={index}
                value={item}
              >
                {item}
              </TabsTrigger>
            );
          })}
        </TabsList>
        <TabsContent className="p-4" value={SelectedTabs[0]}>
          {isOverviewLoading ? (
            <div className="flex items-center justify-center py-8">
              <Spinner size="md" />
            </div>
          ) : (
            <TotalTab prefix="Total" data={Overview} />
          )}
        </TabsContent>
        <TabsContent className="p-4" value={SelectedTabs[1]}>
          {isOverviewLoading ? (
            <div className="flex items-center justify-center py-8">
              <Spinner size="md" />
            </div>
          ) : (
            <TotalTab
              prefix="AWS"
              data={{
                ...Overview.awsSection,
                periodOverPeriod: {
                  ...Overview.awsSection.periodOverPeriod,
                  // Inherit isDataComplete and dateRange from the main Overview
                  ...((Overview.periodOverPeriod as any).isDataComplete !==
                    undefined && {
                    isDataComplete: (Overview.periodOverPeriod as any)
                      .isDataComplete,
                  }),
                  ...((Overview.periodOverPeriod as any).dateRange && {
                    dateRange: (Overview.periodOverPeriod as any).dateRange,
                  }),
                },
              }}
            />
          )}
        </TabsContent>
        <TabsContent className="p-4" value={SelectedTabs[2]}>
          {isOverviewLoading ? (
            <div className="flex items-center justify-center py-8">
              <Spinner size="md" />
            </div>
          ) : (
            <TotalTab
              prefix="Azure"
              data={{
                ...Overview.azureSection,
                periodOverPeriod: {
                  ...Overview.azureSection.periodOverPeriod,
                  // Inherit isDataComplete and dateRange from the main Overview
                  ...((Overview.periodOverPeriod as any).isDataComplete !==
                    undefined && {
                    isDataComplete: (Overview.periodOverPeriod as any)
                      .isDataComplete,
                  }),
                  ...((Overview.periodOverPeriod as any).dateRange && {
                    dateRange: (Overview.periodOverPeriod as any).dateRange,
                  }),
                },
              }}
            />
          )}
        </TabsContent>
        <TabsContent className="p-4" value={SelectedTabs[3]}>
          {isOverviewLoading ? (
            <div className="flex items-center justify-center py-8">
              <Spinner size="md" />
            </div>
          ) : (
            <TotalTab
              prefix="GCP"
              data={{
                ...Overview.gcpSection,
                periodOverPeriod: {
                  ...Overview.gcpSection.periodOverPeriod,
                  // Inherit isDataComplete and dateRange from the main Overview
                  ...((Overview.periodOverPeriod as any).isDataComplete !==
                    undefined && {
                    isDataComplete: (Overview.periodOverPeriod as any)
                      .isDataComplete,
                  }),
                  ...((Overview.periodOverPeriod as any).dateRange && {
                    dateRange: (Overview.periodOverPeriod as any).dateRange,
                  }),
                },
              }}
            />
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default Overview;
