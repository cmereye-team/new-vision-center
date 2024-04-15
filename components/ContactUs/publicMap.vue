<script lang="ts" setup>
// compiler macro
const props = defineProps({
  list: { type: Array, default: () => [] },
});
</script>

<template>
  <div class="publicMap">
    <div v-for="item in list" :key="item.id" class="publicMap-item">
      <div>
        <img :src="item.img" :alt="item.region" />
      </div>
      <div class="publicMap-item-content">
        <div>
          <div>{{ item.region }}</div>
          <div>{{ item.name }}</div>
        </div>
        <div>
          <div>
            <div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="13"
                  height="16"
                  viewBox="0 0 13 16"
                  fill="none"
                >
                  <path
                    d="M6.07322 0.220703C2.71924 0.220703 0.000205994 2.98674 0.000205994 6.39871C0.000205994 11.8045 6.07322 15.6657 6.07322 15.6657C6.07322 15.6657 12.1462 11.8045 12.1462 6.39871C12.1462 2.98674 9.42721 0.220703 6.07322 0.220703ZM6.07322 8.71547C4.81555 8.71547 3.79584 7.67813 3.79584 6.39871C3.79584 5.1193 4.81536 4.08196 6.07322 4.08196C7.33108 4.08196 8.3506 5.1193 8.3506 6.39871C8.3506 7.01316 8.1106 7.60234 7.68359 8.03692C7.25639 8.47131 6.67723 8.71547 6.07322 8.71547Z"
                    fill="#59BA68"
                  />
                </svg>
              </div>
              <div>地址</div>
            </div>
            <div>
              <span v-for="(element, index) in item.address" :key="index">{{
                element
              }}</span>
            </div>
          </div>
          <div>
            <div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <g clip-path="url(#clip0_61_25471)">
                    <mask
                      id="mask0_61_25471"
                      style="mask-type: luminance"
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="16"
                      height="16"
                    >
                      <path
                        d="M15.4198 0.316406H0.421967V15.3164H15.4198V0.316406Z"
                        fill="white"
                      />
                    </mask>
                    <g mask="url(#mask0_61_25471)">
                      <path
                        d="M0.420013 7.81204C0.420013 3.6775 3.77469 0.325928 7.91306 0.325928C12.0514 0.325928 15.4061 3.6775 15.4061 7.81204C15.4061 11.9466 12.0514 15.2981 7.91306 15.2981C3.77469 15.2981 0.420013 11.9466 0.420013 7.81204ZM1.61897 7.81204C1.61897 9.47978 2.28212 11.0792 3.46242 12.2586C4.6429 13.4378 6.24377 14.1003 7.91306 14.1003C9.58235 14.1003 11.1834 13.4378 12.3637 12.2586C13.544 11.0794 14.2071 9.47978 14.2071 7.81204C14.2071 6.14429 13.544 4.54472 12.3637 3.36551C11.1834 2.18631 9.58235 1.52378 7.91306 1.52378C6.24377 1.52378 4.64272 2.18631 3.46242 3.36551C2.28212 4.54491 1.61897 6.14429 1.61897 7.81204ZM10.2126 9.83928L7.61707 8.34206C7.48792 8.26767 7.39096 8.14796 7.34559 8.00614C7.32456 7.94363 7.31376 7.87802 7.31376 7.81204V3.61974C7.31376 3.28894 7.58213 3.02082 7.91324 3.02082C8.24436 3.02082 8.51272 3.28894 8.51272 3.61974V7.47538L10.8122 8.8019C11.0989 8.9673 11.1971 9.33357 11.0316 9.61996C10.9244 9.80547 10.7262 9.91952 10.5118 9.91933C10.4068 9.91933 10.3037 9.89174 10.2127 9.8391L10.2126 9.83928Z"
                        fill="#59BA68"
                      />
                    </g>
                  </g>
                  <defs>
                    <clipPath id="clip0_61_25471">
                      <rect
                        width="15"
                        height="15"
                        fill="white"
                        transform="translate(0.421875 0.316406)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div>營業時間</div>
            </div>
            <div>
              <span
                v-for="(element, index) in item.businessHours"
                :key="index"
                >{{ element }}</span
              >
            </div>
          </div>
          <div>
            <div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="16"
                  viewBox="0 0 15 16"
                  fill="none"
                >
                  <path
                    d="M5.3704 1.20083C4.75816 0.318905 4.26658 0.0258424 3.60743 0.150736C3.32409 0.204145 3.1492 0.300828 2.82573 0.582661L2.58007 0.800129L2.10259 1.2011L1.97759 1.31203C1.90682 1.37667 1.8553 1.43117 1.79023 1.50567C0.575237 2.89374 0.23929 5.06706 0.945889 7.11028C1.45537 8.57723 2.3618 10.0357 3.65569 11.4939C5.02876 13.0392 6.18221 14.0126 7.5081 14.722C8.54929 15.2774 9.34618 15.5212 10.2721 15.5494C11.3925 15.5858 12.3781 15.3292 13.1888 14.7992C13.3195 14.7121 13.4442 14.6154 13.5595 14.5089L13.7178 14.3632L14.0275 14.0715L14.1329 13.9775L14.3398 13.7965C14.7577 13.4193 14.8938 13.1838 14.9214 12.8121C14.9629 12.243 14.7091 11.8012 13.9773 11.1685L13.483 10.7508L13.2525 10.5473L13.0345 10.3594C12.3279 9.77057 11.8046 9.5783 11.1327 9.68074C10.6718 9.75085 10.4066 9.91354 9.93591 10.4115L9.72768 10.6358C9.38631 11.0003 9.19054 11.1392 8.90177 11.1967C8.47988 11.2822 8.05906 11.062 7.37903 10.5027C6.50487 9.78618 5.75109 8.93192 5.14671 7.97276C4.71234 7.28721 4.54152 6.76682 4.6733 6.29436C4.7259 6.10236 4.85659 5.96761 5.1299 5.75315L5.4146 5.53733L5.46042 5.5009L5.89073 5.14484C6.27385 4.8222 6.42786 4.60364 6.51002 4.26703C6.67948 3.57436 6.51978 2.99946 5.89507 2.01072L5.59789 1.54648L5.49242 1.38242L5.3704 1.20138V1.20083Z"
                    fill="#59BA68"
                  />
                </svg>
              </div>
              <div>查詢電話</div>
            </div>
            <div>
              <span>{{ item.call }}</span>
            </div>
          </div>
        </div>
        <div>
          <a :href="item.googleMap" target="_blank">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="166"
                height="45"
                viewBox="0 0 166 45"
                fill="none"
              >
                <mask
                  id="mask0_61_25297"
                  style="mask-type: alpha"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="166"
                  height="45"
                >
                  <rect
                    width="165.568"
                    height="44.576"
                    rx="22.288"
                    fill="#00A6CE"
                  />
                </mask>
                <g mask="url(#mask0_61_25297)">
                  <g filter="url(#filter0_f_61_25297)">
                    <rect
                      x="-1"
                      y="-13"
                      width="179"
                      height="35"
                      fill="#22D4FF"
                    />
                  </g>
                </g>
                <defs>
                  <filter
                    id="filter0_f_61_25297"
                    x="-21"
                    y="-33"
                    width="219"
                    height="75"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feGaussianBlur
                      stdDeviation="10"
                      result="effect1_foregroundBlur_61_25297"
                    />
                  </filter>
                </defs>
              </svg>
            </div>
            <div>
              <a></a>
              Google 地圖
            </div>
          </a>
          <a :href="item.whatsApps" target="_blank">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="196"
                height="45"
                viewBox="0 0 196 45"
                fill="none"
              >
                <mask
                  id="mask0_61_25303"
                  style="mask-type: alpha"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="196"
                  height="45"
                >
                  <rect
                    x="0.507812"
                    width="195.02"
                    height="44.576"
                    rx="22.288"
                    fill="#59BA68"
                  />
                </mask>
                <g mask="url(#mask0_61_25303)">
                  <g filter="url(#filter0_f_61_25303)">
                    <rect
                      x="-9"
                      y="-13"
                      width="205"
                      height="35"
                      fill="#80F392"
                    />
                  </g>
                </g>
                <defs>
                  <filter
                    id="filter0_f_61_25303"
                    x="-29"
                    y="-33"
                    width="245"
                    height="75"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feGaussianBlur
                      stdDeviation="10"
                      result="effect1_foregroundBlur_61_25303"
                    />
                  </filter>
                </defs>
              </svg>
            </div>
            <div>Whatsapp查詢</div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@media screen and (min-width: 768px) {
  .publicMap {
    margin-top: 86px;
    & > div:nth-child(2) {
      margin: 20px 0;
    }
  }
  .publicMap-item {
    display: flex;
    & > div:nth-child(1) {
      flex: 4;
      border-radius: 40px;
      overflow: hidden;
      margin-right: 55px;
      max-width: 448px;
      & > img {
        width: 100%;
      }
    }
    & > div:nth-child(2) {
      flex: 6;
    }
  }
  .publicMap-item-content {
    display: flex;
    flex-direction: column;
    & > div:nth-child(1) {
      & > div:nth-child(1) {
        color: var(--Brand-Color, #00a6ce);
        font-family: "Inter";
        font-size: 27.86px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
      }
      & > div:nth-child(1):before {
        content: "";
        width: 23px;
        height: 23px;
        border-radius: 50%;
        background: #00a6ce;
        display: inline-block;
        position: relative;
        top: 3px;
        margin-right: 14px;
      }
      & > div:nth-child(2) {
        color: #60605f;

        font-family: "Inter";
        font-size: 15.92px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
      }
    }
    & > div:nth-child(2) {
      display: flex;
      margin: 35px 0;
      & > div {
        & > div:nth-child(1) {
          display: flex;
          align-items: center;
          color: #59ba68;

          font-family: "Inter";
          font-size: 17.596px;
          font-style: normal;
          font-weight: 600;
          line-height: normal;
          & > div:nth-child(1) {
            display: flex;
            align-items: center;
            margin-right: 6px;
          }
        }
        & > div:nth-child(2) {
          margin-top: 20px;
          display: flex;
          flex-direction: column;
          color: #60605f;

          font-family: "Inter";
          font-size: 18px;
          font-style: normal;
          font-weight: 400;
          line-height: 24px; /* 133.333% */
          text-transform: uppercase;
        }
      }
      & > div:nth-child(2) {
        margin: 0 60px;
      }
    }
    & > div:nth-child(3) {
      display: flex;
      & > a:nth-child(1) {
        border-radius: 50px;
        background: #00a6ce;
        margin-right: 10px;
      }
      & > a:nth-child(2) {
        border-radius: 50px;
        background: #59ba68;
      }
      & > a {
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        width: fit-content;

        color: #fff;

        font-family: "Inter";
        font-size: 17.512px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        text-transform: uppercase;
        & > div:nth-child(2) {
          position: absolute;
        }
      }
    }
  }
}
@media screen and (max-width: 767px) {
  .publicMap {
    margin-top: 24px;
    & > div:nth-child(2) {
      margin: 20px 0;
    }
  }
  .publicMap-item {
    display: flex;
    flex-direction: column;
    & > div:nth-child(1) {
      flex: 4;
      border-radius: 40px;
      overflow: hidden;
      margin-right: 55px;
      width: 100%;
      & > img {
        width: 100%;
      }
    }
    & > div:nth-child(2) {
      flex: 6;
    }
  }
  .publicMap-item-content {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    & > div:nth-child(1) {
      & > div:nth-child(1) {
        color: var(--Brand-Color, #00a6ce);
        font-family: "Inter";
        font-size: 27.86px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
      }
      & > div:nth-child(1):before {
        content: "";
        width: 23px;
        height: 23px;
        border-radius: 50%;
        background: #00a6ce;
        display: inline-block;
        position: relative;
        top: 3px;
        margin-right: 14px;
      }
      & > div:nth-child(2) {
        color: #60605f;

        font-family: "Inter";
        font-size: 15.92px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
      }
    }
    & > div:nth-child(2) {
      display: flex;
      flex-direction: column;
      margin: 30px 0 18px 0;
      & > div {
        & > div:nth-child(1) {
          display: flex;
          align-items: center;
          color: #59ba68;

          font-family: "Inter";
          font-size: 16px;
          font-style: normal;
          font-weight: 600;
          line-height: normal;
          & > div:nth-child(1) {
            display: flex;
            align-items: center;
            margin-right: 6px;
          }
        }
        & > div:nth-child(2) {
          margin-top: 10px;
          color: #60605f;
          font-family: 'Inter';
          font-size: 14px;
          font-style: normal;
          font-weight: 400;
          line-height: 21.782px; /* 155.586% */
          text-transform: uppercase;
        }
      }
      & > div:nth-child(2) {
        margin: 15px 0;
      }
    }
    & > div:nth-child(3) {
      display: flex;
      justify-content: center;
      & > a:nth-child(1) {
        border-radius: 50px;
        background: #00a6ce;
      }
      & > a:nth-child(2) {
        border-radius: 50px;
        background: #59ba68;
      }
      & > a {
        transform: scale(0.85);
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        width: fit-content;

        color: #fff;

        font-family: "Inter";
        font-size: 17.512px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        text-transform: uppercase;
        & > div:nth-child(2) {
          position: absolute;
        }
      }
    }
  }
}
</style>