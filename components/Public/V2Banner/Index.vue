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

const props = defineProps({
  banner: {
    type: Object,
    default: () => {},
  },
});
</script>

<template>
  <div class="banner-template">
    <div :style="{ height: props.banner.newBanner ? 'auto' : 'auto' }">
      <img v-if="isPc" :src="banner.pc" />
      <img v-else :src="props.banner.mobile" :alt="props.banner.alt || ''" />
    </div>
    <div class="publicBanner">
      <slot name="title"> </slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@media screen and (min-width: 768px) and (max-width: 1620px) {
  .banner-template {
    position: relative;
    & > div:nth-child(1) {
      margin: 7.083vw auto 0;
      width: 100%;
      height: 400px;
      object-fit: cover;
      display: flex;
      justify-content: center;
      object-fit: cover;
      img {
        width: 100%;
        height: 500px;
        object-fit: cover;
        margin: 0 auto;
        display: flex;
        justify-content: center;
      }
    }
    & > div:nth-child(2) {
      position: absolute;
      top: 50%;
      right: 50%;
      transform: translate(50%, -50%);
    }
    & > div:nth-child(3) {
      position: fixed;
      top: 7vw;
      right: 0;
      z-index: 10;
      .banner-template-btn {
        position: absolute;
        top: 0;
        display: flex;
        z-index: 9;

        & > a {
          display: flex;
          align-items: center;
          margin-right: 10px;
          text-decoration: none;
          & > div:nth-child(1) {
            display: flex;
            align-items: center;
            margin-right: 5px;
          }
          & > div:nth-child(2) {
            color: #fff;
            text-align: center;
            font-family: "Noto Sans HK";
            font-size: 12px;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
            width: max-content;
          }
        }
        // & > a:hover {
        //   box-shadow: 0 0 7.5px #00000040;
        //   transform: scale(1.1);
        //   transition: all 0.3s ease-in-out;
        // }
        & > a {
          overflow: hidden;
          box-shadow: 0 0 0 0 transparent;
          -webkit-transition: all 0.2s ease-in;
          -moz-transition: all 0.2s ease-in;
          transition: all 0.2s ease-in;
        }
        & > a:hover {
          background: #59ba68;
          // box-shadow: 0 0 30px 5px #59ba68;
          -webkit-transition: all 0.2s ease-out;
          -moz-transition: all 0.2s ease-out;
          transition: all 0.2s ease-out;
        }
        & > a:hover::before {
          -webkit-animation: sh02 0.5s 0s linear;
          -moz-animation: sh02 0.5s 0s linear;
          animation: sh02 0.5s 0s linear;
        }
        & > a::before {
          content: "";
          display: block;
          width: 0px;
          height: 86%;
          position: absolute;
          top: 7%;
          left: 0%;
          opacity: 0;
          background: #fff;
          box-shadow: 0 0 50px 30px #fff;
          -webkit-transform: skewX(-20deg);
          -moz-transform: skewX(-20deg);
          -ms-transform: skewX(-20deg);
          -o-transform: skewX(-20deg);
          transform: skewX(-20deg);
        }
        & > a:nth-child(1) {
          padding: 13px 11px 13px 16px;
          border-radius: 0px 0px 10px 10px;
          background: var(--Basic-2, #59ba68);
        }
        & > a:nth-child(2) {
          padding: 15px 13px 15px 19px;
          border-radius: 0px 0px 10px 10px;
          background: #00a6ce;
        }
        & > a:nth-child(2):hover {
          background: #00a6ce;
          // box-shadow: 0 0 30px 5px #00a6ce;
          -webkit-transition: all 0.2s ease-out;
          -moz-transition: all 0.2s ease-out;
          transition: all 0.2s ease-out;
        }
      }
    }
  }
  .banner-template-btn {
    position: absolute;
    top: 0;
    right: 50px;
    display: flex;
    z-index: 9;

    & > a {
      display: flex;
      align-items: center;
      margin-right: 10px;
      text-decoration: none;
      & > div:nth-child(1) {
        display: flex;
        align-items: center;
        margin-right: 5px;
      }
      & > div:nth-child(2) {
        color: #fff;
        text-align: center;
        font-family: "Noto Sans HK";
        font-size: 12px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
      }
    }
    & > a:hover {
      box-shadow: 0 0 7.5px #00000040;
      transform: scale(1.1);
      transition: all 0.3s ease-in-out;
    }
    & > a:hover::before {
      -webkit-animation: sh02 0.5s 0s linear;
      -moz-animation: sh02 0.5s 0s linear;
      animation: sh02 0.5s 0s linear;
    }
    & > a:nth-child(1) {
      padding: 13px 11px 13px 16px;
      border-radius: 0px 0px 10px 10px;
      // background: var(--Basic-2, #59ba68);
    }
    & > a:nth-child(2) {
      padding: 15px 13px 15px 19px;
      border-radius: 0px 0px 10px 10px;
      // background: #00a6ce;
    }
  }
}
@media screen and (min-width: 1621px) {
  .banner-template {
    position: relative;
    & > div:nth-child(1) {
      margin: 130px auto 0;
      width: 100%;
      height: 400px;
      object-fit: cover;
      display: flex;
      justify-content: center;
      object-fit: cover;
      img {
        width: 100%;
        height: 500px;
        object-fit: cover;
        margin: 0 auto;
        display: flex;
        justify-content: center;
      }
    }
    & > div:nth-child(2) {
      position: absolute;
      top: 50%;
      right: 50%;
      transform: translate(50%, -50%);
    }
    & > div:nth-child(3) {
      position: fixed;
      top: 136px;
      right: 0;
      z-index: 99;
      .banner-template-btn {
        position: absolute;
        top: 0;
        display: flex;
        z-index: 9;

        & > a {
          display: flex;
          align-items: center;
          margin-right: 10px;
          text-decoration: none;
          & > div:nth-child(1) {
            display: flex;
            align-items: center;
            margin-right: 5px;
          }
          & > div:nth-child(2) {
            color: #fff;
            text-align: center;
            font-family: "Noto Sans HK";
            font-size: 12px;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
            width: max-content;
          }
        }
        // & > a:hover {
        //   box-shadow: 0 0 7.5px #00000040;
        //   transform: scale(1.1);
        //   transition: all 0.3s ease-in-out;
        // }
        & > a {
          overflow: hidden;
          box-shadow: 0 0 0 0 transparent;
          -webkit-transition: all 0.2s ease-in;
          -moz-transition: all 0.2s ease-in;
          transition: all 0.2s ease-in;
        }
        & > a:hover {
          background: #59ba68;
          // box-shadow: 0 0 30px 5px #59ba68;
          -webkit-transition: all 0.2s ease-out;
          -moz-transition: all 0.2s ease-out;
          transition: all 0.2s ease-out;
        }
        & > a:hover::before {
          -webkit-animation: sh02 0.5s 0s linear;
          -moz-animation: sh02 0.5s 0s linear;
          animation: sh02 0.5s 0s linear;
        }
        & > a::before {
          content: "";
          display: block;
          width: 0px;
          height: 86%;
          position: absolute;
          top: 7%;
          left: 0%;
          opacity: 0;
          background: #fff;
          box-shadow: 0 0 50px 30px #fff;
          -webkit-transform: skewX(-20deg);
          -moz-transform: skewX(-20deg);
          -ms-transform: skewX(-20deg);
          -o-transform: skewX(-20deg);
          transform: skewX(-20deg);
        }
        & > a:nth-child(1) {
          padding: 13px 11px 13px 16px;
          border-radius: 0px 0px 10px 10px;
          background: var(--Basic-2, #59ba68);
        }
        & > a:nth-child(2) {
          padding: 15px 13px 15px 19px;
          border-radius: 0px 0px 10px 10px;
          background: #00a6ce;
        }
        & > a:nth-child(2):hover {
          background: #00a6ce;
          // box-shadow: 0 0 30px 5px #00a6ce;
          -webkit-transition: all 0.2s ease-out;
          -moz-transition: all 0.2s ease-out;
          transition: all 0.2s ease-out;
        }
      }
    }
  }
  .banner-template-btn {
    position: absolute;
    top: 0;
    right: 50px;
    display: flex;
    z-index: 9;

    & > a {
      display: flex;
      align-items: center;
      margin-right: 10px;
      text-decoration: none;
      & > div:nth-child(1) {
        display: flex;
        align-items: center;
        margin-right: 5px;
      }
      & > div:nth-child(2) {
        color: #fff;
        text-align: center;
        font-family: "Noto Sans HK";
        font-size: 12px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
      }
    }
    & > a:hover {
      box-shadow: 0 0 7.5px #00000040;
      transform: scale(1.1);
      transition: all 0.3s ease-in-out;
    }
    & > a:hover::before {
      -webkit-animation: sh02 0.5s 0s linear;
      -moz-animation: sh02 0.5s 0s linear;
      animation: sh02 0.5s 0s linear;
    }
    & > a:nth-child(1) {
      padding: 13px 11px 13px 16px;
      border-radius: 0px 0px 10px 10px;
      background: var(--Basic-2, #59ba68);
    }
    & > a:nth-child(2) {
      padding: 15px 13px 15px 19px;
      border-radius: 0px 0px 10px 10px;
      background: #00a6ce;
    }
  }
}
@media screen and (max-width: 767px) {
  .banner-template {
    margin-top: 65px;
    & > div:nth-child(1) {
      width: 100vw;
      & > img {
        width: 100%;
      }
    }
  }
  .banner-template-btn {
    display: none;
  }
}

@keyframes sh02 {
  from {
    opacity: 0;
    left: 0%;
  }

  50% {
    opacity: 1;
  }

  to {
    opacity: 0;
    left: 100%;
  }
}
</style>