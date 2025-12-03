/**
 * Store Reset Utility for handling logout cleanup
 * This utility helps reset Zustand stores across micro-frontends during logout
 */

type StoreResetFunction = () => void;

// Registry to keep track of all store reset functions
const storeResetRegistry = new Set<StoreResetFunction>();

/**
 * Register a store reset function to be called during logout
 * @param resetFn Function that resets a store to its default state
 */
export const registerStoreReset = (
  resetFn: StoreResetFunction
): (() => void) => {
  storeResetRegistry.add(resetFn);

  // Return unregister function
  return () => {
    storeResetRegistry.delete(resetFn);
  };
};

/**
 * Reset all registered stores
 * This should be called during logout to clear all persistent data
 */
export const resetAllStores = (): void => {
  storeResetRegistry.forEach((resetFn) => {
    try {
      resetFn();
    } catch (error) {
      console.warn('Error resetting store:', error);
    }
  });
};

/**
 * Initialize store reset listener
 * This should be called in each micro-frontend app to listen for logout events
 */
export const initializeStoreResetListener = (): (() => void) => {
  const handleLogoutCleanup = (event: Event) => {
    const customEvent = event as CustomEvent;
    if (customEvent.detail?.clearStores) {
      resetAllStores();
    }
  };

  // Listen for the logout cleanup event
  window.addEventListener('auth:logout:cleanup', handleLogoutCleanup);

  // Return cleanup function
  return () => {
    window.removeEventListener('auth:logout:cleanup', handleLogoutCleanup);
  };
};
