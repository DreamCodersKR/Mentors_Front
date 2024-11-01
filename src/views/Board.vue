<template>
  <div class="board-container">
    <h2>자유게시판</h2>

    <!-- 게시글 목록 -->
    <ul class="post-list">
      <li v-for="post in posts" :key="post.id" class="post-item">
        <div class="post-header">
          <h3 class="post-title">{{ post.title }}</h3>
          <p class="post-meta">{{ post.date }} | {{ post.author }}</p>
        </div>
        <p class="post-content">{{ post.content }}</p>
        <div class="post-footer">
          <span>조회수 {{ post.views }}</span>
          <span>댓글 {{ post.comments }}</span>
          <span>좋아요 {{ post.likes }}</span>
        </div>
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
    <!-- 글쓰기 버튼 -->
    <button class="write-button" @click="goToWritePage">글쓰기</button>
  </div>
</template>

<script>
export default {
  name: "BoardPage",
  data() {
    return {
      posts: [
        {
          id: 1,
          title: "[공지] 자유 게시판 이용 안내",
          date: "2024-11-01",
          author: "운영팀",
          content: "모두가 이용하는 자유게시판입니다. 매너를 지켜주세요!",
          views: 13,
          comments: 7,
          likes: 7,
        },
        // 다른 게시글 데이터 추가
      ],
      currentPage: 1, // 현재페이지 1일때,
      totalPages: 4, // 총 페이지 수가 4일때,
    };
  },
  methods: {
    goToWritePage() {
      this.$router.push("/write");
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
  max-width: 1400px;
  margin: 0 auto;
  padding: 20px;
}

h2 {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
}

.write-button {
  float: right;
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
  justify-content: center;
  margin-top: 20px;
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
