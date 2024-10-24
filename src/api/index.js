import axios from "axios";
const apiClient = axios.create({
  baseURL: "http://localhost:8082",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000, // 제한시간 10초
});

export default apiClient;
