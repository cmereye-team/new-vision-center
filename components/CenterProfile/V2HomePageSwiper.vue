<script lang="ts" setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css/grid";
import { Grid, Autoplay, Pagination } from "swiper/modules";
const modules = [Grid, Autoplay, Pagination];
import type { Article } from "@/types/api";
const props = defineProps<{
  list: Article[];
}>();
</script>

<template>
  <div class="HomePageSwiper">
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
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide v-for="item in list" :key="item.id">
        <div class="swiper-slide-item">
          <nuxt-link to="/new-discounts" :id="String(item.id)">
            <div><img :src="item.ico" :alt="item.title" /></div>
            <div>
              <h3>{{ item.title }}</h3>
              <div>
                <div>
                  <span>{{ item.ext_lititile }}</span>
                </div>
              </div>
            </div>
          </nuxt-link>
          <a
            href="https://api.whatsapp.com/send?phone=85269180511&text=%E4%BD%A0%E5%A5%BD,%20%E6%88%91%E6%83%B3%E6%9F%A5%E8%A9%A2%E6%9C%80%E6%96%B0%E5%84%AA%E6%83%A0%E8%A9%B3%E6%83%85"
            target="_blank"
            class="context-r"
          >
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

  & > a:nth-child(1) {
    & > div:nth-child(1) {
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
      }
    }

    h3 {
      color: #60605f;
      font-family: "Noto Sans HK";
      font-size: 3.07vw;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      letter-spacing: 0.6px;
      line-clamp: 2;
      -webkit-line-clamp: 2;
      margin-top: 1.28vw;
      min-height: 7.05128vw;
      text-align: left;
    }
  }

  & > a:nth-child(2) {
    display: flex;
    position: relative;
    align-items: center;
    padding: 2.05vw;
    width: fit-content;
    border-radius: 100px;
    background: #00a6ce;
    box-sizing: border-box;
    padding: 0.5vw 4.1vw;
    margin: 3.07vw auto 0;
    box-shadow: 0px 1.05vw 0px 0px rgba(0, 166, 206, 0.34);

    span {
      position: relative;
      z-index: 2;
      color: #fff;
      font-family: "Noto Sans HK";
      font-size: 3.58vw;
      font-style: normal;
      font-weight: 400;
      line-height: 6.35vw;
      /* 177.143% */
      letter-spacing: 0.179vw;
    }

    & > a:nth-child(2):hover {
      box-shadow: none;
    }
  }
}

@media screen and (min-width: 768px) {
}

@media screen and (max-width: 767px) {
}
</style>
