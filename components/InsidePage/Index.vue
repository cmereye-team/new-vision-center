<script lang="ts" setup>
const props = defineProps({
  content: { type: String, default: () => {} },
});
</script>

<template>
  <div class="Index" v-html="props.content"></div>
</template>

<style lang="scss" scoped>
@media screen and (min-width: 768px) {
  .Index {
    padding: 0 100px;
  }
  :deep(table) {
    max-width: 830px;
    margin: 0 auto;
    td {
      border-radius: 20px;
      padding: 16px 15px;
      p {
        span {
          color: #60605f;
          font-family: "Noto Sans HK";
          font-size: 16.5px;
          font-style: normal;
          font-weight: 300;
          line-height: 30px;
          text-transform: uppercase;
        }
      }
    }
  }
  :deep(.head-title) {
    display: flex;
    flex-direction: column;
  }
  :deep(.p1) {
    margin-top: 20px;
  }
  :deep(P) {
    color: #60605f;
    font-family: "Noto Sans HK";
    font-size: 16.5px;
    font-style: normal;
    font-weight: 300;
    text-transform: uppercase;
    margin-bottom: 10px;
    line-height: 32px;
  }
  :deep(.title1) {
    color: #00a6ce;
    font-family: "Noto Sans HK";
    font-size: 36px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-bottom: 20px;
  }
  :deep(img) {
    max-width: 830px;
    transform: translateX(-30px);
    margin: 0 auto;
  }
  :deep(#table1) {
    border-radius: 15px;
    border-collapse: collapse; /* 设置表格使用合并边框模型 */
    border-spacing: 0; /* 设置单元格之间没有间距 */
    tr:nth-child(even) {
      background-color: #fcfcfc;
    }
    td {
      padding: 16px 25px 16px 20px;
      border-radius: 0;
      border: 1px solid #e7e7e7;
    }
  }
  :deep(#table2) {
    border: 1px solid #e7e7e7;
    border-radius: 15px;
    border-collapse: collapse; /* 设置表格使用合并边框模型 */
    border-spacing: 0; /* 设置单元格之间没有间距 */
    tr:nth-child(even) {
      background-color: #fcfcfc;
    }
    td {
      padding: 16px 30px 16px 30px;
    }
  }
  :deep(#table3) {
    border: 1px solid #e7e7e7;
    border-radius: 15px;
    border-collapse: collapse; /* 设置表格使用合并边框模型 */
    border-spacing: 0; /* 设置单元格之间没有间距 */
    tr:nth-child(even) {
      background-color: #fcfcfc;
    }
    td {
      padding: 16px 30px 16px 30px;
    }
  }
}
@media screen and (max-width: 767px) {
  .Index {
    width: 100%;
    overflow: hidden;
  }
  :deep(.p1) {
    margin-top: 20px;
  }
  :deep(.head-title) {
    display: flex;
    flex-direction: column;
  }
  :deep(P) {
    color: #60605f;
    font-family: "Noto Sans HK";
    font-size: 14px !important;
    font-style: normal;
    font-weight: 300;
    line-height: 18px; /* 181.818% */
    text-transform: uppercase;
    margin-bottom: 10px;
    span {
      font-size: 18px !important;
      line-height: 1.4 !important;
    }
  }
  :deep(.title1) {
    color: #00a6ce;
    font-family: "Noto Sans HK";
    font-size: 36px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-bottom: 20px;
  }
  :deep(img) {
    max-width: 100%;
    margin: 0 auto;
  }
  :deep(#table1) {
    border-radius: 15px;
    border-collapse: collapse; /* 设置表格使用合并边框模型 */
    border-spacing: 0; /* 设置单元格之间没有间距 */
    tr:nth-child(even) {
      background-color: #fcfcfc;
    }
    td {
      padding: 10px 5px 10px 5px;
      border-radius: 0;
      border: 1px solid #e7e7e7;
    }
    tr {
      & > td:nth-child(1) {
        max-width: 100px;
        font-size: 14px;
      }
      & > td:nth-child(2) {
        max-width: 120px;
        P {
          font-size: 12px;
        }
      }
      & > td:nth-child(3) {
        max-width: 100px;
        ul {
          margin-left: 20px !important;
        }
        p {
          font-size: 10px;
          position: relative;
          left: -8px;
        }
      }
    }
  }
  :deep(#table2) {
    border: 1px solid #e7e7e7;
    border-radius: 15px;
    border-collapse: collapse; /* 设置表格使用合并边框模型 */
    border-spacing: 0; /* 设置单元格之间没有间距 */
    tr:nth-child(even) {
      background-color: #fcfcfc;
    }
    td {
      padding: 16px 15px 16px 10px;
    }
    tr {
      & > td:nth-child(1) {
        width: 60px;
      }
    }
  }
  :deep(#table3) {
    border: 1px solid #e7e7e7;
    border-radius: 15px;
    border-collapse: collapse; /* 设置表格使用合并边框模型 */
    border-spacing: 0; /* 设置单元格之间没有间距 */
    tr:nth-child(even) {
      background-color: #fcfcfc;
    }
    td {
      padding: 16px 10px 16px 10px;
    }
    tr {
      & > td:nth-child(1) {
        width: 60px;
      }
    }
  }
}
</style>