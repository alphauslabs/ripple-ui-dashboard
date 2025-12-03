import { toast } from 'sonner';
import { StoreActions, StoreState } from './types';
import { defaultState } from './defaults';

const createActions = (set: any, get: any): StoreActions => ({
  setHostNavigateFunction: (navigate) => {
    set({ hostNavigateFunction: navigate });
    console.log('Host navigation function set in dashboard:');
  },
  hostNavigate: (path) => {
    const { hostNavigateFunction } = get();
    if (hostNavigateFunction) {
      hostNavigateFunction(path);
    } else {
      toast.error('Host navigation function is not set.');
    }
  },
  setEmail: (email) => {
    set({ email: email });
    console.log('Email set in dashboard:', email);
  },

  resetState: () => {
    set(defaultState);
  },
});

export default createActions;
