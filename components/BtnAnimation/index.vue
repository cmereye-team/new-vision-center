<script lang="ts" setup>
const props = defineProps({
  btnElement: {
    type: Object,
    default: () => {
      return {
        isExternalLink: false,
        link: "",
      };
    },
  },
});
</script>

<template>
  <div class="btn">
    <a
      class="slot"
      v-if="props.btnElement.isExternalLink"
      :href="props.btnElement.link"
      target="_blank"
    >
      <div>
        <div>{{ props.btnElement.title }}</div>
        <div v-html="props.btnElement.svgIcon"></div>
      </div>
    </a>
    <nuxt-link v-else class="slot" :to="props.btnElement.link">
      <div>
        <div>{{ props.btnElement.title }}</div>
        <div v-html="props.btnElement.svgIcon"></div>
      </div>
    </nuxt-link>
  </div>
</template>

<style lang="scss" scoped>
@media screen and (min-width: 768px) {
  .slot {
    & > div {
      display: flex;
      justify-content: center;
      position: relative;
      width: fit-content;
      padding: 5px 5px 5px 15px;
      margin: 5px;
      align-items: center;
      border-radius: 15px;
      background: var(
        --Style,
        linear-gradient(90deg, #00a6ce 25.95%, #3346ed 100%)
      );
      gap: 0 10px;
      & > div:nth-child(1) {
        color: #fff;
        font-family: "Noto Sans HK";
        font-size: 18.75px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        letter-spacing: 1.875px;
      }
      & > div:nth-child(2) {
        display: flex;
        justify-content: center;
        align-items: center;
        background: #fff;
        border-radius: 50%;
      }
    }
    margin: 0 auto;
    display: flex;
    justify-content: center;
    position: relative;
    width: fit-content;
    border-radius: 20px;
    z-index: 5;
  }
  .btn {
    position: relative;
    width: fit-content;
  }
  .btn::after {
    content: "";
    position: absolute;
    display: inline-block;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    z-index: 1;
    border-radius: 35px;
    animation: btntestafterAnima 2s infinite;
    transition: all 0.5s;
  }
}
@media screen and (max-width: 767px) {
  .slot {
    & > div {
      display: flex;
      justify-content: center;
      position: relative;
      width: fit-content;
      padding: 5px 5px 5px 15px;
      margin: 3px;
      align-items: center;
      border-radius: 5px;
      background: var(
        --Style,
        linear-gradient(90deg, #00a6ce 25.95%, #3346ed 100%)
      );
      gap: 0 7px;
      & > div:nth-child(1) {
        color: #fff;
        font-family: "Noto Sans HK";
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        letter-spacing: 1.4px;
      }
      & > div:nth-child(2) {
        display: flex;
        justify-content: center;
        align-items: center;
        background: #fff;
        border-radius: 50%;
        width: 16px;
        height: 16px;
      }
    }
    margin: 0 auto;
    display: flex;
    justify-content: center;
    position: relative;
    width: fit-content;
    border-radius: 20px;
    z-index: 5;
  }
  .btn {
    position: relative;
    width: fit-content;
  }
  .btn::after {
    content: "";
    position: absolute;
    display: inline-block;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    z-index: 1;
    border-radius: 25px;
    animation: btntestafterAnima 2s infinite;
    transition: all 0.5s;
  }
}
@keyframes btntestafterAnima {
  0% {
    width: 100%;
    height: 100%;
    border: 5px solid #00a5cef8;
  }
  19% {
    border: 5px solid #00a5ce8e;
    width: calc(100% + 10px);
    height: calc(100% + 10px);
  }
  24% {
    border: 3px solid #00a5ce48;
    width: calc(100% + 14px);
    height: calc(100% + 14px);
  }
  29% {
    border: 0 solid #00a5ce00;
    width: calc(100% + 18px);
    height: calc(100% + 18px);
  }
  100% {
    border: 0 solid #00a5ce00;
    width: calc(100% + 18px);
    height: calc(100% + 18px);
  }
}
</style>