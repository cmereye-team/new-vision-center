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
    <div>
      <img v-if="isPc" :src="banner.pc" />
      <img v-else :src="props.banner.mobile" :alt="props.banner.alt || ''" />
    </div>
    <div>
      <slot name="title"> </slot>
    </div>
    <div class="public-header-bottom-menu">
      <div class="banner-template-btn">
        <a
          href="https://api.whatsapp.com/send?phone=85269180511&text=%E4%BD%A0%E5%A5%BD,%E6%88%91%E6%83%B3%E6%9F%A5%E8%A9%A2"
          target="_blank"
        >
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
            >
              <path
                d="M18.3451 14.8237C18.0287 14.6757 16.453 13.9724 16.1599 13.8772C15.8668 13.7767 15.652 13.7291 15.4402 14.0252C15.2254 14.3187 14.616 14.9718 14.4245 15.1701C14.2388 15.3658 14.0501 15.3896 13.7338 15.2441C11.8533 14.3875 10.62 13.7159 9.38082 11.7778C9.05289 11.2622 9.70874 11.2992 10.3211 10.1861C10.4255 9.99042 10.3733 9.82385 10.292 9.67578C10.2108 9.52771 9.57235 8.09464 9.30537 7.5103C9.04709 6.94183 8.78011 7.02115 8.58567 7.01058C8.39995 7 8.1881 7 7.97335 7C7.75861 7 7.41327 7.07403 7.12017 7.36224C6.82707 7.65572 6 8.36169 6 9.79476C6 11.2278 7.14629 12.616 7.30299 12.8116C7.46551 13.0073 9.55784 15.9475 12.7703 17.214C14.8017 18.0125 15.5969 18.0812 16.6126 17.9437C17.2307 17.8591 18.5047 17.2404 18.7688 16.5556C19.0328 15.8734 19.0328 15.2891 18.9545 15.1675C18.8761 15.0379 18.6614 14.9639 18.3451 14.8237Z"
                fill="white"
              />
              <path
                d="M24.0292 7.65625C23.3986 6.15792 22.4946 4.81306 21.3423 3.65792C20.19 2.50558 18.8451 1.59877 17.344 0.970982C15.8095 0.326451 14.18 0 12.5003 0H12.4445C10.7537 0.00837054 9.1159 0.343192 7.57574 1.00167C6.08859 1.63783 4.7549 2.54185 3.61373 3.6942C2.47256 4.84654 1.57693 6.18583 0.957514 7.67857C0.315432 9.22433 -0.00787599 10.8677 0.000145679 12.5586C0.00851611 14.495 0.47168 16.4174 1.33942 18.1362V22.3772C1.33942 23.0859 1.91418 23.6607 2.62288 23.6607H6.86669C8.58542 24.5285 10.5078 24.9916 12.4442 25H12.5028C14.1741 25 15.7952 24.6763 17.3214 24.043C18.8141 23.4208 20.1562 22.5279 21.3057 21.3867C22.458 20.2455 23.3648 18.9118 23.9982 17.4247C24.6567 15.8845 24.9915 14.2467 24.9998 12.5558C25.0082 10.8566 24.679 9.20759 24.0289 7.65625H24.0292ZM19.8133 19.8772C17.8574 21.8136 15.2626 22.8795 12.5003 22.8795H12.4529C10.7705 22.8711 9.09916 22.4526 7.62317 21.6657L7.3888 21.5402H3.45993V17.6116L3.33437 17.3772C2.54755 15.9012 2.12903 14.2299 2.12066 12.5474C2.1095 9.76563 3.17254 7.15402 5.12285 5.18694C7.07037 3.21987 9.67358 2.1317 12.4554 2.12054H12.5028C13.8979 2.12054 15.2511 2.39118 16.5262 2.9269C17.7706 3.44866 18.8866 4.19922 19.8464 5.15904C20.8035 6.11607 21.5568 7.23493 22.0786 8.47935C22.6199 9.76842 22.8905 11.1356 22.8849 12.5474C22.8682 15.3265 21.7772 17.9297 19.813 19.8772H19.8133Z"
                fill="white"
              />
            </svg>
          </div>
          <div>WhatsApp：6918 0511</div>
        </a>
        <a href="tel: +85238925089" target="_blank">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M19.6098 15.8581L15.4599 11.7081C14.9384 11.1882 14.0947 11.1882 13.5736 11.7081L12.6304 12.6513C12.0968 13.1849 10.3693 12.6538 8.85781 11.1423C7.34633 9.63079 6.81426 7.90389 7.34883 7.36963L8.29198 6.42647C8.81185 5.90502 8.81185 5.06127 8.29198 4.54014L4.14205 0.390146C3.62093 -0.130049 2.77719 -0.130049 2.25575 0.390146L1.3126 1.33331C0.615791 2.03013 0.191577 2.94673 0.0509013 4.05808C-0.0794579 5.08878 0.0408977 6.24421 0.408217 7.49249C1.14504 9.99999 2.80658 12.6366 5.08552 14.9146C7.36446 17.193 10.0001 18.8552 12.5069 19.592C13.4304 19.8637 14.3029 20 15.1116 20C15.3892 20.0006 15.6668 19.9834 15.9422 19.949C17.0532 19.8083 17.9698 19.3838 18.6669 18.687L19.6101 17.7438C20.13 17.2224 20.13 16.3789 19.6101 15.8575L19.6098 15.8581Z"
                fill="white"
              />
            </svg>
          </div>
          <div>電話預約：3892 5089</div>
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@media screen and (min-width: 768px) and (max-width: 1620px) {
  .banner-template {
    position: relative;
    & > div:nth-child(1) {
      // max-width: 1920px;
      margin: 7.083vw auto 0;
      // margin-top: 136px;
      img {
        width: 100%;
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
      top: 8.183vw;
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
            font-family: "Inter";
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
        & > a:hover {
          background: rgb(61, 106, 255);
          box-shadow: 0 0 30px 5px rgba(0, 142, 236, 0.815);
          -webkit-transition: all 0.2s ease-out;
          -moz-transition: all 0.2s ease-out;
          transition: all 0.2s ease-out;
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
        font-family: "Inter";
        font-size: 12px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
      }
    }
    // & > a:hover {
    //   box-shadow: 0 0 7.5px #00000040;
    //   transform: scale(1.1);
    //   transition: all 0.3s ease-in-out;
    // }
    & > a:hover {
      background: rgb(61, 106, 255);
      box-shadow: 0 0 30px 5px rgba(0, 142, 236, 0.815);
      -webkit-transition: all 0.2s ease-out;
      -moz-transition: all 0.2s ease-out;
      transition: all 0.2s ease-out;
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
@media screen and (min-width: 1621px) {
  .banner-template {
    position: relative;
    & > div:nth-child(1) {
      // max-width: 1920px;
      margin: 136px auto 0;
      // margin-top: 136px;
      img {
        width: 100%;
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
            font-family: "Inter";
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
          box-shadow: 0 0 30px 5px #59ba68;
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
          box-shadow: 0 0 30px 5px #00a6ce;
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
        font-family: "Inter";
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
    margin-top: 75px;
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