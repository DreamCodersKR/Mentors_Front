import apiClient from "./index";

// 게시글 작성 요청
export function writeBoard(data) {
  return apiClient
    .post("/writeBoard", data)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
}
