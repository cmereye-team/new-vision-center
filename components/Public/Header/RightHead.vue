<script lang="ts" setup>
definePageMeta({
  middleware: "redirect",
});
import { Search } from "@element-plus/icons-vue";
import getWindowSize from "@/utils/width";
const isPc = ref(true);

const input2 = ref("");
const options = [
  {
    value: "hk",
    label: "HK",
  },
  {
    value: "cn",
    label: "CN",
  },
  {
    value: "en",
    label: "EN",
  },
];
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
    id: "6",
    title: "尊享優惠",
    child: "svg",
    path: "/new-discounts",
  },
  {
    id: "9",
    title: "ZEISS Vision Expert",
    child: "svg",
    path: "/zve",
  },
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
        threeIsChildVisible: false,
        threeLevelList: [
          {
            id: "1",
            title: "MiSight®1 Day 隱形眼鏡",
            path: "/misight",
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
        title: "日常護眼",
        path: "/vision-news/daily-eye-care",
      },
      {
        id: "3",
        title: "常見眼睛問題",
        path: "/",
        threeIsChildVisible: false,
        threeLevelList: [
          {
            id: "1",
            title: "兒童常見眼睛問題",
            path: "/common-pediatric-eye-problems",
          },
          {
            id: "2",
            title: "成人常見眼睛問題",
            path: "/common-eye-diseases-in-adults",
          },
        ],
      },
    ],
  },
]);

const isThreeLevel = (item: any) => {
  item = item.childrenList;
  return item?.length > 0 ? true : false;
};

onMounted(() => {
  let { widthState, width } = getWindowSize();
  window.addEventListener("resize", () => {
    let { widthState, width } = getWindowSize();
    isPc.value = widthState;
  });
  isPc.value = widthState;
  if (isPc) {
    menuListThisPc();
    showThreeLevel();
  }
});

const menuListThisPc = () => {
  menuList.value.forEach((item: any) => {
    item.isChildVisible = isPc ? true : false;
  });
};

const isShowChildList = ref(false);
const showThreeLevel = () => {
  isShowChildList.value = !isShowChildList.value;
};

const emit = defineEmits(["getValue"]);
// 传递菜单展开状态
const pathIsTrue = () => {
  emit("getValue", "");
};

const showChildMenu = (index: any) => {
  console.log("showChildMenu");
  menuList.value.forEach((item: any, i: number) => {
    if (i === index) {
      menuList.value[index].isChildVisible = !menuList.value[index].isChildVisible;
    } else {
      item.isChildVisible = false;
    }
  });
};
// 获取路由
const route = useRoute();
const router = useRouter();
const mbToLink = (item: any) => {
  console.log("mbToLink");
  router.push({
    path: item.path,
    query: {
      ...route.query,
    },
  });
  pathIsTrue();
};

const headLink = (index: number, item: any) => {
  if (item.path == "/" && !isPc) {
    showChildMenu(index);
  } else if (item.path == "/" && isPc) {
    // console.log('pc')
  } else {
    mbToLink(item);
  }
};

const language = ref("hk");
const getValue = (str: string) => {
  console.log(str, "item");
  language.value = str;
};

const checkLanguage = ref(false);
const handleMouseenter = () => {
  checkLanguage.value = true;
};
const handleMouseleave = () => {
  checkLanguage.value = false;
};
</script>

<template>
  <div class="right-head">
    <div class="menu">
      <div
        v-for="(item, index) in menuList"
        :key="item.id"
        class="fa-path"
        :class="[`fa-${index + 1}`, (item.childrenList ?? []).length > 0 ? 'isChildNode' : 'noNodeChild']"
      >
        <nuxt-link
          @click="item.path == '/' ? headLink(index, item) : mbToLink(item)"
          :to="item.path"
          :class="[item.isChildVisible ? `a-link-${item.id}` : '', 'a-link']"
        >
          {{ item.title }}
        </nuxt-link>
        <transition name="fade">
          <div v-if="item.isChildVisible" class="sub-menu">
            <div
              v-for="(child, childIndex) in item.childrenList"
              :key="child.id"
              class="son-menu"
              @click="isThreeLevel(child) ? showThreeLevel() : pathIsTrue()"
              :class="[child.path === '/services/ai-screening' ? 'is_ai_screening' : '']"
            >
              <nuxt-link :to="child.path == '/' ? '' : child.path">
                <span :class="[child.path === '/services/ai-screening' ? 'ai_screening_title' : '']">
                  {{ child.title }}
                </span>
              </nuxt-link>
              <div v-if="isShowChildList" :class="`three-level-${childIndex}`">
                <div v-for="threeLevel in child.threeLevelList" :key="threeLevel.id">
                  <nuxt-link :to="threeLevel.path == '/' ? '#' : threeLevel.path">
                    <span>{{ threeLevel.title }}</span>
                  </nuxt-link>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </div>
    <div class="media">
      <div>
        <a target="_blank" href="https://www.facebook.com/cmervision/">
          <!-- prettier-ignore -->
          <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none"><path d="M26 13.583C26 6.08 20.18 0 13 0S0 6.081 0 13.583C0 20.362 4.754 25.98 10.969 27v-9.491H7.668v-3.927h3.3V10.59c0-3.404 1.942-5.284 4.911-5.284 1.422 0 2.91.265 2.91.265v3.343h-1.64c-1.614 0-2.118 1.047-2.118 2.122v2.547h3.606l-.577 3.926h-3.029V27C21.246 25.981 26 20.362 26 13.583" fill="#00a6ce"/></svg>
        </a>
        <a target="_blank" href="https://www.instagram.com/cmervision/">
          <!-- prettier-ignore -->
          <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 2.431c3.607 0 4.034.016 5.453.08 1.318.057 2.03.279 2.505.463a4.2 4.2 0 0 1 1.55 1.007c.475.475.765.923 1.007 1.55.185.475.406 1.193.464 2.506.064 1.424.08 1.85.08 5.452 0 3.607-.016 4.035-.08 5.453-.058 1.319-.28 2.03-.464 2.505a4.2 4.2 0 0 1-1.007 1.55 4.15 4.15 0 0 1-1.55 1.008c-.475.184-1.192.406-2.505.464-1.424.063-1.851.079-5.453.079-3.607 0-4.034-.016-5.453-.08-1.318-.057-2.03-.279-2.505-.463a4.2 4.2 0 0 1-1.55-1.008 4.15 4.15 0 0 1-1.007-1.55c-.185-.474-.406-1.192-.464-2.505-.064-1.424-.08-1.85-.08-5.453 0-3.607.016-4.034.08-5.452.058-1.319.28-2.03.464-2.505a4.2 4.2 0 0 1 1.007-1.55 4.15 4.15 0 0 1 1.55-1.008c.475-.184 1.192-.406 2.505-.464 1.419-.063 1.846-.079 5.453-.079M13.5 0C9.835 0 9.376.016 7.937.08 6.502.141 5.516.373 4.662.706a6.6 6.6 0 0 0-2.394 1.56 6.6 6.6 0 0 0-1.561 2.39C.374 5.515.142 6.496.079 7.93.016 9.376 0 9.835 0 13.5s.016 4.124.08 5.564c.062 1.434.294 2.42.627 3.274a6.6 6.6 0 0 0 1.56 2.394 6.6 6.6 0 0 0 2.39 1.556c.859.332 1.84.564 3.274.628 1.44.063 1.899.079 5.564.079s4.124-.016 5.563-.08c1.435-.063 2.42-.295 3.275-.627a6.6 6.6 0 0 0 2.389-1.556 6.6 6.6 0 0 0 1.555-2.388c.333-.86.565-1.84.628-3.275.063-1.44.08-1.899.08-5.564s-.017-4.124-.08-5.563c-.063-1.435-.295-2.42-.628-3.275a6.3 6.3 0 0 0-1.545-2.4A6.6 6.6 0 0 0 22.344.713c-.86-.332-1.84-.564-3.275-.628C17.624.016 17.165 0 13.5 0" fill="#00a6ce"/><path d="M13.497 6.565A6.936 6.936 0 0 0 6.563 13.5a6.936 6.936 0 0 0 6.934 6.935 6.936 6.936 0 0 0 6.935-6.935 6.936 6.936 0 0 0-6.935-6.935m0 11.433A4.499 4.499 0 1 1 13.498 9a4.499 4.499 0 0 1 0 8.998m8.834-11.707a1.62 1.62 0 1 1-3.239 0 1.62 1.62 0 0 1 3.239 0" fill="#00a6ce"/></svg>
        </a>
        <a target="_blank" href="https://www.youtube.com/@cmersmileeyecenter6303">
          <!-- prettier-ignore -->
          <svg width="27" height="21" viewBox="0 0 27 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M24.64 2.438c.403.422.693.946.84 1.52.543 2.12.543 6.542.543 6.542s0 4.42-.543 6.541a3.4 3.4 0 0 1-.84 1.52 3.24 3.24 0 0 1-1.459.882c-2.033.568-10.158.568-10.158.568s-8.125 0-10.157-.568a3.24 3.24 0 0 1-1.459-.882 3.4 3.4 0 0 1-.84-1.52C.023 14.921.023 10.5.023 10.5s0-4.422.544-6.542a3.4 3.4 0 0 1 .84-1.52 3.24 3.24 0 0 1 1.459-.882C4.898.988 13.023.988 13.023.988s8.125 0 10.158.568c.552.156 1.055.46 1.459.882M17.163 10.5l-6.796-4.015v8.03z" fill="#00a6ce"/></svg>
        </a>
      </div>
      <div>條款細則</div>
    </div>
    <div class="search" style="display: none">
      <el-input v-model="input2" placeholder="" :prefix-icon="Search" />
    </div>
    <div style="display: none" class="language" @mouseenter="handleMouseenter" @mouseleave="handleMouseleave">
      <div class="language-svg" :class="checkLanguage ? 'language-svg-spin' : ''">
        {{ language.toUpperCase() }}
      </div>
      <div :class="checkLanguage ? 'language-list-show' : 'language-list-hide'">
        <input @click="getValue('hk')" readonly type="text" value="HK" />
        <input @click="getValue('CN')" readonly type="text" value="CN" />
        <input @click="getValue('EN')" readonly type="text" value="EN" />
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
a {
  cursor: pointer;
  text-decoration: none;
}
@media screen and (min-width: 768px) and (max-width: 1620px) {
  .menu {
    display: flex;
    & > div {
      position: relative;
      border-right: 1px solid #4d4d4d;
      & > a {
        color: #4d4d4d !important;
        text-align: center;
        font-family: "Noto Sans HK";
        font-size: 0.8vw;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        position: relative;
      }
      & > a::after {
        content: "";
        position: absolute;
        background: url("https://statichk.cmermedical.com/vision/imgs/6f68e977441f318c.png") no-repeat;
        background-size: 100% 100%;
        width: 14px;
        height: 6px;
        bottom: -20px;
        left: 50%;
        transform: translateX(-50%);
        transition: all 0.3s;
      }
    }
    & > div:nth-child(1) {
      border-left: 1px solid #4d4d4d;
    }
    & > div:nth-child(1),
    & > div:nth-child(2),
    & > div:nth-child(5) {
      & > a {
        padding: 0.5vw 2.1875vw;
      }
    }
    & > div:nth-child(3) {
      & > a {
        padding: 0.5vw 1.1875vw;
      }
    }
    & > div:nth-child(4) {
      & > a {
        padding: 0.5vw 1.302vw;
      }
    }
    & > div:nth-child(6) {
      & > a {
        padding: 0.5vw 1.5vw 0.5vw 1.8vw;
      }
    }
    & > div:nth-child(7) {
      & > a {
        padding: 0.5vw 1.5vw 0.5vw 1.8vw;
      }
    }
  }
  .fa-path {
    position: relative;
  }
  .isChildNode::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 50px;
    background: #00a5ce00;
    // background:palegoldenrod;
    bottom: -120%;
    z-index: 5;
    left: 50%;
    transform: translateX(-50%);
  }
  .noNodeChild {
    a {
      cursor: pointer;
    }
  }
  .fade-leave-active {
    transition: opacity 3s;
  }

  .fa-path:not(:hover) .sub-menu {
    transition: opacity 3s;
  }

  .fa-path:hover {
    & > a {
      color: #00a6ce;
      cursor: default;
    }
    & > a::after {
      background: url("https://statichk.cmermedical.com/vision/imgs/e7f6cda30324f416.png");
      transform: rotate(180deg) translateX(50%);
      background-size: 100% 100%;
      bottom: -10px;
      z-index: 10;
    }
    .sub-menu {
      box-shadow: #4d4d4d 5px 5px 10px;
      z-index: 999;
      border-radius: 5px;
      width: max-content;
      position: absolute;
      right: 50%;
      transform: translateX(50%);
      top: 45px;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-top: 0;

      & > div:last-child {
        border-bottom: none;
      }

      & > a {
        color: #00a6ce;
        font-family: "Noto Sans HK";
        font-size: 15px;
        font-style: normal;
        font-weight: 700;
        text-align: left;
        text-wrap: nowrap;
        line-height: 20px; /* 133.333% */
      }
    }
  }

  .son-menu {
    position: relative;
    width: 100%;
    text-align: center;
    & > a {
      padding-bottom: 0 !important;

      color: #6f6f6f;
      font-family: "Noto Sans HK";
      font-size: 0.78vw;
      font-style: normal;
      font-weight: 700;
      line-height: 20px;
      padding: 0.78vw 2.6vw;
      display: block;
      & > span {
        padding-bottom: 10px;
        border-bottom: 1px solid #00a6ce;
        min-width: 6.25vw;
        display: inline-block;
      }
    }
  }
  // .sub-menu::before {
  //   content: "";
  //   position: absolute;
  //   width: 0;
  //   height: 0;
  //   border-top: 0px solid transparent;
  //   border-bottom: 14px solid #fff;
  //   border-left: 14px solid transparent;
  //   border-right: 14px solid transparent;
  //   top: -18px;
  // }
  .son-menu:hover {
    & > a {
      position: relative;
      color: #00a6ce;
      & > span::before {
        content: "";
        width: 7px;
        height: 10px;
        background: url("https://statichk.cmermedical.com/vision/imgs/79423085f7588927.png") no-repeat;
        background-size: 100% 100%;
        position: absolute;
        left: 20px;
        top: 55%;
        transform: translateY(-50%);
      }
    }

    .three-level-2 {
      display: flex;
      flex-direction: column;
      position: absolute;
      box-shadow: #4d4d4d 5px 5px 10px;
      width: max-content;
      background: #fff;
      right: -82%;
      top: -68%;
      border-radius: 5px;
      padding: 0.625vw 0;
      & > div {
        & > a {
          padding: 0.78125vw 1.5625vw 0 1.5625vw;
          display: block;
          color: #6f6f6f;
          font-family: "Noto Sans HK";
          font-size: 0.78125vw;
          font-style: normal;
          font-weight: 700;
          line-height: 1.04165vw;
          min-width: 6.25vw;
          & > span {
            padding-bottom: 0.74165vw;
            border-bottom: 1px solid #00a6ce;
            width: 100%;
            display: inline-block;
          }
        }
      }
      & > div:hover {
        & > a {
          position: relative;
          color: #00a6ce;
          & > span::before {
            content: "";
            width: 0.58vw;
            height: 0.78125vw;
            background: url("https://statichk.cmermedical.com/vision/imgs/79423085f7588927.png") no-repeat;
            position: absolute;
            background-size: 100% 100%;
            left: 0.48125vw;
            top: 50%;
            transform: translateY(-50%);
          }
        }
      }
    }
    .three-level-3 {
      display: flex;
      flex-direction: column;
      position: absolute;
      right: -104%;
      box-shadow: #4d4d4d 5px 5px 10px;
      width: max-content;
      background: #fff;
      top: -18%;
      border-radius: 5px;
      padding: 0.625vw 0;
      & > div {
        & > a {
          padding: 0.78125vw 1.5625vw;
          display: block;
          color: #6f6f6f;
          font-family: "Noto Sans HK";
          font-size: 0.78125vw;
          font-style: normal;
          font-weight: 700;
          line-height: 1.04165vw;
          & > span {
            padding-bottom: 0.52vw;
            border-bottom: 1px solid #00a6ce;
          }
        }
      }
      & > div:hover {
        & > a {
          position: relative;
          color: #00a6ce;
          & > span::before {
            content: "";
            width: 0.58vw;
            height: 0.78125vw;
            background: url("https://statichk.cmermedical.com/vision/imgs/79423085f7588927.png") no-repeat;
            position: absolute;
            background-size: 100% 100%;
            left: 0.48125vw;
            top: 50%;
            transform: translateY(-50%);
          }
        }
      }
    }
    .three-level-5 {
      display: flex;
      flex-direction: column;
      position: absolute;
      right: 0;
      left: 101%;
      bottom: 0;
      box-shadow: #4d4d4d 5px 5px 10px;
      width: max-content;
      background: #fff;
      top: -60%;
      border-radius: 5px;
      & > div {
        & > a {
          padding: 15px 30px;
          display: block;
          color: #6f6f6f;
          font-family: "Noto Sans HK";
          font-size: 15px;
          font-style: normal;
          font-weight: 700;
          line-height: 20px;
          & > span {
            padding-bottom: 10px;
            border-bottom: 1px solid #00a6ce;
          }
        }
      }
      & > div:hover {
        & > a {
          position: relative;
          color: #00a6ce;
          & > span::before {
            content: "";
            width: 11px;
            height: 15px;
            background: url("https://statichk.cmermedical.com/vision/imgs/79423085f7588927.png") no-repeat;
            position: absolute;
            left: 15px;
            top: 18px;
          }
        }
      }
    }
  }
  .router-link-active {
    color: #00a6ce !important;
  }
  .menu {
    .fa-2,
    .fa-3 {
      cursor: pointer;
      & > a::after {
        content: none;
      }
    }
    // & > div:last-child:hover {
    // .sub-menu {
    // display: none;
    // }
    // }
    // & > div:last-child {
    //   & > a::after {
    //     content: none;
    //   }
    // }

    & > div {
      & > div {
        & > div:last-child {
          & > a {
            & > span {
              border: none;
            }
          }
        }
      }
    }
    .three-level-2 {
      & > div {
        & > a {
          min-width: 120px;
          display: block;
          & > span {
            width: 100%;
            display: inline-block;
          }
        }
      }
      & > div:last-child {
        & > a {
          & > span {
            border: none;
          }
        }
      }
    }
    .three-level-3 {
      & > div:last-child {
        & > a {
          & > span {
            border: none;
          }
        }
      }
    }
    .three-level-5 {
      & > div:last-child {
        & > a {
          & > span {
            border: none;
          }
        }
      }
    }
  }
  .sub-menu {
    padding-top: 10px;
    display: none;
    // visibility: hidden;
    position: relative;
    // background: #fff;
    background: url("https://statichk.cmermedical.com/vision/imgs/bd478e6eda64c637.png") no-repeat;
    background-size: 100% 100%;
    background-position: center;
  }
  .three-level-2,
  .three-level-3,
  .three-level-5 {
    display: none;
  }
  .right-head {
    display: flex;
    align-items: center;
  }
  .media {
    & > div:nth-child(1) {
      display: flex;
      align-items: center;
      margin-left: 25px;
      & > a:nth-child(2) {
        margin: 0 25px;
      }
    }
    & > div:nth-child(2) {
      display: none;
    }
  }
  .search {
    max-width: 9.895vw;
    margin: 0 0.52vw 0 1.5625vw;
    :deep(.el-input) {
      width: 100%;
    }
  }

  .language {
    position: relative;
    & > div:nth-child(1) {
      color: #4d4d4d;
      text-align: center;
      font-family: "Noto Sans HK";
      font-size: 17px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      position: relative;
    }
  }
  .language-svg::after {
    content: "";
    position: absolute;
    background: url("https://statichk.cmermedical.com/vision/imgs/a92b5485e65dc841.png") no-repeat;
    background-size: 100%;
    width: 14px;
    height: 10.5px;
    top: 50%;
    right: -20px;
    transform: translateY(-50%) rotate(-90deg);
    filter: grayscale(100%);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }
  .language-svg-spin::after {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    content: "";
    position: absolute;
    background: url("https://statichk.cmermedical.com/vision/imgs/a92b5485e65dc841.png") no-repeat;
    background-size: 100%;
    transform: translateY(-50%) rotate(0deg);
    filter: grayscale(0);
    width: 14px;
    height: 14px;
    top: 50%;
    right: -20px;
  }
  .language-list-show {
    position: absolute;
    right: 0;
    width: 120px;
    max-width: 180px;
    border: 1px solid #ccc;
    border-radius: 7px;
    padding: 10px 0;
    overflow: hidden;
    background: #fff;
    input {
      cursor: pointer;
      display: block;
      width: 100%;
      border: none;
      outline: none;
      box-sizing: border-box;
      padding: 5px 20px;
    }
    input:hover {
      background: #00a5ce6b;
    }
  }
  .language-list-hide {
    display: none;
    position: absolute;
  }
}
@media screen and (min-width: 1621px) {
  .menu {
    display: flex;
    & > div {
      position: relative;
      border-right: 1px solid #4d4d4d;
      & > a {
        color: #4d4d4d !important;
        text-align: center;
        font-family: "Noto Sans HK";
        font-size: 17px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        position: relative;
        z-index: 5;
      }
      & > a::after {
        content: "";
        position: absolute;
        background: url("https://statichk.cmermedical.com/vision/imgs/6f68e977441f318c.png");
        width: 16px;
        height: 8px;
        bottom: -20px;
        left: 50%;
        transform: translateX(-50%);
        transition: all 0.3s;
      }
    }
    & > div:nth-child(1) {
      border-left: 1px solid #4d4d4d;
    }
    & > div:nth-child(1),
    & > div:nth-child(2),
    & > div:nth-child(5) {
      & > a {
        padding: 0.5vw 1.302vw;
      }
    }
    & > div:nth-child(4),
    & > div:nth-child(3) {
      & > a {
        padding: 0.5vw 1.302vw;
      }
    }
    & > div:nth-child(6) {
      & > a {
        padding: 0.5vw 1.302vw;
      }
    }
    & > div:nth-child(7) {
      & > a {
        padding: 0.5vw 1.302vw;
      }
    }
  }
  .fa-path {
    position: relative;
  }
  .fa-path::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 50px;
    background: #00a5ce00;
    bottom: -80%;
    z-index: 2;
    left: 50%;
    transform: translateX(-50%);
  }
  .fa-path:hover {
    & > a {
      color: #00a6ce;
      cursor: pointer;
    }
    & > a::after {
      background: url("https://statichk.cmermedical.com/vision/imgs/e7f6cda30324f416.png");
      transform: rotate(180deg) translateX(50%);
      bottom: -10px;
      z-index: 10;
    }
    .sub-menu {
      padding-top: 10px;
      padding-bottom: 10px;
      box-shadow: #4d4d4d 5px 5px 10px;
      z-index: 999;
      border-radius: 5px;

      width: max-content;
      position: absolute;
      right: 50%;
      transform: translateX(50%);
      top: 45px;
      display: flex;
      flex-direction: column;
      align-items: center;

      & > div:last-child {
        border-bottom: none;
      }

      & > a {
        color: #00a6ce;
        font-family: "Noto Sans HK";
        font-size: 15px;
        font-style: normal;
        font-weight: 700;
        text-align: left;
        text-wrap: nowrap;
        line-height: 20px; /* 133.333% */
      }
    }
  }
  .son-menu {
    position: relative;
    width: 100%;
    text-align: center;

    & > a {
      color: #6f6f6f;
      font-family: "Noto Sans HK";
      font-size: 15px;
      font-style: normal;
      font-weight: 700;
      line-height: 20px;
      padding: 15px 40px 0 40px;
      display: block;
      & > span {
        padding-bottom: 10px;
        border-bottom: 1px solid #00a6ce;
        min-width: 120px;
        display: inline-block;
      }
    }
  }
  .is_ai_screening {
    & > a {
      & > span {
        min-width: 155px;
      }
    }
  }
  .ai_screening_title {
    position: relative;
  }
  .ai_screening_title::before {
    left: -25px !important;
    top: 35% !important;
  }
  .ai_screening_title::after {
    content: "";
    position: absolute;
    background: url(https://statichk.cmermedical.com/hkcmereye/LAL/iconNew.svg) no-repeat;
    width: 50px;
    height: 22px;
    top: 50%;
    right: -40px;
    transform: translateY(-50%);
  }
  .router-link-active {
    color: #00a6ce !important;
  }
  // .sub-menu::before {
  //   content: "";
  //   position: absolute;
  //   width: 0;
  //   height: 0;
  //   border-top: 0px solid transparent;
  //   border-bottom: 14px solid #fff;
  //   border-left: 14px solid transparent;
  //   border-right: 14px solid transparent;
  //   top: -14px;
  // }
  .son-menu:hover {
    & > a {
      position: relative;
      color: #00a6ce;
      & > span::before {
        content: "";
        width: 11px;
        height: 15px;
        background: url("https://statichk.cmermedical.com/vision/imgs/79423085f7588927.png") no-repeat;
        position: absolute;
        left: 25px;
        top: 50%;
        transform: translateY(-50%);
      }
    }

    .three-level-2 {
      display: flex;
      flex-direction: column;
      position: absolute;
      box-shadow: #4d4d4d 5px 5px 10px;
      width: max-content;
      background: #fff;
      right: -89.2%;
      top: -68%;
      border-radius: 5px;
      padding: 15px 0;
      & > div {
        & > a {
          padding: 15px 30px 0 30px;
          display: block;
          color: #6f6f6f;
          font-family: "Noto Sans HK";
          font-size: 15px;
          font-style: normal;
          font-weight: 700;
          line-height: 20px;
          min-width: 120px;
          & > span {
            padding-bottom: 10px;
            border-bottom: 1px solid #00a6ce;
            width: 100%;
            display: inline-block;
          }
        }
      }
      & > div:last-child:hover {
        & > a {
          & > span::before {
            top: 10px;
          }
        }
      }
      & > div:hover {
        & > a {
          position: relative;
          color: #00a6ce;
          & > span::before {
            content: "";
            width: 11px;
            height: 15px;
            background: url("https://statichk.cmermedical.com/vision/imgs/79423085f7588927.png") no-repeat;
            position: absolute;
            left: 15px;
            top: 18px;
          }
        }
      }
    }
    .three-level-3 {
      display: flex;
      flex-direction: column;
      position: absolute;
      right: -114%;
      box-shadow: #4d4d4d 5px 5px 10px;
      width: max-content;
      background: #fff;
      top: -18%;
      border-radius: 5px;
      & > div {
        & > a {
          padding: 15px 30px;
          display: block;
          color: #6f6f6f;
          font-family: "Noto Sans HK";
          font-size: 15px;
          font-style: normal;
          font-weight: 700;
          line-height: 20px;
          & > span {
            padding-bottom: 10px;
            border-bottom: 1px solid #00a6ce;
          }
        }
      }
      & > div:hover {
        & > a {
          position: relative;
          color: #00a6ce;
          & > span::before {
            content: "";
            width: 11px;
            height: 15px;
            background: url("https://statichk.cmermedical.com/vision/imgs/79423085f7588927.png") no-repeat;
            position: absolute;
            left: 15px;
            top: 18px;
          }
        }
      }
    }
    .three-level-5 {
      display: flex;
      flex-direction: column;
      position: absolute;
      right: auto;
      left: 101%;
      bottom: 0;
      box-shadow: #4d4d4d 5px 5px 10px;
      width: max-content;
      background: #fff;
      top: -60%;
      border-radius: 5px;
      & > div {
        & > a {
          padding: 15px 30px;
          display: block;
          color: #6f6f6f;
          font-family: "Noto Sans HK";
          font-size: 15px;
          font-style: normal;
          font-weight: 700;
          line-height: 20px;
          & > span {
            padding-bottom: 10px;
            border-bottom: 1px solid #00a6ce;
          }
        }
      }
      & > div:hover {
        & > a {
          position: relative;
          color: #00a6ce;
          & > span::before {
            content: "";
            width: 11px;
            height: 15px;
            background: url("https://statichk.cmermedical.com/vision/imgs/79423085f7588927.png") no-repeat;
            position: absolute;
            left: 15px;
            top: 18px;
          }
        }
      }
    }
  }
  .menu {
    .fa-2,
    .fa-3 {
      cursor: pointer;
      & > a::after {
        content: none;
      }
    }
    // & > div:last-child:hover {
    // .sub-menu {
    // display: none;
    // }
    // }
    // & > div:last-child {
    //   & > a::after {
    //     content: none;
    //   }
    // }

    & > div {
      & > div {
        & > div:last-child {
          & > a {
            & > span {
              border: none;
            }
          }
        }
      }
    }
    .three-level-2,
    .three-level-3,
    .three-level-5 {
      & > div:last-child {
        & > a {
          & > span {
            border: none;
          }
        }
      }
    }
  }
  .sub-menu {
    padding-top: 10px;
    display: none;
    position: relative;
    // background: #fff;
    background: url("https://statichk.cmermedical.com/vision/imgs/bd478e6eda64c637.png") no-repeat;
    background-size: 100% 100%;
    background-position: center;
  }
  .three-level-2,
  .three-level-3,
  .three-level-5 {
    display: none;
  }
  .right-head {
    display: flex;
    align-items: center;
  }
  .media {
    & > div:nth-child(1) {
      display: flex;
      align-items: center;
      margin-left: 25px;
      & > a:nth-child(2) {
        margin: 0 25px;
      }
    }
    & > div:nth-child(2) {
      display: none;
    }
  }
  .search {
    max-width: 9.895vw;
    margin: 0 0.52vw 0 1.5625vw;
    :deep(.el-input) {
      width: 100%;
    }
  }
  .language {
    position: relative;
    & > div:nth-child(1) {
      color: #4d4d4d;
      text-align: center;
      font-family: Inter;
      font-size: 17px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      position: relative;
    }
  }
  .language-svg::after {
    content: "";
    position: absolute;
    background: url("https://statichk.cmermedical.com/vision/imgs/a92b5485e65dc841.png") no-repeat;
    background-size: 100%;
    width: 14px;
    height: 10.5px;
    top: 50%;
    right: -20px;
    transform: translateY(-50%) rotate(-90deg);
    filter: grayscale(100%);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }
  .language-svg-spin::after {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    content: "";
    position: absolute;
    background: url("https://statichk.cmermedical.com/vision/imgs/a92b5485e65dc841.png") no-repeat;
    background-size: 100%;
    transform: translateY(-50%) rotate(0deg);
    filter: grayscale(0);
    width: 14px;
    height: 14px;
    top: 50%;
    right: -20px;
  }
  .language-list-show {
    position: absolute;
    right: 0;
    width: 120px;
    max-width: 180px;
    border: 1px solid #ccc;
    border-radius: 7px;
    padding: 10px 0;
    overflow: hidden;
    background: #fff;
    input {
      cursor: pointer;
      display: block;
      width: 100%;
      border: none;
      outline: none;
      box-sizing: border-box;
      padding: 5px 20px;
    }
    input:hover {
      background: #00a5ce6b;
    }
  }
  .language-list-hide {
    display: none;
    position: absolute;
  }
}
</style>
