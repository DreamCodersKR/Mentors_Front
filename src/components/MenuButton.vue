<template>
  <button class="menu-toggle" @click="toggleSidebar">
    <span v-if="isSidebarOpen">{{ closeText }}</span>
    <span v-else>{{ openText }}</span>
  </button>
</template>

<script>
export default {
  props: {
    isSidebarOpen: {
      type: Boolean,
      required: true,
    },
    openText: {
      type: String,
      default: "☰",
    },
    closeText: {
      type: String,
      default: "X",
    },
  },
  methods: {
    toggleSidebar() {
      this.$emit("toggle-sidebar");
    },
  },
};
</script>

<style scoped>
.menu-toggle {
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  background : #A9D4FB;
  color: #fff;
  border: none;
  padding: 15px;
  cursor: pointer;
  font-size: 24px;
  text-align: center;
  display: block;
  border-radius: 30%; /* 둥근모서리 */
  transition: background-color 0.3s ease;
  position: absolute; /* 절대 위치 */
  top: 10px; /* 사이드바의 상단에서 10px 떨어지게 */
  right: 10px; /* 사이드바의 우측에서 10px 떨어지게 */
}

.menu-toggle:hover {
  background-color: #99CEFF;
}

.menu-toggle:focus {
  outline: none;
}
</style>
