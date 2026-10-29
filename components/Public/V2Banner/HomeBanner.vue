<script lang="ts" setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import type { Swiper as SwiperInstance } from "swiper";
import type { SlideItem } from "@/types/api";

// 引入必要样式（如果项目已全局引入可省略）
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

defineProps<{
  list: SlideItem[];
}>();

const swiperRef = ref<SwiperInstance | null>(null);

const onSwiper = (swiper: SwiperInstance) => {
  swiperRef.value = swiper;
};

/** 外部可调用：跳转到指定 slide */
const slideTo = (index: number) => {
  swiperRef.value?.slideToLoop(index);
};

defineExpose({
  slideTo,
});
</script>

<template>
  <div class="home-banner relative w-full">
    <!-- 轮播主体 -->
    <div class="banner-size relative mx-auto w-full overflow-hidden">
      <Swiper
        :modules="[Autoplay, Pagination, Navigation]"
        :slides-per-view="'auto'"
        :space-between="30"
        :loop="true"
        :centered-slides="true"
        :autoplay="{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }"
        :pagination="{
          clickable: true,
          el: '.banner-pagination',
        }"
        :navigation="{
          nextEl: '.banner-next',
          prevEl: '.banner-prev',
        }"
        class="h-full w-full"
        @swiper="onSwiper"
      >
        <SwiperSlide v-for="banner in list" :key="banner.id" class="!w-[85%] md:!w-[70%] lg:!w-[60%]">
          <NuxtLink :to="banner.link" class="group block h-full w-full overflow-hidden rounded-lg">
            <picture>
              <source media="(min-width: 768px)" :srcset="banner.pic" />
              <img
                :src="banner.pic_mobile"
                :alt="banner.title || banner.subtitle"
                :title="banner.subtitle"
                class="h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                loading="lazy"
                decoding="async"
              />
            </picture>
          </NuxtLink>
        </SwiperSlide>
      </Swiper>
    </div>

    <!-- 自定义分页器（桌面可见） -->
    <div class="banner-pagination absolute bottom-4 left-1/2 z-50 hidden -translate-x-1/2 gap-3 md:flex" />

    <!-- 可选：左右箭头（默认隐藏，需要时取消注释并调整样式） -->
    <!--
    <button class="banner-prev absolute left-4 top-1/2 z-40 -translate-y-1/2 ...">
      ←
    </button>
    <button class="banner-next absolute right-4 top-1/2 z-40 -translate-y-1/2 ...">
      →
    </button>
    -->
  </div>
</template>

<style lang="scss" scoped>
.home-banner {
  /* 移动端顶部间距 */
  @media (max-width: 767px) {
    margin-top: 65px;
  }
}

.banner-size {
  /* 中等屏幕 */
  @media (min-width: 768px) and (max-width: 1620px) {
    max-height: 800px;
    margin-top: 7.083vw;
  }

  /* 大屏 */
  @media (min-width: 1621px) {
    max-height: 800px;
    margin-top: 130px;
    width: 100vw;
  }
}

/* Swiper 深度覆盖 */
:deep(.swiper-pagination-bullet) {
  width: 16px;
  height: 16px;
  background: #f5f5f5a4;
  opacity: 1;
  transition: background 0.25s ease;

  &.swiper-pagination-bullet-active {
    background: #59ba68;
  }
}

/* 隐藏默认导航箭头（如果使用自定义 pagination） */
:deep(.swiper-button-prev),
:deep(.swiper-button-next) {
  display: none;
}
</style>
