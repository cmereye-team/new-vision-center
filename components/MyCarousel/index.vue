<template>
  <div class="swiper-container">
    <swiper
      ref="mySwiper"
      :modules="[Navigation]"
      :allow-touch-move="false"
      :navigation="{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }"
    >
      <swiper-slide v-for="(slide, index) in slides" :key="index">
        <img :src="slide.src" :alt="slide.alt" />
      </swiper-slide>
    </swiper>
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper';

const props = defineProps({
  slides: {
    type: Array,
    required: true,
  },
});

const mySwiper = ref(null);

onMounted(() => {
  if (mySwiper.value) {
    mySwiper.value.swiper.update();
  }
});
</script>

<style scoped>
.swiper-container {
  width: 100%;
  height: 100%;
}
.swiper-button-prev,
.swiper-button-next {
  background-color: #fff;
  color: #000;
  padding: 10px;
  cursor: pointer;
}
</style>