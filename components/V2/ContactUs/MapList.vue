<script lang="ts" setup>
const isPortLand = ref(true);
const isKowLoon = ref(false);
const isNewTerritories = ref(false);
const choose = (num: number) => {
  if (num === 1) {
    isPortLand.value = true;
    isKowLoon.value = false;
    isNewTerritories.value = false;
  } else if (num === 2) {
    isPortLand.value = false;
    isKowLoon.value = true;
    isNewTerritories.value = false;
  } else if (num === 3) {
    isPortLand.value = false;
    isKowLoon.value = false;
    isNewTerritories.value = true;
  }
};

const portLandList = ref([
  {
    id: 2,
    img: "https://statichk.cmermedical.com/vision/imgs/8ff74f4adb35.png",
    region: "中環",
    name: "希瑪視光中心 - ZEISS VISION EXPERT",
    googleMap: "https://maps.app.goo.gl/moVYZoZpcDKeraBz6",
    whatsApps:
      "https://api.whatsapp.com/send?phone=85269180511&text=%E4%BD%A0%E5%A5%BD,%E6%88%91%E6%83%B3%E6%9F%A5%E8%A9%A2",
    address: ["畢打街1-3號中建大廈", "1515室（中環站G出口", "鄰近置地廣場）"],
    businessHours: [
      "星期一至五：09:30 – ",
      "13:30 / 14:30 – 18:00",
      "星期六：09:30 – 13:00",
      "(星期日及公眾假期休息)",
    ],
    call: "+852 3892 5089",
  },
  {
    id: 1,
    img: "https://statichk.cmermedical.com/vision/imgs/f78209e4ed4e.png",
    region: "西環",
    name: "希瑪醫療旗下視光師驗眼中心",
    googleMap: "https://maps.app.goo.gl/ZTANTUau8LLbTSVZ6",
    whatsApps:
      "https://api.whatsapp.com/send?phone=85269180511&text=%E4%BD%A0%E5%A5%BD,%E6%88%91%E6%83%B3%E6%9F%A5%E8%A9%A2",
    address: ["西環卑路乍街6-6G號", "新城大樓地下7號舖", "(香港大學站C2出口)"],
    businessHours: [
      "星期一至星期日：",
      "11:00 – 20:00(逢星期四",
      "休息，公眾假期照常營業）",
    ],
    call: "+852 3892 5089",
  },

  {
    id: 3,
    img: "https://statichk.cmermedical.com/vision/imgs/d88754a3ae2e.png",
    region: "北角",
    name: "希瑪醫療旗下視光師驗眼中心",
    googleMap: "https://maps.app.goo.gl/mYM18kHBkvewkvpR9",
    whatsApps:
      "https://api.whatsapp.com/send?phone=85269180511&text=%E4%BD%A0%E5%A5%BD,%E6%88%91%E6%83%B3%E6%9F%A5%E8%A9%A2",
    address: ["北角英皇道560號健威坊", "U33號鋪"],
    businessHours: [
      "星期一至星期日：",
      "11:00 – 20:00",
      "( 公眾假期照常營業 ）",
    ],
    call: "+852 3892 5089",
  },

  {
    id: 4,
    img: "https://statichk.cmermedical.com/vision/imgs/90b332ee7507.png",
    region: "銅鑼灣",
    name: "希瑪醫療旗下視光師驗眼中心",
    googleMap: "https://maps.app.goo.gl/ae1atModkaUkgBNS9",
    whatsApps:
      "https://api.whatsapp.com/send?phone=85269180511&text=%E4%BD%A0%E5%A5%BD,%E6%88%91%E6%83%B3%E6%9F%A5%E8%A9%A2",
    address: ["銅鑼灣怡和街28號恆生", "銅鑼灣大廈11樓A室", "(恆生銀行樓上)"],
    businessHours: [
      "星期一至星期六：",
      "10:30 – 19:00",
      "(星期日及公眾假期休息)",
    ],
    call: "+852 3892 5089",
  },
]);
const kowLoonList = ref([
  {
    id: 2,
    img: "https://statichk.cmermedical.com/vision/imgs/a744351de0b1.png",
    region: "旺角雅蘭",
    name: "希瑪眼科視光中心",
    googleMap: "https://maps.app.goo.gl/Ya6NFkJQbiB1jFdk7",
    whatsApps:
      "https://api.whatsapp.com/send?phone=85269180511&text=%E4%BD%A0%E5%A5%BD,%E6%88%91%E6%83%B3%E6%9F%A5%E8%A9%A2",
    address: ["彌敦道625及639號雅蘭", "中心一期1202室", "( 旺角站E1出口 )"],
    businessHours: [
      "星期一至五： ",
      "10:00 – 13:30 / 14:30 – 18:30",
      "星期六：09:30 – 17:00",
      "(星期日及公眾假期休息)",
    ],
    call: "+852 3892 5089 ",
  },
  {
    id: 1,
    img: "https://statichk.cmermedical.com/vision/imgs/d22aee1d55b6.png",
    region: "旺角",
    name: "希瑪醫療旗下視光師驗眼中心",
    googleMap: "https://maps.app.goo.gl/4Bq588uzvEvFPWk78",
    whatsApps:
      "https://api.whatsapp.com/send?phone=85269180511&text=%E4%BD%A0%E5%A5%BD,%E6%88%91%E6%83%B3%E6%9F%A5%E8%A9%A2",
    address: [
      "九龍彌敦道610號",
      "荷李活商業中心9樓918-919室",
      "( 旺角站E2出口）",
    ],
    businessHours: ["10:30 – 19:30", "(星期日及公眾假期休息)"],
    call: "+852 3892 5089 ",
  },

  {
    id: 3,
    img: "https://statichk.cmermedical.com/vision/imgs/d9b6d1f54d06.png",
    region: "鑽石山",
    name: "希瑪醫療旗下視光師驗眼中心",
    googleMap: "https://maps.app.goo.gl/xjng7ohyTBZMx5na6",
    whatsApps:
      "https://api.whatsapp.com/send?phone=85269180511&text=%E4%BD%A0%E5%A5%BD,%E6%88%91%E6%83%B3%E6%9F%A5%E8%A9%A2",
    address: ["九龍鑽石山荷里活廣場1樓", "120室", "( 鑽石山站C2出口 ）"],
    businessHours: [
      "星期一至星期日：",
      "11:00 – 20:00",
      "( 公眾假期照常營業 ）",
    ],
    call: "+852 3892 5089 ",
  },
]);
const newTerritoriesList = ref([
  {
    id: 1,
    img: "https://statichk.cmermedical.com/vision/imgs/6400fbbefbec.png",
    region: "將軍澳",
    name: "希瑪醫療旗下視光師驗眼中心",
    googleMap: "",
    whatsApps:
      "https://api.whatsapp.com/send?phone=85269180511&text=%E4%BD%A0%E5%A5%BD,%E6%88%91%E6%83%B3%E6%9F%A5%E8%A9%A2",
    address: ["新界將軍澳新都城", "商場第1期地下G63鋪"],
    businessHours: ["11:00 – 20:00", "(公眾假期照常營業)"],
    call: "+852 3892 5089 ",
  },

  {
    id: 3,
    img: "https://statichk.cmermedical.com/vision/imgs/317fa4077072.png",
    region: "將軍澳",
    name: "希瑪醫療旗下視光師驗眼中心",
    googleMap: "",
    whatsApps:
      "https://api.whatsapp.com/send?phone=85269180511&text=%E4%BD%A0%E5%A5%BD,%E6%88%91%E6%83%B3%E6%9F%A5%E8%A9%A2",
    address: ["將軍澳新都城中心一期", "地下G67號舖"],
    businessHours: ["11:00 – 20:00", "(公眾假期照常營業)"],
    call: "+852 3892 5089 ",
  },
  {
    id: 2,
    img: "https://statichk.cmermedical.com/vision/imgs/2025022809330601.png",
    region: "將軍澳",
    name: "希瑪醫療旗下視光師驗眼中心",
    googleMap: "",
    whatsApps:
      "https://api.whatsapp.com/send?phone=85269180511&text=%E4%BD%A0%E5%A5%BD,%E6%88%91%E6%83%B3%E6%9F%A5%E8%A9%A2",
    address: ["新界將軍澳中心", "地下54號鋪"],
    businessHours: ["11:00 – 20:00", "(公眾假期照常營業)"],
    call: "+852 3892 5089 ",
  },
]);

const isMounted = ref(false);
onMounted(() => {
  isMounted.value = true;
});
</script>

<template>
  <div class="mapList">
    <div class="map-list-header">
      <div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="41"
            height="41"
            viewBox="0 0 41 41"
            fill="none"
          >
            <path
              d="M40.2001 32.5091L31.6927 24.0017C30.6238 22.9359 28.8941 22.9359 27.8258 24.0017L25.8923 25.9352C24.7984 27.0291 21.257 25.9403 18.1585 22.8417C15.06 19.7431 13.9692 16.203 15.0651 15.1077L16.9986 13.1743C18.0643 12.1053 18.0643 10.3756 16.9986 9.30728L8.49121 0.799799C7.42291 -0.2666 5.69324 -0.2666 4.6243 0.799799L2.69084 2.73329C1.26237 4.16178 0.392732 6.04079 0.104348 8.31907C-0.162889 10.432 0.0838404 12.8006 0.836845 15.3596C2.34734 20.5 5.75348 25.905 10.4253 30.575C15.0971 35.2456 20.5002 38.6531 25.6392 40.1636C27.5323 40.7206 29.3209 41 30.9788 41C31.5479 41.0013 32.117 40.966 32.6815 40.8955C34.9591 40.6071 36.8381 39.7368 38.2672 38.3083L40.2007 36.3748C41.2664 35.3059 41.2658 33.5781 40.2001 32.5091Z"
              fill="#00A6CE"
            />
          </svg>
        </div>
        <div>聯絡我們</div>
      </div>
      <div>
        <div>
          <a
            target="_blank"
            href="https://api.whatsapp.com/send?phone=85269180511&text=%E4%BD%A0%E5%A5%BD,%E6%88%91%E6%83%B3%E6%9F%A5%E8%A9%A2"
          >
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="33"
                height="33"
                viewBox="0 0 33 33"
                fill="none"
              >
                <path
                  d="M24.2155 19.5656C23.798 19.3702 21.718 18.4418 21.3311 18.3162C20.9442 18.1835 20.6607 18.1207 20.3811 18.5116C20.0976 18.899 19.2932 19.7611 19.0404 20.0228C18.7952 20.2811 18.5462 20.3125 18.1287 20.1206C15.6464 18.9898 14.0184 18.1033 12.3827 15.545C11.9499 14.8644 12.8156 14.9133 13.6238 13.4439C13.7618 13.1856 13.6928 12.9658 13.5855 12.7703C13.4783 12.5749 12.6355 10.6832 12.2831 9.91188C11.9422 9.1615 11.5898 9.2662 11.3331 9.25224C11.088 9.23828 10.8083 9.23828 10.5249 9.23828C10.2414 9.23828 9.78556 9.33601 9.39867 9.71643C9.01177 10.1038 7.92004 11.0357 7.92004 12.9274C7.92004 14.819 9.43314 16.6514 9.64 16.9096C9.85451 17.1679 12.6164 21.0489 16.8569 22.7207C19.5383 23.7747 20.5879 23.8655 21.9286 23.684C22.7446 23.5723 24.4262 22.7556 24.7748 21.8517C25.1234 20.9512 25.1234 20.1799 25.02 20.0193C24.9165 19.8483 24.6331 19.7506 24.2155 19.5656Z"
                  fill="white"
                />
                <path
                  d="M31.7186 10.1062C30.8862 8.12846 29.6929 6.35324 28.1719 4.82846C26.6508 3.30737 24.8756 2.11038 22.8941 1.2817C20.8685 0.430915 18.7176 0 16.5005 0H16.4268C14.1949 0.0110491 12.033 0.453013 9.99997 1.32221C8.03694 2.16194 6.27647 3.35525 4.77013 4.87634C3.26378 6.39743 2.08154 8.16529 1.26392 10.1357C0.41637 12.1761 -0.0103963 14.3454 0.000192296 16.5773C0.0112413 19.1334 0.622618 21.671 1.76803 23.9397V29.5379C1.76803 30.4734 2.52672 31.2321 3.4622 31.2321H9.06403C11.3328 32.3776 13.8703 32.9889 16.4263 33H16.5037C18.7098 33 20.8496 32.5728 22.8642 31.7367C24.8346 30.9154 26.6061 29.7368 28.1235 28.2305C29.6446 26.7241 30.8416 24.9636 31.6776 23.0006C32.5468 20.9675 32.9887 18.8056 32.9998 16.5737C33.0108 14.3307 32.5762 12.154 31.7181 10.1062H31.7186ZM26.1536 26.2379C23.5718 28.794 20.1466 30.2009 16.5005 30.2009H16.4378C14.217 30.1898 12.0109 29.6374 10.0626 28.5988L9.75321 28.433H4.5671V23.2473L4.40137 22.9379C3.36276 20.9896 2.81031 18.7835 2.79927 16.5626C2.78453 12.8906 4.18775 9.4433 6.76216 6.84676C9.33289 4.25022 12.7691 2.81384 16.4411 2.79911H16.5037C18.3452 2.79911 20.1314 3.15636 21.8146 3.8635C23.4572 4.55223 24.9304 5.54297 26.1973 6.80993C27.4606 8.07321 28.455 9.55011 29.1437 11.1927C29.8582 12.8943 30.2155 14.699 30.2081 16.5626C30.186 20.2309 28.7459 23.6672 26.1531 26.2379H26.1536Z"
                  fill="white"
                />
              </svg>
              <span>預約</span>
            </div>
            <div>6918 0511</div>
          </a>
        </div>
        <div>
          <a href="tel: +85238925089">
            <div><span>電話預約</span></div>
            <div>3892 5089</div>
          </a>
        </div>
      </div>
    </div>
    <div class="map-list-header-tab">
      <div
        @click="choose(1)"
        :class="[isPortLand ? 'active' : 'map-list-menu']"
      >
        <span>港島</span>
      </div>
      <div @click="choose(2)" :class="[isKowLoon ? 'active' : 'map-list-menu']">
        <span>九龍</span>
      </div>
      <div
        @click="choose(3)"
        :class="[isNewTerritories ? 'active' : 'map-list-menu']"
      >
        <span>新界</span>
      </div>
    </div>
    <div>
      <div v-if="isPortLand">
        <V2ContactUsPublicMap v-if="isMounted" :list="portLandList" />
      </div>
      <div v-if="isKowLoon">
        <V2ContactUsPublicMap :list="kowLoonList" />
      </div>
      <div v-if="isNewTerritories">
        <V2ContactUsPublicMap :list="newTerritoriesList" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@media screen and (min-width: 768px) {
  .mapList {
    margin-bottom: 125px;
    & > div:nth-child(3) {
      width: 960px;
      margin: 0 auto;
    }
  }
  .map-list-header {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0 128px;
    width: 1051px;
    height: 185px;
    border-radius: 35px;
    background: #f4f4f4;
    margin-bottom: 55px;
    position: relative;
    z-index: 10;
    overflow: hidden;
    position: sticky;
    top: 140px;
    & > div:nth-child(1) {
      color: var(--Brand-Color, #00a6ce);
      font-family: "Noto Sans HK";
      font-size: 37.5px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      position: relative;
      z-index: 8;
      display: flex;
      gap: 0 10px;
      align-items: center;
    }

    & > div:nth-child(2) {
      position: relative;
      z-index: 8;
      display: flex;
      flex-direction: column;
      gap: 16px 0;
      & > div {
        transition: all 0.3s ease;
        & > a {
          display: flex;
          gap: 0 10px;
          & > div:nth-child(1) {
            min-width: 150px;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            gap: 0 3px;
            color: #fff;
            text-align: right;
            font-family: Inter;
            font-family: "Noto Sans HK";
            font-size: 37.5px;
            font-style: normal;
            font-weight: 600;
            line-height: normal;
          }
          & > div:nth-child(2) {
            color: #fff;
            text-align: center;
            font-family: Inter;
            font-family: "Noto Sans HK";
            font-size: 41.316px;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
            letter-spacing: 2.066px;
          }
        }
        box-sizing: border-box;
        padding: 5px 50px 5px 30px;
        border-radius: 100px;
        background: #59ba68;
        transform: translateY(-10px);
        box-shadow: 0px 12px 1px #141211;
      }
      & > div:hover {
        transform: translateY(0px);
        box-shadow: 0px 0px 0px #000;
        transition: all 0.3s ease-in-out;
      }
      & > div:nth-child(2) {
        background: #00a6ce;
      }
    }
  }
  .map-list-header::before {
    content: "contact contact contact";
    position: absolute;
    top: 72%;
    transform: translateY(-50%);
    left: -10%;
    width: 100%;
    height: 100%;
    color: #fff;
    font-family: Inter;
    font-size: 85px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: uppercase;
    white-space: nowrap;
  }
  .map-list-header-tab {
    border-radius: 10px;
    border: 0.723px solid var(--Brand-Color, #00a6ce);
    display: flex;
    max-width: 470px;
    margin: 0 auto;
    overflow: hidden;
  }
  .map-list-menu {
    font-family: "Noto Sans HK";
    padding: 10px 0;
    color: #00a6ce;
    font-size: 15px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    cursor: pointer;
    transition: all 0.3s;
    text-transform: uppercase;
    transform: skewX(-40deg) scale(1.4);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 180px;
    span {
      transform: skewX(40deg) scale(1);
    }
  }
  .active {
    padding: 10px 0;
    border-radius: 10px;
    background: var(--Brand-Color, #00a6ce);
    color: #fff;
    font-family: "Noto Sans HK";
    transition: all 0.3s;
    font-size: 15px;
    font-style: normal;
    font-weight: 700;
    width: 130px;
    transform: skewX(-40deg) scale(1.4);
    display: flex;
    align-items: center;
    justify-content: center;
    span {
      transform: skewX(40deg) scale(1);
    }
  }
  .map-list-header-tab > div:nth-child(1).active {
    width: 160px !important;
  }
  .map-list-header-tab > div:last-child.active {
    width: 160px !important;
  }
}
@media screen and (max-width: 767px) {
  .mapList {
    padding: 5.128vw 0 14.1vw;
  }

  .map-list-header {
    padding: 0 6.15vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: #f4f4f4;
    position: relative;
    z-index: 1;
    width: 100vw;
    box-sizing: border-box;
    padding: 6.15vw 2.564vw;
    overflow: hidden;
    margin-bottom: 5.128vw;
    position: sticky;
    top: 17.94vw;
    & > div:nth-child(1) {
      color: var(--Brand-Color, #00a6ce);
      text-align: center;
      font-family: Inter;
      font-size: 4.615vw;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0 1.5vw;
      margin-bottom: 2.65vw;
      position: relative;
      z-index: 8;
      & > div:nth-child(1) {
        width: 5.06vw;
        height: 5.06vw;
        & > svg {
          width: 100%;
          height: 100%;
        }
      }
    }
    & > div:nth-child(2) {
      display: flex;
      justify-content: center;
      gap: 0 1.65vw;
      position: relative;
      z-index: 8;
      & > div {
        display: flex;
        align-items: center;
        border-radius: 10.035vw;
        background: #59ba68;
        box-shadow: 1px 1px 0 0.723px #ccc;
        & > a {
          display: flex;
          align-items: center;
          box-sizing: border-box;
          padding: 3.58vw 3.07vw;
          gap: 0 10px;
          & > div:nth-child(1) {
            display: flex;
            align-items: center;
            color: #fff;
            text-align: right;
            font-family: Inter;
            font-family: "Noto Sans HK";
            font-size: 3.76vw;
            font-style: normal;
            font-weight: 600;
            line-height: normal;
            display: flex;
            gap: 0 1.28vw;
            & > svg {
              width: 3.07vw;
              height: 3.07vw;
            }
          }
          & > div:nth-child(2) {
            color: #fff;
            text-align: center;
            font-family: Inter;
            font-family: "Noto Sans HK";
            font-size: 4.146vw;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
            letter-spacing: 0.809px;
          }
        }
      }
      & > div:nth-child(2) {
        background: #00a6ce;
      }
    }
  }
  .map-list-header::before {
    content: "contact contact contact";
    position: absolute;
    top: 5%;
    left: -25%;
    width: 100%;
    height: 100%;
    color: #fff;
    font-family: Inter;
    font-size: 10.46vw;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: uppercase;
    white-space: nowrap;
  }
  .map-list-menu {
    font-family: "Noto Sans HK";
    padding: 3.465vw 5.6vw;
    color: #00a6ce;
    text-align: center;
    font-size: 3.733vw;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    cursor: pointer;
    text-transform: uppercase;
    flex: 1;
    transform: skewX(-40deg) scale(1.4);
    span {
      display: block;
      transform: skewX(40deg) scale(1);
    }
  }
  .map-list-header-tab {
    margin: 0 6.15vw;
    display: flex;
    overflow: hidden;
    border-radius: 2.56vw;
    border: 0.723px solid var(--Brand-Color, #00a6ce);
  }
  .active {
    transform: skewX(-40deg) scale(1.4);
    padding: 3.465vw 2.6vw;
    border-radius: 2.65vw;
    background: var(--Brand-Color, #00a6ce);
    color: #fff;
    transition: all 0.3s;
    font-size: 3.733vw;
    text-align: center;
    flex: 1;
    font-weight: 700;
    span {
      display: block;
      transform: skewX(40deg) scale(1);
    }
  }
}
</style>