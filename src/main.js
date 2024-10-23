import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

createApp(App)
  .use(router) // 라우터 추가
  .use(store) // Vuex 스토어 추가
  .mount("#app"); // #app 엘리먼트에 Vue 앱 마운트
