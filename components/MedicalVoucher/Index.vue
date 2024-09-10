<script lang="ts" setup>
const serverList = ref({
  left: [
    ["問診及查詢病歷"],
    ["視力及屈光度數檢查", "(近視/遠視/散光/老花)"],
    ["青光眼篩查﹙眼壓﹚"],
    ["雙眼協調及斜視檢查"],
  ],
  right: [["色弱／色盲檢查"], ["立體視覺檢查"], ["綜合視力評估及建議"]],
});
</script>

<template>
  <div class="medical-voucher-mb">
    <div class="medical-voucher-title">長者醫療券計劃</div>
    <div class="medical-voucher">
      <div class="medical-voucher-header">
        <div>
          <div>
            <img
              src="https://statichk.cmermedical.com/vision/imgs/0e1161350e2c3b86.png"
              alt="長者醫療券計劃"
            />
          </div>
          <div>
            <div>
              「希瑪視光」是長者醫療券計劃的服務提供者*，可為年滿65歲或以上並持有有效香港身份證長者提供「長者眼睛檢查服務」。為了長者能夠得到悉心的護眼服務，我們的專業團隊會按照個人的實際情況及需要，提供合適的視光檢查服務，相關費用會從長者「醫健通」戶口的醫療券金額扣除。
            </div>
            <div>
              <a
                href="https://api.whatsapp.com/send?phone=85269180511&text=%E4%BD%A0%E5%A5%BD,%E6%88%91%E6%83%B3%E6%9F%A5%E8%A9%A2"
                target="_blank"
              >
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                  >
                    <path
                      d="M14.8395 27.8206C22.1086 27.8206 28.0013 21.9279 28.0013 14.6589C28.0013 7.3898 22.1086 1.49707 14.8395 1.49707C7.57046 1.49707 1.67773 7.3898 1.67773 14.6589C1.67773 21.9279 7.57046 27.8206 14.8395 27.8206Z"
                      stroke="white"
                      stroke-width="2.5"
                    />
                    <path
                      d="M14.1816 8.07617H14.8397"
                      stroke="white"
                      stroke-width="2.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M12.209 13.3408H14.8413V19.9217"
                      stroke="white"
                      stroke-width="2.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12.209 19.9229H17.4737"
                      stroke="white"
                      stroke-width="2.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <div>了解更多</div>
              </a>
              <div>
                <img
                  src="https://statichk.cmermedical.com/vision/imgs/be467896e40580eb.png"
                  alt="長者醫療券計劃"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
    <div class="medical-voucher-content">
      <div>長者眼睛檢查服務如下︰</div>
      <div>
        <div>
          <div v-for="(item, index) in serverList.left" :key="index">
            <div>
              <span v-for="(item2, index2) in item" :key="index2">{{
                item2
              }}</span>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="37"
                height="37"
                viewBox="0 0 37 37"
                fill="none"
              >
                <path
                  d="M18.48 0C8.26998 0 0 8.28 0 18.48C0 28.68 8.27998 36.96 18.48 36.96C28.68 36.96 36.96 28.68 36.96 18.48C36.96 8.28 28.68 0 18.48 0ZM29.08 13.69L17.13 25.65C16.58 26.2 15.74 26.29 15.1 25.91C14.98 25.84 14.87 25.75 14.77 25.65L7.89001 18.77C7.24001 18.12 7.24001 17.06 7.89001 16.4C8.54001 15.75 9.60001 15.75 10.26 16.4L15.96 22.1L26.73 11.33C27.38 10.68 28.44 10.68 29.1 11.33C29.75 11.98 29.75 13.04 29.1 13.7L29.08 13.69Z"
                  fill="#00A6CE"
                />
              </svg>
            </div>
          </div>
        </div>
        <div>
          <div v-for="(item, index) in serverList.right" :key="index">
            <div>
              <span v-for="(item2, index2) in item" :key="index2">{{
                item2
              }}</span>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="37"
                height="37"
                viewBox="0 0 37 37"
                fill="none"
              >
                <path
                  d="M18.48 0C8.26998 0 0 8.28 0 18.48C0 28.68 8.27998 36.96 18.48 36.96C28.68 36.96 36.96 28.68 36.96 18.48C36.96 8.28 28.68 0 18.48 0ZM29.08 13.69L17.13 25.65C16.58 26.2 15.74 26.29 15.1 25.91C14.98 25.84 14.87 25.75 14.77 25.65L7.89001 18.77C7.24001 18.12 7.24001 17.06 7.89001 16.4C8.54001 15.75 9.60001 15.75 10.26 16.4L15.96 22.1L26.73 11.33C27.38 10.68 28.44 10.68 29.1 11.33C29.75 11.98 29.75 13.04 29.1 13.7L29.08 13.69Z"
                  fill="#00A6CE"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="medical-voucher-notice">
      <div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="112"
            height="100"
            viewBox="0 0 112 100"
            fill="none"
          >
            <g clip-path="url(#clip0_61_26162)">
              <path
                d="M61.2267 98.324C57.4933 100.559 53.76 100.559 50.0267 98.324L24.64 75.9777H11.2C5.22667 75.9777 0 70.7635 0 64.8045V35.0093C0 29.0503 5.22667 23.8361 11.2 23.8361H24.64L50.0267 1.48975C51.52 0.744873 53.76 0 56 0C58.24 0 59.7333 0.744873 61.2267 1.48975C64.96 3.72439 67.2 7.44878 67.2 11.1732V88.6406C67.2 93.1099 64.96 96.8343 61.2267 98.324ZM7.46667 35.0093V64.8045C7.46667 67.0391 8.96 68.5289 11.2 68.5289H22.4V31.2849H11.2C8.96 31.2849 7.46667 32.7747 7.46667 35.0093ZM59.7333 11.1732C59.7333 8.93855 58.24 8.19366 57.4933 8.19366C56.7467 8.19366 55.2533 7.44879 54.5067 8.19366L29.8667 29.0503V70.7635L54.5067 92.365C56 93.1099 57.4933 92.365 58.24 92.365C58.24 91.6201 59.7333 90.8752 59.7333 88.6406V11.1732Z"
                fill="#00A6CE"
              />
              <path
                d="M85.8659 75.9772C86.6125 75.9772 88.1059 75.9772 88.8525 76.7221L103.786 91.6197C105.279 93.1095 105.279 95.3441 103.786 96.8339C102.293 98.3236 100.053 98.3236 98.5592 96.8339L83.6259 81.9363C82.1325 80.4465 82.1325 78.2119 83.6259 76.7221C83.6259 75.9772 85.1192 75.9772 85.8659 75.9772Z"
                fill="#59BA68"
              />
              <path
                d="M108.266 53.6309H85.8661C83.6261 53.6309 82.1328 52.1411 82.1328 49.9065C82.1328 47.6718 83.6261 46.1821 85.8661 46.1821H108.266C110.506 46.1821 111.999 47.6718 111.999 49.9065C111.999 52.1411 110.506 53.6309 108.266 53.6309Z"
                fill="#59BA68"
              />
              <path
                d="M88.8525 23.0917C87.3592 24.5814 85.1192 24.5814 83.6259 23.0917C82.1325 21.6019 82.1325 19.3673 83.6259 17.8775L98.5592 2.97993C99.3059 2.23506 100.053 2.23506 101.546 2.23506C103.039 2.23506 103.786 2.23506 104.533 2.97993C106.026 4.46969 106.026 6.70433 104.533 8.19409L88.8525 23.0917Z"
                fill="#59BA68"
              />
            </g>
            <defs>
              <clipPath id="clip0_61_26162">
                <rect
                  width="112"
                  height="100"
                  fill="white"
                  transform="matrix(1 0 0 -1 0 100)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div>
          檢查後，若視光師認為客人需要配眼鏡／更新眼鏡度數以矯正視力，會建議為客人驗配眼鏡，所需費用亦會從醫療券直接扣除。如視光師認為客人有需要進一步檢查或治療，將會轉介予希瑪眼科專科醫生跟進。
        </div>
      </div>
      <div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="43"
            height="58"
            viewBox="0 0 43 58"
            fill="none"
          >
            <path
              d="M19.2546 56.0723C3.01447 32.5289 0 30.1126 0 21.4601C0 9.60797 9.60797 0 21.4601 0C33.3122 0 42.9202 9.60797 42.9202 21.4601C42.9202 30.1126 39.9057 32.5289 23.6656 56.0723C22.5998 57.6118 20.3202 57.6117 19.2546 56.0723ZM21.4601 30.4018C26.3985 30.4018 30.4018 26.3985 30.4018 21.4601C30.4018 16.5217 26.3985 12.5184 21.4601 12.5184C16.5217 12.5184 12.5184 16.5217 12.5184 21.4601C12.5184 26.3985 16.5217 30.4018 21.4601 30.4018Z"
              fill="#00A6CE"
            />
          </svg>
        </div>
        <div>
          接受醫療券分店︰旺角、西環、北角、鑽石山、將軍澳，如有查詢請聯絡我們的客戶服務員。
        </div>
      </div>
    </div>
    <div class="medical-voucher-background">
      <div>長者醫療券計劃背景</div>
      <div>
        <p>
          為了減輕長者和其家人的醫療負擔，長者只要年滿65歲並持有有效香港身份證， 毋須預先登記或預先領取醫療券，即可享用醫療券服務。2019年6月起，醫療券每年新增金額維持$2,000，累積總額提升至$8,000。
        </p>
        <p>
          醫療券除了適用於私營醫療和護理服務外，亦適用於視光服務。2019年6月26日起，每名合資格長者可使用醫療券支付視光服務的配額為每2年$2,000。
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@media screen and (min-width: 768px) {
  .medical-voucher {
    border-radius: 20px;
    background: #f5fafd;
    padding-bottom: 45px;
    padding-top: 24px;
    position: relative;
    margin-top: 140px;
    min-height: 340px;
  }
  .medical-voucher-title {
    color: var(--Brand-Color, #00a6ce);
    font-family: "Inter";
    font-size: 50px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    max-width: 960px;
    margin: 0 auto;
  }

  .medical-voucher-header {
    max-width: 960px;
    margin: 0 auto;
    & > div {
      display: flex;
      position: relative;
      align-items: flex-end;
      & > div:nth-child(1) {
        flex: 3.4;
        margin-right: 80px;
        & > img {
          position: absolute;
          bottom: 0;
          border-radius: 25px;
        }
      }
      & > div:nth-child(2) {
        flex: 6;
        & > div:nth-child(1) {
          color: #60605f;
          text-align: justify;
          font-family: Inter;
          font-size: 18px;
          font-style: normal;
          font-weight: 400;
          line-height: 37.5px;
        }
        & > div:nth-child(2) {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          & > a {
            display: flex;
            align-items: center;
            & > div:nth-child(2) {
              position: relative;
              z-index: 6;
              color: var(--White, #fff);
              text-align: center;
              font-family: "Noto Sans HK";
              font-size: 22.5px;
              font-style: normal;
              font-weight: 500;
              line-height: normal;
              text-transform: uppercase;
              text-wrap: nowrap;
            }
            & > div:nth-child(1) {
              margin-right: 5px;
              position: relative;
              z-index: 6;
              display: flex;
              justify-content: center;
              align-items: center;
              & > svg {
                width: 20px;
                height: 20px;
              }
            }
            padding: 10px 18px;
            border-radius: 20px;
          }
          & > a:nth-child(1) {
            position: relative;
          }
          & > a:nth-child(1)::before {
            border-radius: 100px;
            position: absolute;
            z-index: 5;
            top: 0;
            left: 0;
            content: "";
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, #00a6ce 25.95%, #3346ed 100%);
          }
          & > a:nth-child(1):hover::before {
            background: #ff9701;
          }
          & > a:nth-child(1)::after {
            content: "";
            position: absolute;
            z-index: 3;
            width: 86%;
            text-align: center;
            height: 30px;
            display: inline-block;
            bottom: -10px;
            left: 50%;
            background: linear-gradient(270deg, #00a6ce 25.95%, #3346ed 100%);
            border-radius: 20px;
            filter: blur(15px); /* 添加模糊效果 */
            transform: translateX(-50%) scaleY(-1) rotate(180deg);
          }
          & > a:nth-child(1):hover::after {
            background: #ff9701;
          }
        }
      }
    }
  }

  .medical-voucher-content {
    max-width: 960px;
    margin: 65px auto 45px;
    & > div:nth-child(1) {
      color: var(--Brand-Color, #00a6ce);
      font-family: "Inter";
      font-size: 27px;
      font-style: normal;
      font-weight: 600;
      line-height: 22.5px;
      text-transform: uppercase;
      margin-bottom: 40px;
    }
    & > div:nth-child(2) {
      display: flex;
      border-radius: 15px;
      background: #f5fafd;
      padding: 50px 0 40px 65px;
      & > div {
        max-height: 485px;
        & > div {
          width: 300px;
          padding: 25px 30px 15px 0;
          border-bottom: 1px solid #ccc;
          display: flex;
          align-items: center;
          justify-content: space-between;
          & > div:nth-child(1) {
            display: flex;
            flex-direction: column;
            color: #60605f;
            font-family: "Inter";
            font-size: 19.5px;
            font-style: normal;
            font-weight: 400;
            line-height: 22.5px;
            text-transform: uppercase;
          }
          & > div:nth-child(2) {
            width: 28px;
            height: 28px;
            & > svg {
              width: 100%;
              height: 100%;
            }
          }
        }
      }
      & > div:nth-child(1) {
        margin-right: 105px;
        & > :last-child {
          border-bottom: none;
        }
      }
    }
  }
  .medical-voucher-notice {
    margin: 45px auto 85px;
    max-width: 960px;
    margin-top: 60px;
    margin-bottom: 120px;
    & > div:nth-child(1) {
      border-radius: 20px;
      border: 1px solid var(--Brand-Color, #00a6ce);
      padding: 27px 48px;
      display: flex;
      align-items: center;
      margin-bottom: 20px;
      & > div:nth-child(1) {
        width: 84px;
        height: 75px;
        & > svg {
          width: 100%;
          height: 100%;
        }
      }
      & > div:nth-child(2) {
        margin-left: 40px;
        color: #60605f;
        font-family: "Inter";
        font-size: 15px;
        font-style: normal;
        font-weight: 300;
        line-height: 30px;
        text-transform: uppercase;
      }
    }
    & > div:nth-child(2) {
      display: flex;
      align-items: center;
      & > div:nth-child(1) {
        width: 32.19px;
        height: 42.92px;
        & > svg {
          width: 100%;
          height: 100%;
        }
      }
      & > div:nth-child(2) {
        margin-left: 14px;
        color: var(--Brand-Color, #00a6ce);
        font-family: "Inter";
        font-size: 15px;
        font-style: normal;
        font-weight: 400;
        line-height: 30px;
        text-transform: uppercase;
      }
    }
  }
  .medical-voucher-background {
    max-width: 960px;
    margin: 85px auto 90px;
    & > div:nth-child(1) {
      padding-left: 7px;
      color: var(--Brand-Color, #00a6ce);
      font-family: "Inter";
      font-size: 27px;
      font-style: normal;
      font-weight: 600;
      line-height: 22.5px;
      text-transform: uppercase;
      margin-bottom: 22px;
    }
    & > div:nth-child(2) {
      padding: 22px 42px 22px 38px;
      border-radius: 15px;
      background: #f5fafd;
      & > P {
        color: #60605f;
        font-family: "Inter";
        font-size: 15px;
        font-style: normal;
        font-weight: 300;
        line-height: 30px;
        text-transform: uppercase;
      }
    }
  }
}
@media screen and (max-width: 767px) {
  .medical-voucher-mb {
    padding: 20px 31px;
    overflow: hidden;
  }
  .medical-voucher-title {
    color: #00a6ce;
    font-family: "Inter";
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  .medical-voucher-header {
    & > div {
      display: flex;
      flex-direction: column;
      position: relative;
      align-items: flex-end;

      border-radius: 14.171px;
      margin-left: -31px;
      margin-right: -31px;
      background: #f5fafd;
      height: 549px;
      margin-top: 150px;
      & > div:nth-child(1) {
        padding: 0 31px;
        height: 359px;
        & > img {
          width: 88%;
          position: absolute;
          top: -120px;
          left: 0;
          right: 0;
          margin: 0 auto;
        }
      }
      & > div:nth-child(2) {
        padding: 20px 31px 35px;
        & > div:nth-child(1) {
          color: #60605f;
          text-align: justify;
          font-family: "Inter";
          font-size: 14px;
          font-style: normal;
          font-weight: 400;
          line-height: 30px;
        }
        & > div:nth-child(2) {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-top: 5px;
          & > a {
            display: flex;
            align-items: center;
            & > div:nth-child(2) {
              position: relative;
              z-index: 6;
              color: #fff;
              font-family: Inter;
              font-size: 22.5px;
              font-style: normal;
              font-weight: 300;
              line-height: normal;
              text-transform: uppercase;
            }
            & > div:nth-child(1) {
              margin-right: 7px;
              position: relative;
              z-index: 6;
              display: flex;
              justify-content: center;
              align-items: center;
              width: 20px;
              height: 20px;
              & > svg {
                width: 100%;
                height: 100%;
              }
            }
            padding: 3px;
            border-radius: 100px;
            width: 150px;
            height: 48px;
            align-items: center;
            justify-content: center;
          }
          & > a:nth-child(1) {
            position: relative;
          }
          & > a:nth-child(1)::before {
            padding: 3px 0;
            border-radius: 100px;
            position: absolute;
            z-index: 5;
            top: 0;
            left: 0;
            content: "";
            width: 150px;
            height: 48px;
            background: linear-gradient(90deg, #00a6ce 25.95%, #3346ed 100%);
          }
          & > a:nth-child(1)::after {
            content: "";
            position: absolute;
            z-index: 3;
            width: 86%;
            text-align: center;
            height: 30px;
            display: inline-block;
            bottom: -10px;
            left: 50%;
            background: linear-gradient(270deg, #00a6ce 25.95%, #3346ed 100%);
            border-radius: 100px;
            filter: blur(15px); /* 添加模糊效果 */
            transform: translateX(-50%) scaleY(-1) rotate(180deg);
          }
          & > a:hover {
            box-shadow: 4px 3px 7px #c5c3c3;
          }
          & > div:nth-child(2) {
            width: 87px;
            & > img {
              width: 100%;
            }
          }
        }
      }
    }
  }
  .medical-voucher-content {
    margin: 30px 0;
    & > div:nth-child(1) {
      color: #00a6ce;
      font-family: "Inter";
      font-size: 20px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      margin-bottom: 18px;
    }
    & > div:nth-child(2) {
      display: flex;
      flex-direction: column;
      border-radius: 20px;
      background: #f5fafd;
      padding: 0 34px 10px 30px;
      & > div {
        & > div {
          padding: 20px 15px 20px 5px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          & > div:nth-child(1) {
            display: flex;
            flex-direction: column;
            color: #60605f;
            font-family: "Inter";
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            line-height: 22px; /* 157.143% */
            text-transform: uppercase;
          }
          border-bottom: 1px dashed #ccc;
        }
      }
      & > div:last-child {
        & > div:last-child {
          border-bottom: none;
        }
      }
    }
  }
  .medical-voucher-notice {
    margin-bottom: 30px;
    & > div:nth-child(1) {
      margin-bottom: 15px;
      border-radius: 20px;
      border: 1px solid var(--Brand-Color, #00a6ce);
      color: #60605f;
      font-family: "Inter";
      font-size: 14px;
      font-style: normal;
      font-weight: 300;
      line-height: 24px; /* 171.429% */
      text-transform: uppercase;
      display: flex;
      padding: 18px 20px 20px 21px;
      & > div:nth-child(1) {
        flex: 1.6;
        & > svg {
          width: 100%;
        }
      }
      & > div:nth-child(2) {
        margin-left: 12px;
        flex: 7.5;
      }
    }
    & > div:nth-child(2) {
      display: flex;
      align-items: center;

      & > div:nth-child(1) {
        flex: 0.9;
        & > svg {
          width: 100%;
        }
      }
      & > div:nth-child(2) {
        flex: 9;
        margin-left: 8px;
        color: var(--Brand-Color, #00a6ce);
        font-family: "Inter";
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: 24px; /* 171.429% */
        text-transform: uppercase;
      }
    }
  }
  .medical-voucher-background {
    margin-bottom: 10px;
    & > div:nth-child(1) {
      margin-bottom: 15px;
      color: var(--Brand-Color, #00a6ce);
      font-family: "Inter";
      font-size: 24px;
      font-style: normal;
      font-weight: 600;
      line-height: 30px; /* 125% */
      text-transform: uppercase;
    }
    & > div:nth-child(2) {
      padding: 17px 20px 18px 22px;
      border-radius: 20px;
      background: #f5fafd;
      color: #60605f;
      font-family: "Inter";
      font-size: 14px;
      font-style: normal;
      font-weight: 300;
      line-height: 26px; /* 185.714% */
      text-transform: uppercase;
    }
  }
}
</style>