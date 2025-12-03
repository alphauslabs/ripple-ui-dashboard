import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { registerStoreReset } from '@project-ed/lib/utils';
import { StoreState, StoreActions } from './types';
import { defaultState } from './defaults';
import createActions from './actions';

const useDashboardStore = create<StoreState & StoreActions>()(
  persist(
    (set, get) => ({
      ...defaultState,
      ...createActions(set, get),
    }),
    {
      name: 'dashboard-store',
      partialize: (state) => ({
        currency: state.currency,
      }),
    }
  )
);

// Register store for reset during logout
registerStoreReset(() => {
  useDashboardStore.getState().resetState();
});

export default useDashboardStore;
