<template>
  <div>
    <h1>멘토스 메인페이지용</h1>
    <router-link to="/about">Go to About Page</router-link><br />
    <button style="margin-top: 10px" @click="sendPostTestMessage">
      통신테스트
    </button>
    <b style="margin-left: 10px">클릭하면 "goodJob" 이라는 텍스트 전송</b>
    <br />
    <input v-model="inputValue" type="text" placeholder="값 입력해보셈" />
    <button style="margin-left: 10px" @click="sendGetTestMessage">
      통신테스트2
    </button>
  </div>
</template>

<script>
import { sendPostTestData, sendGetTestData } from "../api/user";

export default {
  name: "MainPage",
  data() {
    return {
      inputValue: "", // 입력값 받는 데이터
    };
  },
  methods: {
    sendPostTestMessage() {
      // API 호출
      sendPostTestData({ message: "goodJob" })
        .then((response) => {
          console.log("Response : ", response.data);
        })
        .catch((error) => {
          console.error("Error: ", error);
        });
    },
    sendGetTestMessage() {
      sendGetTestData(this.inputValue)
        .then((response) => {
          console.log("Response : ", response.data);
        })
        .catch((error) => {
          console.error("에러남 : ", error);
        });
    },
  },
};
</script>
