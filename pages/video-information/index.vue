<script lang="ts" setup>
useHead(() => ({
  title: "影片資訊｜希瑪視光中心",
  meta: [
    {
      hid: "description",
      name: "description",
      content:
        "希瑪視光為兒童提供眼睛檢查和針對性的兒童近視控制方案，包括角膜矯形術/OK鏡和兒童近視控制鏡片。我們定期分享真實用戶的體驗，讓您更了解各種兒童近視控制方案的成效。我們亦提供護眼小教室，提供寶貴的護眼知識和解決常見眼睛問題的方案，同時介紹各種近視控制方案的原理和好處。",
    },
    {
      hid: "Keywords",
      name: "Keywords",
      content:
        "OK鏡成效 用戶體驗 兒童近視 兒童近視控制鏡片 控制近視 減慢近視鏡片 角膜矯形術 OK鏡 Orthokeratology Orthok 近視控制 兒童近視控制 兒童近視控制鏡片比較 護眼 護眼方法 保護眼睛 保護眼睛的方法 眼睛問題 視光檢查 眼睛檢查 視力檢查 視力健康 眼睛健康 控制近視鏡片 兒童近視眼鏡 小朋友近視 兒童矯視隱形眼鏡 註冊視光師 視光師 視光師驗眼 視光師驗眼中心 希瑪視光 視光中心 希瑪視光中心 希瑪眼科視光中心 ",
    },
  ],
}));
const bannerImg = {
  pc: "https://static.cmereye.com/imgs/2024/04/735b78a3199c7307.png",
  mobile: "https://static.cmereye.com/imgs/2024/04/3deb4ec1da398c47.png",
};
</script>

<template>
  <div class="video-information">
    <PublicBanner :banner="bannerImg">
      <!-- 插槽 -->
      <template #title>
        <div class="profile-title">
          <span>影片資訊</span>
        </div>
      </template>
    </PublicBanner>
    <PublicNavbar :link="'/center-profile'" :name="'影片資訊'" />
    <div class="video-information-box">
      <VideoInformation />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@media screen and (min-width: 768px) {
  .profile-title {
    // background: url("https://static.cmereye.com/imgs/2024/04/735b78a3199c7307.png")
    //   no-repeat;
    // background-size: 100% 100%;
    // width: 100%;
    // min-height: 800px;
    // position: relative;
    span {
      position: relative;
      right: -180%;
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
  .video-information-box {
    max-width: 960px;
    margin: 48px auto 100px auto;
  }
}
@media screen and (max-width: 767px) {
  .profile-title {
    // background: url("https://static.cmereye.com/imgs/2024/04/3deb4ec1da398c47.png")
    //   no-repeat;
    // background-size: 100% 100%;
    // width: 100%;
    // min-height: 390px;
    // position: relative;
    min-height: 390px;
    width: 100%;
    position: absolute;
    top: 0;
    margin-top: 87px;
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
  .video-information-box {
    padding: 0 24px;
  }
}
</style>