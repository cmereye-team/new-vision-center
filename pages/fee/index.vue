<script lang="ts" setup>
useHead(() => ({
  title: "收費詳情｜專業服務｜希瑪視光中心",
  meta: [
    {
      hid: "description",
      name: "description",
      content: "立即預約由註冊視光師主理的眼睛檢查！希瑪眼科視光中心提供兒童及成人綜合眼睛檢查、近視控制、角膜矯形鏡合適性檢查、眼鏡/隱形眼鏡驗配，以及青光眼檢查等多項專業視光服務。我們的收費清晰透明，絕無額外收費。保護你的眼睛健康，了解更多我們的服務收費價目表。",
    },
    {
      hid: "Keywords",
      name: "Keywords",
      content: 
      '色弱檢查 立體視覺檢查 青光眼檢查 角膜矯形鏡 漸進眼鏡 視覺訓練 視野檢查 斜視檢查 色盲檢查 眼壓檢查 OK鏡 ok鏡價錢 角膜矯形鏡 老花鏡 老花眼鏡 老花隱形眼鏡 漸進隱形眼鏡 青光眼檢查費用 驗眼度數 隱形眼鏡驗眼 視力測試度數 隱形眼鏡驗配 視野檢查費用 驗眼配眼鏡 漸進老花鏡 配眼鏡 配隱形眼鏡 驗眼 驗眼費用 驗眼價錢 驗眼服務 眼睛檢查 全面眼睛檢查費用 註冊視光師 視光師 視光師驗眼 驗眼中心 視光師驗眼中心 希瑪視光 視光中心 希瑪視光中心 希瑪眼科視光中心 '
    },
  ],
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
  .fee-box {
    padding: 0 24px;
  }
}
</style>