import { AppType, EnvType } from '@project-ed/lib/constants';
import Cookies from 'js-cookie';

/**
 * Valid API environment types
 */
export const VALID_API_TYPES: EnvType[] = ['prod', 'next', 'dev', 'localhost'];

/**
 * Valid app types
 */
export const VALID_APP_TYPES: AppType[] = ['alphaus', 'mobingi'];

/**
 * Validates if the given API type is valid
 * @param apiType - The API type to validate
 * @returns true if valid, false otherwise
 */
export function isValidApiType(
  apiType: string | undefined
): apiType is EnvType {
  if (!apiType) return false;
  return VALID_API_TYPES.includes(apiType as EnvType);
}

/**
 * Validates if the given app type is valid
 * @param appType - The app type to validate
 * @returns true if valid, false otherwise
 */
export function isValidAppType(
  appType: string | undefined
): appType is AppType {
  if (!appType) return false;
  return VALID_APP_TYPES.includes(appType as AppType);
}

/**
 * Validates both API type and app type from cookies
 * @returns object with validation results and the types
 */
export function validateAuthenticationTypes(): {
  isValid: boolean;
  apiType: string | undefined;
  appType: string | undefined;
  invalidTypes: string[];
} {
  const apiType = Cookies.get('api_type');
  const appType = Cookies.get('app_type');

  const isApiTypeValid = isValidApiType(apiType);
  const isAppTypeValid = isValidAppType(appType);

  const invalidTypes: string[] = [];

  if (!isApiTypeValid && apiType) {
    invalidTypes.push(`api_type: ${apiType}`);
  }

  if (!isAppTypeValid && appType) {
    invalidTypes.push(`app_type: ${appType}`);
  }

  return {
    isValid: isApiTypeValid && isAppTypeValid,
    apiType,
    appType,
    invalidTypes,
  };
}

/**
 * Clears authentication-related cookies and tokens
 */
export function clearAuthenticationData(): void {
  // Clear auth tokens
  Cookies.remove('access_token');
  Cookies.remove('refresh_token');

  // Clear type configuration cookies
  Cookies.remove('api_type');
  Cookies.remove('app_type');

  // Clear session storage
  sessionStorage.clear();
}
