<script lang="ts" setup>
</script>

<template>
  <div class="brief-introduction">
    <div class="brief-introduction-box">
      <div class="brief-introduction-title">中心簡介</div>
      <div class="brief-introduction-content">
        <div>
          <img
            src="https://static.cmereye.com/imgs/2024/04/be9c59fdb598845f.png"
            alt=""
          />
        </div>
        <div>
          <p>
            希瑪眼科視光中心CMER
            VISION，是希瑪林順潮眼科中心旗下的視光中心，隸屬於上市公司香港希瑪眼科集團
            （股份代號：03309）。
          </p>
          <p>
            希瑪視光致力為市民提供全面眼科視光檢查及眼睛護理。中心秉持「度身訂造」的原則，根據不同年齡層的眼睛狀況及個人實際所需，制定專屬的眼睛檢查及護眼建議。同時，我們十分關注學童近視率偏高的問題，希瑪視光會為兒童提供詳細眼睛檢查服務及針對性的兒童近視控制方案，希望能助兒童把握控制近視的黃金治療期。
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@media screen and (min-width: 768px) {
  .brief-introduction {
    max-width: 1300px;
    margin: 0 auto 88px;
  }
  .brief-introduction-title {
    color: var(--Brand-Color, #00a6ce);
    font-family: "Inter";
    font-size: 50px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-bottom: 46px;
  }
  .brief-introduction-content {
    display: flex;
    justify-content: space-between;
    & > div {
      flex: 5;
      max-width: 600px;
      & > p {
        color: #60605f;
        font-family: "Inter";
        font-size: 22px;
        font-style: normal;
        font-weight: 300;
        line-height: 40px; /* 181.818% */
        text-transform: uppercase;
      }
      & > p:nth-child(1) {
        margin-bottom: 42px;
      }
    }
  }
}
@media screen and (max-width: 767px) {
  .brief-introduction {
    padding: 0 27px 0 29px;
  }
  .brief-introduction-title {
    margin-top: 20px;
    color: #00a6ce;

    font-family: "Inter";
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  .brief-introduction-content {
    & > div:nth-child(1) {
      max-width: 100%;
      margin: 20px auto;
      & > img {
        width: 100%;
      }
    }
    & > div:nth-child(2) {
      p {
        color: #60605f;

        font-family: "Inter";
        font-size: 14px;
        font-style: normal;
        font-weight: 300;
        line-height: 26px; /* 185.714% */
        text-transform: uppercase;
      }
      & > p:nth-child(1) {
        margin-bottom: 30px;
      }
    }
  }
}
</style>