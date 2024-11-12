<template>
  <div class="category-detail-container">
    <h2 class="category-title">{{ categoryTitle }}</h2>
    <div class="subcategories">
      <button
        v-for="subCategory in subCategories"
        :key="subCategory.subCategoryIdx"
        @click="selectSubCategory(subCategory)"
        :class="{
          active:
            selectedSubCategory &&
            selectedSubCategory.subCategoryIdx === subCategory.subCategoryIdx,
        }"
      >
        {{ subCategory.subCategoryName }}
      </button>
    </div>
    <p class="category-description">
      {{
        selectedSubCategory
          ? "AI 매칭을 위한 질문들 입니다. 더욱 완벽한 매칭을 위해 답변을 입력해주세요. 답변이 자세할수록 매칭 정확도가 올라갑니다!"
          : "서브 카테고리를 선택하시면 질문지가 나옵니다!"
      }}
    </p>
    <transition name="fade">
      <div class="question-list" v-if="questions.length > 0">
        <div
          class="question-item"
          v-for="question in questions"
          :key="question.questionIdx"
        >
          <h3 class="question-title">Q {{ question.questionContent }}</h3>
          <textarea
            class="question-input"
            :placeholder="question.placeholder"
          ></textarea>
        </div>
      </div>
    </transition>

    <button
      v-if="userType === 'N' && selectedSubCategory"
      class="action-button matching-button"
      @click="submitMatching"
    >
      멘티등록
    </button>
    <button
      v-else-if="userType === 'Y' && selectedSubCategory"
      class="action-button chatroom-button"
      @click="createChatroom"
    >
      멘토등록
    </button>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { fetchCategorys } from "@/api/categorys";
import { fetchQuestions } from "@/api/questions";

export default {
  name: "QuestionsPage",
  props: ["categoryIdx"],

  data() {
    return {
      categoryTitle: "",
      subCategories: [],
      selectedSubCategory: null,
      questions: [],
    };
  },

  computed: {
    ...mapState({
      userType: (state) => state.user.mentorYn,
    }),
  },

  created() {
    this.checkLoginStatus();
    this.loadCategoryDetails(); // API 호출
  },

  methods: {
    async selectSubCategory(subCategory) {
      this.selectedSubCategory = subCategory;
      await this.loadQuestions(subCategory.subCategoryIdx);
    },
    submitMatching() {
      alert("매칭 요청이 완료되었습니다!");
    },
    createChatroom() {
      alert("멘토링 채팅방이 생성되었습니다!");
    },
    checkLoginStatus() {
      if (!this.$store.state.isLoggedIn) {
        alert("로그인이 필요합니다. 로그인 페이지로 이동합니다.");
        this.$router.push("/login");
      }
    },
    async loadCategoryDetails() {
      try {
        const data = await fetchCategorys(this.categoryIdx); // API 호출
        this.categoryTitle = data.categoryName; // 카테고리 제목 설정
        this.subCategories = data.subCategories; // 하위 카테고리 저장
      } catch (error) {
        alert("카테고리를 불러오는 데 실패했습니다.");
        console.error(error);
      }
    },
    async loadQuestions() {
      try {
        const data = await fetchQuestions(this.categoryIdx, this.userType); // API 호출
        this.questions = data;
      } catch (error) {
        alert("카테고리를 불러오는 데 실패했습니다.");
        console.error(error);
      }
    },
  },
};
</script>

<style scoped>
.category-detail-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}
.category-title {
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
}
.subcategories {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}
.subcategories button {
  margin: 0 10px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: white;
  transition: all 0.3s;
}
.subcategories button.active {
  background-color: #2196f3;
  color: white;
}
.category-description {
  font-size: 16px;
  color: gray;
  text-align: center;
  margin-bottom: 20px;
}
.question-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.question-item {
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
.question-title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
}
.question-input {
  width: 100%;
  height: 100px;
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ddd;
  border-radius: 5px;
  resize: none;
}
.action-button {
  display: block;
  margin: 20px auto;
  padding: 10px 20px;
  font-size: 16px;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
.action-button.matching-button {
  background-color: #2196f3;
}
.action-button.chatroom-button {
  background-color: #2196f3;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
