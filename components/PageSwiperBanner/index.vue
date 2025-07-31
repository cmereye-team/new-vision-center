
<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const props = defineProps({
  banner: {
    type: [Array, Object],
    required: true,
  },
});

const isMobile = ref(false);

onMounted(() => {
  const checkMobile = () => {
    isMobile.value = window.innerWidth <= 768;
  };
  checkMobile();
  window.addEventListener("resize", checkMobile);
});
</script>

<template>
  <swiper
    :modules="[Autoplay, Pagination]"
    :loop="true"
    :autoplay="{ delay: 3000, disableOnInteraction: false }"
    :pagination="{ clickable: true }"
    class="banner-swiper"
  >
    <swiper-slide v-for="(item, index) in banner" :key="index">
      <img
        :src="isMobile ? item.mobile : item.pc"
        :alt="`banner-${index}`"
        class="w-full object-cover"
      />
    </swiper-slide>
  </swiper>
</template>
  
  <style scoped lang="scss">
.banner-swiper {
  width: 100%;
  height: auto;
}
@media screen and (min-width: 768px) and (max-width: 1620px) {
  img {
    width: 100%;
    height: auto;
  }
  .banner-swiper {
    margin-top: 7.083vw;
  }
}

@media screen and (min-width: 1621px) {
  img {
    width: 100%;
    height: auto;
  }
  .banner-swiper {
    margin-top: 130px;
  }
}

@media screen and (max-width: 767px) {
  .banner-swiper {
    margin-top: 68px;
  }
  img {
    width: 100vw; /* 根据需求调整 */
    height: 100vw;
    object-fit: cover; /* 保持图片比例，填充容器 */
  }
}
</style>
  