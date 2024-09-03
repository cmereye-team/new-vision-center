<script lang="ts" setup>
const isPc = ref(false);
// 检测获取屏幕宽度
const getScreenWidth = () => {
  if (window.innerWidth >= 768) {
    isPc.value = true;
  }
};

onMounted(() => {
  if (window.innerWidth >= 768) {
    isPc.value = true;
  }
  window.addEventListener("resize", getScreenWidth);
  window.addEventListener("beforeunload", getScreenWidth);
  chooseType(1);
});
const listVideoAll: any = ref([]);
const reelsListAll: any = ref([]);

const chooseNumber = ref(2);

const allVideo = ref(true);
const orthokeratology = ref(false);
const share = ref(false);
const classSmall = ref(false);
const chooseType = (type: number) => {
  switch (type) {
    case 1:
      allVideo.value = true;
      orthokeratology.value = false;
      share.value = false;
      classSmall.value = false;
      // 将listVideoAll.value 赋值为 listVideo.value、listVideoShare.value 和 listVideoClass.value 的合并结果
      listVideoAll.value = [
        ...listVideoOk.value,
        // ...listVideoShare.value,
        ...listVideoClass.value,
      ];
      reelsListAll.value = [
        ...reelsListOk.value,
        // ...reelsListShare.value,
        // ...reelsListClass.value,
      ];
      break;
    case 2:
      allVideo.value = false;
      orthokeratology.value = true;
      share.value = false;
      classSmall.value = false;
      break;
    // case 3:
    //   allVideo.value = false;
    //   orthokeratology.value = false;
    //   share.value = true;
    //   classSmall.value = false;
    //   break;
    case 4:
      allVideo.value = false;
      orthokeratology.value = false;
      share.value = false;
      classSmall.value = true;
      break;
    default:
      break;
  }
};
const listVideoOk = ref([
  {
    name: "Carson黃梓賢1",
    type: "list",
    isShow: false,
    videoList: [
      {
        id: 1,
        type: "orthokeratology",
        text: ["【Vlog】陪Carson一齊", "去配OK鏡"],
        img: "https://static.cmereye.com/imgs/2024/04/e38c5254def6b99c.png",
        videoLink: "https://www.youtube.com/watch?v=M0y-hzPzyjA",
      },
      {
        id: 2,
        type: "orthokeratology",
        text: ["OrthoK x BMX 極限運動", "想點玩都OK｜希瑪視光"],
        img: "https://static.cmereye.com/imgs/2024/05/c0b5260ef1a04c21.webp",
        videoLink: "https://www.youtube.com/watch?v=BkYXEbfg2Zk",
      },
      {
        id: 3,
        type: "orthokeratology",
        text: ["【近視控制】JON仔OK鏡成果", "分享｜角膜矯形鏡｜希瑪視光"],
        img: "https://static.cmereye.com/imgs/2024/05/61acae6f6109503d.webp",
        videoLink: "https://www.youtube.com/watch?v=qXcrf_ASWE0",
      },
      {
        id: 4,
        type: "orthokeratology",
        text: ["【近視控制】啟動小廚神JON仔", "OK鏡之旅｜角膜矯形鏡｜遺傳近視"],
        img: "https://static.cmereye.com/imgs/2024/05/9453cf23c801dbae.webp",
        videoLink: "https://www.youtube.com/watch?v=urR3F7KR31o",
      },
      {
        id: 5,
        type: "orthokeratology",
        text: [
          "OK鏡真實個案︰小書迷Kathy",
          "近視控制效果理想，媽媽好滿意！｜角膜矯形鏡｜希瑪視光",
        ],
        img: "https://static.cmereye.com/imgs/2024/05/0277a354a74ba630.webp",
        videoLink: "https://www.youtube.com/watch?v=2UJcMkLfuxE",
      },
      {
        id: 6,
        type: "orthokeratology",
        text: [
          "【OK鏡真實個案】運動小健將",
          "Kurtis 做運動唔使再戴眼鏡 近視仲冇加深！｜角膜矯形鏡｜希瑪視光 CMER VISION",
        ],
        img: "https://static.cmereye.com/imgs/2024/05/e59bafa5943e0362.webp",
        videoLink: "https://www.youtube.com/watch?v=J5tfqyp-lQQ",
      },
    ],
  },
  // {
  //   name: "Carson黃梓賢2",
  //   type: "list",
  //   isShow: false,
  //   videoList: [
  //     {
  //       id: 1,
  //       type: "orthokeratology",
  //       text: ["角膜矯形鏡(OK鏡)", "Carson黃梓賢"],
  //       img: "https://static.cmereye.com/imgs/2024/04/e38c5254def6b99c.png",
  //       videoLink: "",
  //     },
  //     {
  //       id: 2,
  //       type: "orthokeratology",
  //       text: ["角膜矯形鏡(OK鏡)", "Carson黃梓賢"],
  //       img: "https://static.cmereye.com/imgs/2024/04/e38c5254def6b99c.png",
  //       videoLink: "",
  //     },
  //     {
  //       id: 3,
  //       type: "orthokeratology",
  //       text: ["角膜矯形鏡(OK鏡)", "Carson黃梓賢"],
  //       img: "https://static.cmereye.com/imgs/2024/04/e38c5254def6b99c.png",
  //       videoLink: "",
  //     },
  //   ],
  // },
]);

const listVideoShare = ref([
  {
    name: "Carson黃梓賢1",
    type: "list",
    isShow: false,
    videoList: [
      {
        id: 1,
        type: "orthokeratology",
        text: ["角膜矯形鏡(OK鏡)", "Carson黃梓賢"],
        img: "https://static.cmereye.com/imgs/2024/04/e38c5254def6b99c.png",
        videoLink:
          "https://www.youtube.com/embed/M0y-hzPzyjA?si=C--PplEEpW7cnmve",
      },
      {
        id: 2,
        type: "orthokeratology",
        text: ["角膜矯形鏡(OK鏡)", "Carson黃梓賢"],
        img: "https://static.cmereye.com/imgs/2024/04/e38c5254def6b99c.png",
        videoLink:
          "https://www.youtube.com/embed/M0y-hzPzyjA?si=C--PplEEpW7cnmve",
      },
      {
        id: 3,
        type: "orthokeratology",
        text: ["角膜矯形鏡(OK鏡)", "Carson黃梓賢"],
        img: "https://static.cmereye.com/imgs/2024/04/e38c5254def6b99c.png",
        videoLink:
          "https://www.youtube.com/embed/M0y-hzPzyjA?si=C--PplEEpW7cnmve",
      },
    ],
  },
  {
    name: "Carson黃梓賢2",
    type: "list",
    isShow: false,
    videoList: [
      {
        id: 1,
        type: "orthokeratology",
        text: ["角膜矯形鏡(OK鏡)", "Carson黃梓賢"],
        img: "https://static.cmereye.com/imgs/2024/04/e38c5254def6b99c.png",
        videoLink: "",
      },
      {
        id: 2,
        type: "orthokeratology",
        text: ["角膜矯形鏡(OK鏡)", "Carson黃梓賢"],
        img: "https://static.cmereye.com/imgs/2024/04/e38c5254def6b99c.png",
        videoLink: "",
      },
      {
        id: 3,
        type: "orthokeratology",
        text: ["角膜矯形鏡(OK鏡)", "Carson黃梓賢"],
        img: "https://static.cmereye.com/imgs/2024/04/e38c5254def6b99c.png",
        videoLink: "",
      },
    ],
  },
]);

const listVideoClass = ref([
  {
    name: "Carson黃梓賢1",
    type: "list",
    isShow: false,
    videoList: [
      {
        id: 1,
        type: "orthokeratology",
        text: ["【希瑪仔小教室】小朋友配眼鏡", "前必看 以為睇得清就冇事？"],
        img: "https://static.cmereye.com/imgs/2024/05/0b1cd707c8e9a74e.webp",
        videoLink: "https://www.youtube.com/watch?v=Qiby8jAi0e4",
      },
      {
        id: 2,
        type: "orthokeratology",
        text: ["【希瑪視光】如何選擇", "適合自己的漸進鏡片？"],
        img: "https://static.cmereye.com/imgs/2024/05/db0f8f750bdda6f2.webp",
        videoLink: "https://www.youtube.com/watch?v=neQcqi69dzg",
      },
      {
        id: 3,
        type: "orthokeratology",
        text: ["兒童近視控制 | OK鏡係咩嚟", "㗎？| 希瑪視光 | 兒童護眼小教室"],
        img: "https://static.cmereye.com/imgs/2024/05/433d7c3630c4df1d.webp",
        videoLink: "https://www.youtube.com/watch?v=XrGA8IklfXU",
      },
      {
        id: 4,
        type: "orthokeratology",
        text: [
          "兒童近視控制｜戴眼鏡會造成",
          "依賴？戴得愈耐，近視會愈深？ | 希瑪視光 | 兒童護眼小教室",
        ],
        img: "https://static.cmereye.com/imgs/2024/05/e19dfdb077bac7ee.webp",
        videoLink: "https://www.youtube.com/watch?v=G7AfFPCKldU",
      },
    ],
  },
  // {
  //   name: "Carson黃梓賢2",
  //   type: "list",
  //   isShow: false,
  //   videoList: [
  //     {
  //       id: 1,
  //       type: "orthokeratology",
  //       text: ["角膜矯形鏡(OK鏡)", "Carson黃梓賢"],
  //       img: "https://static.cmereye.com/imgs/2024/04/e38c5254def6b99c.png",
  //       videoLink: "",
  //     },
  //     {
  //       id: 2,
  //       type: "orthokeratology",
  //       text: ["角膜矯形鏡(OK鏡)", "Carson黃梓賢"],
  //       img: "https://static.cmereye.com/imgs/2024/04/e38c5254def6b99c.png",
  //       videoLink: "",
  //     },
  //     {
  //       id: 3,
  //       type: "orthokeratology",
  //       text: ["角膜矯形鏡(OK鏡)", "Carson黃梓賢"],
  //       img: "https://static.cmereye.com/imgs/2024/04/e38c5254def6b99c.png",
  //       videoLink: "",
  //     },
  //   ],
  // },
]);

const reelsListOk = ref([
  {
    id: 11,
    type: "orthokeratology",
    img: "https://static.cmereye.com/imgs/2024/05/5689564fc9af685c.webp",
    videoLink: "https://youtube.com/shorts/4BAhundkZcc",
  },
  {
    id: 12,
    type: "orthokeratology",
    img: "https://static.cmereye.com/imgs/2024/05/8b2de9f896497bc7.webp",
    videoLink: "https://youtube.com/shorts/RPo2rPy4WcM",
  },
  {
    id: 13,
    type: "orthokeratology",
    img: "https://static.cmereye.com/imgs/2024/05/84edcfbd2756c1fc.webp",
    videoLink: "https://youtube.com/shorts/GDvubivXmeU",
  },
  // {
  //   id: 14,
  //   type: "orthokeratology",
  //   img: "https://static.cmereye.com/imgs/2024/04/d7c0a8492c94f78f.png",
  //   videoLink: "",
  // },
  // {
  //   id: 15,
  //   type: "orthokeratology",
  //   img: "https://static.cmereye.com/imgs/2024/04/d7c0a8492c94f78f.png",
  //   videoLink: "",
  // },
  // {
  //   id: 16,
  //   type: "orthokeratology",
  //   img: "https://static.cmereye.com/imgs/2024/04/d7c0a8492c94f78f.png",
  //   videoLink: "",
  // },
]);

const reelsListShare = ref([
  {
    id: 21,
    type: "orthokeratology",
    img: "https://static.cmereye.com/imgs/2024/04/d7c0a8492c94f78f.png",
    videoLink: "",
  },
  {
    id: 22,
    type: "orthokeratology",
    img: "https://static.cmereye.com/imgs/2024/04/d7c0a8492c94f78f.png",
    videoLink: "",
  },
  {
    id: 23,
    type: "orthokeratology",
    img: "https://static.cmereye.com/imgs/2024/04/d7c0a8492c94f78f.png",
    videoLink: "",
  },
  {
    id: 24,
    type: "orthokeratology",
    img: "https://static.cmereye.com/imgs/2024/04/d7c0a8492c94f78f.png",
    videoLink: "",
  },
  {
    id: 25,
    type: "orthokeratology",
    img: "https://static.cmereye.com/imgs/2024/04/d7c0a8492c94f78f.png",
    videoLink: "",
  },
  {
    id: 26,
    type: "orthokeratology",
    img: "https://static.cmereye.com/imgs/2024/04/d7c0a8492c94f78f.png",
    videoLink: "",
  },
]);

const reelsListClass = ref([
  {
    id: 31,
    type: "orthokeratology",
    img: "https://static.cmereye.com/imgs/2024/04/d7c0a8492c94f78f.png",
    videoLink: "",
  },
  {
    id: 32,
    type: "orthokeratology",
    img: "https://static.cmereye.com/imgs/2024/04/d7c0a8492c94f78f.png",
    videoLink: "",
  },
  {
    id: 33,
    type: "orthokeratology",
    img: "https://static.cmereye.com/imgs/2024/04/d7c0a8492c94f78f.png",
    videoLink: "",
  },
  {
    id: 34,
    type: "orthokeratology",
    img: "https://static.cmereye.com/imgs/2024/04/d7c0a8492c94f78f.png",
    videoLink: "",
  },
  {
    id: 35,
    type: "orthokeratology",
    img: "https://static.cmereye.com/imgs/2024/04/d7c0a8492c94f78f.png",
    videoLink: "",
  },
  {
    id: 36,
    type: "orthokeratology",
    img: "https://static.cmereye.com/imgs/2024/04/d7c0a8492c94f78f.png",
    videoLink: "",
  },
]);
</script>

<template>
  <div class="information">
    <div v-if="isPc">
      <div class="information-title">影片資訊</div>
      <div class="information-list">
        <div @click="chooseType(1)" :class="[allVideo ? 'active' : '']">
          所有影片
        </div>
        <div @click="chooseType(2)" :class="[orthokeratology ? 'active' : '']">
          角膜矯形鏡（OK鏡）
        </div>
        <!-- <div @click="chooseType(3)" :class="[share ? 'active' : '']">
          真實客戶分享
        </div> -->
        <div @click="chooseType(4)" :class="[classSmall ? 'active' : '']">
          小教室
        </div>
      </div>
    </div>
    <div v-else>
      <select
        v-model="chooseNumber"
        @change="chooseType(chooseNumber)"
        class="select-type"
      >
        <option :value="1">所有影片</option>
        <option :value="2">角膜矯形鏡（OK鏡）</option>
        <!-- <option :value="3">真實客戶分享</option> -->
        <option :value="4">小教室</option>
      </select>
    </div>
    <div>
      <!-- reelsListOk 竖屏视频未分类 使用 reelsListOk 展示 -->
      <div v-if="allVideo">
        <VideoInformationVideoList :list="listVideoAll" :key="1"/>
        <VideoInformationReels :list="reelsListAll" :key="2" />
      </div>
      <div v-if="orthokeratology">
        <VideoInformationVideoList :list="listVideoOk"  :key="3"/>
        <VideoInformationReels :list="reelsListOk" :key="4" />
      </div>
      <!-- <div v-if="share">
        <VideoInformationVideoList :list="listVideoShare" />
        <VideoInformationReels :list="reelsListShare" />
      </div> -->
      <div v-if="classSmall">
        <VideoInformationVideoList :list="listVideoClass"  :key="5"/>
        <!-- <VideoInformationReels :list="reelsListClass" /> -->
        <VideoInformationReels :list="reelsListOk"  :key="6"/>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@media screen and (min-width: 768px) {
  .information {
    margin-bottom: 125px;
    & > div {
      display: flex;
      justify-content: space-between;
      flex-direction: column;
    }
  }
  .information-title {
    color: var(--Brand-Color, #00a6ce);
    font-family: "Inter";
    font-size: 37.5px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  .information-list {
    max-width: 880px;
    margin: 55px auto 35px;
    display: flex;
    align-items: center;
    border-radius: 10px;
    border: 0.723px solid var(--Brand-Color, #00a6ce);
    & > div {
      text-align: center;
      padding: 12px 0;
      width: calc(100% / 4);
      min-width: 220px;
      color: var(--Brand-Color, #00a6ce);
      font-family: "Inter";
      font-size: 15px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      text-transform: uppercase;
      cursor: pointer;
      transition: all 0.3s;
    }
    & > div:nth-child(2) {
      border-right: 0.723px solid var(--Brand-Color, #00a6ce);
      border-left: 0.723px solid var(--Brand-Color, #00a6ce);
      border-radius: 10px;
    }

    .active {
 
      border-radius: 10px;
      background: var(--Brand-Color, #00a6ce);
      color: var(--Brand-Color, #fff);
      font-family: "Inter";
      font-size: 15px;
      font-style: normal;
      font-weight: 700;
      height: 100%;
      align-items: center;
      display: flex;
      justify-content: center;
      transition: all 0.3s;
    }
  }
}
@media screen and (max-width: 767px) {
  .information {
    margin-bottom: 40px;
    & > div {
      padding: 20px 0 0;
    }
  }
  .information-title {
    color: #00a6ce;
    font-family: "Inter";
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  .select-type {
    appearance: none;
    width: 100%;
    background: url("https://static.cmereye.com/imgs/2024/04/c786ab28df4196ee.png")
      no-repeat;
    height: 42px;
    background-position: right;
    border-radius: 18px;
    border: 1px solid #d9d9d9;
    padding: 11px 18px;
    color: var(--Brand-Color, #00a6ce);
    font-family: "Inter";
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 1.6px;
    text-transform: uppercase;
  }
  .select-type option {
    margin-top: 10px;
  }
  .select-type:focus-visible {
    outline: none;
  }
}
</style>