<script lang="ts" setup>
const props = defineProps({
  tableData: { type: Array, required: true },
  remark: { type: String, required: true },
  headerTitle: { type: String, required: true },
  declare: { type: String, required: true },
});
</script>
<!-- 隱形眼鏡 -->
<template>
  <div class="detail-table">
    <div>
      <div>{{ props.headerTitle }}</div>
      <div>
        {{ props.remark }}
      </div>
    </div>
    <div class="detail-content">
      <div class="detail-header">
        <div v-for="(header, index) in props.tableData[0]" :key="index">
          <div>
            <span v-for="(e, i) in header" :key="i">{{ e }}</span>
          </div>
        </div>
      </div>
      <div class="detail-body">
        <div
          v-for="(rowData, rowIndex) in props.tableData.slice(1)"
          :key="rowIndex"
        >
          <div
            v-for="(cell, cellIndex) in rowData"
            :key="`${rowIndex}-${cellIndex}`"
          >
            <div v-if="Array.isArray(cell)">
              <span v-for="(e, i) in cell" :key="i">
                <span v-if="e == 'child'">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="37"
                    height="38"
                    viewBox="0 0 37 38"
                    fill="none"
                  >
                    <path
                      d="M18.48 0.850098C8.26998 0.850098 0 9.13009 0 19.3301C0 29.5301 8.27998 37.8101 18.48 37.8101C28.68 37.8101 36.96 29.5301 36.96 19.3301C36.96 9.13009 28.68 0.850098 18.48 0.850098ZM29.08 14.5401L17.1299 26.5001C16.5799 27.0501 15.74 27.1401 15.1 26.7601C14.98 26.6901 14.87 26.6001 14.77 26.5001L7.88995 19.6201C7.23995 18.9701 7.23995 17.9101 7.88995 17.2501C8.53995 16.6001 9.59995 16.6001 10.2599 17.2501L15.96 22.9501L26.73 12.1801C27.38 11.5301 28.44 11.5301 29.1 12.1801C29.75 12.8301 29.75 13.8901 29.1 14.5501L29.08 14.5401Z"
                      fill="#59BA68"
                    />
                  </svg>
                </span>
                <span v-else class="child-e">{{ e }}</span>
              </span>
            </div>
            <div v-else-if="cell == 'child'">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="37"
                height="38"
                viewBox="0 0 37 38"
                fill="none"
              >
                <path
                  d="M18.48 0.850098C8.26998 0.850098 0 9.13009 0 19.3301C0 29.5301 8.27998 37.8101 18.48 37.8101C28.68 37.8101 36.96 29.5301 36.96 19.3301C36.96 9.13009 28.68 0.850098 18.48 0.850098ZM29.08 14.5401L17.1299 26.5001C16.5799 27.0501 15.74 27.1401 15.1 26.7601C14.98 26.6901 14.87 26.6001 14.77 26.5001L7.88995 19.6201C7.23995 18.9701 7.23995 17.9101 7.88995 17.2501C8.53995 16.6001 9.59995 16.6001 10.2599 17.2501L15.96 22.9501L26.73 12.1801C27.38 11.5301 28.44 11.5301 29.1 12.1801C29.75 12.8301 29.75 13.8901 29.1 14.5501L29.08 14.5401Z"
                  fill="#59BA68"
                />
              </svg>
            </div>
            <div v-else-if="cell == 'adult'">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="37"
                height="38"
                viewBox="0 0 37 38"
                fill="none"
              >
                <path
                  d="M18.48 0.850098C8.26998 0.850098 0 9.13009 0 19.3301C0 29.5301 8.27998 37.8101 18.48 37.8101C28.68 37.8101 36.96 29.5301 36.96 19.3301C36.96 9.13009 28.68 0.850098 18.48 0.850098ZM29.08 14.5401L17.13 26.5001C16.58 27.0501 15.74 27.1401 15.1 26.7601C14.98 26.6901 14.87 26.6001 14.77 26.5001L7.89001 19.6201C7.24001 18.9701 7.24001 17.9101 7.89001 17.2501C8.54001 16.6001 9.60001 16.6001 10.26 17.2501L15.96 22.9501L26.73 12.1801C27.38 11.5301 28.44 11.5301 29.1 12.1801C29.75 12.8301 29.75 13.8901 29.1 14.5501L29.08 14.5401Z"
                  fill="#00A6CE"
                />
              </svg>
            </div>
            <div v-else-if="cell == 'friends'">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="37"
                height="38"
                viewBox="0 0 37 38"
                fill="none"
              >
                <path
                  d="M18.48 0.850098C8.26998 0.850098 0 9.13009 0 19.3301C0 29.5301 8.27998 37.8101 18.48 37.8101C28.68 37.8101 36.96 29.5301 36.96 19.3301C36.96 9.13009 28.68 0.850098 18.48 0.850098ZM29.08 14.5401L17.13 26.5001C16.58 27.0501 15.74 27.1401 15.1 26.7601C14.98 26.6901 14.87 26.6001 14.77 26.5001L7.89001 19.6201C7.24001 18.9701 7.24001 17.9101 7.89001 17.2501C8.54001 16.6001 9.60001 16.6001 10.26 17.2501L15.96 22.9501L26.73 12.1801C27.38 11.5301 28.44 11.5301 29.1 12.1801C29.75 12.8301 29.75 13.8901 29.1 14.5501L29.08 14.5401Z"
                  fill="#F5984B"
                />
              </svg>
            </div>
            <div v-else>
              <span>{{ cell }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="detail-declare">
      <span>{{ declare }}</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@media screen and (min-width: 768px) {
  .detail-table {
    max-width: 960px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    margin-bottom: 80px;
    & > div:nth-child(1) {
      & > div:nth-child(1) {
        color: var(--Brand-Color, #00a6ce);
        font-family: "Inter";
        font-size: 27px;
        font-style: normal;
        font-weight: 600;
        line-height: 22.5px;
        text-transform: uppercase;
        margin-bottom: 13px;
      }
      & > div:nth-child(2) {
        color: #60605f;
        font-family: "Inter";
        // font-size: 22px;
        font-style: normal;
        font-weight: 400;
        // line-height: 30px; /* 136.364% */
        text-transform: uppercase;
        // margin-bottom: 30px;
      }
    }
  }
  .detail-content {
    display: flex;
    flex-direction: column;
  }
  .detail-header {
    display: flex;
    & > div {
      display: flex;
      flex-direction: column;
      background: yellowgreen;
      border-radius: 30px 30px 0 0;
      width: calc((100% - 297px) / 3);
      display: flex;
      justify-content: center;
      align-items: center;
    }
    & > div:nth-child(1) {
      width: 297px;
      background: #00517e;
      min-height: 130px;
      color: #fff;
      font-family: "Inter";
      font-size: 22.5px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      border-radius: 30px 30px 0 0;
    }
    & > div:nth-child(2) {
      background: #e6fce9;
      color: #59ba68;
      font-family: "Inter";
      font-style: normal;
      line-height: normal;
      & > div {
        display: flex;
        flex-direction: column;
        & > span:nth-child(1) {
          font-size: 21px;
          font-weight: 600;
        }
      }
    }
    & > div:nth-child(3) {
      background: #e6fce9;
      color: #00a6ce;
      font-family: "Inter";
      font-style: normal;
      line-height: normal;
      & > div {
        display: flex;
        flex-direction: column;
        & > span {
          font-size: 21px;
          font-weight: 600;
          text-align: center;
        }
      }
      background: #d1f0f3;
    }
    & > div:nth-child(4) {
      background: #e6fce9;
      color: #f5984b;
      font-family: "Inter";
      font-style: normal;
      line-height: normal;
      & > div {
        display: flex;
        flex-direction: column;
        & > span {
          font-size: 21px;
          font-weight: 600;
          text-align: center;
        }
      }
      background: #fbf1e8;
    }
  }
  .detail-body {
    & > div {
      display: flex;
      & > div {
        width: calc((100% - 297px) / 3);
        text-align: center;
        padding: 45px 0;
        // border-top: 2px solid #8FB3C6;
        & > div {
          color: #fff;
          font-family: "Inter";
          font-size: 22.5px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
          display: flex;
          justify-content: center;
          flex-direction: column;
          align-items: center;
          gap: 5px 0;
        }
      }
      & > div:nth-child(1) {
        border-top: 2px solid #8fb3c6;
        background: #00517e;
        width: 297px;
        display: flex;
        align-items: center;
        justify-content: center;
        // border-top: 2px solid #307296;
      }
      & > div:nth-child(2) {
        background: #e6fce9;
        border-top: 2px solid #59ba68;
      }
      & > div:nth-child(3) {
        background: #d1f0f3;
        border-top: 2px solid #21aaca;
      }
      & > div:nth-child(4) {
        background: #fbf1e8;
        border-top: 2px solid #f5984b;
      }
    }

    & > div:nth-child(1),
    & > div:nth-child(2) {
      & > div:nth-child(2) {
        .child-e {
          color: #59ba68;
          font-family: "Inter";
          font-size: 18px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
        }
      }
    }

    & > div:nth-child(2),
    & > div:nth-child(4),
    & > div:nth-child(6),
    & > div:nth-child(8),
    & > div:nth-child(10) {
      & > div:nth-child(1) {
        background: #4a83a3;
        border-top: 2px solid #8fb3c6;
        border-bottom: 2px solid #8fb3c6;
      }
      & > div:nth-child(2) {
        background: #cef2d4;
        border-top: 2px solid #59ba68;
        border-bottom: 2px solid #59ba68;
      }
      & > div:nth-child(3) {
        background: #e1f3f7;
        border-top: 2px solid #21aaca;
        border-bottom: 2px solid #21aaca;
      }
      & > div:nth-child(4) {
        background: #fbe9db;
        border-top: 2px solid #f5984b;
        border-bottom: 2px solid #f5984b;
      }
    }

    & > div:last-child {
      & > div:nth-child(1) {
        background: #00517e;
      }
      & > div:nth-child(2) {
        background: #59ba68;
        display: flex;
        flex-direction: column;
        & > div {
          display: flex;
          flex-direction: row;
          & > span:nth-child(2) {
            border-left: 1px solid #fff;
          }
          & > span::before {
            color: #fff;
            font-family: "Inter";
            font-size: 18px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
          }
          & > span:nth-child(1)::before {
            content: "12歲以下";
          }
          & > span:nth-child(2)::before {
            content: "12歲以上";
          }
        }
      }
      & > div:nth-child(3) {
        background: #00a6ce;
        display: flex;
        justify-content: center;
      }
      & > div:nth-child(4) {
        display: flex;
        justify-content: center;
        background: #f5984b;
      }
      & > div {
        border-radius: 0 0 30px 30px;
      }
    }
  }
  .detail-declare {
    margin-top: 24px;
    color: #60605f;
    font-family: "Inter";
    font-size: 13.5px;
    font-style: normal;
    font-weight: 400;
    line-height: 22.5px; /* 166.667% */
    text-transform: uppercase;
  }
}
@media screen and (max-width: 767px) {
  .detail-table {
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
    & > div:nth-child(1) {
      & > div:nth-child(1) {
        color: var(--Brand-Color, #00a6ce);
        font-family: "Inter";
        font-size: 20px;
        font-style: normal;
        font-weight: 600;
        line-height: 17.241px; /* 83.333% */
        text-transform: uppercase;
        margin-bottom: 13px;
      }
      & > div:nth-child(2) {
        color: #60605f;

        font-family: "Inter";
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 20px; /* 136.364% */
        text-transform: uppercase;
        margin-bottom: 20px;
      }
    }
  }
  .detail-content {
    display: flex;
    flex-direction: column;
  }
  .detail-header {
    display: flex;
    & > div {
      border-radius: 15px 15px 0 0;
      width: calc((100% - 103px) / 3);
      display: flex;
      justify-content: center;
      align-items: center;
      box-sizing: border-box;
      padding: 5px 10px;
    }
    & > div:nth-child(1) {
      width: 103px;
      background: #00517e;
      min-height: 65px;

      color: #fff;

      font-family: "Inter";
      font-size: 14px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      border-radius: 15px 15px 0 0;
    }
    & > div:nth-child(2) {
      background: #e6fce9;
      color: #59ba68;
      font-family: "Inter";
      font-style: normal;
      line-height: normal;
      text-align: center;
      box-sizing: border-box;
      text-align: center;
      span {
        font-size: 12px;
        font-weight: 600;
      }
    }
    & > div:nth-child(3) {
      background: #e6fce9;
      color: #00a6ce;
      font-family: "Inter";
      font-style: normal;
      line-height: normal;
      text-align: center;
      box-sizing: border-box;
      span {
        font-size: 11px;
        font-weight: 600;
      }
      background: #d1f0f3;
    }
    & > div:nth-child(4) {
      background: #e6fce9;
      color: #f5984b;
      font-family: "Inter";
      font-style: normal;
      line-height: normal;
      text-align: center;
      box-sizing: border-box;
      span {
        font-size: 12px;
        font-weight: 600;
      }
      background: #fbf1e8;
    }
  }
  .detail-body {
    & > div {
      display: flex;

      & > div {
        width: calc((100% - 103px) / 3);
        text-align: center;
        padding: 10px 0;
        box-sizing: border-box;
        // border-top: 2px solid #8FB3C6;
        & > div {
          color: #fff;
          font-family: "Inter";
          font-size: 11px;
          font-style: normal;
          font-weight: 600;
          line-height: normal;
          flex-direction: column;
          padding: 10px 8px;
        }
      }
      & > div:nth-child(1) {
        border-top: 1px solid #8fb3c6;
        background: #00517e;
        width: 103px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      & > div:nth-child(2) {
        border-top: 1px solid #59ba68;
        background: #e6fce9;
        & > div {
          span {
            color: #59ba68;
            font-family: "Inter";
            font-size: 12px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            & > svg {
              width: 20px;
              height: 20px;
            }
          }
          & > span:nth-child(2) {
            margin-top: 5px;
          }
        }
      }
      & > div:nth-child(3) {
        border-top: 1px solid #21aaca;
        background: #d1f0f3;
      }
      & > div:nth-child(4) {
        border-top: 1px solid #f5984b;
        background: #fbf1e8;
      }
    }

    & > div:nth-child(2),
    & > div:nth-child(4),& > div:nth-child(8),& > div:nth-child(10) {
      & > div:nth-child(1) {
        background: #4a83a3;
        border-top: 1px solid #8fb3c6;
        border-bottom: 1px solid #8fb3c6;
      }
      & > div:nth-child(2) {
        background: #cef2d4;
        border-top: 1px solid #59ba68;
        border-bottom: 1px solid #59ba68;
      }
      & > div:nth-child(3) {
        background: #e1f3f7;
        border-top: 1px solid #21aaca;
        border-bottom: 1px solid #21aaca;
      }
      & > div:nth-child(4) {
        background: #fbe9db;
        border-top: 1px solid #f5984b;
        border-bottom: 1px solid #f5984b;
      }
    }

    & > div {
      & > div:nth-child(n + 2) {
        display: flex;
        justify-content: center;
        align-items: center;
        & > div:nth-child(1) {
          display: flex;
          justify-content: center;
          align-items: center;
          & > svg {
            width: 20px;
            height: 20px;
          }
        }
      }
    }

    & > div:last-child {
      & > div:nth-child(1) {
        background: #00517e;
      }
      & > div:nth-child(2) {
        background: #59ba68;
        display: flex;
        flex-direction: column;
        & > div {
          padding: 0 8px;
          display: flex;
          flex-direction: column;
          & > span:nth-child(2) {
            border-top: 1px solid #fff;
          }
          & > span::before {
            color: #fff;
            font-family: "Inter";
            font-size: 10px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
          }
          & > span:nth-child(1)::before {
            content: "12歲以下";
          }
          & > span:nth-child(2)::before {
            content: "12歲以上";
          }
          span {
            color: #fff;
            font-family: "Inter";
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
          }
        }
      }
      & > div:nth-child(3) {
        background: #00a6ce;
      }
      & > div:nth-child(4) {
        background: #f5984b;
      }
      & > div {
        border-radius: 0 0 15px 15px;
      }
    }
  }
  .detail-declare {
    margin-top: 8px;

    color: #60605f;
    font-family: "Inter";
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 30px; /* 214.286% */
    text-transform: uppercase;
  }
}
</style>