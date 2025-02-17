<script lang="ts" setup>
useHead(() => ({
  title: "聯絡我們｜關於我們｜希瑪視光中心",
  meta: [
    {
      hid: "description",
      name: "description",
      content:
        "希瑪眼科視光中心設有多個分店地點，包括旺角、西環、北角、銅鑼灣和將軍澳，交通便利。我們提供一站式安全可靠的視光服務，包括眼科檢查、兒童近視控制方案、角膜矯形術和隱形眼鏡驗配等。我們的註冊視光師為兒童、成人和長者提供專業的視力解決方案。如需預約視光服務、眼鏡驗配或有任何查詢，歡迎通過WhatsApp或電話聯絡我們，預約檢查服務。",
    },
    {
      hid: "Keywords",
      name: "Keywords",
      content:
        "希瑪視光 希瑪視光中心 希瑪眼科視光中心 cmer vision 視光中心 視光師 眼睛檢查 視光檢查 中環視光中心 眼科視光師 註冊視光師 視光師驗眼 眼科驗眼中心 檢查眼睛 綜合眼科視光檢查 視光師驗眼中心收費 全面眼睛檢查 全面眼科視光檢查 希瑪眼科視光中心旺角 希瑪眼科視光中心中環 視光師驗眼中心旺角店 旺角視力中心 視光師驗眼中心 兒童視光中心",
    },
  ],
}));
const bannerImg = {
  pc: "https://statichk.cmermedical.com/vision/imgs/5b747211e19c.avif",
  mobile: "https://statichk.cmermedical.com/vision/imgs/5c9e5e240047.avif",
};
</script>

<template>
  <div class="contact-us">
    <PublicV2Banner :banner="bannerImg">
      <!-- 插槽 -->
      <template #title>
        <div class="profile-title">
          <span>聯絡我們</span>
        </div>
      </template>
    </PublicV2Banner>
    <PublicNavbar :link="'/about-us/cmer-vision'" :name="'聯絡我們'" />
    <div class="contact-us-content">
      <V2ContactUsMapList />
    </div>
    <PublicFormV2Index />
  </div>
</template>

<style lang="scss" scoped>
@media screen and (min-width: 768px) {
  .profile-title {
    span {
      position: relative;
      left: -180%;
      color: #00A6CE;
      text-align: center;
      font-family: "Noto Sans HK";
      font-size: 60px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      letter-spacing: 12px;
    }
  }
  .contact-us-content {
    max-width: 1050px;
    margin: 0 auto;
  }
}
@media screen and (max-width: 767px) {
  .contact-us-content {
    // padding: 0 24px;
  }
  .profile-title {
    min-height: 100vw;
    width: 100%;
    position: absolute;
    top: 0;
    margin-top: 22.65vw;
    span {
      position: absolute;
      bottom: 7.692vw;
      right: 5.128vw;
      color: #fff;
      text-align: center;
      font-family: "Noto Sans HK";
      font-size: 7.17vw;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      letter-spacing: 1.435vw;
    }
  }
}
</style>