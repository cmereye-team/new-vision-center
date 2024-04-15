<script lang="ts" setup>
const props = defineProps({
  content: { type: String, default: () => {} },
});
</script>

<template>
  <div class="Index" v-html="props.content"></div>
</template>

<style lang="scss" scoped>
@media screen and (min-width: 768px) {
  .Index {
    padding: 0 100px;
  }
  :deep(table) {
    max-width: 1100px;
    margin: 0 auto;
    td {
      border-radius: 20px;
      padding: 16px 88px 16px 158px;
      p {
        span {
          color: #60605f;
          font-family: "Inter";
          font-size: 22px;
          font-style: normal;
          font-weight: 300;
          line-height: 40px; /* 181.818% */
          text-transform: uppercase;
        }
      }
    }
  }
  :deep(.p1) {
    margin-top: 20px;
  }
  :deep(P) {
    color: #60605f;
    font-family: "Inter";
    font-size: 22px;
    font-style: normal;
    font-weight: 300;
    line-height: 40px; /* 181.818% */
    text-transform: uppercase;
    margin-bottom: 10px;
  }
  :deep(.title1) {
    color: #00a6ce;
    font-family: "Inter";
    font-size: 36px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-bottom: 20px;
  }
  :deep(img) {
    max-width: 1100px;
    margin: 0 auto;
  }
}
@media screen and (max-width: 767px) {
}
</style>