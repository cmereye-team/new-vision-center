<script lang="ts" setup>
// compiler macro
const props = defineProps({
  title: {
    type: String,
    default: "哪一款鏡片最適合你的小朋友?",
  },
  link: {
    type: String,
    default: "",
  },
  isUrl: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <a class="btn-bg" v-if="props.isUrl" :href="props.link">
    <div>
      <span>{{ props.title }}</span>
      <span
        ><img
          src="https://static.cmereye.com/imgs/2024/05/93740deca665eceb.png"
          :alt="props.title"
      /></span>
    </div>
  </a>
  <a class="btn-bg" v-else>
    <div>
      <span>{{ props.title }}</span>
      <span
        ><img
          src="https://static.cmereye.com/imgs/2024/05/93740deca665eceb.png"
          :alt="props.title"
      /></span>
    </div>
  </a>
</template>

<style lang="scss" scoped>
@media screen and (min-width: 768px) {
  .btn-bg {
    & > div {
      display: flex;
      align-items: center;
      border-radius: 20px;
      background: var(
        --Style,
        linear-gradient(90deg, #00a6ce 25.95%, #3346ed 100%)
      );
      width: fit-content;
      padding: 5px 8px 5px 20px;
      border: 5px solid #ffffff;
      & > span:nth-child(1) {
        color: var(--White, #fff);
        font-family: "Noto Sans HK";
        font-size: 18.75px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        letter-spacing: 1.875px;
        margin-right: 14px;
      }
      & > span:nth-child(2) {
        width: 39px;
        & > img {
          width: 100%;
        }
        display: flex;
        justify-content: center;
        align-items: center;
      }
      position: relative;
      z-index: 5;
    }
    background: var(
      --Style,
      linear-gradient(90deg, #00a6ce 25.95%, #3346ed 100%)
    );
    display: flex;
    border-radius: 25px;
    padding: 4px;
    width: fit-content;
    margin: 0 auto;
  }
}
@media screen and (max-width: 767px) {
  .btn-bg {
    & > div {
      display: flex;
      align-items: center;
      border-radius: 12px;
      background: var(
        --Style,
        linear-gradient(90deg, #00a6ce 25.95%, #3346ed 100%)
      );
      width: fit-content;
      padding: 3px 8px 3px 20px;
      border: 3px solid #ffffff;
      & > span:nth-child(1) {
        color: var(--White, #fff);
        font-family: "Noto Sans HK";
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        letter-spacing: 1.4px;
        margin-right: 10px;
      }
      & > span:nth-child(2) {
        width: 23px;
        & > img {
          width: 100%;
        }
        display: flex;
        justify-content: center;
        align-items: center;
      }
      position: relative;
      z-index: 5;
    }
    background: var(
      --Style,
      linear-gradient(90deg, #00a6ce 25.95%, #3346ed 100%)
    );
    display: flex;
    border-radius: 15px;
    padding: 4px;
    width: fit-content;
    margin: 0 auto;
  }
}
</style>