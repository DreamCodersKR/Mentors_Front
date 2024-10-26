<template>
  <div class="signup-container">
    <h1 class="signup-title">Mentors, <span>AI 기반 멘토링</span></h1>
    <p class="signup-subtitle">이 페이지만 작성하면 회원가입이 끝나요!</p>

    <!-- 회원유형 -->
    <div class="form-group">
      <label>회원유형 *</label>
      <div class="checkbox-group">
        <label
          ><input type="checkbox" v-model="memberType" value="주니어" />
          주니어</label
        >
        <label
          ><input type="checkbox" v-model="memberType" value="시니어" />
          시니어</label
        >
      </div>
    </div>

    <!-- 성별 -->
    <div class="form-group">
      <label>성별 *</label>
      <div class="radio-group">
        <label><input type="radio" v-model="gender" value="남자" /> 남자</label>
        <label><input type="radio" v-model="gender" value="여자" /> 여자</label>
      </div>
    </div>

    <!-- 이름 -->
    <div class="form-group">
      <label for="name">이름 *</label>
      <input
        type="text"
        id="name"
        v-model="name"
        placeholder="이름을 입력해주세요."
      />
    </div>

    <!-- 이메일 -->
    <div class="form-group">
      <label for="email">이메일 *</label>
      <input
        type="email"
        id="email"
        v-model="email"
        placeholder="이메일을 입력해주세요."
      />
    </div>

    <!-- 비밀번호 -->
    <div class="form-group">
      <label for="password">비밀번호 *</label>
      <input
        type="password"
        id="password"
        v-model="password"
        placeholder="비밀번호를 입력해주세요. (8자 이상)"
      />
    </div>

    <!-- 생년월일 -->
    <div class="form-group">
      <label for="birthdate">생년월일 *</label>
      <input
        type="date"
        id="birthdate"
        v-model="birthdate"
        placeholder="YYYY-MM-DD"
      />
    </div>

    <button class="submit-btn">회원가입 완료!</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      memberType: [],
      gender: "",
      email: "",
      password: "",
      name: "",
      birthdate: "",
    };
  },
};
</script>

<style scoped>
.signup-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 40px;
  background-color: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin-top: 30px;
}

.signup-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 8px;
}

.signup-title span {
  font-weight: normal;
  color: #666;
}

.signup-subtitle {
  font-size: 14px;
  color: #8d8df5;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  font-size: 14px;
  margin-bottom: 6px;
}

input[type="email"],
input[type="password"],
input[type="text"],
input[type="date"] {
  width: 100%;
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 8px;
}

.checkbox-group,
.radio-group {
  display: flex;
  gap: 20px;
}

.submit-btn {
  width: 100%;
  padding: 12px;
  background-color: #8d8df5;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 20px;
}

.submit-btn:hover {
  background-color: #6a6ad5;
}
</style>
