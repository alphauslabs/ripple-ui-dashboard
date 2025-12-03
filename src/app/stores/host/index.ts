import { create } from 'zustand';
import { registerStoreReset } from '@project-ed/lib/utils';
import { StoreState, StoreActions } from './types';
import { defaultState } from './defaults';
import createActions from './actions';

const useHostStore = create<StoreState & StoreActions>((set, get) => ({
  ...defaultState,
  ...createActions(set, get),
}));

// Register store for reset during logout
registerStoreReset(() => {
  useHostStore.getState().resetState();
});

export { useHostStore };
