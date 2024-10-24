<template>
  <div>
    <h1>멘토스 메인페이지용</h1>
    <router-link to="/about">Go to About Page</router-link><br />
    <button style="margin-top: 10px" @click="sendTestMessage">
      통신테스트
    </button>
    <b style="margin-left: 10px">클릭하면 "goodJob" 이라는 텍스트 전송</b>
  </div>
</template>

<script>
import { sendTestData } from "../api/user";

export default {
  name: "MainPage",
  methods: {
    sendTestMessage() {
      // API 호출
      sendTestData({ message: "goodJob" })
        .then((response) => {
          console.log("Response : ", response.data);
        })
        .catch((error) => {
          console.error("Error: ", error);
        });
    },
  },
};
</script>
