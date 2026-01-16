// src/services/AuthService.ts
import axios from "axios";

const API_URL = "http://localhost:8080/api";

const login = (data: { username: string; password: string }) => {
  return axios.post(`${API_URL}/login`, data);
};

const register = (data: FormData) => {
  return axios.post(`${API_URL}/register`, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export default {
  login,
  register,
};

