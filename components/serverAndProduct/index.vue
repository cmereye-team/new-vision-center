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
      <div>
        <img :src="item.img" alt="" />
      </div>
      <div>
        <span v-for="(el, index) in item.title" :key="index">{{ el }}</span>
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
              >{{ element }}</span
            >
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
  .product-list-box {
    cursor: pointer;
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
        width: 119px;
        height: 119px;
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
}
@media screen and (max-width: 767px) {
  .product-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-content: space-between;
    gap: 30px 12px;
  }
  .product-list-box {
    cursor: pointer;
    & > div:nth-child(1) {
      border-radius: 10px;
      background: var(--Skin, #eafbff);
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
      width: 105px;
      height: 105px;
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
    grid-column: span 3;
    & > div {
      width: 100% !important;
      height: auto !important;
      position: relative;
      border-radius: 8.023px;
      background: var(--Skin, #eafbff);
      box-shadow: 0px 0px 3.263px 0px rgba(0, 0, 0, 0.25);
      min-height: 166px;
      display: flex;
      align-items: flex-start !important;
      gap: 0 12px;
      box-sizing: border-box;
      padding: 14px 13px 20px;
      & > div:nth-child(1) {
        width: 97.876px;
        height: 97.876px;
        min-width: 97.876px;
        & > img {
          width: 100%;
          height: 100%;
        }
      }
      & > div:nth-child(2) {
        & > div:nth-child(1) {
          color: var(--Deep-Blue, #3e5270);
          font-family: "Noto Sans HK";
          font-size: 14px;
          font-style: normal;
          font-weight: 700;
          line-height: 14.681px; /* 104.868% */
          letter-spacing: 0.7px;
          margin-bottom: 10px;
        }
        & > div:nth-child(2) {
          color: #60605f;
          font-family: "Noto Sans HK";
          font-size: 12px;
          font-style: normal;
          font-weight: 500;
          line-height: 14px; /* 116.667% */
          letter-spacing: 0.6px;
        }
      }
      & > div:nth-child(3) {
        position: absolute;
        right: 10px;
        top: 6px;
        cursor: pointer;
        box-shadow: 0px 0px 7.5px 0px rgba(0, 0, 0, 0.25);
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
        box-shadow: 0px 0px 7.5px 0px rgba(0, 0, 0, 0.25);
      }
    }
  }
}
</style>