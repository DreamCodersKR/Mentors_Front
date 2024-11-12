import apiClient from "./index";

export function saveResponse(responseDto) {
  return apiClient
    .post("/responses/add", responseDto)
    .then((response) => response.data)
    .catch((error) => {
      console.error("API 호출 오류:", error);
      throw error;
    });
}
