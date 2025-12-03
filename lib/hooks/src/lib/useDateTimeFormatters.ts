import { useTranslation } from 'react-i18next';
import { createLanguageAwareDateFormatters } from '@project-ed/lib/utils';

/**
 * React hook that provides timezone-aware date formatters
 * based on the current language setting from i18next.
 *
 * @example
 * ```tsx
 * function MyComponent() {
 *   const { formatDate } = useDateTimeFormatters();
 *
 *   return (
 *     <div>
 *       <p>Created: {formatDate.standard('2025-08-27T07:47:50.000Z')}</p>
 *       <p>Updated: {formatDate.compact('2025-08-27T10:30:00.000Z')}</p>
 *     </div>
 *   );
 * }
 * ```
 */
export const useDateTimeFormatters = () => {
  const { i18n } = useTranslation();

  return {
    formatDate: createLanguageAwareDateFormatters(i18n.language),
    currentLanguage: i18n.language,
    isJapanese: i18n.language === 'ja',
    timezone: i18n.language === 'ja' ? 'JST' : 'UTC',
  };
};
