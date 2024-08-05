<script lang="ts" setup>
import type { ComponentSize, FormInstance, FormRules } from "element-plus";
const props = defineProps({
  detail: {
    type: Object,
    default: () => ({}),
  },
});
interface RuleForm {
  name: string;
  email: string;
  region: string;
  phoneNumber: string;
  address: string;
}

const formSize = ref<ComponentSize>("default");
const ruleFormRef = ref<FormInstance>();
const ruleForm = reactive<RuleForm>({
  name: "",
  email: "",
  region: "",
  phoneNumber: "",
  address: "",
});

const rules = reactive<FormRules<RuleForm>>({
  name: [{ required: true, message: "請輸入姓名", trigger: "blur" }],
  email: [
    { required: true, message: "請輸入電子郵件", trigger: "blur" },
    {
      type: "email",
      message: "請輸入正確的電子郵件",
      trigger: ["blur", "change"],
    },
  ],
  region: [
    {
      required: true,
      message: "請選擇服務",
      trigger: "change",
    },
  ],
  phoneNumber: [{ required: true, message: "請輸入電話號碼", trigger: "blur" }],
  address: [{ required: true, message: "請輸入地址", trigger: "blur" }],
});

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log("submit!");
    } else {
      console.log("error submit!", fields);
    }
  });
};

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.resetFields();
};

// const options = Array.from({ length: 10000 }).map((_, idx) => ({
//   value: `${idx + 1}`,
//   label: `${idx + 1}`,
// }));

const onSubmit = () => {
  console.log("submit!");
};
</script>

<template>
  <div class="brand-detail">
    <div class="detail">
      <div>{{ props.detail.title }}</div>
      <div>
        <div>
          <img
            src="https://static.cmereye.com/imgs/2024/05/9b29523a2013871a.png"
            alt="zeiss"
          />
        </div>
        <div>
          <div>
            <p>{{ props.detail.explain }}</p>
            <p>{{ props.detail.brandTitle }}</p>
          </div>
          <div class="form">
            <el-form
              ref="ruleFormRef"
              :model="ruleForm"
              :rules="rules"
              label-position="top"
              require-asterisk-position="right"
            >
              <el-form-item
                label="姓名"
                prop="name"
              >
                <el-input
                  v-model="ruleForm.name"
                  placeholder="姓名"
                  clearable
                />
              </el-form-item>
              <el-form-item
                label="電郵地址"
                prop="email"
              >
                <el-input
                  v-model="ruleForm.name"
                  placeholder="電郵地址"
                  clearable
                />
              </el-form-item>
              <el-form-item
                label="請選擇服務"
                prop="region"
              >
                <el-select
                  v-model="ruleForm.region"
                  placeholder="請選擇服務"
                  clearable
                >
                  <el-option
                    label="角膜矯形鏡合適性檢查套餐"
                    value="角膜矯形鏡合適性檢查套餐"
                  />
                  <el-option
                    label="近視控制檢查套餐"
                    value="近視控制檢查套餐"
                  />
                  <el-option
                    label="兒童眼睛檢查套餐"
                    value="兒童眼睛檢查套餐"
                  />
                  <el-option
                    label="成人眼睛檢查套餐"
                    value="成人眼睛檢查套餐"
                  />
                  <el-option
                    label="親友眼睛檢查計劃"
                    value="親友眼睛檢查計劃"
                  />
                  <el-option
                    label="隱形眼鏡驗配套餐"
                    value="隱形眼鏡驗配套餐"
                  />
                  <el-option
                    label="青光眼檢查套餐"
                    value="青光眼檢查套餐"
                  />
                  <el-option
                    label="驗配眼鏡"
                    value="驗配眼鏡"
                  />
                  <el-option
                    label="老花隱形眼鏡檢查及試戴套餐"
                    value="老花隱形眼鏡檢查及試戴套餐"
                  />
                  <el-option
                    label="RGP鏡適配性檢查套餐"
                    value="RGP鏡適配性檢查套餐"
                  />
                  <el-option
                    label="其他"
                    value="其他"
                  />
                </el-select>
              </el-form-item>
              <el-form-item
                label="聯絡電話"
                prop="phoneNumber"
              >
                <el-input
                  v-model="ruleForm.phoneNumber"
                  placeholder="請輸入聯絡電話"
                  clearable
                />
              </el-form-item>
              <el-form-item
                label="選擇門診地點"
                prop="address"
              >
                <el-select
                  v-model="ruleForm.address"
                  clearable
                  placeholder="請選擇服務"
                >
                  <el-option
                    label="中環"
                    value="中環"
                  />
                  <el-option
                    label="旺角"
                    value="旺角"
                  />
                  <el-option
                    label="西環"
                    value="西環"
                  />
                  <el-option
                    label="北角"
                    value="北角"
                  />
                  <el-option
                    label="将軍澳"
                    value="将軍澳"
                  />
                  <el-option
                    label="鑽石山"
                    value="鑽石山"
                  />
                  <el-option
                    label="銅鑼灣"
                    value="銅鑼灣"
                  />
                </el-select>
              </el-form-item>
              <el-form-item>
                <el-button
                  type="primary"
                  @click="onSubmit"
                >領取優惠</el-button>
              </el-form-item>
            </el-form>
          </div>
          <div>
            <slot name="terms"></slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@media screen and (min-width: 768px) {
  :deep(.el-select__placeholder),
  :deep(.el-input__inner) {
    color: #00a6ce;
    font-family: "Noto Sans CJK TC";
    font-size: 11.945px;
    font-style: normal;
    font-weight: 500;
    line-height: 23.891px;
  }
  :deep(.el-input__inner::placeholder) {
    color: #00a6ce;
    font-family: "Noto Sans CJK TC";
    font-size: 11.945px;
    font-style: normal;
    font-weight: 500;
    line-height: 23.891px;
  }
  .brand-detail {
    max-width: 960px;
    margin: 0 auto;
  }
  :deep(.el-form) {
    display: grid;
    grid-template-columns: auto auto auto;
    align-items: end;
  }
  :deep(.el-form-item) {
    margin-bottom: 12px;
  }
  :deep(.el-form-item__labe) {
    margin-bottom: 6px;
  }
  :deep(.el-form-item),
  :deep(.el-button),
  :deep(.el-select__wrapper),
  :deep(.el-input__wrapper) {
    width: 170px;
    box-sizing: border-box;
  }
  :deep(.el-button) {
    background: #00a6ce;
    color: #fff;
  }
  :deep(.el-button):hover {
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25);
  }
  :deep(.el-form-item__label) {
    color: var(--00517-e, #00517e);
    font-family: "Noto Sans CJK TC";
    font-size: 13.677px;
    font-style: normal;
    font-weight: 700;
    line-height: 29.864px;
  }
  :deep(.el-form-item__label:after) {
    color: #00517e !important;
  }
  :deep(.el-select__caret) {
    background: url("https://static.cmereye.com/imgs/2024/05/d8fec29fcec9f7be.png")
      no-repeat;
    background-size: 100% 100%;
    background-position: center;
    width: 15px;
    height: 11px;
    & > svg {
      display: none;
    }
  }
  .detail {
    border-radius: 27px;
    border: 2px solid var(--Grey-Deep, #4d4d4d);
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25);
    & > div:nth-child(1) {
      border-radius: 27px 27px 0px 0px;
      background: var(--Brand-2, #59ba68);
      box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25);
      color: var(--White, #fff);
      font-family: "Noto Sans CJK TC";
      font-size: 21px;
      font-style: normal;
      font-weight: 500;
      line-height: 45px;
      padding-left: 27px;
    }
    & > div:nth-child(2) {
      padding: 18px 13px;
      box-sizing: border-box;
      display: flex;
      gap: 0 27px;
      & > div:nth-child(1) {
        width: 266.25px;
        min-width: 266.25px;
        & > img {
          width: 100%;
        }
      }
      & > div:nth-child(2) {
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        & > div:nth-child(1) {
          color: var(--Sales, #db4444);
          font-family: "Noto Sans CJK TC";
          font-size: 18.75px;
          font-style: normal;
          font-weight: 500;
          line-height: 30px;
          text-align: center;
          & > p:nth-child(1) {
            font-size: 22.5px;
            font-weight: 700;
            line-height: 33.75px;
          }
          margin-block: 5px;
        }
        & > div:nth-child(2) {
          padding-right: 80px;
        }
      }
    }
  }
}
@media screen and (max-width: 767px) {
  :deep(.el-select__placeholder),
  :deep(.el-input__inner) {
    color: #00a6ce;
    font-family: "Noto Sans CJK TC";
    font-size: 15.417px;
    font-style: normal;
    font-weight: 500;
    line-height: 30.834px;
  }
  :deep(.el-input__inner::placeholder) {
    color: #00a6ce;
    font-family: "Noto Sans CJK TC";
    font-size: 15.417px;
    font-style: normal;
    font-weight: 500;
    line-height: 30.834px;
  }
  .detail {
    margin: 0 25px;
    border-radius: 30px;
    border: 2px solid var(--Grey-Deep, #4d4d4d);
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25);
    & > div:nth-child(1) {
      border-radius: 30px 30px 0px 0px;
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
      padding: 10px 40px;
      color: var(--White, #fff);
      text-align: center;
      font-family: "Noto Sans HK";
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: 22px; /* 137.5% */
      text-transform: uppercase;
      background: var(--Brand-2, #59ba68);
    }
    & > div:nth-child(2) {
      padding: 17px 4vw 30px 4vw;
      box-sizing: border-box;
      & > div:nth-child(1) {
        & > img {
          width: 100%;
        }
        margin-bottom: 13px;
      }
      & > div:nth-child(2) {
        & > div:nth-child(1) {
          color: var(--Sales, #db4444);
          font-family: "Noto Sans CJK TC";
          font-size: 16px;
          font-style: normal;
          font-weight: 500;
          line-height: 27.666px;
          text-align: center;
          & > p:nth-child(1) {
            font-size: 22px;
            font-weight: 700;
            line-height: 31.124px;
          }
          & > p:nth-child(2) {
            padding: 0 15px;
          }
          margin-bottom: 20px;
        }
      }
    }
  }
  :deep(.el-button),
  :deep(.el-select__wrapper),
  :deep(.el-input__wrapper) {
    // max-width: 295px;
    box-sizing: border-box;
    width: 100%;
  }
  :deep(.el-button) {
    background: #00a6ce;
    color: #fff;
  }
  :deep(.el-button):hover {
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25);
  }
  :deep(.el-form-item__label) {
    color: var(--00517-e, #00517e);
    font-family: "Noto Sans CJK TC";
    font-size: 18.237px;
    font-style: normal;
    font-weight: 700;
    line-height: 39.818px;
  }
  :deep(.el-form-item__label:after) {
    color: #00517e !important;
  }
  :deep(.el-select__caret) {
    background: url("https://static.cmereye.com/imgs/2024/05/d8fec29fcec9f7be.png")
      no-repeat;
    background-size: 100% 100%;
    background-position: center;
    width: 15px;
    height: 11px;
    & > svg {
      display: none;
    }
  }
}
</style>