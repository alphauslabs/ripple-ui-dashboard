import { EnvType } from '@project-ed/lib/constants';

/**
 * Determines the current environment based on the hostname
 *
 * @param hostname - The hostname to analyze (defaults to current window location)
 * @returns The environment type: 'prod', 'next', 'dev', 'localhost', or 'error'
 */
export function getCurrentEnvironment(hostname?: string): EnvType | 'error' {
  const currentHostname =
    hostname || (typeof window !== 'undefined' ? window.location.hostname : '');

  // Split the hostname into parts using '.' as the delimiter
  const splitted = currentHostname.split('.');
  const domain = splitted[1];
  const subDomain = splitted[0];

  // Check if the domain is either 'alphaus' or 'mobingi'
  if (domain === 'alphaus' || domain === 'mobingi') {
    // Map subdomains to environments
    const subdomainMap: Record<string, EnvType> = {
      app: 'prod',
      next: 'next',
      appdev: 'dev',
    };

    return subdomainMap[subDomain] || 'dev'; // Default to dev for unmapped subdomains
  }

  // Check if the subdomain contains 'localhost'
  if (/localhost/.test(subDomain)) {
    return 'localhost';
  }

  // Check if the subdomain contains 'prototype'
  if (/prototype/.test(subDomain)) {
    return 'dev';
  }

  // If none of the above conditions are met, return error
  console.error(`Can't determine environment. Hostname: ${currentHostname}`);
  return 'error';
}

/**
 * Gets the appropriate URL for a given service based on the current environment
 *
 * @param servicePath - The path/service to append to the base URL (e.g., 'aqua', 'api/v1', etc.)
 * @param environment - The environment type (optional, will auto-detect if not provided)
 * @returns The full URL for the service in the current environment, or null if environment is unsupported
 */
export function getServiceUrl(
  servicePath: string,
  environment?: EnvType | 'error'
): string | null {
  const env = environment || getCurrentEnvironment();

  // Ensure servicePath ends with '/' if it doesn't already
  const normalizedPath = servicePath.endsWith('/')
    ? servicePath
    : `${servicePath}/`;

  switch (env) {
    case 'dev':
    case 'localhost':
      return `https://appdev.alphaus.cloud/${normalizedPath}`;
    case 'next':
      return `https://next.alphaus.cloud/${normalizedPath}`;
    case 'prod':
      return `https://app.alphaus.cloud/${normalizedPath}`;
    default:
      return null; // Don't provide a fallback URL for safety
  }
}

/**
 * Gets the appropriate Aqua URL for the current environment
 *
 * @param environment - The environment type (optional, will auto-detect if not provided)
 * @returns The Aqua URL for the environment, or null if environment is unsupported
 * @deprecated Use getServiceUrl('aqua') instead for better reusability
 */
export function getAquaUrl(environment?: EnvType | 'error'): string | null {
  return getServiceUrl('aqua', environment);
}
