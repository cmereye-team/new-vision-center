<script lang="ts" setup>
useHead(() => ({
  title: "ZEISS兒童近視控制鏡片 - 希瑪眼科視光中心",
}));
const detail = {
  title: "立即體驗ZEISS MyoVision Pro 兒童近視控制鏡片",
  brand: "zeiss",
  explain: "立即1分鐘登記！",
  brandTitle: "ZEISS MyoVision Pro 兒童近視控制鏡片(送鏡架) $1,398起",
};
</script>

<template>
  <div class="myopia-control-zeiss">
    <PublicBanner>
      <!-- 插槽 -->
      <template #title>
        <div class="profile-title"></div>
      </template>
    </PublicBanner>
    <PublicNavbar
      :isInsidePage="true"
      :insidePageTitle="'ZEISS兒童近視控制鏡片'"
      :name="'兒童視力服務'"
    />
    <div class="zeiss-container">
      <div class="myopia-control-head">
        <PublicPageTitle :title="'ZEISS兒童近視控制鏡片'" />
        <div>
          <p>
            ZEISS
            鏡片是專為控制兒童近視度數而設計。鏡片採用先進的光學科技和設計，
          </p>
          <p>
            以確保配戴者視野清晰，同時減慢眼球增長，能夠有效減緩兒童近視的發展。
          </p>
        </div>
        <div>
          <div>
            鏡片具備耐用性和舒適度，適合6至12歲兒童長時間配戴。有別於一般眼鏡，一般鏡片中央位置能矯正視力，但是鏡片周邊將影像投射到視網膜的後面，這樣有機會拉長眼球，令近視加深。但是，獨特設計的ZEISS
            鏡片即可以修正這個離焦的情況，從而減慢近視加深。
          </div>
          <div>
            <img
              src="https://static.cmereye.com/imgs/2024/05/fe745a9f6300fb6f.png"
              alt="周遠視離焦"
            />
          </div>
        </div>
      </div>
      <div class="myopia-control-form">
        <PublicMyopiaForm :detail="detail">
          <template #terms>
            <div class="terms-content">
              <p>*條款及細則:*</p>
              <p>
                凡於希瑪眼科視光中心購買ZEISS MyoVision
                Pro近視控制鏡片，即送指定精美鏡架乙副。此優惠只適用於購買ZEISS
                MyoVision
                Pro近視控制鏡片。此優惠所贈送之鏡架是指定品牌及型號，如選擇其他鏡架需補回差價。此優惠不可兌換或找續現金。
              </p>
            </div>
          </template>
        </PublicMyopiaForm>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@media screen and (min-width: 768px) {
  .myopia-control-head {
    max-width: 1284px;
    margin: 0 auto;
    & > div:nth-child(2) {
      margin-top: 40px;
      color: #60605f;
      text-align: center;
      font-family: "Noto Sans CJK TC";
      font-size: 28px;
      font-style: normal;
      font-weight: 500;
      line-height: 60px; /* 214.286% */
    }
    & > div:nth-child(3) {
      margin-top: 20px;
      border-radius: 37px;
      background: var(--Skin, #eafbff);
      box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25);
      display: flex;
      align-items: center;
      gap: 0 28px;
      box-sizing: border-box;
      padding: 42px 52px 37px 46px;
      & > div:nth-child(1) {
        color: #60605f;
        font-family: "Noto Sans CJK TC";
        font-size: 28px;
        font-style: normal;
        font-weight: 500;
        line-height: 60px; /* 214.286% */
      }
    }
  }
  .myopia-control-form{
    margin: 60px auto 47px;
  }
  .profile-title {
    background: url("https://static.cmereye.com/imgs/2024/05/2411d80b7ca6dfb0.png")
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
  .myopia-control-head {
    padding: 0 25px;
    & > div:nth-child(2) {
      color: var(--Grey-Deep, #4d4d4d);
      text-align: justify;
      font-family: "Noto Sans HK";
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: 26px; /* 185.714% */
      margin: 18px 0;
      & > p {
        display: inline;
      }
    }
    & > div:nth-child(3) {
      border-radius: 30px;
      background: var(--Skin, #eafbff);
      box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25);
      padding: auto;
      box-sizing: border-box;
      padding: 30px 25px;
      display: flex;
      flex-direction: column-reverse;
      & > div:nth-child(2) {
        width: 285px;
        margin: 0 auto 20px;
        & > img {
          width: 100%;
        }
      }
      & > div:nth-child(1) {
        color: #60605f;
        text-align: justify;
        font-family: "Noto Sans HK";
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: 26px; /* 185.714% */
      }
    }
  }
  .myopia-control-form{
    margin: 42px auto 37px;
  }
  .profile-title {
    background: url("https://static.cmereye.com/imgs/2024/05/ac3b7c31e12a7393.png")
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