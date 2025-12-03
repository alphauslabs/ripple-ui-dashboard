export const postalCodeFormatter = (
  postalCode: string,
  country: string
): string => {
  switch (country) {
    case 'Japan': {
      // Remove non-digit characters and limit to 7 digits
      const sanitizedInput = postalCode.replace(/\D/g, '').slice(0, 7);

      // Format as NNN-NNNN
      return `${sanitizedInput.slice(0, 3)}-${sanitizedInput.slice(3)}`;
    }
    default:
      return postalCode;
  }
};

export const phoneNumberFormatter = (
  phoneNumber: string,
  country: string
): string => {
  // Remove all non-digit characters
  const digits = phoneNumber.replace(/\D/g, '');

  switch (country) {
    case 'Japan': {
      // Japanese phone numbers: 0X-XXXX-XXXX or 0XX-XXXX-XXXX
      if (digits.length === 0) return '';
      if (digits.length <= 3) return digits;
      if (digits.length <= 7) {
        return `${digits.slice(0, 3)}-${digits.slice(3)}`;
      }
      if (digits.length <= 11) {
        if (digits.startsWith('0')) {
          // Mobile: 090-XXXX-XXXX or Landline: 0XX-XXXX-XXXX
          const areaCode =
            digits.startsWith('090') ||
            digits.startsWith('080') ||
            digits.startsWith('070')
              ? 3
              : digits.length >= 10
              ? 3
              : 2;
          return `${digits.slice(0, areaCode)}-${digits.slice(
            areaCode,
            areaCode + 4
          )}-${digits.slice(areaCode + 4, 11)}`;
        }
      }
      return digits.slice(0, 11);
    }
    case 'USA': {
      // US phone numbers: (XXX) XXX-XXXX
      if (digits.length === 0) return '';
      if (digits.length <= 3) return `(${digits}`;
      if (digits.length <= 6) {
        return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
      }
      if (digits.length <= 10) {
        return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(
          6,
          10
        )}`;
      }
      return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(
        6,
        10
      )}`;
    }
    case 'Singapore': {
      // Singapore phone numbers: XXXX XXXX
      if (digits.length === 0) return '';
      if (digits.length <= 4) return digits;
      if (digits.length <= 8) {
        return `${digits.slice(0, 4)} ${digits.slice(4, 8)}`;
      }
      return digits.slice(0, 8);
    }
    case 'Malaysia': {
      // Malaysian phone numbers: 01X-XXX XXXX
      if (digits.length === 0) return '';
      if (digits.length <= 3) return digits;
      if (digits.length <= 6) {
        return `${digits.slice(0, 3)}-${digits.slice(3)}`;
      }
      if (digits.length <= 10) {
        return `${digits.slice(0, 3)}-${digits.slice(3, 6)} ${digits.slice(
          6,
          10
        )}`;
      }
      return digits.slice(0, 10);
    }
    case 'India': {
      // Indian phone numbers: XXXXX XXXXX
      if (digits.length === 0) return '';
      if (digits.length <= 5) return digits;
      if (digits.length <= 10) {
        return `${digits.slice(0, 5)} ${digits.slice(5, 10)}`;
      }
      return digits.slice(0, 10);
    }
    case 'Indonesia': {
      // Indonesian phone numbers: 08XX-XXXX-XXXX
      if (digits.length === 0) return '';
      if (digits.length <= 4) return digits;
      if (digits.length <= 8) {
        return `${digits.slice(0, 4)}-${digits.slice(4)}`;
      }
      if (digits.length <= 12) {
        return `${digits.slice(0, 4)}-${digits.slice(4, 8)}-${digits.slice(
          8,
          12
        )}`;
      }
      return digits.slice(0, 12);
    }
    default: {
      // Generic international format with spaces every 3-4 digits
      if (digits.length === 0) return '';
      if (digits.length <= 3) return digits;
      if (digits.length <= 6) return `${digits.slice(0, 3)} ${digits.slice(3)}`;
      if (digits.length <= 9)
        return `${digits.slice(0, 3)} ${digits.slice(3, 6)} ${digits.slice(6)}`;
      return `${digits.slice(0, 3)} ${digits.slice(3, 6)} ${digits.slice(
        6,
        9
      )} ${digits.slice(9, 12)}`;
    }
  }
};

export const currencyFormatter = (currency: string): string => {
  switch (currency) {
    case 'jpy':
      return 'JPY';
    case 'usd':
      return 'USD';
    default:
      return currency;
  }
};

export const currencySymbol = (currency: string): string => {
  switch (currency.toUpperCase()) {
    case 'JPY':
      return '¥';
    case 'USD':
      return '$';
    case 'IDR':
      return 'Rp';
    default:
      return currency;
  }
};

export const discountTargetUsageFormatter = (value: string): string => {
  switch (value) {
    case 'cloudpayonly':
      return 'Cloud usage fee only';
    case 'cloudpaywithfee':
      return 'Cloud usage fee + Maintenance service';
    default:
      return value;
  }
};

export const supportFeeTypeFormatter = (value: string): string => {
  switch (value) {
    case 'percent':
      return 'Uniform%';
    case 'fix':
      return 'Fixed fee';
    case 'aws_developer':
      return 'Developer';
    case 'aws_business':
      return 'Business';
    case 'aws_enterprise':
      return 'Enterprise';
    case 'no_support':
      return 'No Support';
    case 'aws_enterprise_on_ramp':
      return 'Enterprise On-Ramp';
    default:
      return value;
  }
};

export const substitutionFeeTypeFormatter = (value: string): string => {
  switch (value) {
    case 'percent':
      return 'Percentage to usage fee (%)';
    case 'fix':
      return 'Fixed fee';
    case 'automatic':
      return 'Percentage or fixed amount, whichever is greater';
    case 'usagetable':
      return 'Price table';
    default:
      return value;
  }
};

export const providerFormatter = (value: string): string => {
  switch (value) {
    case 'AWS':
      return 'aws';
    case 'MS Azure':
      return 'azure';
    case 'Azure':
      return 'azure';
    default:
      return 'gcp';
  }
};

export const currencySymbolFormatter = (currency: string): string => {
  switch (currency) {
    case 'jpy':
      return '¥';
    default:
      return '$';
  }
};

export const invoiceCurrencyFormatter = (currency: string): string => {
  switch (currency) {
    case 'jpy':
      return 'Japanese Yen';
    case 'usd':
      return 'USD';
    default:
      return currency;
  }
};

export const languageFormatter = (value: string): string => {
  switch (value) {
    case 'jp':
    case 'ja':
      return 'Japanese';
    case 'en':
      return 'English';
    default:
      return value;
  }
};

export const rateReferenceFormatter = (value: string): string => {
  switch (value) {
    case 'billingGroup':
      return 'Billing group level';
    case 'payer':
      return 'Payer level';
    default:
      return value;
  }
};

export const calculationTypeFormatter = (value: string): string => {
  switch (value) {
    case 'true_unblended_cost':
      return 'True Unblended';
    case 'unblended_cost':
      return 'Unblended';
    default:
      return value;
  }
};

export const parseDate = (sdate: string): string => {
  const monthMap: Record<string, string> = {
    Jan: '01',
    Feb: '02',
    Mar: '03',
    Apr: '04',
    May: '05',
    Jun: '06',
    Jul: '07',
    Aug: '08',
    Sep: '09',
    Oct: '10',
    Nov: '11',
    Dec: '12',
    '1月': '01',
    '2月': '02',
    '3月': '03',
    '4月': '04',
    '5月': '05',
    '6月': '06',
    '7月': '07',
    '8月': '08',
    '9月': '09',
    '10月': '10',
    '11月': '11',
    '12月': '12',
  };

  const quarterMap: Record<string, string> = {
    Q1: '01',
    Q2: '04',
    Q3: '07',
    Q4: '10',
  };

  // Extract start date (before " - " if range is given)
  const startDate = sdate.split(' - ')[0].trim();
  const parts = startDate.split(' ');

  let year = '';
  let month = '01'; // Default to January if not provided

  if (parts.length === 2) {
    const [part1, part2] = parts;
    if (monthMap[part1]) {
      // Format: "Jan 2025"
      year = part2;
      month = monthMap[part1];
    } else if (quarterMap[part1]) {
      // Format: "Q1 2025"
      year = part2;
      month = quarterMap[part1];
    }
  } else if (parts.length === 1) {
    // Format: "2025"
    year = parts[0];
  }

  return `${year}${month}01`; // Always return as YYYYMMDD
};

/**
 * Convert DatePicker format (e.g., "Jul 2025") to API year-month format (e.g., "2025-07")
 * This is specifically for APIs that expect YYYY-MM format instead of YYYYMMDD
 */
export const parseApiYearMonth = (sdate: string): string => {
  const monthMap: Record<string, string> = {
    Jan: '01',
    Feb: '02',
    Mar: '03',
    Apr: '04',
    May: '05',
    Jun: '06',
    Jul: '07',
    Aug: '08',
    Sep: '09',
    Oct: '10',
    Nov: '11',
    Dec: '12',
    '1月': '01',
    '2月': '02',
    '3月': '03',
    '4月': '04',
    '5月': '05',
    '6月': '06',
    '7月': '07',
    '8月': '08',
    '9月': '09',
    '10月': '10',
    '11月': '11',
    '12月': '12',
  };

  const quarterMap: Record<string, string> = {
    Q1: '01',
    Q2: '04',
    Q3: '07',
    Q4: '10',
  };

  // Extract start date (before " - " if range is given)
  const startDate = sdate.split(' - ')[0].trim();
  const parts = startDate.split(' ');

  let year = '';
  let month = '01'; // Default to January if not provided

  if (parts.length === 2) {
    const [part1, part2] = parts;
    if (monthMap[part1]) {
      // Format: "Jan 2025"
      year = part2;
      month = monthMap[part1];
    } else if (quarterMap[part1]) {
      // Format: "Q1 2025"
      year = part2;
      month = quarterMap[part1];
    }
  } else if (parts.length === 1) {
    // Format: "2025"
    year = parts[0];
  }

  return `${year}-${month}`; // Return as YYYY-MM for APIs
};

/**
 * Helper function to get the last day of a month
 */
const getLastDayOfMonth = (year: number, month: number): string => {
  const lastDay = new Date(year, month, 0).getDate();
  return `${year}${month.toString().padStart(2, '0')}${lastDay
    .toString()
    .padStart(2, '0')}`;
};

/**
 * Parse a date selection (single or range) from the DatePicker and return start/end dates
 * Handles quarters and years properly to show complete date ranges
 *
 * @param selectedDate - The date string from DatePicker (e.g., "Q1 2023", "Q1 2023 - Q3 2023", "2021-2023", "Jan 2023 - Mar 2023")
 * @returns Object with startDate and endDate in YYYYMMDD format
 */
export const parseDateRange = (
  selectedDate: string
): { startDate: string; endDate: string } => {
  if (!selectedDate) {
    return { startDate: '', endDate: '' };
  }

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
    '1月': 1,
    '2月': 2,
    '3月': 3,
    '4月': 4,
    '5月': 5,
    '6月': 6,
    '7月': 7,
    '8月': 8,
    '9月': 9,
    '10月': 10,
    '11月': 11,
    '12月': 12,
  };

  // Handle date ranges
  if (selectedDate.includes(' - ')) {
    // Space-separated ranges like "Q1 2023 - Q3 2023" or "Jan 2023 - Mar 2023"
    const [startPart, endPart] = selectedDate.split(' - ').map((s) => s.trim());
    const start = parseSingleDate(startPart, true); // true = get start of period
    const end = parseSingleDate(endPart, false); // false = get end of period
    return { startDate: start, endDate: end };
  } else if (selectedDate.includes('-') && /^\d{4}-\d{4}$/.test(selectedDate)) {
    // Year ranges like "2021-2023"
    const [startYear, endYear] = selectedDate
      .split('-')
      .map((y) => parseInt(y));
    return {
      startDate: `${startYear}0101`, // January 1st of start year
      endDate: getLastDayOfMonth(endYear, 12), // December 31st of end year
    };
  } else {
    // Single selection
    const start = parseSingleDate(selectedDate, true);
    const end = parseSingleDate(selectedDate, false);
    return { startDate: start, endDate: end };
  }

  function parseSingleDate(dateStr: string, isStart: boolean): string {
    const parts = dateStr.trim().split(' ');

    if (parts.length === 2) {
      const [part1, part2] = parts;
      const year = parseInt(part2);

      // Quarter selection (Q1, Q2, Q3, Q4)
      if (part1.startsWith('Q')) {
        const quarter = parseInt(part1.substring(1));
        if (isStart) {
          // Start of quarter: first day of first month
          const startMonth = (quarter - 1) * 3 + 1;
          return `${year}${startMonth.toString().padStart(2, '0')}01`;
        } else {
          // End of quarter: last day of last month
          const endMonth = quarter * 3;
          return getLastDayOfMonth(year, endMonth);
        }
      } else if (monthMap[part1]) {
        // Month selection like "Jan 2023"
        const month = monthMap[part1];
        if (isStart) {
          return `${year}${month.toString().padStart(2, '0')}01`;
        } else {
          return getLastDayOfMonth(year, month);
        }
      }
    } else if (parts.length === 1) {
      // Year selection like "2023"
      const year = parseInt(parts[0]);
      if (isStart) {
        return `${year}0101`; // January 1st
      } else {
        return getLastDayOfMonth(year, 12); // December 31st
      }
    }

    // Fallback to original parseDate logic
    return parseDate(dateStr);
  }
};

/**
 * Formats a date string with timezone awareness based on language setting.
 * Shows JST when language is Japanese, UTC otherwise.
 *
 * @param dateString - The date string to format (ISO format)
 * @param language - Current language ('ja' for Japanese, 'en' for English)
 * @param options - Additional formatting options
 * @returns Formatted date string with timezone indicator
 */
export const formatDateTimeWithTimezone = (
  dateString?: string,
  language: string = 'en',
  options: {
    showSeconds?: boolean;
    showTimezone?: boolean;
    format?: 'short' | 'long';
  } = {}
): string => {
  if (!dateString) return '-';

  const {
    showSeconds = false,
    showTimezone = true,
    format = 'short',
  } = options;

  try {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return '-';

    // Determine timezone based on language
    const timeZone = language === 'ja' ? 'Asia/Tokyo' : 'UTC';
    const timeZoneDisplay = language === 'ja' ? 'JST' : 'UTC';

    // Format options for the date part
    const dateFormatOptions: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long', // Use long month names for both languages
      day: 'numeric',
      timeZone,
    };

    // Format options for the time part - same format for both languages
    const timeFormatOptions: Intl.DateTimeFormatOptions = {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true, // Use 12-hour format for both languages
      timeZone,
    };

    if (showSeconds) {
      timeFormatOptions.second = '2-digit';
    }

    // Use English locale for both languages to get "August" format
    const locale = 'en-US';

    // Format date and time separately
    const formattedDatePart = date.toLocaleDateString(
      locale,
      dateFormatOptions
    );
    const formattedTimePart = date.toLocaleTimeString(
      locale,
      timeFormatOptions
    );

    // Same format for both languages - only timezone differs
    let formattedDate = `${formattedDatePart} at ${formattedTimePart}`;

    // Add timezone indicator if requested
    if (showTimezone) {
      formattedDate += ` (${timeZoneDisplay})`;
    }

    return formattedDate;
  } catch (error) {
    console.error('Error formatting date:', error);
    return '-';
  }
};
