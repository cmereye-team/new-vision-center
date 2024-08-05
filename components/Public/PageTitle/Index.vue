
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
});
</script>
<template>
  <div class="title-test" v-if="isTestPage">
    <span>{{ title }}</span>
  </div>
  <div class="title-test" v-else>
    <span v-html="title"></span>
  </div>
</template>



<style lang="scss" scoped>
@media screen and (min-width: 768px) {
  .title {
    color: #00a6ce;
    text-align: justify;
    font-family: "Noto Sans HK";
    font-size: 45px;
    font-style: normal;
    font-weight: 700;
    line-height: 60px; /* 133.333% */
    letter-spacing: 2.25px;
    display: flex;
    margin: 0 auto;
    width: fit-content;
    position: relative;
    padding-bottom: 10px;
  }
  .title::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    height: 5px;
    border-radius: 5px;
    background: #00a6ce;
  }
  .title-test {
    color: var(--Brand-Color, #00a6ce);
    text-align: center;
    font-family: "Noto Sans HK";
    font-size: 33.75px;
    font-style: normal;
    font-weight: 700;
    line-height: 45px; /* 133.333% */
    letter-spacing: 1.688px;
    display: flex;
    margin: 0 auto;
    width: fit-content;
    position: relative;
    padding-bottom: 10px;
  }
  .title-test::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    height: 5px;
    border-radius: 5px;
    background: #00a6ce;
  }
}
@media screen and (max-width: 767px) {
  .title {
    color: #00a6ce;
    text-align: justify;
    font-family: "Noto Sans HK";
    font-size: 6.154vw;
    font-style: normal;
    font-weight: 700;
    line-height: 10.25vw; /* 167.112% */
    letter-spacing: 1.2px;
    display: flex;
    margin: 0 auto;
    width: fit-content;
    position: relative;
    padding-bottom: 5px;
  }
  .title::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    height: 3.34px;
    border-radius: 3.34px;
    background: #00a6ce;
  }
  .title-test {
    color: #00a6ce;
    text-align: justify;
    font-family: "Noto Sans HK";
    font-size: 6.154vw;
    font-style: normal;
    font-weight: 700;
    line-height: 40.107px; /* 167.112% */
    letter-spacing: 1.2px;
    display: flex;
    margin: 0 auto;
    width: fit-content;
    position: relative;
    padding-bottom: 5px;
  }
  .title-test::after{
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    height: 3.34px;
    border-radius: 3.34px;
    background: #00a6ce;
  }
}
</style>
