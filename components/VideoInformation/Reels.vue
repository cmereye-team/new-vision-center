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

// import required modules
import { Pagination, Navigation } from "swiper/modules";

const modules = [Pagination, Navigation];

const isPc = ref(false);
// 检测获取屏幕宽度
const getScreenWidth = () => {
  if (window.innerWidth >= 768) {
    isPc.value = true;
  }
};

onMounted(() => {
  if (window.innerWidth >= 768) {
    isPc.value = true;
  }
  spaceBetweenNum.value = isPc.value ? 32 : 30;
  slidesPerViewNum.value = isPc.value ? 4 : 1;
  window.addEventListener("resize", getScreenWidth);
  window.addEventListener("beforeunload", getScreenWidth);
});

const spaceBetweenNum = ref(32);
const slidesPerViewNum = ref(4);
</script>

<template>
  <div class="Reels">
    <div class="reels-title">REELS</div>
    <div class="reels-content">
      <swiper
        :slidesPerView="slidesPerViewNum"
        :spaceBetween="spaceBetweenNum"
        :navigation="true"
        :modules="modules"
      >
        <swiper-slide v-for="item in props.list" :key="item.id">
          <nuxt-link :to="item.videoLink">
            <img :src="item.img" :alt="item.type" />
          </nuxt-link>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@media screen and (min-width: 768px) {
  .reels-title {
    color: var(--Brand-Color, #00a6ce);
    font-family: Inter;
    font-size: 30px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: uppercase;
    margin-bottom: 50px;
  }
  :deep(.swiper) {
    padding: 0 30px;
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
}
@media screen and (max-width: 767px) {
  .Reels {
    margin-top: 35px;
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
}
</style>