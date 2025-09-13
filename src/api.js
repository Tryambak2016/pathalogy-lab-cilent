import axios from "axios";

export function useApi() {
  const api = axios.create({ baseURL: import.meta.env.VITE_API_BASE_URL });

  api.interceptors.request.use(async (config) => {
    const token = localStorage.getItem("token");
    console.log(token);
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  });

  return api;
}
