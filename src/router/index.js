import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/views/Home.vue";
import AboutPage from "@/views/About.vue";
import TestPage from "@/views/Test.vue";
import SignUp from "@/views/SignUp.vue";
import LoginPage from "@/views/Login.vue";
import MainPage from "@/views/Main.vue";
import BoardPage from "@/views/Board.vue";
import PremiumPage from "@/views/Premium.vue";
import WriteBoardPage from "@/views/WriteBoard.vue";
import BoardDetailPage from "@/views/BoardDetail.vue";
import store from "@/store";

const routes = [
  {
    path: "/",
    component: HomePage, // 기본 레이아웃을 HomePage로 설정
    children: [
      {
        path: "",
        name: "main",
        component: MainPage,
      },
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
      {
        path: "board",
        name: "board",
        component: BoardPage,
      },
      {
        path: "writeBoard",
        name: "writeBoard",
        component: WriteBoardPage,
      },
      {
        path: "board/:id",
        name: "boardDetail",
        component: BoardDetailPage,
        beforeEnter: (to, from, next) => {
          if (!store.state.isLoggedIn) {
            alert("로그인이 필요합니다. 로그인 페이지로 이동합니다.");
            next({ name: "Login" });
          } else {
            next();
          }
        },
      },
      {
        path: "premium",
        name: "premium",
        component: PremiumPage,
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
