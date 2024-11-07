<template>
  <div class="signup-container">
    <div class="logo-container" @click="goToHome">
      <img src="@/assets/logo.png" alt="Mentors Logo" class="logo" />
      <h1 class="logo-text">Mentors</h1>
    </div>
    <!-- <h1 class="signup-title">Mentors, <span>AI 기반 멘토링</span></h1> -->
    <p class="signup-subtitle">이 페이지만 작성하면 회원가입이 끝나요!</p>

    <!-- 회원유형 -->
    <div class="form-group">
      <label>회원유형 *</label>
      <div class="radio-group">
        <label
          ><input
            type="radio"
            v-model="userCategory"
            value="j"
            name="userCategory"
            tabindex="0"
          />
          주니어</label
        >
        <label
          ><input
            type="radio"
            v-model="userCategory"
            value="s"
            name="userCategory"
            tabindex="0"
          />
          시니어</label
        >
      </div>
    </div>

    <!-- 성별 -->
    <div class="form-group">
      <label>성별 *</label>
      <div class="radio-group">
        <label
          ><input
            type="radio"
            v-model="gender"
            value="m"
            name="gender"
            tabindex="0"
          />
          남자</label
        >
        <label
          ><input
            type="radio"
            v-model="gender"
            value="f"
            name="gender"
            tabindex="0"
          />
          여자</label
        >
      </div>
    </div>

    <!--멘토여부 확인-->
    <div class="form-group">
      <label>역할을 선택해주세요 *</label>
      <div class="radio-group">
        <label
          ><input
            type="radio"
            v-model="mentorYn"
            value="Y"
            name="mentorYn"
            tabindex="0"
          />
          멘토</label
        >
        <label
          ><input
            type="radio"
            v-model="mentorYn"
            value="N"
            name="mentorYn"
            tabindex="0"
          />
          멘티</label
        >
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

    <!-- 이름 -->
    <div class="form-group">
      <label for="nickname">닉네임 *</label>
      <input
        type="text"
        id="nickname"
        v-model="nickname"
        placeholder="닉네임을 입력해주세요."
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

    <!-- 비밀번호 확인 -->
    <div class="form-group">
      <label for="confirmPassword">비밀번호 확인 *</label>
      <input
        type="password"
        id="confirmPassword"
        v-model="confirmPassword"
        placeholder="비밀번호를 한번 더 입력해주세요."
      />
      <p v-if="passwordMismatch" class="error-msg">
        비밀번호가 일치하지 않습니다.
      </p>
    </div>

    <!-- 생년월일 -->
    <div class="form-group">
      <label for="birthDate">생년월일 *</label>
      <input
        type="date"
        id="birthdate"
        v-model="birthDate"
        placeholder="YYYY-MM-DD"
      />
    </div>

    <button class="submit-btn" @click="sendJoin">회원가입 완료!</button>
  </div>
</template>

<script>
// 해야할 작업 : 유효성검사, API 로직
import { sendPostJoin } from "../api/user";
export default {
  data() {
    return {
      userCategory: "", // 회원유형을 하나만 선택할 수 있도록 수정
      gender: "",
      mentorYn: "",
      email: "",
      password: "",
      confirmPassword: "",
      name: "",
      nickname: "",
      birthDate: "",
      passwordMismatch: false, // 비밀번호 불일치 여부 확인을 위한 변수
      userProfileFile: "",
    };
  },
  methods: {
    // 비밀번호와 비밀번호 확인이 일치하는지 확인
    checkPasswordMatch() {
      if (this.password !== this.confirmPassword) {
        this.passwordMismatch = true; // 비밀번호가 일치하지 않을 경우
        alert("비밀번호가 일치하지 않습니다!");
      } else {
        this.passwordMismatch = false; // 비밀번호가 일치할 경우
        sendPostJoin({
          userCategory: this.userCategory,
          gender: this.gender,
          mentorYn: this.mentorYn,
          name: this.name,
          nickname: this.nickname,
          email: this.email,
          password: this.password,
          birthDate: this.birthDate,
          userProfileFile: "추후에 추가할 기능",
          // confirmPassword: this.confirmPassword,
          // passwordMismatch: this.passwordMismatch,
        })
          .then((response) => {
            console.log("Response : ", response.data);
            alert("회원가입 완료");
            this.goToHome();
          })
          .catch((error) => {
            alert("회원가입 실패!");
            console.error("에러남 : ", error);
          });
      }
    },

    goToHome() {
      this.$router.push("/"); // 로고를 클릭하면 홈으로 이동
    },
    sendJoin() {
      this.checkPasswordMatch();
    },
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
  margin-top: 50px;
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 82vh;
}

.logo-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  cursor: pointer;
}

.logo {
  width: 50px; /* 로고 크기 */
}

.logo-text {
  font-size: 28px;
  font-weight: bold;
  color: #333;
  font-family: "Arial", sans-serif;
  margin-left: -10px;
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
  margin-bottom: 10px;
  text-align: center;
}

.form-group {
  margin-bottom: 13px;
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
/* 라디오버튼 스타일링 */
[type="radio"] {
  vertical-align: middle;
  appearance: none;
  border: 2px solid #17161a;
  border-radius: 50%;
  width: 1.25em;
  height: 1.25em;
  position: relative;
  transition: border 0.1s ease-in-out;
  margin-right: 8px; /* 텍스트와 버튼 사이 간격 조정 */
}

[type="radio"]:checked {
  background-color: #1d1b20;
  border-color: #1d1b20;
}

[type="radio"]:checked::after {
  content: "✔"; /* 체크 표시 */
  color: white;
  font-size: 0.75em;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); /* 체크 표시를 버튼 중앙에 배치 */
}

[type="radio"]:focus-visible {
  outline-offset: 2px;
  outline: 2px dotted #1d1b20;
}

[type="radio"]:hover {
  box-shadow: 0 0 0 4px lightgray;
  cursor: pointer;
}

[type="radio"]:disabled {
  background-color: lightgray;
  box-shadow: none;
  opacity: 0.7;
  cursor: not-allowed;
}
</style>
