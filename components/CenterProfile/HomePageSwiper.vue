<script lang="ts" setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import { Grid, Autoplay, Pagination } from "swiper/modules";
const modules = [Grid, Autoplay, Pagination];

interface discounts {
  id: number;
  img: string;
  title: string;
  tag: string;
  link: string;
  price: string;
}
const discountsChild = ref<discounts[]>([]);
const getData = async () => {
  try {
    const res = await fetch("https://content.cmervision.com/api.php/list/15");
    const data = await res.json();
    if (data.code === 1) {
      discountsChild.value = data.data.map((item: any) => {
        return {
          id: item.id,
          img: `https://content.cmervision.com/${item.ico}`,
          title: item.title,
          tag: item.tags,
          price: item.ext_price,
          link: "https://api.whatsapp.com/send?phone=85269180511&text=%E4%BD%A0%E5%A5%BD,%E6%88%91%E6%83%B3%E6%9F%A5%E8%A9%A2",
        };
      });
    }
  } catch (error) {
    console.log(error);
  }
};
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
  setTimeout(() => {
    getData();
  }, 500);
});
</script>

<template>
  <div class="HomePageSwiper">
    <swiper
      v-if="winWSize < 768"
      :slidesPerView="2"
      :grid="{
        rows: 2,
        fill: 'row',
      }"
      :spaceBetween="18"
      :pagination="{
        clickable: true,
      }"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide v-for="item in discountsChild" :key="item.id">
        <nuxt-link to="/" :id="item.id">
          <div><img :src="item.img" :alt="item.title" /></div>
          <div>
            <h3>{{ item.title }}</h3>
            <div>
              <div>
                <span>{{ item.tag }}</span>
                <span>{{ item.price }}</span>
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
          </div>
        </nuxt-link>
      </swiper-slide>
    </swiper>
  </div>
</template>

<style lang="scss" scoped>
.swiper {
  width: 100%;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  height: calc((100% - 30px) / 2) !important;
  display: flex;
  justify-content: center;
  align-items: center;
  & > a {
    width: 164px;
    border-radius: 2.82vw;
    box-sizing: border-box;
    padding: 3.076vw;
    box-shadow: 0 0 1.28vw 0px rgba(0, 0, 0, 0.1);
    width: 100%;
    background: #fff;
    min-height: 260px;
    & > div:nth-child(2) {
      & > div {
        display: flex;
        justify-content: space-between;
        margin-top: 1.538vw;
        display: flex;
        justify-content: space-between;
        align-items: center;
        & > div {
          color: var(--Sales, #db4444);
          font-family: "Noto Sans HK";
          font-size: 2.56vw;
          line-height: 3.075vw;
          font-weight: 500;
          text-align: left;
          white-space: pre-wrap;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          span {
            font-size: 2.98vw;
          }
        }
        & > a {
          display: flex;
          position: relative;
          align-items: center;
          padding: 2.05vw;
          min-width: 12.169vw;
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
            font-size: 2.05vw;
            font-style: normal;
            font-weight: 500;
            line-height: 0px; /* 0% */
            letter-spacing: 1.088px;
          }
          svg {
            width: 2.307vw;
            height: 2.307vw;
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
    h3 {
      font-size: 2.875vw;
      font-style: normal;
      font-weight: 500;
      line-height: 3.575vw;
      letter-spacing: 0.7px;
      -webkit-line-clamp: 2;
      margin-top: 1.28vw;
      min-height: 7.05128vw;
      color: #60605f;
      text-align: left;
    }
  }
  img {
    width: 100%;
  }
}

@media screen and (min-width: 768px) {
}
@media screen and (max-width: 767px) {
}
</style>