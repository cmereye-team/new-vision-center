<script lang="ts" setup>
useHead({
  title: "香港希瑪視光中心｜眼睛檢查｜驗眼中心",
  meta: [
    {
      hid: "description",
      name: "description",
      content:
        "希瑪眼科視光中心（CMER VISION）是希瑪眼科醫療集團旗下的視光中心。我們的註冊視光師團隊致力為所有年齡層提供優質的眼睛護理及專業視光服務，包括全面眼睛檢查、視光檢查、角膜矯形術（OK鏡）、兒童近視控制鏡片、近視控制隱形眼鏡，以及各種眼鏡驗配服務等。希瑪視光擁有符合國際水平的視光檢查儀器，並得到蔡司官方認證為ZVE視光專家，提供我的蔡司視覺體驗，為客人提供一站式可靠及個人化的眼睛檢查服務及改善視力方案。",
    },
    {
      hid: "Keywords",
      name: "Keywords",
      content:
        "希瑪視光 希瑪眼科視光中心 cmer vision 視光中心 視光師 眼睛檢查 視光檢查 蔡司ZVE視光專家 蔡司視覺體驗註冊視光師 視光師驗眼 視光師驗眼中心 全面眼睛檢查 全面眼科視光檢查 希瑪眼科視光中心旺角 希瑪眼科視光中心中環 旺角視力中心 兒童視光中心 眼科驗眼中心 驗眼 驗眼中心 兒童驗眼 驗眼度數 隱形眼鏡驗眼 檢查眼睛 全面眼睛檢查費用 驗眼費用 綜合眼科視光檢查 眼睛檢查 視野檢查 近視控制 兒童近視控制 ok鏡 控制近視鏡片 ",
    },
  ],
  script: [
    {
      src: "https://cdn.trustindex.io/loader.js?bafd719348f250549f76a58071f",
      type: "text/javascript",
      async: true,
      defer: true,
    },
  ],
});
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/scss/navigation";
import "swiper/css/grid";
import getWindowSize from "@/utils/width";
const isPc = ref(true);

import {
  Autoplay,
  Pagination,
  Navigation,
  Scrollbar,
  Grid,
} from "swiper/modules";
const modules = [Autoplay, Pagination, Navigation, Scrollbar];
const modules2 = [Grid, Pagination];
const bannerImg = {
  pc: "https://statichk.cmermedical.com/vision/imgs/13d1975ec227a911.webp",
  mobile: "https://statichk.cmermedical.com/vision/imgs/7723d746a83f1695.webp",
};
const services = {
  title: "專業視光服務",
  btns: [
    {
      name: "成人檢查",
      link: "/comprehensive/comprehensive-eye-examination/comprehensive-eye-examination-for-adult",
      color: "#00A6CE",
    },
    {
      name: "兒童檢查",
      link: "/comprehensive/comprehensive-eye-examination/comprehensive-eye-examination-for-child",
      color: "#95DF82",
    },
  ],
  lists: [
    {
      img: "https://statichk.cmermedical.com/vision/imgs/1294e900e7debac6.png",
      title: ["近視控制", "檢查方案"],
      link: "/myopia-control",
      text: ["低至"],
      context: [],
      price: "350",
    },
    {
      img: "https://statichk.cmermedical.com/vision/imgs/4fb495e912701d2c.png",
      title: ["角膜矯形鏡", "合適性檢查套餐"],
      link: "/orthokeratology",
      text: ["低至"],
      context: [],
      price: "1,000",
    },
    {
      img: "https://statichk.cmermedical.com/vision/imgs/2fce54bd583f773d.png",
      title: ["專業驗配近視", "控制眼鏡"],
      link: "/comprehensive/comprehensive-eye-examination/comprehensive-eye-examination-for-child",
      text: [],
      context: ["買鏡片", "送鏡架"],
      price: "",
    },
    {
      img: "https://statichk.cmermedical.com/vision/imgs/c0e70a7699fdb561.png",
      title: ["眼睛檢查套餐"],
      link: "/comprehensive/comprehensive-eye-examination/comprehensive-eye-examination-for-adult",
      text: ["低至"],
      context: [],
      price: "350",
    },
    {
      img: "https://statichk.cmermedical.com/vision/imgs/9ffb4105482ebeb2.png",
      title: ["青光眼檢查", "套餐"],
      link: "/comprehensive/comprehensive-eye-examination/comprehensive-eye-examination-for-adult",
      text: ["低至"],
      context: [],
      price: "1,000",
    },
    {
      img: "https://statichk.cmermedical.com/vision/imgs/345093cb5a583346.png",
      title: ["隱形眼鏡", "驗配套餐"],
      link: "/soft-contact-lens",
      text: ["低至"],
      context: [],
      price: "350",
    },
  ],
};
const newDiscounts = {
  title: ["最新", "優惠"],
  lists: [
    {
      name: "驗配Rodenstock漸進鏡即免費升級變色鏡片",
      img: "https://statichk.cmermedical.com/vision/imgs/2a5b0c7c66fbe4db.png",
      link: "https://api.whatsapp.com/send?phone=85269180511&text=你好, 我想查詢最新優惠詳情",
      price: "4,560",
      routerLink: "/new-discounts",
    },
    {
      name: "驗配Rodenstock漸進鏡即免費升級變色鏡片",
      img: "https://statichk.cmermedical.com/vision/imgs/2a5b0c7c66fbe4db.png",
      link: "https://api.whatsapp.com/send?phone=85269180511&text=你好, 我想查詢最新優惠詳情",
      price: "4,560",
      routerLink: "/new-discounts",
    },
    {
      name: "驗配Rodenstock漸進鏡即免費升級變色鏡片",
      img: "https://statichk.cmermedical.com/vision/imgs/2a5b0c7c66fbe4db.png",
      link: "https://api.whatsapp.com/send?phone=85269180511&text=你好, 我想查詢最新優惠詳情",
      price: "4,560",
      routerLink: "/new-discounts",
    },
    {
      name: "驗配Rodenstock漸進鏡即免費升級變色鏡片",
      img: "https://statichk.cmermedical.com/vision/imgs/2a5b0c7c66fbe4db.png",
      link: "https://api.whatsapp.com/send?phone=85269180511&text=你好, 我想查詢最新優惠詳情",
      price: "4,560",
      routerLink: "/new-discounts",
    },
    {
      name: "驗配Rodenstock漸進鏡即免費升級變色鏡片",
      img: "https://statichk.cmermedical.com/vision/imgs/2a5b0c7c66fbe4db.png",
      link: "https://api.whatsapp.com/send?phone=85269180511&text=你好, 我想查詢最新優惠詳情",
      price: "4,560",
      routerLink: "/new-discounts",
    },
    {
      name: "驗配Rodenstock漸進鏡即免費升級變色鏡片",
      img: "https://statichk.cmermedical.com/vision/imgs/2a5b0c7c66fbe4db.png",
      link: "https://api.whatsapp.com/send?phone=85269180511&text=你好, 我想查詢最新優惠詳情",
      price: "4,560",
      routerLink: "/new-discounts",
    },
  ],
};
let swiperRef = {
  slideToLoop: (a: any) => {},
  slidePrev: () => {},
  slideNext: () => {},
};
const setSwiper = (swiper: any) => {
  swiperRef = swiper;
};

const getLocale = () => {
  // 获取 localStorage 中的 participationVideo 项
  const storedItem = window.localStorage.getItem("participationVideo");
  let list = null;

  // 尝试解析 JSON
  if (storedItem) {
    try {
      list = JSON.parse(storedItem);
    } catch (error) {
      console.error("Error parsing JSON from localStorage", error);
    }
  }

  // 如果解析成功，将其赋值给 witness.value.section1
  if (list) {
    witness.value.section1 = list;
  } else {
    // 如果解析失败或者没有存储项，初始化 localStorage
    window.localStorage.setItem(
      "participationVideo",
      JSON.stringify(witness.value.section1)
    );
  }
};
const isWitness = ref(false);
const witness = ref({
  section1: [
    {
      name: "Jonathan",
      identity: "小演員",
      text: "戴住OK鏡感覺幾舒服，戴咗半年近視無再加深！",
      link: "https://www.youtube.com/watch?v=qXcrf_ASWE0",
      img: "https://statichk.cmermedical.com/vision/imgs/ab443d83f1e23f4c.png",
      isNew: true,
      isLike: true,
      isHot: true,
    },
    {
      name: "司徒柏辰",
      identity: "",
      text: "唔使戴眼鏡踩BMX好方便，流汗又好容易抹到。",
      link: "https://youtu.be/BkYXEbfg2Zk?si=q1mqnmaDXFM6S4Zj",
      img: "https://statichk.cmermedical.com/vision/imgs/fac277db5a73523b.png",
      isNew: false,
      isLike: false,
      isHot: false,
    },
    {
      name: "Kathy",
      identity: "",
      text: "戴咗OK鏡９個月後， 近視只係加深咗少少！",
      link: "https://www.youtube.com/watch?v=2UJcMkLfuxE",
      img: "https://statichk.cmermedical.com/vision/imgs/2dea526a3dde6751.png",
      isNew: false,
      isLike: false,
      isHot: false,
    },
    {
      name: "Kurtis",
      identity: "",
      text: "戴完OK鏡第二朝睇嘢好清楚， 打劍擊可以瞄準啲，游水清楚睇到池邊。",
      link: "https://www.youtube.com/watch?v=J5tfqyp-lQQ",
      img: "https://statichk.cmermedical.com/vision/imgs/2f4593874540b73c.png",
      isNew: false,
      isLike: false,
      isHot: false,
    },
  ],
  section2: [
    {
      img: "https://statichk.cmermedical.com/vision/imgs/e2b0a775f356.png",
      name: "Billy",
      services: "漸進鏡",
      slogan: "價錢實惠、舒適",
      text: "視光師和助理都非常專業，對各種漸進鏡片的功能和用法講解好詳細，給我們很多有用的意見，戴了新眼鏡後效果非常好！中心儀器先進，檢查和講解都非常仔細專業，服務一流！",
    },
    {
      img: "https://static.cmereye.com/imgs/2024/09/1e33b077ed4921c5.jpg",
      name: "Paul",
      services: "角膜矯形鏡 (ok鏡)",
      slogan: "效果顯著、安心",
      text: "上年開始我帶了兩個小朋友來這間中心配了OK鏡，視光師非常專業，而且服務態度認真。姑娘非常之有耐心，介紹了朋友也讚口不絕。",
    },
    {
      img: "https://static.cmereye.com/imgs/2024/09/cdf158c89af6e873.jpg",
      name: "Jenny",
      services: "近視控制眼鏡",
      slogan: "適應期短、簡單配戴",
      text: "大半年前帶小朋友去做眼睛檢查，發現近視加深了很多！幸好視光師給我們很多非常有用的貼士，還建議我們用近視控制眼鏡，最近回去免費覆診，發現只有一隻眼深了25度！超開心！謝謝你們",
    },
  ],
});
const showIndex = ref(-1);

function onMouseOver(index: number) {
  showIndex.value = index;
}

function onMouseOut(index: number) {
  if (showIndex.value === index) {
    showIndex.value = -1;
  }
}
const handleIcon = (str: any, idx: any) => {
  witness.value.section1.forEach((item: any, index: any) => {
    if (idx == index) {
      item[str] = !item[str];
    }
  });
  window.localStorage.setItem(
    "participationVideo",
    JSON.stringify(witness.value.section1)
  );
};

const openVideo = (link: string) => {
  window.open(link, "_blank");
};

interface discounts {
  id: number;
  img: string;
  title: string;
  tag: string;
  link: string;
  price: string;
  routerLink: string;
}
const discounts = ref<discounts[]>([]);
// 获取数据
const getData = async () => {
  try {
    const res = await fetch("https://content.cmervision.com/api.php/list/15");
    const data = await res.json();
    if (data.code === 1) {
      // data.data.sort((a: any, b: any) => a.id - b.id);
      discounts.value = data.data.map((item: any) => {
        return {
          id: item.id,
          img: `https://content.cmervision.com/${item.ico}`,
          title: item.title,
          tag: item.tags,
          price: item.ext_price,
          routerLink: "/new-discounts",
          link: "https://api.whatsapp.com/send?phone=85269180511&text=你好, 我想查詢最新優惠詳情",
        };
      });
    }
  } catch (error) {
    console.log(error);
  }
};

onMounted(() => {
  let { widthState, width } = getWindowSize();
  window.addEventListener("resize", () => {
    let { widthState, width } = getWindowSize();
    isPc.value = widthState;
  });
  isPc.value = widthState;
  getLocale();
  getData();
  // 获取 class section2
  // const section3 = document.querySelector(".section3");
  // const script = document.createElement("script");
  // script.src =
  //   "https://cdn.trustindex.io/loader.js?bafd719348f250549f76a58071f";
  // script.type = "text/javascript";
  // script.async = true;
  // script.defer = true;

  // script.onload = () => {
  //   console.log("Script loaded");
  // };
  // if (section3) {
  //   section3.appendChild(script);
  // }
});

const router = useRouter();
const goTo = (link: string) => {
  router.push(link);
};
</script>

<template>
  <div class="miyosmart">
    <PublicV2BannerHomeBanner ref="homeBanner" key="home_banner" />
    <V2Home />
    <V2NewDiscounts />
    <V2Review />
    <PublicFormV2Index />
  </div>
</template>


<style lang="scss" scoped>
.miyosmart {
  &-banner {
    margin-top: 136px;
    img {
      width: 100%;
      height: auto;
    }
  }
}
.services {
  width: 100%;
  max-width: 960px;
  margin: 90px auto 0;
  position: relative;
  &-t {
    display: flex;
    justify-content: space-between;
    .title {
      color: var(--Brand-Color, #00a6ce);
      font-family: "Noto Sans HK";
      font-size: 33.75px;
      font-style: normal;
      font-weight: 700;
      line-height: 45px; /* 133.333% */
      letter-spacing: 1.688px;
    }
    .btn {
      display: flex;
      justify-content: space-between;
      top: 10px;
      &-in {
        color: var(--White, #fff);
        text-align: center;
        font-family: "Noto Sans HK";
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        border-radius: 30px;
        display: flex;
        align-items: center;
        padding: 10px 10px;
        margin-left: 7px;
        box-shadow: inset 0px 4px 8px rgba(0, 0, 0, 0.25);
        & > span:nth-child(1),
        & > span:nth-child(3) {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        & > span:nth-child(2) {
          padding: 0 6px 0 3px;
        }
      }
      &-in:hover {
        box-shadow: 4px 5px 8px 3px rgb(0 0 0 / 27%);
      }
    }
  }
  &-b {
    margin-top: 52px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 25px 24px;
    .list-in {
      padding: 10px 0 20px 15px;
      background: #fff;
      box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.1);
      border-radius: 25px;
      display: flex;
      .image {
        width: 148px;
        margin-right: 15px;
        img {
          width: 100%;
          border-radius: 20px;
        }
      }
      .context {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        &-t {
          h3 {
            color: var(--Grey, #4d4d4d);
            font-family: "Noto Sans HK";
            font-size: 16.5px;
            font-style: normal;
            font-weight: 500;
            line-height: 22.5px; /* 136.364% */
            letter-spacing: 0.825px;
          }
        }
        &-b {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          &-l {
            .context-text {
              p {
                color: var(--Brand-2, #59ba68);
                font-family: "Noto Sans HK";
                font-size: 13.5px;
                font-style: normal;
                font-weight: 500;
                line-height: 130%; /* 133.333% */
                text-transform: uppercase;
              }
            }
            .context-context {
              p {
                color: var(--Brand-2, #59ba68);
                font-family: "Noto Sans HK";
                font-size: 16.5px;
                font-style: normal;
                font-weight: 500;
                line-height: 22.5px; /* 136.364% */
                letter-spacing: 0.825px;
              }
            }
            .context-price {
              p {
                color: var(--Brand-2, #59ba68);
                font-family: "Noto Sans HK";
                font-size: 13.5px;
                font-style: normal;
                font-weight: 700;
                line-height: 130%;
                text-transform: uppercase;
                span {
                  font-size: 25.5px;
                  font-style: normal;
                  font-weight: 500;
                  line-height: 30px;
                }
              }
            }
          }
          &-r {
            margin-right: 20px;
            width: 28px;
            height: 28px;
            position: relative;
            & > span {
              position: relative;
              z-index: 1;
              background: linear-gradient(90deg, #00a6ce 40%, #3346ed);
              border-radius: 50%;
              width: 100%;
              height: 100%;
              display: flex;
              justify-content: center;
              align-items: center;
              transition: all 0.3s;
              box-sizing: border-box;
              cursor: pointer;
            }
            &::after {
              content: "";
              background: linear-gradient(90deg, #00a6ce 40%, #3346ed);
              filter: blur(10px);
              position: absolute;
              width: 100%;
              height: 100%;
              z-index: 0;
              border-radius: 50%;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              opacity: 0;
              transition: all 0.3s;
            }
            &:hover {
              & > span {
                border: 2px solid #fff;
              }
              &::after {
                opacity: 1;
                transform: translate(-50%, -50%) scale(1.2);
              }
            }
          }
        }
      }
    }
    .list-in:hover {
      box-shadow: 4px 5px 8px 3px rgb(0 0 0 / 27%);
    }
  }
}
.newDiscounts {
  background: #eafbff;
  padding-bottom: 55px;
  margin-top: 40px;
  &-in {
    width: 100%;
    max-width: 960px;
    margin: 0 auto;
    &-t {
      display: flex;
      align-items: center;
      & > div {
        & > span {
          color: var(--Brand-Color, #00a6ce);
          font-family: "Noto Sans HK";
          font-size: 33.75px;
          font-style: normal;
          font-weight: 700;
          line-height: 45px; /* 133.333% */
          letter-spacing: 1.688px;
          &:nth-of-type(2) {
            color: var(--Sales, #db4444);
          }
        }
        &:nth-of-type(1) {
          width: 89px;
          & > img {
            width: 100%;
          }
        }
        &:nth-of-type(2) {
          margin-top: 40px;
        }
        &:nth-of-type(3) {
          margin-top: 40px;
          margin-left: 20px;
          width: 46px;
          & > img {
            width: 100%;
          }
        }
      }
    }
    &-b {
      // display: grid;
      margin-top: 30px;
      // gap: 30px;
      // grid-template-columns: repeat(4, 1fr);
      overflow: hidden;
      .list-in {
        cursor: pointer;
        min-height: 334px;
        // max-width: 210px;
        border-radius: 15px;
        background: #fff;
        padding: 20px 20px;
        box-sizing: border-box;
        box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.1);
        margin: 10px 0;
        .image {
          width: 100%;
          img {
            width: 100%;
          }
        }
        h3 {
          color: #60605f;
          font-family: "Noto Sans HK";
          font-size: 13.5px;
          font-style: normal;
          font-weight: 500;
          line-height: 18.75px; /* 138.889% */
          letter-spacing: 0.675px;
          margin-top: 25px;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
          min-height: 37.5px;
        }
        .context {
          margin-top: 14px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          &-l {
            display: flex;
            flex-direction: column;
            gap: 2px 0;
            color: var(--Sales, #db4444);
            font-family: "Noto Sans HK";
            font-size: 12.462px;
            font-style: normal;
            font-weight: 500;
            line-height: 12px;
            span {
              font-size: 10px;
              line-height: 1.2;
            }
            & > div:nth-child(1) {
              span {
                font-size: 8px;
              }
            }
          }
          &-r {
            display: flex;
            padding: 7px;
            position: relative;
            align-items: center;
            min-width: 72px;
            svg {
              position: relative;
              z-index: 2;
              margin-right: 2px;
            }
            span {
              position: relative;
              z-index: 2;
              color: #fff;
              font-family: "Noto Sans HK";
              font-size: 10.879px;
              font-style: normal;
              font-weight: 500;
              line-height: 0px; /* 0% */
              letter-spacing: 1.088px;
            }
            &::before {
              content: "";
              position: absolute;
              z-index: 1;
              left: 0;
              top: 0;
              width: 100%;
              height: 100%;
              background: linear-gradient(75deg, #00a6ce 30%, #3346ed);
              border-radius: 30px;
              box-sizing: border-box;
              transition: all 0.3s;
            }
            &::after {
              content: "";
              position: absolute;
              z-index: 0;
              left: 50%;
              top: 50%;
              width: 100%;
              height: 100%;
              background: linear-gradient(75deg, #00a6ce 30%, #3346ed);
              border-radius: 30px;
              opacity: 0;
              transform: translate(-50%, -50%);
              filter: blur(10px);
              transition: all 0.3s;
            }
            &:hover {
              &::before {
                border: 2px solid #fff;
              }
              &::after {
                transform: translate(-50%, -50%) scale(1.2);
                opacity: 1;
              }
            }
          }
        }
      }
      .list-in:hover {
        transform: translateY(-10px);
        box-shadow: 4px 5px 8px 3px rgb(0 0 0 / 27%);
      }
    }
  }
}
.witness {
  width: 100%;
  margin: 33px auto 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  &-t {
    width: 100%;
    max-width: 960px;
    color: var(--Brand-Color, #00a6ce);
    font-family: "Noto Sans HK";
    font-size: 33.75px;
    font-style: normal;
    font-weight: 700;
    line-height: 45px; /* 133.333% */
    letter-spacing: 1.688px;
    span {
      color: var(--Brand-2, #59ba68);
    }
  }
  .section1 {
    max-width: 960px;
    margin-top: 20px;
    .witnessSwiper {
      padding: 20px 10px;
      &-slide {
        padding: 20px 0 0 0;
        .content {
          cursor: pointer;
          padding: 20px 15px 18px 8px;
          background: #fff;
          border-radius: 15px;
          box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
          height: 325px;
          display: inline-block;
          box-sizing: border-box;
          .divShow {
            display: none; /* 默认情况下隐藏这个div */
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%); /* 这会将div居中在其父元素内 */
          }

          &:hover .divShow {
            display: block; /* 当鼠标悬停在.parent上时显示div */
          }
          .image {
            width: 100%;
            overflow: hidden;
            border-radius: 15px;
            position: relative;
            img {
              z-index: 999;
              width: 100%;
              border-radius: 15px;
            }
          }
          .title {
            display: flex;
            justify-content: space-between;
            padding: 10px 5px;
            h3 {
              color: var(--Deep-Blue, #3e5270);
              font-family: "Noto Sans HK";
              font-size: 15px;
              font-style: normal;
              font-weight: 500;
              line-height: 18.75px; /* 125% */
              text-transform: uppercase;
            }
            p {
              color: var(--Deep-Blue, #3e5270);
              text-align: center;
              font-family: "Noto Sans HK";
              font-size: 15px;
              font-style: normal;
              font-weight: 500;
              line-height: 18.75px; /* 125% */
              text-transform: uppercase;
            }
          }
          .context {
            display: flex;
            padding: 0 5px;
            .text {
              flex: 1;
              p {
                color: #8d8d8d;
                font-family: "Noto Sans HK";
                font-size: 13.5px;
                font-style: normal;
                font-weight: 500;
                line-height: 18.75px; /* 138.889% */
                letter-spacing: 0.675px;
                display: -webkit-box;
                -webkit-line-clamp: 3;
                -webkit-box-orient: vertical;
                overflow: hidden;
                text-overflow: ellipsis;
              }
            }
            .svgIcon {
              width: 20px;
              margin-left: 20px;
              display: flex;
              flex-direction: column;
              align-items: center;
              gap: 5px 0;
              svg {
                cursor: pointer;
              }
            }
          }
          &.hot {
            &::after {
              content: "";
              position: absolute;
              top: 0;
              right: 0;
              transform: translate(35%, 0%);
              width: 36px;
              height: 36px;
              border-radius: 50%;
              background: url(https://statichk.cmermedical.com/vision/imgs/42273ef87c224cab.png)
                no-repeat;
              background-size: 100% 100%;
              animation: breathe2 2s ease-in-out infinite;
            }
          }
          &:hover {
            // .image{
            //     img{
            //         transform: scale(1.1);
            //     }
            // }
          }
        }
      }
      &-slide:hover {
        .content {
          transform: translateY(-10px);
          box-shadow: 4px 5px 8px 3px rgb(0 0 0 / 27%);
        }
      }
    }
  }
  .section2 {
    width: 100%;
    max-width: 960px;
    margin-top: 65px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    .list-in {
      padding: 0 10px 15px;
      position: relative;
      &-t {
        display: flex;
        align-items: flex-end;
        position: relative;
        z-index: 1;
        .image {
          width: 120px;
          padding: 0 10px;
          img {
            width: 100%;
            border-radius: 50%;
          }
        }
        .context {
          h3 {
            color: var(--Grey-Deep, #4d4d4d);
            font-family: "Noto Sans HK";
            font-size: 16.5px;
            font-style: normal;
            font-weight: 700;
            line-height: 21px; /* 127.273% */
            letter-spacing: 0.825px;
            margin-bottom: 5px;
          }
          h4 {
            color: var(--Brand-Color, #00a6ce);
            font-family: "Noto Sans HK";
            font-size: 15px;
            font-style: normal;
            font-weight: 700;
            line-height: 21px; /* 140% */
            letter-spacing: 0.75px;
          }
          p {
            color: var(--Basic-2, #59ba68);
            font-family: "Noto Sans HK";
            font-size: 13.5px;
            font-style: normal;
            font-weight: 500;
            line-height: 18.75px; /* 138.889% */
            letter-spacing: 0.675px;
            margin-bottom: 10px;
          }
        }
      }
      &-b {
        margin-top: 10px;
        position: relative;
        z-index: 1;
        p {
          color: var(--Grey-Deep, #4d4d4d);
          font-family: "Noto Sans HK";
          font-size: 13.5px;
          font-style: normal;
          font-weight: 500;
          line-height: 21px; /* 155.556% */
          text-transform: uppercase;
        }
      }
      &::after {
        content: "";
        width: 100%;
        height: calc(100% - 40px);
        position: absolute;
        z-index: 0;
        bottom: 0;
        left: 0;
        background: rgba(211, 240, 253, 0.5);
        border-radius: 10px;
      }
    }
  }
  // .section3 {
  //   width: 100%;
  //   max-width: 960px;
  //   margin-top: 65px;
  // }
}

@media (min-width: 768px) and (max-width: 1452px) {
  .services {
    width: 100%;
    max-width: 960px;
    margin: 90px auto 0;
    position: relative;
    &-t {
      display: flex;
      justify-content: space-between;
      .title {
        color: var(--Brand-Color, #00a6ce);
        font-family: "Noto Sans HK";
        font-size: 33.75px;
        font-style: normal;
        font-weight: 700;
        line-height: 45px; /* 133.333% */
        letter-spacing: 1.688px;
      }
      .btn {
        display: flex;
        justify-content: space-between;
        top: 0.52vw;
        &-in {
          color: var(--White, #fff);
          text-align: center;
          font-family: "Noto Sans HK";
          font-size: 1.146vw;
          font-style: normal;
          font-weight: 400;
          line-height: 120%;
          border-radius: 30px;
          display: flex;
          align-items: center;
          padding: 0.35vw 0.52vw;
          margin-left: 7px;
          box-shadow: inset 0px 4px 8px rgba(0, 0, 0, 0.25);
          & > span:nth-child(1),
          & > span:nth-child(3) {
            display: flex;
            justify-content: center;
            align-items: center;
          }
          & > span:nth-child(2) {
            padding: 0 6px 0 3px;
          }
        }
        &-in:hover {
          box-shadow: 4px 5px 8px 3px rgb(0 0 0 / 27%);
        }
      }
    }
    &-b {
      margin-top: 52px;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 25px 24px;
      .list-in {
        padding: 10px 0 20px 15px;
        background: #fff;
        box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.1);
        border-radius: 25px;
        display: flex;
        .image {
          width: 148px;
          margin-right: 15px;
          img {
            width: 100%;
            border-radius: 20px;
          }
        }
        .context {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          &-t {
            h3 {
              color: var(--Grey, #4d4d4d);
              font-family: "Noto Sans HK";
              font-size: 16.5px;
              font-style: normal;
              font-weight: 500;
              line-height: 22.5px; /* 136.364% */
              letter-spacing: 0.825px;
            }
          }
          &-b {
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
            &-l {
              .context-text {
                p {
                  color: var(--Brand-2, #59ba68);
                  font-family: "Noto Sans HK";
                  font-size: 13.5px;
                  font-style: normal;
                  font-weight: 500;
                  line-height: 130%; /* 133.333% */
                  text-transform: uppercase;
                }
              }
              .context-context {
                p {
                  color: var(--Brand-2, #59ba68);
                  font-family: "Noto Sans HK";
                  font-size: 16.5px;
                  font-style: normal;
                  font-weight: 500;
                  line-height: 22.5px; /* 136.364% */
                  letter-spacing: 0.825px;
                }
              }
              .context-price {
                p {
                  color: var(--Brand-2, #59ba68);
                  font-family: "Noto Sans HK";
                  font-size: 13.5px;
                  font-style: normal;
                  font-weight: 700;
                  line-height: 130%;
                  text-transform: uppercase;
                  span {
                    font-size: 25.5px;
                    font-style: normal;
                    font-weight: 500;
                    line-height: 30px;
                  }
                }
              }
            }
            &-r {
              margin-right: 20px;
              width: 28px;
              height: 28px;
              position: relative;
              & > span {
                position: relative;
                z-index: 1;
                background: linear-gradient(90deg, #00a6ce 40%, #3346ed);
                border-radius: 50%;
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                transition: all 0.3s;
                box-sizing: border-box;
                cursor: pointer;
              }
              &::after {
                content: "";
                background: linear-gradient(90deg, #00a6ce 40%, #3346ed);
                filter: blur(10px);
                position: absolute;
                width: 100%;
                height: 100%;
                z-index: 0;
                border-radius: 50%;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                opacity: 0;
                transition: all 0.3s;
              }
              &:hover {
                & > span {
                  border: 2px solid #fff;
                }
                &::after {
                  opacity: 1;
                  transform: translate(-50%, -50%) scale(1.2);
                }
              }
            }
          }
        }
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .miyosmart {
    &-banner {
      margin-top: 22.307vw;
    }
  }
  .services {
    padding: 0 7.692vw;
    box-sizing: border-box;
    margin: 6.1538vw auto 0;
    &-t {
      .title {
        font-size: 6.1538vw;
        line-height: 7.692vw;
      }
      .btn {
        display: none;
      }
    }
    &-b {
      margin-top: 4.1025vw;
      gap: 2.05vw;
      .list-in {
        flex-direction: column;
        padding: 2.307vw;
        box-shadow: 0 0 2.564vw 0 rgba(0, 0, 0, 0.05);
        border-radius: 3.846vw;
        .image {
          width: 100%;
          margin-right: 0;
          img {
            border-radius: 2.56vw;
          }
        }
        .context {
          &-t {
            display: inline-block;
            h3 {
              font-size: 3.589vw;
              line-height: 4.1025vw;
              display: block;
            }
          }
          &-b {
            &-l {
              .context-text {
                p {
                  font-size: 3.07vw;
                  line-height: 6.1538vw;
                }
              }
              .context-context {
                p {
                  font-size: 4.1025vw;
                  line-height: 6.1538vw;
                }
              }
              .context-price {
                p {
                  font-size: 4.615vw;
                  line-height: 6.1538vw;
                  span {
                    font-size: 4.615vw;
                    line-height: 6.1538vw;
                  }
                }
              }
            }
            &-r {
              width: 4.7818vw;
              height: 4.7818vw;
              margin-right: 0;
              span {
                svg {
                  width: 1.28vw;
                }
              }
              animation: breathe 2s ease-in-out infinite;
            }
          }
        }
        &:nth-of-type(2),
        &:nth-of-type(3) {
          .context {
            &-t {
              h3 {
                display: inline;
              }
            }
          }
        }
      }
    }
  }
  .newDiscounts {
    margin-top: 11.025vw;
    padding: 0 3.128vw 7.948vw;
    box-sizing: border-box;
    &-in {
      &-t {
        & > div {
          & > span {
            font-size: 6.1538vw;
            line-height: 7.692vw;
          }
          img {
            width: 16.923vw;
          }
          &:nth-of-type(1) {
            margin-left: -2.564vw;
          }
          &:nth-of-type(2) {
            margin-top: 5.128vw;
          }
          &:nth-of-type(3) {
            margin-top: 7.692vw;
            margin-left: -1.28vw;
          }
        }
      }
      &-b {
        margin-top: 1.28vw;
        // display: grid;
        // grid-template-columns: repeat(2, 1fr);
        // gap: 5.128vw;
        .list-in {
          // width: 158px !important;
          border-radius: 2.82vw;
          padding: 3.076vw;
          box-shadow: 0 0 1.28vw 0px rgba(0, 0, 0, 0.1);

          h3 {
            font-size: 3.075vw;
            font-style: normal;
            font-weight: 500;
            line-height: 3.075vw; /* 100.069% */
            letter-spacing: 0.7px;
            -webkit-line-clamp: 2;
            margin-top: 1.28vw;
            min-height: 7.05128vw;
          }
          .context {
            margin-top: 1.538vw;
            align-items: center;
            &-l {
              font-size: 2.56vw;
              line-height: 3.075vw;
              font-weight: 500;
              white-space: pre-wrap;
              span {
                font-size: 3.58vw;
              }
            }
            &-r {
              padding: 2.05vw;
              min-width: 12.169vw;
              span {
                font-size: 2.05vw;
              }
              svg {
                width: 2.307vw;
                height: 2.307vw;
              }
            }
          }
        }
      }
    }
    :deep(.HomePageSwiper) {
      .swiper-slide {
        border-radius: 2.82vw;
        overflow: hidden;
      }
    }
  }
  .witness {
    padding: 0 6.4102vw;
    box-sizing: border-box;
    margin: 4.615vw auto 8.2vw;
    overflow: hidden;
    &-t {
      font-size: 6.1538vw;
      line-height: 1.6;
    }
    .section1 {
      width: 100%;
      max-width: 100%;
      margin-top: 0;
      .witnessSwiper {
        padding: 2.56vw 0;
        overflow: visible;
        :deep(.swiper-scrollbar) {
          height: 0.76vw;
          background: rgba(217, 217, 217, 0.5);
          border-radius: 2px;
          margin-top: 7.692vw;
          position: relative;
          &::after {
            content: "";
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            width: 16.15vw;
            height: 10.25vw;
            background: url(https://statichk.cmermedical.com/vision/imgs/2fe41fe5fcf9b000.png)
              no-repeat;
            background-size: 100% 100%;
            animation: breathe 2s ease-in-out infinite;
          }
          .swiper-scrollbar-drag {
            height: 0.76vw;
            background: #5bc5de;
            border-radius: 2px;
          }
        }
        &-slide {
          padding: 2.564vw 0;
          .content {
            padding: 2.05vw;
            border-radius: 2.564vw;
            height: 58.975vw;
            box-shadow: 0 0 1.025vw 0 rgba(0, 0, 0, 0.2);
            .image {
              img {
                border-radius: 2.05vw;
              }
            }
            .title {
              padding: 1.28vw 0;
              align-items: flex-end;
              h3 {
                font-size: 3.589vw;
                line-height: normal;
              }
              p {
                font-size: 3.076vw;
                line-height: normal;
              }
            }
            .context {
              padding: 0;
              .text {
                p {
                  font-size: 3.076vw;
                  line-height: normal;
                }
              }
              .svgIcon {
                width: 3.846vw;
                margin-right: 0;
                margin-left: 8px;
                svg {
                  width: 100%;
                  height: 3.846vw;
                }
              }
            }
            &.hot {
              &::after {
                width: 6.1538vw;
                height: 6.1538vw;
                transform: translate(30%, -15%);
                animation: breathe2 2s ease-in-out infinite;
              }
            }
          }
        }
      }
    }
    .section2 {
      grid-template-columns: repeat(1, 1fr);
      gap: 5.128vw;
      margin-top: 5.128vw;
      .list-in {
        &-t {
          .image {
            width: 34.1vw;
            img {
              width: 100%;
            }
          }
          .context {
            h3 {
              font-size: 5.128vw;
              line-height: 6.1538vw;
            }
            h4 {
              font-size: 4.1025vw;
              line-height: 6.1538vw;
              letter-spacing: 0.8px;
            }
            p {
              font-size: 3.589vw;
              line-height: 5.128vw;
              letter-spacing: 0.7px;
            }
          }
        }
        &-b {
          p {
            font-size: 3.589vw;
            line-height: 6.1538vw;
          }
        }
      }
    }
  }
}
@keyframes breathe {
  0% {
    filter: drop-shadow(0 0 0 rgba(255, 11, 11, 0));
  }
  50% {
    filter: drop-shadow(0 0 10px #00a6ce);
  }
  100% {
    filter: drop-shadow(0 0 0 rgba(255, 11, 11, 0));
  }
}
@keyframes breathe2 {
  0% {
    filter: drop-shadow(0 0 0 rgba(255, 11, 11, 0));
  }
  50% {
    filter: drop-shadow(0 0 7px #f1395e);
  }
  100% {
    filter: drop-shadow(0 0 0 rgba(255, 11, 11, 0));
  }
}

.element {
  opacity: 1;
  visibility: visible;
  transition: opacity 3s, visibility 3s;
}
.element:hover {
  opacity: 1;
}
.element:not(:hover) {
  opacity: 0;
  visibility: hidden;
}
</style>