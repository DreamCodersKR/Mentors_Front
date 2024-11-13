<template>
  <div class="mentor-list">
    <div v-for="(mentor, index) in mentors" :key="index" class="mentor-card">
      <img
        :src="require(`@/images/persons/${mentor.image}`)"
        alt="멘토 이미지"
        class="mentor-image"
      />
      <div class="mentor-info">
        <h3>{{ mentor.title }}</h3>
        <p class="rating">⭐ {{ mentor.rating }} ({{ mentor.reviews }})</p>
        <p>{{ mentor.description }}</p>
        <!-- <button class="apply-button">멘토링 신청하기</button> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MatchingList",
  data() {
    return {
      mentors: [
        {
          image: "4.jpg",
          title: '"생공적인 투자와 주식 공부, 저와 함께 해보세요!"',
          rating: 4.8,
          reviews: 123,
          description:
            "주식, 통화에 대한 고민, 어디서부터 시작할지 모른다면 저와 함께 해보세요! 저의 멘토링은 어린이와 청소년에게도 쉽게 다가갈 수 있도록 실질적인 도움을 드리는 멘토링을 준비하고 있어요.",
        },
        {
          image: "2.jpg",
          title:
            "꽃과 나무를 좋아하는 시니어 멘티들을 함께 플로리스트 멘토링 해요!",
          rating: 4.7,
          reviews: 123,
          description:
            "저는 시니어 멘티들을 위한 플로리스트 멘토입니다! 꽃과 나무를 좋아하는 분들과 함께 플로리스트 활동을 하고 있어요. 함께 배우며 즐길 수 있는 시간이 되었으면 합니다.",
        },
        {
          image: "3.jpg",
          title:
            "SMHRD 대표 출신의 영&리치 대표님이 알려주시는 온라인 금융 관리",
          rating: 4.8,
          reviews: 123,
          description:
            "인터넷 뱅킹 금융 관리, 투자, 재산 내역, 승계 및 절세 등을 쉽게 관리할 수 있도록 도움을 드립니다.",
        },
        {
          image: "5.jpg",
          title: "스마트폰으로 소통하는 세상, 쉽게 배우는 스마트폰 활용법",
          rating: 4.8,
          reviews: 123,
          description:
            "이 강의는 스마트폰 사용이 능숙하지 않은 시니어 분들을 위한 프로그램입니다. 다양한 앱 사용법을 배우고 소통의 즐거움을 찾을 수 있는 기회를 제공해드립니다.",
        },
      ],
    };
  },
};
</script>

<style scoped>
.mentor-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center; /* 카드들을 가운데 정렬 */
}

.mentor-card {
  border: 1px solid #ddd;
  border-radius: 10px;
  overflow: hidden;
  width: 300px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.mentor-image {
  width: 100%;
  height: 200px;
  object-fit: contain;
  background-color: #f0f0f0;
}

.mentor-info {
  padding: 16px;
}

.apply-button {
  margin-top: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
}

.apply-button:hover {
  background-color: #0056b3;
}
</style>
