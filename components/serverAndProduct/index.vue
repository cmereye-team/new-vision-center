<script lang="ts" setup>
import getWindowSize from "@/utils/width";
let cur: any = ref("0");
const handleccc = (idx: any) => {
  cur.value = idx;
  updateContextOrderBasedOnCurValue();
};
const handleResize = () => {
  const { widthState } = getWindowSize();
  isPc.value = widthState;
  contextOrder.value = isPc.value ? 5 : 3;
};

onMounted(() => {
  handleResize();
  window.addEventListener("resize", handleResize);
  handleccc(0);
});

const contextOrder = ref(5);
let isPc = ref(false);
const updateContextOrderBasedOnCurValue = () => {
  const curV = Number(cur.value);
  if (isPc.value) {
    if (curV < 5) {
      contextOrder.value = 5;
    } else if (curV <= 9) {
      contextOrder.value = 10;
    } else {
      contextOrder.value = 14;
    }
  } else {
    if (curV < 3) {
      contextOrder.value = 3;
    } else if (curV <= 5) {
      contextOrder.value = 6;
    } else if (curV <= 8) {
      contextOrder.value = 9;
    } else if (curV <= 11) {
      contextOrder.value = 12;
    } else {
      contextOrder.value = 14;
    }
  }
};
interface Items {
  img: string;
  title: string[];
}
interface DetailList {
  img: string;
  title: string;
  description: Object;
}
const props = defineProps({
  allData: {
    type: Array<Items>,
    default: () => {},
  },
  detailList: {
    type: Array<DetailList>,
    default: () => {},
  },
});
</script>

<template>
  <div class="product-list">
    <div
      class="product-list-box"
      v-for="(item, index) in props.allData"
      :style="{ order: index + 1 }"
      :key="index"
      @click="handleccc(index)"
    >
      <div :class="[cur === index ? 'active' : '']">
        <img :src="item.img" alt="" />
      </div>
      <div>
        <span v-for="(el, index) in item.title" :key="index">
          <span v-if="el == '•'" class="origin">•</span>
          {{ el }}</span
        >
      </div>
    </div>
    <div
      class="product-list-box context"
      v-if="cur !== ''"
      :style="{ order: contextOrder }"
      @click="cur = ''"
    >
      <div>
        <div><img :src="props.detailList[cur].img" alt="" /></div>
        <div>
          <div>{{ props.detailList[cur].title }}</div>
          <div>
            <span
              v-for="(element, index) in props.detailList[cur].description"
              :key="index"
              :class="element == '' ? 'kong' : ''"
              v-html="element"
            >
            </span>
          </div>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="37"
            height="37"
            viewBox="0 0 37 37"
            fill="none"
          >
            <circle cx="18.5" cy="18.5" r="18.5" fill="#00A6CE" />
            <path
              d="M11.2109 12.3359L25.7867 27.4723"
              stroke="white"
              stroke-width="2.24242"
              stroke-linecap="round"
            />
            <path
              d="M25.7891 12.3359L11.2133 27.4723"
              stroke="white"
              stroke-width="2.24242"
              stroke-linecap="round"
            />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@media screen and (min-width: 768px) {
  .product-list {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    justify-content: space-between;
    gap: 20px 32px;
    padding: 0 90px;
  }
  .product-list-box:nth-last-child(2)::after {
    content: "";
    position: absolute;
    background: url(https://statichk.cmermedical.com/hkcmereye/LAL/iconNew.svg)
      no-repeat;
    width: 50px;
    height: 20px;
    right: -15%;
    top: 10%;
    background-size: cover;
  }
  .product-list-box {
    cursor: pointer;
    position: relative;
    & > div:nth-child(1) {
      border-radius: 18.443px;
      background: var(--Skin, #eafbff);
      box-shadow: 0px 0px 7.5px 0px rgba(0, 0, 0, 0.25);
      width: 130.081px;
      height: 130.081px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    & > div:nth-child(2) {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 13px;
      color: #60605f;
      text-align: center;
      font-family: "Noto Sans HK";
      font-size: 16.5px;
      font-style: normal;
      font-weight: 500;
      line-height: 22.5px; /* 136.364% */
      letter-spacing: 0.825px;
    }
  }
  .context {
    grid-column: span 5;
    & > div {
      width: 100% !important;
      position: relative;
      border-radius: 18.443px;
      background: var(--Skin, #eafbff);
      box-shadow: 0px 0px 7.5px 0px rgba(0, 0, 0, 0.25);
      min-height: 300px;
      height: auto !important;
      display: flex;
      align-items: flex-start !important;
      gap: 0 36px;
      box-sizing: border-box;
      padding: 28px 22px 30px;
      & > div:nth-child(1) {
        width: 225px;
        height: 225px;
        display: flex;
        justify-content: center;
        align-items: center;
        & > img {
          width: 100%;
          height: 100%;
        }
      }
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
          display: flex;
          flex-direction: column;
          color: #60605f;
          font-family: "Noto Sans HK";
          font-size: 16.5px;
          font-style: normal;
          font-weight: 500;
          line-height: 26px; /* 157.576% */
          letter-spacing: 0.825px;
          & > span {
            min-height: 26px;
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
  .active {
    background: linear-gradient(
        0deg,
        rgba(0, 100, 255, 0.1) 0%,
        rgba(0, 100, 255, 0.1) 100%
      ),
      var(--Skin, #eafbff) !important;
  }
}
@media screen and (max-width: 767px) {
  .product-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    // justify-content: space-between;
    justify-content: flex-start;
    gap: 7.69vw 3.07vw;
  }

  .product-list-box {
    cursor: pointer;

    & > div:nth-child(1) {
      border-radius: 2.564vw;
      background: var(--Skin, #eafbff);
      box-shadow: 0px 0.5128vw 1.025vw rgba(0, 0, 0, 0.25);
      width: 26.923vw;
      height: 26.923vw;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    & > div:nth-child(2) {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 3.33vw;
      color: #60605f;
      text-align: center;
      font-family: "Noto Sans HK";
      font-size: clamp(12px, 3.5vw, 15px);
      font-style: normal;
      font-weight: 500;
      line-height: 5.768vw;
      /* 136.364% */
      letter-spacing: 0.825px;
    }
  }

  .context {
    grid-column: span 3;

    & > div {
      width: 100% !important;
      height: auto !important;
      position: relative;
      border-radius: 2.05vw;
      background: var(--Skin, #eafbff);
      box-shadow: 0px 0px 0.85vw 0px rgba(0, 0, 0, 0.25);
      min-height: 146px;
      display: flex;
      align-items: flex-start !important;
      gap: 0 3.07vw;
      box-sizing: border-box;
      padding: 3.589vw 3.33vw 5.128vw;

      & > div:nth-child(1) {
        width: 25.0965vw;
        height: 25.0965vw;
        min-width: 25.0965vw;

        & > img {
          width: 100%;
          height: 100%;
        }
      }

      & > div:nth-child(2) {
        & > div:nth-child(1) {
          color: var(--Deep-Blue, #3e5270);
          font-family: "Noto Sans HK";
          font-size: 3.589vw;
          font-style: normal;
          font-weight: 700;
          line-height: 3.765vw;
          /* 104.868% */
          letter-spacing: 0.7px;
          margin-bottom: 2.564vw;
        }

        & > div:nth-child(2) {
          color: #60605f;
          font-family: "Noto Sans HK";
          font-size: 3.07vw;
          font-style: normal;
          font-weight: 500;
          line-height: 3.589vw;
          /* 116.667% */
          letter-spacing: 0.1538vw;
          text-indent: 2.564vw;

          & > .kong {
            display: block;
            min-height: 2.564vw;
          }
        }
      }

      & > div:nth-child(3) {
        position: absolute;
        right: 2.564vw;
        top: 1.538vw;
        cursor: pointer;
        box-shadow: 0px 0px 1.923vw 0px rgba(0, 0, 0, 0.25);
        border-radius: 50%;
        width: 16px;
        height: 16px;

        & > svg {
          width: 100%;
          height: 100%;
        }
      }

      & > div:nth-child(3):hover {
        transform: scale(1.1);
        transition: all 0.3s ease;
        box-shadow: 0px 0px 1.923vw 0px rgba(0, 0, 0, 0.25);
      }
    }
  }

  .active {
    background: linear-gradient(
        0deg,
        rgba(0, 100, 255, 0.1) 0%,
        rgba(0, 100, 255, 0.1) 100%
      ),
      var(--Skin, #eafbff) !important;
  }
}
</style>