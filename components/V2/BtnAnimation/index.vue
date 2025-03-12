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
const strNoEmpty = (str: string) => {
  // 判断str是否为空
  return str.length > 0;
};
</script>

<template>
  <div class="btn">
    <a
      class="slot"
      :class="
        strNoEmpty(props.btnElement.cls)
          ? props.btnElement.cls
          : 'sight_service'
      "
      v-if="props.btnElement.isExternalLink"
      :href="props.btnElement.link"
      target="_blank"
    >
      <div>
        <div>{{ props.btnElement.title }}</div>
        <div v-html="props.btnElement.svgIcon"></div>
      </div>
    </a>
    <nuxt-link
      v-else
      class="slot"
      :class="
        strNoEmpty(props.btnElement.cls)
          ? props.btnElement.cls
          : 'sight_service'
      "
      :to="props.btnElement.link"
    >
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
      border-radius: 100px;
      border: 1px solid #000;
      background: #00a6ce;
      gap: 0 10px;
      transform: translateY(-10px);
      box-shadow: 0px 12px 1px #141211;
      transition: all 0.3s ease-in-out;
      flex-direction: row-reverse;
      & > div:nth-child(1) {
        color: #fff;
        font-family: "Noto Sans HK";
        font-size: 18.75px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        letter-spacing: 1.875px;
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
  .slot:hover,
  .slot:active {
    & > div {
      transform: translateY(0px);
      box-shadow: 0 0 0;
    }
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
      border: 1px solid #000;
      background: #00a6ce;
      gap: 0 10px;
      border-radius: 100px !important;
      transform: translateY(-10px);
      box-shadow: 0px 8px 1px #141211;
      transition: all 0.3s ease-in-out;
      flex-direction: row-reverse;
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
        background: transparent;
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

  .slot:hover,
  .slot:active {
    & > div {
      transform: translateY(0px);
      box-shadow: 0 0 0;
    }
  }
  // .btn {
  //   position: relative;
  //   width: fit-content;
  // }
  // .btn::after {
  //   content: "";
  //   position: absolute;
  //   display: inline-block;
  //   left: 50%;
  //   top: 50%;
  //   transform: translate(-50%, -50%);
  //   -webkit-transform: translate(-50%, -50%);
  //   width: 100%;
  //   height: 100%;
  //   z-index: 1;
  //   border-radius: 25px;
  //   animation: btntestafterAnima 2s infinite;
  //   transition: all 0.5s;
  // }
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