import React, { useState } from 'react';
import { Input, Tabs, TabsList, TabsTrigger, TabsContent } from '../index';
import { cn } from '../../utils';
import { useTranslation } from 'react-i18next';
import { PlusIcon } from '@project-ed/lib/icons';
import * as PopoverPrimitive from '@radix-ui/react-popover';

type Tab = 'Month' | 'Quarter' | 'Year';

// Create a context for the DatePicker component
const DatePickerContext = React.createContext<{
  selectedDate: string;
  setSelectedDate: (date: string) => void;
  open: boolean;
  setOpen: (open: boolean) => void;
} | null>(null);

// Root DatePicker component
const DatePicker = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Root> & {
    onDateSelect?: (dateRange: string) => void;
    value: string; // Made required
  }
>(({ children, onDateSelect, value, ...props }, ref) => {
  const [open, setOpen] = useState(false);

  const contextValue = React.useMemo(
    () => ({
      selectedDate: value,
      setSelectedDate: (date: string) => {
        onDateSelect?.(date);
      },
      open,
      setOpen,
    }),
    [value, open, onDateSelect]
  );

  return (
    <div ref={ref}>
      <DatePickerContext.Provider value={contextValue}>
        <PopoverPrimitive.Root open={open} onOpenChange={setOpen} {...props}>
          {children}
        </PopoverPrimitive.Root>
      </DatePickerContext.Provider>
    </div>
  );
});

DatePicker.displayName = 'DatePicker';

// DatePicker Trigger component
const DatePickerTrigger = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Trigger> & {
    placeholder?: string;
    className?: string;
  }
>(({ placeholder = 'Pick a date', className, children, ...props }, ref) => {
  const context = React.useContext(DatePickerContext);
  if (!context) {
    throw new Error(
      'DatePickerTrigger must be used within a DatePicker context'
    );
  }
  const { selectedDate, open } = context;
  const { t } = useTranslation();

  // Helper function to translate the date display
  const getDisplayDate = (date: string) => {
    if (!date) return placeholder;

    // Handle year range dates (e.g., "2021-2025")
    if (date.includes('-') && /^\d{4}-\d{4}$/.test(date)) {
      const [start, end] = date.split('-');
      return `${start} - ${end}`;
    }

    // Handle range dates with space (e.g., "Jan 2023 - Mar 2023")
    if (date.includes(' - ')) {
      const [start, end] = date.split(' - ');
      return `${translateDateString(start)} - ${translateDateString(end)}`;
    }

    return translateDateString(date);
  };

  const translateDateString = (dateStr: string) => {
    // Handle month year format (e.g., "Jan 2023")
    const monthYearMatch = dateStr.match(/^([A-Za-z]{3})\s+(\d{4})$/);
    if (monthYearMatch) {
      const [, month, year] = monthYearMatch;
      return `${t(month)} ${year}`;
    }

    // Handle quarter format (e.g., "Q1 2023")
    const quarterMatch = dateStr.match(/^(Q[1-4])\s+(\d{4})$/);
    if (quarterMatch) {
      const [, quarter, year] = quarterMatch;
      return `${t(quarter)} ${year}`;
    }

    // Handle year only (e.g., "2023")
    if (/^\d{4}$/.test(dateStr)) {
      return dateStr;
    }

    return dateStr;
  };

  return (
    <PopoverPrimitive.Trigger asChild ref={ref} {...props}>
      <button
        className={cn(
          'flex items-center rounded-md outline-none justify-between bg-white',
          'px-[10px] py-[8px]',
          'border-[2px] border-neutral-80 text-sm [&>span]:line-clamp-1',
          'font-normal text-[16px] leading-[16px] tracking-[-0.01em]',
          'disabled:cursor-not-allowed disabled:opacity-50',
          'min-w-[120px] h-[36px]',
          'data-[state=open]:border-tangBlue-50',
          className
        )}
        data-state={open ? 'open' : 'closed'}
      >
        <span
          className={cn(
            'text-sm',
            selectedDate ? 'text-neutral-20' : 'text-neutral-60'
          )}
        >
          {getDisplayDate(selectedDate)}
        </span>
        <PlusIcon width={10} height={10} color="#161b29" />
      </button>
    </PopoverPrimitive.Trigger>
  );
});

DatePickerTrigger.displayName = 'DatePickerTrigger';

const DatePickerContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content> & {
    availableTabs: Tab[];
    isSingleDatePicker?: boolean;
    disableFutureDates?: boolean;
    oldestYear?: number;
  }
>(
  (
    {
      availableTabs,
      isSingleDatePicker = false,
      disableFutureDates = false,
      oldestYear, // Added this line to destructure the oldestYear prop
      className,
      align = 'start',
      sideOffset = 4,
      ...props
    },
    ref
  ) => {
    const context = React.useContext(DatePickerContext);
    if (!context) {
      throw new Error(
        'DatePickerContent must be used within a DatePicker context'
      );
    }
    const { selectedDate, setSelectedDate, setOpen } = context;

    const { t } = useTranslation();

    // Helper function to determine the appropriate tab based on a date string
    const getTabFromDate = (dateStr: string): Tab => {
      if (!dateStr) return availableTabs[0];

      // Check for year format (e.g., "2023")
      if (/^\d{4}$/.test(dateStr)) {
        return availableTabs.includes('Year') ? 'Year' : availableTabs[0];
      }

      // Check for quarter format (e.g., "Q1 2023")
      if (dateStr.match(/^Q[1-4]\s+\d{4}$/)) {
        return availableTabs.includes('Quarter') ? 'Quarter' : availableTabs[0];
      }

      // Check for month format (e.g., "Jan 2023")
      if (dateStr.match(/^[A-Za-z]{3}\s+\d{4}$/)) {
        return availableTabs.includes('Month') ? 'Month' : availableTabs[0];
      }

      return availableTabs[0];
    };

    // Determine initial active tab based on selectedDate only on mount
    const getInitialActiveTab = (): Tab => {
      if (selectedDate) {
        // Handle year range dates (e.g., "2021-2025")
        if (selectedDate.includes('-') && /^\d{4}-\d{4}$/.test(selectedDate)) {
          return availableTabs.includes('Year') ? 'Year' : availableTabs[0];
        }
        // Handle range dates with space (e.g., "Jan 2023 - Mar 2023")
        if (selectedDate.includes(' - ')) {
          const [start] = selectedDate.split(' - ');
          return getTabFromDate(start);
        }
        return getTabFromDate(selectedDate);
      }
      return availableTabs[0];
    };

    const [activeTab, setActiveTab] = useState<Tab>(getInitialActiveTab());
    const [fromDate, setFromDate] = useState<string>('');
    const [toDate, setToDate] = useState<string>('');
    const [isSelectingFrom, setIsSelectingFrom] = useState<boolean>(true);

    // Initialize fromDate and toDate from selectedDate when component mounts or selectedDate changes
    React.useEffect(() => {
      if (selectedDate) {
        if (isSingleDatePicker) {
          setFromDate(selectedDate);
          setToDate('');
        } else if (
          selectedDate.includes('-') &&
          /^\d{4}-\d{4}$/.test(selectedDate)
        ) {
          // Handle year range format "2021-2025"
          const [start, end] = selectedDate.split('-');
          setFromDate(start);
          setToDate(end);
        } else if (selectedDate.includes(' - ')) {
          // Handle space-separated range format "Jan 2023 - Mar 2023"
          const [start, end] = selectedDate.split(' - ');
          setFromDate(start);
          setToDate(end);
        } else {
          setFromDate(selectedDate);
          setToDate('');
        }
      } else {
        // Clear the date fields when no selectedDate
        setFromDate('');
        setToDate('');
      }
    }, [selectedDate, isSingleDatePicker]);

    // Helper function to translate date for display
    const translateDateForDisplay = (dateStr: string) => {
      if (!dateStr) return '';

      // Handle month year format (e.g., "Jan 2023")
      const monthYearMatch = dateStr.match(/^([A-Za-z]{3})\s+(\d{4})$/);
      if (monthYearMatch) {
        const [, month, year] = monthYearMatch;
        return `${t(month)} ${year}`;
      }

      // Handle quarter format (e.g., "Q1 2023")
      const quarterMatch = dateStr.match(/^(Q[1-4])\s+(\d{4})$/);
      if (quarterMatch) {
        const [, quarter, year] = quarterMatch;
        return `${t(quarter)} ${year}`;
      }

      // Handle year only (e.g., "2023")
      if (/^\d{4}$/.test(dateStr)) {
        return dateStr;
      }

      return dateStr;
    };

    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth(); // 0-indexed (0 = January)
    const maxYearsToShow =
      oldestYear !== undefined ? currentYear - oldestYear + 1 : 5;

    const handleTabChange = (tab: Tab) => {
      setActiveTab(tab);
      setFromDate('');
      setToDate('');
      setIsSelectingFrom(true);
      // Don't reset selectedDate when switching tabs - let user keep their previous selection
    };

    const handleDateChange = (date: string) => {
      let finalDateRange = '';

      if (isSingleDatePicker) {
        setFromDate(date);
        setToDate(''); // Clear the end date for single selection
        finalDateRange = date;
      } else {
        if (isSelectingFrom) {
          setFromDate(date);
          setToDate(''); // Reset end date when start is reselected
          setIsSelectingFrom(false);
          finalDateRange = date;
        } else {
          // Compare dates to ensure end date is not earlier than start date
          if (shouldSwapDates(fromDate, date)) {
            // Swap the dates if end is earlier than start
            setToDate(fromDate);
            setFromDate(date);

            // If dates are the same, just return single date
            if (fromDate === date) {
              finalDateRange = date;
            } else {
              // For Year tab, use hyphen format; for others, use space format
              if (activeTab === 'Year') {
                finalDateRange = `${date}-${fromDate}`; // Note the order is swapped here
              } else {
                finalDateRange = `${date} - ${fromDate}`;
              }
            }
          } else {
            setToDate(date);

            // If dates are the same, just return single date
            if (fromDate === date) {
              finalDateRange = date;
            } else {
              // For Year tab, use hyphen format; for others, use space format
              if (activeTab === 'Year') {
                finalDateRange = `${fromDate}-${date}`;
              } else {
                finalDateRange = `${fromDate} - ${date}`;
              }
            }
          }
          setIsSelectingFrom(true);
        }
      }

      setSelectedDate(finalDateRange);

      // Close the picker after selection (for single date picker or completed range)
      if (
        isSingleDatePicker ||
        (!isSingleDatePicker &&
          (finalDateRange.includes(' - ') || finalDateRange.includes('-')))
      ) {
        setOpen(false);
      }
    };

    // Helper function to determine if dates should be swapped
    const shouldSwapDates = (start: string, end: string): boolean => {
      // For years (simple numeric comparison)
      if (/^\d{4}$/.test(start) && /^\d{4}$/.test(end)) {
        return parseInt(end) < parseInt(start);
      }

      // For quarters (format: "Q1 2023", "Q2 2023", etc.)
      if (start.startsWith('Q') && end.startsWith('Q')) {
        const startYear = parseInt(start.split(' ')[1]);
        const endYear = parseInt(end.split(' ')[1]);

        if (endYear !== startYear) {
          return endYear < startYear;
        }

        const startQuarter = parseInt(start.split(' ')[0].substring(1));
        const endQuarter = parseInt(end.split(' ')[0].substring(1));
        return endYear === startYear && endQuarter < startQuarter;
      }

      // For months (format: "Jan 2023", "Feb 2023", etc.)
      const months = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ];

      const startParts = start.split(' ');
      const endParts = end.split(' ');

      if (startParts.length === 2 && endParts.length === 2) {
        const startYear = parseInt(startParts[1]);
        const endYear = parseInt(endParts[1]);

        if (endYear !== startYear) {
          return endYear < startYear;
        }

        const startMonth = months.indexOf(startParts[0]);
        const endMonth = months.indexOf(endParts[0]);
        return endYear === startYear && endMonth < startMonth;
      }

      return false;
    };

    // Helper function to check if a date should be disabled
    const isDateDisabled = (year: number, monthIndex?: number): boolean => {
      if (!disableFutureDates && !oldestYear) return false;

      // Check if date is in the future
      const isFutureDate =
        disableFutureDates &&
        (year > currentYear ||
          (year === currentYear &&
            monthIndex !== undefined &&
            monthIndex >= currentMonth));

      // Check if date is too old (before oldest allowed year)
      const isTooOld = oldestYear !== undefined && year < oldestYear;

      return isFutureDate || isTooOld;
    };

    // Helper function to check if a date is within the selected range
    const isDateInRange = (dateToCheck: string): boolean => {
      if (!fromDate || !toDate || isSingleDatePicker) return false;

      // For years (simple numeric comparison)
      if (
        /^\d{4}$/.test(dateToCheck) &&
        /^\d{4}$/.test(fromDate) &&
        /^\d{4}$/.test(toDate)
      ) {
        const year = parseInt(dateToCheck);
        const startYear = parseInt(fromDate);
        const endYear = parseInt(toDate);
        return (
          year >= Math.min(startYear, endYear) &&
          year <= Math.max(startYear, endYear)
        );
      }

      // For quarters (format: "Q1 2023", "Q2 2023", etc.)
      if (
        dateToCheck.startsWith('Q') &&
        fromDate.startsWith('Q') &&
        toDate.startsWith('Q')
      ) {
        const [dateQuarter, dateYear] = dateToCheck.split(' ');
        const [startQuarter, startYear] = fromDate.split(' ');
        const [endQuarter, endYear] = toDate.split(' ');

        const dateQuarterNum = parseInt(dateQuarter.substring(1));
        const dateYearNum = parseInt(dateYear);
        const startQuarterNum = parseInt(startQuarter.substring(1));
        const startYearNum = parseInt(startYear);
        const endQuarterNum = parseInt(endQuarter.substring(1));
        const endYearNum = parseInt(endYear);

        // Convert to a comparable format (year * 4 + quarter)
        const dateValue = dateYearNum * 4 + dateQuarterNum;
        const startValue = startYearNum * 4 + startQuarterNum;
        const endValue = endYearNum * 4 + endQuarterNum;

        return (
          dateValue >= Math.min(startValue, endValue) &&
          dateValue <= Math.max(startValue, endValue)
        );
      }

      // For months (format: "Jan 2023", "Feb 2023", etc.)
      const months = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ];

      const dateParts = dateToCheck.split(' ');
      const startParts = fromDate.split(' ');
      const endParts = toDate.split(' ');

      if (
        dateParts.length === 2 &&
        startParts.length === 2 &&
        endParts.length === 2
      ) {
        const dateMonth = months.indexOf(dateParts[0]);
        const dateYear = parseInt(dateParts[1]);
        const startMonth = months.indexOf(startParts[0]);
        const startYear = parseInt(startParts[1]);
        const endMonth = months.indexOf(endParts[0]);
        const endYear = parseInt(endParts[1]);

        // Convert to a comparable format (year * 12 + month)
        const dateValue = dateYear * 12 + dateMonth;
        const startValue = startYear * 12 + startMonth;
        const endValue = endYear * 12 + endMonth;

        return (
          dateValue >= Math.min(startValue, endValue) &&
          dateValue <= Math.max(startValue, endValue)
        );
      }

      return false;
    };

    const renderMonthsForYear = (year: number) => {
      const months = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ];
      return (
        <div key={year} className="mb-4">
          <div className="text-neutral-20 font-semibold mb-2">{year}</div>
          <div className="grid grid-cols-3 gap-2">
            {months.map((month, monthIndex) => {
              const isDisabled = isDateDisabled(year, monthIndex);
              // Keep original format for comparison and storage
              const monthYear = `${month} ${year}`;
              // Use translated month for display only
              const displayMonth = t(month);

              const isSelected = fromDate === monthYear || toDate === monthYear;
              const isInRange = isDateInRange(monthYear);

              return (
                <button
                  key={`${month}-${year}`}
                  onClick={() => !isDisabled && handleDateChange(monthYear)}
                  disabled={isDisabled}
                  className={cn(
                    'py-2 px-4 rounded-md border text-sm',
                    isDisabled
                      ? 'bg-neutral-95 text-neutral-70 cursor-not-allowed opacity-50'
                      : isSelected
                      ? 'border-tangBlue-50 bg-tangBlue-95 text-tangBlue-50'
                      : isInRange
                      ? 'border-neutral-90 bg-tangBlue-95 text-tangBlue-50 hover:bg-tangBlue-95'
                      : 'text-neutral-30 hover:bg-neutral-95 border-neutral-90'
                  )}
                >
                  {displayMonth}
                </button>
              );
            })}
          </div>
        </div>
      );
    };

    // Render quarters for a given year
    const renderQuartersForYear = (year: number) => {
      const quarters = ['Q1', 'Q2', 'Q3', 'Q4'];
      return (
        <div key={year} className="mb-4">
          <div className="text-neutral-20 font-semibold mb-2">{year}</div>
          <div className="grid grid-cols-2 gap-4">
            {quarters.map((quarter, qIndex) => {
              // Calculate if this quarter contains any future months
              // Q1=0-2, Q2=3-5, Q3=6-8, Q4=9-11
              const quarterStartMonth = qIndex * 3;
              const quarterEndMonth = quarterStartMonth + 2;

              // A quarter is disabled if:
              // 1. The year is in the future, OR
              // 2. The year is current and the quarter start month is in the future
              // Note: We check start month because if quarter starts in future, whole quarter is future
              const isDisabled =
                year > currentYear ||
                (year === currentYear && quarterStartMonth >= currentMonth);
              const quarterYear = `${quarter} ${year}`;

              const isSelected =
                fromDate === quarterYear || toDate === quarterYear;
              const isInRange = isDateInRange(quarterYear);

              return (
                <button
                  key={`${quarter}-${year}`}
                  onClick={() => !isDisabled && handleDateChange(quarterYear)}
                  disabled={isDisabled}
                  className={cn(
                    'py-2 px-4 rounded-md border text-sm',
                    isDisabled
                      ? 'bg-neutral-95 text-neutral-70 cursor-not-allowed opacity-50'
                      : isSelected
                      ? 'border-tangBlue-50 bg-tangBlue-95 text-tangBlue-50'
                      : isInRange
                      ? 'border-neutral-90 bg-tangBlue-98 text-neutral-30 hover:bg-tangBlue-95'
                      : 'text-neutral-30 hover:bg-neutral-95 border-neutral-90'
                  )}
                >
                  {t(quarter)}
                </button>
              );
            })}
          </div>
        </div>
      );
    };

    return (
      <PopoverPrimitive.Portal>
        <PopoverPrimitive.Content
          ref={ref}
          align={align}
          sideOffset={sideOffset}
          className={cn(
            'z-[9999] bg-white border border-neutral-90 rounded-md shadow-md outline-none',
            'data-[state=open]:animate-in data-[state=closed]:animate-out',
            'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
            'data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
            'data-[side=bottom]:slide-in-from-top-2',
            'data-[side=left]:slide-in-from-right-2',
            'data-[side=right]:slide-in-from-left-2',
            'data-[side=top]:slide-in-from-bottom-2',
            'w-[500px] max-h-[450px]', // Default sizing
            className
          )}
          {...props}
        >
          <div className="p-3">
            <Tabs
              value={activeTab}
              onValueChange={(value) => handleTabChange(value as Tab)}
              className="w-full"
            >
              <TabsList className="flex justify-start border-b mb-4">
                {availableTabs.map((tab) => (
                  <TabsTrigger
                    key={tab}
                    value={tab}
                    className={cn(
                      'py-2 px-4 text-sm font-medium',
                      activeTab === tab
                        ? 'text-tangBlue-50 border-b-2 border-tangBlue-50'
                        : 'text-neutral-60'
                    )}
                  >
                    {t(tab)}
                  </TabsTrigger>
                ))}
              </TabsList>

              {!isSingleDatePicker && (
                <div className="text-sm text-neutral-60 mb-2">
                  <p>
                    {isSelectingFrom
                      ? t('Select starting date')
                      : t('Select ending date')}
                  </p>
                </div>
              )}

              <div className="flex justify-between mb-3 space-x-3">
                <div className="w-1/2">
                  <label className="block mb-1 text-sm font-medium text-neutral-20">
                    {t(
                      isSingleDatePicker
                        ? 'Selected Date'
                        : `Starting ${activeTab.toLowerCase()}`
                    )}
                  </label>
                  <Input
                    value={translateDateForDisplay(fromDate)}
                    readOnly
                    placeholder={t(`Select starting`)}
                    className={cn(
                      'p-2 w-full rounded-md border bg-white text-sm',
                      isSelectingFrom && !isSingleDatePicker
                        ? 'ring-1 ring-tangBlue-50 border-tangBlue-50'
                        : 'border-neutral-90'
                    )}
                  />
                </div>
                {!isSingleDatePicker && (
                  <div className="w-1/2">
                    <label className="block mb-1 text-sm font-medium text-neutral-20">
                      {t('Ending ' + activeTab.toLowerCase())}
                    </label>
                    <Input
                      value={translateDateForDisplay(toDate)}
                      readOnly
                      placeholder={t(`Select ending`)}
                      className={cn(
                        'p-2 w-full rounded-md border bg-white text-sm',
                        !isSelectingFrom
                          ? 'ring-1 ring-tangBlue-50 border-tangBlue-50'
                          : 'border-neutral-90'
                      )}
                    />
                  </div>
                )}
              </div>

              {availableTabs.includes('Month') && (
                <TabsContent value="Month">
                  <div className="overflow-y-auto max-h-[250px]">
                    {[...Array(maxYearsToShow)].map((_, idx) => {
                      const year = currentYear - idx;
                      return renderMonthsForYear(year);
                    })}
                  </div>
                </TabsContent>
              )}

              {availableTabs.includes('Quarter') && (
                <TabsContent value="Quarter">
                  <div className="overflow-y-auto max-h-[250px]">
                    {[...Array(maxYearsToShow)].map((_, idx) => {
                      const year = currentYear - idx;
                      return renderQuartersForYear(year);
                    })}
                  </div>
                </TabsContent>
              )}

              {availableTabs.includes('Year') && (
                <TabsContent value="Year">
                  <div className="grid grid-cols-1 gap-2">
                    {[...Array(maxYearsToShow)].map((_, idx) => {
                      const year = currentYear - idx;
                      const isDisabled = isDateDisabled(year);
                      const yearStr = String(year);

                      const isSelected =
                        fromDate === yearStr || toDate === yearStr;
                      const isInRange = isDateInRange(yearStr);

                      return (
                        <button
                          key={year}
                          onClick={() =>
                            !isDisabled && handleDateChange(yearStr)
                          }
                          disabled={isDisabled}
                          className={cn(
                            'py-2 px-4 rounded-md border text-sm',
                            isDisabled
                              ? 'bg-neutral-95 text-neutral-70 cursor-not-allowed opacity-50'
                              : isSelected
                              ? 'border-tangBlue-50 bg-tangBlue-95 text-tangBlue-50'
                              : isInRange
                              ? 'border-neutral-90 bg-tangBlue-98 text-neutral-30 hover:bg-tangBlue-95'
                              : 'text-neutral-30 hover:bg-neutral-95 border-neutral-90'
                          )}
                        >
                          {year}
                        </button>
                      );
                    })}
                  </div>
                </TabsContent>
              )}
            </Tabs>
          </div>
        </PopoverPrimitive.Content>
      </PopoverPrimitive.Portal>
    );
  }
);

DatePickerContent.displayName = 'DatePickerContent';

export { DatePicker, DatePickerTrigger, DatePickerContent };
export type { Tab };
