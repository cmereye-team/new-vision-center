<script lang="ts" setup>
const services = {
  title: "專業",
  title_text_eng: "Service",
  title_text: "視光服務",
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
    {
      img: "https://statichk.cmermedical.com/vision/imgs/2025021011305002.png",
      title: ["成人檢查", ""],
      link: "/comprehensive/comprehensive-eye-examination/comprehensive-eye-examination-for-adult",
      text: [""],
      context: [],
      price: "",
    },
    {
      img: "https://statichk.cmermedical.com/vision/imgs/2025021011305001.png",
      title: ["兒童檢查", ""],
      link: "/comprehensive/comprehensive-eye-examination/comprehensive-eye-examination-for-child",
      text: [""],
      context: [],
      price: "",
    },
  ],
};
</script>

<template>
  <div class="index">
    <div class="services">
      <div class="services-t">
        <div class="title">
          <span>{{ services.title_text }}</span>
          <span>{{ services.title }}</span>
          <span>{{ services.title_text_eng }}</span>
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
              <div>
                <h3
                  v-for="(titleItem, titleIndex) in item.title"
                  :key="titleIndex"
                >
                  {{ titleItem }}
                </h3>
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
            </div>
          </div>
        </nuxtLink>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@media screen and (min-width: 768px) {
  .services {
    width: 100%;
    max-width: 960px;
    margin: 90px auto 70px;
    position: relative;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
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
        display: flex;
        flex-direction: row;
        span {
          writing-mode: vertical-rl; /* 从右到左的竖排 */
          text-orientation: mixed; /* 让字母保持正常方向 */
        }
        span:nth-child(1) {
          margin-top: 40px;
        }
        span:nth-child(3) {
          font-size: 14px;
          line-height: 10px;
        }
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
      }
    }
    &-b {
      margin-top: 52px;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 3.125vw 1.8229vw;
      .list-in {
        display: flex;
        flex-direction: column;
        .image {
          width: 7.7083vw;
          margin-bottom: 0.7298vw;
          img {
            width: 100%;
            height: 100%;
            border-radius: 8px;
            object-fit: cover;
          }
        }
        .context {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          &-t {
            display: flex;
            justify-content: space-between;
            align-items: center;
            & > div:nth-child(1) {
              min-height: 2.34375vw;
            }
            h3 {
              color: var(--Grey, #4d4d4d);
              font-family: "Noto Sans HK";
              font-size: clamp(12px, 0.859375vw, 16.5px);
              font-style: normal;
              font-weight: 500;
              line-height: 136.5%; /* 136.364% */
              letter-spacing: 0.825px;
            }
          }
          &-b {
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
            &-l {
              position: relative;
              display: flex;
              align-items: flex-end;
              margin-top: 5px;
              .context-text {
                p {
                  color: #00b9e6;
                  font-family: "Noto Sans HK";
                  font-size: clamp(10px, 0.703125vw, 13.5px);
                  font-style: normal;
                  font-weight: 500;
                  line-height: 240%; /* 133.333% */
                  text-transform: uppercase;
                }
              }
              .context-context {
                display: flex;
                align-items: flex-end;
                p {
                  color: #00b9e6;
                  font-family: "Noto Sans HK";
                  font-size: clamp(12px, 0.859375vw, 16.5px);
                  font-style: normal;
                  font-weight: 500;
                  line-height: 180%; /* 136.364% */
                  letter-spacing: 0.825px;
                }
                p:last-child {
                  font-size: 1.328125vw;
                  font-style: normal;
                  font-weight: 500;
                  line-height: 150%;
                }
              }
              .context-price {
                p {
                  color: #00b9e6;
                  font-family: "Noto Sans HK";
                  font-size: clamp(10px, 0.703125vw, 13.5px);
                  font-style: normal;
                  font-weight: 700;
                  line-height: 130%;
                  text-transform: uppercase;
                  span {
                    font-size: 1.328125vw;
                    font-style: normal;
                    font-weight: 500;
                    line-height: 150%;
                  }
                }
              }
            }
            &-l::before {
              content: "";
              width: 37px;
              height: 1px;
              background: #00b9e6;
              position: absolute;
              top: 0;
            }
            &-r {
              width: 28px;
              height: 28px;
              position: relative;
              & > span {
                position: relative;
                z-index: 1;
                background: #1a257f;
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
                background: #1a257f;
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
@media (min-width: 768px) and (max-width: 1452px) {
  .services {
    width: 100%;
    max-width: 860px;
    margin: 90px auto 70px;
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
      }
    }
    &-b {
      margin-top: 52px;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 3.125vw 1.8229vw;
      .list-in {
        display: flex;
        flex-direction: column;
        max-width: 9.53125vw;
        .image {
          width: 9.53125vw;
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
              font-size: clamp(12px, 0.859375vw, 16.5px);
              font-style: normal;
              font-weight: 500;
              line-height: 136.364%; /* 136.364% */
              letter-spacing: 0.825px;
            }
          }
          &-b {
            display: flex;
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
                display: flex;

                p {
                  color: #00b9e6;
                  font-family: "Noto Sans HK";
                  font-size: clamp(12px, 0.859375vw, 16.5px);
                  font-style: normal;
                  font-weight: 500;
                  line-height: 136.364%; /* 136.364% */
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
@media screen and (max-width: 767px) {
  .services {
    padding: 0 7.692vw;
    box-sizing: border-box;
    margin: 8.717vw auto 0;
    &-t {
      .title {
        font-size: 6.1538vw;
        line-height: 7.692vw;
        color: #00a6ce;
        font-family: Inter;
        font-family: "Noto Sans HK";
        font-size: 24px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        position: relative;
        display: flex;
        flex-direction: row-reverse;
        justify-content: flex-end;
        span:last-child {
          position: absolute;
          top: -10px;
          left: 0;
          font-size: 2.2883vw;
        }
      }
      .btn {
        display: none;
      }
    }
    &-b {
      margin-top: 6.665vw;
      gap: 4.1vw 2.05vw;
      display: grid;
      grid-template-columns: repeat(3, 1fr);

      .list-in {
        flex-direction: column;
        padding: 2.307vw;
        box-shadow: 0 0 2.564vw 0 rgba(0, 0, 0, 0.05);
        border-radius: 3.846vw;
        max-width: 25.89vw;
        position: relative;
        z-index: 10;
        .image {
          width: 20.76vw;
          height: 20.76vw;
          border-radius: 2.2vw;
          overflow: hidden;
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
        .context {
          &-t {
            display: inline-block;
            margin: 10px 0;
            min-height: 32px;
            width: 100%;
            position: relative;
            h3 {
              color: var(--Grey, #4d4d4d);
              font-family: "Noto Sans HK";
              font-size: 14px;
              font-style: normal;
              font-weight: 500;
              line-height: 16px; /* 114.286% */
              letter-spacing: 0.7px;
            }
          }
          &-t::after {
            content: "";
            width: 25px;
            height: 1px;
            background: #00b9e6;
            position: absolute;
            bottom: -10px;
            left: 0;
          }
          &-b {
            &-l {
              min-height: 40px;
              .context-text {
                margin-top: 7px;
                p {
                  color: #00b9e6;
                  font-family: "Noto Sans";
                  font-size: 12px;
                  font-style: normal;
                  font-weight: 900;
                  line-height: 19px; /* 158.333% */
                  text-transform: uppercase;
                }
              }
              .context-context {
                margin-top: 7px;
                p {
                  color: #00b9e6;
                  font-family: "Noto Sans";
                  font-size: 12px;
                  font-style: normal;
                  font-weight: 900;
                  line-height: 19px; /* 158.333% */
                  text-transform: uppercase;
                }
                p:nth-child(2) {
                  font-size: 18px;
                  font-style: normal;
                  font-weight: 900;
                  line-height: 19px;
                  text-transform: uppercase;
                }
              }
              .context-price {
                p {
                  color: #00b9e6;
                  font-family: "Noto Sans";
                  font-size: 12px;
                  font-style: normal;
                  font-weight: 900;
                  line-height: 19px; /* 158.333% */
                  text-transform: uppercase;
                  span {
                    color: #00b9e6;
                    font-family: "Noto Sans";
                    font-size: 18px;
                    font-style: normal;
                    font-weight: 900;
                    line-height: 19px;
                    text-transform: uppercase;
                  }
                }
              }
            }
            &-r {
              width: 4.615vw;
              height: 4.615vw;
              margin-right: 0;
              position: absolute;
              right: 10px;
              bottom: -45px;
              span {
                position: relative;
                z-index: 1;
                background: #1a257f;
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
            }
          }
        }
        &:nth-of-type(1),
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
}
</style>