<script lang="ts" setup>
useHead({
  title: "希瑪視光 | ACUVUE® Abiliti™ 1 Day 兒童近視控制隱形眼鏡",
  meta: [
    {
      hid: "description",
      name: "description",
      content:
        "ACUVUE® Abiliti™ 1 Day兒童近視控制隱形眼鏡，專為兒童設計，有效減緩近視加深及眼軸增長，貼合日常生活，立即查詢日拋式兒童近視控制隱形眼鏡價錢。",
    },
    {
      hid: "Keywords",
      name: "Keywords",
      content:
        "註冊視光師 視光師 視光師驗眼中心 Cmer Vision 希瑪視光 視光中心 希瑪視光中心 希瑪眼科視光中心 兒童近視 學童近視 兒童近視管理 近視管理 近視控制 近視防控 視力健康 眼睛健康 隱形眼鏡 隱形眼鏡價錢 隱形眼鏡價格 隱形眼鏡日拋 隱形眼鏡日拋價錢 隱形眼鏡日拋價格 日拋隱形眼鏡 日拋隱形眼鏡價錢 日拋隱形眼鏡價格 日拋式隱形眼鏡 日拋式隱形眼鏡價錢 日拋式隱形眼鏡價格 兒童近視控制隱形眼鏡 兒童近視控制日拋 控制近視隱形眼鏡 兒童隱形眼鏡價格 兒童近視控制日拋價格 兒童隱形眼鏡 近視隱形眼鏡 近視隱形眼鏡價錢 控制近視日拋 控制近視日拋價格 Abiliti 價錢 Abiliti 1 Day Abiliti 1 Day價錢 ACUVUE Abiliti ACUVUE Abiliti價錢 ACUVUE Abiliti 1 Day ACUVUE Abiliti 1 Day價錢",
    },
  ],
});
const bannerImg = [
  {
    pc: "https://content.cmervision.com//static/upload/other/20250624/1750736344989348.webp",
    mobile:
      "https://content.cmervision.com//static/upload/other/20250624/1750736347433205.webp",
    newBanner: true,
  },
  {
  pc: "https://statichk.cmermedical.com/vision/imgs/Acuvue-abiliti-1-day/pc-banner.avif",
  mobile:
    "https://statichk.cmermedical.com/vision/imgs/Acuvue-abiliti-1-day/mb-banner.avif",
  newBanner: true,
  },
];

// const bannerImg = {
//   pc: "https://statichk.cmermedical.com/vision/imgs/Acuvue-abiliti-1-day/pc-banner.avif",
//   mobile:
//     "https://statichk.cmermedical.com/vision/imgs/Acuvue-abiliti-1-day/mb-banner.avif",
//   newBanner: true,
// };

const Acuvue = [
  {
    q: "小朋友也可以配戴隱形眼鏡嗎？有沒有年齡限制？",
    a: [
      `可以。只要嚴格遵從眼科專業人士的建議，注意衛生，定期進行眼科檢查，配戴隱形眼鏡不會影響視力和眼睛健康，`,
      `也沒有年齡限制。`,
    ],
    mAq: [
      `可以。只要嚴格遵從眼科專業人士的建議，注意衛生，定期進行眼科檢查，配戴隱形眼鏡不會影響視力和眼睛健康，也沒有年齡限制。`,
    ],
  },

  {
    q: "相對眼鏡，小朋友戴隱形眼鏡有甚麼好處？",
    a: [`隱形眼鏡更適合小朋友好動的生活模式，例如劍擊、球類活動等。研究亦發現配戴隱形眼鏡可以提高小朋友的自我認同和信心。`],
    mAq: [`隱形眼鏡更適合小朋友好動的生活模式，例如劍擊、球類活動等。研究亦發現配戴隱形眼鏡可以提高小朋友的自我認同和信心。`],
  },

  {
    q: "小朋友需花費更多時間學習戴除隱形眼鏡嗎？",
    a: [`8-12 歲的小朋友與13-17 歲的青少年相比，只需額外多花10 分鐘便能輕鬆學會戴除。Abiliti® 1 Day更細小更易戴除，大部分小朋友在首個課堂便能掌握技巧。`],
    mAq: [`8-12 歲的小朋友與13-17 歲的青少年相比，只需額外多花10 分鐘便能輕鬆學會戴除。Abiliti® 1 Day更細小更易戴除，大部分小朋友在首個課堂便能掌握技巧。`],
  },

  {
    q: "小朋友初戴Abiliti® 1 Day 有甚麼需要注意？",
    a: [`首次或初期配戴Abiliti® 1 Day或會有看見光暈和鬼影的情況。經過適應期後，情況將得到改善，能享受清楚的視力。`],
    mAq: [`首次或初期配戴Abiliti® 1 Day或會有看見光暈和鬼影的情況。經過適應期後，情況將得到改善，能享受清楚的視力。`],
  },
];

import getWindowSize from "@/utils/width";

const isPc = ref(true);
const vedioClick = () => {
  console.log("164654564");
};
onMounted(() => {
  const observer = new IntersectionObserver(handleIntersection, {
    threshold: 0.1, // 当元素至少10%出现在视口时触发回调
  });

  if (observerTarget.value) {
    observer.observe(observerTarget.value);
  }

  let { widthState, width } = getWindowSize();
  window.addEventListener("resize", () => {
    let { widthState, width } = getWindowSize();
    isPc.value = widthState;
  });
  isPc.value = widthState;
});
//特色服务切换
const indexNum = ref(0);
const openDialog = (index: any) => {
  indexNum.value = index;
};

const dialogTop = () => {
  if (indexNum.value > 0) {
    indexNum.value--;
  }
};
const dialogBottom = () => {
  if (indexNum.value < 2) {
    indexNum.value++;
  }
};
const listDiscounts = [
  {
    id: 1,
    title: `精密測量眼睛度數`,
    img: "https://statichk.cmermedical.com/vision/imgs/4a688fa160e96203.jpg",
    svg: "https://statichk.cmermedical.com/vision/imgs/1dede03366c21b1d.png",
    content: `每個人的眼睛不只單一度數，角膜和瞳孔都是獨一無二, 像指紋一樣獨特。眼睛受高階像差影響會導致度數有差別，因此進行光學指紋測量能全面分析你的視力，找到最真實的度數並優化鏡片度數。`,
  },
  {
    id: 2,
    title: `精準的鏡框中心定位`,
    img: "https://statichk.cmermedical.com/vision/imgs/7c34641f63a81653.jpg",
    svg: "https://statichk.cmermedical.com/vision/imgs/cb3cecd90c579e62.png",
    content: `精準的鏡框中心定位利用全新儀器VISUFIT 1000精密測量眼睛和眼鏡之間的所有角度，能確定鏡片在鏡框內的確切位置。為客人度身訂造專屬的鏡框，提高配戴舒適度。`,
  },
  {
    id: 3,
    title: `客製化個人鏡片`,
    img: "https://statichk.cmermedical.com/vision/imgs/fa7584e4f1659ada.jpg",
    svg: "https://statichk.cmermedical.com/vision/imgs/0587c601a83a42f8.png",
    content: `利用i.Technology技術得出獨一無二的鏡片數據，根據你的用眼習慣及視覺需求等定制出適合你的鏡片，令你擁有最佳的視覺品質。 `,
  },
];

let indexBollean = ref(false);
let indexTwoBollean = ref(false);

//个性化配镜流程

const changeBtn = (i: number) => {
  if (i == 1) {
    indexBollean.value = !indexBollean.value;
  } else if (i == 2) {
    indexTwoBollean.value = !indexTwoBollean.value;
  }
};

const closeBtn = () => {
  indexBollean.value = false;
  indexTwoBollean.value = false;
};

// 视觉资料
const observerTarget = ref(null);
const titleShow = ref(true);
const handleIntersection = (entries: any, observer: any) => {
  entries.forEach((entry: any) => {
    if (entry.isIntersecting) {
      titleShow.value = !true;
    }
  });
};
</script>

<template>
  <div class="zve-information">
    <PageSwiperBanner :banner="bannerImg" class="banner" />
    <PublicNavbar
      :isInsidePage="true"
      :insidePageTitle="'Abiliti™ 1 day 兒童近視控制隱形眼鏡'"
      :name="'服務內容'"
    />
  </div>

  <section class="section1">
    <div class="seciton1-box">
      <img
        src="https://statichk.cmermedical.com/vision/imgs/Acuvue-abiliti-1-day/seciton1-1.avif"
        srcset="
          https://statichk.cmermedical.com/vision/imgs/Acuvue-abiliti-1-day/section1-2.avif 400w,
          https://statichk.cmermedical.com/vision/imgs/Acuvue-abiliti-1-day/section1-2.avif 640w,
          https://statichk.cmermedical.com/vision/imgs/Acuvue-abiliti-1-day/seciton1-1.avif
        "
        sizes=" (max-width: 992px) 100vw,1216px"
        alt=""
      />

      <p>
        近年來，香港兒童近視問題日益嚴重。為應對這一情況，Johnson & Johnson
        Vision推出嶄新而全面的近視管理方案，包括近視控制隱形眼鏡，有效減緩近視加深速度，同時配合孩子和家長的日常生活模式。
      </p>
    </div>
  </section>

  <section class="section2">
    <h2 class="d-lg-none">技術原理</h2>
    <div class="section2-box">
      <div class="section2-box-text">
        <h2 class="d-none d-lg-block">技術原理</h2>
        <p>
          ACUVUE® Abiliti® 1
          Day是首款和唯一專為兒童眼睛設計的每日即棄高透氧近視控制隱形眼鏡^。它使用革命性RingBoost™近視控制技術減慢兒童眼軸增長及近視加深。這款兒童高透氧近視控制隱形眼鏡具備了專門的光學設計，達到+700度和+1000度離焦度數治療效果。
        </p>
      </div>
      <div class="section2-img">
        <div class="section2-img-text">
          <h4>+1000度離焦</h4>
          <p>中央增強離焦度數最大化治療強度</p>
        </div>
        <img
          src="https://statichk.cmermedical.com/vision/imgs/Acuvue-abiliti-1-day/section2-1.avif"
          alt=""
        />

        <div class="section2-img-text">
          <h4>+700度離焦</h4>
          <p>環形離焦度數更大治療力度</p>
        </div>
      </div>
    </div>
  </section>

  <section class="section3">
    <h2 class="section-title">
      為什麼選擇<br class="d-lg-none" />
      ACUVUE® Abiliti™ 1 day？
    </h2>
    <p>
      ACUVUE® Abiliti® 1 Day近視控制隱形眼鏡安全有效。<br
        class="d-none d-lg-block"
      />根據臨床數據，ACUVUE® Abiliti® 1 Day近視控制 隱形眼鏡被證明*：
    </p>
    <div class="section3-box">
      <div class="section3-box-item">
        <h5>64<span>%</span></h5>
        <p>兒童24個月<br class="d-none d-lg-block" />無加深近視</p>
        <img
          src="https://statichk.cmermedical.com/vision/imgs/Acuvue-abiliti-1-day/section3-1.avif"
          alt=""
        />
      </div>
      <div class="section3-box-item-List">
        <div class="section3-box-item">
          <h5>33<span>%</span></h5>
          <p>兒童眼軸實現零增長</p>
          <img
            src="https://statichk.cmermedical.com/vision/imgs/Acuvue-abiliti-1-day/section3-2.avif"
            alt=""
          />
        </div>

        <div class="section3-box-item">
          <h5>2<span>倍</span></h5>
          <p>有效控制近視</p>

          <img
            src="https://statichk.cmermedical.com/vision/imgs/Acuvue-abiliti-1-day/section3-3.avif"
            alt=""
          />
        </div>
      </div>
    </div>
  </section>

  <section class="section3-iframe">
    <h2 class="section3-iframe-title">
      ACUVUE® Abiliti™ 1 day<br />
      真實用家個案
    </h2>
    <div class="section3-iframe-box">
      <div class="iframe-List">
        <div class="iframe-List-item">
          <div class="iframe-container">
            <iframe
              src="https://www.youtube.com/embed/IWk_K3PENCs?si=FYR9fUJVLimEPpX8"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
          <p>INTERVIEW FULL</p>
        </div>

        <div class="iframe-List-item">
          <p>SHORT 30sec</p>
          <div class="iframe-container">
            <iframe
              src="https://www.youtube.com/embed/AQZz3U6ntYY?si=78FjnZJApKNOPNoG"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="section4">
    <h2 class="section-title">
      ACUVUE® Abiliti™ 1 day <br class="d-lg-none" />五大優點
    </h2>

    <div class="section4-content">
      <div class="section4-content-List">
        <div class="section4-content-List-item">
          <p>貼合兒童需求<br />輕巧易戴</p>
        </div>
      </div>

      <div class="section4-content-List">
        <div class="section4-content-List-item">
          <p>全方位<br />紫外線防護</p>
        </div>
        <div class="section4-content-List-item">
          <p>每日即棄<br />衛生便捷</p>
        </div>
      </div>

      <div class="section4-content-List">
        <div class="section4-content-List-item">
          <p>高透氧性<br />全天呵護</p>
        </div>
        <div class="section4-content-List-item">
          <p>有效控制<br />近視加深</p>
        </div>
      </div>

      <div class="section4-content-img">
        <img
          src="https://statichk.cmermedical.com/vision/imgs/Acuvue-abiliti-1-day/section4-bg.avif"
          alt=""
        />
      </div>

      <div class="section4-content-text">ACUVUE® Abiliti™ 1 day</div>
    </div>
  </section>

  <section class="section5">
    <h2 class="section-title">合適對象</h2>
    <div class="section5-list">
      <div class="section5-list-item">
        <img
          src="https://statichk.cmermedical.com/vision/imgs/Acuvue-abiliti-1-day/seciton5-1.avif"
          alt=""
        />
        <span>7-12歲兒童</span>
      </div>

      <div class="section5-list-item">
        <img
          src="https://statichk.cmermedical.com/vision/imgs/Acuvue-abiliti-1-day/seciton5-2.avif"
          alt=""
        />
        <span>近視度數<br class="d-none d-lg-block" />少於800</span>
      </div>

      <div class="section5-list-item">
        <img
          src="https://statichk.cmermedical.com/vision/imgs/Acuvue-abiliti-1-day/seciton5-3.avif"
          alt=""
        />
        <span>熱愛運動</span>
      </div>

      <div class="section5-list-item">
        <img
          src="https://statichk.cmermedical.com/vision/imgs/Acuvue-abiliti-1-day/seciton5-4.avif"
          alt=""
        />
        <span>不希望讓<br class="d-none d-lg-block" />眼鏡束縛</span>
      </div>
    </div>
  </section>

  <section class="section6">
    <div class="section6-title">
      <h2>ACUVUE®Abiliti™1 day<br />近視控制隱形眼鏡</h2>
      <p>療程介紹</p>
    </div>

    <div class="section6-list">
      <div class="section6-list-item">
        <div class="section6-list-item-img">
          <img
            src="https://statichk.cmermedical.com/vision/imgs/Acuvue-abiliti-1-day/section6-1.avif"
            alt=""
          />
        </div>
        <span> STEP 1 </span>
        <p>綜合眼睛檢查 + 隱形眼鏡驗配 + 鏡片預訂（需約一星期）</p>
      </div>

      <div class="section6-list-item">
        <div class="section6-list-item-img">
          <img
            src="https://statichk.cmermedical.com/vision/imgs/Acuvue-abiliti-1-day/section6-2.avif"
            alt=""
          />
        </div>
        <span> STEP 2 </span>
        <p>學習戴上，摘下和護理隱形眼鏡的方法</p>
      </div>

      <div class="section6-list-item">
        <div class="section6-list-item-img">
          <img
            src="https://statichk.cmermedical.com/vision/imgs/Acuvue-abiliti-1-day/section6-3.avif"
            alt=""
          />
        </div>
        <span> STEP 3 </span>
        <p>取鏡片並在<br class="d-none d-lg-block" />當日開始使用</p>
      </div>

      <div class="section6-list-item">
        <div class="section6-list-item-img">
          <img
            src="https://statichk.cmermedical.com/vision/imgs/Acuvue-abiliti-1-day/section6-4.avif"
            alt=""
          />
        </div>
        <span> STEP 4 </span>
        <p>覆診：配戴後一星期 及 每３個月接受視光檢查 及 量度眼軸</p>
      </div>
    </div>
  </section>

  <section class="section7">
    <h2 class="section-title">
      近視控制隱形眼鏡<br class="d-lg-none" />使用注意事項
    </h2>

    <div class="section7-box">
      <div class="section7-box-iframe">
        <div class="iframe-container">
          <iframe
            src="https://www.youtube.com/embed/sYr1CrItGFY?si=zWI8PvRA-KmBKFIg"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <ul>
        <li>
          1. 帶鏡及摘鏡前必須徹底以洗手液清潔雙手，再以乾淨擦手紙抹乾雙手及手指
        </li>
        <li>2. 一周佩戴6天每天戴約12小時</li>
        <li>3. 產品為日拋鏡片，摘下後不能重覆使用</li>
        <li>4. 避免在戴鏡時游泳及睡覺</li>
        <li>
          5.眼睛如有不適，切勿佩戴，如情況嚴重應盡快到合資格醫院、診所或視光中心檢查眼睛狀況
        </li>
        <li>6. 定期（最少每3－6個月）覆診，以確保安全佩戴及追蹤控制成效</li>
      </ul>
    </div>

    <div class="section7-btn">
      <p>不知道兒童是否適合戴？</p>

      <a
        href="https://api.whatsapp.com/send?phone=85269180511&text=你好，我想預約試戴ACUVUE®Abiliti™1Day兒童近視控制隱形眼鏡"
        target="_blank"
      >
        <span>立即預約試戴</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="31"
          viewBox="0 0 32 31"
          fill="none"
        >
          <path
            d="M23.2725 18.5212C22.8933 18.3352 21.0043 17.4519 20.6529 17.3324C20.3016 17.2062 20.0441 17.1464 19.7902 17.5184C19.5328 17.887 18.8022 18.7072 18.5726 18.9562C18.35 19.2019 18.1238 19.2318 17.7447 19.0492C15.4904 17.9733 14.0119 17.1298 12.5264 14.6958C12.1333 14.0483 12.9195 14.0947 13.6536 12.6967C13.7788 12.451 13.7162 12.2418 13.6188 12.0558C13.5214 11.8699 12.756 10.0701 12.436 9.3362C12.1264 8.62226 11.8063 8.72188 11.5733 8.7086C11.3506 8.69531 11.0967 8.69531 10.8392 8.69531C10.5818 8.69531 10.1678 8.78829 9.81645 9.15025C9.46509 9.51884 8.47363 10.4055 8.47363 12.2053C8.47363 14.0051 9.84776 15.7484 10.0356 15.9942C10.2304 16.2399 12.7387 19.9325 16.5897 21.5231C19.0249 22.5259 19.9781 22.6123 21.1956 22.4396C21.9366 22.3334 23.4638 21.5563 23.7804 20.6963C24.097 19.8395 24.097 19.1056 24.003 18.9529C23.9091 18.7902 23.6517 18.6972 23.2725 18.5212Z"
            fill="white"
          />
          <path
            d="M30.6443 9.8307C29.8581 8.04749 28.7309 6.44692 27.2942 5.07216C25.8574 3.70072 24.1806 2.6215 22.309 1.87435C20.3957 1.10727 18.3641 0.71875 16.2698 0.71875H16.2003C14.0921 0.728712 12.05 1.12719 10.1297 1.91087C8.27553 2.66799 6.61266 3.74389 5.18982 5.11533C3.76699 6.48677 2.65029 8.0807 1.878 9.85726C1.07787 11.6969 0.674331 13.6528 0.684768 15.6651C0.695204 17.9697 1.27269 20.2576 2.3546 22.3032V27.3506C2.3546 28.1941 3.07123 28.8781 3.95485 28.8781H9.24611C11.3891 29.9108 13.786 30.4621 16.2003 30.472H16.2733C18.3571 30.472 20.3783 30.0868 22.2812 29.3331C24.1424 28.5925 25.8157 27.5299 27.2489 26.1718C28.6857 24.8136 29.8163 23.2263 30.606 21.4564C31.427 19.6234 31.8444 17.6741 31.8549 15.6618C31.8653 13.6395 31.4548 11.677 30.6443 9.8307ZM25.3878 24.3753C22.9491 26.6798 19.7138 27.9483 16.2698 27.9483H16.2107C14.113 27.9384 12.0292 27.4403 10.1889 26.5038L9.89665 26.3544H4.99849V21.6789L4.84194 21.3999C3.86092 19.6433 3.3391 17.6542 3.32866 15.6518C3.31475 12.3411 4.64017 9.23297 7.07186 6.89189C9.50007 4.55081 12.7458 3.25575 16.2142 3.24247H16.2733C18.0127 3.24247 19.6999 3.56457 21.2897 4.20214C22.8413 4.82311 24.2328 5.71637 25.4295 6.85869C26.6228 7.99768 27.562 9.32927 28.2126 10.8103C28.8875 12.3445 29.2249 13.9716 29.218 15.6518C29.1971 18.9592 27.8369 22.0574 25.3878 24.3753Z"
            fill="white"
          />
        </svg>
      </a>
    </div>
  </section>
  <div class="section8">
    <PublicCollapse
      :title="'常見問題'"
      :listQuestion="Acuvue"
      :testWidth="true"
    />
  </div>

  <PublicForm />
</template>

<style lang="scss" scoped>
:deep(.nav-bar){
  padding-left: 0;
}
:deep(.nav-bar > div){
  flex-wrap: wrap;
}
.rotated {
  transition: transform 0.3s ease-out;
  transform: rotateY(45deg);
}
.zve-information {
  cursor: url("https://statichk.cmermedical.com/vision/imgs/2025012116391701.png"),
    auto;
}

.d-none {
  display: none;
}
@media screen and (min-width: 768px) {
  .d-lg-none {
    display: none;
  }
  .d-lg-block {
    display: block;
  }
  //  中心介绍
  .section1 {
    margin-top: 5.208vw; /* 100px ÷ 1920 × 100 */
    .seciton1-box {
      max-width: 54.896vw; /* 1054px ÷ 1920 × 100 */
      margin: 0 auto;
      img {
        width: 100%;
        max-width: 47.552vw; /* 913px ÷ 1920 × 100 */
        display: block;
        margin: 0 auto;
      }

      p {
        position: relative;
        margin-top: 0.833vw; /* 16px ÷ 1920 × 100 */
        color: #60605f;
        text-align: center;
        font-family: "Noto Sans CJK TC";
        font-size: 1.094vw; /* 21px ÷ 1920 × 100 */
        font-style: normal;
        font-weight: 500;
        line-height: 214.286%; /* 行高未转换 */

        &::before {
          content: "";
          width: 15.625vw; /* 300px ÷ 1920 × 100 */
          height: 0.156vw; /* 3px ÷ 1920 × 100 */
          background: #00a6ce;
          position: absolute;
          top: -2.083vw; /* -40px ÷ 1920 × 100 */
          left: 50%;
          transform: translateX(-50%);
        }
      }
    }
  }

  .section2 {
    margin-top: 5.208vw; /* 100px ÷ 1920 × 100 */

    .section2-box {
      display: flex;
      align-items: center;
      justify-content: start;
      gap: 3.854vw; /* 74px ÷ 1920 × 100 */
      .section2-box-text {
        box-sizing: border-box;
        width: 45.938vw; /* 882px ÷ 1920 × 100 */
        padding: 2.917vw 3.594vw 2.76vw 18.594vw; /* 56px,69px,53px,357px 转换后 */
        border-radius: 1.042vw; /* 20px ÷ 1920 × 100 */
        background: var(--Skin, #eafbff);
        h2 {
          color: #00a6ce;
          text-align: left;

          font-family: "Noto Sans HK";
          font-size: 1.771vw; /* 34px ÷ 1920 × 100 */
          font-style: normal;
          font-weight: 700;
          line-height: 132.353%; /* 行高未转换 */
          letter-spacing: 0.089vw; /* 1.7px ÷ 1920 × 100 */
          position: relative;
          width: fit-content;

          &::after {
            content: "";
            width: 100%;
            height: 0.156vw; /* 3px ÷ 1920 × 100 */
            background: var(--Brand-Color, #00a6ce);
            position: absolute;
            bottom: -0.313vw; /* -6px ÷ 1920 × 100 */
            left: 0;
          }
        }

        p {
          max-width: 23.75vw; /* 456px ÷ 1920 × 100 */
          margin-top: 1.823vw; /* 35px ÷ 1920 × 100 */
          color: #60605f;
          font-family: "Noto Sans CJK TC";
          font-size: 1.094vw; /* 21px ÷ 1920 × 100 */
          font-style: normal;
          font-weight: 500;
          line-height: 214.286%; /* 行高未转换 */
        }
      }
      .section2-img {
        position: relative;
        img {
          max-width: 25.573vw; /* 491px ÷ 1920 × 100 */
          display: block;
          margin: 0 auto;
        }

        .section2-img-text {
          position: absolute;
          width: fit-content;
          margin-left: auto;
          h4 {
            color: #59ba68;
            font-family: Inter;
            font-size: 2.083vw; /* 40px ÷ 1920 × 100 */
            font-style: normal;
            font-weight: 600;
            line-height: 86.25%; /* 行高未转换 */
          }
          p {
            color: #60605f;
            font-family: Inter;
            font-size: 1.094vw; /* 21px ÷ 1920 × 100 */
            font-style: normal;
            font-weight: 600;
            line-height: 1.66; /* 行高未转换 */
          }
        }
        & > .section2-img-text:nth-child(1) {
          right: -14.323vw; /* -275px ÷ 1920 × 100 */
          top: 0.521vw; /* 10px ÷ 1920 × 100 */
        }
        & > .section2-img-text:nth-child(3) {
          right: -0.729vw; /* -14px ÷ 1920 × 100 */
          bottom: -0.521vw; /* -10px ÷ 1920 × 100 */
          transform: translateX(100%);
        }
      }
    }
  }

  .section-title {
    color: #00a6ce;
    text-align: center;
    font-family: "Noto Sans HK";
    font-size: 1.758vw; /* 33.75px ÷ 1920 × 100 */
    font-style: normal;
    font-weight: 700;
    line-height: 133.333%; /* 行高未转换 */
    letter-spacing: 0.088vw; /* 1.688px ÷ 1920 × 100 */
    position: relative;
    &::after {
      content: "";
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      bottom: -0.625vw; /* -12px ÷ 1920 × 100 */
      width: 6.771vw; /* 130px ÷ 1920 × 100 */
      height: 0.156vw; /* 3px ÷ 1920 × 100 */
      background: var(--Brand-Color, #00a6ce);
    }
  }
  .section3 {
    margin-top: 5.208vw; /* 100px ÷ 1920 × 100 */

    & > p {
      margin: 2.083vw auto 0; /* 40px ÷ 1920 × 100 */
      color: #60605f;
      text-align: center;
      font-family: "Noto Sans CJK TC";
      font-size: 1.094vw; /* 21px ÷ 1920 × 100 */
      font-style: normal;
      font-weight: 500;
      line-height: 214.286%; /* 行高未转换 */
    }

    .section3-box {
      margin-top: 3.125vw; /* 60px ÷ 1920 × 100 */
      display: flex;
      justify-content: center;
      gap: 1.667vw; /* 32px ÷ 1920 × 100 */

      .section3-box-item {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: end;
        box-sizing: border-box;
        border-radius: 1.042vw; /* 20px ÷ 1920 × 100 */
        background: var(--Skin, #eafbff);
        position: relative;
        img {
          position: absolute;
          right: 1.406vw; /* 27px ÷ 1920 × 100 */
          top: 1.406vw; /* 27px ÷ 1920 × 100 */
        }
        h5 {
          color: #00a6ce;
          font-family: Inter;
          font-size: 5vw; /* 96px ÷ 1920 × 100 */
          font-style: normal;
          font-weight: 600;
          line-height: 1; /* 行高未转换 */
          span {
            font-size: 3.333vw; /* 64px ÷ 1920 × 100 */
          }
        }
        p {
          color: #60605f;
          font-family: "Noto Sans HK";
          font-size: 1.25vw; /* 24px ÷ 1920 × 100 */
          font-style: normal;
          font-weight: 500;
          line-height: 127.083%; /* 行高未转换 */
          letter-spacing: 0.063vw; /* 1.2px ÷ 1920 × 100 */
        }
      }

      & > .section3-box-item:nth-child(1) {
        width: 18.698vw; /* 359px ÷ 1920 × 100 */
        height: 19.375vw; /* 372px ÷ 1920 × 100 */
        padding: 1.406vw 1.406vw 0.938vw 1.354vw; /* 27px,27px,18px,26px 转换后 */
        img {
          width: 10.989vw; /* 211px ÷ 1920 × 100 */
        }
      }
      .section3-box-item-List {
        display: flex;
        justify-content: center;
        flex-direction: column;
        gap: 0.677vw; /* 13px ÷ 1920 × 100 */
        .section3-box-item {
          align-items: flex-end;
          padding: 0.573vw 1.25vw 0.729vw 0.729vw; /* 11px,24px,14px,14px 转换后 */
          width: 20.052vw; /* 385px ÷ 1920 × 100 */
          height: 9.167vw; /* 176px ÷ 1920 × 100 */
          flex-shrink: 0;
          p {
            margin-top: 0.677vw; /* 13px ÷ 1920 × 100 */
          }
        }

        & > .section3-box-item:nth-child(1) {
          img {
            width: 7.083vw; /* 136px ÷ 1920 × 100 */
            height: 6.042vw; /* 116px ÷ 1920 × 100 */
            top: 1.198vw; /* 23px ÷ 1920 × 100 */
            right: auto;
            left: 1.146vw; /* 22px ÷ 1920 × 100 */
          }
        }

        & > .section3-box-item:nth-child(2) {
          align-items: flex-start;
          img {
            width: 5.208vw; /* 100px ÷ 1920 × 100 */
            height: 6.146vw; /* 118px ÷ 1920 × 100 */
            top: 1.563vw; /* 30px ÷ 1920 × 100 */
            right: 2.917vw; /* 56px ÷ 1920 × 100 */
          }
        }
      }
    }
  }

  .section3-iframe {
    margin-top: 7.083vw; /* 136px ÷ 1920 × 100 */
    .section3-iframe-title {
      width: fit-content;
      margin: 0 auto;
      color: #00a6ce;
      text-align: justify;
      font-family: "Noto Sans HK";
      font-size: 3.333vw; /* 64px ÷ 1920 × 100 */
      font-style: normal;
      font-weight: 900;
      line-height: 110.938%; /* 行高未转换 */
      letter-spacing: 0.167vw; /* 3.2px ÷ 1920 × 100 */
    }

    .section3-iframe-box {
      margin-top: 3.646vw; /* 70px ÷ 1920 × 100 */
      background: #eafbff;
      .iframe-List {
        display: flex;
        justify-content: center;
        width: fit-content;
        background: white;
        padding: 0 4.792vw; /* 92px ÷ 1920 × 100 */
        clip-path: polygon(
          4.792vw 0,
          100% 0,
          calc(100% - 4.792vw) 100%,
          0 100%
        ); /* 92px转换后 */

        margin: 0 auto;
        .iframe-List-item {
          width: 28.125vw; /* 540px ÷ 1920 × 100 */
          position: relative;


          &:hover {
            .iframe-container {
              clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
            }
            z-index: 3;
          }
          .iframe-container {
                 transition: all 1s ease-in-out;
            clip-path: polygon(
              4.792vw 0,
              100% 0,
              calc(100% - 4.792vw) 100%,
              0 100%
            ); /* 92px转换后 */

            width: 100%;
            aspect-ratio: 560/315;
            iframe {
              width: 100%;
              height: 100%;
              border: none;
              object-fit: cover;
            }
          }
          p {
            color: #00a6ce;
            font-family: Inter;
            font-size: 2.083vw; /* 40px ÷ 1920 × 100 */
            font-style: normal;
            font-weight: 200;
          }
        }

        & > .iframe-List-item:nth-child(1) {
          margin-right: -2.396vw; /* -46px ÷ 1920 × 100 */
          z-index: 2;
          p {
            left: 2.292vw; /* 44px ÷ 1920 × 100 */
            top: -0.208vw; /* -4px ÷ 1920 × 100 */
          }
        }
        & > .iframe-List-item:nth-child(2) {
          margin-left: -4.792vw; /* -92px ÷ 1920 × 100 */

          p {
            text-align: right;
          }
        }
      }
    }
  }

  .section4 {
    margin-top: 3.489vw; /* 67px ÷ 1920 × 100 */
    .section4-content {
      margin-top: 2.917vw; /* 56px ÷ 1920 × 100 */

      margin-left: auto;
      margin-right: auto;
      position: relative;
      .section4-content-List {
        width: 52.5vw; /* 1008px ÷ 1920 × 100 */
        margin-left: auto;
        margin-right: auto;
        display: flex;
        justify-content: space-between;
        .section4-content-List-item {
          width: 8.333vw; /* 160px ÷ 1920 × 100 */
          height: 8.438vw; /* 162px ÷ 1920 × 100 */
          flex-shrink: 0;
          background: linear-gradient(0deg, #f0f0f0 -14%, #fff 122.65%);
          border-radius: 50%;
          box-shadow: 0 0.086vw 0.172vw rgba(88, 77, 153, 0.3); /* 1.648px,3.295px 转换后 */
          display: flex;
          justify-content: center;
          align-items: center;
          p {
            color: #60605f;
            text-align: center;
            font-family: "Noto Sans HK";
            font-size: 1.25vw; /* 24px ÷ 1920 × 100 */
            font-style: normal;
            font-weight: 500;
            line-height: 127.083%; /* 行高未转换 */
            letter-spacing: 0.063vw; /* 1.2px ÷ 1920 × 100 */
          }
        }
      }
      & > .section4-content-List:nth-child(1) {
        justify-content: center;
      }
      & > .section4-content-List:nth-child(2) {
        margin-bottom: 5.573vw; /* 107px ÷ 1920 × 100 */
        margin-top: -0.729vw; /* -14px ÷ 1920 × 100 */
      }
      .section4-content-img {
        position: absolute;
        top: 5.521vw; /* 106px ÷ 1920 × 100 */
        left: 50%;
        transform: translateX(-50%);
        z-index: -1;
        width: 28.542vw; /* 548px ÷ 1920 × 100 */
        height: 28.542vw; /* 548px ÷ 1920 × 100 */
        flex-shrink: 0;
        border-radius: 50%;
        opacity: 0.66;
        background: #eafbff;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          width: 23.438vw; /* 450px ÷ 1920 × 100 */
        }
      }

      .section4-content-text {
        margin-top: 5.625vw; /* 108px ÷ 1920 × 100 */
        color: rgba(0, 166, 206, 0.51);
        text-align: center;
        font-family: "Noto Sans HK";
        font-size: 7.989vw; /* 153.405px ÷ 1920 × 100 */
        font-style: normal;
        font-weight: 700;
        line-height: 35.156%; /* 行高未转换 */
        letter-spacing: 0.399vw; /* 7.67px ÷ 1920 × 100 */
        opacity: 0.25;
      }
    }
  }

  .section5 {
    margin-top: 5.208vw; /* 100px ÷ 1920 × 100 */
    .section5-list {
      margin-top: 5.46vw; /* 105px ÷ 1920 × 100 */
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1.927vw; /* 37px ÷ 1920 × 100 */
      .section5-list-item {
        border-radius: 1.042vw; /* 20px ÷ 1920 × 100 */

        border: 0.104vw solid var(--Brand-Color, #00a6ce); /* 2px ÷ 1920 × 100 */
        width: 15.625vw; /* 300px ÷ 1920 × 100 */
        height: 18.229vw; /* 350px ÷ 1920 × 100 */
        flex-shrink: 0;

        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;

        img {
          width: 11.927vw; /* 229px ÷ 1920 × 100 */
        }
        span {
          color: var(--Brand-Color, #00a6ce);
          font-family: "Noto Sans HK";
          font-size: 1.667vw; /* 32px ÷ 1920 × 100 */
          font-style: normal;
          font-weight: 500;
          line-height: 95.313%; /* 行高未转换 */
          letter-spacing: 0.083vw; /* 1.6px ÷ 1920 × 100 */
        }
      }
      & > .section5-list-item:nth-child(2) {
        img {
          width: 10.625vw; /* 204px ÷ 1920 × 100 */
        }
      }
      & > .section5-list-item:nth-child(3) {
        img {
          width: 10.469vw; /* 201px ÷ 1920 × 100 */
        }
      }

      & > .section5-list-item:nth-child(4) {
        img {
          width: 10.104vw; /* 194px ÷ 1920 × 100 */
        }
      }
    }
  }

  .section6 {
    width: 90.104vw; /* 1730px ÷ 1920 × 100 */
    margin: 6.35vw auto 0; /* 50px ÷ 1920 × 100 */
    padding: 8.698vw 5.833vw 6.25vw 3.646vw; /* 167px,112px,120px,70px */
    border-radius: 5.521vw; /* 106px ÷ 1920 × 100 */
    background: var(--Skin, #eafbff);
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.042vw; /* 20px ÷ 1920 × 100 */
    .section6-title {
      h2 {
        color: #00a6ce;
        text-align: justify;
        font-family: "Noto Sans HK";
        font-size: 2.5vw; /* 48px ÷ 1920 × 100 */
        font-style: normal;
        font-weight: 700;
        line-height: 141.667%; /* 行高未转换 */
        letter-spacing: 0.125vw; /* 2.4px ÷ 1920 × 100 */
        position: relative;
        &::after {
          content: "";
          position: absolute;
          height: 0.156vw; /* 3px ÷ 1920 × 100 */
          width: 6.25vw; /* 120px ÷ 1920 × 100 */
          background: var(--Brand-Color, #00a6ce);
          left: 0;
          bottom: -1.563vw; /* -30px ÷ 1920 × 100 */
        }
      }
      p {
        margin-top: 3.125vw; /* 60px ÷ 1920 × 100 */
        color: #00a6ce;
        text-align: justify;
        font-family: "Noto Sans HK";
        font-size: 3.333vw; /* 64px ÷ 1920 × 100 */
        font-style: normal;
        font-weight: 700;
        line-height: 106.25%; /* 行高未转换 */
        letter-spacing: 0.833vw; /* 16px ÷ 1920 × 100 */
      }
    }
    .section6-list {
      display: flex;
      gap: 2.813vw; /* 54px ÷ 1920 × 100 */
      align-items: flex-end;
      .section6-list-item {
        width: 10vw; /* 192px ÷ 1920 × 100 */
        height: 14.792vw; /* 284px ÷ 1920 × 100 */
        padding: 5.729vw 0.781vw 0 0.833vw; /* 110px,15px,0,16px 转换后 */
        flex-shrink: 0;
        box-sizing: border-box;
        position: relative;
        background: #fff;
        box-shadow: 0 0.104vw 0.469vw 0 rgba(116, 162, 202, 0.25); /* 2px,9px 转换后 */
        display: flex;

        flex-direction: column;
        gap: 0.938vw; /* 18px ÷ 1920 × 100 */

        .section6-list-item-img {
          position: absolute;
          left: 50%;
          top: -2.76vw; /* -53px ÷ 1920 × 100 */
          transform: translateX(-50%);
          width: 7.708vw; /* 148px ÷ 1920 × 100 */
          img {
            width: 100%;
          }
        }
        span {
          background: #00a6ce;
          color: #fff;
          text-align: center;
          font-family: "Noto Sans HK";
          font-size: 1.758vw; /* 33.75px ÷ 1920 × 100 */
          font-style: normal;
          font-weight: 700;
          line-height: 133.333%; /* 行高未转换 */
          letter-spacing: 0.088vw; /* 1.688px ÷ 1920 × 100 */
        }
        p {
          color: #60605f;
          text-align: center;

          font-family: "Noto Sans CJK TC";
          font-size: 0.833vw; /* 16px ÷ 1920 × 100 */
          font-style: normal;
          font-weight: 700;
          line-height: 200%; /* 行高未转换 */
        }
      }
    }
  }

  .section7 {
    margin-top: 3.646vw; /* 70px ÷ 1920 × 100 */
    .section7-box {
      display: flex;
      margin-top: 6.25vw; /* 120px ÷ 1920 × 100 */
      gap: 2.396vw; /* 46px ÷ 1920 × 100 */

      .section7-box-iframe {
   
        &:hover {
          .iframe-container {
                 
            clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
          }
          z-index: 3;
        }
        .iframe-container {
          transition: all 1s ease-in-out;
          width: 46.875vw; /* 900px ÷ 1920 × 100 */
          clip-path: polygon(
            4.167vw 0,
            100% 0,
            calc(100% - 4.167vw) 100%,
            0 100%
          ); /* 80px转换后 */
          aspect-ratio: 560/315;
          iframe {
            width: 100%;
            height: 100%;
            border: none;
            object-fit: cover;
          }
        }
        position: relative;
        &::after {
          content: "";
          position: absolute;
          top: -7%;
          width: 85%;
          height: 115%;
          background: #eafbff;
          clip-path: polygon(
            0 0,
            100% 0,
            calc(100% - 3.125vw) 100%,
            0 100%
          ); /* 60px转换后 */
          z-index: -1;
        }
      }

      ul {
        width: 39.115vw; /* 751px ÷ 1920 × 100 */

        list-style-type: none;
        li {
          color: #60605f;
          font-family: "Noto Sans CJK TC";
          font-size: 1.094vw; /* 21px ÷ 1920 × 100 */
          font-style: normal;
          font-weight: 500;
          line-height: 285.714%; /* 行高未转换 */
        }
      }
    }
    .section7-btn {
      margin-top: 4.167vw; /* 80px ÷ 1920 × 100 */
      p {
        text-align: center;
        color: #60605f;
        font-family: "Noto Sans CJK TC";
        font-size: 1.094vw; /* 21px ÷ 1920 × 100 */
        font-style: normal;
        font-weight: 500;
        line-height: 285.714%; /* 行高未转换 */
      }
      & > a {
        margin: 1.563vw auto 0; /* 30px ÷ 1920 × 100 */
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1.042vw; /* 20px ÷ 1920 × 100 */
        box-sizing: border-box;
        padding: 0.781vw 1.042vw; /* 15px,20px 转换后 */
        width: 14.219vw; /* 273px ÷ 1920 × 100 */
        height: 4.167vw; /* 80px ÷ 1920 × 100 */
        flex-shrink: 0;
        border-radius: 2.117vw; /* 40.656px ÷ 1920 × 100 */
        background: linear-gradient(90deg, #de9f40 0%, #ed33ae 100%);
        span {
          color: #fff;
          font-family: "Noto Sans HK";
          font-size: 1.302vw; /* 25px ÷ 1920 × 100 */
          font-style: normal;
          font-weight: 500;
          line-height: 138.889%; /* 行高未转换 */
          letter-spacing: 0.067vw; /* 1.28px ÷ 1920 × 100 */
        }
        svg {
          width: 2.604vw; /* 50px ÷ 1920 × 100 */
          height: 2.604vw; /* 50px ÷ 1920 × 100 */
        }
      }
    }
  }
  .section8 {
    margin-top: 4.167vw; /* 80px ÷ 1920 × 100 */
    margin-bottom: 2.083vw; /* 40px ÷ 1920 × 100 */
    :deep(.title) {
      color: #00a6ce;
      text-align: justify;
      font-family: "Noto Sans HK";
      font-size: 1.758vw; /* 33.75px ÷ 1920 × 100 */
      font-style: normal;
      font-weight: 700;
      line-height: 133.333%; /* 行高未转换 */
      letter-spacing: 0.088vw; /* 1.688px ÷ 1920 × 100 */
    }
    :deep(.el-collapse-item__content) {
      padding-left: 1.302vw; /* 25px ÷ 1920 × 100 */
      padding-top: 0.885vw; /* 17px ÷ 1920 × 100 */
      padding-bottom: 1.615vw; /* 31px ÷ 1920 × 100 */
    }
  }

  .bg-mask-layer {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 98.333vw;
    height: 43.28125vw;
    background: url("https://statichk.cmermedical.com/vision/imgs/2025012115464301.png")
      no-repeat;
    background-size: cover;
    z-index: 10;
    pointer-events: none;
  }

  .active-img {
    z-index: 22;
    position: absolute;
    right: 0;
    cursor: pointer;
  }
  .active-box {
    z-index: 25;
    width: 1510px;
    clip-path: polygon(0% 0%, 100% 0%, 84% 100%, 0% 100%);
    cursor: pointer;
  }

  //轮播图
  .wpbSwpier {
    background: #f6f9fe;
    height: 517px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .mySwpier {
    position: relative;
    .mySwiperItem {
      max-width: 75vw;
    }
    :deep(.mySwiperItem > .swiper-wrapper) {
      transition-timing-function: linear;
    }
  }
  .swiper-pagination-btn {
    max-width: 100vw;
    margin: 0 auto;
    padding: 15px 0 25px;
    display: flex;
    justify-content: space-between;
    & > div {
      cursor: pointer;
    }

    & > div {
      margin-left: 18px;
      & > div:nth-child(1) {
        max-width: 230px;
        & > img {
          width: 100%;
        }
      }
    }
    & > div:first-child {
      margin-left: 0;
    }
  }
  .discounts-slide {
    display: flex;
    justify-content: space-between;
    & > div {
      flex: 5;
    }
    & > div:nth-child(2) {
      margin-left: 105px;
    }
  }
  .img-slide {
    max-width: 575px;
    & > img {
      width: 100%;
    }
  }

  .price-btn {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .swiper-button-next-prev {
    max-width: 100vw;
    margin: 0 auto;
    padding: 0;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 0;
    left: 0;
    z-index: 99;
    width: 100%;
    & > div:nth-child(1) {
      display: block;
      position: absolute;
      left: -10px;
      background: url("https://statichk.cmermedical.com/vision/imgs/3b468aa44a7ef584.png")
        no-repeat;
      // background-position: right;
      width: 20px;
      height: 40px;
    }
    & > div:nth-child(2) {
      display: inline-block;
      position: absolute;
      right: -10px;
      background: url("https://statichk.cmermedical.com/vision/imgs/6cddc1709f50bfe5.png")
        no-repeat;
      // background-position: right;
      width: 23px;
      height: 40px;
    }
  }
  .img-swiper {
    width: 88%;
    margin: 0 auto;
    & > img {
      width: 100%;
    }
  }
  :deep(.swiper-button-next::after) {
    background: url("https://statichk.cmermedical.com/vision/imgs/6ed7199aaddff6df.png")
      no-repeat;
    background-size: 100% 100%;
    color: transparent;
  }
  :deep(.swiper-button-next) {
    right: 0px;
    cursor: pointer;
  }
  :deep(.swiper-button-prev) {
    left: 0px;
    cursor: pointer;
  }
  :deep(.swiper-button-prev::after) {
    background: url("https://statichk.cmermedical.com/vision/imgs/f68bf90ff2bad2de.png")
      no-repeat;
    background-size: 100% 100%;
    color: transparent;
  }
  .content-box-img-list {
    margin-top: 45px;
    display: flex;
    justify-content: space-between;
    gap: 0 30px;
    & > img {
      width: 219px;
      height: 178px;
      border-radius: 7.5px;
    }
  }

  .linear {
    max-width: 50.9375rem;
    margin: 0 auto;
    height: 7.3125rem;
    background: linear-gradient(90deg, #fff 0.5%, #d0ddff 51%, #fff 100%);
  }

  .fontText {
    max-width: 720px;
    color: #6d6d6d;
    text-align: center;
    font-family: "Noto Sans";
    font-size: 1.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 3.75rem;
    margin-top: 1.5rem;
    /* 200% */
    letter-spacing: 0.375rem;
  }

  .table-header,
  .table-footer {
    display: flex;
    justify-content: space-between;
  }

  .table-header {
    margin-bottom: 3.125rem;
  }

  .table-footer {
    margin-top: 3.125rem;
  }
  .fontTitle {
    color: #152b61;
    text-align: center;
    font-family: "Noto Sans";
    font-size: 2.8125rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    padding: 1.5625rem 0;
    letter-spacing: 9px;
    small {
      font-size: 30px;
      letter-spacing: 0px;
    }
  }

  .zve-information {
    position: relative;
  }

  //顶部banner标题

  .zveImg {
    width: 4.375rem;
    height: 4.375rem;
    position: absolute;
    top: 70px;
    right: 20px;
  }

  // 服务特色部分
  .selling-point {
    display: block;
  }
  .feature_page {
    display: none;
  }

  .zve-information-box {
    max-width: 960px;
    margin: 48px auto 100px auto;
  }
}
@media screen and (max-width: 767px) {
  //  中心介绍
  .section1 {
    margin-top: 10.256vw; /* 40px ÷ 390 × 100 */
    .seciton1-box {
      max-width: 86.41vw; /* 337px ÷ 390 × 100 */
      margin: 0 auto;
      img {
        width: 100%;
        display: block;
        margin: 0 auto;
      }

      p {
        position: relative;
        margin-top: 4.103vw; /* 16px ÷ 390 × 100 */
        color: #60605f;
        text-align: center;
        font-family: "Noto Sans CJK TC";
        font-size: 3.59vw; /* 14px ÷ 390 × 100 */
        font-style: normal;
        font-weight: 500;
        line-height: 171.429%; /* 行高未转换 */

        &::before {
          content: "";
          width: 49.744vw; /* 194px ÷ 390 × 100 */
          height: 0.769vw; /* 3px ÷ 390 × 100 */
          background: #00a6ce;
          position: absolute;
          top: -5.128vw; /* 20px ÷ 390 × 100 */
          left: 50%;
          transform: translateX(-50%);
        }
      }
    }
  }

  .section2 {
    margin-top: 5.128vw; /* 20px ÷ 390 × 100 */
    h2 {
      color: var(--Brand-Color, #00a6ce);
      text-align: center;
      font-family: "Noto Sans HK";
      font-size: 6.154vw; /* 24px ÷ 390 × 100 */
      font-style: normal;
      font-weight: 700;
      line-height: 187.5%; /* 行高未转换 */
      letter-spacing: 0.308vw; /* 1.2px ÷ 390 × 100 */
      position: relative;
      width: fit-content;
      margin: 0 auto;

      &::after {
        content: "";
        width: 100%;
        height: 0.769vw; /* 3px ÷ 390 × 100 */
        background: var(--Brand-Color, #00a6ce);
        position: absolute;
        bottom: -1.538vw; /* 6px ÷ 390 × 100 */
        left: 0;
      }
    }
    .section2-box {
      box-sizing: border-box;
      background: #eafbff;
      box-shadow: 0 0 1.923vw rgba(0, 0, 0, 0.25); /* 7.5px ÷ 390 × 100 */
      padding: 5.385vw 3.333vw 5.128vw 4.103vw; /* 21px,13px,20px,16px 转换后 */
      margin: 7.692vw auto 0; /* 30px ÷ 390 × 100 */
      width: 89.231vw; /* 348px ÷ 390 × 100 */
      height: 110vw; /* 429px ÷ 390 × 100 */
      border-radius: 5.128vw; /* 20px ÷ 390 × 100 */
      flex-shrink: 0;
      .section2-box-text {
        p {
          color: #60605f;
          text-align: justify;
          font-family: "Noto Sans CJK TC";
          font-size: 3.59vw; /* 14px ÷ 390 × 100 */
          font-style: normal;
          font-weight: 500;
          line-height: 171.429%; /* 行高未转换 */
        }
      }
      .section2-img {
        img {
          max-width: 59.487vw; /* 232px ÷ 390 × 100 */
          display: block;
          margin: 0 auto;
        }
        & > .section2-img-text:nth-child(1) {
          margin-bottom: 2.564vw; /* 10px ÷ 390 × 100 */
        }
        .section2-img-text {
          width: fit-content;
          margin-left: auto;
          h4 {
            color: #59ba68;
            font-family: Inter;
            font-size: 4.849vw; /* 18.912px ÷ 390 × 100 */
            font-style: normal;
            font-weight: 600;
            line-height: 112.629%; /* 行高未转换 */
          }
          p {
            color: #60605f;
            font-family: Inter;
            font-size: 3.333vw; /* 13px ÷ 390 × 100 */
            font-style: normal;
            font-weight: 600;
            line-height: 21.3px; /* 行高未转换 */
          }
        }
      }
    }
  }
  .section-title {
    color: var(--Brand-Color, #00a6ce);
    text-align: center;
    font-family: "Noto Sans HK";
    font-size: 6.154vw; /* 24px ÷ 390 × 100 */
    font-style: normal;
    font-weight: 700;
    line-height: 125%; /* 行高未转换 */
    letter-spacing: 0.308vw; /* 1.2px ÷ 390 × 100 */
    position: relative;
    &::after {
      content: "";
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      bottom: -3.077vw; /* 12px ÷ 390 × 100 */
      width: 25.641vw; /* 100px ÷ 390 × 100 */
      height: 0.769vw; /* 3px ÷ 390 × 100 */
      background: var(--Brand-Color, #00a6ce);
    }
  }
  .section3 {
    margin-top: 7.692vw; /* 30px ÷ 390 × 100 */

    & > p {
      max-width: 86.41vw; /* 337px ÷ 390 × 100 */
      margin: 7.692vw auto 0; /* 30px ÷ 390 × 100 */
      color: #60605f;
      text-align: center;
      font-family: "Noto Sans CJK TC";
      font-size: 3.59vw; /* 14px ÷ 390 × 100 */
      font-style: normal;
      font-weight: 500;
      line-height: 171.429%; /* 行高未转换 */
    }
    .section3-box {
      .section3-box-item {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: end;
        box-sizing: border-box;
        border-radius: 5.128vw; /* 20px ÷ 390 × 100 */
        background: var(--Skin, #eafbff);
        position: relative;
        img {
          position: absolute;
          right: 8.974vw; /* 35px ÷ 390 × 100 */
          top: 4.872vw; /* 19px ÷ 390 × 100 */
        }
        h5 {
          color: #00a6ce;
          font-family: Inter;
          font-size: 14.103vw; /* 55px ÷ 390 × 100 */
          font-style: normal;
          font-weight: 600;
          line-height: 54.654%; /* 行高未转换 */
          span {
            font-size: 8.974vw; /* 35px ÷ 390 × 100 */
          }
        }
        p {
          color: #60605f;
          font-family: "Noto Sans HK";
          font-size: 3.333vw; /* 13px ÷ 390 × 100 */
          font-style: normal;
          font-weight: 500;
          line-height: 234.615%; /* 行高未转换 */
          letter-spacing: 0.167vw; /* 0.65px ÷ 390 × 100 */
        }
      }

      & > .section3-box-item:nth-child(1) {
        margin: 5.128vw auto 0; /* 20px ÷ 390 × 100 */
        width: 84.615vw; /* 330px ÷ 390 × 100 */
        height: 35.385vw; /* 138px ÷ 390 × 100 */
        padding: 4.872vw 8.974vw 5.128vw 5.385vw; /* 19px,35px,20px,21px 转换后 */
        img {
          width: 31.282vw; /* 122px ÷ 390 × 100 */
        }
      }
      .section3-box-item-List {
        margin-top: 2.308vw; /* 9px ÷ 390 × 100 */
        display: flex;
        justify-content: center;
        gap: 3.59vw; /* 14px ÷ 390 × 100 */
        .section3-box-item {
          padding: 2.821vw 4.872vw 4.359vw 3.59vw; /* 11px,19px,17px,14px 转换后 */
          width: 40.513vw; /* 158px ÷ 390 × 100 */
          height: 47.692vw; /* 186px ÷ 390 × 100 */
          flex-shrink: 0;
        }

        & > .section3-box-item:nth-child(1) {
          img {
            width: 25.385vw; /* 99px ÷ 390 × 100 */
            height: 23.077vw; /* 90px ÷ 390 × 100 */
            top: 2.821vw; /* 11px ÷ 390 × 100 */
            right: 7.179vw; /* 28px ÷ 390 × 100 */
          }
        }

        & > .section3-box-item:nth-child(2) {
          img {
            width: 18.462vw; /* 72px ÷ 390 × 100 */
            height: 21.795vw; /* 85px ÷ 390 × 100 */
            top: 6.154vw; /* 24px ÷ 390 × 100 */
            right: 5.128vw; /* 20px ÷ 390 × 100 */
          }
        }
      }
    }
  }

  .section3-iframe {
    margin-top: 12.821vw; /* 50px ÷ 390 × 100 */
    .section3-iframe-title {
      width: fit-content;
      margin: 0 auto;
      color: #00a6ce;
      text-align: justify;
      font-family: "Noto Sans HK";
      font-size: 6.756vw; /* 26.348px ÷ 390 × 100 */
      font-style: normal;
      font-weight: 900;
      line-height: 110.937%; /* 行高未转换 */
      letter-spacing: 0.338vw; /* 1.317px ÷ 390 × 100 */
    }
    .section3-iframe-box {
      margin-top: 17.179vw; /* 67px ÷ 390 × 100 */
      width: 100vw;
      overflow: hidden;

      .iframe-List {
        .iframe-List-item {
          width: 81.538vw; /* 318px ÷ 390 × 100 */
          position: relative;
          &::before {
            position: absolute;
            width: 100%;
            height: 100%;
            content: "";
            top: 0;
            z-index: -1;

            background: #eafbff;
            clip-path: polygon(
              11.282vw 0,
              100% 0,
              calc(100% - 11.282vw) 100%,
              0 100%
            ); /* 44px转换后 */
          }
          &:hover {
            .iframe-container {
              clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
            }
            z-index: 3;
          }
          .iframe-container {
            clip-path: polygon(
              11.282vw 0,
              100% 0,
              calc(100% - 11.282vw) 100%,
              0 100%
            ); /* 44px转换后 */
            width: 100%;
            aspect-ratio: 560/315;
            iframe {
              width: 100%;
              height: 100%;
              border: none;
              object-fit: cover;
            }
          }
          p {
            color: #00a6ce;
            font-family: Inter;
            font-size: 6.046vw; /* 23.579px ÷ 390 × 100 */
            font-style: normal;
            font-weight: 200;
            line-height: 86.25%; /* 行高未转换 */
            position: absolute;
            top: 0;
            transform: translateY(-100%);
          }
        }

        & > .iframe-List-item:nth-child(1) {
          margin-left: auto;
          margin-bottom: 5.128vw; /* 20px ÷ 390 × 100 */
          &::before {
            transform: translateX(-90%);
          }
          p {
            left: 11.282vw; /* 44px ÷ 390 × 100 */
            top: -1.026vw; /* -4px ÷ 390 × 100 */
          }
        }
        & > .iframe-List-item:nth-child(2) {
          &::before {
            transform: translateX(90%);
          }
          p {
            left: auto;
            right: 13.59vw; /* 53px ÷ 390 × 100 */
            top: auto;
            bottom: -1.026vw; /* -4px ÷ 390 × 100 */
            transform: translateY(100%);
          }
        }
      }
    }
  }

  .section4 {
    margin-top: 17.949vw; /* 70px ÷ 390 × 100 */
    .section4-content {
      margin-top: 6.667vw; /* 26px ÷ 390 × 100 */
      position: relative;
      .section4-content-List {
        padding: 0 2.564vw; /* 10px ÷ 390 × 100 */
        display: flex;
        justify-content: space-between;
        .section4-content-List-item {
          width: 23.077vw; /* 90px ÷ 390 × 100 */
          height: 23.077vw; /* 90px ÷ 390 × 100 */
          flex-shrink: 0;
          background: linear-gradient(0deg, #f0f0f0 -14%, #fff 122.65%);
          border-radius: 50%;
          box-shadow: 0 0.423vw 0.845vw rgba(88, 77, 153, 0.3); /* 1.648px,3.295px 转换后 */
          display: flex;
          justify-content: center;
          align-items: center;
          p {
            color: #60605f;
            text-align: center;
            font-family: "Noto Sans HK";
            font-size: 3.59vw; /* 14px ÷ 390 × 100 */
            font-style: normal;
            font-weight: 500;
            line-height: 119.652%; /* 行高未转换 */
            letter-spacing: 0.179vw; /* 0.7px ÷ 390 × 100 */
          }
        }
      }
      & > .section4-content-List:nth-child(1) {
        justify-content: center;
      }
      & > .section4-content-List:nth-child(2) {
        margin-bottom: 18.205vw; /* 71px ÷ 390 × 100 */
        margin-top: -3.077vw; /* -12px ÷ 390 × 100 */
      }
      .section4-content-img {
        position: absolute;
        top: 8.974vw; /* 35px ÷ 390 × 100 */
        left: 50%;
        transform: translateX(-50%);
        z-index: -1;
        width: 81.795vw; /* 319px ÷ 390 × 100 */
        height: 81.795vw; /* 319px ÷ 390 × 100 */
        flex-shrink: 0;
        border-radius: 50%;
        opacity: 0.66;
        background: #eafbff;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          width: 54.615vw; /* 213px ÷ 390 × 100 */
        }
      }

      .section4-content-text {
        margin-top: 5.128vw; /* 20px ÷ 390 × 100 */
        color: #00a6ce;
        text-align: center;
        font-family: "Noto Sans HK";
        font-size: 7.692vw; /* 30px ÷ 390 × 100 */
        font-style: normal;
        font-weight: 700;
        line-height: 140.625%; /* 行高未转换 */
        letter-spacing: 0.41vw; /* 1.6px ÷ 390 × 100 */
        opacity: 0.25;
      }
    }
  }

  .section5 {
    margin-top: 10.256vw; /* 40px ÷ 390 × 100 */
    .section5-list {
      margin-top: 10.256vw; /* 40px ÷ 390 × 100 */
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 3.077vw; /* 12px ÷ 390 × 100 */
      .section5-list-item {
        border-radius: 5.128vw; /* 20px ÷ 390 × 100 */

        border: 0.513vw solid var(--Brand-Color, #00a6ce); /* 2px ÷ 390 × 100 */
        width: 88.205vw; /* 344px ÷ 390 × 100 */
        height: 22.308vw; /* 87px ÷ 390 × 100 */
        padding-left: 7.949vw; /* 31px ÷ 390 × 100 */
        padding-right: 7.949vw; /* 31px ÷ 390 × 100 */
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: space-between;

        img {
          max-width: 23.333vw; /* 91px ÷ 390 × 100 */
        }
        span {
          display: inline-flex;
          width: 38.974vw; /* 152px ÷ 390 × 100 */
          color: var(--Brand-Color, #00a6ce);
          font-family: "Noto Sans HK";
          font-size: 4.615vw; /* 18px ÷ 390 × 100 */
          font-style: normal;
          font-weight: 500;
          line-height: 125%; /* 行高未转换 */
          letter-spacing: 0.231vw; /* 0.9px ÷ 390 × 100 */
        }
      }
      & > .section5-list-item:nth-child(3) {
        img {
          width: 20.513vw; /* 80px ÷ 390 × 100 */
        }
      }

      & > .section5-list-item:nth-child(4) {
        img {
          width: 19.744vw; /* 77px ÷ 390 × 100 */
        }
      }
    }
  }

  .section6 {
    width: 92.821vw; /* 362px ÷ 390 × 100 */
    margin: 12.821vw auto 0; /* 50px ÷ 390 × 100 */
    padding: 8.974vw 6.923vw 12.821vw 5.385vw; /* 35px,27px,50px,21px 转换后 */
    border-radius: 16.667vw; /* 65px ÷ 390 × 100 */
    background: var(--Skin, #eafbff);
    box-sizing: border-box;
    .section6-title {
      h2 {
        color: #00a6ce;
        text-align: justify;
        font-family: "Noto Sans HK";
        font-size: 6.667vw; /* 26px ÷ 390 × 100 */
        font-style: normal;
        font-weight: 700;
        line-height: 141.667%; /* 行高未转换 */
        letter-spacing: 0.345vw; /* 1.347px ÷ 390 × 100 */
        position: relative;
        &::after {
          content: "";
          position: absolute;
          height: 0.769vw; /* 3px ÷ 390 × 100 */
          width: 25.641vw; /* 100px ÷ 390 × 100 */
          background: var(--Brand-Color, #00a6ce);
          left: 0;
          bottom: -3.846vw; /* -15px ÷ 390 × 100 */
        }
      }
      p {
        margin-top: 7.692vw; /* 30px ÷ 390 × 100 */
        color: #00a6ce;
        text-align: justify;
        font-family: "Noto Sans HK";
        font-size: 9.208vw; /* 35.913px ÷ 390 × 100 */
        font-style: normal;
        font-weight: 700;
        line-height: 106.25%; /* 行高未转换 */
        letter-spacing: 2.302vw; /* 8.978px ÷ 390 × 100 */
      }
    }
    .section6-list {
      margin-top: 7.692vw; /* 30px ÷ 390 × 100 */
      display: flex;
      flex-direction: column;
      gap: 11.282vw; /* 44px ÷ 390 × 100 */
      align-items: flex-end;
      .section6-list-item {
        width: 60.769vw; /* 237px ÷ 390 × 100 */
        height: 21.282vw; /* 83px ÷ 390 × 100 */
        padding-left: 9.487vw; /* 37px ÷ 390 × 100 */
        box-sizing: border-box;
        position: relative;
        background: #fff;
        box-shadow: 0 0.513vw 2.308vw 0 rgba(116, 162, 202, 0.25); /* 2px,9px 转换后 */
        display: flex;
        align-items: center;

        .section6-list-item-img {
          position: absolute;
          left: -17.949vw; /* -70px ÷ 390 × 100 */
          top: 50%;
          transform: translateY(-50%);
          width: 27.692vw; /* 108px ÷ 390 × 100 */
          img {
            width: 100%;
          }
        }
        span {
          background: #00a6ce;
          position: absolute;
          top: 0;
          right: 0;
          transform: translateY(-70%);
          padding: 0 2.564vw; /* 10px ÷ 390 × 100 */
          color: #fff;
          text-align: center;
          font-family: "Noto Sans HK";
          font-size: 5.462vw; /* 21.303px ÷ 390 × 100 */
          font-style: normal;
          font-weight: 700;
          line-height: 133.333%; /* 行高未转换 */
          letter-spacing: 0.273vw; /* 1.065px ÷ 390 × 100 */
        }
        p {
          max-width: 52.821vw; /* 206px ÷ 390 × 100 */
          color: #60605f;
          text-align: center;
          font-family: "Noto Sans CJK TC";
          font-size: 3.59vw; /* 14px ÷ 390 × 100 */
          font-style: normal;
          font-weight: 500;
          line-height: 142.857%; /* 行高未转换 */
        }
      }
    }
  }

  .section7 {
    margin-top: 11.538vw; /* 45px ÷ 390 × 100 */
    .section7-box {
      margin-top: 15.385vw; /* 60px ÷ 390 × 100 */
      .section7-box-iframe {
        transition: all 2s linear;
        &:hover {
          .iframe-container {
            clip-path: none;
          }
          z-index: 3;
        }
        .iframe-container {
          width: 90.513vw; /* 353px ÷ 390 × 100 */
          margin: 0 auto;
          clip-path: polygon(
            11.282vw 0,
            100% 0,
            calc(100% - 11.282vw) 100%,
            0 100%
          ); /* 44px转换后 */
          aspect-ratio: 560/315;
          iframe {
            width: 100%;
            height: 100%;
            border: none;
            object-fit: cover;
          }
        }
        position: relative;
        &::after {
          content: "";
          position: absolute;
          top: -2.564vw; /* -10px ÷ 390 × 100 */
          width: 85%;
          height: 110%;
          background: #eafbff;
          clip-path: polygon(
            0 0,
            100% 0,
            calc(100% - 15.385vw) 100%,
            0 100%
          ); /* 60px转换后 */
          z-index: -1;
        }
      }

      ul {
        width: 80vw; /* 312px ÷ 390 × 100 */
        margin: 5.128vw auto; /* 20px ÷ 390 × 100 */
        list-style-type: none;
        li {
          color: #60605f;
          font-family: "Noto Sans CJK TC";
          font-size: 3.59vw; /* 14px ÷ 390 × 100 */
          font-style: normal;
          font-weight: 500;
          line-height: 228.571%; /* 行高未转换 */
        }
      }
    }
    .section7-btn {
      p {
        color: #60605f;
        font-family: "Noto Sans CJK TC";
        font-size: 3.59vw; /* 14px ÷ 390 × 100 */
        font-style: normal;
        text-align: center;
        font-weight: 500;
        line-height: 228.571%; /* 行高未转换 */
      }
      & > a {
        margin: 3.333vw auto 0; /* 13px ÷ 390 × 100 */
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 5.128vw; /* 20px ÷ 390 × 100 */
        box-sizing: border-box;
        padding: 2.564vw 5.128vw; /* 10px,20px 转换后 */
        width: 50.868vw; /* 198.387px ÷ 390 × 100 */
        height: 14.08vw; /* 54.913px ÷ 390 × 100 */
        flex-shrink: 0;
        border-radius: 10.425vw; /* 40.656px ÷ 390 × 100 */
        background: linear-gradient(90deg, #de9f40 0%, #ed33ae 100%);
        span {
          color: #fff;
          text-align: center;
          font-family: "Noto Sans HK";
          font-size: 4.055vw; /* 15.815px ÷ 390 × 100 */
          font-style: normal;
          font-weight: 500;
          line-height: 138.889%; /* 行高未转换 */
          letter-spacing: 0.203vw; /* 0.791px ÷ 390 × 100 */
        }
        svg {
          width: 7.949vw; /* 31px ÷ 390 × 100 */
        }
      }
    }
  }

  .section8 {
    margin-top: 8.974vw; /* 35px ÷ 390 × 100 */
    margin-bottom: 12.821vw; /* 50px ÷ 390 × 100 */
    max-width: 88.462vw; /* 345px ÷ 390 × 100 */
    margin-left: auto;
    margin-right: auto;
    :deep(.el-collapse-item__header) {
      &::before {
        left: 2.564vw; /* 10px ÷ 390 × 100 */
      }
      span {
        width: 80%;
        margin: 0 auto;
      }
    }
  }
  //轮播图
  .wpbSwpier {
    background: #f6f9fe;
    // height: 300px;
    padding: 50px 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .mySwpier {
    position: relative;
    perspective: 1000px; /* 设置透视距离 */
    .mySwiperItem {
      max-width: 100vw;
    }
    :deep(.mySwiperItem > .swiper-wrapper) {
      transition-timing-function: linear;
    }
  }

  .swiper-pagination-btn {
    max-width: 100vw;
    margin: 0 auto;
    padding: 15px 0 25px;
    display: flex;
    justify-content: space-between;
    & > div {
      cursor: pointer;
    }

    & > div {
      margin-left: 18px;
      & > div:nth-child(1) {
        max-width: 230px;
        & > img {
          width: 100%;
        }
      }
    }
    & > div:first-child {
      margin-left: 0;
    }
  }
  .discounts-slide {
    display: flex;
    justify-content: space-between;
    & > div {
      flex: 5;
    }
    & > div:nth-child(2) {
      margin-left: 105px;
    }
  }
  .img-slide {
    max-width: 575px;
    & > img {
      width: 100%;
    }
  }

  .price-btn {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .swiper-button-next-prev {
    max-width: 100vw;
    margin: 0 auto;
    padding: 0;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 0;
    left: 0;
    z-index: 99;
    width: 100%;
    & > div:nth-child(1) {
      display: block;
      position: absolute;
      left: 30px;
      background: url("https://statichk.cmermedical.com/vision/imgs/3b468aa44a7ef584.png")
        no-repeat;
      // background-position: right;
      background-size: cover;
      width: 10px;
      height: 20px;
    }
    & > div:nth-child(2) {
      display: inline-block;
      position: absolute;
      right: 30px;
      background: url("https://statichk.cmermedical.com/vision/imgs/6cddc1709f50bfe5.png")
        no-repeat;
      // background-position: right;
      background-size: cover;
      width: 10px;
      height: 20px;
    }
  }
  .img-swiper {
    width: 88%;
    margin: 0 auto;
    & > img {
      width: 100%;
    }
  }
  :deep(.swiper-button-next::after) {
    background: url("https://statichk.cmermedical.com/vision/imgs/6ed7199aaddff6df.png")
      no-repeat;
    background-size: 100% 100%;
    color: transparent;
  }
  :deep(.swiper-button-next) {
    right: 0px;
  }
  :deep(.swiper-button-prev) {
    left: 0px;
  }
  :deep(.swiper-button-prev::after) {
    background: url("https://statichk.cmermedical.com/vision/imgs/f68bf90ff2bad2de.png")
      no-repeat;
    background-size: 100% 100%;
    color: transparent;
  }
  .content-box-img-list {
    margin-top: 45px;
    display: flex;
    justify-content: space-between;
    gap: 0 30px;
    & > img {
      width: 219px;
      height: 178px;
      border-radius: 7.5px;
    }
  }

  .fontFooter {
    padding: 15px 0;
    position: relative;
    &::before {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 15px;
      height: 15px;
      border: 4px solid #2449a4;
      border-top: 1px solid transparent; /* 透明下边框透明 */
      border-right: 1px solid transparent; /* 透明;右边框透明 */
    }

    &::after {
      content: "";
      position: absolute;
      right: 0;
      bottom: 0;
      width: 15px;
      height: 15px;
      border: 4px solid #2449a4;
      border-top: 1px solid transparent; /* 下边框透明 */
      border-left: 1px solid transparent; /* 右边框透明 */
    }
  }

  .linear {
    max-width: calc(100vw - 50px);
    margin: 0 auto 0.9375rem;
    height: 2.25rem;
    background: linear-gradient(90deg, #fff 0.5%, #d0ddff 51%, #fff 100%);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .fontText {
    max-width: 317px;
    width: 100%;
    color: #6d6d6d;
    text-align: center;
    font-family: "Noto Sans";
    font-size: 3.86vw;
    font-style: normal;
    font-weight: 400;
    line-height: 7.65vw;
    letter-spacing: 0.15vw;
    margin: 0 auto;
  }

  .table-footer > div > img,
  .table-header > div > img {
    width: 0.9686rem;
    height: 0.9686rem;
  }

  .table-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.25rem;
    & > div {
      display: inline-block;
    }
  }

  .table-footer {
    display: flex;
    justify-content: space-between;
    margin-top: 1.25rem;
    & > div {
      display: inline-block;
    }
  }
  .fontTitle {
    color: #152b61;
    text-align: center;
    font-family: "Noto Sans";
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  .zve-information {
  }

  .zveImg {
    width: 3.125rem;
    height: 3.125rem;
    position: absolute;
    top: 90px;
    right: 0.625rem;
  }

  // 服务特色部分
  .selling-point {
    display: none;
  }
  .feature_page {
    display: block;
  }

  .video-information-box {
    padding: 0 24px;
  }
}

@media screen and (min-width: 2000px) {
  .zveImg {
    width: 8.4375rem;
    height: 8.4375rem;
    position: absolute;
    top: 100px;
    right: 80px;
  }
}

// i2个人
a:hover::before {
}

.section_wrapper {
  max-width: 100vw !important;
  padding-left: 10px !important;
}
.whatapps-btn-individuation {
  margin-top: 25px;
  width: fit-content;
  position: relative;
  z-index: 1;
}

.whatapps-btn-individuation::before {
  content: "";
  display: inline-block;
  background: url("https://statichk.cmermedical.com/vision/imgs/5fc7910640dbfa83.png")
    no-repeat;
  background-size: 100% 100%;
  padding-top: 20px;
  position: absolute;
  width: 556px;
  background-size: 100% 100%;
  min-height: 130%;
  z-index: 3;
  transform: translate(224px, 13px) !important;
  left: -225px;
  top: -16px;
}

@keyframes wave {
  0% {
    left: 0%;
  }

  25% {
    left: 50%;
  }

  50% {
    left: 100%;
  }

  75% {
    left: -50%;
  }

  100% {
    left: 0%;
  }
}

.whatapps-btn-individuation > div {
  border-radius: 60px;
  border: 3px solid #fff;
  /*  background: var(
    --Style,
    linear-gradient(90deg, #29abe2 0%, #06b5ff 3%, #19db84 100%)
  ); */
  background: #2449a4;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25),
    0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;
  width: fit-content;
  /* margin: 0 auto; */
  display: flex;
  align-items: center;
  gap: 0 12px;
  padding: 20px 37px;
  cursor: pointer;
  position: relative;
  z-index: 10;
  transform: translate(10px, 4px);
}

.whatapps-btn-individuation > div > span:nth-child(1) {
  color: #fff;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-family: "Noto Sans";
  font-size: 30px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 6px;
}

.whatapps-btn-individuation > div > span:nth-child(2) {
  display: flex;
  align-items: center;
  position: relative;
  top: 4px;
}

.brand {
  color: #2449a4;
  font-family: "Noto Sans";
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: 65px;
  /* 216.667% */
  letter-spacing: 6px;
}

.item-span {
  display: flex;
  align-items: center;
  gap: 0 20px;
}

.item-span > span:nth-child(1) {
  width: 5px;
  height: 54px;
  background: #2449a4;
  display: inline-block;
  transform: rotate(20deg);
}

.item-span {
  width: max-content;
  color: #2e3443;
  font-family: "Noto Sans";
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: 80px;
  /* 266.667% */
  letter-spacing: 6px;
}

.item-span > span {
  font-weight: 400;
}

@media screen and (max-width: 768px) {
  .brand {
    color: #2449a4;
    text-align: center;
    font-family: "Noto Sans";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 2.625rem;
    letter-spacing: 3.2px;
  }

  .item-span {
    gap: 0 10px;
  }

  .item-span > span:nth-child(1) {
    width: 2px;
    height: 38px;
    background: #2449a4;
    display: inline-block;
    transform: rotate(20deg);
  }

  .item-span > span:nth-child(2) {
    color: #2e3443;
    font-family: "Noto Sans";
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 58.208px;
    /* 415.769% */
    letter-spacing: 1.4px;
  }

  .whatapps-btn-individuation > div > span:nth-child(1) {
    color: #fff;
    font-family: "Noto Sans";
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 2.8px;
  }

  .whatapps-btn-individuation > div {
    padding: 10px 20px;
    transform: translate(0px, 4px);
  }

  .whatapps-btn-individuation {
    margin: 25px auto 0;
    display: flex;
    justify-content: center;
  }

  .whatapps-btn-individuation::before {
    background: url("https://statichk.cmermedical.com/vision/imgs/3f96636326c3a265.png")
      no-repeat;
    display: inline-block;
    width: 280px;
    background-size: 100% 100%;
    min-height: 146%;
    padding-top: 0;
    transform: translate(-10px, 10px) !important;
    left: 0;
    top: -10px;
  }

  .whatapps-btn-individuation > div > span:nth-child(2) > svg {
    width: 6.239px;
    height: 12.478px;
  }
}

p {
  margin: 0;
  padding: 0;
}

.whatapps-btn-series-two::before {
  content: none;
  position: absolute;
  z-index: 1;
  display: block;
  width: 105%;
  height: 120%;
  transform: translate(2.5%, -8%);
  border-radius: 60px;
  /*  background: var(
    --Style,
    linear-gradient(90deg, #29abe2 0%, #06b5ff 3%, #19db84 100%)
  );  */
  background: #2449a4;
  top: 0;
  left: auto;
  right: 0;
}

.whatapps-btn-series-two::after {
  content: "";
  position: absolute;
  z-index: 4;
  display: block;
  border-radius: 60px;
  width: 100%;
  height: 100%;
  transform: translate(0%, 0%);
  background: #fff;
  top: 0;
  animation: borderAnimation 2s linear infinite;
}

@keyframes borderAnimation {
  0% {
    width: 0%;
    height: 0%;
    // left: 0;
    // right: auto;
    right: 0;
    left: auto;
  }

  10% {
    width: 0%;
    height: 100%;
    // left: 0;
    // right: auto;
    right: 0;
    left: auto;
    opacity: 0;
  }

  21% {
    opacity: 1;
  }

  40% {
    width: 100%;
    height: 100%;
    // left: 0;
    // right: auto;
    right: 0;
    left: auto;
    opacity: 1;
  }

  45% {
    width: 100%;
    // left: 0;
    // right: auto;
    right: 0;
    left: auto;
  }

  55% {
    width: 100%;
    // left: auto;
    // right: 0;
    left: 0;
    right: auto;
  }

  70% {
    width: 0%;
    // left: auto;
    // right: 0;
    left: 0;
    right: auto;
  }

  100% {
    width: 0%;
    // left: auto;
    // right: 0;
    left: 0;
    right: auto;
  }
}

.whatapps-btn-series-two > .whatapps-btn-series-two-p > span:nth-child(1) {
  color: #fff;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-family: "Noto Sans";
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 6px;
}

.whatapps-btn-series-two > .whatapps-btn-series-two-p {
  border-radius: 60px;
  gap: 0 10px;
  box-sizing: border-box;
  padding: 15px 20px 13px;
  position: relative;
  z-index: 10;
  /* background: var(
    --Style,
    linear-gradient(90deg, #29abe2 0%, #06b5ff 3%, #19db84 100%)
  ); */
  background: #2449a4;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25),
    0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;
  width: fit-content;
  display: flex;
  align-items: center;
}

.whatapps-btn-series-two > .whatapps-btn-series-two-p > span:nth-child(2) {
  position: relative;
  top: 6px;
}

.whatapps-btn-series-two {
  position: relative;
  width: fit-content;
  height: max-content;
  /* background: var(
    --Style,
    linear-gradient(90deg, #29abe2 0%, #06b5ff 3%, #19db84 100%)
  ); */
  background: #2449a4;
  padding: 5px 5px;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border-radius: 60px;
  display: flex;
  margin: 0 auto;
}

@media screen and (max-width: 768px) {
  .whatapps-btn-series-two > .whatapps-btn-series-two-p > span:nth-child(1) {
    color: #fff;
    font-family: "Noto Sans";
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 2.8px;
  }

  .whatapps-btn-series-two > .whatapps-btn-series-two-p > span:nth-child(2) {
    position: relative;
    top: 3px;
  }

  .whatapps-btn-series-two
    > .whatapps-btn-series-two-p
    > span:nth-child(2)
    > svg {
    width: 10px;
    height: 15px;
  }
}

// 个人视觉
.show-before-on-hover {
  position: relative;
}

.show-before-on-hover:before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  background-color: #3cefff;
  transform-origin: bottom left;

  visibility: hidden; /* 添加这一行 */
  transform: scaleX(0);
  transition: transform 0.5s ease;
}

.show-before-on-hover:hover:before {
  visibility: visible; /* 保持这一行 */
  transform: scaleX(1); /* 添加这一行 */
}

.in-plant {
  margin: 150px auto 125px;
}

.fadeInUp {
  position: relative;
  bottom: -300px;
  opacity: 0;
}
.fadeInUpShow {
  position: relative;
  bottom: -300px;
  animation: fadeInUp 0.6s ease-in-out forwards;
}

@keyframes fadeInUp {
  0% {
    bottom: -300px;
    opacity: 0;
  }

  100% {
    opacity: 1;
    bottom: 0;
  }
}

@media screen and (max-width: 768px) {
  .in-plant {
    margin: 50px auto 25px;
    box-sizing: border-box;
    padding: 0 25px;
  }
}
</style>


<style>
body {
  overflow-x: hidden; /* 禁止水平滚动 */
  overflow-y: auto;
}

.item-content {
  margin-top: 85px;
}

.item-content > div {
  margin: 0 auto;
  max-width: 520px;
  width: 100%;
}

.item-content > div:nth-child(1) {
  color: #6d6d6d;
  font-family: "Noto Sans";
  font-size: 40px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 8px;
  margin-bottom: 5px;
  position: relative;
}

.item-content > div:nth-child(1)::before {
  content: "";
  display: inline-block;
  position: absolute;
  left: 0;
  top: -30px;
  max-width: 81px;
  width: 100%;
  height: 10px;
  background: #2449a4;
}

.item-content > div:nth-child(2) {
  color: #6d6d6d;
  font-family: "Noto Sans";
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 44px;
  /* 200% */
  letter-spacing: 4.4px;
}

@media screen and (max-width: 768px) {
  .item-content {
    margin-top: 10px;
  }

  .item-content > div {
    margin: 0 auto;
    max-width: 163px;
    width: 100%;
  }

  .item-content > div:nth-child(1) {
    color: #6d6d6d;
    font-family: "Noto Sans";
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 1.6px;
    margin-bottom: 5px;
    position: relative;
    padding-top: 10px;
  }

  .item-content > div:nth-child(1)::before {
    content: "";
    display: inline-block;
    position: absolute;
    left: 0;
    top: 0px;
    max-width: 29.194px;
    width: 100%;
    height: 3.604px;
    background: #2449a4;
  }

  .item-content > div:nth-child(2) {
    color: #6d6d6d;
    font-family: "Noto Sans";
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
    /* 180% */
    letter-spacing: 1px;
  }

  .contain-bg {
    padding: 0 0 20px 0;
    width: 100%;
  }

  .feature_page {
    width: 100vw;
    box-sizing: border-box;
    padding: 0 9.8vw;
    position: relative;
    margin: 20vw auto 0;
    display: none;
  }

  .feature-item-img {
    max-width: 58.985vw;
    height: 44.87vw;
    margin: 0 0 0 auto;
    display: flex;
    justify-content: flex-end;
  }

  .feature-item-img img {
    width: 100%;
  }

  .feature-item-declare {
    margin-top: 22.665vw;
  }

  .feature-item-left-top {
    display: flex;
    gap: 0 5.128vw;
    align-items: center;
  }

  .feature-img {
    max-height: 10.765vw;
  }

  .feature-title {
    color: #2449a4;
    font-family: "Noto Sans";
    font-size: 4.615vw;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 1.8px;
  }

  .feature-item-content {
    color: #6d6d6d;
    font-family: "Noto Sans";
    font-size: 3.58vw;
    font-style: normal;
    font-weight: 400;
    line-height: 30px;
    letter-spacing: 1.4px;
  }

  .swiper-button-container {
    position: absolute;
    top: -10.25vw;
    z-index: 10;
    display: flex;
    flex-direction: column;
    gap: 60vw 0;
    padding-left: 1px;
  }

  .beacon-list {
    position: absolute;
    width: max-content;
    left: -25px;
    color: rgba(36, 73, 164, 0.5);
    font-family: "Noto Sans";
    font-size: 4.1vw;
    text-align: center;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 1.6px;
    top: 50%;
    transform: translateY(-50%);
  }

  .beacon-list p {
    margin: 5.5vw 0;
    position: relative;
    z-index: 1;
  }

  .beacon-list p:last-child {
    margin-bottom: 3vw;
  }

  .beacon-list-active {
    color: #2449a4;
    position: relative;
  }

  .beacon-list-active::before {
    content: "";
    position: absolute;
    top: -5px;
    display: inline-block;
    width: 35px;
    height: 2px;
    background: #2449a4;
    left: 50%;
    transform: translateX(-50%);
  }
}

/* 地址 */
.address {
  margin: 150px auto 145px;
  max-width: 100vw;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0 60px;
}

.address-img {
  max-width: 550px;
  /* max-width: 600px; */
  /* margin: 0 auto; */
}

.address-img img {
  width: 100%;
}

.address-title {
  color: #2449a4;
  font-family: "Noto Sans";
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 6px;
  margin-bottom: 10px;
  position: relative;
}

.address-title::before {
  content: "";
  position: absolute;
  width: 60px;
  height: 10px;
  background: #2449a4;
  display: inline-block;
  top: -20px;
  left: 0;
}

.address-item {
  margin-bottom: 60px;
}

.address-text {
  display: flex;
  flex-direction: column;
  color: #6d6d6d;
  font-family: "Noto Sans";
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 6px;
}
.address-text > span {
  font-style: normal;
  font-weight: 400;
}

.address-items {
  display: flex;
  gap: 0 40px;
}

.address-items > div > span {
  white-space: nowrap;
}

.address-whatsapp {
  border-radius: 60px;
  border: 3px solid #fff;
  background: #59ba68;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  color: #fff;
  font-family: Inter;
  font-size: 19.6px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: uppercase;
  box-sizing: border-box;
  padding: 12px 22px 12px 42px;
}
/* .address-whatsapp:hover {
               0px 4px 4px 0px rgba(0, 0, 0, 0.25), 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset,0px 4px 4px 0px rgba(0, 0, 0, 0.25), 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset
            } */

a {
  text-decoration: none;
}

.address-whatsapp {
  display: flex;
  align-items: center;
  gap: 0 10px;
}

.address-whatsapp-a {
  position: relative;
  top: -30px;
}

.address-whatsapp-a > svg {
  position: relative;
  z-index: 3;
}

.address-whatsapp-a > div {
  position: absolute;
  top: 45%;
  left: 60%;
  transform: translateY(-50%);
}

.address-whatsapp-a > div > span {
  white-space: nowrap;
  font-weight: 400;
}
.address-whatsapp:hover {
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25),
    0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;
}

.address > div {
  margin-top: 20px;
}

@media screen and (max-width: 768px) {
  .pcShow {
    display: none;
  }
  .address-item {
    margin-bottom: 30px;
  }
  .address {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    margin: 15px 35px 50px;
    gap: 0 40px;
  }

  .address > div {
    margin-top: 50px;
  }

  .address-text {
    color: #6d6d6d;
    font-family: "Noto Sans";
    font-size: 3.56vw;
    font-style: normal;
    font-weight: 400;
    line-height: 25px;
    letter-spacing: 1px;
  }
  .address-text > span {
    font-style: normal;
    font-weight: 400;
  }

  .address-title {
    color: #2449a4;
    font-family: "Noto Sans";
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 3.2px;
    position: relative;
  }

  .address-title::before {
    content: "";
    width: 33.515px;
    height: 5px;
    background: #2449a4;
    position: absolute;
    left: 0;
    top: -10px;
  }

  .address-img {
    max-width: 310px;
    margin: 0 auto;
  }

  .address-img > img {
    width: 100%;
  }
}
.button_container {
  display: flex;
  position: relative;
  max-width: 365px;
  width: 365px;
  top: -50px;
}
.button_container::before {
  content: none;
}
.button_container img {
  position: relative;
  z-index: 3;
}

.button_container .button_a_whatsapp {
  position: absolute;
  left: 12%;
  top: 50%;
  transform: translateY(-50%);
}

.button_a_whatsapp {
  pointer-events: auto;
  cursor: pointer;
  background: #ffffff;
  border: none;
  padding: 1.5rem 3rem;
  margin: 0;
  font-family: inherit;
  font-size: inherit;
  position: relative;
  display: inline-block;
}

.button_dione {
  background: none;
  font-family: obvia, sans-serif;
  font-weight: 500;
  font-style: italic;
  padding: 1.5rem 3rem;
  display: flex;
  gap: 0 10px;
  align-items: center;
}

.button_dione::before {
  content: "";
  background: #59ba68;
  transition: transform 0.3s cubic-bezier(0.2, 1, 0.7, 1);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 55px;
}

.button_dione::after {
  content: "";
  border: 3px solid #59ba68;
  transition: transform 0.3s cubic-bezier(0.2, 1, 0.7, 1);
  border-radius: 55px;
  transform: scale3d(0.85, 0.65, 1);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.button_dione:hover::before {
  border-radius: 55px;
  transform: scale3d(0.9, 0.8, 1);
}

.button_dione:hover::after {
  border-radius: 55px;
  transform: scale3d(1, 1, 1);
}

.button_dione span {
  display: inline-block;
  position: relative;
  color: #fff;

  font-family: Inter;
  font-size: 19.6px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: uppercase;
}

.button_dione span:nth-child(2) {
  margin-top: 2px;
}

@media screen and (max-width: 768px) {
  .button_container {
    display: flex;
    position: relative;
    max-width: 365px;
    transform: scale(0.8);
  }
}

/* 轮播图 */
</style>


   <style>
@media screen and (min-width: 768px) {
  .circleTwo {
    display: none;
  }

  .mb-show {
    display: none;
  }
}

.btn-four-two {
  cursor: pointer;
  position: absolute;
  right: -6px;
  bottom: 55%;
}

.btn-four-two > img {
  transform: rotate(0deg);
}

.btn {
  cursor: pointer;
  position: absolute;
  top: 25%;
  right: 50px;
}

.btn > img {
  transform: rotate(0deg);
}

.step-four p,
.step-two p {
  opacity: 0;
}

.whatapps-btn {
  margin: 125px auto 100px;
  width: fit-content;
  position: relative;
}

.whatapps-btn::before {
  content: "";
  position: absolute;
  display: inline-block;
  background: url("https://statichk.cmermedical.com/vision/imgs/7d0a3a2a34b2007e.png")
    no-repeat;
  width: 360px;
  background-size: 100%;
  min-height: 120px;
  padding-top: 22px;
  position: absolute;
  z-index: 3;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  /* animation: wave 5s linear infinite; */
}

@keyframes wave {
  0% {
    left: 0%;
  }

  25% {
    left: 50%;
  }

  50% {
    left: 100%;
  }

  75% {
    left: -50%;
  }

  100% {
    left: 0%;
  }
}

.whatapps-btn > div {
  top: -10px;
  border-radius: 60px;
  border: 3px solid #fff;
  background: var(
    --Style,
    linear-gradient(90deg, #29abe2 0%, #06b5ff 3%, #19db84 100%)
  );
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25),
    0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;
  width: fit-content;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 0 12px;
  padding: 20px 37px;
  cursor: pointer;
  position: relative;
  z-index: 10;
}

.whatapps-btn > div > span:nth-child(1) {
  color: #fff;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-family: "Noto Sans";
  font-size: 30px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 6px;
}

.whatapps-btn > div > span:nth-child(2) {
  display: flex;
  align-items: center;
  position: relative;
  top: 4px;
}

@media screen and (max-width: 768px) {
  .mb-show {
    display: block;
    position: absolute;
  }

  .btn {
    top: -22px;
    right: -22px;
    filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.2));
  }

  .btn-four-two {
    top: -12px;
    right: 4px;
    filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.2));
  }

  .btn-child-two,
  .btn-child {
    position: fixed;
    width: 133vw;
    height: 133vw;
    background: #e8eeffeb;
    bottom: 0;
    left: 0;
    z-index: 9;
    display: none;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    margin-left: 2vw;
    transition: all 0.5s ease;
  }

  .btn-child-two > h3,
  .btn-child > h3 {
    display: flex;
    flex-direction: column;
  }

  .btn-child-two > h3,
  .btn-child > h3 > span:nth-child(1) {
    color: #2449a4;
    text-align: center;
    font-family: "Noto Sans";
    font-size: 24.079px;
    font-style: normal;
    font-weight: 400;
    line-height: 24.157px;
  }

  .btn-child-two > h3,
  .btn-child > h3 > span:nth-child(2) {
    color: #2449a4;
    text-align: center;
    font-family: "Noto Sans";
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px;
    letter-spacing: 3.2px;
    margin-top: 10px;
  }

  .btn-two img {
    transform: translate(85px, -20px) rotate(-90deg);
  }

  .btn-child-four-two img {
    transform: translate(85px, -8px) rotate(-90deg);
  }

  .child-span {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 220px;
    text-align: center;
    color: #6d6d6d;
    text-align: center;
    font-family: "Noto Sans";
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px;
    letter-spacing: 2.8px;
  }

  .child-span > span {
    color: #6d6d6d;
    text-align: center;
    font-family: "Noto Sans";
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px;
    letter-spacing: 2.8px;
  }
}

.whatapps-btn-series::before {
  content: none;
  position: absolute;
  z-index: 1;
  display: block;
  width: 105%;
  height: 120%;
  transform: translate(2.5%, -8%);
  border-radius: 60px;
  background: var(
    --Style,
    linear-gradient(90deg, #29abe2 0%, #06b5ff 3%, #19db84 100%)
  );
  top: 0;
  left: auto;
  right: 0;
}

.whatapps-btn-series::after {
  content: "";
  position: absolute;
  z-index: 4;
  display: block;
  border-radius: 60px;
  width: 100%;
  height: 100%;
  transform: translate(0%, 0%);
  background: #fff;
  top: 0;
  animation: borderAnimation 2s linear infinite;
}

@keyframes borderAnimation {
  0% {
    width: 0%;
    height: 0%;
    left: 0;
    right: auto;
  }

  10% {
    width: 0%;
    height: 100%;
    left: 0;
    right: auto;
    opacity: 0;
  }

  21% {
    opacity: 1;
  }

  40% {
    width: 100%;
    height: 100%;
    left: 0;
    right: auto;
    opacity: 1;
  }

  45% {
    width: 100%;
    left: 0;
    right: auto;
  }

  55% {
    width: 100%;
    left: auto;
    right: 0;
  }

  70% {
    width: 0%;
    left: auto;
    right: 0;
  }

  100% {
    width: 0%;
    left: auto;
    right: 0;
  }
}

.whatapps-btn-series > .whatapps-btn-series-p > span:nth-child(1) {
  color: #fff;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-family: "Noto Sans";
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 6px;
}

.whatapps-btn-series > .whatapps-btn-series-p {
  border-radius: 60px;
  gap: 0 10px;
  box-sizing: border-box;
  padding: 15px 20px 13px;
  position: relative;
  z-index: 10;
  background: var(
    --Style,
    linear-gradient(90deg, #29abe2 0%, #06b5ff 3%, #19db84 100%)
  );
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25),
    0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;
  width: fit-content;
  display: flex;
  align-items: center;
}

.whatapps-btn-series > .whatapps-btn-series-p > span:nth-child(2) {
  position: relative;
  top: 6px;
}

.whatapps-btn-series {
  position: relative;
  width: fit-content;
  height: max-content;
  background: var(
    --Style,
    linear-gradient(90deg, #29abe2 0%, #06b5ff 3%, #19db84 100%)
  );
  padding: 5px 5px;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border-radius: 60px;
  display: flex;
  margin: 0 auto;
}

@media screen and (max-width: 768px) {
  .whatapps-btn-series > .whatapps-btn-series-p > span:nth-child(1) {
    color: #fff;
    font-family: "Noto Sans";
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 2.8px;
  }

  .whatapps-btn-series > .whatapps-btn-series-p > span:nth-child(2) {
    position: relative;
    top: 3px;
  }

  .whatapps-btn-series > .whatapps-btn-series-p > span:nth-child(2) > svg {
    width: 10px;
    height: 15px;
  }
}
@media screen and (max-width: 768px) {
  .circle_title .fontTitle small {
    font-size: 14px;
  }
}
</style>
 