<script lang="ts" setup>
const imgList = [
  "https://static.cmereye.com/imgs/2024/04/666c1d99c27658bf.png",
  "https://static.cmereye.com/imgs/2024/04/5a960c3598776b5f.png",
  "https://static.cmereye.com/imgs/2024/04/dc0b7696b2d87ed0.png",
  "https://static.cmereye.com/imgs/2024/04/a8ff8092442374c1.png",
];
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/scss/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
const modules = [Pagination, Navigation];
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
            憑藉希瑪林順潮眼科中心擁有的強大醫療團隊優勢，在視光檢查後，如發現客人有任何眼疾先兆或問題，我們會立即轉介予眼科專科醫生跟進，務求令客人得到最合適的治療
          </p>
        </div>
        <div>
          <swiper :navigation="true" :modules="modules">
            <swiper-slide>
              <div class="img-swiper">
                <img
                  src="https://static.cmereye.com/imgs/2024/04/d40ca431271990e8.png"
                  alt=""
                />
              </div>
            </swiper-slide>
            <swiper-slide
              ><div class="img-swiper">
                <img
                  src="https://static.cmereye.com/imgs/2024/04/d40ca431271990e8.png"
                  alt=""
                /></div></swiper-slide
            ><swiper-slide
              ><div class="img-swiper">
                <img
                  src="https://static.cmereye.com/imgs/2024/04/d40ca431271990e8.png"
                  alt=""
                /></div
            ></swiper-slide>
          </swiper>
        </div>
      </div>
      <div class="content-box-img-list">
        <img
          v-for="(item, index) in imgList"
          :src="item"
          :key="index"
          alt="中心簡介"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@media screen and (min-width: 768px) {
  .content {
    background: #f2fbfd;
  }
  .content-box {
    max-width: 960px;
    margin: 0 auto;
    padding: 45px 0 55px;
  }
  .content-box-top {
    display: flex;
    justify-content: space-between;

    & > div:nth-child(1) {
      flex: 5;
      max-width: 600px;
      & > p {
        & > span:nth-child(1) {
          color: var(--Brand-Color, #00a6ce);
        }
        color: #60605f;
        font-family: "Inter";
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
  .img-swiper {
    width: 88%;
    margin: 0 auto;
    & > img {
      width: 100%;
    }
  }
  :deep(.swiper-button-next::after) {
    background: url("https://static.cmereye.com/imgs/2024/04/6ed7199aaddff6df.png")
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
    background: url("https://static.cmereye.com/imgs/2024/04/f68bf90ff2bad2de.png")
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
  }
  .content-box-top {
    & > div:nth-child(1) {
      padding: 30px 27px 0 29px;
      & > p {
        & > span:nth-child(1) {
          color: var(--Brand-Color, #00a6ce);

          font-family: "Inter";
          font-size: 14px;
          font-style: normal;
          font-weight: 700;
          line-height: 26px; /* 185.714% */
          text-transform: uppercase;
        }
        color: #60605f;
        font-family: "Inter";
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
  :deep(.swiper-button-next::after) {
    background: url("https://static.cmereye.com/imgs/2024/04/6ed7199aaddff6df.png")
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
    background: url("https://static.cmereye.com/imgs/2024/04/f68bf90ff2bad2de.png")
      no-repeat;
    background-size: 100% 100%;
    width: 11px;
    height: 22px;
    color: transparent;
  }
}
</style>