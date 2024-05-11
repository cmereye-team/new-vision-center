<script lang="ts" setup>
useHead(() => ({
  title: "首页",
}));

</script>

<template>
  <PublicBanner>
    <!-- 插槽  测试push自动打包和压缩-->
    <template #title>
      <div class="profile-title"></div>
    </template>
  </PublicBanner>

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
  .profile-title {
    background: url("https://static.cmereye.com/imgs/2024/04/5ae163616b5be08e.png")
      no-repeat;
    background-size: 100% 100%;
    width: 100%;
    min-height: 800px;
    position: relative;
    span {
      position: absolute;
      right: 220px;
      bottom: 350px;
      color: var(--Brand-Color, #00a6ce);
      text-align: center;
      font-family: "Inter";
      font-size: 60px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      letter-spacing: 12px;
    }
  }
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
  .profile-title {
    background: url("https://static.cmereye.com/imgs/2024/04/7f4b5bcf029a0f4c.png")
      no-repeat;
    background-size: 100% 100%;
    width: 100%;
    min-height: 390px;
    position: relative;
    span {
      position: absolute;
      bottom: 30px;
      right: 20px;
      color: var(--Brand-Color, #00a6ce);
      text-align: center;
      font-family: "Inter";
      font-size: 28px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      letter-spacing: 5.6px;
    }
  }
  .home {
    padding: 30px 24px;
  }
}
</style>