<template>
  <div :class="['sidebar', { 'is-open': isSidebarOpen }]">
    <!-- MenuButton 컴포넌트 -->
    <MenuButton
      :isSidebarOpen="isSidebarOpen"
      @toggle-sidebar="toggleSidebar"
    />

    <!-- 사이드바 메뉴 -->
    <div class="menus">
      <ul v-if="isSidebarOpen">
        <!-- 카테고리 트리 -->
        <li class="menu-item">
          <div @click="toggleCategory" class="menu-title">카테고리</div>
          <transition name="categoryEffect">
            <ul v-if="isCategoryOpen" class="sub-menu">
              <li><router-link to="/">학업/교육</router-link></li>
              <li><router-link to="/">경력/직업</router-link></li>
              <li><router-link to="/">IT/기술</router-link></li>
              <li><router-link to="/">자기계발&멘탈케어</router-link></li>
              <li><router-link to="/">금융/경제</router-link></li>
              <li><router-link to="/">예술/취미</router-link></li>
              <li><router-link to="/">라이프 스타일</router-link></li>
            </ul>
          </transition>
        </li>
        <li class="menu-item">
          <router-link to="/premium">프리미엄 멘토링</router-link>
        </li>
        <li class="menu-item">
          <router-link to="/test">채팅목록</router-link>
        </li>
        <li class="menu-item">
          <router-link to="/board">자유게시판</router-link>
        </li>
        <li class="menu-item"><router-link to="/about">About</router-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
import MenuButton from "@/components/MenuButton.vue";

export default {
  name: "SideBar",
  components: {
    MenuButton,
  },
  props: {
    isSidebarOpen: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      isCategoryOpen: false, // 카테고리 트리 열림/닫힘 상태
    };
  },
  methods: {
    toggleSidebar() {
      this.$emit("toggle-sidebar");
      this.isCategoryOpen = false;
    },
    toggleCategory() {
      this.isCategoryOpen = !this.isCategoryOpen; // 카테고리 트리 토글
    },
  },
};
</script>

<style scoped>
.sidebar {
  width: 70px;
  height: 100vh;
  background-color: #8d8df5;
  position: fixed;
  left: 0;
  top: 0;
  transition: width 0.3s ease;
  padding: 20px 10px; /* padding 추가 */
  justify-content: center; /* 사이드바 안의 항목들을 세로로 중앙 정렬 */
  align-items: center; /* 좌우 중앙 정렬 */
}

.sidebar.is-open {
  width: 250px;
}

.menu-list {
  display: flex;
  flex-direction: column;
  justify-content: center; /* 메뉴 리스트 전체가 세로로 중앙에 위치 */
  align-items: center;
  width: 100%;
  margin-top: 0;
}

.menus {
  margin-top: 70px;
  text-align: center;
}

ul {
  list-style: none;
  padding: 0;
  margin-top: 20px; /* 버튼과 메뉴 간격 */
}

.menu-item {
  margin-bottom: 20px;
  padding: 10px;
  border-radius: 8px; /* 둥근 모서리 */
  background-color: rgba(255, 255, 255, 0.1); /* 가벼운 배경색 추가 */
  transition: background-color 0.3s ease;
}

.menu-item:hover {
  background-color: rgba(255, 255, 255, 0.2); /* 호버 시 배경색 변경 */
}

.menu-title {
  font-weight: bold;
  color: #fff;
  cursor: pointer;
}

.sub-menu {
  margin-left: 20px; /* 하위 메뉴 들여쓰기 */
  padding-left: 10px;
  border-left: 2px solid rgba(255, 255, 255, 0.2); /* 트리 메뉴를 구분하는 선 */
  text-align: left;
  color: #fff;
}

.categoryEffect-enter-from {
  opacity: 0;
}
.categoryEffect-enter-active {
  transition: all 1s;
}
.categoryEffect-enter-to {
  opacity: 1;
}

li {
  margin-bottom: 10px;
}

a {
  text-decoration: none;
  color: #fff;
  display: block;
  padding: 10px;
  border-radius: 8px; /* 링크도 둥글게 */
  transition: background-color 0.3s ease;
}

a:hover {
  background-color: #6a6ad5; /* 호버 시 배경색 변경 */
}
</style>
