<script lang="ts" setup>
useHead(() => ({
  title: "HOYA MiYOSMART兒童近視控制眼鏡 - 希瑪眼科視光中心",
}));
import getWindowSize from "@/utils/width";
const isPc = ref(false);

onMounted(() => {
  window.addEventListener("resize", () => {
    let { widthState, width } = getWindowSize();
    isPc.value = widthState;
  });
});
const detail = {
  title: "立即體驗HOYA MiYOSMART 兒童近視控制眼鏡",
  brand: "hoya",
  explain: "立即1分鐘登記！",
  brandTitle: "HOYA MiYOSMART 兒童近視控制眼鏡 $3,680起",
};
</script>

<template>
  <div class="video-information">
    <PublicBanner>
      <!-- 插槽 -->
      <template #title>
        <div class="profile-title"></div>
      </template>
    </PublicBanner>
    <PublicNavbar
      :isInsidePage="true"
      :insidePageTitle="
        isPc ? 'HOYA MiYOSMART兒童近視控制眼鏡' : 'HOYA 兒童近視控制眼鏡'
      "
      :name="'兒童視力服務'"
    />
    <div class="myopia-control-hoya">
      <div class="myopia-control-hoya-head">
        <PublicPageTitle :title="'HOYA MiYOSMART 兒童近視控制眼鏡'" />
        <div>
          HOYA MiYOSMART兒童近視控制鏡片又稱為DIMS近視控制鏡片，由香港理工大學與HOYA共同研發，應用了多區正向光學離焦的技術，有如普通眼鏡般容易使用，能有效減慢近視加深 
        </div>
      </div>
      <div class="hoya-form">
        <PublicMyopiaForm :detail="detail">
          <template #terms>
            <div class="terms-content">
              <p>*條款及細則:*</p>
              <p>
                凡於希瑪眼科視光中心購買HOYA
                MiYOSMART近視控制眼鏡，即送指定精美鏡架乙副。此優惠只適用於購買HOYA
                MiYOSMART近視控制眼鏡。此優惠所贈送之鏡架是指定品牌及型號，如選擇其他鏡架需補回差價。此優惠不可兌換或找續現金。
              </p>
            </div>
          </template>
        </PublicMyopiaForm>
      </div>
      <div>
        <PublicForm />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@media screen and (min-width: 768px) {
  .hoya-form {
    :deep(.detail) {
      & > div:nth-child(1) {
        border-radius: 37px 37px 0px 0px;
        background: var(--Orange, #f90);
        box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25);
      }
    }
  }
  .myopia-control-hoya-head {
    max-width: 1284px;
    margin: 0 auto;
    & > div:nth-child(2) {
      margin-top: 40px;
      margin-bottom: 40px;
      color: #60605f;
      text-align: center;
      font-family: "Noto Sans CJK TC";
      font-size: 28px;
      font-style: normal;
      font-weight: 500;
      line-height: 60px; /* 214.286% */
      padding: 0 140px;
    }
  }
  .profile-title {
    background: url("https://static.cmereye.com/imgs/2024/05/6446d8c5f0f8f72a.png")
      no-repeat;
    background-size: 100% 100%;
    width: 100%;
    min-height: 800px;
    position: relative;
    span {
      position: absolute;
      right: 220px;
      bottom: 350px;
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
  .terms-content {
    color: var(--Grey-Deep, #4d4d4d);
    font-family: "Noto Sans HK";
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 142.857% */
    letter-spacing: 0.7px;
  }
}
@media screen and (max-width: 767px) {
  .profile-title {
    background: url("https://static.cmereye.com/imgs/2024/05/5e82a28589934353.png")
      no-repeat;
    background-size: 100% 100%;
    width: 100%;
    min-height: 390px;
    position: relative;
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
  .terms-content {
    color: var(--Grey-Deep, #4d4d4d);
    font-family: "Noto Sans HK";
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 142.857% */
    letter-spacing: 0.7px;
  }
}
</style>