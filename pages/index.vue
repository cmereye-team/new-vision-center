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
      link: "/eye-examination-adult",
      color: "#00A6CE",
    },
    {
      name: "兒童檢查",
      link: "/eye-examination-child",
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
      link: "/orthokeratoplasty",
      text: ["低至"],
      context: [],
      price: "1,000",
    },
    {
      img: "https://statichk.cmermedical.com/vision/imgs/2fce54bd583f773d.png",
      title: ["專業驗配近視", "控制眼鏡"],
      link: "/eye-examination-child",
      text: [],
      context: ["買鏡片", "送鏡架"],
      price: "",
    },
    {
      img: "https://statichk.cmermedical.com/vision/imgs/c0e70a7699fdb561.png",
      title: ["眼睛檢查套餐"],
      link: "/eye-examination-adult",
      text: ["低至"],
      context: [],
      price: "350",
    },
    {
      img: "https://statichk.cmermedical.com/vision/imgs/9ffb4105482ebeb2.png",
      title: ["青光眼檢查", "套餐"],
      link: "/eye-examination-adult",
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
      link: "https://api.whatsapp.com/send?phone=85269180511&text=%E4%BD%A0%E5%A5%BD,%E6%88%91%E6%83%B3%E6%9F%A5%E8%A9%A2",
      price: "4,560",
      routerLink: "/now-discounts",
    },
    {
      name: "驗配Rodenstock漸進鏡即免費升級變色鏡片",
      img: "https://statichk.cmermedical.com/vision/imgs/2a5b0c7c66fbe4db.png",
      link: "https://api.whatsapp.com/send?phone=85269180511&text=%E4%BD%A0%E5%A5%BD,%E6%88%91%E6%83%B3%E6%9F%A5%E8%A9%A2",
      price: "4,560",
      routerLink: "/now-discounts",
    },
    {
      name: "驗配Rodenstock漸進鏡即免費升級變色鏡片",
      img: "https://statichk.cmermedical.com/vision/imgs/2a5b0c7c66fbe4db.png",
      link: "https://api.whatsapp.com/send?phone=85269180511&text=%E4%BD%A0%E5%A5%BD,%E6%88%91%E6%83%B3%E6%9F%A5%E8%A9%A2",
      price: "4,560",
      routerLink: "/now-discounts",
    },
    {
      name: "驗配Rodenstock漸進鏡即免費升級變色鏡片",
      img: "https://statichk.cmermedical.com/vision/imgs/2a5b0c7c66fbe4db.png",
      link: "https://api.whatsapp.com/send?phone=85269180511&text=%E4%BD%A0%E5%A5%BD,%E6%88%91%E6%83%B3%E6%9F%A5%E8%A9%A2",
      price: "4,560",
      routerLink: "/now-discounts",
    },
    {
      name: "驗配Rodenstock漸進鏡即免費升級變色鏡片",
      img: "https://statichk.cmermedical.com/vision/imgs/2a5b0c7c66fbe4db.png",
      link: "https://api.whatsapp.com/send?phone=85269180511&text=%E4%BD%A0%E5%A5%BD,%E6%88%91%E6%83%B3%E6%9F%A5%E8%A9%A2",
      price: "4,560",
      routerLink: "/now-discounts",
    },
    {
      name: "驗配Rodenstock漸進鏡即免費升級變色鏡片",
      img: "https://statichk.cmermedical.com/vision/imgs/2a5b0c7c66fbe4db.png",
      link: "https://api.whatsapp.com/send?phone=85269180511&text=%E4%BD%A0%E5%A5%BD,%E6%88%91%E6%83%B3%E6%9F%A5%E8%A9%A2",
      price: "4,560",
      routerLink: "/now-discounts",
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
      img: "https://statichk.cmermedical.com/vision/imgs/00f4eb10c798679f.png",
      name: "Billy",
      services: "漸進鏡",
      slogan: "價錢實惠、舒適",
      text: "視光師和助理都非常專業，對各種漸進鏡片的功能和用法講解好詳細，給我們很多有用的意見，價錢更比大型連鎖平，戴了新眼鏡後效果非常好！中心儀器先進，檢查和講解都非常仔細專業，服務一流！",
    },
    {
      img: "https://statichk.cmermedical.com/vision/imgs/00f4eb10c798679f.png",
      name: "Jenny",
      services: "角膜矯形鏡 (ok鏡)",
      slogan: "效果顯著、安心",
      text: "上年開始我帶了兩個小朋友來這間中心配了OK鏡，視光師非常專業，而且服務態度認真。姑娘非常之有耐心，介紹了朋友也讚口不絕。",
    },
    {
      img: "https://statichk.cmermedical.com/vision/imgs/00f4eb10c798679f.png",
      name: "Paul",
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
          routerLink: "/now-discounts",
          link: "https://api.whatsapp.com/send?phone=85269180511&text=%E4%BD%A0%E5%A5%BD,%E6%88%91%E6%83%B3%E6%9F%A5%E8%A9%A2",
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
    <!-- <PublicBanner :banner="bannerImg" /> -->
    <PublicBannerHomeBanner ref="homeBanner" key="home_banner" />
    <div class="services">
      <div class="services-t">
        <div class="title">
          {{ services.title }}
        </div>
        <div class="btn">
          <nuxtLink
            class="btn-in"
            v-for="(item, index) in services.btns"
            :style="{ background: item.color }"
            :key="index"
            :to="item.link"
          >
            <span><img src="../assets/img/triangle-left.svg" alt="" /></span>
            <span>{{ item.name }}</span>
            <span><img src="../assets/img/triangle-right.svg" alt="" /></span>
          </nuxtLink>
        </div>
      </div>
      <div class="services-b">
        <nuxtLink
          class="list-in"
          v-for="(item, index) in services.lists"
          :key="index"
          :to="item.link"
        >
          <div class="image">
            <img
              :src="item.img"
              :alt="`${item.title}`"
              :title="`${item.title}`"
            />
          </div>

          <div class="context">
            <div class="context-t">
              <h3
                v-for="(titleItem, titleIndex) in item.title"
                :key="titleIndex"
              >
                {{ titleItem }}
              </h3>
            </div>
            <div class="context-b">
              <div class="context-b-l">
                <div class="context-text" v-if="item.text.length">
                  <p
                    v-for="(textItem, textIndex) in item.text"
                    :key="textIndex"
                  >
                    {{ textItem }}
                  </p>
                </div>
                <div class="context-context" v-if="item.context.length">
                  <p
                    v-for="(contextItem, contextIndex) in item.context"
                    :key="contextIndex"
                  >
                    {{ contextItem }}
                  </p>
                </div>
                <div class="context-price" v-if="item.price !== ''">
                  <p>
                    $<span>{{ item.price }}</span>
                  </p>
                </div>
              </div>
              <div class="context-b-r">
                <span>
                  <svg
                    width="8"
                    height="14"
                    viewBox="0 0 8 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.17578 1.40332L6.81032 7.03786"
                      stroke="white"
                      stroke-width="1.51055"
                      stroke-linecap="round"
                    />
                    <path
                      d="M6.81032 7.0376L1.17578 12.6721"
                      stroke="white"
                      stroke-width="1.51055"
                      stroke-linecap="round"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </nuxtLink>
      </div>
    </div>
    <div class="newDiscounts">
      <div class="newDiscounts-in">
        <div class="newDiscounts-in-t">
          <div>
            <img
              src="https://statichk.cmermedical.com/vision/imgs/96bb721f05c4cfd5.png"
              alt=""
            />
          </div>
          <div>
            <span v-for="(item, index) in newDiscounts.title" :key="index">
              {{ item }}
            </span>
          </div>
          <div>
            <img
              src="https://statichk.cmermedical.com/vision/imgs/fd41cbf881791a4b.png"
              alt=""
            />
          </div>
        </div>
        <div class="newDiscounts-in-b" v-if="isPc">
          <swiper
            :slidesPerView="4"
            :spaceBetween="30"
            :loop="true"
            :autoplay="{
              delay: 2500,
              disableOnInteraction: false,
            }"
            :modules="[Pagination, Autoplay, Navigation]"
          >
            <swiper-slide
              v-for="item in discounts"
              :key="item.id"
              class="list-in"
              :id="item.id"
              @click="goTo(item.routerLink)"
            >
              <div class="image">
                <img :src="item.img" :alt="item.title" :title="item.title" />
              </div>
              <h3>{{ item.title }}</h3>
              <div class="context">
                <div class="context-l">
                  <div>
                    <span>{{ item.tag }}</span>
                  </div>
                  <div>
                    <span>{{ item.price }}</span>
                  </div>
                </div>
                <a :href="item.link" target="_blank" class="context-r">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="17"
                    viewBox="0 0 18 17"
                    fill="none"
                  >
                    <path
                      d="M16.8106 8.09854C16.8136 9.22292 16.5509 10.3321 16.0439 11.3357C15.4429 12.5384 14.5188 13.5499 13.3753 14.2571C12.2318 14.9643 10.914 15.3391 9.56955 15.3396C8.44516 15.3426 7.33598 15.0799 6.33235 14.5729L1.47656 16.1915L3.09516 11.3357C2.58822 10.3321 2.32552 9.22292 2.32846 8.09854C2.32898 6.75404 2.70381 5.43624 3.41097 4.29275C4.11813 3.14925 5.1297 2.22522 6.33235 1.62415C7.33598 1.11721 8.44516 0.854515 9.56955 0.857446H9.99549C11.7711 0.955407 13.4483 1.70488 14.7057 2.96235C15.9632 4.21983 16.7127 5.89695 16.8106 7.67259V8.09854Z"
                      stroke="white"
                      stroke-width="1.36912"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <span>立即查詢</span>
                </a>
              </div>
            </swiper-slide>
          </swiper>
        </div>
        <div v-else>
          <CenterProfileHomePageSwiper ref="discounts" key="discounts" />
        </div>
      </div>
    </div>
    <div class="witness">
      <div class="witness-t">OK 鏡用家<span> 見證</span></div>
      <section class="section1">
        <swiper
          class="witnessSwiper"
          :modules="[Scrollbar]"
          :scrollbar="{
            hide: false,
          }"
          :slidesPerView="isPc ? 4 : 2.3"
          :spaceBetween="isPc ? 35 : 12"
          @swiper="setSwiper"
        >
          <swiper-slide
            v-for="(item, index) in witness.section1"
            :key="index"
            class="witnessSwiper-slide"
          >
            <div
              @click.stop="openVideo(item.link)"
              class="content"
              :class="{ hot: item.isHot }"
            >
              <div class="image">
                <img :src="item.img" :alt="item.name" />
                <div class="divShow">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="33"
                    height="37"
                    viewBox="0 0 33 37"
                    fill="none"
                  >
                    <g filter="url(#filter0_d_2534_37381)">
                      <path
                        d="M6.77437 2.18226C6.06857 1.764 5.17578 2.27272 5.17578 3.09314V27.6116C5.17578 28.432 6.06857 28.9408 6.77437 28.5226L27.4619 16.2633C28.1539 15.8532 28.1539 14.8516 27.4619 14.4415L6.77437 2.18226Z"
                        stroke="white"
                        stroke-width="3.75"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_d_2534_37381"
                        x="0.300781"
                        y="0.154785"
                        width="32.5547"
                        height="36.3953"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dy="3" />
                        <feGaussianBlur stdDeviation="1.5" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_2534_37381"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_2534_37381"
                          result="shape"
                        />
                      </filter>
                    </defs>
                  </svg>
                </div>
              </div>
              <div class="title">
                <h3>{{ item.name }}</h3>
                <p>{{ item.identity }}</p>
              </div>
              <div class="context">
                <div class="text">
                  <p>{{ item.text }}</p>
                </div>
                <div class="svgIcon">
                  <svg
                    @click.stop="handleIcon('isNew', index)"
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="27"
                    viewBox="0 0 25 27"
                    fill="none"
                  >
                    <g filter="url(&#35;filter0_d_696_25419)">
                      <path
                        d="M12.5261 2.6167C13.28 2.61661 14.0051 2.90678 14.5508 3.42701C15.0966 3.94724 15.4211 4.65759 15.4571 5.4107C16.8178 5.9869 17.9787 6.95114 18.7949 8.18305C19.611 9.41497 20.0462 10.86 20.0461 12.3377V16.5637C20.6639 16.6073 21.2405 16.8897 21.6538 17.351C22.0671 17.8124 22.2846 18.4164 22.2603 19.0353C22.236 19.6542 21.9718 20.2394 21.5236 20.6669C21.0754 21.0944 20.4784 21.3306 19.8591 21.3257H5.19308C4.57373 21.3306 3.97676 21.0944 3.52858 20.6669C3.0804 20.2394 2.81618 19.6542 2.79188 19.0353C2.76757 18.4164 2.98509 17.8124 3.39837 17.351C3.81165 16.8897 4.38825 16.6073 5.00608 16.5637V12.3377C5.00601 10.86 5.44119 9.41497 6.25731 8.18305C7.07343 6.95114 8.23433 5.9869 9.59508 5.4107C9.6313 4.65768 9.95589 3.94746 10.5016 3.42729C11.0473 2.90711 11.7722 2.61686 12.5261 2.6167ZM10.7881 6.9217C9.64126 7.29002 8.641 8.01296 7.93147 8.98632C7.22194 9.95968 6.83978 11.1332 6.84008 12.3377V16.7377C6.83982 17.1753 6.66593 17.595 6.35658 17.9045C6.04723 18.214 5.6277 18.3882 5.19008 18.3887C5.04421 18.3887 4.90432 18.4466 4.80117 18.5498C4.69803 18.6529 4.64008 18.7928 4.64008 18.9387C4.64008 19.0846 4.69803 19.2245 4.80117 19.3276C4.90432 19.4308 5.04421 19.4887 5.19008 19.4887H19.8591C20.005 19.4887 20.1448 19.4308 20.248 19.3276C20.3511 19.2245 20.4091 19.0846 20.4091 18.9387C20.4091 18.7928 20.3511 18.6529 20.248 18.5498C20.1448 18.4466 20.005 18.3887 19.8591 18.3887C19.6423 18.3888 19.4276 18.3462 19.2273 18.2633C19.027 18.1803 18.845 18.0587 18.6917 17.9054C18.5385 17.752 18.4169 17.57 18.3341 17.3696C18.2513 17.1692 18.2088 16.9545 18.2091 16.7377V12.3377C18.2092 11.1332 17.827 9.95979 17.1175 8.98646C16.408 8.01313 15.4078 7.29016 14.2611 6.9217L13.6241 6.7217V5.5487C13.6241 5.25696 13.5082 4.97717 13.3019 4.77088C13.0956 4.56459 12.8158 4.4487 12.5241 4.4487C12.2323 4.4487 11.9526 4.56459 11.7463 4.77088C11.54 4.97717 11.4241 5.25696 11.4241 5.5487V6.7167L10.7881 6.9217ZM9.04108 21.3217H10.8751C10.8674 21.5432 10.9043 21.764 10.9838 21.9709C11.0632 22.1779 11.1835 22.3667 11.3375 22.5261C11.4915 22.6855 11.676 22.8123 11.88 22.8989C12.0841 22.9855 12.3034 23.0302 12.5251 23.0302C12.7467 23.0302 12.9661 22.9855 13.1701 22.8989C13.3742 22.8123 13.5587 22.6855 13.7127 22.5261C13.8666 22.3667 13.9869 22.1779 14.0664 21.9709C14.1458 21.764 14.1828 21.5432 14.1751 21.3217H16.0091C16.0091 22.246 15.6419 23.1324 14.9883 23.786C14.3348 24.4395 13.4484 24.8067 12.5241 24.8067C11.5998 24.8067 10.7134 24.4395 10.0598 23.786C9.40625 23.1324 9.03908 22.246 9.03908 21.3217H9.04108Z"
                        :fill="item.isNew ? '#20D0C4' : '#BBBBBB'"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_d_696_25419"
                        x="0.790039"
                        y="0.616699"
                        width="23.4717"
                        height="26.1899"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset />
                        <feGaussianBlur stdDeviation="1" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_696_25419"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_696_25419"
                          result="shape"
                        />
                      </filter>
                    </defs>
                  </svg>
                  <svg
                    @click.stop="handleIcon('isLike', index)"
                    v-if="!item.isLike"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="22"
                    viewBox="0 0 24 22"
                    fill="none"
                  >
                    <g filter="url(#filter0_d_696_25417)">
                      <path
                        d="M21.655 6.87899C21.4751 5.54712 20.8225 4.32428 19.8162 3.43339C18.81 2.5425 17.5171 2.0429 16.1732 2.02568C14.7761 2.06736 13.4193 2.50406 12.2602 3.28517C11.0996 2.49059 9.73594 2.04465 8.33013 2C6.98297 2.01088 5.68593 2.51224 4.68168 3.41025C3.67744 4.30827 3.03479 5.54142 2.87398 6.87899C2.08649 10.9448 4.5003 16.3227 11.661 19.1547C12.056 19.3165 12.4987 19.3165 12.8936 19.1547C20.025 16.2701 22.4156 10.8922 21.655 6.87899ZM12.2639 17.1628C6.36141 14.749 4.31566 10.474 4.9185 7.27396C4.9952 6.41687 5.38575 5.61831 6.01517 5.03154C6.6446 4.44477 7.46855 4.11113 8.32891 4.09466C9.53752 4.16369 10.6933 4.61358 11.6305 5.37983C11.8121 5.51615 12.0331 5.58985 12.2602 5.58985C12.4873 5.58985 12.7083 5.51615 12.89 5.37983C13.8207 4.6179 14.9677 4.16826 16.1683 4.09466C17.0214 4.11786 17.8371 4.44961 18.4642 5.02838C19.0913 5.60715 19.4873 6.3937 19.5787 7.24216C20.1864 10.4459 18.1664 14.6964 12.2639 17.1628Z"
                        fill="#BBBBBB"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_d_696_25417"
                        x="0.731445"
                        y="0"
                        width="23.0586"
                        height="21.2759"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset />
                        <feGaussianBlur stdDeviation="1" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_696_25417"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_696_25417"
                          result="shape"
                        />
                      </filter>
                    </defs>
                  </svg>
                  <svg
                    v-else
                    @click.stop="handleIcon('isLike', index)"
                    width="28"
                    height="27"
                    viewBox="0 0 28 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g filter="url(#filter0_d_49_7140)">
                      <path
                        d="M6.69891 16.3521L11.6457 20.688L14.6946 21.1628L18.625 18.853L22.1487 14.1052V8.8992L18.625 6.39182L14.2211 7.20537L10.0879 5.98633L6.7002 7.20537L5.41699 10.7291L5.9585 14.1167L6.69891 16.3521Z"
                        fill="#F02756"
                        stroke="#F02756"
                      />
                      <path
                        d="M23.8583 9.73718C23.6695 8.33952 22.9847 7.05627 21.9287 6.12138C20.8727 5.18648 19.5159 4.66221 18.1057 4.64413C16.6396 4.68788 15.2158 5.14614 13.9995 5.96584C12.7815 5.13201 11.3505 4.66404 9.87523 4.61719C8.46153 4.62861 7.10043 5.15473 6.04657 6.0971C4.99272 7.03947 4.31833 8.33354 4.14957 9.73718C3.32319 14.0038 5.85623 19.6474 13.3707 22.6193C13.7851 22.789 14.2497 22.789 14.6642 22.6193C22.1478 19.5922 24.6565 13.9487 23.8583 9.73718ZM14.0033 20.5289C7.80927 17.9959 5.66247 13.5098 6.29509 10.1517C6.37558 9.25223 6.78541 8.41423 7.44593 7.79847C8.10644 7.18272 8.9711 6.8326 9.87395 6.81532C11.1423 6.88776 12.3551 7.35986 13.3386 8.16397C13.5292 8.30702 13.7611 8.38436 13.9995 8.38436C14.2378 8.38436 14.4697 8.30702 14.6603 8.16397C15.637 7.3644 16.8407 6.89255 18.1006 6.81532C18.9958 6.83966 19.8518 7.18779 20.5099 7.79515C21.168 8.40252 21.5835 9.22791 21.6794 10.1183C22.3172 13.4803 20.1973 17.9407 14.0033 20.5289Z"
                        fill="#F02756"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_d_49_7140"
                        x="0"
                        y="0.617188"
                        width="28"
                        height="26.1289"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset />
                        <feGaussianBlur stdDeviation="2" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_49_7140"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_49_7140"
                          result="shape"
                        />
                      </filter>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </section>
      <section class="section2">
        <div
          class="list-in"
          v-for="(item, index) in witness.section2"
          :key="index"
        >
          <div class="list-in-t">
            <div class="image">
              <img :src="item.img" :alt="item.name" :title="item.name" />
            </div>
            <div class="context">
              <h3>{{ item.name }}</h3>
              <h4>{{ item.services }}</h4>
              <p>{{ item.slogan }}</p>
            </div>
          </div>
          <div class="list-in-b">
            <p>{{ item.text }}</p>
          </div>
        </div>
      </section>
      <!-- <section class="section3">
        <ClientOnly> </ClientOnly>
      </section> -->
    </div>
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
        font-family: "Inter";
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
          margin-top: 8px;
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
          font-family: "Inter";
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