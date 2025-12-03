import { StoreApi } from 'zustand';

import { axiosInstance } from '@project-ed/lib/http-service';
import { parseGrpcData, getApiUrl } from '@project-ed/lib/utils';

import { StoreState, StoreActions, PeriodRange } from './types';
import { defaultState } from './defaults';

const createActions = (set: any, get: any): StoreActions => ({
  getOverview: async (periodRange: PeriodRange, currency: string = 'usd') => {
    // Set loading state to true
    set((state: StoreState) => ({
      ...state,
      isOverviewLoading: true,
    }));

    try {
      const response = await axiosInstance.post(
        `${getApiUrl('blue', `cost/v1/invoiceoverviews:read`)}`,
        {
          // startTime: '1',
          // endTime: '2',
          usePeriodRange: true,
          periodRange,
          toCurrency: currency,
        },
        {
          headers: {
            ...axiosInstance.defaults.headers.common,
          },
        }
      );
      console.log('get overview with periodRange:', periodRange);
      set((state: StoreState) => {
        return {
          ...state,
          Overview: {
            ...response.data.result,
          },
          isOverviewLoading: false,
        };
      });
    } catch (e) {
      console.log(['error in getting overview', e]);
      // Set loading state to false on error
      set((state: StoreState) => ({
        ...state,
        isOverviewLoading: false,
      }));
      throw new Error('Error getting overview');
    }
  },

  getTopTenBilling: async (
    from: string,
    to: string,
    currency: string = 'usd'
  ) => {
    // Set loading state to true
    set((state: StoreState) => ({
      ...state,
      isTopTenBillingLoading: true,
    }));

    try {
      const response = await axiosInstance.post(
        `${getApiUrl('blue', `cost/v1/invoicegroupcosts:read`)}`,
        {
          startTime: from,
          endTime: to,
          toCurrency: currency,
          limit: 10,
        },
        {
          headers: {
            ...axiosInstance.defaults.headers.common,
          },
        }
      );
      if (response.data.trim() !== '') {
        let data = JSON.parse(
          '[' + response.data.trim().split('\n').join(',') + ']'
        );

        set((state: StoreState) => {
          return {
            ...state,
            topTenBilling: data,
            topTenBillingIsEmpty: false,
            isTopTenBillingLoading: false,
          };
        });
      } else {
        set((state: StoreState) => {
          return {
            ...state,
            topTenBillingIsEmpty: true,
            isTopTenBillingLoading: false,
          };
        });
      }
    } catch (e) {
      console.log(['error in getting topTenBilling', e]);
      // Set loading state to false on error
      set((state: StoreState) => ({
        ...state,
        isTopTenBillingLoading: false,
      }));
      throw new Error('Error getting top ten billing');
    }
  },

  setCurrency: (currency: string) => {
    set((state: StoreState) => ({
      ...state,
      currency,
    }));
  },

  resetState: () => {
    set(defaultState);
  },
});

export default createActions;
