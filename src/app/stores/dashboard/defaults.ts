import {
  BillingResult,
  PeriodOverPeriod,
  Section,
  StoreState,
  TotalDetail,
} from './types';

const defaultPeriodOverPeriod: PeriodOverPeriod = {
  invoiceCost: 0,
  procurementCost: 0,
  profitCost: 0,
  invoiceCostPoP: 0,
  procurementCostPoP: 0,
  profitCostPoP: 0,
  options: {
    sppDiscountCost: 0,
    sppDiscountCostPoP: 0,
  },
};

const defaultSection: Section = {
  id: 'VendorOverViewSection',
  name: 'VendorOverViewSection',
  currency: 'usd',
  invoiceCost: 0,
  procurementCost: 0,
  profitCost: 0,
  options: { sppDiscountCost: 0 },
  periodOverPeriod: { ...defaultPeriodOverPeriod },
};

const defaultTotalDetail: TotalDetail = {
  totalCost: 0,
  sppDiscount: 0,
  thirdProfitItem: 0,
};

const defaultTopTenBilling: BillingResult[] = [
  {
    result: {
      id: 'yH11B',
      name: 'a44db240f724edf13bee0a6f7fc8df09d1e9564c',
      yearMonth: '2024-04',
      currency: 'usd',
      invoiceCost: 0,
      procurementCost: 0,
      profitCost: 0,
    },
  },
];

const defaultState: StoreState = {
  currency: 'usd',
  Overview: {
    id: 'OverViewSection',
    name: 'OverViewSection',
    currency: 'usd',
    invoiceCost: 0,
    procurementCost: 0,
    profitCost: 0,
    options: { sppDiscountCost: 0 },
    periodOverPeriod: { ...defaultPeriodOverPeriod },
    awsSection: { ...defaultSection },
    azureSection: { ...defaultSection },
    gcpSection: { ...defaultSection },
  },
  topTenBillingIsEmpty: true,
  topTenBilling: defaultTopTenBilling,
  // Loading states
  isOverviewLoading: false,
  isTopTenBillingLoading: false,
};

export { defaultState };
