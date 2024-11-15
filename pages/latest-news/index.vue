<script lang="ts" setup>
useHead(() => ({
  title: "最新資訊｜關於我們｜希瑪視光中心",
  meta: [
    {
      hid: "description",
      name: "description",
      content:
        "希瑪眼科視光中心提供最新資訊和眼科新聞，專注於兒童近視相關的文章。註冊視光師撰寫了控制近視的方法和護眼資訊，介紹角膜矯形鏡（OK鏡）、近視控制鏡片、近視控制隱形眼鏡及阿托品眼藥水等近視控制方案的原理和配戴方法。此外，還提供實用的護眼知識，幫助預防近視並保護眼睛健康。了解更多兒童近視控制和護眼方法的最新資訊，請訪問希瑪眼科視光中心。",
    },
    {
      hid: "Keywords",
      name: "Keywords",
      content:
        "最新資訊 兒童近視 近視控制 小朋友近視 兒童近視控制 護眼 護眼食物 護眼睛 護眼方法 控制近視鏡片 控制近視眼藥水 近視 atropine眼藥水 矯視隱形眼鏡 ok鏡 近視成因 眼睛健康 眼睛保健 新聞資訊 預防近視 註冊視光師 視光師 視光師驗眼 眼科驗眼中心 視光師驗眼中心 希瑪視光 視光中心 希瑪視光中心 希瑪眼科視光中心",
    },
  ],
}));
const bannerImg = {
  pc: "https://statichk.cmermedical.com/vision/imgs/5ae163616b5be08e.png",
  mobile: "https://statichk.cmermedical.com/vision/imgs/a946bc28a9b89d42.png",
};
import { onMounted, onUnmounted } from "vue";
import { useRouter } from "nuxt/app";

const router = useRouter();

const scrollToTop = () => {
  window.scrollTo(0, 0);
};

onMounted(() => {
  router.afterEach(scrollToTop);
});

onUnmounted(() => {
  router.afterEach(() => {}); // 清除监听器
});
</script>

<template>
  <div class="video-information">
    <PublicBanner :banner="bannerImg">
      <!-- 插槽 -->
      <template #title>
        <div class="profile-title">
          <span>最新資訊</span>
        </div>
      </template>
    </PublicBanner>
    <PublicNavbar :link="'/center-profile'" :name="'最新資訊'" />
    <div class="video-information-box">
      <LatestNews />
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
      position: relative;
      right: -180%;
      color: var(--Brand-Color, #fff);
      text-align: center;
      font-family: "Noto Sans HK";
      font-size: 60px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      letter-spacing: 12px;
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
    top: -73px;
    margin-top: 87px;
    span {
      position: absolute;
      bottom: 30px;
      right: 20px;
      color: var(--Brand-Color, #fff);
      text-align: center;
      font-family: "Noto Sans HK";
      font-size: 28px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      letter-spacing: 5.6px;
    }
  }
  .video-information-box {
    padding: 0 6.15vw;
  }
}
</style>