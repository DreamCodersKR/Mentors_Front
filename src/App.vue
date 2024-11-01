<template>
  <div id="app">
    <router-view />
    <!-- 라우터에 설정된 컴포넌트를 렌더링 -->
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body,
#app {
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: auto;
}
div {
  box-sizing: border-box;
}
</style>
