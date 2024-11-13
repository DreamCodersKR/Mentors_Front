<template>
  <div class="chat-list">
    <div class="chat-item" v-for="(chat, index) in chats" :key="index">
      <img :src="chat.image" class="profile-image" alt="Profile" />
      <div class="chat-content">
        <p class="chat-title">{{ chat.title }}</p>
        <p class="chat-message">{{ chat.message }}</p>
      </div>
      <span class="chat-time">{{ chat.time }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChatList",
  data() {
    return {
      chats: [
        {
          image: require("@/images/persons/4.jpg"),
          title: "엄준식 시니어 멘토",
          message: "안녕하세요 김범 주니어 멘티님...",
          time: "오전 9:35",
        },
        {
          image: require("@/images/persons/2.jpg"),
          title: "김정숙 시니어 멘토",
          message: "안녕하세요 김범 주니어 멘티님...",
          time: "오전 9:35",
        },
        {
          image: require("@/images/persons/3.jpg"),
          title: "김진서 시니어 멘토",
          message: "안녕하세요 박태현 시니어입니다...",
          time: "오전 8:23",
        },
        {
          image: require("@/images/persons/1.png"),
          title: "멘토스",
          message: "안녕하세요, 김범 주니어님...",
          time: "2024-11-01",
        },
      ],
    };
  },
};
</script>

<style scoped>
.chat-list {
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.chat-item {
  display: flex;
  align-items: center;
  gap: 20px;
  border: 1px solid #ddd;
  padding: 20px;
  border-radius: 10px;
  background-color: #f9f9f9;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.profile-image {
  width: 70px;
  height: 70px;
  border-radius: 50%;
}

.chat-content {
  flex: 1;
}

.chat-title {
  font-weight: bold;
  font-size: 1.1rem;
}

.chat-message {
  font-size: 1rem;
  color: #555;
}

.chat-time {
  font-size: 0.9rem;
  color: #aaa;
}
</style>
