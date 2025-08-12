<script lang="ts" setup>
useHead({
  title: "希瑪視光 | 蔡司近視防控中心 - 兒童近視控制與管理",
  meta: [
    {
      hid: "description",
      name: "description",
      content:
        "希瑪視光攜手蔡司打造「蔡司近視防控中心」，引入最新蔡司MYO 200近視管理生物測量儀，結合MyoConsult系統，為兒童提供全面近視風險評估與控制，助力學童健康視力發展。立即查詢及預約。",
    },
    {
      hid: "Keywords",
      name: "Keywords",
      content:
        "Cmer Vision 希瑪視光 視光中心 希瑪視光中心 希瑪眼科視光中心 蔡司近視防控中心 MYO 200 兒童近視 學童近視 近視管理 近視控制 近視防控 近視管理鏡片 近視控制鏡片 近視控制鏡片價錢 控制近視鏡片價錢 兒童控制鏡片 兒童近視控制鏡片價格 兒童近視控制鏡片價錢 兒童控制鏡片價格 兒童控制近視鏡片 ZEISS MyoCare MyoCare MyoCare鏡片 視力健康 眼睛健康 註冊視光師 視光師 視光師驗眼中心",
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

const discountsList = ref([
  {
    id: 1,
    img: "https://statichk.cmermedical.com/vision/imgs/zeissMyopia/01.avif",
    content: "",
  },

  {
    id: 2,
    img: "https://statichk.cmermedical.com/vision/imgs/zeissMyopia/02.avif",
    content: "",
  },
  {
    id: 3,
    img: "https://statichk.cmermedical.com/vision/imgs/zeissMyopia/03.avif",
    content: "",
  },
  {
    id: 4,
    img: "https://statichk.cmermedical.com/vision/imgs/zeissMyopia/04.avif",
    content: "",
  },
  {
    id: 5,
    img: "https://statichk.cmermedical.com/vision/imgs/zeissMyopia/05.avif",
    content: "",
  },
  {
    id: 6,
    img: "https://statichk.cmermedical.com/vision/imgs/zeissMyopia/06.avif",
    content: "",
  },
  {
    id: 7,
    img: "https://statichk.cmermedical.com/vision/imgs/zeissMyopia/07.avif",
    content: "",
  },
  {
    id: 8,
    img: "https://statichk.cmermedical.com/vision/imgs/zeissMyopia/08.avif",
    content: "",
  },
  {
    id: 9,
    img: "https://statichk.cmermedical.com/vision/imgs/zeissMyopia/09.avif",
    content: "",
  },
  {
    id: 10,
    img: "https://statichk.cmermedical.com/vision/imgs/zeissMyopia/10.avif",
    content: "",
  },

  {
    id: 12,
    img: "https://statichk.cmermedical.com/vision/imgs/zeissMyopia/12.avif",
    content: "",
  },
  {
    id: 13,
    img: "https://statichk.cmermedical.com/vision/imgs/zeissMyopia/13.avif",
    content: "",
  },
  {
    id: 14,
    img: "https://statichk.cmermedical.com/vision/imgs/zeissMyopia/14.avif",
    content: "",
  },
]);

const bannerImg = {
  pc: "https://statichk.cmermedical.com/vision/imgs/zeissMyopia/banner-pc.avif",
  mobile:
    "https://statichk.cmermedical.com/vision/imgs/zeissMyopia/banner-mb.avif",
  newBanner: true,
};

import getWindowSize from "@/utils/width";

const isPc = ref(true);
const mySwiper = ref<InstanceType<typeof Swiper> | null>(null);
onMounted(() => {
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
  let { widthState, width } = getWindowSize();
  window.addEventListener("resize", () => {
    let { widthState, width } = getWindowSize();
    isPc.value = widthState;
  });
  isPc.value = widthState;
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
</script>

<template>
  <div class="zve-information">
    <PublicBanner :banner="bannerImg"> </PublicBanner>
    <PublicNavbar
      :isInsidePage="true"
      :insidePageTitle="'蔡司近視防控中心'"
      :name="'兒童視力服務'"
    />
  </div>

  <section class="zeiss-center">
    <div class="zeiss-center-box">
      <img
        src="https://statichk.cmermedical.com/vision/imgs/zeissMyopia/zeiss-center.avif"
        alt=""
      />
      <p>
        香港是全球近視發病率最高的地區之一，根據研究顯示，超過40%的<br
          class="d-none d-lg-block"
        />8歲學童已患上近視，學童近視問題已成為社會關注的焦點。為了應對這一挑戰，希瑪視光與蔡司攜手合作打造「蔡司近視防控中心」，並引入最尖端技術的蔡司MYO
        200近視管理生物測量儀，致力於為學童提供一站式近視風險評估和管理服務。
      </p>
    </div>
  </section>

  <section class="section2">
    <div class="section2-box">
      <img
        decoding="async"
        src="https://statichk.cmermedical.com/vision/imgs/zeissMyopia/section2-pc.avif"
        loading="lazy"
        srcset="
          https://statichk.cmermedical.com/vision/imgs/zeissMyopia/section2-mb.avif 400w,
          https://statichk.cmermedical.com/vision/imgs/zeissMyopia/section2-mb.avif 640w,
          https://statichk.cmermedical.com/vision/imgs/zeissMyopia/section2-pc.avif
        "
        sizes=" (max-width: 992px) 100vw,1216px"
      />
      <div class="section2-box-text">
        <h2>全新引入蔡司MYO 200<br class="d-lg-none" />近視管理生物測量儀</h2>
        <p>
          蔡司MYO 200技術經上億次嚴格驗證<br
            class="d-lg-none"
          />以及超過25年醫學臨床應用，<br class="d-lg-none" />確立生物測量領域的
        </p>
        <span>「黃金標準」</span>
      </div>
    </div>
  </section>
  <!-- 蔡司MYO 200 核心特色 -->
  <section class="section3">
    <div class="section3-box">
      <h2>蔡司MYO 200 <br class="d-none d-lg-block" />核心特色</h2>
      <div class="section3-box-List">
        <div class="section3-box-List-item">
          <div class="section3-box-List-item-title">
            <h4>01</h4>
            <i>精準測量眼軸長度</i>
          </div>

          <div class="section3-box-List-item-text">
            <img
              src="https://statichk.cmermedical.com/vision/imgs/zeissMyopia/section3-1.avif"
              alt=""
            />
            <p>
              眼軸長度是近視管理的關鍵指標，蔡司MYO
              200能夠精準測量並追蹤眼軸的變化
            </p>
          </div>
        </div>

        <div class="section3-box-List-item">
          <div class="section3-box-List-item-title">
            <h4>02</h4>
            <i>快速掃描技術</i>
          </div>

          <div class="section3-box-List-item-text">
            <img
              src="https://statichk.cmermedical.com/vision/imgs/zeissMyopia/section3-2.avif"
              alt=""
            />
            <p>僅需11.5秒即可完成視力檢查，極大縮短測量時間並提升效率</p>
          </div>
        </div>

        <div class="section3-box-List-item">
          <div class="section3-box-List-item-title">
            <h4>03</h4>
            <i>自動校準功能</i>
          </div>

          <div class="section3-box-List-item-text">
            <img
              src="https://statichk.cmermedical.com/vision/imgs/zeissMyopia/section3-3.avif"
              alt=""
            />
            <p>確保測量數據高度精準，減少人為誤差</p>
          </div>
        </div>

        <div class="section3-box-List-item">
          <div class="section3-box-List-item-title">
            <h4>04</h4>
            <i>遠心角膜測量技術</i>
          </div>

          <div class="section3-box-List-item-text">
            <img
              src="https://statichk.cmermedical.com/vision/imgs/zeissMyopia/section3-4.avif"
              alt=""
            />
            <p>提升檢查舒適度，減少學童焦慮與不適感</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="section4">
    <h2>簡單<span>4</span>步預測未來近視風險</h2>
    <div class="section4-subtitle">
      <img
        src="https://statichk.cmermedical.com/vision/imgs/zeissMyopia/section4-mb-1.avif"
        alt=""
      />
      <p>
        希瑪視光採用全新蔡司MyoConsult近視諮詢系統，結合MYO
        200測量數據，通過以下4個步驟，精準評估學童的近視風險：
      </p>
    </div>
    <div class="section4-content">
      <div class="section4-content-List">
        <div class="section4-content-List-item">
          <i>第一步</i>
          <h4>仔細視覺分析</h4>
          <p>蔡司精準驗光</p>
        </div>

        <div class="section4-content-List-item">
          <i>第二步</i>
          <h4>近視防控評估</h4>
          <p>最新蔡司<span>MYO 200</span><br />全面追蹤眼軸長度</p>
        </div>

        <div class="section4-content-List-item">
          <i>第三步</i>
          <h4>高效近視防控方案</h4>
          <p>
            <span>蔡司MyoCare</span>鏡片<br />方案及蔡司精密<br />數碼中心定位
          </p>
        </div>

        <div class="section4-content-List-item">
          <i>第四步</i>
          <h4>追蹤和預測近視發展</h4>
          <p><span>蔡司MyoConsult</span><br />全面近視風險評估<br />四步曲</p>
        </div>
      </div>
      <img
        class="section4-pcimg"
        src="https://statichk.cmermedical.com/vision/imgs/zeissMyopia/section4-02.avif"
        alt=""
      />
      <div class="section4-content-btn">
        <a
          target="_blank"
          href="https://api.whatsapp.com/send?phone=85269180511&text=立即查詢及預約蔡司視覺體驗"
        >
          <span>立即體驗流程</span
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="13"
            height="22"
            viewBox="0 0 13 22"
            fill="none"
          >
            <path
              d="M2.02539 1.75L11.146 10.8706L2.02539 19.9913"
              stroke="white"
              stroke-width="2.10476"
              stroke-linecap="square"
            />
          </svg>
        </a>
      </div>
    </div>
  </section>

  <!-- 蔡司MyoCare兒童近視控制鏡片 -->
  <section class="section5">
    <h2>蔡司MyoCare兒童<br class="d-lg-none" />近視控制鏡片</h2>
    <div class="section5-box">
      <img
        src="https://statichk.cmermedical.com/vision/imgs/zeissMyopia/section5-Img.avif"
        alt=""
      />
      <div class="section5-box-text">
        <div>
          <i></i>
          <p>
            蔡司MyoCare兒童近視控制鏡片採用香港理工大學研發的同心多環近視管理技術（DISC），結合蔡司專利
            C.A.R.E.® 技術，能有效減慢近視加深速度達 48% 至 63%，減少眼軸增長達
            41% 至 77%。
          </p>
        </div>
        <br />
        <div>
          <i></i>
          <p>
            研究數據顯示，近90%配戴蔡司MyoCare鏡片的兒童能有效減慢近視加深，亞洲兒童的眼軸增長平均減少達70%。
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- Swiper -->
  <main class="wpbSwpier">
    <div class="mySwpier">
      <swiper
        ref="mySwiper"
        class="mySwiperItem"
        :modules="modules"
        @swiper="swiperBox"
        :grab-cursor="true"
        :centered-slides="true"
        :slides-per-view="3"
        :space-between="30"
        :initialSlide="1"
        :touchMoveStopPropagation="false"
        :touchRatio="1"
        :loop="true"
        :autoplay="{ delay: 0 }"
        :speed="3000"
        :breakpoints="{
          '0': {
            slidesPerView: 2,
            spaceBetween: 15,
          },

          '768': {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }"
      >
        <!-- :autoplay="{ delay: 3000, disableOnInteraction: false }" -->
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

      <!-- <div class="swiper-button-next-prev">
        <div class="button-prev" @click="handlesSliPrev"></div>
        <div class="button-next" @click="handlesSliNext"></div>
      </div> -->
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
                src="https://statichk.cmermedical.com/vision/imgs/zeissMyopia/section-address.avif"
                alt="彌敦道625及639號雅蘭中心一期1202室"
              />
            </a>
            <div>
              <div class="address-item">
                <div class="address-title">地址</div>
                <div class="address-text">
                  <span>彌敦道625及639號雅蘭中心一期1202室</span>
                  <span>（旺角站E1出口）</span>
                </div>
              </div>
              <div class="address-item">
                <div class="address-title">營業時間</div>
                <div class="address-items">
                  <div class="address-text">
                    <span>星期一至五：</span> <span>10:00 – 13:30</span>
                    <span>14:30 – 18:30</span>
                  </div>
                  <div class="address-text">
                    <span>星期六：</span> <span>09:30-17:00</span>
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
                    href="https://api.whatsapp.com/send?phone=85269180511&text=你好，我想查詢"
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

  <PublicForm />
</template>

<style lang="scss" scoped>
.rotated {
  transition: transform 0.3s ease-out;
  transform: rotateY(45deg);
}
.zve-information {
  cursor: url("https://statichk.cmermedical.com/vision/imgs/2025012116391701.png"),
    auto;
}

.d-none {
  display: none;
}
@media screen and (min-width: 768px) {
  .d-lg-none {
    display: none;
  }
  .d-lg-block {
    display: block;
  }
  //  中心介绍
  .zeiss-center {
    width: 100vw;
    margin: 4.27vw auto 0;
    .zeiss-center-box {
      width: 67.71vw;
      margin: 0 auto;
      display: flex;
      justify-content: end;
      flex-direction: row-reverse;
      gap: 2.6vw;
      img {
        width: 15.1vw;
        border-radius: 10px;
        background: #d9d9d9;
        display: block;
      }

      p {
        max-width: 33.91vw;
        color: #60605f;
        font-family: "Noto Sans CJK TC";
        font-size: 1.09vw;
        font-style: normal;
        font-weight: 500;
        line-height: 214.286%;
      }
    }
  }

  .section2 {
    width: 78.13vw;
    margin: 5.21vw auto 0;

    .section2-box {
      position: relative;
      display: flex;

      align-items: center;
      justify-content: space-between;
      img {
        display: block;
        width: auto;
        height: 22.5vw;
        // position: absolute;
        // left: 0px;
      }
      .section2-box-text {
        text-align: center;
        width: fit-content;
        h2 {
          color: #00a6ce;
          font-family: "Noto Sans HK";
          font-size: 1.76vw;
          font-style: normal;
          font-weight: 700;
          line-height: 133.333%;
          letter-spacing: 0.09vw;
          position: relative;
          &::after {
            content: "";
            position: absolute;
            width: 6.88vw;
            height: 0.16vw;
            background: var(--Brand-Color, #00a6ce);
            bottom: -0.68vw;
            left: 50%;
            transform: translateX(-50%);
          }
        }
        p {
          margin-top: 2.45vw;
          color: #60605f;
          text-align: center;
          font-family: "Noto Sans CJK TC";
          font-size: 1.09vw;
          font-style: normal;
          font-weight: 500;
          line-height: 252.381%;
        }
        span {
          color: #f26722;
          font-family: "Noto Sans CJK TC";
          font-size: 1.88vw;
          font-style: normal;
          font-weight: 700;
          line-height: 1.47;
          position: relative;
          &::after {
            content: "";
            position: absolute;
            width: 2.24vw;
            height: 1.04vw;
            bottom: -2.6vw;
            left: 50%;
            transform: translateX(-50%);
            background: url("https://statichk.cmermedical.com/vision/imgs/zeissMyopia/section2-ico.svg")
              no-repeat;
            background-size: 100% auto;
          }
        }
      }
    }
  }

  .section3 {
    padding-top: 3.39vw;
    padding-bottom: 3.39vw;
    background: var(--Skin, #eafbff);
    .section3-box {
      margin: 0 auto;
      width: 67.71vw;
      display: flex;
      align-items: center;
      justify-content: space-between;
      h2 {
        color: #00a6ce;
        text-align: justify;
        font-family: "Noto Sans HK";
        font-size: 1.76vw;
        font-style: normal;
        font-weight: 700;
        line-height: 133.333%;
        letter-spacing: 0.09vw;
        width: fit-content;
        height: fit-content;
        position: relative;
        &::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -0.78vw;
          width: 4.9vw;
          height: 0.16vw;
          background: var(--Brand-Color, #00a6ce);
        }
      }
      .section3-box-List {
        display: flex;

        gap: 3.39vw;
        .section3-box-List-item {
          width: 9.9vw;
          position: relative;
          &::after {
            content: "";
            position: absolute;
            right: -1.88vw;
            top: 50%;
            transform: translateY(-50%);
            height: 11.82vw;
            width: 0.1vw;
            background: var(--Brand-Color, #00a6ce);
          }

          .section3-box-List-item-title {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            gap: 0.78vw;
            h4 {
              color: var(--Blue-Pale, #d3f0fd);
              text-align: center;
              font-family: Inter;
              font-size: 1.53vw;
              font-style: normal;
              font-weight: 600;
              line-height: 103.675%;
              text-transform: uppercase;
            }
            i {
              color: var(--Brand-Color, #00a6ce);
              text-align: center;
              font-family: Inter;
              font-size: 1.27vw;
              font-style: normal;
              font-weight: 600;
              line-height: 125%;
              text-transform: uppercase;
            }
          }
          .section3-box-List-item-text {
            display: flex;
            flex-direction: column;
            align-items: center;

            img {
              width: 7.29vw;
              display: block;
            }
            p {
              color: #60605f;
              font-family: "Noto Sans CJK TC";
              font-size: 1.09vw;
              font-style: normal;
              font-weight: 500;
              line-height: 214.286%;
            }
          }
        }
        & > .section3-box-List-item:nth-child(1) {
          width: 10.94vw;
        }
        & > .section3-box-List-item:nth-child(4) {
          width: 10.21vw;
          &::after {
            content: none;
          }
        }
      }
    }
  }

  .section4 {
    padding-top: 4.17vw;
    h2 {
      color: #00a6ce;
      text-align: center;
      font-family: "Noto Sans";
      font-size: 1.76vw;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      letter-spacing: 0.35vw;
      span {
        color: #00a6ce;
        font-size: 3.33vw;
        letter-spacing: 0.67vw;
      }
    }
    .section4-subtitle {
      margin-top: 3.13vw;
      img {
        display: none;
      }

      p {
        color: #60605f;
        text-align: center;
        font-family: "Noto Sans CJK TC";
        font-size: 1.09vw;
        font-style: normal;
        font-weight: 500;
        line-height: 214.286%;
      }
    }

    .section4-content {
      margin-top: 4.48vw;
      margin-left: 4.69vw;
      position: relative;
      .section4-content-List {
        display: flex;
        .section4-content-List-item {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 15.99vw;
          height: 15.99vw;
          flex-shrink: 0;
          background: url("https://statichk.cmermedical.com/vision/imgs/zeissMyopia/section4-pc-2.png")
            no-repeat;
          background-size: 100% auto;

          i {
            color: #00a6ce;
            text-align: center;
            font-family: "Noto Sans HK";
            font-size: 1.25vw;
            font-style: normal;
            font-weight: 700;
            line-height: 126.613%;
            text-transform: uppercase;
          }
          h4 {
            color: #00a6ce;
            font-family: "Noto Sans CJK TC";
            font-size: 1.35vw;
            font-style: normal;
            font-weight: 700;
            line-height: 173.077%;
          }
          p {
            color: #60605f;
            text-align: center;
            font-family: "Noto Sans CJK TC";
            font-size: 0.83vw;
            font-style: normal;
            font-weight: 500;
            line-height: 187.5%;
            span {
              color: #2449a4;
            }
          }
        }

        & > .section4-content-List-item:nth-child(even) {
          margin-left: -4.38vw;
          margin-right: -4.38vw;
          margin-top: 16.67vw;

          position: relative;
          &::before {
            content: "";
            position: absolute;
            top: -2.45vw;
            left: 1.77vw;
            width: 0.1vw;
            height: 4.69vw;
            transform: rotate(-45deg);
            background: #00a6ce;
          }
          &::after {
            content: "";
            position: absolute;
            top: -2.45vw;
            right: 1.77vw;
            width: 0.1vw;
            height: 4.69vw;
            transform: rotate(45deg);
            background: #00a6ce;
          }
        }
        & > .section4-content-List-item:last-child {
          margin-bottom: 0;
          &::after {
            content: none;
          }
        }
      }
      .section4-pcimg {
        width: 45.83vw;
        position: absolute;
        right: 0;
        top: 0;
      }

      .section4-content-btn {
        position: relative;
        width: 51.2vw;
        height: 2.6vw;
        margin: 4.17vw 0 9.9vw 0px;
        a {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          padding: 15px 30px;
          text-transform: uppercase;
          text-decoration: none;
          white-space: nowrap;
          box-shadow: 4px 4px 4px 0 rgba(0, 0, 0, 0.14);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          gap: 0.42vw;

          background: #f5984b;
          border: none;
          border-radius: 50px;
          color: #fff;
          font-family: "Noto Sans";
          font-size: 1.56vw;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
          letter-spacing: 0.31vw;
        }

        a:before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(255, 255, 255, 0.226);
          z-index: -1;
          transition: transform 0.5s;
          transform-origin: bottom right;
          transform: scale(0);
        }
        a:hover:before {
          transition: transform 0.5s;
          transform-origin: top left;
          transform: scale(1);
        }

        a:after {
          content: "";
          position: absolute;
          top: 5%;
          left: 2%;

          width: 96%;
          height: 90%;
          background: transparent;
          border-radius: 50px;
          border: 2px solid #fff;
          box-sizing: border-box;
          z-index: -1;
          transition: transform 0.5s;
          transform-origin: bottom right;
          transform: scale(1);
        }

        a:hover:after {
          transition: transform 0.5s;
          transform-origin: top left;
          transform: scale(0);
        }
      }
    }
  }

  .section5 {
    padding-top: 5.21vw;
    padding-bottom: 4.17vw;
    h2 {
      color: var(--Brand-Color, #00a6ce);
      text-align: center;
      font-family: "Noto Sans HK";
      font-size: 1.76vw;
      font-style: normal;
      font-weight: 700;
      line-height: 133.333%;
      letter-spacing: 0.09vw;
      position: relative;
      &::after {
        content: "";
        position: absolute;
        bottom: -0.36vw;
        left: 50%;
        transform: translateX(-50%);
        width: 13.02vw;
        height: 0.16vw;
        background: var(--Brand-Color, #00a6ce);
      }
    }
    .section5-box {
      margin-top: 4.17vw;
      display: flex;
      align-items: flex-start;
      gap: 7.92vw;
      img {
        width: 41.72vw;
      }
      .section5-box-text {
        margin-top: 1.88vw;
        padding: 0px 1.04vw;
        & > div {
          display: flex;
          align-items: baseline;
          gap: 1.77vw;
          position: relative;
          &::after {
            content: "";
            position: absolute;
            background: url("https://statichk.cmermedical.com/vision/imgs/zeissMyopia/section5-2.png")
              no-repeat;
            background-size: 100% auto;
            left: -0.42vw;
            top: 1.88vw;
            width: 19.32vw;
            height: 5.31vw;
            transform: translateX(-100%);
          }
          i {
            width: 0.78vw;
            height: 0.78vw;
            flex-shrink: 0;
            display: block;
            transform: rotate(45deg);
            background: #00a6ce;
          }
          p {
            max-width: 36.35vw;
            color: #60605f;
            font-family: "Noto Sans CJK TC";
            font-size: 1.09vw;
            font-style: normal;
            font-weight: 500;
            line-height: 214.286%;
          }
        }
      }
    }
  }

  .bg-mask-layer {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 98.333vw;
    height: 43.28125vw;
    background: url("https://statichk.cmermedical.com/vision/imgs/2025012115464301.png")
      no-repeat;
    background-size: cover;
    z-index: 10;
    pointer-events: none;
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
    :deep(.mySwiperItem > .swiper-wrapper) {
      transition-timing-function: linear;
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
  //  中心介绍
  .zeiss-center {
    width: 83.59vw;
    margin: 8.97vw auto 0;
    .zeiss-center-box {
      img {
        width: 63.59vw;
        margin: 0 auto 3.59vw;
        border-radius: 10px;
        background: #d9d9d9;
        display: block;
      }

      p {
        color: var(--Grey-Deep, #4d4d4d);
        text-align: justify;

        font-family: "Noto Sans HK";
        font-size: 3.59vw;
        font-style: normal;
        font-weight: 500;
        line-height: 185.714%;
      }
    }
  }

  .section2 {
    margin-top: 10.26vw;
    height: 58.72vw;
    .section2-box {
      position: relative;
      display: flex;
      justify-content: end;
      img {
        display: block;
        width: auto;
        height: 58.72vw;
        position: absolute;
        left: 0px;
      }
      .section2-box-text {
        padding-top: 4.62vw;
        padding-right: 3.08vw;
        text-align: center;
        width: fit-content;
        h2 {
          color: var(--Brand-Color, #00a6ce);
          text-align: center;
          font-family: "Noto Sans HK";
          font-size: 5.13vw;
          font-style: normal;
          font-weight: 500;
          line-height: 127.5%;
          letter-spacing: 0.26vw;
          position: relative;
          &::after {
            content: "";
            position: absolute;
            width: 24.1vw;
            height: 0.77vw;
            background: var(--Brand-Color, #00a6ce);
            bottom: -3.33vw;
            left: 50%;
            transform: translateX(-50%);
          }
        }
        p {
          margin-top: 8.21vw;
          color: #60605f;
          text-align: center;
          font-family: "Noto Sans HK";
          font-size: 3.59vw;
          font-style: normal;
          font-weight: 500;
          line-height: 128.571%;
          text-transform: uppercase;
        }
        span {
          color: #f26722;
          text-align: center;
          font-family: "Noto Sans CJK TC";
          font-size: 5.13vw;
          font-style: normal;
          font-weight: 700;
          line-height: 200%;
          position: relative;
          &::after {
            content: "";
            position: absolute;
            width: 4.62vw;
            height: 2.05vw;
            bottom: -2.56vw;
            left: 50%;
            transform: translateX(-50%);
            background: url("https://statichk.cmermedical.com/vision/imgs/zeissMyopia/section2-ico.svg")
              no-repeat;
            background-size: 100% auto;
          }
        }
      }
    }
  }

  .section3 {
    padding-top: 6.41vw;
    padding-bottom: 6.41vw;
    background: var(--Skin, #eafbff);
    .section3-box {
      h2 {
        color: var(--Brand-Color, #00a6ce);
        text-align: center;
        font-family: "Noto Sans HK";
        font-size: 5.13vw;
        font-style: normal;
        font-weight: 500;
        line-height: 127.5%;
        letter-spacing: 0.26vw;
        position: relative;
        &::after {
          content: "";
          position: absolute;
          left: 50%;
          bottom: -3.85vw;
          transform: translateX(-50%);
          width: 24.1vw;
          height: 0.77vw;
          background: var(--Brand-Color, #00a6ce);
        }
      }
      .section3-box-List {
        width: 84.62vw;
        margin: 8.21vw auto 0;
        display: flex;
        flex-direction: column;
        gap: 3.85vw;
        .section3-box-List-item {
          position: relative;

          .section3-box-List-item-title {
            width: 57.18vw;
            margin-left: auto;
            display: flex;
            align-items: end;
            gap: 2.82vw;
            h4 {
              color: var(--Blue-Pale, #d3f0fd);
              text-align: center;
              font-family: Inter;
              font-size: 8.21vw;
              font-style: normal;
              font-weight: 600;
              line-height: 94.96%;
              text-transform: uppercase;
            }
            i {
              color: var(--Brand-Color, #00a6ce);
              font-family: "Noto Sans HK";
              font-size: 3.59vw;
              font-style: normal;
              font-weight: 700;
              line-height: 142.857%;
              letter-spacing: 0.18vw;
            }
          }
          .section3-box-List-item-text {
            position: static;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            img {
              width: 20vw;
              display: block;
              position: absolute;

              left: 0;
              top: 50%;
              transform: translateY(-50%);
            }
            p {
              width: 57.18vw;
              color: #60605f;
              font-family: "Noto Sans CJK TC";
              font-size: 3.59vw;
              font-style: normal;
              font-weight: 500;
              line-height: 142.857%;
            }
          }
        }
      }
    }
  }

  .section4 {
    padding-top: 12.82vw;
    h2 {
      color: #00a6ce;
      text-align: center;
      font-family: "Noto Sans CJK TC";
      font-size: 6.15vw;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      letter-spacing: 0.62vw;
    }
    .section4-subtitle {
      margin-top: 6.15vw;
      padding-right: 5.13vw;
      padding-top: 2.05vw;
      padding-bottom: 2.05vw;
      display: flex;
      align-items: center;
      justify-content: end;
      background: var(--Skin, #eafbff);
      img {
        width: 43.59vw;
        flex-shrink: 0;
        position: absolute;
        left: 0;
      }

      p {
        width: 54.36vw;
        color: #60605f;
        text-align: center;

        font-family: "Noto Sans CJK TC";
        font-size: 4.1vw;
        font-style: normal;
        font-weight: 500;
        line-height: 200%;
      }
    }

    .section4-content {
      padding: 10.26vw 7.69vw 0;

      .section4-content-List {
        .section4-content-List-item {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 46.92vw;
          height: 46.92vw;
          flex-shrink: 0;
          background: url("https://statichk.cmermedical.com/vision/imgs/zeissMyopia/section4-pc-2.png")
            no-repeat;
          background-size: 100% auto;

          i {
            color: #00a6ce;
            text-align: center;
            font-family: "Noto Sans HK";
            font-size: 3.59vw;
            font-style: normal;
            font-weight: 700;
            line-height: 217.051%;
            text-transform: uppercase;
          }
          h4 {
            color: #00a6ce;
            font-family: "Noto Sans CJK TC";
            font-size: 4.1vw;
            font-style: normal;
            font-weight: 700;
            line-height: 281.25%;
          }
          p {
            color: #60605f;
            text-align: center;
            font-family: "Noto Sans CJK TC";
            font-size: 3.08vw;
            font-style: normal;
            font-weight: 500;
            line-height: 1.2;
            span {
              color: #2449a4;
            }
          }
        }

        & > .section4-content-List-item:nth-child(even) {
          margin-left: auto;
          margin-top: -7.69vw;
          margin-bottom: -7.69vw;
          position: relative;
          &::before {
            content: "";
            position: absolute;
            top: 1.28vw;
            left: 2.56vw;
            width: 0.51vw;
            height: 8.46vw;
            transform: rotate(-45deg);
            background: #00a6ce;
          }
          &::after {
            content: "";
            position: absolute;
            bottom: 1.28vw;
            left: 2.56vw;
            width: 0.51vw;
            height: 8.46vw;
            transform: rotate(45deg);
            background: #00a6ce;
          }
        }
        & > .section4-content-List-item:last-child {
          margin-bottom: 0;
          &::after {
            content: none;
          }
        }
      }
      .section4-pcimg {
        display: none;
      }

      .section4-content-btn {
        position: relative;
        height: 12.82vw;
        margin: 15.38vw auto;
        a {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          padding: 3.85vw 7.69vw;
          text-transform: uppercase;
          text-decoration: none;
          white-space: nowrap;
          box-shadow: 4px 4px 4px 0 rgba(0, 0, 0, 0.14);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 2.05vw;

          background: #f5984b;
          border: none;
          border-radius: 12.82vw;
          color: #fff;
          font-family: "Noto Sans";
          font-size: 5.38vw;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
          letter-spacing: 1.08vw;
        }

        a:before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(255, 255, 255, 0.226);
          z-index: -1;
          transition: transform 0.5s;
          transform-origin: bottom right;
          transform: scale(0);
        }
        a:hover:before {
          transition: transform 0.5s;
          transform-origin: top left;
          transform: scale(1);
        }

        a:after {
          content: "";
          position: absolute;
          top: 5%;
          left: 2%;

          width: 96%;
          height: 90%;
          background: transparent;
          border-radius: 50px;
          border: 2px solid #fff;
          box-sizing: border-box;
          z-index: -1;
          transition: transform 0.5s;
          transform-origin: bottom right;
          transform: scale(1);
        }

        a:hover:after {
          transition: transform 0.5s;
          transform-origin: top left;
          transform: scale(0);
        }
      }
    }
  }

  .section5 {
    h2 {
      color: #00a6ce;
      text-align: center;
      font-family: "Noto Sans CJK TC";
      font-size: 6.15vw;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      letter-spacing: 0.62vw;
      position: relative;
      &::after {
        content: "";
        position: absolute;
        bottom: -2.82vw;
        left: 50%;
        transform: translateX(-50%);
        width: 25.13vw;
        height: 0.77vw;
        background: var(--Brand-Color, #00a6ce);
      }
    }
    .section5-box {
      margin-top: 10.26vw;
      img {
        width: 80.77vw;
      }
      .section5-box-text {
        padding: 10.26vw 5.13vw;
        & > div {
          display: flex;
          align-items: baseline;
          gap: 3.08vw;
          i {
            width: 2.56vw;
            height: 2.56vw;
            flex-shrink: 0;
            display: block;
            transform: rotate(45deg);
            background: #00a6ce;
          }
          p {
            color: #60605f;
            font-family: "Noto Sans CJK TC";
            font-size: 4.1vw;
            font-style: normal;
            font-weight: 500;
            line-height: 200%;
          }
        }
      }
    }
  }

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
    }
    :deep(.mySwiperItem > .swiper-wrapper) {
      transition-timing-function: linear;
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
      border-top: 1px solid transparent; /* 透明下边框透明 */
      border-right: 1px solid transparent; /* 透明;右边框透明 */
    }

    &::after {
      content: "";
      position: absolute;
      right: 0;
      bottom: 0;
      width: 15px;
      height: 15px;
      border: 4px solid #2449a4;
      border-top: 1px solid transparent; /* 下边框透明 */
      border-left: 1px solid transparent; /* 右边框透明 */
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

  .item-span {
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

@media screen and (max-width: 768px) {
  .in-plant {
    margin: 50px auto 25px;
    box-sizing: border-box;
    padding: 0 25px;
  }
}
</style>


<style>
body {
  overflow-x: hidden; /* 禁止水平滚动 */
  overflow-y: auto;
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
