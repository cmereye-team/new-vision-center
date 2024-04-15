<script lang="ts" setup>
const missionList = [
  {
    id: 1,
    text: ["提高近視控制的", "普及度"],
    svg: "https://static.cmereye.com/imgs/2024/04/47894bbdf8a48b92.png",
  },
  {
    id: 2,
    text: ["提供一站式眼科", "視光醫療服務"],
    svg: "https://static.cmereye.com/imgs/2024/04/b2fb0604926d2640.png",
  },
  {
    id: 3,
    text: ["注重細節，更了解", "您的需要"],
    svg: "https://static.cmereye.com/imgs/2024/04/b8acb5a551803486.png",
  },
  {
    id: 4,
    text: ["精益求精的醫療技", "術與服務"],
    svg: "https://static.cmereye.com/imgs/2024/04/b5943e6d49e89ab7.png",
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
    font-family: "Inter";
    font-size: 50px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  .mission-list {
    margin-top: 22px;
    display: flex;
    justify-content: space-between;
    & > div {
      width: 296px;
      height: 360px;
      border-radius: 10px;
      background: #f2fbfd;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;

      & > div:nth-child(1) {
        width: 140px;
        height: 130px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      & > div:nth-child(2) {
        display: flex;
        flex-direction: column;
        span {
          color: var(--Brand-Color, #00a6ce);
          text-align: center;
          font-family: "Inter";
          font-size: 24px;
          font-style: normal;
          font-weight: 600;
          line-height: 30px; /* 125% */
          text-transform: uppercase;
        }
      }
    }
  }
}
@media screen and (max-width: 767px) {
  .mission-title {
    color: #00a6ce;
    font-family: "Inter";
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
        font-family: "Inter";
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