import { StateCreator } from 'zustand';
import { axiosInstance } from '@project-ed/lib/http-service';
import { getApiUrl } from '@project-ed/lib/utils';
import {
  InvoiceCostStore,
  InvoiceCostRequest,
  InvoiceCostResponse,
} from './types';

export const createInvoiceCostActions: StateCreator<
  InvoiceCostStore,
  [],
  [],
  InvoiceCostStore
> = (set, get) => ({
  // Default state
  data: [],
  isEmpty: true,
  isLoading: false,
  error: null,
  lastFetched: null,

  // Actions
  fetchInvoiceCosts: async (params: InvoiceCostRequest) => {
    set({ isLoading: true, error: null });

    try {
      console.log('Invoice cost request params:', params);

      const response = await axiosInstance.post(
        `${getApiUrl('blue', 'cost/v1/invoicecosts:read')}`,
        params,
        {
          headers: {
            ...axiosInstance.defaults.headers.common,
          },
        }
      );

      // Debug log to check the response
      console.log('API Response type:', typeof response.data);

      // Explicitly type parsedData
      let parsedData: InvoiceCostResponse[] = [];

      if (typeof response.data === 'string') {
        // If it's a string, process it as before
        if (response.data.trim() !== '') {
          parsedData = JSON.parse(
            '[' + response.data.trim().split('\n').join(',') + ']'
          );
        }
      } else if (Array.isArray(response.data)) {
        // If it's already an array
        parsedData = response.data;
      } else if (response.data && typeof response.data === 'object') {
        // If it's a single object, wrap it in an array
        parsedData = [response.data];
      }

      console.log('Parsed data:', parsedData);
      console.log('Parsed data length:', parsedData.length);

      set({
        data: parsedData,
        isEmpty: parsedData.length === 0,
        isLoading: false,
        error: null,
        lastFetched: new Date().toISOString(),
      });
    } catch (error) {
      console.error('Error fetching invoice costs:', error);
      set({
        data: [],
        isEmpty: true,
        isLoading: false,
        error:
          error instanceof Error ? error.message : 'Unknown error occurred',
        lastFetched: null,
      });
    }
  },

  setLoading: (loading: boolean) => {
    set({ isLoading: loading });
  },

  setError: (error: string | null) => {
    set({ error });
  },

  clearData: () => {
    set({
      data: [],
      isEmpty: true,
      error: null,
      lastFetched: null,
    });
  },

  resetState: () => {
    set({
      data: [],
      isEmpty: true,
      isLoading: false,
      error: null,
      lastFetched: null,
    });
  },
});
