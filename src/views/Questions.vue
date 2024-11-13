<template>
  <div class="category-detail-container">
    <div class="category-title-container">
      <component :is="iconComponent" class="category-icon"></component>
      <h2 class="category-title">{{ categoryTitle }}</h2>
    </div>
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
            v-model="question.responseContent"
          ></textarea>
        </div>
      </div>
    </transition>

    <button
      v-if="userType === 'N' && selectedSubCategory"
      class="action-button matching-button"
      @click="submitResponses"
    >
      매칭요청
    </button>
    <button
      v-else-if="userType === 'Y' && selectedSubCategory"
      class="action-button chatroom-button"
      @click="submitResponses"
    >
      멘토등록
    </button>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { fetchCategorys } from "@/api/categorys";
import { fetchQuestions } from "@/api/questions";
import { saveResponse } from "@/api/responses";
import iconEducation from "@/components/icons/iconEducation.vue";
import iconCarrier from "@/components/icons/iconCarrier.vue";
import iconIT from "@/components/icons/iconIT.vue";
import iconEconomy from "@/components/icons/iconEconomy.vue";
import iconImprovement from "@/components/icons/iconImprovement.vue";
import iconArt from "@/components/icons/iconArt.vue";
import iconEtc from "@/components/icons/iconEtc.vue";

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
  components: {
    iconEducation,
    iconCarrier,
    iconIT,
    iconEconomy,
    iconImprovement,
    iconArt,
    iconEtc,
  },

  computed: {
    ...mapState({
      userType: (state) => state.user.mentorYn,
      userEmail: (state) => state.user.userEmail,
    }),
    iconComponent() {
      // categoryIdx 값에 따라 렌더링할 아이콘 컴포넌트를 동적으로 반환
      const iconMap = {
        1: "iconEducation",
        2: "iconCarrier",
        3: "iconIT",
        4: "iconEconomy",
        5: "iconImprovement",
        6: "iconArt",
        7: "iconEtc",
      };
      return iconMap[this.categoryIdx] || "iconEtc"; // 기본 아이콘은 iconEtc
    },
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
    goToHome() {
      this.$router.push("/"); // 로고를 클릭하면 홈으로 이동
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
        alert("질문지를 불러오는 데 실패했습니다.");
        console.error(error);
      }
    },
    async submitResponses() {
      try {
        const responseDto = {
          userEmail: this.userEmail,
          responseType: this.userType,
          questions: this.questions.map((question) => ({
            parentCategoryId: this.categoryIdx,
            subCategoryName: this.selectedSubCategory.subCategoryName,
            biosTitle: question.questionContent,
            questionIdx: question.questionIdx,
            responseContent: question.responseContent, // 사용자 입력
          })),
        };

        await saveResponse(responseDto);
        alert("응답이 성공적으로 저장되었습니다!");
        this.goToHome();
      } catch (error) {
        alert("응답 저장에 실패했습니다. 다시 시도해주세요.");
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

.category-title-container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}

.category-icon {
  width: 32px;
  height: 32px;
  margin-right: 10px;
}

.category-title {
  font-size: 24px;
  font-weight: bold;
  text-align: center;
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
