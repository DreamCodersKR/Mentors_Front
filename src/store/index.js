import { createStore } from "vuex"; // Vuex 4 방식으로 import

// 초기 상태 설정 함수
const getDefaultState = () => {
  const user = JSON.parse(sessionStorage.getItem("user"));
  return {
    isLoggedIn: user ? true : false,
    userName: user ? user.userName : null,
    nickName: user ? user.nickName : null,
    userCategory: user ? user.userCategory : null,
    userToken: user ? user.userToken : null,
    premiumYn: user ? user.premiumYn : null,
    mentorYn: user ? user.mentorYn : null,
  };
};

export default createStore({
  state: getDefaultState(), // 앱 로드 시 sessionStorage 상태를 기본값으로
  mutations: {
    setUser(state, payload) {
      state.isLoggedIn = true;
      state.userName = payload.userName;
      state.nickName = payload.nickName;
      state.userCategory = payload.userCategory;
      state.userToken = payload.userToken;
      state.premiumYn = payload.premiumYn;
      state.mentorYn = payload.mentorYn;

      // sessionStorage에 사용자 상태 저장
      sessionStorage.setItem("user", JSON.stringify(payload));
    },
    clearUser(state) {
      state.isLoggedIn = false;
      state.userName = null;
      state.nickName = null;
      state.userCategory = null;
      state.userToken = null;
      state.premiumYn = null;
      state.mentorYn = null;

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
