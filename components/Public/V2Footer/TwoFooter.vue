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
    isChildVisible: false,
    childrenList: [
      {
        id: "9",
        title: "ZEISS Vision Expert  ",
        path: "/zve",
      },
    ],
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
      {
        id: "6",
        title: "聯絡我們",
        path: "/about-us/contact-us",
        child: "svg",
      },
    ],
  },
  // {
  //   id: "6",
  //   title: "聯絡我們",
  //   path: "/about-us/contact-us",
  //   child: "svg",
  // },
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
        <nuxt-link @click="showChildMenu(index)" :to="item.path == '/' ? '' : item.path"
          :class="[item.isChildVisible ? `a-link-${item.id}` : '', 'a-link']"><span>{{ item.title }}</span></nuxt-link>
        <div v-if="!isPc && !childSvg(item) && item.isChildVisible" class="child-list">
          <div v-for="child in item.childrenList" :key="child.id"
            :class="[isThreeLevel(child.threeLevelList) ? 'threeLevel' : '']"
            @click="isThreeLevel(child.threeLevelList) ? showThreeLevel() : ''">
            <nuxt-link :to="child.path" class="a-child"><span>{{ child.title }} </span></nuxt-link>
            <div v-if="isShowChildList" class="threeLevel-child">
              <div v-for="ele in child.threeLevelList" :key="ele.id">
                <nuxt-link :to="ele.path"><span>{{ ele.title }}</span></nuxt-link>
              </div>
            </div>
          </div>
        </div>
        <div v-if="isPc && !childSvg(item)" :class="`item-list-${item.id}`">
          <div v-for="(child, childIndex) in item.childrenList" :key="child.id" :class="[
            isThreeLevel(child.threeLevelList)
              ? 'threeLevel'
              : `item-list-child-${childIndex + 1}`,
          ]">
            <nuxt-link :to="child.path"><span>{{ child.title }}</span></nuxt-link>
            <div v-if="child.child == 'svg' && isPc">
              <div class="media">
                <a href="https://www.facebook.com/cmereyecenter" target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none">
                    <path
                      d="M26 13.5825C26 6.08109 20.1797 0 13 0C5.82029 0 0 6.08109 0 13.5825C0 20.3618 4.75389 25.981 10.9688 27V17.5087H7.66797V13.5825H10.9688V10.5901C10.9688 7.18599 12.9096 5.30567 15.879 5.30567C17.3009 5.30567 18.7891 5.57095 18.7891 5.57095V8.91352H17.1498C15.535 8.91352 15.0313 9.96059 15.0313 11.0358V13.5825H18.6367L18.0604 17.5087H15.0313V27C21.2461 25.981 26 20.3618 26 13.5825Z"
                      fill="#00A6CE" />
                  </svg>
                </a>
                <a href="https://www.instagram.com/cmervision/" target="_blank">
                  <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M13.5 2.43105C17.107 2.43105 17.5342 2.44687 18.9527 2.51016C20.2711 2.56816 20.983 2.78965 21.4576 2.97422C22.0852 3.2168 22.5387 3.51211 23.008 3.98145C23.4826 4.45605 23.7727 4.9043 24.0152 5.53184C24.1998 6.00645 24.4213 6.72363 24.4793 8.03672C24.5426 9.46055 24.5584 9.8877 24.5584 13.4895C24.5584 17.0965 24.5426 17.5236 24.4793 18.9422C24.4213 20.2605 24.1998 20.9725 24.0152 21.4471C23.7727 22.0746 23.4773 22.5281 23.008 22.9975C22.5334 23.4721 22.0852 23.7621 21.4576 24.0047C20.983 24.1893 20.2658 24.4107 18.9527 24.4688C17.5289 24.532 17.1018 24.5479 13.5 24.5479C9.89297 24.5479 9.46582 24.532 8.04727 24.4688C6.72891 24.4107 6.01699 24.1893 5.54238 24.0047C4.91484 23.7621 4.46133 23.4668 3.99199 22.9975C3.51738 22.5229 3.22734 22.0746 2.98477 21.4471C2.8002 20.9725 2.57871 20.2553 2.5207 18.9422C2.45742 17.5184 2.4416 17.0912 2.4416 13.4895C2.4416 9.88242 2.45742 9.45527 2.5207 8.03672C2.57871 6.71836 2.8002 6.00645 2.98477 5.53184C3.22734 4.9043 3.52266 4.45078 3.99199 3.98145C4.4666 3.50684 4.91484 3.2168 5.54238 2.97422C6.01699 2.78965 6.73418 2.56816 8.04727 2.51016C9.46582 2.44687 9.89297 2.43105 13.5 2.43105ZM13.5 0C9.83496 0 9.37617 0.0158203 7.93652 0.0791016C6.50215 0.142383 5.51602 0.374414 4.66172 0.706641C3.77051 1.05469 3.01641 1.51348 2.26758 2.26758C1.51348 3.01641 1.05469 3.77051 0.706641 4.65645C0.374414 5.51602 0.142383 6.49687 0.0791016 7.93125C0.0158203 9.37617 0 9.83496 0 13.5C0 17.165 0.0158203 17.6238 0.0791016 19.0635C0.142383 20.4979 0.374414 21.484 0.706641 22.3383C1.05469 23.2295 1.51348 23.9836 2.26758 24.7324C3.01641 25.4813 3.77051 25.9453 4.65645 26.2881C5.51602 26.6203 6.49688 26.8523 7.93125 26.9156C9.3709 26.9789 9.82969 26.9947 13.4947 26.9947C17.1598 26.9947 17.6186 26.9789 19.0582 26.9156C20.4926 26.8523 21.4787 26.6203 22.333 26.2881C23.2189 25.9453 23.973 25.4813 24.7219 24.7324C25.4707 23.9836 25.9348 23.2295 26.2775 22.3436C26.6098 21.484 26.8418 20.5031 26.9051 19.0688C26.9684 17.6291 26.9842 17.1703 26.9842 13.5053C26.9842 9.84023 26.9684 9.38145 26.9051 7.9418C26.8418 6.50742 26.6098 5.52129 26.2775 4.66699C25.9453 3.77051 25.4865 3.01641 24.7324 2.26758C23.9836 1.51875 23.2295 1.05469 22.3436 0.711914C21.484 0.379687 20.5031 0.147656 19.0688 0.084375C17.6238 0.0158203 17.165 0 13.5 0Z"
                      fill="#00A6CE" />
                    <path
                      d="M13.4971 6.56543C9.66855 6.56543 6.5625 9.67148 6.5625 13.5C6.5625 17.3285 9.66855 20.4346 13.4971 20.4346C17.3256 20.4346 20.4316 17.3285 20.4316 13.5C20.4316 9.67148 17.3256 6.56543 13.4971 6.56543ZM13.4971 17.9982C11.0133 17.9982 8.99883 15.9838 8.99883 13.5C8.99883 11.0162 11.0133 9.00176 13.4971 9.00176C15.9809 9.00176 17.9953 11.0162 17.9953 13.5C17.9953 15.9838 15.9809 17.9982 13.4971 17.9982Z"
                      fill="#00A6CE" />
                    <path
                      d="M22.3316 6.29131C22.3316 7.1878 21.6039 7.91026 20.7127 7.91026C19.8162 7.91026 19.0938 7.18252 19.0938 6.29131C19.0938 5.39483 19.8215 4.67236 20.7127 4.67236C21.6039 4.67236 22.3316 5.4001 22.3316 6.29131Z"
                      fill="#00A6CE" />
                  </svg>
                </a>
                <a href="https://www.youtube.com/@cmersmileeyecenter6303" target="_blank">
                  <svg width="27" height="21" viewBox="0 0 27 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M24.6397 2.43802C25.0431 2.85963 25.3328 3.38387 25.4798 3.95828C26.0234 6.07839 26.0234 10.4996 26.0234 10.4996C26.0234 10.4996 26.0234 14.9209 25.4798 17.041C25.3328 17.6154 25.0431 18.1397 24.6397 18.5613C24.2363 18.9829 23.7333 19.2871 23.1812 19.4434C21.1484 20.011 13.0234 20.011 13.0234 20.011C13.0234 20.011 4.89844 20.011 2.86571 19.4434C2.31353 19.2871 1.81057 18.9829 1.40717 18.5613C1.00376 18.1397 0.714069 17.6154 0.567074 17.041C0.0234375 14.9209 0.0234375 10.4996 0.0234375 10.4996C0.0234375 10.4996 0.0234375 6.07839 0.567074 3.95828C0.714069 3.38387 1.00376 2.85963 1.40717 2.43802C1.81057 2.01641 2.31353 1.71222 2.86571 1.55589C4.89844 0.988281 13.0234 0.988281 13.0234 0.988281C13.0234 0.988281 21.1484 0.988281 23.1812 1.55589C23.7333 1.71222 24.2363 2.01641 24.6397 2.43802ZM17.1626 10.4998L10.3672 6.48511V14.5145L17.1626 10.4998Z"
                      fill="#00A6CE" />
                  </svg>
                </a>
              </div>
            </div>
            <div class="threeLevel-child">
              <div v-for="ele in child.threeLevelList" :key="ele.id">
                <nuxt-link :to="ele.path"><span>{{ ele.title }}</span></nuxt-link>
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

    &>div:nth-child(1) {
      display: flex;
      justify-content: space-between;

      &>div {
        &>a:nth-child(1) {
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

        &>div:nth-child(2) {
          &>div {
            &>a {
              color: #666;
              font-family: "Noto Sans HK";
              font-size: clamp(14px, 0.83vw, 20px);
              font-style: normal;
              font-weight: 400;
              line-height: 43.5px;
            }
          }
        }
      }
    }

    &>div:nth-child(2) {
      margin-top: 30px;
      display: flex;
      justify-content: center;
      color: var(--Deep-Blue, #3e5270);
      font-family: "Noto Sans HK";
      font-size: 16px;
      font-style: normal;
      font-weight: 700;
      line-height: 30px;
      /* 187.5% */
      text-transform: uppercase;

      &>a {
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

    &>div {
      margin-left: 20px;
      position: relative;

      &>a {
        color: #3e5270;
        font-family: "Noto Sans HK";
        font-size: clamp(14px, 0.83vw, 20px);
        font-style: normal;
        font-weight: 500;
        line-height: 43.5px;
      }
    }

    &>div::before {
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

    &>a {
      display: flex;
      align-items: center;
    }

    &>a:nth-child(2) {
      margin: 0 15px;
    }
  }

  .threeLevel {
    position: relative;
    width: fit-content;

    &>a::after {
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

    &>div:hover:before {
      background: #00a6ce;
    }

    a:hover {
      color: #00a6ce;
    }
  }

  .item-list-7 {
    .item-list-child-1 {
      &>a {
        color: #00a6ce !important;
        font-family: "Noto Sans CJK TC";
        font-size: clamp(16px, 1.04vw, 24px) !important;
        font-style: normal;
        font-weight: 700 !important;
        line-height: normal;
        letter-spacing: 2.4px !important;
        display: block;
      }
    }
  }

  .item-list-5 {
    .item-list-child-3 {
      &>a {
        color: #00a6ce !important;
        font-family: "Noto Sans CJK TC";
        font-size: clamp(16px, 1.04vw, 24px) !important;
        font-style: normal;
        font-weight: 700 !important;
        line-height: normal;
        letter-spacing: 2.4px !important;
        display: block;
        margin-bottom: 10px;
      }
    }
  }
}

@media screen and (max-width: 767px) {
  a {
    text-decoration: none;
  }

  .twoFooter {
    &>div:nth-child(2) {
      display: flex;
      justify-content: center;
      color: var(--Grey, #4d4d4d);
      font-family: "Noto Sans CJK TC";
      font-size: 3.5vw;
      font-style: normal;
      font-weight: 400;
      line-height: 7.6vw;

      &>a {
        color: var(--Grey, #4d4d4d);
        margin: 0 2.5vw;
      }
    }
  }

  .footer-menuList {
    margin-top: 10.25vw;
    margin-bottom: 3.07vw;

    &>div {
      &>a {
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

      &>.a-link::after {
        content: "";
        background: url("https://statichk.cmermedical.com/vision/imgs/afcc2515ac219afd.png") no-repeat;
        width: 7px;
        height: 14px;
        position: absolute;
        right: 0;
        top: 3.5px;
      }

      &>.a-link-1::after {
        content: "";
        background: url("https://statichk.cmermedical.com/vision/imgs/d8b915b502a6c1cd.png") no-repeat;
        width: 14px;
        height: 7px;
        transition: all 0.3s;
        right: -3.5px;
      }

      &>.a-link-2::after {
        content: "";
        background: url("https://statichk.cmermedical.com/vision/imgs/d8b915b502a6c1cd.png") no-repeat;
        width: 14px;
        height: 7px;
        transition: all 0.3s;
        right: -3.5px;
      }

      &>.a-link-3::after {
        content: "";
        background: url("https://statichk.cmermedical.com/vision/imgs/d8b915b502a6c1cd.png") no-repeat;
        width: 14px;
        height: 7px;
        transition: all 0.3s;
        right: -3.5px;
      }

      &>.a-link-4::after {
        content: "";
        background: url("https://statichk.cmermedical.com/vision/imgs/d8b915b502a6c1cd.png") no-repeat;
        width: 14px;
        height: 7px;
        right: -3.5px;
        transition: all 0.3s;
      }

      &>.a-link-5::after {
        content: "";
        background: url("https://statichk.cmermedical.com/vision/imgs/d8b915b502a6c1cd.png") no-repeat;
        width: 14px;
        height: 7px;
        transition: all 0.3s;
        right: -3.5px;
      }

      border-bottom: 1px dashed #4d4d4d;
      padding: 12px 26px 12px 22px;
    }

    &>div:nth-child(2) {
      &>.a-link:after {
        display: none;
      }
    }

    &>div:last-child {
      &>a::after {
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

    &>div {
      &>a {
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
    &>div {
      &>a {
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

        &>span::before {
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