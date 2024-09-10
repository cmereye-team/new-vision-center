<script lang="ts" setup>
useHead(() => ({
  title: "尊享優惠｜希瑪視光中心",
  meta: [
    {
      hid: "description",
      name: "description",
      content:
        "希瑪眼科視光中心是您的全方位視光服務中心，我們的註冊視光師提供專業的驗眼服務，並提供各種眼鏡選擇，包括hoya漸進鏡片、全視線鏡片、老花鏡等。我們的眼鏡價錢公道，並經常有配眼鏡優惠活動。我們還提供老花隱形眼鏡和兒童近視控制鏡片等產品。無論您是需要驗眼服務，還是尋找高品質的眼鏡，希瑪視光中心都能滿足您的需求。立即聯絡我們了解更多信息。",
    },
    {
      hid: "Keywords",
      name: "Keywords",
      content:
        "眼鏡優惠 配眼鏡優惠 hoya漸進鏡片價錢 漸進鏡片價錢 全視線鏡片價錢 全視線漸進鏡價錢 hoya鏡片價錢 zeiss鏡片價錢 漸進眼鏡價錢 眼鏡價錢 配眼鏡價錢 老花隱形眼鏡價錢 漸進老花眼鏡價錢 hoya兒童近視控制鏡片價錢 OK鏡 ok鏡價錢 老花鏡 老花眼鏡 老花隱形眼鏡 兒童近視控制鏡片價格 近視控制鏡片 驗眼費用 驗眼價錢 註冊視光師 視光師 視光師驗眼中心 希瑪視光 視光中心 希瑪視光中心 希瑪眼科視光中心 ",
    },
  ],
}));
const bannerImg = {
  pc: "https://statichk.cmermedical.com/vision/imgs/5ae163616b5be08e.png",
  mobile: "https://statichk.cmermedical.com/vision/imgs/a946bc28a9b89d42.png",
};
</script>

<template>
  <div class="video-information">
    <PublicBanner :banner="bannerImg">
      <!-- 插槽 -->
      <template #title>
        <div class="profile-title">
          <span>最新優惠</span>
        </div>
      </template>
    </PublicBanner>
    <PublicNavbar :link="'/center-profile'" :name="'最新優惠'" />
    <div class="video-information-box">
      <NowDiscounts />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@media screen and (min-width: 768px) {
  .profile-title {
    // background: url("https://statichk.cmermedical.com/vision/imgs/5ae163616b5be08e.png")
    //   no-repeat;
    // background-size: 100% 100%;
    // width: 100%;
    // min-height: 800px;
    // position: relative;
    span {
      color: var(--Brand-Color, #fff);
      text-align: center;
      font-family: "Inter";
      font-size: 60px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      letter-spacing: 12px;
      position: relative;
      right: -180%;
    }
  }
  .video-information-box {
    max-width: 960px;
    margin: 48px auto 90px auto;
  }
}
@media screen and (max-width: 767px) {
  .profile-title {
    // background: url("https://statichk.cmermedical.com/vision/imgs/a946bc28a9b89d42.png")
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
  .video-information-box {
    padding: 0 24px;
  }
}
</style>