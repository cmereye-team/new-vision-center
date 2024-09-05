<script lang="ts" setup>
useHead(() => ({
  title: "日常護眼｜常見眼睛問題｜希瑪視光中心",
  meta: [
    {
      hid: "description",
      name: "description",
      content:
        "希瑪視光中心提供全面的眼科視光檢查和護理服務，讓你保持健康的雙眼。從日常生活小細節做起，多注意用眼情況、充足休息時間、多攝取護眼保健食物。定期接受視光檢查，希瑪視光為你提供專業的眼睛護理建議，及早發現眼睛問題，讓你的眼睛保持健康和清晰。立即了解更多有關護眼資訊。",
    },
    {
      hid: "Keywords",
      name: "Keywords",
      content:
        "眼睛問題 視光檢查 眼睛檢查 視力檢查 視力健康 眼睛健康 眼科檢查 視力測試 護眼 護眼保健食品 護眼食物 護眼睛 藍莓護眼 改善視力食物 眼睛保健 眼睛護理 檢查眼睛 眼部檢查 眼科視光師 註冊視光師 視光師 視光師驗眼 視光師驗眼中心 希瑪視光 視光中心 希瑪視光中心 希瑪眼科視光中心",
    },
  ],
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
      "",
      "•2至18歲人士建議在家長指導下使用；",
      "",
      "•18歲或以上盡量避免長時間看著螢幕，<br>",
      "&nbsp;&nbsp;注意要給予眼睛適當的休息時間。",
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
      "定期檢查眼睛以及早找出眼睛問題，尤其是有家疾病史及較高風險患眼疾人士。",
      "",
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
    childText: [
      "維他命A有效保護眼睛，維持",
      "正常視力，避免夜盲症和減慢",
      "眼睛老化衰退。富含維他命A",
      "食物包括︰菠菜、番薯、南瓜、",
      "紅蘿蔔。",
    ],
  },
  {
    id: 2,
    img: "https://static.cmereye.com/imgs/2024/06/944597d75c1a85f4.png",
    childTitle: ["含", "維他命B", "食物"],
    childBgColor: "#C75770",
    addOpenImg: false,
    childText: [
      "能紓緩眼睛疲勞，增加眼球晶",
      "狀體的代謝，有助保護眼部神",
      "經組織細胞。代表食物有︰牛",
      "奶、奶蛋製品、蛋、鰹魚、",
      "內臟等。",
    ],
  },
  {
    id: 3,
    img: "https://static.cmereye.com/imgs/2024/06/f4989b4d3c631721.png",
    childTitle: ["含", "維他命C", "食物"],
    childBgColor: "#D16C3E",
    addOpenImg: false,
    childText: [
      "有抗氧化功能，主要預防白內障，",
      "避免眼球晶狀體氧化，以保持",
      "眼睛透明清澈。維他命C含量",
      "高的食物包括︰檸檬、椰菜花、",
      "奇異果、番石榴等。",
    ],
  },
  {
    id: 4,
    img: "https://static.cmereye.com/imgs/2024/06/1cb9c954288349e3.png",
    childTitle: ["含", "維他命E", "食物"],
    childBgColor: "#668331",
    addOpenImg: false,
    childText: [
      "避免眼睛退化和預防白內障，",
      "南瓜、堅果、三文魚籽等食物",
      "均富含維他命E。",
      "",
    ],
  },
  {
    id: 5,
    img: "https://static.cmereye.com/imgs/2024/06/54290239552d9bca.png",
    childTitle: ["含", "Omega-3", "食物"],
    childBgColor: "#E59B40",
    addOpenImg: false,
    childText: [
      "Omega-3能增強身體免疫力，",
      "有效保護心血管，亦有助於眼",
      "睛健康，例如︰幫助視網膜及",
      "視神經發育、預防視力減退。",
      "鯖魚、秋刀魚、三文魚、核桃、",
      "奇亞籽等食物均含豐富",
      "Omega-3",
    ],
  },
  {
    id: 6,
    img: "https://static.cmereye.com/imgs/2024/06/fe3227e340eb5a30.png",
    childTitle: ["含", "葉黃素", "食物"],
    childBgColor: "#84883A",
    addOpenImg: false,
    childText: [
      "葉黃素為一種很強的抗氧化劑，",
      "是人類眼睛內視網膜黃斑部的重",
      "要成分，能預防白內障和黃斑病",
      "變。葉黃素含量較多的食物有︰",
      "蕎麥、青豆、菠菜、南瓜等。",
    ],
  },
  {
    id: 7,
    img: "https://static.cmereye.com/imgs/2024/06/39452f1af77b7f35.png",
    childTitle: ["含", "花青素", "食物"],
    childBgColor: "#513C75",
    addOpenImg: false,
    childText: [
      "花青素具有很強的抗氧化作用，",
      "對眼部晶狀體及視網膜有益，能",
      "有助維持眼睛健康。日常生活中，",
      "可以從藍莓、葡萄、蔓越莓、",
      "黑枸杞等食物攝取。",
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
      `•要預防近視或者其他眼部疾病，建議2歲以下兒童須避免使用電子產品；2至18歲人士應在家長指導下使用；18歲或以上應避免長時間看著螢幕，注意要給予眼睛適當的休息時間。`,
      `•無論是小朋友或成年人，使用智能電話、平板電腦、電腦時，盡量分別保持適當距離至30厘米、40厘米及50厘米。`,
      `•觀看電子螢幕時，眼睛要適當休息，應用「20-20-20」護眼法則︰看電子產品螢幕20分鐘，建議雙眼要休息20秒，或者遠望20呎﹙約50厘米﹚外的景觀。`,
      `•使用電子產品或閱讀時，光線要充足，坐姿要正確，頭部避免前傾。`,
      `•建議多在戶外活動，有多項研究顯示，戶外活動或有助減慢近視速度。`,
    ],
    mAq: [
      `•要預防近視或者其他眼部疾病，建議2歲以下兒童須避免使用電子產品；2至18歲人士應在家長指導下使用；18歲或以上應避免長時間看著螢幕，注意要給予眼睛適當的休息時間。`,
      `•無論是小朋友或成年人，使用智能電話、平板電腦、電腦時，盡量分別保持適當距離至30厘米、40厘米及50厘米。`,
      `•觀看電子螢幕時，眼睛要適當休息，應用「20-20-20」護眼法則︰看電子產品螢幕20分鐘，建議雙眼要休息20秒，或者遠望20呎﹙約50厘米﹚外的景觀。`,
      `•使用電子產品或閱讀時，光線要充足，坐姿要正確，頭部避免前傾。`,
      `•建議多在戶外活動，有多項研究顯示，戶外活動或有助減慢近視速度。`,
    ],
  },
  {
    q: "如何防止散光加深？",
    a: [
      `•觀看電子螢幕時，眼睛要適當休息，應用「20-20-20」護眼法則︰看電子產品螢幕20分鐘，建議雙眼要休息20秒，或者遠望20呎﹙約50厘米﹚外的景觀。`,

      `•閱讀時，眼睛距離書本最好保持30厘米。看智能電話、平板電腦、電腦時，盡量保持適當距離至30厘米、40厘米及50厘米。`,
      `•避免躺著看電話、閱讀的壞習慣，這些動作會使角膜與晶狀體偏移，加深散光，也容易造成左右眼睛度數差距大的情況。`,
      `•建議2歲以下兒童須避免使用電子產品；2至18歲人士在家長指導下使用；18歲或以上應避免長時間看著螢幕，注意要給予眼睛適當的休息時間。`,
      `•切勿在光線不足的地方閱讀 。`,
    ],
    mAq: [
      `•觀看電子螢幕時，眼睛要適當休息，應用「20-20-20」護眼法則︰看電子產品螢幕20分鐘，建議雙眼要休息20秒，或者遠望20呎﹙約50厘米﹚外的景觀。`,

      `•閱讀時，眼睛距離書本最好保持30厘米。看智能電話、平板電腦、電腦時，盡量保持適當距離至30厘米、40厘米及50厘米。`,
      `•避免躺著看電話、閱讀的壞習慣，這些動作會使角膜與晶狀體偏移，加深散光，也容易造成左右眼睛度數差距大的情況。`,
      `•建議2歲以下兒童須避免使用電子產品；2至18歲人士在家長指導下使用；18歲或以上應避免長時間看著螢幕，注意要給予眼睛適當的休息時間。`,
      `•切勿在光線不足的地方閱讀 。`,
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
      `•觀看電子螢幕時，眼睛要適當休息，應用「20-20-20」護眼法則︰看電子產品螢幕20分鐘，建議雙眼要休息20秒，或者遠望20呎﹙約50厘米﹚外的景觀。`,

      `•閱讀時，眼睛距離書本最好保持30厘米。看智能電話、平板電腦、電腦時，盡量保持適當距離至30厘米、40厘米及50厘米。`,
      `•避免躺著看電話、閱讀的壞習慣，這些動作會使角膜與晶狀體偏移，加深散光，也容易造成左右眼睛度數差距大的情況。`,
      `•建議2歲以下兒童須避免使用電子產品；2至18歲人士在家長指導下使用；18歲或以上應避免長時間看著螢幕，注意要給予眼睛適當的休息時間。`,
      `•切勿在光線不足的地方閱讀 。`,
    ],
    mAq: [
      `•觀看電子螢幕時，眼睛要適當休息，應用「20-20-20」護眼法則︰看電子產品螢幕20分鐘，建議雙眼要休息20秒，或者遠望20呎﹙約50厘米﹚外的景觀。`,

      `•閱讀時，眼睛距離書本最好保持30厘米。看智能電話、平板電腦、電腦時，盡量保持適當距離至30厘米、40厘米及50厘米。`,
      `•避免躺著看電話、閱讀的壞習慣，這些動作會使角膜與晶狀體偏移，加深散光，也容易造成左右眼睛度數差距大的情況。`,
      `•建議2歲以下兒童須避免使用電子產品；2至18歲人士在家長指導下使用；18歲或以上應避免長時間看著螢幕，注意要給予眼睛適當的休息時間。`,
      `•切勿在光線不足的地方閱讀 。`,
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
    q: "長期覺得眼乾、眼澀是否患上眼乾症？",
    a: [
      `眼乾症常見症狀包括︰眼睛乾澀、容易疲倦、眼睛痕癢、有異物感、痛灼熱感、眼皮緊繃沉重、分泌物黏稠、怕風畏光，對外界刺激很敏感，暫時性視力模糊。如果眼乾症長期不醫治，有機會病情惡化，引致眼角膜受損。`,
    ],
    mAq: [
      `眼乾症常見症狀包括︰眼睛乾澀、容易疲倦、眼睛痕癢、有異物感、痛灼熱感、眼皮緊繃沉重、分泌物黏稠、怕風畏光，對外界刺激很敏感，暫時性視力模糊。如果眼乾症長期不醫治，有機會病情惡化，引致眼角膜受損。`,
    ],
  },
  {
    q: "經常眼紅紅是眼乾症嗎？",
    a: [
      `眼睛眼白有時出現血絲，如果雙眼休息後，情況有所改善，多數是眼睛疲勞、眼乾造成。眼紅可能的疾病除了眼乾症外，還有機會是其他眼疾。若眼紅伴隨其他症狀，例如︰視力減退、畏光，可能是青光眼先兆；如果還有眼疼、流淚、分泌物變多，有機會是結膜炎、虹膜炎、眼瞼發炎、角膜受傷；嚴重的甚至可能是眼球出血或結膜出血。所以，眼紅情況持續或沒有改善，請聯絡視光師或眼科專科醫生檢查。`,
    ],
    mAq: [
      `眼睛眼白有時出現血絲，如果雙眼休息後，情況有所改善，多數是眼睛疲勞、眼乾造成。眼紅可能的疾病除了眼乾症外，還有機會是其他眼疾。若眼紅伴隨其他症狀，例如︰視力減退、畏光，可能是青光眼先兆；如果還有眼疼、流淚、分泌物變多，有機會是結膜炎、虹膜炎、眼瞼發炎、角膜受傷；嚴重的甚至可能是眼球出血或結膜出血。所以，眼紅情況持續或沒有改善，請聯絡視光師或眼科專科醫生檢查。`,
    ],
  },
  {
    q: "多眼水、多眼睛分泌物是眼疾先兆？",
    a: [
      `眼水有助眨眼時使眼睛濕潤，以免眼睛過分乾澀。眼睛分泌物具有保護功能，可清除淚膜和眼睛中可能有害的碎屑。如果發現眼水流得太多，需要不時抹走；或者眼睛分泌物的稠度、顏色和數量突然改變，有可能是眼睛太乾所致。由於基本淚液不足反而刺激反射性淚液分泌，而造成常常流眼淚之症狀。另外，眼睛亦有可能受感染或有其他眼部疾病。如有疑問，請聯絡你的視光師或眼科醫生。`,
    ],
    mAq: [
      `眼水有助眨眼時使眼睛濕潤，以免眼睛過分乾澀。眼睛分泌物具有保護功能，可清除淚膜和眼睛中可能有害的碎屑。如果發現眼水流得太多，需要不時抹走；或者眼睛分泌物的稠度、顏色和數量突然改變，有可能是眼睛太乾所致。由於基本淚液不足反而刺激反射性淚液分泌，而造成常常流眼淚之症狀。另外，眼睛亦有可能受感染或有其他眼部疾病。如有疑問，請聯絡你的視光師或眼科醫生。`,
    ],
  },

  {
    q: "長時間戴隱形眼鏡會引致眼乾？",
    a: [
      `戴隱形眼鏡戴的時間過長，輕則眼睛乾澀，嚴重時有機會導致角膜發炎，視力甚至可能受損。所以，一般建議一天配戴隱形眼鏡時間最好不超過8小時。`,
    ],
    mAq: [
      `戴隱形眼鏡戴的時間過長，輕則眼睛乾澀，嚴重時有機會導致角膜發炎，視力甚至可能受損。所以，一般建議一天配戴隱形眼鏡時間最好不超過8小時。`,
    ],
  },
]);
const muscaeVolitantesQuestionList = ref([
  {
    q: "眼睛看到黑點、黑線是否患有眼晴疾病？",
    a: [
      `這些徵狀有機會由飛蚊症引起。飛蚊症是指一種徵狀而非單一疾病，每個人的徵狀均不相同。以下可能是眼睛看到黑點的原因︰`,
      `•當人專注使用眼力，在眼睛過度疲累的狀態下發生，但在充足睡眠和休息之後會有改善。`,

      `•主要是視網膜的玻璃體退化引起，出現這些情況的人通常年齡較大，或是高度近視、眼睛曾開過刀、有頭部外傷病史人士。`,
      `•因糖尿病、高血壓、眼中風、黃斑病變，或者視網膜剝離、視網膜裂孔、玻璃體炎、視網膜炎等疾病引起。`,
      `如果眼睛看見黑點的情況持續，建議盡快聯絡視光師或眼科專科醫生。`,
    ],
    mAq: [
      `這些徵狀有機會由飛蚊症引起。飛蚊症是指一種徵狀而非單一疾病，每個人的徵狀均不相同。以下可能是眼睛看到黑點的原因︰`,
      `•當人專注使用眼力，在眼睛過度疲累的狀態下發生，但在充足睡眠和休息之後會有改善。`,
      `•主要是視網膜的玻璃體退化引起，出現這些情況的人通常年齡較大，或是高度近視、眼睛曾開過刀、有頭部外傷病史人士。`,
      `•因糖尿病、高血壓、眼中風、黃斑病變，或者視網膜剝離、視網膜裂孔、玻璃體炎、視網膜炎等疾病引起。`,
      `如果眼睛看見黑點的情況持續，建議盡快聯絡視光師或眼科專科醫生。`,
    ],
  },
]);
const glaucomaQuestionList = ref([
  {
    q: "青光眼有甚麼症狀？",
    a: [
      `急性青光眼的症狀如下︰突然眼睛脹痛、眼睛充血、視力模糊、頭痛、噁心、甚至嘔吐。為預防青光眼，建議40歲以上人士應該至少1至2年進行一次眼睛檢查。`,
    ],
    mAq: [
      `急性青光眼的症狀如下︰突然眼睛脹痛、眼睛充血、視力模糊、頭痛、噁心、甚至嘔吐。為預防青光眼，建議40歲以上人士應該至少1至2年進行一次眼睛檢查。`,
    ],
  },
  {
    q: "兒童先天性青光眼是甚麼原因？",
    a: [
      `先天性青光眼多數成因為家族性遺傳、胚胎期前房角發育異常。如果家長發現小朋友畏光、過量流淚、眼瞼痙攣、眼球擴大、眼角膜渾濁不清、雙眼大小不對稱等，應及早聯絡眼科醫生。`,
    ],
    mAq: [
      `先天性青光眼多數成因為家族性遺傳、胚胎期前房角發育異常。如果家長發現小朋友畏光、過量流淚、眼瞼痙攣、眼球擴大、眼角膜渾濁不清、雙眼大小不對稱等，應及早聯絡眼科醫生。`,
    ],
  },
  {
    q: "小朋友大小眼可能是青光眼症狀？",
    a: [
      `雙眼大小不對稱可能是先天性青光眼所致，若果家長發現小朋友有畏光、淚水過多、眼瞼痙攣、角膜混濁及擴大等徵狀，應該及早帶孩子檢查眼睛。`,
    ],
    mAq: [
      `雙眼大小不對稱可能是先天性青光眼所致，若果家長發現小朋友有畏光、淚水過多、眼瞼痙攣、角膜混濁及擴大等徵狀，應該及早帶孩子檢查眼睛。`,
    ],
  },
]);
const cataractQuestionList = ref([
  {
    q: "白內障有甚麼症狀？",
    a: [
      `白內障患者視力不斷衰退，在早期，原本透明的晶狀體逐漸變黃，患者出現視力模糊、影像重疊、眩光及光暈、夜間視線不良，或看東西時感到色覺偏暗或偏黃等，這些症狀都可能是白內障的先兆。`,
    ],
    mAq: [
      `白內障患者視力不斷衰退，在早期，原本透明的晶狀體逐漸變黃，患者出現視力模糊、影像重疊、眩光及光暈、夜間視線不良，或看東西時感到色覺偏暗或偏黃等，這些症狀都可能是白內障的先兆。`,
    ],
  },
  {
    q: "白內障是否只有老年人才會患上？",
    a: [
      `白內障有先天性，指的是晶狀體在出生前已混淆，或在出生後逐漸形成晶狀體部分或全部混濁。後天白內障，以往的平均年齡約在65歲，所以亦稱為老年性白內障。但近年白內障有年輕化趨勢，在長時間使用電子產品的情況下，雙眼不斷在強光中，也會增加患上白內障的風險。另外，近視超過600度，或者患有三高（高血壓、高血脂、高血糖）人士，也屬於白內障高危一族。`,
    ],
    mAq: [
      `白內障有先天性，指的是晶狀體在出生前已混淆，或在出生後逐漸形成晶狀體部分或全部混濁。後天白內障，以往的平均年齡約在65歲，所以亦稱為老年性白內障。但近年白內障有年輕化趨勢，在長時間使用電子產品的情況下，雙眼不斷在強光中，也會增加患上白內障的風險。另外，近視超過600度，或者患有三高（高血壓、高血脂、高血糖）人士，也屬於白內障高危一族。`,
    ],
  },
  {
    q: "小朋友的瞳孔呈白色，是白內障嗎？",
    a: [
      `這種情況有機會是先天性白內障。除了眼睛晶狀體混濁，先天性白內障還伴隨視力不佳、畏光、斜視及眼球震顫等症狀。病患主要原因為家族遺傳、先天性新陳代謝異常、在母親懷孕期受病毒感染。若果發現小朋友眼睛異常，應及早到視光或眼科中心檢查。如果錯過治療黃金期，視力可能難以回復正常。`,
    ],
    mAq: [
      `這種情況有機會是先天性白內障。除了眼睛晶狀體混濁，先天性白內障還伴隨視力不佳、畏光、斜視及眼球震顫等症狀。病患主要原因為家族遺傳、先天性新陳代謝異常、在母親懷孕期受病毒感染。若果發現小朋友眼睛異常，應及早到視光或眼科中心檢查。如果錯過治療黃金期，視力可能難以回復正常。`,
    ],
  },
]);
const strabismicAmblyopiaQuestionList = ref([
  {
    q: "成年人弱視或斜視還可以治療嗎？",
    a: [
      `治療弱視或斜視的黃金期為3至6歲， 6至12歲的治療成效會大打折扣，12歲之後恐怕更難醫治。但是，近年有科學研究發現成人弱視或可以治療，例如離眼法的遊戲訓練，減少弱視眼被主眼抑制的情況。`,
    ],
    mAq: [
      `治療弱視或斜視的黃金期為3至6歲， 6至12歲的治療成效會大打折扣，12歲之後恐怕更難醫治。但是，近年有科學研究發現成人弱視或可以治療，例如離眼法的遊戲訓練，減少弱視眼被主眼抑制的情況。`,
    ],
  },
  {
    q: "小朋友配戴適合度數的眼鏡後仍看不清東西，是不是眼鏡有問題？",
    a: [
      `有機會是眼鏡度數不合適，亦有機會是小朋友患有弱視。弱視是指某隻眼或雙眼的視力出現問題，使用一般光學鏡片後仍無法令患者達致正常視力。弱視的治療黃金期是3至6歲，6歲後治療的成效減半，而12歲後便難以完全治癒。家長如有任何懷疑，應盡快聯絡視光師或眼科專科醫生。`,
    ],
    mAq: [
      `有機會是眼鏡度數不合適，亦有機會是小朋友患有弱視。弱視是指某隻眼或雙眼的視力出現問題，使用一般光學鏡片後仍無法令患者達致正常視力。弱視的治療黃金期是3至6歲，6歲後治療的成效減半，而12歲後便難以完全治癒。家長如有任何懷疑，應盡快聯絡視光師或眼科專科醫生。`,
    ],
  },
  {
    q: "小朋友喜歡頭側側看東西，有問題嗎？",
    a: [
      `家長看見子女出現這種情況，好多時候以為只小問題，而錯過了治療的最佳時機。患有斜視的小朋友因雙眼的視線方向不同，往往會不自覺地側起頭來看東西。斜視是由於雙眼視軸不平行，令其中一個眼球向內、外、上或下傾斜，例如︰一隻眼固定向前方看物件時，但另一隻不能同時向前方看。斜視對視力發育有不良影響，患者會失去立體視覺，還有機會出現弱視，阻礙自信心及社交發展。`,
    ],
    mAq: [
      `家長看見子女出現這種情況，好多時候以為只小問題，而錯過了治療的最佳時機。患有斜視的小朋友因雙眼的視線方向不同，往往會不自覺地側起頭來看東西。斜視是由於雙眼視軸不平行，令其中一個眼球向內、外、上或下傾斜，例如︰一隻眼固定向前方看物件時，但另一隻不能同時向前方看。斜視對視力發育有不良影響，患者會失去立體視覺，還有機會出現弱視，阻礙自信心及社交發展。`,
    ],
  },
]);
const optometryQuestionList = ref([
  {
    q: "視光檢查建議多久要做一次？",
    a: [
      `•18歲以下的小童及少年，視力正常，最少每年驗眼1次；`,
      `•18歲以下的小童及少年，有近視或散光，則最少半年1次；`,
      `•18歲以上成年人，視力正常，最少每兩年驗眼1次；`,

      `•18歲以上成年人，有近視或散光，就最少每年1次。`,

      `•患有眼睛疾病人士，需要更常驗眼，建議每2至3個月檢查1次，保持眼睛健康。`,
    ],
    mAq: [
      `•18歲以下的小童及少年，視力正常，最少每年驗眼1次；`,
      `•18歲以下的小童及少年，有近視或散光，則最少半年1次；`,
      `•18歲以上成年人，視力正常，最少每兩年驗眼1次；`,

      `•18歲以上成年人，有近視或散光，就最少每年1次。`,

      `•患有眼睛疾病人士，需要更常驗眼，建議每2至3個月檢查1次，保持眼睛健康。`,
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
        <div class="dailyEye">
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
        <PublicCollapse
          class="questionTip"
          :listQuestion="questionItem"
          :testWidth="true"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
:deep(.kong) {
  min-height: 0px !important;
}

:deep(.questionTip) {
  .letf {
    text-align: left;
  }
}
//   :deep(.dailyEye){
//       .context > div > div:nth-child(2) > div:nth-child(2){
//         text-indent: -8px;
//       }
// }
@media screen and (min-width: 768px) {
  :deep(.questionTip) {
    .el-collapse-item__content {
      padding: 24px 30px;
    }
  }
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
    // background: rgb(192 209 255 / 35%);
  }
}
@media screen and (max-width: 767px) {
  :deep(.questionTip) {
    .el-collapse-item__header{
      font-size: 4.615vw;
      padding: 2.3vw 10.25vw 2.3vw 11.38vw;
      letter-spacing: 1px;
      line-height: 6.15vw;
    }
    .el-collapse-item__content {
      font-size: 3.589vw;
      font-style: normal;
      font-weight: 500;
      line-height: 5.89vw;
    }
  }
  .daily-eye-care-box {
    margin-top: 25px;
    padding: 0 18px;
    margin-bottom: 40px;
  }
  .everyday {
    & > div:nth-child(2) {
      margin-top: 7.178vw;
      :deep(.product-list) {
        gap: 7.69vw 3.07vw;
        & > div {
          display: flex;
          flex-direction: column;
          align-items: center;
          & > div:nth-child(1) {
            width: 24.389vw;
            height: 24.389vw;
            border-radius: 7.1vw;
            display: flex;
            justify-content: center;
            align-items: center;
            & > img {
              max-height: 15.89vw;
              max-width: 18.46vw;
              width: 50%;
              height: auto;
              min-height: 6.4vw;
              min-width: 11vw;
            }
          }
          & > div:nth-child(2) {
            font-size: 4.1vw;
            font-weight: 500;
            line-height: 5.128vw;
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
        width: 90.77px;
        height: 40.462px;
        border-radius: 20.769px;
        color: #fff;
        text-align: center;
        font-family: "Noto Sans HK";
        font-size: 12.308px;
        font-style: normal;
        font-weight: 500;
        line-height: 17.692px;
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
        font-size: 12px;
        font-style: normal;
        font-weight: 500;
        line-height: 16.846px; /* 166.667% */
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