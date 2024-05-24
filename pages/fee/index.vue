<script lang="ts" setup>
useHead(() => ({
  title: "收費詳情 - 希瑪眼科視光中心",
}));
const bannerImg = {
  pc: "https://static.cmereye.com/imgs/2024/04/278854ec5e50055f.png",
  mobile: "https://static.cmereye.com/imgs/2024/04/55554fa02587d8de.png",
};
</script>

<template>
  <div class="fee">
    <PublicBanner :banner="bannerImg">
      <!-- 插槽 -->
      <template #title>
        <div class="fee-title">
          <span>收費詳情</span>
        </div>
      </template>
    </PublicBanner>
    <PublicNavbar :link="'/fee'" :name="'收費詳情'" />
    <div class="fee-box">
      <Fee />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@media screen and (min-width: 768px) {
  .fee-title {
    // background: url("https://static.cmereye.com/imgs/2024/04/278854ec5e50055f.png")
    //   no-repeat;
    // background-size: 100% 100%;
    // width: 100%;
    // min-height: 800px;
    // position: relative;
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
  .fee-box {
    max-width: 1300px;
    margin: 48px auto 128px auto;
  }
}
@media screen and (max-width: 767px) {
  .fee-title {
    // background: url("https://static.cmereye.com/imgs/2024/04/55554fa02587d8de.png")
    //   no-repeat;
    // background-size: 100% 100%;
    // width: 100%;
    // min-height: 390px;
    // position: relative;
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
  .fee-box {
    padding: 0 24px;
  }
}
</style>