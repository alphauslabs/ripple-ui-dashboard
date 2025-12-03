export interface StreamingDataOptions {
  /**
   * Optional. The UTC date to start streaming data from.
   * If not set, the first day of the current month will be used.
   * Format: yyyymmdd. The oldest supported date is 20240101.
   */
  startTime?: string;
  /**
   * Optional. The UTC date to end the streaming data.
   * If not set, the current date will be used.
   * Format: yyyymmdd.
   */
  endTime?: string;
  /**
   * Optional. Set to US dollars (USD) by default.
   * You can set it to the desired three-letter currency symbol
   * (i.e. JPY, EUR, GBP), or a custom exchange rate like JPY:110.622.
   */
  toCurrency?: string;
}
