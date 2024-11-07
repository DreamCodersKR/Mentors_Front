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
import { writeBoard } from "@/api/user";
import iconBoard from "@/components/icons/iconBoard.vue";
export default {
  name: "WriteBoard",
  components: {
    iconBoard,
  },
  data() {
    return {
      title: "",
      content: "",
    };
  },
  methods: {
    submitPost() {
      if (!this.title || !this.content) {
        alert("제목과 내용을 입력해 주세요.");
        return;
      }else{
      // 게시글 등록 로직 추가
      console.log("등록할 게시글:", {
        title: this.title,
        content: this.content
      });
      writeBoard({
        title: this.title,
        content: this.content
      })
    }
    },
    attachImage() {
      // 이미지 첨부 로직 추가
      alert("이미지 첨부 기능은 아직 구현되지 않았습니다.");
    },
    goToBoard() {
      this.$router.push("/board");
    },
  },
};
</script>

<style scoped>
.write-board-container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
}

.board-title {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  cursor: pointer;
}

h2 {
  font-size: 24px;
  font-weight: bold;
  margin-left: 5px;
}

.title-input {
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
}

.content-input {
  width: 100%;
  height: 300px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  resize: none;
}

.button-group {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.submit-btn,
.image-btn {
  padding: 10px 20px;
  margin: 0 10px;
  background-color: #b3c4fc;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
}

.submit-btn:hover,
.image-btn:hover {
  background-color: #96a9f5;
}

.image-btn {
  display: flex;
  align-items: center;
}
</style>
