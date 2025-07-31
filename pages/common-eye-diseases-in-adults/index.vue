<script lang="ts" setup>
useHead(() => ({
  title: "成人常見眼睛問題｜常見眼睛問題｜希瑪視光中心",
  meta: [
    {
      hid: "description",
      name: "description",
      content:
        "成人常見的眼疾問題包括白內障、青光眼、黃斑病變、飛蚊症及視網膜病變等。希瑪視光提供成人眼睛檢查套餐，由註冊視光師主理，詳細檢查你的眼睛狀況，排查任何潛在的眼睛問題。如有發現問題，我們也提供轉介至希瑪眼科專科醫生的服務，作出進一步評估及治療。立即了解更多有關成人眼疾的資訊。",
    },
    {
      hid: "Keywords",
      name: "Keywords",
      content:
        "青光眼 乾眼 黃斑病變 白內障 眼疾 飛蚊症 視網膜病變 眼科醫生 眼科專科 眼科診所 眼專科醫生 青光眼症狀 飛蚊症成因 白內障成因 青光眼症狀前兆 青光眼成因 白內障症狀 黃斑點病變 飛蚊症初期 黃斑病 眼科門診 黃斑部病變 眼科視光師 註冊視光師 視光師 視光師驗眼 視光師驗眼中心 希瑪視光 視光中心 希瑪視光中心 希瑪眼科視光中心",
    },
  ],
}));
const bannerImg = {
  pc: "https://statichk.cmermedical.com/vision/imgs/683dce2cd87bd6bf.png",
  mobile: "https://statichk.cmermedical.com/vision/imgs/c88934386018c7c0.png",
};
let imgLeft = ref("50%");
const yuanspan = ref(null);
const { elementX, elementWidth } = useMouseInElement(yuanspan);
let isDragging = ref(false);
const isPresbyopiaOrMirror = ref(false);
watch(elementX, (n, o) => {
  if (isDragging.value) {
    let a = (elementX.value + 5) / elementWidth.value;
    if (a < 0) {
      imgLeft.value = "1%";
    } else if (a > 1) {
      imgLeft.value = "100%";
    } else {
      imgLeft.value = `${(a * 100).toFixed(4)}%`;
    }

    if (
      55 < Number((a * 100).toFixed(4)) &&
      Number((a * 100).toFixed(4)) < 100
    ) {
      isPresbyopiaOrMirror.value = true;
    } else {
      isPresbyopiaOrMirror.value = false;
    }
  }
});
onMounted(() => {
  nextTick(() => {
    const imgline = document.getElementById("imgline");
    if (imgline) {
      imgline.addEventListener("touchstart", (e) => {
        isDragging.value = true;
      });
      imgline.addEventListener("touchend", function (event) {
        isDragging.value = false;
      });
      imgline.addEventListener("mousedown", (e) => {
        isDragging.value = true;
      });
      imgline.addEventListener("mouseup", function (event) {
        isDragging.value = false;
      });
    }
  });
});
const judge = (num: string) => {
  const n = Number(num.replace("%", ""));
  if (n > 60) {
    return false;
  } else {
    return true;
  }
};
const judgeTwo = (num: string) => {
  const n = Number(num.replace("%", ""));
  if (n < 40) {
    return false;
  } else {
    return true;
  }
};
</script>

<template>
  <div class="video-information">
    <PublicBanner :banner="bannerImg" />
    <PublicNavbar
      :name="'常見眼睛問題'"
      :isInsidePage="true"
      :insidePageTitle="'成人常見眼睛問題'"
    />
    <div class="faq-box">
      <div class="cataract">
        <div></div>
        <div>
          <PublicPageTitle :title="'白內障'" />
          <div>
            <div>
              白內障是由於眼睛的晶狀體退化及變得混濁所致，常見徵狀包括︰視力下降、視力模糊、所見物件顏色變得暗淡等。香港有九成白內障患者是长者，若患有深近視、糖尿病等，出現白內障的年齡更會提前十年左右。而在電子產品盛行的時代，電子螢幕光線可能會對眼睛造成傷害，如雙眼長時間持續暴露在強光下，也有可能增加提前患上白內障的機會。
            </div>
            <div>
              <img
                src="https://statichk.cmermedical.com/vision/imgs/c090458a4041c424.png"
                alt="白內障"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="glaucoma">
        <PublicPageTitle :title="'青光眼'" />
        <div>
          青光眼是一種視神經病變，眼內房水無法順利排出，導致眼內壓力增加，對視神經造成壓迫而使視神經受到損傷。青光眼患者會先經歷周邊視野損害，然後出現中央視力下降，嚴重時更會失明。由於早至中期的慢性青光眼基本上沒有病徵，不少患者當病情發展到後期才發現，青光眼因此有「視力小偷」之稱。
        </div>
      </div>
      <div class="glaucoma-comparison">
        <div>
          <div v-if="judgeTwo(imgLeft)">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;正常
          </div>
          <div v-if="judge(imgLeft)" style="color: #0192b0;">視野缺損</div>
        </div>
        <div class="imagetowebp-canvasWebp">
          <div
            ref="yuanspan"
            class="yuan"
            :style="{
              'clip-path': `polygon(0 0, ${imgLeft} 0, ${imgLeft} 100%, 0 100%)`,
            }"
          >
            <img
              src="https://statichk.cmermedical.com/vision/imgs/e87447336103ad77.png"
              alt="正常"
            />
          </div>
          <span :style="{ left: imgLeft }" id="imgline"> </span>
          <img
            src="https://statichk.cmermedical.com/vision/imgs/654736882a8875df.png"
            alt="視野缺損"
          />
        </div>
        <div>
          <div>{{ `<向左移動` }}</div>
          <div>{{ `向右移動>` }}</div>
        </div>
      </div>
      <div class="maculopathy">
        <PublicPageTitle :title="'黃斑病變'" />
        <div>
          <div>
            黃斑病變是指眼睛黃斑區出現病徵，導致視力下降、視物扭曲變形及中心視力變差。構成黃斑病變的主因是視網膜色素層及細胞退化，部分病人眼睛脈絡膜血管出現滲漏，嚴重破壞黃斑區的感光細胞，以致視力受損。老年黃斑退化分為乾性和濕性，乾性老年黃斑退化對視功能的損害相對較少。
          </div>
          <div>
            <div>
              <div>
                <img
                  src="https://statichk.cmermedical.com/vision/imgs/031158104e912d25.png"
                  alt="直線邊曲線"
                />
              </div>
              <div>直線邊曲線</div>
            </div>
            <div>
              <div>
                <img
                  src="https://statichk.cmermedical.com/vision/imgs/a76941515030bbc6.png"
                  alt="盲區"
                />
              </div>
              <div>盲區</div>
            </div>
          </div>
        </div>
      </div>
      <div class="muscae-volitantes">
        <PublicPageTitle :title="'飛蚊症'" />
        <div>
          <div>
            <div>
              <div>
                <img
                  src="https://statichk.cmermedical.com/vision/imgs/0f1743f0362974f7.png"
                  alt="芝麻形狀"
                />
              </div>
              <div>芝麻形狀</div>
            </div>
            <div>
              <div>
                <img
                  src="https://statichk.cmermedical.com/vision/imgs/3b66bc2414420b2d.png"
                  alt="蟲形狀"
                />
              </div>
              <div>蟲形狀</div>
            </div>
            <div>
              <div>
                <img
                  src="https://statichk.cmermedical.com/vision/imgs/2bf448147051f259.png"
                  alt="線狀"
                />
              </div>
              <div>線狀</div>
            </div>
            <div>
              <div>
                <img
                  src="https://statichk.cmermedical.com/vision/imgs/f3708492eb392a97.png"
                  alt="橢圓形卵狀"
                />
              </div>
              <div>橢圓形卵狀</div>
            </div>
            <div>
              <div>
                <img
                  src="https://statichk.cmermedical.com/vision/imgs/7700fc3fe9313371.png"
                  alt="環狀"
                />
              </div>
              <div>環狀</div>
            </div>
          </div>
          <div>
            隨着年齡增長，眼睛玻璃體老化及萎縮，逐漸積聚成塊，便會形成不同形狀的黑點或暗影，飛舞飄動，如同有蚊子在眼前飛舞。所以俗稱「飛蚊症」，學名即為「玻璃體混濁」。良性飛蚊症是眼睛老化的正常現象，但如果眼前突然出現大量飛蚊，且伴有其他症狀，如閃光或視力變差，可能是視網膜有破洞或脫落，建議立即求醫。
          </div>
        </div>
      </div>
      <div class="retinopathy">
        <PublicPageTitle :title="'視網膜病變'" />
        <div>
          <div>
            視網膜好像照相機中的菲林，是影像成形的關鍵，也是眼內最重要、最複雜但又最脆弱的部分。如果視網膜脫落，即無法正常擷取影像並傳送到大腦，影響視覺功能。視網膜脫落患者多數介乎40至80歲之間，男性居多。近視度數愈深，視網膜脫落的風險愈大，有家族病史或糖尿病患者亦屬高危。
          </div>
          <div>
            <img
              src="https://statichk.cmermedical.com/vision/imgs/70bff633a83d1fe7.png"
              alt="視網膜病變"
            />
          </div>
        </div>
      </div>
      <div class="assess">
        <div></div>
        <div>
          <div>
            <span>完成視光檢查後</span>
            <span>如發現客人眼睛異常</span>
            <span>我們會即時轉介予眼科專科</span>
            <span>醫生進一步評估及治療</span>
          </div>
          <div class="bg-text-btn">
            <a href="https://hkcmereye.com" target="_blank">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                >
                  <path
                    d="M15.1618 28.3236C22.4308 28.3236 28.3236 22.4308 28.3236 15.1618C28.3236 7.89273 22.4308 2 15.1618 2C7.89273 2 2 7.89273 2 15.1618C2 22.4308 7.89273 28.3236 15.1618 28.3236Z"
                    stroke="white"
                    stroke-width="2.5"
                  />
                  <path
                    d="M14.5039 8.5791H15.162"
                    stroke="white"
                    stroke-width="2.5"
                    stroke-linecap="round"
                  />
                  <path
                    d="M12.5312 13.8438H15.1636V20.4246"
                    stroke="white"
                    stroke-width="2.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12.5312 20.4258H17.796"
                    stroke="white"
                    stroke-width="2.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              <span>轉介眼科專科</span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="28"
                  viewBox="0 0 17 28"
                  fill="none"
                >
                  <path
                    d="M0 25.4977V2.40527C0 0.687319 2.0231 -0.23117 3.31643 0.89961L16.3059 12.2566C17.2075 13.0448 17.2189 14.4434 16.3303 15.2462L3.34076 26.9818C2.05459 28.1438 0 27.2311 0 25.4977Z"
                    fill="white"
                  />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
    <PublicForm />
  </div>
</template>

<style lang="scss" scoped>
@media screen and (min-width: 768px) {
  .profile-title {
    position: relative;
    right: -180%;
    color: var(--Brand-Color, #fff);
    text-align: center;
    font-family: "Noto Sans HK";
    font-size: 60px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: 12px;
    bottom: -180px;
  }
  .faq-box {
    margin: 85px auto 90px;
    max-width: 960px;
  }
  .cataract {
    & > div:nth-child(1) {
      color: #00a6ce;
      font-family: Inter;
      font-size: 37.5px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      margin-bottom: 70px;
    }
    & > div:nth-child(2) {
      border-radius: 27.75px;
      background: var(--Skin, #eafbff);
      box-shadow: 0px 0px 7.5px 0px rgba(0, 0, 0, 0.25);
      min-height: 495px;
      box-sizing: border-box;
      padding: 32px 15px 0 40px;
      :deep(.title-test) {
        margin: 0;
      }
      & > div:nth-child(2) {
        display: flex;
        justify-content: space-between;
        gap: 0 20px;
        & > div:nth-child(1) {
          color: #60605f;
          font-family: "Noto Sans CJK TC";
          font-size: 21px;
          font-style: normal;
          font-weight: 500;
          line-height: 45px; /* 214.286% */
          margin-top: 24px;
        }
        & > div:nth-child(2) {
          position: relative;
          top: -80px;
        }
      }
    }
  }
  .glaucoma {
    margin: 40px 0 0;
    & > div:nth-child(2) {
      color: #60605f;
      text-align: center;
      font-family: "Noto Sans CJK TC";
      font-size: 21px;
      font-style: normal;
      font-weight: 500;
      line-height: 45px; /* 214.286% */
      padding: 0 90px;
      margin-top: 28px;
    }
  }
  .glaucoma-comparison {
    margin: 55px auto 75px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    position: relative;
    & > div:nth-child(1) {
      display: flex;
      justify-content: center;
      gap: 0 80px;
      & > div:nth-child(1) {
        color: var(--Deep-Blue, #3e5270);
        text-align: center;
        font-family: "Noto Sans HK";
        font-size: 30px;
        font-style: normal;
        font-weight: 700;
        line-height: 45px; /* 150% */
        letter-spacing: 1.5px;
      }
      & > div:nth-child(2) {
        color: var(--OkLens-color, #0192b0);
        text-align: center;
        font-family: "Noto Sans HK";
        font-size: 30px;
        font-style: normal;
        font-weight: 700;
        line-height: 45px; /* 150% */
        letter-spacing: 1.5px;
      }
    }
    & > div:nth-child(3) {
      position: absolute;
      width: 100%;
      display: flex;
      justify-content: center;
      gap: 0 667px;
      color: var(--Grey-Light, #d9d9d9);
      text-align: center;
      font-family: "Noto Sans CJK TC";
      font-size: 60px;
      font-style: normal;
      font-weight: 500;
      line-height: 45px; /* 75% */
      z-index: 1;
      & > div {
        user-select: none;
        text-wrap: nowrap;
      }
    }
  }
  .imagetowebp {
    &-canvasWebp {
      max-width: 567px;
      margin: 0 auto;
      position: relative;
      display: flex;
      justify-content: center;
      z-index: 5;
      img {
        //禁止选中
        user-select: none;
        border-radius: 15px;
      }
      .yuan {
        width: fit-content;
        height: 100%;
        // overflow: hidden;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        top: 0;
        clip-path: polygon(0 0, 50% 0, 50% 100%, 0 100%);
        display: flex;
        flex-direction: column;
        align-items: center;
        border-radius: 15px;
        img {
          width: auto;
          height: 100%;
          border-radius: 15px;
        }
      }
      span {
        width: 62px;
        height: 493px;
        background: url("https://statichk.cmermedical.com/vision/imgs/905634ed84693ed9.png")
          no-repeat;
        display: block;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        top: -50px;
        cursor: col-resize;
        z-index: 10;
      }
    }
  }
  .maculopathy {
    margin-top: 90px;
    border-radius: 27.75px;
    background: var(--Skin, #eafbff);
    box-shadow: 0px 0px 7.5px 0px rgba(0, 0, 0, 0.25);
    min-height: 541px;
    padding: 32px 34px 55px 40px;
    box-sizing: border-box;
    :deep(.title-test) {
      margin: 0;
    }
    & > div:nth-child(2) {
      display: flex;
      gap: 0 28px;
      margin-top: 34px;
      & > div:nth-child(1) {
        color: #60605f;
        font-family: "Noto Sans CJK TC";
        font-size: 21px;
        font-style: normal;
        font-weight: 500;
        line-height: 45px; /* 214.286% */
      }
      & > div:nth-child(2) {
        display: flex;
        gap: 0 15px;
        & > div {
          display: flex;
          flex-direction: column;
          align-items: center;
          & > div:nth-child(2) {
            text-align: center;
            font-family: "Noto Sans HK";
            font-size: 24px;
            font-style: normal;
            font-weight: 700;
            line-height: 34px; /* 141.667% */
            letter-spacing: 1.2px;
          }
        }
        & > div:nth-child(1) {
          & > div:nth-child(2) {
            color: var(--Deep-Blue, #3e5270);
          }
        }
        & > div:nth-child(2) {
          & > div:nth-child(2) {
            color: var(--OkLens-color, #0192b0);
          }
        }
      }
    }
  }
  .muscae-volitantes {
    margin-top: 90px;
    border-radius: 27.75px;
    background: var(--Skin, #eafbff);
    box-shadow: 0px 0px 7.5px 0px rgba(0, 0, 0, 0.25);
    min-height: 555px;
    box-sizing: border-box;
    padding: 45px 31px 24px 35px;
    :deep(.title-test) {
      margin: 0;
    }
    & > div:nth-child(2) {
      margin-top: 20px;
      & > div:nth-child(1) {
        margin-bottom: 30px;
        display: flex;
        gap: 0 33px;
        justify-content: center;
        & > div {
          display: flex;
          flex-direction: column;
          & > div:nth-child(2) {
            margin-top: 10px;
            color: var(--Deep-Blue, #3e5270);
            text-align: center;
            font-family: "Noto Sans HK";
            font-size: 18px;
            font-style: normal;
            font-weight: 700;
            line-height: 34px; /* 188.889% */
            letter-spacing: 0.9px;
          }
        }
      }
      & > div:nth-child(2) {
        color: #60605f;
        font-family: "Noto Sans CJK TC";
        font-size: 21px;
        font-style: normal;
        font-weight: 500;
        line-height: 45px; /* 214.286% */
      }
    }
  }
  .retinopathy {
    margin-top: 95px;
    border-radius: 27.75px;
    background: var(--Skin, #eafbff);
    box-shadow: 0px 0px 7.5px 0px rgba(0, 0, 0, 0.25);
    min-height: 425px;
    box-sizing: border-box;
    padding: 33px 0 0 35px;
    position: relative;
    :deep(.title-test) {
      margin: 0;
    }
    & > div:nth-child(2) {
      display: flex;
      justify-content: space-between;
      gap: 0 24px;
      & > div:nth-child(1) {
        max-width: 462px;
        margin-top: 28px;
        color: #60605f;
        font-family: "Noto Sans CJK TC";
        font-size: 21px;
        font-style: normal;
        font-weight: 500;
        line-height: 45px; /* 214.286% */
      }
      & > div:nth-child(2) {
        position: absolute;
        right: 0;
        top: 0;
      }
    }
  }
  .assess {
    margin-top: 95px;
    background: url("https://statichk.cmermedical.com/vision/imgs/c12bb8c6c1ffbfa9.png")
      no-repeat;
    background-size: 100% 100%;
    border-radius: 15px;
    box-shadow: 0px 3px 7.5px 0px rgba(0, 0, 0, 0.25);
    min-height: 370px;
    display: flex;
    padding: 72px 82px 32px 82px;
    box-sizing: border-box;
    & > div {
      flex: 1;
    }
    & > div:nth-child(2) {
      position: relative;
      & > div:nth-child(1) {
        color: var(--Deep-Blue, #3e5270);
        text-align: center;
        font-family: "Noto Sans HK";
        font-size: 30px;
        font-style: normal;
        font-weight: 700;
        line-height: 45px; /* 150% */
        letter-spacing: 1.5px;
        display: flex;
        flex-direction: column;
        margin-bottom: 20px;
      }
      :deep(.bg-text-btn) {
        & > a {
          margin: 0 auto;
        }
      }
    }
  }
  .bg-text-btn {
    & > a {
      cursor: pointer;
      position: relative;
      display: flex;
      width: fit-content;
      justify-content: center;
      align-items: center;
      padding: 10px 15px;
      margin: 45px auto 0;
      margin-right: 0;
      & > span {
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        z-index: 5;
        color: var(--White, #fff);
        text-align: center;
        font-family: "Noto Sans HK";
        font-size: 13.5px;
        font-style: normal;
        font-weight: 500;
        line-height: 18.75px; /* 138.889% */
        letter-spacing: 0.675px;
      }
      & > span:nth-child(2) {
        margin: 0 10px;
      }
    }
    & > a::before {
      border-radius: 100px;
      position: absolute;
      z-index: 5;
      top: 0;
      left: 0;
      content: "";
      width: 100%;
      height: 100%;
      background: #0192b0;
    }
    & > a::after {
      content: "";
      position: absolute;
      z-index: 3;
      width: 86%;
      text-align: center;
      height: 30px;
      display: inline-block;
      bottom: -10px;
      left: 50%;
      background: #0192b0;
      border-radius: 100px;
      filter: blur(15px); /* 添加模糊效果 */
      transform: translateX(-50%) scaleY(-1) rotate(180deg);
    }
  }
  .bg-text-btn {
    & > a:hover::before {
      background: #ff9701;
    }
    & > a:hover::after {
      background: #ff9701;
    }
  }
}
@media screen and (max-width: 767px) {
  .profile-title {
    display: none;
  }
  .faq-box {
    margin: 6.4vw auto 40px;
    padding: 0 6.4vw;
  }
  .cataract {
    margin-bottom: 10.78vw;
    & > div:nth-child(1) {
      color: #00a6ce;
      text-align: justify;
      font-family: "Noto Sans HK";
      font-size: 6.15vw;
      font-style: normal;
      font-weight: 700;
      line-height: 10.76vw; /* 167.112% */
      letter-spacing: 0.3vw;
      margin-bottom: 9.7vw;
    }
    & > div:nth-child(2) {
      border-radius: 4.72vw;
      background: var(--Skin, #eafbff);
      box-shadow: 0px 0px 1.9vw 0px rgba(0, 0, 0, 0.25);
      box-sizing: border-box;
      padding: 5.38vw 4.61vw 6.4vw 6.4vw;
      :deep(.title-test) {
        margin: auto auto auto 0;
      }
      & > div:nth-child(2) {
        display: flex;
        flex-direction: column-reverse;
        & > div:nth-child(2) {
          display: flex;
          justify-content: center;
          align-items: baseline;
          width: 79.5vw;
          & > img {
            width: 100%;
          }
        }
        & > div:nth-child(1) {
          margin-top: 5.12vw;
          color: #60605f;
          font-family: "Noto Sans HK";
          font-size: 3.5vw;
          font-style: normal;
          font-weight: 500;
          line-height: 5.12vw; /* 142.857% */
          letter-spacing: 0.17vw;
        }
      }
    }
  }
  .glaucoma-comparison {
    padding: 0 5.8vw 0 5.64vw;
    margin-top: 13.07vw;
    position: relative;
    & > div:nth-child(1) {
      margin-bottom: 2.5vw;
      display: flex;
      justify-content: center;
      gap: 0 5.12vw;
      & > div:nth-child(1) {
        color: var(--Deep-Blue, #3e5270);
        text-align: center;
        font-family: "Noto Sans HK";
        font-size: 3.5vw;
        font-style: normal;
        font-weight: 700;
        line-height: 6.9vw; /* 192.68% */
        letter-spacing: 0.17vw;
      }
      & > div:nth-child(2) {
        color: var(--OkLens-color, #0192b0);
        text-align: center;
        font-family: "Noto Sans HK";
        font-size: 3.5vw;
        font-style: normal;
        font-weight: 700;
        line-height: 6.92vw; /* 192.68% */
        letter-spacing: 0.7px;
      }
    }
    & > div:nth-child(3) {
      display: none;
    }
  }
  .glaucoma {
    margin-top: 10.76vw;
    & > div:nth-child(2) {
      margin-top: 3.446vw;
      color: #60605f;
      text-align: center;
      font-family: "Noto Sans HK";
      font-size: 3.58vw;
      font-style: normal;
      font-weight: 500;
      line-height: 5.8vw; /* 164.286% */
    }
  }
  .imagetowebp {
    &-canvasWebp {
      max-width: 87.17vw;
      margin: 0 auto;
      position: relative;
      display: flex;
      justify-content: center;
      img {
        //禁止选中
        user-select: none;
        width: 90%;
        height: auto;
        border-radius: 10px;
      }
      .yuan {
        width: fit-content;
        height: 100%;
        // overflow: hidden;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        top: 0;
        clip-path: polygon(0 0, 50% 0, 50% 100%, 0 100%);
        display: flex;
        flex-direction: column;
        align-items: center;
        img {
          width: 68.205vw;
          height: 55.3846vw;
        }
      }
      span {
        width: 9.2vw;
        height: 75.12vw;
        background: url("https://statichk.cmermedical.com/vision/imgs/905634ed84693ed9.png")
          no-repeat;
        background-size: 100% 100%;
        display: block;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        top: -50px;
        cursor: col-resize;
      }
    }
  }
  .bg-text-btn {
    & > a {
      cursor: pointer;
      position: relative;
      display: flex;
      width: fit-content;
      justify-content: center;
      align-items: center;
      padding: 2.05vw 16px 2.05vw;
      margin: 3.8vw auto 0;
      // left: -15px;
      & > span {
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        z-index: 5;
        color: var(--White, #fff);
        text-align: center;
        font-family: "Noto Sans HK";
        font-size: 3.5vw;
        font-style: normal;
        font-weight: 500;
        line-height: 5.3vw; /* 150.303% */
        // letter-spacing: 0.7px;
      }
      & > span:nth-child(1) {
        width: 5.3vw;
        height: 5.3vw;
        & > svg {
          width: 100%;
          height: 100%;
        }
      }
      & > span:nth-child(2) {
        margin: 0 1.2vw;
      }
      & > span:nth-child(3) {
        width: 2.56vw;
        & > svg {
          width: 100%;
        }
      }
    }
    & > a::before {
      position: absolute;
      z-index: 5;
      top: 0;
      left: 0;
      content: "";
      width: 100%;
      height: 100%;
      border-radius: 5.54vw;
      background: var(--OkLens-color, #0192b0);
    }
    & > a::after {
      content: "";
      position: absolute;
      z-index: 3;
      width: 86%;
      text-align: center;
      height: 7.6vw;
      display: inline-block;
      bottom: -2.5vw;
      left: 50%;
      border-radius: 5.54vw;
      background: var(--OkLens-color, #0192b0);
      filter: blur(3.8vw); /* 添加模糊效果 */
      transform: translateX(-50%) scaleY(-1) rotate(180deg);
    }
  }
  .bg-text-btn {
    & > a:hover::before {
      background: #ff9701;
    }
    & > a:hover::after {
      background: #ff9701;
    }
  }
  .maculopathy {
    margin-top: 10.25vw;
    margin-bottom: 10.25vw;
    border-radius: 4.72vw;
    background: var(--Skin, #eafbff);
    box-shadow: 0px 0px 1.9vw 0px rgba(0, 0, 0, 0.25);
    box-sizing: border-box;
    padding: 6.4vw 4.6vw 6.15vw 6.4vw;
    :deep(.title-test) {
      margin: auto auto auto 0;
    }
    & > div:nth-child(2) {
      display: flex;
      flex-direction: column-reverse;
      & > div:nth-child(2) {
        margin-top: 5.12vw;
        display: flex;
        justify-content: center;
        & > div {
          display: flex;
          flex-direction: column;
          & > div:nth-child(1) {
            width: 38.46vw;
            height: 40.76vw;
            & > img {
              width: 100%;
              height: 100%;
            }
          }
          & > div:nth-child(2) {
            text-align: center;
            font-family: "Noto Sans HK";
            font-size: 4.1vw;
            font-style: normal;
            font-weight: 700;
            line-height: 5.6vw; /* 137.421% */
            letter-spacing: 0.2vw;
          }
        }
        & > div:nth-child(1) {
          & > div:nth-child(2) {
            color: var(--Deep-Blue, #3e5270);
          }
        }
        & > div:nth-child(2) {
          & > div:nth-child(2) {
            color: var(--OkLens-color, #0192b0);
          }
        }
      }
      & > div:nth-child(1) {
        margin-top: 5.128vw;
        color: #60605f;
        font-family: "Noto Sans HK";
        font-size: 3.5vw;
        font-style: normal;
        font-weight: 500;
        line-height: 5.6vw; /* 157.143% */
        letter-spacing: 0.17vw;
      }
    }
  }
  .muscae-volitantes {
    margin-top: 10.25vw;
    margin-bottom: 10.25vw;
    border-radius: 4.72vw;
    background: var(--Skin, #eafbff);
    box-shadow: 0px 0px 1.92vw 0px rgba(0, 0, 0, 0.25);
    box-sizing: border-box;
    padding: 6.4vw 4.6vw 6.15vw 6.4vw;
    :deep(.title-test) {
      margin: auto auto auto 0;
    }
    & > div:nth-child(2) {
      margin-top: 3.8vw;
      & > div:nth-child(1) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 5.12vw 7.17vw;
        & > div {
          display: flex;
          flex-direction: column;
          & > div:nth-child(1) {
            width: 34vw;
            height: 34vw;
            & > img {
              width: 100%;
              height: auto;
            }
          }
          & > div:nth-child(2) {
            margin-top: 1.5vw;
            color: var(--Deep-Blue, #3e5270);
            text-align: center;
            font-family: "Noto Sans HK";
            font-size: 4.05vw;
            font-style: normal;
            font-weight: 700;
            line-height: 7.65vw; /* 188.889% */
            letter-spacing: 0.2vw;
          }
        }
      }
      & > div:nth-child(2) {
        margin-top: 5.12vw;
        color: #60605f;
        font-family: "Noto Sans HK";
        font-size: 3.5vw;
        font-style: normal;
        font-weight: 500;
        line-height: 5.6vw; /* 157.143% */
        letter-spacing: 0.7px;
      }
    }
  }
  .retinopathy {
    margin-top: 10.25vw;
    margin-bottom: 8.717vw;
    border-radius: 4.7vw;
    background: var(--Skin, #eafbff);
    box-shadow: 0px 0px 1.9vw 0px rgba(0, 0, 0, 0.25);
    box-sizing: border-box;
    padding: 6.4vw 4.6vw 6.15vw 6.4vw;
    :deep(.title-test) {
      margin: auto auto auto 0;
    }
    & > div:nth-child(2) {
      display: flex;
      flex-direction: column-reverse;
      gap: 4.615vw 0;
      & > div:nth-child(2) {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 72.05vw;
        margin: 0 auto;
        & > img {
          width: 100%;
        }
      }
      & > div:nth-child(1) {
        color: #60605f;
        font-family: "Noto Sans HK";
        font-size: 3.5vw;
        font-style: normal;
        font-weight: 500;
        line-height: 5.6vw; /* 157.143% */
        letter-spacing: 0.7px;
      }
    }
  }
  .assess {
    margin-top: 8.97vw;
    background: url("https://statichk.cmermedical.com/vision/imgs/92a1b1c25210081b.png")
      no-repeat;
    background-size: 100% 100%;
    border-radius: 3.5vw;
    box-shadow: 0px 0.7vw 1.75vw 0px rgba(0, 0, 0, 0.25);
    min-height: 87.17vw;
    display: flex;
    padding: 18.9vw 2.05vw 23.07vw 2.05vw;
    box-sizing: border-box;
    & > div:nth-child(1) {
      flex: 4;
    }
    & > div:nth-child(2) {
      flex: 6;
      position: relative;
      & > div:nth-child(1) {
        color: var(--Deep-Blue, #3e5270);
        text-align: center;
        font-family: "Noto Sans HK";
        font-size: 5.64vw;
        font-style: normal;
        font-weight: 700;
        line-height: 6.15vw; /* 109.091% */
        letter-spacing: 1.1px;
        margin-bottom: 2.56vw;
        & > span:nth-child(1) {
          display: block;
          font-size: 3.5vw;
        }
        & > span {
          display: inline;
          font-size: 3.5vw;
        }
        // margin-bottom: 30px;
        // padding: 50px 0;
      }
      :deep(.bg-text-btn) {
        & > a {
          margin: 0 auto;
        }
      }
    }
  }
}
</style>