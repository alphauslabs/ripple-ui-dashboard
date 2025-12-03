export interface InvoiceGroupsResult {
  id: string; // Unique identifier
  name: string; // Name of the financial record
  yearMonth: string; // Year and month in "YYYYMM" format
  currency: string; // Currency code (e.g., "USD", "EUR")
  invoiceCost: number; // Total invoice cost
  procurementCost: number; // Total procurement cost
  profitCost: number; // Total profit cost
}
