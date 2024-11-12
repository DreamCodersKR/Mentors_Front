<!-- Slider.vue -->
 <template>
  <div class="main-banner" :style="sliderStyle">
    <div ref="container" class="slider">
    <div class="slide">
      <div class="text-content5">
        <h1><iconCircles />멘티의 결과물을 위한 AI매칭</h1><br><br>
         <p class="subtitle">
          멘티가 원하는 결과를 위해<br>
          필요한 멘토와의 AI매칭에<br>
          집중하여 최고의 결과물을 얻을 수 있도록 합니다.</p><br>
      </div>
  </div>
    <div class="slide">
      <div class="text-content6">
        <h1><iconStacks/>지속성장을 위한 멘토링</h1><br><br>
         <p class="subtitle">
          누구나 달성 가능한 목표보다<br>
          아득한 수준의 목표에 도전함으로써<br>
          지속가능한 멘토링과 멘티의 지속성장을 목표로 합니다.</p><br>
      </div>
    </div>
    <div class="slide">
      <div class="text-content7">
        <h1><iconSquare/>트렌드를 반영한 서비스 개선</h1><br><br>
         <p class="subtitle">
          빠르게 변하는 업계 트렌드와 현상을 파악하며<br>
          다양한 시행착오를 신속하게 거듭하면서<br>
          우리의 서비스를 개선합니다.</p><br>
      </div>
    </div>
    <div class="slide">
      <div class="text-content1">
        <h1 class="title">
          멘토와 멘티,<br />
          그 연결의 시작은 
          '멘토스'에서<br>
        </h1>
          <p>
            멘토스는 AI 맞춤 멘토링 서비스를 제공 합니다.<br />
            풍부한 경험과 지식을 소유한 ‘시니어 멘토’<br />
            트렌디한 감각을 가진 ‘주니어 멘토’<br />
            모두 멘토스에서 만나보세요.
          </p>
      </div>
    </div>
    <div class="slide">
      <div class="text-content2">
        <div class="subtitle2">
        <h1>2024년<br>
            최고의 멘토를찾습니다.<br></h1>
          </div>
      </div>
    </div>
    <div class="slide">
      <div class="text-content3">
        <div class="subtitle3">
       <h1>GRAND OPEN<br>
       <span>MENTORS</span><br>
             2024.11.11</h1>
            </div>
      </div>
    </div>
    <div class="slide">
      <div class="text-content4">
        <h1><iconHandshake/>멘토의 필요성을 중시</h1><br><br>
          <p class="subtitle">
            우리는 선호보다<br>
            사용자가 필요로 하는 것을 최우선으로 삼습니다.</p><br>
      </div>
    </div>
    </div>

    <div class="buttons">
      <button class="prev" @click="prev">이전</button>
      <button class="next" @click="next">다음</button>
    </div>
    
    <ul class="pagination">
    <li class="active" data-index="1"></li>
    <li data-index="2"></li>
    <li data-index="3"></li>
    <li data-index="4"></li>
    <li data-index="5"></li>
    <li data-index="6"></li>
    <li data-index="7"></li>
  </ul>
  </div>
</template>

<script>
import { ref, onMounted, onBeforeUnmount, computed } from 'vue';
import iconCircles from './icons/iconCircles.vue';
import iconHandshake from './icons/iconHandshake.vue';
import iconSquare from './icons/iconSquare.vue';
import iconStacks from './icons/iconStacks.vue';

export default {
  name: 'SliderComponent',
  components : {
    iconCircles,
    iconHandshake,
    iconSquare,
    iconStacks,
  },
  setup() {
    const container = ref(null);
    const slides = ref([]);
    const isSidebarOpen = ref(false);
    let intervalId = null;
    const slideInterval = 3000;
    let isAutoslidepaused = false;
    let currentSlideIndex = ref(0);

    onMounted(() => {
      
      currentSlideIndex.value = 0;
      console.log(currentSlideIndex.value);
      slides.value = Array.from(container.value.querySelectorAll('.slide'));
      updateDots(); // 초기 도트 상태 업데이트
      startAutoslide();
    });

    onBeforeUnmount(() => {
      if (intervalId) clearInterval(intervalId);
    });

    const startAutoslide = () => {
      if (!isAutoslidepaused) {
        intervalId = setInterval(next, slideInterval);
      }
    };

    const stopAutoslide = () => {
      clearInterval(intervalId);
      isAutoslidepaused = true;
    };

    const prev = () => {
      stopAutoslide();
      
      if (slides.value.length > 0) {
        container.value.prepend(slides.value[slides.value.length - 1]);
        slides.value.unshift(slides.value.pop());
      }
      currentSlideIndex.value =
        ( currentSlideIndex.value - 1 + slides.value.length) % slides.value.length;
      updateDots();
      startAutoslide();
    };

    const next = () => {
      console.log(currentSlideIndex.value);

    stopAutoslide();

  if (slides.value.length > 0) {
    container.value.append(slides.value[0]);
    slides.value.push(slides.value.shift());
  }
  
  // 슬라이드 이동 후 인덱스 업데이트
  currentSlideIndex.value = ( currentSlideIndex.value + 1) % slides.value.length; // 인덱스를 순환하도록 수정
  updateDots();
  
  isAutoslidepaused = false;
  startAutoslide();
};

    const updateDots = () => {
    const dots = document.querySelectorAll('.pagination li');
      dots.forEach((dot, index) => {
        if (index ===  currentSlideIndex.value) {
            dot.classList.add('active');
      } else {
            dot.classList.remove('active');
    }
  });
};

    const sliderStyle = computed(() => {
      return {
        width: isSidebarOpen.value ? 'calc(100% - 250px)' : '100%',
        transition: 'width 0.3s ease-in-out',
      };
    });

    const toggleSidebar = () => {
      isSidebarOpen.value = !isSidebarOpen.value;
    };
    
    return {
      container,
      slides,
      prev,
      next,
      isSidebarOpen,
      sliderStyle,
      toggleSidebar,
    };
  },
  data() {
    return {
    };
  },
  methods: {},
};
</script>

<style scoped>
svg {
margin-left: 5px;
margin-right: 8px;
margin-top: 0px;
margin-bottom: 0px;
vertical-align: middle;
margin-top: -5px;
}
.main-container {
display: flex;
flex-direction: column;
align-items: center;
/* padding: 20px; */
}

.main-banner {
width: 1200px; /* 최대 너비를 고정 */
height: 300px; /* 배너 높이 */
overflow: hidden; /* 슬라이드가 벗어나지 않도록 조절 */
position: relative;
padding: 60px 20px;
background-size: cover;
background-position: center;
border-radius: 16px;
color: white;
text-align: left;
}
/* --------------------------------------------------------------------------------------- */
.text-content1{
background-image: url("@/images/banner1.jpg");
background-size: cover; /* 이미지를 컨테이너에 꽉 차게 */
background-position: center; /* 이미지를 중앙에 위치시킴 */
width: 100%; /* 부모 요소 크기에 맞게 확장 */
height: 100%; /* 부모 요소 높이에 맞게 확장 */
border-radius: 20px;
padding : 20px;
}
.text-content2{
background-image: url("@/images/banner2.png");
background-size: cover; /* 이미지를 컨테이너에 꽉 차게 */
background-position: center; /* 이미지를 중앙에 위치시킴 */
width: 100%; /* 부모 요소 크기에 맞게 확장 */
height: 100%; /* 부모 요소 높이에 맞게 확장 */
border-radius: 20px;
padding : 20px;
align-content: center;
vertical-align: middle;
font-size : 17px;
}

.text-content3{
background-image: url("@/images/banner3.png");
background-size: cover; /* 이미지를 컨테이너에 꽉 차게 */
background-position: center; /* 이미지를 중앙에 위치시킴 */
width: 100%; /* 부모 요소 크기에 맞게 확장 */
height: 100%; /* 부모 요소 높이에 맞게 확장 */
border-radius: 20px;
padding : 20px;
align-content: center;
vertical-align: middle;
font-size : 17px;
}
span{
  background: linear-gradient(to left, #4A86F4, #BB00EF);
  color: transparent;
  -webkit-background-clip: text;
}
.text-content4{
background-image: url("@/images/banner4.png");
background-size: cover; /* 이미지를 컨테이너에 꽉 차게 */
background-position: center; /* 이미지를 중앙에 위치시킴 */
width: 100%; /* 부모 요소 크기에 맞게 확장 */
height: 100%; /* 부모 요소 높이에 맞게 확장 */
border-radius: 20px;
padding : 20px;
padding-top:40px;
display: flex;
flex-direction: column;
justify-content: center;
height: 100%; /* 부모 요소의 높이에 따라 조정 */
text-align: left; /* 텍스트를 왼쪽으로 정렬 */
}
.text-content5{
background-image: url("@/images/banner5.png");
background-size: cover; /* 이미지를 컨테이너에 꽉 차게 */
background-position: center; /* 이미지를 중앙에 위치시킴 */
width: 100%; /* 부모 요소 크기에 맞게 확장 */
height: 100%; /* 부모 요소 높이에 맞게 확장 */
border-radius: 20px;
padding : 20px;
padding-top:40px;
display: flex;
flex-direction: column;
justify-content: center;
height: 100%; /* 부모 요소의 높이에 따라 조정 */
text-align: left; /* 텍스트를 왼쪽으로 정렬 */
}
.text-content6{
background-image: url("@/images/banner6.png");
background-size: cover; /* 이미지를 컨테이너에 꽉 차게 */
background-position: center; /* 이미지를 중앙에 위치시킴 */
width: 100%; /* 부모 요소 크기에 맞게 확장 */
height: 100%; /* 부모 요소 높이에 맞게 확장 */
border-radius: 20px;
padding : 20px;
padding-top:40px;
display: flex;
flex-direction: column;
justify-content: center;
height: 100%; /* 부모 요소의 높이에 따라 조정 */
text-align: left; /* 텍스트를 왼쪽으로 정렬 */
}
.text-content7{
background-image: url("@/images/banner7.png");
background-size: cover; /* 이미지를 컨테이너에 꽉 차게 */
background-position: center; /* 이미지를 중앙에 위치시킴 */
width: 100%; /* 부모 요소 크기에 맞게 확장 */
height: 100%; /* 부모 요소 높이에 맞게 확장 */
border-radius: 20px;
padding : 20px;
padding-top:40px;
display: flex;
flex-direction: column;
justify-content: center;
height: 100%; /* 부모 요소의 높이에 따라 조정 */
text-align: left; /* 텍스트를 왼쪽으로 정렬 */
}
/* --------------------------------------------------------------------------------------- */
.title{
padding-top : 10px;
padding-bottom : 10px;
}
.subtitle{
padding-left : 55px;
}
.subtitle2{
padding-left : 40px;
margin-bottom : 20px;
}
.subtitle3{
padding-left : 30px;
}
.slider{
width:100%;
height:100%;
perspective: 500px;
transform-style: preserve-3d;
}
.slide {
border-radius: 20px;
transition:0.5s;
width:950px;
box-shadow:0 1px 10px gray;
height:250px;
background:white;
position:absolute;
left:680px;
top:90px;
transform:translate(-50%,-50%);
}
/* 슬라이드 1과 2 */
.slide:nth-of-type(1), .slide:nth-of-type(2) {
transform: translate(calc(-50% * 5.1), -50%) translateZ(-100px);
}

/* 슬라이드 3 */
.slide:nth-of-type(3) {
transform: translate(calc(-50% * 3.1), -50%) translateZ(-50px);
}

/* 슬라이드 4 */
.slide:nth-of-type(4) {
transform: translate(calc(-50% * 1.1), -50%) translateZ(50px);
}

/* 슬라이드 5 */
.slide:nth-of-type(5) {
transform: translate(calc(-50% * -0.9), -50%) translateZ(-50px);
}

/* 슬라이드 6과 7 */
.slide:nth-of-type(6), .slide:nth-of-type(7) {
transform: translate(calc(-50% * -2.9), -50%) translateZ(-100px);
}
.main-banner .buttons {
position:absolute;
z-index:1;
bottom:1em;
left:50%;
transform:translate(-50%);
display : grid;
grid-template-columns: 1fr 1fr; /* 두 개의 열을 균등하게 나눔 */
grid-template-rows: 1fr;
 
}
.main-banner .buttons button{
 opacity:0%;
 padding-top :130px;
 padding-bottom: 100px;
 padding-left : 400px;
 padding-right : 400px;
}

.pagination {
display: flex;
position: absolute;
bottom: 40px;
left: 50%;
transform: translateX(-50%);
z-index: 99;
gap: 10px; /* 각 원 사이 간격 */
list-style: none; /* 기본 점 스타일 제거 */
opacity : 0;
transition: opacity 0.3s ease, transform 0.3s ease; /* opacity와 transform 변화 부드럽게 */
}
.main-banner:hover .pagination {
opacity: 1; /* 배너에 마우스를 올리면 원이 보이도록 설정 */
}

.pagination li {
width: 8px; /* 원의 크기 */
height: 8px; /* 원의 크기 */
background-color: #fff; /* 비활성화된 원의 색상 */
border-radius: 50%; /* 원 형태로 */
transition: background-color 0.3s ease; /* 부드러운 색상 변화 */
cursor: pointer; /* 클릭할 수 있도록 커서 변경 */
}

.pagination li.active {
background-color: #000; /* 활성화된 원의 색상 */
}

.pagination li:hover {
background-color: #949494; /* 마우스를 올렸을 때 색상 변경 */
}
</style>