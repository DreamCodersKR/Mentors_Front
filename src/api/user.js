import apiClient from "./index";

// POST 요청 테스트 함수
export function sendPostTestData(data) {
  return apiClient.post("/testPostData", data);
}

// GET 요청 테스트 함수
export function sendGetTestData(inputValue) {
  return apiClient.get(`/testGetData?message=${inputValue}`);
}
