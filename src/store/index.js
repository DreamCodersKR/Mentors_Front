import { createStore } from "vuex"; // Vuex 4 방식으로 import

export default createStore({
  state: {
    // 상태 정의
    message: "Hello, Vuex!",
  },
  mutations: {
    // 상태 변경 로직 정의
    setMessage(state, newMessage) {
      state.message = newMessage;
    },
  },
  actions: {
    // 비동기 작업 정의
  },
  modules: {
    // 모듈로 스토어 분리 하기
  },
});
