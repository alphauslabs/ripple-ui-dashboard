import { useState, useMemo } from 'react';
import Overview from './components/Overview/Overview';
import InvoiceCost from './components/InvoiceCost/InvoiceCost';
import TopTenBillings from './components/TopTenBillings/TopTenBillings';

function Home() {

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
      <Overview 
        selectedDate={selectedDate} 
        onDateChange={setSelectedDate}
        oldestYear={oldestYear}
      />
      <InvoiceCost selectedDate={selectedDate} />
      <TopTenBillings selectedDate={selectedDate} />
    </div>
  );
}

export default Home;
