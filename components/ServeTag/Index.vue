<script lang="ts" setup>
const props = defineProps({
  detail: {
    type: Object,
    default: () => {},
  },
});
const emit = defineEmits();
const inform = () => {
  emit("inform", "close");
};
</script>

<template>
  <div class="serve">
    <div><img :src="props.detail.img" :alt="props.detail.title" /></div>
    <div>
      <div>{{ props.detail.title }}</div>
      <div>
        <span
          v-for="(item, index) in props.detail.description"
          :key="index"
          v-html="item == '' ? `<br />` : item"
        ></span>
      </div>
    </div>
    <div @click="inform">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="37"
        height="37"
        viewBox="0 0 37 37"
        fill="none"
      >
        <circle cx="18.5" cy="18.5" r="18.5" fill="#00A6CE" />
        <path
          d="M11.2119 12.332L25.7877 27.4684"
          stroke="white"
          stroke-width="2.24242"
          stroke-linecap="round"
        />
        <path
          d="M25.7881 12.332L11.2123 27.4684"
          stroke="white"
          stroke-width="2.24242"
          stroke-linecap="round"
        />
      </svg>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@media screen and (min-width: 768px) {
  .serve {
    position: relative;
    border-radius: 18.443px;
    background: var(--Skin, #eafbff);
    box-shadow: 0px 0px 7.5px 0px rgba(0, 0, 0, 0.25);
    min-height: 360px;
    display: flex;
    gap: 0 36px;
    box-sizing: border-box;
    padding: 28px 22px 30px;
    & > div:nth-child(2) {
      & > div:nth-child(1) {
        color: var(--Deep-Blue, #3e5270);
        font-family: "Noto Sans HK";
        font-size: 22.5px;
        font-style: normal;
        font-weight: 700;
        line-height: 33.75px; /* 150% */
        letter-spacing: 1.125px;
        margin-bottom: 10px;
      }
      & > div:nth-child(2) {
        // display: flex;
        flex-direction: column;
        color: #60605f;
        font-family: "Noto Sans HK";
        font-size: 16.5px;
        font-style: normal;
        font-weight: 500;
        line-height: 26px; /* 157.576% */
        letter-spacing: 0.825px;
        & > span {
          max-height: 26px;
        }
      }
    }
    & > div:nth-child(3) {
      position: absolute;
      right: 20px;
      top: 16px;
      cursor: pointer;
      box-shadow: 0px 0px 7.5px 0px rgba(0, 0, 0, 0.25);
      border-radius: 50%;
      width: 37px;
      height: 37px;
    }
    & > div:nth-child(3):hover {
      transform: scale(1.1);
      transition: all 0.3s ease;
      box-shadow: 0px 0px 7.5px 0px rgba(0, 0, 0, 0.25);
    }
  }
}
@media screen and (max-width: 767px) {
  .serve {
    border-radius: 2.05vw;
    background: var(--Skin, #eafbff);
    box-shadow: 0px 0px 3.263px 0px rgba(0, 0, 0, 0.25);
    position: relative;
    display: flex;
    box-sizing: border-box;
    padding: 3.589vw 3.33vw 2.564vw 2.3vw;
    gap: 0 3.07vw;
    & > div:nth-child(1) {
      width: 25.128vw;
      height: 25.128vw;
      min-width: 25.128vw;
      & > img {
        width: 100%;
      }
    }
    & > div:nth-child(2) {
      & > div:nth-child(1) {
        color: var(--Deep-Blue, #3e5270);
        font-family: "Noto Sans HK";
        font-size: 3.589vw;
        font-style: normal;
        font-weight: 700;
        line-height: 3.75vw; /* 104.868% */
        letter-spacing: 0.7px;
        margin-bottom: 1.28vw;
      }
      & > div:nth-child(2) {
        color: #60605f;
        font-family: "Noto Sans HK";
        font-size: 3.07vw;
        font-style: normal;
        font-weight: 500;
        line-height: 4.1vw; /* 133.333% */
        letter-spacing: 0.6px;
        line-height: 4.1vw;
      }
    }
    & > div:nth-child(3) {
      position: absolute;
      top: 1.665vw;
      right: 2.33vw;
      width: 4.1vw;
      height: 4.1vw;
      & > svg {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>