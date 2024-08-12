<script lang="ts" setup>
const props = defineProps({
  list: {
    type: Array,
    default: () => [],
  },
});
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
// Import Swiper styles
import "swiper/scss";
import "swiper/scss/pagination";
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

import getWindowSize from "@/utils/width";
const isPc = ref(true);
onMounted(() => {
  let { widthState, width } = getWindowSize();
  isPc.value = widthState;
  window.addEventListener("resize", () => {
    let { widthState, width } = getWindowSize();
    isPc.value = widthState;
  });
});
</script>

<template>
  <div class="Reels">
    <div class="reels-title">REELS</div>
    <div class="reels-content">
      <swiper
        :slidesPerView="isPc ? 4 : 1"
        :spaceBetween="isPc ? 12 : 30"
        :modules="modules"
        @swiper="swiperBox"
      >
        <swiper-slide v-for="item in props.list" :key="item.id">
          <a :href="item.videoLink" target="_blank">
            <img :src="item.img" :alt="item.type" />
          </a>
        </swiper-slide>
      </swiper>
    </div>
    <!-- v-if="props.list.length > 4" -->
    <div class="swiper-button-next-prev">
      <div class="button-prev" @click="handlesSliPrev"></div>
      <div class="button-next" @click="handlesSliNext"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@media screen and (min-width: 768px) {
  .Reels {
    position: relative;
  }
  .reels-title {
    color: var(--Brand-Color, #00a6ce);
    font-family: "Inter";
    font-size: 30px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: uppercase;
    margin-bottom: 35px;
  }
  :deep(.swiper-slide) {
    width: calc(100% / 4);
    & > a {
      height: 100%;
      display: block;
      & > img {
        width: 100%;
      }
    }
  }
  :deep(.swiper-button-next) {
    right: 0;
  }
  :deep(.swiper-button-prev) {
    left: 0;
  }
  :deep(.swiper-button-prev:after) {
    background: url(https://static.cmereye.com/imgs/2024/04/f68bf90ff2bad2de.png)
      no-repeat;
    color: transparent;
  }
  :deep(.swiper-button-next:after) {
    color: transparent;
    background: url(https://static.cmereye.com/imgs/2024/04/6ed7199aaddff6df.png)
      no-repeat;
  }
  a {
    img {
      width: 100%;
    }
  }
  .swiper-button-next-prev {
    position: absolute;
    top: 50%;
    transform: translateY(-25%);
    z-index: 99;
    width: 100%;
    & > div:nth-child(1) {
      display: block;
      position: absolute;
      left: -3%;
      background: url("https://static.cmereye.com/imgs/2024/04/1c62cfbbfb64b37f.png")
        no-repeat;
      background-position: right;
      width: 20px;
      height: 40px;
    }
    & > div:nth-child(2) {
      display: inline-block;
      position: absolute;
      right: -3%;
      background: url("https://static.cmereye.com/imgs/2024/04/15988679aad2e086.png")
        no-repeat;
      background-position: right;
      width: 20px;
      height: 40px;
    }
  }
}
@media screen and (max-width: 767px) {
  .Reels {
    margin-top: 35px;
    position: relative;
  }
  .reels-title {
    color: var(--Brand-Color, #00a6ce);
    font-family: "Inter";
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: uppercase;
    margin-bottom: 20px;
  }
  :deep(.swiper-button-next) {
    right: 0;
  }
  :deep(.swiper-button-prev) {
    left: 0;
  }
  :deep(.swiper-button-prev:after) {
    background: url(https://static.cmereye.com/imgs/2024/04/f68bf90ff2bad2de.png)
      no-repeat;
    color: transparent;
  }
  :deep(.swiper-button-next:after) {
    color: transparent;
    background: url(https://static.cmereye.com/imgs/2024/04/6ed7199aaddff6df.png)
      no-repeat;
  }
  a {
    img {
      width: 100%;
    }
  }

  :deep(.swiper) {
    padding: 0 30px;
  }
  .swiper-button-next-prev {
    position: absolute;
    top: 50%;
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
}
</style>