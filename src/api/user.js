import apiClient from "./index";

// POST 요청 테스트 함수
export function sendPostTestData(data) {
  return apiClient
    .post("/testPostData", data)
    .then((response) => response.data)
    .catch((error) => {
      console.error("API 호출 오류:", error);
      throw error; // 필요에 따라 상위에서 처리하도록 오류 전달
    });
}

// GET 요청 테스트 함수
export function sendGetTestData(inputValue) {
  return apiClient
    .get(`/testGetData?message=${inputValue}`)
    .then((response) => response.data) // 응답 데이터 처리
    .catch((error) => {
      console.error("GET 요청 오류:", error); // 오류 콘솔 출력
      throw error; // 상위에서 오류를 처리하도록 전달
    });
}

// 로그인 API 호출 함수
export function loginUser(credentials) {
  return apiClient.post("/login", credentials);
}

// 회원가입 요청
export function sendPostJoin(data) {
  return apiClient.post("/userJoin",data);
}

//로그인 요청
export function sendPostLogin(data) {
  return apiClient.post("/userLogin",data);
}