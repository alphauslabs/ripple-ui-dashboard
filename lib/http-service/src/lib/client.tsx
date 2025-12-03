import { AxiosError } from 'axios';
import axiosInstance from './config';
import { ApiOptions } from './types';
import Cookies from 'js-cookie';
import { toast } from '@project-ed/lib/ui';

export const apiClient = async ({
  endpoint,
  method = 'GET',
  data,
  tokenRequired = false,
  baseUrl,
}: ApiOptions) => {
  try {
    const headers: { [key: string]: string } = {
      'Content-Type': 'application/json',
    };

    // Add bearer token if required
    if (tokenRequired) {
      const token = Cookies.get('access_token');
      if (token) {
        headers['Authorization'] = `Bearer ${token}`;
      }
    }

    const response = await axiosInstance({
      url: endpoint,
      baseURL: baseUrl,
      method,
      data,
      headers,
    });

    return response.data;
  } catch (error: any) {
    // Handle authentication errors centrally
    if (error?.response?.status === 401 || error?.response?.status === 403) {
      // Emit a custom event that the AuthProvider can listen to
      window.dispatchEvent(new CustomEvent('auth:unauthorized'));

      // For immediate feedback, also clear the token
      Cookies.remove('access_token');
    }

    console.error('API Error:', error?.response?.data);
    throw error; // Re-throw to allow specific error handling
  }
};
