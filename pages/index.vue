<script lang="ts" setup>
useHead(() => ({
  title: "首页",
}));
</script>

<template>
  <div class="home">
    <nuxt-link to="/center-profile">公司简介</nuxt-link>
    <nuxt-link to="/latest-news">最新資訊</nuxt-link>
    <nuxt-link to="/fee">收費詳情</nuxt-link>
    <nuxt-link to="/medical-voucher">長者醫療券計劃</nuxt-link>
    <nuxt-link to="/video-information">影片資訊</nuxt-link>
    <nuxt-link to="/contact-us">聯絡我們</nuxt-link>
    <nuxt-link to="/now-discounts">最新優惠</nuxt-link>
  </div>
</template>

<style lang="scss" scoped>
a {
  text-decoration: none;
}
@media screen and (min-width: 768px) {
  .home {
    max-width: 1300px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;

    font-family: "Noto Sans CJK TC";
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 2.4px;

    a {
      color: #00a6ce;
      margin: 20px 0;
    }
  }
}
@media screen and (max-width: 767px) {
  .home {
    padding: 30px 24px;
  }
}
</style>