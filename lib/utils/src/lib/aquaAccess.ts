import Cookies from 'js-cookie';
import { getCurrentEnvironment, getServiceUrl } from './environment';

/**
 * Creates and sets an Aqua access token cookie based on the current environment and user token
 *
 * @returns The Aqua URL that was configured, or null if environment is unsupported
 */
export function createAquaAccessToken(): string | null {
  const accessToken = Cookies.get('access_token');
  if (!accessToken) {
    console.error('No access token found in cookies for Aqua access');
    return null;
  }

  const environment = getCurrentEnvironment();
  let aquaBaseUrl: string;

  // Determine the appropriate Aqua base URL based on environment
  switch (environment) {
    case 'prod':
      aquaBaseUrl = 'https://app.alphaus.cloud/aqua/';
      break;
    case 'next':
      aquaBaseUrl = 'https://next.alphaus.cloud/aqua/';
      break;
    case 'dev':
    default:
      aquaBaseUrl = 'https://appdev.alphaus.cloud/aqua/';
      break;
  }

  // Prevent setting cookies on localhost
  if (environment === 'localhost') {
    console.warn(
      'Aqua access is not available on localhost for now. Please test on a deployed environment.'
    );
    return null;
  }

  // Dynamically determine the domain for the cookie
  const currentDomain = window.location.hostname;

  console.log(`Access token: ${accessToken}`);
  console.log(
    `Setting Aqua access token for environment: ${environment}, domain: ${currentDomain}`
  );

  // Create the mo_access_token with the current access token
  // Set cookie to expire in 1 hour (3600 seconds), with dynamic domain and specific path
  Cookies.set('mo_access_token', accessToken, {
    expires: 1 / 24,
    domain: currentDomain,
    path: '/aqua/',
  });

  console.log(`Aqua access token set for environment: ${environment}`);
  return aquaBaseUrl;
}

/**
 * Creates Aqua access token and opens Aqua in a new tab
 *
 * @returns boolean indicating success
 */
export function navigateToAqua(): boolean {
  const aquaUrl = createAquaAccessToken();

  if (!aquaUrl) {
    return false;
  }

  try {
    window.open(aquaUrl, '_blank');
    return true;
  } catch (error) {
    console.error('Failed to open Aqua URL:', error);
    return false;
  }
}
