export interface PeriodOverPeriod {
  invoiceCost: number;
  procurementCost: number;
  profitCost: number;
  invoiceCostPoP: number;
  procurementCostPoP: number;
  profitCostPoP: number;
  options: {
    sppDiscountCost: number;
    sppDiscountCostPoP: number;
  };
}

export interface SectionOptions {
  sppDiscountCost: number;
}

export interface Section {
  id?: string;
  name?: string;
  currency: string;
  invoiceCost: number;
  procurementCost: number;
  profitCost: number;
  options: SectionOptions;
  periodOverPeriod: PeriodOverPeriod;
}

export interface Overview {
  id?: string;
  name?: string;
  currency: string;
  invoiceCost: number;
  procurementCost: number;
  profitCost: number;
  options: SectionOptions;
  periodOverPeriod: PeriodOverPeriod;
  awsSection: Section;
  azureSection: Section;
  gcpSection: Section;
}

export interface TotalTabProps {
  prefix: string;
  data: Section;
}

export interface TotalDetail {
  totalCost: number;
  TrueUnblended?: number;
  trueUnblendedProfitRi?: number;
  trueUnblendedProfitSp?: number;
  sppDiscount: number;
  thirdProfitItem: number;
  profitFromSupportFee?: number;
  profitFromCustomService?: number;
  profitFromAgencyFee?: number;
  profitFromMiscellaneous?: number;
}

export interface BillingResult {
  result: {
    id: string;
    name: string;
    yearMonth: string;
    currency: string;
    invoiceCost: number;
    procurementCost: number;
    profitCost: number;
  };
}

export interface StoreState {
  Overview: Overview;
  topTenBilling: BillingResult[];
  topTenBillingIsEmpty: boolean;
  currency: string;
  // Loading states
  isOverviewLoading: boolean;
  isTopTenBillingLoading: boolean;
}

export interface StoreActions {
  getOverview: (periodRange: PeriodRange, currency: string) => Promise<void>;
  getTopTenBilling: (
    from: string,
    to: string,
    currency: string
  ) => Promise<void>;
  setCurrency: (currency: string) => void;
  resetState: () => void;
}

export interface PeriodRange {
  unit: 'UNIT_UNSPECIFIED' | 'MONTH' | 'QUARTER' | 'YEAR';
  year: number;
  starting: number;
  duration: number;
}

export interface OverviewProps {
  selectedDate: string;
}

export interface InvoiceCostProps {
  selectedDate: string;
}

export interface TopTenBillingsProps {
  selectedDate: string;
}

// Third profit item interface
export interface ThirdProfitItem {
  id: string;
  name: string;
  profit: number;
}

// Modal and data interfaces
export interface DataRow {
  name: string;
  totalInvoiceAmount: number;
  totalProcurementCost: number;
  profit: number;
  totalCost: number;
  sppDiscount: number;
  thirdProfitItem: number;
  action: string;
  currency: string;
}

export interface DataRowWithDetails extends DataRow {
  thirdProfitItemDetails?: ThirdProfitItem[];
  totalDetail?: TotalDetail;
}

export interface IModalData {
  isOpen: boolean;
  data: DataRowWithDetails | null;
}

export interface InvoiceDialogPropTypes {
  closeDialog: () => void;
  modalData: IModalData;
}
