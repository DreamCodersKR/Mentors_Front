import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/views/Home.vue";
import AboutPage from "@/views/About.vue";
import Testpage from "@/views/Test.vue";
import SignUp from "@/views/SignUp.vue";

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
  {
    path: "/test",
    name: "Test",
    component: Testpage,
  },
  {
    path: "/signup",
    name: "SignUp",
    component: SignUp,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.VUE_APP_BASE_URL), // Vue Router 4 방식으로 history 설정
  routes,
});

export default router;
