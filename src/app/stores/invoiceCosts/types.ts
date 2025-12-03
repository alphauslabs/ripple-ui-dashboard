// Types for the Invoice Costs API (/cost/v1/invoicecosts:read)

export interface ThirdProfitItem {
  id: string;
  name: string;
  profit: number;
}

export interface TotalDetail {
  totalCost: number;
  sppDiscount: number;
  thirdProfitItem: number;
  trueUnblendedProfitRi?: number;
  trueUnblendedProfitSp?: number;
  TrueUnblended?: number;
  profitFromSupportFee?: number;
  profitFromCustomService?: number;
  profitFromAgencyFee?: number;
  profitFromMiscellaneous?: number;
}

export interface VendorSection {
  id: string;
  name: string;
  currency: string;
  yearMonth: string;
  invoiceCost: number;
  procurementCost: number;
  profitCost: number;
  totalDetail: TotalDetail;
  thirdProfitItem: ThirdProfitItem[];
}

export interface InvoiceCostResult {
  id: string;
  name: string;
  currency: string;
  yearMonth: string;
  invoiceCost: number;
  procurementCost: number;
  profitCost: number;
  totalDetail: TotalDetail;
  thirdProfitItem: ThirdProfitItem[];
  awsSection: VendorSection;
  azureSection: VendorSection;
  gcpSection: VendorSection;
}

export interface InvoiceCostResponse {
  result: InvoiceCostResult;
}

// Request parameters
export interface InvoiceCostRequest {
  startTime: string;
  endTime: string;
  toCurrency: string;
}

// Store state
export interface InvoiceCostStoreState {
  data: InvoiceCostResponse[];
  isEmpty: boolean;
  isLoading: boolean;
  error: string | null;
  lastFetched: string | null;
}

// Store actions
export interface InvoiceCostStoreActions {
  fetchInvoiceCosts: (params: InvoiceCostRequest) => Promise<void>;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  clearData: () => void;
  resetState: () => void;
}

export type InvoiceCostStore = InvoiceCostStoreState & InvoiceCostStoreActions;
