<script lang="ts" setup>
import getWindowSize from "@/utils/width";
const isPc = ref(true);
onMounted(() => {
  let { widthState, width } = getWindowSize();
  window.addEventListener("resize", () => {
    let { widthState, width } = getWindowSize();
    isPc.value = widthState;
  });
  isPc.value = widthState;
});
</script>
<template>
  <div class="public-header">
    <PublicHeaderLeftHead />
    <PublicHeaderRightHead v-if="isPc" />
  </div>
</template>

<style lang="scss" scoped>
.public-header {
  display: flex;
  justify-content: space-between;
  padding: 32px 40px 40px;
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  right: 0;
  background: #fff;
  box-shadow: 1px 2px 3px 0px rgba(0, 0, 0, 0.1);
}
.public-header-bottom-menu {
  position: absolute;
  z-index: 9;
  top: 100%;
  right: 22%;
}
.banner-template-btn {
  position: absolute;
  top: 0;
  display: flex;
  z-index: 9;

  & > a {
    display: flex;
    align-items: center;
    margin-right: 10px;
    text-decoration: none;
    & > div:nth-child(1) {
      display: flex;
      align-items: center;
      margin-right: 5px;
    }
    & > div:nth-child(2) {
      color: #fff;
      text-align: center;
      font-family: "Noto Sans HK";
      font-size: 12px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      width: max-content;
    }
  }
  & > a:nth-child(1) {
    padding: 13px 11px 13px 16px;
    border-radius: 0px 0px 10px 10px;
    background: var(--Basic-2, #59ba68);
  }
  & > a:nth-child(2) {
    padding: 15px 13px 15px 19px;
    border-radius: 0px 0px 10px 10px;
    background: #00a6ce;
  }
}
@media screen and (min-width: 768px) and (max-width: 1620px) {
  .public-header {
    display: flex;
    justify-content: space-between;
    padding: 1.67vw 2.08vw 2.08vw;
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    right: 0;
    background: #fff;
    box-shadow: 1px 2px 3px 0px rgba(0, 0, 0, 0.1);
  }
}
@media screen and (max-width: 768px) {
  .public-header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99;
    background: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 9px 24px 14px;
    width: 100vw;
    box-sizing: border-box;
  }
}
</style>