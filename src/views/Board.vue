<template>
  <div class="board-container">
    <div class="board-title">
      <icon-board />
      <h2>자유게시판</h2>
    </div>

    <ul class="post-list">
      <li v-for="post in posts" :key="post.id" class="post-item">
        <img
          v-if="post.img == null"
          src="@/images/boardDefault.jpg"
          alt="boardImg"
          class="boardImg"
        />
        <div class="post-wrap">
          <div class="post-header">
            <h3 class="post-title">{{ post.boardTitle }}</h3>
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

export default {
  name: "BoardPage",
  components: {
    iconBoard,
  },
  data() {
    return {
      posts: [],
      currentPage: 1, // 현재페이지 1일때,
      totalPages: 1, // 총 페이지 수가 4일때,
    };
  },
  computed: {
    ...mapState(["isLoggedIn"]),
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
    changePage(page) {
      this.currentPage = page;
      // 페이지 변경에 따라 posts 데이터를 다시 불러올 수도 있음
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
    this.loadPosts(); // 컴포넌트가 생성될 때 게시글 목록 로드함
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
  margin-right: 10px;
  display: inline-block;
  margin-right: 15px;
}
.post-wrap {
  flex: 1;
}

h2 {
  font-size: 24px;
  font-weight: bold;
  margin-left: 5px;
}

button[type="button"].write-button {
  padding: 10px 20px;
  background-color: #333;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
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
}

.post-meta {
  font-size: 14px;
  color: gray;
}

.post-content {
  font-size: 16px;
  margin-top: 10px;
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
  flex: 1; /* 중앙 정렬 고정 */
  align-items: center; /* 버튼위아래 안늘어나게 고정 */
}

.pagination button {
  margin: 0 5px;
  padding: 5px 10px;
  background-color: white;
  border: 1px solid #ccc;
  cursor: pointer;
}

.pagination button.active {
  background-color: #333;
  color: white;
}
</style>
