<script lang="ts" setup>
const missionList = [
  {
    id: 1,
    text: ["提高近視控制的", "普及度"],
    svg: "https://statichk.cmermedical.com/vision/imgs/47894bbdf8a48b92.png",
  },
  {
    id: 2,
    text: ["提供一站式眼科", "視光醫療服務"],
    svg: "https://statichk.cmermedical.com/vision/imgs/b2fb0604926d2640.png",
  },
  {
    id: 3,
    text: ["注重細節，更了解", "您的需要"],
    svg: "https://statichk.cmermedical.com/vision/imgs/b8acb5a551803486.png",
  },
  {
    id: 4,
    text: ["精益求精的醫療技", "術與服務"],
    svg: "https://statichk.cmermedical.com/vision/imgs/b5943e6d49e89ab7.png",
  },
];
</script>

<template>
  <div class="mission">
    <div class="mission-title">我們的使命</div>
    <div class="mission-list">
      <div v-for="item in missionList" :key="item.id">
        <div><img :src="item.svg" :alt="item.text[0]" /></div>
        <div>
          <span v-for="(text, index) in item.text" :key="index">{{
            text
          }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@media screen and (min-width: 768px) {
  .mission {
    margin-bottom: 128px;
    padding: 0 2px;
  }
  .mission-title {
    color: var(--Brand-Color, #00a6ce);
    font-family: "Noto Sans HK";
    font-size: 37.5px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  .mission-list {
    margin-top: 22px;
    display: flex;
    justify-content: space-between;
    & > div {
      width: 222px;
      height: 270px;
      border-radius: 7.5px;
      background: #f2fbfd;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;

      & > div:nth-child(1) {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 95.156px;
      }
      & > div:nth-child(2) {
        display: flex;
        flex-direction: column;
        span {
          color: var(--Brand-Color, #00a6ce);
          text-align: center;
          font-family: "Noto Sans HK";
          font-size: 18px;
          font-style: normal;
          font-weight: 600;
          line-height: 22.5px;
          text-transform: uppercase;
        }
      }
    }
    & > div:nth-child(1) {
      & > div:nth-child(1) {
        width: 103.999px;
        height: 61.044px;
        & > img {
          width: 100%;
        }
      }
    }
    & > div:nth-child(2) {
      & > div:nth-child(1) {
        width: 94.082px;
        height: 92.696px;
        & > img {
          width: 100%;
        }
      }
    }
    & > div:nth-child(3) {
      & > div:nth-child(1) {
        width: 103.36px;
        height: 95.156px;
        & > img {
          width: 100%;
        }
      }
    }
    & > div:nth-child(4) {
      & > div:nth-child(1) {
        width: 71.827px;
        height: 83.672px;
        & > img {
          width: 100%;
        }
      }
    }
  }
}
@media screen and (max-width: 767px) {
  .mission-title {
    color: #00a6ce;
    font-family: "Noto Sans HK";
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  .mission-list {
    padding: 27px 0 47px 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-gap: 20px;
    & > div {
      border-radius: 5.302px;
      background: #f2fbfd;
      min-height: 190px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
      & > div:nth-child(1) {
        width: 75px;
        height: 70px;
        display: flex;
        justify-content: center;
        align-items: center;
        & > img {
          width: 100%;
        }
      }
      & > div:nth-child(2) {
        color: var(--Brand-Color, #00a6ce);
        text-align: center;
        font-family: "Noto Sans HK";
        font-size: 14px;
        font-style: normal;
        font-weight: 600;
        line-height: 1.4; /* 113.621% */
        text-transform: uppercase;
        display: flex;
        flex-direction: column;
        justify-content: center;
        min-height: 48px;
      }
    }
  }
}
</style>