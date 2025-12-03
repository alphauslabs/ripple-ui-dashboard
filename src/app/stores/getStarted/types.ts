// Consistent lowercase for first letter in all task names
export type Tasks =
  | 'linkPayerAccount'
  | 'setupBillingGroup'
  | 'setupFinalizationAutomation'
  | 'setupExchangeRateAutomation';

// Use Record type for better maintainability
export type GetStartedStatuses = Record<Tasks, boolean>;

export interface StoreState {
  getStartedStatus: GetStartedStatuses;
}

export interface StoreActions {
  // Fixed typo in method name and added userId parameter
  readGetStartedStatus: (userId?: string) => GetStartedStatuses;
  // Completed method signature and added userId parameter
  setGetStartedStatus: (
    task: Tasks,
    completed: boolean,
    userId?: string
  ) => void;
  // Added utility method to update multiple statuses at once and userId parameter
  updateMultipleStatuses: (
    updates: Partial<GetStartedStatuses>,
    userId?: string
  ) => void;
  // Added method to check if all tasks are completed
  areAllTasksCompleted: () => boolean;
  resetState: () => void;
}
