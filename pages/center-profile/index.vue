<script lang="ts" setup>
useHead(() => ({
  title: "中心簡介 - 希瑪眼科視光中心",
}));
const bannerImg = {
  pc: 'https://static.cmereye.com/imgs/2024/04/cb749c5077456981.png',
  mobile: 'https://static.cmereye.com/imgs/2024/04/89671f7269cf9352.png'
}
</script>

<template>
  <div class="profile">
    <PublicBanner  :banner="bannerImg">
      <!-- 插槽 -->
      <template #title>
        <div class="profile-title ">
          <span>中心簡介</span>
        </div>
      </template>
    </PublicBanner>
    <PublicNavbar :link="'/center-profile'" :name="'中心簡介'" />
    <CenterProfileBriefIntroduction />
    <CenterProfileContent />
    <div class="profile-content-max-width">
      <CenterProfileMission />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@media screen and (min-width: 768px) {
  .profile-title {
    // background: url("https://static.cmereye.com/imgs/2024/04/cb749c5077456981.png")
    //   no-repeat;
    // background-size: 100% 100%;
    // width: 100%;
    // min-height: 800px;
    // position: relative;
    span {
     position: relative;
      right: -180%;
      color: #fff;
      text-align: center;
      font-family: "Inter";
      font-size: 60px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      letter-spacing: 12px;
    }
  }
  .profile-content-max-width {
    max-width: 960px;
    margin: 55px auto 95px;
  }
}
@media screen and (max-width: 767px) {
  .profile-title {
    // background: url("https://static.cmereye.com/imgs/2024/04/89671f7269cf9352.png")
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
      color: #fff;
      text-align: center;
      font-family: "Inter";
      font-size: 28px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      letter-spacing: 5.6px;
    }
  }
  .profile-content-max-width{
    padding: 48px 28px 0 22px;
  }
}
</style>