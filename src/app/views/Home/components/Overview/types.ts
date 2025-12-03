export interface InvoiceOverviewResult {
  id: string;
  name: string;
  currency: string;
  yearMonth: string;
  invoiceCost: number;
  procurementCost: number;
  profitCost: number;
  options: FinancialOptions;
  periodOverPeriod: PeriodOverPeriod;
  awsSection: CloudSection;
  azureSection: CloudSection;
  gcpSection: CloudSection;
}
export interface FinancialOptions {
  sppDiscountCost: number;
}
export interface PeriodOverPeriod {
  invoiceCost: number;
  procurementCost: number;
  profitCost: number;
  invoiceCostPoP: number; // period-over-period invoice cost
  procurementCostPoP: number; // period-over-period procurement cost
  profitCostPoP: number; // period-over-period profit cost
  options: PeriodOptions;
}
export interface PeriodOptions {
  sppDiscountCost: number; // current period discount cost
  sppDiscountCostPoP: number; // period-over-period discount cost
}
export interface CloudSection {
  id: string;
  name: string;
  currency: string;
  invoiceCost: number;
  procurementCost: number;
  profitCost: number;
  options: FinancialOptions;
  periodOverPeriod: PeriodOverPeriod;
}
