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
    img: "https://statichk.cmermedical.com/vision/imgs/c7c23405fb3f9d9b.png",
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
    img: "https://statichk.cmermedical.com/vision/imgs/bf94f6316d886c48.png",
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
    img: "https://statichk.cmermedical.com/vision/imgs/c1230f61a75e9531.png",
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
    img: "https://static.cmereye.com/imgs/2024/11/772c40216f083c6c.png",
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
    img: "https://statichk.cmermedical.com/vision/imgs/c75e4216c9d81a2e.png",
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
    img: "https://statichk.cmermedical.com/vision/imgs/f9531434e80bf5fd.png",
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
    img: "https://statichk.cmermedical.com/vision/imgs/99d36f94eaf96a1d.png",
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
    img: "https://statichk.cmermedical.com/vision/imgs/873265f7b34ec11f.png",
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
    img: "https://statichk.cmermedical.com/vision/imgs/c631f8678184f3da.png",
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
    img: "https://statichk.cmermedical.com/vision/imgs/873265f7b34ec11f.png",
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
      <div>聯絡我們</div>
      <div>
        <div
          @click="choose(1)"
          :class="[isPortLand ? 'active' : 'map-list-menu']"
        >
          港島
        </div>
        <div
          @click="choose(2)"
          :class="[isKowLoon ? 'active' : 'map-list-menu']"
        >
          九龍
        </div>
        <div
          @click="choose(3)"
          :class="[isNewTerritories ? 'active' : 'map-list-menu']"
        >
          新界
        </div>
      </div>
    </div>
    <div>
      <div v-if="isPortLand">
        <ContactUsPublicMap v-if="isMounted" :list="portLandList" />
      </div>
      <div v-if="isKowLoon">
        <ContactUsPublicMap :list="kowLoonList" />
      </div>
      <div v-if="isNewTerritories">
        <ContactUsPublicMap :list="newTerritoriesList" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@media screen and (min-width: 768px) {
  .mapList {
    margin-bottom: 125px;
  }
  .map-list-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    & > div:nth-child(1) {
      color: var(--Brand-Color, #00a6ce);
      font-family: "Noto Sans HK";
      font-size: 37.5px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
    }
    & > div:nth-child(2) {
      border-radius: 10px;
      border: 0.723px solid var(--Brand-Color, #00a6ce);
      display: flex;
    }
  }
  .map-list-menu {
    font-family: "Noto Sans HK";
    padding: 10px 80px;
    color: #00a6ce;

    font-size: 15px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    cursor: pointer;
    transition: all 0.3s;
    text-transform: uppercase;
  }
  .active {
    padding: 10px 80px;
    border-radius: 10px;
    background: var(--Brand-Color, #00a6ce);
    color: #fff;
    font-family: "Noto Sans HK";
    transition: all 0.3s;
    font-size: 15px;
    font-style: normal;
    font-weight: 700;
  }
}
@media screen and (max-width: 767px) {
  .mapList {
    padding: 20px 0 55px;
  }

  .map-list-header {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    & > div:nth-child(1) {
      color: var(--Brand-Color, #00a6ce);
      font-family: "Noto Sans HK";
      font-size: 6.4vw;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      margin-bottom: 2.65vw;
    }
    & > div:nth-child(2) {
      border-radius: 2.65vw;
      border: 0.78px solid var(--Brand-Color, #00a6ce);
      display: flex;
    }
  }
  .map-list-menu {
    font-family: "Noto Sans HK";
    padding: 3.465vw 9.6vw;
    color: #00a6ce;
    text-align: center;
    font-size: 3.733vw;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    cursor: pointer;
    text-transform: uppercase;
    flex: 1;
  }
  .active {
    padding: 3.465vw 9.6vw;
    border-radius: 2.65vw;
    background: var(--Brand-Color, #00a6ce);
    color: #fff;
    transition: all 0.3s;
    font-size: 3.733vw;
    text-align: center;
    flex: 1;
    font-weight: 700;
  }
}
</style>