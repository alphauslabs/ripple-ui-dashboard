import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { createInvoiceCostActions } from './actions';
import { InvoiceCostStore } from './types';

export const useInvoiceCostStore = create<InvoiceCostStore>()(
  devtools(
    (...args) => ({
      ...createInvoiceCostActions(...args),
    }),
    {
      name: 'invoice-cost-store',
      enabled: process.env.NODE_ENV === 'development',
    }
  )
);

// Export types for easy importing
export type {
  InvoiceCostStore,
  InvoiceCostStoreState,
  InvoiceCostStoreActions,
  InvoiceCostRequest,
  InvoiceCostResponse,
  InvoiceCostResult,
  TotalDetail,
  ThirdProfitItem,
  VendorSection,
} from './types';

export { defaultInvoiceCostStoreState } from './defaults';
