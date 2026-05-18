import axios from "axios";

const baseURL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:4000/api/v1';

// Log API configuration in development
if (import.meta.env.DEV) {
  console.log('[API] Configured base URL:', baseURL);
}

export const api = axios.create({
  baseURL,
  timeout: 30000, // 30 second timeout
});

// Add response interceptor for error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Log errors in development
    if (import.meta.env.DEV) {
      console.error('[API Error]', error.response?.status, error.response?.data || error.message);
    }
    
    // Handle specific error cases
    if (error.response?.status === 404) {
      console.warn('[API] Resource not found');
    } else if (error.response?.status === 500) {
      console.error('[API] Server error - contact support');
    } else if (error.code === 'ECONNABORTED') {
      console.error('[API] Request timeout');
    }
    
    return Promise.reject(error);
  }
);

