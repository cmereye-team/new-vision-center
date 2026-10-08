<script lang="ts" setup>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import { Grid, Autoplay, Pagination, Navigation } from "swiper/modules";
const modules = [Autoplay, Pagination, Navigation];

const modules2 = [Grid, Autoplay, Pagination];
import type { Article } from "@/types/api";
const props = defineProps<{
  list: Article[];
}>();
const loading = ref(true)
const swiperBox = (swiper: any) => {
  deBoxSwiperRef = swiper;
};
let deBoxSwiperRef = {
  slideTo: (a: any) => {},
  slideToLoop: (a: any) => {},
  slidePrev: () => {},
  slideNext: () => {},
};
const handleshowdeBox = (_idx: any) => {
  deBoxSwiperRef.slideTo(_idx);
};
const handlesSliNext = () => {
  deBoxSwiperRef.slideNext();
};
const handlesSliPrev = () => {
  deBoxSwiperRef.slidePrev();
};
interface TabsList {
  id: number;
  img: string;
  title: string;
  price: string;
  reason: string;
  content: string;
  btn1: string;
  btn2: string;
  btn1Link: string;
  btn2Link: string;
  sub_title: string;
  discounts_text: string;
}
const link = ref(
  "https://api.whatsapp.com/send?phone=85269180511&text=你好,我想查詢最新優惠詳情"
);
const button = ref({
  big: '了解產品',
  small: '立即查詢'
})
import getWindowSize from "@/utils/width";
const isPc = ref(true);
const winWSize = ref(0);
onMounted(() => {
  let { widthState, width } = getWindowSize();
  window.addEventListener("resize", () => {
    let { widthState, width } = getWindowSize();
    winWSize.value = width;
    isPc.value = widthState;
  });

  winWSize.value = width;
  isPc.value = widthState;
  window.addEventListener("scroll", getScrollY);
});
const maxNum = ref(1500);
const minNum = ref(1260);
const minNumMb = ref(1000);
const maxNumMb = ref(1400);
const scrollY = ref(0);

const getScrollY = () => {
  const paginationBtnItems = document.querySelectorAll(".pagination_btn_item");
  scrollY.value =
    window.scrollY ||
    document.documentElement.scrollTop ||
    document.body.scrollTop;

  if (winWSize.value > 768) {
    maxNum.value;
    minNum.value;
  } else {
    maxNum.value = maxNumMb.value;
    minNum.value = minNumMb.value;
  }
  if (scrollY.value < maxNum.value && scrollY.value > minNum.value) {
    paginationBtnItems.forEach((item: any) => {
      item.classList.add("price-btn_hover");
    });
  } else {
    paginationBtnItems.forEach((item: any) => {
      item.classList.remove("price-btn_hover");
    });
  }
};

</script>

<template>
  <div class="now-discounts">
    <div class="discounts-title">最新優惠</div>
    <div class="discounts-box">
      <swiper
        :modules="modules"
        :autoplay="{
          delay: 2500,
          disableOnInteraction: false,
        }"
        :loop="true"
        class="mySwiper"
        @swiper="swiperBox"
      >
        <swiper-slide
          v-for="item in list"
          :key="item.id"
          class="discounts-slide"
        >
          <div class="img-slide">
            <img :src="item.ico" :alt="item.content" />
          </div>
          <div class="slide-content">
            <div class="slide-title">
              <span>{{ item.title }}</span>
            </div>
            <div>
              <span>{{ item.ext_lititile }}</span>
            </div>
            <div class="content" v-html="item.content"></div>
            <div>
              <a :href="item.ext_content_whatsapp ?? link" target="_blank"></a>
              <a :href="item.ext_content_whatsapp ?? link" target="_blank" class="WhatsApp_btn">
                <!-- prettier-ignore -->
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="27" viewBox="0 0 28 27" fill="none"><path d="M19.51 15.818c-.287-.148-1.719-.85-1.985-.944-.266-.1-.461-.148-.654.147-.195.293-.748.944-.922 1.142-.17.195-.34.219-.628.074-1.709-.854-2.83-1.524-3.955-3.457-.298-.514.298-.477.854-1.587.095-.195.048-.361-.026-.509s-.654-1.577-.897-2.16c-.234-.566-.477-.487-.654-.498-.168-.01-.36-.01-.556-.01-.195 0-.509.073-.775.36-.266.294-1.018.998-1.018 2.427s1.042 2.813 1.184 3.008c.148.195 2.049 3.127 4.967 4.39 1.846.797 2.569.865 3.491.728.562-.084 1.72-.701 1.96-1.384.24-.68.24-1.263.168-1.385-.07-.129-.266-.203-.553-.342" fill="#fff"/><path d="M25.092 8.923a11.82 11.82 0 0 0-6.317-6.318 11.8 11.8 0 0 0-4.578-.917h-.052a11.8 11.8 0 0 0-8.346 3.49 11.7 11.7 0 0 0-2.51 3.766 11.8 11.8 0 0 0-.904 4.611 11.85 11.85 0 0 0 1.265 5.271v4.008c0 .67.544 1.213 1.213 1.213h4.01a11.85 11.85 0 0 0 5.272 1.265h.055c1.58 0 3.111-.305 4.554-.904a11.7 11.7 0 0 0 3.765-2.51 11.78 11.78 0 0 0 3.491-8.345 11.8 11.8 0 0 0-.918-4.63M21.108 20.47a9.76 9.76 0 0 1-6.91 2.838h-.046a9.84 9.84 0 0 1-4.564-1.147l-.221-.119H5.654V18.33l-.118-.222a9.84 9.84 0 0 1-1.147-4.564 9.75 9.75 0 0 1 2.837-6.956 9.74 9.74 0 0 1 6.93-2.898h.044c1.318 0 2.597.256 3.802.762a9.8 9.8 0 0 1 3.138 2.11 9.77 9.77 0 0 1 2.871 6.982 9.77 9.77 0 0 1-2.903 6.926" fill="#fff"/></svg>
                {{ button.big }}</a>
            </div>
          </div>
        </swiper-slide>
      </swiper>
      <div class="swiper-button-next-prev">
        <div class="button-prev" @click="handlesSliPrev"></div>
        <div class="button-next" @click="handlesSliNext"></div>
      </div>
      <div class="swiper-pagination-btn" v-if="winWSize > 768">
        <swiper
          :slidesPerView="4"
          :spaceBetween="20"
          :modules="[Pagination, Autoplay, Navigation]"
          :autoplay="{
            delay: 2000,
            disableOnInteraction: false,
          }"
          :loop="true"
        >
          <swiper-slide
            v-for="(item, index) in list"
            :key="item.id"
            class="swiper-btn-item"
            :id="item.id"
            @click="handleshowdeBox(index)"
          >
            <div><img :src="item.ico" :alt="item.content" /></div>
            <div>
              <span v-for="(title, index) in item.title" :key="index">
                {{ title }}
              </span>
            </div>
            <div class="price-btn">
              <div>
                <span>{{ item.ext_lititile }}</span>
              </div>
              <div>
                <a
                  class="pagination_btn_item WhatsApp_btn"
                  target="_blank"
                  :href="item.ext_content_whatsapp ?? link"
                  >{{ button.small }}</a
                >
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
      <div class="swiper-pagination-btn" v-else>
        <swiper
          :slidesPerView="2"
          :grid="{
            rows: 2,
            fill: 'row',
          }"
          :spaceBetween="18"
          :pagination="{
            clickable: true,
          }"
          :modules="modules2"
          class="mySwiper"
        >
          <swiper-slide
            class="swiper-btn-item"
            v-for="(item, index) in list"
            @click="handleshowdeBox(index)"
            :key="item.id"
          >
            <div class="discounts_content">
              <img :src="item.ico" :alt="item.content" />
            </div>
            <div>
              <span>{{ item.title }}</span>
            </div>
            <div class="price-btn">
              <div>
                <span class="price-text">{{ item.ext_lititile }}</span>
              </div>
              <div>
                <a
                  class="pagination_btn_item WhatsApp_btn"
                  target="_blank"
                  :href="link"
                  >{{ button.small }}</a
                >
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@media screen and (min-width: 768px) {
  .now-discounts {
    margin-top: 45px;
    margin-bottom: 85px;
    position: relative;
  }
  .discounts-title {
    margin-bottom: 30px;
    color: var(--Brand-Color, #00a6ce);
    font-family: "Noto Sans HK";
    font-size: 37.5px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  .slide-content {
    & > div:nth-child(1) {
      display: flex;
      flex-direction: column;
      margin-bottom: 35px;
      color: #60605f;
      font-family: "Noto Sans HK";
      font-size: 22.5px;
      font-style: normal;
      font-weight: 900;
      line-height: 30px;

    }
    & > div:nth-child(2) {
      margin-bottom: 32px;
      color: var(--Brand-Color, #00a6ce);
      font-family: "Noto Sans HK";
      font-size: 13.5px;
      font-style: normal;
      font-weight: 700;
      line-height: 37.5px;
      & > span {
        color: var(--Brand-Color, #00a6ce);
        font-family: "Noto Sans HK";
        font-size: 24px;
      }
    }
    & > div:nth-child(3) {
      margin-bottom: 20px;
      color: #60605f;
      font-family: "Noto Sans HK";
      font-size: 13.5px;
      font-style: normal;
      font-weight: 500;
      line-height: 22.5px;
    
    }
    & > div:nth-child(4) {
      display: flex;
      & > a {
        // border-radius: 15px;
        // background: var(--Brand-Color, #00a6ce);
        padding: 12px 35px;
        cursor: pointer;

        color: #fff;
        font-family: "Noto Sans HK";
        font-size: 22.5px;
        font-style: normal;
        font-weight: 300;
        line-height: normal;
      
        margin-right: 0;
        border-radius: 37.5px;
        background: url("../../assets/img/bluebtn.svg") no-repeat;
        background-size: cover;
        transition: 0.5s;
        transition-property: box-shadow;
      }
      & > a:nth-child(1) {
        padding: 0;
      }
      & > a:nth-child(2) {
        background: url("../../assets/img/greenbtn.svg") no-repeat;
        background-size: cover;
        display: flex;
        align-items: center;
      }
      & > a:hover {
        box-shadow: 0 0 5px #00a6ce, 0 0 15px #00a6ce, 0 0 30px #00a6ce,
          0 0 100px #00a6ce;
      }
      & > a:nth-child(2):hover {
        box-shadow: 0 0 5px #80f392, 0 0 15px #80f392, 0 0 30px #80f392,
          0 0 100px #80f392;
      }
    }
    :deep(.content) {
      p {
        a {
          color: #00a6ce;
          border-bottom: 2px solid #00a6ce;
        }
      }
    }
  }
  .pagination_btn_item {
    background: url("../../assets/img/bluebtn.svg") no-repeat !important;
    background-size: cover !important;
    transition: 0.5s;
    transition-property: box-shadow;
  }
  .pagination_btn_item:hover {
    box-shadow: 0 0 5px #00a6ce, 0 0 15px #00a6ce, 0 0 30px #00a6ce,
      0 0 100px #00a6ce;
  }
  .swiper-button-next-prev {
    position: absolute;
    top: 21%;
    transform: translateY(-25%);
    z-index: 99;
    width: 100%;
    & > div:nth-child(1) {
      display: block;
      position: absolute;
      left: -4%;
      background: url("https://statichk.cmermedical.com/vision/imgs/1c62cfbbfb64b37f.png")
        no-repeat;
      background-position: right;
      width: 20px;
      height: 40px;
    }
    & > div:nth-child(2) {
      display: inline-block;
      position: absolute;
      right: 52%;
      background: url("https://statichk.cmermedical.com/vision/imgs/15988679aad2e086.png")
        no-repeat;
      background-position: right;
      width: 20px;
      height: 40px;
    }
  }
  .swiper-pagination-btn {
    & > div {
      padding: 20px 0;
    }
    margin-top: 60px;
    .swiper-btn-item {
      //  border-radius: 15px;
      // overflow: hidden;
      margin-bottom: 20px;
      & > div:nth-child(1) {
        margin-bottom: 8px;
        & > img {
          width: 100%;
        }
      }
      & > div:nth-child(2) {
        padding: 0 8px;
        color: #60605f;
        font-family: "Noto Sans HK";
        font-size: 13.5px;
        font-style: normal;
        font-weight: 500;
        line-height: 20.862px;
   
        margin-bottom: 10px;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        min-height: 37.5px;
      }
      & > div:nth-child(3) {
        & > div:nth-child(1) {
          color: var(--Brand-Color, #00a6ce);
          font-family: "Noto Sans HK";
          font-size: 10.5px;
          font-style: normal;
          font-weight: 700;
          line-height: 14.078px;
          span:nth-child(2) {
            color: var(--Brand-Color, #00a6ce);
            font-family: "Noto Sans HK";
            font-size: 23.47px;
            font-style: normal;
            font-weight: 700;
            line-height: 26.078px;
          }
        }
        & > div:nth-child(2) {
          a {
            padding: 5px 14px;
            border-radius: 12.686px;
            background: var(--Brand-Color, #00a6ce);
            color: #fff;

            font-family: "Noto Sans HK";
            cursor: pointer;
            font-size: 14.272px;
            font-style: normal;
            font-weight: 300;
            line-height: normal;
            text-transform: uppercase;
          }
        }
      }
    }
  }
  .discounts-slide {
    display: flex;
    justify-content: space-between;
    & > div {
      flex: 5;
    }
    & > div:nth-child(2) {
      margin-left: 105px;
    }
  }
  .img-slide {
    max-width: 575px;
    & > img {
      width: 100%;
    }
  }
  .swiper-pagination-btn {
    display: flex;
    justify-content: space-between;

    & > div {
      margin-left: 18px;
      & > div:nth-child(1) {
        max-width: 230px;
        & > img {
          width: 100%;
        }
      }
    }
    & > div:first-child {
      margin-left: 0;
    }
  }
  .price-btn {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0 8px;
    box-sizing: border-box;
    padding: 0 5px;

    & > div:nth-child(2) {
      a {
        width: fit-content;
        white-space: nowrap;
      }
      // padding-bottom: 10px;
    }
  }
  .price-btn_hover {
    position: relative;
  }
  .price-btn_hover::before {
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
    -webkit-animation: sh02 1s 0s linear;
    -moz-animation: sh02 1s 0s linear;
    animation: sh02 1s 0s linear;
  }
  .price-btn_hover:hover::before {
    -webkit-animation: sh02 1s 0s linear;
    -moz-animation: sh02 15s 0s linear;
    animation: sh02 1s 0s linear;
  }
}
@media screen and (max-width: 767px) {
  .price-btn_hover {
    position: relative;
  }
  .price-btn_hover::before {
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
    -webkit-animation: sh02 1s 0s linear;
    -moz-animation: sh02 1s 0s linear;
    animation: sh02 1s 0s linear;
  }

  .now-discounts {
    margin-bottom: 12.82vw;
    position: relative;
  }
  .discounts-title {
    margin-top: 5.128vw;
    margin-bottom: 7.692vw;
    color: var(--Brand-Color, #00a6ce);
    font-family: "Noto Sans HK";
    font-size: 6.15vw;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  .discounts-box {
    position: relative;
  }
  .slide-content {
    & > div:nth-child(1) {
      margin-bottom: 1.28vw;
      color: #60605f;
      font-family: "Noto Sans HK";
      font-size: 4.615vw;
      font-style: normal;
      font-weight: 900;
      line-height: 133%; /* 133.333% */
      
    }
    & > div:nth-child(2) {
      margin-bottom: 3.076vw;
      color: var(--Brand-Color, #00a6ce);
      font-family: "Noto Sans HK";
      font-size: 3.076vw;
      font-style: normal;
      font-weight: 700;
      line-height: 140%; /* 277.778% */
      & > span {
        color: var(--Brand-Color, #00a6ce);
        font-family: "Noto Sans HK";
        font-size: 4.64vw;
        line-height: 120%;
        font-style: normal;
        font-weight: 700;
      }
    }
    & > div:nth-child(3) {
      margin-bottom: 3.846vw;
      color: #60605f;
      font-family: "Noto Sans HK";
      font-size: 3.289vw;
      font-style: normal;
      font-weight: 500;
      line-height: 150%; /* 166.667% */
      
    }
    & > div:nth-child(4) {
      display: flex;
      & > a {
        border-radius: 2.05vw;
        background: var(--Brand-Color, #00a6ce);
        padding: 1.28vw 3.846vw;
        cursor: pointer;

        display: flex;
        align-items: center;
        color: #fff;
        font-family: "Noto Sans HK";
        font-size: 4.1025vw;
        font-style: normal;
        font-weight: 300;
        line-height: normal;
      
        margin-right: 6.4vw;
      }
      & > a:nth-child(1) {
        padding: 0;
        margin-right: 0;
      }
      & > a:hover {
        box-shadow: 2px 3px 8px 0px #b3b2b2;
      }
    }
    :deep(.content) {
      p {
        a {
          color: #00a6ce;
          border-bottom: 2px solid #00a6ce;
        }
      }
    }
  }
  .swiper-button-next-prev {
    position: absolute;
    top: 9%;
    transform: translateY(-25%);
    z-index: 99;
    width: 100%;
    & > div:nth-child(1) {
      display: block;
      position: absolute;
      left: -4%;
      background: url("https://statichk.cmermedical.com/vision/imgs/1c62cfbbfb64b37f.png")
        no-repeat;
      background-position: right;
      width: 5.128vw;
      height: 10.25vw;
    }
    & > div:nth-child(2) {
      display: inline-block;
      position: absolute;
      right: -5%;
      background: url("https://statichk.cmermedical.com/vision/imgs/15988679aad2e086.png")
        no-repeat;
      background-position: right;
      width: 5.128vw;
      height: 10.25vw;
    }
  }
  :deep(.swiper-btn-item) {
    width: 100%;
    display: flex;
    flex-direction: column;
    & > div:nth-child(1) {
      width: 100%;
      max-width: 100%;
      margin-bottom: 2.564vw;
      border-radius: 3.846vw;
      overflow: hidden;
      box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.4);
      & > img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .swiper-pagination-btn {
    margin-top: 10.256vw;
    .swiper-btn-item {
      & > div:nth-child(2) {
        color: #60605f;
        font-family: "Noto Sans HK";
        font-size: 3.589vw;
        font-style: normal;
        font-weight: 500;
        line-height: 150%; /* 154.534% */
       
        margin-bottom: 3.076vw;
      }
      & > div:nth-child(3) {
        & > div:nth-child(1) {
          color: var(--Brand-Color, #00a6ce);
          font-family: "Noto Sans HK";
          font-size: 2.564vw;
          font-style: normal;
          font-weight: 700;
          line-height: 180%;
          span:nth-child(2) {
            color: var(--Brand-Color, #00a6ce);
            font-family: "Noto Sans HK";
            font-size: 5.128vw;
            font-style: normal;
            font-weight: 700;
            line-height: 110%;
          }
        }
        & > div:nth-child(2) {
          a {
            padding: 1.0256vw 3.589vw;
            border-radius: 12.686px;
            background: var(--Brand-Color, #00a6ce);
            color: #fff;

            font-family: "Noto Sans HK";
            cursor: pointer;
            font-size: 3.589vw;
            font-style: normal;
            font-weight: 300;
            line-height: normal;
      
            text-wrap: nowrap;
          }
        }
      }
    }
  }
  .discounts-slide {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    & > div:nth-child(2) {
      margin-top: 15px;
      padding: 0 4.358vw;
    }
  }
  .img-slide {
    margin: auto;
    max-width: 78.719vw;
    & > img {
      width: 100%;
    }
  }
  .swiper-pagination-btn {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    & > div {
      margin-top: 3.846vw;
      & > div:nth-child(1) {
        & > img {
          width: 100%;
        }
      }
    }
  }
  .price-btn {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0 2.564vw;
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