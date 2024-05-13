<script setup lang="ts">
import getWindowSize from "@/utils/width";
const isPc = ref(false);

onMounted(() => {
  window.addEventListener("resize", () => {
    let { widthState, width } = getWindowSize();
    isPc.value = widthState;
  });
});
</script>

<template>
  <footer>
    <PublicFooterOneFooter />
    <PublicFooterTwoFooter />
    <div v-if="isPc">
      <el-backtop :bottom="100" :right="182">
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