<script lang="ts" setup>
useHead(() => ({
  title: "長者醫療券計劃｜專業服務｜希瑪視光中心",
  meta: [
    {
      hid: "description",
      name: "description",
      content: "希瑪眼科視光中心專為65歲或以上的長者提供全面的眼睛檢查服務。我們的註冊視光師團隊根據個人需求，提供包括視力檢查、眼壓篩查、眼協調檢查等專業視光服務。長者如需配眼鏡，可使用政府的長者醫療券計劃支付相關費用，每個合資格長者每2年可使用$2,000的醫療券支付視光服務。如有需要，我們亦會轉介至眼科專科醫生跟進。立即聯絡我們預約視光服務或了解更多關於醫療券計劃的詳情。",
    },
    {
      hid: "Keywords",
      name: "Keywords",
      content: 
      '醫療券 長者醫療券 醫療券金額 政府醫療券 醫療券眼鏡上限 長者醫療券計劃 65歲醫療券 醫療券使用 老人醫療券 醫療券計劃 醫療券累積上限 長者醫療券金額 配眼鏡 驗眼 驗眼費用 驗眼價錢 驗眼服務 眼睛檢查 檢查眼睛 全面眼睛檢查費用 全面眼睛檢查 醫療券年齡 醫療券用途 醫療券服務提供者 醫療券使用範圍  註冊視光師 視光師 視光師驗眼 驗眼中心 視光師驗眼中心 希瑪視光 視光中心 希瑪視光中心 希瑪眼科視光中心 '
    },
  ],
}));
const bannerImg = {
  pc: "https://statichk.cmermedical.com/vision/imgs/26cc20faacd95e95.png",
  mobile: "https://statichk.cmermedical.com/vision/imgs/37b55212c8d95e85.png",
  alt:''
};
</script>

<template>
  <div class="video-information">
    <PublicBanner :banner="bannerImg">
      <!-- 插槽 -->
      <template #title>
        <div class="medical-voucher-title">
        </div>
      </template>
    </PublicBanner>
    <PublicNavbar :link="'/medical-voucher'" :name="'長者醫療券計劃'" />
    <MedicalVoucher />
  </div>
</template>

<style lang="scss" scoped>
@media screen and (min-width: 768px) {
  .video-information {
    margin-bottom: 90px;
  }
  .medical-voucher-title {
    // background: url("https://statichk.cmermedical.com/vision/imgs/735b78a3199c7307.png")
    //   no-repeat;
    // background-size: 100% 100%;
    // width: 100%;
    // min-height: 800px;
    // position: relative;
    span {
      position: relative;
      right: -100%;
      color: var(--Brand-Color, #00a6ce);
      text-align: center;
      font-family: "Noto Sans HK";
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
    // background: url("https://statichk.cmermedical.com/vision/imgs/c05702c8c41964c7.png")
    //   no-repeat;
    // background-size: 100% 100%;
    // width: 100%;
    min-height: 390px;
    width: 100%;
    position: absolute;
    top: 0;
    margin-top: 87px;
    // position: relative;
    span {
      position: absolute;
      bottom: 30px;
      right: 20px;
      color: var(--Brand-Color, #00a6ce);
      text-align: center;
      font-family: "Noto Sans HK";
      font-size: 28px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      letter-spacing: 5.6px;
    }
  }
}
</style>