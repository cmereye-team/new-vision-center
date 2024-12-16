<script lang="ts" setup>
// const synthesisList = ref({
//   id: 1,
//   title: [
//     ["綜合眼睛檢查"],
//     ["兒童眼睛檢查套餐", "(4-12歲)"],
//     ["成人眼睛檢查套餐", "(18歲或以上)"],
//     ["親友眼睛檢查計劃", "(兒童/成人)"],
//   ],
//   rowOne: [["視力及屈光度數檢查", "(近視/遠視/散光/老花)"], true, true, true],
//   rowTwo: [["雙眼協調及斜視檢查"], true, true, true],
//   rowThree: [["色弱/色盲檢查"], true, true, true],
//   rowFour: [["立體視覺檢查"], true, true, true],
//   rowFive: [["青光眼篩查 (眼壓)"], true, true, true],
//   fee: ["收 費/HKD", ["$350"], "$350", "$600"],
// });
const synthesisTableData = ref([
  // Header row
  [
    ["綜合眼睛檢查"],
    ["兒童眼睛檢查套餐", "(4-12歲)"],
    ["成人眼睛檢查套餐", "(18歲或以上)"],
    ["親友眼睛檢查計畫", "(兒童/成人)"],
  ], // Row 1
  [
    ["視力及屈光度數檢查", "(近視/遠視/散光/老花)"],
    "child",
    "adult",
    "friends",
  ], // Row 2
  ["雙眼協調及斜視檢查", "child", "adult", "friends"], // Row 3
  ["色弱/色盲檢查", "child", "adult", "friends"], // Row 4
  ["立體視覺檢查", "child", "adult", "friends"], // Row 5
  ["青光眼篩查 (眼壓)", "child", "adult", "friends"], // Fee row
  ["收費/HKD", "$350", "$350", "$600"],
]);

const myopiaList = ref([
  // Header row
  [
    ["近視控制"],
    ["近視控制檢查套餐", "(6-18歲)"],
    ["角膜矯形鏡合適性檢查套餐", "(6歲或以上)"],
  ], // Row 1
  ["視力及屈光度數檢查", "child", "adult"], // Row 2
  ["雙眼協調及斜視檢查", "child", "adult"], // Row 3
  ["色弱/色盲檢查", "child", "adult"], // Row 4
  ["立體視覺檢查", "child", "adult"], // Row 5
  ["青光眼篩查 (眼壓)", "child", "adult"],
  ["眼軸檢查", "child", "adult"],
  ["眼角膜地形圖分析", "", "adult"], // Fee row
  ["收費/HKD", "$350", "$1000"],
]);

const contactLensList = ref([
  // Header row
  [
    ["隱形眼鏡"],
    ["隱形眼鏡驗配檢查"],
    ["老花隱形眼鏡", "檢查及試戴套餐"],
    ["RGP鏡適配性", "檢查套餐"],
  ], // Row 1
  [
    ["視力及屈光度數檢查", " (近視/遠視/散光/老花)"],
    ["", "child"],
    "adult",
    "friends",
  ], // Row 2
  ["檢查眼睛前區健康情況", ["", "child"], "adult", ""], // Row 3
  ["隱形眼鏡試戴", "child", "adult", ""], // Row 4
  ["隱形眼鏡護理", "child", "adult", ""], // Row 5
  ["雙眼協調及斜視檢查", "", "", "friends"], // Row 6
  ["色弱/色盲檢查", "", "", "friends"], // Row 7
  ["青光眼篩查(眼壓)", "", "", "friends"], // Row 8
  ["角膜健康檢查", "", "", "friends"], // Row 9
  ["眼角膜地形圖分析", "", "", "friends"], // Row 10
  ["硬式隱形眼鏡(RGP鏡)試戴", "", "", "friends"], // Fee row
  ["收費/HKD", ["$500", "$350"], "$500", " $500"],
]);

const glaucomaList = ref([
  // Header row
  [["青光眼檢查"], ["青光眼檢查套餐", "(18 歲或以上)"]], // Row 1
  [["視力及屈光度數檢查", " (近視/遠視/散光/老花)"], "child"], // Row 7
  ["青光眼篩查(眼壓)", "child"], // Row 2
  ["眼球結構斷層掃描OCT", "child"], // Row 3
  ["視野檢查 (+500)", "child"], // Fee row
  ["收費/HKD", " $1000"],
]);
const headerTitle = ref("綜合眼睛檢查");
const remark = ref("港幣$2000或以上的眼鏡驗配服務已包括1次綜合眼睛檢查");
const declare = ref("本中心價目清晰，絕無其他額外收費");

const allData = ref(true);
const synthesis = ref(false);
const myopia = ref(false);
const contactLens = ref(false);
const glaucoma = ref(false);

const chooseNumber = ref();
const chooseType = (type: number) => {
  switch (Number(type)) {
    case 0:
      allData.value = true;
      synthesis.value = true;
      myopia.value = true;
      contactLens.value = true;
      glaucoma.value = true;
      break;
    case 1:
      allData.value = false;
      synthesis.value = true;
      myopia.value = false;
      contactLens.value = false;
      glaucoma.value = false;
      break;
    case 2:
      allData.value = false;
      synthesis.value = false;
      myopia.value = true;
      contactLens.value = false;
      glaucoma.value = false;
      break;
    case 3:
      allData.value = false;
      synthesis.value = false;
      myopia.value = false;
      contactLens.value = true;
      glaucoma.value = false;
      break;
    case 4:
      allData.value = false;
      synthesis.value = false;
      myopia.value = false;
      contactLens.value = false;
      glaucoma.value = true;
      break;
    default:
      break;
  }
};

onMounted(() => {
  chooseType(0);
});
</script>

<template>
  <div class="table">
    <div class="table-header">
      <div>收費詳情</div>
      <div>
        <select
          v-model="chooseNumber"
          @change="chooseType(chooseNumber)"
          class="select-type"
        >
          <option :value="0">所有費用</option>
          <option :value="1">綜合眼睛檢查</option>
          <option :value="2">近視控制</option>
          <option :value="3">隱形眼鏡</option>
          <option :value="4">青光眼檢查</option>
        </select>
      </div>
    </div>
    <div>
      <div v-if="synthesis">
        <FeeDetailTable
          :tableData="synthesisTableData"
          :headerTitle="headerTitle"
          :remark="remark"
          :declare="declare"
          key="synthesis"
        />
      </div>
      <div v-if="myopia">
        <FeeMyopiaTable
          :tableData="myopiaList"
          :headerTitle="'近視控制'"
          :remark="''"
          :declare="declare"
          key="myopia"
        />
      </div>
      <div v-if="contactLens">
        <FeeContactLens
          :tableData="contactLensList"
          :headerTitle="'隱形眼鏡'"
          :remark="''"
          :declare="declare"
          key="contactLens"
        />
      </div>
      <div v-if="glaucoma">
        <FeeGlaucoma
          :tableData="glaucomaList"
          :headerTitle="'青光眼'"
          :remark="''"
          :declare="declare"
          key="glaucoma"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@media screen and (min-width: 768px) {
  .table {
    margin-bottom: 80px;
  }
  .table-header {
    max-width: 960px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 80px;
    & > div:nth-child(1) {
      color: var(--Brand-Color, #00a6ce);
      font-family: "Noto Sans HK";
      font-size: 37.5px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
    }
  }
  .select-type {
    appearance: none;
    width: 314px;
    background: url("https://statichk.cmermedical.com/vision/imgs/e496d5c11cab80cf.png")
      no-repeat;
    height: 53px;
    background-position: right;
    border-radius: 18px;
    border: 1px solid #d9d9d9;
    padding: 11px 18px;
    color: var(--Brand-Color, #00a6ce);
    font-family: "Noto Sans HK";
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 1.6px;
    text-transform: uppercase;
  }
  .select-type option {
    margin-top: 10px;
    padding: 20px;
    line-height: 1.8;
    font-size: large;
  }

  .select-type:focus-visible {
    outline: none;
  }
}
@media screen and (max-width: 767px) {
  .table-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 34px;
    margin-top: 14px;
    & > div:nth-child(1) {
      color: var(--Brand-Color, #00a6ce);
      font-family: "Noto Sans HK";
      font-size: 24px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
    }
  }
  .select-type {
    appearance: none;
    width: 214px;
    background: url("https://statichk.cmermedical.com/vision/imgs/e496d5c11cab80cf.png")
      no-repeat;
    height: 30px;
    background-size: contain;
    background-position: right;
    border-radius: 18px;
    border: 1px solid #d9d9d9;
    padding: 2px 15px;
    color: var(--Brand-Color, #00a6ce);
    font-family: "Noto Sans HK";
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 1.6px;
    text-transform: uppercase;
  }
  .select-type option {
    margin-top: 10px;
    padding: 20px;
    line-height: 1.8;
    font-size: large;
  }

  .select-type:focus-visible {
    outline: none;
  }
}
</style>