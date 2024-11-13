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
import QuestionsPage from "@/views/Questions.vue";
import ChatListPage from "@/views/ChatList.vue";
import MatchingPage from "@/views/MatchingList.vue";
import store from "@/store";
import chat from "@/views/chat.vue";


const routes = [
  {
    path: "/",
    component: HomePage,
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
        path: "chatList",
        name: "chatList",
        component: ChatListPage,
      },
      {
        path: "matcingList",
        name: "matcingList",
        component: MatchingPage,
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
      {
        path: "questions/category/:categoryIdx",
        name: "questions",
        component: QuestionsPage,
        props: true,
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
        path: "chat",
        name: "chat",
        component: chat,
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
  history: createWebHistory(process.env.VUE_APP_BASE_URL),
  routes,
});

export default router;
