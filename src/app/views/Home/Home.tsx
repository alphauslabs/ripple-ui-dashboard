import { useState, useMemo } from 'react';
import {
  DatePicker,
  DatePickerTrigger,
  DatePickerContent,
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@project-ed/lib/ui';
import { useTranslation } from 'react-i18next';
import Overview from './components/Overview/Overview';
import InvoiceCost from './components/InvoiceCost/InvoiceCost';
import TopTenBillings from './components/TopTenBillings/TopTenBillings';
import useDashboardStore from '@stores/dashboard';
import { currencySymbol } from '@project-ed/lib/utils';

function Home() {
  const { t } = useTranslation();
  const { currency, setCurrency } = useDashboardStore();

  // Calculate the oldest year that can be selected (current year - 2)
  const oldestYear = useMemo(() => {
    return new Date().getFullYear() - 2;
  }, []);

  // Calculate default date range (latest 6 months before current month)
  const getDefaultDateRange = () => {
    const today = new Date();
    const currentMonth = today.getMonth(); // 0-indexed (0 = January)
    const currentYear = today.getFullYear();

    // Calculate end date (last month)
    const endMonth = currentMonth - 1; // If currentMonth is July (6), endMonth should be June (5)
    const endYear = currentYear + Math.floor(endMonth / 12); // Handle negative months by adjusting year
    const normalizedEndMonth = ((endMonth % 12) + 12) % 12; // Normalize to 0-11 range

    // Calculate start date (6 months before end date)
    const startMonth = endMonth - 5; // 5 months before end month (for a total of 6 months)
    const startYear = currentYear + Math.floor(startMonth / 12); // Adjust year if needed
    const normalizedStartMonth = ((startMonth % 12) + 12) % 12; // Handle negative months

    const startDate = new Date(startYear, normalizedStartMonth, 1);
    const endDate = new Date(endYear, normalizedEndMonth, 1);

    // Format dates as strings
    const startStr = startDate.toLocaleString('en-US', {
      month: 'short',
      year: 'numeric',
    });
    const endStr = endDate.toLocaleString('en-US', {
      month: 'short',
      year: 'numeric',
    });

    return `${startStr} - ${endStr}`;
  };

  const [selectedDate, setSelectedDate] = useState<string>(
    getDefaultDateRange()
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-medium">
          {t('Dashboard')}
        </h1>
        <div className="flex items-center gap-3">
          <Select
            value={currency.toLowerCase()}
            onValueChange={setCurrency}
            data-test="dashboard-currency-selector"
          >
            <SelectTrigger className="w-[100px] min-w-[100px]">
              <SelectValue placeholder={t('Display currency')} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="usd">
                <div className="flex items-center gap-2">
                  <span className="font-mono">{currencySymbol('usd')}</span>
                  <span>USD</span>
                </div>
              </SelectItem>
              <SelectItem value="jpy">
                <div className="flex items-center gap-2">
                  <span className="font-mono">{currencySymbol('jpy')}</span>
                  <span>JPY</span>
                </div>
              </SelectItem>
            </SelectContent>
          </Select>
          <DatePicker onDateSelect={setSelectedDate} value={selectedDate}>
            <DatePickerTrigger
              placeholder={t('Pick a date')}
              data-test="dashboard-date-selector"
              className="min-w-[200px]"
            />
            <DatePickerContent
              availableTabs={['Month', 'Quarter', 'Year']}
              disableFutureDates={true}
              align="end"
              oldestYear={oldestYear}
            />
          </DatePicker>
        </div>
      </div>

      <Overview selectedDate={selectedDate} />
      <InvoiceCost selectedDate={selectedDate} />
      <TopTenBillings selectedDate={selectedDate} />
    </div>
  );
}

export default Home;
