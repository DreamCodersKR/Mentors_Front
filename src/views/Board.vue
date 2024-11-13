<template>
  <div class="board-container">
    <div class="board-title">
      <icon-board />
      <h2>멘토링후기</h2>
    </div>
    <div v-if="posts.length === 0" class="no-posts">
      <div class="no-posts-content">
        <PenSquare class="no-posts-icon" />
        <p>게시글이 없습니다. 첫 번째 글을 작성해보세요!</p>
      </div>
    </div>

    <ul v-else class="post-list">
      <li v-for="post in posts" :key="post.boardIdx" class="post-item">
        <img
          v-if="post.img == null"
          src="@/images/boardDefault.jpg"
          alt="boardImg"
          class="boardImg"
          @click="goToDetail(post.boardIdx)"
        />
        <div class="post-wrap">
          <div class="post-header">
            <h3 class="post-title" @click="goToDetail(post.boardIdx)">
              {{ post.boardTitle }}
            </h3>
            <p class="post-meta">
              No. {{ post.boardIdx }} | {{ post.userNickname }} |
              {{ post.boardWriteDt }}
            </p>
          </div>
          <p class="post-content">{{ post.boardContent }}</p>
          <div class="post-footer">
            <span>조회수 {{ post.boardViews }}</span>
            <span>댓글 {{ post.commentCount }}</span>
            <span>좋아요 {{ post.boardLikes }}</span>
          </div>
        </div>
      </li>
    </ul>

    <div class="pagination">
      <div>
        <button
          v-for="page in totalPages"
          :key="page"
          @click="changePage(page)"
          :class="{ active: page === currentPage }"
        >
          {{ page }}
        </button>
      </div>
      <button type="button" class="write-button" @click="goToWritePage">
        글쓰기
      </button>
    </div>
  </div>
</template>

<script>
import iconBoard from "@/components/icons/iconBoard.vue";
import { mapState } from "vuex";
import { getBoardList } from "@/api/board";
import { PenSquare } from "lucide-vue-next";

export default {
  name: "BoardPage",
  components: {
    iconBoard,
    PenSquare,
  },
  data() {
    return {
      posts: [],
      currentPage: 1,
      totalPages: 1,
    };
  },
  computed: {
    ...mapState({
      isLoggedIn: (state) => state.isLoggedIn,
      userNickname: (state) => state.user.nickName,
    }),
  },
  methods: {
    goToWritePage() {
      if (!this.isLoggedIn) {
        alert("로그인이 필요합니다. 로그인 페이지로 이동합니다.");
        this.$router.push("/login");
      } else {
        this.$router.push("/writeBoard");
      }
    },
    goToDetail(boardIdx) {
      this.$router.push({ name: "boardDetail", params: { id: boardIdx } });
    },
    changePage(page) {
      this.currentPage = page;
      this.loadPosts();
    },
    changeTimeStamp(timestamp) {
      const [date, time] = timestamp.split("T");
      return `${date} ${time}`;
    },
    loadPosts() {
      getBoardList()
        .then((data) => {
          const responseData = data;
          responseData.map((board) => {
            board.boardWriteDt = this.changeTimeStamp(board.boardWriteDt);
          });
          console.log("responseData : ", responseData);
          this.posts = responseData;
        })
        .catch((error) => {
          console.log("게시글 목록 불러오기 실패 : ", error);
          alert("게시글 목록을 불러오지 못했습니다.");
        });
    },
  },
  created() {
    this.loadPosts();
  },
};
</script>

<style scoped>
.board-container {
  max-width: 1800px;
  margin: 0 auto;
  padding: 20px;
}

.board-title {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  cursor: pointer;
}

.boardImg {
  width: 160px;
  height: 200px;
  margin-right: 15px;
  cursor: pointer;
}

.post-wrap {
  flex: 1;
}

h2 {
  font-size: 24px;
  font-weight: bold;
  margin-left: 5px;
}

.no-posts {
  background: linear-gradient(135deg, #f0f4ff 0%, #e0e7ff 100%);
  border-radius: 12px;
  padding: 40px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 1000px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
}

.no-posts-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.no-posts-icon {
  width: 64px;
  height: 64px;
  color: #4f46e5;
  margin-bottom: 20px;
}

.no-posts p {
  font-size: 18px;
  color: #4b5563;
  margin-bottom: 20px;
}

button[type="button"].write-button {
  padding: 10px 20px;
  background-color: #4f46e5;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  transition: background-color 0.3s ease;
}

button[type="button"].write-button:hover {
  background-color: #4338ca;
}

.post-list {
  list-style: none;
  padding: 0;
  margin-top: 20px;
}

.post-item {
  padding: 20px;
  border-bottom: 1px solid #ddd;
  display: flex;
  align-items: flex-start;
}

.post-header {
  display: flex;
  justify-content: space-between;
}

.post-title {
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
}

.post-meta {
  font-size: 14px;
  color: gray;
}

.post-content {
  font-size: 16px;
  margin-top: 10px;
  max-height: 150px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}

.post-footer {
  font-size: 14px;
  color: gray;
  display: flex;
  gap: 10px;
  margin-top: 10px;
}

.pagination {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.pagination div {
  display: flex;
  justify-content: center;
  flex: 1;
  align-items: center;
}

.pagination button {
  margin: 0 5px;
  padding: 5px 10px;
  background-color: white;
  border: 1px solid #ccc;
  cursor: pointer;
}

.pagination button.active {
  background-color: #4f46e5;
  color: white;
}
</style>
