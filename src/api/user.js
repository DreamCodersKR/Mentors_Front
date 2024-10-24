import apiClient from "./index";

export function sendTestData(data) {
  return apiClient.post("/testData", data);
}
