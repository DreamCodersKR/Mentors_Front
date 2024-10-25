<template>
  <div class="main-container">
    <Sidebar />
    <div class="content">
      <h1>멘토스 메인페이지용</h1>
      <router-link to="/about">Go to About Page</router-link><br />
      <router-link to="/test">테스트 페이지 gaboja~</router-link><br />
    </div>
  </div>
</template>

<script>
import Sidebar from "@/components/SideBar.vue";

export default {
  name: "MainPage",
  data() {},
  methods: {},
  components: {
    Sidebar,
  },
};
</script>

<style scoped>
.main-container {
  display: flex;
}

.content {
  flex: 1;
  padding: 20px;
}

h1 {
  margin-bottom: 20px;
}
</style>
