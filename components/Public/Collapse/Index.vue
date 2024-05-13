<script lang="ts" setup>
const activeName = ref("1");
import getWindowSize from "@/utils/width";
const isPc = ref(false);
let { widthState, width } = getWindowSize();
isPc.value = widthState;
const props = defineProps({
  title: {
    type: String,
    default: "1",
  },
  listQuestion: {
    type: Array,
    default: () => {
      return [];
    },
  },
});
</script>

<template>
  <div class="collapse">
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
        <div v-if="isPc">
          <span v-for="(el, index) in item.a" :key="index" v-html="el"></span>
        </div>
        <div v-else>
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
    background: var(--Skin, #eafbff);
    margin: 4px 0;
    padding: 12px 20px;

    color: var(--Grey-Deep, #4d4d4d);
    text-align: center;
    font-family: "Noto Sans HK";
    font-size: 30px;
    font-style: normal;
    font-weight: 700;
    line-height: 45px; /* 150% */
    letter-spacing: 1.5px;
    & > span {
      position: relative;
      left: 50%;
      transform: translateX(-50%);
    }
    & > span::before {
      position: absolute;
      left: -137%;
      top: 50%;
      transform: translateY(-50%);
      content: "Q";
      color: var(--Brand-Color, #00a6ce);
      text-align: center;
      font-family: "Noto Sans HK";
      font-size: 45px;
      font-style: normal;
      font-weight: 700;
      line-height: 60px; /* 133.333% */
      letter-spacing: 2.25px;
    }
    & > i {
      background: url("https://static.cmereye.com/imgs/2024/05/f7365790c4b6ade8.png")
        no-repeat;
      background-size: 100% 100%;
      width: 19px;
      height: 30px;
      transition: all 0.3s;
      & > svg {
        display: none;
      }
    }
  }
  :deep(.el-collapse-item__arrow.is-active) {
    background: url("https://static.cmereye.com/imgs/2024/05/50c8a51799598ce1.png")
      no-repeat;
    background-size: 100% 100%;
    width: 30px;
    height: 19px;
    transform: rotate(0);
  }
  :deep(.el-collapse-item__header.is-active) {
    color: var(--White, #fff);
    border-radius: 20px;
    background: var(--Brand-Color, #00a6ce);
    & > span::before {
      color: #d3f0fd;
    }
  }
  :deep(.el-collapse-item__content) {
    padding-left: 45px;
    padding: 25px;
    & > div {
      display: flex;
      flex-direction: column;
      text-align: center;
      color: var(--Grey-Deep, #4d4d4d);
      text-align: center;
      font-family: "Noto Sans HK";
      font-size: 20px;
      font-style: normal;
      font-weight: 500;
      line-height: 30px; /* 150% */
      text-transform: uppercase;
      position: relative;
    }
    & > div::before {
      content: "A";
      position: absolute;
      left: 0;
      top: 0;
      color: var(--Brand-Color, #00a6ce);
      text-align: center;
      font-family: "Noto Sans HK";
      font-size: 45px;
      font-style: normal;
      font-weight: 700;
      line-height: 60px; /* 133.333% */
      letter-spacing: 2.25px;
    }
  }
}
@media screen and (max-width: 767px) {
  .title {
    color: #4d4d4d;
    text-align: center;
    font-family: "Noto Sans HK";
    font-size: 24px;
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
    border-radius: 20px;
    background: var(--Skin, #eafbff);
    margin: 4px 0;
    padding: 9px 12px;
    color: var(--Grey-Deep, #4d4d4d);
    text-align: center;
    font-family: "Noto Sans HK";
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 34.771px; /* 173.855% */
    letter-spacing: 1px;
    & > span {
      position: relative;
      left: 50%;
      transform: translateX(-50%);
    }
    & > span::before {
      position: absolute;
      left: -18%;
      top: 50%;
      transform: translateY(-50%);
      content: "Q";
      color: var(--Brand-Color, #00a6ce);
      text-align: center;
      font-family: "Noto Sans HK";
      font-size: 28px;
      font-style: normal;
      font-weight: 700;
      line-height: 46.361px; /* 165.577% */
      letter-spacing: 1.4px;
    }
    & > i {
      background: url("https://static.cmereye.com/imgs/2024/05/f7365790c4b6ade8.png")
        no-repeat;
      background-size: 100% 100%;
      width: 14px;
      height: 26px;
      transition: all 0.3s;
      & > svg {
        display: none;
      }
    }
  }
  :deep(.el-collapse-item__arrow.is-active) {
    background: url("https://static.cmereye.com/imgs/2024/05/50c8a51799598ce1.png")
      no-repeat;
    background-size: 100% 100%;
    width: 26px;
    height: 14px;
    transform: rotate(0);
  }
  :deep(.el-collapse-item__header.is-active) {
    color: var(--White, #fff);
    border-radius: 20px;
    background: var(--Brand-Color, #00a6ce);
    & > span::before {
      color: #d3f0fd;
    }
  }
  :deep(.el-collapse-item__content) {
    padding-top: 17px;
    padding-left: 28px;
    padding-right: 0;
    & > div {
      display: flex;
      flex-direction: column;
      color: var(--Grey-Deep, #4d4d4d);
      font-family: "Noto Sans HK";
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: 23.181px; /* 165.577% */
      text-transform: uppercase;
      position: relative;
      padding-left: 28px;
    }
    & > div::before {
      content: "A";
      position: absolute;
      left: 0;
      top: 0;
      color: var(--Brand-Color, #00a6ce);
      text-align: center;
      font-family: "Noto Sans HK";
      font-size: 28px;
      font-style: normal;
      font-weight: 700;
      line-height: 46.361px; /* 165.577% */
      letter-spacing: 1.4px;
    }
  }
}
</style>