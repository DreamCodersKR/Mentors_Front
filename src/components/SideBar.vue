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
          <div @click="toggleCategory" class="menu-title">
            <iconCategories />카테고리
          </div>
          <transition name="categoryEffect">
            <ul v-if="isCategoryOpen" class="sub-menu">
              <li>
                <router-link to="/"><iconEducation />학업/교육</router-link>
              </li>
              <li>
                <router-link to="/"><iconCarrier />취업/커리어</router-link>
              </li>
              <li>
                <router-link to="/"><iconIT />IT/전문기술</router-link>
              </li>
              <li>
                <router-link to="/"
                  ><iconImprovement />성장/자기관리</router-link
                >
              </li>
              <li>
                <router-link to="/"><iconEconomy />금융/경제</router-link>
              </li>
              <li>
                <router-link to="/"><iconArt />예술/취미</router-link>
              </li>
              <li>
                <router-link to="/"><iconEtc />기타</router-link>
              </li>
            </ul>
          </transition>
        </li>
        <li class="menu-item">
          <router-link to="/premium"
            ><iconPremium />프리미엄 멘토링</router-link
          >
        </li>
        <li class="menu-item">
          <router-link to="/test"><iconChatting />채팅목록</router-link>
        </li>
        <li class="menu-item">
          <router-link to="/board"><iconBoard />자유게시판</router-link>
        </li>
        <li class="menu-item">
          <router-link to="/about"><iconAbout />About</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import MenuButton from "@/components/MenuButton.vue";
//icon------------------------------
import iconArt from "@/components/icons/iconArt.vue";
import iconCarrier from "@/components/icons/iconCarrier.vue";
import iconCategories from "@/components/icons/iconCategories.vue";
import iconEconomy from "@/components/icons/iconEconomy.vue";
import iconEducation from "@/components/icons/iconEducation.vue";
import iconEtc from "@/components/icons/iconEtc.vue";
import iconImprovement from "@/components/icons/iconImprovement.vue";
import iconIT from "@/components/icons/iconIT.vue";
import iconChatting from "@/components/icons/iconChatting.vue";
import iconBoard from "@/components/icons/iconBoard.vue";
import iconAbout from "@/components/icons/iconAbout.vue";
import iconPremium from "@/components/icons/iconPremium.vue";

//-----------------------------------

export default {
  name: "SideBar",
  components: {
    MenuButton,
    //sidebar icon 컴포넌트
    iconArt,
    iconCarrier,
    iconCategories,
    iconEconomy,
    iconEducation,
    iconEtc,
    iconImprovement,
    iconIT,
    iconChatting,
    iconBoard,
    iconAbout,
    iconPremium,
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
svg {
  margin-left: 15px;
  margin-right: 5px;
  margin-top: 0px;
  margin-bottom: 0px;
  vertical-align: middle;
  margin-top: -5px;
}
.sub-menu svg {
  margin-left: 15px;
  margin-right: 5px;
  margin-top: 0px;
  margin-bottom: 0px;
  vertical-align: middle;
  margin-top: -5px;
}
a {
  text-decoration: none;
  color: #7980ab;
  font-weight: bold;
  background-color: white;
  display: block;
  padding: 16px;
  border-radius: 8px; /* 링크도 둥글게 */
  transition: background-color 0.3s ease;
}

a:hover {
  background-color: #ddefff33; /* 호버 시 배경색 변경 */
}

ul {
  list-style: none;
  padding: 0;
  margin-top: 20px; /* 버튼과 메뉴 간격 */
}

li {
  margin-bottom: 10px;
}
/* 커스텀 스크롤바 만들기 */
::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}

::-webkit-scrollbar-thumb {
  background: #a9d6fb;
  border: 2px solid #b4beff;
  border-radius: 12px;
}

::-webkit-scrollbar-thumb:hover {
  background-color: #aea9e3;
}

.sidebar {
  width: 70px;
  height: 100vh;
  background: linear-gradient(
    #a9d6fb,
    #b4beff,
    #aea9e3
  ); /*사이드바색상 그라디언트(별) */
  position: fixed;
  left: 0;
  top: 0;
  transition: width 0.3s ease;
  padding: 20px 10px; /* padding 추가 */
  justify-content: center; /* 사이드바 안의 항목들을 세로로 중앙 정렬 */
  align-items: center; /* 좌우 중앙 정렬 */
  overflow-y: auto;
}

.sidebar.is-open {
  width: 260px;
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

.menu-item {
  font-size: 18px;
  text-align: left;
  margin-bottom: 20px;
  padding: 10px;
  border-radius: 8px; /* 둥근 모서리 */
  background-color: rgba(255, 255, 255, 0.1);
  transition: background-color 0.3s ease;
  color: black;
}

.menu-item:hover {
  background-color: rgba(255, 255, 255, 0.2); /* 호버 시 배경색 변경 */
}

.menu-title {
  color: #7980ab;
  font-weight: bold;
  font-size: 18px;
  cursor: pointer;
  background-color: white;
  border-radius: 8px;
  padding: 16px;
  transition: background-color 0.3s ease;
}
.menu-title:hover {
  background-color: rgba(255, 255, 255, 0.2); /* 호버 시 배경색 변경 */
}

.sub-menu {
  font-size: 16px;
  margin-left: 20px; /* 하위 메뉴 들여쓰기 */
  padding-left: 10px;
  border-left: 2px solid rgba(255, 255, 255, 0.2); /* 트리 메뉴를 구분하는 선 */
  text-align: left;
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
</style>
