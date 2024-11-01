import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/views/Home.vue";
import AboutPage from "@/views/About.vue";
import TestPage from "@/views/Test.vue";
import SignUp from "@/views/SignUp.vue";
import LoginPage from "@/views/Login.vue";

const routes = [
  {
    path: "/",
    component: HomePage, // 기본 레이아웃을 HomePage로 설정
    children: [
      {
        path: "about",
        name: "About",
        component: AboutPage,
      },
      {
        path: "test",
        name: "Test",
        component: TestPage,
      },
    ],
  },
  {
    path: "/signup",
    name: "SignUp",
    component: SignUp,
  },
  {
    path: "/login",
    name: "Login",
    component: LoginPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.VUE_APP_BASE_URL), // Vue Router 4 방식으로 history 설정
  routes,
});

export default router;
