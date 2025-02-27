<script lang="ts" setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import {
  Autoplay,
  Pagination,
  Navigation,
  Scrollbar,
  Grid,
} from "swiper/modules";
import getWindowSize from "@/utils/width";
import { pa } from "element-plus/es/locale";
const isPc = ref(true);
const modules = [Autoplay, Pagination, Navigation, Scrollbar];
const modules2 = [Grid, Pagination];
const modules3 = [Pagination];
onMounted(() => {
  let { widthState, width } = getWindowSize();
  window.addEventListener("resize", () => {
    let { widthState, width } = getWindowSize();
    isPc.value = widthState;
  });
  isPc.value = widthState;

  getLocale();
});
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
</script>

<template>
  <div class="index">
    <div class="witness">
      <div class="witness-t">
        <span>最舒適的角膜矯形鏡</span>
        <span>最真實的感受</span>
        <span>用家見證</span>
        <span>Review</span>
      </div>
      <section class="section1" v-if="isPc">
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
              </div>
              <div class="context-image">
                <img
                  src="https://statichk.cmermedical.com/vision/imgs/2025021110392801.svg"
                  alt=""
                />
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </section>
      <section class="section1" v-else>
        <div class="witnessSwiper">
          <div
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
              </div>
              <div class="title">
                <h3>{{ item.name }}</h3>
                <p>{{ item.identity }}</p>
              </div>
              <div class="context">
                <div class="text">
                  <p>{{ item.text }}</p>
                </div>
              </div>
              <div class="context-image">
                <img
                  src="https://statichk.cmermedical.com/vision/imgs/2025021110392801.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <div class="witness-user">
      <section class="section2" v-if="isPc">
        <div
          class="list-in"
          v-for="(item, index) in witness.section2"
          :key="index"
        >
          <div class="list-in-t">
            <div class="context">
              <span>“</span>
              <h3>{{ item.name }}</h3>
              <h4>{{ item.services }}</h4>
            </div>
          </div>
          <div class="list-in-b">
            <p>{{ item.text }}</p>
            <p>{{ item.slogan }}</p>
          </div>
        </div>
      </section>
      <section class="section2" v-else>
        <swiper
          :slidesPerView="1"
          :centeredSlides="true"
          :spaceBetween="15"
          :grabCursor="true"
          class="mySwiper"
        >
          <swiper-slide v-for="(item, index) in witness.section2" :key="index">
            <div class="list-in">
              <div class="list-in-t">
                <div class="context">
                  <span>“</span>
                  <h3>{{ item.name }}</h3>
                  <h4>{{ item.services }}</h4>
                </div>
              </div>
              <div class="list-in-b">
                <p>{{ item.text }}</p>
                <p>{{ item.slogan }}</p>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </section>
    </div>
  </div>
</template>

<style lang="scss" scoped>
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

@media screen and (min-width: 768px) {
  .index {
    margin-bottom: 8.33vw;
  }
  .witness {
    width: 100%;
    margin: 33px auto 100px;
    display: flex;
    align-items: flex-start;
    max-width: 1150px;
    &-t {
      width: 100%;
      color: #00a6ce;
      font-family: "Noto Sans";
      font-size: 27.75px;
      font-style: normal;
      font-weight: 900;
      line-height: 35px; /* 126.126% */
      display: flex;
      box-sizing: border-box;
      padding-top: 50px;
      span {
        writing-mode: vertical-rl;
        text-orientation: mixed;
      }
      span:nth-child(1),
      span:nth-child(2) {
        color: #60605f;
        font-family: "Noto Sans HK";
        font-size: 18.319px;
        font-style: normal;
        font-weight: 100;
        line-height: 26.333px; /* 143.75% */
      }
      span:nth-child(4) {
        font-size: 14px;
        line-height: 10px;
      }
    }
    .section1 {
      max-width: 960px;
      margin-top: 20px;
      .witnessSwiper {
        &-slide {
          padding: 20px 0 0 0;
          .content {
            position: relative;
            cursor: pointer;
            background: url("https://statichk.cmermedical.com/vision/imgs/2025021110144501.png")
              no-repeat;
            border-radius: 15px;
            height: 370px;
            display: inline-block;
            box-sizing: border-box;
            padding: 22px 40px 20px 20px;
            .divShow {
              display: none; /* 默认情况下隐藏这个div */
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%); /* 这会将div居中在其父元素内 */
            }
            .image {
              width: 100%;
              border-radius: 15px;
              position: relative;
              width: 146px;
              height: 146px;
              img {
                z-index: 99;
                overflow: hidden;
                width: 100%;
                height: 100%;
                object-fit: cover;
                border-radius: 15px;
              }
            }
            .image::after {
              content: "";
              width: 55px;
              height: 55px;
              background-size: cover;
              position: absolute;
              bottom: -16px;
              right: -10px;
              background: url("https://statichk.cmermedical.com/vision/imgs/2025021110395001.svg")
                no-repeat;
              border-radius: 15px;
              z-index: 100;
            }
            .title {
              display: flex;
              justify-content: space-between;
              flex-direction: column-reverse;
              align-items: flex-start;
              padding: 14px 0;
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
              padding: 0;
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
            .context-image {
              position: absolute;
              bottom: 30px;
              left: 50%;
              width: max-content;
              margin: 0 auto;
              transform: translateX(-60%);
            }
          }
          .content::before {
            content: "";
            width: 41px;
            height: 39px;
            position: absolute;
            z-index: 20;
            background: url("https://statichk.cmermedical.com/vision/imgs/2025021110394301.svg")
              no-repeat;
            right: 0;
            top: -13px;
          }
          .content::after {
            content: "";
            width: 70%;
            height: 2px;
            background: #00a6ce;
            position: absolute;
            z-index: 0;
            left: 50%;
            bottom: 71px;
            transform: translateX(-58%);
          }
        }
        &-slide:nth-child(2n) {
          margin-top: 100px;
        }
      }
    }
  }
  .witness-user {
    max-width: 1150px;
    margin: 0 auto;
    position: relative;
    z-index: 20;
  }
  .section2 {
    width: 100%;
    margin-top: 65px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    .list-in {
      padding: 24px 33px;
      position: relative;
      background: rgba(211, 240, 253, 0.5);
      border-radius: 20px;
      border: 1px solid #00a6ce;
      background: #fff;
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
          span {
            position: absolute;
            left: -65px;
            color: #00a6ce;
            font-family: "Noto Sans HK";
            font-size: 115px;
            font-style: normal;
            font-weight: 700;
            line-height: 18.75px;
            text-transform: uppercase;
            bottom: -18px;
          }
          h3 {
            color: var(--Grey-Deep, #4d4d4d);
            font-family: "Noto Sans HK";
            font-size: 16.5px;
            font-style: normal;
            font-weight: 700;
            line-height: 21px; /* 127.273% */
            letter-spacing: 0.825px;
            margin-bottom: 5px;
            padding-left: 60px;
          }
          h4 {
            padding-left: 60px;
            color: var(--Brand-Color, #00a6ce);
            font-family: "Noto Sans HK";
            font-size: 15px;
            font-style: normal;
            font-weight: 700;
            line-height: 21px; /* 140% */
            letter-spacing: 0.75px;
          }
        }
      }
      &-b {
        margin-top: 10px;
        position: relative;
        z-index: 1;
        p:nth-child(1) {
          min-height: 105px;
        }
        p {
          color: var(--Grey-Deep, #4d4d4d);
          font-family: "Noto Sans HK";
          font-size: 13.5px;
          font-style: normal;
          font-weight: 500;
          line-height: 21px; /* 155.556% */
          text-transform: uppercase;
        }
        p:nth-child(2) {
          color: #00a6ce;
          font-family: "Noto Sans HK";
          font-size: 15px;
          font-style: normal;
          font-weight: 500;
          line-height: 18.75px; /* 125% */
          text-transform: uppercase;
        }
      }
    }
  }
}

@media screen and (max-width: 767px) {
  .witness {
    padding: 0 6.4102vw;
    box-sizing: border-box;
    margin: 4.615vw auto 8.2vw;
    overflow: hidden;
    &-t {
      display: flex;
      flex-direction: column-reverse;
      & > span:nth-child(4) {
        color: #00a6ce;
        font-family: Inter;
        font-family: "Noto Sans HK";
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        font-size: 3.2883vw;
      }
      & > span:nth-child(3) {
        color: #00a6ce;
        font-family: Inter;
        font-family: "Noto Sans HK";
        font-size: 24px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
      }
      & > span:nth-child(1),
      & > span:nth-child(2) {
        color: #60605f;
        font-family: "Noto Sans HK";
        font-size: 16px;
        font-style: normal;
        font-weight: 250;
        line-height: 26.333px; /* 164.583% */
      }
    }
    .section1 {
      width: 100%;
      max-width: 100%;
      margin-top: 0;
      .witnessSwiper {
        padding: 9.74vw 0;
        overflow: visible;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 9vw 4.04vw;

        &-slide {
          background: url(https://statichk.cmermedical.com/vision/imgs/2025021209371801.svg)
            no-repeat;
          padding: 4.1vw 5vw 4.1vw 4.1vw;
          box-sizing: border-box;
          height: 70vw;
          width: 42.69vw;
          display: flex;
          flex-direction: column;
          position: relative;
          .content {
            padding: 0;
            border-radius: 0;
            height: auto;
            box-shadow: none;
            .image {
              position: relative;
              width: 28.46vw;
              height: 28.46vw;
              img {
                width: 100%;
                height: 100%;
                border-radius: 2.05vw;
                object-fit: cover;
              }
            }
            .image::after {
              content: "";
              width: 10.512vw;
              height: 10.512vw;
              background: url(https://statichk.cmermedical.com/vision/imgs/2025021110395001.svg)
                no-repeat;
              background-size: cover;
              position: absolute;
              bottom: -3.07vw;
              right: -1.79vw;
            }
            .title {
              color: #60605f;
              font-family: "Noto Sans HK";
              font-size: 12.75px;
              font-style: normal;
              font-weight: 700;
              line-height: normal;
              text-transform: uppercase;
              margin-top: 10px;
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
              padding: 0 6vw 0 0;
              .text {
                p {
                  color: #8d8d8d;
                  text-align: justify;
                  font-family: "Noto Sans HK";
                  font-size: 10px;
                  font-style: normal;
                  font-weight: 400;
                  line-height: 16px; /* 160% */
                  letter-spacing: 0.5px;
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
            .context-image {
              position: absolute;
              bottom: 2.2vw;
              transform: translateX(-60%);
              left: 50%;
            }
          }
        }
        &-slide::after {
          content: "";
          width: 28.25vw;
          height: 0.55vw;
          background: #00a6ce;
          position: absolute;
          left: 50%;
          bottom: 11.5vw;
          transform: translateX(-60%);
        }
        &-slide::before {
          content: "";
          width: 7.6vw;
          height: 7.6vw;
          background: url(https://statichk.cmermedical.com/vision/imgs/2025021110394301.svg)
            no-repeat;
          background-size: cover;
          position: absolute;
          right: 1.1vw;
          top: -3.2vw;
        }
        &-slide:nth-child(2n) {
          margin-top: 8.717vw;
        }
      }
    }
  }
  .witness-user {
    margin-bottom: 25px;
  }
  .section2 {
    grid-template-columns: repeat(1, 1fr);
    gap: 5.128vw;
    margin-top: 5.128vw;
    .list-in {
      // min-width: 58.46vw;
      min-height: 37.17vw;
      border-radius: 13.123px;
      border: 0.656px solid #00a6ce;
      background: #fff;
      box-sizing: border-box;
      padding: 3.8vw 5.6vw;
      max-width: 80%;
      margin: 0 auto;
      &-t {
        .image {
          width: 34.1vw;
          img {
            width: 100%;
          }
        }
        .context {
          position: relative;
          padding-left: 9.1vw;
          h3 {
            color: #60605f;
            font-family: "Noto Sans HK";
            font-size: 10px;
            font-style: normal;
            font-weight: 700;
            line-height: 12.303px; /* 123.031% */
            text-transform: uppercase;
          }
          h4 {
            color: #00a6ce;
            font-family: "Noto Sans HK";
            font-size: 10px;
            font-style: normal;
            font-weight: 700;
            line-height: 12.303px; /* 123.031% */
            text-transform: uppercase;
          }
          span {
            position: absolute;
            left: -8.5vw;
            bottom: -1.1vw;
            color: #00a6ce;
            font-family: "Noto Sans HK";
            font-size: 62.336px;
            font-style: normal;
            font-weight: 700;
            line-height: 0.303px; /* 19.737% */
            text-transform: uppercase;
          }
        }
      }
      &-b {
        p:nth-child(1) {
          margin-top: 6px;
          color: #60605f;
          font-family: "Noto Sans HK";
          font-size: 10px;
          font-style: normal;
          font-weight: 300;
          line-height: 12.992px; /* 129.921% */
          text-transform: uppercase;
          margin-bottom: 12px;
        }
        p:nth-child(2) {
          color: #00a6ce;
          font-family: "Noto Sans HK";
          font-size: 10px;
          font-style: normal;
          font-weight: 500;
          line-height: 12.303px; /* 123.031% */
          text-transform: uppercase;
        }
      }
    }
  }
}
</style>