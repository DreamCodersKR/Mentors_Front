<template>
  <div class="sidebar">
    <ul>
      <li><router-link to="/">메뉴1</router-link></li>
      <li><router-link to="/about">메뉴2</router-link></li>
      <li><router-link to="/test">메뉴3</router-link></li>
      <li><router-link to="/test">메뉴4</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "SideBar",
};
</script>

<style scoped>
.sidebar {
  width: 200px;
  height: 100vh;
  background-color: #f4f4f4;
  padding: 20px;
}

.sidebar ul {
  list-style: none;
  padding: 0;
}

.sidebar li {
  margin-bottom: 30px;
}

.sidebar a {
  text-decoration: none;
  color: #333;
  font-weight: bold;
}
</style>
