<script lang="ts" setup>
const isPc = ref(false);
// 检测获取屏幕宽度
const getScreenWidth = () => {
  if (window.innerWidth >= 768) {
    isPc.value = true;
  }
};

onMounted(() => {
  if (window.innerWidth >= 768) {
    isPc.value = true;
  }
  window.addEventListener("resize", getScreenWidth);
  window.addEventListener("beforeunload", getScreenWidth);
});
</script>

<template>
  <div class="banner-template">
    <slot name="title"> </slot>
  </div>
</template>

<style lang="scss" scoped>
@media screen and (min-width: 768px) {
  .banner-template {
    margin-top: 136px;
    position: relative;
  }
  .banner-template-btn {
    position: absolute;
    top: 0;
    right: 50px;
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
        font-family: "Inter";
        font-size: 12px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
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
}
@media screen and (max-width: 767px) {
  .banner-template{
    margin-top: 87px;
  }
  .banner-template-btn{
    display: none;
  }
}
</style>