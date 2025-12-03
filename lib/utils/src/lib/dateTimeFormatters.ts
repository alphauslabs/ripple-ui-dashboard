/**
 * Enhanced date formatting utilities that provide timezone-aware formatting
 * based on the user's language preference.
 */

import { formatDateTimeWithTimezone } from './formatters';

/**
 * Enhanced wrapper for formatDateTimeWithTimezone that provides commonly used presets
 */
export const DateTimeFormatters = {
  /**
   * Standard datetime format with timezone indicator
   */
  standard: (dateString?: string, language: string = 'en') => {
    return formatDateTimeWithTimezone(dateString, language, {
      showTimezone: true,
      showSeconds: false,
    });
  },

  /**
   * Compact datetime format without timezone indicator
   */
  compact: (dateString?: string, language: string = 'en') => {
    return formatDateTimeWithTimezone(dateString, language, {
      showTimezone: false,
      showSeconds: false,
    });
  },

  /**
   * Detailed datetime format with seconds and timezone
   */
  detailed: (dateString?: string, language: string = 'en') => {
    return formatDateTimeWithTimezone(dateString, language, {
      showTimezone: true,
      showSeconds: true,
    });
  },

  /**
   * Log-style format with seconds but without timezone
   */
  log: (dateString?: string, language: string = 'en') => {
    return formatDateTimeWithTimezone(dateString, language, {
      showTimezone: false,
      showSeconds: true,
    });
  },
};

/**
 * Hook-like function to get formatters that are aware of current language context
 * This function returns formatters bound to the current language
 */
export const createLanguageAwareDateFormatters = (language: string) => ({
  standard: (dateString?: string) =>
    DateTimeFormatters.standard(dateString, language),
  compact: (dateString?: string) =>
    DateTimeFormatters.compact(dateString, language),
  detailed: (dateString?: string) =>
    DateTimeFormatters.detailed(dateString, language),
  log: (dateString?: string) => DateTimeFormatters.log(dateString, language),
});

export default DateTimeFormatters;
