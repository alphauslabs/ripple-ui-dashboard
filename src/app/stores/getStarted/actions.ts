import { StoreActions, StoreState } from './types';
import { defaultState } from './defaults';
import { LocalStorage } from '@project-ed/lib/utils';

const GET_STARTED_COOKIE_PREFIX = 'getStartedStatus_';

const createActions = (set: any, get: any): StoreActions => ({
  readGetStartedStatus: (userId?: string) => {
    // Create a key specific to the user, or use a default if userId is not provided
    const storageKey = userId
      ? `${GET_STARTED_COOKIE_PREFIX}${userId}`
      : GET_STARTED_COOKIE_PREFIX;

    const savedStatus = LocalStorage.get(storageKey);
    if (savedStatus && typeof savedStatus === 'string') {
      try {
        const parsedStatus = JSON.parse(savedStatus);
        set({ getStartedStatus: parsedStatus });
        // Log the user whose statuses we're loading
        console.log(
          `Loaded get started status for user ${userId || 'unknown'}`
        );
        return parsedStatus;
      } catch (e) {
        console.error(
          `Failed to parse getStartedStatus from localStorage for user ${
            userId || 'unknown'
          }`,
          e
        );
      }
    }
    return get().getStartedStatus;
  },

  setGetStartedStatus: (task, completed, userId?: string) => {
    // Create a key specific to the user, or use a default if userId is not provided
    const storageKey = userId
      ? `${GET_STARTED_COOKIE_PREFIX}${userId}`
      : GET_STARTED_COOKIE_PREFIX;

    set((state: StoreState) => {
      const updatedStatus = {
        ...state.getStartedStatus,
        [task]: completed,
      };

      LocalStorage.set(storageKey, JSON.stringify(updatedStatus));

      // Log the task being updated and for which user
      console.log(
        `Updated ${task} status to ${completed} for user ${userId || 'unknown'}`
      );

      return {
        getStartedStatus: updatedStatus,
      };
    });
  },

  updateMultipleStatuses: (updates, userId?: string) => {
    // Create a key specific to the user, or use a default if userId is not provided
    const storageKey = userId
      ? `${GET_STARTED_COOKIE_PREFIX}${userId}`
      : GET_STARTED_COOKIE_PREFIX;

    set((state: StoreState) => {
      const updatedStatus = {
        ...state.getStartedStatus,
        ...updates,
      };

      LocalStorage.set(storageKey, JSON.stringify(updatedStatus));

      // Log the updates being made and for which user
      console.log(
        `Updated multiple statuses for user ${userId || 'unknown'}:`,
        updates
      );

      return {
        getStartedStatus: updatedStatus,
      };
    });
  },
  areAllTasksCompleted: () => {
    const { getStartedStatus } = get();
    return Object.values(getStartedStatus).every((status) => status);
  },

  resetState: () => {
    set(defaultState);
  },
});

export default createActions;
