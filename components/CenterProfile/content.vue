<script lang="ts" setup>
const imgList = [
  "https://statichk.cmermedical.com/vision/imgs/666c1d99c27658bf.png",
  "https://statichk.cmermedical.com/vision/imgs/5a960c3598776b5f.png",
  "https://statichk.cmermedical.com/vision/imgs/dc0b7696b2d87ed0.png",
  "https://statichk.cmermedical.com/vision/imgs/a8ff8092442374c1.png",
];
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/scss/navigation";
import { Pagination, Navigation } from "swiper/modules";
const modules = [Pagination, Navigation];

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
    // img: "https://static.cmereye.com/imgs/2024/11/7abccec71003cd35.png",
    img: 'https://statichk.cmermedical.com/vision/imgs/0fea7df0b176.png',
    content:'门店',
  },
  {
    id: 2,
    img: "https://statichk.cmermedical.com/vision/imgs/a56d768353c520f8.webp",
    content:'仪器',
  },
  {
    id: 3,
    img: "https://statichk.cmermedical.com/vision/imgs/23614bae14a8d0c6.webp",
    content:'展示镜架',
  },
  {
    id: 4,
    img: "https://statichk.cmermedical.com/vision/imgs/4ef10edef0edbaba.webp",
    content:'仪器',
  },
]);
</script>

<template>
  <div class="content">
    <div class="content-box">
      <div class="content-box-top">
        <div>
          <p>
            <span>希瑪視光團隊</span>
            <span
              >由多位經驗豐富的香港註冊視光師、眼科專科醫生及護理人員組成，並設有符合國際水平的先進眼科醫療技術及儀器，為客人提供一站式安全、可靠及針對性的眼科檢查服務及改善視力方案，包括︰角膜矯形鏡、DIMS近視控制鏡片、兒童及成人眼睛檢查、兒童視覺訓練、青光眼檢查、視網膜檢查等。</span
            >
          </p>
          <p>
            憑藉希瑪眼科中心擁有的強大醫療團隊優勢，在視光檢查後，如發現客人有任何眼疾先兆或問題，我們會立即轉介予眼科專科醫生跟進，務求令客人得到最合適的治療
          </p>
        </div>
        <div>
          <swiper :modules="modules" @swiper="swiperBox">
            <swiper-slide v-for="item in discountsList" :key="item.id">
              <div class="img-swiper">
                <img :src="item.img" :alt="item.content || '中心簡介'" />
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
      <!-- <div class="content-box-img-list">
        <img
          v-for="(item, index) in imgList"
          :src="item"
          :key="index"
          alt="中心簡介"
        />
      </div> -->
    </div>
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
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@media screen and (min-width: 768px) {
  .content {
    background: #f2fbfd;
    position: relative;
  }
  .content-box {
    max-width: 960px;
    margin: 0 auto;
    padding: 45px 0 55px;
  }
  .content-box-top {
    display: flex;
    justify-content: space-between;
    position: relative;
    & > div:nth-child(1) {
      flex: 5;
      max-width: 600px;
      & > p {
        & > span:nth-child(1) {
          color: var(--Brand-Color, #00a6ce);
        }
        color: #60605f;
        font-family: "Noto Sans HK";
        font-size: 16.5px;
        font-style: normal;
        font-weight: 400;
        line-height: 30px;
        text-transform: uppercase;
      }
      & > p:nth-child(2) {
        margin-top: 45px;
      }
    }
    & > div:nth-child(2) {
      flex: 5;
      display: flex;
      max-width: 443px;
      & > img {
        width: 100%;
      }
    }
  }
  .swiper-pagination-btn {
    max-width: 960px;
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
    max-width: 960px;
    margin: 0 auto;
    padding: 0;
    position: absolute;
    top: 28%;
    transform: translateY(-50%);
    right: 0;
    left: 0;
    z-index: 99;
    width: 100%;
    & > div:nth-child(1) {
      display: block;
      position: absolute;
      right: 430px;
      background: url("https://statichk.cmermedical.com/vision/imgs/1c62cfbbfb64b37f.png")
        no-repeat;
      // background-position: right;
      width: 20px;
      height: 40px;
    }
    & > div:nth-child(2) {
      display: inline-block;
      position: absolute;
      right: 0;
      background: url("https://statichk.cmermedical.com/vision/imgs/15988679aad2e086.png")
        no-repeat;
      // background-position: right;
      width: 20px;
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
}
@media screen and (max-width: 767px) {
  .content {
    margin-top: 30px;
    background: #f2fbfd;
    position: relative;
  }
  .content-box-top {
    & > div:nth-child(1) {
      padding: 30px 27px 0 29px;
      & > p {
        & > span:nth-child(1) {
          color: var(--Brand-Color, #00a6ce);

          font-family: "Noto Sans HK";
          font-size: 14px;
          font-style: normal;
          font-weight: 700;
          line-height: 26px; /* 185.714% */
          text-transform: uppercase;
        }
        color: #60605f;
        font-family: "Noto Sans HK";
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 26px;
        text-transform: uppercase;
      }
      & > p:nth-child(1) {
        margin-bottom: 30px;
      }
    }
    & > div:nth-child(2) {
      padding: 20px 0;
    }
  }
  .img-swiper {
    max-width: 100%;
    width: 85%;
    margin: 0 auto;
    & > img {
      width: 100%;
      height: auto;
    }
  }
  .content-box-img-list {
    padding: 0 28px 40px 28px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
    img {
      width: 100%;
    }
  }
  .swiper-button-next-prev {
    max-width: 100%;
    width: 100%;
    box-sizing: border-box;
    position: absolute;
    top: 50%;
    z-index: 99;
    display: flex;
    gap: 0 90%;
    box-sizing: border-box;
    padding: 0 5px;
    & > div {
      width: 20px;
      height: 40px;
      display: inline-block;
    }
    & > div:nth-child(1) {
      background: url("https://statichk.cmermedical.com/vision/imgs/1c62cfbbfb64b37f.png")
        no-repeat;
    }
    & > div:nth-child(2) {
      background: url("https://statichk.cmermedical.com/vision/imgs/15988679aad2e086.png")
        no-repeat;
    }
  }
  .swiper-pagination-btn {
    margin: 0 auto;
    display: grid;
    grid-template-columns: auto auto;
    justify-content: center;
    gap: 21px;
    & > div {
      margin-top: 15px;
      max-width: 155px;
      & > div:nth-child(1) {
        & > img {
          width: 100%;
        }
      }
    }
  }
  :deep(.swiper-button-next::after) {
    background: url("https://statichk.cmermedical.com/vision/imgs/6ed7199aaddff6df.png")
      no-repeat;
    background-size: 100% 100%;
    width: 11px;
    height: 22px;
    color: transparent;
  }
  :deep(.swiper-button-next) {
    right: 0px;
  }
  :deep(.swiper-button-prev::after) {
    background: url("https://statichk.cmermedical.com/vision/imgs/f68bf90ff2bad2de.png")
      no-repeat;
    background-size: 100% 100%;
    width: 11px;
    height: 22px;
    color: transparent;
  }
}
</style>