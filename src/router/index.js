import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/views/Home.vue";
import AboutPage from "@/views/About.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage, // 컴포넌트 이름도 수정
  },
  {
    path: "/about",
    name: "About",
    component: AboutPage,
  },
];

const router = createRouter({
  history: createWebHistory(), // Vue Router 4 방식으로 history 설정
  routes,
});

export default router;
