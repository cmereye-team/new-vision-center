<script lang="ts" setup>
// import { renderingDome } from '../../assets/js/commonFun.js'
// const { t } = useLang()
const route = useRoute();
const _id = route.params.id as string;
let coverageDeatail: any = ref({
  id: "",
  subtitle: "",
  keywords: "",
  description: "",
});
useHead(() => ({
  title: `${coverageDeatail.value.title} ||"最新資訊 - 希瑪眼科視光中心"`,
  meta: [
    {
      hid: "description",
      name: "description",
      content: () => {
        let _description =
          "希瑪眼科視光中心提供最新資訊和眼科新聞，專注於兒童近視相關的文章。註冊視光師撰寫了控制近視的方法和護眼資訊，介紹角膜矯形鏡（OK鏡）、近視控制鏡片、近視控制隱形眼鏡及阿托品眼藥水等近視控制方案的原理和配戴方法。此外，還提供實用的護眼知識，幫助預防近視並保護眼睛健康。了解更多兒童近視控制和護眼方法的最新資訊，請訪問希瑪眼科視光中心。";
        return coverageDeatail.value.description || _description;
      },
    },
    {
      hid: "Keywords",
      name: "Keywords",
      content: () => {
        let _keywords =
          "最新資訊 兒童近視 近視控制 小朋友近視 兒童近視控制 護眼 護眼食物 護眼睛 護眼方法 控制近視鏡片 控制近視眼藥水 近視 atropine眼藥水 矯視隱形眼鏡 ok鏡 近視成因 眼睛健康 眼睛保健 新聞資訊 預防近視 註冊視光師 視光師 視光師驗眼 眼科驗眼中心 視光師驗眼中心 希瑪視光 視光中心 希瑪視光中心 希瑪眼科視光中心";
        return coverageDeatail.value.keywords || _keywords;
      },
    },
    {
      property: "og:description",
      content: () => {
        return coverageDeatail.value.desc;
      },
    },
    {
      property: "og:title",
      content: () => {
        return coverageDeatail.value.title;
      },
    },
    {
      property: "og:description",
      content: () => {
        return coverageDeatail.value.desc;
      },
    },
  ],
}));

const bannerImg = {
  pc: "https://statichk.cmermedical.com/vision/imgs/d1372c5de907c9e3.png",
  mobile: "https://statichk.cmermedical.com/vision/imgs/a946bc28a9b89d42.png",
};

const fetchData = async () => {
  await fetch(`https://content.cmervision.com/api.php/content/${_id}`)
    .then((response) => response.json())
    .then((res) => {
      const newObject = Object.assign({}, res.data);
      insidePageTitle.value = newObject.title;
      content.value = newObject.content;
      source.value = newObject.source;
      linkPage.value = newObject.ext_linkPage;
      addTime.value = newObject.ext_addTime;
      coverageDeatail.value = {
        id: newObject.id || "",
        title: newObject.subtitle || "",
        keywords: newObject.description || "",
        description: newObject.keywords || "",
      };
    })
    .catch((error: any) => {
      console.error("Error:", error);
    });
};

onMounted(async () => {
  await fetchData();
});

const insidePageTitle = ref("最新資訊");
const content = ref("");
const source = ref("");
const linkPage = ref("");
const addTime = ref("");

const activeName = ref("1");
const activeName1 = ref("1");
</script>

<template>
  <div class="news">
    <PublicBanner :banner="bannerImg">
      <!-- 插槽 -->
      <template #title>
        <div class="news-title">
          <span>最新資訊</span>
        </div>
      </template>
    </PublicBanner>
    <PublicNavbar
      :link="'/latest-news'"
      :name="'最新資訊'"
      :isInsidePage="true"
      :insidePageTitle="insidePageTitle"
    />
    <div class="news-box">
      <div class="title"></div>
      <InsidePage :id="_id" :content="content" />
      <div v-if="_id === '163'" class="news-replenish">
        <div>
          <div>配戴隱形眼鏡可能導致的疾病或問題</div>
          <div>
            <el-collapse v-model="activeName" accordion>
              <el-collapse-item title="角膜炎" name="1">
                <div class="content-collapse">
                  <div>
                    <div>病因：</div>
                    <ul>
                      <li>佩戴過長時間</li>
                      <li>佩戴隱形眼鏡睡覺或游泳</li>
                      <li>儲存器皿或處理不乾淨</li>
                      <li>未有按指示保養鏡片</li>
                      <li>吸煙</li>
                    </ul>
                  </div>
                  <div>
                    <div>症狀：</div>
                    <ul>
                      <li>眼部疼痛</li>
                      <li>眼睛通紅</li>
                      <li>無故流眼水</li>
                      <li>視力模糊</li>
                      <li>畏光或有異物感</li>
                    </ul>
                  </div>
                  <div>
                    <div>治療方法：</div>
                    <ul>
                      <li>使用含有抗生素成分的眼藥水</li>
                      <li>暫停佩戴隱形眼鏡</li>
                      <li>佩戴眼罩</li>
                      <li>嚴重或需接受角膜移植</li>
                    </ul>
                  </div>
                </div>
              </el-collapse-item>
              <el-collapse-item title="角膜潰瘍" name="2">
                <div class="content-collapse">
                  <div>
                    <div>病因：</div>
                    <ul>
                      <li>清潔方式不當</li>
                      <li>佩戴時間過長</li>
                      <li>佩戴隱形眼鏡睡覺或游泳</li>
                      <li>角膜受傷</li>
                    </ul>
                  </div>
                  <div>
                    <div>症狀：</div>
                    <ul>
                      <li>視力模糊或下降</li>
                      <li>眼部疼痛及有異物感</li>
                      <li>分泌物多且濃</li>
                      <li>眼睛變紅</li>
                    </ul>
                  </div>
                  <div>
                    <div>病因：</div>
                    <ul>
                      <li>使用含有抗生素的眼藥水或藥膏</li>
                      <li>停用隱形眼鏡</li>
                      <li>嚴重或需接受角膜手術</li>
                    </ul>
                  </div>
                </div>
              </el-collapse-item>
              <el-collapse-item title="乾眼症" name="3">
                <div class="content-collapse">
                  <div>
                    <div>病因：</div>
                    <ul>
                      <li>佩戴過長時間</li>
                      <li>淚水分泌不足</li>
                      <li>淚腺神經失調</li>
                      <li>長時間在乾燥冷氣環境下工作</li>
                    </ul>
                  </div>
                  <div>
                    <div>症狀：</div>
                    <ul>
                      <li>眼部乾澀及有異物感</li>
                      <li>雙眼灼痛</li>
                      <li>眼部分泌物粘稠</li>
                      <li>畏光及怕風</li>
                      <li>眼睛疲勞</li>
                    </ul>
                  </div>
                  <div>
                    <div>病因：</div>
                    <ul>
                      <li>減少或暫停佩戴隱形眼鏡</li>
                      <li>使用人工淚液型眼藥水或藥膏</li>
                      <li>用暖毛巾熱敷雙眼</li>
                      <li>使用淚管栓塞 （punctal plugs）</li>
                    </ul>
                  </div>
                </div>
              </el-collapse-item>
              <el-collapse-item title="角膜擦傷" name="4">
                <div class="content-collapse">
                  <div>
                    <div>病因：</div>
                    <ul>
                      <li>鏡片內部有顆粒</li>
                      <li>佩戴時間過長</li>
                      <li>眼部過乾</li>
                    </ul>
                  </div>
                  <div>
                    <div>症狀：</div>
                    <ul>
                      <li>眼部發紅</li>
                      <li>眼睛疼痛</li>
                      <li>畏光溢淚</li>
                      <li>視力模糊</li>
                      <li>頭疼或嘔心</li>
                    </ul>
                  </div>
                  <div>
                    <div>病因：</div>
                    <ul>
                      <li>使用含抗生素的眼藥水</li>
                      <li>使用人工淚液型眼藥水或藥膏</li>
                      <li>佩戴特殊隱形眼鏡</li>
                      <li>暫停佩戴隱形眼鏡</li>
                    </ul>
                  </div>
                </div>
              </el-collapse-item>
              <el-collapse-item title="眼睛過敏 （或巨乳突狀結膜炎）" name="5">
                <div class="content-collapse">
                  <div>
                    <div>病因：</div>
                    <ul>
                      <li>長期佩戴隱形眼鏡</li>
                      <li>長年使用多次性拋棄式隱形眼鏡</li>
                    </ul>
                  </div>
                  <div>
                    <div>症狀：</div>
                    <ul>
                      <li>眼睛痕癢</li>
                      <li>眼睛發紅</li>
                      <li>流眼水或分泌物</li>
                      <li>眼睛疼痛或異物感</li>
                    </ul>
                  </div>
                  <div>
                    <div>病因：</div>
                    <ul>
                      <li>停止佩戴隱形眼鏡</li>
                      <li>使用防敏感藥水</li>
                      <li>使用類固醇藥水</li>
                    </ul>
                  </div>
                </div>
              </el-collapse-item>
            </el-collapse>
          </div>
        </div>
        <div>
          <div>常見問題</div>
          <div>
            <el-collapse v-model="activeName1" accordion>
              <el-collapse-item title="1. 隱形眼鏡如何分辨正反面？" name="1">
                <div>
                  <p>用家可先將隱形眼鏡放在指腹，再觀察鏡片邊緣位置。</p>
                  <p>
                    如果四周自然翹起，呈流暢「U」形，恍如碗子的話，即是正面；假如邊緣微微向外翻，恍如碟子的話，就是反面。
                  </p>
                </div>
              </el-collapse-item>
              <el-collapse-item
                title="2. 過期隱形眼鏡仍然可以配戴使用嗎？"
                name="2"
              >
                <div>
                  <p>不建議。</p>
                  <p>
                    過期的隱形眼鏡有可能已經變質，甚至開始滋生細菌，一旦接觸眼球，隨時造成發炎、潰瘍等眼部疾病，影響深遠。
                  </p>
                </div>
              </el-collapse-item>
              <el-collapse-item title="3. 隱形眼鏡移位應該如何處理？" name="3">
                <div>
                  <p>
                    一旦發現隱形眼鏡移位，應該先沖洗乾淨雙手，然後對著鏡子尋找，或閉上雙眼感受鏡片的位置。
                  </p>
                  <p>
                    之後，你可以向雙眼滴入適量眼藥水，並用手指輕輕按摩眼瞼，並正常眨動眼睛，直至你感覺到隱形眼鏡慢慢回到眼睛中央，之後再和往常一般，將鏡片取出。
                  </p>
                </div>
              </el-collapse-item>
              <el-collapse-item
                title="4. 如果不能摘下隱形眼鏡應該如何處理？"
                name="4"
              >
                <div>
                  <p>
                    如果無法摘下隱形眼鏡，應盡快尋求專業視光師或眼科醫生協助，切勿胡亂嘗試網上偏方。
                  </p>
                </div>
              </el-collapse-item>
              <el-collapse-item
                title="5. 洗澡或睡覺時可以戴隱形眼鏡嗎？為什麼？"
                name="5"
              >
                <div>
                  <p>不建議。</p>
                  <p>
                    洗澡的自來水並非 100%
                    純淨，當中可能含有各種微生物及細菌的載體，增加眼部受感染的風險。除此之外，部分隱形眼鏡在接觸自來水後，可能會變得緊繃，造成雙眼不適。
                  </p>
                  <p>
                    另一方面，當我們入睡後，身體會減少淚水分泌，加上雙眼緊閉會減少對角膜的供氧量，假如未有摘下隱形眼鏡，輕則眼部因缺氧而發紅，嚴重有可能造成角膜發炎或潰瘍。
                  </p>
                </div>
              </el-collapse-item>
              <el-collapse-item title="6. 幾歲可以開始戴隱形眼鏡？" name="6">
                <div>
                  <p>
                    根據<a
                      href="https://www.fda.gov/consumers/consumer-updates/what-know-if-your-child-wants-contact-lenses"
                      target="_blank"
                      >美國食品藥物管理局</a
                    >指引，小朋友最快可於8歲開始佩戴隱形眼鏡。
                  </p>
                  <p>
                    不過，每個小朋友的自理能力和健康狀況都不一樣，驗配隱形眼鏡前，最好先咨詢專業視光師建議。
                  </p>
                </div>
              </el-collapse-item>
            </el-collapse>
          </div>
        </div>
      </div>
      <div class="news-info">
        <p>
          <span>文章來源︰</span><span>{{ source }}</span>
        </p>
        <p>
          <span>原文鏈接︰</span
          ><a
            :href="linkPage"
            target="_blank"
            style="border-bottom: 1px solid; cursor: pointer"
            >{{ linkPage.toUpperCase() }}</a
          >
        </p>
        <p>
          <span>更新時間︰</span><span>{{ addTime.split(" ")[0] }}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
a {
  text-decoration: none;
}




@media screen and (min-width: 768px) {


:deep(.title) {
  font-size: 40px;
  line-height: 55px;
  font-weight: 700;
  letter-spacing: 4px;
  text-align: center;
  width: 100%;
  text-wrap: wrap;
  background-color: #ffffff;
  color: #00a6ce;
}
:deep(.newsContent) {
  box-sizing: inherit;
  -webkit-font-smoothing: antialiased;
  margin-top: 0px;
  margin-bottom: 0px;
  padding: 0px;
  border: 0px;
  font-style: inherit;
  font-variant: inherit;
  font-stretch: inherit;
  font-size: 22px;
  line-height: 30px;
  letter-spacing: 2px;
  font-family: inherit;
  font-optical-sizing: inherit;
  font-kerning: inherit;
  font-feature-settings: inherit;
  font-variation-settings: inherit;
  vertical-align: baseline;
  text-align: left;
  a {
    box-sizing: inherit;
    -webkit-font-smoothing: antialiased;
    margin: 0px;
    padding: 0px;
    border: 0px;
    font-variant: inherit;
    font-weight: 700;
    font-stretch: inherit;
    line-height: 40px;
    font-optical-sizing: inherit;
    font-kerning: inherit;
    font-feature-settings: inherit;
    font-variation-settings: inherit;
    vertical-align: baseline;
    letter-spacing: 2.4px;
    color: #00a6ce;
  }
}

:deep(.weight){
  font-size: 30px ;
  font-weight: 800;
  
}

:deep(.footerNews) {
  box-sizing: inherit;
  -webkit-font-smoothing: antialiased;
  margin-top: 0px;
  margin-bottom: 0px;
  padding: 0px;
  border: 0px;
  font-style: inherit;
  font-variant: inherit;
  font-stretch: inherit;
  font-size: inherit;
  line-height: inherit;
  font-family: inherit;
  font-optical-sizing: inherit;
  font-kerning: inherit;
  font-feature-settings: inherit;
  font-variation-settings: inherit;
  vertical-align: baseline;
  text-align: left;
}


  .news-title {
    // background: url("https://statichk.cmermedical.com/vision/imgs/d1372c5de907c9e3.png")
    //   no-repeat;
    // background-size: 100% 100%;
    // width: 100%;
    // min-height: 800px;
    // position: relative;
    span {
      position: relative;
      right: -180%;
      color: var(--Brand-Color, #fff);
      text-align: center;
      font-family: "Inter";
      font-size: 60px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      letter-spacing: 12px;
    }
  }
  .news-box {
    max-width: 960px;
    margin: 48px auto 128px auto;
  }
  .news-replenish {
    max-width: 830px;
    margin: 0 auto;
    & > div {
      & > div:nth-child(1) {
        padding: 80px 0 30px;
        font-size: 36px;
        color: #60605f;
      }
    }
  }
  :deep(.el-collapse-item__header) {
    font-size: 24px;
    color: #444;
    margin: 20px 0 20px 0;
    padding: 0 40px 0 80px;
    padding-bottom: 20px;
  }
  :deep(.el-collapse-item__header):hover {
    color: #00a6ce;
  }
  :deep(.el-collapse-item__content) {
    padding: 0 40px 20px 80px;
    font-size: 18px;
    color: #1d2839;
    a {
      color: #00a6ce;
    }
  }
  :deep(.el-collapse) {
    border-bottom: none;
  }
  :deep(.is-active) {
    color: #00a6ce;
  }
  .content-collapse {
    & > div {
      margin-top: 30px;
      & > div {
        color: #000;
        font-size: 24px;
        margin-bottom: 10px;
      }
      & > ul {
        margin-left: 50px;
        & > li {
          font-size: 18px;
          color: #737e86;
        }
      }
    }
    & > div:first-child {
      margin-top: 0;
    }
  }
  .news-info {
    margin-top: 50px;
    margin-bottom: 90px;
    border-radius: 20px;
    margin-left: 100px;
    margin-right: 100px;
    border: 1px solid var(--Brand-Color, #00a6ce);
    padding: 26px 16px 26px 50px;
    color: #60605f;
    font-family: "Inter";
    font-size: 20px;
    font-style: normal;
    font-weight: 300;
    line-height: 40px; /* 200% */
    text-transform: uppercase;
    & > p {
      overflow: hidden;
      width: 100%;
      text-wrap: nowrap;
      a {
        color: var(--Brand-Color, #60605f);
      }
    }
  }
  :deep(.header-title) {
    color: #00a6ce;
    font-family: Inter;
    font-size: 30px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  :deep(.edui-video-iframe) {
    margin-top: 10px;
  }
}
@media screen and (max-width: 767px) {

:deep(.title) {
  font-size: 20px;
  line-height: 26px;
  font-weight: 700;
  letter-spacing: 2px;
  text-align: center;
  width: 100%;
  text-wrap: wrap;
  background-color: #ffffff;
  color: #00a6ce;
}
:deep(.newsContent) {
  box-sizing: inherit;
  -webkit-font-smoothing: antialiased;
  margin-top: 0px;
  margin-bottom: 0px;
  padding: 0px;
  border: 0px;
  font-style: inherit;
  font-variant: inherit;
  font-stretch: inherit;
  font-size: 16px !important;
  line-height: 26px;
  letter-spacing: 2px;
  font-family: inherit;
  font-optical-sizing: inherit;
  font-kerning: inherit;
  font-feature-settings: inherit;
  font-variation-settings: inherit;
  vertical-align: baseline;
  text-align: left;
  a {
    font-size: 18px;
    box-sizing: inherit;
    -webkit-font-smoothing: antialiased;
    margin: 0px;
    padding: 0px;
    border: 0px;
    font-variant: inherit;
    font-weight: 700;
    font-stretch: inherit;
    line-height: 24px;
    font-optical-sizing: inherit;
    font-kerning: inherit;
    font-feature-settings: inherit;
    font-variation-settings: inherit;
    vertical-align: baseline;
    letter-spacing: 2px;
    color: #00a6ce;
  }
}
:deep(.firstRow){
  td{
    border-radius: 10px !important;
    overflow: hidden;
    padding: 5px;
  }
}

:deep(.weight){
  font-size: 28px ;
  font-weight: 800;
  
}

:deep(.footerNews) {
  box-sizing: inherit;
  -webkit-font-smoothing: antialiased;
  margin-top: 0px;
  margin-bottom: 0px;
  padding: 0px;
  border: 0px;
  font-style: inherit;
  font-variant: inherit;
  font-stretch: inherit;
  font-size: inherit;
  line-height: inherit;
  font-family: inherit;
  font-optical-sizing: inherit;
  font-kerning: inherit;
  font-feature-settings: inherit;
  font-variation-settings: inherit;
  vertical-align: baseline;
  text-align: left;
}



  .news-title {
    // background: url("https://statichk.cmermedical.com/vision/imgs/a946bc28a9b89d42.png")
    //   no-repeat;
    // background-size: 100% 100%;
    // width: 100%;
    // min-height: 390px;
    // position: relative;
    min-height: 390px;
    width: 100%;
    position: absolute;
    top: 0;
    margin-top: 87px;
    span {
      position: absolute;
      bottom: 30px;
      right: 20px;
      color: var(--Brand-Color, #fff);
      text-align: center;
      font-family: "Inter";
      font-size: 28px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      letter-spacing: 5.6px;
    }
  }
  .news-box {
    margin-top: 28px;
    padding: 0 24px;
  }
  .news-replenish {
    & > div {
      & > div:nth-child(1) {
        margin-top: 20px;
        margin-bottom: 10px;
        padding: 20px 0 10px;
        font-size: 20px;
        color: #60605f;
      }
    }
  }
  :deep(.el-collapse-item__header) {
    font-size: 14px;
    color: #444;
    margin: 10px 0 10px 0;
    padding: 0 10px 0 10px;
    padding-bottom: 10px;
  }
  :deep(.el-collapse-item__header):hover {
    color: #00a6ce;
  }
  :deep(.el-collapse-item__content) {
    padding: 0 10px 20px 40px;
    font-size: 12px;
    color: #1d2839;
    a {
      color: #00a6ce;
    }
  }
  :deep(.el-collapse) {
    border-bottom: none;
  }
  :deep(.is-active) {
    color: #00a6ce;
  }

  :deep(.header-title) {
    color: #00a6ce;
    font-family: Inter;
    font-size: 13px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  :deep(.edui-video-iframe) {
    margin-top: 10px;
  }

  :deep(.edui-video-iframe) {
    width: 100%;
    height: 192px;
  }
  .content-collapse {
    & > div {
      margin-top: 20px;
      & > div {
        color: #000;
        font-size: 14px;
        margin-bottom: 10px;
      }
      & > ul {
        margin-left: 40px;
        & > li {
          font-size: 14px;
          color: #737e86;
        }
      }
    }
    & > div:first-child {
      margin-top: 0;
    }
  }

  .news-info {
    margin-top: 30px;
    margin-bottom: 90px;
    border-radius: 20px;
    border: 1px solid var(--Brand-Color, #00a6ce);
    padding: 20px 8px 15px 20px;
    color: #60605f;
    font-family: "Inter";
    font-size: 14px;
    font-style: normal;
    font-weight: 300;
    line-height: 24px; /* 200% */
    text-transform: uppercase;
    & > p {
      overflow: hidden;
      width: 100%;
      text-wrap: nowrap;
      a {
        color: var(--Brand-Color, #60605f);
      }
    }
  }
}
</style>