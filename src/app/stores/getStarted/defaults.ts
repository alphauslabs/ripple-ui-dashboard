import { StoreState } from './types';

const defaultState: StoreState = {
  getStartedStatus: {
    linkPayerAccount: false,
    setupBillingGroup: false,
    setupFinalizationAutomation: false,
    setupExchangeRateAutomation: false,
  },
};

export { defaultState };
