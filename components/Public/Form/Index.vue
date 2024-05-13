<script lang="ts" setup>
import { reactive, ref } from "vue";
import type { FormInstance, FormRules } from "element-plus";
import { number } from "@intlify/core-base";
const formSize = ref("default");
// const cities = [
//   "角膜矯形鏡合適性檢查套餐",
//   "青光眼檢查套餐",
//   "兒童眼睛檢查套餐",
//   "驗配眼鏡",
//   "成人眼睛檢查套餐",
//   "老花隱形眼鏡檢查及試戴套餐",
//   "親友眼睛檢查計劃",
//   "RGP鏡適配性檢查套餐",
//   "隱形眼鏡驗配套餐",
//   "其他",
// ];

const cities:any = ref([
  {
    type: '101',
    name: '角膜矯形鏡合適性檢查套餐'
  },{
    type: '101',
    name: 'MiSight® 1day隱形眼鏡套餐'
  },{
    type: '101',
    name: '兒童眼睛檢查套餐'
  },{
    type: '101',
    name: '兒童近視控制鏡片'
  },{
    type: '101',
    name: '隱形眼鏡驗配套餐'
  },{
    type: '101',
    name: '親友眼睛檢查計劃'
  },{
    type: '102',
    name: '成人眼睛檢查套餐'
  },{
    type: '102',
    name: '老花隱形眼鏡檢查及試戴套餐'
  },{
    type: '102',
    name: '隱形眼鏡驗配套餐'
  },{
    type: '102',
    name: 'RGP鏡適配性檢查套餐'
  },{
    type: '102',
    name: '親友眼睛檢查計劃'
  },{
    type: '103',
    name: '視力及屈光度數檢查'
  },{
    type: '103',
    name: '雙眼協調及斜視檢查'
  },{
    type: '103',
    name: '色弱/色盲檢查'
  },{
    type: '103',
    name: '立體視覺檢查'
  },{
    type: '103',
    name: '青光眼篩查(眼壓)'
  },{
    type: '103',
    name: '眼乾及淚水測試'
  },{
    type: '103',
    name: '視野檢查'
  },{
    type: '103',
    name: '視網膜掃描攝影（SLO）'
  },{
    type: '103',
    name: '眼球結構斷層掃描（OCT）'
  },{
    type: '103',
    name: '眼軸檢查'
  },{
    type: '103',
    name: '角膜健康檢查'
  },{
    type: '103',
    name: '眼角膜地形圖分析'
  }
])
const actCities:any = ref([])
const actCitiesTab = ref('0')
const changeCities = (str:string) => {
  let temp = cities.value.filter((item:any) => item.type === str) 
  actCitiesTab.value = str
  if(temp.length){
    actCities.value = temp
  }else{
    actCities.value = cities.value
  }
}

const ruleFormRef = ref<FormInstance>();
const ruleForm = reactive({
  name: "",
  tel: 852,
  email: "",
  address: "",
  FromMe: "",
  checkServe: [],
  sms: "",
});
const telValidator = (rule: any, value: any, callback: any) => {
  if (!value) {
    callback(new Error("請輸入手機號"));
  } else if (value.length < 11 || value.length > 11) {
    callback(new Error("手機號格式不正確"));
  } else {
    callback();
  }
};

const rules = reactive<FormRules>({
  name: [
    { required: true, message: "請輸入姓名", trigger: "blur" },
    { min: 3, max: 25, message: "長度應該是3到25", trigger: "blur" },
  ],
  tel: [{ required: true, validator: telValidator, trigger: "blur" }],
  email: [
    {
      required: true,
      message: "請輸入電郵地址",
      trigger: "change",
    },
    {
      type: "email",
      message: "請輸入正確的電子郵件地址",
      trigger: "change",
    },
  ],
  address: [{ required: true, message: "請選擇門診地點", trigger: "blur" }],
  FromMe: [{ required: true, message: "請選擇", trigger: "blur" }],
  // 目前没有强制校验
  // checkServe: [
  //   {
  //     type: 'array',
  //     required: true,
  //     message: 'Please select at least one activity type',
  //     trigger: 'change',
  //   },
  // ],
});

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log("submit!", ruleForm);
      ElMessage({
        message: "提交成功！請注意工作人員聯係！",
        type: "success",
      });
      // resetForm(formEl);
    } else {
      ElMessage({
        message: "提交失敗，請檢查内容是否有誤！",
        type: "error",
      });
      console.log("error submit!", fields);
    }
  });
};
const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  ruleForm.checkServe = [];
  formEl.resetFields();
};

onMounted(()=>{
  changeCities('0')
})
</script>
<template>
<div class="formBox">
  <div class="title">預約視光服務</div>
  <div class="Form">
    <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      :rules="rules"
      label-width="120px"
      require-asterisk-position="right"
      label-position="top"
      class="demo-ruleForm"
      size="default"
      status-icon
    >
      <el-form-item label="姓名" prop="name">
        <el-input v-model="ruleForm.name" clearable placeholder="請輸入姓名" />
      </el-form-item>
      <el-form-item label="聯絡電話" prop="tel">
        <el-input
          v-model.number="ruleForm.tel"
          clearable
          placeholder="請輸入聯絡電話"
        />
      </el-form-item>
      <el-form-item label="電郵地址" prop="email">
        <el-input
          v-model="ruleForm.email"
          clearable
          placeholder="請輸入電郵地址"
        />
      </el-form-item>
      <el-form-item label="選擇門診地點" prop="address">
        <el-select
          v-model="ruleForm.address"
          clearable
          placeholder="請選擇"
          placement="bottom"
        >
          <el-option label="中環" value="Central" />
          <el-option label="旺角" value="Mong Kok" />
          <el-option label="西環" value="Sai Wan" />
          <el-option label="北角" value="North Point" />
          <el-option label="將軍澳" value="Tseung Kwan O" />
        </el-select>
      </el-form-item>
      <el-form-item label="從哪裡找到我們網站" prop="FromMe">
        <el-select
          v-model="ruleForm.FromMe"
          placeholder="請選擇"
          placement="bottom"
          clearable
        >
          <el-option label="Google 搜尋引擎" value="Google 搜尋引擎" />
          <el-option label="Yahoo搜尋引擎" value="Yahoo搜尋引擎" />
          <el-option label="Facebook" value="Facebook" />
          <el-option label="Instagram" value="Instagram" />
          <el-option label="YouTube" value="YouTube" />
          <el-option label="討論區" value="討論區" />
          <el-option label="朋友" value="朋友" />
          <el-option label="醫生" value="醫生" />
          <el-option label="其他" value="其他" />
        </el-select>
      </el-form-item>
      <el-form-item label="請選擇服務">
        <div class="serviceTab">
          <div class="serviceTab-item" :class="{act: actCitiesTab === '101'}" @click="changeCities('101')">
            <svg xmlns="http://www.w3.org/2000/svg" width="59" height="71" viewBox="0 0 59 71" fill="none">
              <path d="M16.3413 13.3118C16.3433 13.3128 16.3432 13.3157 16.3412 13.3166C13.3875 14.6591 10.7935 16.6106 8.87304 19.1811C6.64221 22.1759 5.57243 25.8052 5.15668 29.4394C4.861 32.016 4.89551 34.6221 5.13555 37.2031C5.1611 37.4778 5.47692 37.6168 5.69863 37.4526C5.95511 37.2626 5.85065 36.8651 5.53185 36.8493C4.56959 36.8017 3.59641 36.9259 2.76361 37.4355C1.28822 38.3453 0.847125 40.0173 0.826845 41.6205C0.791354 45.0186 2.16027 48.7708 4.84234 51.0476C6.25689 52.2476 8.02634 52.9901 9.92255 52.8672C10.1736 52.8506 10.379 52.7689 10.5326 52.6409C10.9383 52.3027 10.373 51.8927 9.88384 52.0919C9.45645 52.266 9.25387 52.7589 9.44629 53.1784C12.3977 59.6122 17.0327 66.2297 23.9464 68.9726C26.9833 70.1774 30.3803 70.3348 33.5136 69.3709C36.8902 68.3284 39.8106 66.1941 42.1935 63.6959C45.2509 60.5005 47.572 56.6844 49.3539 52.6977C49.3923 52.6117 49.2916 52.5314 49.216 52.5877C49.1397 52.6445 49.1892 52.7609 49.2825 52.7422C52.0322 52.1909 54.1219 49.9132 55.2743 47.5315C55.9638 46.1103 56.3897 44.6153 56.5672 43.0515C56.7345 41.5959 56.7294 39.9091 55.9081 38.6207C55.2836 37.6435 54.2969 37.1073 53.1864 36.9113C52.9301 36.8661 52.7939 37.1688 52.9807 37.3501C53.1501 37.5144 53.4338 37.4111 53.456 37.1762C53.6666 34.9392 53.739 32.6738 53.515 30.4376C53.3223 28.5148 52.8559 26.6609 52.2272 24.8315C51.8419 23.7103 50.0065 24.1922 50.3918 25.3233C50.985 27.0543 51.4616 28.8099 51.6289 30.6294C51.8469 32.9948 51.7405 35.3947 51.4971 37.7552C51.4413 38.2666 51.9788 38.6551 52.4503 38.6797C53.0587 38.7043 53.7279 38.8616 54.1589 39.3878C54.8535 40.2287 54.7876 41.5172 54.7217 42.5204C54.5746 44.7383 53.733 47.0643 52.2526 48.7806C51.5833 49.5576 50.7772 50.2461 49.8139 50.6592C49.3829 50.8411 48.9469 50.8952 48.5007 51.0132C47.7351 51.2149 47.5526 52.1394 47.2585 52.7688C46.1228 55.1736 44.7742 57.4898 43.1771 59.6339C40.5458 63.1697 36.9866 66.5138 32.5503 67.7235C28.3624 68.8644 24.1897 67.5907 20.7928 65.1171C16.1486 61.7289 12.9798 56.585 10.7388 51.4804C10.5563 51.0575 9.93776 50.9444 9.55243 51.1017C9.35505 51.1829 9.21306 51.3072 9.12029 51.4586C8.97078 51.7027 9.28967 51.8198 9.46703 51.5952C9.6418 51.3738 9.47083 51.0397 9.18975 51.0167C6.82403 50.8227 5.0571 48.9545 4.01085 46.9561C3.3416 45.6874 2.91064 44.2612 2.77375 42.84C2.66728 41.7139 2.55067 40.1796 3.40751 39.2796C3.73706 38.9354 4.14774 38.7829 4.63447 38.7043C4.73587 38.6895 5.05021 38.6698 5.25808 38.6698C5.38484 38.6698 5.50652 38.6748 5.63327 38.6846C5.69411 38.6846 6.00339 38.7239 5.88677 38.7092C6.42927 38.7879 7.15936 38.483 7.08838 37.8191C6.33294 30.6737 7.00726 22.4907 13.0102 17.5091C14.298 16.4419 15.7683 15.601 17.2944 14.9027C18.3979 14.4019 17.4395 12.8128 16.3414 13.307C16.3394 13.3079 16.3392 13.3108 16.3413 13.3118Z" fill="white" stroke="white"/>
              <path d="M56.177 11.0469C56.1747 11.0401 56.1658 11.0382 56.1606 11.0432C55.0754 12.091 53.5099 11.7394 52.1307 11.3838C51.7524 11.2863 51.4015 11.6006 51.4539 11.9877C51.5091 12.3956 51.9709 12.6016 52.2912 12.343C53.7465 11.1681 54.998 9.49254 55.2948 7.69307C55.4267 6.88657 55.5129 6.07024 55.6143 5.25882C55.6599 4.88508 55.6954 4.59002 55.7562 4.23103C55.7765 4.10808 55.8069 3.98514 55.8221 3.86712C55.8728 3.5278 55.8728 3.83761 55.6802 3.99006C56.4001 3.42944 55.6193 2.09675 54.7574 2.45082C52.8866 3.21798 51.0157 4.0294 49.0536 4.55067C47.3912 4.99233 45.6341 5.14098 43.8718 5.09234C43.4353 5.08029 43.1226 5.52303 43.2946 5.9244C43.4456 6.27665 43.8917 6.39041 44.1446 6.10248C45.2028 4.89771 45.3859 3.1959 44.8454 1.67875C44.6477 1.12305 44.0089 0.808318 43.4512 1.12797C41.7121 2.11642 39.897 2.93767 37.9349 3.41469C35.9728 3.89171 34.107 3.97531 32.1652 3.8622C30.0256 3.73434 27.9469 3.29175 25.8428 2.94751C24.0328 2.64753 22.2177 2.50492 20.4128 2.918C18.4304 3.37043 16.6558 4.42281 15.003 5.54405C13.4871 6.57184 12.0472 7.70783 10.7492 8.99134C8.19897 11.5092 6.21657 14.5631 5.19749 17.9661C4.58401 20.0119 4.39642 22.1265 4.28488 24.246C4.17334 26.3655 4.00602 28.9325 5.25833 30.7963C5.80083 31.6028 6.93652 31.2291 7.02779 30.3292C7.39283 26.8425 8.39163 23.3805 10.4349 20.4594C12.0354 18.1785 14.2443 16.4287 16.7598 15.1904C16.96 15.0919 16.9323 14.7915 16.7159 14.7368C16.5002 14.6823 16.3403 14.9261 16.4823 15.0974C18.6658 17.7311 21.866 19.7065 25.0975 20.8282C26.6743 21.3741 28.3221 21.6986 29.9851 21.8363C31.9472 21.9986 33.8839 21.7281 35.8461 21.7281C39.3545 21.7281 42.8377 22.3133 46.1484 23.4346C47.6648 23.9477 49.19 24.5548 50.5763 25.3752C50.6355 25.4102 50.7018 25.3354 50.6591 25.2814C50.6165 25.2276 50.5297 25.2742 50.5504 25.3397C51.0049 26.7744 51.3243 28.2461 51.5126 29.739C51.6038 30.4472 52.5367 31.0619 53.135 30.3931C54.4076 28.9768 54.9197 27.3392 55.1529 25.5049C55.2796 24.5361 55.3151 23.5575 55.5129 22.5986C55.7106 21.6396 56.0199 20.6856 56.3494 19.7561C56.9375 18.1038 57.8248 16.3039 57.8704 14.5336C57.8958 13.5992 57.7285 12.6403 57.7995 11.7059C57.8856 10.5207 55.9844 10.5257 55.8982 11.7059C55.8323 12.6058 55.9844 13.5402 55.9742 14.4451C55.9742 14.5237 55.9742 14.6024 55.9692 14.6811C55.959 14.7942 55.9692 14.7598 55.9894 14.5827C55.9692 14.6909 55.9489 14.7942 55.9235 14.9024C55.8272 15.3597 55.7055 15.8073 55.5686 16.2548C55.2796 17.2039 54.9247 18.1333 54.5901 19.0677C53.9361 20.8921 53.5609 22.6674 53.3631 24.5853C53.2226 25.9484 53.0177 27.308 52.2797 28.4601C52.0704 28.7869 52.1772 29.2483 52.5371 29.3934C52.9326 29.5528 53.3531 29.2286 53.29 28.8069C53.1618 27.9504 53.0018 27.0999 52.7902 26.2573C52.6077 25.5393 52.4759 24.3886 51.8016 23.9509C51.325 23.6411 50.7977 23.3903 50.2907 23.1444C47.6289 21.8609 44.7643 20.9511 41.8389 20.4348C39.7551 20.066 37.6409 19.8742 35.5216 19.8988C33.4023 19.9234 31.3641 20.1987 29.2702 19.9332C26.2433 19.5496 23.3788 18.3595 20.9248 16.6088C20.068 15.999 19.2213 15.2663 18.4709 14.4893C18.2478 14.2582 18.0298 14.0221 17.822 13.7812C17.7561 13.7025 17.5127 13.4025 17.7763 13.7271C17.7561 13.7025 17.7358 13.6779 17.7155 13.6533C17.391 13.2205 16.9246 13.0927 16.4125 13.3238C11.3779 15.6007 7.82379 19.7758 6.20136 24.9099C5.73708 26.3837 5.43443 27.8984 5.2349 29.4256C5.17674 29.8708 5.59116 30.2262 6.0253 30.1115C6.45158 29.999 6.64333 29.4939 6.48594 29.0821C5.94211 27.6589 6.09896 25.908 6.17094 24.4624C6.25713 22.7313 6.38896 20.902 6.83512 19.166C7.66661 15.94 9.42593 13.0337 11.7784 10.624C12.98 9.39459 14.3084 8.28811 15.7331 7.30949C17.2693 6.25219 18.8968 5.21456 20.7423 4.75722C22.3901 4.34905 24.0683 4.52609 25.7161 4.81131C27.7897 5.1703 29.8532 5.57355 31.9573 5.71617C34.0614 5.85878 36.1959 5.73584 38.2543 5.25882C40.1906 4.80791 42.0344 4.03355 43.7715 3.09878C44.0297 2.95988 44.004 2.58574 43.7314 2.47804C43.4524 2.36783 43.1621 2.64326 43.2064 2.93996C43.3425 3.85262 43.0825 4.69849 42.2546 5.34242C41.555 5.88828 42.1938 6.8669 42.9289 6.91608C45.104 7.05869 47.2841 6.93575 49.3984 6.39481C51.2019 5.93335 52.8025 5.27148 54.43 4.59849C54.8739 4.41495 55.0519 3.87928 54.8049 3.46734C54.5637 3.06496 54.0573 3.02283 53.9644 3.48267C53.9057 3.77285 53.8868 4.07611 53.8549 4.29987C53.7333 5.15555 53.642 6.01123 53.5254 6.8669C53.2972 8.54875 52.1514 10.2847 50.6202 11.3027C49.9814 11.7305 50.0017 12.7878 50.8484 12.9894C53.135 13.5304 55.6497 14.1943 57.5257 12.3649C58.3838 11.5277 57.0559 10.2274 56.1936 11.0505C56.1884 11.0556 56.1794 11.0538 56.177 11.0469Z" fill="white" stroke="white"/>
            </svg>
            <span>兒童檢查套餐</span>
          </div>
          <div class="serviceTab-item" :class="{act: actCitiesTab === '102'}" @click="changeCities('102')">
            <svg xmlns="http://www.w3.org/2000/svg" width="65" height="73" viewBox="0 0 65 73" fill="none">
              <path d="M64.3123 38.7382C64.3133 38.7392 64.3151 38.7385 64.315 38.737C64.2341 37.3112 63.8774 35.807 62.752 34.8096C62.0803 34.2146 61.2697 33.8827 60.4054 33.7351C60.1134 33.6852 59.9579 34.0302 60.1693 34.2377C60.3626 34.4274 60.6888 34.3095 60.7132 34.0397C61.3587 26.9115 60.6293 19.3441 56.8957 13.0654C53.8958 8.02284 49.074 4.38471 43.4476 2.55719C37.8212 0.729662 31.1661 0.560447 25.2984 1.97057C19.5628 3.3525 14.4365 6.51118 10.971 11.2323C6.79286 16.9236 5.52851 24.1998 5.75264 31.0812C5.7851 32.078 5.85124 33.0748 5.942 34.0715C5.97068 34.3864 6.33344 34.5456 6.58647 34.3559C6.87654 34.1385 6.75712 33.6876 6.39508 33.6693C5.30286 33.6141 4.19798 33.7562 3.25267 34.3414C1.57453 35.3849 1.07453 37.3027 1.05154 39.1415C1.01131 43.0391 2.56302 47.3428 5.60322 49.9544C7.20665 51.3307 9.21237 52.1824 11.3618 52.0414C11.6472 52.0223 11.8805 51.9281 12.0548 51.7806C12.5144 51.3913 11.8677 50.9256 11.3108 51.1551C10.829 51.3536 10.6005 51.9095 10.8155 52.3842C14.1608 59.7681 19.4163 67.366 27.2581 70.514C30.7006 71.8959 34.5512 72.0764 38.1028 70.9709C41.9304 69.7751 45.2407 67.3271 47.9418 64.4618C51.4073 60.7967 54.0384 56.4198 56.0582 51.8472C56.1017 51.7486 55.9861 51.6574 55.9 51.7223C55.8134 51.7875 55.8711 51.9203 55.9776 51.8995C61.6616 50.7849 64.4835 43.8447 64.3094 38.741C64.2635 37.3817 62.1083 37.376 62.1543 38.741C62.2405 41.2059 61.6428 43.6765 60.3957 45.8199C59.344 47.6305 57.7406 49.3226 55.5969 49.819C55.3153 49.8867 54.9935 49.8867 54.7406 50.0333C54.413 50.2195 54.3038 50.5297 54.1659 50.8512C53.8498 51.5732 53.5165 52.2839 53.1659 52.989C52.551 54.2299 51.8843 55.4539 51.1659 56.6384C49.7809 58.9228 48.1947 61.0944 46.3441 63.0403C43.2982 66.2441 39.3155 69.0644 34.7466 69.5156C30.1777 69.9669 25.9651 68.066 22.5858 65.2176C17.9249 61.2861 14.6663 55.9389 12.287 50.4451C12.0802 49.96 11.379 49.8303 10.9422 50.0108C10.72 50.1033 10.5596 50.2446 10.4544 50.4167C10.2837 50.6962 10.6484 50.8293 10.8498 50.5711C11.047 50.3184 10.8517 49.9397 10.5322 49.9133C7.85008 49.6914 5.84682 47.5482 4.6607 45.2558C3.90209 43.8006 3.41359 42.1648 3.25842 40.5347C3.13773 39.243 3.00554 37.4832 3.9768 36.451C4.35036 36.0562 4.81587 35.8813 5.36759 35.7911C5.48253 35.7741 5.83885 35.7516 6.07448 35.7516C6.21815 35.7516 6.35608 35.7572 6.49976 35.7685C6.56872 35.7685 6.91929 35.8136 6.78711 35.7967C7.40205 35.8869 8.22962 35.5372 8.14917 34.7758C7.41929 27.8267 7.91354 20.3643 11.5572 14.1936C14.287 9.57398 18.6835 6.21788 23.8386 4.56521C29.2179 2.83921 35.2695 2.68128 40.7637 4.00116C46.2579 5.32103 50.7636 8.08488 53.9015 12.4224C57.8268 17.8486 58.9589 24.6567 58.7291 31.1828C58.6888 32.356 58.6026 33.5292 58.4819 34.6968C58.4187 35.2834 59.0279 35.729 59.5624 35.7572C60.1371 35.7854 60.7463 35.8982 61.2233 36.2987C61.9302 36.891 62.1026 37.8724 62.1543 38.7354C62.2289 40.0877 64.3855 40.1004 64.3097 38.7396C64.3096 38.7381 64.3113 38.7372 64.3123 38.7382Z" fill="#00A6CE" stroke="#00A6CE"/>
              <path d="M60.8734 27.5552C60.5745 21.5593 59.0056 15.4902 55.2355 10.6619C52.0171 6.53867 47.477 3.67893 42.4023 2.25188C32.322 -0.590932 19.8508 1.28736 12.621 9.20663C8.02339 14.2492 6.09812 20.9163 5.77054 27.5665C5.74755 28.029 6.12111 28.4633 6.56363 28.5874C13.9716 30.6462 21.8336 30.4375 29.0921 27.8993C33.9599 26.2015 38.4943 23.6068 42.4368 20.3353C42.9515 19.9079 43.469 19.4697 43.9591 19.0079C44.2567 18.7275 44.1193 18.2408 43.7237 18.1379C43.3193 18.0326 42.957 18.4083 43.0926 18.8036C44.3345 22.425 46.5831 25.7481 50.1551 27.4932C52.6091 28.6889 55.4194 29.1289 58.1378 28.8694C58.7872 28.8074 59.4481 28.7284 60.0803 28.5705C61.4251 28.2321 60.8561 26.1902 59.5056 26.5286C59.3849 26.5568 59.2584 26.585 59.1377 26.6076C59.0228 26.6302 58.9079 26.6527 58.7929 26.6696C58.7125 26.6809 58.632 26.6922 58.5515 26.7035C58.3504 26.7373 58.8102 26.6809 58.4711 26.7148C57.4826 26.8163 56.4941 26.8501 55.5056 26.7768C54.8217 26.726 54.5344 26.6866 53.8217 26.5343C53.1091 26.382 52.4367 26.1846 51.7815 25.9138C50.5057 25.3892 49.1609 24.4698 48.1436 23.4038C46.5229 21.706 45.523 19.5457 44.8735 17.3346C44.6552 16.5957 43.6379 16.2742 43.0747 16.8664C41.2184 18.8237 39.1667 20.2902 36.9426 21.7173C31.9369 24.9154 26.2071 27.1322 20.2416 27.7244C16.0547 28.1364 11.8574 27.7668 7.79208 26.7165C7.58124 26.6621 7.41783 26.9071 7.55142 27.079C7.68013 27.2447 7.94695 27.1612 7.96059 26.9518C8.31027 21.5832 9.78354 16.1782 13.167 11.852C16.0808 8.12929 20.2416 5.5685 24.8106 4.28247C34.138 1.65399 45.6379 3.29538 52.3849 10.5773C56.6608 15.1912 58.4136 21.4352 58.7182 27.5496C58.7872 28.9033 60.9423 28.9146 60.8734 27.5496V27.5552Z" fill="#00A6CE" stroke="#00A6CE"/>
              <path d="M27.5467 38.735C27.5122 40.0154 26.495 40.8671 25.2307 40.8727C24.2881 40.8784 23.3456 40.8727 22.4089 40.8727H19.1043C18.0756 40.8727 17.0871 40.5907 16.6503 39.5585C16.2825 38.6899 16.4779 37.4659 16.4894 36.5521C16.5009 35.3056 17.3744 34.2903 18.6905 34.2733C20.6675 34.2508 22.6445 34.2733 24.6215 34.2733C25.7479 34.2733 26.8858 34.4031 27.3858 35.5876C27.5927 36.0783 27.5467 36.6142 27.5467 37.1331V38.7293C27.5467 40.0887 29.7019 40.0943 29.7019 38.7293C29.7019 37.5674 29.8743 36.208 29.4835 35.0912C28.8513 33.2863 27.1674 32.1751 25.2479 32.1582C23.064 32.1412 20.8744 32.113 18.6905 32.1582C16.6446 32.1976 14.7883 33.5739 14.4089 35.5989C14.294 36.2306 14.3227 36.8736 14.3227 37.511C14.3227 38.1484 14.2883 38.7575 14.3802 39.3724C14.6963 41.465 16.5469 42.9372 18.6675 42.9879C19.6503 43.0105 20.6388 42.9879 21.6215 42.9879C22.8571 42.9879 24.087 43.0105 25.3226 42.9879C27.7479 42.9428 29.6329 41.1096 29.7019 38.735C29.7421 37.3756 27.587 37.3756 27.5467 38.735Z" fill="#00A6CE" stroke="#00A6CE"/>
              <path d="M50.535 38.735C50.5005 40.0154 49.4833 40.8671 48.2189 40.8727C47.2764 40.8784 46.3339 40.8727 45.3971 40.8727H42.0926C41.0639 40.8727 40.0754 40.5907 39.6386 39.5585C39.2708 38.6899 39.4662 37.4659 39.4777 36.5521C39.4892 35.3056 40.3627 34.2903 41.6788 34.2733C43.6558 34.2508 45.6328 34.2733 47.6098 34.2733C48.7362 34.2733 49.8741 34.4031 50.3741 35.5876C50.581 36.0783 50.535 36.6142 50.535 37.1331V38.7293C50.535 40.0887 52.6902 40.0943 52.6902 38.7293C52.6902 37.5674 52.8626 36.208 52.4718 35.0912C51.8396 33.2863 50.1557 32.1751 48.2362 32.1582C46.0523 32.1412 43.8627 32.113 41.6788 32.1582C39.6328 32.1976 37.7765 33.5739 37.3972 35.5989C37.2823 36.2306 37.311 36.8736 37.311 37.511C37.311 38.1484 37.2765 38.7575 37.3685 39.3724C37.6846 41.465 39.5351 42.9372 41.6558 42.9879C42.6385 43.0105 43.627 42.9879 44.6098 42.9879C45.8454 42.9879 47.0753 43.0105 48.3109 42.9879C50.7362 42.9428 52.6212 41.1096 52.6902 38.735C52.7304 37.3756 50.5752 37.3756 50.535 38.735Z" fill="#00A6CE" stroke="#00A6CE"/>
              <path d="M28.621 37.4824H38.391C39.7761 37.4824 39.7818 35.3672 38.391 35.3672H28.621C27.236 35.3672 27.2302 37.4824 28.621 37.4824Z" fill="#00A6CE" stroke="#00A6CE"/>
              </svg>
            <span>成人檢查套餐</span>
          </div>
          <!-- 临时注释 -->
          <!-- <div class="serviceTab-item" :class="{act: actCitiesTab === '103'}" @click="changeCities('103')">
            <svg xmlns="http://www.w3.org/2000/svg" width="63" height="56" viewBox="0 0 63 56" fill="none">
              <path d="M31.7796 19.6475C25.1702 19.6475 19.8125 24.8132 19.8125 31.1859C19.8125 37.5586 25.1702 42.7244 31.7796 42.7244C38.3891 42.7244 43.7468 37.5586 43.7468 31.1859C43.7468 24.8132 38.3891 19.6475 31.7796 19.6475ZM31.7796 24.2628C33.684 24.2628 35.5103 24.9922 36.8569 26.2906C38.2034 27.5889 38.9599 29.3498 38.9599 31.1859C38.9599 33.022 38.2034 34.7829 36.8569 36.0813C35.5103 37.3796 33.684 38.109 31.7796 38.109C29.8753 38.109 28.049 37.3796 26.7024 36.0813C25.3558 34.7829 24.5994 33.022 24.5994 31.1859C24.5994 29.3498 25.3558 27.5889 26.7024 26.2906C28.049 24.9922 29.8753 24.2628 31.7796 24.2628Z" fill="#00A6CE"/>
              <path d="M31.7786 6.95508C23.1204 6.95508 15.2879 10.4651 9.12363 16.2551C4.09743 20.9743 0.664062 26.9224 0.664062 30.7243V31.6474C0.664062 35.4493 4.09863 41.3974 9.12363 46.1166C15.2867 51.9066 23.1204 55.4166 31.7786 55.4166C40.4464 55.4166 48.2741 51.9516 54.4109 46.2228C59.4454 41.522 62.8597 35.5878 62.8932 31.667V30.7243C62.8597 26.7839 59.4454 20.8485 54.4109 16.1478C48.2741 10.4189 40.4452 6.95508 31.7786 6.95508ZM31.7786 11.5705C39.1169 11.5705 45.7885 14.522 51.0816 19.4628C55.2797 23.3847 58.0848 28.2608 58.1063 30.7428V31.6485C58.0848 34.1097 55.2797 38.987 51.0816 42.9066C45.7885 47.8485 39.1169 50.8012 31.7786 50.8012C24.4619 50.8012 17.7854 47.8093 12.4637 42.8097C8.27516 38.8762 5.45092 33.9851 5.45092 31.6485V30.7243C5.45092 28.3866 8.27516 23.4943 12.4637 19.5608C17.7854 14.5612 24.4619 11.5705 31.7786 11.5705Z" fill="#00A6CE"/>
              <path d="M31.7785 0C32.3821 0.000106818 32.9634 0.220121 33.4059 0.615966C33.8484 1.01181 34.1195 1.55425 34.1648 2.13461L34.1719 2.30769V9.26192C34.1747 9.86075 33.936 10.4372 33.5061 10.8694C33.0763 11.3016 32.489 11.5559 31.8683 11.5783C31.2477 11.6008 30.6423 11.3898 30.18 10.9898C29.7178 10.5899 29.4349 10.0323 29.3911 9.435L29.3851 9.26192V2.30769C29.3851 1.69565 29.6372 1.10868 30.0861 0.675907C30.535 0.243131 31.1437 0 31.7785 0ZM46.4598 5.08096C46.4598 5.08112 46.46 5.08118 46.4601 5.08104C46.7689 4.56382 47.2736 4.18208 47.8682 4.01598C48.4629 3.84982 49.1013 3.91236 49.6492 4.19047C50.1971 4.46859 50.6119 4.94062 50.8065 5.50741C51.001 6.0742 50.9602 6.69163 50.6926 7.23L50.6052 7.38923L46.9983 13.4112C46.6895 13.9286 46.1847 14.3106 45.5899 14.4767C44.9952 14.6429 44.3568 14.5803 43.8089 14.3022C43.261 14.0241 42.8462 13.5521 42.6516 12.9853C42.457 12.4185 42.4979 11.8011 42.7655 11.2627L42.8529 11.1035L46.4595 5.08088C46.4596 5.08074 46.4598 5.0808 46.4598 5.08096ZM13.8272 4.23692C13.8276 4.23692 13.828 4.23682 13.8283 4.23663C14.3499 3.94669 14.9656 3.8569 15.5528 3.98517C16.1401 4.11349 16.6557 4.45059 16.9967 4.92923L17.0972 5.08154L20.7041 11.1035C21.0102 11.6198 21.0978 12.23 20.9485 12.8071C20.7993 13.3841 20.4248 13.8833 19.9031 14.2005C19.3815 14.5178 18.7529 14.6287 18.1485 14.51C17.5441 14.3913 17.0106 14.0522 16.6592 13.5635L16.5587 13.4112L12.9518 7.38923C12.6343 6.85934 12.5481 6.22957 12.7122 5.63842C12.8762 5.04745 13.2769 4.54347 13.8261 4.23722C13.8264 4.23702 13.8268 4.23692 13.8272 4.23692Z" fill="#00A6CE"/>
            </svg>
            <span>其他檢查套餐</span>
          </div> -->
        </div>
        <el-checkbox-group v-model="ruleForm.checkServe" clearable>
          <el-checkbox
            v-for="serve in actCities"
            :key="serve"
            :value="serve"
            class="serve"
            label="serve"
            >{{ serve.name }}</el-checkbox
          >
        </el-checkbox-group>
      </el-form-item>
      <!-- <el-form-item label="t('pages.content.form.sms')" prop="sms"> -->
      <!-- <textarea  v-model="ruleForm.sms"  placeholder="請輸入詳細內容"></textarea> -->
      <!-- </el-form-item> -->
      <div class="form_textarea">
        <div class="form_textarea_div1">訊息</div>
        <!-- <textarea v-model="ruleForm.sms" placeholder="請輸入詳細內容"></textarea> -->
      </div>
      <textarea
        v-model="ruleForm.sms"
        rows="5"
        placeholder="請輸入詳細內容"
      ></textarea>
      <el-form-item>
        <el-button @click="submitForm(ruleFormRef)"> 遞交 </el-button>
      </el-form-item>
    </el-form>
  </div>
  </div>
</template>

<style scoped lang="scss">
@media screen and (min-width: 768px) {
  .serviceTab{
    display: flex;
    &-item{
      display: flex;
      align-items: center;
      cursor: pointer;
      padding: 10px 30px;
      border-radius: 20px;
      background: #fff;
      transition: all .3s;
      svg{
        path{
          fill: #00A6CE;
          stroke: #00A6CE;
        }
      }
      &>span{
        color: #666;
        font-family: "Noto Sans CJK TC";
        font-size: 28.662px;
        font-style: normal;
        font-weight: 500;
        line-height: 56.073px;
        margin-left: 14px;
      }
      &.act{
        background: #00A6CE;
        svg{
          path{
            fill: #fff;
            stroke: #fff;
          }
        }
        span{
          color: #fff;
        }
      }
      &:not(:last-child){
        margin-right: 34px;
      }
    }
  }
  .formBox{
    background: #EAFBFF;
    box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    border-radius: 20px;
    padding: 30px 36px 88px;
  }
  .title {
    color: var(--Brand-Color, #00A6CE);
    font-family: "Noto Sans HK";
    font-size: 45px;
    font-style: normal;
    font-weight: 700;
    line-height: 60px; /* 133.333% */
    letter-spacing: 2.25px;
    padding-bottom: 28px;
    border-bottom: 1px solid #aaa;
  }

  .Form {
    // background: #fff;
    width: 100%;
    max-width: 1300px;
    box-sizing: border-box;
    border-radius: 7.642px;
    // background: rgba(0, 166, 206, 0.05);
    // box-shadow: 6.114px 6.114px 8px 0px rgba(0, 0, 0, 0.2);

    margin: 0 auto;
    // padding: 30px 60px 30px 60px;
    // margin-bottom: 94px;
    margin-top: 44px;
    position: relative;
    z-index: 9;
  }

  textarea {
    border: 2px solid #cccccc;
    border-radius: 8px;
    width: 75%;
    max-width: 905px;
    min-height: 40px;
    font-family: "Noto Sans CJK TC";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 32px;
    display: flex;
    align-items: center;
    color: #6ebcd2;
    height: 40px;
    padding: 1px 11px;
    max-height: 250px;
  }

  textarea::placeholder {
    color: #00a6ce;
    font-family: "Noto Sans CJK TC";
    font-size: 24.454px;
    font-style: normal;
    font-weight: 500;
    line-height: 48.909px;
  }

  textarea::-webkit-input-placeholder {
    color: #00a6ce;
    font-family: "Noto Sans CJK TC";
    font-size: 24.454px;
    font-style: normal;
    font-weight: 500;
    line-height: 48.909px;
  }

  textarea:focus {
    outline: none;
    box-shadow: 0 0 0 1px #6ebcd2 inset !important;
    border: 1px solid #6ebcd2;
  }

  :deep(.selected) {
    color: #6ebcd2;
  }

  :deep(.el-select .el-input.is-focus .el-input__wrapper) {
    box-shadow: 0 0 0 1px #6ebcd2 inset !important;
  }

  :deep(.el-select .el-input__wrapper.is-focus),
  :deep(.el-select .el-input.is-focus .el-input__wrapper) {
    box-shadow: 0 0 0 1px #6ebcd2 inset !important;
  }

  :deep(.el-select__wrapper) {
    min-height: 43px;
    padding: 2px 24px;
    border: 1px solid #cccccc;
  }
  .form_textarea_div1 {
    margin-bottom: 8px;
    line-height: 22px;
    font-family: "Noto Sans CJK TC";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    color: #00517e;
  }

  .iconHeader {
    position: relative;
    z-index: 99;
    margin: 20px 0;
    margin-bottom: 43px;
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 54px;
    display: flex;
    align-items: center;
    justify-content: center;
    letter-spacing: 0.1em;

    /* 白色 */
    color: #ffffff;
  }

  .iconHeader > div:nth-child(1) {
    position: relative;
    width: 94px;
    height: 54px;
    background: #00a4ce;
    box-sizing: border-box;

    & > span {
      margin-left: 6px;
    }
  }

  .iconHeader > div:nth-child(2) {
    color: #00517e;
    margin-left: 2px;
  }

  :deep(.el-form) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
  }

  :deep(.el-form-item) {
    width: 465px;
  }

  :deep(.el-form > div:nth-child(2n + 1)) {
    margin-right: 78px;
  }

  :deep(.el-form > div:nth-child(6)) {
    width: 100%;
  }

  :deep(.el-form > div:nth-child(7)) {
    width: 505px;
    height: 40px;
    margin-right: 0;
  }

  :deep(.el-form > div:last-child) {
    width: 120px;
    height: 40px;
    margin-right: 0;
    margin-top: 0;
    margin-left: 30px;
  }

  :deep(.el-select) {
    width: 100%;
  }

  :deep(.el-checkbox) {
    width: 425px;
    margin-right: 0;
  }

  :deep(.el-button) {
    width: 120px;
    height: 40px;
    background: #00a4ce;
    border-radius: 5px;
    font-family: "Noto Sans CJK TC";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 32px;
    letter-spacing: 1em;
    color: #ffffff;

    & > span {
      margin-left: 18px;
    }
  }

  :deep(.el-checkbox__label) {
    color: var(--00517-e, #00517e);
    font-family: "Noto Sans CJK TC";
    font-size: 24.454px;
    font-style: normal;
    font-weight: 500;
    line-height: 48.909px;
    padding-left: 24px;
  }

  :deep(.el-checkbox__input.is-checked + .el-checkbox__label) {
    color: #00517e;
  }
  :deep(.el-select__placeholder.is-transparent) {
    color: #00a6ce;
    font-family: "Noto Sans CJK TC";
    font-size: 24.454px;
    font-style: normal;
    font-weight: 500;
    line-height: 48.909px;
  }
  :deep(.el-checkbox__inner) {
    width: 24px;
    height: 24px;
    border-color: #ccc;
    border-radius: 8px;
  }

  :deep(.el-checkbox__input.is-checked .el-checkbox__inner) {
    border-color: #00a4ce;
    background-color: #00a4ce;
  }

  :deep(.el-checkbox__inner::after) {
    box-sizing: content-box;
    content: "";
    border: 2px solid #fff;
    border-left: 0;
    border-top: 0;
    height: 12px;
    left: 7px;
    position: absolute;
    top: 2px;
    transform: rotate(45deg) scaleY(0);
    width: 5px;
    transition: transform 0.15s ease-in 50ms;
    transform-origin: center;
  }

  :deep(.el-form-item__label) {
    font-family: "Noto Sans CJK TC";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 40px;
    color: #00517e;
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
  }

  :deep(
      .el-form-item.is-required:not(.is-no-asterisk).asterisk-right
        > .el-form-item__label:after
    ) {
    color: #00a4ce;
  }

  :deep(.el-checkbox-group > .el-checkbox:nth-child(2n + 1)) {
    margin: 20px 60px 0 0;
  }

  :deep(.el-input__wrapper) {
    width: 302px;
    height: 40px;
    border: 1px solid #cccccc;
    border-radius: 8px;
    padding: 2px 24px;
  }
  :deep(.el-select__selected-item) {
    color: #00a6ce;
    font-family: "Noto Sans CJK TC";
    font-size: 24.454px;
    font-style: normal;
    font-weight: 500;
    line-height: 48.909px;
  }
  :deep(.el-input__inner) {
    color: #00a6ce;
    font-family: "Noto Sans CJK TC";
    font-size: 24.454px;
    font-style: normal;
    font-weight: 500;
    line-height: 48.909px;
    display: flex;
    align-items: center;
  }

  :deep(.el-form-item__content) {
    line-height: 44px;
  }

  :deep(.el-input) {
    input {
      &::placeholder {
        color: #00a6ce;
        font-family: "Noto Sans CJK TC";
        font-size: 24.454px;
        font-style: normal;
        font-weight: 500;
        line-height: 48.909px;
      }

      &::-webkit-input-placeholder {
        color: #00a6ce;
        font-family: "Noto Sans CJK TC";
        font-size: 24.454px;
        font-style: normal;
        font-weight: 500;
        line-height: 48.909px;
      }
    }
  }
}
</style>
<style lang="scss" scoped>
/**********************************************************分割线*******************************************************************************************/
@media screen and (max-width: 767px) {
  .title {
    color: #00a6ce;
    font-family: "Inter";
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    
  }
  .Form {
    margin-top: 27px;
    width: 100%;
    margin-bottom: 48px;
    box-sizing: border-box;
    padding: 19px 20px;
    background: #ffffff;

    border-radius: 4.839px;
    background: rgba(0, 166, 206, 0.05);
    box-shadow: 3.871px 3.871px 3.871px 0px rgba(0, 0, 0, 0.1);
  }

  textarea {
    border: 2px solid #cccccc;
    border-radius: 8px;
    width: 100%;
    max-width: 90%;
    min-height: 80px;
    font-family: "Noto Sans CJK TC";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 32px;
    display: flex;
    align-items: center;
    color: #6ebcd2;
    height: 40px;
    padding: 1px 11px;
    margin-bottom: 18px;
  }

  textarea::placeholder {
    font-family: "Noto Sans CJK TC";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 32px;
    color: #6ebcd2;
  }

  textarea::-webkit-input-placeholder {
    font-family: "Noto Sans CJK TC";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 32px;
    color: #6ebcd2;
  }

  textarea:focus {
    outline: none;
    box-shadow: 0 0 0 1px #6ebcd2 inset !important;
    border: 1px solid #6ebcd2;
  }
  :deep(.el-select__wrapper) {
    min-height: 44px;
  }
  :deep(.el-input__inner) {
    color: var(--Brand-Color, #00a6ce);
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 30.967px;
  }
  :deep(.el-select__placeholder.is-transparent) {
    color: var(--Brand-Color, #00a6ce);
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 30.967px;
  }
  .form_textarea_div1 {
    margin-bottom: 8px;
    line-height: 22px;
    font-family: "Noto Sans CJK TC";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    color: #00517e;
  }

  .iconHeader {
    margin: 20px 0;
    font-family: "Noto Sans CJK TC";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    letter-spacing: 0.1em;

    /* 白色 */
    color: #ffffff;
  }

  .iconHeader > div:nth-child(1) {
    position: relative;
    width: 54px;
    height: 36px;
    background: #00a4ce;
    box-sizing: border-box;
  }

  .iconHeader > div:nth-child(2) {
    color: #00517e;
    margin-left: 2px;
  }

  :deep(.el-button) {
    background: #00a4ce;
    width: 108px;
    height: 43px;

    font-family: "Noto Sans CJK TC";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 32px;
    /* identical to box height, or 200% */

    display: flex;
    align-items: center;
    letter-spacing: 0.5em;

    /* 白色 */

    color: #ffffff;
  }

  /* deep 都是修改element默认样式的穿透 el-form-item__label:after ✳的颜色 el-form-item__label 标题的颜色 el-input__inner input输入框输入的字颜色 el-input__wrapper 边框样式 .el-input)   input   &::placeholder    提示文字的样式  */
  :deep(
      .el-form-item.is-required:not(.is-no-asterisk).asterisk-right
        > .el-form-item__label:after
    ) {
    color: #00a4ce;
  }

  :deep(.el-form-item__label) {
    font-family: "Noto Sans CJK TC";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 40px;
    color: #00517e;
  }

  :deep(.el-input__inner) {
    color: #00a6ce;
    font-family: "Noto Sans CJK TC";
    font-size: 24.454px;
    font-style: normal;
    font-weight: 500;
    line-height: 48.909px;
  }

  :deep(.el-input__wrapper) {
    width: 302px;
    height: 40px;
    border: 1px solid #cccccc;
    border-radius: 8px;
  }

  :deep(.el-textarea__inner) {
    width: 302px;
    height: 90px;
    line-height: 2;
    font-size: 16px;
    border: 1px solid #cccccc;
    font-weight: 500;
    border-radius: 8px;
    color: #6ebcd2;
  }

  :deep(.el-checkbox-group) {
    display: flex;
    flex-direction: column;
  }

  /** 选中选项颜色 */
  :deep(.el-checkbox__input.is-checked + .el-checkbox__label) {
    color: #00517e;
  }

  :deep(.el-checkbox__inner) {
    width: 24px;
    height: 24px;
    border-color: #ccc;
    border-radius: 8px;
    // 00a4ce
  }

  :deep(.el-checkbox__input.is-checked .el-checkbox__inner) {
    border-color: #00a4ce;
    background-color: #00a4ce;
  }

  :deep(.el-checkbox__inner::after) {
    box-sizing: content-box;
    content: "";
    border: 2px solid #fff;
    border-left: 0;
    border-top: 0;
    height: 12px;
    left: 7px;
    position: absolute;
    top: 2px;
    transform: rotate(45deg) scaleY(0);
    width: 5px;
    transition: transform 0.15s ease-in 50ms;
    transform-origin: center;
  }

  :deep(.el-checkbox__label) {
    font-family: "Noto Sans CJK TC";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 32px;
    color: #00517e;
  }

  :deep(.el-input) {
    input {
      &::placeholder {
        font-family: "Noto Sans CJK TC";
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 32px;
        color: #6ebcd2;
      }

      &::-webkit-input-placeholder {
        font-family: "Noto Sans CJK TC";
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 32px;
        color: #6ebcd2;
      }
    }
  }

  :deep(.el-textarea) {
    textarea {
      &::placeholder {
        font-family: "Noto Sans CJK TC";
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 32px;

        color: #6ebcd2;
      }

      &::-webkit-input-placeholder {
        font-family: "Noto Sans CJK TC";
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 32px;

        color: #6ebcd2;
      }
    }
  }
}
</style>
