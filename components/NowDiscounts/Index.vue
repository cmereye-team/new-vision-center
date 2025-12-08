<script lang="ts" setup>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/scss";

import "swiper/scss/pagination";
import "swiper/scss/navigation";
import { Grid, Autoplay, Pagination, Navigation } from "swiper/modules";
const modules = [Autoplay, Pagination, Navigation];

const modules2 = [Grid, Autoplay, Pagination];
const loading = ref(true)
const swiperBox = (swiper: any) => {
  deBoxSwiperRef = swiper;
};
let deBoxSwiperRef = {
  slideTo: (a: any) => {},
  slideToLoop: (a: any) => {},
  slidePrev: () => {},
  slideNext: () => {},
};
const handleshowdeBox = (_idx: any) => {
  deBoxSwiperRef.slideTo(_idx);
};
const handlesSliNext = () => {
  deBoxSwiperRef.slideNext();
};
const handlesSliPrev = () => {
  deBoxSwiperRef.slidePrev();
};

const discountsList = ref([
  {
    id: 1,
    img: "https://statichk.cmermedical.com/vision/imgs/f69569e081a8a949.png",
    title: ["驗配Rodenstock漸進鏡即", "免費升級變色鏡片"],
    price: "4,560",
    reason: "節日限定",
    content:
      "B.I.G Vision™打破了舊有鏡片製作思維的基礎，成為第一個根據完整人體眼球的生物模型製造的高精密多焦點鏡片",
    btn1: "立即查詢",
    btn2: "了解產品",
    btn1Link:
      "https://api.whatsapp.com/send?phone=85269180511&text=%E4%BD%A0%E5%A5%BD,%E6%88%91%E6%83%B3%E6%9F%A5%E8%A9%A2",
    btn2Link:
      "https://api.whatsapp.com/send?phone=85269180511&text=你好,我想查詢最新優惠詳情",
  },
  {
    id: 2,
    img: "https://statichk.cmermedical.com/vision/imgs/f69569e081a8a949.png",
    title: ["驗配Rodenstock漸進鏡即", "免費升級變色鏡片"],
    price: "4,560",
    reason: "節日限定",
    content:
      "B.I.G Vision™打破了舊有鏡片製作思維的基礎，成為第一個根據完整人體眼球的生物模型製造的高精密多焦點鏡片",
    btn1: "立即查詢",
    btn2: "了解產品",
    btn1Link:
      "https://api.whatsapp.com/send?phone=85269180511&text=%E4%BD%A0%E5%A5%BD,%E6%88%91%E6%83%B3%E6%9F%A5%E8%A9%A2",
    btn2Link:
      "https://api.whatsapp.com/send?phone=85269180511&text=你好,我想查詢最新優惠詳情",
  },
  {
    id: 3,
    img: "https://statichk.cmermedical.com/vision/imgs/b98c74ee6903eb45.jpg",
    title: ["驗配Rodenstock漸進鏡即", "免費升級變色鏡片"],
    price: "4,560",
    reason: "節日限定",
    content:
      "B.I.G Vision™打破了舊有鏡片製作思維的基礎，成為第一個根據完整人體眼球的生物模型製造的高精密多焦點鏡片",
    btn1: "立即查詢",
    btn2: "了解產品",
    btn1Link:
      "https://api.whatsapp.com/send?phone=85269180511&text=%E4%BD%A0%E5%A5%BD,%E6%88%91%E6%83%B3%E6%9F%A5%E8%A9%A2",
    btn2Link:
      "https://api.whatsapp.com/send?phone=85269180511&text=你好,我想查詢最新優惠詳情",
  },
  {
    id: 4,
    img: "https://statichk.cmermedical.com/vision/imgs/f69569e081a8a949.png",
    title: ["驗配Rodenstock漸進鏡即", "免費升級變色鏡片"],
    price: "4,560",
    reason: "節日限定",
    content:
      "B.I.G Vision™打破了舊有鏡片製作思維的基礎，成為第一個根據完整人體眼球的生物模型製造的高精密多焦點鏡片",
    btn1: "立即查詢",
    btn2: "了解產品",
    btn1Link:
      "https://api.whatsapp.com/send?phone=85269180511&text=%E4%BD%A0%E5%A5%BD,%E6%88%91%E6%83%B3%E6%9F%A5%E8%A9%A2",
    btn2Link:
      "https://api.whatsapp.com/send?phone=85269180511&text=你好,我想查詢最新優惠詳情",
  },
  {
    id: 5,
    img: "https://statichk.cmermedical.com/vision/imgs/f69569e081a8a949.png",
    title: ["驗配Rodenstock漸進鏡即", "免費升級變色鏡片"],
    price: "4,560",
    reason: "節日限定",
    content:
      "B.I.G Vision™打破了舊有鏡片製作思維的基礎，成為第一個根據完整人體眼球的生物模型製造的高精密多焦點鏡片",
    btn1: "立即查詢",
    btn2: "了解產品",
    btn1Link:
      "https://api.whatsapp.com/send?phone=85269180511&text=%E4%BD%A0%E5%A5%BD,%E6%88%91%E6%83%B3%E6%9F%A5%E8%A9%A2",
    btn2Link:
      "https://api.whatsapp.com/send?phone=85269180511&text=你好,我想查詢最新優惠詳情",
  },
]);

interface TabsList {
  id: number;
  img: string;
  title: string;
  price: string;
  reason: string;
  content: string;
  btn1: string;
  btn2: string;
  btn1Link: string;
  btn2Link: string;
  sub_title: string;
  discounts_text: string;
}
const link = ref(
  "https://api.whatsapp.com/send?phone=85269180511&text=你好,我想查詢最新優惠詳情"
);
const discounts = ref<TabsList[]>([]);
const getDiscounts = async () => {
  try {
    const res = await fetch("https://content.cmervision.com/api.php/list/15");
    const data = await res.json();
    if (data.code === 1) {
      // console.log(data.data, "data");
      // data.data.sort((a: any, b: any) => a.id - b.id);
      discounts.value = data.data.map((item: any) => {
        return {
          id: item.id,
          img: `https://content.cmervision.com/${item.ico}`,
          title: item.title,
          price: item.ext_price,
          reason: item.sub_title,
          content: item.content,
          btn1: "立即查詢",
          btn2: "了解產品",
          btn1Link: link.value,
          btn2Link: link.value,
          sub_title: item.ext_detail_title,
          discounts_text: item.ext_detail_discounts,
        };
      });
      loading.value = false
    } else {
      console.log("error");
    }
  } catch (error) {
    console.log(error);
  }
};

import getWindowSize from "@/utils/width";
const isPc = ref(true);
const winWSize = ref(0);
onMounted(() => {
  let { widthState, width } = getWindowSize();
  window.addEventListener("resize", () => {
    let { widthState, width } = getWindowSize();
    winWSize.value = width;
    isPc.value = widthState;
  });

  winWSize.value = width;
  isPc.value = widthState;

  getDiscounts();
  window.addEventListener("scroll", getScrollY);
});
const maxNum = ref(1500);
const minNum = ref(1260);
const minNumMb = ref(1000);
const maxNumMb = ref(1400);
const scrollY = ref(0);

const getScrollY = () => {
  const paginationBtnItems = document.querySelectorAll(".pagination_btn_item");
  scrollY.value =
    window.scrollY ||
    document.documentElement.scrollTop ||
    document.body.scrollTop;

  if (winWSize.value > 768) {
    maxNum.value;
    minNum.value;
  } else {
    maxNum.value = maxNumMb.value;
    minNum.value = minNumMb.value;
  }
  if (scrollY.value < maxNum.value && scrollY.value > minNum.value) {
    paginationBtnItems.forEach((item: any) => {
      item.classList.add("price-btn_hover");
    });
  } else {
    paginationBtnItems.forEach((item: any) => {
      item.classList.remove("price-btn_hover");
    });
  }
};

</script>

<template>
  <div class="now-discounts">
    <div class="discounts-title">最新優惠</div>
    <div class="discounts-box"  v-loading="loading">
      <swiper
        :modules="modules"
        :autoplay="{
          delay: 2500,
          disableOnInteraction: false,
        }"
        :loop="true"
        class="mySwiper"
        @swiper="swiperBox"
      >
        <swiper-slide
          v-for="item in discounts"
          :key="item.id"
          class="discounts-slide"
        >
          <div class="img-slide">
            <img :src="item.img" :alt="item.content" />
          </div>
          <div class="slide-content">
            <div class="slide-title">
              <span>{{ item.title }}</span>
            </div>
            <div>
              <span>{{ item.reason }} </span><span>{{ item.price }}</span>
            </div>
            <div class="content" v-html="item.content"></div>
            <div>
              <a :href="item.btn1Link" target="_blank"></a>
              <a :href="item.btn2Link" target="_blank" class="WhatsApp_btn"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="27"
                  viewBox="0 0 28 27"
                  fill="none"
                >
                  <path
                    d="M19.5107 15.8177C19.2233 15.67 17.7915 14.9687 17.5252 14.8737C17.2589 14.7735 17.0638 14.7261 16.8713 15.0214C16.6762 15.3141 16.1225 15.9653 15.9485 16.1631C15.7797 16.3582 15.6083 16.3819 15.3209 16.2369C13.6123 15.3826 12.4917 14.7129 11.3658 12.7802C11.0679 12.266 11.6638 12.3029 12.2201 11.1929C12.3151 10.9978 12.2676 10.8316 12.1938 10.684C12.1199 10.5363 11.5399 9.10723 11.2973 8.52451C11.0626 7.95762 10.82 8.03672 10.6434 8.02617C10.4746 8.01562 10.2822 8.01562 10.087 8.01562C9.89192 8.01562 9.57815 8.08945 9.31184 8.37686C9.04553 8.66953 8.29407 9.37354 8.29407 10.8026C8.29407 12.2317 9.33557 13.616 9.47795 13.8111C9.62561 14.0063 11.5267 16.9383 14.4455 18.2013C16.2912 18.9976 17.0137 19.0661 17.9365 18.929C18.4982 18.8446 19.6557 18.2276 19.8956 17.5447C20.1356 16.8645 20.1356 16.2817 20.0644 16.1605C19.9932 16.0313 19.7981 15.9574 19.5107 15.8177Z"
                    fill="white"
                  />
                  <path
                    d="M25.0922 8.92266C24.4963 7.50674 23.642 6.23584 22.5531 5.14424C21.4641 4.05527 20.1932 3.19834 18.7746 2.60508C17.3244 1.996 15.7846 1.6875 14.1973 1.6875H14.1446C12.5467 1.69541 10.999 2.01182 9.54348 2.63408C8.13811 3.23525 6.87776 4.08955 5.79934 5.17852C4.72093 6.26748 3.87454 7.53311 3.28919 8.94375C2.68274 10.4045 2.37688 11.9575 2.38479 13.5554C2.3927 15.3853 2.8304 17.202 3.65042 18.8262V22.834C3.65042 23.5037 4.19358 24.0469 4.86331 24.0469H8.87376C10.498 24.8669 12.3147 25.3046 14.1446 25.3125H14.1999C15.7793 25.3125 17.3113 25.0066 18.7535 24.4081C20.1642 23.8201 21.4324 22.9764 22.5188 21.8979C23.6077 20.8195 24.4647 19.5592 25.0632 18.1538C25.6855 16.6983 26.0019 15.1506 26.0098 13.5527C26.0177 11.947 25.7066 10.3887 25.0922 8.92266ZM21.1081 20.4715C19.2598 22.3014 16.8076 23.3086 14.1973 23.3086H14.1525C12.5625 23.3007 10.9831 22.9052 9.58831 22.1616L9.36682 22.043H5.65432V18.3305L5.53567 18.109C4.79212 16.7142 4.39661 15.1348 4.3887 13.5448C4.37815 10.916 5.38274 8.44805 7.22581 6.58916C9.06624 4.73027 11.5263 3.70195 14.1551 3.69141H14.1999C15.5183 3.69141 16.7971 3.94717 18.0021 4.45342C19.1781 4.94648 20.2327 5.65576 21.1398 6.56279C22.0442 7.46719 22.7561 8.52451 23.2491 9.70049C23.7607 10.9187 24.0164 12.2106 24.0112 13.5448C23.9953 16.171 22.9644 18.6311 21.1081 20.4715Z"
                    fill="white"
                  /></svg
                >{{ item.btn2 }}</a
              >
            </div>
          </div>
        </swiper-slide>
      </swiper>
      <div class="swiper-button-next-prev">
        <div class="button-prev" @click="handlesSliPrev"></div>
        <div class="button-next" @click="handlesSliNext"></div>
      </div>
      <div class="swiper-pagination-btn" v-if="winWSize > 768">
        <swiper
          :slidesPerView="4"
          :spaceBetween="20"
          :modules="[Pagination, Autoplay, Navigation]"
          :autoplay="{
            delay: 2000,
            disableOnInteraction: false,
          }"
          :loop="true"
        >
          <swiper-slide
            v-for="(item, index) in discounts"
            :key="item.id"
            class="swiper-btn-item"
            :id="item.id"
            @click="handleshowdeBox(index)"
          >
            <div><img :src="item.img" :alt="item.content" /></div>
            <div>
              <span v-for="(title, index) in item.title" :key="index">
                {{ title }}
              </span>
            </div>
            <div class="price-btn">
              <div>
                <!-- <span class="price-text">節日限定 $</span> -->
                <span>{{ item.price }}</span>
              </div>
              <div>
                <a
                  class="pagination_btn_item WhatsApp_btn"
                  target="_blank"
                  :href="item.btn2Link"
                  >{{ item.btn1 }}</a
                >
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
      <div class="swiper-pagination-btn" v-else>
        <swiper
          :slidesPerView="2"
          :grid="{
            rows: 2,
            fill: 'row',
          }"
          :spaceBetween="18"
          :pagination="{
            clickable: true,
          }"
          :modules="modules2"
          class="mySwiper"
        >
          <swiper-slide
            class="swiper-btn-item"
            v-for="(item, index) in discounts"
            @click="handleshowdeBox(index)"
            :key="item.id"
          >
            <div class="discounts_content">
              <img :src="item.img" :alt="item.content" />
            </div>
            <div>
              <span>{{ item.title }}</span>
            </div>
            <div class="price-btn">
              <div>
                <span class="price-text">{{ item.price }}</span>
                <!-- <span>{{ item.price }}</span> -->
              </div>
              <div>
                <a
                  class="pagination_btn_item WhatsApp_btn"
                  target="_blank"
                  :href="item.btn1Link"
                  >{{ item.btn1 }}</a
                >
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@media screen and (min-width: 768px) {
  .now-discounts {
    margin-top: 45px;
    margin-bottom: 85px;
    position: relative;
  }
  .discounts-title {
    margin-bottom: 30px;
    color: var(--Brand-Color, #00a6ce);
    font-family: "Noto Sans HK";
    font-size: 37.5px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  .slide-content {
    & > div:nth-child(1) {
      display: flex;
      flex-direction: column;
      margin-bottom: 35px;
      color: #60605f;
      font-family: "Noto Sans HK";
      font-size: 22.5px;
      font-style: normal;
      font-weight: 900;
      line-height: 30px;

    }
    & > div:nth-child(2) {
      margin-bottom: 32px;
      color: var(--Brand-Color, #00a6ce);
      font-family: "Noto Sans HK";
      font-size: 13.5px;
      font-style: normal;
      font-weight: 700;
      line-height: 37.5px;
      & > span:nth-child(2) {
        color: var(--Brand-Color, #00a6ce);
        font-family: "Noto Sans HK";
        font-size: 24px;
      }
    }
    & > div:nth-child(3) {
      margin-bottom: 20px;
      color: #60605f;
      font-family: "Noto Sans HK";
      font-size: 13.5px;
      font-style: normal;
      font-weight: 500;
      line-height: 22.5px;
    
    }
    & > div:nth-child(4) {
      display: flex;
      & > a {
        // border-radius: 15px;
        // background: var(--Brand-Color, #00a6ce);
        padding: 12px 35px;
        cursor: pointer;

        color: #fff;
        font-family: "Noto Sans HK";
        font-size: 22.5px;
        font-style: normal;
        font-weight: 300;
        line-height: normal;
      
        margin-right: 0;
        border-radius: 37.5px;
        background: url("../../assets/img/bluebtn.svg") no-repeat;
        background-size: cover;
        transition: 0.5s;
        transition-property: box-shadow;
      }
      & > a:nth-child(1) {
        padding: 0;
      }
      & > a:nth-child(2) {
        background: url("../../assets/img/greenbtn.svg") no-repeat;
        background-size: cover;
        display: flex;
        align-items: center;
      }
      & > a:hover {
        box-shadow: 0 0 5px #00a6ce, 0 0 15px #00a6ce, 0 0 30px #00a6ce,
          0 0 100px #00a6ce;
      }
      & > a:nth-child(2):hover {
        box-shadow: 0 0 5px #80f392, 0 0 15px #80f392, 0 0 30px #80f392,
          0 0 100px #80f392;
      }
    }
    :deep(.content) {
      p {
        a {
          color: #00a6ce;
          border-bottom: 2px solid #00a6ce;
        }
      }
    }
  }
  .pagination_btn_item {
    background: url("../../assets/img/bluebtn.svg") no-repeat !important;
    background-size: cover !important;
    transition: 0.5s;
    transition-property: box-shadow;
  }
  .pagination_btn_item:hover {
    box-shadow: 0 0 5px #00a6ce, 0 0 15px #00a6ce, 0 0 30px #00a6ce,
      0 0 100px #00a6ce;
  }
  .swiper-button-next-prev {
    position: absolute;
    top: 21%;
    transform: translateY(-25%);
    z-index: 99;
    width: 100%;
    & > div:nth-child(1) {
      display: block;
      position: absolute;
      left: -4%;
      background: url("https://statichk.cmermedical.com/vision/imgs/1c62cfbbfb64b37f.png")
        no-repeat;
      background-position: right;
      width: 20px;
      height: 40px;
    }
    & > div:nth-child(2) {
      display: inline-block;
      position: absolute;
      right: 52%;
      background: url("https://statichk.cmermedical.com/vision/imgs/15988679aad2e086.png")
        no-repeat;
      background-position: right;
      width: 20px;
      height: 40px;
    }
  }
  .swiper-pagination-btn {
    & > div {
      padding: 20px 0;
    }
    margin-top: 60px;
    .swiper-btn-item {
      //  border-radius: 15px;
      // overflow: hidden;
      margin-bottom: 20px;
      & > div:nth-child(1) {
        margin-bottom: 8px;
        & > img {
          width: 100%;
        }
      }
      & > div:nth-child(2) {
        padding: 0 8px;
        color: #60605f;
        font-family: "Noto Sans HK";
        font-size: 13.5px;
        font-style: normal;
        font-weight: 500;
        line-height: 20.862px;
   
        margin-bottom: 10px;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        min-height: 37.5px;
      }
      & > div:nth-child(3) {
        & > div:nth-child(1) {
          color: var(--Brand-Color, #00a6ce);
          font-family: "Noto Sans HK";
          font-size: 10.5px;
          font-style: normal;
          font-weight: 700;
          line-height: 14.078px;
          span:nth-child(2) {
            color: var(--Brand-Color, #00a6ce);
            font-family: "Noto Sans HK";
            font-size: 23.47px;
            font-style: normal;
            font-weight: 700;
            line-height: 26.078px;
          }
        }
        & > div:nth-child(2) {
          a {
            padding: 5px 14px;
            border-radius: 12.686px;
            background: var(--Brand-Color, #00a6ce);
            color: #fff;

            font-family: "Noto Sans HK";
            cursor: pointer;
            font-size: 14.272px;
            font-style: normal;
            font-weight: 300;
            line-height: normal;
            text-transform: uppercase;
          }
        }
      }
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
  .swiper-pagination-btn {
    display: flex;
    justify-content: space-between;

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
  .price-btn {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0 8px;
    box-sizing: border-box;
    padding: 0 5px;

    & > div:nth-child(2) {
      a {
        width: fit-content;
        white-space: nowrap;
      }
      // padding-bottom: 10px;
    }
  }
  .price-btn_hover {
    position: relative;
  }
  .price-btn_hover::before {
    content: "";
    display: block;
    width: 0px;
    height: 86%;
    position: absolute;
    top: 7%;
    left: 0%;
    opacity: 0;
    background: #fff;
    box-shadow: 0 0 50px 30px #fff;
    -webkit-transform: skewX(-20deg);
    -moz-transform: skewX(-20deg);
    -ms-transform: skewX(-20deg);
    -o-transform: skewX(-20deg);
    transform: skewX(-20deg);
    -webkit-animation: sh02 1s 0s linear;
    -moz-animation: sh02 1s 0s linear;
    animation: sh02 1s 0s linear;
  }
  .price-btn_hover:hover::before {
    -webkit-animation: sh02 1s 0s linear;
    -moz-animation: sh02 15s 0s linear;
    animation: sh02 1s 0s linear;
  }
}
@media screen and (max-width: 767px) {
  .price-btn_hover {
    position: relative;
  }
  .price-btn_hover::before {
    content: "";
    display: block;
    width: 0px;
    height: 86%;
    position: absolute;
    top: 7%;
    left: 0%;
    opacity: 0;
    background: #fff;
    box-shadow: 0 0 50px 30px #fff;
    -webkit-transform: skewX(-20deg);
    -moz-transform: skewX(-20deg);
    -ms-transform: skewX(-20deg);
    -o-transform: skewX(-20deg);
    transform: skewX(-20deg);
    -webkit-animation: sh02 1s 0s linear;
    -moz-animation: sh02 1s 0s linear;
    animation: sh02 1s 0s linear;
  }

  .now-discounts {
    margin-bottom: 12.82vw;
    position: relative;
  }
  .discounts-title {
    margin-top: 5.128vw;
    margin-bottom: 7.692vw;
    color: var(--Brand-Color, #00a6ce);
    font-family: "Noto Sans HK";
    font-size: 6.15vw;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  .discounts-box {
    position: relative;
  }
  .slide-content {
    & > div:nth-child(1) {
      margin-bottom: 1.28vw;
      color: #60605f;
      font-family: "Noto Sans HK";
      font-size: 4.615vw;
      font-style: normal;
      font-weight: 900;
      line-height: 133%; /* 133.333% */
      
    }
    & > div:nth-child(2) {
      margin-bottom: 3.076vw;
      color: var(--Brand-Color, #00a6ce);
      font-family: "Noto Sans HK";
      font-size: 3.076vw;
      font-style: normal;
      font-weight: 700;
      line-height: 140%; /* 277.778% */
      & > span:nth-child(2) {
        color: var(--Brand-Color, #00a6ce);
        font-family: "Noto Sans HK";
        font-size: 4.64vw;
        line-height: 120%;
        font-style: normal;
        font-weight: 700;
      }
    }
    & > div:nth-child(3) {
      margin-bottom: 3.846vw;
      color: #60605f;
      font-family: "Noto Sans HK";
      font-size: 3.289vw;
      font-style: normal;
      font-weight: 500;
      line-height: 150%; /* 166.667% */
      
    }
    & > div:nth-child(4) {
      display: flex;
      & > a {
        border-radius: 2.05vw;
        background: var(--Brand-Color, #00a6ce);
        padding: 1.28vw 3.846vw;
        cursor: pointer;

        display: flex;
        align-items: center;
        color: #fff;
        font-family: "Noto Sans HK";
        font-size: 4.1025vw;
        font-style: normal;
        font-weight: 300;
        line-height: normal;
      
        margin-right: 6.4vw;
      }
      & > a:nth-child(1) {
        padding: 0;
        margin-right: 0;
      }
      & > a:hover {
        box-shadow: 2px 3px 8px 0px #b3b2b2;
      }
    }
    :deep(.content) {
      p {
        a {
          color: #00a6ce;
          border-bottom: 2px solid #00a6ce;
        }
      }
    }
  }
  .swiper-button-next-prev {
    position: absolute;
    top: 9%;
    transform: translateY(-25%);
    z-index: 99;
    width: 100%;
    & > div:nth-child(1) {
      display: block;
      position: absolute;
      left: -4%;
      background: url("https://statichk.cmermedical.com/vision/imgs/1c62cfbbfb64b37f.png")
        no-repeat;
      background-position: right;
      width: 5.128vw;
      height: 10.25vw;
    }
    & > div:nth-child(2) {
      display: inline-block;
      position: absolute;
      right: -5%;
      background: url("https://statichk.cmermedical.com/vision/imgs/15988679aad2e086.png")
        no-repeat;
      background-position: right;
      width: 5.128vw;
      height: 10.25vw;
    }
  }
  :deep(.swiper-btn-item) {
    width: 100%;
    display: flex;
    flex-direction: column;
    & > div:nth-child(1) {
      width: 100%;
      max-width: 100%;
      margin-bottom: 2.564vw;
      border-radius: 3.846vw;
      overflow: hidden;
      box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.4);
      & > img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .swiper-pagination-btn {
    margin-top: 10.256vw;
    .swiper-btn-item {
      & > div:nth-child(2) {
        color: #60605f;
        font-family: "Noto Sans HK";
        font-size: 3.589vw;
        font-style: normal;
        font-weight: 500;
        line-height: 150%; /* 154.534% */
       
        margin-bottom: 3.076vw;
      }
      & > div:nth-child(3) {
        & > div:nth-child(1) {
          color: var(--Brand-Color, #00a6ce);
          font-family: "Noto Sans HK";
          font-size: 2.564vw;
          font-style: normal;
          font-weight: 700;
          line-height: 180%;
          span:nth-child(2) {
            color: var(--Brand-Color, #00a6ce);
            font-family: "Noto Sans HK";
            font-size: 5.128vw;
            font-style: normal;
            font-weight: 700;
            line-height: 110%;
          }
        }
        & > div:nth-child(2) {
          a {
            padding: 1.0256vw 3.589vw;
            border-radius: 12.686px;
            background: var(--Brand-Color, #00a6ce);
            color: #fff;

            font-family: "Noto Sans HK";
            cursor: pointer;
            font-size: 3.589vw;
            font-style: normal;
            font-weight: 300;
            line-height: normal;
      
            text-wrap: nowrap;
          }
        }
      }
    }
  }
  .discounts-slide {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    & > div:nth-child(2) {
      margin-top: 15px;
      padding: 0 4.358vw;
    }
  }
  .img-slide {
    margin: auto;
    max-width: 78.719vw;
    & > img {
      width: 100%;
    }
  }
  .swiper-pagination-btn {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    & > div {
      margin-top: 3.846vw;
      & > div:nth-child(1) {
        & > img {
          width: 100%;
        }
      }
    }
  }
  .price-btn {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0 2.564vw;
  }
}

@keyframes sh02 {
  from {
    opacity: 0;
    left: 0%;
  }

  50% {
    opacity: 1;
  }

  to {
    opacity: 0;
    left: 100%;
  }
}
</style>