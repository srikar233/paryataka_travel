import { API_BASE_URL } from '@/config/constants';

interface FetchOptions extends RequestInit {
  revalidate?: number;
  cache?: RequestCache;
}

/**
 * Centralized API fetch function
 * Handles common error handling and response parsing
 */
export async function fetchAPI<T = any>(
  endpoint: string,
  options: FetchOptions = {}
): Promise<T> {
  const {
    revalidate = 60,
    cache = 'force-cache',
    ...fetchOptions
  } = options;

  const url = endpoint.startsWith('http')
    ? endpoint
    : `${API_BASE_URL}${endpoint}`;

  try {
    const response = await fetch(url, {
      ...fetchOptions,
      next: {
        revalidate,
      },
      headers: {
        'Content-Type': 'application/json',
        ...fetchOptions.headers,
      },
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return data as T;
  } catch (error) {
    console.error(`Failed to fetch from ${url}:`, error);
    throw error;
  }
}

/**
 * Fetch with no cache
 */
export async function fetchAPINoCache<T = any>(
  endpoint: string,
  options?: Omit<FetchOptions, 'cache'>
): Promise<T> {
  return fetchAPI<T>(endpoint, {
    ...options,
    cache: 'no-store',
  });
}
