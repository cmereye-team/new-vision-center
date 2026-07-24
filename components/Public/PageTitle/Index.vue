<!--
 * @Date: 2025-10-11 14:01:45
 * @LastEditTime: 2026-07-24 15:07:56
 * @FilePath: /components/Public/PageTitle/Index.vue
 * @Description: 通用标题
-->
<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    default: "",
  },
  isTestPage: {
    type: Boolean,
    default: false,
  },
  color: {
    type: String,
    default: "#00a6ce",
  },
});
</script>

<template>
  <div v-if="isTestPage" class="title" :style="{ '--theme-color': color }">
    <span>{{ title }}</span>
  </div>
  <div v-else class="title" :style="{ '--theme-color': color }">
    <span v-html="title"></span>
  </div>
</template>

<style lang="scss" scoped>
.title {
  color: var(--theme-color);
  font-family: "Noto Sans HK";
  font-style: normal;
  font-weight: 700;
  display: flex;
  margin: 0 auto;
  width: fit-content;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    background: var(--theme-color);
  }
}
@media screen and (min-width: 768px) {
  .title {
    text-align: center;
    font-size: 33.75px;
    line-height: 45px;
    letter-spacing: 1.688px;
    padding-bottom: 10px;

    &::after {
      height: 5px;
      border-radius: 5px;
    }
  }
}
@media screen and (max-width: 767px) {
  .title {
    text-align: justify;
    font-size: 6.154vw;
    line-height: 40.107px;
    letter-spacing: 1.2px;
    padding-bottom: 5px;

    &::after {
      height: 3.34px;
      border-radius: 3.34px;
    }
  }
}
</style>
