import axios, {  } from "axios";
// AxiosRequestConfig
axios.defaults.baseURL = "";

axios.interceptors.request.use(
  async (config: any) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${token}`,
      };
    }

    // Ensure headers is not undefined
    config.headers = config.headers || {};

    return config;
  },
  (error) => Promise.reject(error)
);

export const instance = axios;
