<script lang="ts" setup>
import { reactive, ref } from "vue";
import type { FormInstance, FormRules } from "element-plus";
import { number } from "@intlify/core-base";
const formSize = ref("default");
const cities = [
  "角膜矯形鏡合適性檢查套餐",
  "青光眼檢查套餐",
  "兒童眼睛檢查套餐",
  "驗配眼鏡",
  "成人眼睛檢查套餐",
  "老花隱形眼鏡檢查及試戴套餐",
  "親友眼睛檢查計劃",
  "RGP鏡適配性檢查套餐",
  "隱形眼鏡驗配套餐",
  "其他",
];
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
      resetForm(formEl);
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
</script>
<template>
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
        <el-checkbox-group v-model="ruleForm.checkServe" clearable>
          <el-checkbox
            v-for="serve in cities"
            :key="serve"
            :value="serve"
            class="serve"
            label="serve"
            >{{ serve }}</el-checkbox
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
</template>

<style scoped lang="scss">
@media screen and (min-width: 768px) {
  .title {
    margin-bottom: 30px;
    color: #00a6ce;
    font-family: "Inter";
    font-size: 50px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  .Form {
    background: #fff;
    width: 100%;
    max-width: 1300px;
    box-sizing: border-box;
    border-radius: 7.642px;
    background: rgba(0, 166, 206, 0.05);
    box-shadow: 6.114px 6.114px 8px 0px rgba(0, 0, 0, 0.2);

    margin: 0 auto;
    padding: 30px 60px 30px 60px;
    margin-bottom: 94px;
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
    width: 915px;
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
