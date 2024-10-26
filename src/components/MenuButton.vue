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
  background-color: #8d8df5;
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
  background-color: #6a6ad5;
}

.menu-toggle:focus {
  outline: none;
}
</style>
