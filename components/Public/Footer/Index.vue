<script setup lang="ts">
import getWindowSize from "@/utils/width";
const isPc = ref(true);
const heightToTop = ref(0);
onMounted(() => {
  let { widthState, width } = getWindowSize();
  window.addEventListener("resize", () => {
    isPc.value = widthState;
  });
  isPc.value = widthState;
  window.addEventListener("scroll", () => {
    // 获取距离页面顶部的距离
    heightToTop.value = document.documentElement.scrollTop;

    if (heightToTop.value > 200) {
      document.querySelector(".to-form")?.classList.add("to-form-show");
    } else {
      document.querySelector(".to-form")?.classList.remove("to-form-show");
    }
  });
});

const toForm = () => {
  // 滚动到指定元素 #public-form
  document.documentElement.scrollTo({
    top: document.querySelector("#public-form")?.offsetTop,
    behavior: "smooth",
  });
};
</script>

<template>
  <footer>
    <PublicFooterOneFooter />
    <PublicFooterTwoFooter />
    <div v-if="isPc">
      <div class="to-form to-form-show" @click="toForm()">
        <svg
          width="38"
          height="38"
          viewBox="0 0 38 38"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.9948 24.5673L12 26L13.3325 17.9344L28.6026 2.7848C28.8504 2.53612 29.1451 2.33874 29.4699 2.20405C29.7946 2.06935 30.1429 2 30.4947 2C30.8466 2 31.1949 2.06935 31.5196 2.20405C31.8444 2.33874 32.1391 2.53612 32.3869 2.7848L35.2117 5.59716C35.4615 5.8438 35.6597 6.13725 35.795 6.46056C35.9303 6.78387 36 7.13066 36 7.4809C36 7.83115 35.9303 8.17794 35.795 8.50125C35.6597 8.82456 35.4615 9.11801 35.2117 9.36465L19.9948 24.5673Z"
            stroke="white"
            stroke-width="3.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M32 25.5652V33.3913C32 34.0832 31.7252 34.7467 31.2359 35.2359C30.7467 35.7252 30.0832 36 29.3913 36H4.6087C3.91683 36 3.25329 35.7252 2.76407 35.2359C2.27484 34.7467 2 34.0832 2 33.3913V8.6087C2 7.91683 2.27484 7.25329 2.76407 6.76407C3.25329 6.27484 3.91683 6 4.6087 6H12.4348"
            stroke="white"
            stroke-width="3.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <el-backtop :bottom="100" :right="382">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="66"
            height="66"
            viewBox="0 0 66 66"
            fill="none"
          >
            <circle cx="33" cy="33" r="33" fill="#00A6CE" />
            <path
              d="M34.4142 22.5858C33.6332 21.8047 32.3668 21.8047 31.5858 22.5858L18.8579 35.3137C18.0768 36.0948 18.0768 37.3611 18.8579 38.1421C19.6389 38.9232 20.9052 38.9232 21.6863 38.1421L33 26.8284L44.3137 38.1421C45.0948 38.9232 46.3611 38.9232 47.1421 38.1421C47.9232 37.3611 47.9232 36.0948 47.1421 35.3137L34.4142 22.5858ZM35 53V24H31V53H35Z"
              fill="white"
            />
            <path
              d="M19 22H48"
              stroke="white"
              stroke-width="4"
              stroke-linecap="round"
            />
          </svg>
        </div>
      </el-backtop>
    </div>
  </footer>
</template>


<style lang="scss" scoped>
@media screen and (min-width: 768px) {
  footer {
    padding: 70px 200px;
    background: rgba(0, 166, 206, 0.1);
    border-radius: 50px 50px 0 0;
  }
  :deep(.el-backtop) {
    display: flex;
    flex-direction: column;
    gap: 20px 0;
  }
  .to-form {
    width: 66px;
    height: 66px;
    background: #00a6ce;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    min-width: 66px;
    min-height: 66px;
    cursor: pointer;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
  .to-form-show {
    position: fixed;
    bottom: 180px;
    right: 370px;
    z-index: 20;
  }
}
@media screen and (max-width: 767px) {
  footer {
    width: 100vw;
    box-sizing: border-box;
    padding: 30px 20px 90px 20px;
    background: rgba(0, 166, 206, 0.1);
  }
}
</style>