<script setup lang="ts">
import getWindowSize from "@/utils/width";
const isPc = ref(true);
const widthNum = ref();

onMounted(() => {
  window.addEventListener("resize", () => {
    let { widthState, width } = getWindowSize();
    isPc.value = widthState;
    widthNum.value = width;
  });

  let { widthState, width } = getWindowSize();
  widthNum.value = width;
  isPc.value = widthState;
});
</script>
<template>
  <div>
    <PublicHeader v-if="widthNum > 768" key="pc" />
    <PublicHeaderMobileHead v-if="widthNum < 767" key="mobile" />
    <NuxtPage />
    <div v-if="!isPc" class="fixed-menu">
      <PublicFooterFixedFooter />
    </div>
    <div class="form">
      <PublicForm />
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
.form {
  margin-bottom: 65px;
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
  .form {
    margin-bottom: 45px;
  }
}
</style>