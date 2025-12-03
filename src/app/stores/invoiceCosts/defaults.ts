import { InvoiceCostStoreState, TotalDetail, VendorSection } from './types';

const defaultTotalDetail: TotalDetail = {
  totalCost: 0,
  sppDiscount: 0,
  thirdProfitItem: 0,
  trueUnblendedProfitRi: 0,
  trueUnblendedProfitSp: 0,
  TrueUnblended: 0,
  profitFromSupportFee: 0,
  profitFromCustomService: 0,
  profitFromAgencyFee: 0,
  profitFromMiscellaneous: 0,
};

const defaultVendorSection: VendorSection = {
  id: '',
  name: '',
  currency: 'usd',
  yearMonth: '',
  invoiceCost: 0,
  procurementCost: 0,
  profitCost: 0,
  totalDetail: { ...defaultTotalDetail },
  thirdProfitItem: [],
};

export const defaultInvoiceCostStoreState: InvoiceCostStoreState = {
  data: [],
  isEmpty: true,
  isLoading: false,
  error: null,
  lastFetched: null,
};
