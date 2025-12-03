import axios, { AxiosRequestConfig } from 'axios';
import { clone, forEach, get, isEmpty } from 'lodash';
import Cookies from 'js-cookie';

export interface DynamicObject {
  [key: string]: unknown;
}

export interface RequestObject {
  url: string;
  method: 'POST' | 'GET' | 'post' | 'get' | 'DELETE' | 'delete';
  headers: DynamicObject;
  body?: DynamicObject;
}

export interface DataObject {
  limiter?: number; // limit/page size before data is being returned
  concatData?: boolean; // returns all data from start until the limit
  objectPrefix?: string; // string for returning the object on a specific object path
}

export const parseGrpcData = async (
  requestObject: RequestObject,
  dataObject: DataObject,
  onChunkReceive?: (data: DynamicObject | DynamicObject[]) => void,
  onFinish?: (data: DynamicObject[]) => void,
  onError?: (e: Error) => void
) => {
  const { url, method, headers, body } = requestObject;
  const { limiter, concatData, objectPrefix } = dataObject;

  const allData: DynamicObject[] = [];
  const limiterData: DynamicObject[] = [];
  const hasLimiter = limiter && limiter > 0;

  const token = Cookies.get('access_token');
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  const axiosConfig: AxiosRequestConfig = {
    method: method.toUpperCase() as 'POST' | 'GET' | 'DELETE',
    url,
    headers: headers as Record<string, string>,
    data: body ? JSON.stringify(body) : undefined,
    responseType: 'text', // Get full response as text
  };

  try {
    const response = await axios(axiosConfig);
    const chunkData = response.data.split(/\r?\n/); // Split by line breaks

    forEach(chunkData, (chunkStr) => {
      if (!isEmpty(chunkStr)) {
        try {
          const parsedChunk = JSON.parse(chunkStr);
          const pushedData = objectPrefix
            ? get(parsedChunk, objectPrefix)
            : parsedChunk;
          allData.push(pushedData);
          if (hasLimiter) {
            limiterData.push(pushedData);
            if (limiterData.length === limiter) {
              const newLimiterData = clone(limiterData);
              limiterData.splice(0, limiter);
              onChunkReceive?.(concatData ? allData : newLimiterData);
            }
          }
        } catch {
          console.log('Failed to parse JSON chunk');
        }
      }
    });

    if (hasLimiter && limiterData.length > 0) {
      onChunkReceive?.(concatData ? allData : limiterData);
    }

    onFinish?.(allData);
  } catch (e) {
    onError?.(e as Error);
  }
};
