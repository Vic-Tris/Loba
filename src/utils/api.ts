import axios from "axios";

// Use relative URL in production so Vercel serverless functions can be reached under /api
const baseURL = import.meta.env.VITE_API_BASE_URL || '/api';

if (import.meta.env.DEV) {
  console.log('[API] Configured base URL:', baseURL);
}

export const api = axios.create({
  baseURL,
  timeout: 30000, 
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (import.meta.env.DEV) {
      console.error('[API Error]', error.response?.status, error.response?.data || error.message);
    }
    return Promise.reject(error);
  }
);