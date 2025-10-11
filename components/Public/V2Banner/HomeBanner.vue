<script lang="ts" setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
const modules = [Autoplay, Pagination];

interface banner {
  id: number;
  img: string;
  img_mobile: string;
  link: string;
}
const bannerImg = ref([] as banner[]);
import getWindowSize from "@/utils/width";
const isPc = ref(true);
// 获取轮播图
const getImgSwiper = async () => {
  const res = await fetch(
    "https://content.cmervision.com/api.php/cms/slide/gid/1"
  );
  const data = await res.json();
  if (data.code === 1) {
    data.data.forEach((item: any) => {
      bannerImg.value.push({
        id: item.id,
        img: `https://content.cmervision.com/${item.pic}`,
        img_mobile: `https://content.cmervision.com/${item.mobilepic}`,
        link: item.link,
      });
    });
  }
};

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

  getImgSwiper();
});
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
</script>

<template>
  <div class="home_banner">
    <div class="banner_size" v-if="winWSize > 768">
      <swiper
        :slidesPerView="'auto'"
        :spaceBetween="30"
        :loop="true"
        :centeredSlides="true"
        :autoplay="{
          delay: 2500,
          disableOnInteraction: false,
        }"
        :pagination="{
          clickable: true,
        }"
        :navigation="true"
       :modules="[Autoplay, Pagination, Navigation]"
        @swiper="swiperBox"
      >
       <!--  -->
        <swiper-slide v-for="banner in bannerImg" :key="banner.id">
          <nuxt-link :to="banner.link">
            <img :src="banner.img" />
          </nuxt-link>
        </swiper-slide>
      </swiper>
    </div>
    <div class="btn_banner" v-if="winWSize > 768">
      <!-- <div
        class="btn_banner_item"
        v-for="(item, index) in bannerImg"
        :key="item.id"
        :class="index == deBoxSwiperRef.activeIndex ? 'active' : ''"
        @click="handleshowdeBox(index)"
      >
        <span></span>
      </div> -->
    </div>
    <div class="banner_size" v-if="winWSize <= 768">
      <swiper :pagination="true" :modules="[Autoplay, Pagination]">
        <swiper-slide v-for="banner in bannerImg" :key="banner.id">
          <nuxt-link :to="banner.link">
            <img :src="banner.img_mobile" />
          </nuxt-link>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<style lang="scss" scoped>
:deep(.swiper-button-prev),
:deep(.swiper-button-next) {
  display: none;
}
@media screen and (min-width: 768px) and (max-width: 1620px) {
  .home_banner {
    position: relative;
    .banner_size {
      // max-width: 1735px;
      max-height: 800px;
      width: 100%;
      height: 100%;
      margin: 7.083vw auto 0;
      a {
        width: 100%;
        display: flex;
        justify-content: center;
        // height: 723px;
        object-fit: cover;
        img {
          height: 100%;
          width: 100%;
          object-fit: contain;
        }
      }
    }
    .btn_banner {
      position: absolute;
      bottom: 10%;
      left: 50%;
      transform: translateX(-50%);
      z-index: 50;
    }
    & > div:nth-child(3) {
      position: fixed;
      top: 7vw;
      right: 0;
      z-index: 99;
      .banner-template-btn {
        position: absolute;
        top: 0;
        display: flex;
        z-index: 9;

        & > a {
          display: flex;
          align-items: center;
          margin-right: 10px;
          text-decoration: none;
          & > div:nth-child(1) {
            display: flex;
            align-items: center;
            margin-right: 5px;
          }
          & > div:nth-child(2) {
            color: #fff;
            text-align: center;
            font-family: "Noto Sans HK";
            font-size: 12px;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
            width: max-content;
          }
        }
        // & > a:hover {
        //   box-shadow: 0 0 7.5px #00000040;
        //   transform: scale(1.1);
        //   transition: all 0.3s ease-in-out;
        // }
        & > a {
          overflow: hidden;
          box-shadow: 0 0 0 0 transparent;
          -webkit-transition: all 0.2s ease-in;
          -moz-transition: all 0.2s ease-in;
          transition: all 0.2s ease-in;
        }
        & > a:hover {
          background: #59ba68;
          // box-shadow: 0 0 30px 5px #59ba68;
          -webkit-transition: all 0.2s ease-out;
          -moz-transition: all 0.2s ease-out;
          transition: all 0.2s ease-out;
        }
        & > a:hover::before {
          -webkit-animation: sh02 0.5s 0s linear;
          -moz-animation: sh02 0.5s 0s linear;
          animation: sh02 0.5s 0s linear;
        }
        & > a::before {
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
        }
        & > a:nth-child(1) {
          padding: 13px 11px 13px 16px;
          border-radius: 0px 0px 10px 10px;
          background: var(--Basic-2, #59ba68);
        }
        & > a:nth-child(2) {
          padding: 15px 13px 15px 19px;
          border-radius: 0px 0px 10px 10px;
          background: #00a6ce;
        }
        & > a:nth-child(2):hover {
          background: #00a6ce;
          // box-shadow: 0 0 30px 5px #00a6ce;
          -webkit-transition: all 0.2s ease-out;
          -moz-transition: all 0.2s ease-out;
          transition: all 0.2s ease-out;
        }
      }
    }
  }
  .banner-template-btn {
    position: absolute;
    top: 5px;
    right: 50px;
    display: flex;
    z-index: 9;

    & > a {
      display: flex;
      align-items: center;
      margin-right: 10px;
      text-decoration: none;
      & > div:nth-child(1) {
        display: flex;
        align-items: center;
        margin-right: 5px;
      }
      & > div:nth-child(2) {
        color: #fff;
        text-align: center;
        font-family: "Noto Sans HK";
        font-size: 12px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
      }
    }
    & > a:hover {
      box-shadow: 0 0 7.5px #00000040;
      transform: scale(1.1);
      transition: all 0.3s ease-in-out;
    }
    & > a:hover::before {
      -webkit-animation: sh02 0.5s 0s linear;
      -moz-animation: sh02 0.5s 0s linear;
      animation: sh02 0.5s 0s linear;
    }
    & > a:nth-child(1) {
      padding: 13px 11px 13px 16px;
      border-radius: 0px 0px 10px 10px;
      background: var(--Basic-2, #59ba68);
    }
    & > a:nth-child(2) {
      padding: 15px 13px 15px 19px;
      border-radius: 0px 0px 10px 10px;
      background: #00a6ce;
    }
  }
}
@media screen and (min-width: 1621px) {
  .home_banner {
    position: relative;
    .banner_size {
      // max-width: 1735px;
      max-height: 800px;
      width: 100vw;
      margin: 130px auto 0;
      object-fit: cover;
      object-position: center;
      .swiper-slide{
        width: 60vw;
      }

      a {
        width: 100%;
        // height: 723px;
        object-fit: cover;
        display: flex;
        justify-content: center;
        img {
          height: 100%;
          width: 100%;
          object-fit: contain;
        }
      }
    }
    .btn_banner {
      position: absolute;
      bottom: 20px;
      left: 50%;
      transform: translateX(-50%);
      z-index: 50;
      display: flex;
      gap: 20px;
      .btn_banner_item {
        span {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          display: inline-block;
          background: #f5f5f5a4;
          cursor: pointer;
        }
      }
    }
    & > div:nth-child(3) {
      position: fixed;
      top: 130px;
      right: 0;
      z-index: 99;
      .banner-template-btn {
        position: absolute;
        top: 0;
        display: flex;
        z-index: 9;

        & > a {
          display: flex;
          align-items: center;
          margin-right: 10px;
          text-decoration: none;
          & > div:nth-child(1) {
            display: flex;
            align-items: center;
            margin-right: 5px;
          }
          & > div:nth-child(2) {
            color: #fff;
            text-align: center;
            font-family: "Noto Sans HK";
            font-size: 12px;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
            width: max-content;
          }
        }
        // & > a:hover {
        //   box-shadow: 0 0 7.5px #00000040;
        //   transform: scale(1.1);
        //   transition: all 0.3s ease-in-out;
        // }
        & > a {
          overflow: hidden;
          box-shadow: 0 0 0 0 transparent;
          -webkit-transition: all 0.2s ease-in;
          -moz-transition: all 0.2s ease-in;
          transition: all 0.2s ease-in;
        }
        & > a:hover {
          background: #59ba68;
          // box-shadow: 0 0 30px 5px #59ba68;
          -webkit-transition: all 0.2s ease-out;
          -moz-transition: all 0.2s ease-out;
          transition: all 0.2s ease-out;
        }
        & > a:hover::before {
          -webkit-animation: sh02 0.5s 0s linear;
          -moz-animation: sh02 0.5s 0s linear;
          animation: sh02 0.5s 0s linear;
        }
        & > a::before {
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
        }
        & > a:nth-child(1) {
          padding: 13px 11px 13px 16px;
          border-radius: 0px 0px 10px 10px;
          background: var(--Basic-2, #59ba68);
        }
        & > a:nth-child(2) {
          padding: 15px 13px 15px 19px;
          border-radius: 0px 0px 10px 10px;
          background: #00a6ce;
        }
        & > a:nth-child(2):hover {
          background: #00a6ce;
          // box-shadow: 0 0 30px 5px #00a6ce;
          -webkit-transition: all 0.2s ease-out;
          -moz-transition: all 0.2s ease-out;
          transition: all 0.2s ease-out;
        }
      }
    }
  }
  .banner-template-btn {
    position: absolute;
    top: 5px;
    right: 50px;
    display: flex;
    z-index: 9;

    & > a {
      display: flex;
      align-items: center;
      margin-right: 10px;
      text-decoration: none;
      & > div:nth-child(1) {
        display: flex;
        align-items: center;
        margin-right: 5px;
      }
      & > div:nth-child(2) {
        color: #fff;
        text-align: center;
        font-family: "Noto Sans HK";
        font-size: 12px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
      }
    }
    & > a:hover {
      box-shadow: 0 0 7.5px #00000040;
      transform: scale(1.1);
      transition: all 0.3s ease-in-out;
    }
    & > a:hover::before {
      -webkit-animation: sh02 0.5s 0s linear;
      -moz-animation: sh02 0.5s 0s linear;
      animation: sh02 0.5s 0s linear;
    }
    & > a:nth-child(1) {
      padding: 13px 11px 13px 16px;
      border-radius: 0px 0px 10px 10px;
      background: var(--Basic-2, #59ba68);
    }
    & > a:nth-child(2) {
      padding: 15px 13px 15px 19px;
      border-radius: 0px 0px 10px 10px;
      background: #00a6ce;
    }
  }
}
@media screen and (max-width: 767px) {
  .home_banner {
    margin-top: 65px;
    & > div:nth-child(1) {
      max-width: 100%;
      width: 100vw;
      a {
        width: 100%;
        display: flex;
        justify-content: center;
        object-fit: cover;
        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      }
    }
  }
  .banner-template-btn {
    display: none;
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