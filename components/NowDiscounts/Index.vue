<script lang="ts" setup>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/scss";

import "swiper/scss/pagination";
import "swiper/scss/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
const modules = [Autoplay, Pagination, Navigation];

const swiperBox = (swiper: any) => {
  deBoxSwiperRef = swiper;
};

let deBoxSwiperRef = {
  slideTo: (a) => {},
  slideToLoop: (a) => {},
  slidePrev: () => {},
  slideNext: () => {},
};
const handleshowdeBox = (_idx) => {
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
    img: "https://static.cmereye.com/imgs/2024/04/f69569e081a8a949.png",
    title: ["驗配Rodenstock漸進鏡即", "免費升級變色鏡片"],
    price: "4,560",
    reason: "節日限定",
    content:
      "B.I.G Vision™打破了舊有鏡片製作思維的基礎，成為第一個根據完整人體眼球的生物模型製造的高精密多焦點鏡片",
    btn1: "立即查詢",
    btn2: "了解產品",
  },
  {
    id: 2,
    img: "https://static.cmereye.com/imgs/2024/04/f69569e081a8a949.png",
    title: ["驗配Rodenstock漸進鏡即", "免費升級變色鏡片"],
    price: "4,560",
    reason: "節日限定",
    content:
      "B.I.G Vision™打破了舊有鏡片製作思維的基礎，成為第一個根據完整人體眼球的生物模型製造的高精密多焦點鏡片",
    btn1: "立即查詢",
    btn2: "了解產品",
  },
  {
    id: 3,
    img: "https://static.cmereye.com/imgs/2024/04/b98c74ee6903eb45.jpg",
    title: ["驗配Rodenstock漸進鏡即", "免費升級變色鏡片"],
    price: "4,560",
    reason: "節日限定",
    content:
      "B.I.G Vision™打破了舊有鏡片製作思維的基礎，成為第一個根據完整人體眼球的生物模型製造的高精密多焦點鏡片",
    btn1: "立即查詢",
    btn2: "了解產品",
  },
  {
    id: 4,
    img: "https://static.cmereye.com/imgs/2024/04/f69569e081a8a949.png",
    title: ["驗配Rodenstock漸進鏡即", "免費升級變色鏡片"],
    price: "4,560",
    reason: "節日限定",
    content:
      "B.I.G Vision™打破了舊有鏡片製作思維的基礎，成為第一個根據完整人體眼球的生物模型製造的高精密多焦點鏡片",
    btn1: "立即查詢",
    btn2: "了解產品",
    btn1Link:
      "https://api.whatsapp.com/send?phone=85269180511&text=%E4%BD%A0%E5%A5%BD,%E6%88%91%E6%83%B3%E6%9F%A5%E8%A9%A2",
    btn2Link: "/",
  },
]);
</script>

<template>
  <div class="now-discounts">
    <div class="discounts-title">最新優惠</div>
    <div class="discounts-box">
      <!-- :autoplay="{
          delay: 2500,
          disableOnInteraction: false,
        }" -->
      <swiper
        :modules="modules"
        :autoplay="{
          delay: 2500,
          disableOnInteraction: false,
        }"
        class="mySwiper"
        @swiper="swiperBox"
      >
        <swiper-slide
          v-for="item in discountsList"
          :key="item.id"
          class="discounts-slide"
        >
          <div class="img-slide">
            <img :src="item.img" :alt="item.content" />
          </div>
          <div class="slide-content">
            <div class="slide-title">
              <span v-for="(items, index) in item.title" :key="index">{{
                items
              }}</span>
            </div>
            <div>
              <span>{{ item.reason }} $</span><span>{{ item.price }}</span>
            </div>
            <div class="content">{{ item.content }}</div>
            <div>
              <a :href="item.btn1Link">{{ item.btn1 }}</a>
              <a :href="item.btn2Link">{{ item.btn2 }}</a>
            </div>
          </div>
        </swiper-slide>
      </swiper>
      <div class="swiper-button-next-prev">
        <div class="button-prev" @click="handlesSliPrev"></div>
        <div class="button-next" @click="handlesSliNext"></div>
      </div>
      <div class="swiper-pagination-btn">
        <div
          class="swiper-btn-item"
          v-for="(item, index) in discountsList"
          :key="item.id"
          @click="handleshowdeBox(index)"
        >
          <div><img :src="item.img" :alt="item.content" /></div>
          <div>
            <span v-for="(items, index) in item.title" :key="index">{{
              items
            }}</span>
          </div>
          <div class="price-btn">
            <div>
              <span class="price-text">{{ item.reason }}$</span
              ><span>{{ item.price }}</span>
            </div>
            <div>
              <a :href="item.btn1Link">{{ item.btn1 }}</a>
            </div>
          </div>
        </div>
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
    margin-bottom: 40px;
    color: var(--Brand-Color, #00a6ce);
    font-family: "Inter";
    font-size: 50px;
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
      font-family: "Inter";
      font-size: 30px;
      font-style: normal;
      font-weight: 900;
      line-height: 40px; /* 133.333% */
      text-transform: uppercase;
    }
    & > div:nth-child(2) {
      margin-bottom: 72px;
      color: var(--Brand-Color, #00a6ce);
      font-family: "Noto Sans HK";
      font-size: 18px;
      font-style: normal;
      font-weight: 700;
      line-height: 50px; /* 277.778% */
      & > span:nth-child(2) {
        color: var(--Brand-Color, #00a6ce);
        font-family: "Noto Sans HK";
        font-size: 40px;
        font-style: normal;
        font-weight: 700;
      }
    }
    & > div:nth-child(3) {
      margin-bottom: 50px;
      color: #60605f;

      font-family: "Inter";
      font-size: 18px;
      font-style: normal;
      font-weight: 500;
      line-height: 30px; /* 166.667% */
      text-transform: uppercase;
    }
    & > div:nth-child(4) {
      display: flex;
      & > a {
        border-radius: 15px;
        background: var(--Brand-Color, #00a6ce);
        padding: 12px 35px;
        cursor: pointer;

        color: #fff;
        font-family: "Inter";
        font-size: 30px;
        font-style: normal;
        font-weight: 300;
        line-height: normal;
        text-transform: uppercase;
        margin-right: 25px;
      }
      & > a:hover {
        box-shadow: 2px 3px 8px 0px #b3b2b2;
      }
    }
  }
  .swiper-button-next-prev {
    position: absolute;
    top: 31.5%;
    transform: translateY(-25%);
    z-index: 99;
    width: 100%;
    & > div:nth-child(1) {
      display: block;
      position: absolute;
      left: -4%;
      background: url("https://static.cmereye.com/imgs/2024/04/1c62cfbbfb64b37f.png")
        no-repeat;
      background-position: right;
      width: 20px;
      height: 40px;
    }
    & > div:nth-child(2) {
      display: inline-block;
      position: absolute;
      right: 52%;
      background: url("https://static.cmereye.com/imgs/2024/04/15988679aad2e086.png")
        no-repeat;
      background-position: right;
      width: 20px;
      height: 40px;
    }
  }
  .swiper-pagination-btn {
    margin-top: 60px;
    .swiper-btn-item {
      & > div:nth-child(1) {
        margin-bottom: 25px;
      }
      & > div:nth-child(2) {
        color: #60605f;
        font-family: "Inter";
        font-size: 18px;
        font-style: normal;
        font-weight: 500;
        line-height: 27.816px; /* 154.534% */
        text-transform: uppercase;
        margin-bottom: 15px;
      }
      & > div:nth-child(3) {
        & > div:nth-child(1) {
          color: var(--Brand-Color, #00a6ce);
          font-family: "Noto Sans HK";
          font-size: 14px;
          font-style: normal;
          font-weight: 700;
          line-height: 34.77px;
          span:nth-child(2) {
            color: var(--Brand-Color, #00a6ce);
            font-family: "Noto Sans HK";
            font-size: 31.293px;
            font-style: normal;
            font-weight: 700;
            line-height: 34.77px;
          }
        }
        & > div:nth-child(2) {
          a {
            padding: 5px 24px;
            border-radius: 12.686px;
            background: var(--Brand-Color, #00a6ce);
            color: #fff;

            font-family: "Inter";
            cursor: pointer;
            font-size: 19.029px;
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
      margin-left: 135px;
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
      margin-left: 24px;
      & > div:nth-child(1) {
        max-width: 306px;
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
  }
}
@media screen and (max-width: 767px) {
  .now-discounts {
    margin-bottom: 50px;
  }
  .discounts-title {
    margin-bottom: 40px;
    color: var(--Brand-Color, #00a6ce);
    font-family: "Inter";
    font-size: 50px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  .discounts-box {
    position: relative;
  }
  .slide-content {
    & > div:nth-child(1) {
      // display: flex;
      // flex-direction: column;
      margin-bottom: 5px;
      color: #60605f;
      font-family: "Inter";
      font-size: 18px;
      font-style: normal;
      font-weight: 900;
      line-height: 21px; /* 133.333% */
      text-transform: uppercase;
    }
    & > div:nth-child(2) {
      margin-bottom: 12px;
      color: var(--Brand-Color, #00a6ce);
      font-family: "Noto Sans HK";
      font-size: 12px;
      font-style: normal;
      font-weight: 700;
      line-height: 26.5px; /* 277.778% */
      & > span:nth-child(2) {
        color: var(--Brand-Color, #00a6ce);
        font-family: "Noto Sans HK";
        font-size: 22px;
        line-height: 26px;
        font-style: normal;
        font-weight: 700;
      }
    }
    & > div:nth-child(3) {
      margin-bottom: 15px;
      color: #60605f;

      font-family: "Inter";
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: 22px; /* 166.667% */
      text-transform: uppercase;
    }
    & > div:nth-child(4) {
      display: flex;
      & > a {
        border-radius: 8px;
        background: var(--Brand-Color, #00a6ce);
        padding: 5px 15px;
        cursor: pointer;

        color: #fff;
        font-family: "Inter";
        font-size: 16px;
        font-style: normal;
        font-weight: 300;
        line-height: normal;
        text-transform: uppercase;
        margin-right: 25px;
      }
      & > a:hover {
        box-shadow: 2px 3px 8px 0px #b3b2b2;
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
      background: url("https://static.cmereye.com/imgs/2024/04/1c62cfbbfb64b37f.png")
        no-repeat;
      background-position: right;
      width: 20px;
      height: 40px;
    }
    & > div:nth-child(2) {
      display: inline-block;
      position: absolute;
      right: -5%;
      background: url("https://static.cmereye.com/imgs/2024/04/15988679aad2e086.png")
        no-repeat;
      background-position: right;
      width: 20px;
      height: 40px;
    }
  }
  .swiper-pagination-btn {
    margin-top: 40px;
    .swiper-btn-item {
      & > div:nth-child(1) {
        margin-bottom: 10px;
      }
      & > div:nth-child(2) {
        color: #60605f;
        font-family: "Inter";
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: 18px; /* 154.534% */
        text-transform: uppercase;
        margin-bottom: 12px;
      }
      & > div:nth-child(3) {
        & > div:nth-child(1) {
          color: var(--Brand-Color, #00a6ce);
          font-family: "Noto Sans HK";
          font-size: 10px;
          font-style: normal;
          font-weight: 700;
          line-height: 20px;
          span:nth-child(2) {
            color: var(--Brand-Color, #00a6ce);
            font-family: "Noto Sans HK";
            font-size: 20px;
            font-style: normal;
            font-weight: 700;
            line-height: 20px;
          }
        }
        & > div:nth-child(2) {
          a {
            padding: 4px 14px;
            border-radius: 12.686px;
            background: var(--Brand-Color, #00a6ce);
            color: #fff;

            font-family: "Inter";
            cursor: pointer;
            font-size: 14px;
            font-style: normal;
            font-weight: 300;
            line-height: normal;
            text-transform: uppercase;
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
      padding: 0 17px;
    }
  }
  .img-slide {
    margin: auto;
    max-width: 307px;
    & > img {
      width: 100%;
    }
  }
  .swiper-pagination-btn {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    & > div {
      margin-top: 15px;
      max-width: 158px;
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
  }
}
</style>