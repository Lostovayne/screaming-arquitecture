import axios from "axios";
import { useAuthStore } from "../store/auth.store";

const AuthApi = axios.create({
  baseURL: "http://localhost:3000/api/auth",
});

// Interceptors

AuthApi.interceptors.request.use((config) => {
  const token = useAuthStore.getState().token;

  if (token) {
    config.headers.Authorization! = `Bearer ${token}`;
  }

  return config;
});

export { AuthApi };
