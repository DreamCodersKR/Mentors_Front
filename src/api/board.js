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

// 게시글 전체 조회
export function getBoardList() {
  return apiClient
    .get(`/boardList`)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
}
