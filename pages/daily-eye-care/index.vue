<script lang="ts" setup>
useHead(() => ({
  title: "日常護眼 - 希瑪眼科視光中心",
}));
const bannerImg = {
  pc: "https://static.cmereye.com/imgs/2024/07/443cc07de748c392.png",
  mobile: "https://static.cmereye.com/imgs/2024/07/e43937e07811b8c8.png",
};
import getWindowSize from "@/utils/width";
const isPc = ref(false);
onMounted(() => {
  let { widthState, width } = getWindowSize();
  window.addEventListener("resize", () => {
    let { widthState, width } = getWindowSize();
    isPc.value = widthState;
  });
  isPc.value = widthState;
});

const listData = ref([
  {
    img: "https://static.cmereye.com/imgs/2024/06/f1554038a50d1c05.png",
    title: ["常用20-20-20", "護眼法則"],
  },
  {
    img: "https://static.cmereye.com/imgs/2024/06/838dee6f161f3291.png",
    title: ["與物件保持", "適當距離"],
  },
  {
    img: "https://static.cmereye.com/imgs/2024/06/bae9f69c98a3c021.png",
    title: ["經常主動", "眨眼"],
  },
  {
    img: "https://static.cmereye.com/imgs/2024/06/1903f15c11385c14.png",
    title: ["避免長時間", "觀看螢幕"],
  },
  {
    img: "https://static.cmereye.com/imgs/2024/06/5ebe879873e07bf7.png",
    title: ["避免在黑暗環境", "使用電子產品"],
  },
  {
    img: "https://static.cmereye.com/imgs/2024/06/57296d584af44c6a.png",
    title: ["配戴隱形眼鏡每", "日少於8小時"],
  },
  {
    img: "https://static.cmereye.com/imgs/2024/06/c7c8561b41e3e925.png",
    title: ["多配戴有框眼鏡", "代替隱形眼鏡"],
  },
  {
    img: "https://static.cmereye.com/imgs/2024/06/f0516cb6435dfb51.png",
    title: ["在強光下做好保", "護眼睛措施"],
  },
  {
    img: "https://static.cmereye.com/imgs/2024/06/4b58a2d97b0032fa.png",
    title: ["定期進行眼睛", "檢查"],
  },
]);
const listDataDetail = [
  {
    img: "https://static.cmereye.com/imgs/2024/06/2943b418ec659ed6.png",
    title: "常用20-20-20護眼法則",
    description: [
      "觀看電子產品螢幕20分鐘，建議雙眼休息20秒，或者遠望20呎﹙約50厘米﹚外的景觀。",
    ],
  },
  {
    img: "https://static.cmereye.com/imgs/2024/06/716d87efeff177e8.png",
    title: "與物件保持適當距離",
    description: [
      "使用智能電話、平板電腦及電腦時，建議分別保持30厘米、40 厘米、50厘米的距離。",
    ],
  },
  {
    img: "https://static.cmereye.com/imgs/2024/06/2d7a7f990a7a1ca2.png",
    title: "經常主動眨眼",
    description: ["盡量保持雙眼表面濕潤及主動多眨眼，以免眼睛乾澀。"],
  },
  {
    img: "https://static.cmereye.com/imgs/2024/06/bb38c367c3ad43af.png",
    title: "避免長時間觀看螢幕",
    description: [
      "•2歲以下兒童建議避免使用電子產品；",
      "•2至18歲人士建議在家長指導下使用；",
      "•18歲或以上盡量避免長時間看著螢幕，注意要給予眼睛適當的休息時間。",
    ],
  },
  {
    img: "https://static.cmereye.com/imgs/2024/06/d5cd6ca4c0382cb8.png",
    title: "避免在黑暗環境使用電子產品",
    description: [
      "建議睡覺前限制使用電子產品的時間，關燈後不要看電子產品螢幕，以減少對眼睛的傷害及影響睡眠質素。",
    ],
  },
  {
    img: "https://static.cmereye.com/imgs/2024/06/f128d8dc885a89c8.png",
    title: "配戴隱形眼鏡每日少於8小時",
    description: ["不建議超過連續8小時配戴隱形眼鏡"],
  },
  {
    img: "https://static.cmereye.com/imgs/2024/06/d0302ad478e492b5.png",
    title: "多配戴有框眼鏡代替隱形眼鏡",
    description: [
      "如果經常使用隱形眼鏡人士，可能需不時改戴有框眼鏡，讓雙眼稍作休息。",
    ],
  },
  {
    img: "https://static.cmereye.com/imgs/2024/06/51428e09c2362b92.png",
    title: "在強光下做好保護眼睛措施",
    description: ["在猛烈的陽光下，最好戴上能遮擋紫外光和品質良好的太陽眼鏡。"],
  },
  {
    img: "https://static.cmereye.com/imgs/2024/06/102bf6aae979516d.png",
    title: "定期進行眼睛檢查",
    description: [
      "定期檢查眼睛以及早找出眼睛問題，尤其是有家疾病史及較高風險患眼疾人",
      "士。",
    ],
  },
];
// 鼠标移入 添加类名
const mouseOver = (id: number) => {
  if (isPc.value) {
    dailyEyeFood.value.forEach((item: any, index: number) => {
      if (id === index + 1) {
        item.addOpenImg = true;
      } else {
        item.addOpenImg = false;
      }
    });
  }
};
// 移动端 点击处理
const mImgItem = ref(0);
const mouseClick = (id: number) => {
  if (!isPc.value) {
    mImgItem.value = id - 1;
  }
};
onMounted(() => {
  if (isPc.value) {
    dailyEyeFood.value[6].addOpenImg = true;
  }
  questionI(
    {
      img: "https://static.cmereye.com/imgs/2024/06/c8a417d2cf51179c.png",
      title: "近視",
      id: 1,
    },
    1
  );
});

const dailyEyeFood = ref([
  {
    id: 1,
    img: "https://static.cmereye.com/imgs/2024/06/06a441a58d23d805.png",
    childTitle: ["含", "維他命A", "食物"],
    childBgColor: "#F9AFB1",
    addOpenImg: false,
    childText: ["", ""],
  },
  {
    id: 2,
    img: "https://static.cmereye.com/imgs/2024/06/944597d75c1a85f4.png",
    childTitle: ["含", "維他命B", "食物"],
    childBgColor: "#C75770",
    addOpenImg: false,
    childText: ["", ""],
  },
  {
    id: 3,
    img: "https://static.cmereye.com/imgs/2024/06/f4989b4d3c631721.png",
    childTitle: ["含", "維他命C", "食物"],
    childBgColor: "#D16C3E",
    addOpenImg: false,
    childText: ["", ""],
  },
  {
    id: 4,
    img: "https://static.cmereye.com/imgs/2024/06/1cb9c954288349e3.png",
    childTitle: ["含", "維他命E", "食物"],
    childBgColor: "#668331",
    addOpenImg: false,
    childText: ["", ""],
  },
  {
    id: 5,
    img: "https://static.cmereye.com/imgs/2024/06/54290239552d9bca.png",
    childTitle: ["含", "Omega-3", "食物"],
    childBgColor: "#E59B40",
    addOpenImg: false,
    childText: ["", ""],
  },
  {
    id: 6,
    img: "https://static.cmereye.com/imgs/2024/06/fe3227e340eb5a30.png",
    childTitle: ["含", "葉黃素", "食物"],
    childBgColor: "#84883A",
    addOpenImg: false,
    childText: ["", ""],
  },
  {
    id: 7,
    img: "https://static.cmereye.com/imgs/2024/06/39452f1af77b7f35.png",
    childTitle: ["含", "花青素", "食物"],
    childBgColor: "#513C75",
    addOpenImg: false,
    childText: [
      "花青素具有很強的抗氧化作用，對眼部晶狀",
      "體及視網膜有益，能有助維持眼睛健康。",
    ],
  },
]);

const questionIconList = ref([
  {
    img: "https://static.cmereye.com/imgs/2024/06/c8a417d2cf51179c.png",
    title: "近視",
    activeQuestion: false,
    id: 1,
  },
  {
    img: "https://static.cmereye.com/imgs/2024/06/64e581fcf3fb1fbc.png",
    title: "散光",
    activeQuestion: false,
    id: 2,
  },
  {
    img: "https://static.cmereye.com/imgs/2024/06/aa7b90be2f4bed85.png",
    title: "眼乾症",
    activeQuestion: false,
    id: 3,
  },
  {
    img: "https://static.cmereye.com/imgs/2024/06/082b9db2bdaa81c7.png",
    title: "飛蚊症",
    activeQuestion: false,
    id: 4,
  },
  {
    img: "https://static.cmereye.com/imgs/2024/06/ec2a1af074a6a03e.png",
    title: "青光眼",
    activeQuestion: false,
    id: 5,
  },
  {
    img: "https://static.cmereye.com/imgs/2024/06/f9e3ffcd522170d5.png",
    title: "白內障",
    activeQuestion: false,
    id: 6,
  },
  {
    img: "https://static.cmereye.com/imgs/2024/06/bc4992911a72ffa8.png",
    title: "弱視/斜視",
    activeQuestion: false,
    id: 7,
  },
  {
    img: "https://static.cmereye.com/imgs/2024/06/ad00d87b7cfcafb7.png",
    title: "視光檢查",
    activeQuestion: false,
    id: 8,
  },
]);

const myopiaQuestionList = ref([
  {
    q: "如何防止近視加深？",
    a: [
      `選擇適合的鏡片需要考慮多個因素，包括你的角膜形狀、視力問題的嚴重程度、舒適度和使用需求等。通常RGP鏡在提供更好的視`,
      `通常RGP鏡在提供更好的視覺清晰度和角膜形狀穩定性方面表現較好，而鞏膜鏡則更舒適易適應。最好建議在視光師的指導下進行詳細的評估和選擇。`,
    ],
    mAq: [
      `選擇適合的鏡片需要考慮多個因素，包括你的角膜形狀、視力問題的嚴重程度、舒適度和使用需求等。通常RGP鏡在提供更好的視覺清晰度和角膜形狀穩定性方面表現較好，而鞏膜鏡則更舒適易適應。最好建議在視光師的指導下進行詳細的評估和選擇。`,
    ],
  },
  {
    q: "如何防止散光加深？",
    a: [
      `選擇適合的鏡片需要考慮多個因素，包括你的角膜形狀、視力問題的嚴重程度、舒適度和使用需求等。通常RGP鏡在提供更好的視`,
    ],
    mAq: [
      `選擇適合的鏡片需要考慮多個因素，包括你的角膜形狀、視力問題的嚴重程度、舒適度和使用需求等。通常RGP鏡在提供更好的視覺清晰度和角膜形狀穩定性方面表現較好，而鞏膜鏡則更舒適易適應。最好建議在視光師的指導下進行詳細的評估和選擇。`,
    ],
  },
  {
    q: "眼睛看到黑點、黑線是否患有眼晴疾病？",
    a: [
      `選擇適合的鏡片需要考慮多個因素，包括你的角膜形狀、視力問題的嚴重程度、舒適度和使用需求等。通常RGP鏡在提供更好的視`,
    ],
    mAq: [
      `選擇適合的鏡片需要考慮多個因素，包括你的角膜形狀、視力問題的嚴重程度、舒適度和使用需求等。通常RGP鏡在提供更好的視覺清晰度和角膜形狀穩定性方面表現較好，而鞏膜鏡則更舒適易適應。最好建議在視光師的指導下進行詳細的評估和選擇。`,
    ],
  },
  {
    q: "如何防止散光加深？",
    a: [
      `選擇適合的鏡片需要考慮多個因素，包括你的角膜形狀、視力問題的嚴重程度、舒適度和使用需求等。通常RGP鏡在提供更好的視`,
    ],
    mAq: [
      `選擇適合的鏡片需要考慮多個因素，包括你的角膜形狀、視力問題的嚴重程度、舒適度和使用需求等。通常RGP鏡在提供更好的視覺清晰度和角膜形狀穩定性方面表現較好，而鞏膜鏡則更舒適易適應。最好建議在視光師的指導下進行詳細的評估和選擇。`,
    ],
  },
  {
    q: "眼睛看到黑點、黑線是否患有眼晴疾病？",
    a: [
      `選擇適合的鏡片需要考慮多個因素，包括你的角膜形狀、視力問題的嚴重程度、舒適度和使用需求等。通常RGP鏡在提供更好的視`,
    ],
    mAq: [
      `選擇適合的鏡片需要考慮多個因素，包括你的角膜形狀、視力問題的嚴重程度、舒適度和使用需求等。通常RGP鏡在提供更好的視覺清晰度和角膜形狀穩定性方面表現較好，而鞏膜鏡則更舒適易適應。最好建議在視光師的指導下進行詳細的評估和選擇。`,
    ],
  },
]);
const astigmatismQuestionList = ref([
  {
    q: "散光",
    a: [
      `選擇適合的鏡片需要考慮多個因素，包括你的角膜形狀、視力問題的嚴重程度、舒適度和使用需求等。通常RGP鏡在提供更好的視`,
      `覺清晰度和角膜形狀穩定性方面表現較好，而鞏膜鏡則更舒適易適應。最好建議在視光師的指導下進行詳細的評估和選擇。`,
    ],
    mAq: [
      `選擇適合的鏡片需要考慮多個因素，包括你的角膜形狀、視力問題的嚴重程度、舒適度和使用需求等。通常RGP鏡在提供更好的視覺清晰度和角膜形狀穩定性方面表現較好，而鞏膜鏡則更舒適易適應。最好建議在視光師的指導下進行詳細的評估和選擇。`,
    ],
  },
  {
    q: "配戴RGP鏡或鞏膜鏡需要注意什麼？",
    a: [
      `選擇適合的鏡片需要考慮多個因素，包括你的角膜形狀、視力問題的嚴重程度、舒適度和使用需求等。通常RGP鏡在提供更好的視`,
      `覺清晰度和角膜形狀穩定性方面表現較好，而鞏膜鏡則更舒適易適應。最好建議在視光師的指導下進行詳細的評估和選擇。`,
    ],
    mAq: [
      `選擇適合的鏡片需要考慮多個因素，包括你的角膜形狀、視力問題的嚴重程度、舒適度和使用需求等。通常RGP鏡在提供更好的視覺清晰度和角膜形狀穩定性方面表現較好，而鞏膜鏡則更舒適易適應。最好建議在視光師的指導下進行詳細的評估和選擇。`,
    ],
  },
  {
    q: "RGP鏡和鞏膜鏡的適應期是多久？",
    a: [
      `選擇適合的鏡片需要考慮多個因素，包括你的角膜形狀、視力問題的嚴重程度、舒適度和使用需求等。通常RGP鏡在提供更好的視`,
      `覺清晰度和角膜形狀穩定性方面表現較好，而鞏膜鏡則更舒適易適應。最好建議在視光師的指導下進行詳細的評估和選擇。`,
    ],
    mAq: [
      `選擇適合的鏡片需要考慮多個因素，包括你的角膜形狀、視力問題的嚴重程度、舒適度和使用需求等。通常RGP鏡在提供更好的視覺清晰度和角膜形狀穩定性方面表現較好，而鞏膜鏡則更舒適易適應。最好建議在視光師的指導下進行詳細的評估和選擇。`,
    ],
  },
]);
const xerophthalmiaQuestionList = ref([
  {
    q: "眼乾症",
    a: [
      `選擇適合的鏡片需要考慮多個因素，包括你的角膜形狀、視力問題的嚴重程度、舒適度和使用需求等。通常RGP鏡在提供更好的視`,
      `覺清晰度和角膜形狀穩定性方面表現較好，而鞏膜鏡則更舒適易適應。最好建議在視光師的指導下進行詳細的評估和選擇。`,
    ],
    mAq: [
      `選擇適合的鏡片需要考慮多個因素，包括你的角膜形狀、視力問題的嚴重程度、舒適度和使用需求等。通常RGP鏡在提供更好的視覺清晰度和角膜形狀穩定性方面表現較好，而鞏膜鏡則更舒適易適應。最好建議在視光師的指導下進行詳細的評估和選擇。`,
    ],
  },
  {
    q: "配戴RGP鏡或鞏膜鏡需要注意什麼？",
    a: [
      `選擇適合的鏡片需要考慮多個因素，包括你的角膜形狀、視力問題的嚴重程度、舒適度和使用需求等。通常RGP鏡在提供更好的視`,
      `覺清晰度和角膜形狀穩定性方面表現較好，而鞏膜鏡則更舒適易適應。最好建議在視光師的指導下進行詳細的評估和選擇。`,
    ],
    mAq: [
      `選擇適合的鏡片需要考慮多個因素，包括你的角膜形狀、視力問題的嚴重程度、舒適度和使用需求等。通常RGP鏡在提供更好的視覺清晰度和角膜形狀穩定性方面表現較好，而鞏膜鏡則更舒適易適應。最好建議在視光師的指導下進行詳細的評估和選擇。`,
    ],
  },
  {
    q: "RGP鏡和鞏膜鏡的適應期是多久？",
    a: [
      `選擇適合的鏡片需要考慮多個因素，包括你的角膜形狀、視力問題的嚴重程度、舒適度和使用需求等。通常RGP鏡在提供更好的視`,
      `覺清晰度和角膜形狀穩定性方面表現較好，而鞏膜鏡則更舒適易適應。最好建議在視光師的指導下進行詳細的評估和選擇。`,
    ],
    mAq: [
      `選擇適合的鏡片需要考慮多個因素，包括你的角膜形狀、視力問題的嚴重程度、舒適度和使用需求等。通常RGP鏡在提供更好的視覺清晰度和角膜形狀穩定性方面表現較好，而鞏膜鏡則更舒適易適應。最好建議在視光師的指導下進行詳細的評估和選擇。`,
    ],
  },
]);
const muscaeVolitantesQuestionList = ref([
  {
    q: "飛蚊症",
    a: [
      `選擇適合的鏡片需要考慮多個因素，包括你的角膜形狀、視力問題的嚴重程度、舒適度和使用需求等。通常RGP鏡在提供更好的視`,
      `覺清晰度和角膜形狀穩定性方面表現較好，而鞏膜鏡則更舒適易適應。最好建議在視光師的指導下進行詳細的評估和選擇。`,
    ],
    mAq: [
      `選擇適合的鏡片需要考慮多個因素，包括你的角膜形狀、視力問題的嚴重程度、舒適度和使用需求等。通常RGP鏡在提供更好的視覺清晰度和角膜形狀穩定性方面表現較好，而鞏膜鏡則更舒適易適應。最好建議在視光師的指導下進行詳細的評估和選擇。`,
    ],
  },
  {
    q: "配戴RGP鏡或鞏膜鏡需要注意什麼？",
    a: [
      `選擇適合的鏡片需要考慮多個因素，包括你的角膜形狀、視力問題的嚴重程度、舒適度和使用需求等。通常RGP鏡在提供更好的視`,
      `覺清晰度和角膜形狀穩定性方面表現較好，而鞏膜鏡則更舒適易適應。最好建議在視光師的指導下進行詳細的評估和選擇。`,
    ],
    mAq: [
      `選擇適合的鏡片需要考慮多個因素，包括你的角膜形狀、視力問題的嚴重程度、舒適度和使用需求等。通常RGP鏡在提供更好的視覺清晰度和角膜形狀穩定性方面表現較好，而鞏膜鏡則更舒適易適應。最好建議在視光師的指導下進行詳細的評估和選擇。`,
    ],
  },
  {
    q: "RGP鏡和鞏膜鏡的適應期是多久？",
    a: [
      `選擇適合的鏡片需要考慮多個因素，包括你的角膜形狀、視力問題的嚴重程度、舒適度和使用需求等。通常RGP鏡在提供更好的視`,
      `覺清晰度和角膜形狀穩定性方面表現較好，而鞏膜鏡則更舒適易適應。最好建議在視光師的指導下進行詳細的評估和選擇。`,
    ],
    mAq: [
      `選擇適合的鏡片需要考慮多個因素，包括你的角膜形狀、視力問題的嚴重程度、舒適度和使用需求等。通常RGP鏡在提供更好的視覺清晰度和角膜形狀穩定性方面表現較好，而鞏膜鏡則更舒適易適應。最好建議在視光師的指導下進行詳細的評估和選擇。`,
    ],
  },
]);
const glaucomaQuestionList = ref([
  {
    q: "青光眼",
    a: [
      `選擇適合的鏡片需要考慮多個因素，包括你的角膜形狀、視力問題的嚴重程度、舒適度和使用需求等。通常RGP鏡在提供更好的視`,
      `覺清晰度和角膜形狀穩定性方面表現較好，而鞏膜鏡則更舒適易適應。最好建議在視光師的指導下進行詳細的評估和選擇。`,
    ],
    mAq: [
      `選擇適合的鏡片需要考慮多個因素，包括你的角膜形狀、視力問題的嚴重程度、舒適度和使用需求等。通常RGP鏡在提供更好的視覺清晰度和角膜形狀穩定性方面表現較好，而鞏膜鏡則更舒適易適應。最好建議在視光師的指導下進行詳細的評估和選擇。`,
    ],
  },
  {
    q: "配戴RGP鏡或鞏膜鏡需要注意什麼？",
    a: [
      `選擇適合的鏡片需要考慮多個因素，包括你的角膜形狀、視力問題的嚴重程度、舒適度和使用需求等。通常RGP鏡在提供更好的視`,
      `覺清晰度和角膜形狀穩定性方面表現較好，而鞏膜鏡則更舒適易適應。最好建議在視光師的指導下進行詳細的評估和選擇。`,
    ],
    mAq: [
      `選擇適合的鏡片需要考慮多個因素，包括你的角膜形狀、視力問題的嚴重程度、舒適度和使用需求等。通常RGP鏡在提供更好的視覺清晰度和角膜形狀穩定性方面表現較好，而鞏膜鏡則更舒適易適應。最好建議在視光師的指導下進行詳細的評估和選擇。`,
    ],
  },
  {
    q: "RGP鏡和鞏膜鏡的適應期是多久？",
    a: [
      `選擇適合的鏡片需要考慮多個因素，包括你的角膜形狀、視力問題的嚴重程度、舒適度和使用需求等。通常RGP鏡在提供更好的視`,
      `覺清晰度和角膜形狀穩定性方面表現較好，而鞏膜鏡則更舒適易適應。最好建議在視光師的指導下進行詳細的評估和選擇。`,
    ],
    mAq: [
      `選擇適合的鏡片需要考慮多個因素，包括你的角膜形狀、視力問題的嚴重程度、舒適度和使用需求等。通常RGP鏡在提供更好的視覺清晰度和角膜形狀穩定性方面表現較好，而鞏膜鏡則更舒適易適應。最好建議在視光師的指導下進行詳細的評估和選擇。`,
    ],
  },
]);
const cataractQuestionList = ref([
  {
    q: "白內障",
    a: [
      `選擇適合的鏡片需要考慮多個因素，包括你的角膜形狀、視力問題的嚴重程度、舒適度和使用需求等。通常RGP鏡在提供更好的視`,
      `覺清晰度和角膜形狀穩定性方面表現較好，而鞏膜鏡則更舒適易適應。最好建議在視光師的指導下進行詳細的評估和選擇。`,
    ],
    mAq: [
      `選擇適合的鏡片需要考慮多個因素，包括你的角膜形狀、視力問題的嚴重程度、舒適度和使用需求等。通常RGP鏡在提供更好的視覺清晰度和角膜形狀穩定性方面表現較好，而鞏膜鏡則更舒適易適應。最好建議在視光師的指導下進行詳細的評估和選擇。`,
    ],
  },
  {
    q: "配戴RGP鏡或鞏膜鏡需要注意什麼？",
    a: [
      `選擇適合的鏡片需要考慮多個因素，包括你的角膜形狀、視力問題的嚴重程度、舒適度和使用需求等。通常RGP鏡在提供更好的視`,
      `覺清晰度和角膜形狀穩定性方面表現較好，而鞏膜鏡則更舒適易適應。最好建議在視光師的指導下進行詳細的評估和選擇。`,
    ],
    mAq: [
      `選擇適合的鏡片需要考慮多個因素，包括你的角膜形狀、視力問題的嚴重程度、舒適度和使用需求等。通常RGP鏡在提供更好的視覺清晰度和角膜形狀穩定性方面表現較好，而鞏膜鏡則更舒適易適應。最好建議在視光師的指導下進行詳細的評估和選擇。`,
    ],
  },
  {
    q: "RGP鏡和鞏膜鏡的適應期是多久？",
    a: [
      `選擇適合的鏡片需要考慮多個因素，包括你的角膜形狀、視力問題的嚴重程度、舒適度和使用需求等。通常RGP鏡在提供更好的視`,
      `覺清晰度和角膜形狀穩定性方面表現較好，而鞏膜鏡則更舒適易適應。最好建議在視光師的指導下進行詳細的評估和選擇。`,
    ],
    mAq: [
      `選擇適合的鏡片需要考慮多個因素，包括你的角膜形狀、視力問題的嚴重程度、舒適度和使用需求等。通常RGP鏡在提供更好的視覺清晰度和角膜形狀穩定性方面表現較好，而鞏膜鏡則更舒適易適應。最好建議在視光師的指導下進行詳細的評估和選擇。`,
    ],
  },
]);
const strabismicAmblyopiaQuestionList = ref([
  {
    q: "弱視/斜視",
    a: [
      `選擇適合的鏡片需要考慮多個因素，包括你的角膜形狀、視力問題的嚴重程度、舒適度和使用需求等。通常RGP鏡在提供更好的視`,
      `覺清晰度和角膜形狀穩定性方面表現較好，而鞏膜鏡則更舒適易適應。最好建議在視光師的指導下進行詳細的評估和選擇。`,
    ],
    mAq: [
      `選擇適合的鏡片需要考慮多個因素，包括你的角膜形狀、視力問題的嚴重程度、舒適度和使用需求等。通常RGP鏡在提供更好的視覺清晰度和角膜形狀穩定性方面表現較好，而鞏膜鏡則更舒適易適應。最好建議在視光師的指導下進行詳細的評估和選擇。`,
    ],
  },
  {
    q: "配戴RGP鏡或鞏膜鏡需要注意什麼？",
    a: [
      `選擇適合的鏡片需要考慮多個因素，包括你的角膜形狀、視力問題的嚴重程度、舒適度和使用需求等。通常RGP鏡在提供更好的視`,
      `覺清晰度和角膜形狀穩定性方面表現較好，而鞏膜鏡則更舒適易適應。最好建議在視光師的指導下進行詳細的評估和選擇。`,
    ],
    mAq: [
      `選擇適合的鏡片需要考慮多個因素，包括你的角膜形狀、視力問題的嚴重程度、舒適度和使用需求等。通常RGP鏡在提供更好的視覺清晰度和角膜形狀穩定性方面表現較好，而鞏膜鏡則更舒適易適應。最好建議在視光師的指導下進行詳細的評估和選擇。`,
    ],
  },
  {
    q: "RGP鏡和鞏膜鏡的適應期是多久？",
    a: [
      `選擇適合的鏡片需要考慮多個因素，包括你的角膜形狀、視力問題的嚴重程度、舒適度和使用需求等。通常RGP鏡在提供更好的視`,
      `覺清晰度和角膜形狀穩定性方面表現較好，而鞏膜鏡則更舒適易適應。最好建議在視光師的指導下進行詳細的評估和選擇。`,
    ],
    mAq: [
      `選擇適合的鏡片需要考慮多個因素，包括你的角膜形狀、視力問題的嚴重程度、舒適度和使用需求等。通常RGP鏡在提供更好的視覺清晰度和角膜形狀穩定性方面表現較好，而鞏膜鏡則更舒適易適應。最好建議在視光師的指導下進行詳細的評估和選擇。`,
    ],
  },
]);
const optometryQuestionList = ref([
  {
    q: "視光檢查",
    a: [
      `選擇適合的鏡片需要考慮多個因素，包括你的角膜形狀、視力問題的嚴重程度、舒適度和使用需求等。通常RGP鏡在提供更好的視`,
      `覺清晰度和角膜形狀穩定性方面表現較好，而鞏膜鏡則更舒適易適應。最好建議在視光師的指導下進行詳細的評估和選擇。`,
    ],
    mAq: [
      `選擇適合的鏡片需要考慮多個因素，包括你的角膜形狀、視力問題的嚴重程度、舒適度和使用需求等。通常RGP鏡在提供更好的視覺清晰度和角膜形狀穩定性方面表現較好，而鞏膜鏡則更舒適易適應。最好建議在視光師的指導下進行詳細的評估和選擇。`,
    ],
  },
  {
    q: "配戴RGP鏡或鞏膜鏡需要注意什麼？",
    a: [
      `選擇適合的鏡片需要考慮多個因素，包括你的角膜形狀、視力問題的嚴重程度、舒適度和使用需求等。通常RGP鏡在提供更好的視`,
      `覺清晰度和角膜形狀穩定性方面表現較好，而鞏膜鏡則更舒適易適應。最好建議在視光師的指導下進行詳細的評估和選擇。`,
    ],
    mAq: [
      `選擇適合的鏡片需要考慮多個因素，包括你的角膜形狀、視力問題的嚴重程度、舒適度和使用需求等。通常RGP鏡在提供更好的視覺清晰度和角膜形狀穩定性方面表現較好，而鞏膜鏡則更舒適易適應。最好建議在視光師的指導下進行詳細的評估和選擇。`,
    ],
  },
  {
    q: "RGP鏡和鞏膜鏡的適應期是多久？",
    a: [
      `選擇適合的鏡片需要考慮多個因素，包括你的角膜形狀、視力問題的嚴重程度、舒適度和使用需求等。通常RGP鏡在提供更好的視`,
      `覺清晰度和角膜形狀穩定性方面表現較好，而鞏膜鏡則更舒適易適應。最好建議在視光師的指導下進行詳細的評估和選擇。`,
    ],
    mAq: [
      `選擇適合的鏡片需要考慮多個因素，包括你的角膜形狀、視力問題的嚴重程度、舒適度和使用需求等。通常RGP鏡在提供更好的視覺清晰度和角膜形狀穩定性方面表現較好，而鞏膜鏡則更舒適易適應。最好建議在視光師的指導下進行詳細的評估和選擇。`,
    ],
  },
]);

const questionItem = ref([{}]);
// const activeQuestion = ref(false);
const questionI = (item: any, i: number) => {
  switch (item.title) {
    case "近視":
      questionItem.value = myopiaQuestionList.value;
      break;
    case "散光":
      questionItem.value = astigmatismQuestionList.value;
      break;
    case "眼乾症":
      questionItem.value = xerophthalmiaQuestionList.value;
      break;
    case "飛蚊症":
      questionItem.value = muscaeVolitantesQuestionList.value;
      break;
    case "青光眼":
      questionItem.value = glaucomaQuestionList.value;
      break;
    case "白內障":
      questionItem.value = cataractQuestionList.value;
      break;
    case "弱視/斜視":
      questionItem.value = strabismicAmblyopiaQuestionList.value;
      break;
    case "視光檢查":
      questionItem.value = optometryQuestionList.value;
      break;
    default:
      break;
  }
  clickQuestion(i);
};

const clickQuestion = (id: number) => {
  questionIconList.value.forEach((element) => {
    element.activeQuestion = element.id == id + 1 ? true : false;
  });
};
</script>

<template>
  <div class="video-information">
    <PublicBanner :banner="bannerImg" />
    <PublicNavbar
      :name="'常見眼睛問題'"
      :isInsidePage="true"
      :insidePageTitle="'日常護眼'"
    />
    <div class="daily-eye-care-box">
      <div class="everyday">
        <PublicPageTitle :title="'日常護眼'" />
        <div>
          <serverAndProduct :allData="listData" :detailList="listDataDetail" />
        </div>
      </div>
      <div class="eyeshield-food">
        <PublicPageTitle :title="'護眼食物知多點'" />
        <div class="img-list">
          <div
            v-for="item in dailyEyeFood"
            :key="item.id"
            @mouseenter="mouseOver(item.id)"
            @click="mouseClick(item.id)"
            :class="[
              isPc && item.addOpenImg
                ? 'hover-img'
                : 'close-img' || 'close-img',
            ]"
          >
            <div>
              <img :src="item.img" />
            </div>
            <div>
              <div :style="{ background: item.childBgColor }">
                <span v-for="(e, index) in item.childTitle" :key="index">{{
                  e
                }}</span>
              </div>
              <div>
                <span v-for="(el, index) in item.childText" :key="index">{{
                  el || ""
                }}</span>
              </div>
            </div>
          </div>
        </div>
        <div v-if="!isPc" class="m-img">
          <div>
            <img
              :src="dailyEyeFood[mImgItem].img"
              :alt="
                `${dailyEyeFood[mImgItem].childTitle[0]}${dailyEyeFood[mImgItem].childTitle[1]}${dailyEyeFood[mImgItem].childTitle[2]}` ||
                '食物'
              "
            />
          </div>
          <div>
            <div :style="{ background: dailyEyeFood[mImgItem].childBgColor }">
              <span
                v-for="(e, index) in dailyEyeFood[mImgItem].childTitle"
                :key="index"
                >{{ e }}</span
              >
            </div>
            <div>
              <span
                v-for="(el, i) in dailyEyeFood[mImgItem].childText"
                :key="i"
                >{{ el }}</span
              >
            </div>
          </div>
        </div>
      </div>
      <div class="question">
        <div>
          <PublicPageTitle :title="'常見問題'" />
        </div>
        <div>
          <div
            v-for="(item, index) in questionIconList"
            :key="index"
            @click="questionI(item, index)"
            :class="[item.activeQuestion ? 'active-question' : '']"
          >
            <img :src="item.img" :alt="item.title" :title="item.title" />
          </div>
        </div>
        <PublicCollapse :listQuestion="questionItem" :testWidth="true" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@media screen and (min-width: 768px) {
  .daily-eye-care-box {
    max-width: 960px;
    padding: 0 120px;
    margin: 60px auto 78px;
  }
  .everyday {
    & > div:nth-child(2) {
      margin-top: 68px;
      :deep(.context) {
        & > div {
          justify-content: flex-start;
          gap: 0 25px;
          min-height: 176px;
          & > div:nth-child(1) {
            min-width: 225px;
            height: auto;
          }
        }
      }
    }
  }
  .eyeshield-food {
    margin-top: 65px;
    margin-bottom: 70px;
    & > div:nth-child(2) {
      display: flex;
      margin-top: 20px;
      gap: 0 16px;
      justify-content: space-between;
    }
  }
  .close-img {
    flex: 1;
    max-width: 78px;
    width: 100%;
    overflow: hidden;
    height: 484.623px;
    position: relative;
    img {
      width: 411.12px;
      height: 100%;
    }
    border-radius: 62.291px;
    transition: all 0.5s linear;
    & > div:nth-child(1) {
      display: flex;
      justify-content: center;
      position: relative;
      left: 120px;
    }
    & > div:nth-child(2) {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      bottom: 15px;
      & > div:nth-child(1) {
        border-radius: 50%;
        color: #fff;
        text-align: center;
        font-family: "Noto Sans HK";
        font-size: 11.212px;
        font-style: normal;
        font-weight: 500;
        line-height: 17.441px; /* 155.556% */
        letter-spacing: 0.561px;
        width: 56.062px;
        height: 56.062px;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
      & > div:nth-child(2) {
        transition: all 0.3s ease-in-out;
        opacity: 0;
        display: none;
        width: max-content;
      }
    }
  }
  .hover-img {
    flex: 1;
    max-width: 411.12px;
    width: 100%;
    overflow: hidden;
    height: 484.623px;
    position: relative;
    img {
      width: 411.12px;
      height: 100%;
      position: relative;
      left: 0;
    }
    border-radius: 62.291px;
    transition: all 0.5s linear;
    & > div:nth-child(1) {
      display: flex;
      justify-content: center;
    }
    & > div:nth-child(2) {
      position: absolute;
      left: 10px;
      bottom: 20px;
      display: flex;
      align-items: center;
      gap: 0 5px;
      & > div:nth-child(1) {
        border-radius: 37.375px;
        color: #fff;
        text-align: center;
        font-family: "Noto Sans HK";
        font-size: 11.212px;
        font-style: normal;
        font-weight: 500;
        line-height: 17.441px; /* 155.556% */
        letter-spacing: 0.561px;
        width: 85.961px;
        height: 54.816px;
        padding-top: 10px;
        box-sizing: border-box;
        & > span:nth-child(3) {
          display: block;
        }
      }

      & > div:nth-child(2) {
        width: max-content;
        display: flex;
        flex-direction: column;
        color: #111;
        text-shadow: -1px -1px 0 #fff, /* 左上角 */ 1px -1px 0 #fff,
          /* 右上角 */ -1px 1px 0 #fff, /* 左下角 */ 1px 1px 0 #fff,
          /* 右下角 */ 0px -1px 0 #fff, /* 上边 */ 0px 1px 0 #fff,
          /* 下边 */ -1px 0px 0 #fff, /* 左边 */ 1px 0px 0 #fff; /* 右边 */
        font-family: "Noto Sans HK";
        font-size: 14.95px;
        font-style: normal;
        font-weight: 500;
        line-height: 24.916px; /* 166.667% */
        letter-spacing: 0.447px;
      }
    }
  }
  .close-img-text {
    position: absolute;
    width: 100%;
    bottom: 18px;
    display: flex;
    justify-content: center;
    & > div:nth-child(1) {
      & > div:nth-child(1) {
        width: 56.062px;
        height: 56.062px;
        background: #f9afb1;
        border-radius: 50%;
        color: #fff;
        text-align: center;
        font-family: "Noto Sans HK";
        font-size: 11.212px;
        font-style: normal;
        font-weight: 500;
        line-height: 14.95px; /* 133.333% */
        letter-spacing: 0.561px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      & > div:nth-child(2) {
        display: none;
      }
    }
  }
  .open-img-text {
    position: absolute;
    width: 100%;
    bottom: 18px;
    left: 10px;
    display: flex;
    justify-content: space-between;
    & > div:nth-child(1) {
      display: flex;
      gap: 0 5px;

      & > div:nth-child(1) {
        width: 56.062px;
        height: 56.062px;
        background: #f9afb1;
        border-radius: 50%;
        color: #fff;
        text-align: center;
        font-family: "Noto Sans HK";
        font-size: 11.212px;
        font-style: normal;
        font-weight: 500;
        line-height: 14.95px; /* 133.333% */
        letter-spacing: 0.561px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      & > div:nth-child(2) {
        color: #333;
        text-shadow: -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff,
          1px 1px 0 #fff;
        font-family: "Noto Sans HK";
        font-size: 14.95px;
        font-style: normal;
        font-weight: 500;
        line-height: 24.916px; /* 166.667% */
        letter-spacing: 0.747px;
        display: flex;
        flex-direction: column;
      }
    }
  }
  .question {
    margin-top: 70px;
    & > div:nth-child(2) {
      margin-top: 40px;
      margin-bottom: 40px;
      display: flex;
      justify-content: space-between;
      & > div {
        border-radius: 10px;
        background: var(--Skin, #eafbff);
        box-shadow: 0px 0px 7.5px 0px rgba(0, 0, 0, 0.25);
        cursor: pointer;
        & > img {
          width: 100%;
          height: 100%;
        }
      }
      & > div:hover {
        border-radius: 10px;
        background: var(--Skin, #eafbff);
        box-shadow: 0px 0px 7.5px 0px rgba(0, 0, 0, 0.25);
        transform: scale(1.1);
        transition: all 0.3s ease-out;
      }
    }
    :deep(.collapse-test) {
      & > div:nth-child(1) {
        display: none;
      }
      .el-collapse-item__content > div {
        padding-left: 40px;
      }
    }
  }
  .active-question {
    position: relative;
  }
  .active-question::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 105px;
    height: 109px;
    background: rgb(192 209 255 / 35%);
  }
}
@media screen and (max-width: 767px) {
  .daily-eye-care-box {
    margin-top: 25px;
    padding: 0 18px;
    margin-bottom: 40px;
  }
  .everyday {
    & > div:nth-child(2) {
      margin-top: 28px;
      :deep(.product-list) {
        gap: 30px 10px;
        & > div {
          display: flex;
          flex-direction: column;
          align-items: center;
          & > div:nth-child(1) {
            width: 95.116px;
            height: 95.116px;
            border-radius: 17.294px;
            display: flex;
            justify-content: center;
            align-items: center;
            & > img {
              max-height: 62px;
              max-width: 72px;
              width: 50%;
              height: auto;
              min-height: 25px;
              min-width: 43px;
            }
          }
          & > div:nth-child(2) {
            font-size: 16px;
            font-weight: 500;
            line-height: 20px;
            display: block;
            & > span {
              display: inline;
            }
          }
        }
      }
      :deep(.context) {
        & > div {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 15px 0;
          padding: 23px 27px;
          & > div:nth-child(1) {
            width: 284px;
            height: 248px;
            border-radius: 9.323px;
            margin: 0 auto;

            & > img {
              width: 100%;
              height: 100%;
            }
          }
          & > div:nth-child(2) {
            & > div:nth-child(1) {
              color: var(--Deep-Blue, #3e5270);
              font-family: "Noto Sans HK";
              font-size: 20px;
              font-style: normal;
              font-weight: 700;
              line-height: 34px; /* 170% */
              letter-spacing: 1px;
              text-align: center;
            }
            & > div:nth-child(2) {
              color: #60605f;
              font-family: "Noto Sans HK";
              font-size: 14px;
              font-style: normal;
              font-weight: 500;
              line-height: 20px; /* 142.857% */
              letter-spacing: 0.7px;
            }
          }
          & > div:nth-child(3) {
            right: 20px;
            top: 10px;
            width: 29px;
            height: 29px;
          }
        }
      }
    }
  }
  .eyeshield-food {
    margin-top: 28px;
    margin-bottom: 30px;
    & > div:nth-child(2) {
      display: flex;
      margin-top: 30px;
      gap: 0 9px;
      justify-content: space-between;
    }
  }
  .active-question {
    position: relative;
  }
  .active-question::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 20.1vw;
    height: 20.1vw;
    background: rgb(192 209 255 / 35%);
  }
  .close-img {
    flex: 1;
    width: 42px;
    overflow: hidden;
    height: 269.309px;
    position: relative;
    img {
      width: auto;
      height: 269.309px;
    }
    border-radius: 34.616px;
    & > div:nth-child(1) {
      display: flex;
      justify-content: center;
    }
    & > div:nth-child(2) {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      bottom: 11px;
      & > div:nth-child(1) {
        border-radius: 50%;
        width: 31.154px;
        height: 31.154px;
        min-width: 31.154px;
        min-height: 31.154px;
        color: #fff;
        text-align: center;
        font-family: "Noto Sans HK";
        font-size: 6.231px;
        font-style: normal;
        font-weight: 500;
        line-height: 8.308px; /* 133.333% */
        letter-spacing: 0.312px;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
      & > div:nth-child(2) {
        display: none;
      }
    }
  }
  .m-img {
    position: relative;
    max-width: 91vw;
    margin: 12px auto 0;
    & > div:nth-child(1) {
      width: 91vw;
      height: 69.23vw;
      overflow: hidden;
      margin: 0 auto;
      border-radius: 27.692px;
      display: flex;
      align-items: center;
      justify-content: center;
      & > img {
        width: 100%;
      }
    }
    & > div:nth-child(2) {
      position: absolute;
      bottom: 18px;
      left: 10px;
      display: flex;
      gap: 0 5px;
      & > div:nth-child(1) {
        width: 57.77px;
        height: 30.462px;
        border-radius: 20.769px;
        color: #fff;
        text-align: center;
        font-family: "Noto Sans HK";
        font-size: 8.308px;
        font-style: normal;
        font-weight: 500;
        line-height: 9.692px; /* 116.667% */
        letter-spacing: 0.415px;
        & > span:nth-child(3) {
          display: block;
        }
        box-sizing: border-box;
        padding-top: 5px;
        white-space: nowrap;
      }
      & > div:nth-child(2) {
        color: #333;
        text-shadow: -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff,
          1px 1px 0 #fff;
        font-family: "Noto Sans HK";
        font-weight: 500;
        display: flex;
        flex-direction: column;
        font-size: 8.308px;
        font-style: normal;
        font-weight: 500;
        line-height: 13.846px; /* 166.667% */
        letter-spacing: 0.415px;
      }
    }
  }
  .question {
    margin-top: 30px;
    & > div:nth-child(2) {
      margin-top: 23px;
      margin-bottom: 34px;
      display: grid;
      grid-template-columns: repeat(4, 2fr);
      gap: 13px;
      & > div {
        width: 20.1vw;
        height: 20.1vw;
        border-radius: 7.489px;
        background: var(--Skin, #eafbff);
        box-shadow: 0px 0px 5.617px 0px rgba(0, 0, 0, 0.25);
        & > img {
          width: 100%;
          height: 100%;
        }
      }
    }
    :deep(.collapse-test) {
      & > div:nth-child(1) {
        display: none;
      }
      .el-collapse-item__content {
        padding-left: 20px;
      }
      .el-collapse-item__header {
        display: flex;
        align-items: center;
        padding: 9px 30px 9px 40px;
        text-align: left;
        justify-content: flex-start;
      }
      .el-collapse-item__header > i {
        position: absolute;
        right: 10px;
      }
      .el-collapse-item__header::before {
        left: 10px;
      }
      .el-collapse-item__content > div {
        padding-left: 30px;
      }
    }
  }
}
</style>