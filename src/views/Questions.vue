<template>
  <div class="category-detail-container">
    <h2 class="category-title">{{ categoryTitle }}</h2>
    <p class="category-description">
      AI 매칭을 위한 질문들 입니다. 더욱 완벽한 매칭을 위해 답변을 입력해주세요.
      답변이 자세할수록 매칭 정확도가 올라갑니다!
    </p>
    <div class="question-list">
      <div class="question-item" v-for="index in 3" :key="index">
        <h3 class="question-title">
          Q {{ dummyQuestions[index - 1].content }}
        </h3>
        <textarea
          class="question-input"
          :placeholder="dummyQuestions[index - 1].placeholder"
        ></textarea>
      </div>
    </div>
    <button class="action-button matching-button">Matching</button>
    <button class="action-button chatroom-button">멘토링 채팅방 만들기</button>
  </div>
</template>

<script>
export default {
  name: "QuestionsPage",
  props: ["categoryIdx"],
  data() {
    return {
      dummyQuestions: [
        {
          content:
            "멘티님께서 학업/교육 분야에서 쌓은 경험을 간단히 알려주실 수 있나요?",
          placeholder:
            "직무 경험, 학습 경험, 참여했던 프로젝트 등을 간단히 입력해주세요.",
        },
        {
          content:
            "멘토링을 통해 학업/교육 관련 어떤 점을 배우고 싶으신지 말씀해 주실 수 있나요?",
          placeholder: "예) 자기계발, 리더십 향상, 새로운 기술 습득 등",
        },
        {
          content: "멘티님의 현재 학습능력을 간단히 예시와 같이 표현해 주세요.",
          placeholder: "예) 초급, 중급, 고급 중 선택하여 기재해주세요.",
        },
      ],
      categoryTitle: "",
    };
  },
  created() {
    this.setCategoryTitle(this.categoryIdx);
  },
  methods: {
    setCategoryTitle(categoryIdx) {
      const categoryMap = {
        1: "학업/교육",
        2: "경력/직업",
        3: "IT/전문기술",
        4: "금융/경제",
        5: "성장/자기관리",
        6: "예술/취미",
        7: "기타",
      };
      this.categoryTitle = categoryMap[categoryIdx] || "알 수 없는 카테고리";
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
  background-color: #4caf50;
}
.action-button.chatroom-button {
  background-color: #2196f3;
}
</style>
