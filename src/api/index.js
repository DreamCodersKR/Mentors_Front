import axios from "axios";

const apiClient = axios.create({
  baseURL: process.env.VUE_APP_API_BASE_URL || "http://localhost:8082",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000, // 제한시간 10초
});

export default apiClient;
