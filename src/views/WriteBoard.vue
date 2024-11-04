<template>
  <div class="write-board-container">
    <div @click="goToBoard" class="board-title">
      <icon-board />
      <h2>자유게시판</h2>
    </div>
    <input
      type="text"
      placeholder="제목을 입력해 주세요."
      class="title-input"
      v-model="title"
    />
    <textarea
      placeholder="내용을 입력하세요."
      class="content-input"
      v-model="content"
    ></textarea>
    <div class="button-group">
      <button class="submit-btn" @click="submitPost">등록</button>
      <button class="image-btn" @click="attachImage">이미지 첨부</button>
    </div>
  </div>
</template>

<script>
import iconBoard from "@/components/icons/iconBoard.vue";
export default {
  name: "WriteBoardPage",
  date() {
    return {
      title: "",
      content: "",
    };
  },
  methods: {
    goToBoard() {
      this.$router.push("board");
    },
  },
  components: {
    iconBoard,
  },
};
</script>

<style scoped>
.write-board-container {
  max-width: 1800;
  margin: 0 auto;
  padding: 20px;
}

.board-title {
  width: 170px;
  display: flex;
  cursor: pointer;
}

.title-input {
  width: 100%;
  border-radius: 5px;
  margin-bottom: 10px;
}

.content-input {
}

.button-group {
}

.submit-btn {
}

.image-btn {
}
</style>
