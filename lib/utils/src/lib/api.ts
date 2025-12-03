import {
  EnvironmentConfig,
  ApiUrlKeys,
  AppType,
  EnvType,
} from '@project-ed/lib/constants';
import Cookies from 'js-cookie';
import {
  validateAuthenticationTypes,
  clearAuthenticationData,
} from './auth-validation';

/**
 * Constructs the full API URL based on the provided API type and path.
 * Validates the API and app types, and triggers logout if invalid.
 *
 * @param apiType - The type of API endpoint to construct the URL for.
 *                  It can be one of the following: 'basic', 'blue', 'login', 'auth', 'status', 'users', 'mfa'.
 * @param path - The specific path to append to the base URL.
 * @returns The full URL string for the specified API type and path.
 * @throws Will throw an error if the provided `apiType` is not recognized or if auth types are invalid.
 */
export function getApiUrl(apiType: ApiUrlKeys, path: string): string {
  const validation = validateAuthenticationTypes();

  // If validation fails, clear authentication data and trigger logout event
  if (!validation.isValid) {
    console.error('Invalid authentication types detected:', {
      invalidTypes: validation.invalidTypes,
      currentApiType: validation.apiType,
      currentAppType: validation.appType,
    });

    // Clear authentication data
    clearAuthenticationData();

    // Dispatch logout event to trigger app-wide logout
    window.dispatchEvent(
      new CustomEvent('auth:invalid-types', {
        detail: {
          reason: 'Invalid API or app type detected',
          invalidTypes: validation.invalidTypes,
        },
      })
    );

    throw new Error(
      `Invalid authentication configuration: ${validation.invalidTypes.join(
        ', '
      )}`
    );
  }

  const appType = validation.appType as AppType;
  const envType = validation.apiType as EnvType;

  // console.log('appType:', appType);
  // console.log('envType:', envType);
  switch (apiType) {
    case 'basic':
      return EnvironmentConfig.apiUrl[appType].basic[envType] + path;
    case 'blue':
      return EnvironmentConfig.apiUrl[appType].blue[envType] + path;
    case 'login':
      return EnvironmentConfig.apiUrl[appType].login[envType] + path;
    case 'auth':
      return EnvironmentConfig.apiUrl[appType].auth[envType] + path;
    case 'status':
      return EnvironmentConfig.apiUrl[appType].status[envType] + path;
    case 'users':
      return EnvironmentConfig.apiUrl[appType].users[envType] + path;
    case 'mfa':
      return EnvironmentConfig.apiUrl[appType].mfa[envType] + path;
    case 'ripple':
      return EnvironmentConfig.apiUrl[appType].ripple[envType] + path;
    default:
      throw new Error(`Unknown apiType: ${apiType}`);
  }
}
