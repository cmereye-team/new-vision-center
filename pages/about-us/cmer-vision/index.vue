<script lang="ts" setup>
useHead(() => ({
  title: "公司簡介｜關於我們｜希瑪視光中心",
  meta: [
    {
      hid: "description",
      name: "description",
      content: "希瑪眼科視光中心是希瑪眼科醫療集團旗下的視光中心，提供全面眼科檢查和個人化的眼睛護理服務。我們擁有經驗豐富的註冊視光師和先進的眼科技術，為客人提供專業的眼睛檢查，包括驗眼、眼底檢查和青光眼檢查等。我們致力於為兒童提供近視控制方案，並根據個人需求提供度身訂造的視光服務。立即預約視光檢查，讓我們照顧您的眼睛健康。",
    },
    {
      hid: "Keywords",
      name: "Keywords",
      content:"全面眼科檢查 眼科檢查 驗眼收費 眼科視光師 註冊視光師 視光師 視光師驗眼 眼睛檢查 視野檢查 放大瞳孔檢查 長者眼科檢查 青光眼檢查 眼底檢查費用 兒童眼科檢查 眼科檢查推薦 屈光檢查 眼科檢查費用 眼檢查 兒童視力檢查 全面眼睛檢查費用 綜合眼科視光檢查 視光檢查 驗眼費用 視光師驗眼中心收費 眼科驗眼中心 視光師驗眼中心 希瑪視光 視光中心 希瑪視光中心 希瑪眼科視光中心"
    },
  ],
}));
const bannerImg = {
  pc: "https://statichk.cmermedical.com/vision/imgs/bd3e2538003747d1.jpg",
  mobile: "https://statichk.cmermedical.com/vision/imgs/22f2cd11935da5db.jpg",
};
</script>

<template>
  <div class="profile">
    <PublicBanner :banner="bannerImg">
      <!-- 插槽 -->
      <template #title>
        <div class="profile-title">
          <span>中心簡介</span>
        </div>
      </template>
    </PublicBanner>
    <PublicNavbar :link="'/about-us/cmer-vision'" :name="'中心簡介'" />
    <CenterProfileBriefIntroduction />
    <CenterProfileContent />
    <div class="profile-content-max-width">
      <CenterProfileMission />
    </div>
    <PublicForm />
  </div>
</template>

<style lang="scss" scoped>
@media screen and (min-width: 768px) {
  .profile-title {
    // background: url("https://statichk.cmermedical.com/vision/imgs/cb749c5077456981.png")
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
      font-family: "Noto Sans HK";
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
    // background: url("https://statichk.cmermedical.com/vision/imgs/89671f7269cf9352.png")
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
      bottom: 30%;
      right: 20px;
      color: #fff;
      text-align: center;
      font-family: "Noto Sans HK";
      font-size: 28px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      letter-spacing: 5.6px;
    }
  }
  .profile-content-max-width {
    padding: 48px 28px 0 22px;
  }
}
</style>