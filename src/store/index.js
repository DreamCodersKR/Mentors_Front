import { createStore } from "vuex"; // Vuex 4 방식으로 import

export default createStore({
  state: {
    // 상태 정의
    isLoggedIn: false, // 로그인 여부 확인
    userName: null, // 사용자 이름
    userCategory: null, // 사용자 유형
    userToken: null, // 사용자 토큰 (옵션)
  },
  mutations: {
    setUser(state, payload) {
      state.isLoggedIn = true;
      state.userName = payload.userName;
      state.userCategory = payload.userCategory;
      state.userToken = payload.userToken;

      // sessionStorage에 사용자 상태 저장
      sessionStorage.setItem("user", JSON.stringify(payload));
    },
    clearUser(state) {
      state.isLoggedIn = false;
      state.userName = null;
      state.userCategory = null;
      state.userToken = null;

      // sessionStorage에서 사용자 정보 제거
      sessionStorage.removeItem("user");
    },
  },
  actions: {
    // 비동기 작업 정의
    login({ commit }, userData) {
      commit("setUser", userData); // 로그인 후 사용자 정보 커밋
    },
    logout({ commit }) {
      commit("clearUser"); // 로그아웃 시 사용자 정보 초기화
    },
  },
  modules: {
    // 모듈로 스토어 분리 하기
  },
});
