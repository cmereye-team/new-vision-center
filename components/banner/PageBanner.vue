<!--
 * @Author: 谭洁莹
 * @Date: 2026-10-29 15:22:04
 * @LastEditTime: 2026-10-29 16:49:02
 * @FilePath: /components/banner/PageBanner.vue
 * @Description: 普通页面Banner
-->
<script lang="ts" setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination } from "swiper/modules";
import type { SlideItem } from "@/types/api";
const props = defineProps<{
  data: SlideItem[];
}>();
</script>
<template>
  <swiper
    :modules="[Autoplay, Pagination]"
    :loop="true"
    :autoplay="{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true }"
    :pagination="{ clickable: true }"
    class="banner-swiper"
  >
    <swiper-slide v-for="(item, index) in data" :key="index">
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