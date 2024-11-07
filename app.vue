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
    <div class="form-public">
      <PublicForm />
    </div>
    <PublicFooter />
    <noscript
      ><img
        height="1"
        width="1"
        style="display: none"
        src="https://www.facebook.com/tr?id=1628632067329513&ev=PageView&noscript=1"
    /></noscript>
  </div>
</template>
<style>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=ABeeZee:ital@0;1&display=swap");
@import url("https://fonts.googleapis.com/css2?family=ABeeZee:ital@0;1&family=Noto+Sans+HK:wght@100..900&display=swap");

* {
  padding: 0;
  margin: 0;
}
/* .noto-sans-tc-<uniquifier > {
  font-family: "Noto Sans TC", sans-serif;
  font-optical-sizing: auto;
  font-weight: <weight>;
  font-style: normal;
} */

.noto-sans-hk-<uniquifier > {
  font-family: "Noto Sans HK", system-ui;
  font-optical-sizing: auto;
  font-weight: <weight>;
  font-style: normal;
}
.noto-sans-HK {
  font-family: "Noto Sans", sans-serif;
  font-optical-sizing: auto;
  font-weight: <weight>;
  font-style: normal;
  font-variation-settings: "wdth" 100;
}
@font-face {
  font-family: "Noto Sans";
  font-style: italic;
  font-weight: 100 900;
  font-stretch: 100%;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/notosans/v36/o-0ZIpQlx3QUlC5A4PNr4C5OaxRsfNNlKbCePevtvXOmDyw.woff2)
    format("woff2");
  unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}

.abeezee-regular {
  font-family: "ABeeZee", sans-serif;
  font-weight: 400;
  font-style: normal;
}

.abeezee-regular-italic {
  font-family: "ABeeZee", sans-serif;
  font-weight: 400;
  font-style: italic;
}
a {
  text-decoration: none;
}
.form-public {
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
  .form-public {
    margin-bottom: 45px;
  }
}
</style>

<style lang="scss">
:root {
  --font-size-base: 16px;
  html {
    font-size: var(--font-size-base);
  }
}
</style>