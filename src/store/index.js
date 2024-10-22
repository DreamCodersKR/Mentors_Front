import { createStore } from "vuex"; // Vuex 4 방식으로 import

export default createStore({
  state: {
    message: "Hello, Vuex!",
  },
  mutations: {
    setMessage(state, newMessage) {
      state.message = newMessage;
    },
  },
  actions: {},
  modules: {},
});
