<script lang="ts" setup>
// compiler macro
const props = defineProps({
  list: { 
    type: Array as PropType<{ id: number | string }[]>,
    required: true,
  },
});
</script>

<template>
  <div class="publicMap">
    <div v-for="item in props.list" :key="item.id" class="publicMap-item">
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
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M8.15937 1.32863C9.8515 1.33066 11.4737 2.00375 12.6702 3.20026C13.8668 4.39678 14.5398 6.01901 14.5419 7.71113C14.5398 9.40325 13.8668 11.0255 12.6702 12.222C11.4737 13.4185 9.8515 14.0916 8.15937 14.0936C6.46725 14.0916 4.84502 13.4185 3.64851 12.222C2.452 11.0255 1.7789 9.40325 1.77688 7.71113C1.7789 6.01901 2.452 4.39678 3.64851 3.20026C4.84502 2.00375 6.46725 1.33066 8.15937 1.32863ZM8.15937 0.379883C6.2154 0.381152 4.3514 1.15396 2.9768 2.52856C1.6022 3.90316 0.829394 5.76715 0.828125 7.71113C0.829394 9.65511 1.6022 11.5191 2.9768 12.8937C4.3514 14.2683 6.2154 15.0411 8.15937 15.0424C10.1034 15.0411 11.9673 14.2683 13.3419 12.8937C14.7165 11.5191 15.4894 9.65511 15.4906 7.71113C15.4894 5.76715 14.7165 3.90316 13.3419 2.52856C11.9673 1.15396 10.1034 0.381152 8.15937 0.379883Z"
                    fill="white"
                    stroke="white"
                    stroke-width="0.225"
                  />
                  <path
                    d="M8.15937 5.64113C9.29787 5.64113 10.2294 6.57263 10.2294 7.71113C10.2294 8.84963 9.29787 9.78113 8.15937 9.78113C7.61084 9.77962 7.08521 9.56104 6.69734 9.17317C6.30947 8.7853 6.09089 8.25967 6.08938 7.71113C6.08938 7.16214 6.30746 6.63562 6.69566 6.24742C7.08386 5.85922 7.61038 5.64113 8.15937 5.64113ZM8.15937 4.69238C7.35899 4.69314 6.5916 5.01143 6.02564 5.5774C5.45968 6.14336 5.14139 6.91074 5.14062 7.71113C5.14139 8.51152 5.45968 9.27891 6.02564 9.84487C6.5916 10.4108 7.35899 10.7291 8.15937 10.7299C8.95976 10.7291 9.72715 10.4108 10.2931 9.84487C10.8591 9.27891 11.1774 8.51152 11.1781 7.71113C11.1774 6.91074 10.8591 6.14336 10.2931 5.5774C9.72715 5.01143 8.95976 4.69314 8.15937 4.69238Z"
                    fill="white"
                    stroke="white"
                    stroke-width="0.225"
                  />
                  <path
                    d="M14.1016 5.64113H8.08133C7.9559 5.63988 7.83597 5.58951 7.74727 5.50081C7.65858 5.41212 7.6082 5.29218 7.60695 5.16676C7.6082 5.04133 7.65858 4.9214 7.74727 4.8327C7.83597 4.74401 7.9559 4.69363 8.08133 4.69238H14.1016C14.227 4.69363 14.3469 4.74401 14.4356 4.8327C14.5243 4.9214 14.5747 5.04133 14.576 5.16676C14.576 5.42551 14.369 5.64113 14.1016 5.64113ZM6.35633 9.98813C6.29406 9.98852 6.23234 9.97651 6.17476 9.95282C6.11718 9.92913 6.06488 9.89422 6.02091 9.85013L1.76687 5.59801C1.67963 5.50776 1.63086 5.38715 1.63086 5.26163C1.63086 5.13611 1.67963 5.0155 1.76687 4.92526C1.85711 4.83802 1.97772 4.78925 2.10325 4.78925C2.22877 4.78925 2.34938 4.83802 2.43962 4.92526L6.70037 9.18601C6.78761 9.27625 6.83638 9.39686 6.83638 9.52238C6.83638 9.6479 6.78761 9.76851 6.70037 9.85876C6.60424 9.94125 6.48204 9.98707 6.35537 9.98813H6.35633ZM7.25333 14.8268C7.17165 14.8283 7.09111 14.8074 7.02045 14.7664C6.91238 14.7029 6.83367 14.5995 6.80138 14.4784C6.76909 14.3573 6.78582 14.2283 6.84795 14.1195L9.85808 8.91001C9.92153 8.80194 10.025 8.72322 10.1461 8.69093C10.2672 8.65864 10.3961 8.67538 10.505 8.73751C10.613 8.80095 10.6917 8.90444 10.724 9.02553C10.7563 9.14661 10.7396 9.27555 10.6775 9.38438L7.66829 14.5939C7.62422 14.6644 7.56311 14.7227 7.49059 14.7634C7.41808 14.8041 7.33648 14.8259 7.25333 14.8268Z"
                    fill="white"
                    stroke="white"
                    stroke-width="0.225"
                  />
                </svg>
              </div>
              <div>Google 地圖</div>
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
            <div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <path
                    d="M12.5197 10.3557C12.3361 10.2614 11.4213 9.81331 11.2512 9.75266C11.0811 9.68865 10.9564 9.65833 10.8334 9.847C10.7088 10.034 10.355 10.4501 10.2438 10.5764C10.136 10.7011 10.0265 10.7162 9.8429 10.6236C8.75129 10.0778 8.03535 9.6499 7.31604 8.41511C7.12568 8.08662 7.5064 8.11021 7.86184 7.401C7.92249 7.27634 7.89216 7.17022 7.845 7.07588C7.79783 6.98154 7.42722 6.06851 7.27224 5.69622C7.12231 5.33403 6.96733 5.38457 6.85447 5.37783C6.74666 5.37109 6.62368 5.37109 6.49902 5.37109C6.37437 5.37109 6.1739 5.41826 6.00376 5.60188C5.83362 5.78887 5.35352 6.23865 5.35352 7.15168C5.35352 8.06472 6.01892 8.94912 6.10989 9.07378C6.20422 9.19844 7.4188 11.0717 9.28362 11.8786C10.4628 12.3873 10.9244 12.4311 11.514 12.3435C11.8728 12.2896 12.6123 11.8954 12.7656 11.4591C12.9189 11.0245 12.9189 10.6522 12.8734 10.5747C12.828 10.4922 12.7033 10.445 12.5197 10.3557Z"
                    fill="white"
                  />
                  <path
                    d="M16.0856 5.95059C15.7049 5.04597 15.1591 4.23401 14.4634 3.5366C13.7676 2.84087 12.9557 2.29338 12.0494 1.91436C11.1229 1.52522 10.1391 1.32812 9.12497 1.32812H9.09128C8.07043 1.33318 7.08159 1.53533 6.15171 1.93289C5.25383 2.31697 4.44861 2.86277 3.75962 3.5585C3.07063 4.25422 2.52988 5.06282 2.15591 5.96406C1.76845 6.89731 1.57304 7.88953 1.5781 8.91038C1.58315 10.0795 1.86279 11.2401 2.38669 12.2778V14.8384C2.38669 15.2663 2.73371 15.6133 3.16159 15.6133H5.72383C6.76152 16.1372 7.92219 16.4168 9.09128 16.4219H9.12666C10.1357 16.4219 11.1145 16.2265 12.0359 15.8441C12.9372 15.4684 13.7474 14.9293 14.4415 14.2404C15.1372 13.5514 15.6847 12.7461 16.0671 11.8483C16.4646 10.9184 16.6668 9.92954 16.6718 8.90869C16.6769 7.88279 16.4781 6.88721 16.0856 5.95059ZM13.5402 13.329C12.3593 14.4981 10.7927 15.1416 9.12497 15.1416H9.09634C8.08054 15.1365 7.07148 14.8839 6.18035 14.4088L6.03884 14.333H3.66697V11.9611L3.59116 11.8196C3.11611 10.9285 2.86343 9.91943 2.85837 8.90364C2.85163 7.22412 3.49346 5.64736 4.67097 4.45974C5.8468 3.27212 7.4185 2.61514 9.09802 2.6084H9.12666C9.96894 2.6084 10.786 2.7718 11.5558 3.09524C12.3071 3.41025 12.981 3.8634 13.5604 4.4429C14.1383 5.0207 14.5931 5.69622 14.9081 6.44753C15.2349 7.22581 15.3983 8.05125 15.3949 8.90364C15.3848 10.5815 14.7262 12.1532 13.5402 13.329Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div>Whatsapp查詢</div>
            </div>
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
      margin-right: 45px;
      max-width: 336px;
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
        font-size: 20.895px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
      }
      & > div:nth-child(1):before {
        content: "";
        width: 18px;
        height: 18px;
        border-radius: 50%;
        background: #00a6ce;
        display: inline-block;
        position: relative;
        top: 3px;
        margin-right: 14px;
      }
      & > div:nth-child(2) {
        margin-top: 10px;
        color: #60605f;
        font-family: "Inter";
        font-size: 11.94px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
      }
    }
    & > div:nth-child(2) {
      display: flex;
      margin: 25px 0;
      & > div {
        & > div:nth-child(1) {
          display: flex;
          align-items: center;
          color: #59ba68;
          font-family: "Inter";
          font-size: 13.197px;
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
          font-size: 13.5px;
          font-style: normal;
          font-weight: 400;
          line-height: 18px;
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
        font-size: 13.134px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        text-transform: uppercase;
        & > div:nth-child(2) {
          position: absolute;
          display: flex;
          justify-content: center;
          gap: 0 5px;
          align-items: center;
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
          font-family: "Inter";
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
          display: flex;
          align-items: center;
          gap: 0 6px;
          position: absolute;
          & > div:nth-child(1) {
            display: flex;
            align-items: center;
          }
        }
      }
    }
  }
}
</style>