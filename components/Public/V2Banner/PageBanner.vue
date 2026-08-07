<!--
 * @Author: 谭洁莹
 * @Date: 2026-07-28 11:17:15
 * @LastEditTime: 2026-08-06 17:39:23
 * @FilePath: /components/Public/V2Banner/PageBanner.vue
 * @Description: 页面轮播图
-->
<script lang="ts" setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination } from "swiper/modules";
import type { SlideItem } from "@/types/api";
const props = defineProps<{
  banner: SlideItem[];
}>();
</script>
<template>
  <swiper
    :modules="[Autoplay, Pagination]"
    :loop="true"
    :autoplay="{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true }"
    :pagination="{ clickable: true }"
    class="banner-swiper max-w-[1320px] mx-auto md:mt-[7.083vw] min-[1621px]:mt-[132px]"
  >
    <swiper-slide v-for="(item, index) in banner" :key="index">
      <nuxt-link :to="item?.link || '#'">
        <picture>
          <source media="(min-width: 768px)" :srcset="item.pic" />
          <img :src="item.pic_mobile" :alt="item.title" :title="item.subtitle" class="w-full" />
        </picture>
      </nuxt-link>
    </swiper-slide>
  </swiper>
</template>
<style lang="scss" scoped></style>
