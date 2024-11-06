<template>
  <div class="board-detail-container">
    <!-- 게시글 상단 정보 -->
    <div class="board-header">
      <h2 class="board-title">[공지] 게시판 이용 안내</h2>
      <div class="board-meta">
        <span class="author">운영팀</span>
        <span class="date">2024.11.01 15:27</span>
        <span class="meta-info">조회수 13 | 댓글 7 | 좋아요 7</span>
      </div>
    </div>

    <!-- 게시글 내용 -->
    <div class="board-content">
      모두가 이용하는 자유게시판입니다. 여러분들의 아름다운 매너를 보여주세요!
      남을 비방하거나 악플은 삼가해주시길 바랍니다.
    </div>

    <!-- 좋아요 버튼 -->
    <div class="like-button-container">
      <button class="like-button">💜 좋아요 7</button>
    </div>

    <!-- 댓글 섹션 -->
    <div class="comment-section">
      <h3>댓글</h3>
      <ul class="comment-list">
        <li v-for="comment in comments" :key="comment.id" class="comment-item">
          <div class="comment-header">
            <span class="comment-author">{{ comment.author }}</span>
            <span class="comment-date">{{ comment.date }}</span>
          </div>
          <div class="comment-content">{{ comment.content }}</div>
        </li>
      </ul>

      <!-- 페이지네이션 -->
      <div class="pagination">
        <button
          v-for="page in totalPages"
          :key="page"
          @click="changePage(page)"
          :class="{ active: page === currentPage }"
        >
          {{ page }}
        </button>
      </div>

      <!-- 댓글 입력 -->
      <div class="comment-input-section">
        <textarea
          v-model="newComment"
          placeholder="자유게시판이 더 훈훈해지는 댓글 부탁 드립니다."
        ></textarea>
        <button @click="addComment" class="comment-submit-button">등록</button>
      </div>
    </div>
  </div>
</template>

<script>
import comments from "@/datas/CommentsExample";

export default {
  name: "BoardDetail",
  data() {
    return {
      comments: comments,
      newComment: "",
      currentPage: 1,
      totalPages: 4,
    };
  },
  methods: {
    addComment() {
      if (this.newComment.trim() === "") return;
      this.comments.push({
        id: this.comments.length + 1,
        author: "현재 사용자",
        date: new Date().toLocaleString(),
        content: this.newComment,
      });
      this.newComment = "";
    },
    changePage(page) {
      this.currentPage = page;
      // 페이지 변경 로직 추가
    },
  },
};
</script>

<style scoped>
.board-detail-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.board-header {
  border-bottom: 1px solid #ddd;
  padding-bottom: 10px;
  margin-bottom: 20px;
}

.board-title {
  font-size: 24px;
  font-weight: bold;
}

.board-meta {
  display: flex;
  gap: 10px;
  color: gray;
  font-size: 14px;
}

.board-content {
  font-size: 16px;
  margin-bottom: 20px;
  line-height: 1.6;
}

.like-button-container {
  margin-bottom: 20px;
  text-align: right;
}

.like-button {
  background-color: #e0e0ff;
  color: #333;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.comment-section {
  margin-top: 20px;
}

.comment-list {
  list-style: none;
  padding: 0;
  margin-bottom: 20px;
}

.comment-item {
  padding: 10px;
  border: 1px solid #eee;
  border-radius: 8px;
  margin-bottom: 10px;
}

.comment-header {
  display: flex;
  gap: 10px;
  font-size: 14px;
  color: gray;
  margin-bottom: 5px;
}

.comment-content {
  font-size: 16px;
}

.pagination {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.pagination button {
  background: none;
  border: 1px solid #ddd;
  padding: 5px 10px;
  margin: 0 5px;
  cursor: pointer;
}

.pagination button.active {
  background-color: #333;
  color: white;
}

.comment-input-section {
  display: flex;
  gap: 10px;
  margin-top: 20px;
}

.comment-input-section textarea {
  flex: 1;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  resize: none;
  height: 60px;
}

.comment-submit-button {
  background-color: #b3b3ff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
