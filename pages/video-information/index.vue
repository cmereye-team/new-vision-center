<script lang="ts" setup>
useHead(() => ({
  title: "影片資訊 - 希瑪眼科視光中心",
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
      <PublicForm />
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
    max-width: 1300px;
    margin: 48px auto 128px auto;
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
  .video-information-box{
    padding: 0 24px;
  }
}
</style>