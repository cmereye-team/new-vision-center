<script lang="ts" setup>
const props = defineProps({
  // 二级页面地址 可以没有 对应于传入的link
  link: { type: String, default: "" },
  // 二级页面名称 可以没有  对应于传入的name
  name: { type: String, default: "" },
  // 当前页面是否為子頁面
  isInsidePage: { type: Boolean, default: false },
  // 子頁面標題
  insidePageTitle: { type: String, default: "" },
});
// 获取当前頁面路由
const route = useRoute();
let pageLink = ref("");
pageLink.value = route.path;
</script>

<template>
  <div class="nav-bar">
    <div>
      <nuxt-link to="/">主頁</nuxt-link>
      <span>-</span>
      <nuxt-link
        :to="props.link"
        :style="{ color: props.isInsidePage ? '#aaa' : '' }"
        >{{ props.name }}</nuxt-link
      >
      <span v-if="props.isInsidePage">-</span>
      <nuxt-link
        v-if="props.isInsidePage"
        class="nav-bar-title"
        :to="pageLink"
        >{{ props.insidePageTitle }}</nuxt-link
      >
      <!-- <span style="color: #00a6ce;margin: 0;">{{ props.insidePageTitle.length > 20 ?'...':'' }}</span> -->
    </div>
  </div>
</template>

<style lang="scss" scoped>
@media screen and (min-width: 768px) {
  .nav-bar {
    max-width: 1300px;
    margin: 62px auto 46px;

    & > div {
      display: flex;
      align-items: center;
      & > a:nth-child(1) {
        color: var(--Grey-Pale, #aaa);
        /* Content-PC */
        font-family: "Noto Sans HK";
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: 160%; /* 32px */
        letter-spacing: 2px;
      }
      span {
        font-size: 21px;
        margin: 0 10px;
      }
      & > a {
        color: var(--Brand-Color, #00a6ce);
        /* Content-PC */
        font-family: "Noto Sans HK";
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: 160%; /* 32px */
        letter-spacing: 2px;
        text-wrap: nowrap;
      }
      .active,
      & > a:last-child {
        color: var(--Brand-Color, #00a6ce);
        /* Content-PC */
        font-family: "Noto Sans HK";
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: 160%; /* 32px */
        letter-spacing: 2px;
      }
    }
    .nav-bar-title {
      max-width: calc(1300px - 215px);
      width: fit-content;
      overflow: hidden;
      text-wrap: nowrap;
    }
  }
}
@media screen and (max-width: 767px) {
  a {
    color: #00a6ce;
  }
  .nav-bar {
    padding-top: 16px;
    padding-left: 25px;
    & > div {
      & > span {
        color: #aaa;
        font-size: 13px;
        margin: 0 5px;
      }
      & > a {
        color: #aaa;
        font-family: "Noto Sans HK";
        font-size: 13px;
        font-style: normal;
        font-weight: 400;
        line-height: 160%; /* 20.8px */
        letter-spacing: 1.3px;
      }
      & > a:last-child {
        color: var(--Brand-Color, #00a6ce);
        font-family: "Noto Sans HK";
        font-size: 13px;
        font-style: normal;
        font-weight: 400;
        line-height: 160%; /* 20.8px */
        letter-spacing: 1.3px;
      }
    }
  }
}
</style>