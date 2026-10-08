<script lang="ts" setup>
const menuList = ref([
  {
    id: "1",
    title: "關於我們",
    isChildVisible: false,
    path: "/",
    childrenList: [
      {
        title: "公司簡介",
        path: "/about-us/cmer-vision",
        id: "1",
      },
      {
        title: "聯絡我們",
        path: "/about-us/contact-us",
        id: "2",
      },
      {
        title: "最新資訊",
        path: "/about-us/news-information",
        id: "3",
      },
    ],
  },
  {
    id: "7",
    title: "尊享優惠",
    path: "/new-discounts",
  },
  //   {
  //   id: "9",
  //   title: "ZEISS Vision Expert  ",
  //   path: "/zve",
  // },
  {
    id: "2",
    title: "兒童視力服務",
    isChildVisible: false,
    path: "/",
    childrenList: [
      {
        id: "1",
        title: "近視防控策略",
        path: "/myopia-control",
      },
      {
        id: "2",
        title: "角膜矯形鏡",
        path: "/orthokeratology",
      },
      {
        id: "3",
        title: "近視控制眼鏡",
        path: "/myopia-control-lenses",
        threeIsChildVisible: false,
        threeLevelList: [
          {
            id: "1",
            title: "ZEISS",
            path: "/myopia-control-lenses/zeiss-myovision-pro",
          },
          {
            id: "2",
            title: "HOYA",
            path: "/dims-soft-lens",
          },
        ],
      },
      {
        id: "4",
        title: "近視控制隱形眼鏡",
        path: "/child-myopia-control",
        threeLevelList: [
          {
            id: "1",
            title: "MiSight® 1 day隱形眼鏡",
            path: "/misight",
          },
              {
            id: "2",
            title: "Abiliti™ 1 day 隱形眼鏡",
            path: "/Acuvue-abiliti-1-day",
          },
        ],
      },
      {
        id: "5",
        title: "眼睛檢查",
        path: "/comprehensive/comprehensive-eye-examination/comprehensive-eye-examination-for-child",
      },

    ],
  },
  {
    id: "3",
    title: "成人視力服務",
    isChildVisible: false,
    path: "/",
    childrenList: [
      {
        id: "1",
        title: "眼睛檢查",
        path: "/comprehensive/comprehensive-eye-examination/comprehensive-eye-examination-for-adult",
      },
      {
        id: "2",
        title: "老花漸進鏡片",
        path: "/progressive-lens",
      },
      {
        id: "3",
        title: "軟性隱形眼鏡",
        path: "/soft-contact-lens",
      },
      {
        id: "4",
        title: "硬性隱形眼鏡",
        path: "/comprehensive/contact-lens-fitting/rgp",
      },
    ],
  },
  {
    id: "4",
    title: "專業服務",
    isChildVisible: false,
    path: "/",
    childrenList: [
      {
        id: "1",
        title: "服務内容",
        path: "/services",
      },
      //{
      //  id: "4",
      //  title: "人工智能健康篩查",
      //  path: "/services/ai-screening",
      //},
      {
        id: "2",
        title: "收費詳情",
        path: "/comprehensive/services-fees",
      },
      {
        id: "3",
        title: "長者醫療券計劃",
        path: "/services/health-care-voucher",
      },
    ],
  },
  {
    id: "5",
    title: "護眼資訊",
    path: "/",
    isChildVisible: false,
    childrenList: [
      {
        id: "1",
        title: "影片資訊",
        path: "/vision-news/eye-protection-classroom",
      },
      {
        id: "2",
        title: "常見眼睛問題",
        path: "/common-eye-diseases-in-adults",
      },
    ],
  },
  {
    id: "6",
    title: "聯絡我們",
    path: "/about-us/contact-us",
    child: "svg",
  },
]);

const isThreeLevel = (item: any) => {
  return item?.length > 0 ? true : false;
};
const childSvg = (item: any) => {
  return item.child == "svg" ? true : false;
};
import getWindowSize from "@/utils/width";
const isPc = ref(true);
const widthNum = ref();

onMounted(() => {
  let { widthState, width } = getWindowSize();
  window.addEventListener("resize", () => {
    let { widthState, width } = getWindowSize();
    isPc.value = widthState;
    widthNum.value = width;
  });
  isPc.value = widthState;
  widthNum.value = width;
});
const isShowChildList = ref(false);
const showChildMenu = (index: any) => {
  menuList.value.forEach((item: any, i: number) => {
    if (i === index) {
      menuList.value[index].isChildVisible =
        !menuList.value[index].isChildVisible;
    } else {
      item.isChildVisible = false;
    }
  });
};
const showThreeLevel = () => {
  isShowChildList.value = !isShowChildList.value;
};
</script>

<template>
  <div class="twoFooter">
    <div class="footer-menuList">
      <div v-for="(item, index) in menuList" :key="item.id">
        <nuxt-link
          @click="showChildMenu(index)"
          :to="item.path == '/' ? '' : item.path"
          :class="[item.isChildVisible ? `a-link-${item.id}` : '', 'a-link']"
          ><span>{{ item.title }}</span></nuxt-link
        >
        <div v-if="childSvg(item) && isPc">
          <div class="media">
            <a href="https://www.facebook.com/cmervision/?locale=zh_HK" target="_blank">
              <!-- prettier-ignore -->
              <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none"><path d="M26 13.583C26 6.08 20.18 0 13 0S0 6.081 0 13.583C0 20.362 4.754 25.98 10.969 27v-9.491H7.668v-3.927h3.3V10.59c0-3.404 1.942-5.284 4.911-5.284 1.422 0 2.91.265 2.91.265v3.343h-1.64c-1.614 0-2.118 1.047-2.118 2.122v2.547h3.606l-.577 3.926h-3.029V27C21.246 25.981 26 20.362 26 13.583" fill="#00a6ce"/></svg>
            </a>
            <a href="https://www.instagram.com/cmervision/" target="_blank">
              <!-- prettier-ignore -->
              <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 2.431c3.607 0 4.034.016 5.453.08 1.318.057 2.03.279 2.505.463a4.2 4.2 0 0 1 1.55 1.007c.475.475.765.923 1.007 1.55.185.475.406 1.193.464 2.506.064 1.424.08 1.85.08 5.452 0 3.607-.016 4.035-.08 5.453-.058 1.319-.28 2.03-.464 2.505a4.2 4.2 0 0 1-1.007 1.55 4.15 4.15 0 0 1-1.55 1.008c-.475.184-1.192.406-2.505.464-1.424.063-1.851.079-5.453.079-3.607 0-4.034-.016-5.453-.08-1.318-.057-2.03-.279-2.505-.463a4.2 4.2 0 0 1-1.55-1.008 4.15 4.15 0 0 1-1.007-1.55c-.185-.474-.406-1.192-.464-2.505-.064-1.424-.08-1.85-.08-5.453 0-3.607.016-4.034.08-5.452.058-1.319.28-2.03.464-2.505a4.2 4.2 0 0 1 1.007-1.55 4.15 4.15 0 0 1 1.55-1.008c.475-.184 1.192-.406 2.505-.464 1.419-.063 1.846-.079 5.453-.079M13.5 0C9.835 0 9.376.016 7.937.08 6.502.141 5.516.373 4.662.706a6.6 6.6 0 0 0-2.394 1.56 6.6 6.6 0 0 0-1.561 2.39C.374 5.515.142 6.496.079 7.93.016 9.376 0 9.835 0 13.5s.016 4.124.08 5.564c.062 1.434.294 2.42.627 3.274a6.6 6.6 0 0 0 1.56 2.394 6.6 6.6 0 0 0 2.39 1.556c.859.332 1.84.564 3.274.628 1.44.063 1.899.079 5.564.079s4.124-.016 5.563-.08c1.435-.063 2.42-.295 3.275-.627a6.6 6.6 0 0 0 2.389-1.556 6.6 6.6 0 0 0 1.555-2.388c.333-.86.565-1.84.628-3.275.063-1.44.08-1.899.08-5.564s-.017-4.124-.08-5.563c-.063-1.435-.295-2.42-.628-3.275a6.3 6.3 0 0 0-1.545-2.4A6.6 6.6 0 0 0 22.344.713c-.86-.332-1.84-.564-3.275-.628C17.624.016 17.165 0 13.5 0" fill="#00a6ce"/><path d="M13.497 6.565A6.936 6.936 0 0 0 6.563 13.5a6.936 6.936 0 0 0 6.934 6.935 6.936 6.936 0 0 0 6.935-6.935 6.936 6.936 0 0 0-6.935-6.935m0 11.433A4.499 4.499 0 1 1 13.498 9a4.499 4.499 0 0 1 0 8.998m8.834-11.707a1.62 1.62 0 1 1-3.239 0 1.62 1.62 0 0 1 3.239 0" fill="#00a6ce"/></svg>
            </a>
            <a
              href="https://www.youtube.com/@cmersmileeyecenter6303"
              target="_blank"
            >
              <!-- prettier-ignore -->
              <svg width="27" height="21" viewBox="0 0 27 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M24.64 2.438c.403.422.693.946.84 1.52.543 2.12.543 6.542.543 6.542s0 4.42-.543 6.541a3.4 3.4 0 0 1-.84 1.52 3.24 3.24 0 0 1-1.459.882c-2.033.568-10.158.568-10.158.568s-8.125 0-10.157-.568a3.24 3.24 0 0 1-1.459-.882 3.4 3.4 0 0 1-.84-1.52C.023 14.921.023 10.5.023 10.5s0-4.422.544-6.542a3.4 3.4 0 0 1 .84-1.52 3.24 3.24 0 0 1 1.459-.882C4.898.988 13.023.988 13.023.988s8.125 0 10.158.568c.552.156 1.055.46 1.459.882M17.163 10.5l-6.796-4.015v8.03z" fill="#00a6ce"/></svg>
            </a>
          </div>
        </div>
        <div
          v-if="!isPc && !childSvg(item) && item.isChildVisible"
          class="child-list"
        >
          <div
            v-for="child in item.childrenList"
            :key="child.id"
            :class="[isThreeLevel(child.threeLevelList) ? 'threeLevel' : '']"
            @click="isThreeLevel(child.threeLevelList) ? showThreeLevel() : ''"
          >
            <nuxt-link :to="child.path" class="a-child"
              ><span>{{ child.title }} </span></nuxt-link
            >
            <div v-if="isShowChildList" class="threeLevel-child">
              <div v-for="ele in child.threeLevelList" :key="ele.id">
                <nuxt-link :to="ele.path"
                  ><span>{{ ele.title }}</span></nuxt-link
                >
              </div>
            </div>
          </div>
        </div>
        <div v-if="isPc && !childSvg(item)">
          <div
            v-for="child in item.childrenList"
            :key="child.id"
            :class="[isThreeLevel(child.threeLevelList) ? 'threeLevel' : '']"
          >
            <nuxt-link :to="child.path"
              ><span>{{ child.title }} </span></nuxt-link
            >
            <div class="threeLevel-child">
              <div v-for="ele in child.threeLevelList" :key="ele.id">
                <nuxt-link :to="ele.path"
                  ><span>{{ ele.title }}</span></nuxt-link
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div>©{{ new Date().getFullYear() }} 希瑪眼科視光中心</div>
      <nuxt-link to="/">版權所有</nuxt-link>|
      <nuxt-link to="/">私隱政策</nuxt-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@media screen and (min-width: 768px) {
  a {
    text-decoration: none;
  }
  .twoFooter {
    font-family: "Noto Sans HK";
    margin-top: 80px;
    display: flex;
    flex-direction: column;
    & > div:nth-child(1) {
      display: flex;
      justify-content: space-between;
      & > div {
        & > a:nth-child(1) {
          color: #00a6ce;
          font-family: "Noto Sans CJK TC";
          font-size: clamp(16px, 1.04vw, 24px);
          font-style: normal;
          font-weight: 700;
          line-height: normal;
          letter-spacing: 2.4px;
          margin-bottom: 10px;
          display: block;
        }
        & > div:nth-child(2) {
          & > div {
            & > a {
              color: #666;
              font-family: "Noto Sans HK";
              font-size: clamp(16px, 0.83vw, 20px);
              font-style: normal;
              font-weight: 400;
              line-height: 43.5px;
            }
          }
        }
      }
    }
    & > div:nth-child(2) {
      margin-top: 30px;
      display: flex;
      justify-content: center;
      color: var(--Deep-Blue, #3e5270);
      font-family: "Noto Sans HK";
      font-size: 16px;
      font-style: normal;
      font-weight: 700;
      line-height: 30px; /* 187.5% */
      text-transform: uppercase;
      & > a {
        margin: 0 10px;
        color: var(--Deep-Blue, #3e5270);
        font-family: "Noto Sans HK";
      }
    }
  }
  .threeLevel:hover {
    .threeLevel-child {
      display: flex;
      flex-direction: column;
    }
  }
  .threeLevel-child {
    display: none;
    & > div {
      margin-left: 20px;
      position: relative;
      & > a {
        color: #3e5270;
        font-family: "Noto Sans HK";
        font-size: clamp(16px, 0.83vw, 20px);
        font-style: normal;
        font-weight: 500;
        line-height: 43.5px;
      }
    }
    & > div::before {
      position: absolute;
      top: 16px;
      left: -18px;
      content: "";
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: #3e5270;
    }
  }
  .media {
    display: flex;
    align-items: center;
    & > a {
      display: flex;
      align-items: center;
    }
    & > a:nth-child(2) {
      margin: 0 15px;
    }
  }
  .threeLevel {
    position: relative;
    width: fit-content;
    & > a::after {
      content: "";
      position: absolute;
      background: url("https://statichk.cmermedical.com/vision/imgs/6f68e977441f318c.png");
      width: 16px;
      height: 8px;
      top: 18px;
      right: -20px;
      transition: all 0.3s ease-in-out;
    }
  }
  .threeLevel:hover {
    width: fit-content;
    a::after {
      background: url(https://statichk.cmermedical.com/vision/imgs/e7f6cda30324f416.png);
      transform: rotate(180deg) translateX(-50%);
      width: 16px;
      height: 8px;
      top: 18px;
      right: -10px;
    }
  }
  .threeLevel-child {
    width: fit-content;
    & > div:hover:before {
      background: #00a6ce;
    }
    a:hover {
      color: #00a6ce;
    }
  }
}
@media screen and (max-width: 767px) {
  a {
    text-decoration: none;
  }
  .twoFooter {
    & > div:nth-child(2) {
      display: flex;
      justify-content: center;
      color: var(--Grey, #4d4d4d);
      font-family: "Noto Sans CJK TC";
      font-size: 3.5vw;
      font-style: normal;
      font-weight: 400;
      line-height: 7.6vw;
      & > a {
        color: var(--Grey, #4d4d4d);
        margin: 0 2.5vw;
      }
    }
  }
  .footer-menuList {
    margin-top: 10.25vw;
    margin-bottom: 3.07vw;

    & > div {
      & > a {
        display: flex;
        width: 100%;
        color: #00a6ce;
        font-family: "ABeeZee";
        font-size: 20px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        letter-spacing: 2px;
        position: relative;
      }
      & > .a-link::after {
        content: "";
        background: url("https://statichk.cmermedical.com/vision/imgs/afcc2515ac219afd.png")
          no-repeat;
        width: 7px;
        height: 14px;
        position: absolute;
        right: 0;
        top: 3.5px;
      }

      & > .a-link-1::after {
        content: "";
        background: url("https://statichk.cmermedical.com/vision/imgs/d8b915b502a6c1cd.png")
          no-repeat;
        width: 14px;
        height: 7px;
        transition: all 0.3s;
        right: -3.5px;
      }
      & > .a-link-2::after {
        content: "";
        background: url("https://statichk.cmermedical.com/vision/imgs/d8b915b502a6c1cd.png")
          no-repeat;
        width: 14px;
        height: 7px;
        transition: all 0.3s;
        right: -3.5px;
      }
      & > .a-link-3::after {
        content: "";
        background: url("https://statichk.cmermedical.com/vision/imgs/d8b915b502a6c1cd.png")
          no-repeat;
        width: 14px;
        height: 7px;
        transition: all 0.3s;
        right: -3.5px;
      }
      & > .a-link-4::after {
        content: "";
        background: url("https://statichk.cmermedical.com/vision/imgs/d8b915b502a6c1cd.png")
          no-repeat;
        width: 14px;
        height: 7px;
        right: -3.5px;
        transition: all 0.3s;
      }
      & > .a-link-5::after {
        content: "";
        background: url("https://statichk.cmermedical.com/vision/imgs/d8b915b502a6c1cd.png")
          no-repeat;
        width: 14px;
        height: 7px;
        transition: all 0.3s;
        right: -3.5px;
      }
      border-bottom: 1px dashed #4d4d4d;
      padding: 12px 26px 12px 22px;
    }
    & > div:nth-child(2) {
      & > .a-link:after {
        display: none;
      }
    }
    & > div:last-child {
      & > a::after {
        content: none;
      }
    }
  }
  .son-item {
    display: none;
  }
  .son-item-1 {
    display: flex;
    flex-direction: column;
  }
  .child-list {
    padding: 5px 0 10px 0;
    & > div {
      & > a {
        width: 100%;
        display: block;
        color: var(--Grey, #4d4d4d);
        font-family: "Noto Sans CJK TC";
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 30px;
      }
    }
  }
  .threeLevel-child {
    & > div {
      & > a {
        width: 100%;
        display: block;

        color: #3e5270;
        font-family: "Noto Sans CJK TC";
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 30px;
        margin-left: 10px;
        position: relative;
        & > span::before {
          content: "";
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background-color: #3e5270;
          display: inline-block;
          position: absolute;
          left: -10px;
          top: 13px;
        }
      }
    }
  }
}
</style>