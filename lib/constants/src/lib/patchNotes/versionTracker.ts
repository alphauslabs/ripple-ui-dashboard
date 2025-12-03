const LAST_SEEN_VERSION_KEY = 'lastSeenVersion';

/**
 * Get the last seen version from localStorage
 */
export const getLastSeenVersion = (): string | null => {
  try {
    return localStorage.getItem(LAST_SEEN_VERSION_KEY);
  } catch (error) {
    console.error('Failed to get last seen version:', error);
    return null;
  }
};

/**
 * Set the last seen version in localStorage
 */
export const setLastSeenVersion = (version: string): void => {
  try {
    localStorage.setItem(LAST_SEEN_VERSION_KEY, version);
  } catch (error) {
    console.error('Failed to set last seen version:', error);
  }
};

/**
 * Compare two semantic versions (e.g., "0.11.0" vs "0.10.5")
 * Returns:
 *  - 1 if v1 > v2 (v1 is newer)
 *  - -1 if v1 < v2 (v2 is newer)
 *  - 0 if v1 === v2 (same version)
 */
export const compareVersions = (v1: string, v2: string): number => {
  const parts1 = v1.split('.').map(Number);
  const parts2 = v2.split('.').map(Number);

  for (let i = 0; i < Math.max(parts1.length, parts2.length); i++) {
    const num1 = parts1[i] || 0;
    const num2 = parts2[i] || 0;

    if (num1 > num2) return 1;
    if (num1 < num2) return -1;
  }

  return 0;
};

/**
 * Check if there's a new version available
 * Returns true if currentVersion is newer than lastSeenVersion
 */
export const hasNewVersion = (currentVersion: string): boolean => {
  const lastSeen = getLastSeenVersion();

  // If no last seen version, consider it as new
  if (!lastSeen) {
    return true;
  }

  // Compare versions
  return compareVersions(currentVersion, lastSeen) > 0;
};
