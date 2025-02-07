<script lang="ts" setup>
useHead({
  title: "ZEISS VISION EXPERT｜希瑪視光中心",
  meta: [
    {
      hid: "description",
      name: "description",
      content:
        "希瑪眼科視光中心（CMER VISION）是希瑪眼科醫療集團旗下的視光中心。我們的註冊視光師團隊致力為所有年齡層提供優質的眼睛護理及專業視光服務，包括全面眼睛檢查、視光檢查、角膜矯形術（OK鏡）、兒童近視控制鏡片、近視控制隱形眼鏡，以及各種眼鏡驗配服務等。希瑪視光擁有符合國際水平的視光檢查儀器，並得到蔡司官方認證為ZVE視光專家，提供我的蔡司視覺體驗，為客人提供一站式可靠及個人化的眼睛檢查服務及改善視力方案。",
    },
    {
      hid: "Keywords",
      name: "Keywords",
      content:
        "希瑪視光 希瑪眼科視光中心 cmer vision 視光中心 視光師 眼睛檢查 視光檢查 蔡司ZVE視光專家 蔡司視覺體驗註冊視光師 視光師驗眼 視光師驗眼中心 全面眼睛檢查 全面眼科視光檢查 希瑪眼科視光中心旺角 希瑪眼科視光中心中環 旺角視力中心 兒童視光中心 眼科驗眼中心 驗眼 驗眼中心 兒童驗眼 驗眼度數 隱形眼鏡驗眼 檢查眼睛 全面眼睛檢查費用 驗眼費用 綜合眼科視光檢查 眼睛檢查 視野檢查 近視控制 兒童近視控制 ok鏡 控制近視鏡片 ",
    },
  ],
});

// 轮播
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/scss/navigation";
import "swiper/css/effect-coverflow";
import {
  Pagination,
  Navigation,
  EffectCoverflow,
  Autoplay,
} from "swiper/modules";
const modules = [Pagination, Navigation, EffectCoverflow, Autoplay];

const swiperBox = (swiper: any) => {
  deBoxSwiperRef = swiper;
};

let deBoxSwiperRef = {
  slideTo: (a: any) => {},
  slideToLoop: (a: any) => {},
  slidePrev: () => {},
  slideNext: () => {},
};

const handlesSliNext = () => {
  deBoxSwiperRef.slideNext();
};
const handlesSliPrev = () => {
  deBoxSwiperRef.slidePrev();
};

const swiperRef = ref(null);
const isRotated = ref(false);
const touchStartX = ref(0);
const touchEndX = ref(0);

// function handleTouchStart(event: any) {
//   // touchStartX.value = event.touches[0].clientX;
// }

// function handleTouchEnd(event: any) {
// console.log(event)
//   // touchEndX.value = event.changedTouches[0].clientX;
//   // const deltaX = touchEndX.value - touchStartX.value;

//   // if (Math.abs(deltaX) > 50) {
//   //   console.log("1");
//   //   isRotated.value = true;
//   // } else {
//   //   isRotated.value = false;
//   //   console.log("2");
//   // }
// }

const discountsList = ref([
  {
    id: 1,
    img: "https://statichk.cmermedical.com/vision/imgs/7f56de0049e825da.jpg",
    content: "",
  },
  {
    id: 2,
    img: "https://statichk.cmermedical.com/vision/imgs/b24898a75d6536b2.png",
    content: "",
  },
  {
    id: 3,
    img: "https://statichk.cmermedical.com/vision/imgs/43654d9aac2f6efb.jpg",
    content: "",
  },
  {
    id: 4,
    img: "https://statichk.cmermedical.com/vision/imgs/02062e542e03a981.jpg",
    content: "",
  },
  {
    id: 5,
    img: "https://statichk.cmermedical.com/vision/imgs/ceb824735dbd56f9.jpg",
    content: "",
  },
]);

const bannerImg = {
  // pc: "https://content.cmervision.com//static/upload/image/20241224/1735001362999905.png",
  // mobile:
  //   "https://content.cmervision.com//static/upload/image/20241224/1735001367776208.png",
  pc: "https://statichk.cmermedical.com/vision/imgs/2025012115033203.png",
  mobile: "https://statichk.cmermedical.com/vision/imgs/2025012115033202.png",
  newBanner: true,
};

const imgList = [
  "https://statichk.cmermedical.com/vision/imgs/666c1d99c27658bf.png",
  "https://statichk.cmermedical.com/vision/imgs/5a960c3598776b5f.png",
  "https://statichk.cmermedical.com/vision/imgs/dc0b7696b2d87ed0.png",
  "https://statichk.cmermedical.com/vision/imgs/a8ff8092442374c1.png",
];

import getWindowSize from "@/utils/width";

const isPc = ref(false);
const mySwiper = ref<InstanceType<typeof Swiper> | null>(null);
onMounted(() => {
  window.addEventListener("resize", () => {
    let { widthState, width } = getWindowSize();
    isPc.value = widthState;
  });

  const observer = new IntersectionObserver(handleIntersection, {
    threshold: 0.1, // 当元素至少10%出现在视口时触发回调
  });

  if (observerTarget.value) {
    observer.observe(observerTarget.value);
  }
  const swiper = mySwiper;
  if (swiper) {
    // (mySwiper.value as any).on("touchStart", handleTouchStart);
    // (mySwiper.value as any).on("touchEnd", handleTouchEnd);
  }
});

//特色服务切换
const indexNum = ref(0);
const openDialog = (index: any) => {
  indexNum.value = index;
};

const dialogTop = () => {
  if (indexNum.value > 0) {
    indexNum.value--;
  }
};
const dialogBottom = () => {
  if (indexNum.value < 2) {
    indexNum.value++;
  }
};
const listDiscounts = [
  {
    id: 1,
    title: `精密測量眼睛度數`,
    img: "https://statichk.cmermedical.com/vision/imgs/4a688fa160e96203.jpg",
    svg: "https://statichk.cmermedical.com/vision/imgs/1dede03366c21b1d.png",
    content: `每個人的眼睛不只單一度數，角膜和瞳孔都是獨一無二, 像指紋一樣獨特。眼睛受高階像差影響會導致度數有差別，因此進行光學指紋測量能全面分析你的視力，找到最真實的度數並優化鏡片度數。`,
  },
  {
    id: 2,
    title: `精準的鏡框中心定位`,
    img: "https://statichk.cmermedical.com/vision/imgs/7c34641f63a81653.jpg",
    svg: "https://statichk.cmermedical.com/vision/imgs/cb3cecd90c579e62.png",
    content: `精準的鏡框中心定位利用全新儀器VISUFIT 1000精密測量眼睛和眼鏡之間的所有角度，能確定鏡片在鏡框內的確切位置。為客人度身訂造專屬的鏡框，提高配戴舒適度。`,
  },
  {
    id: 3,
    title: `客製化個人鏡片`,
    img: "https://statichk.cmermedical.com/vision/imgs/fa7584e4f1659ada.jpg",
    svg: "https://statichk.cmermedical.com/vision/imgs/0587c601a83a42f8.png",
    content: `利用i.Technology技術得出獨一無二的鏡片數據，根據你的用眼習慣及視覺需求等定制出適合你的鏡片，令你擁有最佳的視覺品質。 `,
  },
];

let indexBollean = ref(false);
let indexTwoBollean = ref(false);

//个性化配镜流程

const changeBtn = (i: number) => {
  if (i == 1) {
    indexBollean.value = !indexBollean.value;
  } else if (i == 2) {
    indexTwoBollean.value = !indexTwoBollean.value;
  }
};

const closeBtn = () => {
  indexBollean.value = false;
  indexTwoBollean.value = false;
};

// 视觉资料
const observerTarget = ref(null);
const titleShow = ref(true);
const handleIntersection = (entries: any, observer: any) => {
  entries.forEach((entry: any) => {
    if (entry.isIntersecting) {
      titleShow.value = !true;
    }
  });
};

const mouseoverItem = (index: number) => {
  const element1 = document.querySelector(".vision-experience-img-list-item1");
  const element2 = document.querySelector(".vision-experience-img-list-item2");
  const element3 = document.querySelector(".vision-experience-img-list-item3");
  const elementBox = document.querySelector(".vision-experience-img-list-box");

  if (index == 1) {
    if (element1) {
      element1.classList.add("active-img");
    }
    if (elementBox) {
      elementBox.classList.add("active-box");
    }
  } else if (index == 2) {
    if (element2) {
      element2.classList.add("active-img");
    }
    if (elementBox) {
      elementBox.classList.add("active-box");
    }
  } else if (index == 3) {
    if (element3) {
      element3.classList.add("active-img");
    }
    if (elementBox) {
      elementBox.classList.add("active-box");
    }
  }
};
// 鼠标移出
const mouseoutItem = (index: number) => {
  const element1 = document.querySelector(".vision-experience-img-list-item1");
  const element2 = document.querySelector(".vision-experience-img-list-item2");
  const element3 = document.querySelector(".vision-experience-img-list-item3");
  const elementBox = document.querySelector(".vision-experience-img-list-box");
  // if (element1) {
  //   if (element1) {
  //     element1.classList.remove("active-img");
  //   }
  //   if (elementBox) {
  //     elementBox.classList.remove("active-box");
  //   }
  // }
};
const regionItem = (index: number) => {
  const element1 = document.querySelector(".vision-experience-img-list-item1");
  const element2 = document.querySelector(".vision-experience-img-list-item2");
  const element3 = document.querySelector(".vision-experience-img-list-item3");
  const elementBox = document.querySelector(".vision-experience-img-list-box");
  console.log(element1, "index");

  if (index === 1) {
    if (element1) {
      element1.classList.remove("active-img");
    }
    if (elementBox) {
      elementBox.classList.remove("active-box");
    }
  }
  if (index === 2) {
    if (element2) {
      element2.classList.remove("active-img");
    }
    if (elementBox) {
      elementBox.classList.remove("active-box");
    }
  }
  if (index === 3) {
    if (element3) {
      element3.classList.remove("active-img");
    }
    if (elementBox) {
      elementBox.classList.remove("active-box");
    }
  }
};
</script>

<template>
  <div class="zve-information">
    <PublicBanner :banner="bannerImg">
      <!-- 插槽 -->
      <template #title>
        <div class="zveTitle">
          <h2>ZEISS VISION EXPERT</h2>
          <span
            >作為「ZEISS VISION
            EXPERT」認證的視光中心，希瑪視光為您提供卓越的視覺解決方案和個人化的眼鏡配鏡服務。我們的專業視光團隊將為您帶來一絲不苟的驗眼流程。</span
          >
        </div>
      </template>
    </PublicBanner>
    <!-- <img
      class="zveImg"
      src="https://statichk.cmermedical.com/vision/imgs/98a021b3329ea1b1.png"
      alt=""
    /> -->
    <div class="contain">
      <div class="containLine">
        <div class="linear">
          <div class="fontTitle" style="letter-spacing: 0px">
            ZEISS VISION EXPERT認證
          </div>
        </div>
        <div class="fontText">
          希瑪視光擁有蔡司全套先進眼科設備和個人化<br
            class="pcShow"
          />的驗配流程，均得到德國蔡司官方認證。<br />我們提供精確量度眼睛度數、極致全面的視覺<br />分析,
          以及獨一無二的解決方案。
        </div>
        <div class="fontFooter"></div>
      </div>
    </div>
  </div>

  <!-- 服务特色 -->
  <div class="wpb_wrapper">
    <div class="contain-bg">
      <div class="selling-point">
        <div class="selling-point-title">服務特色</div>
        <div class="selling-point-item">
          <div>
            <img
              src="https://statichk.cmermedical.com/vision/imgs/2025012115091401.png"
              alt="ZEISS Vision Expert"
            />
          </div>
          <div class="item-content">
            <div>客製化個人鏡片</div>
            <div>
              利用i.Technology技術得出獨一無二的鏡片數據，根據你的用眼習慣及視覺需求等定制出適合你的鏡片，令你擁有最佳的視覺品質。
            </div>
          </div>
        </div>
        <div class="selling-point-item">
          <div class="item-content">
            <div>精密測量眼睛數據</div>
            <div>
              每個人的眼睛不只單一度數，角膜和瞳孔都是獨一無二,
              像指紋一樣獨特。眼睛受高階像差影響會導致度數有差別，因此進行光學指紋測量能全面分析你的視力，找到最真實的度數並優化鏡片度數。
            </div>
          </div>
          <div>
            <img
              src="https://statichk.cmermedical.com/vision/imgs/2025012115091402.png"
              alt="ZEISS Vision Expert"
            />
          </div>
        </div>
        <div class="selling-point-item">
          <div>
            <img
              src="https://statichk.cmermedical.com/vision/imgs/2025012115091403.png"
              alt="ZEISS Vision Expert"
            />
          </div>
          <div class="item-content">
            <div>精準的鏡框中心定位</div>
            <div>
              精準的鏡框中心定位利用全新儀器VISUFIT
              1000精密測量眼睛和眼鏡之間的所有角度，能確定鏡片在鏡框內的確切位置。為客人度身訂造專屬的鏡框，提高配戴舒適度。
            </div>
          </div>
        </div>
      </div>
      <div class="feature_page">
        <div class="wrapper_feature">
          <div class="feature-item">
            <div class="feature-item-img">
              <img
                :src="listDiscounts[indexNum].img"
                :alt="listDiscounts[indexNum].title"
              />
            </div>
            <div class="feature-item-declare">
              <div class="feature-item-left-top">
                <img
                  class="feature-img"
                  :src="listDiscounts[indexNum].svg"
                  :alt="listDiscounts[indexNum].title"
                />
                <p class="feature-title">
                  {{ listDiscounts[indexNum].title }}
                  <br v-if="listDiscounts[indexNum].br" />{{
                    listDiscounts[indexNum].br ? listDiscounts[indexNum].br : ""
                  }}
                </p>
              </div>
              <div class="feature-item-content">
                {{ listDiscounts[indexNum].content }}
              </div>
            </div>
          </div>
        </div>
        <div class="swiper-button-container">
          <div @click="dialogTop" class="dialog-beacon dialog-left">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="16"
              viewBox="0 0 25 16"
              fill="none"
            >
              <path
                d="M23.6833 13.9587L12.7246 3L1.81371 13.9109"
                stroke="#2449A4"
                stroke-width="3.60417"
              ></path>
            </svg>
          </div>
          <div @click="dialogBottom" class="dialog-beacon dialog-right">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="16"
              viewBox="0 0 25 16"
              fill="none"
            >
              <path
                d="M1.81378 2.13067L12.7725 13.0894L23.6834 2.17846"
                stroke="#2449A4"
                stroke-width="3.60417"
              ></path>
            </svg>
          </div>
          <div class="beacon-list">
            <p
              @click="openDialog(0)"
              :class="indexNum == 0 ? 'beacon-list-active' : ''"
            >
              精密測量<br />眼睛數據
            </p>
            <p
              @click="openDialog(1)"
              :class="indexNum == 1 ? 'beacon-list-active' : ''"
            >
              精確的鏡片<br />
              鏡框-臉型<br />
              中心定位
            </p>
            <p
              @click="openDialog(2)"
              :class="indexNum == 2 ? 'beacon-list-active' : ''"
            >
              客製化<br />
              個人鏡片
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="vision-experience">
    <div class="vision-experience-bg">
      <div class="vision-experience-content">
        <div class="vision-experience-title">
          <div class="vision-experience-title-text">
            MY<br />VISION<span>視界的全新體驗</span><br />EXPERIENCE
          </div>
          <div class="vision-experience-img-list">
            <div
              class="vision-experience-img-list-item vision-experience-img-list-item1"
            >
              <img
                src="https://statichk.cmermedical.com/vision/imgs/2025012116010801.png"
                alt=""
              />
            </div>
            <div
              class="vision-experience-img-list-item vision-experience-img-list-item2"
            >
              <img
                src="https://statichk.cmermedical.com/vision/imgs/2025012116010802.png"
                alt=""
              />
            </div>
            <div
              class="vision-experience-img-list-item vision-experience-img-list-item3"
            >
              <img
                src="https://statichk.cmermedical.com/vision/imgs/2025012116010803.png"
                alt=""
              />
            </div>
            <div
              class="vision-experience-img-list-item4 vision-experience-img-list-box"
            ></div>
          </div>
        </div>
        <div></div>
      </div>
      <div class="bg-mask-layer"></div>
    </div>
  </div>
  <!-- 个人化配镜流程 -->
  <div class="pj_wrapper">
    <div class="linear circle_title" style="height: auto">
      <div class="fontTitle">
        <span style="letter-spacing: 5px"> 個人化的專業配鏡流程 </span>
        <small style="display: block">My Vision Experience by ZEISS</small>
      </div>
    </div>
    <div class="in-plant-child-text">
      有別於一般眼鏡店, 我們的驗眼流程包括<strong style="color: #2449a4"
        >8個步驟</strong
      >全方位測量你的眼睛，帶給你專屬的視覺體驗。
    </div>
    <div class="circle-bg-border">
      <div class="circle">
        <div class="center-text">你的蔡司<br />視覺體驗</div>
        <div class="step step-one">
          <img
            class="pcShow"
            src="https://statichk.cmermedical.com/vision/imgs/1f7082c52e49d500.png"
            alt="視覺需求分析"
          />
          <h3><span>01</span><span>視覺需求分析</span></h3>
        </div>
        <div class="step step-two">
          <img
            class="pcShow"
            src="https://statichk.cmermedical.com/vision/imgs/4d325fb0af213050.png"
            alt="光學指紋測量及視覺表現分析"
          />
          <h3>
            <span>02</span><span>光學指紋<br class="mbShow" />測量</span>
          </h3>
          <div class="btn" @click="changeBtn(1)">
            <img
              src="https://statichk.cmermedical.com/vision/imgs/3e6e24f3edea4675.png"
              alt="按钮"
              :style="{
                transform:
                  indexBollean == true ? 'rotate(0deg)' : 'rotate(-90deg)',
              }"
            />
          </div>
          <p :style="{ opacity: indexBollean == true ? '1' : '0' }">
            分析眼睛的高階像差、日間和<br class="mbShow" />夜間的視覺表現
          </p>
          <p :style="{ opacity: indexBollean == true ? '1' : '0' }">
            採用前導波技術全面分析
          </p>
          <p :style="{ opacity: indexBollean == true ? '1' : '0' }">
            使用VISUCORE 500儀器
          </p>
        </div>
        <div class="step step-three">
          <img
            class="pcShow"
            src="https://statichk.cmermedical.com/vision/imgs/3356b98dc5f9bbc9.png"
            alt="鏡框選擇"
          />
          <h3><span>03</span><span>視覺表現分析</span></h3>
        </div>
        <div class="step step-three-two">
          <img
            class="pcShow"
            src="https://statichk.cmermedical.com/vision/imgs/3356b98dc5f9bbc9.png"
            alt="鏡框選擇"
          />
          <h3><span>04</span><span>鏡框選擇</span></h3>
        </div>
        <div class="step step-four">
          <img
            class="pcShow"
            src="https://statichk.cmermedical.com/vision/imgs/5543b949c6357f3b.png"
            alt="鏡框中心定位"
          />
          <h3><span>05</span><span>鏡框中心定位</span></h3>
          <div class="btn-four-two" @click="changeBtn(2)">
            <img
              src="https://statichk.cmermedical.com/vision/imgs/3e6e24f3edea4675.png"
              alt="按钮"
              :style="{
                transform:
                  indexTwoBollean == true ? 'rotate(0deg)' : 'rotate(-90deg)',
              }"
            />
          </div>
          <p :style="{ opacity: indexTwoBollean == true ? '1' : '0' }">
            精準定位鏡框中心
          </p>
          <p :style="{ opacity: indexTwoBollean == true ? '1' : '0' }">
            使用VISUFIT 100儀器 快速偵測
          </p>
        </div>
        <div class="step step-five">
          <img
            class="pcShow"
            src="https://statichk.cmermedical.com/vision/imgs/2d665e15c13a5de0.png"
            alt="專屬鏡片"
          />
          <h3><span>06</span><span>專屬鏡片</span></h3>
        </div>
        <div class="step step-six">
          <img
            class="pcShow"
            src="https://statichk.cmermedical.com/vision/imgs/89ac432219c4fabf.png"
            alt="領取眼鏡"
          />
          <h3><span>07</span><span>領取眼鏡</span></h3>
        </div>
        <div class="step step-seven">
          <img
            class="pcShow"
            src="https://statichk.cmermedical.com/vision/imgs/7bcbb1ffe6f3d63c.png"
            alt="服務和跟進"
          />
          <h3>
            <span>08</span><span>服務和<br class="mbShow" />跟進</span>
          </h3>
        </div>
      </div>

      <div
        class="circleTwo"
        v-if="indexBollean == true || indexTwoBollean == true"
      >
        <div>
          <img
            :src="
              indexBollean == true
                ? 'https://statichk.cmermedical.com/vision/imgs/4d325fb0af213050.png'
                : 'https://statichk.cmermedical.com/vision/imgs/2d665e15c13a5de0.png'
            "
            alt=""
          />
          <h3>{{ indexBollean == true ? "02" : "05" }}</h3>
          <div class="circleTwo-title">
            <span
              >{{ indexBollean == true ? "光學指紋測量" : "鏡框中心定位" }}
            </span>
            <img
              @click="closeBtn"
              :src="
                indexBollean == true
                  ? 'https://statichk.cmermedical.com/vision/imgs/3e6e24f3edea4675.png'
                  : 'https://statichk.cmermedical.com/vision/imgs/3e6e24f3edea4675.png'
              "
              alt="按钮"
            />
          </div>
          <p class="content">
            {{
              indexBollean == true
                ? "分析眼睛的高階像差、日間和夜間的視覺表現"
                : "精準定位鏡框中心"
            }}
          </p>
          <p class="content">
            {{
              indexBollean == true
                ? "採用前導波技術全面分析"
                : "使用VISUFIT 100儀器快速偵測"
            }}
          </p>
          <p
            class="content"
            :style="{ display: indexTwoBollean == true ? 'none' : 'block' }"
          >
            {{ indexBollean == true ? "使用VISUFIT 100儀器快速偵測" : "" }}
          </p>
        </div>
      </div>
      <div class="btn-child mb-show">
        <img
          src="https://statichk.cmermedical.com/vision/imgs/4d325fb0af213050.png"
          alt="一站式精準驗光流程"
        />
        <h3>
          <span>02</span><span>一站式精準<br />驗光流程</span>
        </h3>
        <div class="btn-two mb-show">
          <img
            src="https://statichk.cmermedical.com/vision/imgs/3e6e24f3edea4675.png"
            alt="按钮"
          />
        </div>
        <div class="child-span">
          <span>・分析眼睛的高階像差，日間和夜間的視覺表現</span>
          <span>・採用前導波技術全面分析</span>
        </div>
      </div>
      <div class="btn-child-two mb-show">
        <img
          src="https://statichk.cmermedical.com/vision/imgs/4d325fb0af213050.png"
          alt="光學指紋測量及視覺表現分析"
        />
        <h3>
          <span>04</span><span>瞳孔與鏡片中心<br />完美匹配</span>
        </h3>
        <div class="btn-child-four-two mb-show">
          <img
            src="https://statichk.cmermedical.com/vision/imgs/3e6e24f3edea4675.png"
            alt="按钮"
          />
        </div>
        <div class="child-span">
          <span>・精準定位鏡框中心</span>
          <span>・使用VISUFIT 100儀器快速偵測</span>
        </div>
      </div>
    </div>
    <a
      class="whatapps-btn-series adult_service_btn"
      href="https://api.whatsapp.com/send?phone=85269180511&amp;text=(ZVE)%E7%AB%8B%E5%8D%B3%E6%9F%A5%E8%A9%A2/%E9%A0%90%E7%B4%84%E8%94%A1%E5%8F%B8%E8%A6%96%E8%A6%BA%E9%AB%94%E9%A9%97"
      target="_blank"
      ><p class="whatapps-btn-series-p">
        <span>立即體驗流程</span>
        <span
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="27"
            height="40"
            viewBox="0 0 27 40"
            fill="none"
          >
            <g filter="url(#filter0_d_1849_654)">
              <path
                d="M7 3L20 16L7 29"
                stroke="white"
                stroke-width="3"
                stroke-linecap="square"
              ></path>
            </g>
            <defs>
              <filter
                id="filter0_d_1849_654"
                x="0.878906"
                y="0.878662"
                width="25.2422"
                height="38.2427"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood
                  flood-opacity="0"
                  result="BackgroundImageFix"
                ></feFlood>
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                ></feColorMatrix>
                <feOffset dy="4"></feOffset>
                <feGaussianBlur stdDeviation="2"></feGaussianBlur>
                <feComposite in2="hardAlpha" operator="out"></feComposite>
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                ></feColorMatrix>
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_1849_654"
                ></feBlend>
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_1849_654"
                  result="shape"
                ></feBlend>
              </filter>
            </defs></svg
        ></span>
      </p>
    </a>
  </div>

  <!-- i2配镜 -->
  <div class="i2_wrapper">
    <div class="individuation">
      <div style="flex: 5.2"></div>
      <div style="flex: 4.8">
        <div>
          <div class="brand">蔡司</div>
          <div class="individuation-title">i2個人化鏡片系列</div>
        </div>
        <div class="individuation-items">
          <div class="item-span"><span></span><span>i2單光鏡片</span></div>
          <div class="item-span">
            <span></span><span>DriveSafe i2 單光鏡片</span>
          </div>
          <div class="item-span"><span></span><span>i2漸進鏡片</span></div>
          <div class="item-span">
            <span></span><span>DriveSafe i2 漸進鏡片</span>
          </div>
          <div class="item-span"><span></span><span>Digital i2鏡片</span></div>
          <div class="item-span"><span></span><span>Office i2 鏡片</span></div>
        </div>
        <a
          class="whatapps-btn-series-two adult_service_btn"
          href="https://api.whatsapp.com/send?phone=85269180511&amp;text=(ZVE)%E7%AB%8B%E5%8D%B3%E6%9F%A5%E8%A9%A2/%E9%A0%90%E7%B4%84%E9%A9%97%E9%85%8D%E8%94%A1%E5%8F%B8%E9%8F%A1%E7%89%87"
          target="_blank"
          ><p class="whatapps-btn-series-two-p">
            <span>想了解更多蔡司鏡片系列?</span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="27"
                height="40"
                viewBox="0 0 27 40"
                fill="none"
              >
                <g filter="url(#filter0_d_1849_654)">
                  <path
                    d="M7 3L20 16L7 29"
                    stroke="white"
                    stroke-width="3"
                    stroke-linecap="square"
                  ></path>
                </g>
                <defs>
                  <filter
                    id="filter0_d_1849_654"
                    x="0.878906"
                    y="0.878662"
                    width="25.2422"
                    height="38.2427"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood
                      flood-opacity="0"
                      result="BackgroundImageFix"
                    ></feFlood>
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    ></feColorMatrix>
                    <feOffset dy="4"></feOffset>
                    <feGaussianBlur stdDeviation="2"></feGaussianBlur>
                    <feComposite in2="hardAlpha" operator="out"></feComposite>
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    ></feColorMatrix>
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_1849_654"
                    ></feBlend>
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_1849_654"
                      result="shape"
                    ></feBlend>
                  </filter>
                </defs></svg
            ></span>
          </p>
        </a>
      </div>
    </div>
  </div>

  <!-- 视觉资料 -->
  <div class="wpb_raw_code wpb_content_element wpb_raw_html">
    <div class="sjb_wrapper" :class="titleShow ? 'fadeInUp' : 'fadeInUpShow'">
      <div ref="observerTarget" class="in-plant">
        <div class="in-plant-title">
          <span>我的視覺資料</span>
        </div>
        <div class="in-plant-child-text">
          初步了解自己的個人視覺習慣，<br />找出適合你的個人化鏡片
        </div>
        <a
          class="whatapps-btn-series adult_service_btn"
          target="_blank"
          href="https://myvisionprofile.zeiss.com/?locale=zh_hk#intro"
          ><p class="whatapps-btn-series-p">
            <span>進入測試</span>
            <span
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="27"
                height="40"
                viewBox="0 0 27 40"
                fill="none"
              >
                <g filter="url(#filter0_d_1849_654)">
                  <path
                    d="M7 3L20 16L7 29"
                    stroke="white"
                    stroke-width="3"
                    stroke-linecap="square"
                  ></path>
                </g>
                <defs>
                  <filter
                    id="filter0_d_1849_654"
                    x="0.878906"
                    y="0.878662"
                    width="25.2422"
                    height="38.2427"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood
                      flood-opacity="0"
                      result="BackgroundImageFix"
                    ></feFlood>
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    ></feColorMatrix>
                    <feOffset dy="4"></feOffset>
                    <feGaussianBlur stdDeviation="2"></feGaussianBlur>
                    <feComposite in2="hardAlpha" operator="out"></feComposite>
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    ></feColorMatrix>
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_1849_654"
                    ></feBlend>
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_1849_654"
                      result="shape"
                    ></feBlend>
                  </filter>
                </defs></svg
            ></span>
          </p>
        </a>
        <a
          class="in-plant-child-img show-before-on-hover"
          target="_blank"
          href="https://myvisionprofile.zeiss.com/?locale=zh_hk#intro"
        >
          <img
            src="https://statichk.cmermedical.com/vision/imgs/52e8a906f96b5fe7.gif"
            alt="ZEISS Vision Expert"
          />
        </a>
      </div>
    </div>
  </div>

  <!-- Swiper -->
  <main class="wpbSwpier">
    <div class="mySwpier">
      <swiper
        ref="mySwiper"
        class="mySwiperItem"
        :modules="modules"
        @swiper="swiperBox"
        :effect="'coverflow'"
        :grab-cursor="true"
        :centered-slides="true"
        :slides-per-view="3"
        :space-between="30"
        :loop="false"
        :initialSlide="1"
        :coverflow-effect="{
          rotate: 30,
          stretch: 0,
          depth: 200,
          modifier: 1,
          slideShadows: true,
        }"
        :touchMoveStopPropagation="false"
        :touchRatio="1"
        :autoplay="{ delay: 3000, disableOnInteraction: false }"
        @touch-start="handleTouchStart"
        @touch-end="handleTouchEnd"
      >
        <swiper-slide
          class="swiperIndex"
          v-for="item in discountsList"
          :key="item.id"
        >
          <div class="img-swiper">
            <img
              :class="{ rotated: isRotated }"
              class="draggable-image"
              :src="item.img"
              :alt="item.content"
            />
          </div>
        </swiper-slide>
      </swiper>

      <div class="swiper-button-next-prev">
        <div class="button-prev" @click="handlesSliPrev"></div>
        <div class="button-next" @click="handlesSliNext"></div>
      </div>
    </div>
  </main>
  <!-- 地址 -->
  <div class="vc_column-inner">
    <div class="wpb_wrapper">
      <div class="wpb_raw_code wpb_content_element wpb_raw_html">
        <div class="wpb_wrapper">
          <div class="address">
            <a
              class="address-img"
              target="_blank"
              href="https://maps.app.goo.gl/UzkcpBnECESrQ9iX9"
              ><img
                src="https://statichk.cmermedical.com/vision/imgs/1dd53262ddce08de.png"
                alt="蔡司ZVE視光專家 中環畢打街1-3號中建大廈1515室"
              />
            </a>
            <div>
              <div class="address-item">
                <div class="address-title">地址</div>
                <div class="address-text">
                  <span>中環畢打街1-3號中建大廈1515室</span>
                  <span>（中環站G出口）</span>
                </div>
              </div>
              <div class="address-item">
                <div class="address-title">營業時間</div>
                <div class="address-items">
                  <div class="address-text">
                    <span>星期一至五：</span> <span>09:30–13:30</span>
                    <span>14:30–18:00</span>
                  </div>
                  <div class="address-text">
                    <span>星期六：</span> <span>09:30-13:00</span>
                    <span>(星期日及公眾假期休息)</span>
                  </div>
                </div>
              </div>
              <div class="address-item pcShow">
                <div class="address-title">查詢電話</div>
                <div class="address-items">
                  <div class="address-text"><span>+852 3892 5089</span></div>
                  <a
                    class="button_container"
                    target="_blank"
                    href="https://api.whatsapp.com/send?phone=85269180511&amp;text=%E4%BD%A0%E5%A5%BD,%E6%88%91%E6%83%B3%E6%9F%A5%E8%A9%A2"
                  >
                    <img
                      src="https://static.cmereye.com/static/ckj/imgs/svg/whatsApp.svg"
                      alt="ZEISS Vision Expert"
                    />
                    <div class="button_a_whatsapp button_dione">
                      <span>Whatsapp查詢</span>
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="9"
                          height="18"
                          viewBox="0 0 9 18"
                          fill="none"
                        >
                          <g clip-path="url(#clip0_1849_879)">
                            <path d="M0 18L9 8.99307L0 0" fill="#F9FBFC"></path>
                          </g>
                          <defs>
                            <clipPath id="clip0_1849_879">
                              <rect width="9" height="18" fill="white"></rect>
                            </clipPath>
                          </defs>
                        </svg>
                      </span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.rotated {
  transition: transform 0.3s ease-out;
  transform: rotateY(45deg);
}

@media screen and (min-width: 768px) {
  .vision-experience {
    background: transparent !important;
    width: 100%;
    height: auto;
    cursor: url("https://statichk.cmermedical.com/vision/imgs/2025012116391701.png"),
      auto;
    transition: all 0.3s;
  }
  .vision-experience-bg {
    width: 90%;
    min-height: 830.854px;
    margin-left: 0;
    background: url("https://statichk.cmermedical.com/vision/imgs/2025012115442801.png")
      no-repeat;
    background-size: cover;
    position: relative;
    box-sizing: border-box;
    padding-top: 100px;
    padding-left: 100px;
    cursor: url("https://statichk.cmermedical.com/vision/imgs/2025012117133718.png"),
      auto;
  }
  .bg-mask-layer {
    position: absolute;
    bottom: 0;
    left: 0;
    min-height: 939.854px;
    width: 100%;
    background: url("https://statichk.cmermedical.com/vision/imgs/2025012115464301.png")
      no-repeat;
    background-size: cover;
    z-index: 10;
    pointer-events: none;
  }
  .vision-experience-title-text {
    position: absolute;
    font-size: 11.5rem;
    color: #fff;
    font-weight: 500;
    line-height: 1.2;
    z-index: 10;
  }
  .vision-experience-title-text > span {
    color: #fff;
    text-align: justify;
    font-family: "Noto Sans";
    font-size: 45.929px;
    font-style: normal;
    font-weight: 500;
    line-height: 47.843px; /* 104.167% */
    letter-spacing: 9.186px;
  }
  .vision-experience-img-list {
    position: relative;
    top: -50px;
    right: 60px;
  }
  .vision-experience-img-list-box {
    position: relative;
    background: #2449a4;
    height: 780.854px;
    width: 1610px;
    clip-path: polygon(0% 0%, 90% 0%, 72% 100%, 0% 100%);
  }
  .vision-experience-img-list-item4 {
    position: absolute;
    left: -235px;
  }
  .vision-experience-img-list-item {
    height: 780.854px;
    clip-path: polygon(0% 0%, 100% 0%, 64% 100%, 0% 100%);
    overflow: hidden;
  }

  .vision-experience-img-list-item1 {
    position: absolute;
    right: 0;
  }
  .vision-experience-img-list-item2 {
    position: absolute;
    right: 425px;
  }
  .vision-experience-img-list-item3 {
    position: absolute;
    right: 840px;
  }

  .vision-experience-img-list-item3:hover {
    z-index: 65;
    right: 0;
  }
  .vision-experience-img-list-item2:hover {
    z-index: 55;
    right: 0;
  }
  .vision-experience-img-list-item1:hover {
    z-index: 50;
  }
  .vision-experience-img-list-item4:hover {
    width: 2190px;
    left: -55px;
    z-index: 52;
    clip-path: polygon(0% 0%, 92% 0%, 79% 100%, 0% 100%);
  }
  .vision-experience-img-list-item1:hover ~ .vision-experience-img-list-item4,
  .vision-experience-img-list-item2:hover ~ .vision-experience-img-list-item4,
  .vision-experience-img-list-item3:hover ~ .vision-experience-img-list-item4 {
    width: 2190px;
    left: -55px;
    z-index: 52;
    clip-path: polygon(0% 0%, 92% 0%, 79% 100%, 0% 100%);
  }
  .vision-experience-img-list-item2:hover ~ .vision-experience-img-list-item4 {
    z-index: 57;
  }
  .vision-experience-img-list-item3:hover ~ .vision-experience-img-list-item4 {
    z-index: 65;
  }
  .vision-experience-img-list-item3:hover ~ .vision-experience-img-list-item2,
  .vision-experience-img-list-item3:hover ~ .vision-experience-img-list-item1,
  .vision-experience-img-list-item2:hover ~ .vision-experience-img-list-item3,
  .vision-experience-img-list-item2:hover ~ .vision-experience-img-list-item1,
  .vision-experience-img-list-item1:hover ~ .vision-experience-img-list-item2,
  .vision-experience-img-list-item1:hover ~ .vision-experience-img-list-item3 {
    display: none !important;
  }
  .vision-experience-img-list-item > img {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
  .vision-experience-img-list-item-active {
    cursor: url("https://statichk.cmermedical.com/vision/imgs/2025012117380151.png"),
      auto;
    transition: all 0.3s;
  }

  .active-img {
    z-index: 22;
    position: absolute;
    right: 0;
    cursor: pointer;
  }
  .active-box {
    z-index: 25;
    width: 1510px;
    clip-path: polygon(0% 0%, 100% 0%, 84% 100%, 0% 100%);
    cursor: pointer;
  }

  //轮播图
  .wpbSwpier {
    background: #f6f9fe;
    height: 517px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .mySwpier {
    position: relative;
    .mySwiperItem {
      max-width: 75vw;
    }
  }
  .swiper-pagination-btn {
    max-width: 100vw;
    margin: 0 auto;
    padding: 15px 0 25px;
    display: flex;
    justify-content: space-between;
    & > div {
      cursor: pointer;
    }

    & > div {
      margin-left: 18px;
      & > div:nth-child(1) {
        max-width: 230px;
        & > img {
          width: 100%;
        }
      }
    }
    & > div:first-child {
      margin-left: 0;
    }
  }
  .discounts-slide {
    display: flex;
    justify-content: space-between;
    & > div {
      flex: 5;
    }
    & > div:nth-child(2) {
      margin-left: 105px;
    }
  }
  .img-slide {
    max-width: 575px;
    & > img {
      width: 100%;
    }
  }

  .price-btn {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .swiper-button-next-prev {
    max-width: 100vw;
    margin: 0 auto;
    padding: 0;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 0;
    left: 0;
    z-index: 99;
    width: 100%;
    & > div:nth-child(1) {
      display: block;
      position: absolute;
      left: -10px;
      background: url("https://statichk.cmermedical.com/vision/imgs/3b468aa44a7ef584.png")
        no-repeat;
      // background-position: right;
      width: 20px;
      height: 40px;
    }
    & > div:nth-child(2) {
      display: inline-block;
      position: absolute;
      right: -10px;
      background: url("https://statichk.cmermedical.com/vision/imgs/6cddc1709f50bfe5.png")
        no-repeat;
      // background-position: right;
      width: 23px;
      height: 40px;
    }
  }
  .img-swiper {
    width: 88%;
    margin: 0 auto;
    & > img {
      width: 100%;
    }
  }
  :deep(.swiper-button-next::after) {
    background: url("https://statichk.cmermedical.com/vision/imgs/6ed7199aaddff6df.png")
      no-repeat;
    background-size: 100% 100%;
    color: transparent;
  }
  :deep(.swiper-button-next) {
    right: 0px;
    cursor: pointer;
  }
  :deep(.swiper-button-prev) {
    left: 0px;
    cursor: pointer;
  }
  :deep(.swiper-button-prev::after) {
    background: url("https://statichk.cmermedical.com/vision/imgs/f68bf90ff2bad2de.png")
      no-repeat;
    background-size: 100% 100%;
    color: transparent;
  }
  .content-box-img-list {
    margin-top: 45px;
    display: flex;
    justify-content: space-between;
    gap: 0 30px;
    & > img {
      width: 219px;
      height: 178px;
      border-radius: 7.5px;
    }
  }

  // 认证
  .contain {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 7.0625rem;

    .fontFooter {
      padding: 50px 0;
      position: relative;
      &::before {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        width: 40px;
        height: 40px;
        border: 10px solid #2449a4;
        border-top: 1px solid transparent; /* 下边框透明 */
        border-right: 1px solid transparent; /* 右边框透明 */
      }

      &::after {
        content: "";
        position: absolute;
        right: 0;
        bottom: 0;
        width: 40px;
        height: 40px;
        border: 10px solid #2449a4;
        border-top: 1px solid transparent; /* 下边框透明 */
        border-left: 1px solid transparent; /* 右边框透明 */
      }
    }

    .containLine {
      position: relative;
      padding: 50px 0;
      &::before {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        width: 40px;
        height: 40px;
        border: 10px solid #2449a4;
        border-bottom: 1px solid transparent; /* 下边框透明 */
        border-right: 1px solid透明; /* 右边框透明 */
      }

      &::after {
        content: "";
        position: absolute;
        right: 0;
        top: 0;
        width: 40px;
        height: 40px;
        border: 10px solid #2449a4;
        border-bottom: 1px solid transparent; /* 下边框透明 */
        border-left: 1px solid transparent; /* 右边框透明 */
      }
    }
  }

  .linear {
    max-width: 50.9375rem;
    margin: 0 auto;
    height: 7.3125rem;
    background: linear-gradient(90deg, #fff 0.5%, #d0ddff 51%, #fff 100%);
  }

  .fontText {
    max-width: 720px;
    color: #6d6d6d;
    text-align: center;
    font-family: "Noto Sans";
    font-size: 1.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 3.75rem;
    margin-top: 1.5rem;
    /* 200% */
    letter-spacing: 0.375rem;
  }

  .table-header,
  .table-footer {
    display: flex;
    justify-content: space-between;
  }

  .table-header {
    margin-bottom: 3.125rem;
  }

  .table-footer {
    margin-top: 3.125rem;
  }
  .fontTitle {
    color: #152b61;
    text-align: center;
    font-family: "Noto Sans";
    font-size: 2.8125rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    padding: 1.5625rem 0;
    letter-spacing: 9px;
    small {
      font-size: 30px;
      letter-spacing: 0px;
    }
  }

  .zve-information {
    position: relative;
  }

  //顶部banner标题

  // :deep(.publicBanner){
  //   position: static !important;
  //   top: 0;
  //   right: none;
  //   transform: translate(0, 0);
  // }
  .zveTitle {
    h2 {
      position: relative;
      left: -60%;
      color: #fff;
      font-family: "Noto Sans";
      font-size: calc(1.5rem + 1vw);
      font-style: normal;
      font-weight: 800;
      line-height: normal;
      letter-spacing: 4px;
    }
    span {
      margin-top: 20px;
      position: relative;
      left: -60%;
      display: block;
      width: clamp(36.75rem, 4vw, 36rem);
      flex-shrink: 0;
      color: #fff;
      // text-align: justify;
      font-family: "Noto Sans";
      font-size: calc(0.5rem + 1vw);

      font-style: normal;
      font-weight: 500;
      line-height: 3.125rem; /* 200% */
      letter-spacing: 0.375rem;
    }
  }

  .zveImg {
    width: 4.375rem;
    height: 4.375rem;
    position: absolute;
    top: 70px;
    right: 20px;
  }

  // 服务特色部分
  .selling-point {
    display: block;
  }
  .feature_page {
    display: none;
  }

  .zve-information-box {
    max-width: 960px;
    margin: 48px auto 100px auto;
  }
}
@media screen and (max-width: 767px) {
  //轮播图

  .wpbSwpier {
    background: #f6f9fe;
    // height: 300px;
    padding: 50px 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .mySwpier {
    position: relative;
    perspective: 1000px; /* 设置透视距离 */
    .mySwiperItem {
      max-width: 100vw;

      .swiper-slide-active {
        scale: 1.3;
      }
    }
  }

  .swiper-pagination-btn {
    max-width: 100vw;
    margin: 0 auto;
    padding: 15px 0 25px;
    display: flex;
    justify-content: space-between;
    & > div {
      cursor: pointer;
    }

    & > div {
      margin-left: 18px;
      & > div:nth-child(1) {
        max-width: 230px;
        & > img {
          width: 100%;
        }
      }
    }
    & > div:first-child {
      margin-left: 0;
    }
  }
  .discounts-slide {
    display: flex;
    justify-content: space-between;
    & > div {
      flex: 5;
    }
    & > div:nth-child(2) {
      margin-left: 105px;
    }
  }
  .img-slide {
    max-width: 575px;
    & > img {
      width: 100%;
    }
  }

  .price-btn {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .swiper-button-next-prev {
    max-width: 100vw;
    margin: 0 auto;
    padding: 0;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 0;
    left: 0;
    z-index: 99;
    width: 100%;
    & > div:nth-child(1) {
      display: block;
      position: absolute;
      left: 30px;
      background: url("https://statichk.cmermedical.com/vision/imgs/3b468aa44a7ef584.png")
        no-repeat;
      // background-position: right;
      background-size: cover;
      width: 10px;
      height: 20px;
    }
    & > div:nth-child(2) {
      display: inline-block;
      position: absolute;
      right: 30px;
      background: url("https://statichk.cmermedical.com/vision/imgs/6cddc1709f50bfe5.png")
        no-repeat;
      // background-position: right;
      background-size: cover;
      width: 10px;
      height: 20px;
    }
  }
  .img-swiper {
    width: 88%;
    margin: 0 auto;
    & > img {
      width: 100%;
    }
  }
  :deep(.swiper-button-next::after) {
    background: url("https://statichk.cmermedical.com/vision/imgs/6ed7199aaddff6df.png")
      no-repeat;
    background-size: 100% 100%;
    color: transparent;
  }
  :deep(.swiper-button-next) {
    right: 0px;
  }
  :deep(.swiper-button-prev) {
    left: 0px;
  }
  :deep(.swiper-button-prev::after) {
    background: url("https://statichk.cmermedical.com/vision/imgs/f68bf90ff2bad2de.png")
      no-repeat;
    background-size: 100% 100%;
    color: transparent;
  }
  .content-box-img-list {
    margin-top: 45px;
    display: flex;
    justify-content: space-between;
    gap: 0 30px;
    & > img {
      width: 219px;
      height: 178px;
      border-radius: 7.5px;
    }
  }

  // 认证
  .contain {
    padding: 2.5rem;
  }

  .fontFooter {
    padding: 15px 0;
    position: relative;
    &::before {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 15px;
      height: 15px;
      border: 4px solid #2449a4;
      border-top: 1px solid透明; /* 下边框透明 */
      border-right: 1px solid透明; /* 右边框透明 */
    }

    &::after {
      content: "";
      position: absolute;
      right: 0;
      bottom: 0;
      width: 15px;
      height: 15px;
      border: 4px solid #2449a4;
      border-top: 1px solid透明; /* 下边框透明 */
      border-left: 1px solid透明; /* 右边框透明 */
    }
  }

  .containLine {
    position: relative;
    padding: 26px 0;
    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 15px;
      height: 15px;
      border: 4px solid #2449a4;
      border-bottom: 1px solid透明; /* 下边框透明 */
      border-right: 1px solid透明; /* 右边框透明 */
    }

    &::after {
      content: "";
      position: absolute;
      right: 0;
      top: 0;
      width: 15px;
      height: 15px;
      border: 4px solid #2449a4;
      border-bottom: 1px solid透明; /* 下边框透明 */
      border-left: 1px solid透明; /* 右边框透明 */
    }
  }

  .linear {
    max-width: calc(100vw - 50px);
    margin: 0 auto 0.9375rem;
    height: 2.25rem;
    background: linear-gradient(90deg, #fff 0.5%, #d0ddff 51%, #fff 100%);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .fontText {
    max-width: 317px;
    width: 100%;
    color: #6d6d6d;
    text-align: center;
    font-family: "Noto Sans";
    font-size: 3.86vw;
    font-style: normal;
    font-weight: 400;
    line-height: 7.65vw;
    letter-spacing: 0.15vw;
    margin: 0 auto;
  }

  .table-footer > div > img,
  .table-header > div > img {
    width: 0.9686rem;
    height: 0.9686rem;
  }

  .table-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.25rem;
    & > div {
      display: inline-block;
    }
  }

  .table-footer {
    display: flex;
    justify-content: space-between;
    margin-top: 1.25rem;
    & > div {
      display: inline-block;
    }
  }
  .fontTitle {
    color: #152b61;
    text-align: center;
    font-family: "Noto Sans";
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  .zve-information {
  }
  // 顶部banner文字
  .zveTitle {
    position: absolute;
    top: 20%;
    left: 1.5625rem;
    width: 10.625rem;
    h2 {
      color: #fff;

      text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      font-family: "Noto Sans";
      font-size: 20px;
      font-style: normal;
      font-weight: 700;
      line-height: 25px; /* 125% */
    }
    span {
      color: #fff;
      text-align: justify;
      text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      font-family: "Noto Sans";
      font-size: 12px;
      font-style: normal;
      font-weight: 700;
      line-height: 20px; /* 166.667% */
      letter-spacing: 2.4px;
    }
  }

  .zveImg {
    width: 3.125rem;
    height: 3.125rem;
    position: absolute;
    top: 90px;
    right: 0.625rem;
  }

  // 服务特色部分
  .selling-point {
    display: none;
  }
  .feature_page {
    display: block;
  }

  .video-information-box {
    padding: 0 24px;
  }
}

@media screen and (min-width: 2000px) {
  .zveTitle {
    h2 {
      position: relative;
      left: -60%;
      color: #fff;
      font-family: "Noto Sans";
      font-size: calc(3rem + 1vw);
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      letter-spacing: 8px;
    }
    span {
      margin-top: 40px;
      position: relative;
      left: -60%;
      display: block;
      max-width: 905px !important;
      width: 100%;
      flex-shrink: 0;
      color: #fff;
      // text-align: justify;
      font-family: "Noto Sans";
      font-size: calc(0.7rem + 1vw);
      font-style: normal;
      font-weight: 500;
      line-height: 5.125rem;
      letter-spacing: 0.4rem;
    }
  }

  .zveImg {
    width: 8.4375rem;
    height: 8.4375rem;
    position: absolute;
    top: 100px;
    right: 80px;
  }
}

// i2个人
a:hover::before {
}

.section_wrapper {
  max-width: 100vw !important;
  padding-left: 10px !important;
}
.whatapps-btn-individuation {
  margin-top: 25px;
  width: fit-content;
  position: relative;
  z-index: 1;
}

.whatapps-btn-individuation::before {
  content: "";
  display: inline-block;
  background: url("https://statichk.cmermedical.com/vision/imgs/5fc7910640dbfa83.png")
    no-repeat;
  background-size: 100% 100%;
  padding-top: 20px;
  position: absolute;
  width: 556px;
  background-size: 100% 100%;
  min-height: 130%;
  z-index: 3;
  transform: translate(224px, 13px) !important;
  left: -225px;
  top: -16px;
}

@keyframes wave {
  0% {
    left: 0%;
  }

  25% {
    left: 50%;
  }

  50% {
    left: 100%;
  }

  75% {
    left: -50%;
  }

  100% {
    left: 0%;
  }
}

.whatapps-btn-individuation > div {
  border-radius: 60px;
  border: 3px solid #fff;
  /*  background: var(
    --Style,
    linear-gradient(90deg, #29abe2 0%, #06b5ff 3%, #19db84 100%)
  ); */
  background: #2449a4;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25),
    0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;
  width: fit-content;
  /* margin: 0 auto; */
  display: flex;
  align-items: center;
  gap: 0 12px;
  padding: 20px 37px;
  cursor: pointer;
  position: relative;
  z-index: 10;
  transform: translate(10px, 4px);
}

.whatapps-btn-individuation > div > span:nth-child(1) {
  color: #fff;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-family: "Noto Sans";
  font-size: 30px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 6px;
}

.whatapps-btn-individuation > div > span:nth-child(2) {
  display: flex;
  align-items: center;
  position: relative;
  top: 4px;
}

.individuation {
  width: 100vw;
  background: url(https://statichk.cmermedical.com/vision/imgs/2025012115172001.png)
    no-repeat;
  background-size: 100% 100%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  min-height: 40.21vw;
  padding-right: 11.9vw;
}

.brand {
  color: #2449a4;
  font-family: "Noto Sans";
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: 65px;
  /* 216.667% */
  letter-spacing: 6px;
}

.individuation-title {
  color: #2449a4;
  font-family: "Noto Sans";
  font-size: 60px;
  font-style: normal;
  font-weight: 700;
  line-height: 65px;
  /* 108.333% */
  letter-spacing: 12px;
  margin-top: 10px;
}

.individuation-items {
  margin-top: 20px;
  margin-bottom: 80px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px 30px;
}

.item-span {
  display: flex;
  align-items: center;
  gap: 0 20px;
}

.item-span > span:nth-child(1) {
  width: 5px;
  height: 54px;
  background: #2449a4;
  display: inline-block;
  transform: rotate(20deg);
}

.item-span {
  width: max-content;
  color: #2e3443;
  font-family: "Noto Sans";
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: 80px;
  /* 266.667% */
  letter-spacing: 6px;
}

.item-span > span {
  font-weight: 400;
}

@media screen and (max-width: 768px) {
  .individuation {
    width: 100%;
    background: url(https://statichk.cmermedical.com/vision/imgs/2025012115160101.png)
      no-repeat;
    background-position: center;
    padding: 0 40px 25px;
    background-size: cover;
  }

  .individuation > div:nth-child(2) {
    margin-top: 305px;
  }

  .brand {
    color: #2449a4;
    text-align: center;
    font-family: "Noto Sans";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 2.625rem;
    letter-spacing: 3.2px;
  }

  .individuation-title {
    margin-top: 0;
    color: #2449a4;
    text-align: center;
    font-family: "Noto Sans";
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 1;
    letter-spacing: 4px;
  }

  .individuation > div:nth-child(1) {
    display: none;
  }

  .individuation-items {
    gap: 0 20px;
    margin-top: 20px;
    margin-bottom: 20px;
  }

  .item-span {
    gap: 0 10px;
  }
  .individuation-items {
    gap: 0 10px;
  }

  .item-span > span:nth-child(1) {
    width: 2px;
    height: 38px;
    background: #2449a4;
    display: inline-block;
    transform: rotate(20deg);
  }

  .item-span > span:nth-child(2) {
    color: #2e3443;
    font-family: "Noto Sans";
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 58.208px;
    /* 415.769% */
    letter-spacing: 1.4px;
  }

  .whatapps-btn-individuation > div > span:nth-child(1) {
    color: #fff;
    font-family: "Noto Sans";
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 2.8px;
  }

  .whatapps-btn-individuation > div {
    padding: 10px 20px;
    transform: translate(0px, 4px);
  }

  .whatapps-btn-individuation {
    margin: 25px auto 0;
    display: flex;
    justify-content: center;
  }

  .whatapps-btn-individuation::before {
    background: url("https://statichk.cmermedical.com/vision/imgs/3f96636326c3a265.png")
      no-repeat;
    display: inline-block;
    width: 280px;
    background-size: 100% 100%;
    min-height: 146%;
    padding-top: 0;
    transform: translate(-10px, 10px) !important;
    left: 0;
    top: -10px;
  }

  .whatapps-btn-individuation > div > span:nth-child(2) > svg {
    width: 6.239px;
    height: 12.478px;
  }
}

p {
  margin: 0;
  padding: 0;
}

.whatapps-btn-series-two::before {
  content: none;
  position: absolute;
  z-index: 1;
  display: block;
  width: 105%;
  height: 120%;
  transform: translate(2.5%, -8%);
  border-radius: 60px;
  /*  background: var(
    --Style,
    linear-gradient(90deg, #29abe2 0%, #06b5ff 3%, #19db84 100%)
  );  */
  background: #2449a4;
  top: 0;
  left: auto;
  right: 0;
}

.whatapps-btn-series-two::after {
  content: "";
  position: absolute;
  z-index: 4;
  display: block;
  border-radius: 60px;
  width: 100%;
  height: 100%;
  transform: translate(0%, 0%);
  background: #fff;
  top: 0;
  animation: borderAnimation 2s linear infinite;
}

@keyframes borderAnimation {
  0% {
    width: 0%;
    height: 0%;
    // left: 0;
    // right: auto;
    right: 0;
    left: auto;
  }

  10% {
    width: 0%;
    height: 100%;
    // left: 0;
    // right: auto;
    right: 0;
    left: auto;
    opacity: 0;
  }

  21% {
    opacity: 1;
  }

  40% {
    width: 100%;
    height: 100%;
    // left: 0;
    // right: auto;
    right: 0;
    left: auto;
    opacity: 1;
  }

  45% {
    width: 100%;
    // left: 0;
    // right: auto;
    right: 0;
    left: auto;
  }

  55% {
    width: 100%;
    // left: auto;
    // right: 0;
    left: 0;
    right: auto;
  }

  70% {
    width: 0%;
    // left: auto;
    // right: 0;
    left: 0;
    right: auto;
  }

  100% {
    width: 0%;
    // left: auto;
    // right: 0;
    left: 0;
    right: auto;
  }
}

.whatapps-btn-series-two > .whatapps-btn-series-two-p > span:nth-child(1) {
  color: #fff;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-family: "Noto Sans";
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 6px;
}

.whatapps-btn-series-two > .whatapps-btn-series-two-p {
  border-radius: 60px;
  gap: 0 10px;
  box-sizing: border-box;
  padding: 15px 20px 13px;
  position: relative;
  z-index: 10;
  /* background: var(
    --Style,
    linear-gradient(90deg, #29abe2 0%, #06b5ff 3%, #19db84 100%)
  ); */
  background: #2449a4;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25),
    0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;
  width: fit-content;
  display: flex;
  align-items: center;
}

.whatapps-btn-series-two > .whatapps-btn-series-two-p > span:nth-child(2) {
  position: relative;
  top: 6px;
}

.whatapps-btn-series-two {
  position: relative;
  width: fit-content;
  height: max-content;
  /* background: var(
    --Style,
    linear-gradient(90deg, #29abe2 0%, #06b5ff 3%, #19db84 100%)
  ); */
  background: #2449a4;
  padding: 5px 5px;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border-radius: 60px;
  display: flex;
  margin: 0 auto;
}

@media screen and (max-width: 768px) {
  .whatapps-btn-series-two > .whatapps-btn-series-two-p > span:nth-child(1) {
    color: #fff;
    font-family: "Noto Sans";
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 2.8px;
  }

  .whatapps-btn-series-two > .whatapps-btn-series-two-p > span:nth-child(2) {
    position: relative;
    top: 3px;
  }

  .whatapps-btn-series-two
    > .whatapps-btn-series-two-p
    > span:nth-child(2)
    > svg {
    width: 10px;
    height: 15px;
  }
}

// 个人视觉
.show-before-on-hover {
  position: relative;
}

.show-before-on-hover:before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  background-color: #3cefff;
  transform-origin: bottom left;

  visibility: hidden; /* 添加这一行 */
  transform: scaleX(0);
  transition: transform 0.5s ease;
}

.show-before-on-hover:hover:before {
  visibility: visible; /* 保持这一行 */
  transform: scaleX(1); /* 添加这一行 */
}

.in-plant {
  margin: 150px auto 125px;
}

.in-plant-title {
  width: fit-content;
  color: #152b61;
  font-family: "Noto Sans";
  font-size: 45px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 9px;
  padding: 29px 185px;
  background: linear-gradient(90deg, #fff 0.5%, #d0ddff 51%, #fff 100%);
  margin: 0 auto;
}

.fadeInUp {
  position: relative;
  bottom: -300px;
  opacity: 0;
}
.fadeInUpShow {
  position: relative;
  bottom: -300px;
  animation: fadeInUp 0.6s ease-in-out forwards;
}

@keyframes fadeInUp {
  0% {
    bottom: -300px;
    opacity: 0;
  }

  100% {
    opacity: 1;
    bottom: 0;
  }
}

.in-plant-child-text {
  margin-top: 45px;
  color: #6d6d6d;
  text-align: center;
  font-family: "Noto Sans";
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: 60px;
  /* 200% */
  letter-spacing: 6px;
}

.in-plant-child-img {
  margin-top: 30px;
  display: flex;
  justify-content: center;
}

@media screen and (max-width: 768px) {
  .in-plant {
    margin: 50px auto 25px;
    box-sizing: border-box;
    padding: 0 25px;
  }

  .in-plant-title {
    color: #152b61;
    text-align: center;
    font-family: "Noto Sans";
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 3.6px;
    padding: 19px 85px;
    background: linear-gradient(90deg, #fff 0.5%, #d0ddff 51%, #fff 100%);
    margin: 0 auto;
  }

  .in-plant-child-text {
    color: #6d6d6d;
    text-align: center;
    font-family: "Noto Sans";
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 30px;
    /* 214.286% */
    letter-spacing: 2.8px;
  }

  .in-plant-child-img {
    margin-top: 20px;
    width: 100%;
  }

  .in-plant-child-img > img {
    width: 100%;
  }
}
</style>


<style>
body {
  overflow-x: hidden; /* 禁止水平滚动 */
  overflow-y: auto;
}

.contain-bg {
  background: linear-gradient(180deg, #fff 1.88%, #e8eeff 135.59%);
  width: 100vw;
}

.selling-point {
  max-width: 1320px;
  margin: 150px auto 0;
  padding-bottom: 150px;
}

.selling-point-title {
  color: #6d6d6d;
  text-align: center;
  font-family: "Noto Sans";
  font-size: 2.8125rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 9px;
  position: relative;
  margin-bottom: 70px;
}

.selling-point-title::before {
  content: "";
  display: inline-block;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: -30px;
  width: 81px;
  height: 10px;
  background: #2449a4;
}

.selling-point-item {
  display: flex;
}

.selling-point-item > div {
  flex: 1;
}

.selling-point-item > div > img {
  display: block;
  width: 100%;
}

.item-content {
  margin-top: 85px;
}

.item-content > div {
  margin: 0 auto;
  max-width: 520px;
  width: 100%;
}

.item-content > div:nth-child(1) {
  color: #6d6d6d;
  font-family: "Noto Sans";
  font-size: 40px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 8px;
  margin-bottom: 5px;
  position: relative;
}

.item-content > div:nth-child(1)::before {
  content: "";
  display: inline-block;
  position: absolute;
  left: 0;
  top: -30px;
  max-width: 81px;
  width: 100%;
  height: 10px;
  background: #2449a4;
}

.item-content > div:nth-child(2) {
  color: #6d6d6d;
  font-family: "Noto Sans";
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 44px;
  /* 200% */
  letter-spacing: 4.4px;
}

@media screen and (max-width: 768px) {
  .selling-point-title {
    color: #6d6d6d;
    text-align: center;
    font-family: "Noto Sans";
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 3.6px;
    position: relative;
    margin-bottom: 40px;
  }

  .selling-point-title::before {
    content: "";
    display: inline-block;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: -10px;
    width: 34.96px;
    height: 3.604px;
    background: #2449a4;
  }

  .selling-point-item > div {
    width: 194px;
    max-height: 180px;
    min-height: 160px;
    overflow: hidden;
  }

  .selling-point-item > div > img {
    max-width: max-content !important;
    height: 100% !important;
  }

  .selling-point {
    margin: 50px auto 0;
    padding-bottom: 40px;
  }

  .item-content {
    margin-top: 10px;
  }

  .item-content > div {
    margin: 0 auto;
    max-width: 163px;
    width: 100%;
  }

  .item-content > div:nth-child(1) {
    color: #6d6d6d;
    font-family: "Noto Sans";
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 1.6px;
    margin-bottom: 5px;
    position: relative;
    padding-top: 10px;
  }

  .item-content > div:nth-child(1)::before {
    content: "";
    display: inline-block;
    position: absolute;
    left: 0;
    top: 0px;
    max-width: 29.194px;
    width: 100%;
    height: 3.604px;
    background: #2449a4;
  }

  .item-content > div:nth-child(2) {
    color: #6d6d6d;
    font-family: "Noto Sans";
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
    /* 180% */
    letter-spacing: 1px;
  }

  .contain-bg {
    padding: 0 0 20px 0;
    width: 100%;
  }

  .feature_page {
    width: 100vw;
    box-sizing: border-box;
    padding: 0 9.8vw;
    position: relative;
    margin: 20vw auto 0;
    display: none;
  }

  .feature-item-img {
    max-width: 58.985vw;
    height: 44.87vw;
    margin: 0 0 0 auto;
    display: flex;
    justify-content: flex-end;
  }

  .feature-item-img img {
    width: 100%;
  }

  .feature-item-declare {
    margin-top: 22.665vw;
  }

  .feature-item-left-top {
    display: flex;
    gap: 0 5.128vw;
    align-items: center;
  }

  .feature-img {
    max-height: 10.765vw;
  }

  .feature-title {
    color: #2449a4;
    font-family: "Noto Sans";
    font-size: 4.615vw;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 1.8px;
  }

  .feature-item-content {
    color: #6d6d6d;
    font-family: "Noto Sans";
    font-size: 3.58vw;
    font-style: normal;
    font-weight: 400;
    line-height: 30px;
    letter-spacing: 1.4px;
  }

  .swiper-button-container {
    position: absolute;
    top: -10.25vw;
    z-index: 10;
    display: flex;
    flex-direction: column;
    gap: 60vw 0;
    padding-left: 1px;
  }

  .beacon-list {
    position: absolute;
    width: max-content;
    left: -25px;
    color: rgba(36, 73, 164, 0.5);
    font-family: "Noto Sans";
    font-size: 4.1vw;
    text-align: center;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 1.6px;
    top: 50%;
    transform: translateY(-50%);
  }

  .beacon-list p {
    margin: 5.5vw 0;
    position: relative;
    z-index: 1;
  }

  .beacon-list p:last-child {
    margin-bottom: 3vw;
  }

  .beacon-list-active {
    color: #2449a4;
    position: relative;
  }

  .beacon-list-active::before {
    content: "";
    position: absolute;
    top: -5px;
    display: inline-block;
    width: 35px;
    height: 2px;
    background: #2449a4;
    left: 50%;
    transform: translateX(-50%);
  }
}

/* 地址 */
.address {
  margin: 150px auto 145px;
  max-width: 100vw;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0 60px;
}

.address-img {
  max-width: 550px;
  /* max-width: 600px; */
  /* margin: 0 auto; */
}

.address-img img {
  width: 100%;
}

.address-title {
  color: #2449a4;
  font-family: "Noto Sans";
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 6px;
  margin-bottom: 10px;
  position: relative;
}

.address-title::before {
  content: "";
  position: absolute;
  width: 60px;
  height: 10px;
  background: #2449a4;
  display: inline-block;
  top: -20px;
  left: 0;
}

.address-item {
  margin-bottom: 60px;
}

.address-text {
  display: flex;
  flex-direction: column;
  color: #6d6d6d;
  font-family: "Noto Sans";
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 6px;
}
.address-text > span {
  font-style: normal;
  font-weight: 400;
}

.address-items {
  display: flex;
  gap: 0 40px;
}

.address-items > div > span {
  white-space: nowrap;
}

.address-whatsapp {
  border-radius: 60px;
  border: 3px solid #fff;
  background: #59ba68;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  color: #fff;
  font-family: Inter;
  font-size: 19.6px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: uppercase;
  box-sizing: border-box;
  padding: 12px 22px 12px 42px;
}
/* .address-whatsapp:hover {
               0px 4px 4px 0px rgba(0, 0, 0, 0.25), 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset,0px 4px 4px 0px rgba(0, 0, 0, 0.25), 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset
            } */

a {
  text-decoration: none;
}

.address-whatsapp {
  display: flex;
  align-items: center;
  gap: 0 10px;
}

.address-whatsapp-a {
  position: relative;
  top: -30px;
}

.address-whatsapp-a > svg {
  position: relative;
  z-index: 3;
}

.address-whatsapp-a > div {
  position: absolute;
  top: 45%;
  left: 60%;
  transform: translateY(-50%);
}

.address-whatsapp-a > div > span {
  white-space: nowrap;
  font-weight: 400;
}
.address-whatsapp:hover {
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25),
    0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;
}

.address > div {
  margin-top: 20px;
}

@media screen and (max-width: 768px) {
  .pcShow {
    display: none;
  }
  .address-item {
    margin-bottom: 30px;
  }
  .address {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    margin: 15px 35px 50px;
    gap: 0 40px;
  }

  .address > div {
    margin-top: 50px;
  }

  .address-text {
    color: #6d6d6d;
    font-family: "Noto Sans";
    font-size: 3.56vw;
    font-style: normal;
    font-weight: 400;
    line-height: 25px;
    letter-spacing: 1px;
  }
  .address-text > span {
    font-style: normal;
    font-weight: 400;
  }

  .address-title {
    color: #2449a4;
    font-family: "Noto Sans";
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 3.2px;
    position: relative;
  }

  .address-title::before {
    content: "";
    width: 33.515px;
    height: 5px;
    background: #2449a4;
    position: absolute;
    left: 0;
    top: -10px;
  }

  .address-img {
    max-width: 310px;
    margin: 0 auto;
  }

  .address-img > img {
    width: 100%;
  }
}
.button_container {
  display: flex;
  position: relative;
  max-width: 365px;
  width: 365px;
  top: -50px;
}
.button_container::before {
  content: none;
}
.button_container img {
  position: relative;
  z-index: 3;
}

.button_container .button_a_whatsapp {
  position: absolute;
  left: 12%;
  top: 50%;
  transform: translateY(-50%);
}

.button_a_whatsapp {
  pointer-events: auto;
  cursor: pointer;
  background: #ffffff;
  border: none;
  padding: 1.5rem 3rem;
  margin: 0;
  font-family: inherit;
  font-size: inherit;
  position: relative;
  display: inline-block;
}

.button_dione {
  background: none;
  font-family: obvia, sans-serif;
  font-weight: 500;
  font-style: italic;
  padding: 1.5rem 3rem;
  display: flex;
  gap: 0 10px;
  align-items: center;
}

.button_dione::before {
  content: "";
  background: #59ba68;
  transition: transform 0.3s cubic-bezier(0.2, 1, 0.7, 1);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 55px;
}

.button_dione::after {
  content: "";
  border: 3px solid #59ba68;
  transition: transform 0.3s cubic-bezier(0.2, 1, 0.7, 1);
  border-radius: 55px;
  transform: scale3d(0.85, 0.65, 1);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.button_dione:hover::before {
  border-radius: 55px;
  transform: scale3d(0.9, 0.8, 1);
}

.button_dione:hover::after {
  border-radius: 55px;
  transform: scale3d(1, 1, 1);
}

.button_dione span {
  display: inline-block;
  position: relative;
  color: #fff;

  font-family: Inter;
  font-size: 19.6px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: uppercase;
}

.button_dione span:nth-child(2) {
  margin-top: 2px;
}

@media screen and (max-width: 768px) {
  .button_container {
    display: flex;
    position: relative;
    max-width: 365px;
    transform: scale(0.8);
  }
}

/* 轮播图 */
</style>



  


   <style>
/* 个人化配镜流程 */

.pj_wrapper {
  margin: 7.5rem auto;
  overflow: hidden;
}
.in-plant-child-text {
  margin: 30px auto;
  width: 810px;
  white-space: pre-wrap;
  flex-shrink: 0;
  color: #6d6d6d;
  text-align: center;
  font-family: "Noto Sans";
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: 60px;
  letter-spacing: 6px;
}
.circle-bg-border {
  margin: 100px auto;
  border: 2px solid rgba(159, 168, 218, 0.425);
  border-radius: 50%;
  position: relative;
  width: fit-content;
  z-index: 1;
}

/* 定义动画中使用的颜色变量 */
:root {
  --border-color: rgb(181, 204, 255);
  --border-transparent: rgba(0, 255, 149, 0);
}

/* .circle-bg-border::after {
            } */

.circle-bg-border::before {
  position: absolute;
  content: none;
  top: 0px;
  /* left: 0px;drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.2))
              right: 0px;
              bottom: 0px;
              box-sizing: border-box;
              border-radius: 50%;
              border-top: 3px solid #9FA8DA;
              border-left: 3px solid #9FA8DA;
              border-bottom: 3px solid transparent;
              border-right: 3px solid transparent;
              transform: rotate(720deg);
              animation: rotate 3s infinite ease-out; */
}

.circle-bg-border::after {
  position: absolute;
  content: "";
  top: -4px;
  left: -4px;
  right: -4px;
  bottom: -4px;
  box-sizing: border-box;
  border-radius: 50%;
  border-bottom: 7px solid transparent;
  border-right: 7px solid transparent;
  border-top: 7px solid #b5ccff;
  border-left: 7px solid #b5ccff;
  transform: rotate(0deg);
  animation: rotate 1.5s infinite ease-in-out;
}

@keyframes rotate {
  100% {
    transform: rotate(-720deg);
  }
}

/* 优化关键帧，减少重复代码，提高可读性和可维护性 */
@keyframes circleRound {
  0% {
    border-left: var(--border-transparent);
  }

  25% {
    border-top: var(--border-transparent);
  }

  50% {
    border-right: var(--border-transparent);
  }

  75% {
    border-bottom: var(--border-transparent);
  }

  100% {
    border-left: var(--border-transparent);
  }
}

.circle {
  position: relative;
  z-index: 5;
  width: 1165px;
  height: 1165px;
  background: linear-gradient(0deg, #e8eeff -14%, #fff 122.65%);
  border-radius: 50%;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  padding: 20px;
  box-sizing: border-box;
  border: 64px solid #fff;
}

.center-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #2449a4;
  text-align: center;
  font-family: "Noto Sans";
  font-size: 55px;
  font-style: normal;
  font-weight: 400;
  line-height: 75px;
  /* 136.364% */
  letter-spacing: 11px;
}

.step {
  position: absolute;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex-direction: column;
  transform: translateX(-50%);
}

.step h3 {
  margin: 10px 0 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.step h3 span:nth-child(1) {
  color: #6d6d6d;
  text-align: center;
  font-family: "Noto Sans";
  font-size: 60px;
  font-style: normal;
  font-weight: 400;
  line-height: 60px;
}

.step h3 span:nth-child(2) {
  color: #6d6d6d;
  text-align: center;
  font-family: "Noto Sans";
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.2;
  letter-spacing: 6px;
  white-space: nowrap;
  text-align: right;
}

.step p {
  margin: 0;
  color: #2449a4;
  text-align: right;
  font-family: "Noto Sans";
  font-size: 17px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
  white-space: nowrap;
  text-align: right;
  position: relative;
  right: 5px;
}

.step p::before {
  content: "";
  position: absolute;
  left: -10px;
  width: 5px;
  height: 5px;
  background: #2449a4;
  border-radius: 50%;
  top: 50%;
}

.step:nth-child(1) {
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
}

.step-one {
  top: 5%;
  left: 50%;
}

.step-one > img {
  position: relative;
  left: -30%;
}

.step-two {
  top: 18%;
  left: 78%;
}

.step-two > h3 > span:nth-child(1) {
  position: relative;
  top: -20px;
  left: -30px;
}

.step-two > img {
  transform: translate(-160%, 110%);
}

.step-three {
  top: 38%;
  left: 86.6%;
}

.step-three > img {
  transform: translate(-190%, 100%);
}

.step-three-two {
  top: 60%;
  left: 82.6%;
}

.step-three-two > img {
  transform: translate(-130%, 100%);
}

.step-four {
  top: 75%;
  left: 53%;
}

.step-four > img {
  transform: translate(-9.5rem, 100%);
}

.step-five {
  top: 60%;
  left: 18%;
}

.step-five > img {
  transform: translate(70%, 110%);
}

.step-six {
  top: 38%;
  left: 8%;
}

.step-six > img {
  transform: translate(70%, 100%);
}
.step-six > h3 > span:nth-child(2) {
  position: relative;
  left: 20px;
}

.step-seven {
  top: 18%;
  left: 16%;
}

.step-seven > img {
  transform: translate(70%, 100%);
}

@media screen and (min-width: 768px) {
  .circleTwo {
    display: none;
  }

  .mb-show {
    display: none;
  }
}

.btn-four-two {
  cursor: pointer;
  position: absolute;
  right: -6px;
  bottom: 55%;
}

.btn-four-two > img {
  transform: rotate(0deg);
}

.btn {
  cursor: pointer;
  position: absolute;
  top: 25%;
  right: 50px;
}

.btn > img {
  transform: rotate(0deg);
}

.step-four p,
.step-two p {
  opacity: 0;
}

.whatapps-btn {
  margin: 125px auto 100px;
  width: fit-content;
  position: relative;
}

.whatapps-btn::before {
  content: "";
  position: absolute;
  display: inline-block;
  background: url("https://statichk.cmermedical.com/vision/imgs/7d0a3a2a34b2007e.png")
    no-repeat;
  width: 360px;
  background-size: 100%;
  min-height: 120px;
  padding-top: 22px;
  position: absolute;
  z-index: 3;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  /* animation: wave 5s linear infinite; */
}

@keyframes wave {
  0% {
    left: 0%;
  }

  25% {
    left: 50%;
  }

  50% {
    left: 100%;
  }

  75% {
    left: -50%;
  }

  100% {
    left: 0%;
  }
}

.whatapps-btn > div {
  top: -10px;
  border-radius: 60px;
  border: 3px solid #fff;
  background: var(
    --Style,
    linear-gradient(90deg, #29abe2 0%, #06b5ff 3%, #19db84 100%)
  );
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25),
    0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;
  width: fit-content;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 0 12px;
  padding: 20px 37px;
  cursor: pointer;
  position: relative;
  z-index: 10;
}

.whatapps-btn > div > span:nth-child(1) {
  color: #fff;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-family: "Noto Sans";
  font-size: 30px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 6px;
}

.whatapps-btn > div > span:nth-child(2) {
  display: flex;
  align-items: center;
  position: relative;
  top: 4px;
}

@media screen and (max-width: 768px) {
  .pj_wrapper {
    margin: 3.75rem auto;
    overflow: hidden;
  }

  .in-plant-child-text {
    width: 314px;
    height: 100px;
    white-space: break-spaces;
    color: #6d6d6d;
    text-align: center;
    font-family: "Noto Sans";
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 30px; /* 214.286% */
    letter-spacing: 2.8px;
  }

  .circle-bg-border::after {
    position: absolute;
    content: "";
    top: -1px;
    left: -1px;
    right: -1px;
    bottom: -1px;
    box-sizing: border-box;
    border-radius: 50%;
    border-bottom: 2px solid transparent;
    border-right: 2px solid transparent;
    border-top: 2px solid #b5ccff;
    border-left: 2px solid #b5ccff;
    transform: rotate(0deg);
    animation: rotate 3s infinite ease-in-out;
  }
  .circle {
    padding: 0;
    max-width: 100%;
    width: 133vw;
    margin: 0 auto 0 2.56vw;
    border: 24px solid #fff;
    height: 133vw;
  }

  .circleTwo {
    position: absolute;
    top: 0;
    max-width: 100%;
    z-index: 6;
    width: 133vw;
    height: 133vw;
    background: linear-gradient(
      0deg,
      rgba(232, 238, 255, 0.9) -14%,
      rgba(255, 255, 255, 0.6) 122.65%
    );
    border-radius: 50%;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    padding: 20px;
    box-sizing: border-box;
  }
  .circleTwo h3 {
    color: #2449a4;
    text-align: center;
    font-family: "Noto Sans";
    font-size: 24.079px;
    font-style: normal;
    font-weight: 400;
    line-height: 24.157px; /* 100.323% */
  }

  .circleTwo-title {
    max-width: 90px;
    margin-top: 10px;
    width: 100%;
    margin-bottom: 11px;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
  }
  .circleTwo-title span {
    display: inline-block;
    color: #2449a4;
    text-align: center;
    font-family: "Noto Sans";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 125% */
    letter-spacing: 3.2px;
  }
  .circleTwo-title img {
    position: absolute;
    top: 0;
    left: 90px;
  }

  .circleTwo .content {
    color: #6d6d6d;
    text-align: center;
    font-family: "Noto Sans";
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px;
    letter-spacing: 2.8px;
    max-width: 350px;
    position: relative;
    text-align: left;
  }

  .circleTwo .content::before {
    content: "・";
    display: block;
    position: absolute;
    left: -15px;
    top: 0;
  }

  .circle-bg-border {
    transform: translateX(-12%);
  }

  .center-text {
    color: #2449a4;
    text-align: center;
    font-family: "Noto Sans";
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 22px;
    letter-spacing: 3.6px;
  }

  .step h3 {
    flex-direction: row;
  }

  .step h3 > span:nth-child(1) {
    color: #6d6d6d;
    text-align: center;
    font-family: "Noto Sans";
    font-size: 24.157px;
    font-style: normal;
    font-weight: 400;
    line-height: 24.157px;
  }

  .step h3 > span:nth-child(2) {
    color: #6d6d6d;
    text-align: center;
    font-family: "Noto Sans";
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 2.4px;
    white-space: pre-wrap;
  }

  .step p {
    display: none;
  }

  .step-one {
    top: 5%;
    left: 48%;
  }

  .step-one > h3 > span:nth-child(1) {
    transform: translate(50px, -30px);
  }

  .step-one > img {
    width: 30.316px;
    height: 30.004px;
    position: relative;
    left: -30%;
  }

  .step-two {
    top: 25%;
    left: 75%;
  }

  .step-two > h3 > span:nth-child(1) {
    transform: translate(70px, -10px);
  }

  .step-two > h3 > span:nth-child(2) {
    white-space: nowrap;
  }

  .step-two > img {
    transform: translate(-30px, 5px);
    width: 33.775px;
    height: 20px;
  }

  .step-three {
    top: 46%;
    left: 76%;
  }

  .step-three > h3 > span:nth-child(1) {
    transform: translate(50px, -25px);
  }
  .step-three > img {
    width: 41.306px;
    height: 25.049px;
    transform: translate(0px, 40%);
  }
  .step-three-two {
    top: 66%;
    left: 75%;
  }

  .step-three-two > h3 > span:nth-child(1) {
    transform: translate(40px, -25px);
  }

  .step-three-two > img {
    width: 41.306px;
    height: 25.049px;
    transform: translate(-90%, 40%);
  }

  .step-four {
    top: 85%;
    left: 48%;
  }

  .step-four > h3 > span:nth-child(1) {
    transform: translate(60px, -20px);
  }

  .step-four > h3 > span:nth-child(2) {
    max-width: 110px;
    margin-top: 5px;
  }

  .step-four > img {
    transform: translate(-10px, 10px);
    width: 39.806px;
    height: 23.463px;
  }

  .step-five {
    top: 66%;
    left: 16%;
  }

  .step-five > h3 > span:nth-child(1) {
    transform: translate(35px, -16px);
  }

  .step-five > h3 > span:nth-child(2) {
    margin-top: 5px;
  }

  .step-five > img {
    transform: translate(0px, 15px);
    width: 36.742px;
    height: 23.456px;
  }

  .step-six {
    top: 46%;
    left: 10%;
  }

  .step-six > h3 > span:nth-child(1) {
    transform: translate(60px, -18px);
  }

  .step-six > h3 > span:nth-child(2) {
    margin-top: 5px;
  }

  .step-six > img {
    transform: translate(0px, 15px);
    width: 26.986px;
    height: 27.507px;
  }

  .step-seven {
    top: 25%;
    left: 14%;
  }

  .step-seven > h3 > span:nth-child(1) {
    transform: translate(38px, -25px);
  }

  .step-seven > h3 > span:nth-child(2) {
    max-width: 75px;
    margin-top: 5px;
  }

  .step-seven > img {
    transform: translate(-5px, 15px);
    width: 29.82px;
    height: 24.003px;
  }

  .mb-show {
    display: block;
    position: absolute;
  }

  .btn {
    top: -22px;
    right: -22px;
    filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.2));
  }

  .btn-four-two {
    top: -12px;
    right: 4px;
    filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.2));
  }

  .btn-child-two,
  .btn-child {
    position: fixed;
    width: 133vw;
    height: 133vw;
    background: #e8eeffeb;
    bottom: 0;
    left: 0;
    z-index: 9;
    display: none;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    margin-left: 2vw;
    transition: all 0.5s ease;
  }

  .btn-child-two > h3,
  .btn-child > h3 {
    display: flex;
    flex-direction: column;
  }

  .btn-child-two > h3,
  .btn-child > h3 > span:nth-child(1) {
    color: #2449a4;
    text-align: center;
    font-family: "Noto Sans";
    font-size: 24.079px;
    font-style: normal;
    font-weight: 400;
    line-height: 24.157px;
  }

  .btn-child-two > h3,
  .btn-child > h3 > span:nth-child(2) {
    color: #2449a4;
    text-align: center;
    font-family: "Noto Sans";
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px;
    letter-spacing: 3.2px;
    margin-top: 10px;
  }

  .btn-two img {
    transform: translate(85px, -20px) rotate(-90deg);
  }

  .btn-child-four-two img {
    transform: translate(85px, -8px) rotate(-90deg);
  }

  .child-span {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 220px;
    text-align: center;
    color: #6d6d6d;
    text-align: center;
    font-family: "Noto Sans";
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px;
    letter-spacing: 2.8px;
  }

  .child-span > span {
    color: #6d6d6d;
    text-align: center;
    font-family: "Noto Sans";
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px;
    letter-spacing: 2.8px;
  }
}

.whatapps-btn-series::before {
  content: none;
  position: absolute;
  z-index: 1;
  display: block;
  width: 105%;
  height: 120%;
  transform: translate(2.5%, -8%);
  border-radius: 60px;
  background: var(
    --Style,
    linear-gradient(90deg, #29abe2 0%, #06b5ff 3%, #19db84 100%)
  );
  top: 0;
  left: auto;
  right: 0;
}

.whatapps-btn-series::after {
  content: "";
  position: absolute;
  z-index: 4;
  display: block;
  border-radius: 60px;
  width: 100%;
  height: 100%;
  transform: translate(0%, 0%);
  background: #fff;
  top: 0;
  animation: borderAnimation 2s linear infinite;
}

@keyframes borderAnimation {
  0% {
    width: 0%;
    height: 0%;
    left: 0;
    right: auto;
  }

  10% {
    width: 0%;
    height: 100%;
    left: 0;
    right: auto;
    opacity: 0;
  }

  21% {
    opacity: 1;
  }

  40% {
    width: 100%;
    height: 100%;
    left: 0;
    right: auto;
    opacity: 1;
  }

  45% {
    width: 100%;
    left: 0;
    right: auto;
  }

  55% {
    width: 100%;
    left: auto;
    right: 0;
  }

  70% {
    width: 0%;
    left: auto;
    right: 0;
  }

  100% {
    width: 0%;
    left: auto;
    right: 0;
  }
}

.whatapps-btn-series > .whatapps-btn-series-p > span:nth-child(1) {
  color: #fff;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-family: "Noto Sans";
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 6px;
}

.whatapps-btn-series > .whatapps-btn-series-p {
  border-radius: 60px;
  gap: 0 10px;
  box-sizing: border-box;
  padding: 15px 20px 13px;
  position: relative;
  z-index: 10;
  background: var(
    --Style,
    linear-gradient(90deg, #29abe2 0%, #06b5ff 3%, #19db84 100%)
  );
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25),
    0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;
  width: fit-content;
  display: flex;
  align-items: center;
}

.whatapps-btn-series > .whatapps-btn-series-p > span:nth-child(2) {
  position: relative;
  top: 6px;
}

.whatapps-btn-series {
  position: relative;
  width: fit-content;
  height: max-content;
  background: var(
    --Style,
    linear-gradient(90deg, #29abe2 0%, #06b5ff 3%, #19db84 100%)
  );
  padding: 5px 5px;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border-radius: 60px;
  display: flex;
  margin: 0 auto;
}

@media screen and (max-width: 768px) {
  .whatapps-btn-series > .whatapps-btn-series-p > span:nth-child(1) {
    color: #fff;
    font-family: "Noto Sans";
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 2.8px;
  }

  .whatapps-btn-series > .whatapps-btn-series-p > span:nth-child(2) {
    position: relative;
    top: 3px;
  }

  .whatapps-btn-series > .whatapps-btn-series-p > span:nth-child(2) > svg {
    width: 10px;
    height: 15px;
  }
}
@media screen and (max-width: 768px) {
  .circle_title .fontTitle small {
    font-size: 14px;
  }
}
</style>
