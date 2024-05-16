
<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    default: "",
  },
});
</script>
<template>
  <div class="title">
    <span>{{ title }}</span>
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
}
@media screen and (max-width: 767px) {
  .title {
    color: #00a6ce;
    text-align: justify;
    font-family: "Noto Sans HK";
    font-size: 24px;
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
}
</style>
