import { createStore } from "vuex"; // Vuex 4 방식으로 import

const state = {
  isLoggedIn: false,
  user: {
    userName: null,
    userEmail: null,
    nickName: null,
    userCategory: null,
    userToken: null,
    premiumYn: null,
    mentorYn: null,
  },
};

// sessionStorage에서 상태 불러오기
function loadSession() {
  const user = JSON.parse(sessionStorage.getItem("user"));
  if (user) {
    return {
      isLoggedIn: true,
      user,
    };
  }
  return state; // 기본값 반환
}

// sessionStorage 동기화 플러그인
const sessionStorageSync = (store) => {
  store.subscribe((mutation, state) => {
    if (mutation.type === "setUser") {
      sessionStorage.setItem("user", JSON.stringify(state.user));
    } else if (mutation.type === "clearUser") {
      sessionStorage.removeItem("user");
    }
  });
};

export default createStore({
  state: loadSession(), // sessionStorage 데이터로 초기화
  mutations: {
    setUser(state, payload) {
      state.isLoggedIn = true;
      state.user = { ...payload }; // 사용자 데이터를 객체로 한번에 관리
    },
    clearUser(state) {
      state.isLoggedIn = false;
      state.user = {
        ...state.user,
        ...state.user,
        userName: null,
        userEmail: null,
      }; // 상태 초기화
    },
  },
  actions: {
    login({ commit }, userData) {
      commit("setUser", userData);
    },
    logout({ commit }) {
      commit("clearUser");
    },
  },
  plugins: [sessionStorageSync], // sessionStorage 동기화
});
