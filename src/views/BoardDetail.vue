<template>
  <div class="board-detail-container">
    <div class="board-top" @click="goToBoard">
      <icon-board />
      <h2>자유게시판</h2>
    </div>
    <!-- 게시글 상단 정보 -->
    <div class="board-header">
      <h3 class="board-title">{{ board.boardTitle }}</h3>
      <div class="board-meta">
        <span class="author">{{ board.userNickname }}</span>
        <span class="date">{{ board.boardWriteDt }}</span>
        <span class="meta-info"
          >조회수 {{ board.boardViews }} | 댓글 {{ board.commentCount }} |
          좋아요 {{ board.boardLikes }}</span
        >
      </div>
    </div>

    <!-- 게시글 내용 -->
    <div class="board-content">
      {{ board.boardContent }}
    </div>

    <!-- 좋아요 버튼 -->
    <div class="like-button-container">
      <button class="like-button" @click="likeBoard">
        💜 좋아요 {{ board.boardLikes }}
      </button>
    </div>

    <!-- 댓글 섹션 -->
    <div class="comment-section">
      <h3>댓글</h3>
      <div v-if="comments.length === 0" class="no-comments">
        댓글이 없습니다. 첫 댓글을 남겨보세요!
      </div>
      <ul v-else class="comment-list">
        <li
          v-for="comment in comments"
          :key="comment.commentIdx"
          class="comment-item"
        >
          <div class="comment-header">
            <span class="comment-author">{{
              comment.userNickname || "익명"
            }}</span>
            <span class="comment-date">{{ comment.commentDate }}</span>
          </div>
          <div class="comment-content">{{ comment.commentContent }}</div>
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
import iconBoard from "@/components/icons/iconBoard.vue";
import {
  addComment,
  getBoardDetail,
  getComments,
  likeBoard,
  increaseViewCount,
} from "@/api/board";
import { mapState } from "vuex";

export default {
  name: "BoardDetail",
  data() {
    return {
      board: {},
      comments: [],
      newComment: "",
      currentPage: 1,
      totalPages: 1,
    };
  },
  created() {
    const boardId = this.$route.params.id;
    this.loadBoardDetail(boardId);
    this.loadComments(boardId);
    this.incrementViewCount(boardId);
  },
  computed: {
    ...mapState({
      isLoggedIn: (state) => state.isLoggedIn,
      userEmail: (state) => state.user.userEmail,
      userNickname: (state) => state.user.nickName,
    }),
  },
  methods: {
    addComment() {
      if (this.newComment.trim() === "") {
        alert("댓글 내용을 입력해 주세요!");
        return;
      }
      const commentData = {
        boardIdx: this.$route.params.id,
        commentContent: this.newComment,
        userEmail: this.userEmail,
      };
      addComment(commentData)
        .then(() => {
          alert("댓글이 성공적으로 등록되었습니다!");
          this.newComment = "";
          this.loadComments(this.$route.params.id);
        })
        .catch((error) => {
          console.error("댓글 등록 실패: ", error);
          alert("댓글 등록에 실패했습니다. 다시 시도해주세요.");
        });
    },
    changeTimeStamp(timestamp) {
      const [date, time] = timestamp.split("T");
      return `${date} ${time}`;
    },
    // 댓글 목록 불러오기
    loadComments(boardId) {
      getComments(boardId) // API 호출
        .then((response) => {
          if (response && response.length > 0) {
            this.comments = response.map((comment) => {
              comment.commentDate = this.changeTimeStamp(comment.commentDate);
              return comment;
            });
          } else {
            this.comments = []; // 댓글 없을 경우 초기화
          }
        })
        .catch((error) => {
          console.error("댓글 불러오기 실패: ", error);
          alert("댓글을 불러오는 데 실패했습니다. 다시 시도해주세요.");
        });
    },

    loadBoardDetail(boardId) {
      getBoardDetail(boardId)
        .then((data) => {
          this.board = data;
          this.board.boardWriteDt = this.changeTimeStamp(
            this.board.boardWriteDt
          );
        })
        .catch((error) => {
          alert("게시글을 불러오는 데 실패했습니다.");
          console.error(error);
        });
    },
    goToBoard() {
      this.$router.push("/board");
    },
    changePage(page) {
      this.currentPage = page;
      this.loadComments(this.$route.params.id);
      // 페이지 변경 로직 추가
    },
    likeBoard() {
      if (!this.isLoggedIn) {
        alert("로그인 후 이용 가능합니다.");
        return;
      }

      likeBoard(this.$route.params.id) // API 호출
        .then((response) => {
          console.log("response : ", response);

          if (response.updatedLikes !== undefined) {
            this.board.boardLikes = response.updatedLikes; // 반환된 갱신된 좋아요 수를 반영
            alert(response.message); // 서버 메시지 표시
          } else {
            alert("알 수 없는 오류가 발생했습니다. 다시 시도해주세요.");
          }
        })
        .catch((error) => {
          console.error("좋아요 처리 실패: ", error);
          alert("좋아요 처리에 실패했습니다. 다시 시도해주세요.");
        });
    },
    incrementViewCount(boardId) {
      increaseViewCount(boardId)
        .then(() => {
          console.log("조회수가 성공적으로 증가했습니다.");
        })
        .catch((error) => {
          console.error("조회수 증가 실패: ", error);
        });
    },
  },
  components: {
    iconBoard,
  },
};
</script>

<style scoped>
.board-detail-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}
.board-top {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  cursor: pointer;
}
h2 {
  margin-left: 10px;
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

.no-comments {
  text-align: center;
  color: gray;
  font-style: italic;
  margin-top: 20px;
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
  word-wrap: break-word; /* 긴 단어 줄바꿈 */
  white-space: pre-wrap; /* 공백과 줄바꿈 유지 */
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
