<template>
  <div class="main-container">
    <div class="main-banner">
      <div class="text-content">
        <h1 class="title">멘토와 멘티,<br />그 연결의 시작은 '멘토스'에서</h1>
        <p class="subtitle">
          멘토스는 AI 맞춤 멘토링 서비스를 제공 합니다.<br />
          풍부한 경험과 지식을 소유한 ‘시니어 멘토’<br />
          트렌디한 감각을 가진 ‘주니어 멘토’<br />
          모두 멘토스에서 만나보세요.
        </p>
      </div>
    </div>

    <!-- 카테고리 카드 -->
    <div class="cont-wrap" v-if="categories && categories.length">
      <div class="category-content">
        <div v-for="(cate, i) in categories" :key="i" class="category-card">
          <img
            :src="cate.cateImg"
            :alt="`${cate.mainCate} 이미지`"
            class="category-image"
          />
          <div class="category-info">
            <div class="left-section">
              <div class="category-header">
                <p class="category-main">
                  <span v-if="cate.mainCate == '학업 / 교육'">
                    <iconEducation />
                  </span>
                  <span v-if="cate.mainCate == '경력 / 직업'">
                    <iconCarrier />
                  </span>
                  <span v-if="cate.mainCate == 'IT / 기술'">
                    <iconIT />
                  </span>
                  <span v-if="cate.mainCate == '금융 / 경제'">
                    <iconEconomy />
                  </span>
                  <span v-if="cate.mainCate == '자기계발 & 멘탈케어'">
                    <iconImprovement />
                  </span>
                  <span v-if="cate.mainCate == '예술 / 취미'">
                    <iconArt />
                  </span>
                  <span v-if="cate.mainCate == '기타'">
                    <iconEtc />
                  </span>
                  {{ cate.mainCate }}
                </p>
              </div>
              <ul class="sub-categories">
                <li
                  v-for="(sub, subIndex) in cate.subCate"
                  :key="subIndex"
                  class="sub-category"
                >
                  {{ sub }}
                </li>
              </ul>
            </div>
            <div class="right-section">
              <p class="category-main-title">{{ cate.mainTitle }}</p>
              <p class="category-sub-title">{{ cate.subTitle }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import cates from "@/datas/CategoriesExample";
import iconEducation from "@/components/icons/iconEducation.vue";
import iconCarrier from "@/components/icons/iconCarrier.vue";
import iconIT from "@/components/icons/iconIT.vue";
import iconEconomy from "@/components/icons/iconEconomy.vue";
import iconImprovement from "@/components/icons/iconImprovement.vue";
import iconArt from "@/components/icons/iconArt.vue";
import iconEtc from "@/components/icons/iconEtc.vue";

export default {
  name: "MainPage",
  data() {
    return {
      categories: cates,
    };
  },
  methods: {},
  components: {
    iconEducation,
    iconCarrier,
    iconIT,
    iconEconomy,
    iconImprovement,
    iconArt,
    iconEtc,
  },
};
</script>

<style scoped>
.main-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.main-banner {
  width: 100%;
  max-width: 1600px;
  padding: 60px 20px;
  background-image: url("@/images/mainImg.png");
  background-size: cover;
  background-position: center;
  border-radius: 16px;
  color: white;
  text-align: left;
  margin-bottom: 40px;
}

.cont-wrap {
  width: 100%;
  max-width: 1200px;
  padding: 20px;
}

.category-content {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.category-card {
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 200px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
  background-color: #fff;
  box-sizing: border-box;
}

.category-image {
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
  margin-right: 30px;
}

.category-info {
  flex: 1;
  display: flex;
  justify-content: space-between;
}

.left-info {
  max-width: 50%;
}

.right-info {
  max-width: 50%;
}

.category-main {
  font-size: 1.5rem;
  color: #7980ab;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.category-main span {
  display: inline-flex;
  align-items: center;
  margin-right: 5px;
}

.category-main-title {
  font-size: 1.125rem;
  font-weight: bold;
  color: black;
  margin-bottom: 10px;
  white-space: pre-line;
}

.category-sub-title {
  font-size: 1rem;
  color: #888;
  margin-bottom: 10px;
  white-space: pre-line;
}

.sub-categories {
  list-style: none;
  padding: 0;
  margin: 0;
}

.sub-category {
  font-size: 0.875rem;
  color: #555;
  margin-bottom: 5px;
}
</style>
