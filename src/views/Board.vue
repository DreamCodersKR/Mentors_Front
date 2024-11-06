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
            <h3 class="post-title">{{ post.title }}</h3>
            <p class="post-meta">
              No. {{ post.id }} | {{ post.author }} | {{ post.date }}
            </p>
          </div>
          <p class="post-content">{{ post.content }}</p>
          <div class="post-footer">
            <span>조회수 {{ post.views }}</span>
            <span>댓글 {{ post.comments }}</span>
            <span>좋아요 {{ post.likes }}</span>
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
      <button type = "button" class="write-button" @click="goToWritePage">글쓰기</button>
    </div>
  </div>
</template>

<script>
import boards from "@/datas/BoardExample";
import iconBoard from "@/components/icons/iconBoard.vue";

export default {
  name: "BoardPage",
  components: {
    iconBoard,
  },
  data() {
    return {
      posts: boards,
      currentPage: 1, // 현재페이지 1일때,
      totalPages: 4, // 총 페이지 수가 4일때,
    };
  },
  methods: {
    goToWritePage() {
      this.$router.push("/writeBoard");
    },
    changePage(page) {
      this.currentPage = page;
      // 페이지 변경에 따라 posts 데이터를 다시 불러올 수도 있음
    },
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
  margin-top: 5px;
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
.pagination div{
  display: flex;
  justify-content: center;
  flex: 1; /* 중앙 정렬 고정 */
  align-items: center;/* 버튼위아래 안늘어나게 고정 */
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
