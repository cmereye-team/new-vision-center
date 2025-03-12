<script lang="ts" setup>
const activeName = ref("1");
import getWindowSize from "@/utils/width";
const isPc = ref(false);
let { widthState, width } = getWindowSize();
isPc.value = widthState;
interface Question {
  q: string;
  a: string[];
  mAq: string[];
}

const props = defineProps({
  title: {
    type: String as PropType<string>,
    default: "",
  },
  listQuestion: {
    type: Array as PropType<Question[]>,
    default: () => {
      return [];
    },
  },
  testWidth: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
});
</script>

<template>
  <div :class="testWidth ? 'collapse-test' : 'collapse'">
    <div class="title">{{ title }}</div>
    <el-collapse v-model="activeName" accordion>
      <el-collapse-item
        v-for="(item, index) in listQuestion"
        :name="index + 1"
        :key="index"
      >
        <template #title>
          <span>{{ item.q }}</span>
        </template>
        <div v-if="isPc" class="letf">
          <span v-for="(el, index) in item.a" :key="index" v-html="el"></span>
        </div>
        <div v-else class="left">
          <span v-for="(el, index) in item.mAq" :key="index" v-html="el"></span>
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<style lang="scss" scoped>
@media screen and (min-width: 768px) {
  .collapse {
    max-width: 1284px;
    margin: 0 auto;
  }
  .collapse-test {
    max-width: 960px;
    margin: 0 auto;
  }
  .title {
    color: #4d4d4d;
    text-align: center;
    font-family: "Noto Sans HK";
    font-size: 45px;
    font-style: normal;
    font-weight: 700;
    line-height: 60px; /* 133.333% */
    letter-spacing: 2.25px;
    padding-bottom: 15px;
    position: relative;
    width: fit-content;
    margin: 0 auto 35px;
  }
  .title::after {
    content: "";
    width: 100%;
    height: 4px;
    border-radius: 4px;
    background: #00a6ce;
    position: absolute;
    bottom: 0;
    left: 0;
    display: inline-block;
  }
  :deep(.el-collapse) {
    border: none;
  }
  :deep(.el-collapse-item__wrap) {
    border: none;
  }
  :deep(.el-collapse-item__header) {
    height: fit-content;
    border-radius: 20px;
    // background: var(--Skin, #eafbff);
    margin: 4px 0;
    padding: 20px 20px 25px;
    border-radius: 0;
    border-bottom: 1px solid #00a6ce;
    color: var(--Brand-Color, #00a6ce);
    text-align: center;
    font-family: "Noto Sans HK";
    font-size: 22.5px;
    font-style: normal;
    font-weight: 700;
    line-height: 33.75px; /* 150% */
    letter-spacing: 1.125px;
    position: relative;
    & > span {
      position: relative;
      left: 6%;
      top: auto;
      bottom: -5px;
    }

    & > i {
      background: url("https://statichk.cmermedical.com/vision/imgs/2025030411393801.png")
        no-repeat;
      background-size: contain;
      width: 24px;
      height: 24px;
      transition: all 0.3s;
      & > svg {
        display: none;
      }
    }
  }
  :deep(.el-collapse-item__header::before) {
    position: absolute;
    left: 24px;
    top: 52%;
    transform: translateY(-50%);
    content: "";
    background: url('https://statichk.cmermedical.com/vision/imgs/2025030614220501.svg') no-repeat;
    background-size: cover;
    width: 26px;
    height: 32px;
    // color: var(--Brand-Color, #00a6ce);
    // text-align: center;
    // font-family: "Noto Sans HK";
    // font-size: 33.75px;
    // font-style: normal;
    // font-weight: 700;
    // line-height: 45px; /* 133.333% */
    // letter-spacing: 1.688px;
  }
  :deep(.el-collapse-item__arrow.is-active) {
    background: url("https://statichk.cmermedical.com/vision/imgs/2025030411393802.png")
      no-repeat;
    background-size: contain;
    width: 35px;
    height: 35px;
    transition: all 0.3s;
  }
  :deep(.el-collapse-item__header.is-active) {
    // color: var(--White, #fff);
    // border-radius: 20px;
    // background: var(--Brand-Color, #00a6ce);
    color: var(--Brand-Color, #00a6ce);
    font-family: "Noto Sans HK";
    font-size: 22.5px;
    font-style: normal;
    font-weight: 700;
    line-height: 33.75px; /* 150% */
    letter-spacing: 1.125px;
  }
  :deep(.el-collapse-item__header.is-active::before) {
    color: var(--Brand-Color, #00a6ce);
  }

  :deep(.el-collapse-item__content) {
    padding-left: 11.538vw;
    padding: 16px 0;
    & > div {
      // display: flex;
      flex-direction: column;
      text-align: center;
      color: var(--Grey-Deep, #4d4d4d);
      text-align: center;
      font-family: "Noto Sans HK";
      font-size: 15px;
      font-style: normal;
      font-weight: 500;
      line-height: 22.5px; /* 150% */
      // text-transform: uppercase;
      position: relative;
      padding: 0 60px;
      text-align: left;
    }
    // & > div::before {
    //   content: "A";
    //   position: absolute;
    //   left: 0;
    //   top: 0;
    //   // color: var(--Brand-Color, #00a6ce);
    //   text-align: center;
    //   font-family: "Noto Sans HK";
    //   font-size: 33.75px;
    //   font-style: normal;
    //   font-weight: 700;
    //   line-height: 45px; /* 133.333% */
    //   letter-spacing: 1.688px;
    // }
  }
}
@media screen and (max-width: 767px) {
  .title {
    color: #4d4d4d;
    text-align: center;
    font-family: "Noto Sans HK";
    font-size: 6.15vw;
    font-style: normal;
    font-weight: 700;
    line-height: 40.107px;
    padding-bottom: 8px;
    position: relative;
    width: fit-content;
    margin: 0 auto 24px;
  }
  .title::after {
    content: "";
    width: 80%;
    height: 4px;
    border-radius: 4px;
    background: #00a6ce;
    position: absolute;
    bottom: 0;
    left: 50%;
    display: inline-block;
    transform: translateX(-50%);
  }
  :deep(.el-collapse) {
    border: none;
  }
  :deep(.el-collapse-item__wrap) {
    border: none;
  }
  :deep(.el-collapse-item__header) {
    height: fit-content;
    // border-radius: 20px;
    // background: var(--Skin, #eafbff);
    margin: 1.0665vw 0;
    padding: 2.4vw 3.07vw;
    color: var(--Grey-Deep, #4d4d4d);
    text-align: center;
    font-family: "Noto Sans HK";
    font-size: 5.128vw;
    font-style: normal;
    font-weight: 700;
    line-height: 9.27vw; /* 173.855% */
    letter-spacing: 0.2vw;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    & > i {
      background: url("	https://statichk.cmermedical.com/vision/imgs/2025030411393801.png")
        no-repeat;
      background-size: contain;
      width: 4.265vw;
      height: 4.265vw;
      transition: all 0.3s;
      position: absolute;
      right: -1.33vw;
      & > svg {
        display: none;
      }
    }
  }
  :deep(.el-collapse-item__header::before) {
    position: absolute;
    left: -8vw;
    top: 50%;
    transform: translateY(-50%);
    content: "";
    background: url('https://statichk.cmermedical.com/vision/imgs/2025030614220501.svg') no-repeat;
    background-size: cover;
    width: 4.933vw;
    height: 6.533vw;
    // color: var(--Brand-Color, #00a6ce);
    // text-align: center;
    // font-family: "Intro ";
    // font-size: 6.4vw;
    // font-style: normal;
    // font-weight: 400;
    // line-height: 12vw; /* 187.5% */
    // letter-spacing: 1.2px;
  }
  :deep(.el-collapse-item__arrow.is-active) {
    background: url("https://statichk.cmermedical.com/vision/imgs/2025030411393802.png")
      no-repeat;
    background-size: contain;
    width: 5.865vw;
    height: 5.865vw;
    transform: rotate(0);
  }
  :deep(.el-collapse-item__header.is-active) {
    color: var(--Brand-Color, #00a6ce);
    border-radius: 5.33vw;
    // background: var(--Brand-Color, #00a6ce);
  }
  :deep(.el-collapse-item__header.is-active::before) {
    color: var(--Brand-Color, #00a6ce);
  }
  :deep(.el-collapse-item__content) {
    padding-top: 4.53vw;
    padding-right: 0;
    & > div {
      display: flex;
      flex-direction: column;
      color: var(--Grey-Deep, #4d4d4d);
      font-family: "Noto Sans HK";
      font-size: 3.733vw;
      font-style: normal;
      font-weight: 500;
      line-height: 6.1816vw; /* 165.577% */
      // text-transform: uppercase;
      position: relative;
      padding-left: 10.1025vw;
    }
  }
}
</style>