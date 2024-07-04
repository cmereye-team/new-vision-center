<script lang="ts" setup>
// compiler macro
const props = defineProps({
  // props
  list: {
    type: Array,
    default: () => {
      return [];
    },
  },
});

const showOrHiedList = (num: number) => {
  props.list[num].isShow = !props.list[num].isShow;
};
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
  <div class="VideoList">
    <div v-for="(item, index) in props.list" :key="item.id">
      <div
        class="video-item"
        @click="isPc ? '' : showOrHiedList(index)"
        :class="`item-${index}`"
      >
        <!-- <div class="video-title">
          <div>{{ item.name }}</div>
        </div> -->
        <div class="video-list">
          <a
            v-for="element in item.videoList"
            :href="element.videoLink"
            target="_blank"
            :key="element.id"
          >
            <div><img :src="element.img" :alt="element.type" /></div>
            <div>
              <span v-for="(el, index) in element.text" :key="index">{{
                el
              }}</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@media screen and (min-width: 768px) {
  .video-title {
    color: var(--Brand-Color, #00a6ce);
    font-family: "Inter";
    font-size: 22.5px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: uppercase;
  }
  .video-list {
    margin: 20px auto 50px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 18.75px;
    & > a {
      margin-bottom: 20px;
      & > div:nth-child(1) {
        width: 312px;
        height: 194px;
        border-radius: 15px;
        overflow: hidden;
        & > img {
          width: 100%;
          height: 100%;
        }
      }
      & > div:nth-child(2) {
        margin-top: 5px;
        display: flex;
        text-align: center;
        flex-direction: column;
        color: #60605f;
        text-align: center;
        font-family: "Inter";
        font-size: 22px;
        font-style: normal;
        font-weight: 400;
        line-height: 30px; /* 136.364% */
        text-transform: uppercase;
      }
    }
  }
}
@media screen and (max-width: 767px) {
  .VideoList {
    & > div {
      margin-top: 30px;
    }
  }
  .video-title {
    color: var(--Brand-Color, #00a6ce);
    font-family: "Inter";
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: uppercase;
  }
  .video-title {
    & > div {
      position: relative;
      width: fit-content;
    }
    & > div::after {
      position: absolute;
      top: 10px;
      right: -20px;
      content: "";
      background: url("https://static.cmereye.com/imgs/2024/04/d8b915b502a6c1cd.png")
        no-repeat;
      background-size: 100% 100%;
      width: 14px;
      height: 7px;
      display: block;
    }
  }
  .video-list {
    margin: 30px auto 0;
    & > a {
      display: block;
      margin-bottom: 20px;
      & > div:nth-child(1) {
        & > img {
          width: 100%;
        }
      }
      & > div:nth-child(2) {
        display: flex;
        flex-direction: column;
        align-items: center;
        span {
          color: #60605f;
          text-align: center;
          font-family: "Inter";
          font-size: 18.13px;
          font-style: normal;
          font-weight: 400;
          line-height: 24.723px; /* 136.364% */
          text-transform: uppercase;
        }
      }
    }
  }
}
</style>