<template>
  <div class="main-container">
    <div class="left-menu" :class="{ 'is-open': isSidebarOpen }">
      <Sidebar @toggle-sidebar="toggleSidebar" :isSidebarOpen="isSidebarOpen" />
    </div>

    <div class="contWrap" :class="{ 'is-open': isSidebarOpen }">
      <header class="header">
        <h1 class="title"></h1>
        <div class="auth-buttons">
          <button class="login-btn">로그인</button>
          <router-link to="/signup"
            ><button class="signup-btn">회원가입</button></router-link
          >
        </div>
      </header>

      <div class="content">
        <router-link to="/about">Go to About Page</router-link><br />
        <router-link to="/test">테스트 페이지 gaboja~</router-link><br />
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "@/components/SideBar.vue";

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
  },
  components: {
    Sidebar,
  },
};
</script>

<style scoped>
.main-container {
  display: flex;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
}

.left-menu {
  width: 70px;
  /* background-color: #2c3e50; */
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
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.title {
  margin: 0;
  font-size: 24px;
}

.auth-buttons {
  display: flex;
  gap: 10px;
}

button {
  padding: 8px 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.login-btn {
  background-color: #8d8df5;
  color: white;
}

.login-btn:hover {
  background-color: #6a6ad5; /* 호버 시 어두운 보라색 */
}

.signup-btn {
  background-color: #d67367; /* 그레이시 핑크 */
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.signup-btn:hover {
  background-color: #c65d5d; /* 호버 시 더 어두운 그레이시 핑크 */
}

button:hover {
  opacity: 0.8;
}

.content {
  flex: 1;
  padding: 20px;
  overflow: auto;
}
</style>
