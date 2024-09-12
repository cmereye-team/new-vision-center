<script lang="ts" setup>
useHead(() => ({
  title: "XXXX - 希瑪眼科視光中心",
}));
const bannerImg = {
  pc: "https://statichk.cmermedical.com/vision/imgs/5ae163616b5be08e.png",
  mobile: "https://statichk.cmermedical.com/vision/imgs/a946bc28a9b89d42.png",
};

const lists = [
  {
    name: "驗配Rodenstock漸進鏡即免費升級變色鏡片",
    img: "https://statichk.cmermedical.com/vision/imgs/2a5b0c7c66fbe4db.png",
    link: "https://api.whatsapp.com/send?phone=85269180511&text=%E4%BD%A0%E5%A5%BD,%E6%88%91%E6%83%B3%E6%9F%A5%E8%A9%A2",
    price: "4,560",
    routerLink: "/now-discounts",
  },
  {
    name: "驗配Rodenstock漸進鏡即免費升級變色鏡片",
    img: "https://statichk.cmermedical.com/vision/imgs/2a5b0c7c66fbe4db.png",
    link: "https://api.whatsapp.com/send?phone=85269180511&text=%E4%BD%A0%E5%A5%BD,%E6%88%91%E6%83%B3%E6%9F%A5%E8%A9%A2",
    price: "4,560",
    routerLink: "/now-discounts",
  },
  {
    name: "驗配Rodenstock漸進鏡即免費升級變色鏡片",
    img: "https://statichk.cmermedical.com/vision/imgs/2a5b0c7c66fbe4db.png",
    link: "https://api.whatsapp.com/send?phone=85269180511&text=%E4%BD%A0%E5%A5%BD,%E6%88%91%E6%83%B3%E6%9F%A5%E8%A9%A2",
    price: "4,560",
    routerLink: "/now-discounts",
  },
  {
    name: "驗配Rodenstock漸進鏡即免費升級變色鏡片",
    img: "https://statichk.cmermedical.com/vision/imgs/2a5b0c7c66fbe4db.png",
    link: "https://api.whatsapp.com/send?phone=85269180511&text=%E4%BD%A0%E5%A5%BD,%E6%88%91%E6%83%B3%E6%9F%A5%E8%A9%A2",
    price: "4,560",
    routerLink: "/now-discounts",
  },
  {
    name: "驗配Rodenstock漸進鏡即免費升級變色鏡片",
    img: "https://statichk.cmermedical.com/vision/imgs/2a5b0c7c66fbe4db.png",
    link: "https://api.whatsapp.com/send?phone=85269180511&text=%E4%BD%A0%E5%A5%BD,%E6%88%91%E6%83%B3%E6%9F%A5%E8%A9%A2",
    price: "4,560",
    routerLink: "/now-discounts",
  },
  {
    name: "驗配Rodenstock漸進鏡即免費升級變色鏡片",
    img: "https://statichk.cmermedical.com/vision/imgs/2a5b0c7c66fbe4db.png",
    link: "https://api.whatsapp.com/send?phone=85269180511&text=%E4%BD%A0%E5%A5%BD,%E6%88%91%E6%83%B3%E6%9F%A5%E8%A9%A2",
    price: "4,560",
    routerLink: "/now-discounts",
  },
];

import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
const modules = [Autoplay, Pagination];
</script>

<template>
  <div class="video-information">
    <CenterProfileHomePageSwiper ref="discounts" key="discounts" /> 
    <PublicBanner :banner="bannerImg" />
    <PublicNavbar
      :name="'有三级菜单的二级'"
      :isInsidePage="true"
      :insidePageTitle="'当前页面title'"
    />
    <div class="xxxx-box">
      <swiper
        :pagination="true"
        :loop="true"
        :autoplay="{
          delay: 3000,
          disableOnInteraction: false,
        }"
        :modules="modules"
      >
        <swiper-slide
          style="display: flex; flex-direction: column; align-items: center"
        >
          <p>12</p>
          <p>12</p>
          <p>12</p>
          <p>12</p>
          <p>12</p>
        </swiper-slide>
        <swiper-slide
          style="display: flex; flex-direction: column; align-items: center"
        >
          <p>13</p>
          <p>13</p>
          <p>13</p>
          <p>13</p>
          <p>13</p>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@media screen and (min-width: 768px) {
  .profile-title {
    span {
      position: relative;
      right: -180%;
      color: var(--Brand-Color, #fff);
      text-align: center;
      font-family: "Inter";
      font-size: 60px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      letter-spacing: 12px;
    }
  }
}
@media screen and (max-width: 767px) {
  .profile-title {
    min-height: 390px;
    width: 100%;
    position: absolute;
    top: 0;
    margin-top: 87px;
    span {
      position: absolute;
      bottom: 30px;
      right: 20px;
      color: var(--Brand-Color, #fff);
      text-align: center;
      font-family: "Inter";
      font-size: 28px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      letter-spacing: 5.6px;
    }
  }
}
</style>