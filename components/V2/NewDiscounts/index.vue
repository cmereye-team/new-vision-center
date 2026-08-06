<script lang="ts" setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination, Navigation} from "swiper/modules";
import type { Article } from "@/types/api";
const props = defineProps<{
  list: Article[];
}>();
</script>

<template>
  <div class="index">
    <div class="newDiscounts">
      <div class="newDiscounts-in">
        <div class="newDiscounts-in-img">
          <img src="https://statichk.cmermedical.com/vision/imgs/2025021011475501.svg" alt="最新優惠" />
        </div>
        <div class="newDiscounts-in-b hidden lg:block">
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
            <swiper-slide v-for="item in list" :key="item.id" class="list-in" :id="String(item.id)">
              <NuxtLink to="/new-discounts">
                <div class="image">
                  <img :src="item.ico" :alt="item.title" :title="item.title" />
                </div>
                <h3>{{ item.title }}</h3>
                <div class="context">
                  <div class="context-l">
                    <div>
                      <span>{{ item.ext_lititile }}</span>
                    </div>
                  </div>
                  <a
                    href="https://api.whatsapp.com/send?phone=85269180511&text=%E4%BD%A0%E5%A5%BD,%20%E6%88%91%E6%83%B3%E6%9F%A5%E8%A9%A2%E6%9C%80%E6%96%B0%E5%84%AA%E6%83%A0%E8%A9%B3%E6%83%85"
                    target="_blank"
                    class="context-r WhatsApp_btn"
                  >
                    <span>了解產品</span>
                  </a>
                </div>
              </NuxtLink>
            </swiper-slide>
          </swiper>
        </div>
        <div class="block lg:hidden">
          <CenterProfileV2HomePageSwiper :list="list" ref="discounts" key="discounts" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@media screen and (min-width: 768px) {
  .newDiscounts {
    position: relative;
    background: url("https://statichk.cmermedical.com/vision/imgs/2025021011410501.png") no-repeat;
    background-size: cover;
    box-sizing: border-box;
    padding: 3.90625vw 0 6.904165vw;

    &-in {
      width: 100%;
      max-width: 60.4165vw;
      margin: 0 auto;

      &-img {
        margin: 0 auto;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
      }

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
            line-height: 45px;
            /* 133.333% */
            letter-spacing: 1.688px;

            &:nth-of-type(2) {
              color: #f0882b;
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
        margin-top: 0;
        // gap: 30px;
        // grid-template-columns: repeat(4, 1fr);
        overflow: hidden;

        .list-in {
          cursor: pointer;
          min-height: 25.833vw;
          // width: 265px;
          border-radius: 150px;
          background: linear-gradient(
            343deg,
            #fff 8.63%,
            rgba(255, 255, 255, 0.99) 23.52%,
            rgba(255, 255, 255, 0.95) 35.11%,
            rgba(255, 255, 255, 0.89) 44.21%,
            rgba(255, 255, 255, 0.8) 53.31%,
            rgba(255, 255, 255, 0.69) 61.58%,
            rgba(255, 255, 255, 0.55) 69.86%,
            rgba(255, 255, 255, 0.38) 77.31%,
            rgba(255, 255, 255, 0.2) 84.75%,
            rgba(255, 255, 255, 0) 91.37%
          );

          padding: 1.04165vw 1.04165vw;
          box-sizing: border-box;
          box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.1);
          margin: 10px 0;

          .image {
            width: 100%;

            img {
              width: 100%;
              height: 100%;
              border-radius: 50%;
              overflow: hidden;
              object-fit: cover;
            }
          }

          h3 {
            color: #60605f;
            font-family: "Noto Sans HK";
            font-size: clamp(13px, 0.67vw, 16.5px); // 15px ~ 20px 根據視窗寬度調整
            font-style: normal;
            font-weight: 500;
            line-height: 18.75px;
            /* 138.889% */
            letter-spacing: 0.675px;
            margin-top: clamp(8px, 0.4vw, 12px);
            display: -webkit-box;
            line-clamp: 2;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
            min-height: 37.5px;
          }

          .context {
            margin-top: 10px;
            display: flex;
            justify-content: space-between;
            flex-direction: column;

            &-l {
              display: flex;
              flex-direction: column;
              gap: 2px 0;
              color: #f0882b;
              font-family: "Noto Sans HK";
              font-size: clamp(12.462px, 0.8vw, 15.462px);
              font-style: normal;
              font-weight: 500;
              line-height: 12px;

              span {
                font-size: clamp(12.462px, 0.8vw, 15.462px);
                line-height: 1.2;
              }

              & > div:nth-child(1) {
                span {
                  font-size: 15px;
                }
              }
            }

            &-r {
              display: flex;
              padding: 7px clamp(22px, 2.1875vw, 42px);
              box-sizing: border-box;
              position: relative;
              align-items: center;
              min-width: 72px;
              width: fit-content;
              margin: clamp(15px, 1.3vw, 25px) auto 0;
              border-radius: 100px;
              background: #00a6ce;
              box-shadow: 0px 4px 0px 0px rgba(0, 166, 206, 0.34);

              span {
                position: relative;
                z-index: 2;
                color: #fff;
                font-family: "Noto Sans HK";
                font-size: clamp(10.462px, 0.54vw, 13.462px);
                font-style: normal;
                font-weight: 500;
                line-height: 110%;
                /* 0% */
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

            &-r:hover {
              box-shadow: 0 0 0;
              transition: all 0.3s;
              transform: translateY(10px);
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

  .newDiscounts::after {
    position: absolute;
    content: "";
    top: -18.229165vw;
    background: url("https://statichk.cmermedical.com/vision/imgs/2025021109224401.png") no-repeat;
    background-size: contain;
    right: 9.1145vw;
    width: 27.8645vw;
    height: 17.9165vw;
    z-index: 50;
  }

  .newDiscounts::before {
    position: absolute;
    content: "";
    bottom: -70.029165vw;
    background: url(https://statichk.cmermedical.com/vision/imgs/2025021109224402.png) no-repeat;
    background-size: contain;
    left: 20.15vw;
    width: 71.875vw;
    height: 82.8125vw;
    z-index: -1;
  }
}

@media screen and (max-width: 767px) {
  .index {
    position: relative;
  }

  .index::after {
    content: "";
    position: absolute;
    top: -28vw;
    background: url("https://statichk.cmermedical.com/vision/imgs/2025021208525001.svg") no-repeat;
    background-size: contain;
    right: 0;
    width: 43.846vw;
    height: 35.38vw;
    z-index: 3;
  }

  .index::before {
    content: "";
    position: absolute;
    bottom: -427.025vw;
    background: url("https://statichk.cmermedical.com/vision/imgs/2025021209030501.svg") no-repeat;
    background-size: contain;
    right: 0.5vw;
    width: 88.974vw;
    height: 434.3589vw;
    z-index: -1;
  }

  .newDiscounts {
    position: relative;
    z-index: 20;
    margin-top: 11.025vw;
    padding: 8.46vw 6.15vw 22.3vw;
    box-sizing: border-box;
    background: url("https://statichk.cmermedical.com/vision/imgs/2025021116225501.png") no-repeat;
    background-size: cover;
    width: 100vw;
    height: 217.69vw;

    &-in {
      &-img {
        margin: 0 auto 12.78vw;
        width: 31.406vw;
        height: 11.588vw;

        & > svg {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

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
            line-height: 3.075vw;
            /* 100.069% */
            letter-spacing: 0.7px;
            line-clamp: 2;
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
        background: transparent;

        // background: #9acd3242;
        & > a {
          border-radius: 150px;
          display: flex;
          flex-direction: column;
          align-items: center;
          height: 300px;
          background: linear-gradient(
            343deg,
            #fff 8.63%,
            rgba(255, 255, 255, 0.99) 23.52%,
            rgba(255, 255, 255, 0.95) 35.11%,
            rgba(255, 255, 255, 0.89) 44.21%,
            rgba(255, 255, 255, 0.8) 53.31%,
            rgba(255, 255, 255, 0.69) 61.58%,
            rgba(255, 255, 255, 0.55) 69.86%,
            rgba(255, 255, 255, 0.38) 77.31%,
            rgba(255, 255, 255, 0.2) 84.75%,
            rgba(255, 255, 255, 0) 91.37%
          );

          & > div:nth-child(1) {
            width: 125.894px;
            height: 125.894px;
            border-radius: 50%;
            overflow: hidden;

            img {
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
          }

          & > div:nth-child(2) {
            margin-top: 16px;
            width: 100%;

            h3 {
              color: #60605f;
              font-family: "Noto Sans HK";
              font-size: 12px;
              font-style: normal;
              font-weight: 400;
              line-height: normal;
              letter-spacing: 0.6px;
            }

            & > div {
              display: flex;
              flex-direction: column;
              align-items: center;
              gap: 12px 0;

              & > div {
                width: 100%;
                color: #f0882b;
                font-family: "Noto Sans HK";
                font-size: 16px;
                font-style: normal;
                font-weight: 900;
                line-height: 15px;
                /* 93.75% */
                letter-spacing: -0.8px;
              }

              & > a {
                border-radius: 100px;
                background: #00a6ce;
                box-shadow: 0px 4px 0px 0px rgba(0, 166, 206, 0.34);

                span {
                  color: #fff;
                  font-family: "Noto Sans HK";
                  font-size: 14px;
                  font-style: normal;
                  font-weight: 400;
                  line-height: 24.8px;
                  /* 177.143% */
                  letter-spacing: 0.7px;
                }

                box-sizing: border-box;
                padding: 1px 16px;
              }

              & > a::before,
              & > a::after {
                content: none;
              }
            }
          }
        }
      }
    }
  }
}
</style>
