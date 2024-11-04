<template>
  <div class="home-container">
    <!-- 사이드바 영역 -->
    <div class="left-menu" :class="{ 'is-open': isSidebarOpen }">
      <SideBar @toggle-sidebar="toggleSidebar" :isSidebarOpen="isSidebarOpen" />
    </div>

    <!-- 컨텐츠 영역 -->
    <div class="contWrap" :class="{ 'is-open': isSidebarOpen }">
      <!-- 헤더 영역 -->
      <header class="header">
        <div class="logo-container" @click="goToHome">
          <img src="@/assets/logo.png" alt="Mentors Logo" class="logo" />
          <h1 class="logo-text">Mentors</h1>
        </div>
        <div class="auth-buttons">
          <router-link to="/login">
            <button class="login-btn">로그인</button>
          </router-link>
          <router-link to="/signup">
            <button class="signup-btn">회원가입</button>
          </router-link>
        </div>
      </header>

      <!-- 여기에 라우터 뷰를 넣어서 컨텐츠가 변환되도록 함 -->
      <div class="content">
        <router-view />
        <!-- 이곳에서 페이지 전환이 일어남 -->
      </div>
      <FooterCom />
    </div>
  </div>
</template>

<script>
import SideBar from "@/components/SideBar.vue";
import FooterCom from "@/components/Footer.vue";

export default {
  name: "MainPage",
  data() {
    return {
      isSidebarOpen: false, // 사이드바 열림 상태
    };
  },
  methods: {
    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen; // 사이드바 열림/닫힘 상태 토글
    },
    goToHome() {
      this.$router.push("/"); // 로고를 클릭하면 홈으로 이동
    },
  },
  components: {
    SideBar,
    FooterCom,
  },
};
</script>

<style scoped>
.home-container {
  display: flex;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
}

.left-menu {
  width: 70px;
  height: 100vh;
  position: relative;
  transition: width 0.3s ease;
}

.left-menu.is-open {
  width: 250px; /* 사이드바가 열렸을 때의 너비 */
}

.contWrap {
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: #f4f4f4;
  height: 100vh;
  transition: margin-left 0.3s ease;
}

.header {
  height: 60px;
  background-color: #ffffff;
  border-bottom: 1px solid #ddd;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between; /* 로고와 버튼을 좌우로 배치 */
  align-items: center;
}

.logo-container {
  display: flex;
  align-items: center;
  margin-left: -16px; /* 왼쪽 여백을 줄이기 */
  text-decoration: none; /* 밑줄 제거 */
  cursor: pointer;
}

.logo {
  width: 60px;
}

.logo-text {
  font-family: "Arial", sans-serif;
  font-size: 28px;
  font-weight: bold;
  color: #333;
  margin-left: -10px;
}

.auth-buttons {
  display: flex;
  gap: 10px;
}

button {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.login-btn {
  background-color: #8d8df5;
  color: white;
}

.login-btn:hover {
  background-color: #6a6ad5;
}

.signup-btn {
  background-color: #d67367;
  color: white;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.signup-btn:hover {
  background-color: #c65d5d;
}

button:hover {
  opacity: 0.8;
}

.content {
  flex: 1;
  padding: 20px;
  overflow: auto;
  background: white;
}
</style>
