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
      v-model="boardTitle"
    />
    <textarea
      placeholder="내용을 입력하세요."
      class="content-input"
      v-model="boardContent"
    ></textarea>
    <div class="button-group">
      <button class="submit-btn" @click="submitPost">등록</button>
      <button class="image-btn" @click="attachImage">이미지 첨부</button>
    </div>
  </div>
</template>

<script>
import { writeBoard } from "@/api/board";
import { mapState } from "vuex";
import iconBoard from "@/components/icons/iconBoard.vue";
export default {
  name: "WriteBoard",
  components: {
    iconBoard,
  },
  data() {
    return {
      boardTitle: "",
      boardContent: "",
      boardLikes: 0,
      boardViews: 0,
    };
  },
  computed: {
    ...mapState({
      userEmail: (state) => state.user.userEmail,
    }),
  },
  methods: {
    submitPost() {
      if (!this.userEmail) {
        alert("로그인이 필요합니다. 로그인 페이지로 이동합니다.");
        this.$router.push("/login");
        return;
      }

      if (!this.boardTitle || !this.boardContent) {
        alert("제목과 내용을 입력해 주세요.");
        return;
      } else {
        writeBoard({
          boardTitle: this.boardTitle,
          boardContent: this.boardContent,
          boardLikes: this.boardLikes,
          boardViews: this.boardViews,
          userEmail: this.userEmail,
        })
          .then(() => {
            alert("게시글이 등록되었습니다.");
            this.$router.push("/board");
          })
          .catch((error) => {
            console.error("글쓰기 실패", error);
            alert("게시글 등록에 실패했습니다!!");
          });
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
  width: 150px;
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
  background-color: #4f46e5;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
}

.submit-btn:hover,
.image-btn:hover {
  background-color: #4338ca;
}

.image-btn {
  display: flex;
  align-items: center;
}
</style>
