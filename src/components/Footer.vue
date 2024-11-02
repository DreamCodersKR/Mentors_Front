<template>
  <footer class="footer-container">
    <div class="footer-content">
      <!-- 왼쪽 로고 및 연락처 정보 -->
      <div class="footer-left">
        <div class="footer-logo">
          <img src="@/assets/logo.png" alt="Mentors Logo" class="logo" />
          <h2 class="footer-logo-text">MENTORS</h2>
        </div>
        <p class="footer-contact">
          1592-8888<br />
          평일 09:00 ~ 18:00<br />
          (점심시간 12:50 ~ 14:00 제외, 주말/공휴일 제외)
        </p>
      </div>

      <!-- 오른쪽 링크 목록 -->
      <div class="footer-right">
        <ul class="footer-links">
          <li><a href="#">멘토소개</a></li>
          <li><a href="#">고객안내</a></li>
          <li><a href="#">멘토스 안내</a></li>
          <li><a href="#">고객센터</a></li>
        </ul>
        <ul class="footer-links">
          <li><a href="#">이용안내</a></li>
          <li><a href="#">공지사항</a></li>
          <li><a href="#">예상금액</a></li>
          <li><a href="#">자주 묻는 질문</a></li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterCom",
};
</script>

<style>
.footer-container {
  background-color: #f4f4f4;
  padding: 20px;
  border-top: 1px solid #ddd;
  max-height: 150px;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 0 auto;
}

.footer-left {
  max-width: 300px;
}

.footer-logo {
  display: flex;
  align-items: center;
}

.logo {
  width: 40px;
  margin-right: 10px;
}

.footer-logo-text {
  font-size: 20px;
  font-weight: bold;
  color: #333;
}

.footer-contact {
  margin-top: 10px;
  font-size: 12px;
  color: #666;
}

.footer-right {
  display: flex;
  justify-content: space-between;
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0 20px;
}

.footer-links li {
  margin-bottom: 8px;
}

.footer-links a {
  color: #333;
  text-decoration: none;
  font-size: 12px;
}

.footer-links a:hover {
  text-decoration: underline;
}
</style>
