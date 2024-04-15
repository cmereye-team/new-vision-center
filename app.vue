<script setup lang="ts">
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
  <div>
    <PublicHeader />
    <NuxtPage />
    <div v-if="!isPc" class="fixed-menu">
      <PublicFooterFixedFooter />
    </div>
    <PublicFooter />
  </div>
</template>
<style>
* {
  padding: 0;
  margin: 0;
}
a {
  text-decoration: none;
}
@media screen and (max-width: 768px) {
  .fixed-menu {
    position: fixed;
    z-index: 111;
    bottom: 0;
    right: 0;
    left: 0;
    background: var(--White, #fff);
    box-shadow: 0px 4px 19px 0px rgba(0, 0, 0, 0.25);
  }
}
</style>