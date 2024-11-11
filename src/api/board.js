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

// 특정 게시글 상세 조회
export function getBoardDetail(boardId) {
  return apiClient
    .get(`/boardDetail/${boardId}`)
    .then((response) => response.data)
    .catch((error) => {
      console.error("게시글 상세 조회 실패", error);
      throw error;
    });
}

// 댓글 작성
export function addComment(commentData) {
  return apiClient.post(`/comments/add`, commentData);
}

// 댓글 목록조회
export function getComments(boardIdx) {
  return apiClient
    .get(`/comments/${boardIdx}`)
    .then((response) => response.data)
    .catch((error) => {
      console.error("댓글 목록 조회 실패: ", error);
      throw error;
    });
}

// 게시물 삭제
export function boardDelete(boardIdx) {
  return apiClient
    .get(`/boardDelete/${boardIdx}`)
    .then((response) => response.data)
    .catch((error) => {
      console.error("게시물 삭제 실패: ", error);
      throw error;
    });
}

// 게시글 좋아요 요청
export function likeBoard(boardIdx) {
  return apiClient
    .post(`/board/like/${boardIdx}`)
    .then((response) => response.data)
    .catch((error) => {
      console.error("좋아요 요청 실패: ", error);
      throw error;
    });
}
