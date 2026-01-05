<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from "vue";
import getWindowSize from "@/utils/width";
import { Swiper, SwiperSlide } from "swiper/vue";
// Import Swiper styles
import "swiper/scss";

import "swiper/scss/pagination";
import "swiper/scss/navigation";

import { Grid, Autoplay, Pagination, Navigation } from "swiper/modules";
// 屏幕寬度
const width = ref(1920);
const resizeTimeout = ref(null);
const modules = [Autoplay, Pagination, Navigation];

const handleResize = () => {
  clearTimeout(resizeTimeout); // 清除上一个定时器
  resizeTimeout.value = setTimeout(() => {
    width.value = window.innerWidth; // 延迟更新宽度
    console.log("当前宽度:", width.value);
  }, 500); // 延迟 500 毫秒后更新宽度
};
const getDirection = () => (width.value > 768 ? "horizontal" : "vertical");

// 平滑滚动到指定元素
const scrollToElement = (elementId, offset = 80, duration = 800) => {
  const element = document.getElementById(elementId);
  if (element) {
    const elementPosition = element.offsetTop - offset;

    // 平滑滚动动画
    const startPosition = window.pageYOffset;
    const distance = elementPosition - startPosition;
    let startTime = null;

    function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function easeInOutQuad(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
  }
};

const onImgLoad = () => {
  // 所有 Swiper 都刷新一次
  Object.values(swiperMap).forEach((swiper) => swiper?.update());
};

useHead(() => ({
  title: "眼鏡｜希瑪視光中心",
  meta: [
    {
      hid: "description",
      name: "description",
      content:
        "希瑪眼科視光中心是您的全方位視光服務中心，我們的註冊視光師提供專業的驗眼服務，並提供各種眼鏡選擇，包括hoya漸進鏡片、全視線鏡片、老花鏡等。我們的眼鏡價錢公道，並經常有配眼鏡優惠活動。我們還提供老花隱形眼鏡和兒童近視控制鏡片等產品。無論您是需要驗眼服務，還是尋找高品質的眼鏡，希瑪視光中心都能滿足您的需求。立即聯絡我們了解更多信息。",
    },
    {
      hid: "Keywords",
      name: "Keywords",
      content:
        "眼鏡優惠 配眼鏡優惠 hoya漸進鏡片價錢 漸進鏡片價錢 全視線鏡片價錢 全視線漸進鏡價錢 hoya鏡片價錢 zeiss鏡片價錢 漸進眼鏡價錢 眼鏡價錢 配眼鏡價錢 老花隱形眼鏡價錢 漸進老花眼鏡價錢 hoya兒童近視控制鏡片價錢 OK鏡 ok鏡價錢 老花鏡 老花眼鏡 老花隱形眼鏡 兒童近視控制鏡片價格 近視控制鏡片 驗眼費用 驗眼價錢 註冊視光師 視光師 視光師驗眼中心 希瑪視光 視光中心 希瑪視光中心 希瑪眼科視光中心",
    },
  ],
}));

const productSpec = reactive([
  {
    id: 1,
    title: "LINDBERG",
    description: [
      "來自丹麥的 LINDBERG 承襲北歐設計的優雅精髓，以簡約美學、卓越工藝與創新技術享譽全球，丹麥擁有悠久的設計傳統，強調功能性與美感並存，這些理念深深植入 LINDBERG 的品牌哲學之中。",
      "LINDBERG 以革命性的無螺絲、無焊接設計聞名，打造出極致輕盈且堅固耐用的鏡框，品牌嚴選高品質鈦金屬與醋酸纖維材質，不僅確保配戴的舒適性，更能完美貼合各種臉型。透過高度客製化的設計理念，每一副 LINDBERG 眼鏡皆是個人風格的獨特展現，展現北歐設計的極簡美學與尖端技術的完美融合。",
    ],
    style: {
      backgroundRotate: {
        transform:
          width.value > 768
            ? "rotate(-1.377deg) translateZ(0)"
            : "rotate(0deg)",
        background:
          width.value > 768
            ? "radial-gradient(100.98% 100.81% at 50% 50%,#fff 43.27%,#dad8d6 100%)"
            : "",
        boxShadow:
          width.value > 768 ? "0 15px 23px -2px rgba(18, 18, 18, 0.25);" : "",
      },
      productSpecContentWrapper: {
        flexDirection: width.value > 768 ? "row" : "column",
        marginRight: width.value > 768 ? "260px" : "auto",
      },
      productSpecImgWrapper: {
        transform:
          width.value > 768
            ? "rotate(-1.377deg) translateZ(0)"
            : "rotate(0deg)",
        marginBottom: width.value > 768 ? "-12px" : "0",
      },
      productSpecBlock2: {
        transform:
          width.value > 768
            ? "rotate(+1.377deg) translateZ(0)"
            : "rotate(0deg)",
      },
      moreBtn: {
        background: "#8B8B8D",
        color: "#ffffff",
      },
      moreBtnIco: "#FFFFFF",
    },
    //   description: [
    //     "",
    //     "LINDBERG 以革命性的無螺絲、無焊接設計聞名，打造出極致輕盈且堅固耐用的鏡框，品牌嚴選高品質鈦金屬與醋酸纖維材質，不僅確保配戴的舒適性，更能完美貼合各種臉型。透過高度客製化的設計理念，每一副 LINDBERG 眼鏡皆是個人風格的獨特展現，展現北歐設計的極簡美學與尖端技術的完美融合。",
    //   ],
    currentSwiperIndex: 0,
    swiper: [
      {
        id: 1,
        img: "https://statichk.cmermedical.com/cmermedical/image/20251225/section1-swiper1.png",
        title: "5543＿PU15",
        mainImg: {
          pc: "https://statichk.cmermedical.com/cmermedical/image/20251225/section1-pc2.webp",
          mobile:
            "https://statichk.cmermedical.com/cmermedical/image/20251225/section1-5543＿PU15.webp",
        },
        active: 1,
      },
      {
        id: 2,
        img: "https://statichk.cmermedical.com/cmermedical/image/20251225/section1-swiper2.png",
        title: "9760_U9",
        mainImg: {
          pc: "https://statichk.cmermedical.com/cmermedical/image/20251225/section1-pc3.webp",
          mobile:
            "https://statichk.cmermedical.com/cmermedical/image/20251225/section1-9760_U9.webp?v1",
        },
        active: 0,
      },
      {
        id: 3,
        img: "https://statichk.cmermedical.com/cmermedical/image/20251225/section1-swiper3.png",
        title: "9768_U15",
        mainImg: {
          pc: "https://statichk.cmermedical.com/cmermedical/image/20251225/section1-pc.webp",
          mobile:
            "https://statichk.cmermedical.com/cmermedical/image/20251225/section1-9768_U15.webp",
        },
        active: 0,
      },

  // 複製
       {
        id: 1,
        img: "https://statichk.cmermedical.com/cmermedical/image/20251225/section1-swiper1.png",
        title: "5543＿PU15",
        mainImg: {
          pc: "https://statichk.cmermedical.com/cmermedical/image/20251225/section1-pc2.webp",
          mobile:
            "https://statichk.cmermedical.com/cmermedical/image/20251225/section1-5543＿PU15.webp",
        },
        active: 1,
      },
      {
        id: 2,
        img: "https://statichk.cmermedical.com/cmermedical/image/20251225/section1-swiper2.png",
        title: "9760_U9",
        mainImg: {
          pc: "https://statichk.cmermedical.com/cmermedical/image/20251225/section1-pc3.webp",
          mobile:
            "https://statichk.cmermedical.com/cmermedical/image/20251225/section1-9760_U9.webp?v1",
        },
        active: 0,
      },
      {
        id: 3,
        img: "https://statichk.cmermedical.com/cmermedical/image/20251225/section1-swiper3.png",
        title: "9768_U15",
        mainImg: {
          pc: "https://statichk.cmermedical.com/cmermedical/image/20251225/section1-pc.webp",
          mobile:
            "https://statichk.cmermedical.com/cmermedical/image/20251225/section1-9768_U15.webp",
        },
        active: 0,
      },
    ],
  },
  {
    id: 2,
    title: "999.9",
    style: {
      backgroundRotate: {
        transform:
          width.value > 768 ? "rotate(0.912deg) translateZ(0)" : "rotate(0deg)",
        background:
          width.value > 768
            ? "radial-gradient(100.98% 100.81% at 50% 50%, #FFF 0%, #B3B3B3 100%)"
            : "",
        boxShadow:
          width.value > 768 ? "0 15px 23px -2px rgba(18, 18, 18, 0.25)" : "",
      },
      productSpecContentWrapper: {
        flexDirection: width.value > 768 ? "row-reverse" : "column",
        marginLeft: width.value > 768 ? "160px" : "auto",
      },
      productSpecImgWrapper: {
        transform:
          width.value > 768 ? "rotate(0.912deg) translateZ(0)" : "rotate(0deg)",
        marginBottom: width.value > 768 ? "-48px" : "0",
      },
      productSpecBlock2: {
        transform: width.value > 768 ? "rotate(-0.912deg)" : "rotate(0deg)",
      },
      moreBtn: {
        background: "#FFFFFF",
        color: "#4D4D4D",
      },
      moreBtnIco: "#4D4D4D",
    },
    description: [
      "來自日本的 999.9（Four Nines），被譽為「神人級」眼鏡品牌，以極致工藝重新定義舒適標準，讓配戴者體驗前所未有的貼合感與穩定度。",
      "999.9 始終秉持「舒適、靈活、輕盈」的三大核心理念，將配戴體驗推向更高境界，品牌專為亞洲配戴者設計，每一副鏡架皆經過嚴謹的人體工學調整，確保與東方人的臉型輪廓完美契合，無論鼻梁高度、臉部弧度或耳部支撐，都能達到理想的平衡。",
    ],

    currentSwiperIndex: 0,
    swiper: [
      {
        id: 1,
        active: 1,
        img: "https://statichk.cmermedical.com/cmermedical/image/20251225/section2-swiper1.png",
        title: "5543＿PU15",
        mainImg: {
          pc: "https://statichk.cmermedical.com/cmermedical/image/20251225/section2-pc.webp",
          mobile:
            "https://statichk.cmermedical.com/cmermedical/image/20251225/section2-m.webp?v2",
        },
      },
      {
        id: 2,
        active: 0,
        img: "https://statichk.cmermedical.com/cmermedical/image/20251225/section2-swiper2.png",
        title: "9760_U9",
        mainImg: {
          pc: "https://statichk.cmermedical.com/cmermedical/image/20251225/section2-pc.webp",
          mobile:
            "https://statichk.cmermedical.com/cmermedical/image/20251225/section2-m.webp?v2",
        },
      },
      {
        id: 3,
        active: 0,
        img: "https://statichk.cmermedical.com/cmermedical/image/20251225/section2-swiper3.png",
        title: "9768_U15",
        mainImg: {
          pc: "https://statichk.cmermedical.com/cmermedical/image/20251225/section2-pc.webp",
          mobile:
            "https://statichk.cmermedical.com/cmermedical/image/20251225/section2-m.webp?v2",
        },
      },


      // 複製
          {
        id: 1,
        active: 1,
        img: "https://statichk.cmermedical.com/cmermedical/image/20251225/section2-swiper1.png",
        title: "5543＿PU15",
        mainImg: {
          pc: "https://statichk.cmermedical.com/cmermedical/image/20251225/section2-pc.webp",
          mobile:
            "https://statichk.cmermedical.com/cmermedical/image/20251225/section2-m.webp?v2",
        },
      },
      {
        id: 2,
        active: 0,
        img: "https://statichk.cmermedical.com/cmermedical/image/20251225/section2-swiper2.png",
        title: "9760_U9",
        mainImg: {
          pc: "https://statichk.cmermedical.com/cmermedical/image/20251225/section2-pc.webp",
          mobile:
            "https://statichk.cmermedical.com/cmermedical/image/20251225/section2-m.webp?v2",
        },
      },
      {
        id: 3,
        active: 0,
        img: "https://statichk.cmermedical.com/cmermedical/image/20251225/section2-swiper3.png",
        title: "9768_U15",
        mainImg: {
          pc: "https://statichk.cmermedical.com/cmermedical/image/20251225/section2-pc.webp",
          mobile:
            "https://statichk.cmermedical.com/cmermedical/image/20251225/section2-m.webp?v2",
        },
      },

      //    {
      //     id: 4,
      //      active: 0,
      //     img: "https://statichk.cmermedical.com/cmermedical/image/20251225/section2-swiper3.png",
      //     title: "9768_U15",
      //     mainImg: {
      //       pc: "https://statichk.cmermedical.com/cmermedical/image/20251225/section2-pc-9768_U15.webp",
      //       mobile:
      //         "https://statichk.cmermedical.com/cmermedical/image/20251225/section2-m-9768_U15.webp?v2",
      //     },
      //   },
    ],
  },
  {
    id: 3,
    title: "MARKUS T",
    style: {
      backgroundRotate: {
        transform:
          width.value > 768
            ? "rotate(-1.377deg) translateZ(0)"
            : "rotate(0deg)",
        background:
          width.value > 768
            ? "radial-gradient(100.98% 100.81% at 50% 50%, #FFF 25.96%, #B0BDC6 100%)"
            : "",
        boxShadow:
          width.value > 768 ? "0 15px 23px -2px rgba(18, 18, 18, 0.25)" : "",
      },
      productSpecContentWrapper: {
        flexDirection: width.value > 768 ? "row" : "column",
        marginRight: width.value > 768 ? "260px" : "auto",
      },
      productSpecImgWrapper: {
        transform:
          width.value > 768
            ? "rotate(-1.377deg) translateZ(0)"
            : "rotate(0deg)",
        marginBottom: width.value > 768 ? "-17px" : "0",
      },
      productSpecBlock2: {
        transform: width.value > 768 ? "rotate(-1.377deg)" : "rotate(0deg)",
      },
      moreBtn: {
        background: "#8B8B8D",
        color: "#ffffff",
      },
      moreBtnIco: "#FFFFFF",
    },
    description: [
      "MARKUS T 源於德國創立，以「輕盈、耐用、純粹」為品牌核心，專注於打造極致簡約且充滿技術美感的眼鏡。",
      "MARKUS T 以創新的無螺絲鉸鍊技術聞名，透過極致精密的雷射切割技術，減少傳統螺絲結構可能帶來的鬆動與維護問題，完美體現了德國工藝對細節的極致掌控。品牌強調「設計應該讓人們更像自己」，透過純粹且現代感十足的造型，展現極簡與功能並存的美學，每一副 MARKUS T 眼鏡都能自然融入配戴者的日常風格，強調個人魅力而不過度張揚。",
    ],

    currentSwiperIndex: 0,
    swiper: [
      {
        id: 1,
        active: 0,
        img: "https://statichk.cmermedical.com/cmermedical/image/20251225/section3-swiper1.png?v=1",
        title: "P1012 MIO_663",
        mainImg: {
          pc: "https://statichk.cmermedical.com/cmermedical/image/20251225/section3-pc-P1012 MIO_663.webp",
          mobile:
            "https://statichk.cmermedical.com/cmermedical/image/20251225/section3-m-P1012 MIO_663.webp",
        },
      },
      {
        id: 2,
        active: 0,
        img: "https://statichk.cmermedical.com/cmermedical/image/20251225/section3-swiper2.png",
        title: "P1024_640",
        mainImg: {
          pc: "https://statichk.cmermedical.com/cmermedical/image/20251225/section3-pc-P1024_640.webp",
          mobile:
            "https://statichk.cmermedical.com/cmermedical/image/20251225/section3-m-P1024_640.webp",
        },
      },
      {
        id: 3,
        active: 0,
        img: "https://statichk.cmermedical.com/cmermedical/image/20251225/section3-swiper3.png",
        title: "P1034 MIO_670",
        mainImg: {
          pc: "https://statichk.cmermedical.com/cmermedical/image/20251225/section3-pc-P1034 MIO_670.webp",
          mobile:
            "https://statichk.cmermedical.com/cmermedical/image/20251225/section3-m-P1038_600.webp",
        },
      },
      {
        id: 4,
        active: 0,
        img: "https://statichk.cmermedical.com/cmermedical/image/20251225/section3-swiper4.png",
        title: "P1035_663",
        mainImg: {
          pc: "https://statichk.cmermedical.com/cmermedical/image/20251225/section3-pc-P1035_663.webp",
          mobile:
            "https://statichk.cmermedical.com/cmermedical/image/20251225/section3-m-P1035_663.webp",
        },
      },
      {
        id: 5,
        active: 0,
        img: "https://statichk.cmermedical.com/cmermedical/image/20251225/section3-swiper3.png",
        title: "P1038_600",
        mainImg: {
          pc: "https://statichk.cmermedical.com/cmermedical/image/20251225/section3-pc-P1038_600.webp",
          mobile:
            "https://statichk.cmermedical.com/cmermedical/image/20251225/section3-m-P1034%20MIO_6702.webp",
        },
      },
    ],
  },
  {
    id: 4,
    title: "Silhouette",
    style: {
      backgroundRotate: {
        transform:
          width.value > 768 ? "rotate(0.912deg) translateZ(0)" : "rotate(0deg)",
        background:
          width.value > 768
            ? "radial-gradient(100.98% 100.81% at 50% 50%, #FFF 0%, #E8E2DE 100%)"
            : "",
        boxShadow:
          width.value > 768 ? "0 15px 23px -2px rgba(18, 18, 18, 0.25)" : "",
      },
      productSpecContentWrapper: {
        flexDirection: width.value > 768 ? "row-reverse" : "column",
        marginLeft: width.value > 768 ? "160px" : "auto",
      },
      productSpecImgWrapper: {
        transform:
          width.value > 768 ? "rotate(0.912deg) translateZ(0)" : "rotate(0deg)",
        marginBottom: width.value > 768 ? "-10px" : "0",
      },
      productSpecBlock2: {
        transform: width.value > 768 ? "rotate(-0.912deg)" : "rotate(0deg)",
      },
      moreBtn: {
        background: "#FFFFFF",
        color: "#4D4D4D",
      },
      moreBtnIco: "#4D4D4D",
    },
    description: [
      "來自奧地利的 Silhouette，以「純粹、創新、輕盈」為品牌核心，將極致輕盈與現代美學推向新的高度。每一副 Silhouette 眼鏡都以卓越的設計與精密的工藝為基礎，完美融合實用功能與藝術美感，展現出低調而不失奢華的極簡風格。",
      "Silhouette 以光學卓越為基礎，為每位佩戴者量身定制，實現無與倫比的舒適貼合。超輕量的高品質框架與鏡片設計，每一條線條都蘊含深意，每一個細節皆經過精密計算與打造，為佩戴者帶來幾乎無感的舒適體驗。",
    ],

    currentSwiperIndex: 0,
    swiper: [
      {
        id: 1,
        active: 0,
        img: "https://statichk.cmermedical.com/cmermedical/image/20251225/section4-swiper1.png?v0=20251205",
        title: "1609 75 _4522",
        mainImg: {
          pc: "https://statichk.cmermedical.com/cmermedical/image/20251225/section4-pc-1609_75_4522.webp?v0=20251205",
          mobile:
            "https://statichk.cmermedical.com/cmermedical/image/20251225/section4-m-1609_75_4522.webp",
        },
      },
      {
        id: 2,
        active: 0,
        img: "https://statichk.cmermedical.com/cmermedical/image/20251225/section4-swiper2.png?v0=20251205",
        title: "1618 75 _4140",
        mainImg: {
          pc: "https://statichk.cmermedical.com/cmermedical/image/20251225/section4-pc-1618_75_4140.webp?v0=20251205",
          mobile:
            "https://statichk.cmermedical.com/cmermedical/image/20251225/section4-m-1618_75_4140SS.webp?V1=20251205",
        },
      },

// 複製
       {
        id: 1,
        active: 0,
        img: "https://statichk.cmermedical.com/cmermedical/image/20251225/section4-swiper1.png?v0=20251205",
        title: "1609 75 _4522",
        mainImg: {
          pc: "https://statichk.cmermedical.com/cmermedical/image/20251225/section4-pc-1609_75_4522.webp?v0=20251205",
          mobile:
            "https://statichk.cmermedical.com/cmermedical/image/20251225/section4-m-1609_75_4522.webp",
        },
      },
      {
        id: 2,
        active: 0,
        img: "https://statichk.cmermedical.com/cmermedical/image/20251225/section4-swiper2.png?v0=20251205",
        title: "1618 75 _4140",
        mainImg: {
          pc: "https://statichk.cmermedical.com/cmermedical/image/20251225/section4-pc-1618_75_4140.webp?v0=20251205",
          mobile:
            "https://statichk.cmermedical.com/cmermedical/image/20251225/section4-m-1618_75_4140SS.webp?V1=20251205",
        },
      },
    ],
  },
  {
    id: 5,
    title: "MONOQOOL",
    link: "https://api.whatsapp.com/send?phone=85269180511&text=%E4%BD%A0%E5%A5%BD%EF%BC%8C%E6%88%91%E6%83%B3%E4%BA%86%E8%A7%A3%E6%9B%B4%E5%A4%9A%20999.9%20Four%20Nines%E7%9C%BC%E9%8F%A1",
    style: {
      backgroundRotate: {
        transform:
          width.value > 768
            ? "rotate(-1.377deg) translateZ(0)"
            : "rotate(0deg)",
        background:
          width.value > 768
            ? "radial-gradient(100.98% 100.81% at 50% 50%, #FFF 25.96%, #9B948A 100%)"
            : "",
        boxShadow:
          width.value > 768 ? "0 15px 23px -2px rgba(18, 18, 18, 0.25)" : "",
      },
      productSpecContentWrapper: {
        flexDirection: width.value > 768 ? "row" : "column",
        marginRight: width.value > 768 ? "260px" : "auto",
      },
      productSpecImgWrapper: {
        transform:
          width.value > 768
            ? "rotate(-1.377deg) translateZ(0)"
            : "rotate(0deg)",
        marginBottom: width.value > 768 ? "-53px" : "0",
      },
      productSpecBlock2: {
        transform: width.value > 768 ? "rotate(-1.377deg)" : "rotate(0deg)",
      },
      moreBtn: {
        background: "#8B8B8D",
        color: "#ffffff",
      },
      moreBtnIco: "#FFFFFF",
    },
    description: [
      "MONOQOOL 結合丹麥設計與日本製造的先驅眼鏡品牌，以簡潔設計與功能美學著稱，為眼鏡業帶來全新的創意科技。",
      "品牌核心理念強調對環境友善和永續發展，品牌最為人熟知的是，鏡框製作採用尖端的 3D 列印技術，有效減少資源浪費，並顯著降低重量，達到輕巧而耐用的結構設計。",
    ],
    currentSwiperIndex: 0,
    swiper: [
      {
        id: 1,
        active: 1,
        img: "https://statichk.cmermedical.com/cmermedical/image/20251225/section5-swiper1.png",
        title: "The futurist_FU",
        mainImg: {
          pc: "https://statichk.cmermedical.com/cmermedical/image/20251225/section5-pc-The futurist_FU.webp?v0=20251205",
          mobile:
            "https://statichk.cmermedical.com/cmermedical/image/20251225/section5-m-The futurist_FU.webp",
        },
      },
      {
        id: 2,
        active: 0,
        img: "https://statichk.cmermedical.com/cmermedical/image/20251225/section5-swiper2.png",
        title: "Duke_DK",
        mainImg: {
          pc: "https://statichk.cmermedical.com/cmermedical/image/20251225/section5-pc-Duke_DK.webp",
          mobile:
            "https://statichk.cmermedical.com/cmermedical/image/20251225/section5-m-Duke_DK.webp",
        },
      },
      {
        id: 3,
        active: 0,
        img: "https://statichk.cmermedical.com/cmermedical/image/20251225/section5-swiper3.png",
        title: "Daffodil_DF",
        mainImg: {
          pc: "https://statichk.cmermedical.com/cmermedical/image/20251225/section5-pc-Daffodil_DF.webp",
          mobile:
            "https://statichk.cmermedical.com/cmermedical/image/20251225/section5-m-Daffodil_DF.webp",
        },
      },
      {
        id: 4,
        active: 0,
        img: "https://statichk.cmermedical.com/cmermedical/image/20251225/section5-swiper4.png",
        title: "bungalow_BU",
        mainImg: {
          pc: "https://statichk.cmermedical.com/cmermedical/image/20251225/section5-pc-bungalow_BU.webp",
          mobile:
            "https://statichk.cmermedical.com/cmermedical/image/20251225/section5-m-bungalow_BU.webp",
        },
      },
    ],
  },
]);

onMounted(() => {
  handleResize();

  window.addEventListener("resize", handleResize);
  mapSwiperAsync();



  //   productSpec2.forEach((item) => {
  //     productSpec.push(item);
  //   });
});

// 計算寬度
const computedSwiperWrapStyle = computed(() => {
  return (swiper) => {
    const length = swiper.length;

    console.log(length);
    let maxWidth = "900px";
    let maxHeight = "450px";
    if (length == 2 && width.value > 768) {
      maxWidth = "450px";
    } else if (length >= 3 && width.value > 768) {
      maxWidth = "950px";
    } else if (length == 2 && width.value < 768) {
      maxHeight = "240px";
    } else if (length >= 3 && width.value < 768) {
      maxHeight = "380px";
    }
    return {
      maxWidth: maxWidth || "100%", // 使用傳入的參數或者默認值
      maxHeight: maxHeight || "auto",
    };
  };
});

// 計算數量
const computedBreakPoints = computed(() => {
  return (swiper) => {
    const length = swiper.length;
    if (length == 2) {
      return {
        640: { slidesPerView: 2 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 2 },
      };
    }
    if (length >= 3) {
      return {
        640: { slidesPerView: 3 },
        768: { slidesPerView: 3 },
        1024: { slidesPerView: 3 },
      };
    }
  };
});

// 添加对宽度的监听
watch(width, (newWidth) => {
  // 宽度变化时强制更新所有 swiper
  Object.values(swiperMap).forEach((swiper) => {
    if (swiper) {
      //   console.log("就哦哦哦", swiper);

      swiper.update();
      //   swiper.changeDirection(getDirection());
    }
  });
});
// 輪播切換事件
const onSlideChange = (specIndex, swiper) => {
  console.log("specIndex", swiper);
  console.log(
    `Swiper =切換到第`,
    specIndex,
    `個產品，第`,
    swiper.realIndex,
    `張幻燈片`
  );

  productSpec[specIndex].swiper[swiper.realIndex].active = 1;

  productSpec[specIndex].currentSwiperIndex = swiper.realIndex;
};

onUnmounted(() => {
  window.removeEventListener("resize", handleResize);
});

const swiperMap = reactive<Record<number, any>>({});

const setSwiper = (index: number, swiper: any) => {
  console.log("index", index);
  console.log("swiper", index, swiper);
  swiperMap[index] = swiper;
};

const handlesSliNext = (index: number) => {
  swiperMap[index]?.slideNext();
};

const handlesSliPrev = (index: number) => {
  swiperMap[index]?.slidePrev();
};

const handlesSliItem = (specIndex, swiperIndex) => {
  console.log("specIndex", specIndex, swiperIndex);
  productSpec[specIndex].swiper.forEach((element) => {
    element.active = 0;
  });
  setTimeout(() => {
    productSpec[specIndex].swiper[swiperIndex].active = 1;
    console.log("productSpec", productSpec[0].swiper);
    productSpec[specIndex].currentSwiperIndex = swiperIndex;
  }, 500); // 等待过
};

// 處理小於等於3個的輪播圖（使用 async/await）
const mapSwiperAsync = async () => {
  let currentProductIndex = 0;
  let currentSwiperIndex = 0;

  while (true) {
    // 無限循環
    // 等待 2.5 秒
    await new Promise((resolve) => setTimeout(resolve, 2500));

    // 找到下一個有效產品
    let found = false;
    while (!found && currentProductIndex < productSpec.length) {
      const product = productSpec[currentProductIndex];

      if (product.swiper.length <= 3) {
        if (currentSwiperIndex < product.swiper.length) {
          //   console.log(`處理產品 ${currentProductIndex} 的輪播 ${currentSwiperIndex}`);
          handlesSliItem(currentProductIndex, currentSwiperIndex);
          found = true;

          currentSwiperIndex++;
        }
      }

      // 如果當前產品處理完或不符合條件，移到下一個
      if (!found) {
        currentSwiperIndex = 0; // 重置 swiper index
        currentProductIndex++;
      }
    }

    // 如果處理完所有產品，重新開始
    if (currentProductIndex >= productSpec.length) {
      currentProductIndex = 0;
      currentSwiperIndex = 0; // 重置到第一個產品
    }
  }
};
</script>

<template>
  <div class="container">
    <!-- start banner -->
    <section class="banner">
      <div class="banner__wrapper">
        <div class="banner__content">
          <div class="banner__main">
            <div class="banner__main-text-wrap">
              <div class="banner__main-text">GLASSES</div>
              <div class="banner__text-ui">
                <a
                  href="#product-spec-0"
                  class="banner__text-li btn-animation"
                
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="banner_text-li-icon"
                    viewBox="0 0 6 7"
                    fill="none"
                  >
                    <path
                      d="M5.25 3.03125L-2.85483e-07 6.06234L-2.04968e-08 0.000160941L5.25 3.03125Z"
                      fill="#4D4D4D"
                    />
                  </svg>
                  LINDBERG
                </a>
                <a
                  href="#product-spec-1"
                  class="banner__text-li btn-animation"
                 
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="banner_text-li-icon"
                    viewBox="0 0 6 7"
                    fill="none"
                  >
                    <path
                      d="M5.25 3.03125L-2.85483e-07 6.06234L-2.04968e-08 0.000160941L5.25 3.03125Z"
                      fill="#4D4D4D"
                    />
                  </svg>
                  999.9
                </a>
                <a
                  href="#product-spec-2"
                  class="banner__text-li btn-animation"
                 
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="banner_text-li-icon"
                    viewBox="0 0 6 7"
                    fill="none"
                  >
                    <path
                      d="M5.25 3.03125L-2.85483e-07 6.06234L-2.04968e-08 0.000160941L5.25 3.03125Z"
                      fill="#4D4D4D"
                    />
                  </svg>
                  MARKUS T
                </a>
                <a
                  href="#product-spec-3"
                  class="banner__text-li btn-animation"
                 
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="banner_text-li-icon"
                    viewBox="0 0 6 7"
                    fill="none"
                  >
                    <path
                      d="M5.25 3.03125L-2.85483e-07 6.06234L-2.04968e-08 0.000160941L5.25 3.03125Z"
                      fill="#4D4D4D"
                    />
                  </svg>
                  Silhouette
                </a>
                <a
                  href="#product-spec-4"
                  class="banner__text-li btn-animation"
                  
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="banner_text-li-icon"
                    viewBox="0 0 6 7"
                    fill="none"
                  >
                    <path
                      d="M5.25 3.03125L-2.85483e-07 6.06234L-2.04968e-08 0.000160941L5.25 3.03125Z"
                      fill="#4D4D4D"
                    />
                  </svg>
                  MONOQOOL
                </a>
              </div>
            </div>

            <img
              class="banner__main-img"
              :src="
                width > 768
                  ? 'https://statichk.cmermedical.com/cmermedical/image/20251225/banner-pc2.webp'
                  : 'https://statichk.cmermedical.com/cmermedical/image/20251225/banner-m.webp'
              "
              alt="GLASSES"
              title="GLASSES"
            />
          </div>
        </div>
      </div>
    </section>
    <!-- end banner -->

    <!-- start banner -->
    <div class="breadcrumb">
      <span class="breadcrumb__item1">主頁</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="21"
        height="2"
        viewBox="0 0 21 2"
        fill="none"
      >
        <path d="M0 0.75H21" stroke="#AAAAAA" stroke-width="1.5" />
      </svg>
      <span class="breadcrumb__item2">眼鏡</span>
    </div>
    <!-- end banner -->

    <!-- start product-spec -->
    <div class="product-spec__container" style="z-index: 1">
      <section class="product-full-width-container" id="product-spec-0">
        <div class="product-spec" :style="{ zIndex: productSpec.length - 0 }">
          <div
            class="background-rotate"
            :style="{
              transform:
                width > 768
                  ? 'rotate(-1.377deg) translateZ(0)'
                  : 'rotate(0deg)',
              background:
                width > 768
                  ? 'radial-gradient(100.98% 100.81% at 50% 50%,#fff 43.27%,#dad8d6 100%)'
                  : '',
              boxShadow:
                width > 768 ? '0 15px 23px -2px rgba(18, 18, 18, 0.25)' : '',
            }"
          ></div>
          <!-- mobile -->
          <div class="product-spec__wrapper">
            <div
              class="product-spec__content-wrapper"
              :style="{
                flexDirection: width > 768 ? 'row' : 'column',
                marginRight: width > 768 ? '260px' : 'auto',
              }"
            >
              <div class="product-spec__block1">
                <div
                  class="product-spec__img-wrapper"
                  :style="{
                    transform:
                      width > 768
                        ? 'rotate(-1.377deg) translateZ(0)'
                        : 'rotate(0deg)',
                    marginBottom: width > 768 ? '-12px' : '0',
                  }"
                >
                  <img
                    class="product-spec__img"
                    :class="
                      productSpec[0].swiper[productSpec[0].currentSwiperIndex]
                        .active == 1
                        ? ''
                        : 'product-spec__img--hidden'
                    "
                    :src="
                      width > 768
                        ? productSpec[0].swiper[
                            productSpec[0].currentSwiperIndex
                          ].mainImg.pc
                        : productSpec[0].swiper[
                            productSpec[0].currentSwiperIndex
                          ].mainImg.mobile
                    "
                    alt="LINDBERG"
                    title="LINDBERG"
                  />
                </div>
              </div>
              <div class="product-spec__block2">
                <div class="product-spec__brand">LINDBERG</div>
                <div class="product-spec__content">
                  <div
                    class="product-spec__description"
                    v-for="(item, key) in productSpec[0]['description']"
                    v-html="item"
                  ></div>
                </div>
                <!-- v.swiper.length > 3 ? 3 : v.swiper.length -->
                <div class="product-spec__swiper-wrap">
                  <!-- :breakpoints="computedBreakPoints(productSpec[0].swiper)"     :slidesPerView="3"   :pagination="{ clickable: true } :direction="width > 768 ? 'horizontal' : 'vertical'""-->
                  <swiper
                    :direction="width > 768 ? 'horizontal' : 'vertical'"
                    :modules="modules"
                    :breakpoints="computedBreakPoints(productSpec[0].swiper)"
                    :slides-per-view="3"
                    :space-between="width > 768 ? 24 : 20"
           
                 
                    :loop="true"
                    :autoplay="{
                      delay: 2500,
                      disableOnInteraction: false,
                    }"
                    class="product-spec__myswiper"
                    :style="computedSwiperWrapStyle(productSpec[0].swiper)"
                    @swiper="(s) => setSwiper(0, s)"
                    @slideChange="(s) => onSlideChange(0, s)"
                  >
                    <template
                      v-for="(item, index) in productSpec[0].swiper"
                      :key="item.id"
                    >
                      <swiper-slide
                        class="product-spec__slider"
                        @click="handlesSliItem(0, index)"
                      >
                        <!--  -->
                        <div class="product-spec__slider-item">
                          <img
                            :src="item.img"
                            class="product-spec__swiper-img"
                            :alt="item.title"
                            :title="item.title"
                            @load="onImgLoad"
                          />
                          <div class="product-spec__slider-title">
                            {{ item.title }}
                          </div>
                        </div>
                      </swiper-slide>
                    </template>
                  </swiper>

                  <div class="swiper-button-next-prev">
                    <div class="button-prev" @click="handlesSliPrev(0)">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 33 62"
                        fill="none"
                      >
                        <path
                          d="M30.8096 1.5L2.68694 27.8231C1.12148 29.2884 1.1012 31.7657 2.64246 33.2564L30.8096 60.5"
                          stroke="#4D4D4D"
                          stroke-width="3"
                          stroke-linecap="round"
                        />
                      </svg>
                    </div>
                    <div class="button-next" @click="handlesSliNext(0)">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 33 62"
                        fill="none"
                      >
                        <path
                          d="M1.5 1.5L29.6226 27.8231C31.1881 29.2884 31.2084 31.7657 29.6671 33.2564L1.5 60.5"
                          stroke="#4D4D4D"
                          stroke-width="3"
                          stroke-linecap="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <!-- 了解更多按鈕 -->
                <a
                  href="https://api.whatsapp.com/send?phone=85269180511&text=%E4%BD%A0%E5%A5%BD%EF%BC%8C%E6%88%91%E6%83%B3%E4%BA%86%E8%A7%A3%E6%9B%B4%E5%A4%9A%20LINDBERG%20%E4%B8%B9%E9%BA%A5%E7%9C%BC%E9%8F%A1"
                  class="product-spec__more-btn btn-animation"
                  :style="productSpec[0].style.moreBtn"
                >
                  <span>了解更多</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="9"
                    height="15"
                    viewBox="0 0 9 15"
                    fill="none"
                  >
                    <path
                      d="M1.01855 1.01562L7.25756 7.25463L1.01855 13.4936"
                      :stroke="productSpec[0].style.moreBtnIco"
                      stroke-width="1.43977"
                      stroke-linecap="square"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="product-full-width-container" id="product-spec-1">
        <div class="product-spec" :style="{ zIndex: productSpec.length - 1 }">
          <div
            class="background-rotate"
            :style="{
              transform:
                width > 768 ? 'rotate(0.912deg) translateZ(0)' : 'rotate(0deg)',
              background:
                width > 768
                  ? 'radial-gradient(100.98% 100.81% at 50% 50%, #FFF 0%, #B3B3B3 100%)'
                  : '',
              boxShadow:
                width > 768 ? '0 15px 23px -2px rgba(18, 18, 18, 0.25)' : '',
            }"
          ></div>
          <!-- mobile -->
          <div class="product-spec__wrapper">
            <div
              class="product-spec__content-wrapper"
              :style="{
                flexDirection: width > 768 ? 'row-reverse' : 'column',
                marginLeft: width > 768 ? '260px' : 'auto',
              }"
            >
              <div class="product-spec__block1">
                <div
                  class="product-spec__img-wrapper"
                  :style="{
                    transform:
                      width > 768
                        ? 'rotate(0.912deg) translateZ(0)'
                        : 'rotate(0deg)',
                    marginBottom: width > 768 ? '-10px' : '0',
                  }"
                >
                  <img
                    class="product-spec__img"
                    :class="
                      productSpec[1].swiper[productSpec[1].currentSwiperIndex]
                        .active == 1
                        ? ''
                        : 'product-spec__img--hidden'
                    "
                    :src="
                      width > 768
                        ? productSpec[1].swiper[
                            productSpec[1].currentSwiperIndex
                          ].mainImg.pc
                        : productSpec[1].swiper[
                            productSpec[1].currentSwiperIndex
                          ].mainImg.mobile
                    "
                    :alt="productSpec[1].title"
                    :title="productSpec[1].title"
                  />
                </div>
              </div>
              <div class="product-spec__block2">
                <div class="product-spec__brand">
                  {{ productSpec[1].title }}
                </div>
                <div class="product-spec__content">
                  <div
                    class="product-spec__description"
                    v-for="(item, key) in productSpec[1]['description']"
                    v-html="item"
                  ></div>
                </div>
                <!-- v.swiper.length > 3 ? 3 : v.swiper.length -->
                <div class="product-spec__swiper-wrap">
                  <!-- :breakpoints="computedBreakPoints(productSpec[1].swiper)"     :slidesPerView="3"   :pagination="{ clickable: true }"-->
                  <swiper
                    :direction="width > 768 ? 'horizontal' : 'vertical'"
                    :modules="modules"
                    :breakpoints="computedBreakPoints(productSpec[1].swiper)"
                    :space-between="width > 768 ? 24 : 20"
                    :slides-per-view="3"
                    :loop="true"
                    :autoplay="{
                      delay: 2500,
                      disableOnInteraction: false,
                    }"
                    :style="computedSwiperWrapStyle(productSpec[1].swiper)"
                    class="product-spec__myswiper"
                    @swiper="(s) => setSwiper(1, s)"
                    @slideChange="(s) => onSlideChange(1, s)"
                  >
                    <template
                      v-for="(item, index) in productSpec[1].swiper"
                      :key="item.id"
                      v-if="productSpec[1].swiper"
                    >
                      <swiper-slide
                        class="product-spec__slider"
                        @click="handlesSliItem(1, index)"
                      >
                        <!--  -->
                        <div class="product-spec__slider-item">
                          <img
                            :src="item.img"
                            class="product-spec__swiper-img"
                            :alt="item.title"
                            :title="item.title"
                            @load="onImgLoad"
                          />
                          <div class="product-spec__slider-title">
                            {{ item.title }}
                          </div>
                        </div>
                      </swiper-slide>
                    </template>
                  </swiper>

                  <div class="swiper-button-next-prev">
                    <div class="button-prev" @click="handlesSliPrev(1)">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 33 62"
                        fill="none"
                      >
                        <path
                          d="M30.8096 1.5L2.68694 27.8231C1.12148 29.2884 1.1012 31.7657 2.64246 33.2564L30.8096 60.5"
                          stroke="#4D4D4D"
                          stroke-width="3"
                          stroke-linecap="round"
                        />
                      </svg>
                    </div>
                    <div class="button-next" @click="handlesSliNext(1)">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 33 62"
                        fill="none"
                      >
                        <path
                          d="M1.5 1.5L29.6226 27.8231C31.1881 29.2884 31.2084 31.7657 29.6671 33.2564L1.5 60.5"
                          stroke="#4D4D4D"
                          stroke-width="3"
                          stroke-linecap="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <!-- 了解更多按鈕 -->
                <a
                  href="https://api.whatsapp.com/send?phone=85269180511&text=%E4%BD%A0%E5%A5%BD%EF%BC%8C%E6%88%91%E6%83%B3%E4%BA%86%E8%A7%A3%E6%9B%B4%E5%A4%9A%20999.9%20Four%20Nines%E7%9C%BC%E9%8F%A1"
                  class="product-spec__more-btn btn-animation"
                  :style="productSpec[1].style.moreBtn"
                >
                  <span>了解更多</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="9"
                    height="15"
                    viewBox="0 0 9 15"
                    fill="none"
                  >
                    <path
                      d="M1.01855 1.01562L7.25756 7.25463L1.01855 13.4936"
                      :stroke="productSpec[1].style.moreBtnIco"
                      stroke-width="1.43977"
                      stroke-linecap="square"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="product-full-width-container" id="product-spec-2">
        <div class="product-spec" :style="{ zIndex: productSpec.length - 2 }">
          <div
            class="background-rotate"
            :style="{
              transform:
                width > 768
                  ? 'rotate(-1.377deg) translateZ(0)'
                  : 'rotate(0deg)',
              background:
                width > 768
                  ? 'radial-gradient(100.98% 100.81% at 50% 50%,#fff 43.27%,#dad8d6 100%)'
                  : '',
              boxShadow:
                width > 768 ? '0 15px 23px -2px rgba(18, 18, 18, 0.25)' : '',
            }"
          ></div>
          <!-- mobile -->
          <div class="product-spec__wrapper">
            <div
              class="product-spec__content-wrapper"
              :style="{
                flexDirection: width > 768 ? 'row' : 'column',
                marginRight: width > 768 ? '260px' : 'auto',
              }"
            >
              <div class="product-spec__block1">
                <div
                  class="product-spec__img-wrapper"
                  :style="{
                    transform:
                      width > 768
                        ? 'rotate(-1.377deg) translateZ(0)'
                        : 'rotate(0deg)',
                    marginBottom: width > 768 ? '-12px' : '0',
                  }"
                >
                  <img
                    class="product-spec__img"
                    :class="
                      productSpec[2].swiper[productSpec[2].currentSwiperIndex]
                        .active == 1
                        ? ''
                        : 'product-spec__img--hidden'
                    "
                    :src="
                      width > 768
                        ? productSpec[2].swiper[
                            productSpec[2].currentSwiperIndex
                          ].mainImg.pc
                        : productSpec[2].swiper[
                            productSpec[2].currentSwiperIndex
                          ].mainImg.mobile
                    "
                    :alt="productSpec[2].title"
                    :title="productSpec[2].title"
                  />
                </div>
              </div>
              <div class="product-spec__block2">
                <div class="product-spec__brand">
                  {{ productSpec[2].title }}
                </div>
                <div class="product-spec__content">
                  <div
                    class="product-spec__description"
                    v-for="(item, key) in productSpec[2]['description']"
                    v-html="item"
                  ></div>
                </div>
                <!-- v.swiper.length > 3 ? 3 : v.swiper.length -->
                <div class="product-spec__swiper-wrap">
                  <!-- :breakpoints="computedBreakPoints(productSpec[2].swiper)"     :slidesPerView="3"   :pagination="{ clickable: true }"-->
                  <swiper
                    :direction="width > 768 ? 'horizontal' : 'vertical'"
                    :modules="modules"
                    :breakpoints="computedBreakPoints(productSpec[2].swiper)"
                    :space-between="width > 768 ? 24 : 20"
                    :slides-per-view="3"
                    :loop="true"
                    :autoplay="{
                      delay: 2500,
                      disableOnInteraction: false,
                    }"
                    class="product-spec__myswiper"
                    :style="computedSwiperWrapStyle(productSpec[2].swiper)"
                    @swiper="(s) => setSwiper(2, s)"
                    @slideChange="(s) => onSlideChange(2, s)"
                  >
                    <template
                      v-for="(item, index) in productSpec[2].swiper"
                      :key="item.id"
                      v-if="productSpec[2].swiper"
                    >
                      <swiper-slide
                        class="product-spec__slider"
                        @click="handlesSliItem(2, index)"
                      >
                        <!--  -->
                        <div class="product-spec__slider-item">
                          <img
                            :src="item.img"
                            class="product-spec__swiper-img"
                            :alt="item.title"
                            :title="item.title"
                            @load="onImgLoad"
                          />
                          <div class="product-spec__slider-title">
                            {{ item.title }}
                          </div>
                        </div>
                      </swiper-slide>
                    </template>
                  </swiper>

                  <div class="swiper-button-next-prev">
                    <div class="button-prev" @click="handlesSliPrev(2)">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 33 62"
                        fill="none"
                      >
                        <path
                          d="M30.8096 1.5L2.68694 27.8231C1.12148 29.2884 1.1012 31.7657 2.64246 33.2564L30.8096 60.5"
                          stroke="#4D4D4D"
                          stroke-width="3"
                          stroke-linecap="round"
                        />
                      </svg>
                    </div>
                    <div class="button-next" @click="handlesSliNext(2)">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 33 62"
                        fill="none"
                      >
                        <path
                          d="M1.5 1.5L29.6226 27.8231C31.1881 29.2884 31.2084 31.7657 29.6671 33.2564L1.5 60.5"
                          stroke="#4D4D4D"
                          stroke-width="3"
                          stroke-linecap="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <!-- 了解更多按鈕 -->
                <a
                  href="https://api.whatsapp.com/send?phone=85269180511&text=%E4%BD%A0%E5%A5%BD%EF%BC%8C%E6%88%91%E6%83%B3%E4%BA%86%E8%A7%A3%E6%9B%B4%E5%A4%9A%20MARKUS%20T%E7%9C%BC%E9%8F%A1"
                  class="product-spec__more-btn btn-animation"
                  :style="productSpec[2].style.moreBtn"
                >
                  <span>了解更多</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="9"
                    height="15"
                    viewBox="0 0 9 15"
                    fill="none"
                  >
                    <path
                      d="M1.01855 1.01562L7.25756 7.25463L1.01855 13.4936"
                      :stroke="productSpec[2].style.moreBtnIco"
                      stroke-width="1.43977"
                      stroke-linecap="square"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="product-full-width-container" id="product-spec-3">
        <div class="product-spec" :style="{ zIndex: productSpec.length - 3 }">
          <div
            class="background-rotate"
            :style="{
              transform:
                width > 768 ? 'rotate(0.912deg) translateZ(0)' : 'rotate(0deg)',
              background:
                width > 768
                  ? 'radial-gradient(100.98% 100.81% at 50% 50%, #FFF 0%, #E8E2DE 100%)'
                  : '',
              boxShadow:
                width > 768 ? '0 15px 23px -2px rgba(18, 18, 18, 0.25)' : '',
            }"
          ></div>
          <!-- mobile -->
          <div class="product-spec__wrapper">
            <div
              class="product-spec__content-wrapper"
              :style="{
                flexDirection: width > 768 ? 'row-reverse' : 'column',
                marginLeft: width > 768 ? '160px' : 'auto',
              }"
            >
              <div class="product-spec__block1">
                <div
                  class="product-spec__img-wrapper"
                  :style="{
                    transform:
                      width > 768
                        ? 'rotate(0.912deg) translateZ(0)'
                        : 'rotate(0deg)',
                    marginBottom: width > 768 ? '-10px' : '0',
                  }"
                >
                  <img
                    class="product-spec__img"
                    :class="
                      productSpec[3].swiper[productSpec[3].currentSwiperIndex]
                        .active == 1
                        ? ''
                        : 'product-spec__img--hidden'
                    "
                    :src="
                      width > 768
                        ? productSpec[3].swiper[
                            productSpec[3].currentSwiperIndex
                          ].mainImg.pc
                        : productSpec[3].swiper[
                            productSpec[3].currentSwiperIndex
                          ].mainImg.mobile
                    "
                    :alt="productSpec[3].title"
                    :title="productSpec[3].title"
                  />
                </div>
              </div>
              <div class="product-spec__block2">
                <div class="product-spec__brand">
                  {{ productSpec[3].title }}
                </div>
                <div class="product-spec__content">
                  <div
                    class="product-spec__description"
                    v-for="(item, key) in productSpec[3]['description']"
                    v-html="item"
                  ></div>
                </div>
                <!-- v.swiper.length > 3 ? 3 : v.swiper.length -->
                <div
                  class="product-spec__swiper-wrap"
                
                >
                  <!--  :style="computedSwiperWrapStyle(['',''])" :breakpoints="computedBreakPoints(productSpec[3].swiper)"     :slidesPerView="3"   :pagination="{ clickable: true }"-->
                  <swiper
                    :direction="width > 768 ? 'horizontal' : 'vertical'"
                    :modules="modules"
  
                   
                    :space-between="width > 768 ? 24 : 20"
                   :slidesPerView="'2'" 
                    :loop="true"
                    :autoplay="{
                      delay: 2500,
                      disableOnInteraction: false,
                    }"
                      :style="computedSwiperWrapStyle(['',''])"
                    class="product-spec__myswiper"
                    @swiper="(s) => setSwiper(3, s)"
                    @slideChange="(s) => onSlideChange(3, s)"
                  >
                    <template
                      v-for="(item, index) in productSpec[3].swiper"
                      :key="item.id"
                      v-if="productSpec[3].swiper"
                    >
                      <swiper-slide
                        class="product-spec__slider"
                        @click="handlesSliItem(3, index)"
                      >
                        <!--  -->
                        <div class="product-spec__slider-item">
                          <img
                            :src="item.img"
                            class="product-spec__swiper-img"
                            :alt="item.title"
                            :title="item.title"
                            @load="onImgLoad"
                          />
                          <div class="product-spec__slider-title">
                            {{ item.title }}
                          </div>
                        </div>
                      </swiper-slide>
                    </template>
                  </swiper>

                  <div class="swiper-button-next-prev">
                    <div class="button-prev" @click="handlesSliPrev(3)">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 33 62"
                        fill="none"
                      >
                        <path
                          d="M30.8096 1.5L2.68694 27.8231C1.12148 29.2884 1.1012 31.7657 2.64246 33.2564L30.8096 60.5"
                          stroke="#4D4D4D"
                          stroke-width="3"
                          stroke-linecap="round"
                        />
                      </svg>
                    </div>
                    <div class="button-next" @click="handlesSliNext(3)">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 33 62"
                        fill="none"
                      >
                        <path
                          d="M1.5 1.5L29.6226 27.8231C31.1881 29.2884 31.2084 31.7657 29.6671 33.2564L1.5 60.5"
                          stroke="#4D4D4D"
                          stroke-width="3"
                          stroke-linecap="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <!-- 了解更多按鈕 -->
                <a
                  href="https://api.whatsapp.com/send?phone=85269180511&text=%E4%BD%A0%E5%A5%BD%EF%BC%8C%E6%88%91%E6%83%B3%E4%BA%86%E8%A7%A3%E6%9B%B4%E5%A4%9A%20Silhouette%20%E8%A9%A9%E6%A8%82%E7%9C%BC%E9%8F%A1"
                  class="product-spec__more-btn btn-animation"
                  :style="productSpec[3].style.moreBtn"
                >
                  <span>了解更多</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="9"
                    height="15"
                    viewBox="0 0 9 15"
                    fill="none"
                  >
                    <path
                      d="M1.01855 1.01562L7.25756 7.25463L1.01855 13.4936"
                      :stroke="productSpec[3].style.moreBtnIco"
                      stroke-width="1.43977"
                      stroke-linecap="square"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="product-full-width-container" id="product-spec-4">
        <div class="product-spec" :style="{ zIndex: productSpec.length - 4 }">
          <div
            class="background-rotate"
            :style="{
              transform:
                width > 768
                  ? 'rotate(-1.377deg) translateZ(0)'
                  : 'rotate(0deg)',
              background:
                width > 768
                  ? 'radial-gradient(100.98% 100.81% at 50% 50%, #FFF 25.96%, #9B948A 100%)'
                  : '',
              boxShadow:
                width > 768 ? '0 15px 23px -2px rgba(18, 18, 18, 0.25)' : '',
            }"
          ></div>
          <!-- mobile -->
          <div class="product-spec__wrapper">
            <div
              class="product-spec__content-wrapper"
              :style="{
                flexDirection: width > 768 ? 'row' : 'column',
                marginRight: width > 768 ? '260px' : 'auto',
              }"
            >
              <div class="product-spec__block1">
                <div
                  class="product-spec__img-wrapper"
                  :style="{
                    transform:
                      width > 768
                        ? 'rotate(-1.377deg) translateZ(0)'
                        : 'rotate(0deg)',
                    marginBottom: width > 768 ? '-12px' : '0',
                  }"
                >
                  <img
                    class="product-spec__img"
                    :class="
                      productSpec[4].swiper[productSpec[4].currentSwiperIndex]
                        .active == 1
                        ? ''
                        : 'product-spec__img--hidden'
                    "
                    :src="
                      width > 768
                        ? productSpec[4].swiper[
                            productSpec[4].currentSwiperIndex
                          ].mainImg.pc
                        : productSpec[4].swiper[
                            productSpec[4].currentSwiperIndex
                          ].mainImg.mobile
                    "
                    :alt="productSpec[4].title"
                    :title="productSpec[4].title"
                  />
                </div>
              </div>
              <div class="product-spec__block2">
                <div class="product-spec__brand">
                  {{ productSpec[4].title }}
                </div>
                <div class="product-spec__content">
                  <div
                    class="product-spec__description"
                    v-for="(item, key) in productSpec[4]['description']"
                    v-html="item"
                  ></div>
                </div>
                <!-- v.swiper.length > 3 ? 3 : v.swiper.length  :style="computedSwiperWrapStyle(productSpec[4].swiper)"-->
                <div class="product-spec__swiper-wrap">
                  <!-- :breakpoints="computedBreakPoints(productSpec[4].swiper)"     :slidesPerView="3"   :pagination="{ clickable: true }"-->
                  <swiper
                    :direction="width > 768 ? 'horizontal' : 'vertical'"
                    :modules="modules"
                    :breakpoints="computedBreakPoints(productSpec[4].swiper)"
                    :space-between="width > 768 ? 24 : 20"
                    :loop="true"
                    :slides-per-view="3"
                    :autoplay="{
                      delay: 2500,
                      disableOnInteraction: false,
                    }"
                    class="product-spec__myswiper"
                    :style="computedSwiperWrapStyle(productSpec[4].swiper)"
                    @swiper="(s) => setSwiper(4, s)"
                    @slideChange="(s) => onSlideChange(4, s)"
                  >
                    <template
                      v-for="(item, index) in productSpec[4].swiper"
                      :key="item.id"
                      v-if="productSpec[4].swiper"
                    >
                      <swiper-slide
                        class="product-spec__slider"
                        @click="handlesSliItem(4, index)"
                      >
                        <!--  -->
                        <div class="product-spec__slider-item">
                          <img
                            :src="item.img"
                            class="product-spec__swiper-img"
                            :alt="item.title"
                            :title="item.title"
                            @load="onImgLoad"
                          />
                          <div class="product-spec__slider-title">
                            {{ item.title }}
                          </div>
                        </div>
                      </swiper-slide>
                    </template>
                  </swiper>

                  <div class="swiper-button-next-prev">
                    <div class="button-prev" @click="handlesSliPrev(4)">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 33 62"
                        fill="none"
                      >
                        <path
                          d="M30.8096 1.5L2.68694 27.8231C1.12148 29.2884 1.1012 31.7657 2.64246 33.2564L30.8096 60.5"
                          stroke="#4D4D4D"
                          stroke-width="3"
                          stroke-linecap="round"
                        />
                      </svg>
                    </div>
                    <div class="button-next" @click="handlesSliNext(4)">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 33 62"
                        fill="none"
                      >
                        <path
                          d="M1.5 1.5L29.6226 27.8231C31.1881 29.2884 31.2084 31.7657 29.6671 33.2564L1.5 60.5"
                          stroke="#4D4D4D"
                          stroke-width="3"
                          stroke-linecap="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <!-- 了解更多按鈕 -->
                <a
                  href="https://api.whatsapp.com/send?phone=85269180511&text=%E4%BD%A0%E5%A5%BD%EF%BC%8C%E6%88%91%E6%83%B3%E4%BA%86%E8%A7%A3%E6%9B%B4%E5%A4%9A%20MONOQOOL%20%E7%9C%BC%E9%8F%A1"
                  class="product-spec__more-btn btn-animation"
                  :style="productSpec[4].style.moreBtn"
                >
                  <span>了解更多</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="9"
                    height="15"
                    viewBox="0 0 9 15"
                    fill="none"
                  >
                    <path
                      d="M1.01855 1.01562L7.25756 7.25463L1.01855 13.4936"
                      :stroke="productSpec[4].style.moreBtnIco"
                      stroke-width="1.43977"
                      stroke-linecap="square"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    <!-- end product-spec -->

    <!-- start address -->

    <section class="address">
      <div class="address__wrapper">
        <div class="address__item">
          <div class="address__item-img">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448.35212245020546!2d114.15715201970383!3d22.28106878236476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34040106316e66b3%3A0xd15dcc6e17ec1b11!2z5biM55Gq6KaW5YWJIC0gWkVJU1MgVklTSU9OIEVYUEVSVA!5e0!3m2!1szh-CN!2s!4v1762496628160!5m2!1szh-CN!2s"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div class="address__info">
            <div class="address__info-item">
              <div class="address__info-item-title">地址</div>
              <div class="address__info-item-p">
                中環畢打街1-3號中建大廈1515室 <br />
                （中環站G出口）
              </div>
            </div>

            <div class="address__info-item">
              <div class="address__info-item-title">營業時間</div>
              <div class="address__info-content">
                <div class="address__date">
                  星期一至五：<br />
                  09:30 – 13:30 <br />
                  14:30 – 18:00 <br />
                </div>
                <div class="address__date">
                  星期六：<br />
                  09:30 – 13:30 <br />
                  (星期日及公眾假期休息) <br />
                </div>
              </div>
            </div>

            <div class="address__info-item">
              <div class="address__info-item-title">查詢電話</div>
              <div class="address__info-content">
                <div class="address__phone">+852 3892 5089</div>
                <a
                  href="https://api.whatsapp.com/send?phone=85269180511&text=%E4%BD%A0%E5%A5%BD%EF%BC%8C%E6%88%91%E6%83%B3%E6%9F%A5%E8%A9%A2"
                  class="address__whatsapp btn-animation"
                >
                  <span class="address__whatsapp-icon"
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="26"
                      height="26"
                      viewBox="0 0 26 26"
                      fill="none"
                    >
                      <path
                        d="M17.9324 14.886C17.6584 14.7471 16.2933 14.0873 16.0394 13.9981C15.7855 13.9038 15.5995 13.8592 15.416 14.137C15.23 14.4123 14.702 15.0249 14.5361 15.2109C14.3752 15.3945 14.2118 15.4168 13.9378 15.2804C12.3088 14.4767 11.2404 13.8468 10.167 12.0287C9.8829 11.5451 10.451 11.5798 10.9815 10.5356C11.072 10.3521 11.0267 10.1958 10.9563 10.0569C10.8859 9.91801 10.3329 8.57371 10.1016 8.02557C9.87787 7.49231 9.6466 7.56672 9.47816 7.5568C9.31727 7.54687 9.13376 7.54688 8.94773 7.54688C8.7617 7.54688 8.46255 7.61632 8.20865 7.88667C7.95474 8.16198 7.23828 8.82421 7.23828 10.1685C7.23828 11.5128 8.23127 12.815 8.36702 12.9985C8.5078 13.182 10.3203 15.9401 13.1032 17.1282C14.8629 17.8772 15.5517 17.9417 16.4316 17.8127C16.9671 17.7333 18.0707 17.153 18.2994 16.5106C18.5282 15.8707 18.5282 15.3225 18.4603 15.2084C18.3924 15.0869 18.2064 15.0174 17.9324 14.886Z"
                        fill="white"
                      />
                      <path
                        d="M23.2592 8.3918C22.6911 7.05989 21.8766 5.8644 20.8383 4.83757C19.8001 3.81322 18.5884 3.00713 17.2359 2.44907C15.8533 1.87613 14.3851 1.58594 12.8718 1.58594H12.8215C11.2981 1.59338 9.82242 1.89101 8.43475 2.47635C7.09484 3.04186 5.8932 3.84546 4.86501 4.86981C3.83683 5.89417 3.02987 7.0847 2.47178 8.41164C1.89359 9.78571 1.60198 11.2466 1.60952 12.7496C1.61706 14.4709 2.03437 16.1798 2.81619 17.7077V21.4777C2.81619 22.1077 3.33405 22.6186 3.97258 22.6186H7.79622C9.34478 23.39 11.0769 23.8017 12.8215 23.8092H12.8743C14.3801 23.8092 15.8407 23.5214 17.2158 22.9584C18.5607 22.4053 19.7699 21.6116 20.8056 20.5972C21.8439 19.5828 22.6609 18.3972 23.2315 17.0752C23.8248 15.7061 24.1265 14.2502 24.134 12.7472C24.1416 11.2367 23.8449 9.77083 23.2592 8.3918ZM19.4607 19.2554C17.6985 20.9767 15.3605 21.9242 12.8718 21.9242H12.829C11.3132 21.9167 9.80734 21.5447 8.47749 20.8452L8.26632 20.7336H4.72675V17.2414L4.61362 17.0331C3.90471 15.721 3.52762 14.2353 3.52008 12.7397C3.51002 10.2669 4.46782 7.94535 6.22503 6.19676C7.97973 4.44817 10.3252 3.48086 12.8316 3.47094H12.8743C14.1312 3.47094 15.3505 3.71153 16.4993 4.18774C17.6205 4.65155 18.6261 5.31874 19.4909 6.17196C20.3531 7.02269 21.0319 8.01728 21.502 9.12348C21.9897 10.2694 22.2335 11.4847 22.2285 12.7397C22.2134 15.2101 21.2305 17.5242 19.4607 19.2554Z"
                        fill="white"
                      /></svg
                  ></span>

                  <span>Whatsapp查詢</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- end address -->
  </div>
</template>


<style>
html, body {
  scroll-behavior: smooth;
}


</style>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Abel&family=Josefin+Slab:ital,wght@0,100..700;1,100..700&family=Noto+Sans+HK:wght@100..900&family=Playfair+Display+SC:ital,wght@0,400;0,700;0,900;1,400;1,700;1,900&display=swap");
@import "./index.css";
</style>