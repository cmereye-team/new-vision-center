<script lang="ts" setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
const modules = [Autoplay];
useHead(() => ({
  title: "老花漸進鏡片｜成人視力服務｜希瑪視光中心",
  meta: [
    {
      hid: "description",
      name: "description",
      content:
        "漸進鏡片有別於老花眼鏡，漸進鏡片的原理是在一塊鏡片上提供不同的焦點，同時矯正多種視力問題，讓配戴者能夠看清遠、中、近距離的事物，適合老花人士配戴。希瑪眼科視光中心提供多種類型的漸進鏡片，包括一般、辦公室、戶外變色和個人化漸進鏡片。我們的專業視光師會根據您的個人生活習慣和視力數據，建議最適合您的漸進鏡片類型。立即了解更多關於老花漸進鏡片的資訊！",
    },
    {
      hid: "Keywords",
      name: "Keywords",
      content:
        "漸進式眼鏡 漸進老花眼鏡 漸進眼鏡 漸進鏡 漸進鏡片 漸進鏡片比較 漸進鏡片好處 漸進鏡片推介 漸進鏡片牌子 漸進鏡片價格 漸進鏡片價錢 漸進老花眼鏡價錢 漸進鏡片邊隻好 老花加近視眼鏡價格 老花眼鏡 老花眼鏡怎麼配 老花眼鏡香港 老花眼鏡價錢 老花漸進鏡 老花鏡片 近視老花眼鏡 近視老花眼鏡價格 配老花眼鏡 hoya漸進鏡片 hoya漸進鏡片評價 hoya漸進鏡片價格 hoya漸進鏡片價錢 hoya全視線價格 眼科視光師 註冊視光師 視光師 視光師驗眼中心 希瑪視光 視光中心 希瑪視光中心 希瑪眼科視光中心",
    },
  ],
}));
const bannerImg = {
  pc: "https://statichk.cmermedical.com/vision/imgs/2025030309383301.webp",
  mobile: "https://statichk.cmermedical.com/vision/imgs/2025030309383302.webp",
};
const isType = ref(0);
const checkType = (type: number) => {
  isType.value = type;
};
import getWindowSize from "@/utils/width";
import { descriptionProps } from "element-plus";

const btnElement = ref({
  cls: "adult_service_btn",
  title: "哪個品牌最適合我？",
  svgIcon: `<svg xmlns="http://www.w3.org/2000/svg" width="29" height="30" viewBox="0 0 29 30" fill="none"><g clip-path="url(#clip0_4918_1268)"><path d="M13.2564 21.1232C12.7525 20.0623 12.2882 19.0831 11.8226 18.1066C10.6531 15.6539 9.49736 13.1959 8.30735 10.754C7.6377 9.3796 8.26353 8.05749 9.23854 7.52436C10.4696 6.85058 12.002 7.28056 12.6224 8.5223C13.3427 9.96229 14.015 11.4251 14.7148 12.8758C15.1475 13.7719 15.8295 13.9996 16.7525 13.5803C17.67 13.1638 18.5697 12.715 19.5885 12.5462C22.2247 12.1069 25.0183 13.3955 26.2521 15.7423C27.0751 17.3056 27.8351 18.9036 28.5417 20.5204C29.2936 22.2431 29.1005 23.9362 28.1172 25.5436C27.9954 25.7432 27.8351 25.8799 27.6188 25.9777C24.7964 27.2515 21.9782 28.5335 19.1544 29.8033C18.2424 30.2132 17.5029 29.9989 17.0524 29.1403C16.3882 27.8758 15.2667 27.2368 13.9644 26.7747C11.9527 26.0594 9.95475 25.3106 7.95267 24.5698C6.79826 24.1425 6.10944 23.0963 6.20393 21.9363C6.29294 20.8325 7.16937 19.856 8.30598 19.631C8.82635 19.5292 9.3481 19.56 9.8493 19.7623C10.849 20.1668 11.8486 20.5686 12.8497 20.9705C12.9538 21.012 13.0592 21.0495 13.2564 21.1246V21.1232Z" fill="white"/><path d="M2.13541 14.4127C1.54793 14.4181 1.08507 14.0859 0.953606 13.6251C0.812557 13.1308 1.00427 12.591 1.47124 12.3646C2.41751 11.9052 3.37335 11.4618 4.34153 11.0479C4.90983 10.8054 5.51237 11.068 5.7753 11.6024C6.03138 12.1235 5.84514 12.7651 5.29327 13.0344C4.34837 13.4952 3.38157 13.9158 2.42024 14.3458C2.30932 14.3953 2.17923 14.402 2.13404 14.4127H2.13541Z" fill="white"/><path d="M5.07496 7.84642C5.08455 8.70505 4.32179 9.22345 3.52479 8.95688C2.80448 8.71577 2.09239 8.4492 1.37756 8.19469C1.15297 8.11432 0.924282 8.04467 0.706546 7.95224C0.130025 7.70711 -0.13838 7.10298 0.0725094 6.54574C0.286137 5.98314 0.887308 5.68175 1.48574 5.88267C2.45391 6.20684 3.41387 6.5511 4.36972 6.90741C4.82984 7.07887 5.0421 7.44724 5.0736 7.84642H5.07496Z" fill="white"/><path d="M13.8446 0.00133952C14.6416 0.0147348 15.2058 0.683158 14.988 1.35292C14.6621 2.3589 14.2855 3.35015 13.8898 4.33068C13.6748 4.86515 13.027 5.09421 12.4889 4.89596C11.9356 4.69236 11.6056 4.09359 11.7987 3.54304C12.1369 2.57591 12.4943 1.61413 12.8709 0.660386C13.0489 0.211645 13.4406 0.0174138 13.8432 0L13.8446 0.00133952Z" fill="white"/><path d="M19.4373 5.87984C19.4345 6.33528 19.2223 6.67954 18.8114 6.87511C17.9104 7.30376 17.0038 7.72437 16.0877 8.12087C15.4632 8.39011 14.8319 8.14096 14.5704 7.56765C14.3184 7.01308 14.5498 6.39422 15.1496 6.11024C16.0411 5.68963 16.9394 5.2784 17.846 4.8886C18.6266 4.55371 19.4345 5.07077 19.4359 5.88118L19.4373 5.87984Z" fill="white"/><path d="M6.79054 1.20056C7.1548 1.21395 7.52181 1.41086 7.72585 1.83147C8.15584 2.7169 8.5831 3.60233 8.98981 4.49847C9.24452 5.05705 8.99392 5.70002 8.46122 5.9465C7.89292 6.21038 7.23697 6.00275 6.9535 5.43346C6.51392 4.55339 6.08119 3.66796 5.68132 2.77048C5.3376 2.00025 5.86071 1.20726 6.79054 1.19922V1.20056Z" fill="white"</<defs<clipPath id="clip0_4918_1268"><rect width="29" height="30" fill="white" transform="translate(0.000976562)"/></clipPath></defs></svg>`,
  isExternalLink: true,
  // isExternalLink 外链 true
  link: "https://api.whatsapp.com/send?phone=85269180511&text=%E4%BD%A0%E5%A5%BD,%E6%88%91%E6%83%B3%E6%9F%A5%E8%A9%A2",
});

let imgLeft = ref("50%");
const yuanspan = ref(null);
const { elementX, elementWidth } = useMouseInElement(yuanspan);
let isDragging = ref(false);
// const isPresbyopiaOrMirror = ref(false);
watch(elementX, (n, o) => {
  if (isDragging.value) {
    let a = (elementX.value + 5) / elementWidth.value;
    console.log(imgLeft.value, "a,imgLeft.value");

    if (a < 0) {
      imgLeft.value = "1%";
      console.log("a", `0`);
    } else if (a > 1) {
      imgLeft.value = "100%";
      console.log("a", `1`);
    } else {
      console.log("a", `${(a * 100).toFixed(4)}`);
      imgLeft.value = `${(a * 100).toFixed(4)}%`;
    }

    // if (
    //   55 < Number((a * 100).toFixed(4)) &&
    //   Number((a * 100).toFixed(4)) < 100
    // ) {
    //   isPresbyopiaOrMirror.value = true;
    // } else {
    //   isPresbyopiaOrMirror.value = false;
    // }
  }
});
onMounted(() => {
  checkType(0);
  const observer = new IntersectionObserver(handleIntersection, {
    threshold: 1, // 当元素至少10%出现在视口时触发回调
  });

  if (observerTarget.value) {
    observer.observe(observerTarget.value);
  }
  nextTick(() => {
    const imgline = document.getElementById("imgline");
    if (imgline) {
      imgline.addEventListener("touchstart", (e) => {
        isDragging.value = true;
      });
      imgline.addEventListener("touchend", function (event) {
        isDragging.value = false;
      });
      imgline.addEventListener("mousedown", (e) => {
        isDragging.value = true;
      });
      imgline.addEventListener("mouseup", function (event) {
        isDragging.value = false;
      });
    }
  });
});

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

const miSightQuestionList = [
  {
    q: "配戴漸進鏡需要適應嗎？",
    a: [
      `是的，配戴漸進鏡需要一定的適應。由於漸進鏡鏡片具有多焦點設計，視線的過`,
      `渡需要一些時間習慣。在初次配戴漸進鏡時，可能會發現某些角度看東西會模糊`,
      `。然而，通常在幾天或幾週的時間內，大多數人能夠適應並享受到漸進鏡提供的`,
      `無縫視覺矯正`,
    ],
    mAq: [
      `是的，配戴漸進鏡需要一定的適應。由於漸進鏡鏡片具有多焦點設計，視線的過`,
      `渡需要一些時間習慣。在初次配戴漸進鏡時，可能會發現某些角度看東西會模糊`,
      `。然而，通常在幾天或幾週的時間內，大多數人能夠適應並享受到漸進鏡提供的`,
      `無縫視覺矯正`,
    ],
  },
  {
    q: "漸進鏡的使用壽命是多久？",
    a: [
      `漸進鏡的使用壽命通常沒有固定的時間限制，而是根據個人使用情況和保養方式`,
      `而定。正確護理和保養漸進鏡可以延長其使用壽命。然而，隨著時間的推移，鏡`,
      `片可能會受到日常使用和磨損的影響，並可能需要更換。建議定期進行眼鏡檢查`,
      `，以確保漸進鏡的性能和效果。如果你注意到鏡片有劇烈刮擦、破損或失去了原`,
      `本的視力矯正效果，那麼可能是時候考慮更換漸進鏡了。`,
    ],
    mAq: [
      `漸進鏡的使用壽命通常沒有固定的時間限制，而是根據個人使用情況和保養方式`,
      `而定。正確護理和保養漸進鏡可以延長其使用壽命。然而，隨著時間的推移，鏡`,
      `片可能會受到日常使用和磨損的影響，並可能需要更換。建議定期進行眼鏡檢查`,
      `，以確保漸進鏡的性能和效果。如果你注意到鏡片有劇烈刮擦、破損或失去了原`,
      `本的視力矯正效果，那麼可能是時候考慮更換漸進鏡了。`,
    ],
  },
  {
    q: "漸進鏡是否會導致眩光或影響夜間駕駛的能力？",
    a: [
      `漸進鏡的設計通常不會直接導致眩光或影響夜間駕駛的能力。然而，初次配戴漸`,
      `進鏡可能需要一些時間適應視力過渡，可能會在暗光環境下感到不適。大多數人`,
      `在幾天或幾週內能適應並享受到漸進鏡的無縫視力矯正。如果不適感持續或對夜`,
      `間駕駛有顯著影響，建議咨詢專業人士。`,
    ],
    mAq: [
      `漸進鏡的設計通常不會直接導致眩光或影響夜間駕駛的能力。然而，初次配戴漸`,
      `進鏡可能需要一些時間適應視力過渡，可能會在暗光環境下感到不適。大多數人`,
      `在幾天或幾週內能適應並享受到漸進鏡的無縫視力矯正。如果不適感持續或對夜`,
      `間駕駛有顯著影響，建議咨詢專業人士。`,
    ],
  },
];

const judge = (num: string) => {
  const n = Number(num.replace("%", ""));
  if (n > 60) {
    return false;
  } else {
    return true;
  }
};
const judgeTwo = (num: string) => {
  const n = Number(num.replace("%", ""));
  if (n < 40) {
    return false;
  } else {
    return true;
  }
};

const isPc = ref(true);

onMounted(() => {
  let { widthState, width } = getWindowSize();
  window.addEventListener("resize", () => {
    let { widthState, width } = getWindowSize();
    isPc.value = widthState;
  });
  isPc.value = widthState;
  window.addEventListener("scroll", theoryBox);
  window.addEventListener("scroll", cataractquery);
});

const theoryBox = () => {
  if (isPc.value) {
    // 获取 class=theory  的元素
    const theory = document.querySelector(".theory");
    const theoryContent = document.querySelector(
      ".theory-content"
    ) as HTMLElement | null;
    const theoryDemonstration = document.querySelector(
      ".comparison"
    ) as HTMLElement | null;
    const type = document.querySelector(".comparison");
    // 判断距离顶部的距离
    const theoryTop = theory?.getBoundingClientRect().top;
    // 判断底部的距离
    const typeBottom = type?.getBoundingClientRect().bottom;
    if (theoryTop !== undefined && theoryTop < 150) {
      if (theoryContent) theoryContent.style.display = "none";
      if (theoryDemonstration) theoryDemonstration.style.display = "flex";
    } else {
      if (theoryContent) theoryContent.style.display = "flex";
      if (theoryDemonstration) theoryDemonstration.style.display = "none";
    }

    if (typeBottom !== undefined && typeBottom > 140) {
      if (theory) (theory as HTMLElement).style.position = "relative";
    }
  }
};

const showDemonstration = () => {
  const theoryContent = document.querySelector(
    ".theory-content"
  ) as HTMLElement | null;
  const theoryDemonstration = document.querySelector(
    ".comparison"
  ) as HTMLElement | null;
  if (theoryContent) theoryContent.style.display = "none";
  if (theoryDemonstration) theoryDemonstration.style.display = "flex";
};
const backspaceTheory = () => {
  const theoryContent = document.querySelector(
    ".theory-content"
  ) as HTMLElement | null;
  const theoryDemonstration = document.querySelector(
    ".comparison"
  ) as HTMLElement | null;
  if (theoryContent) theoryContent.style.display = "flex";
  if (theoryDemonstration) theoryDemonstration.style.display = "none";
};
const cataractquery = () => {
  const cataractQuery = document.querySelector(".cataract-query");
  const cataractQueryTitle = document.querySelector(".cataract-query-title");
  const cataractQueryContent = document.querySelector(
    ".cataract-query-content"
  );

  const cataractQueryTop = cataractQuery?.getBoundingClientRect().top;
  const cataractQueryBottom = cataractQuery?.getBoundingClientRect().bottom;

  if (cataractQueryTop !== undefined && cataractQueryTop < 150) {
    if (cataractQueryTitle) {
      (cataractQueryTitle as HTMLElement).style.display = "none";
    }
    if (cataractQueryContent) {
      (cataractQueryContent as HTMLElement).style.display = "flex";
    }
  } else {
    if (cataractQueryTitle) {
      (cataractQueryTitle as HTMLElement).style.display = "flex";
    }
    if (cataractQueryContent) {
      (cataractQueryContent as HTMLElement).style.display = "none";
    }
  }

  if (cataractQueryBottom !== undefined && cataractQueryBottom > 450) {
    if (cataractQuery) {
      (cataractQuery as HTMLElement).style.position = "relative";
    }
  }
};

const classifyList = [
  {
    name: "一般漸進鏡片",
    description:
      "一般漸進鏡片適用於大多數人，鏡片平均分配了觀看<span>遠、中、近景物</span>的度數鏡片。通常能為你<span>提供一個相對寬闊的閱讀區域，</span>但框架亦因此需要有一定大小，以允許有足夠的垂直高度從遠距離視覺平滑過渡到閱讀。一般漸進的鏡片相對實惠，適合大多數人的預算。",
    img: "https://statichk.cmermedical.com/vision/imgs/898c66bd6fa9a2d0.png",
  },
  {
    name: "戶外變色漸進鏡片",
    description:
      "戶外變色漸進鏡片同時具備<span>漸進及變色功能</span>。這種鏡片較著重<span>遠距離視野，而鏡片兩旁的「模糊區」亦較細，可大幅減少鏡片的扭曲</span> ，讓配戴者更舒適自在地細看自然景色，非常適合熱愛進行戶外活動的人士。",
    img: "https://statichk.cmermedical.com/vision/imgs/5c6eda3929b3d1a6.png",
  },
  {
    name: "辦公室漸進鏡片",
    description:
      "辦公室漸進鏡片<span>適合一些工作或日常生活上</span>，需要長時間使用電腦或處理文書工作的人士。一般漸進鏡片的<span>中近距離視野區域範圍較小</span>，配戴者在工作時可能需要長期保持仰頭姿勢，才能看清事物，容易令眼睛和頸部疲勞：相反， 辦公室漸進鏡片用作<span>看遠景的位置</span>範圍<span>較小，看中、近距離的鏡片範圍則較大</span>，讓配戴者在閱讀時更舒適。",
    img: "https://statichk.cmermedical.com/vision/imgs/d2f69094c0ede78e.png",
  },
  {
    name: "個人化漸進鏡片",
    description:
      "每位客人的生活需要和視光數據都不一樣，因此在設計鏡片時，視光師會<span>考慮配戴者的生活習慣、雙眼的健康狀況、視覺需要、瞳距或鏡框的孤度</span>等等。如客人選擇頂端的個人化漸進鏡片，視光師及配鏡師便能為客人度身訂製出最合適的漸進眼鏡，獲得<span>自然和優越的視覺感觀體驗</span>。",
    img: "https://statichk.cmermedical.com/vision/imgs/47c0c7944ae29ee2.png",
  },
];

const mobileName = (str: string) => {
  // 判断str是否为空
  if (str.length === 0) {
    return "";
  }
  //  用关键词 '漸進鏡片' 分割
  return str.split("漸進鏡片")[0];
};

const btnClassify = (i: number) => {
  const classifyListItems = document.querySelectorAll(".classify-list-item");
  classifyListItems.forEach((item, index) => {
    if (index !== i) {
      item.classList.remove("active");
    }
  });
  switch (i) {
    case 0:
      classifyListItems[0].classList.add("active");
      break;
    case 1:
      classifyListItems[1].classList.add("active");
      break;
    case 2:
      classifyListItems[2].classList.add("active");
      break;
    case 3:
      classifyListItems[3].classList.add("active");
  }

  const classifybtns = document.querySelectorAll(".classify-btn");
  classifybtns.forEach((item, index) => {
    if (index === i) {
      item.classList.add("btn-active");
    } else {
      item.classList.remove("btn-active");
    }
  });
};

const keyTitle = (i: number) => {
  // 获取 所有类名 key-title 的元素
  const keyTitles = document.querySelectorAll(".key-title");
  // 获取所有 类名 key-content 的元素
  const keyContents = document.querySelectorAll(".key-content");
  keyTitles.forEach((item, index) => {
    if (index === i) {
      item.classList.add("key-active");
    } else {
      item.classList.remove("key-active");
    }
  });
  keyContents.forEach((item, index) => {
    if (index === i) {
      item.classList.add("content-active");
    } else {
      item.classList.remove("content-active");
    }
  });
};
</script>

<template>
  <div class="video-information">
    <PublicContainBanner :banner="bannerImg">
      <!-- 插槽 -->
      <template #title>
        <div class="profile-title"><span>老花漸進鏡片</span></div>
      </template>
    </PublicContainBanner>
    <PublicNavbar
      :name="'成人視力服務'"
      :isInsidePage="true"
      :insidePageTitle="'老花漸進鏡'"
    />
    <div class="presbyopia-box">
      <div class="presbyopia-content">
        <div class="what-presbyopia">
          <PublicV2PageTitle :title="'甚麼是老花？'" />
          <div>
            <span
              >大約40歲開始，任何人都有機會患上老花。老花是因睫狀肌退化及晶體失去彈性，影</span
            >
            <span
              >響眼睛對焦功能，引致看近事物時感到視線模糊，而看遠方景物即不受影響。</span
            >
          </div>
        </div>
        <div class="what-presbyopia-svg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="165"
            height="101"
            viewBox="0 0 165 101"
            fill="none"
          >
            <path
              d="M80.6575 100.881C58.4447 100.411 37.5757 92.6301 19.905 76.6122C12.2991 69.7185 5.86241 61.8977 0.769465 52.975C-0.238374 51.2012 -0.265276 49.6693 0.742563 47.8955C8.30807 34.5786 18.5746 23.7477 31.2868 15.3221C48.0035 4.2359 66.5209 -0.830177 86.5433 0.110472C107.802 1.10487 126.588 8.60319 142.754 22.4845C151.139 29.6872 158.194 38.0052 163.703 47.6267C164.819 49.5618 164.846 51.2146 163.73 53.1765C156.313 66.0366 146.409 76.6256 134.18 84.9571C118.525 95.5998 101.11 100.72 80.6709 100.908L80.6575 100.881ZM82.3103 94.9817C107.143 94.9817 126.978 75.2415 127.099 50.4487C127.206 25.8305 107.184 5.835 82.4044 5.80812C57.4369 5.78125 37.3204 25.7902 37.4951 50.489C37.6698 75.3356 57.4638 94.9951 82.3238 94.9951L82.3103 94.9817ZM117.101 13.0646C138.212 38.1396 138.252 62.7309 117.034 87.779C118.7 87.0265 120.03 86.489 121.307 85.8305C135.981 78.3725 147.565 67.5282 156.622 53.8619C158.825 50.5293 158.852 50.3546 156.649 46.9817C149.768 36.433 141.168 27.5506 130.754 20.4688C126.561 17.62 122.18 15.0668 117.087 13.0646H117.101ZM47.2778 87.4699C26.3417 62.6905 26.3551 38.0858 47.1972 13.4005C46.4044 13.1318 45.6922 13.7633 44.9666 14.1127C28.989 21.8395 16.5186 33.4498 7.03147 48.3792C6.03707 49.9515 6.25213 51.1743 7.17935 52.639C15.4167 65.6469 26.0998 76.1284 39.4705 83.8014C41.943 85.2258 44.4022 86.8787 47.2913 87.4699H47.2778Z"
              fill="#00A6CE"
            />
            <path
              d="M83.2514 79.9294C67.1394 79.9159 54.5482 65.7121 56.5504 49.7345C56.7251 48.3773 56.4429 47.5173 55.341 46.6438C48.4339 41.1477 47.7083 31.7412 53.621 25.412C59.4396 19.1903 69.1148 19.3919 74.9468 26.0033C76.0487 27.253 77.0834 27.1186 78.3869 26.9305C90.6557 25.0761 101.393 30.5587 106.956 41.4837C115.744 58.7648 102.683 79.9563 83.238 79.9294H83.2514ZM103.973 53.2956C104.013 40.7312 93.0879 30.9484 80.6176 32.3863C79.4216 32.5206 78.5481 32.6953 78.4944 34.3213C78.1987 43.2037 73.5492 48.5386 64.9087 49.7211C62.5974 50.0436 62.1405 51.0783 62.1271 53.1074C62.0867 64.5968 71.4529 74.0839 82.9692 74.1242C94.4854 74.1645 103.932 64.7984 103.973 53.309V53.2956ZM55.4485 35.1545C55.3544 39.6964 59.2783 43.8219 63.8471 44.01C68.4295 44.1847 72.6355 40.1265 72.7564 35.3963C72.8774 30.9753 68.7788 26.823 64.1831 26.7155C59.6277 26.608 55.5291 30.5587 55.4485 35.1679V35.1545Z"
              fill="#00A6CE"
            />
            <path
              d="M72.81 54.7517C72.81 53.6229 72.8234 52.5075 72.81 51.3787C72.7563 49.1346 73.6028 47.643 76.0619 47.6833C77.661 47.7102 78.1449 46.9039 78.2255 45.4527C78.3733 43.0607 79.7036 41.9051 82.1359 41.9588C84.5547 42.0126 86.9735 41.9991 89.3924 41.9588C91.5558 41.9319 92.9399 42.9263 93.0743 45.0898C93.1818 46.8771 93.7328 47.764 95.6947 47.7102C97.5357 47.6699 98.6376 48.8659 98.7182 50.6262C98.8526 53.4616 98.8257 56.3239 98.7182 59.1593C98.6376 61.1078 97.3475 62.1022 95.4797 62.2097C93.8806 62.3037 93.2087 63.0025 93.128 64.615C93.0205 66.7651 91.717 67.9073 89.5804 67.9476C87.081 68.0014 84.5681 68.0014 82.0687 67.9476C79.9993 67.8939 78.5479 66.8995 78.3195 64.7629C78.1448 63.11 77.4864 62.3306 75.7663 62.1962C73.7104 62.0215 72.7831 60.6777 72.81 58.6352C72.8234 57.3452 72.81 56.0417 72.81 54.7517ZM85.8582 47.549C84.5278 47.549 84.38 48.4627 84.2994 49.4706C84.1247 51.7684 83.09 53.2063 80.5771 53.166C79.4887 53.1525 78.7227 53.4885 78.6823 54.7517C78.6555 55.9342 79.2199 56.512 80.389 56.5254C82.969 56.5254 84.1112 57.9633 84.2859 60.3956C84.3665 61.4706 84.7563 62.2231 86.0194 62.1425C87.2288 62.0753 87.3363 61.2153 87.3229 60.3149C87.2826 57.8961 88.4114 56.5926 90.8705 56.5523C91.9724 56.5389 93.0071 56.4448 92.9265 54.9263C92.8593 53.6094 92.0664 53.1391 90.857 53.1794C88.3307 53.2466 87.2557 51.9163 87.3094 49.484C87.3363 48.4762 87.202 47.5355 85.8447 47.5624L85.8582 47.549Z"
              fill="#00A6CE"
            />
          </svg>
        </div>
      </div>
      <div class="presbyopia-glasses">
        <PublicV2PageTitle :title="'老花眼鏡'" />
        <div>
          <div>
            <img
              src="https://statichk.cmermedical.com/vision/imgs/2025030614000101.png"
              alt=""
            />
          </div>
          <div>
            <span
              >老花人士本身已有近視、遠視或散光，看不同距離的景物時均可能感到困難。如果只</span
            >
            <span
              >配戴普通度數眼鏡或老花眼鏡，閱讀或看近東西時，需要時常戴上或除下眼鏡才能看</span
            >
            <span>得清楚，對日常生活十分不便。</span>
          </div>
        </div>
      </div>
      <div class="theory" v-if="isPc">
        <div class="theory-content">
          <div>
            <PublicV2PageTitle :title="'技術原理'" />
            <div>
              <span>漸進鏡是一塊能同時矯正多種視力問題的鏡片。</span
              ><span>透過在同一塊鏡片上提供不同的焦點，</span
              ><span>只需一副眼鏡便能解決遠視、近視和老花問題。</span
              ><span>鏡片的不同位置適用於不同視力需要，</span
              ><span>結構主要分為三大部份：</span>
            </div>
          </div>
          <div>
            <img
              src="https://statichk.cmermedical.com/vision/imgs/2025030311213501.png"
              alt=""
            />
            <div @click="showDemonstration"></div>
          </div>
          <div>
            <div><span>遠用度數</span><span>用作平常觀看遠方景物</span></div>
            <div>
              <span>中光區</span><span>用於看中近距離的景物如電腦</span>
            </div>
            <div>
              <span>近用度數</span
              ><span>用作看近距離景物如閱讀文件和看手提電話</span>
            </div>
          </div>
        </div>
        <div class="comparison">
          <div>
            <div v-if="judgeTwo(imgLeft)">老花眼鏡</div>
            <div
              v-if="judge(imgLeft)"
              style="color: #0192b0"
              class="comparison-right-text"
            >
              漸進鏡片
            </div>
          </div>
          <div class="imagetowebp-canvasWebp">
            <div
              ref="yuanspan"
              class="yuan"
              :style="{
                'clip-path': `polygon(0 0, ${imgLeft} 0, ${imgLeft} 100%, 0 100%)`,
              }"
            >
              <img
                src="https://statichk.cmermedical.com/vision/imgs/1912e5aa1992.png"
                alt="老花眼鏡"
              />
            </div>
            <span :style="{ left: imgLeft }" id="imgline"> </span>
            <img
              src="https://statichk.cmermedical.com/vision/imgs/f46189870e93.png"
              alt="漸進鏡片"
            />
          </div>
          <!-- <div ref="observerTarget" :class="titleShow ? '' : 'hideShow'">
            <div>{{ `<向左移動` }}</div>
            <div>{{ `向右移動>` }}</div>
          </div> -->
          <div class="comparison-content">
            <span>實際對比</span>
            <span>拉動手桿看看漸進鏡片跟老花眼鏡的分別。</span>
          </div>
        </div>
      </div>

      <div class="theory" v-if="!isPc">
        <div class="theory-content">
          <div>
            <PublicV2PageTitle :title="'技術原理'" />
            <div>
              <span>漸進鏡是一塊能同時矯正多種視力問題的鏡片。</span
              ><span>透過在同一塊鏡片上提供不同的焦點，</span
              ><span>只需一副眼鏡便能解決遠視、近視和老花問題。</span
              ><span>鏡片的不同位置適用於不同視力需要，</span
              ><span>結構主要分為三大部份：</span>
            </div>
          </div>
          <div>
            <img
              src="https://statichk.cmermedical.com/vision/imgs/2025030311213501.png"
              alt=""
            />
            <div @click="showDemonstration"></div>
          </div>
          <div>
            <div><span>遠用度數</span><span>用作平常觀看遠方景物</span></div>
            <div>
              <span>中光區</span><span>用於看中近距離的景物如電腦</span>
            </div>
            <div>
              <span>近用度數</span
              ><span>用作看近距離景物如閱讀文件和看手提電話</span>
            </div>
          </div>
        </div>
        <div class="comparison">
          <div>
            <div v-if="judgeTwo(imgLeft)">老花眼鏡</div>
            <div
              v-if="judge(imgLeft)"
              style="color: #0192b0"
              class="comparison-right-text"
            >
              漸進鏡片
            </div>
          </div>
          <div class="imagetowebp-canvasWebp">
            <div
              ref="yuanspan"
              class="yuan"
              :style="{
                'clip-path': `polygon(0 0, ${imgLeft} 0, ${imgLeft} 100%, 0 100%)`,
              }"
            >
              <img
                src="https://statichk.cmermedical.com/vision/imgs/1912e5aa1992.png"
                alt="老花眼鏡"
              />
            </div>
            <span :style="{ left: imgLeft }" id="imgline"> </span>
            <img
              src="https://statichk.cmermedical.com/vision/imgs/f46189870e93.png"
              alt="漸進鏡片"
            />
          </div>
          <div class="comparison-content">
            <span>實際對比</span>
            <span>拉動手桿看看漸進鏡片跟老花眼鏡的分別。</span>
          </div>
          <div class="backspace-theory" @click="backspaceTheory()"></div>
        </div>
      </div>
      <div class="classify">
        <div class="classify-list">
          <div class="classify-list-item classify-list-item-one active">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="159"
                height="138"
                viewBox="0 0 159 138"
                fill="none"
              >
                <path
                  d="M44.1084 138C29.9516 138 19.0645 132.173 11.4411 120.519C3.81168 108.87 0 91.6935 0 69C0 46.3065 3.81168 29.1356 11.4411 17.4814C19.0645 5.83322 29.8968 0 43.9257 0C57.9546 0 69.0913 5.9489 77.3297 17.8467C85.568 29.7445 89.6842 46.7936 89.6842 69C89.6842 91.2064 85.5376 108.255 77.2384 120.153C68.9391 132.051 57.8998 138 44.1145 138H44.1084ZM44.4737 12.4458C34.3417 12.4458 26.4748 17.3292 20.8668 27.0898C15.2528 36.8503 12.4458 50.9463 12.4458 69.3653C12.4458 107.19 23.1197 126.102 44.4737 126.102C54.8432 126.102 62.9293 121.134 68.726 111.184C74.5227 101.241 77.421 87.1816 77.421 69C77.421 50.8184 74.4313 36.8503 68.452 27.0898C62.4726 17.3292 54.4778 12.4458 44.4737 12.4458Z"
                  fill="#CBCBCB"
                />
                <path
                  d="M133.05 3.30859H158.855V134.714H145.861V16.1198H125.177L133.044 3.30859H133.05Z"
                  fill="#CBCBCB"
                />
              </svg>
            </div>
            <div>
              <div>{{ classifyList[0].name }}</div>
              <div v-html="classifyList[0].description"></div>
              <div>
                視光師會先為客人進行視力檢查，再就著客人的個人生活模式、用眼習慣及視光數據等為客人訂製合適的鏡片。
              </div>
            </div>
            <div>
              <img :src="classifyList[0].img" :alt="classifyList[0].name" />
            </div>
          </div>
          <div class="classify-list-item classify-list-item-two">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="197"
                height="140"
                viewBox="0 0 197 140"
                fill="none"
              >
                <path
                  d="M44.6878 139.778C30.345 139.778 19.3149 133.876 11.5914 122.072C3.86176 110.273 0 92.8751 0 69.8892C0 46.9032 3.86176 29.5049 11.5914 17.7066C19.3149 5.90222 30.2833 0 44.5027 0C58.7221 0 69.9989 6.02556 78.3455 18.0767C86.6921 30.1278 90.8623 47.3966 90.8623 69.8892C90.8623 92.3817 86.6613 109.65 78.253 121.702C69.8447 133.753 58.6604 139.778 44.694 139.778H44.6878ZM45.0579 12.6062C34.7928 12.6062 26.8225 17.5525 21.141 27.4388C15.4532 37.3252 12.6093 51.6028 12.6093 70.2592C12.6093 108.571 23.4235 127.727 45.0579 127.727C55.5636 127.727 63.756 122.695 69.6288 112.617C75.5016 102.546 78.4381 88.3051 78.4381 69.8892C78.4381 51.4732 75.4091 37.3252 69.3512 27.4388C63.2933 17.5525 55.1935 12.6062 45.0579 12.6062Z"
                  fill="#CBCBCB"
                />
                <path
                  d="M122.009 45.0468H109.215C109.832 31.4538 114.341 20.5498 122.749 12.3287C131.152 4.1075 141.318 0 153.249 0C165.179 0 175.062 3.86697 182.915 11.5886C190.762 19.3163 194.692 28.734 194.692 39.86C194.692 48.1428 192.495 55.8028 188.109 62.846C183.717 69.8892 177.079 78.2337 168.178 87.8733L134.989 123.651H196.548V136.442H106.062L156.87 81.5702C165.772 71.9306 172.138 64.3323 175.969 58.7693C179.8 53.2063 181.718 46.8415 181.718 39.675C181.718 32.5084 178.905 26.2053 173.279 20.7657C167.653 15.326 160.67 12.6062 152.323 12.6062C143.977 12.6062 137.055 15.4185 131.553 21.0432C126.05 26.6679 122.867 34.667 122.003 45.0468H122.009Z"
                  fill="#CBCBCB"
                />
              </svg>
            </div>
            <div>
              <div>{{ classifyList[1].name }}</div>
              <div v-html="classifyList[1].description"></div>
              <div>
                視光師會先為客人進行視力檢查，再就著客人的個人生活模式、用眼習慣及視光數據等為客人訂製合適的鏡片。
              </div>
            </div>
            <div>
              <img :src="classifyList[1].img" :alt="classifyList[1].name" />
            </div>
          </div>
          <div class="classify-list-item classify-list-item-three">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="197"
                height="140"
                viewBox="0 0 197 140"
                fill="none"
              >
                <path
                  d="M44.7073 139.915C30.3645 139.915 19.3345 134.013 11.611 122.208C3.88129 110.41 0.0195312 93.0118 0.0195312 70.0259C0.0195312 47.0399 3.88129 29.6478 11.611 17.8434C19.3345 6.04512 30.309 0.136719 44.5223 0.136719C58.7355 0.136719 70.0185 6.16228 78.3651 18.2134C86.7116 30.2645 90.8818 47.5333 90.8818 70.0259C90.8818 92.5184 86.6808 109.787 78.2725 121.838C69.8643 133.889 58.68 139.915 44.7135 139.915H44.7073ZM45.0775 12.7429C34.8123 12.7429 26.8421 17.6892 21.1605 27.5755C15.4727 37.4619 12.6288 51.7395 12.6288 70.3959C12.6288 108.708 23.443 127.864 45.0775 127.864C55.5832 127.864 63.7755 122.831 69.6483 112.754C75.5212 102.682 78.4576 88.4418 78.4576 70.0259C78.4576 51.61 75.4286 37.4619 69.3707 27.5755C63.3128 17.6892 55.213 12.7429 45.0775 12.7429Z"
                  fill="#CBCBCB"
                />
                <path
                  d="M124.99 34.2487H111.456C113.929 23.2522 118.655 14.8152 125.638 8.94381C132.621 3.07243 141.153 0.136719 151.227 0.136719C161.301 0.136719 170.079 3.47328 177.556 10.1464C185.033 16.8196 188.777 24.9174 188.777 34.4337C188.777 45.9298 183.089 55.0082 171.72 61.6814C179.505 64.8946 185.532 69.6867 189.801 76.0453C194.064 82.4101 196.198 89.3607 196.198 96.8973C196.198 108.64 191.905 118.742 183.311 127.204C174.718 135.672 163.873 139.903 150.77 139.903C139.148 139.903 129.568 136.597 122.029 129.985C114.485 123.374 109.482 113.704 107.008 100.974H119.987C122.331 109.75 125.953 116.269 130.832 120.531C135.712 124.793 142.609 126.926 151.504 126.926C160.4 126.926 167.883 124.083 173.941 118.397C179.999 112.717 183.028 105.667 183.028 97.2612C183.028 88.855 179.69 82.0893 173.015 76.9642C166.341 71.8391 156.637 69.1501 143.904 68.8972V56.6611C153.053 56.6611 160.499 54.558 166.248 50.358C171.998 46.158 174.872 40.9342 174.872 34.6928C174.872 28.4513 172.553 23.2645 167.92 19.12C163.287 14.9817 157.692 12.9095 151.14 12.9095C144.589 12.9095 139.302 14.6733 135.286 18.1949C131.27 21.7165 127.84 27.0637 124.996 34.2302L124.99 34.2487Z"
                  fill="#CBCBCB"
                />
              </svg>
            </div>
            <div>
              <div>{{ classifyList[2].name }}</div>
              <div v-html="classifyList[2].description"></div>
              <div>
                視光師會先為客人進行視力檢查，再就著客人的個人生活模式、用眼習慣及視光數據等為客人訂製合適的鏡片。
              </div>
            </div>
            <div>
              <img :src="classifyList[2].img" :alt="classifyList[2].name" />
            </div>
          </div>
          <div class="classify-list-item classify-list-item-four">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="199"
                height="140"
                viewBox="0 0 199 140"
                fill="none"
              >
                <path
                  d="M45.4729 140.001C31.1302 140.001 20.1001 134.099 12.3766 122.294C4.64691 110.496 0.785156 93.0977 0.785156 70.1118C0.785156 47.1258 4.64691 29.7338 12.3766 17.9293C20.1001 6.13105 31.0746 0.222656 45.2879 0.222656C59.5011 0.222656 70.7841 6.24822 79.1307 18.2994C87.4773 30.3505 91.6475 47.6192 91.6475 70.1118C91.6475 92.6043 87.4464 109.873 79.0381 121.924C70.6299 133.975 59.4456 140.001 45.4791 140.001H45.4729ZM45.8431 12.8289C35.578 12.8289 27.6077 17.7751 21.9261 27.6615C16.2383 37.5479 13.3945 51.8255 13.3945 70.4819C13.3945 108.794 24.2086 127.95 45.8431 127.95C56.3488 127.95 64.5411 122.917 70.414 112.84C76.2868 102.768 79.2232 88.5277 79.2232 70.1118C79.2232 51.6959 76.1943 37.5479 70.1364 27.6615C64.0785 17.7751 55.9787 12.8289 45.8431 12.8289Z"
                  fill="#CBCBCB"
                />
                <path
                  d="M180.276 0.222656H182.873V92.9128H199.005V105.704H182.873V136.664H169.709V105.704H105.922L180.276 0.222656ZM169.709 92.9128V37.4862L130.4 92.9128H169.709Z"
                  fill="#CBCBCB"
                />
              </svg>
            </div>
            <div>
              <div>{{ classifyList[3].name }}</div>
              <div v-html="classifyList[3].description"></div>
              <div>
                視光師會先為客人進行視力檢查，再就著客人的個人生活模式、用眼習慣及視光數據等為客人訂製合適的鏡片。
              </div>
            </div>
            <div>
              <img :src="classifyList[3].img" :alt="classifyList[3].name" />
            </div>
          </div>
        </div>
        <div>
          <div @click="btnClassify(0)" class="classify-btn btn-active">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="21"
                viewBox="0 0 23 21"
                fill="none"
              >
                <path
                  d="M6.31224 20.2371C4.31795 20.2371 2.78427 19.4162 1.71036 17.7745C0.63559 16.1336 0.0986328 13.7139 0.0986328 10.517C0.0986328 7.32013 0.63559 4.90125 1.71036 3.2595C2.78427 1.61861 4.31023 0.796875 6.2865 0.796875C8.26278 0.796875 9.83162 1.6349 10.9922 3.31096C12.1527 4.98702 12.7326 7.38875 12.7326 10.517C12.7326 13.6452 12.1484 16.047 10.9793 17.723C9.81017 19.3991 8.25506 20.2371 6.31309 20.2371H6.31224ZM6.3637 2.55013C4.93639 2.55013 3.82817 3.23806 3.03817 4.61304C2.24732 5.98803 1.85189 7.97374 1.85189 10.5685C1.85189 15.8969 3.35554 18.5611 6.3637 18.5611C7.82446 18.5611 8.96357 17.8611 9.78015 16.4595C10.5967 15.0588 11.005 13.0783 11.005 10.517C11.005 7.95573 10.5839 5.98803 9.74155 4.61304C8.89923 3.23806 7.773 2.55013 6.3637 2.55013Z"
                  fill="white"
                />
                <path
                  d="M18.8415 1.26172H22.4767V19.773H20.6462V3.06644H17.7324L18.8406 1.26172H18.8415Z"
                  fill="white"
                />
              </svg>
            </div>
            <div>一般</div>
          </div>
          <div @click="btnClassify(1)" class="classify-btn">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="21"
                viewBox="0 0 28 21"
                fill="none"
              >
                <g clip-path="url(#clip0_4918_10271)">
                  <path
                    d="M6.19442 20.2371C4.22666 20.2371 2.71339 19.4162 1.65376 17.7745C0.59329 16.1336 0.0634766 13.7139 0.0634766 10.517C0.0634766 7.32013 0.59329 4.90039 1.65376 3.2595C2.71339 1.61775 4.2182 0.796875 6.16903 0.796875C8.11986 0.796875 9.66699 1.6349 10.8121 3.31096C11.9572 4.98702 12.5293 7.38875 12.5293 10.517C12.5293 13.6452 11.953 16.047 10.7994 17.723C9.64583 19.3991 8.1114 20.2371 6.19527 20.2371H6.19442ZM6.2452 2.55013C4.83688 2.55013 3.7434 3.23806 2.96391 4.61304C2.18358 5.98803 1.79341 7.97374 1.79341 10.5685C1.79341 15.8969 3.27706 18.5611 6.2452 18.5611C7.68653 18.5611 8.81048 17.8611 9.61621 16.4595C10.4219 15.0588 10.8248 13.0783 10.8248 10.517C10.8248 7.95573 10.4092 5.98803 9.57812 4.61304C8.74701 3.23806 7.63575 2.55013 6.2452 2.55013Z"
                    fill="#00A6CE"
                  />
                  <path
                    d="M16.8021 7.06194H15.0467C15.1314 5.17144 15.7501 3.65493 16.9036 2.51153C18.0564 1.36814 19.4511 0.796875 21.088 0.796875C22.7248 0.796875 24.0807 1.33469 25.1581 2.4086C26.2346 3.48337 26.7737 4.79317 26.7737 6.34057C26.7737 7.49254 26.4724 8.55787 25.8707 9.53743C25.2681 10.517 24.3574 11.6775 23.1361 13.0182L18.5828 17.9941H27.0285V19.7731H14.6143L21.5848 12.1416C22.8061 10.8009 23.6795 9.74415 24.2051 8.97045C24.7307 8.19676 24.9939 7.31155 24.9939 6.31483C24.9939 5.31812 24.6079 4.44149 23.8361 3.68495C23.0642 2.9284 22.1061 2.55013 20.961 2.55013C19.8159 2.55013 18.8663 2.94127 18.1114 3.72355C17.3564 4.50582 16.9197 5.61833 16.8012 7.06194H16.8021Z"
                    fill="#00A6CE"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_4918_10271">
                    <rect
                      width="26.9655"
                      height="19.4402"
                      fill="white"
                      transform="translate(0.0634766 0.796875)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div>戶外變色</div>
          </div>
          <div @click="btnClassify(2)" class="classify-btn">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="27"
                height="21"
                viewBox="0 0 27 21"
                fill="none"
              >
                <g clip-path="url(#clip0_4918_10283)">
                  <path
                    d="M6.1774 20.2371C4.25177 20.2371 2.77091 19.4162 1.73397 17.7745C0.696203 16.1336 0.177734 13.7139 0.177734 10.517C0.177734 7.32013 0.696203 4.90039 1.73397 3.2595C2.77091 1.61775 4.24349 0.796875 6.15255 0.796875C8.06161 0.796875 9.5756 1.6349 10.6962 3.31096C11.8168 4.98702 12.3767 7.38875 12.3767 10.517C12.3767 13.6452 11.8126 16.047 10.6838 17.723C9.5549 19.3991 8.05333 20.2371 6.17822 20.2371H6.1774ZM6.22709 2.55013C4.84892 2.55013 3.77886 3.23806 3.01606 4.61304C2.25244 5.98803 1.87063 7.97374 1.87063 10.5685C1.87063 15.8969 3.3225 18.5611 6.22709 18.5611C7.63756 18.5611 8.73744 17.8611 9.52591 16.4595C10.3144 15.0588 10.7086 13.0783 10.7086 10.517C10.7086 7.95573 10.302 5.98803 9.48864 4.61304C8.67532 3.23806 7.58786 2.55013 6.22709 2.55013Z"
                    fill="#00A6CE"
                  />
                  <path
                    d="M16.9563 5.54114H15.1391C15.4713 4.01175 16.1057 2.83834 17.0432 2.02175C17.9808 1.20517 19.1262 0.796875 20.4787 0.796875C21.8312 0.796875 23.0098 1.26092 24.0136 2.18902C25.0174 3.11711 25.5201 4.24335 25.5201 5.56687C25.5201 7.16573 24.7565 8.42835 23.2301 9.35645C24.2753 9.80334 25.0845 10.4698 25.6576 11.3542C26.2299 12.2394 26.5165 13.2061 26.5165 14.2542C26.5165 15.8874 25.94 17.2924 24.7863 18.4693C23.6326 19.647 22.1766 20.2354 20.4174 20.2354C18.857 20.2354 17.5708 19.7756 16.5587 18.8561C15.5458 17.9366 14.8741 16.5916 14.542 14.8212H16.2846C16.5993 16.0418 17.0855 16.9485 17.7406 17.5412C18.3957 18.1339 19.3217 18.4307 20.516 18.4307C21.7103 18.4307 22.7149 18.0352 23.5282 17.2444C24.3416 16.4544 24.7482 15.474 24.7482 14.3049C24.7482 13.1357 24.3001 12.1948 23.404 11.482C22.5079 10.7692 21.2051 10.3952 19.4956 10.36V8.65823C20.7239 8.65823 21.7235 8.36574 22.4954 7.7816C23.2673 7.19747 23.6533 6.47095 23.6533 5.6029C23.6533 4.73484 23.3419 4.01347 22.7199 3.43706C22.0979 2.8615 21.3467 2.57329 20.4671 2.57329C19.5875 2.57329 18.8778 2.81861 18.3386 3.30839C17.7994 3.79817 17.3389 4.54185 16.9571 5.53856L16.9563 5.54114Z"
                    fill="#00A6CE"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_4918_10283">
                    <rect
                      width="26.3384"
                      height="19.4402"
                      fill="white"
                      transform="translate(0.177734 0.796875)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div>辦公室</div>
          </div>
          <div @click="btnClassify(3)" class="classify-btn">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="29"
                height="21"
                viewBox="0 0 29 21"
                fill="none"
              >
                <g clip-path="url(#clip0_4918_10256)">
                  <path
                    d="M6.92567 20.2371C4.88369 20.2371 3.31334 19.4162 2.21375 17.7745C1.11327 16.1336 0.563477 13.7139 0.563477 10.517C0.563477 7.32013 1.11327 4.90039 2.21375 3.2595C3.31334 1.61775 4.8749 0.796875 6.89932 0.796875C8.92373 0.796875 10.5292 1.6349 11.7175 3.31096C12.9058 4.98702 13.4995 7.38875 13.4995 10.517C13.4995 13.6452 12.9014 16.047 11.7043 17.723C10.5073 19.3991 8.91495 20.2371 6.92654 20.2371H6.92567ZM6.97836 2.55013C5.51692 2.55013 4.38219 3.23806 3.57331 4.61304C2.76354 5.98803 2.35866 7.97374 2.35866 10.5685C2.35866 15.8969 3.89827 18.5611 6.97836 18.5611C8.47406 18.5611 9.6404 17.8611 10.4765 16.4595C11.3126 15.0588 11.7307 13.0783 11.7307 10.517C11.7307 7.95573 11.2994 5.98803 10.437 4.61304C9.57453 3.23806 8.42136 2.55013 6.97836 2.55013Z"
                    fill="#00A6CE"
                  />
                  <path
                    d="M26.117 0.796875H26.4868V13.6881H28.7835V15.4671H26.4868V19.7731H24.6126V15.4671H15.5312L26.117 0.796875ZM24.6126 13.6881V5.97945L19.0162 13.6881H24.6126Z"
                    fill="#00A6CE"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_4918_10256">
                    <rect
                      width="28.2197"
                      height="19.4402"
                      fill="white"
                      transform="translate(0.563477 0.796875)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div>個人化</div>
          </div>
        </div>
        <div class="classify-video">
          <iframe
            src="https://www.youtube.com/embed/neQcqi69dzg?si=ZjZhsuufRjcD-tHn"
            width="100%"
            height="100%"
            frameborder="0"
          ></iframe>
        </div>
      </div>
      <div class="contrast">
        <PublicV2PageTitle :title="'漸進鏡片對比'" />
        <div>
          <div>
            <div>視光產品</div>
            <div>適合人士</div>
            <div>優點</div>
            <div>達致效果</div>
          </div>
          <div>
            <div v-if="isPc">一般漸進</div>
            <div v-else>一般</div>
            <div>
              <span>大多數老花人士</span>
            </div>
            <div>
              <span>價錢實惠可看清遠、中、近距離的物件</span>
            </div>
            <div>
              <span>對鏡片要求較高的人士</span>
            </div>
          </div>
          <div>
            <div v-if="isPc">辦公室漸進</div>
            <div v-else>辦公室</div>
            <div>
              <span>需要長時間使用電腦和處理文書工作的人士</span>
            </div>
            <div>
              <span>專門為觀看中、近距離物件而設增加視覺舒適度</span>
            </div>
            <div>
              <span>避免因長期抬頭觀看而引起的眼睛及頸部不適</span>
            </div>
          </div>
          <div>
            <div v-if="isPc">戶外變色漸進</div>
            <div v-else>戶外變色</div>
            <div>
              <span>熱愛戶外運動人士</span>
            </div>
            <div>
              <span
                >更著重於觀看遠景物鏡片兩旁的「模糊區」較細，減少影像扭曲情況</span
              >
            </div>
            <div>
              <span>遠距離景觀視覺較自然</span>
            </div>
          </div>
          <div>
            <div v-if="isPc">個人化漸進</div>
            <div v-else>個人化</div>
            <div>
              <span>對鏡片要求較高的人士</span>
            </div>
            <div>
              <span>個性化訂製能同時考慮到不同的視力需要</span>
            </div>
            <div>
              <span>最能配合客人的實際需要</span>
            </div>
          </div>
        </div>
        <div v-if="!isPc">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="27"
            height="27"
            viewBox="0 0 27 27"
            fill="none"
          >
            <path
              d="M11.3059 7.76195C11.1371 7.76195 10.9684 7.82945 10.8334 7.96446C10.5634 8.23446 10.5634 8.65634 10.8334 8.92634L15.8959 13.9889C16.1659 14.2589 16.5878 14.2589 16.8578 13.9889C17.1278 13.7189 17.1278 13.297 16.8578 13.027L11.7952 7.96446C11.6434 7.82945 11.4746 7.76195 11.3059 7.76195Z"
              fill="#00A6CE"
            />
            <path
              d="M16.3684 12.8245C16.1997 12.8245 16.0309 12.892 15.8959 13.027L10.8334 18.0895C10.5634 18.3595 10.5634 18.7814 10.8334 19.0514C11.1034 19.3214 11.5252 19.3214 11.7952 19.0514L16.8578 13.9888C17.1278 13.7188 17.1278 13.297 16.8578 13.027C16.7059 12.892 16.5372 12.8245 16.3684 12.8245Z"
              fill="#00A6CE"
            />
            <path
              d="M13.5002 -0.000320435C6.0582 -0.000320435 0 6.05788 0 13.4998C0 20.9418 6.0582 27 13.5002 27C20.9421 27 27.0003 20.9418 27.0003 13.4998C27.0003 6.05788 20.9421 -0.000320435 13.5002 -0.000320435ZM13.5002 25.65C6.80071 25.65 1.35002 20.1993 1.35002 13.4998C1.35002 6.80038 6.80071 1.3497 13.5002 1.3497C20.1996 1.3497 25.6503 6.80038 25.6503 13.4998C25.6503 20.1993 20.1996 25.65 13.5002 25.65Z"
              fill="#00A6CE"
            />
          </svg>
        </div>
      </div>
      <div class="brand">
        <PublicV2PageTitle :title="'常見鏡片品牌'" />
        <div v-if="isPc">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="82"
              height="82"
              viewBox="0 0 82 82"
              fill="none"
            >
              <g clip-path="url(#clip0_2534_31218)">
                <path
                  d="M67.7212 53.7096C59.5928 50.0581 50.5497 48.0309 41.0491 48.0309C31.5485 48.0309 22.5184 50.0581 14.377 53.7096V0.677734H67.7212V53.7096Z"
                  fill="#004097"
                />
                <path
                  d="M20.7049 16.8563C18.1959 16.8563 17.9998 19.3773 17.9998 19.3773H16.7976V15.6348H26.1282C26.1282 15.6348 26.2066 18.5196 23.4362 21.5994C23.4362 21.5994 20.8095 24.6402 20.7442 25.9657H22.2601C24.4294 25.9657 24.6515 23.4447 24.6515 23.4447H25.9061V27.2002H16.3663C16.3663 27.2002 16.0135 24.3543 19.3328 20.9107C19.3328 20.9107 21.3714 18.6496 21.8419 16.8563H20.718H20.7049Z"
                  fill="white"
                />
                <path
                  d="M44.4781 27.1885V25.967H44.1906C43.681 25.967 43.2628 25.5512 43.2628 25.0444V17.8063C43.2628 17.2995 43.681 16.8836 44.1906 16.8836H44.4781V15.6621H38.2969V16.8836H38.5844C39.1071 16.8836 39.5253 17.2995 39.5253 17.8063V25.0444C39.5253 25.5512 39.1071 25.967 38.5844 25.967H38.2969V27.1885H44.4781Z"
                  fill="white"
                />
                <path
                  d="M37.0181 27.2034V23.4479H35.7635C35.7635 23.4479 35.5283 25.9689 33.359 25.9689H32.1044V22.0315H32.5488C33.0715 22.0315 33.4897 22.4473 33.4897 22.9671V23.4349H34.7181V19.3935H33.4897V19.8613C33.4897 20.3811 33.0715 20.7969 32.5488 20.7969H32.1044V16.8595H33.359C35.5283 16.8595 35.7635 19.3805 35.7635 19.3805H37.0181V15.625H27.1777V16.8595H27.4652C27.9749 16.8595 28.3931 17.2753 28.3931 17.7821V25.0203C28.3931 25.5271 27.9749 25.9429 27.4652 25.9429H27.1777V27.1644H37.0181V27.2034Z"
                  fill="white"
                />
                <path
                  d="M50.9829 16.8563C53.492 16.8563 53.688 19.3773 53.688 19.3773H54.8903V15.6348H45.9647C45.9647 15.6348 44.5534 17.467 48.2386 21.5994C48.2386 21.5994 50.8522 24.6402 50.9176 25.9657H49.4147C47.2454 25.9657 47.0102 23.4447 47.0102 23.4447H45.7556V27.2002H54.7465C54.7465 27.2002 56.3801 25.4459 52.3289 20.9107C52.3289 20.9107 50.2119 18.7405 49.8198 16.8563H50.9568H50.9829Z"
                  fill="white"
                />
                <path
                  d="M61.4113 16.8563C63.9073 16.8563 64.1164 19.3773 64.1164 19.3773H65.3186V15.6348H56.4061C56.4061 15.6348 54.9948 17.467 58.68 21.5994C58.68 21.5994 61.2936 24.6402 61.359 25.9657H59.8561C57.6868 25.9657 57.4516 23.4447 57.4516 23.4447H56.2101V27.2002H65.201C65.201 27.2002 66.8345 25.4459 62.7834 20.9107C62.7834 20.9107 60.6664 18.7405 60.2743 16.8563H61.4113Z"
                  fill="white"
                />
                <path
                  d="M1.0114 77.1006C1.3381 77.2696 1.65174 77.3995 1.96538 77.4775C2.27901 77.5555 2.61878 77.5944 2.99776 77.5944C3.19378 77.5944 3.38981 77.5685 3.57276 77.5165C3.75572 77.4645 3.9256 77.3865 4.08242 77.2696C4.22617 77.1526 4.34378 77.0097 4.43526 76.8278C4.52674 76.6458 4.56594 76.4249 4.56594 76.178C4.56594 75.9701 4.52674 75.8012 4.44833 75.6452C4.36992 75.5023 4.26537 75.3593 4.13469 75.2424C4.00401 75.1254 3.86026 75.0215 3.69037 74.9175C3.52049 74.8266 3.33753 74.7356 3.14151 74.6316L2.50117 74.3068C2.30515 74.2028 2.10913 74.0858 1.93924 73.9689C1.75628 73.8389 1.59947 73.696 1.46879 73.5271C1.3381 73.3581 1.23356 73.1632 1.15515 72.9553C1.07674 72.7344 1.03754 72.4875 1.03754 72.1886C1.03754 71.7728 1.11594 71.4089 1.27276 71.11C1.42958 70.8111 1.63867 70.5513 1.90003 70.3693C2.1614 70.1744 2.4489 70.0315 2.7756 69.9405C3.10231 69.8495 3.41594 69.8105 3.74265 69.8105C4.42219 69.8105 5.0364 69.9015 5.6114 70.0834L5.53299 71.214C5.27162 71.097 4.98412 71.0061 4.68356 70.9541C4.38299 70.9021 4.09549 70.8761 3.80799 70.8761C3.6381 70.8761 3.45515 70.9021 3.28526 70.9411C3.10231 70.9801 2.94549 71.058 2.81481 71.149C2.67106 71.253 2.55344 71.3699 2.47503 71.5389C2.38356 71.6948 2.34435 71.9027 2.34435 72.1366C2.34435 72.3185 2.37049 72.4745 2.43583 72.5914C2.50117 72.7214 2.57958 72.8383 2.68413 72.9423C2.78867 73.0463 2.91935 73.1372 3.05003 73.2152C3.19378 73.2932 3.33753 73.3711 3.48128 73.4491L4.16083 73.774C4.40912 73.8909 4.63128 74.0209 4.84037 74.1508C5.04946 74.2808 5.23242 74.4367 5.38924 74.6186C5.54606 74.8006 5.66367 75.0085 5.75515 75.2424C5.84662 75.4763 5.88583 75.7622 5.88583 76.1C5.88583 76.5419 5.80742 76.9187 5.66367 77.2306C5.51992 77.5555 5.31083 77.8154 5.04947 78.0233C4.7881 78.2312 4.48753 78.3871 4.14776 78.4911C3.80799 78.5951 3.42901 78.647 3.03697 78.647C2.71026 78.647 2.37049 78.621 2.00458 78.5691C1.63867 78.5171 1.27276 78.4261 0.919922 78.3092L0.985263 77.1136L1.0114 77.1006Z"
                  fill="#231916"
                />
                <path
                  d="M8.48697 75.5689C8.48697 75.8678 8.52617 76.1537 8.61765 76.4136C8.70913 76.6735 8.83981 76.9074 9.00969 77.1023C9.17958 77.2972 9.40174 77.4532 9.6631 77.5701C9.92447 77.6871 10.225 77.7391 10.5517 77.7391C10.8262 77.7391 11.1137 77.7131 11.4142 77.6481C11.7017 77.5831 11.9762 77.4792 12.2245 77.3492L12.3029 78.2978C12.0154 78.4148 11.7148 78.5057 11.3881 78.5577C11.0614 78.6097 10.7347 78.6357 10.3949 78.6357C9.87219 78.6357 9.41481 78.5577 9.02276 78.3888C8.63072 78.2199 8.29094 77.999 8.02958 77.7001C7.76822 77.4012 7.55913 77.0503 7.42844 76.6345C7.29776 76.2187 7.23242 75.7638 7.23242 75.257C7.23242 74.8152 7.29776 74.3994 7.42844 73.9965C7.55913 73.5937 7.74208 73.2428 7.97731 72.944C8.2256 72.6451 8.5131 72.3982 8.86594 72.2162C9.21878 72.0343 9.61083 71.9434 10.0551 71.9434C10.5387 71.9434 10.9438 72.0213 11.2705 72.1903C11.5972 72.3592 11.8586 72.5801 12.0676 72.879C12.2637 73.1649 12.4074 73.5157 12.4989 73.9056C12.5904 74.2954 12.6296 74.7243 12.6296 75.1791V75.5689H8.50004H8.48697ZM11.4404 74.7762C11.4404 74.5423 11.4142 74.2954 11.375 74.0615C11.3358 73.8276 11.2574 73.6197 11.1659 73.4378C11.0614 73.2558 10.9307 73.1129 10.7478 72.9959C10.5648 72.879 10.3426 72.827 10.0682 72.827C9.80685 72.827 9.57163 72.879 9.38867 72.9959C9.19265 73.1129 9.03583 73.2558 8.90515 73.4508C8.77447 73.6327 8.66992 73.8406 8.60458 74.0745C8.53924 74.3084 8.50003 74.5423 8.48697 74.7632H11.4404V74.7762Z"
                  fill="#231916"
                />
                <path
                  d="M15.0475 75.5689C15.0475 75.8678 15.0867 76.1537 15.1782 76.4136C15.2697 76.6735 15.4004 76.9074 15.5702 77.1023C15.7401 77.2972 15.9623 77.4532 16.2236 77.5701C16.485 77.6871 16.7856 77.7391 17.1123 77.7391C17.3867 77.7391 17.6742 77.7131 17.9748 77.6481C18.2623 77.5831 18.5367 77.4792 18.785 77.3492L18.8634 78.2978C18.5759 78.4148 18.2754 78.5057 17.9486 78.5577C17.635 78.6097 17.2952 78.6357 16.9555 78.6357C16.4327 78.6357 15.9884 78.5577 15.5833 78.3888C15.1913 78.2199 14.8515 77.999 14.5901 77.7001C14.3288 77.4012 14.1197 77.0503 13.989 76.6345C13.8583 76.2187 13.793 75.7638 13.793 75.257C13.793 74.8152 13.8583 74.3994 13.989 73.9965C14.1197 73.5937 14.3026 73.2428 14.5379 72.944C14.7731 72.6451 15.0736 72.3982 15.4265 72.2162C15.7793 72.0343 16.1714 71.9434 16.6157 71.9434C17.0992 71.9434 17.5043 72.0213 17.831 72.1903C18.1577 72.3592 18.4191 72.5801 18.6282 72.879C18.8242 73.1649 18.968 73.5157 19.0594 73.9056C19.1509 74.2954 19.1901 74.7243 19.1901 75.1791V75.5689H15.0606H15.0475ZM17.9879 74.7762C17.9879 74.5423 17.9617 74.2954 17.9225 74.0615C17.8833 73.8276 17.8049 73.6197 17.7134 73.4378C17.6089 73.2558 17.4651 73.1129 17.2952 72.9959C17.1123 72.879 16.8901 72.827 16.6157 72.827C16.3543 72.827 16.1191 72.879 15.9361 72.9959C15.7401 73.1129 15.5833 73.2558 15.4526 73.4508C15.3219 73.6327 15.2174 73.8406 15.1521 74.0745C15.0867 74.3084 15.0475 74.5423 15.0344 74.7632H17.9879V74.7762Z"
                  fill="#231916"
                />
                <path
                  d="M20.6895 69.5098H21.9179V70.7573H20.6895V69.5098ZM20.6895 72.0697H21.9179V78.4892H20.6895V72.0697Z"
                  fill="#231916"
                />
                <path
                  d="M23.7866 78.5045V73.5664C23.7866 73.3195 23.7866 73.0726 23.7866 72.8257C23.7866 72.5788 23.7605 72.3319 23.7344 72.085H24.8974L24.9366 73.1896C25.3679 72.3709 26.0344 71.9551 26.9361 71.9551C27.3151 71.9551 27.6418 72.0201 27.9031 72.137C28.1645 72.254 28.3866 72.4229 28.5435 72.6438C28.7003 72.8647 28.8179 73.1246 28.8963 73.4365C28.9747 73.7484 29.0139 74.0862 29.0139 74.4501V78.5045H27.7724V74.723C27.7724 74.5021 27.7594 74.2812 27.7332 74.0732C27.7071 73.8653 27.6418 73.6704 27.5634 73.5145C27.4719 73.3585 27.3543 73.2156 27.1974 73.1246C27.0406 73.0337 26.8315 72.9817 26.5571 72.9817C26.2696 72.9817 26.0344 73.0466 25.8383 73.1636C25.6423 73.2806 25.4855 73.4365 25.381 73.6314C25.2634 73.8263 25.1849 74.0472 25.1327 74.2812C25.0804 74.5281 25.0543 74.775 25.0543 75.0349V78.5305H23.8259L23.7866 78.5045Z"
                  fill="#231916"
                />
                <path
                  d="M31.0809 79.9742C31.3553 80.1171 31.6428 80.2341 31.9564 80.312C32.2701 80.39 32.5968 80.429 32.9104 80.429C33.2632 80.429 33.5638 80.377 33.8252 80.2601C34.0735 80.1431 34.2826 79.9872 34.4524 79.7922C34.6223 79.5843 34.7399 79.3504 34.8053 79.0645C34.8837 78.7786 34.9098 78.4668 34.9098 78.1289V77.3752C34.7138 77.7391 34.4394 78.0119 34.0996 78.2069C33.7598 78.4018 33.3939 78.4928 33.0019 78.4928C32.5445 78.4928 32.1655 78.4018 31.8519 78.2069C31.5382 78.0249 31.2769 77.778 31.0809 77.4662C30.8848 77.1673 30.728 76.8164 30.6365 76.4266C30.5451 76.0367 30.5059 75.6469 30.5059 75.244C30.5059 74.8152 30.5581 74.3994 30.6365 74.0095C30.728 73.6067 30.8718 73.2558 31.0809 72.957C31.2899 72.6451 31.5513 72.3982 31.8649 72.2162C32.1786 72.0343 32.5706 71.9434 33.028 71.9434C33.4593 71.9434 33.8382 72.0343 34.1649 72.2292C34.4917 72.4242 34.7661 72.723 34.9621 73.1389V72.0733H36.1513V78.1289C36.1513 79.1815 35.903 79.9872 35.3934 80.5589C34.8968 81.1177 34.1257 81.4036 33.0934 81.4036C32.7405 81.4036 32.3877 81.3776 32.0348 81.3126C31.682 81.2477 31.3422 81.1697 30.9894 81.0527L31.0678 79.9612L31.0809 79.9742ZM32.1524 76.7774C32.2701 76.9854 32.4269 77.1673 32.6229 77.3102C32.8189 77.4532 33.0803 77.5181 33.3939 77.5181C33.6945 77.5181 33.9428 77.4532 34.1388 77.3102C34.3348 77.1673 34.5047 76.9854 34.6223 76.7774C34.7399 76.5565 34.8314 76.3226 34.8837 76.0627C34.936 75.8028 34.9621 75.5429 34.9621 75.296C34.9621 75.0491 34.936 74.7762 34.8837 74.5033C34.8314 74.2305 34.753 73.9835 34.6223 73.7496C34.5047 73.5157 34.3348 73.3338 34.1388 73.1909C33.9428 73.0479 33.6945 72.97 33.3939 72.97C33.0672 72.97 32.8059 73.0349 32.6098 73.1779C32.4138 73.3208 32.2439 73.5027 32.1394 73.7366C32.0218 73.9576 31.9434 74.2175 31.9042 74.4903C31.8649 74.7632 31.8388 75.0361 31.8388 75.309C31.8388 75.5559 31.8649 75.8158 31.9042 76.0757C31.9434 76.3356 32.0348 76.5825 32.1394 76.8034"
                  fill="#231916"
                />
                <path
                  d="M41.9277 78.5043V69.252H43.1561V73.1504C43.313 72.7606 43.5613 72.4747 43.9141 72.2668C44.2669 72.0588 44.6459 71.9549 45.038 71.9549C45.5084 71.9549 45.9005 72.0458 46.2272 72.2278C46.5539 72.4097 46.8022 72.6566 47.0113 72.9685C47.2073 73.2804 47.351 73.6312 47.4425 74.0211C47.534 74.4239 47.5732 74.8267 47.5732 75.2556C47.5732 75.6844 47.534 76.1002 47.4425 76.5031C47.351 76.9059 47.2073 77.2698 46.9982 77.5816C46.7891 77.8935 46.5277 78.1534 46.2141 78.3483C45.8874 78.5433 45.4953 78.6342 45.0249 78.6342C44.5936 78.6342 44.2147 78.5303 43.888 78.3353C43.5613 78.1404 43.2868 77.8415 43.0908 77.4257L43.0647 78.4913H41.9277V78.5043ZM43.4567 76.8539C43.5743 77.0878 43.7442 77.2828 43.9402 77.4257C44.1363 77.5816 44.3846 77.6596 44.6851 77.6596C44.9988 77.6596 45.2601 77.5816 45.4561 77.4387C45.6522 77.2958 45.822 77.1008 45.9266 76.8669C46.0442 76.633 46.1226 76.3731 46.1618 76.1002C46.201 75.8143 46.2272 75.5414 46.2272 75.2816C46.2272 75.0217 46.201 74.7488 46.1618 74.4759C46.1226 74.203 46.0442 73.9561 45.9266 73.7222C45.809 73.5013 45.6522 73.3063 45.4561 73.1764C45.2601 73.0334 44.9988 72.9685 44.6851 72.9685C44.3846 72.9685 44.1363 73.0464 43.9402 73.1894C43.7442 73.3323 43.5743 73.5143 43.4567 73.7482C43.326 73.9691 43.2476 74.229 43.1953 74.5019C43.1431 74.7748 43.1169 75.0346 43.1169 75.2945C43.1169 75.5544 43.1431 75.8143 43.1953 76.1002C43.2476 76.3731 43.326 76.633 43.4567 76.8799"
                  fill="#231916"
                />
                <path
                  d="M50.0573 75.5689C50.0573 75.8678 50.0965 76.1537 50.188 76.4136C50.2794 76.6735 50.4101 76.9074 50.58 77.1023C50.7499 77.2972 50.9721 77.4532 51.2334 77.5701C51.4948 77.6871 51.7953 77.7391 52.1221 77.7391C52.3965 77.7391 52.684 77.7131 52.9846 77.6481C53.2721 77.5831 53.5465 77.4792 53.7948 77.3492L53.8732 78.2978C53.5857 78.4148 53.2851 78.5057 52.9584 78.5577C52.6448 78.6097 52.305 78.6357 51.9652 78.6357C51.4425 78.6357 50.9851 78.5577 50.5931 78.3888C50.201 78.2199 49.8613 77.999 49.5999 77.7001C49.3385 77.4012 49.1294 77.0503 48.9988 76.6345C48.8681 76.2187 48.8027 75.7638 48.8027 75.257C48.8027 74.8152 48.8681 74.3994 48.9988 73.9965C49.1294 73.5937 49.3124 73.2428 49.5476 72.944C49.7959 72.6451 50.0834 72.3982 50.4363 72.2162C50.7891 72.0343 51.1811 71.9434 51.6255 71.9434C52.109 71.9434 52.5141 72.0213 52.8408 72.1903C53.1675 72.3592 53.4289 72.5801 53.638 72.879C53.834 73.1649 53.9777 73.5157 54.0692 73.9056C54.1607 74.2954 54.1999 74.7243 54.1999 75.1791V75.5689H50.0703H50.0573ZM52.9976 74.7762C52.9976 74.5423 52.9715 74.2954 52.9323 74.0615C52.8931 73.8276 52.8147 73.6197 52.7232 73.4378C52.6186 73.2558 52.488 73.1129 52.305 72.9959C52.1351 72.879 51.8999 72.827 51.6255 72.827C51.3641 72.827 51.1289 72.879 50.9459 72.9959C50.7499 73.1129 50.5931 73.2558 50.4624 73.4508C50.3317 73.6327 50.2272 73.8406 50.1618 74.0745C50.0965 74.3084 50.0573 74.5423 50.0442 74.7632H52.9976V74.7762Z"
                  fill="#231916"
                />
                <path
                  d="M55.1829 80.3331C55.3789 80.398 55.575 80.424 55.7841 80.424C56.0977 80.424 56.3329 80.3201 56.4897 80.0992C56.6466 79.8912 56.7903 79.5664 56.921 79.1246L57.0386 78.7217L54.8301 72.0684H56.1761L57.6789 77.3443L59.1556 72.0684H60.4102L58.0579 79.3455C57.9795 79.5924 57.875 79.8393 57.7704 80.0862C57.6659 80.3331 57.5352 80.554 57.3784 80.7489C57.2216 80.9438 57.0255 81.0998 56.8034 81.2297C56.5812 81.3467 56.3068 81.4116 55.9801 81.4116C55.6403 81.4116 55.3397 81.3857 55.0784 81.3207L55.1568 80.3331H55.1829Z"
                  fill="#231916"
                />
                <path
                  d="M62.7947 78.4005C62.2328 78.1406 61.8015 77.7378 61.501 77.192C61.2135 76.6462 61.0566 76.0095 61.0566 75.2688C61.0566 74.775 61.135 74.3331 61.2788 73.9303C61.4225 73.5275 61.6316 73.1766 61.893 72.8777C62.1544 72.5918 62.4811 72.3579 62.847 72.202C63.226 72.0331 63.6311 71.9551 64.1015 71.9551C64.585 71.9551 65.0163 72.033 65.3953 72.189C65.7743 72.3449 66.0879 72.5658 66.3492 72.8517C66.6106 73.1376 66.8066 73.4885 66.9373 73.8913C67.068 74.3071 67.1333 74.762 67.1333 75.2558C67.1333 75.7496 67.068 76.1914 66.9373 76.6072C66.8066 77.0231 66.6106 77.3739 66.3492 77.6728C66.0879 77.9717 65.7743 78.2056 65.3953 78.3745C65.0163 78.5435 64.585 78.6214 64.1015 78.6214C63.618 78.6214 63.1606 78.5435 62.7947 78.3745M62.7947 76.8801C62.9385 77.101 63.1083 77.283 63.3305 77.4259C63.5396 77.5688 63.801 77.6338 64.1146 77.6338C64.4282 77.6338 64.6765 77.5688 64.8987 77.4259C65.1208 77.283 65.2907 77.101 65.4345 76.8801C65.5652 76.6592 65.6697 76.3993 65.735 76.1134C65.8004 75.8275 65.8265 75.5287 65.8265 75.2298C65.8265 74.9439 65.8004 74.671 65.735 74.3851C65.6828 74.0992 65.5782 73.8523 65.4475 73.6314C65.3169 73.4105 65.1339 73.2286 64.9248 73.0856C64.7157 72.9427 64.4413 72.8777 64.1277 72.8777C63.814 72.8777 63.5527 72.9427 63.3436 73.0856C63.1345 73.2286 62.9515 73.4105 62.8208 73.6314C62.6902 73.8523 62.5856 74.1122 62.5203 74.3851C62.4549 74.658 62.4288 74.9439 62.4288 75.2298C62.4288 75.5157 62.4549 75.8145 62.5203 76.1004C62.5856 76.3863 62.6771 76.6462 62.8078 76.8801"
                  fill="#231916"
                />
                <path
                  d="M68.6675 78.5045V73.5664C68.6675 73.3195 68.6675 73.0726 68.6675 72.8257C68.6675 72.5788 68.6414 72.3319 68.6152 72.085H69.7783L69.8175 73.1896C70.2488 72.3709 70.9152 71.9551 71.8169 71.9551C72.1959 71.9551 72.5226 72.0201 72.784 72.137C73.0453 72.254 73.2675 72.4229 73.4243 72.6438C73.5811 72.8647 73.6988 73.1246 73.7772 73.4365C73.8556 73.7484 73.8948 74.0862 73.8948 74.4501V78.5045H72.6533V74.723C72.6533 74.5021 72.6402 74.2812 72.6141 74.0732C72.588 73.8653 72.5226 73.6704 72.4442 73.5145C72.3527 73.3585 72.2351 73.2156 72.0783 73.1246C71.9215 73.0207 71.7124 72.9817 71.438 72.9817C71.1505 72.9817 70.9152 73.0466 70.7192 73.1636C70.5232 73.2806 70.3794 73.4365 70.2618 73.6314C70.1442 73.8263 70.0658 74.0472 70.0135 74.2812C69.9613 74.5281 69.9351 74.775 69.9351 75.0349V78.5305H68.7067L68.6675 78.5045Z"
                  fill="#231916"
                />
                <path
                  d="M79.967 78.501L79.8886 77.4355C79.7057 77.8513 79.4313 78.1502 79.1045 78.3451C78.7648 78.54 78.3858 78.644 77.9545 78.644C77.4841 78.644 77.092 78.553 76.7653 78.3581C76.4386 78.1632 76.1773 77.9163 75.9812 77.5914C75.7722 77.2795 75.6284 76.9157 75.5369 76.5128C75.4455 76.11 75.4062 75.6942 75.4062 75.2653C75.4062 74.8365 75.4455 74.4207 75.5369 74.0308C75.6284 73.628 75.7722 73.2771 75.9812 72.9782C76.1903 72.6664 76.4517 72.4195 76.7653 72.2375C77.092 72.0556 77.4841 71.9646 77.9545 71.9646C78.3466 71.9646 78.7256 72.0686 79.0653 72.2765C79.4051 72.4844 79.6665 72.7833 79.8233 73.1602V69.2617H81.0517V76.5908C81.0517 76.9547 81.0517 77.2795 81.0648 77.5914C81.0648 77.9033 81.0909 78.2152 81.104 78.514H79.954L79.967 78.501ZM77.0398 76.8637C77.1574 77.0976 77.3142 77.2795 77.5102 77.4355C77.7062 77.5914 77.9676 77.6564 78.2812 77.6564C78.5818 77.6564 78.8301 77.5784 79.0261 77.4225C79.2222 77.2665 79.392 77.0716 79.5097 76.8507C79.6273 76.6168 79.7187 76.3699 79.771 76.084C79.8233 75.8111 79.8494 75.5382 79.8494 75.2783C79.8494 75.0184 79.8233 74.7585 79.771 74.4856C79.7187 74.2127 79.6273 73.9529 79.5097 73.7319C79.392 73.498 79.2222 73.3161 79.0261 73.1732C78.8301 73.0302 78.5818 72.9523 78.2812 72.9523C77.9545 72.9523 77.7062 73.0172 77.5102 73.1602C77.3142 73.3031 77.1574 73.485 77.0398 73.706C76.9222 73.9269 76.8437 74.1868 76.8045 74.4597C76.7653 74.7325 76.7392 75.0054 76.7392 75.2783C76.7392 75.5512 76.7653 75.8111 76.8045 76.097C76.8437 76.3699 76.9352 76.6298 77.0398 76.8637Z"
                  fill="#231916"
                />
              </g>
              <defs>
                <clipPath id="clip0_2534_31218">
                  <rect
                    width="80.1602"
                    height="80.7369"
                    fill="white"
                    transform="translate(0.945312 0.677734)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="96"
              height="23"
              viewBox="0 0 96 23"
              fill="none"
            >
              <g clip-path="url(#clip0_2534_31239)">
                <path
                  d="M52.5177 4.20714C51.8019 3.26544 50.8476 2.46456 49.9017 1.9013C46.5273 -0.131714 41.5083 -0.334135 37.8952 1.31164C37.3328 1.61967 36.7193 1.86609 36.1995 2.25334C33.8817 3.61748 32.186 6.05533 31.5639 8.6428C31.4872 8.86283 31.4702 9.13566 31.3679 9.36448C29.9193 9.25887 28.4963 9.07405 27.0391 8.99484L26.971 8.93323L26.9539 0.642767L26.9369 0.589961L24.3635 0.545957C23.6818 0.545957 23.0086 0.501952 22.3269 0.545957V3.69669L22.3098 8.71321L22.2587 8.75722C20.8698 8.73081 19.4382 8.75722 18.0492 8.82762L14.2999 9.05645C13.746 9.14446 13.2262 9.14446 12.6723 9.24127C12.5445 9.24127 12.3911 9.30287 12.2548 9.24127V4.90241V0.836387L12.2292 0.537156C10.6868 0.501952 9.20415 0.537156 7.67032 0.537156L7.62771 0.58116V9.90134L7.56806 9.96294C5.22472 10.4206 2.91546 10.9838 0.691406 11.7231H7.55102L7.59363 11.7671L7.61067 16.6428V21.6946C7.61067 21.6946 7.61067 21.8002 7.67032 21.7914L12.1695 21.7738L12.2207 21.7562L12.2462 11.7671L12.2888 11.7055L17.2312 11.6791L22.2332 11.7055L22.3013 11.7495V21.589L22.3184 21.7738C23.8607 21.7738 25.386 21.8442 26.9284 21.8442L26.9454 21.809V11.8903L27.0221 11.8111H31.2231L31.2487 11.8375C31.3594 14.3194 32.186 16.5196 33.7283 18.3502C36.7789 21.7562 41.406 22.6099 45.8797 21.8706C48.2741 21.3689 50.5664 20.3392 52.2876 18.3766C54.9207 15.3315 55.3809 10.3766 53.9152 6.61859C53.5488 5.7649 53.1227 4.95522 52.5092 4.20714M47.1578 17.3205C44.7975 18.9311 40.9458 18.8343 38.6281 17.1533C37.4436 16.3084 36.5318 14.9795 36.2506 13.5537C36.0887 13.0081 35.9609 12.4536 35.9609 11.8375C36.0376 11.7495 36.1739 11.8375 36.2592 11.7847L42.9824 11.7495L42.9995 11.7319C42.1729 11.3887 41.2697 11.2127 40.409 10.9662C39.02 10.5526 37.5373 10.3238 36.0887 10.0157C35.995 9.91014 36.1058 9.76052 36.0887 9.62851C36.1143 9.47009 36.1825 9.31167 36.2336 9.13565C36.2251 8.73081 36.4211 8.41398 36.5233 8.04434C37.2732 6.09934 39.0967 4.49757 41.0737 4.06632C42.3178 3.71429 43.826 3.75829 45.0957 4.02232C45.4706 4.10153 45.8285 4.24234 46.1864 4.38316C48.1122 5.05203 49.5182 7.02343 49.8761 9.03004C50.4811 12.172 49.8676 15.5515 47.1664 17.3293"
                  fill="#0056C4"
                />
                <path
                  d="M73.267 5.21906L76.5222 0.836198V0.75699C74.835 0.739388 72.9603 0.75699 71.2049 0.75699C69.2791 3.49408 67.4555 6.23996 65.5127 8.97705C65.3678 9.17067 65.2315 9.38189 65.0355 9.54911C64.4987 8.83624 64.0215 8.05295 63.5102 7.34888L61.3628 4.13654C60.5704 2.97482 59.829 1.7955 58.9854 0.677782C58.5934 0.66018 58.1674 0.695384 57.7924 0.642578H53.6767L53.6426 0.677782C55.7814 3.65249 58.0736 6.592 60.2125 9.52271L62.6836 12.9551V21.536L62.7177 21.7824C64.3368 21.8 65.7428 21.8088 67.3192 21.8352L67.3533 21.7824L67.3789 16.0178V13.1047L69.4751 10.2708L72.3894 6.35438C72.7302 6.01994 72.9432 5.57989 73.2585 5.22786"
                  fill="#0056C4"
                />
                <path
                  d="M92.5497 15.9551L90.266 11.0529L89.6525 9.7504L87.5392 5.30594C86.866 3.80978 86.1247 2.34883 85.4685 0.86147L85.4004 0.755859H81.4891L81.4294 0.799864C81.046 1.72396 80.5858 2.63926 80.1939 3.57215C80.1087 3.75697 80.0916 3.9682 79.9467 4.12661C78.8986 6.48526 77.842 8.83511 76.828 11.2114L74.3312 16.8879C73.8455 18.0409 73.2831 19.141 72.8315 20.3115C72.5503 20.7692 72.3713 21.2796 72.1413 21.7725C72.0816 21.8429 72.1839 21.8429 72.2265 21.8429L76.9302 21.8869L76.9813 21.8429C77.5097 20.5139 78.055 19.2026 78.6089 17.8825C78.8901 17.3192 79.0605 16.6943 79.3673 16.1399L84.7187 16.1223H87.7437C88.5873 18.0233 89.4053 19.9419 90.2234 21.8429L90.2916 21.8869L94.1602 21.8429H95.2254L95.285 21.8253C94.3903 19.8715 93.4615 17.9177 92.5667 15.9639M86.0735 12.5227H80.9352V12.3819C81.7873 10.3313 82.648 8.27185 83.4831 6.20363H83.5342C84.4204 8.28945 85.3151 10.3841 86.1587 12.4963L86.065 12.5227H86.0735Z"
                  fill="#0056C4"
                />
              </g>
              <defs>
                <clipPath id="clip0_2534_31239">
                  <rect
                    width="94.5775"
                    height="21.9143"
                    fill="white"
                    transform="translate(0.691406 0.203125)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="99"
              height="75"
              viewBox="0 0 99 75"
              fill="none"
            >
              <g clip-path="url(#clip0_2534_31245)">
                <path
                  d="M30.5449 39.1031L40.0025 0.351107C40.7645 0.283073 41.5402 0.255859 42.3158 0.255859C54.2229 0.255859 64.3337 7.93006 67.9534 18.6114L57.6521 23.6322C62.3061 27.7143 66.1572 32.6943 68.9332 38.3003L64.6739 40.3821C64.6739 40.3821 64.6467 40.3277 64.6331 40.3005C60.9725 33.0073 55.3115 26.8843 48.3578 22.6798L61.6665 16.1894C58.1148 10.0255 51.7054 5.71216 44.2482 5.07265L35.9609 39.1031H30.5312H30.5449Z"
                  fill="#1D1D1B"
                />
                <path
                  d="M3.63241 51.411H4.54415C5.94578 51.411 6.46288 50.8939 6.46288 49.0978C6.46288 47.3018 5.94578 46.7847 4.54415 46.7847H3.63241V51.411ZM3.63241 59.7111H1.04688V44.6484H4.68023C7.57875 44.6484 9.06202 45.873 9.06202 49.0978C9.06202 51.5198 8.12307 52.4995 7.25215 52.8941L9.44305 59.7111H6.81669L4.97961 53.4656C4.6394 53.5064 4.10869 53.5336 3.64601 53.5336V59.7111H3.63241Z"
                  fill="#1D1D1B"
                />
                <path
                  d="M14.066 55.9954C14.066 57.1248 14.4062 57.669 15.4404 57.669C16.4746 57.669 16.8148 57.1248 16.8148 55.9954V48.362C16.8148 47.2327 16.4882 46.6884 15.4404 46.6884C14.3926 46.6884 14.066 47.2327 14.066 48.362V55.9954ZM11.4805 48.294C11.4805 46.1714 12.7324 44.4297 15.4404 44.4297C18.1484 44.4297 19.4004 46.1577 19.4004 48.294V56.0498C19.4004 58.1725 18.1484 59.9142 15.4404 59.9142C12.7324 59.9142 11.4805 58.1861 11.4805 56.0498V48.294Z"
                  fill="#1D1D1B"
                />
                <path
                  d="M24.5054 57.5884H25.4035C26.7779 57.5884 27.2542 57.0714 27.2542 55.4794V48.8801C27.2542 47.2881 26.7779 46.7711 25.4035 46.7711H24.5054V57.5748V57.5884ZM21.9062 44.6484H25.7437C28.4109 44.6484 29.8398 46.1044 29.8398 49.1931V55.1664C29.8398 58.2552 28.4245 59.7111 25.7437 59.7111H21.9062V44.6484Z"
                  fill="#1D1D1B"
                />
                <path
                  d="M32.3398 59.7111V44.6484H39.2663V46.9072H34.9254V50.7851H38.273V53.0438H34.9254V57.466H39.5657V59.7111H32.3398Z"
                  fill="#1D1D1B"
                />
                <path
                  d="M41.6094 59.7111V44.6484H44.0044L47.1615 53.2615H47.2023V44.6484H49.5429V59.7111H47.2839L43.9908 50.3088H43.95V59.7111H41.6094Z"
                  fill="#1D1D1B"
                />
                <path
                  d="M56.754 48.368C56.6452 47.0753 55.9648 46.6943 55.3796 46.6943C54.5495 46.6943 54.0868 47.2386 54.0868 48.1775C54.0868 50.7491 59.3396 51.9737 59.3396 56.0694C59.3396 58.5594 57.6658 59.9337 55.2435 59.9337C52.8213 59.9337 51.4605 58.0151 51.3652 55.7564L53.8283 55.4026C53.9372 56.9266 54.5359 57.675 55.366 57.675C56.2641 57.675 56.8629 57.1987 56.8629 56.3007C56.8629 53.3208 51.6102 52.518 51.6102 48.2047C51.6102 45.8099 53.0662 44.4492 55.6109 44.4492C57.7202 44.4492 58.9721 45.9732 59.2035 48.0958L56.7404 48.368H56.754Z"
                  fill="#1D1D1B"
                />
                <path
                  d="M62.8125 46.9072H60.3086V44.6484H67.9019V46.9072H65.398V59.7111H62.8125V46.9072Z"
                  fill="#1D1D1B"
                />
                <path
                  d="M72.0094 55.9954C72.0094 57.1248 72.3496 57.669 73.3838 57.669C74.418 57.669 74.7582 57.1248 74.7582 55.9954V48.362C74.7582 47.2327 74.4316 46.6884 73.3838 46.6884C72.336 46.6884 72.0094 47.2327 72.0094 48.362V55.9954ZM69.4238 48.294C69.4238 46.1714 70.6758 44.4297 73.3838 44.4297C76.0918 44.4297 77.3437 46.1577 77.3437 48.294V56.0498C77.3437 58.1725 76.0918 59.9142 73.3838 59.9142C70.6758 59.9142 69.4238 58.1861 69.4238 56.0498V48.294Z"
                  fill="#1D1D1B"
                />
                <path
                  d="M85.0732 49.6879V48.5177C85.0732 47.2523 84.4881 46.708 83.8213 46.708C82.7735 46.708 82.4469 47.2523 82.4469 48.3816V56.015C82.4469 57.1444 82.7871 57.6886 83.8213 57.6886C84.7602 57.6886 85.0732 57.1444 85.0732 56.1647V54.355H87.6587V56.083C87.6587 58.2057 86.4068 59.9474 83.8213 59.9474C81.1133 59.9474 79.8613 58.2193 79.8613 56.083V48.3272C79.8613 46.2046 81.1133 44.4629 83.8213 44.4629C86.5293 44.4629 87.6587 46.3406 87.6587 48.5993V49.7015H85.0732V49.6879Z"
                  fill="#1D1D1B"
                />
                <path
                  d="M90.1738 59.7111V44.6484H92.7594V50.2136H92.8002L95.5082 44.6484H98.0937L95.3041 50.268L98.4475 59.7111H95.8212L93.7119 52.7036H93.6711L92.7594 54.3773V59.7111H90.1738Z"
                  fill="#1D1D1B"
                />
                <path
                  d="M2.67373 72.0689C3.66712 72.0689 4.10257 71.7831 4.10257 71.1436C4.10257 70.4633 3.62629 70.1639 2.76898 70.1639H1.68034V72.0689H2.67373ZM2.55125 69.6061C3.08197 69.6061 3.89845 69.538 3.89845 68.7216C3.89845 67.9596 3.09558 67.9052 2.456 67.9052H1.68034V69.6061H2.55125ZM0.986328 72.6812V67.2793H2.51043C3.96649 67.2793 4.60607 67.7283 4.60607 68.6536C4.60607 69.2115 4.33391 69.6061 3.8032 69.8102C4.59246 70.0959 4.8238 70.5993 4.8238 71.1844C4.8238 72.3954 3.83041 72.6812 2.71455 72.6812H0.986328Z"
                  fill="#6AC0B3"
                />
                <path
                  d="M6.32311 70.3534H8.30989C8.30989 69.673 7.94247 69.224 7.33011 69.224C6.71774 69.224 6.40476 69.7411 6.32311 70.3534ZM7.3165 72.7754C6.26868 72.7754 5.66992 71.9862 5.66992 70.7344C5.66992 69.4826 6.35032 68.6934 7.33011 68.6934C8.37793 68.6934 8.93586 69.4417 8.93586 70.5847C8.93586 70.6391 8.93586 70.7208 8.93586 70.816H6.3095C6.35033 71.6868 6.63609 72.2175 7.37093 72.2175C7.82 72.2175 8.1738 72.027 8.43236 71.5236L8.92225 71.7957C8.54122 72.5033 7.96968 72.7618 7.3165 72.7618"
                  fill="#6AC0B3"
                />
                <path
                  d="M12.9338 71.7685C12.5664 72.4488 12.0493 72.7754 11.328 72.7754C10.2802 72.7754 9.64062 71.9998 9.64062 70.748C9.64062 69.4962 10.2938 68.6934 11.3416 68.6934C12.0629 68.6934 12.5936 69.0063 12.8521 69.7547L12.3078 69.9588C12.1037 69.4553 11.8043 69.2376 11.3552 69.2376C10.6884 69.2376 10.2666 69.7955 10.2666 70.748C10.2666 71.7005 10.6748 72.2175 11.3552 72.2175C11.8179 72.2175 12.1309 71.9998 12.4167 71.4691L12.9338 71.7549V71.7685Z"
                  fill="#6AC0B3"
                />
                <path
                  d="M15.9575 70.6021C15.2498 70.7382 14.828 70.8607 14.5422 71.0239C14.3109 71.16 14.202 71.3913 14.202 71.6635C14.202 72.0308 14.4197 72.2486 14.8144 72.2486C15.209 72.2486 15.6989 72.0309 15.9711 71.6907V70.5885L15.9575 70.6021ZM16.0391 72.684L15.9847 72.2213C15.5764 72.5751 15.1001 72.7656 14.6375 72.7656C13.9571 72.7656 13.5488 72.3574 13.5488 71.7179C13.5488 71.2553 13.7393 70.8879 14.202 70.643C14.5966 70.4389 15.2634 70.262 15.9847 70.1259C16.0391 69.4456 15.7806 69.2143 15.209 69.2143C14.7463 69.2143 14.4606 69.3911 14.1884 69.7993L13.7257 69.5C14.0795 68.9149 14.5694 68.6836 15.2362 68.6836C16.1888 68.6836 16.6243 69.0918 16.6243 69.949V72.0581L16.6787 72.6704H16.0527L16.0391 72.684Z"
                  fill="#6AC0B3"
                />
                <path
                  d="M20.1606 72.6805V72.1362C19.7387 72.558 19.3305 72.7621 18.8406 72.7621C18.4324 72.7621 18.133 72.6124 17.9561 72.3539C17.8064 72.1498 17.752 71.8641 17.752 71.415V68.7617H18.3915V71.4286C18.3915 71.9593 18.582 72.177 19.0311 72.177C19.3849 72.177 19.6843 72.0409 20.1334 71.5783V68.7617H20.7729V72.6532H20.1606V72.6805Z"
                  fill="#6AC0B3"
                />
                <path
                  d="M23.9442 69.7275C23.6993 69.3465 23.4135 69.2104 23.0325 69.2104C22.6242 69.2104 22.3793 69.4145 22.3793 69.7547C22.3793 70.6391 24.5566 70.0812 24.5566 71.6188C24.5566 72.34 23.9714 72.7754 23.1141 72.7754C22.4201 72.7754 21.9711 72.5169 21.6309 71.9862L22.1071 71.646C22.3929 72.0678 22.6651 72.2583 23.1414 72.2583C23.6585 72.2583 23.9306 72.027 23.9306 71.6596C23.9306 70.6527 21.7669 71.265 21.7669 69.7819C21.7669 69.1288 22.2977 68.6934 23.0461 68.6934C23.6585 68.6934 24.1075 68.9111 24.4069 69.4009L23.9442 69.7139V69.7275Z"
                  fill="#6AC0B3"
                />
                <path
                  d="M25.8485 70.3534H27.8353C27.8353 69.673 27.4679 69.224 26.8555 69.224C26.2431 69.224 25.9301 69.7411 25.8485 70.3534ZM26.8419 72.7754C25.7941 72.7754 25.1953 71.9862 25.1953 70.7344C25.1953 69.4826 25.8757 68.6934 26.8555 68.6934C27.9033 68.6934 28.4612 69.4417 28.4612 70.5847C28.4612 70.6391 28.4612 70.7208 28.4612 70.816H25.8349C25.8757 71.6868 26.1615 72.2175 26.8963 72.2175C27.3454 72.2175 27.6992 72.027 27.9577 71.5236L28.4476 71.7957C28.0666 72.5033 27.4951 72.7618 26.8419 72.7618"
                  fill="#6AC0B3"
                />
                <path
                  d="M31.62 70.3534H33.6068C33.6068 69.673 33.2393 69.224 32.627 69.224C32.0146 69.224 31.7016 69.7411 31.62 70.3534ZM32.6134 72.7754C31.5656 72.7754 30.9668 71.9862 30.9668 70.7344C30.9668 69.4826 31.6472 68.6934 32.627 68.6934C33.6748 68.6934 34.2327 69.4417 34.2327 70.5847C34.2327 70.6391 34.2327 70.7208 34.2327 70.816H31.6064C31.6472 71.6868 31.933 72.2175 32.6678 72.2175C33.1169 72.2175 33.4707 72.027 33.7292 71.5236L34.2191 71.7957C33.8381 72.5033 33.2666 72.7618 32.6134 72.7618"
                  fill="#6AC0B3"
                />
                <path
                  d="M35.9977 72.6786L34.6777 68.7871H35.3717L36.3379 71.7942H36.3515L37.3449 68.7871H38.0253L36.6781 72.6786H35.9977Z"
                  fill="#6AC0B3"
                />
                <path
                  d="M39.1005 70.3534H41.0872C41.0872 69.673 40.7198 69.224 40.1074 69.224C39.4951 69.224 39.1821 69.7411 39.1005 70.3534ZM40.0938 72.7754C39.046 72.7754 38.4473 71.9862 38.4473 70.7344C38.4473 69.4826 39.1277 68.6934 40.1074 68.6934C41.1553 68.6934 41.7132 69.4417 41.7132 70.5847C41.7132 70.6391 41.7132 70.7208 41.7132 70.816H39.0868C39.1277 71.6868 39.4134 72.2175 40.1483 72.2175C40.5973 72.2175 40.9511 72.027 41.2097 71.5236L41.6996 71.7957C41.3186 72.5033 40.747 72.7618 40.0938 72.7618"
                  fill="#6AC0B3"
                />
                <path
                  d="M42.6953 72.6801V68.7886H43.3077V69.5234C43.6343 68.9383 44.0153 68.6934 44.4916 68.6934C44.5324 68.6934 44.5596 68.6934 44.6141 68.6934V69.3193C44.6141 69.3193 44.5052 69.3193 44.4644 69.3193C43.92 69.3193 43.5526 69.7275 43.3349 70.2581V72.6665H42.6953V72.6801Z"
                  fill="#6AC0B3"
                />
                <path
                  d="M45.6669 74.0685C45.4628 74.0685 45.2995 74.0549 45.1362 74.0277V73.4971C45.2995 73.5243 45.4492 73.5379 45.5581 73.5379C45.9799 73.5379 46.1568 73.3474 46.3337 72.8303L46.4154 72.6126L45.0273 68.8027H45.735L46.7147 71.7146H46.7284L47.6809 68.8027H48.3477L47.0686 72.5718C46.6739 73.7284 46.4018 74.0821 45.6533 74.0821"
                  fill="#6AC0B3"
                />
                <path
                  d="M51.2431 70.3534H53.2299C53.2299 69.673 52.8625 69.224 52.2501 69.224C51.6377 69.224 51.3247 69.7411 51.2431 70.3534ZM52.2501 72.7754C51.2023 72.7754 50.6035 71.9862 50.6035 70.7344C50.6035 69.4826 51.2839 68.6934 52.2637 68.6934C53.3115 68.6934 53.8695 69.4417 53.8695 70.5847C53.8695 70.6391 53.8695 70.7208 53.8695 70.816H51.2431C51.2839 71.6868 51.5697 72.2175 52.3045 72.2175C52.7536 72.2175 53.1074 72.027 53.366 71.5236L53.8558 71.7957C53.4748 72.5033 52.9033 72.7618 52.2501 72.7618"
                  fill="#6AC0B3"
                />
                <path
                  d="M54.9872 74.0685C54.7831 74.0685 54.6198 74.0549 54.4565 74.0277V73.4971C54.6198 73.5243 54.7695 73.5379 54.8784 73.5379C55.3002 73.5379 55.4771 73.3474 55.654 72.8303L55.7357 72.6126L54.3477 68.8027H55.0553L56.0351 71.7146H56.0487L57.0012 68.8027H57.668L56.3889 72.5718C55.9942 73.7284 55.7221 74.0821 54.9736 74.0821"
                  fill="#6AC0B3"
                />
                <path
                  d="M58.7665 70.3534H60.7532C60.7532 69.673 60.3858 69.224 59.7735 69.224C59.1611 69.224 58.8481 69.7411 58.7665 70.3534ZM59.7599 72.7754C58.712 72.7754 58.1133 71.9862 58.1133 70.7344C58.1133 69.4826 58.7937 68.6934 59.7735 68.6934C60.8213 68.6934 61.3792 69.4417 61.3792 70.5847C61.3792 70.6391 61.3792 70.7208 61.3792 70.816H58.7529C58.7937 71.6868 59.0795 72.2175 59.8143 72.2175C60.2634 72.2175 60.6172 72.027 60.8757 71.5236L61.3656 71.7957C60.9846 72.5033 60.413 72.7618 59.7599 72.7618"
                  fill="#6AC0B3"
                />
                <path
                  d="M64.1561 68.7915H64.7957V72.6831H64.1561V68.7915ZM64.1289 67.2676H64.8365V68.0432H64.1289V67.2676Z"
                  fill="#6AC0B3"
                />
                <path
                  d="M67.9794 69.7275C67.7344 69.3465 67.4487 69.2104 67.0676 69.2104C66.6594 69.2104 66.4145 69.4145 66.4145 69.7547C66.4145 70.6391 68.5918 70.0812 68.5918 71.6188C68.5918 72.34 68.0066 72.7754 67.1493 72.7754C66.4553 72.7754 66.0062 72.5169 65.666 71.9862L66.1423 71.646C66.4281 72.0678 66.7002 72.2583 67.1765 72.2583C67.6936 72.2583 67.9658 72.027 67.9658 71.6596C67.9658 70.6527 65.8021 71.265 65.8021 69.7819C65.8021 69.1288 66.3328 68.6934 67.0813 68.6934C67.6936 68.6934 68.1427 68.9111 68.4421 69.4009L67.9794 69.7139V69.7275Z"
                  fill="#6AC0B3"
                />
                <path
                  d="M73.7256 69.8646C73.467 69.4836 73.1132 69.2795 72.7186 69.2795C72.0654 69.2795 71.6708 69.8646 71.6708 70.7898C71.6708 71.7151 72.0654 72.2322 72.705 72.2322C73.086 72.2322 73.4806 72.0144 73.7256 71.6471V69.8782V69.8646ZM73.8889 72.6812L73.78 72.2185C73.3854 72.5995 73.0452 72.7628 72.5281 72.7628C71.5891 72.7628 71.0176 71.96 71.0176 70.7626C71.0176 69.5108 71.6572 68.7216 72.6097 68.7216C73.0588 68.7216 73.4126 68.8849 73.7256 69.2251V67.2793H74.3652V72.6812H73.8889Z"
                  fill="#6AC0B3"
                />
                <path
                  d="M75.6014 68.7915H76.241V72.6831H75.6014V68.7915ZM75.5742 67.2676H76.2818V68.0432H75.5742V67.2676Z"
                  fill="#6AC0B3"
                />
                <path
                  d="M79.8211 72.6846V69.3102H78.3242V72.6846H77.6846V69.3102H77.0723V68.7795H77.6846V68.3169C77.6846 67.5685 77.984 67.1875 78.7461 67.1875C78.8685 67.1875 79.0046 67.1875 79.1407 67.2147V67.759C79.0454 67.7318 78.923 67.7182 78.8277 67.7182C78.5011 67.7182 78.3106 67.827 78.3106 68.2624V68.7795H79.8075V68.3169C79.8075 67.5685 80.1069 67.1875 80.8825 67.1875C81.005 67.1875 81.1411 67.1875 81.2772 67.2147V67.759C81.1819 67.7318 81.073 67.7182 80.9642 67.7182C80.624 67.7182 80.4471 67.827 80.4471 68.2624V68.7795H81.2499V69.3102H80.4471V72.6846H79.8075H79.8211Z"
                  fill="#6AC0B3"
                />
                <path
                  d="M82.3505 70.3534H84.3372C84.3372 69.673 83.9698 69.224 83.3574 69.224C82.7451 69.224 82.4321 69.7411 82.3505 70.3534ZM83.3438 72.7754C82.296 72.7754 81.6973 71.9862 81.6973 70.7344C81.6973 69.4826 82.3777 68.6934 83.3574 68.6934C84.4053 68.6934 84.9632 69.4417 84.9632 70.5847C84.9632 70.6391 84.9632 70.7208 84.9632 70.816H82.3368C82.3777 71.6868 82.6634 72.2175 83.3983 72.2175C83.8473 72.2175 84.2011 72.027 84.4597 71.5236L84.9496 71.7957C84.5686 72.5033 83.997 72.7618 83.3438 72.7618"
                  fill="#6AC0B3"
                />
                <path
                  d="M85.9414 72.6801V68.7886H86.5538V69.5234C86.8804 68.9383 87.2614 68.6934 87.7377 68.6934C87.7785 68.6934 87.8057 68.6934 87.8601 68.6934V69.3193C87.8601 69.3193 87.7513 69.3193 87.7241 69.3193C87.1797 69.3193 86.8123 69.7275 86.5946 70.2581V72.6665H85.955L85.9414 72.6801Z"
                  fill="#6AC0B3"
                />
                <path
                  d="M88.9911 70.3534H90.9779C90.9779 69.673 90.6105 69.224 89.9981 69.224C89.3858 69.224 89.0728 69.7411 88.9911 70.3534ZM89.9981 72.7754C88.9503 72.7754 88.3516 71.9862 88.3516 70.7344C88.3516 69.4826 89.032 68.6934 90.0117 68.6934C91.0596 68.6934 91.6175 69.4417 91.6175 70.5847C91.6175 70.6391 91.6175 70.7208 91.6175 70.816H88.9911C89.032 71.6868 89.3177 72.2175 90.0526 72.2175C90.5016 72.2175 90.8555 72.027 91.114 71.5236L91.6039 71.7957C91.2229 72.5033 90.6513 72.7618 89.9981 72.7618"
                  fill="#6AC0B3"
                />
                <path
                  d="M94.9791 72.6801V70.0132C94.9791 69.4826 94.7886 69.2512 94.3395 69.2512C93.9993 69.2512 93.6727 69.4009 93.2372 69.8499V72.6665H92.5977V68.775H93.21V69.3193C93.6455 68.8975 94.0401 68.6934 94.53 68.6934C94.9382 68.6934 95.2376 68.8294 95.4145 69.1016C95.5642 69.2921 95.6186 69.5914 95.6186 70.0268V72.6801H94.9791Z"
                  fill="#6AC0B3"
                />
                <path
                  d="M98.4395 72.6803C98.249 72.7211 98.0721 72.7347 97.8408 72.7347C97.2012 72.7347 96.9562 72.4898 96.9562 71.7278V69.3058H96.3711V68.7751H96.9562V67.4961H97.5822V68.7751H98.4259V69.3058H97.5822V71.7006C97.5822 72.0271 97.7047 72.1768 97.9905 72.1768C98.1265 72.1768 98.2626 72.1632 98.4259 72.1224V72.6667L98.4395 72.6803Z"
                  fill="#6AC0B3"
                />
              </g>
              <defs>
                <clipPath id="clip0_2534_31245">
                  <rect
                    width="97.4609"
                    height="73.8166"
                    fill="white"
                    transform="translate(0.986328 0.255859)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="130"
              height="29"
              viewBox="0 0 130 29"
              fill="none"
            >
              <g clip-path="url(#clip0_2534_31190)">
                <path
                  d="M10.7493 0.630859L6.29948 11.5202L3.52147 4.72686H0.732422L5.18772 15.426H7.41123L13.5728 0.630859H10.7493Z"
                  fill="#2D3C4B"
                />
                <path
                  d="M18.4167 13.3391C16.5243 13.3391 15.2304 11.9022 15.2304 10.0711C15.2304 8.24 16.5546 6.80168 18.4167 6.80168C20.2789 6.80168 21.712 8.13326 21.712 10.0711C21.712 12.0089 20.1492 13.3391 18.4167 13.3391ZM24.0873 12.1937V4.72288H21.5203V6.27206C21.1134 5.25387 19.8099 4.49023 18.076 4.49023C16.5574 4.49023 15.2732 5.01985 14.2263 6.10373C13.1987 7.16434 12.6855 8.47949 12.6855 10.0725C12.6855 11.6654 13.1987 12.9806 14.2263 14.0631C15.2746 15.1456 16.5574 15.6766 18.076 15.6766C19.7878 15.6766 21.0279 15.1251 21.7768 14.0001C21.9548 14.9143 22.661 15.6355 24.1507 15.6355C24.708 15.6355 25.1356 15.5712 25.4142 15.4658V13.4076C25.2211 13.4281 25.028 13.4486 24.879 13.4486C24.2997 13.4486 24.0873 13.1092 24.0873 12.1964"
                  fill="#2D3C4B"
                />
                <path
                  d="M30.1107 6.31153V4.71993H27.5645V15.4191H30.1107V9.79444C30.1107 8.0304 31.2432 6.92737 33.0198 6.92737C33.4046 6.92737 33.7688 6.96979 34.0902 7.03412V4.57076C33.8764 4.52834 33.6184 4.50781 33.3191 4.50781C31.8004 4.50781 30.6238 5.1866 30.1107 6.31153Z"
                  fill="#2D3C4B"
                />
                <path
                  d="M37.072 3.4719C37.9065 3.4719 38.5906 2.81364 38.5906 1.96515C38.5906 1.11666 37.9065 0.457031 37.072 0.457031C36.2375 0.457031 35.5312 1.11529 35.5312 1.96515C35.5312 2.815 36.2168 3.4719 37.072 3.4719Z"
                  fill="#2D3C4B"
                />
                <path
                  d="M38.358 12.2398V4.72656H35.791V12.9199C35.791 14.7237 36.6241 15.6365 38.2725 15.6365C38.8711 15.6365 39.2987 15.5735 39.5553 15.4681V13.3237C39.4491 13.3442 39.2987 13.3661 39.1056 13.3661C38.529 13.3661 38.358 13.0691 38.358 12.2411"
                  fill="#2D3C4B"
                />
                <path
                  d="M44.4107 11.9245V0.632812H41.8438V12.2653C41.8438 14.5781 42.9776 15.7249 45.2452 15.7249C45.7597 15.7249 46.1653 15.6825 46.466 15.5977V13.3273C46.2522 13.3902 45.9942 13.4121 45.6949 13.4121C44.7528 13.4121 44.4121 12.966 44.4121 11.9259"
                  fill="#2D3C4B"
                />
                <path
                  d="M57.804 12.1755V4.72656H55.237V10.8822C55.237 12.3465 54.2536 13.3647 52.8839 13.3647C51.5142 13.3647 50.7004 12.4519 50.7004 10.9876V4.72656H48.1348V11.3489C48.1348 14.0011 49.6755 15.6351 52.2425 15.6351C53.8039 15.6351 54.895 15.1055 55.5157 14.064C55.666 14.6867 56.2647 15.6146 57.8702 15.6146C58.4247 15.6146 58.8537 15.5516 59.1309 15.4462V13.3647C58.9392 13.3866 58.7461 13.4071 58.5958 13.4071C58.0192 13.4071 57.8054 13.0883 57.8054 12.1755"
                  fill="#2D3C4B"
                />
                <path
                  d="M70.8961 0.630859L65.6284 7.93196L63.2738 4.72823H60.4255L64.1828 9.82463L60.1289 15.426H62.8904L65.5939 11.694L68.3002 15.426H71.1251L67.0408 9.75757L73.6989 0.630859H70.8961Z"
                  fill="#2D3C4B"
                />
                <path
                  d="M74.0683 15.3105C73.2462 15.3105 72.6531 14.733 72.6531 13.9064C72.6531 13.0798 73.2462 12.4804 74.0683 12.4804C74.8904 12.4804 75.4946 13.0675 75.4946 13.9064C75.4946 14.7453 74.8904 15.3105 74.0683 15.3105ZM75.3304 12.6638C74.9911 12.3367 74.5635 12.1738 74.0683 12.1738C73.5731 12.1738 73.1469 12.3367 72.8076 12.6638C72.4669 12.9908 72.3027 13.4041 72.3027 13.905C72.3027 14.4059 72.4669 14.8192 72.8076 15.1463C73.1469 15.472 73.5745 15.6348 74.0683 15.6348C74.5621 15.6348 74.9897 15.472 75.3304 15.1463C75.6821 14.8192 75.8573 14.4059 75.8573 13.905C75.8573 13.4041 75.6821 12.9908 75.3304 12.6638Z"
                  fill="#2D3C4B"
                />
                <path
                  d="M74.1214 13.8304H73.7932V13.2214H74.1214C74.2856 13.2214 74.407 13.3514 74.407 13.5143C74.407 13.6881 74.287 13.8291 74.1214 13.8291M74.7794 13.491C74.7794 13.1325 74.5159 12.8711 74.1311 12.8711H73.418V14.8637H73.7918V14.1356H74.0552L74.4939 14.8637H74.9325L74.4497 14.0686C74.6704 13.9495 74.7794 13.7538 74.7794 13.491Z"
                  fill="#2D3C4B"
                />
                <path
                  d="M49.5563 24.3964C49.5729 24.1487 49.6887 23.9407 49.9108 23.7669C50.1329 23.5931 50.3977 23.5014 50.7039 23.5014C50.9922 23.5014 51.2322 23.5931 51.4309 23.7669C51.6295 23.9407 51.7288 24.1556 51.7288 24.3964H49.5577H49.5563ZM48.5508 24.8781C48.5508 25.5255 48.748 26.0496 49.1522 26.4424C49.5563 26.8269 50.0929 27.0226 50.7453 27.0226C51.3978 27.0226 51.8764 26.8433 52.2805 26.5655V25.5994C51.9343 25.9182 51.4391 26.1646 50.7867 26.1646C50.0515 26.1646 49.5646 25.7472 49.5315 25.0903H52.7178C52.7261 24.9835 52.7343 24.8617 52.7343 24.7386C52.7343 24.1556 52.5454 23.6588 52.1661 23.2646C51.795 22.8637 51.3081 22.668 50.7053 22.668C50.1025 22.668 49.5577 22.8637 49.1536 23.2646C48.7494 23.6588 48.5522 24.1884 48.5522 24.8371V24.8781H48.5508Z"
                  fill="#006FAF"
                />
                <path
                  d="M53.0898 26.5683C53.5271 26.8625 54.0292 27.0103 54.6154 27.0103C55.2016 27.0103 55.6058 26.8872 55.8789 26.6422C56.1506 26.389 56.2913 26.0934 56.2913 25.7417C56.2913 25.3407 56.1589 25.0533 55.8292 24.833C55.672 24.7262 55.5244 24.6373 55.4003 24.5784C55.2761 24.521 55.094 24.4389 54.8554 24.3499C54.7313 24.3006 54.5906 24.2514 54.4913 24.2185C54.4002 24.1775 54.3837 24.161 54.3175 24.1282C54.2099 24.0625 54.1519 23.9804 54.1519 23.8654C54.1519 23.6273 54.3506 23.5137 54.7547 23.5137C55.1589 23.5137 55.5065 23.6205 55.8361 23.8244V22.9321C55.5396 22.7446 55.1685 22.6543 54.7133 22.6543C54.2844 22.6543 53.9285 22.761 53.6402 22.9732C53.3602 23.1853 53.2195 23.4809 53.2195 23.849C53.2195 24.365 53.5161 24.7577 54.1023 25.0123C54.2926 25.0862 54.6389 25.2258 54.8044 25.2997C54.8954 25.3325 54.9782 25.3736 55.0692 25.4228C55.2596 25.5214 55.334 25.6281 55.334 25.7581C55.334 26.0127 55.0692 26.1509 54.632 26.1509C54.0126 26.1509 53.494 25.9702 53.0898 25.6021V26.5683Z"
                  fill="#006FAF"
                />
                <path
                  d="M56.6465 26.5683C57.0837 26.8625 57.5858 27.0103 58.172 27.0103C58.7583 27.0103 59.1624 26.8872 59.4355 26.6422C59.7073 26.389 59.848 26.0934 59.848 25.7417C59.848 25.3407 59.7155 25.0533 59.3859 24.833C59.2286 24.7262 59.081 24.6373 58.9569 24.5784C58.8328 24.521 58.6507 24.4389 58.4121 24.3499C58.2879 24.3006 58.1472 24.2514 58.0479 24.2185C57.9569 24.1775 57.9403 24.161 57.8741 24.1282C57.7665 24.0625 57.7086 23.9804 57.7086 23.8654C57.7086 23.6273 57.9072 23.5137 58.3114 23.5137C58.7155 23.5137 59.0631 23.6205 59.3928 23.8244V22.9321C59.0962 22.7446 58.7252 22.6543 58.27 22.6543C57.841 22.6543 57.4851 22.761 57.1968 22.9732C56.9168 23.1853 56.7761 23.4809 56.7761 23.849C56.7761 24.365 57.0727 24.7577 57.6589 25.0123C57.8493 25.0862 58.1955 25.2258 58.361 25.2997C58.4521 25.3325 58.5348 25.3736 58.6259 25.4228C58.8162 25.5214 58.8907 25.6281 58.8907 25.7581C58.8907 26.0127 58.6259 26.1509 58.1886 26.1509C57.5693 26.1509 57.0506 25.9702 56.6465 25.6021V26.5683Z"
                  fill="#006FAF"
                />
                <path
                  d="M61.2934 22.7706H60.3044V26.898H61.2934V22.7706ZM60.7982 22.2875C61.1196 22.2875 61.383 22.0343 61.383 21.7072C61.383 21.3801 61.1196 21.127 60.7982 21.127C60.4768 21.127 60.2051 21.3801 60.2051 21.7072C60.2051 22.0343 60.4685 22.2875 60.7982 22.2875Z"
                  fill="#006FAF"
                />
                <path
                  d="M62.9167 21.1953H61.9277V26.9021H62.9167V21.1953Z"
                  fill="#006FAF"
                />
                <path
                  d="M65.7397 26.1286C65.3687 26.1286 65.0625 26.0054 64.8156 25.7605C64.5769 25.5059 64.4528 25.2035 64.4528 24.8353C64.4528 24.4672 64.5769 24.1634 64.8156 23.9184C65.0625 23.6639 65.3687 23.5421 65.7397 23.5421C66.1108 23.5421 66.4087 23.6653 66.6556 23.9184C66.9025 24.1634 67.0267 24.4672 67.0267 24.8353C67.0267 25.2035 66.9025 25.5073 66.6556 25.7605C66.4087 26.0068 66.1025 26.1286 65.7397 26.1286ZM64.13 26.39C64.5673 26.8074 65.1039 27.0195 65.7397 27.0195C66.3756 27.0195 66.9122 26.8074 67.3494 26.39C67.7867 25.9726 68.0088 25.4484 68.0088 24.834C68.0088 24.2195 67.7853 23.6954 67.3494 23.278C66.9122 22.8606 66.3756 22.6484 65.7397 22.6484C65.1039 22.6484 64.5673 22.8619 64.13 23.278C63.6928 23.6954 63.4707 24.2195 63.4707 24.834C63.4707 25.4484 63.6942 25.9726 64.13 26.39Z"
                  fill="#006FAF"
                />
                <path
                  d="M69.596 26.9035V24.7331C69.596 24.0529 70.0332 23.6273 70.7187 23.6273C70.8677 23.6273 71.007 23.6437 71.1312 23.6683V22.7199C71.0484 22.7035 70.9491 22.6953 70.8332 22.6953C70.247 22.6953 69.7932 22.9567 69.596 23.3905V22.7774H68.6152V26.9035H69.596Z"
                  fill="#006FAF"
                />
                <path
                  d="M41.9429 24.6172V24.6569C41.805 26.0733 40.6408 26.982 39.3621 26.982C37.9055 26.982 36.7441 25.8092 36.7441 24.3845C36.7441 22.9599 37.9317 21.7871 39.3621 21.7871C40.0615 21.7871 40.7194 22.0567 41.2132 22.548C41.4063 22.7409 41.5401 22.9106 41.5401 22.9106L39.6725 24.7485C39.4794 24.9401 39.1676 24.9401 38.9745 24.7485C38.7814 24.557 38.7814 24.2477 38.9745 24.0561L40.1125 22.9476C39.8835 22.8299 39.627 22.7669 39.3607 22.7669C38.4614 22.7669 37.729 23.4909 37.729 24.3859C37.729 25.2809 38.4669 26.0049 39.3607 26.0049C40.0946 26.0049 40.8104 25.4958 40.9456 24.624V24.6199L40.958 24.5351C40.9953 24.2682 41.2449 24.0807 41.5153 24.1177C41.7677 24.1532 41.9512 24.3708 41.9415 24.6185M45.6492 24.3941C44.3788 22.1538 42.0284 20.6484 39.3373 20.6484C36.6462 20.6484 34.2958 22.1538 33.0254 24.3941C34.2958 26.6344 36.6462 28.1398 39.3373 28.1398C42.0284 28.1398 44.3788 26.6344 45.6492 24.3941Z"
                  fill="#006FAF"
                />
                <path
                  d="M127.811 15.8915C127.11 15.8915 126.604 15.3988 126.604 14.694C126.604 13.9892 127.11 13.4788 127.811 13.4788C128.512 13.4788 129.028 13.9797 129.028 14.694C129.028 15.4084 128.513 15.8915 127.811 15.8915ZM128.887 13.6362C128.597 13.3583 128.233 13.2188 127.811 13.2188C127.389 13.2188 127.025 13.357 126.735 13.6362C126.445 13.9153 126.305 14.267 126.305 14.6954C126.305 15.1237 126.444 15.4741 126.735 15.7533C127.025 16.0311 127.389 16.1707 127.811 16.1707C128.233 16.1707 128.597 16.0311 128.887 15.7533C129.186 15.4741 129.336 15.1224 129.336 14.6954C129.336 14.2684 129.188 13.9153 128.887 13.6362Z"
                  fill="#2D3C4B"
                />
                <path
                  d="M127.86 14.6281H127.58V14.1095H127.86C128 14.1095 128.103 14.2203 128.103 14.3599C128.103 14.5091 128.001 14.6295 127.86 14.6295M128.422 14.3408C128.422 14.0356 128.198 13.8125 127.87 13.8125H127.262V15.5108H127.58V14.8895H127.804L128.178 15.5108H128.553L128.14 14.8334C128.328 14.7322 128.42 14.5638 128.42 14.3408"
                  fill="#2D3C4B"
                />
                <path
                  d="M123.202 4.0893L122.958 4.14951H120.366C120.534 3.7718 120.686 3.37766 120.824 2.9849L119.452 2.65234C118.918 4.39174 117.958 6.02577 116.814 7.13017V3.25723H111.782V8.00876H113.903V13.9085L112.896 14.1357V9.27876H111.737V14.3779C111.478 14.4231 111.233 14.4682 111.004 14.5147L111.249 15.8764C112.896 15.4987 115.107 14.9691 117.195 14.4395L117.057 13.1982L115.166 13.6375V11.2467H116.951V11.2316C117.104 11.4438 117.256 11.6709 117.347 11.8516C117.576 11.7613 117.79 11.6545 118.018 11.5491V16.4964H119.315V15.9668H122.715V16.4512H124.072V11.5341L124.377 11.6559C124.561 11.3083 124.972 10.7486 125.246 10.4913C123.95 10.0369 122.852 9.34171 121.922 8.50964C122.868 7.39019 123.63 6.04356 124.103 4.47112L123.203 4.09204L123.202 4.0893ZM122.348 5.34561C121.998 6.14756 121.54 6.88931 120.991 7.55441C120.442 6.91941 120.014 6.268 119.664 5.61794L119.802 5.34561H122.348ZM113.017 4.46838H115.503V6.79762H113.017V4.46838ZM116.951 10.0054H115.166V8.00876H116.813V7.32724C117.133 7.56946 117.576 7.93213 117.79 8.1593C118.185 7.75011 118.598 7.26702 118.963 6.7374C119.299 7.31218 119.681 7.90202 120.168 8.4768C119.207 9.41424 118.094 10.1409 116.951 10.6254V10.0054ZM119.314 12.2444H122.714V14.7556H119.314V12.2444ZM118.933 11.0496C119.681 10.6103 120.396 10.0657 121.038 9.44572C121.648 10.0356 122.35 10.5953 123.141 11.0496H118.933ZM103.166 14.8008V12.9546H108.319V11.6532H103.166V10.1095H107.832V3.22713H97.0662V10.1108H101.64V11.6545H96.593V12.956H101.64V14.8021H95.5709V16.1036H109.112V14.8021H103.164L103.166 14.8008ZM106.368 8.85451H103.075V7.23554H106.368V8.85451ZM106.368 6.07093H103.075V4.48207H106.368V6.07093ZM98.4855 4.48207H101.734V6.07093H98.4855V4.48207ZM98.4855 7.23554H101.734V8.85451H98.4855V7.23554ZM89.9156 3.49946V2.65234H88.5432V3.49946H86.8659V4.67913H88.5432V5.48109H89.9156V4.67913H93.2854V3.49946H89.9156ZM92.706 11.155H87.2617V10.3681H91.6688V5.70827H81.6354V10.3681H85.9196V11.155H82.0312V10.6705H80.6588V11.155H80.0795V12.3046H80.6588V16.5251H82.0312V12.3046H85.9196V13.7415C84.7458 13.7867 83.6934 13.8318 82.8395 13.8633L82.9471 15.0731C84.6244 14.9664 87.0024 14.8459 89.3211 14.6954C89.4439 15.0129 89.5349 15.2852 89.5804 15.5275L89.8549 15.4371C90.008 15.7546 90.1749 16.1939 90.2356 16.5265C91.1501 16.5265 91.7764 16.5265 92.1874 16.3144C92.615 16.1323 92.706 15.7998 92.706 15.1949V11.155ZM90.2508 9.40056H87.2617V8.49322H90.2508V9.40056ZM90.2508 7.58452H87.2617V6.67718H90.2508V7.58452ZM82.9926 6.67718H85.9196V7.58452H82.9926V6.67718ZM82.9926 8.49322H85.9196V9.40056H82.9926V8.49322ZM90.7087 15.1798C90.5404 14.408 89.9308 13.2885 89.3363 12.4565L88.2838 12.7288C88.4659 13.0012 88.6494 13.2885 88.8176 13.591L87.2617 13.6663V12.3046H91.3336V15.1785C91.3336 15.3454 91.2881 15.3906 91.1046 15.3906C90.968 15.4057 90.5405 15.4057 90.0066 15.3906L90.7087 15.1785V15.1798ZM83.2368 5.48246H84.6092V4.6805H86.3321V3.50083H84.6092V2.65371H83.2368V3.50083H79.9277V4.6805H83.2368V5.48246Z"
                  fill="#2D3C4B"
                />
                <path
                  d="M97.6648 21.7697L97.5351 21.7943H96.6717C96.7268 21.6602 96.7765 21.5193 96.8262 21.3838L96.1296 21.2127C95.9254 21.8792 95.5558 22.5279 95.1061 22.9562V21.4385H92.9778V23.4639H93.8412V25.7644L93.5336 25.826V23.8923H92.935V25.9478L92.6578 25.9971L92.7874 26.695C93.484 26.5363 94.4219 26.3214 95.2854 26.1079L95.2178 25.4647L94.4909 25.6303V24.816H95.1696V24.6381C95.2565 24.7545 95.3489 24.8886 95.3971 24.9871L95.5392 24.9255V26.914H96.2179V26.706H97.3779V26.8962H98.0814V24.8954L98.0938 24.9009C98.1917 24.7107 98.4014 24.4233 98.5503 24.2892C98.0565 24.1359 97.6317 23.8909 97.2731 23.6104C97.6496 23.1574 97.9393 22.6072 98.131 21.964L97.6689 21.7683L97.6648 21.7697ZM97.2275 22.4129C97.1048 22.6702 96.9558 22.9083 96.7779 23.1355C96.6055 22.9275 96.451 22.714 96.3268 22.506L96.3765 22.4143H97.2275V22.4129ZM93.6192 22.0639H94.433V22.8413H93.6192V22.0639ZM95.1668 24.181H94.4882V23.4653H95.1047V23.0739C95.2716 23.1848 95.4923 23.3791 95.5985 23.4899C95.7213 23.3613 95.8454 23.2203 95.9627 23.0684C96.073 23.2463 96.1972 23.4297 96.3448 23.6063C95.9999 23.9251 95.593 24.1879 95.1668 24.3713V24.181ZM96.2151 25.2704H97.3751V26.0847H96.2151V25.2704ZM96.0482 24.6587C96.3199 24.4931 96.5724 24.3165 96.8068 24.1017C97.0413 24.3097 97.2938 24.4931 97.5779 24.6587H96.0482ZM91.2136 26.268C91.1281 26.268 91.1156 26.2503 91.1156 26.0847V24.8858H91.7626V21.459H89.0301V24.8858H89.437C89.3694 25.6385 89.2025 26.1216 88.2163 26.4035C88.339 26.5267 88.5183 26.7703 88.5804 26.9359C89.7639 26.5568 90.0053 25.8835 90.0908 24.8858H90.4356V26.0847C90.4356 26.6909 90.5529 26.8989 91.095 26.8989H91.5019C91.9212 26.8989 92.0936 26.6786 92.1557 25.8465C91.9708 25.7973 91.6812 25.6878 91.557 25.5769C91.5391 26.1887 91.5198 26.268 91.415 26.268H91.2108H91.2136ZM89.6963 22.0338H91.0591V22.4321H89.6963V22.0338ZM89.6963 22.9699H91.0591V23.3613H89.6963V22.9699ZM89.6963 23.906H91.0591V24.3042H89.6963V23.906ZM88.8452 24.5369C88.728 24.4137 88.2769 23.9799 88.0314 23.765C88.3156 23.3668 88.5625 22.9329 88.7404 22.4868L88.3528 22.2049L88.2231 22.235H87.7859L88.1307 22.0023C88.0259 21.7765 87.7914 21.4631 87.5817 21.2305L87.0204 21.5726C87.1804 21.7629 87.3542 22.0201 87.4714 22.2336H86.4231V22.8878H87.8287C87.459 23.5365 86.8603 24.1359 86.2438 24.4725C86.3307 24.6067 86.4714 25.0104 86.521 25.2129C86.761 25.072 86.99 24.8831 87.2245 24.6751V26.9208H87.9459V24.5464C88.1183 24.7545 88.2907 24.9803 88.3956 25.1335L88.8466 24.5341L88.8452 24.5369ZM85.1513 23.4174C84.9417 23.6747 84.6092 23.9867 84.3072 24.244C84.1223 23.8334 83.9678 23.3928 83.8561 22.9466H85.6576V22.2678H83.7085L84.1651 22.1022C84.0906 21.8641 83.9127 21.4837 83.7582 21.2031L83.1044 21.4166C83.234 21.6862 83.3692 22.0229 83.4437 22.2678H81.6795V22.9466H82.9251C82.5057 23.5159 81.9388 24.036 81.365 24.4082V22.781C81.5995 22.3527 81.8092 21.8942 81.9761 21.4481L81.285 21.2332C80.9885 22.1022 80.4712 22.9644 79.9277 23.5214C80.0505 23.7048 80.2546 24.103 80.3222 24.2796C80.4326 24.1578 80.5498 24.0168 80.6615 23.8704V26.9236H81.365V24.6162C81.5002 24.775 81.6492 24.9775 81.7223 25.087C81.8947 24.9707 82.0671 24.8366 82.2464 24.6833V25.7658C82.2464 26.0956 82.0243 26.3228 81.8823 26.4323C81.9995 26.5418 82.1899 26.8059 82.2519 26.9455C82.4064 26.8415 82.6409 26.7375 84.0285 26.2722C83.9858 26.1189 83.9416 25.8315 83.9361 25.6481L82.9623 25.941V23.9949C83.0975 23.8485 83.2216 23.7075 83.3389 23.5543C83.7458 24.9009 84.3692 26.0696 85.2824 26.7539C85.4051 26.5636 85.6465 26.2954 85.812 26.1599C85.3307 25.8356 84.9237 25.358 84.5913 24.79C84.9431 24.5396 85.3431 24.2207 85.7017 23.9265L85.1527 23.4133L85.1513 23.4174Z"
                  fill="#006FAF"
                />
              </g>
              <defs>
                <clipPath id="clip0_2534_31190">
                  <rect
                    width="128.602"
                    height="27.6812"
                    fill="white"
                    transform="translate(0.732422 0.458984)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
        <swiper
          v-else
          :space-between="120"
          :slides-per-view="3"
          :modules="[Autoplay]"
          :loop="true"
          :autoplay="{ delay: 0 }"
          :speed="3000"
        >
          <swiper-slide>
            <div class="brand-mobile-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="82"
                height="82"
                viewBox="0 0 82 82"
                fill="none"
              >
                <g clip-path="url(#clip0_2534_31218)">
                  <path
                    d="M67.7212 53.7096C59.5928 50.0581 50.5497 48.0309 41.0491 48.0309C31.5485 48.0309 22.5184 50.0581 14.377 53.7096V0.677734H67.7212V53.7096Z"
                    fill="#004097"
                  />
                  <path
                    d="M20.7049 16.8563C18.1959 16.8563 17.9998 19.3773 17.9998 19.3773H16.7976V15.6348H26.1282C26.1282 15.6348 26.2066 18.5196 23.4362 21.5994C23.4362 21.5994 20.8095 24.6402 20.7442 25.9657H22.2601C24.4294 25.9657 24.6515 23.4447 24.6515 23.4447H25.9061V27.2002H16.3663C16.3663 27.2002 16.0135 24.3543 19.3328 20.9107C19.3328 20.9107 21.3714 18.6496 21.8419 16.8563H20.718H20.7049Z"
                    fill="white"
                  />
                  <path
                    d="M44.4781 27.1885V25.967H44.1906C43.681 25.967 43.2628 25.5512 43.2628 25.0444V17.8063C43.2628 17.2995 43.681 16.8836 44.1906 16.8836H44.4781V15.6621H38.2969V16.8836H38.5844C39.1071 16.8836 39.5253 17.2995 39.5253 17.8063V25.0444C39.5253 25.5512 39.1071 25.967 38.5844 25.967H38.2969V27.1885H44.4781Z"
                    fill="white"
                  />
                  <path
                    d="M37.0181 27.2034V23.4479H35.7635C35.7635 23.4479 35.5283 25.9689 33.359 25.9689H32.1044V22.0315H32.5488C33.0715 22.0315 33.4897 22.4473 33.4897 22.9671V23.4349H34.7181V19.3935H33.4897V19.8613C33.4897 20.3811 33.0715 20.7969 32.5488 20.7969H32.1044V16.8595H33.359C35.5283 16.8595 35.7635 19.3805 35.7635 19.3805H37.0181V15.625H27.1777V16.8595H27.4652C27.9749 16.8595 28.3931 17.2753 28.3931 17.7821V25.0203C28.3931 25.5271 27.9749 25.9429 27.4652 25.9429H27.1777V27.1644H37.0181V27.2034Z"
                    fill="white"
                  />
                  <path
                    d="M50.9829 16.8563C53.492 16.8563 53.688 19.3773 53.688 19.3773H54.8903V15.6348H45.9647C45.9647 15.6348 44.5534 17.467 48.2386 21.5994C48.2386 21.5994 50.8522 24.6402 50.9176 25.9657H49.4147C47.2454 25.9657 47.0102 23.4447 47.0102 23.4447H45.7556V27.2002H54.7465C54.7465 27.2002 56.3801 25.4459 52.3289 20.9107C52.3289 20.9107 50.2119 18.7405 49.8198 16.8563H50.9568H50.9829Z"
                    fill="white"
                  />
                  <path
                    d="M61.4113 16.8563C63.9073 16.8563 64.1164 19.3773 64.1164 19.3773H65.3186V15.6348H56.4061C56.4061 15.6348 54.9948 17.467 58.68 21.5994C58.68 21.5994 61.2936 24.6402 61.359 25.9657H59.8561C57.6868 25.9657 57.4516 23.4447 57.4516 23.4447H56.2101V27.2002H65.201C65.201 27.2002 66.8345 25.4459 62.7834 20.9107C62.7834 20.9107 60.6664 18.7405 60.2743 16.8563H61.4113Z"
                    fill="white"
                  />
                  <path
                    d="M1.0114 77.1006C1.3381 77.2696 1.65174 77.3995 1.96538 77.4775C2.27901 77.5555 2.61878 77.5944 2.99776 77.5944C3.19378 77.5944 3.38981 77.5685 3.57276 77.5165C3.75572 77.4645 3.9256 77.3865 4.08242 77.2696C4.22617 77.1526 4.34378 77.0097 4.43526 76.8278C4.52674 76.6458 4.56594 76.4249 4.56594 76.178C4.56594 75.9701 4.52674 75.8012 4.44833 75.6452C4.36992 75.5023 4.26537 75.3593 4.13469 75.2424C4.00401 75.1254 3.86026 75.0215 3.69037 74.9175C3.52049 74.8266 3.33753 74.7356 3.14151 74.6316L2.50117 74.3068C2.30515 74.2028 2.10913 74.0858 1.93924 73.9689C1.75628 73.8389 1.59947 73.696 1.46879 73.5271C1.3381 73.3581 1.23356 73.1632 1.15515 72.9553C1.07674 72.7344 1.03754 72.4875 1.03754 72.1886C1.03754 71.7728 1.11594 71.4089 1.27276 71.11C1.42958 70.8111 1.63867 70.5513 1.90003 70.3693C2.1614 70.1744 2.4489 70.0315 2.7756 69.9405C3.10231 69.8495 3.41594 69.8105 3.74265 69.8105C4.42219 69.8105 5.0364 69.9015 5.6114 70.0834L5.53299 71.214C5.27162 71.097 4.98412 71.0061 4.68356 70.9541C4.38299 70.9021 4.09549 70.8761 3.80799 70.8761C3.6381 70.8761 3.45515 70.9021 3.28526 70.9411C3.10231 70.9801 2.94549 71.058 2.81481 71.149C2.67106 71.253 2.55344 71.3699 2.47503 71.5389C2.38356 71.6948 2.34435 71.9027 2.34435 72.1366C2.34435 72.3185 2.37049 72.4745 2.43583 72.5914C2.50117 72.7214 2.57958 72.8383 2.68413 72.9423C2.78867 73.0463 2.91935 73.1372 3.05003 73.2152C3.19378 73.2932 3.33753 73.3711 3.48128 73.4491L4.16083 73.774C4.40912 73.8909 4.63128 74.0209 4.84037 74.1508C5.04946 74.2808 5.23242 74.4367 5.38924 74.6186C5.54606 74.8006 5.66367 75.0085 5.75515 75.2424C5.84662 75.4763 5.88583 75.7622 5.88583 76.1C5.88583 76.5419 5.80742 76.9187 5.66367 77.2306C5.51992 77.5555 5.31083 77.8154 5.04947 78.0233C4.7881 78.2312 4.48753 78.3871 4.14776 78.4911C3.80799 78.5951 3.42901 78.647 3.03697 78.647C2.71026 78.647 2.37049 78.621 2.00458 78.5691C1.63867 78.5171 1.27276 78.4261 0.919922 78.3092L0.985263 77.1136L1.0114 77.1006Z"
                    fill="#231916"
                  />
                  <path
                    d="M8.48697 75.5689C8.48697 75.8678 8.52617 76.1537 8.61765 76.4136C8.70913 76.6735 8.83981 76.9074 9.00969 77.1023C9.17958 77.2972 9.40174 77.4532 9.6631 77.5701C9.92447 77.6871 10.225 77.7391 10.5517 77.7391C10.8262 77.7391 11.1137 77.7131 11.4142 77.6481C11.7017 77.5831 11.9762 77.4792 12.2245 77.3492L12.3029 78.2978C12.0154 78.4148 11.7148 78.5057 11.3881 78.5577C11.0614 78.6097 10.7347 78.6357 10.3949 78.6357C9.87219 78.6357 9.41481 78.5577 9.02276 78.3888C8.63072 78.2199 8.29094 77.999 8.02958 77.7001C7.76822 77.4012 7.55913 77.0503 7.42844 76.6345C7.29776 76.2187 7.23242 75.7638 7.23242 75.257C7.23242 74.8152 7.29776 74.3994 7.42844 73.9965C7.55913 73.5937 7.74208 73.2428 7.97731 72.944C8.2256 72.6451 8.5131 72.3982 8.86594 72.2162C9.21878 72.0343 9.61083 71.9434 10.0551 71.9434C10.5387 71.9434 10.9438 72.0213 11.2705 72.1903C11.5972 72.3592 11.8586 72.5801 12.0676 72.879C12.2637 73.1649 12.4074 73.5157 12.4989 73.9056C12.5904 74.2954 12.6296 74.7243 12.6296 75.1791V75.5689H8.50004H8.48697ZM11.4404 74.7762C11.4404 74.5423 11.4142 74.2954 11.375 74.0615C11.3358 73.8276 11.2574 73.6197 11.1659 73.4378C11.0614 73.2558 10.9307 73.1129 10.7478 72.9959C10.5648 72.879 10.3426 72.827 10.0682 72.827C9.80685 72.827 9.57163 72.879 9.38867 72.9959C9.19265 73.1129 9.03583 73.2558 8.90515 73.4508C8.77447 73.6327 8.66992 73.8406 8.60458 74.0745C8.53924 74.3084 8.50003 74.5423 8.48697 74.7632H11.4404V74.7762Z"
                    fill="#231916"
                  />
                  <path
                    d="M15.0475 75.5689C15.0475 75.8678 15.0867 76.1537 15.1782 76.4136C15.2697 76.6735 15.4004 76.9074 15.5702 77.1023C15.7401 77.2972 15.9623 77.4532 16.2236 77.5701C16.485 77.6871 16.7856 77.7391 17.1123 77.7391C17.3867 77.7391 17.6742 77.7131 17.9748 77.6481C18.2623 77.5831 18.5367 77.4792 18.785 77.3492L18.8634 78.2978C18.5759 78.4148 18.2754 78.5057 17.9486 78.5577C17.635 78.6097 17.2952 78.6357 16.9555 78.6357C16.4327 78.6357 15.9884 78.5577 15.5833 78.3888C15.1913 78.2199 14.8515 77.999 14.5901 77.7001C14.3288 77.4012 14.1197 77.0503 13.989 76.6345C13.8583 76.2187 13.793 75.7638 13.793 75.257C13.793 74.8152 13.8583 74.3994 13.989 73.9965C14.1197 73.5937 14.3026 73.2428 14.5379 72.944C14.7731 72.6451 15.0736 72.3982 15.4265 72.2162C15.7793 72.0343 16.1714 71.9434 16.6157 71.9434C17.0992 71.9434 17.5043 72.0213 17.831 72.1903C18.1577 72.3592 18.4191 72.5801 18.6282 72.879C18.8242 73.1649 18.968 73.5157 19.0594 73.9056C19.1509 74.2954 19.1901 74.7243 19.1901 75.1791V75.5689H15.0606H15.0475ZM17.9879 74.7762C17.9879 74.5423 17.9617 74.2954 17.9225 74.0615C17.8833 73.8276 17.8049 73.6197 17.7134 73.4378C17.6089 73.2558 17.4651 73.1129 17.2952 72.9959C17.1123 72.879 16.8901 72.827 16.6157 72.827C16.3543 72.827 16.1191 72.879 15.9361 72.9959C15.7401 73.1129 15.5833 73.2558 15.4526 73.4508C15.3219 73.6327 15.2174 73.8406 15.1521 74.0745C15.0867 74.3084 15.0475 74.5423 15.0344 74.7632H17.9879V74.7762Z"
                    fill="#231916"
                  />
                  <path
                    d="M20.6895 69.5098H21.9179V70.7573H20.6895V69.5098ZM20.6895 72.0697H21.9179V78.4892H20.6895V72.0697Z"
                    fill="#231916"
                  />
                  <path
                    d="M23.7866 78.5045V73.5664C23.7866 73.3195 23.7866 73.0726 23.7866 72.8257C23.7866 72.5788 23.7605 72.3319 23.7344 72.085H24.8974L24.9366 73.1896C25.3679 72.3709 26.0344 71.9551 26.9361 71.9551C27.3151 71.9551 27.6418 72.0201 27.9031 72.137C28.1645 72.254 28.3866 72.4229 28.5435 72.6438C28.7003 72.8647 28.8179 73.1246 28.8963 73.4365C28.9747 73.7484 29.0139 74.0862 29.0139 74.4501V78.5045H27.7724V74.723C27.7724 74.5021 27.7594 74.2812 27.7332 74.0732C27.7071 73.8653 27.6418 73.6704 27.5634 73.5145C27.4719 73.3585 27.3543 73.2156 27.1974 73.1246C27.0406 73.0337 26.8315 72.9817 26.5571 72.9817C26.2696 72.9817 26.0344 73.0466 25.8383 73.1636C25.6423 73.2806 25.4855 73.4365 25.381 73.6314C25.2634 73.8263 25.1849 74.0472 25.1327 74.2812C25.0804 74.5281 25.0543 74.775 25.0543 75.0349V78.5305H23.8259L23.7866 78.5045Z"
                    fill="#231916"
                  />
                  <path
                    d="M31.0809 79.9742C31.3553 80.1171 31.6428 80.2341 31.9564 80.312C32.2701 80.39 32.5968 80.429 32.9104 80.429C33.2632 80.429 33.5638 80.377 33.8252 80.2601C34.0735 80.1431 34.2826 79.9872 34.4524 79.7922C34.6223 79.5843 34.7399 79.3504 34.8053 79.0645C34.8837 78.7786 34.9098 78.4668 34.9098 78.1289V77.3752C34.7138 77.7391 34.4394 78.0119 34.0996 78.2069C33.7598 78.4018 33.3939 78.4928 33.0019 78.4928C32.5445 78.4928 32.1655 78.4018 31.8519 78.2069C31.5382 78.0249 31.2769 77.778 31.0809 77.4662C30.8848 77.1673 30.728 76.8164 30.6365 76.4266C30.5451 76.0367 30.5059 75.6469 30.5059 75.244C30.5059 74.8152 30.5581 74.3994 30.6365 74.0095C30.728 73.6067 30.8718 73.2558 31.0809 72.957C31.2899 72.6451 31.5513 72.3982 31.8649 72.2162C32.1786 72.0343 32.5706 71.9434 33.028 71.9434C33.4593 71.9434 33.8382 72.0343 34.1649 72.2292C34.4917 72.4242 34.7661 72.723 34.9621 73.1389V72.0733H36.1513V78.1289C36.1513 79.1815 35.903 79.9872 35.3934 80.5589C34.8968 81.1177 34.1257 81.4036 33.0934 81.4036C32.7405 81.4036 32.3877 81.3776 32.0348 81.3126C31.682 81.2477 31.3422 81.1697 30.9894 81.0527L31.0678 79.9612L31.0809 79.9742ZM32.1524 76.7774C32.2701 76.9854 32.4269 77.1673 32.6229 77.3102C32.8189 77.4532 33.0803 77.5181 33.3939 77.5181C33.6945 77.5181 33.9428 77.4532 34.1388 77.3102C34.3348 77.1673 34.5047 76.9854 34.6223 76.7774C34.7399 76.5565 34.8314 76.3226 34.8837 76.0627C34.936 75.8028 34.9621 75.5429 34.9621 75.296C34.9621 75.0491 34.936 74.7762 34.8837 74.5033C34.8314 74.2305 34.753 73.9835 34.6223 73.7496C34.5047 73.5157 34.3348 73.3338 34.1388 73.1909C33.9428 73.0479 33.6945 72.97 33.3939 72.97C33.0672 72.97 32.8059 73.0349 32.6098 73.1779C32.4138 73.3208 32.2439 73.5027 32.1394 73.7366C32.0218 73.9576 31.9434 74.2175 31.9042 74.4903C31.8649 74.7632 31.8388 75.0361 31.8388 75.309C31.8388 75.5559 31.8649 75.8158 31.9042 76.0757C31.9434 76.3356 32.0348 76.5825 32.1394 76.8034"
                    fill="#231916"
                  />
                  <path
                    d="M41.9277 78.5043V69.252H43.1561V73.1504C43.313 72.7606 43.5613 72.4747 43.9141 72.2668C44.2669 72.0588 44.6459 71.9549 45.038 71.9549C45.5084 71.9549 45.9005 72.0458 46.2272 72.2278C46.5539 72.4097 46.8022 72.6566 47.0113 72.9685C47.2073 73.2804 47.351 73.6312 47.4425 74.0211C47.534 74.4239 47.5732 74.8267 47.5732 75.2556C47.5732 75.6844 47.534 76.1002 47.4425 76.5031C47.351 76.9059 47.2073 77.2698 46.9982 77.5816C46.7891 77.8935 46.5277 78.1534 46.2141 78.3483C45.8874 78.5433 45.4953 78.6342 45.0249 78.6342C44.5936 78.6342 44.2147 78.5303 43.888 78.3353C43.5613 78.1404 43.2868 77.8415 43.0908 77.4257L43.0647 78.4913H41.9277V78.5043ZM43.4567 76.8539C43.5743 77.0878 43.7442 77.2828 43.9402 77.4257C44.1363 77.5816 44.3846 77.6596 44.6851 77.6596C44.9988 77.6596 45.2601 77.5816 45.4561 77.4387C45.6522 77.2958 45.822 77.1008 45.9266 76.8669C46.0442 76.633 46.1226 76.3731 46.1618 76.1002C46.201 75.8143 46.2272 75.5414 46.2272 75.2816C46.2272 75.0217 46.201 74.7488 46.1618 74.4759C46.1226 74.203 46.0442 73.9561 45.9266 73.7222C45.809 73.5013 45.6522 73.3063 45.4561 73.1764C45.2601 73.0334 44.9988 72.9685 44.6851 72.9685C44.3846 72.9685 44.1363 73.0464 43.9402 73.1894C43.7442 73.3323 43.5743 73.5143 43.4567 73.7482C43.326 73.9691 43.2476 74.229 43.1953 74.5019C43.1431 74.7748 43.1169 75.0346 43.1169 75.2945C43.1169 75.5544 43.1431 75.8143 43.1953 76.1002C43.2476 76.3731 43.326 76.633 43.4567 76.8799"
                    fill="#231916"
                  />
                  <path
                    d="M50.0573 75.5689C50.0573 75.8678 50.0965 76.1537 50.188 76.4136C50.2794 76.6735 50.4101 76.9074 50.58 77.1023C50.7499 77.2972 50.9721 77.4532 51.2334 77.5701C51.4948 77.6871 51.7953 77.7391 52.1221 77.7391C52.3965 77.7391 52.684 77.7131 52.9846 77.6481C53.2721 77.5831 53.5465 77.4792 53.7948 77.3492L53.8732 78.2978C53.5857 78.4148 53.2851 78.5057 52.9584 78.5577C52.6448 78.6097 52.305 78.6357 51.9652 78.6357C51.4425 78.6357 50.9851 78.5577 50.5931 78.3888C50.201 78.2199 49.8613 77.999 49.5999 77.7001C49.3385 77.4012 49.1294 77.0503 48.9988 76.6345C48.8681 76.2187 48.8027 75.7638 48.8027 75.257C48.8027 74.8152 48.8681 74.3994 48.9988 73.9965C49.1294 73.5937 49.3124 73.2428 49.5476 72.944C49.7959 72.6451 50.0834 72.3982 50.4363 72.2162C50.7891 72.0343 51.1811 71.9434 51.6255 71.9434C52.109 71.9434 52.5141 72.0213 52.8408 72.1903C53.1675 72.3592 53.4289 72.5801 53.638 72.879C53.834 73.1649 53.9777 73.5157 54.0692 73.9056C54.1607 74.2954 54.1999 74.7243 54.1999 75.1791V75.5689H50.0703H50.0573ZM52.9976 74.7762C52.9976 74.5423 52.9715 74.2954 52.9323 74.0615C52.8931 73.8276 52.8147 73.6197 52.7232 73.4378C52.6186 73.2558 52.488 73.1129 52.305 72.9959C52.1351 72.879 51.8999 72.827 51.6255 72.827C51.3641 72.827 51.1289 72.879 50.9459 72.9959C50.7499 73.1129 50.5931 73.2558 50.4624 73.4508C50.3317 73.6327 50.2272 73.8406 50.1618 74.0745C50.0965 74.3084 50.0573 74.5423 50.0442 74.7632H52.9976V74.7762Z"
                    fill="#231916"
                  />
                  <path
                    d="M55.1829 80.3331C55.3789 80.398 55.575 80.424 55.7841 80.424C56.0977 80.424 56.3329 80.3201 56.4897 80.0992C56.6466 79.8912 56.7903 79.5664 56.921 79.1246L57.0386 78.7217L54.8301 72.0684H56.1761L57.6789 77.3443L59.1556 72.0684H60.4102L58.0579 79.3455C57.9795 79.5924 57.875 79.8393 57.7704 80.0862C57.6659 80.3331 57.5352 80.554 57.3784 80.7489C57.2216 80.9438 57.0255 81.0998 56.8034 81.2297C56.5812 81.3467 56.3068 81.4116 55.9801 81.4116C55.6403 81.4116 55.3397 81.3857 55.0784 81.3207L55.1568 80.3331H55.1829Z"
                    fill="#231916"
                  />
                  <path
                    d="M62.7947 78.4005C62.2328 78.1406 61.8015 77.7378 61.501 77.192C61.2135 76.6462 61.0566 76.0095 61.0566 75.2688C61.0566 74.775 61.135 74.3331 61.2788 73.9303C61.4225 73.5275 61.6316 73.1766 61.893 72.8777C62.1544 72.5918 62.4811 72.3579 62.847 72.202C63.226 72.0331 63.6311 71.9551 64.1015 71.9551C64.585 71.9551 65.0163 72.033 65.3953 72.189C65.7743 72.3449 66.0879 72.5658 66.3492 72.8517C66.6106 73.1376 66.8066 73.4885 66.9373 73.8913C67.068 74.3071 67.1333 74.762 67.1333 75.2558C67.1333 75.7496 67.068 76.1914 66.9373 76.6072C66.8066 77.0231 66.6106 77.3739 66.3492 77.6728C66.0879 77.9717 65.7743 78.2056 65.3953 78.3745C65.0163 78.5435 64.585 78.6214 64.1015 78.6214C63.618 78.6214 63.1606 78.5435 62.7947 78.3745M62.7947 76.8801C62.9385 77.101 63.1083 77.283 63.3305 77.4259C63.5396 77.5688 63.801 77.6338 64.1146 77.6338C64.4282 77.6338 64.6765 77.5688 64.8987 77.4259C65.1208 77.283 65.2907 77.101 65.4345 76.8801C65.5652 76.6592 65.6697 76.3993 65.735 76.1134C65.8004 75.8275 65.8265 75.5287 65.8265 75.2298C65.8265 74.9439 65.8004 74.671 65.735 74.3851C65.6828 74.0992 65.5782 73.8523 65.4475 73.6314C65.3169 73.4105 65.1339 73.2286 64.9248 73.0856C64.7157 72.9427 64.4413 72.8777 64.1277 72.8777C63.814 72.8777 63.5527 72.9427 63.3436 73.0856C63.1345 73.2286 62.9515 73.4105 62.8208 73.6314C62.6902 73.8523 62.5856 74.1122 62.5203 74.3851C62.4549 74.658 62.4288 74.9439 62.4288 75.2298C62.4288 75.5157 62.4549 75.8145 62.5203 76.1004C62.5856 76.3863 62.6771 76.6462 62.8078 76.8801"
                    fill="#231916"
                  />
                  <path
                    d="M68.6675 78.5045V73.5664C68.6675 73.3195 68.6675 73.0726 68.6675 72.8257C68.6675 72.5788 68.6414 72.3319 68.6152 72.085H69.7783L69.8175 73.1896C70.2488 72.3709 70.9152 71.9551 71.8169 71.9551C72.1959 71.9551 72.5226 72.0201 72.784 72.137C73.0453 72.254 73.2675 72.4229 73.4243 72.6438C73.5811 72.8647 73.6988 73.1246 73.7772 73.4365C73.8556 73.7484 73.8948 74.0862 73.8948 74.4501V78.5045H72.6533V74.723C72.6533 74.5021 72.6402 74.2812 72.6141 74.0732C72.588 73.8653 72.5226 73.6704 72.4442 73.5145C72.3527 73.3585 72.2351 73.2156 72.0783 73.1246C71.9215 73.0207 71.7124 72.9817 71.438 72.9817C71.1505 72.9817 70.9152 73.0466 70.7192 73.1636C70.5232 73.2806 70.3794 73.4365 70.2618 73.6314C70.1442 73.8263 70.0658 74.0472 70.0135 74.2812C69.9613 74.5281 69.9351 74.775 69.9351 75.0349V78.5305H68.7067L68.6675 78.5045Z"
                    fill="#231916"
                  />
                  <path
                    d="M79.967 78.501L79.8886 77.4355C79.7057 77.8513 79.4313 78.1502 79.1045 78.3451C78.7648 78.54 78.3858 78.644 77.9545 78.644C77.4841 78.644 77.092 78.553 76.7653 78.3581C76.4386 78.1632 76.1773 77.9163 75.9812 77.5914C75.7722 77.2795 75.6284 76.9157 75.5369 76.5128C75.4455 76.11 75.4062 75.6942 75.4062 75.2653C75.4062 74.8365 75.4455 74.4207 75.5369 74.0308C75.6284 73.628 75.7722 73.2771 75.9812 72.9782C76.1903 72.6664 76.4517 72.4195 76.7653 72.2375C77.092 72.0556 77.4841 71.9646 77.9545 71.9646C78.3466 71.9646 78.7256 72.0686 79.0653 72.2765C79.4051 72.4844 79.6665 72.7833 79.8233 73.1602V69.2617H81.0517V76.5908C81.0517 76.9547 81.0517 77.2795 81.0648 77.5914C81.0648 77.9033 81.0909 78.2152 81.104 78.514H79.954L79.967 78.501ZM77.0398 76.8637C77.1574 77.0976 77.3142 77.2795 77.5102 77.4355C77.7062 77.5914 77.9676 77.6564 78.2812 77.6564C78.5818 77.6564 78.8301 77.5784 79.0261 77.4225C79.2222 77.2665 79.392 77.0716 79.5097 76.8507C79.6273 76.6168 79.7187 76.3699 79.771 76.084C79.8233 75.8111 79.8494 75.5382 79.8494 75.2783C79.8494 75.0184 79.8233 74.7585 79.771 74.4856C79.7187 74.2127 79.6273 73.9529 79.5097 73.7319C79.392 73.498 79.2222 73.3161 79.0261 73.1732C78.8301 73.0302 78.5818 72.9523 78.2812 72.9523C77.9545 72.9523 77.7062 73.0172 77.5102 73.1602C77.3142 73.3031 77.1574 73.485 77.0398 73.706C76.9222 73.9269 76.8437 74.1868 76.8045 74.4597C76.7653 74.7325 76.7392 75.0054 76.7392 75.2783C76.7392 75.5512 76.7653 75.8111 76.8045 76.097C76.8437 76.3699 76.9352 76.6298 77.0398 76.8637Z"
                    fill="#231916"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2534_31218">
                    <rect
                      width="80.1602"
                      height="80.7369"
                      fill="white"
                      transform="translate(0.945312 0.677734)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="brand-mobile-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="96"
                height="23"
                viewBox="0 0 96 23"
                fill="none"
              >
                <g clip-path="url(#clip0_2534_31239)">
                  <path
                    d="M52.5177 4.20714C51.8019 3.26544 50.8476 2.46456 49.9017 1.9013C46.5273 -0.131714 41.5083 -0.334135 37.8952 1.31164C37.3328 1.61967 36.7193 1.86609 36.1995 2.25334C33.8817 3.61748 32.186 6.05533 31.5639 8.6428C31.4872 8.86283 31.4702 9.13566 31.3679 9.36448C29.9193 9.25887 28.4963 9.07405 27.0391 8.99484L26.971 8.93323L26.9539 0.642767L26.9369 0.589961L24.3635 0.545957C23.6818 0.545957 23.0086 0.501952 22.3269 0.545957V3.69669L22.3098 8.71321L22.2587 8.75722C20.8698 8.73081 19.4382 8.75722 18.0492 8.82762L14.2999 9.05645C13.746 9.14446 13.2262 9.14446 12.6723 9.24127C12.5445 9.24127 12.3911 9.30287 12.2548 9.24127V4.90241V0.836387L12.2292 0.537156C10.6868 0.501952 9.20415 0.537156 7.67032 0.537156L7.62771 0.58116V9.90134L7.56806 9.96294C5.22472 10.4206 2.91546 10.9838 0.691406 11.7231H7.55102L7.59363 11.7671L7.61067 16.6428V21.6946C7.61067 21.6946 7.61067 21.8002 7.67032 21.7914L12.1695 21.7738L12.2207 21.7562L12.2462 11.7671L12.2888 11.7055L17.2312 11.6791L22.2332 11.7055L22.3013 11.7495V21.589L22.3184 21.7738C23.8607 21.7738 25.386 21.8442 26.9284 21.8442L26.9454 21.809V11.8903L27.0221 11.8111H31.2231L31.2487 11.8375C31.3594 14.3194 32.186 16.5196 33.7283 18.3502C36.7789 21.7562 41.406 22.6099 45.8797 21.8706C48.2741 21.3689 50.5664 20.3392 52.2876 18.3766C54.9207 15.3315 55.3809 10.3766 53.9152 6.61859C53.5488 5.7649 53.1227 4.95522 52.5092 4.20714M47.1578 17.3205C44.7975 18.9311 40.9458 18.8343 38.6281 17.1533C37.4436 16.3084 36.5318 14.9795 36.2506 13.5537C36.0887 13.0081 35.9609 12.4536 35.9609 11.8375C36.0376 11.7495 36.1739 11.8375 36.2592 11.7847L42.9824 11.7495L42.9995 11.7319C42.1729 11.3887 41.2697 11.2127 40.409 10.9662C39.02 10.5526 37.5373 10.3238 36.0887 10.0157C35.995 9.91014 36.1058 9.76052 36.0887 9.62851C36.1143 9.47009 36.1825 9.31167 36.2336 9.13565C36.2251 8.73081 36.4211 8.41398 36.5233 8.04434C37.2732 6.09934 39.0967 4.49757 41.0737 4.06632C42.3178 3.71429 43.826 3.75829 45.0957 4.02232C45.4706 4.10153 45.8285 4.24234 46.1864 4.38316C48.1122 5.05203 49.5182 7.02343 49.8761 9.03004C50.4811 12.172 49.8676 15.5515 47.1664 17.3293"
                    fill="#0056C4"
                  />
                  <path
                    d="M73.267 5.21906L76.5222 0.836198V0.75699C74.835 0.739388 72.9603 0.75699 71.2049 0.75699C69.2791 3.49408 67.4555 6.23996 65.5127 8.97705C65.3678 9.17067 65.2315 9.38189 65.0355 9.54911C64.4987 8.83624 64.0215 8.05295 63.5102 7.34888L61.3628 4.13654C60.5704 2.97482 59.829 1.7955 58.9854 0.677782C58.5934 0.66018 58.1674 0.695384 57.7924 0.642578H53.6767L53.6426 0.677782C55.7814 3.65249 58.0736 6.592 60.2125 9.52271L62.6836 12.9551V21.536L62.7177 21.7824C64.3368 21.8 65.7428 21.8088 67.3192 21.8352L67.3533 21.7824L67.3789 16.0178V13.1047L69.4751 10.2708L72.3894 6.35438C72.7302 6.01994 72.9432 5.57989 73.2585 5.22786"
                    fill="#0056C4"
                  />
                  <path
                    d="M92.5497 15.9551L90.266 11.0529L89.6525 9.7504L87.5392 5.30594C86.866 3.80978 86.1247 2.34883 85.4685 0.86147L85.4004 0.755859H81.4891L81.4294 0.799864C81.046 1.72396 80.5858 2.63926 80.1939 3.57215C80.1087 3.75697 80.0916 3.9682 79.9467 4.12661C78.8986 6.48526 77.842 8.83511 76.828 11.2114L74.3312 16.8879C73.8455 18.0409 73.2831 19.141 72.8315 20.3115C72.5503 20.7692 72.3713 21.2796 72.1413 21.7725C72.0816 21.8429 72.1839 21.8429 72.2265 21.8429L76.9302 21.8869L76.9813 21.8429C77.5097 20.5139 78.055 19.2026 78.6089 17.8825C78.8901 17.3192 79.0605 16.6943 79.3673 16.1399L84.7187 16.1223H87.7437C88.5873 18.0233 89.4053 19.9419 90.2234 21.8429L90.2916 21.8869L94.1602 21.8429H95.2254L95.285 21.8253C94.3903 19.8715 93.4615 17.9177 92.5667 15.9639M86.0735 12.5227H80.9352V12.3819C81.7873 10.3313 82.648 8.27185 83.4831 6.20363H83.5342C84.4204 8.28945 85.3151 10.3841 86.1587 12.4963L86.065 12.5227H86.0735Z"
                    fill="#0056C4"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2534_31239">
                    <rect
                      width="94.5775"
                      height="21.9143"
                      fill="white"
                      transform="translate(0.691406 0.203125)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="brand-mobile-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="99"
                height="75"
                viewBox="0 0 99 75"
                fill="none"
              >
                <g clip-path="url(#clip0_2534_31245)">
                  <path
                    d="M30.5449 39.1031L40.0025 0.351107C40.7645 0.283073 41.5402 0.255859 42.3158 0.255859C54.2229 0.255859 64.3337 7.93006 67.9534 18.6114L57.6521 23.6322C62.3061 27.7143 66.1572 32.6943 68.9332 38.3003L64.6739 40.3821C64.6739 40.3821 64.6467 40.3277 64.6331 40.3005C60.9725 33.0073 55.3115 26.8843 48.3578 22.6798L61.6665 16.1894C58.1148 10.0255 51.7054 5.71216 44.2482 5.07265L35.9609 39.1031H30.5312H30.5449Z"
                    fill="#1D1D1B"
                  />
                  <path
                    d="M3.63241 51.411H4.54415C5.94578 51.411 6.46288 50.8939 6.46288 49.0978C6.46288 47.3018 5.94578 46.7847 4.54415 46.7847H3.63241V51.411ZM3.63241 59.7111H1.04688V44.6484H4.68023C7.57875 44.6484 9.06202 45.873 9.06202 49.0978C9.06202 51.5198 8.12307 52.4995 7.25215 52.8941L9.44305 59.7111H6.81669L4.97961 53.4656C4.6394 53.5064 4.10869 53.5336 3.64601 53.5336V59.7111H3.63241Z"
                    fill="#1D1D1B"
                  />
                  <path
                    d="M14.066 55.9954C14.066 57.1248 14.4062 57.669 15.4404 57.669C16.4746 57.669 16.8148 57.1248 16.8148 55.9954V48.362C16.8148 47.2327 16.4882 46.6884 15.4404 46.6884C14.3926 46.6884 14.066 47.2327 14.066 48.362V55.9954ZM11.4805 48.294C11.4805 46.1714 12.7324 44.4297 15.4404 44.4297C18.1484 44.4297 19.4004 46.1577 19.4004 48.294V56.0498C19.4004 58.1725 18.1484 59.9142 15.4404 59.9142C12.7324 59.9142 11.4805 58.1861 11.4805 56.0498V48.294Z"
                    fill="#1D1D1B"
                  />
                  <path
                    d="M24.5054 57.5884H25.4035C26.7779 57.5884 27.2542 57.0714 27.2542 55.4794V48.8801C27.2542 47.2881 26.7779 46.7711 25.4035 46.7711H24.5054V57.5748V57.5884ZM21.9062 44.6484H25.7437C28.4109 44.6484 29.8398 46.1044 29.8398 49.1931V55.1664C29.8398 58.2552 28.4245 59.7111 25.7437 59.7111H21.9062V44.6484Z"
                    fill="#1D1D1B"
                  />
                  <path
                    d="M32.3398 59.7111V44.6484H39.2663V46.9072H34.9254V50.7851H38.273V53.0438H34.9254V57.466H39.5657V59.7111H32.3398Z"
                    fill="#1D1D1B"
                  />
                  <path
                    d="M41.6094 59.7111V44.6484H44.0044L47.1615 53.2615H47.2023V44.6484H49.5429V59.7111H47.2839L43.9908 50.3088H43.95V59.7111H41.6094Z"
                    fill="#1D1D1B"
                  />
                  <path
                    d="M56.754 48.368C56.6452 47.0753 55.9648 46.6943 55.3796 46.6943C54.5495 46.6943 54.0868 47.2386 54.0868 48.1775C54.0868 50.7491 59.3396 51.9737 59.3396 56.0694C59.3396 58.5594 57.6658 59.9337 55.2435 59.9337C52.8213 59.9337 51.4605 58.0151 51.3652 55.7564L53.8283 55.4026C53.9372 56.9266 54.5359 57.675 55.366 57.675C56.2641 57.675 56.8629 57.1987 56.8629 56.3007C56.8629 53.3208 51.6102 52.518 51.6102 48.2047C51.6102 45.8099 53.0662 44.4492 55.6109 44.4492C57.7202 44.4492 58.9721 45.9732 59.2035 48.0958L56.7404 48.368H56.754Z"
                    fill="#1D1D1B"
                  />
                  <path
                    d="M62.8125 46.9072H60.3086V44.6484H67.9019V46.9072H65.398V59.7111H62.8125V46.9072Z"
                    fill="#1D1D1B"
                  />
                  <path
                    d="M72.0094 55.9954C72.0094 57.1248 72.3496 57.669 73.3838 57.669C74.418 57.669 74.7582 57.1248 74.7582 55.9954V48.362C74.7582 47.2327 74.4316 46.6884 73.3838 46.6884C72.336 46.6884 72.0094 47.2327 72.0094 48.362V55.9954ZM69.4238 48.294C69.4238 46.1714 70.6758 44.4297 73.3838 44.4297C76.0918 44.4297 77.3437 46.1577 77.3437 48.294V56.0498C77.3437 58.1725 76.0918 59.9142 73.3838 59.9142C70.6758 59.9142 69.4238 58.1861 69.4238 56.0498V48.294Z"
                    fill="#1D1D1B"
                  />
                  <path
                    d="M85.0732 49.6879V48.5177C85.0732 47.2523 84.4881 46.708 83.8213 46.708C82.7735 46.708 82.4469 47.2523 82.4469 48.3816V56.015C82.4469 57.1444 82.7871 57.6886 83.8213 57.6886C84.7602 57.6886 85.0732 57.1444 85.0732 56.1647V54.355H87.6587V56.083C87.6587 58.2057 86.4068 59.9474 83.8213 59.9474C81.1133 59.9474 79.8613 58.2193 79.8613 56.083V48.3272C79.8613 46.2046 81.1133 44.4629 83.8213 44.4629C86.5293 44.4629 87.6587 46.3406 87.6587 48.5993V49.7015H85.0732V49.6879Z"
                    fill="#1D1D1B"
                  />
                  <path
                    d="M90.1738 59.7111V44.6484H92.7594V50.2136H92.8002L95.5082 44.6484H98.0937L95.3041 50.268L98.4475 59.7111H95.8212L93.7119 52.7036H93.6711L92.7594 54.3773V59.7111H90.1738Z"
                    fill="#1D1D1B"
                  />
                  <path
                    d="M2.67373 72.0689C3.66712 72.0689 4.10257 71.7831 4.10257 71.1436C4.10257 70.4633 3.62629 70.1639 2.76898 70.1639H1.68034V72.0689H2.67373ZM2.55125 69.6061C3.08197 69.6061 3.89845 69.538 3.89845 68.7216C3.89845 67.9596 3.09558 67.9052 2.456 67.9052H1.68034V69.6061H2.55125ZM0.986328 72.6812V67.2793H2.51043C3.96649 67.2793 4.60607 67.7283 4.60607 68.6536C4.60607 69.2115 4.33391 69.6061 3.8032 69.8102C4.59246 70.0959 4.8238 70.5993 4.8238 71.1844C4.8238 72.3954 3.83041 72.6812 2.71455 72.6812H0.986328Z"
                    fill="#6AC0B3"
                  />
                  <path
                    d="M6.32311 70.3534H8.30989C8.30989 69.673 7.94247 69.224 7.33011 69.224C6.71774 69.224 6.40476 69.7411 6.32311 70.3534ZM7.3165 72.7754C6.26868 72.7754 5.66992 71.9862 5.66992 70.7344C5.66992 69.4826 6.35032 68.6934 7.33011 68.6934C8.37793 68.6934 8.93586 69.4417 8.93586 70.5847C8.93586 70.6391 8.93586 70.7208 8.93586 70.816H6.3095C6.35033 71.6868 6.63609 72.2175 7.37093 72.2175C7.82 72.2175 8.1738 72.027 8.43236 71.5236L8.92225 71.7957C8.54122 72.5033 7.96968 72.7618 7.3165 72.7618"
                    fill="#6AC0B3"
                  />
                  <path
                    d="M12.9338 71.7685C12.5664 72.4488 12.0493 72.7754 11.328 72.7754C10.2802 72.7754 9.64062 71.9998 9.64062 70.748C9.64062 69.4962 10.2938 68.6934 11.3416 68.6934C12.0629 68.6934 12.5936 69.0063 12.8521 69.7547L12.3078 69.9588C12.1037 69.4553 11.8043 69.2376 11.3552 69.2376C10.6884 69.2376 10.2666 69.7955 10.2666 70.748C10.2666 71.7005 10.6748 72.2175 11.3552 72.2175C11.8179 72.2175 12.1309 71.9998 12.4167 71.4691L12.9338 71.7549V71.7685Z"
                    fill="#6AC0B3"
                  />
                  <path
                    d="M15.9575 70.6021C15.2498 70.7382 14.828 70.8607 14.5422 71.0239C14.3109 71.16 14.202 71.3913 14.202 71.6635C14.202 72.0308 14.4197 72.2486 14.8144 72.2486C15.209 72.2486 15.6989 72.0309 15.9711 71.6907V70.5885L15.9575 70.6021ZM16.0391 72.684L15.9847 72.2213C15.5764 72.5751 15.1001 72.7656 14.6375 72.7656C13.9571 72.7656 13.5488 72.3574 13.5488 71.7179C13.5488 71.2553 13.7393 70.8879 14.202 70.643C14.5966 70.4389 15.2634 70.262 15.9847 70.1259C16.0391 69.4456 15.7806 69.2143 15.209 69.2143C14.7463 69.2143 14.4606 69.3911 14.1884 69.7993L13.7257 69.5C14.0795 68.9149 14.5694 68.6836 15.2362 68.6836C16.1888 68.6836 16.6243 69.0918 16.6243 69.949V72.0581L16.6787 72.6704H16.0527L16.0391 72.684Z"
                    fill="#6AC0B3"
                  />
                  <path
                    d="M20.1606 72.6805V72.1362C19.7387 72.558 19.3305 72.7621 18.8406 72.7621C18.4324 72.7621 18.133 72.6124 17.9561 72.3539C17.8064 72.1498 17.752 71.8641 17.752 71.415V68.7617H18.3915V71.4286C18.3915 71.9593 18.582 72.177 19.0311 72.177C19.3849 72.177 19.6843 72.0409 20.1334 71.5783V68.7617H20.7729V72.6532H20.1606V72.6805Z"
                    fill="#6AC0B3"
                  />
                  <path
                    d="M23.9442 69.7275C23.6993 69.3465 23.4135 69.2104 23.0325 69.2104C22.6242 69.2104 22.3793 69.4145 22.3793 69.7547C22.3793 70.6391 24.5566 70.0812 24.5566 71.6188C24.5566 72.34 23.9714 72.7754 23.1141 72.7754C22.4201 72.7754 21.9711 72.5169 21.6309 71.9862L22.1071 71.646C22.3929 72.0678 22.6651 72.2583 23.1414 72.2583C23.6585 72.2583 23.9306 72.027 23.9306 71.6596C23.9306 70.6527 21.7669 71.265 21.7669 69.7819C21.7669 69.1288 22.2977 68.6934 23.0461 68.6934C23.6585 68.6934 24.1075 68.9111 24.4069 69.4009L23.9442 69.7139V69.7275Z"
                    fill="#6AC0B3"
                  />
                  <path
                    d="M25.8485 70.3534H27.8353C27.8353 69.673 27.4679 69.224 26.8555 69.224C26.2431 69.224 25.9301 69.7411 25.8485 70.3534ZM26.8419 72.7754C25.7941 72.7754 25.1953 71.9862 25.1953 70.7344C25.1953 69.4826 25.8757 68.6934 26.8555 68.6934C27.9033 68.6934 28.4612 69.4417 28.4612 70.5847C28.4612 70.6391 28.4612 70.7208 28.4612 70.816H25.8349C25.8757 71.6868 26.1615 72.2175 26.8963 72.2175C27.3454 72.2175 27.6992 72.027 27.9577 71.5236L28.4476 71.7957C28.0666 72.5033 27.4951 72.7618 26.8419 72.7618"
                    fill="#6AC0B3"
                  />
                  <path
                    d="M31.62 70.3534H33.6068C33.6068 69.673 33.2393 69.224 32.627 69.224C32.0146 69.224 31.7016 69.7411 31.62 70.3534ZM32.6134 72.7754C31.5656 72.7754 30.9668 71.9862 30.9668 70.7344C30.9668 69.4826 31.6472 68.6934 32.627 68.6934C33.6748 68.6934 34.2327 69.4417 34.2327 70.5847C34.2327 70.6391 34.2327 70.7208 34.2327 70.816H31.6064C31.6472 71.6868 31.933 72.2175 32.6678 72.2175C33.1169 72.2175 33.4707 72.027 33.7292 71.5236L34.2191 71.7957C33.8381 72.5033 33.2666 72.7618 32.6134 72.7618"
                    fill="#6AC0B3"
                  />
                  <path
                    d="M35.9977 72.6786L34.6777 68.7871H35.3717L36.3379 71.7942H36.3515L37.3449 68.7871H38.0253L36.6781 72.6786H35.9977Z"
                    fill="#6AC0B3"
                  />
                  <path
                    d="M39.1005 70.3534H41.0872C41.0872 69.673 40.7198 69.224 40.1074 69.224C39.4951 69.224 39.1821 69.7411 39.1005 70.3534ZM40.0938 72.7754C39.046 72.7754 38.4473 71.9862 38.4473 70.7344C38.4473 69.4826 39.1277 68.6934 40.1074 68.6934C41.1553 68.6934 41.7132 69.4417 41.7132 70.5847C41.7132 70.6391 41.7132 70.7208 41.7132 70.816H39.0868C39.1277 71.6868 39.4134 72.2175 40.1483 72.2175C40.5973 72.2175 40.9511 72.027 41.2097 71.5236L41.6996 71.7957C41.3186 72.5033 40.747 72.7618 40.0938 72.7618"
                    fill="#6AC0B3"
                  />
                  <path
                    d="M42.6953 72.6801V68.7886H43.3077V69.5234C43.6343 68.9383 44.0153 68.6934 44.4916 68.6934C44.5324 68.6934 44.5596 68.6934 44.6141 68.6934V69.3193C44.6141 69.3193 44.5052 69.3193 44.4644 69.3193C43.92 69.3193 43.5526 69.7275 43.3349 70.2581V72.6665H42.6953V72.6801Z"
                    fill="#6AC0B3"
                  />
                  <path
                    d="M45.6669 74.0685C45.4628 74.0685 45.2995 74.0549 45.1362 74.0277V73.4971C45.2995 73.5243 45.4492 73.5379 45.5581 73.5379C45.9799 73.5379 46.1568 73.3474 46.3337 72.8303L46.4154 72.6126L45.0273 68.8027H45.735L46.7147 71.7146H46.7284L47.6809 68.8027H48.3477L47.0686 72.5718C46.6739 73.7284 46.4018 74.0821 45.6533 74.0821"
                    fill="#6AC0B3"
                  />
                  <path
                    d="M51.2431 70.3534H53.2299C53.2299 69.673 52.8625 69.224 52.2501 69.224C51.6377 69.224 51.3247 69.7411 51.2431 70.3534ZM52.2501 72.7754C51.2023 72.7754 50.6035 71.9862 50.6035 70.7344C50.6035 69.4826 51.2839 68.6934 52.2637 68.6934C53.3115 68.6934 53.8695 69.4417 53.8695 70.5847C53.8695 70.6391 53.8695 70.7208 53.8695 70.816H51.2431C51.2839 71.6868 51.5697 72.2175 52.3045 72.2175C52.7536 72.2175 53.1074 72.027 53.366 71.5236L53.8558 71.7957C53.4748 72.5033 52.9033 72.7618 52.2501 72.7618"
                    fill="#6AC0B3"
                  />
                  <path
                    d="M54.9872 74.0685C54.7831 74.0685 54.6198 74.0549 54.4565 74.0277V73.4971C54.6198 73.5243 54.7695 73.5379 54.8784 73.5379C55.3002 73.5379 55.4771 73.3474 55.654 72.8303L55.7357 72.6126L54.3477 68.8027H55.0553L56.0351 71.7146H56.0487L57.0012 68.8027H57.668L56.3889 72.5718C55.9942 73.7284 55.7221 74.0821 54.9736 74.0821"
                    fill="#6AC0B3"
                  />
                  <path
                    d="M58.7665 70.3534H60.7532C60.7532 69.673 60.3858 69.224 59.7735 69.224C59.1611 69.224 58.8481 69.7411 58.7665 70.3534ZM59.7599 72.7754C58.712 72.7754 58.1133 71.9862 58.1133 70.7344C58.1133 69.4826 58.7937 68.6934 59.7735 68.6934C60.8213 68.6934 61.3792 69.4417 61.3792 70.5847C61.3792 70.6391 61.3792 70.7208 61.3792 70.816H58.7529C58.7937 71.6868 59.0795 72.2175 59.8143 72.2175C60.2634 72.2175 60.6172 72.027 60.8757 71.5236L61.3656 71.7957C60.9846 72.5033 60.413 72.7618 59.7599 72.7618"
                    fill="#6AC0B3"
                  />
                  <path
                    d="M64.1561 68.7915H64.7957V72.6831H64.1561V68.7915ZM64.1289 67.2676H64.8365V68.0432H64.1289V67.2676Z"
                    fill="#6AC0B3"
                  />
                  <path
                    d="M67.9794 69.7275C67.7344 69.3465 67.4487 69.2104 67.0676 69.2104C66.6594 69.2104 66.4145 69.4145 66.4145 69.7547C66.4145 70.6391 68.5918 70.0812 68.5918 71.6188C68.5918 72.34 68.0066 72.7754 67.1493 72.7754C66.4553 72.7754 66.0062 72.5169 65.666 71.9862L66.1423 71.646C66.4281 72.0678 66.7002 72.2583 67.1765 72.2583C67.6936 72.2583 67.9658 72.027 67.9658 71.6596C67.9658 70.6527 65.8021 71.265 65.8021 69.7819C65.8021 69.1288 66.3328 68.6934 67.0813 68.6934C67.6936 68.6934 68.1427 68.9111 68.4421 69.4009L67.9794 69.7139V69.7275Z"
                    fill="#6AC0B3"
                  />
                  <path
                    d="M73.7256 69.8646C73.467 69.4836 73.1132 69.2795 72.7186 69.2795C72.0654 69.2795 71.6708 69.8646 71.6708 70.7898C71.6708 71.7151 72.0654 72.2322 72.705 72.2322C73.086 72.2322 73.4806 72.0144 73.7256 71.6471V69.8782V69.8646ZM73.8889 72.6812L73.78 72.2185C73.3854 72.5995 73.0452 72.7628 72.5281 72.7628C71.5891 72.7628 71.0176 71.96 71.0176 70.7626C71.0176 69.5108 71.6572 68.7216 72.6097 68.7216C73.0588 68.7216 73.4126 68.8849 73.7256 69.2251V67.2793H74.3652V72.6812H73.8889Z"
                    fill="#6AC0B3"
                  />
                  <path
                    d="M75.6014 68.7915H76.241V72.6831H75.6014V68.7915ZM75.5742 67.2676H76.2818V68.0432H75.5742V67.2676Z"
                    fill="#6AC0B3"
                  />
                  <path
                    d="M79.8211 72.6846V69.3102H78.3242V72.6846H77.6846V69.3102H77.0723V68.7795H77.6846V68.3169C77.6846 67.5685 77.984 67.1875 78.7461 67.1875C78.8685 67.1875 79.0046 67.1875 79.1407 67.2147V67.759C79.0454 67.7318 78.923 67.7182 78.8277 67.7182C78.5011 67.7182 78.3106 67.827 78.3106 68.2624V68.7795H79.8075V68.3169C79.8075 67.5685 80.1069 67.1875 80.8825 67.1875C81.005 67.1875 81.1411 67.1875 81.2772 67.2147V67.759C81.1819 67.7318 81.073 67.7182 80.9642 67.7182C80.624 67.7182 80.4471 67.827 80.4471 68.2624V68.7795H81.2499V69.3102H80.4471V72.6846H79.8075H79.8211Z"
                    fill="#6AC0B3"
                  />
                  <path
                    d="M82.3505 70.3534H84.3372C84.3372 69.673 83.9698 69.224 83.3574 69.224C82.7451 69.224 82.4321 69.7411 82.3505 70.3534ZM83.3438 72.7754C82.296 72.7754 81.6973 71.9862 81.6973 70.7344C81.6973 69.4826 82.3777 68.6934 83.3574 68.6934C84.4053 68.6934 84.9632 69.4417 84.9632 70.5847C84.9632 70.6391 84.9632 70.7208 84.9632 70.816H82.3368C82.3777 71.6868 82.6634 72.2175 83.3983 72.2175C83.8473 72.2175 84.2011 72.027 84.4597 71.5236L84.9496 71.7957C84.5686 72.5033 83.997 72.7618 83.3438 72.7618"
                    fill="#6AC0B3"
                  />
                  <path
                    d="M85.9414 72.6801V68.7886H86.5538V69.5234C86.8804 68.9383 87.2614 68.6934 87.7377 68.6934C87.7785 68.6934 87.8057 68.6934 87.8601 68.6934V69.3193C87.8601 69.3193 87.7513 69.3193 87.7241 69.3193C87.1797 69.3193 86.8123 69.7275 86.5946 70.2581V72.6665H85.955L85.9414 72.6801Z"
                    fill="#6AC0B3"
                  />
                  <path
                    d="M88.9911 70.3534H90.9779C90.9779 69.673 90.6105 69.224 89.9981 69.224C89.3858 69.224 89.0728 69.7411 88.9911 70.3534ZM89.9981 72.7754C88.9503 72.7754 88.3516 71.9862 88.3516 70.7344C88.3516 69.4826 89.032 68.6934 90.0117 68.6934C91.0596 68.6934 91.6175 69.4417 91.6175 70.5847C91.6175 70.6391 91.6175 70.7208 91.6175 70.816H88.9911C89.032 71.6868 89.3177 72.2175 90.0526 72.2175C90.5016 72.2175 90.8555 72.027 91.114 71.5236L91.6039 71.7957C91.2229 72.5033 90.6513 72.7618 89.9981 72.7618"
                    fill="#6AC0B3"
                  />
                  <path
                    d="M94.9791 72.6801V70.0132C94.9791 69.4826 94.7886 69.2512 94.3395 69.2512C93.9993 69.2512 93.6727 69.4009 93.2372 69.8499V72.6665H92.5977V68.775H93.21V69.3193C93.6455 68.8975 94.0401 68.6934 94.53 68.6934C94.9382 68.6934 95.2376 68.8294 95.4145 69.1016C95.5642 69.2921 95.6186 69.5914 95.6186 70.0268V72.6801H94.9791Z"
                    fill="#6AC0B3"
                  />
                  <path
                    d="M98.4395 72.6803C98.249 72.7211 98.0721 72.7347 97.8408 72.7347C97.2012 72.7347 96.9562 72.4898 96.9562 71.7278V69.3058H96.3711V68.7751H96.9562V67.4961H97.5822V68.7751H98.4259V69.3058H97.5822V71.7006C97.5822 72.0271 97.7047 72.1768 97.9905 72.1768C98.1265 72.1768 98.2626 72.1632 98.4259 72.1224V72.6667L98.4395 72.6803Z"
                    fill="#6AC0B3"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2534_31245">
                    <rect
                      width="97.4609"
                      height="73.8166"
                      fill="white"
                      transform="translate(0.986328 0.255859)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="brand-mobile-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="130"
                height="29"
                viewBox="0 0 130 29"
                fill="none"
              >
                <g clip-path="url(#clip0_2534_31190)">
                  <path
                    d="M10.7493 0.630859L6.29948 11.5202L3.52147 4.72686H0.732422L5.18772 15.426H7.41123L13.5728 0.630859H10.7493Z"
                    fill="#2D3C4B"
                  />
                  <path
                    d="M18.4167 13.3391C16.5243 13.3391 15.2304 11.9022 15.2304 10.0711C15.2304 8.24 16.5546 6.80168 18.4167 6.80168C20.2789 6.80168 21.712 8.13326 21.712 10.0711C21.712 12.0089 20.1492 13.3391 18.4167 13.3391ZM24.0873 12.1937V4.72288H21.5203V6.27206C21.1134 5.25387 19.8099 4.49023 18.076 4.49023C16.5574 4.49023 15.2732 5.01985 14.2263 6.10373C13.1987 7.16434 12.6855 8.47949 12.6855 10.0725C12.6855 11.6654 13.1987 12.9806 14.2263 14.0631C15.2746 15.1456 16.5574 15.6766 18.076 15.6766C19.7878 15.6766 21.0279 15.1251 21.7768 14.0001C21.9548 14.9143 22.661 15.6355 24.1507 15.6355C24.708 15.6355 25.1356 15.5712 25.4142 15.4658V13.4076C25.2211 13.4281 25.028 13.4486 24.879 13.4486C24.2997 13.4486 24.0873 13.1092 24.0873 12.1964"
                    fill="#2D3C4B"
                  />
                  <path
                    d="M30.1107 6.31153V4.71993H27.5645V15.4191H30.1107V9.79444C30.1107 8.0304 31.2432 6.92737 33.0198 6.92737C33.4046 6.92737 33.7688 6.96979 34.0902 7.03412V4.57076C33.8764 4.52834 33.6184 4.50781 33.3191 4.50781C31.8004 4.50781 30.6238 5.1866 30.1107 6.31153Z"
                    fill="#2D3C4B"
                  />
                  <path
                    d="M37.072 3.4719C37.9065 3.4719 38.5906 2.81364 38.5906 1.96515C38.5906 1.11666 37.9065 0.457031 37.072 0.457031C36.2375 0.457031 35.5312 1.11529 35.5312 1.96515C35.5312 2.815 36.2168 3.4719 37.072 3.4719Z"
                    fill="#2D3C4B"
                  />
                  <path
                    d="M38.358 12.2398V4.72656H35.791V12.9199C35.791 14.7237 36.6241 15.6365 38.2725 15.6365C38.8711 15.6365 39.2987 15.5735 39.5553 15.4681V13.3237C39.4491 13.3442 39.2987 13.3661 39.1056 13.3661C38.529 13.3661 38.358 13.0691 38.358 12.2411"
                    fill="#2D3C4B"
                  />
                  <path
                    d="M44.4107 11.9245V0.632812H41.8438V12.2653C41.8438 14.5781 42.9776 15.7249 45.2452 15.7249C45.7597 15.7249 46.1653 15.6825 46.466 15.5977V13.3273C46.2522 13.3902 45.9942 13.4121 45.6949 13.4121C44.7528 13.4121 44.4121 12.966 44.4121 11.9259"
                    fill="#2D3C4B"
                  />
                  <path
                    d="M57.804 12.1755V4.72656H55.237V10.8822C55.237 12.3465 54.2536 13.3647 52.8839 13.3647C51.5142 13.3647 50.7004 12.4519 50.7004 10.9876V4.72656H48.1348V11.3489C48.1348 14.0011 49.6755 15.6351 52.2425 15.6351C53.8039 15.6351 54.895 15.1055 55.5157 14.064C55.666 14.6867 56.2647 15.6146 57.8702 15.6146C58.4247 15.6146 58.8537 15.5516 59.1309 15.4462V13.3647C58.9392 13.3866 58.7461 13.4071 58.5958 13.4071C58.0192 13.4071 57.8054 13.0883 57.8054 12.1755"
                    fill="#2D3C4B"
                  />
                  <path
                    d="M70.8961 0.630859L65.6284 7.93196L63.2738 4.72823H60.4255L64.1828 9.82463L60.1289 15.426H62.8904L65.5939 11.694L68.3002 15.426H71.1251L67.0408 9.75757L73.6989 0.630859H70.8961Z"
                    fill="#2D3C4B"
                  />
                  <path
                    d="M74.0683 15.3105C73.2462 15.3105 72.6531 14.733 72.6531 13.9064C72.6531 13.0798 73.2462 12.4804 74.0683 12.4804C74.8904 12.4804 75.4946 13.0675 75.4946 13.9064C75.4946 14.7453 74.8904 15.3105 74.0683 15.3105ZM75.3304 12.6638C74.9911 12.3367 74.5635 12.1738 74.0683 12.1738C73.5731 12.1738 73.1469 12.3367 72.8076 12.6638C72.4669 12.9908 72.3027 13.4041 72.3027 13.905C72.3027 14.4059 72.4669 14.8192 72.8076 15.1463C73.1469 15.472 73.5745 15.6348 74.0683 15.6348C74.5621 15.6348 74.9897 15.472 75.3304 15.1463C75.6821 14.8192 75.8573 14.4059 75.8573 13.905C75.8573 13.4041 75.6821 12.9908 75.3304 12.6638Z"
                    fill="#2D3C4B"
                  />
                  <path
                    d="M74.1214 13.8304H73.7932V13.2214H74.1214C74.2856 13.2214 74.407 13.3514 74.407 13.5143C74.407 13.6881 74.287 13.8291 74.1214 13.8291M74.7794 13.491C74.7794 13.1325 74.5159 12.8711 74.1311 12.8711H73.418V14.8637H73.7918V14.1356H74.0552L74.4939 14.8637H74.9325L74.4497 14.0686C74.6704 13.9495 74.7794 13.7538 74.7794 13.491Z"
                    fill="#2D3C4B"
                  />
                  <path
                    d="M49.5563 24.3964C49.5729 24.1487 49.6887 23.9407 49.9108 23.7669C50.1329 23.5931 50.3977 23.5014 50.7039 23.5014C50.9922 23.5014 51.2322 23.5931 51.4309 23.7669C51.6295 23.9407 51.7288 24.1556 51.7288 24.3964H49.5577H49.5563ZM48.5508 24.8781C48.5508 25.5255 48.748 26.0496 49.1522 26.4424C49.5563 26.8269 50.0929 27.0226 50.7453 27.0226C51.3978 27.0226 51.8764 26.8433 52.2805 26.5655V25.5994C51.9343 25.9182 51.4391 26.1646 50.7867 26.1646C50.0515 26.1646 49.5646 25.7472 49.5315 25.0903H52.7178C52.7261 24.9835 52.7343 24.8617 52.7343 24.7386C52.7343 24.1556 52.5454 23.6588 52.1661 23.2646C51.795 22.8637 51.3081 22.668 50.7053 22.668C50.1025 22.668 49.5577 22.8637 49.1536 23.2646C48.7494 23.6588 48.5522 24.1884 48.5522 24.8371V24.8781H48.5508Z"
                    fill="#006FAF"
                  />
                  <path
                    d="M53.0898 26.5683C53.5271 26.8625 54.0292 27.0103 54.6154 27.0103C55.2016 27.0103 55.6058 26.8872 55.8789 26.6422C56.1506 26.389 56.2913 26.0934 56.2913 25.7417C56.2913 25.3407 56.1589 25.0533 55.8292 24.833C55.672 24.7262 55.5244 24.6373 55.4003 24.5784C55.2761 24.521 55.094 24.4389 54.8554 24.3499C54.7313 24.3006 54.5906 24.2514 54.4913 24.2185C54.4002 24.1775 54.3837 24.161 54.3175 24.1282C54.2099 24.0625 54.1519 23.9804 54.1519 23.8654C54.1519 23.6273 54.3506 23.5137 54.7547 23.5137C55.1589 23.5137 55.5065 23.6205 55.8361 23.8244V22.9321C55.5396 22.7446 55.1685 22.6543 54.7133 22.6543C54.2844 22.6543 53.9285 22.761 53.6402 22.9732C53.3602 23.1853 53.2195 23.4809 53.2195 23.849C53.2195 24.365 53.5161 24.7577 54.1023 25.0123C54.2926 25.0862 54.6389 25.2258 54.8044 25.2997C54.8954 25.3325 54.9782 25.3736 55.0692 25.4228C55.2596 25.5214 55.334 25.6281 55.334 25.7581C55.334 26.0127 55.0692 26.1509 54.632 26.1509C54.0126 26.1509 53.494 25.9702 53.0898 25.6021V26.5683Z"
                    fill="#006FAF"
                  />
                  <path
                    d="M56.6465 26.5683C57.0837 26.8625 57.5858 27.0103 58.172 27.0103C58.7583 27.0103 59.1624 26.8872 59.4355 26.6422C59.7073 26.389 59.848 26.0934 59.848 25.7417C59.848 25.3407 59.7155 25.0533 59.3859 24.833C59.2286 24.7262 59.081 24.6373 58.9569 24.5784C58.8328 24.521 58.6507 24.4389 58.4121 24.3499C58.2879 24.3006 58.1472 24.2514 58.0479 24.2185C57.9569 24.1775 57.9403 24.161 57.8741 24.1282C57.7665 24.0625 57.7086 23.9804 57.7086 23.8654C57.7086 23.6273 57.9072 23.5137 58.3114 23.5137C58.7155 23.5137 59.0631 23.6205 59.3928 23.8244V22.9321C59.0962 22.7446 58.7252 22.6543 58.27 22.6543C57.841 22.6543 57.4851 22.761 57.1968 22.9732C56.9168 23.1853 56.7761 23.4809 56.7761 23.849C56.7761 24.365 57.0727 24.7577 57.6589 25.0123C57.8493 25.0862 58.1955 25.2258 58.361 25.2997C58.4521 25.3325 58.5348 25.3736 58.6259 25.4228C58.8162 25.5214 58.8907 25.6281 58.8907 25.7581C58.8907 26.0127 58.6259 26.1509 58.1886 26.1509C57.5693 26.1509 57.0506 25.9702 56.6465 25.6021V26.5683Z"
                    fill="#006FAF"
                  />
                  <path
                    d="M61.2934 22.7706H60.3044V26.898H61.2934V22.7706ZM60.7982 22.2875C61.1196 22.2875 61.383 22.0343 61.383 21.7072C61.383 21.3801 61.1196 21.127 60.7982 21.127C60.4768 21.127 60.2051 21.3801 60.2051 21.7072C60.2051 22.0343 60.4685 22.2875 60.7982 22.2875Z"
                    fill="#006FAF"
                  />
                  <path
                    d="M62.9167 21.1953H61.9277V26.9021H62.9167V21.1953Z"
                    fill="#006FAF"
                  />
                  <path
                    d="M65.7397 26.1286C65.3687 26.1286 65.0625 26.0054 64.8156 25.7605C64.5769 25.5059 64.4528 25.2035 64.4528 24.8353C64.4528 24.4672 64.5769 24.1634 64.8156 23.9184C65.0625 23.6639 65.3687 23.5421 65.7397 23.5421C66.1108 23.5421 66.4087 23.6653 66.6556 23.9184C66.9025 24.1634 67.0267 24.4672 67.0267 24.8353C67.0267 25.2035 66.9025 25.5073 66.6556 25.7605C66.4087 26.0068 66.1025 26.1286 65.7397 26.1286ZM64.13 26.39C64.5673 26.8074 65.1039 27.0195 65.7397 27.0195C66.3756 27.0195 66.9122 26.8074 67.3494 26.39C67.7867 25.9726 68.0088 25.4484 68.0088 24.834C68.0088 24.2195 67.7853 23.6954 67.3494 23.278C66.9122 22.8606 66.3756 22.6484 65.7397 22.6484C65.1039 22.6484 64.5673 22.8619 64.13 23.278C63.6928 23.6954 63.4707 24.2195 63.4707 24.834C63.4707 25.4484 63.6942 25.9726 64.13 26.39Z"
                    fill="#006FAF"
                  />
                  <path
                    d="M69.596 26.9035V24.7331C69.596 24.0529 70.0332 23.6273 70.7187 23.6273C70.8677 23.6273 71.007 23.6437 71.1312 23.6683V22.7199C71.0484 22.7035 70.9491 22.6953 70.8332 22.6953C70.247 22.6953 69.7932 22.9567 69.596 23.3905V22.7774H68.6152V26.9035H69.596Z"
                    fill="#006FAF"
                  />
                  <path
                    d="M41.9429 24.6172V24.6569C41.805 26.0733 40.6408 26.982 39.3621 26.982C37.9055 26.982 36.7441 25.8092 36.7441 24.3845C36.7441 22.9599 37.9317 21.7871 39.3621 21.7871C40.0615 21.7871 40.7194 22.0567 41.2132 22.548C41.4063 22.7409 41.5401 22.9106 41.5401 22.9106L39.6725 24.7485C39.4794 24.9401 39.1676 24.9401 38.9745 24.7485C38.7814 24.557 38.7814 24.2477 38.9745 24.0561L40.1125 22.9476C39.8835 22.8299 39.627 22.7669 39.3607 22.7669C38.4614 22.7669 37.729 23.4909 37.729 24.3859C37.729 25.2809 38.4669 26.0049 39.3607 26.0049C40.0946 26.0049 40.8104 25.4958 40.9456 24.624V24.6199L40.958 24.5351C40.9953 24.2682 41.2449 24.0807 41.5153 24.1177C41.7677 24.1532 41.9512 24.3708 41.9415 24.6185M45.6492 24.3941C44.3788 22.1538 42.0284 20.6484 39.3373 20.6484C36.6462 20.6484 34.2958 22.1538 33.0254 24.3941C34.2958 26.6344 36.6462 28.1398 39.3373 28.1398C42.0284 28.1398 44.3788 26.6344 45.6492 24.3941Z"
                    fill="#006FAF"
                  />
                  <path
                    d="M127.811 15.8915C127.11 15.8915 126.604 15.3988 126.604 14.694C126.604 13.9892 127.11 13.4788 127.811 13.4788C128.512 13.4788 129.028 13.9797 129.028 14.694C129.028 15.4084 128.513 15.8915 127.811 15.8915ZM128.887 13.6362C128.597 13.3583 128.233 13.2188 127.811 13.2188C127.389 13.2188 127.025 13.357 126.735 13.6362C126.445 13.9153 126.305 14.267 126.305 14.6954C126.305 15.1237 126.444 15.4741 126.735 15.7533C127.025 16.0311 127.389 16.1707 127.811 16.1707C128.233 16.1707 128.597 16.0311 128.887 15.7533C129.186 15.4741 129.336 15.1224 129.336 14.6954C129.336 14.2684 129.188 13.9153 128.887 13.6362Z"
                    fill="#2D3C4B"
                  />
                  <path
                    d="M127.86 14.6281H127.58V14.1095H127.86C128 14.1095 128.103 14.2203 128.103 14.3599C128.103 14.5091 128.001 14.6295 127.86 14.6295M128.422 14.3408C128.422 14.0356 128.198 13.8125 127.87 13.8125H127.262V15.5108H127.58V14.8895H127.804L128.178 15.5108H128.553L128.14 14.8334C128.328 14.7322 128.42 14.5638 128.42 14.3408"
                    fill="#2D3C4B"
                  />
                  <path
                    d="M123.202 4.0893L122.958 4.14951H120.366C120.534 3.7718 120.686 3.37766 120.824 2.9849L119.452 2.65234C118.918 4.39174 117.958 6.02577 116.814 7.13017V3.25723H111.782V8.00876H113.903V13.9085L112.896 14.1357V9.27876H111.737V14.3779C111.478 14.4231 111.233 14.4682 111.004 14.5147L111.249 15.8764C112.896 15.4987 115.107 14.9691 117.195 14.4395L117.057 13.1982L115.166 13.6375V11.2467H116.951V11.2316C117.104 11.4438 117.256 11.6709 117.347 11.8516C117.576 11.7613 117.79 11.6545 118.018 11.5491V16.4964H119.315V15.9668H122.715V16.4512H124.072V11.5341L124.377 11.6559C124.561 11.3083 124.972 10.7486 125.246 10.4913C123.95 10.0369 122.852 9.34171 121.922 8.50964C122.868 7.39019 123.63 6.04356 124.103 4.47112L123.203 4.09204L123.202 4.0893ZM122.348 5.34561C121.998 6.14756 121.54 6.88931 120.991 7.55441C120.442 6.91941 120.014 6.268 119.664 5.61794L119.802 5.34561H122.348ZM113.017 4.46838H115.503V6.79762H113.017V4.46838ZM116.951 10.0054H115.166V8.00876H116.813V7.32724C117.133 7.56946 117.576 7.93213 117.79 8.1593C118.185 7.75011 118.598 7.26702 118.963 6.7374C119.299 7.31218 119.681 7.90202 120.168 8.4768C119.207 9.41424 118.094 10.1409 116.951 10.6254V10.0054ZM119.314 12.2444H122.714V14.7556H119.314V12.2444ZM118.933 11.0496C119.681 10.6103 120.396 10.0657 121.038 9.44572C121.648 10.0356 122.35 10.5953 123.141 11.0496H118.933ZM103.166 14.8008V12.9546H108.319V11.6532H103.166V10.1095H107.832V3.22713H97.0662V10.1108H101.64V11.6545H96.593V12.956H101.64V14.8021H95.5709V16.1036H109.112V14.8021H103.164L103.166 14.8008ZM106.368 8.85451H103.075V7.23554H106.368V8.85451ZM106.368 6.07093H103.075V4.48207H106.368V6.07093ZM98.4855 4.48207H101.734V6.07093H98.4855V4.48207ZM98.4855 7.23554H101.734V8.85451H98.4855V7.23554ZM89.9156 3.49946V2.65234H88.5432V3.49946H86.8659V4.67913H88.5432V5.48109H89.9156V4.67913H93.2854V3.49946H89.9156ZM92.706 11.155H87.2617V10.3681H91.6688V5.70827H81.6354V10.3681H85.9196V11.155H82.0312V10.6705H80.6588V11.155H80.0795V12.3046H80.6588V16.5251H82.0312V12.3046H85.9196V13.7415C84.7458 13.7867 83.6934 13.8318 82.8395 13.8633L82.9471 15.0731C84.6244 14.9664 87.0024 14.8459 89.3211 14.6954C89.4439 15.0129 89.5349 15.2852 89.5804 15.5275L89.8549 15.4371C90.008 15.7546 90.1749 16.1939 90.2356 16.5265C91.1501 16.5265 91.7764 16.5265 92.1874 16.3144C92.615 16.1323 92.706 15.7998 92.706 15.1949V11.155ZM90.2508 9.40056H87.2617V8.49322H90.2508V9.40056ZM90.2508 7.58452H87.2617V6.67718H90.2508V7.58452ZM82.9926 6.67718H85.9196V7.58452H82.9926V6.67718ZM82.9926 8.49322H85.9196V9.40056H82.9926V8.49322ZM90.7087 15.1798C90.5404 14.408 89.9308 13.2885 89.3363 12.4565L88.2838 12.7288C88.4659 13.0012 88.6494 13.2885 88.8176 13.591L87.2617 13.6663V12.3046H91.3336V15.1785C91.3336 15.3454 91.2881 15.3906 91.1046 15.3906C90.968 15.4057 90.5405 15.4057 90.0066 15.3906L90.7087 15.1785V15.1798ZM83.2368 5.48246H84.6092V4.6805H86.3321V3.50083H84.6092V2.65371H83.2368V3.50083H79.9277V4.6805H83.2368V5.48246Z"
                    fill="#2D3C4B"
                  />
                  <path
                    d="M97.6648 21.7697L97.5351 21.7943H96.6717C96.7268 21.6602 96.7765 21.5193 96.8262 21.3838L96.1296 21.2127C95.9254 21.8792 95.5558 22.5279 95.1061 22.9562V21.4385H92.9778V23.4639H93.8412V25.7644L93.5336 25.826V23.8923H92.935V25.9478L92.6578 25.9971L92.7874 26.695C93.484 26.5363 94.4219 26.3214 95.2854 26.1079L95.2178 25.4647L94.4909 25.6303V24.816H95.1696V24.6381C95.2565 24.7545 95.3489 24.8886 95.3971 24.9871L95.5392 24.9255V26.914H96.2179V26.706H97.3779V26.8962H98.0814V24.8954L98.0938 24.9009C98.1917 24.7107 98.4014 24.4233 98.5503 24.2892C98.0565 24.1359 97.6317 23.8909 97.2731 23.6104C97.6496 23.1574 97.9393 22.6072 98.131 21.964L97.6689 21.7683L97.6648 21.7697ZM97.2275 22.4129C97.1048 22.6702 96.9558 22.9083 96.7779 23.1355C96.6055 22.9275 96.451 22.714 96.3268 22.506L96.3765 22.4143H97.2275V22.4129ZM93.6192 22.0639H94.433V22.8413H93.6192V22.0639ZM95.1668 24.181H94.4882V23.4653H95.1047V23.0739C95.2716 23.1848 95.4923 23.3791 95.5985 23.4899C95.7213 23.3613 95.8454 23.2203 95.9627 23.0684C96.073 23.2463 96.1972 23.4297 96.3448 23.6063C95.9999 23.9251 95.593 24.1879 95.1668 24.3713V24.181ZM96.2151 25.2704H97.3751V26.0847H96.2151V25.2704ZM96.0482 24.6587C96.3199 24.4931 96.5724 24.3165 96.8068 24.1017C97.0413 24.3097 97.2938 24.4931 97.5779 24.6587H96.0482ZM91.2136 26.268C91.1281 26.268 91.1156 26.2503 91.1156 26.0847V24.8858H91.7626V21.459H89.0301V24.8858H89.437C89.3694 25.6385 89.2025 26.1216 88.2163 26.4035C88.339 26.5267 88.5183 26.7703 88.5804 26.9359C89.7639 26.5568 90.0053 25.8835 90.0908 24.8858H90.4356V26.0847C90.4356 26.6909 90.5529 26.8989 91.095 26.8989H91.5019C91.9212 26.8989 92.0936 26.6786 92.1557 25.8465C91.9708 25.7973 91.6812 25.6878 91.557 25.5769C91.5391 26.1887 91.5198 26.268 91.415 26.268H91.2108H91.2136ZM89.6963 22.0338H91.0591V22.4321H89.6963V22.0338ZM89.6963 22.9699H91.0591V23.3613H89.6963V22.9699ZM89.6963 23.906H91.0591V24.3042H89.6963V23.906ZM88.8452 24.5369C88.728 24.4137 88.2769 23.9799 88.0314 23.765C88.3156 23.3668 88.5625 22.9329 88.7404 22.4868L88.3528 22.2049L88.2231 22.235H87.7859L88.1307 22.0023C88.0259 21.7765 87.7914 21.4631 87.5817 21.2305L87.0204 21.5726C87.1804 21.7629 87.3542 22.0201 87.4714 22.2336H86.4231V22.8878H87.8287C87.459 23.5365 86.8603 24.1359 86.2438 24.4725C86.3307 24.6067 86.4714 25.0104 86.521 25.2129C86.761 25.072 86.99 24.8831 87.2245 24.6751V26.9208H87.9459V24.5464C88.1183 24.7545 88.2907 24.9803 88.3956 25.1335L88.8466 24.5341L88.8452 24.5369ZM85.1513 23.4174C84.9417 23.6747 84.6092 23.9867 84.3072 24.244C84.1223 23.8334 83.9678 23.3928 83.8561 22.9466H85.6576V22.2678H83.7085L84.1651 22.1022C84.0906 21.8641 83.9127 21.4837 83.7582 21.2031L83.1044 21.4166C83.234 21.6862 83.3692 22.0229 83.4437 22.2678H81.6795V22.9466H82.9251C82.5057 23.5159 81.9388 24.036 81.365 24.4082V22.781C81.5995 22.3527 81.8092 21.8942 81.9761 21.4481L81.285 21.2332C80.9885 22.1022 80.4712 22.9644 79.9277 23.5214C80.0505 23.7048 80.2546 24.103 80.3222 24.2796C80.4326 24.1578 80.5498 24.0168 80.6615 23.8704V26.9236H81.365V24.6162C81.5002 24.775 81.6492 24.9775 81.7223 25.087C81.8947 24.9707 82.0671 24.8366 82.2464 24.6833V25.7658C82.2464 26.0956 82.0243 26.3228 81.8823 26.4323C81.9995 26.5418 82.1899 26.8059 82.2519 26.9455C82.4064 26.8415 82.6409 26.7375 84.0285 26.2722C83.9858 26.1189 83.9416 25.8315 83.9361 25.6481L82.9623 25.941V23.9949C83.0975 23.8485 83.2216 23.7075 83.3389 23.5543C83.7458 24.9009 84.3692 26.0696 85.2824 26.7539C85.4051 26.5636 85.6465 26.2954 85.812 26.1599C85.3307 25.8356 84.9237 25.358 84.5913 24.79C84.9431 24.5396 85.3431 24.2207 85.7017 23.9265L85.1527 23.4133L85.1513 23.4174Z"
                    fill="#006FAF"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2534_31190">
                    <rect
                      width="128.602"
                      height="27.6812"
                      fill="white"
                      transform="translate(0.732422 0.458984)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </swiper-slide>
        </swiper>
        <!-- <a class="btn-bg">
          <div>
            <span>立即查詢了解更多</span>
            <span
              ><img
                src="https://statichk.cmermedical.com/vision/imgs/93740deca665eceb.png"
                alt="立即查詢了解更多"
            /></span>
          </div>
        </a> -->
        <div>
          <V2BtnAnimation :btnElement="btnElement" />
        </div>
      </div>
      <div class="cataract-query">
        <div class="cataract-query-title">白內障手術後需要配眼鏡嗎？</div>
        <div class="cataract-query-content">
          <div>
            隨著年齡增長，50歲以後大多數人有可能會患上白內障，不過只要進行白內障手術便可恢復視力。
          </div>
          <div>
            但大眾可能會有一個誤解，就是完成白內障手術後便不需要戴近視眼鏡或老花眼鏡，但這不是完全正確的。
          </div>
        </div>
      </div>
      <div class="cataract-notice-that">
        <div>
          <div>術後配鏡須知</div>
          <div>
            現時的白內障手術多數採用「單焦」人工
            晶體，除非你選擇用「多焦」人工晶體做矯正
            老花眼的白內障手術，否則患者術後可能仍會剩餘一些近視或散光，這樣就可能需要考慮配鏡。完成白內障手術後配戴眼鏡的度數會有改變，舊有的眼鏡未必適合配戴，
            一般建議手術後1個月進行屈光檢查。因為傷口已經癒合，屈光狀態穩定較為適合進行驗光和配鏡，驗配漸進眼鏡的度數亦會比較準確。
          </div>
        </div>
        <a
          href="https://www.cmervision.com/pdf/Vision-白內障手術後配鏡23-Leaflet-V11.pdf"
          download="Vision-白內障手術後配鏡23-Leaflet-V11.pdf"
          ><img
            :src="
              isPc
                ? 'https://statichk.cmermedical.com/vision/imgs/2025030410244001.png'
                : 'https://statichk.cmermedical.com/vision/imgs/2025030513353101.png'
            "
            alt=""
        /></a>
      </div>
      <div class="new-maintain">
        <div class="new-maintain-content">
          <div><span>如何保養</span><span>漸進眼鏡？</span></div>
          <div>
            <div>
              <div @click="keyTitle(0)" class="key-title key-active">潔</div>
              <div @click="keyTitle(1)" class="key-title">存</div>
              <div @click="keyTitle(2)" class="key-title">免</div>
            </div>
            <div>
              <div class="key-content content-active">
                <div>保持眼鏡清潔</div>
                <ul>
                  <li>使用超細纖維或無絨布擦拭鏡片</li>
                  <li>定期使用溫和、不含酒精的清潔液或稀釋肥皂液。</li>
                  <li>避免眼鏡接觸化學品（如清潔劑、定型水或香水）。</li>
                </ul>
              </div>
              <div class="key-content">
                <div>正確存放眼鏡</div>
                <ul>
                  <li>不戴時，用硬盒存放眼鏡，以免刮花或變形。</li>
                </ul>
              </div>
              <div class="key-content">
                <div>避免以下可能會破壞鏡片的行為</div>
                <ul>
                  <li>避免使用紙巾、餐巾或衣物擦拭鏡片，防止刮花。</li>
                  <li>將眼鏡遠離高溫和陽光直射的地方。</li>
                  <li>不要使用酒精清潔膠框。</li>
                  <li>不要將鏡片面朝下放置。</li>
                  <li>雙手佩戴或摘除眼鏡。</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="question">
        <div class="question-title"><span>FAQ</span><span>常見問題</span></div>
        <PublicV2Collapse
          :title="'老花漸進鏡片常見問題'"
          :listQuestion="miSightQuestionList"
          :testWidth="true"
        />
      </div>
    </div>
    <PublicFormV2Index />
  </div>
</template>

<style lang="scss" scoped>
.hideShow {
  /* 定义动画 */
  animation: fadeOut 3s ease-in-out forwards;
}
.theory {
  min-height: 767px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
/* 定义关键帧 */
@keyframes fadeOut {
  0% {
    opacity: 1; /* 开始时完全不透明 */
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 0; /* 结束时完全透明 */
  }
}
.imagetowebp-canvasWebp {
  position: relative;
  span::before {
    content: "";
    position: absolute;
    top: 231px;
    left: -5px;
    width: 65px;
    border: 2px solid #ff135a;
    border-radius: 50%;
    height: 65px;
    transition: 0.5s;
    -webkit-animation: btn-content 2s infinite; /* 修改为 btn-content 2s 1 如果你只想让它播放一次 */
    animation: btn-content 2s infinite; /* 修改为 btn-content 2s 1 如果你只想让它播放一次 */
    outline: 0.1em solid transparent;
    outline-offset: 0.2em;
    box-shadow: 0 0 0.4em 0 #ff135a;
  }
}
@keyframes btn-content {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  } /* 或者你可以自定义其他变化，比如颜色、位置等 */
  100% {
    transform: scale(1);
    transition: 0.5s;
    -webkit-animation: btn-content 1s;
    animation: btn-content 1s;
    outline: 0.1em solid transparent;
    outline-offset: 0.2em;
    box-shadow: 0 0 0.4em 0 var(--color-background);
  }
}

@media screen and (min-width: 768px) {
  .presbyopia-box {
    margin: 95px auto 120px;
  }
  .presbyopia-content {
    display: flex;
    max-width: 875px;
    margin: 115px auto 65px;
    gap: 0 120px;
    align-items: center;
    :deep(.title-test) {
      margin: 0;
      text-align: left;
    }
  }
  .new-maintain {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .new-maintain-content {
    background: url("https://statichk.cmermedical.com/vision/imgs/2025030410522502.png")
      no-repeat;
    width: 85.833vw;
    height: 12.556vw;
    background-size: cover;
    background-position: center;
    display: flex;
    gap: 0 20px;
    box-sizing: border-box;
    padding: 0 240px;
    & > div:nth-child(1) {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      color: var(--Brand-Color, #00a6ce);
      font-family: "Noto Sans HK";
      font-size: 33.75px;
      font-style: normal;
      font-weight: 700;
      line-height: 45px; /* 133.333% */
      letter-spacing: 1.688px;
      & > span {
        white-space: nowrap;
      }
    }

    & > div:nth-child(2) {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      position: relative;
      top: -45px;
      padding-left: 20px;
      & > div:nth-child(1) {
        // width: 19.583vw;
        // height: 9.84375vw;
        // & > img {
        //   width: 100%;
        //   height: 100%;
        //   object-fit: contain;
        // }
        display: flex;
        gap: 0 5px;
        align-items: center;
        .key-title {
          background: url(https://statichk.cmermedical.com/vision/imgs/2025030413420502.png)
            no-repeat;
          width: 6.36421875vw;
          height: 7.2671875vw;
          background-size: contain;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #00a6ce;
          text-align: justify;
          font-family: "Noto Sans HK";
          font-size: 41px;
          font-style: normal;
          font-weight: 250;
          line-height: 45px; /* 109.756% */
          cursor: pointer;
          transition: all 0.3s ease-in;
        }
        .key-active {
          background: url(https://statichk.cmermedical.com/vision/imgs/2025030413420501.png)
            no-repeat;
          background-size: contain;
          color: #fff;
          transition: all 0.3s ease-in;
        }
        & > div:nth-child(2) {
          padding-bottom: 40px;
        }
      }
      & > div:nth-child(2) {
        .key-content {
          margin-bottom: 20px;
          display: none;
          transition: all 0.3s ease-in;
          & > div:nth-child(1) {
            color: var(--Brand-Color, #00a6ce);
            text-align: justify;
            font-family: "Noto Sans CJK TC";
            font-size: 22px;
            font-style: normal;
            font-weight: 700;
            line-height: 45px; /* 204.545% */
            letter-spacing: 1.1px;
          }
          & > ul {
            & > li {
              color: var(--Grey-Deep, #4d4d4d);
              text-align: justify;
              font-family: "Noto Sans CJK TC";
              font-size: 21px;
              font-style: normal;
              font-weight: 500;
              line-height: 45px; /* 214.286% */
            }
          }
        }
        .content-active {
          display: block;
          transition: all 0.3s ease-in;
        }
      }
    }
  }
  .maintain-items {
    display: flex;
    box-sizing: border-box;
    border-radius: 120px;
    background: var(--Skin, #eafbff);
    padding: 21px 32px;
    gap: 0 42px;
    text-indent: -20px;
    & > div:nth-child(2) {
      display: flex;
      flex-direction: column;
      color: var(--Grey-Deep, #4d4d4d);
      text-align: justify;
      font-family: "Noto Sans CJK TC";
      font-size: 21px;
      font-style: normal;
      font-weight: 500;
      line-height: 45px; /* 214.286% */
      & > span:nth-child(1) {
        color: var(--Brand-Color, #00a6ce);
        font-family: "Noto Sans CJK TC" !important;
        font-size: 22.5px;
        font-style: normal;
        font-weight: 700;
        line-height: 33.75px; /* 150% */
        letter-spacing: 1.125px;
        margin-bottom: 10px;
      }
    }
  }
  .maintain {
    margin: 55px auto 75px;
    max-width: 966px;
    & > div:nth-child(2) {
      display: flex;
      flex-direction: column;
      margin-top: 30px;
      & > div {
        margin-bottom: 22px;
      }
      & > div:nth-child(2) {
        & > div:nth-child(2) {
          padding-top: 18px;
        }
      }
      & > div:nth-child(3) {
        border-radius: 135px;
      }
    }
  }
  .question {
    margin: 185px auto 55px;
    max-width: 950px;
    display: flex;
    gap: 0 50px;
    :deep(.title) {
      display: none;
    }
    .question-title {
      display: flex;
      gap: 0 50px;
      align-items: flex-start;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      width: fit-content;
      & > span:nth-child(1) {
        color: #60605f;
        text-align: center;
        font-family: "Intro";
        font-size: 24px;
        font-style: normal;
        font-weight: 600;
        line-height: 22px; /* 233.333% */
        letter-spacing: 3.84px;
      }
      & > span:nth-child(2) {
        width: max-content;
        color: #00a6ce;
        text-align: center;
        font-family: "Noto Sans HK";
        font-size: 33.75px;
        font-style: normal;
        font-weight: 700;
        line-height: 45px; /* 133.333% */
        letter-spacing: 1.688px;
      }
    }
    :deep(.collapse-test) {
      margin: 0;
      width: 100%;
    }
  }
  .cataract-query {
    background: url(https://statichk.cmermedical.com/vision/imgs/2025030309383303.webp)
      no-repeat;
    background-size: contain;
    box-sizing: border-box;
    width: 100%;
    height: 39.5833vw;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: sticky;
    top: 110px;
  }
  .cataract-query-title {
    color: var(--White, #fff);
    font-family: "Noto Sans HK";
    font-size: 4.6875vw;
    font-style: normal;
    font-weight: 700;
    line-height: 0px; /* 0% */
    letter-spacing: 1.03125vw;
  }
  .cataract-query-content {
    display: none;
    gap: 0 20.052vw;
    align-items: center;
    & > div {
      max-width: 25.2vw;
      color: #fff;
      font-family: "Noto Sans HK";
      font-size: 1.354vw;
      font-style: normal;
      font-weight: 500;
      line-height: 2.34375vw; /* 173.077% */
      letter-spacing: 1.3px;
    }
  }
  .cataract-notice-that {
    margin: 100px auto;
    max-width: 51.4165vw;
    display: flex;
    align-items: center;
    gap: 0 32px;
    box-sizing: border-box;
    padding: 2.0833vw 0 0;
    & > div:nth-child(1) {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      & > div:nth-child(1) {
        color: var(--Brand-Color, #00a6ce);
        text-align: center;
        font-family: "Noto Sans HK";
        font-size: 1.7578125vw;
        font-style: normal;
        font-weight: 700;
        line-height: 2.34375vw; /* 133.333% */
        letter-spacing: 1.688px;
      }
      & > div:nth-child(2) {
        color: #60605f;
        font-family: "Noto Sans CJK TC";
        font-size: 1.09375vw;
        font-style: normal;
        font-weight: 500;
        line-height: 2.34375vw; /* 214.286% */
      }
      max-width: 36.1979vw;
      gap: 5px 0;
    }
    & > a:nth-child(2) {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 13.125vw;
      height: 13.125vw;
      & > img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
  }
  .brand {
    margin: 70px auto 65px;
    position: relative;
    & > div:nth-child(2) {
      max-width: 850px;
      margin: 0 auto;
      margin-top: -24px;
      display: flex;
      justify-content: center;
      gap: 0;
      background: linear-gradient(
        180deg,
        rgba(0, 166, 206, 0) 0%,
        rgba(0, 166, 206, 0.2) 52%,
        rgba(0, 166, 206, 0) 100%
      );
      transform: skewX(-10deg);
      & > div {
        overflow: hidden;
        border-radius: 25px;
        // box-shadow: 2px 3px 8px 1px #0000007d;
        display: flex;
        justify-content: center;
        align-items: center;
        max-width: 210px;
        width: 100%;
        height: 210px;
        border-left: 2px solid #fff;
        border-right: 2px solid #fff;
      }
    }
    & > div:nth-child(3) {
      margin-top: -12px;
      display: flex;
      justify-content: center;
      :deep(.btn) {
        top: auto;
        right: auto;
      }
    }
  }
  .brand::before {
    content: "";
    background: url("https://statichk.cmermedical.com/vision/imgs/2025030317583501.png")
      no-repeat;
    background-size: contain;
    width: 24.583vw;
    height: 24vw;
    position: absolute;
    left: -5%;
    top: -30%;
  }
  .brand::after {
    content: "";
    background: url("https://statichk.cmermedical.com/vision/imgs/2025030317583502.png")
      no-repeat;
    background-size: contain;
    width: 30.4875vw;
    height: 20.9375vw;
    position: absolute;
    right: 5.3125vw;
    bottom: -6.5vw;
  }
  .btn-bg {
    & > div {
      display: flex;
      align-items: center;
      border-radius: 20px;
      background: var(
        --Style,
        linear-gradient(90deg, #00a6ce 25.95%, #3346ed 100%)
      );
      width: fit-content;
      padding: 5px 8px 5px 20px;
      border: 5px solid #ffffff;
      & > span:nth-child(1) {
        color: var(--White, #fff);
        font-family: "Noto Sans CJK TC" !important;
        font-size: 18.75px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        letter-spacing: 1.875px;
        margin-right: 14px;
      }
      & > span:nth-child(2) {
        width: 39px;
        & > img {
          width: 100%;
        }
        display: flex;
        justify-content: center;
        align-items: center;
      }
      position: relative;
      z-index: 5;
    }
    background: var(
      --Style,
      linear-gradient(90deg, #00a6ce 25.95%, #3346ed 100%)
    );
    display: flex;
    border-radius: 25px;
    padding: 4px;
    width: fit-content;
    margin: 0 auto;
  }
  .contrast {
    background: url("https://statichk.cmermedical.com/vision/imgs/2025030316482501.png")
      no-repeat;
    background-size: contain;
    width: 100%;
    height: 41.875vw;
    margin: 0 auto 3.645833vw;
    box-sizing: border-box;
    padding: 3.125vw 0 4.1665vw;
    position: relative;
    & > div:nth-child(2) {
      max-width: 50vw;
      margin: 1.8295vw auto 0;
      display: flex;
      border-radius: 0.1vw;
      overflow: hidden;
      & > div {
        flex: 1;
        max-width: 9.84375vw;
        & > div:nth-child(1) {
          height: 7.44vw;
          font-family: "Noto Sans CJK TC" !important;
          font-size: 1.171875vw;
          font-style: normal;
          font-weight: 600;
          line-height: normal;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        & > div:nth-child(2) {
          height: 5.989vw;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
        }
        & > div:nth-child(3) {
          height: 7.8125vw;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
        }
        & > div:nth-child(4) {
          height: 6.1458vw;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
        }
      }
      & > div:nth-child(1) {
        background: #00a6ce;
        color: #fff;
        & > div {
          border-bottom: 1.695px solid #fff;
          display: flex;
          justify-content: center;
          align-items: center;
          color: #fff;
          font-family: "Noto Sans HK";
          font-size: 1.17875vw;
          font-style: normal;
          font-weight: 600;
          line-height: normal;
        }
        & > div:nth-child(2),
        & > div:nth-child(3),
        & > div:nth-child(4) {
          font-family: "Noto Sans CJK TC" !important;
          font-size: 1.17875vw;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
        }
        & > div:last-child {
          border-bottom: none;
        }
      }
      & > div:nth-child(2),
      & > div:nth-child(4) {
        background: #fff;
        color: #fff;
        & > div:nth-child(1) {
          background: #6dd4ee;
        }
        & > div {
          border-bottom: 1.695px solid #21aaca;
        }
        & > div:last-child {
          border-bottom: none;
        }
        & > div:not(:nth-child(1)) {
          color: #60605f;
          font-family: "Noto Sans HK";
          font-size: 0.859375vw;
          font-style: normal;
          font-weight: 500;
          line-height: 1.17875vw; /* 136.364% */
          letter-spacing: 0.825px;
          box-sizing: border-box;
          padding: 0.7825vw;
          span {
            display: inline;
            & > br {
              display: none !important;
            }
          }
        }
      }
      & > div:nth-child(3),
      & > div:nth-child(5) {
        background: #fff;
        color: #fff;
        & > div:nth-child(1) {
          background: #64bcd2;
        }
        & > div {
          border-bottom: 1.695px solid #00a6ce;
        }
        & > div:last-child {
          border-bottom: none;
        }
        & > div:not(:nth-child(1)) {
          color: #60605f;
          font-family: "Noto Sans HK";
          font-size: 0.859375vw;
          font-style: normal;
          font-weight: 500;
          line-height: 1.17875vw; /* 136.364% */
          letter-spacing: 0.825px;
          box-sizing: border-box;
          padding: 0.7825vw;
          span {
            display: inline;
            & > br {
              display: none !important;
            }
          }
        }
      }
    }
  }
  .contrast::before {
    content: "";
    background: url(https://statichk.cmermedical.com/vision/imgs/7504bfc893ca.svg)
      no-repeat;
    position: absolute;
    background-size: contain;
    bottom: -0.33vw;
    right: 5.52vw;
    width: 17.965vw;
    height: 17.55vw;
  }
  .type-show-style {
    display: block;
    margin: 30px auto 20px;
    min-height: 252px;
    & > div:nth-child(1) {
      // width: 618px;
      // height: 252px;
      // margin: 0 auto;
      // &>img{
      //   width: 100%;
      //   height: 100%;
      // }
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 20px;
    }
  }
  .type-show-style-text {
    display: block;
    margin: 0 auto;
    & > span {
      width: 100%;
      display: inline-block;
      color: var(--Deep-Blue, #3e5270);
      text-align: center;
      font-family: "Noto Sans HK";
      font-size: 33.75px;
      font-style: normal;
      font-weight: 700;
      line-height: 45px; /* 133.333% */
      letter-spacing: 1.688px;
    }
    & > p {
      margin-top: 10px;
      color: var(--Grey, #4d4d4d);
      text-align: center;
      font-family: "Noto Sans CJK TC";
      font-size: 21px;
      font-style: normal;
      font-weight: 500;
      line-height: 45px; /* 214.286% */
      & > span {
        color: var(--Brand-Color, #00a6ce);
        font-family: "Noto Sans CJK TC";
        font-size: 21px;
        font-style: normal;
        font-weight: 500;
        line-height: 45px;
      }
    }
  }
  .active-bg {
    border: 2px solid #00a6ce;
    transform: scale(1.05);
  }
  .type {
    max-width: 960px;
    margin: 100px auto 45px;
    & > div:nth-child(3) {
      display: flex;
      flex-direction: column;
      color: var(--Brand-Color, #00a6ce);
      text-align: center;
      font-family: "Noto Sans CJK TC";
      font-size: 15px;
      font-style: normal;
      font-weight: 700;
      line-height: 22.5px; /* 150% */
    }
    & > div:nth-child(4) {
      margin: 50px auto;
      display: flex;
      justify-content: center;
      gap: 0 28px;
      & > div {
        cursor: pointer;
        border-radius: 15px;
        box-shadow: 0px 4.5px 4.5px 0px rgba(0, 0, 0, 0.25);
        position: relative;
        & > div:nth-child(2) {
          position: absolute;
          bottom: 0;
          color: var(--Deep-Blue, #3e5270);
          text-align: center;
          font-family: "Noto Sans CJK TC" !important;
          font-size: 20px;
          font-style: normal;
          font-weight: 500;
          line-height: 33.35px; /* 166.75% */
          left: 50%;
          transform: translateX(-50%);
          width: 100%;
          min-height: 42px;
          border-radius: 0px 0px 14.342px 14.342px;
          background: var(--Skin, #eafbff);
        }
      }
      & > div:hover {
        transform: scale(1.05);
        box-shadow: 0px 0px 2px 2px var(--Brand-Color, #00a6ce);
      }
    }
  }
  .classify {
    background: linear-gradient(
      115deg,
      rgba(228, 250, 255, 0) 63.78%,
      #e4faff 109.81%
    );
    background: #fff;
    margin-top: 100px;
    border-bottom: 6px solid #00a6ce;
    position: relative;
    & > div:nth-child(2) {
      display: flex;
      margin-left: 15.625vw;
    }
    .classify-video {
      position: absolute;
      z-index: 80;
      right: 6.778vw;
      bottom: -5.96875vw;
      width: 25vw;
      height: 14.0625vw;
    }
    .classify-video::after {
      content: "";
      background: url("https://statichk.cmermedical.com/vision/imgs/2025030614090801.png")
        no-repeat;
      background-size: cover;
      position: absolute;
      width: 25.3vw;
      height: 14.4625vw;
      top: -0.2vw;
      left: -0.2vw;
      z-index: 5;
      pointer-events: none;
    }
  }
  .classify-btn {
    display: flex;
    align-items: center;
    gap: 0 20px;
    box-sizing: border-box;
    padding: 14px 20px;
    border: 0.627px solid #00a6ce;
    background: #fff;
    transition: all 0.3s ease;
    cursor: pointer;
    & > div:nth-child(1) {
      display: flex;
      align-items: center;
      justify-content: center;
      // background: #02ed85;
      svg {
        path {
          fill: #00a6ce;
        }
      }
    }
    & > div:nth-child(2) {
      color: #00a6ce;
      text-align: center;
      font-family: "Noto Sans HK";
      font-size: 18.813px;
      font-style: normal;
      font-weight: 500;
      line-height: 28.22px; /* 150% */
      letter-spacing: 0.941px;
    }
  }
  .btn-active {
    transition: all 0.3s ease;
    background: #00a6ce;
    & > div:nth-child(1) {
      // background: gold;
      svg {
        path {
          fill: #fff;
        }
      }
    }
    & > div:nth-child(2) {
      color: #fff;
      text-align: center;
      font-family: "Noto Sans HK";
      font-size: 18.813px;
      font-style: normal;
      font-weight: 500;
      line-height: 28.22px; /* 150% */
      letter-spacing: 0.941px;
    }
  }
  .classify-list {
    max-width: 1440px;
    margin: 0 auto;
  }
  .classify-list-item {
    display: none;
    padding: 108px 0 130px 0;
    position: relative;
    z-index: 5;
    & > div:nth-child(2) {
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      margin-left: 20px;
      & > div:nth-child(1) {
        color: #60605f;
        text-align: center;
        font-family: "Noto Sans HK";
        font-size: 40px;
        font-style: normal;
        font-weight: 500;
        line-height: 45px; /* 112.5% */
        letter-spacing: 2px;
      }
      & > div:nth-child(2) {
        max-width: 585px;
        margin-top: 50px;
        margin-bottom: 50px;
        color: #60605f;
        font-family: "Noto Sans HK";
        font-size: 22px;
        font-style: normal;
        font-weight: 200;
        line-height: 45px; /* 204.545% */
        letter-spacing: 1.1px;
        & > span {
          color: #60605f;
          font-family: "Noto Sans HK";
          font-size: 22px;
          font-style: normal;
          font-weight: 700;
          line-height: 45px;
          letter-spacing: 1.1px;
        }
      }
      & > div:nth-child(3) {
        color: #60605f;
        font-family: "Noto Sans HK";
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 29px; /* 181.25% */
        white-space: nowrap;
      }
    }
    & > div:nth-child(3) {
      position: absolute;
      right: 0;
    }
  }
  .classify-list-item-one::before {
    content: "";
    background: url("https://statichk.cmermedical.com/vision/imgs/2025030315324504.png")
      no-repeat;
    background-size: contain;
    width: 100px;
    height: 100px;
    position: absolute;
    bottom: 25%;
    left: 8%;
  }
  .classify-list-item-two::before {
    content: "";
    background: url("https://statichk.cmermedical.com/vision/imgs/2025030315324503.png")
      no-repeat;
    background-size: contain;
    width: 100px;
    height: 100px;
    position: absolute;
    bottom: 25%;
    left: 12%;
  }
  .classify-list-item-three::before {
    content: "";
    background: url("https://statichk.cmermedical.com/vision/imgs/2025030315324501.png")
      no-repeat;
    background-size: contain;
    width: 100px;
    height: 100px;
    position: absolute;
    bottom: 25%;
    left: 12%;
  }
  .classify-list-item-four::before {
    content: "";
    background: url("https://statichk.cmermedical.com/vision/imgs/2025030315324502.png")
      no-repeat;
    background-size: contain;
    width: 100px;
    height: 100px;
    position: absolute;
    bottom: 25%;
    left: 12%;
  }
  .active {
    display: flex;
    opacity: 1;
    transition: all 0.3s ease;
  }
  .theory {
    background: #eafbff;
    padding: 45px 0 35px;
    position: sticky;
    top: 0px;
    z-index: 10;
    & > div:nth-child(1) {
      // max-width: 960px;
      margin: 0 180px;
      display: flex;
      gap: 0 30px;
      justify-content: space-between;
      align-items: center;
      & > div:nth-child(1) {
        :deep(.title-test) {
          margin: 0;
        }
        & > div:nth-child(2) {
          display: flex;
          flex-direction: column;
          color: #60605f;
          font-family: "Noto Sans HK";
          font-size: 1.09375vw;
          font-style: normal;
          font-weight: 400;
          line-height: 2.34375vw; /* 214.286% */
          white-space: nowrap;
        }
      }
      & > div:nth-child(2) {
        display: flex;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        padding: 0 1.5625vw 0 1.0465vw;
        width: 33.125vw;
        height: 33.125vw;
        & > img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      }
      & > div:nth-child(3) {
        display: flex;
        flex-direction: column;
        gap: 30px 0;
        & > div {
          display: flex;
          flex-direction: column;
          & > span {
            color: #00a6ce;
            font-family: "Noto Sans HK";
            font-size: 1.09375vw;
            font-style: normal;
            font-weight: 400;
            line-height: 2.34375vw; /* 214.286% */
          }
          & > span:nth-child(2) {
            color: #60605f;
            font-family: "Noto Sans HK";
            font-size: 1.09375vw;
            font-style: normal;
            font-weight: 400;
            line-height: 2.34375vw; /* 214.286% */
            white-space: nowrap;
          }
        }
        & > div:nth-child(2) {
          box-sizing: border-box;
          padding: 20px 0;
          border-top: 1px solid #00a6ce;
          border-bottom: 1px solid #00a6ce;
        }
      }
    }
  }

  .comparison {
    min-height: 636px;
    margin: 0 auto;
    display: none;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    position: relative;
    & > div:nth-child(1) {
      display: flex;
      justify-content: center;
      gap: 0 80px;
      & > div:nth-child(1) {
        color: var(--Deep-Blue, #3e5270);
        text-align: center;
        font-family: "Noto Sans CJK TC" !important;
        font-size: 30px;
        font-style: normal;
        font-weight: 700;
        line-height: 45px; /* 150% */
        letter-spacing: 1.5px;
      }
      & > div:nth-child(2) {
        color: var(--OkLens-color, #0192b0);
        text-align: center;
        font-family: "Noto Sans CJK TC" !important;
        font-size: 30px;
        font-style: normal;
        font-weight: 700;
        line-height: 45px; /* 150% */
        letter-spacing: 1.5px;
        position: relative;
      }
      & > div:nth-child(2)::after {
        position: absolute;
        content: "";
        background: url("https://statichk.cmermedical.com/vision/imgs/2025030615371001.svg")
          no-repeat;
        background-size: cover;
        width: 47.897px;
        height: 51.888px;
      }
    }
    & > div:nth-child(3) {
      position: absolute;
      width: 100%;
      display: flex;
      flex-direction: column;
      z-index: 1;
      padding-left: 0;
      left: -45%;
      width: fit-content;
      transform: translateX(-50%);
      & > span:nth-child(1) {
        color: #00a6ce;
        text-align: justify;
        font-family: "Noto Sans HK";
        font-size: 33.75px;
        font-style: normal;
        font-weight: 700;
        line-height: 45px; /* 133.333% */
        letter-spacing: 1.688px;
      }
      & > span:nth-child(2) {
        color: #60605f;
        font-family: "Noto Sans TC";
        font-size: 21px;
        font-style: normal;
        font-weight: 400;
        line-height: 45px; /* 214.286% */
      }
      z-index: 1;
      padding-left: 3.64583vw;
      & > span {
        user-select: none;
      }
    }
  }
  .presbyopia-glasses {
    & > div:nth-child(2) {
      min-height: 135px;
    }
  }
  .presbyopia-glasses {
    max-width: 875px;
    margin: 115px auto 65px;
    box-sizing: border-box;
    border-radius: 10px;
    border: 2px solid #00a6ce;
    & > div {
      display: flex;
      box-sizing: border-box;
      padding: 22px 55px;
      gap: 0 50px;
      & > div:nth-child(1) {
        & > img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      }
      & > div:nth-child(2) {
        max-width: 382px;
        // padding: 0 85px;
        margin-top: 28px;
        // display: flex;
        // flex-direction: column;
        color: #60605f;
        font-family: "Noto Sans CJK TC";
        font-size: 21px;
        font-style: normal;
        font-weight: 500;
        line-height: 45px; /* 214.286% */
        box-sizing: border-box;
      }
    }
    :deep(.title-test) {
      padding: 20px 0;
      border-bottom: 1px solid #00a6ce;
      width: 100%;
      & > span {
        width: fit-content;
        margin: 0 auto;
        color: var(--Brand-Color, #00a6ce);
        text-align: center;
        font-family: "Noto Sans HK";
        font-size: 33.75px;
        font-style: normal;
        font-weight: 700;
        line-height: 45px; /* 133.333% */
        letter-spacing: 1.688px;
      }
    }
  }
  .what-presbyopia {
    max-width: 875px;
    box-sizing: border-box;
    & > div:nth-child(2) {
      // padding: 0 85px;
      margin-top: 28px;
      // display: flex;
      // flex-direction: column;
      color: #60605f;
      font-family: "Noto Sans CJK TC";
      font-size: 21px;
      font-style: normal;
      font-weight: 500;
      line-height: 45px; /* 214.286% */
      display: inline;
      text-align: left;
    }
  }
  .what-presbyopia-svg {
    display: flex;
    justify-content: center;
    margin: 0 75px;
    & > div {
      display: flex;
      justify-content: center;
      align-items: center;
      & > img {
        width: 100%;
      }
    }
  }
  .profile-title {
    display: none !important;
  }
  .imagetowebp {
    &-canvasWebp {
      max-width: 567px;
      margin: 0 auto;
      position: relative;
      display: flex;
      justify-content: center;
      img {
        //禁止选中
        user-select: none;
        object-fit: contain;
        box-sizing: border-box;
        padding: 20px;
      }
      .yuan {
        width: fit-content;
        height: 100%;
        // overflow: hidden;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        top: 0;
        clip-path: polygon(0 0, 50% 0, 50% 100%, 0 100%);
        display: flex;
        flex-direction: column;
        align-items: center;
        img {
          width: auto;
          height: 100%;

          object-fit: contain;
          box-sizing: border-box;
          padding: 20px;
        }
      }
      span {
        width: 62px;
        height: 567px;
        background: url("https://statichk.cmermedical.com/vision/imgs/1a68b54b1a299577.png")
          no-repeat;
        display: block;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        top: -20px;
        cursor: col-resize;
        z-index: 10;
      }
    }
  }
}
@media screen and (max-width: 767px) {
  .video-information {
    max-width: 100vw;
    overflow: hidden;
  }
  .presbyopia-content {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0 5.333vw;
    padding: 0 5.333vw;
    margin-top: 8vw;
  }
  .what-presbyopia {
    padding: 0 !important;
    :deep(.title-test) {
      color: #00a6ce;
      text-align: justify;
      font-family: "Noto Sans HK";
      font-size: 6.4vw;
      font-style: normal;
      font-weight: 700;
      line-height: 10.692vw; /* 167.112% */
      letter-spacing: 0.32vw;
      position: relative;
      left: 25%;
    }
    & > div:nth-child(2) {
      margin-top: 5.33vw;
      width: 65.333vw;
      color: #60605f;
      text-align: center;
      font-family: "Noto Sans HK";
      font-size: 3.733vw;
      font-style: normal;
      font-weight: 500;
      line-height: 6.1352vw; /* 164.334% */
      letter-spacing: 0.23px;
      padding: 0;
    }
  }
  .what-presbyopia-svg {
    width: 21.62vw;
    height: 13.25vw;
    position: relative;
    top: 5vw;
    & > svg {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  .presbyopia-glasses {
    box-sizing: border-box;
    margin: 5.33vw 5.33vw 0;
    border-radius: 2.665vw;
    border: 0.53vw solid #00a6ce;
    :deep(.title-test) {
      border-bottom: 0.53vw solid #00a6ce;
      width: 100%;
      display: flex;
      justify-content: center;
    }
    & > div:nth-child(2) {
      box-sizing: border-box;
      padding: 3.333vw;
      display: flex;
      gap: 0 4.8vw;
      align-items: center;
      & > div:nth-child(1) {
        width: 31.597vw;
        height: 20.21vw;
        & > img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      }
      & > div:nth-child(2) {
        color: #60605f;
        text-align: justify;
        font-family: "Noto Sans CJK TC";
        font-size: 3.733vw;
        font-style: normal;
        font-weight: 500;
        line-height: 6.13vw; /* 164.286% */
        max-width: 48.533vw;
      }
    }
  }
  .imagetowebp-canvasWebp {
    position: relative;
    span::before {
      content: "";
      position: absolute;
      left: -0.5528vw;
      top: 30.769vw;
      width: 7.692vw;
      height: 7.692vw;
      border: 2px solid #ff135a;
      border-radius: 50%;
      transition: 0.5s;
      -webkit-animation: btn-content 2s infinite; /* 修改为 btn-content 2s 1 如果你只想让它播放一次 */
      animation: btn-content 2s infinite; /* 修改为 btn-content 2s 1 如果你只想让它播放一次 */
      outline: 0.1em solid transparent;
      outline-offset: 0.2em;
      box-shadow: 0 0 0.4em 0 #ff135a;
    }
  }

  .maintext {
    text-indent: 0.53vw !important;
  }
  .maintain {
    margin-top: 7.948vw;
    margin-bottom: 10.5128vw;
    padding: 0 5.897vw;
    & > div:nth-child(2) {
      margin-top: 5.897vw;
      & > div {
        margin-bottom: 2.564vw;
        border-radius: 5.128vw;
        background: var(--Skin, #eafbff);
        display: flex;
        box-sizing: border-box;
        gap: 0 2.564vw;
        padding: 4.615vw 3.076vw 4.615vw 4.1vw;
        text-indent: -3.846vw;

        & > div:nth-child(1) {
          min-width: 26.154vw;
          min-height: 26.154vw;
          width: 26.154vw;
          height: 26.154vw;
          & > img {
            width: 100%;
            height: 100%;
          }
        }
        & > div:nth-child(2) {
          display: flex;
          flex-direction: column;
          color: var(--Grey-Deep, #4d4d4d);
          text-align: justify;
          font-family: "Noto Sans CJK TC";
          font-size: 3.4872vw;
          font-style: normal;
          font-weight: 400;
          line-height: 5.128vw; /* 142.857% */
          & > span:nth-child(1) {
            color: var(--Brand-Color, #00a6ce);
            font-family: "Noto Sans CJK TC" !important;
            font-size: 4.1vw;
            font-style: normal;
            font-weight: 700;
            line-height: 5.09vw; /* 124.248% */
            letter-spacing: 0.8px;
            display: block;
            padding-right: 21.79vw;
            margin-bottom: 2.564vw;
          }
        }
      }
    }
  }
  :deep(.question) {
    padding: 0 5.897vw 6.897vw 5.64vw;
    margin-top: 32.2vw;
    & > div {
      & > div:nth-child(2) {
        & > div {
          button {
            color: var(--Brand-Color, #00a6ce);
            font-family: "Noto Sans HK";
            font-size: 3.733vw;
            font-style: normal;
            font-weight: 700;
            line-height: 6.4vw;
            letter-spacing: 0.1865vw;
            text-align: left;
            padding-left: 10.1025vw;
            min-height: 17.948vw;
            padding-right: 6.6vw;
          }

          .el-collapse-item__header::before {
            color: var(--Brand-Color, #00a6ce);
            text-align: center;
            font-family: "Intro ";
            font-size: 6.4vw;
            font-style: normal;
            font-weight: 600;
            line-height: 12vw; /* 187.5% */
            letter-spacing: 0.32vw;
            left: 2.564vw;
          }
          .el-collapse-item__header {
            & > i {
              min-width: 3.589vw;
              min-height: 6.665vw;
            }
          }
          .el-collapse-item__arrow.is-active {
            min-width: 6.665vw;
            min-height: 3.589vw;
          }
          .el-collapse-item__header.is-active::before {
            font-size: 7.1789vw;
            font-style: normal;
            font-weight: 700;
            line-height: 11.88vw; /* 165.577% */
            letter-spacing: 0.3589vw;
          }
        }
        & > div:last-child {
          button {
            border-bottom: none;
          }
        }
      }
    }
    .title {
      display: none;
      opacity: 0;
    }
    .question-title {
      display: flex;
      flex-direction: column;
      align-items: center;
      & > span:nth-child(1) {
        color: #60605f;
        text-align: center;
        font-family: "Intro ";
        font-size: 6.4vw;
        font-style: normal;
        font-weight: 600;
        line-height: 4.265vw;
        letter-spacing: 1.024vw;
      }
      & > span:nth-child(2) {
        color: #00a6ce;
        text-align: center;
        font-family: "Noto Sans HK";
        font-size: 6.4vw;
        font-style: normal;
        font-weight: 700;
        line-height: 12vw; /* 187.5% */
        letter-spacing: 0.32vw;
      }
    }
  }

  .btn-pdf {
    margin-top: 10.25vw;
    margin-bottom: 5.128vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    & > div:nth-child(1) {
      width: 24.1025vw;
      height: 29.68vw;
      & > img {
        width: 100%;
        height: 100%;
      }
    }
    & > a {
      margin-top: 5.64vw;
      background: #00517e;
      border: 1px solid #02ed85;
      border-radius: 6.15vw;
      padding: 2.05vw 6.15vw;
      box-shadow: 0 0 4.1vw 0.769vw #45a9bd;
      display: flex;
      align-items: center;
      gap: 0 3.0769vw;
      & > span {
        display: flex;
        align-items: center;
        color: #fff;
        font-family: "Noto Sans CJK TC" !important;
        font-size: 4.067vw;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
      }
      & > span:nth-child(1) {
        & > svg {
          overflow: hidden;
          border-radius: 50%;
          & > path {
            animation: downloadArrow 2s linear infinite;
          }
        }
      }
    }
    & > a::after {
      content: "";
      position: absolute;
      // animation: btntestafterAnima 3s infinite ease-in-out;
      border-radius: 6.1538vw;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }
  .brand {
    margin-top: 7.69vw;
    margin-bottom: 8.205vw;
    padding: 0;
    max-width: 100vw;
    overflow: hidden;
    position: relative;
    & > div:nth-child(2) {
      margin-top: 0;
      margin-bottom: 5.64vw;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 4.615vw;
      & > div {
        overflow: hidden;
        border-radius: 6.4vw;
        background: #f4f4f4;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 41.538vw;
        height: 41.538vw;
        & > img {
          width: 100%;
        }
      }
    }
    & > div:nth-child(3) {
      display: flex;
      justify-content: center;
      :deep(.btn) {
        top: auto;
        right: auto;
        filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.2));
        bottom: 20px;
      }
      :deep(.slot) {
        & > div {
          border-radius: 2.665vw;
        }
      }
    }
  }
  .brand::after {
    content: "";
    position: absolute;
    background: url("https://statichk.cmermedical.com/vision/imgs/2025030511375501.png")
      no-repeat;
    background-size: contain;
    width: 21.665vw;
    height: 32.33vw;
    left: 0;
    top: 0;
  }
  .brand::before {
    content: "";
    position: absolute;
    background: url("https://statichk.cmermedical.com/vision/imgs/2025030511375502.png")
      no-repeat;
    background-size: contain;
    width: 21.665vw;
    height: 31.33vw;
    right: 0;
    bottom: -2.665vw;
  }
  .brand-mobile-item {
    width: 42.26vw;
    height: 75.057vw;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(
      180deg,
      rgba(0, 166, 206, 0) 0%,
      rgba(0, 166, 206, 0.2) 52%,
      rgba(0, 166, 206, 0) 100%
    );
    transform: skewX(-10deg);
    & > svg {
      transform: skewX(10deg);
    }
  }
  .contrast {
    margin-top: 12vw;
    padding-bottom: 0;
    padding-top: 8vw;
    position: relative;
    background: url(https://statichk.cmermedical.com/vision/imgs/2025030316482501.png)
      no-repeat;
    background-size: cover;
    width: 100vw;
    height: 172.533vw;
    & > div:nth-child(2) {
      margin-top: 10.66vw;
      margin-left: 0;
      margin-right: 0;
      display: flex;
      border-radius: 2.66vw;
      background: #fff;
      overflow: hidden;
      & > div {
        flex: 1;
        & > div:nth-child(1) {
          height: 23.733vw;
          font-family: "Noto Sans CJK TC" !important;
          font-size: 4.265vw;
          font-style: normal;
          font-weight: 600;
          line-height: normal;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        & > div:nth-child(2) {
          height: 29.33vw;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          & > span {
            display: inline;
            font-size: 3.033vw;
            font-style: normal;
            font-weight: 500;
            line-height: 4.8vw; /* 128.571% */
            letter-spacing: 0.1865vw;
          }
        }
        & > div:nth-child(3) {
          height: 37.33vw;
          & > span {
            display: inline;
            font-size: 3.033vw;
            font-style: normal;
            font-weight: 500;
            line-height: 4.8vw; /* 128.571% */
            letter-spacing: 0.1865vw;
          }
        }
        & > div:nth-child(4) {
          height: 29.33vw;
          & > span {
            display: inline;
            font-size: 3.033vw;
            font-style: normal;
            font-weight: 500;
            line-height: 4.8vw; /* 128.571% */
            letter-spacing: 0.1865vw;
          }
        }
      }
      & > div:nth-child(1) {
        width: 13.6vw;
        max-width: 13.6vw;
        background: #00a6ce;
        color: #fff;
        & > div {
          border-bottom: 1.06px solid #fff;
          display: flex;
          justify-content: center;
          align-items: center;
          box-sizing: border-box;
          padding: 0 2.2654vw !important;
        }
        & > div:nth-child(2),
        & > div:nth-child(3),
        & > div:nth-child(4) {
          font-family: "Noto Sans CJK TC" !important;
          font-size: 4.265vw;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
        }
        & > div:last-child {
          border-bottom: none;
        }
      }
      & > div:nth-child(2),
      & > div:nth-child(4),
      & > div:nth-child(3),
      & > div:nth-child(5) {
        & > div:nth-child(1) {
          background: #6dd4ee;
          color: #fff;
        }
        & > div {
          border-bottom: 1.06px solid #21aaca;
          box-sizing: border-box !important;
          padding: 2.665vw !important;
          color: #60605f;
          text-align: center;
          font-family: "Noto Sans HK";
          font-size: 3.033vw;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
        }
        & > div:last-child {
          border-bottom: none;
          box-sizing: border-box;
          padding: 5.33vw 2.665vw 0 3.733vw;
        }
      }
      & > div:nth-child(3),
      & > div:nth-child(5) {
        & > div:nth-child(1) {
          background: #64bcd2;
          color: #fff;
        }
      }
    }
    & > div:nth-child(3) {
      display: none;
      opacity: 0;
    }
  }
  .contrast::before {
    content: "";
    background: url(https://statichk.cmermedical.com/vision/imgs/7504bfc893ca.svg)
      no-repeat;
    position: absolute;
    background-size: contain;
    right: 5.52vw;
    width: 39.2065vw;
    height: 41.080265vw;
    z-index: 10;
    bottom: -8.33vw;
  }
  .type {
    margin-top: 12.82vw;
    & > div:nth-child(2) {
      padding: 0 2.665vw 0 2.665vw;
      height: 38.933vw;

      & > div {
        & > img {
          width: 100%;
        }
      }
    }
    & > div:nth-child(3) {
      color: var(--Brand-Color, #00a6ce);
      text-align: center;
      font-family: "Noto Sans HK";
      font-size: 3.076vw;
      font-style: normal;
      font-weight: 500;
      line-height: 4.615vw; /* 150% */
      text-transform: uppercase;
      padding: 0 10.25vw;
      margin-bottom: 5.128vw;
    }
    & > div:nth-child(4) {
      padding: 0 5.89vw 0 5.64vw;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(2, 1fr);
      gap: 6.15vw 5.128vw;
      justify-items: center;
      & > div {
        position: relative;
        width: 38.974vw;
        display: flex;
        flex-direction: column;
        align-items: center;
        border-radius: 2.564vw;
        & > div:nth-child(1) {
          width: 38.974vw;
          & > img {
            width: 100%;
          }
        }
        & > div:nth-child(2) {
          position: absolute;
          bottom: 0;
          width: 100%;
          color: var(--Deep-Blue, #3e5270);
          text-align: center;
          font-family: "Noto Sans CJK TC" !important;
          font-size: 3.589vw;
          font-style: normal;
          font-weight: 500;
          line-height: 5.897vw; /* 164.286% */
          border-radius: 0px 0px 2.564vw 2.564vw;
          background: var(--Skin, #eafbff);
        }
      }
    }
    & > div:nth-child(5) {
      margin-top: 5.128vw;
      padding: 0 5.897vw 0 5.64vw;
      & > span {
        color: var(--Deep-Blue, #3e5270);
        text-align: center;
        font-family: "Noto Sans CJK TC" !important;
        font-size: 6.15vw;
        font-style: normal;
        font-weight: 700;
        line-height: 11.538vw; /* 187.5% */
        letter-spacing: 0.307vw;
        width: 100%;
        display: block;
      }
      & > p {
        & > span {
          color: var(--Brand-Color, #00a6ce);
          font-family: "Noto Sans CJK TC";
          font-size: 3.589vw;
          font-style: normal;
          font-weight: 500;
          line-height: 5.64vw;
        }
        color: var(--Grey, #4d4d4d);
        text-align: center;
        font-family: "Noto Sans CJK TC";
        font-size: 3.589vw;
        font-style: normal;
        font-weight: 500;
        letter-spacing: 0.5128vw;
        line-height: 5.64vw; /* 157.143% */
      }
    }
  }
  .btn-bg {
    & > div {
      display: flex;
      align-items: center;
      border-radius: 3.076vw;
      background: var(
        --Style,
        linear-gradient(90deg, #00a6ce 25.95%, #3346ed 100%)
      );
      width: fit-content;
      padding: 0.76vw 2.05vw 0.76vw 5.128vw;
      border: 0.8vw solid #ffffff;
      & > span:nth-child(1) {
        color: var(--White, #fff);
        font-family: "Noto Sans CJK TC" !important;
        font-size: 3.589vw;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        letter-spacing: 0.35vw;
        margin-right: 2.564vw;
      }
      & > span:nth-child(2) {
        width: 5.897vw;
        & > img {
          width: 100%;
        }
        display: flex;
        justify-content: center;
        align-items: center;
      }
      position: relative;
      z-index: 5;
    }
    background: var(
      --Style,
      linear-gradient(90deg, #00a6ce 25.95%, #3346ed 100%)
    );
    display: flex;
    border-radius: 3.846vw;
    padding: 1.025vw;
    width: fit-content;
    margin: 0 auto;
  }
  .theory {
    margin-top: 12.8205vw;
    background: var(--Skin, #eafbff);
    box-sizing: border-box;
    padding: 5.64vw 1vw 5.64vw;
    max-width: 100vw;
    & > div:nth-child(1) {
      & > div:nth-child(2) {
        margin-top: 5.128vw;
        color: #60605f;
        text-align: center;
        font-family: "Noto Sans CJK TC";
        font-size: 3.589vw;
        font-style: normal;
        font-weight: 500;
        line-height: 5.897vw; /* 164.334% */
        letter-spacing: -0.07px;
      }
      & > div:nth-child(3) {
        max-width: 87.179vw;
        margin: 3.846vw auto 2.665vw;
        & > img {
          width: 100%;
        }
      }
      & > div:nth-child(4) {
        & > span:nth-child(1) {
          color: var(--Brand-Color, #00a6ce);
          text-align: center;
          font-family: "Noto Sans CJK TC" !important;
          font-size: 3.589vw;
          font-style: normal;
          font-weight: 500;
          line-height: 5.897vw; /* 164.286% */
          display: block;
          padding: 0 11.538vw;
        }
        & > span:nth-child(2) {
          padding: 0 12.8205vw;
        }
        & > span:nth-child(3) {
          padding: 0 19.23vw;
        }
        & > span:nth-child(4) {
          padding: 0 0;
        }
        color: #60605f;
        font-family: "Noto Sans CJK TC" !important;
        font-size: 3.589vw;
        font-style: normal;
        font-weight: 500;
        line-height: 5.897vw;
        display: flex;
        flex-direction: column;
        text-align: center;
      }
    }
  }
  .theory-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 100vw;
    & > div:nth-child(1) {
      & > div:nth-child(2) {
        color: #60605f;
        text-align: center;
        font-family: "Noto Sans HK";
        font-size: 3.733vw;
        font-style: normal;
        font-weight: 400;
        line-height: 6.933vw; /* 185.714% */
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    }
    & > div:nth-child(2) {
      position: relative;
      width: 73.6vw;
      height: 73.6vw;
      & > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      position: relative;
      & > div:nth-child(2) {
        position: absolute;
        background: url("https://statichk.cmermedical.com/vision/imgs/2025030415233201.png")
          no-repeat;
        background-size: cover;
        position: absolute;
        right: -38px;
        top: 50%;
        transform: translateY(-50%);
        width: 6.4vw;
        height: 59.733vw;
      }
    }

    & > div:nth-child(3) {
      & > div {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        & > span:nth-child(1) {
          color: #00a6ce;
          font-family: "Noto Sans HK";
          font-size: 4.8vw;
          font-style: normal;
          font-weight: 900;
          line-height: 10.65vw; /* 222.222% */
        }
        & > span:nth-child(2) {
          color: #60605f;
          font-family: "Noto Sans HK";
          font-size: 4.8vw;
          font-style: normal;
          font-weight: 400;
          line-height: 10.65vw;
        }
        box-sizing: border-box;
        padding: 2.6654vw 0;
      }
      & > div:nth-child(2) {
        box-sizing: border-box;
        padding: 5.33vw 0;
        border-top: 1px solid #00a6ce;
        border-bottom: 1px solid #00a6ce;
      }
    }
  }
  .comparison {
    padding: 0 5.89vw 0 5.64vw;
    margin-top: 22.82vw;
    margin-bottom: 5.82vw;
    position: relative;
    display: none;
    flex-direction: column;
    & > div:nth-child(1) {
      margin-bottom: 5.564vw;
      display: flex;
      justify-content: center;
      gap: 0 5.128vw;
      & > div:nth-child(1) {
        color: var(--Deep-Blue, #3e5270);
        text-align: center;
        font-family: "Noto Sans CJK TC" !important;
        font-size: 3.589vw;
        font-style: normal;
        font-weight: 700;
        line-height: 6.923vw; /* 192.68% */
        letter-spacing: 0.7px;
      }
      & > div:nth-child(2) {
        color: var(--OkLens-color, #0192b0);
        text-align: center;
        font-family: "Noto Sans CJK TC" !important;
        font-size: 3.589vw;
        font-style: normal;
        font-weight: 700;
        line-height: 6.923vw; /* 192.68% */
        letter-spacing: 0.7px;
        position: relative;
      }
      & > div:nth-child(2)::after {
        position: absolute;
        content: "";
        background: url(https://statichk.cmermedical.com/vision/imgs/2025030615371001.svg)
          no-repeat;
        background-size: cover;
        width: 8vw;
        height: 9vw;
        bottom: -3vw;
      }
    }
    & > div:nth-child(3) {
      position: absolute;
      top: -25vw;
      left: 6vw;
      margin-top: 1.564vw;
      width: max-content;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 0;
      & > span:nth-child(1) {
        color: #00a6ce;
        text-align: justify;
        font-family: "Noto Sans HK";
        font-size: 24px;
        font-style: normal;
        font-weight: 700;
        line-height: 45px; /* 187.5% */
        letter-spacing: 1.2px;
      }
      & > span:nth-child(2) {
        color: #60605f;
        font-family: "Noto Sans TC";
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 20px; /* 321.429% */
      }
    }
    .comparison-right-text {
      position: relative;
    }
    .comparison-right-text::after {
      position: absolute;
      content: "";
      background: url(https://statichk.cmermedical.com/vision/imgs/2025030615371001.svg)
        no-repeat;
      background-size: cover;
      width: 8vw;
      height: 9vw;
      bottom: -3vw;
    }
    .backspace-theory {
      position: absolute;
      width: 6vw;
      height: 62.233vw;
      background: url(https://statichk.cmermedical.com/vision/imgs/2025031710595801.png)
        no-repeat;
      background-size: cover;
      left: -5vw;
      top: 0;
    }
  }
  .classify {
    position: relative;
    display: flex;
    flex-direction: column-reverse;
    border-top: 0.8vw solid #00a6ce;
    & > div:nth-child(2) {
      background: firebrick;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      .classify-btn {
        flex: 1;
        border: 0.718px solid #00a6ce;
        background: #fff;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 0 1.6vw;
        box-sizing: border-box;
        padding: 2.665vw;
        & > div:nth-child(1) {
          width: 3.14vw;
          height: 2.728vw;
          display: flex;
          align-items: center;
          justify-content: center;
          & > svg {
            width: 100%;
            height: 100%;
            object-fit: contain;
            path {
              fill: #00a6ce;
            }
          }
        }
        & > div:nth-child(2) {
          color: #00a6ce;
          text-align: center;
          font-family: "Noto Sans HK";
          font-size: 3.26265vw;
          font-style: normal;
          font-weight: 500;
          line-height: 8.613vw; /* 235.164% */
          letter-spacing: 0.687px;
        }
      }
      .btn-active {
        background: #00a6ce;
        & > div:nth-child(1) {
          & > svg {
            path {
              fill: #fff;
            }
          }
        }
        & > div:nth-child(2) {
          color: #fff;
        }
      }
    }
  }
  .classify-video {
    position: absolute;
    bottom: 0;
    width: 91.641vw;
    height: 51.4648vw;
    z-index: 20;
    left: 50%;
    transform: translateX(-50%);
  }
  .classify-video::after {
    content: "";
    background: url("https://statichk.cmermedical.com/vision/imgs/2025030614090801.png")
      no-repeat;
    background-size: cover;
    position: absolute;
    width: 92.041vw;
    height: 52.7648vw;
    top: -0.9vw;
    left: -0.6vw;
    z-index: 5;
    pointer-events: none;
  }
  .classify-list {
    max-width: 100vw;
    margin: 0 auto;
  }
  .classify-list-item {
    margin-top: 5.33vw;
    display: none;
    padding: 4vw 5.33vw 58.333vw;
    position: relative;
    z-index: 5;
    flex-direction: column-reverse;
    & > div:nth-child(1) {
      position: absolute;
      width: 25.5842vw;
      height: 21.96265vw;
      top: 44vw;
      & > svg {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
    & > div:nth-child(2) {
      margin-top: 50vw;
      display: flex;
      align-items: flex-end;
      flex-direction: column;
      & > div:nth-child(1) {
        color: #60605f;
        font-family: "Noto Sans HK";
        font-size: 7.6vw;
        font-style: normal;
        font-weight: 500;
        line-height: 12vw; /* 125% */
        letter-spacing: 0.48vw;
      }
      & > div:nth-child(2) {
        max-width: 100%;
        margin-top: 8vw;
        margin-bottom: 8vw;
        color: #60605f;
        font-family: "Noto Sans HK";
        font-size: 5.065vw;
        font-style: normal;
        font-weight: 250;
        line-height: 10.66vw; /* 210.526% */
        letter-spacing: 0.253vw;
        :deep(span) {
          font-family: "Noto Sans HK";
          font-size: 5.065vw;
          font-style: normal;
          font-weight: 700;
          line-height: 10.66vw;
          letter-spacing: 0.253vw;
        }
      }
      & > div:nth-child(3) {
        color: #60605f;
        text-align: justify;
        font-family: "Noto Sans HK";
        font-size: 3.733vw;
        font-style: normal;
        font-weight: 500;
        line-height: 6.4vw; /* 171.429% */
      }
    }
    & > div:nth-child(3) {
      position: absolute;
      right: 0;
      top: 0;
      width: 100%;
      & > img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
  }
  .classify-list-item-one::before {
    content: "";
    background: url("https://statichk.cmermedical.com/vision/imgs/2025030315324504.png")
      no-repeat;
    background-size: contain;
    width: 26.665vw;
    height: 26.665vw;
    position: absolute;
    bottom: 30%;
    left: 8%;
  }
  .classify-list-item-two::before {
    content: "";
    background: url("https://statichk.cmermedical.com/vision/imgs/2025030315324503.png")
      no-repeat;
    background-size: contain;
    width: 26.665vw;
    height: 26.665vw;
    position: absolute;
    bottom: 30%;
    left: 12%;
  }
  .classify-list-item-three::before {
    content: "";
    background: url("https://statichk.cmermedical.com/vision/imgs/2025030315324501.png")
      no-repeat;
    background-size: contain;
    width: 26.665vw;
    height: 26.665vw;
    position: absolute;
    bottom: 30%;
    left: 12%;
  }
  .classify-list-item-four::before {
    content: "";
    background: url("https://statichk.cmermedical.com/vision/imgs/2025030315324502.png")
      no-repeat;
    background-size: contain;
    width: 26.665vw;
    height: 26.665vw;
    position: absolute;
    bottom: 30%;
    left: 12%;
  }
  .active {
    display: flex;
    opacity: 1;
    transition: all 0.3s ease;
  }
  .active-bg {
    border: 0.53vw solid #00a6ce;
    transform: scale(1.05);
  }

  .hide-active {
    transform: scale(1.05);
    box-shadow: 0px 1.2vw 1.2vw 0px rgba(0, 0, 0, 0.25);
  }
  .cataract-query {
    background: url(https://statichk.cmermedical.com/vision/imgs/2025030309383304.webp)
      no-repeat;
    background-size: contain;
    box-sizing: border-box;
    width: 100%;
    height: 80vw;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: sticky;
    top: 2.33vw;
  }
  .cataract-query-title {
    color: var(--White, #fff);
    font-family: "Noto Sans HK";
    font-size: 6.933vw;
    font-style: normal;
    font-weight: 700;
    line-height: 0px; /* 0% */
    letter-spacing: 0.416vw;
  }
  .cataract-query-content {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 100vw;
    box-sizing: border-box;
    padding: 4.8vw;
    margin-top: -37.33vw;
    & > div {
      max-width: 32.533vw;
      color: #fff;
      text-align: justify;
      font-family: "Noto Sans HK";
      font-size: 3.733vw;
      font-style: normal;
      font-weight: 500;
      line-height: 6.4vw; /* 171.429% */
    }
  }
  .cataract-notice-that {
    margin-top: 13.665vw;
    box-sizing: border-box;
    padding: 11.73vw 6.4vw 6.4vw 6.4vw;
    display: flex;
    gap: 0 5.33vw;
    border-radius: 1.33vw;
    overflow: hidden;
    position: relative;
    & > div:nth-child(1) {
      max-width: 46.933vw;
      color: #60605f;
      text-align: justify;
      font-family: "Noto Sans CJK TC";
      font-size: 3.733vw;
      font-style: normal;
      font-weight: 500;
      line-height: 6.933vw; /* 185.714% */
      & > div:nth-child(1) {
        position: absolute;
        top: -2.655vw;
        left: 50%;
        transform: translateX(-50%);
        color: var(--Brand-Color, #00a6ce);
        text-align: center;
        font-family: "Noto Sans HK";
        font-size: 6.4vw;
        font-style: normal;
        font-weight: 700;
        line-height: 12vw; /* 187.5% */
        letter-spacing: 1.2px;
      }
      & > div:nth-child(2) {
        text-align: justify;
      }
    }
    & > a {
      display: block;
      max-width: 37.865vw;
      & > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
  .new-maintain {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 24vw;
  }
  .new-maintain-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: url("https://statichk.cmermedical.com/vision/imgs/2025030513453301.png")
      no-repeat;
    background-size: cover;
    background-position: top;
    width: 100%;
    height: 82.665vw;
    & > div:nth-child(1) {
      color: var(--Brand-Color, #00a6ce);
      font-family: "Noto Sans HK";
      font-size: 6.4vw;
      font-style: normal;
      font-weight: 700;
      line-height: 9.6vw; /* 150% */
      letter-spacing: 1.2px;
      padding-left: 13.33vw;
    }
    & > div:nth-child(2) {
      & > div:nth-child(1) {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        gap: 0 2.13vw3;
        & > div:nth-child(2) {
          padding-bottom: 9.6vw;
        }
      }
      .key-title {
        background: url(https://statichk.cmermedical.com/vision/imgs/2025030413420502.png)
          no-repeat;
        width: 30.65253vw;
        height: 35.003vw;
        background-size: contain;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #00a6ce;
        text-align: justify;
        font-family: "Noto Sans HK";
        font-size: 10.655vw;
        font-style: normal;
        font-weight: 250;
        line-height: 12vw; /* 112.5% */
        cursor: pointer;
        transition: all 0.3s ease-in;
      }
      .key-active {
        background: url(https://statichk.cmermedical.com/vision/imgs/2025030413420501.png)
          no-repeat;
        background-size: contain;
        color: #fff;
        transition: all 0.3s ease-in;
      }

      & > div:nth-child(2) {
        box-sizing: border-box;
        padding: 0 5.3vw 0 6.2vw;
        .key-content {
          margin-bottom: 5.33vw;
          display: none;
          transition: all 0.3s ease-in;
          & > div:nth-child(1) {
            color: var(--Brand-Color, #00a6ce);
            text-align: justify;
            font-family: "Noto Sans CJK TC";
            font-size: 5.33vw;
            font-style: normal;
            font-weight: 700;
            line-height: 12vw; /* 225% */
            letter-spacing: 1px;
          }
          & > ul {
            & > li {
              color: var(--Grey-Deep, #4d4d4d);
              text-align: justify;
              font-family: "Noto Sans CJK TC";
              font-size: 3.733vw;
              font-style: normal;
              font-weight: 500;
              line-height: 8vw; /* 214.286% */
            }
          }
        }
        .content-active {
          display: block;
          transition: all 0.3s ease-in;
        }
      }
    }
  }
  .profile-title {
    min-height: 100vw;
    width: 100%;
    position: absolute;
    top: 0;
    margin-top: 22.307vw;
    span {
      position: absolute;
      top: 5.33vw;
      left: 50%;
      transform: translateX(-50%);
      color: #00a6ce;
      font-family: "Noto Sans HK";
      font-size: 11.4946vw;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      width: fit-content;
      white-space: nowrap;
    }
  }
  .imagetowebp {
    &-canvasWebp {
      max-width: 68.205vw;
      margin: 0 auto;
      position: relative;
      display: flex;
      justify-content: center;
      img {
        //禁止选中
        user-select: none;
        width: 68.205vw;
        height: 55.3846vw;
      }
      .yuan {
        width: fit-content;
        height: 100%;
        // overflow: hidden;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        top: 0;
        clip-path: polygon(0 0, 50% 0, 50% 100%, 0 100%);
        display: flex;
        flex-direction: column;
        align-items: center;
        img {
          width: 68.205vw;
          height: 55.3846vw;
        }
      }
      span {
        width: 7.1794vw;
        height: 75.128vw;
        background: url("https://statichk.cmermedical.com/vision/imgs/1a68b54b1a299577.png")
          no-repeat;
        background-size: 100% 100%;
        display: block;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        top: -13.33vw;
        cursor: col-resize;
      }
    }
  }
}
</style>