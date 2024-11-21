<script lang="ts" setup>
useHead(() => ({
  title: "近視控制隱形眼鏡｜兒童視力服務｜希瑪視光中心",
  meta: [
    {
      hid: "description",
      name: "description",
      content:
        "希瑪視光提供近視控制隱形眼鏡驗配，隱形眼鏡使用特殊光學設計，可以矯正兒童近視之餘，同時減慢近視加深速度。近視控制隱形眼鏡配戴方法簡單，每日即棄使用更方便衛生，令小朋友運動學習不受眼鏡限制。常見的牌子有MiSight 1 Day、Acuvue abiliti 1-Day和Disc 1-Day等，註冊視光師會根據兒童的用眼習慣和眼睛狀況分析評估最合適配戴的隱形眼鏡，同時提供隱形眼鏡試戴服務。立即聯絡我們查詢了解更多。",
    },
    {
      hid: "Keywords",
      name: "Keywords",
      content:
        "矯視隱形眼鏡 隱形眼鏡 矯視隱形眼鏡價錢 矯視con 矯視鏡 矯視con價錢 misight misight 1 day misight價錢 misight 1 day價格 acuvue acuvue隱眼 acuvue價錢 disc 1 day 控制近視 acuvue abiliti 兒童矯視隱形眼鏡 配隱形眼鏡 近視防控 配con 配con驗眼費 配con價錢 配con驗眼 配con邊間好 近視控制 兒童近視 註冊視光師 視光師 視光師驗眼中心 希瑪視光 視光中心 希瑪視光中心 希瑪眼科視光中心",
    },
  ],
}));
const bannerImg = {
  pc: "https://statichk.cmermedical.com/vision/imgs/51ac711323203828.jpg",
  mobile: "https://statichk.cmermedical.com/vision/imgs/c6912ec8adf66150.jpg",
};

const btnElement = ref({
  cls:'',
  title: "預約諮詢視光師！",
  svgIcon: `<svg data-v-f39dd64a="" xmlns="http://www.w3.org/2000/svg" width="31" height="32" viewBox="0 0 31 32" fill="none"><path data-v-f39dd64a="" d="M8.69818 13.784L7.12698 14.7845M8.14371 10.663L6.32422 10.269M9.97263 8.05797L8.9707 6.50049M13.1167 7.49603L13.5193 5.68729M15.7324 9.30498L17.3036 8.30452M30.125 15.875C30.125 23.9522 23.5772 30.5 15.5 30.5C7.42284 30.5 0.875 23.9522 0.875 15.875C0.875 7.79784 7.42284 1.25 15.5 1.25C23.5772 1.25 30.125 7.79784 30.125 15.875ZM24.4299 15.3654L12.4305 10.5875C12.1657 10.4047 11.809 10.631 11.8644 10.9475L11.1063 23.8327C11.1509 24.0883 11.486 24.1592 11.6337 23.9447L14.7104 19.2976C14.8738 19.06 15.2279 19.0645 15.3835 19.3064L19.4847 25.6941C19.6665 25.9773 20.0456 26.0598 20.3313 25.8782L22.4179 24.5522C22.7036 24.3706 22.7879 23.9938 22.606 23.7106L18.5053 17.3228C18.3498 17.0809 18.4948 16.7591 18.7804 16.7114L24.3115 15.8881C24.5695 15.8453 24.6443 15.5132 24.4299 15.3654Z" stroke="#DB4444" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>`,
  isExternalLink: true,
  // isExternalLink 外链 true
  link: "https://api.whatsapp.com/send?phone=85269180511&text=%E4%BD%A0%E5%A5%BD,%E6%88%91%E6%83%B3%E6%9F%A5%E8%A9%A2",
});
</script>

<template>
  <div class="video-information">
    <PublicBanner :banner="bannerImg"> </PublicBanner>
    <PublicNavbar
      :name="'兒童視力服務'"
      :isInsidePage="true"
      :insidePageTitle="'近視控制隱形眼鏡'"
    />
    <div class="child-myopia-box">
      <div class="child-myopia-content">
        <PublicPageTitle :title="'近視控制隱形眼鏡'" />
        <div>
          <p>
            近視控制隱形眼鏡是一種專業設計的視力矯正工具，被廣泛應用於處理近視問題。與
          </p>
          <p>
            傳統隱形眼鏡不同，這款軟性隱形眼鏡使用了特殊的光學設計，不僅能夠提供清晰的
          </p>
          <p>
            視覺效果，還可以有效地減緩近視度數的增加，同時提供舒適的配戴體驗。
          </p>
        </div>
      </div>
      <div class="child-myopia-merits">
        <div>
          <div>
            <div>近視控制隱形眼鏡</div>
            <div>五大優點</div>
          </div>
          <div>
            <img
              src="https://statichk.cmermedical.com/vision/imgs/bbf4190bda4b3bbb.png"
              alt="五大優點"
            />
          </div>
        </div>
        <div>
          <div>
            <div>
              <img
                src="https://statichk.cmermedical.com/vision/imgs/61a6eeb70b8972c4.png"
                alt="舒適配戴"
              />
            </div>
            <div>
              <span>舒適配戴</span>
            </div>
          </div>
          <div>
            <div>
              <img
                src="https://statichk.cmermedical.com/vision/imgs/8d57dc9d3ef9f766.png"
                alt="每日即棄方便衛生"
              />
            </div>
            <div>
              <span>每日即棄</span>
              <span>方便衛生</span>
            </div>
          </div>
          <div>
            <div>
              <img
                src="https://statichk.cmermedical.com/vision/imgs/cef6d0c92b2a2183.png"
                alt="易於兒童配戴"
              />
            </div>
            <div>
              <span>易於兒童配戴</span>
            </div>
          </div>
          <div>
            <div>
              <img
                src="https://statichk.cmermedical.com/vision/imgs/0909cc3ec309fff2.png"
                alt="運動學習不受限制"
              />
            </div>
            <div>
              <span>運動學習不受</span>
              <span>限制</span>
            </div>
          </div>
          <div>
            <div>
              <img
                src="https://statichk.cmermedical.com/vision/imgs/5423e25ba5f965b6.png"
                alt="控制度數增加"
              />
            </div>
            <div>
              <span>控制度數增加</span>
            </div>
          </div>
        </div>
      </div>
      <div class="myopia-container-brand">
        <PublicPageTitle :title="'近視控制隱形眼鏡的品牌'" />
        <div>
          <nuxt-link to="/dims-soft-lens">
            <img
              src="https://statichk.cmermedical.com/vision/imgs/2803939cde9d34f7.png"
              alt="cooper"
            />
          </nuxt-link>
          <nuxt-link to="/myopia-control-lenses/zeiss-myovision-pro">
            <img
              src="https://statichk.cmermedical.com/vision/imgs/71654116b2763716.png"
              alt="abiliti"
            />
          </nuxt-link>
          <nuxt-link>
            <img
              src="https://statichk.cmermedical.com/vision/imgs/f4d1dfa62bc098b5.png"
              alt="disc"
            />
          </nuxt-link>
        </div>
        <div>
          <p class="myopia-container-brand-tip">如何選擇合適的品牌？</p>
          <BtnAnimation :btnElement="btnElement" />
        </div>
      </div>

      <div class="child-myopia-bg-blue">
        <div></div>
        <div>
          <div>配戴時間</div>
          <div>
            <span>每天需配戴鏡片至少10小時</span>
            <span>請勿配戴鏡片超過15小時</span>
            <span>鏡片可每日配戴，或按視光師的個別指示每星期休息1至2日</span>
          </div>
        </div>
      </div>

      <div class="child-myopia-means">
        <div class="means-box">
          <div><span>隱形眼鏡</span><span>配戴方法</span></div>
          <div>
            <div>
              <div>
                <img
                  src="https://statichk.cmermedical.com/vision/imgs/a44f84cd6e251ccb.png"
                  alt="使用抗菌洗手液徹底清潔雙手及抹乾雙手"
                />
              </div>
              <div>使用抗菌洗手液徹底清潔雙手及抹乾雙手</div>
            </div>

            <div class="svg-hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="31"
                height="17"
                viewBox="0 0 31 17"
                fill="none"
              >
                <path
                  d="M29 2L17.8608 14.5832C16.7174 15.8748 14.707 15.8912 13.5427 14.6184L2 2"
                  stroke="#00A6CE"
                  stroke-width="2.32368"
                  stroke-linecap="round"
                />
              </svg>
            </div>

            <div>
              <div>
                <img
                  src="https://statichk.cmermedical.com/vision/imgs/8223cb182958c4be.png"
                  alt="取出隱形眼鏡，並將鏡片放在指尖上。檢查隱形眼鏡是否呈碗狀向內彎曲，如果是錯誤的方向，隱形眼鏡的邊緣可能會變得平坦
 "
                />
              </div>
              <div>
                取出隱形眼鏡，並將鏡片放在指尖上。檢查隱形眼鏡是否呈碗狀向內彎曲，如果是錯誤的方向，隱形眼鏡的邊緣可能會變得平坦
                 
              </div>
            </div>
            <div class="svg-hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="31"
                height="17"
                viewBox="0 0 31 17"
                fill="none"
              >
                <path
                  d="M29 2L17.8608 14.5832C16.7174 15.8748 14.707 15.8912 13.5427 14.6184L2 2"
                  stroke="#00A6CE"
                  stroke-width="2.32368"
                  stroke-linecap="round"
                />
              </svg>
            </div>
            <div>
              <div>
                <img
                  src="https://statichk.cmermedical.com/vision/imgs/b7f5f3fb937515eb.png"
                  alt="在鏡子前，輕輕拉起上下眼瞼，把隱形眼鏡放在眼睛上，過程中保持直視"
                />
              </div>
              <div>
                在鏡子前，輕輕拉起上下眼瞼，把隱形眼鏡放在眼睛上，過程中保持直視
              </div>
            </div>
            <div class="svg-hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="31"
                height="17"
                viewBox="0 0 31 17"
                fill="none"
              >
                <path
                  d="M29 2L17.8608 14.5832C16.7174 15.8748 14.707 15.8912 13.5427 14.6184L2 2"
                  stroke="#00A6CE"
                  stroke-width="2.32368"
                  stroke-linecap="round"
                />
              </svg>
            </div>
            <div>
              <div>
                <img
                  src="https://statichk.cmermedical.com/vision/imgs/5ffc8098ae6f6d34.png"
                  alt="放到眼睛後，眼睛向下看，鬆開眼瞼， 稍微閉上眼睛，再保持正常眨眼， 確保鏡片已在角膜中央位置"
                />
              </div>
              <div>
                放到眼睛後，眼睛向下看，鬆開眼瞼， 稍微閉上眼睛，再保持正常眨眼， 確保鏡片已在角膜中央位置
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@media screen and (min-width: 768px) {
  .svg-hidden {
    display: none;
  }
  .child-myopia-box {
    margin-bottom: 70px;
  }
  .child-myopia-content {
    max-width: 960px;
    margin: 0 auto;
    & > div:nth-child(2) {
      margin-top: 30px;
      color: #60605f;
      text-align: center;
      font-family: "Noto Sans CJK TC";
      font-size: 21px;
      font-style: normal;
      font-weight: 500;
      line-height: 45px;
    }
  }
  .child-myopia-merits {
    max-width: 960px;
    margin: 50px auto 30px;
    display: flex;
    justify-content: space-between;
    gap: 0 35px;
    & > div {
      flex: 1;
    }
    & > div:nth-child(1) {
      & > div:nth-child(1) {
        margin-bottom: 20px;
        & > div:nth-child(1) {
          color: var(--Brand-Color, #00a6ce);
          font-family: "Noto Sans HK";
          font-size: 22.5px;
          font-style: normal;
          font-weight: 700;
          line-height: 33.75px; /* 150% */
          letter-spacing: 1.125px;
        }
        & > div:nth-child(2) {
          margin-left: 45px;
          color: var(--Brand-Color, #00a6ce);
          font-family: "Noto Sans HK";
          font-size: 33.75px;
          font-style: normal;
          font-weight: 700;
          line-height: 45px; /* 133.333% */
          letter-spacing: 1.688px;
        }
      }
      & > div:nth-child(2) {
        max-width: 478px;
        & > img {
          width: 100%;
        }
      }
    }
    & > div:nth-child(2) {
      padding-top: 21px;
      display: grid;
      grid-template-columns: auto auto auto;
      gap: 20px 25px;
      & > div {
        max-width: 130px;
        display: flex;
        flex-direction: column;
        align-items: center;
        & > div:nth-child(1) {
          width: 100%;
          & > img {
            width: 100%;
          }
        }
        & > div:nth-child(2) {
          color: #60605f;
          text-align: center;
          font-family: "Noto Sans HK";
          font-size: 16.5px;
          font-style: normal;
          font-weight: 500;
          line-height: 22.5px; /* 136.364% */
          letter-spacing: 0.825px;
        }
      }
    }
  }
  .myopia-container-brand {
    & > div:nth-child(2) {
      display: flex;
      justify-content: center;
      gap: 0 75px;
      margin: 58px 0 50px;
      & > a {
        width: 266.25px;
        & > img {
          width: 100%;
        }
      }
    }
    & > div:nth-child(3) {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      & > p:nth-child(1) {
        width: 100vw;
        text-align: center;
        margin: 20px 0;
        font-size: 20px;
        color: var(--Grey, #4d4d4d);
        font-family: "Noto Sans CJK TC";
      }
    }
  }
  .child-myopia-bg-blue {
    border-radius: 15px;
    background: url(https://statichk.cmermedical.com/vision/imgs/34ec197ccf849c41.jpg)
      no-repeat;
    min-height: 370px;
    box-shadow: 0px 3px 7.5px 0px rgba(0, 0, 0, 0.25);
    max-width: 960px;
    margin: 75px auto 85px;
    box-sizing: border-box;
    display: flex;
    gap: 0 70px;
    & > div:nth-child(1) {
      flex: 4.5;
    }
    & > div:nth-child(2) {
      padding-top: 15px;
      flex: 5.5;
      & > div:nth-child(1) {
        color: var(--Deep-Blue, #3e5270);
        font-family: "Noto Sans CJK TC";
        font-size: 22.5px;
        font-style: normal;
        font-weight: 700;
        line-height: 35px; /* 200% */
        border-bottom: 2.25px solid #3e5270;
        width: fit-content;
        margin-bottom: 41px;
      }
      & > div:nth-child(2) {
        display: flex;
        flex-direction: column;
        color: var(--Deep-Blue, #3e5270);
        font-family: "Noto Sans CJK TC";
        font-size: 22.5px;
        font-style: normal;
        font-weight: 700;
        line-height: 35px; /* 200% */
        & > span {
          position: relative;
          margin-bottom: 25px;
        }
        & > span:last-child {
          margin-bottom: 0;
        }
        & > span::before {
          content: "";
          background: url(https://statichk.cmermedical.com/vision/imgs/017d81f5304355b1.png)
            no-repeat;
          background-size: 100% 100%;
          display: inline-block;
          width: 18.901px;
          height: 12.343px;
          position: absolute;
          left: -30px;
          top: 14px;
        }
      }
    }
  }
  .child-myopia-means {
    background: #eafbff;
    box-sizing: border-box;
    padding: 70px 0;
  }
  .means-box {
    max-width: 960px;
    margin: 0 auto;
    & > div:nth-child(1) {
      color: var(--Brand-2, #59ba68);
      text-align: center;
      font-family: "Noto Sans HK";
      font-size: 33.75px;
      font-style: normal;
      font-weight: 700;
      line-height: 45px; /* 133.333% */
      letter-spacing: 1.688px;
      position: relative;
      width: fit-content;
      margin: 0 auto;
      padding-bottom: 9px;
      & > span:nth-child(2) {
        color: var(--Deep-Blue, #3e5270);
      }
    }
    & > div:nth-child(1)::before {
      content: "";
      position: absolute;
      // bottom: -60%;
      top: 50%;
      transform: translateY(-50%);
      left: -75px;
      background: url("https://statichk.cmermedical.com/vision/imgs/12ebaaf276b467f0.png")
        no-repeat;
      background-size: 100% 100%;
      display: inline-block;
      width: 66px;
      height: 66px;
    }
    & > div:nth-child(1)::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 50%;
      height: 3.75px;
      border-radius: 15px;
      background: #00a6ce;
    }
    & > div:nth-child(2) {
      margin-top: 80px;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 95px 30px;
      justify-items: center;
      & > div {
        position: relative;
        & > div:nth-child(1) {
          margin-bottom: 32px;
        }
        & > div:nth-child(2) {
          color: var(--Grey, #4d4d4d);
          font-family: "Noto Sans CJK TC";
          font-size: 21px;
          font-style: normal;
          font-weight: 500;
          line-height: 45px; /* 214.286% */
          max-width: 172px;
        }
      }
      // & > div 给div的child添加伪类  除  第4和最后一个
      & > div:not(:nth-child(4), :last-child) {
        &::after {
          content: "";
          position: absolute;
          top: 50%;
          right: -40px;
          transform: translateY(-50%);
          background: url("https://statichk.cmermedical.com/vision/imgs/e3b5768533655da4.png")
            no-repeat;
          display: inline-block;
          width: 22px;
          height: 39px;
        }
      }
    }
  }
}
@media screen and (max-width: 767px) {
  .svg-hidden {
    padding-left: 30px;
    display: block;
  }
  .video-information {
    margin-bottom: 40px;
  }
  .child-myopia-merits {
    margin-top: 28px;
    padding: 0 6.41vw;
    & > div:nth-child(1) {
      display: flex;
      flex-direction: column;
      align-items: center;
      & > div:nth-child(1) {
        margin: 0 auto 0 0;
        & > div:nth-child(1) {
          color: var(--Brand-Color, #00a6ce);
          font-family: "Noto Sans HK";
          font-size: 4.012vw;
          font-style: normal;
          font-weight: 700;
          line-height: 6.28vw; /* 150% */
          letter-spacing: 0.783px;
        }
        & > div:nth-child(2) {
          padding-left: 7.682vw;
          color: var(--Brand-Color, #00a6ce);
          font-family: "Noto Sans HK";
          font-size: 5.128vw;
          font-style: normal;
          font-weight: 700;
          line-height: 8.07vw; /* 156.5% */
          letter-spacing: 1px;
        }
      }
      & > div:nth-child(2) {
        margin-top: 10px;
        width: 85.897vw;
        & > img {
          width: 100%;
        }
      }
    }
    & > div:nth-child(2) {
      margin-top: 25px;
      display: grid;
      grid-template-columns: auto auto auto;
      gap: 2.56vw 4.615vw;
      & > div {
        & > div:nth-child(1) {
          width: 25.12vw;
          height: 25.12vw;
          & > img {
            width: 100%;
          }
        }
        & > div:nth-child(2) {
          display: flex;
          flex-direction: column;
          color: #60605f;
          text-align: center;
          font-family: "Noto Sans HK";
          font-size: 3.58vw;
          font-style: normal;
          font-weight: 500;
          line-height: 4.35vw; /* 121.118% */
          letter-spacing: 0.7px;
        }
      }
    }
  }
  .child-myopia-content {
    box-sizing: border-box;
    padding: 0 26px;
    margin: 25px auto 30px;
    & > div:nth-child(2) {
      margin-top: 18px;
      color: var(--Grey-Deep, #4d4d4d);
      text-align: justify;
      font-family: "Noto Sans HK";
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: 26px; /* 185.714% */
      & > p {
        display: inline;
      }
    }
  }
  .child-myopia-bg-blue {
    border-radius: 15px;
    background: url(https://statichk.cmermedical.com/vision/imgs/70834b759522def8.jpg)
      no-repeat;
    height: 81.5vw;
    box-shadow: 0px 3px 7.5px 0px rgba(0, 0, 0, 0.25);
    max-width: 100%;
    margin: 40px auto;
    box-sizing: border-box;
    max-width: 87.17vw;
    background-size: cover;
    display: flex;
    & > div:nth-child(1) {
      flex: 5.5;
    }
    & > div:nth-child(2) {
      padding-top: 15px;
      flex: 4.5;
      & > div:nth-child(1) {
        color: var(--Deep-Blue, #3e5270);
        font-family: "Noto Sans HK";
        font-size: 4.615vw;
        font-style: normal;
        font-weight: 700;
        line-height: 20px; /* 111.111% */
        letter-spacing: 0.9px;
        width: fit-content;
        margin-bottom: 10.25vw;
      }
      & > div:nth-child(2) {
        display: flex;
        flex-direction: column;
        color: var(--Deep-Blue, #3e5270);
        font-family: "Noto Sans HK";
        font-size: 3.07vw;
        font-style: normal;
        font-weight: 700;
        line-height: 20px; /* 142.857% */
        letter-spacing: 0.7px;
        padding-right: 7.692vw;
        & > span {
          position: relative;
          margin-bottom: 25px;
        }
        & > span:last-child {
          margin-bottom: 0;
        }
        & > span::before {
          content: "";
          background: url(https://statichk.cmermedical.com/vision/imgs/017d81f5304355b1.png)
            no-repeat;
          background-size: 100% 100%;
          display: inline-block;
          width: 18.901px;
          height: 12.343px;
          position: absolute;
          left: -30px;
          top: 14px;
        }
      }
    }
  }
  .child-myopia-means {
    background: var(--Skin, #eafbff);
  }
  .means-box {
    box-sizing: border-box;
    padding: 30px 25px 26px;
    & > div:nth-child(1) {
      color: var(--Brand-2, #59ba68);
      text-align: center;
      font-family: "Noto Sans HK";
      font-size: 24px;
      font-style: normal;
      font-weight: 700;
      line-height: 40.107px; /* 167.112% */
      letter-spacing: 1.2px;
      position: relative;
      width: fit-content;
      margin: 0 auto;
      padding-bottom: 8px;
      & > span:nth-child(2) {
        color: var(--Deep-Blue, #3e5270);
      }
    }
    & > div:nth-child(1)::before {
      content: "";
      position: absolute;
      bottom: 20px;
      left: -40px;
      background: url("https://statichk.cmermedical.com/vision/imgs/12ebaaf276b467f0.png")
        no-repeat;
      background-size: 100% 100%;
      display: inline-block;
      width: 33px;
      height: 33px;
    }
    & > div:nth-child(1)::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 50%;
      height: 3.75px;
      border-radius: 15px;
      background: #00a6ce;
    }

    & > div:nth-child(2) {
      margin-top: 30px;
      & > div {
        & > div:nth-child(1) {
          width: 92px;
          height: 30px;
          margin-bottom: 12px;
          & > img {
            width: 100%;
            height: auto;
          }
        }
        & > div:nth-child(2) {
          padding-left: 30px;
          color: var(--Grey, #4d4d4d);
          font-family: "Noto Sans CJK TC";
          font-size: 14px;
          font-style: normal;
          font-weight: 500;
          line-height: 20px; /* 142.857% */
        }
        margin-bottom: 20px;
      }
    }
  }
  .myopia-container-brand {
    margin-top: 44px;
    :deep(.title-test) {
      padding: 0 90px;
      text-align: center;
    }
    :deep(.title-test::after) {
      width: 25%;
    }
    & > div:nth-child(2) {
      margin-top: 28px;
      margin-bottom: 28px;
      display: flex;
      justify-content: center;
      gap: 0 2.17vw;
      & > a {
        width: 27.585vw;
        height: 18.497vw;
        & > img {
          width: 100%;
          height: 100%;
        }
      }
    }
    & > div:nth-child(3) {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      & > p:nth-child(1) {
        width: 100vw;
        text-align: center;
        margin: 20px 0;
        font-size: 10px;
        color: var(--Grey, #4d4d4d);
        font-family: "Noto Sans CJK TC";
      }
      :deep(.slot) {
        & > div:nth-child(1) {
          border-radius: 20px;
        }
      }
    }
  }
}
</style>