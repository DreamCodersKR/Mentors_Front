<template>
  <div class="main-container">
    <div class="main-banner">
      <div class="text-content">
        <h1 class="title">멘토와 멘티,<br />그 연결의 시작은 '멘토스'에서</h1>
        <p class="subtitle">
          멘토스는 AI 맞춤 멘토링 서비스를 제공 합니다.<br />
          풍부한 경험과 지식을 소유한 ‘시니어 멘토’<br />
          트렌디한 감각을 가진 ‘주니어 멘토’<br />
          모두 멘토스에서 만나보세요.
        </p>
      </div>
    </div>

    <div class="additional-content">
      <p>ai 맞춤 멘토링 화면 구성해야함</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainPage",
};
</script>

<style scoped>
.main-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.main-banner {
  width: 100%;
  max-width: 1600px;
  padding: 60px 20px;
  background-image: url("@/images/mainImg.png");
  background-size: cover;
  background-position: center;
  border-radius: 16px;
  color: white;
  text-align: left;
  margin-bottom: 40px;
}

.text-content {
  max-width: 600px;
}

.title {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 20px;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.9);
}

.subtitle {
  font-size: 1.125rem;
  line-height: 1.6;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.9);
}

.additional-content {
  width: 100%;
  max-width: 1200px;
  padding: 20px;
}
</style>
