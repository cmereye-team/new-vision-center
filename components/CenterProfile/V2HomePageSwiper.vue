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
  routerLink: string;
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
          routerLink: "/new-discounts",
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
    <swiper v-if="winWSize < 768" :slidesPerView="2" :grid="{
      rows: 2,
      fill: 'row',
    }" :spaceBetween="18" :pagination="{
      clickable: true,
    }" :modules="modules" class="mySwiper">
      <swiper-slide v-for="item in discountsChild" :key="item.id">
        <div class="swiper-slide-item">
          <nuxt-link :to="item.routerLink" :id="item.id">
            <div><img :src="item.img" :alt="item.title" /></div>
            <div>
              <h3>{{ item.title }}</h3>
              <div>
                <div>
                  <span>{{ item.tag }}</span>
                  <span>{{ item.price }}</span>
                </div>
              </div>
            </div>
          </nuxt-link>
          <a :href="item.link" target="_blank" class="context-r">
            <span>了解產品</span>
          </a>
        </div>
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
  font-size: 4.6vw;
  background: #fff;
  height: calc((100% - 30px) / 2) !important;
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide-item {
  width: 42.05vw;
  border-radius: 21.82vw;
  box-sizing: border-box;
  padding: 3.076vw;
  box-shadow: 0 0 1.28vw 0px rgba(0, 0, 0, 0.1);
  width: 100%;
  background: #fff;
  min-height: 66.667vw;

  &>a:nth-child(1) {
    &>div:nth-child(1) {
      width: 32.28vw;
      height: 32.28vw;
      border-radius: 50%;
      overflow: hidden;
      margin: 0 auto;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    &>div:nth-child(2) {
      &>div {
        display: flex;
        justify-content: space-between;
        margin-top: 1.538vw;
        display: flex;
        justify-content: space-between;
        align-items: center;

        &>div {
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
      }
    }

    h3 {
      color: #60605F;
      font-family: "Noto Sans HK";
      font-size: 3.07vw;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      letter-spacing: 0.6px;
      -webkit-line-clamp: 2;
      margin-top: 1.28vw;
      min-height: 7.05128vw;
      text-align: left;
    }
  }

  &>a:nth-child(2) {
    display: flex;
    position: relative;
    align-items: center;
    padding: 2.05vw;
    width: fit-content;
    border-radius: 100px;
    background: #00A6CE;
    box-sizing: border-box;
    padding: 0.5vw 4.1vw;
    margin: 3.07vw auto 0;
    box-shadow: 0px 1.05vw 0px 0px rgba(0, 166, 206, 0.34);

    span {
      position: relative;
      z-index: 2;
      color: #FFF;
      font-family: "Noto Sans HK";
      font-size: 3.58vw;
      font-style: normal;
      font-weight: 400;
      line-height: 6.35vw;
      /* 177.143% */
      letter-spacing: 0.179vw;
    }

    &>a:nth-child(2):hover {
      box-shadow: none;
    }
  }
}

@media screen and (min-width: 768px) {}

@media screen and (max-width: 767px) {}
</style>