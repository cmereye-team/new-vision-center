<script lang="ts" setup>
import getWindowSize from "@/utils/width";
const isPc = ref(true);

onMounted(() => {
  let { widthState, width } = getWindowSize();
  window.addEventListener("resize", () => {
    let { widthState, width } = getWindowSize();
    isPc.value = widthState;
  });
  isPc.value = widthState;
});

const mobileMenu = ref(false);
const mobileMenuEvent = () => {
  mobileMenu.value = !mobileMenu.value;
  document.body.style.overflow = mobileMenu.value ? "hidden" : "auto";
};

// 获取子组件的值 控制菜单状态
const getSonValue = () => {
  mobileMenu.value = false;
};
</script>

<template>
  <div class="mobile-head">
    <PublicHeaderLeftHead />
    <div @click="mobileMenuEvent">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="29"
        height="20"
        viewBox="0 0 29 20"
        fill="none"
      >
        <rect width="28.4157" height="2.18582" fill="#00A6CE" />
        <rect y="8.74316" width="28.4157" height="2.18582" fill="#00A6CE" />
        <rect y="17.4868" width="28.4157" height="2.18582" fill="#00A6CE" />
      </svg>
    </div>
    <div v-if="mobileMenu" class="mobile-menu">
      <div class="menu-header">
        <PublicHeaderLeftHead ref="mobile-head" />
        <div @click="mobileMenuEvent">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="23"
            height="23"
            viewBox="0 0 23 23"
            fill="none"
          >
            <rect
              x="1.55664"
              y="0.369629"
              width="29.1837"
              height="2.2449"
              transform="rotate(43.8888 1.55664 0.369629)"
              fill="#00A6CE"
            />
            <rect
              x="22.2197"
              y="1.55615"
              width="29.1837"
              height="2.2449"
              transform="rotate(133.889 22.2197 1.55615)"
              fill="#00A6CE"
            />
          </svg>
        </div>
      </div>
      <PublicHeaderMobileHeadMenu
        ref="mobile-right-head"
        @getValue="getSonValue"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@media screen and (max-width: 767px) {
  .mobile-head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 9px 28px 15px 24px;
    position: fixed;
    z-index: 101;
    background: #fff;
    width: 100vw;
    top: 0;
    box-sizing: border-box;
  }
  .mobile-menu {
    z-index: 999;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100vw;
    height: 100vh;
    background: #f2fafc;
  }
  .menu-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 9px 24px 14px;
  }
}
</style>