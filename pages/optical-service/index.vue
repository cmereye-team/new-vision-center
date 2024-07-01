<script lang="ts" setup>
useHead(() => ({
  title: "視光服務 - 希瑪眼科視光中心",
}));
const bannerImg = {
  pc: "https://static.cmereye.com/imgs/2024/05/0820bdc6f6ea1c8f.png",
  mobile: "https://static.cmereye.com/imgs/2024/05/a6ebf7f784038fed.png",
};

import getWindowSize from "@/utils/width";
const isPc = ref(false);

onMounted(() => {
  window.addEventListener("resize", () => {
    let { widthState, width } = getWindowSize();
    isPc.value = widthState;
  });
});

const listData = ref([
  {
    img: "https://static.cmereye.com/imgs/2024/06/c2e52e755f48079a.png",
    title: ["雙眼協調及", "斜視檢查"],
  },
  {
    img: "https://static.cmereye.com/imgs/2024/06/4de6b28d618c7483.png",
    title: ["色弱/色盲", "檢查"],
  },
  {
    img: "https://static.cmereye.com/imgs/2024/06/8c0818ec1e899da6.png",
    title: ["眼乾及淚水", "測試"],
  },
  {
    img: "https://static.cmereye.com/imgs/2024/06/0d31da47fb9dc6ef.png",
    title: ["驗配眼鏡"],
  },
  {
    img: "https://static.cmereye.com/imgs/2024/06/58a06bfa5d4a4b52.png",
    title: ["立體視覺", "檢查"],
  },
  {
    img: "https://static.cmereye.com/imgs/2024/06/abe1875b3eee24a5.png",
    title: ["角膜健康", "檢查"],
  },
  {
    img: "https://static.cmereye.com/imgs/2024/06/2fc29b45e62f72ce.png",
    title: ["青光眼篩查", "(眼壓)"],
  },
  {
    img: "https://static.cmereye.com/imgs/2024/06/8a95d727e1a25f9f.png",
    title: ["視野檢查"],
  },
  {
    img: "https://static.cmereye.com/imgs/2024/06/b103780437afdab1.png",
    title: ["視力及屈光", "度數檢查檢查"],
  },
  {
    img: "https://static.cmereye.com/imgs/2024/06/00a380916ac346dd.png",
    title: ["眼角膜地", "形圖分析"],
  },
  {
    img: "https://static.cmereye.com/imgs/2024/06/fe595b34e6f383ad.png",
    title: ["視網膜掃描", "攝影(SLO）"],
  },
  {
    img: "https://static.cmereye.com/imgs/2024/06/038ffbe76fe5e8dc.png",
    title: ["眼軸檢查"],
  },
  {
    img: "https://static.cmereye.com/imgs/2024/06/4daa5583f7e6d55d.png",
    title: ["眼球結構斷", "層掃描(OCT）"],
  },
]);
const listDataDetail = [
  {
    img: "https://static.cmereye.com/imgs/2024/06/b789eee61a68f7be.png",
    title: "雙眼協調及斜視檢查",
    description: [
      "雙眼不能協調地看事物，便會形成斜視。這協調能力需要腦",
      "部、視覺神經及眼外肌的配合，把雙眼視野的影像融合為一，",
      "及產生立體感。",
      "",
      "雙眼協調能力異常及斜視會引致不良視力發展，令兒童失去立",
      "體視覺，及出現弱視等併發症。因此建議兒童在大約四歳時接",
      "受眼睛檢查，及早發現問題和治療。",
      "",
      "雙眼協調及斜視檢査有助評估應診者的雙眼協調能力，當中包",
      "括雙眼聚焦力、眼睛轉動、視軸偏離的方向和幅度等測試，以",
      "檢查應診者是否患上斜視或其他眼肌問題。",
    ],
  },
  {
    img: "https://static.cmereye.com/imgs/2024/06/0116bf3c9677860b.png",
    title: "色弱/色盲檢查",
    description: [
      "甚麼是色弱盲？",
      "使用石原氏色覺測試圖表进行色覺檢查，可判斷出色覺異常問",
      "题。石原氏色覺測試圖適用於診斷紅綠色弱或蓝黄色弱。",
      "",
      "測試圖由不同顔色和大小的圓點組成。在特定時間内，應診者",
      "需準確指出測試圖中隱藏的數字。",
      "",
      "其中一個测試圖中，色覺正常人士會看到「74」，色弱人士",
      "会看到「21」，色盲即完全看不到任何數字。",
    ],
  },
  {
    img: "https://static.cmereye.com/imgs/2024/06/05facfcedafca7a1.png",
    title: "眼乾及淚水測試",
    description: [
      "人的涙水有三層，由最外層起分別為油脂層、中周為水層、最",
      "内為黏液層组成，三層中只要其中一層出現問題，都會構成乾",
      "眼症。乾眼症是常見的都市病，可分為「涙水分泌不足」及",
      "「揮發性眼乾」兩大種類。",
      "",
      "我們的視光師會使用儀器或試紙為應診者測試，以分析涙膜的",
      "質素及瞼板腺的健康狀況等，評估應診者是否患有乾眼症，並",
      "根據其眼乾種類及嚴重性，建議適合的紓缓方法，有需要時會",
      "轉介予希瑪眼科事科醫生作進一步治療。",
    ],
  },
  {
    img: "https://static.cmereye.com/imgs/2024/06/86a35b67a1a25c97.png",
    title: "驗配眼鏡",
    description: [
      "專業驗配各式眼镜",
      "希瑪視光提供兒童、成人、長者的專業驗眼服務。由於每个人",
      "的視力及用眼情况不一，我們的視光師會考慮到客人的實際需",
      "要，在进行屈光度數檢查後，如有需要配戴眼鏡矯正視力，視",
      "光師亦會提供配戴不同類型眼鏡的專業意見。",
      "應診者可以在希瑪視光選購眼鏡，配鏡包括:兒童控制近視眼",
      "鏡丶漸進鏡丶老花眼鏡丶老花隱形眼鏡、太陽眼鏡、隱形眼鏡等。",
      "港幣$2000或以上的眼鏡驗配服務已包括1次綜合眼睛檢查。",
    ],
  },
  {
    img: "https://static.cmereye.com/imgs/2024/06/11f3a2cb523d5392.png",
    title: "立體視覺檢查",
    description: [
      "立體視覺是對物體:遠近、高低、深度等的感知能力,並不是與",
      "生俱來的視覺功能,而是在發育時期内锻鍊和培養。",
      "",
      "斜視及弱視會影響立體視覺發展，如錯過治療的黃金時間，立",
      "體視覺可能難以再發育。",
      "",
      "視光師會利用不同方法測試立體視覺感，例如偏光鏡及立體視",
      "覺圖,檢查應診者是否看到三維圖像，擁有正常立體視覺。",
    ],
  },
  {
    img: "https://static.cmereye.com/imgs/2024/06/e12381a19dc443db.png",
    title: "角膜健康檢查",
    description: [
      "眼角膜的厚薄、弧度、形狀等，可以反映眼睛的健康情況。在 ",
      "檢查眼角膜時，視光師會徹底評估應診者的角膜健康狀態，包 ",
      "括:以裂隙鎮檢查角膜有否出現水泡、穿孔、發炎及增生血管 ",
      "等問題;以角膜底層細胞顯微鏡檢査應診者角膜底層細胞數 ",
      "量。",
      " ",
      "角膜檢查所得結果常用於：評估角膜有否出現缺氧問題和是否 ",
      "錐形角膜；判斷是否適合角膜矯形術;或有否其他潛在眼睛疾 ",
      "病的風险，例如:青光眼。 ",
    ],
  },
  {
    img: "https://static.cmereye.com/imgs/2024/06/d63b7152c39ae201.png",
    title: "青光眼篩查(眼壓)",
    description: [
      "眼壓通高會令視神經受捐，更可能引致青光眼。早期至中期的",
      "慢性青光眼基本上没有任何病徵，患者可能在病情發展到後期",
      "才發现，大大减低治療成效。",
      "",
      "建議一般成人需定期檢查眼壓，尤其40歲以上、深度近視、",
      "患糖尿病及家族有青光眼病歷人士，應每年至少檢查一次。",
      "",
      "眼壓測量儀",
      "視光師會利用眼壓測量儀量度眼壓，如發現眼壓出現異常，我",
      "們可內部轉診服務至希瑪眼科中心，希瑪眼科專科醫生会作進",
      "一步檢查及提供治療方案。",
    ],
  },
  {
    img: "https://static.cmereye.com/imgs/2024/06/56a022e0c3167773.png",
    title: "視野檢查",
    description: [
      "視野檢查是量度視野的寬闊度和敏感度，用於診斷青光眼、視",
      "網膜色素病變、其他影響視野的病症所引起的視野缺損(如腦",
      "神經腫瘤), 屬於一項重要的眼睛檢查。",
      "",
      "進行視野檢查時，視光師會以電腦視野檢查分析儀器為應診者",
      "測試，分析其視野是否在正常的範圉之内。",
    ],
  },
  {
    img: "https://static.cmereye.com/imgs/2024/06/43ee85ffad887734.png",
    title: "視力及屈光度數檢查",
    description: [
      "視光師會透過不同程序和儀器，準確判斷應診者的屈光情况",
      "(是否有近視、遺視、散光及老花等屈光不正問題)",
      "",
      "客觀式屈光檢查",
      "檢影法常用於客觀式屈光檢查。視光師利用檢影燈，把光照射",
      "到應診者的眼睛，觀察反射出来的光線的移動方向，配合不同",
      "鏡片，判斷出應診者的屈光度數。此檢查方法特別適合表達能",
      "力有限的幼童，但仍可能受應診者的配合度、調節作用等因素",
      "影響。為提高準確性，視光師会再以主觀式屈光檢查，確定檢",
      "查结果。",
      "",
      "主觀式屈光檢查",
      "視光師會把一系列的光學鎮片组合在綜合驗光儀上，透過應診",
      "者的主觀回答，找出應診者認為看得最清楚舒服的屈光度数。",
      "視力檢查",
      "應診者根據視光師的指示，辨識視力表中不同大小的文字或圖",
      "案，讓視光師了解應診者的視覺敏銳度(知道有否弱視)。",
    ],
  },
  {
    img: "https://static.cmereye.com/imgs/2024/06/e44d413404c12603.png",
    title: "眼角膜地形圖分析",
    description: [
      "甚麼是角膜地形圖 ？",
      "角膜地形(corneal topography)屬非侵入性的醫學成像技",
      "術，能夠準確地分析和紀錄整個角膜表面的形態、曲率和弧",
      "度，對診斷各種眼角膜病變十分重要。地形圖的顏色呈暖色",
      "位置代表屈光力強的部位，冷色则代表屈光力弱的部位。",
      "",
      "做眼角膜地形圖分析時，應診者只需按視光師指示望向分析儀",
      "器，便可進行眼角膜地形掃描，包括:分析眼角膜的形態和弧",
      "度分佈;檢查角膜屈光度形狀、確認瞳孔大小、淚液品質等。",
      "結果用於判斷角膜是否適合接受角膜矯形術等。",
    ],
  },
  {
    img: "https://static.cmereye.com/imgs/2024/06/3449b9f6a1f351cd.png",
    title: "視網膜掃描攝影（SLO）",
    description: [
      "視網膜掃描攝影SLO(scanning laser ophthalmoscopy)是",
      "一種檢査眼睛的方法，眼底照相可評估視網膜的健康狀況。透",
      "過分析視網膜影像，能夠初步診斷糖尿病視網膜病變丶黃斑部",
      "病變及視網膜脫落等眼睛疾病。",
    ],
  },
  {
    img: "https://static.cmereye.com/imgs/2024/06/74a17a31e5b85bd2.png",
    title: "眼軸檢查",
    description: [
      "眼軸是指眼球的長度，從接收光線表層的眼角膜，至眼球內感",
      "光的視網膜細胞，這個距離稱為「眼轴」。正常情况下，嬰兒",
      "時期的眼軸大約20毫米，6歲時達到22毫米，成年時即有24毫",
      "米。",
      "",
      "眼軸檢查是判斷近視加深速度、屈光不正及其他眼疾的重要指",
      "標之一。接受眼軸檢查時，視光師會使用儀器量度眼軸距離。",
      "眼軸過長會加深近視度數，同時導致視網膜薄，可能造成黄斑",
      "點病變、青光眼、視網膜脱落等疾病。",
    ],
  },
  {
    img: "https://static.cmereye.com/imgs/2024/06/296021be922a80ba.png",
    title: "眼球結構斷層掃描（OCT）",
    description: [
      "眼球3D影像",
      "眼球結構斷層掃描OCT(Optical Coherence Tomography)",
      "是一種光學相干斷層掃描技術，以非入侵性、非接觸性的方式",
      "檢查眼睛。OCT技術所得的横切或縱切剖面3D影像解析度",
      "高，視光師或眼科專科醫生能夠淸晰地觀察角膜、視網膜和視",
      "覺神經線的結構影像，有助及早診斷視網膜破裂、青光眼丶黃",
      "斑病變等。",
      "使用眼球結構斷層掃描OCT檢査時不用點散瞳劑，應診者只需",
      "要配合注視螢幕上的光點，儀器即可迅速撮描眼底，並取得一",
      "個完整的眼底立體圖，通程快捷。",
    ],
  },
];
</script>

<template>
  <div class="video-information">
    <PublicBanner :banner="bannerImg" />
    <PublicNavbar
      :name="'服務內容'"
      :isInsidePage="true"
      :insidePageTitle="'視光服務'"
    />
    <div class="optical-service">
      <div class="glasses-type">
        <nuxt-link to="/optometry-product">
          <span
            ><img src="@/assets/img/triangle-left.svg" alt="triangle"
          /></span>
          <span>視光產品</span>
          <span
            ><img src="@/assets/img/triangle-right.svg" alt="triangle"
          /></span>
        </nuxt-link>
        <nuxt-link to="/optical-service">
          <span
            ><img src="@/assets/img/triangle-left.svg" alt="triangle"
          /></span>
          <span>視光服務</span>
          <span
            ><img src="@/assets/img/triangle-right.svg" alt="triangle"
          /></span>
        </nuxt-link>
      </div>
      <serverAndProduct :allData="listData" :detailList="listDataDetail" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@media screen and (min-width: 768px) {
  .optical-service {
    max-width: 960px;
    margin: 96px auto;
  }
  .glasses-type {
    margin: 90px auto 65px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 7.5px;
    & > a {
      display: flex;
      align-items: center;
      background: #00a6ce;
      box-shadow: 0px 6px 8px 3px rgba(0, 0, 0, 0.1) inset;
      padding: 7px 12px;
      color: #fff;
      text-align: center;
      font-family: "Inter";
      font-size: 21.981px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      border-radius: 20px;
      & > span:nth-child(2) {
        margin: 0 6px;
      }
      & > span:nth-child(1),
      & > span:nth-child(3) {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
    & > a:hover {
      box-shadow: 0px 6px 8px 3px rgba(7, 7, 7, 0.329);
    }
    & > a:nth-child(2) {
      background: #95df82;
    }
  }
}
@media screen and (max-width: 767px) {
  .optical-service {
    padding: 0 25px;
    margin-top: 30px;
    margin-bottom: 14px;
  }
  .product-list {
    position: relative;
    & > div:nth-child(1) {
      & > div {
        & > div:nth-child(1) {
          border-radius: 10px;
          background: var(--Skin, #eafbff);
          box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
          width: 105px;
          height: 105px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        & > div:nth-child(2) {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top: 13px;
          color: #60605f;
          text-align: center;
          font-family: "Noto Sans HK";
          font-size: 16.5px;
          font-style: normal;
          font-weight: 500;
          line-height: 22.5px; /* 136.364% */
          letter-spacing: 0.825px;
        }
      }
    }
    & > div:nth-child(2) {
      margin: 0 auto;
    }
  }
  .glasses-type {
    margin: 30px auto 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 7.5px;
    & > a {
      display: flex;
      align-items: center;
      background: #00a6ce;
      box-shadow: 0px 6px 8px 3px rgba(0, 0, 0, 0.1) inset;
      padding: 7px 10px;
      color: #fff;
      text-align: center;
      font-family: "Inter";
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      border-radius: 20px;
      & > span:nth-child(2) {
        margin: 0 3px;
      }
      & > span:nth-child(1),
      & > span:nth-child(3) {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
    & > a:nth-child(2) {
      background: #95df82;
    }
  }
}
</style>