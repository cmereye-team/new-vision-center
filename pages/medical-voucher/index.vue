<script lang="ts" setup>
useHead(() => ({
  title: "長者醫療券計劃 - 希瑪眼科視光中心",
}));
const bannerImg = {
  pc: "https://static.cmereye.com/imgs/2024/04/735b78a3199c7307.png",
  mobile: "https://static.cmereye.com/imgs/2024/04/c05702c8c41964c7.png",
};
</script>

<template>
  <div class="video-information">
    <PublicBanner :banner="bannerImg">
      <!-- 插槽 -->
      <template #title>
        <div class="medical-voucher-title">
          <span>長者醫療券計劃</span>
        </div>
      </template>
    </PublicBanner>
    <PublicNavbar :link="'/medical-voucher'" :name="'長者醫療券計劃'" />
    <MedicalVoucher />
  </div>
</template>

<style lang="scss" scoped>
@media screen and (min-width: 768px) {
  .video-information{
    margin-bottom: 90px;
  }
  .medical-voucher-title {
    // background: url("https://static.cmereye.com/imgs/2024/04/735b78a3199c7307.png")
    //   no-repeat;
    // background-size: 100% 100%;
    // width: 100%;
    // min-height: 800px;
    // position: relative;
    span {
     position: relative;
      right: -100%;
      color: var(--Brand-Color, #00A6CE);
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
  .medical-voucher-title {
    // background: url("https://static.cmereye.com/imgs/2024/04/c05702c8c41964c7.png")
    //   no-repeat;
    // background-size: 100% 100%;
    // width: 100%;
    // min-height: 390px;
    // position: relative;
    span {
      position: absolute;
      bottom: 30px;
      right: 20px;
      color: var(--Brand-Color, #00A6CE);
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