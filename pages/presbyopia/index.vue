<script lang="ts" setup>
useHead(() => ({
  title: "老花漸進鏡 - 希瑪眼科視光中心",
}));
const bannerImg = {
  pc: "https://static.cmereye.com/imgs/2024/07/5d7947a339ef25d4.png",
  mobile: "https://static.cmereye.com/imgs/2024/07/2a416d456643f54e.png",
};
const isType = ref(0);
const checkType = (type: number) => {
  isType.value = type;
};
import getWindowSize from "@/utils/width";
const isPc = ref(true);

onMounted(() => {
  let { widthState, width } = getWindowSize();
  window.addEventListener("resize", () => {
    let { widthState, width } = getWindowSize();
    isPc.value = widthState;
  });
  isPc.value = widthState;
});

const btnElement = ref({
  title: "立即查詢了解更多",
  svgIcon: `<svg data-v-f39dd64a="" xmlns="http://www.w3.org/2000/svg" width="31" height="32" viewBox="0 0 31 32" fill="none"><path data-v-f39dd64a="" d="M8.69818 13.784L7.12698 14.7845M8.14371 10.663L6.32422 10.269M9.97263 8.05797L8.9707 6.50049M13.1167 7.49603L13.5193 5.68729M15.7324 9.30498L17.3036 8.30452M30.125 15.875C30.125 23.9522 23.5772 30.5 15.5 30.5C7.42284 30.5 0.875 23.9522 0.875 15.875C0.875 7.79784 7.42284 1.25 15.5 1.25C23.5772 1.25 30.125 7.79784 30.125 15.875ZM24.4299 15.3654L12.4305 10.5875C12.1657 10.4047 11.809 10.631 11.8644 10.9475L11.1063 23.8327C11.1509 24.0883 11.486 24.1592 11.6337 23.9447L14.7104 19.2976C14.8738 19.06 15.2279 19.0645 15.3835 19.3064L19.4847 25.6941C19.6665 25.9773 20.0456 26.0598 20.3313 25.8782L22.4179 24.5522C22.7036 24.3706 22.7879 23.9938 22.606 23.7106L18.5053 17.3228C18.3498 17.0809 18.4948 16.7591 18.7804 16.7114L24.3115 15.8881C24.5695 15.8453 24.6443 15.5132 24.4299 15.3654Z" stroke="#DB4444" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>`,
  isExternalLink: true,
  // isExternalLink 外链 true
  link: "https://api.whatsapp.com/send?phone=85269180511&text=%E4%BD%A0%E5%A5%BD,%E6%88%91%E6%83%B3%E6%9F%A5%E8%A9%A2",
});

let imgLeft = ref("50%");
const yuanspan = ref(null);
const { elementX, elementWidth } = useMouseInElement(yuanspan);
let isDragging = ref(false);
const isPresbyopiaOrMirror = ref(false);
watch(elementX, (n, o) => {
  if (isDragging.value) {
    let a = (elementX.value + 5) / elementWidth.value;
    if (a < 0) {
      imgLeft.value = "10px";
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
  checkType(0);
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
const miSightQuestionList = [
  {
    q: "完成白內障手術後需要戴近視眼鏡或老花眼鏡嗎?",
    a: [
      `需要。因為現時的白內障手術多數採用「單焦」人工晶體未具有同時調節看遠、看近的能力。除非你選擇用「多焦」人工晶體做矯`,
      `正老花眼的白內障手術，否則患者術後可能仍會剩餘一些近視或散光，這樣就可能需要考慮配鏡。`,
    ],
    mAq: [
      `需要。因為現時的白內障手術多數採用「單焦」人工晶體未具有同時調節看遠、看近的能力。除非你選擇用「多焦」人工晶體做矯正老花眼的白內障手術，否則患者術後可能仍會剩餘一些近視或散光，這樣就可能需要考慮配鏡。`,
    ],
  },
  {
    q: "術後能配戴舊有的眼鏡嗎?",
    a: [
      `需要。因為現時的白內障手術多數採用「單焦」人工晶體未具有同時調節看遠、看近的能力。除非你選擇用「多焦」人工晶體做矯`,
      `正老花眼的白內障手術，否則患者術後可能仍會剩餘一些近視或散光，這樣就可能需要考慮配鏡。`,
    ],
    mAq: [
      `需要。因為現時的白內障手術多數採用「單焦」人工晶體未具有同時調節看遠、看近的能力。除非你選擇用「多焦」人工晶體做矯正老花眼的白內障手術，否則患者術後可能仍會剩餘一些近視或散光，這樣就可能需要考慮配鏡。`,
    ],
  },
  {
    q: "術後多久可以驗配漸進眼鏡?",
    a: [
      `需要。因為現時的白內障手術多數採用「單焦」人工晶體未具有同時調節看遠、看近的能力。除非你選擇用「多焦」人工晶體做矯`,
      `正老花眼的白內障手術，否則患者術後可能仍會剩餘一些近視或散光，這樣就可能需要考慮配鏡。`,
    ],
    mAq: [
      `需要。因為現時的白內障手術多數採用「單焦」人工晶體未具有同時調節看遠、看近的能力。除非你選擇用「多焦」人工晶體做矯正老花眼的白內障手術，否則患者術後可能仍會剩餘一些近視或散光，這樣就可能需要考慮配鏡。`,
    ],
  },
];
</script>

<template>
  <div class="video-information">
    <PublicBanner :banner="bannerImg">
      <!-- 插槽 -->
      <template #title>
        <div class="profile-title"></div>
      </template>
    </PublicBanner>
    <PublicNavbar
      :name="'成人視力服務'"
      :isInsidePage="true"
      :insidePageTitle="'老花漸進鏡'"
    />
    <div class="presbyopia-box">
      <div class="what-presbyopia">
        <PublicPageTitle :title="'甚麼是老花？'" />
        <div>
          <span
            >大約40歲開始，任何人都有機會患上老花。老花是因睫狀肌退化及晶體失去彈性，影</span
          >
          <span
            >響眼睛對焦功能，引致看近事物時感到視線模糊，而看遠方景物即不受影響。</span
          >
        </div>
      </div>
      <div class="presbyopia-glasses" v-if="isPresbyopiaOrMirror">
        <PublicPageTitle :title="'漸進鏡片'" />
        <div>
          <span
            >漸進鏡片是光學技術上的一大突破，配戴者能在同一塊鏡片上，看清遠、中、近距離</span
          >
          <span>的事物，讓老花人士看事物時更靈活，更方便。</span>
        </div>
      </div>
      <div class="presbyopia-glasses" v-else>
        <PublicPageTitle :title="'老花眼鏡'" />
        <div>
          <span
            >老花人士本身已有近視、遠視或散光，看不同距離的景物時均可能感到困難。如果只</span
          >
          <span
            >配戴普通度數眼鏡或老花眼鏡，閱讀或看近東西時，需要時常戴上或除下眼鏡才能看</span
          >
          <span>得清楚，對日常生活十分不便。</span>
        </div>
      </div>
      <div class="comparison">
        <div>
          <div>老花眼鏡</div>
          <div>漸進鏡片</div>
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
              src="https://static.cmereye.com/imgs/2024/05/71a93a687a3f8551.png"
              alt="老花眼鏡"
            />
          </div>
          <span :style="{ left: imgLeft }" id="imgline"> </span>
          <img
            src="https://static.cmereye.com/imgs/2024/05/157f0472eedb727d.png"
            alt="漸進鏡片"
          />
        </div>
        <div>
          <div>{{ `<向左移動` }}</div>
          <div>{{ `向右移動>` }}</div>
        </div>
      </div>

      <div class="theory">
        <div>
          <PublicPageTitle :title="'技術原理'" />
          <div>
            <span
              >漸進鏡是一塊能同時矯正多種視力問題的鏡片。原理是透過在同一塊鏡片上</span
            >
            <span
              >提供不同的焦點，使配戴者只需一副眼鏡便能解決遠視、近視和老花問題。</span
            >
          </div>
          <div>
            <img
              src="https://static.cmereye.com/imgs/2024/05/9975c36554a2c968.png"
              alt=""
            />
          </div>
          <div>
            <span
              >鏡片的不同位置適用於不同的視力需要，其結構主要分為三大部份：</span
            >
            <span
              >鏡片的上半部分會配以「遠用度數」，用作平常觀看遠方景物；</span
            >
            <span>中間部分是「中光區」，用於看中近距離的景物如電腦；</span>
            <span
              >至於鏡片的下方則配以「近用度數」，用作看近距離景物如閱讀文件和看手提電話。</span
            >
          </div>
        </div>
      </div>
      <div class="type">
        <PublicPageTitle :title="'鏡片類型'" />
        <div class="type-show-style" v-if="isType === 0">
          <div>
            <img
              src="https://static.cmereye.com/imgs/2024/05/898c66bd6fa9a2d0.png"
              alt="一般漸進鏡片"
            />
          </div>
        </div>
        <div class="type-show-style" v-else-if="isType === 2">
          <div>
            <img
              src="https://static.cmereye.com/imgs/2024/05/5c6eda3929b3d1a6.png"
              alt="戶外變色漸進鏡片"
            />
          </div>
        </div>
        <div class="type-show-style" v-else-if="isType === 1">
          <div>
            <img
              src="https://static.cmereye.com/imgs/2024/05/d2f69094c0ede78e.png"
              alt="辦公室漸進鏡片"
            />
          </div>
        </div>
        <div class="type-show-style" v-else>
          <div>
            <img
              src="https://static.cmereye.com/imgs/2024/05/47c0c7944ae29ee2.png"
              alt="個人化漸進鏡片"
            />
          </div>
        </div>
        <div>
          <span>視光師會先為客人進行視力檢查，再就著客人的個人生活模式、</span
          ><span>用眼習慣及視光數據等為客人訂製合適的鏡片。</span>
        </div>
        <div>
          <div
            @click="checkType(0)"
            :class="isType == 0 ? 'active-bg' : 'hide-active'"
          >
            <div>
              <img
                src="https://static.cmereye.com/imgs/2024/05/240c6b42780f48f0.png"
                alt="一般漸進鏡片"
              />
            </div>
            <div><span>一般漸進鏡片</span></div>
          </div>
          <div
            @click="checkType(1)"
            :class="isType == 1 ? 'active-bg' : 'hide-active'"
          >
            <div>
              <img
                src="https://static.cmereye.com/imgs/2024/05/53295f03846aa04b.png"
                alt="辦公室漸進鏡片"
              />
            </div>
            <div><span>辦公室漸進鏡片</span></div>
          </div>
          <div
            @click="checkType(2)"
            :class="isType == 2 ? 'active-bg' : 'hide-active'"
          >
            <div>
              <img
                src="https://static.cmereye.com/imgs/2024/05/a9a9d2b01adab5ec.png"
                alt="戶外變色漸進鏡片"
              />
            </div>
            <div><span>戶外變色漸進鏡片</span></div>
          </div>
          <div
            @click="checkType(3)"
            :class="isType == 3 ? 'active-bg' : 'hide-active'"
          >
            <div>
              <img
                src="https://static.cmereye.com/imgs/2024/05/5d857fccb22021bb.png"
                alt="個人化漸進鏡片"
              />
            </div>
            <div><span>個人化漸進鏡片</span></div>
          </div>
        </div>
        <div v-if="isType == 0" class="type-show-style-text">
          <span>一般漸進鏡片</span>
          <p>
            一般漸進鏡片適用於大多數人，鏡片平均分配了觀看<span>遠、中、近景物</span>的度數鏡片。通常能為你<span>提供一個相對寬闊的閱讀區域</span>，但框架亦因此需要有一定大小，以允許有足夠的垂直高度從遠距離視覺平滑過渡到閱讀。一般漸進的鏡片相對實惠，適合大多數人的預算。
          </p>
        </div>
        <div v-else-if="isType == 2" class="type-show-style-text">
          <span>戶外變色漸進鏡片</span>
          <p>
            戶外變色漸進鏡片同時具備<span>漸進及變色功能</span>。這種鏡片較著<span>重遠距離視野</span>，<br
              v-if="isPc"
            />
            而<span>鏡片兩旁的「模糊區」亦較細，可大幅減少鏡片的扭曲</span>，讓配戴者更舒適自在地細看自然景色，<br
              v-if="isPc"
            />
            非常適合熱愛進行戶外活動的人士。
          </p>
        </div>
        <div v-else-if="isType == 1" class="type-show-style-text">
          <span>辦公室漸進鏡片</span>
          <p>
            辦公室漸進鏡片<span>適合一些工作或日常生活上</span>，需要長時間使用電腦或處理文書工作的人士。一般漸進鏡<br
              v-if="isPc"
            />
            片的<span>中近距離視野區域範圍較小</span>
            ，配戴者在工作時可能需要長期保持仰頭姿勢，<br v-if="isPc" />
            才能看清事物，容易令眼睛和頸部疲勞：相反， 辦公室漸進鏡片<br
              v-if="isPc"
            />
            用作<span>看遠景的位置</span>範圍<span>較小，看中、近距離的鏡片範圍則較大</span>，讓配戴者在閱讀時更舒適。
          </p>
        </div>
        <div v-else class="type-show-style-text">
          <span>個人化漸進鏡片</span>
          <p>
            每位客人的生活需要和視光數據都不一樣，因此在設計鏡片時，視光師會<span
              >考慮配戴者的生活習慣、雙眼</span
            ><br v-if="isPc" />
            <span>的健康狀況、視覺需要、瞳距或鏡框的孤度</span
            >等等。如客人選擇頂端的個人化漸進鏡片，視光師及配鏡師<br
              v-if="isPc"
            />
            便能為客人度身訂製出最合適的漸進眼鏡，獲得<span>自然和優越的視覺感觀體驗</span>。
          </p>
        </div>
      </div>
      <div class="contrast">
        <PublicPageTitle :title="'鏡片對比'" />
        <div>
          <div>
            <div>視光產品</div>
            <div>適合人士</div>
            <div>優點</div>
            <div>達致效果</div>
          </div>
          <div>
            <div>一般漸進</div>
            <div><span>大多數老花人士</span></div>
            <div>
              <span>價錢實惠可看清遠、</span>
              <span>中、近距離的物件</span>
            </div>
            <div>
              <span>對鏡片要求較高的人</span>
              <span>士</span>
            </div>
          </div>
          <div>
            <div>辦公室漸進</div>
            <div>
              <span>需要長時間使用</span>
              <span>電腦和處理文書</span>
              <span>工作的人士</span>
            </div>
            <div>
              <span>專門為觀看中、近距</span>
              <span>離物件而設增加視覺</span>
              <span>舒適度</span>
            </div>
            <div>
              <span>避免因長期抬頭觀看</span>
              <span>而引起的眼睛及頸部</span>
              <span>不適</span>
            </div>
          </div>
          <div>
            <div>戶外變色漸進</div>
            <div><span>熱愛戶外運動人士</span></div>
            <div>
              <span>更著重於觀看遠景物</span>
              <span>鏡片兩旁的「模糊</span>
              <span>區」較細，減少影像</span>
              <span>扭曲情況</span>
            </div>
            <div>
              <span>遠距離景觀視覺較</span>
              <span>自然</span>
            </div>
          </div>
          <div>
            <div>個人化漸進</div>
            <div>
              <span>對鏡片要求</span>
              <span>較高的人士</span>
            </div>
            <div>
              <span>個性化訂製能同時</span>
              <span>考慮到不同的視力</span>
              <span>需要</span>
            </div>
            <div>
              <span>最能配合客人的實際</span>
              <span>需要</span>
            </div>
          </div>
        </div>
        <div v-if="!isPc">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="27"
            height="27"
            viewBox="0 0 27 27"
            fill="none"
          >
            <path
              d="M11.3059 7.76195C11.1371 7.76195 10.9684 7.82945 10.8334 7.96446C10.5634 8.23446 10.5634 8.65634 10.8334 8.92634L15.8959 13.9889C16.1659 14.2589 16.5878 14.2589 16.8578 13.9889C17.1278 13.7189 17.1278 13.297 16.8578 13.027L11.7952 7.96446C11.6434 7.82945 11.4746 7.76195 11.3059 7.76195Z"
              fill="#00A6CE"
            />
            <path
              d="M16.3684 12.8245C16.1997 12.8245 16.0309 12.892 15.8959 13.027L10.8334 18.0895C10.5634 18.3595 10.5634 18.7814 10.8334 19.0514C11.1034 19.3214 11.5252 19.3214 11.7952 19.0514L16.8578 13.9888C17.1278 13.7188 17.1278 13.297 16.8578 13.027C16.7059 12.892 16.5372 12.8245 16.3684 12.8245Z"
              fill="#00A6CE"
            />
            <path
              d="M13.5002 -0.000320435C6.0582 -0.000320435 0 6.05788 0 13.4998C0 20.9418 6.0582 27 13.5002 27C20.9421 27 27.0003 20.9418 27.0003 13.4998C27.0003 6.05788 20.9421 -0.000320435 13.5002 -0.000320435ZM13.5002 25.65C6.80071 25.65 1.35002 20.1993 1.35002 13.4998C1.35002 6.80038 6.80071 1.3497 13.5002 1.3497C20.1996 1.3497 25.6503 6.80038 25.6503 13.4998C25.6503 20.1993 20.1996 25.65 13.5002 25.65Z"
              fill="#00A6CE"
            />
          </svg>
        </div>
      </div>
      <div class="brand">
        <PublicPageTitle :title="'常見鏡片品牌'" />
        <div>
          <div>
            <img
              src="https://static.cmereye.com/imgs/2024/05/138627324712b3bf.png"
              alt="zeiss"
            />
          </div>
          <div>
            <img
              src="https://static.cmereye.com/imgs/2024/05/c2f55aa666e285d6.png"
              alt="hoya"
            />
          </div>
          <div>
            <img
              src="https://static.cmereye.com/imgs/2024/05/10b9b32e1fc4ea9d.png"
              alt="rodenstock"
            />
          </div>
          <div>
            <img
              src="https://static.cmereye.com/imgs/2024/05/0ac5fc502c0c0cc1.png"
              alt="varilux"
            />
          </div>
        </div>
        <!-- <a class="btn-bg">
          <div>
            <span>立即查詢了解更多</span>
            <span
              ><img
                src="https://static.cmereye.com/imgs/2024/05/93740deca665eceb.png"
                alt="立即查詢了解更多"
            /></span>
          </div>
        </a> -->
        <div>
          <BtnAnimation :btnElement="btnElement" />
        </div>
      </div>
      <div class="question">
        <PublicCollapse
          :title="'老花漸進鏡片常見問題'"
          :listQuestion="miSightQuestionList"
          :testWidth="true"
        />
      </div>
      <div class="maintain">
        <PublicPageTitle :title="'如何保養漸進眼鏡？'" />
        <div>
          <div class="maintain-items">
            <div>
              <img
                src="https://static.cmereye.com/imgs/2024/05/e7afab7f5dbaac9f.png"
                alt=""
              />
            </div>
            <div>
              <span>保持眼鏡清潔</span>
              <span>・建議使用超細纖維或無絨布擦抹鏡片。</span>
              <span
                >・定期使用溫和、不含酒精的鏡片清潔液或稀釋梘液清潔鏡片。</span
              >
              <span
                >・眼鏡應避免接觸化學物品，如清潔劑、頭髮定型水或香水，以免破壞鏡片。</span
              >
            </div>
          </div>
          <div class="maintain-items">
            <div>
              <img
                src="https://static.cmereye.com/imgs/2024/05/e6d530002f48f642.png"
                alt=""
              />
            </div>
            <div>
              <span>正確存放眼鏡</span>
              <span
                >在不配戴時，最好使用一個硬盒存放眼鏡，以免眼鏡刮花或變形。</span
              >
            </div>
          </div>
          <div class="maintain-items">
            <div>
              <img
                src="https://static.cmereye.com/imgs/2024/05/9a47c4aa7af6bfe7.png"
                alt=""
              />
            </div>
            <div>
              <span>避免以下可能會破壞鏡片的行為</span>
              <span
                >・不應以紙巾、餐巾或衣物擦抹鏡片，可能會對鏡片表面造成破壞。</span
              >
              <span>・不應把眼鏡長時間放置於高溫或太陽直射的地方。</span>
              <span>・不應用酒精清潔膠框眼鏡。</span>
              <span>・不應將鏡片朝下放置，否則有機會刮花鏡片。</span>
              <span>・不應單手戴或除眼鏡，以免眼睛變形，影響視覺效果。</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@media screen and (min-width: 768px) {
  .presbyopia-box {
    margin: 95px auto 75px;
  }
  .maintain-items {
    display: flex;
    box-sizing: border-box;
    border-radius: 120px;
    background: var(--Skin, #eafbff);
    padding: 21px 32px;
    gap: 0 42px;
    & > div:nth-child(2) {
      display: flex;
      flex-direction: column;
      color: var(--Grey-Deep, #4d4d4d);
      text-align: justify;
      font-family: "Noto Sans CJK TC";
      font-size: 21px;
      font-style: normal;
      font-weight: 500;
      line-height: 45px; /* 214.286% */
      & > span:nth-child(1) {
        color: var(--Brand-Color, #00a6ce);
        font-family: "Noto Sans HK";
        font-size: 22.5px;
        font-style: normal;
        font-weight: 700;
        line-height: 33.75px; /* 150% */
        letter-spacing: 1.125px;
        margin-bottom: 10px;
      }
    }
  }
  .maintain {
    margin: 55px auto 75px;
    max-width: 966px;
    & > div:nth-child(2) {
      display: flex;
      flex-direction: column;
      margin-top: 30px;
      & > div {
        margin-bottom: 22px;
      }
      & > div:nth-child(2) {
        & > div:nth-child(2) {
          padding-top: 18px;
        }
      }
      & > div:nth-child(3) {
        border-radius: 135px;
      }
    }
  }
  .question {
    margin: 65px auto 55px;
  }
  .brand {
    max-width: 960px;
    margin: 70px auto 65px;
    & > div:nth-child(2) {
      margin-top: 42px;
      display: flex;
      gap: 0 38px;
      & > div {
        overflow: hidden;
        border-radius: 25px;
        box-shadow: 2px 3px 8px 1px #0000007d;
        display: flex;
        justify-content: center;
        align-items: center;
        & > img {
          width: 100%;
          height: 100%;
        }
      }
    }
    & > div:nth-child(3) {
      margin-top: 36px;
      display: flex;
      justify-content: center;
    }
  }
  .btn-bg {
    & > div {
      display: flex;
      align-items: center;
      border-radius: 20px;
      background: var(
        --Style,
        linear-gradient(90deg, #00a6ce 25.95%, #3346ed 100%)
      );
      width: fit-content;
      padding: 5px 8px 5px 20px;
      border: 5px solid #ffffff;
      & > span:nth-child(1) {
        color: var(--White, #fff);
        font-family: "Noto Sans HK";
        font-size: 18.75px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        letter-spacing: 1.875px;
        margin-right: 14px;
      }
      & > span:nth-child(2) {
        width: 39px;
        & > img {
          width: 100%;
        }
        display: flex;
        justify-content: center;
        align-items: center;
      }
      position: relative;
      z-index: 5;
    }
    background: var(
      --Style,
      linear-gradient(90deg, #00a6ce 25.95%, #3346ed 100%)
    );
    display: flex;
    border-radius: 25px;
    padding: 4px;
    width: fit-content;
    margin: 0 auto;
  }
  .contrast {
    background: var(--Skin, #eafbff);
    margin: 50px auto 70px;
    box-sizing: border-box;
    padding: 60px 0 80px;
    & > div:nth-child(2) {
      max-width: 960px;
      margin: 35px auto 0;
      display: flex;
      & > div {
        flex: 1;
        max-width: 189px;
        border-radius: 25px;
        & > div:nth-child(1) {
          height: 143px;
          font-family: "Inter";
          font-size: 22.5px;
          font-style: normal;
          font-weight: 600;
          line-height: normal;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        & > div:nth-child(2) {
          height: 115px;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
        }
        & > div:nth-child(3) {
          height: 150px;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
        }
        & > div:nth-child(4) {
          height: 118px;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
        }
      }
      & > div:nth-child(1) {
        background: #00517e;
        color: #fff;
        & > div {
          border-bottom: 1.695px solid #fff;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        & > div:nth-child(2),
        & > div:nth-child(3) {
          background: #4a83a3;
        }
        & > div:nth-child(2),
        & > div:nth-child(3),
        & > div:nth-child(4) {
          font-family: "Inter";
          font-size: 22.5px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
        }
        & > div:last-child {
          border-bottom: none;
        }
      }
      & > div:nth-child(2) {
        background: #d1f0f3;
        color: #00a6ce;
        & > div:nth-child(2) {
          background: #e1f3f7;
        }
        & > div {
          border-bottom: 1.695px solid #21aaca;
        }
        & > div:last-child {
          border-bottom: none;
        }
      }
      & > div:nth-child(3) {
        color: #59ba68;
        background: #e6fce9;
        & > div:nth-child(2) {
          background: #cef2d4;
        }
        & > div {
          border-bottom: 1.695px solid #59ba68;
        }
        & > div:last-child {
          border-bottom: none;
        }
      }
      & > div:nth-child(4) {
        color: #6c2a7e;
        background: #d2b3e2;
        & > div:nth-child(2) {
          background: #f4e1ff;
        }
        & > div {
          border-bottom: 1.695px solid #85439b;
        }
        & > div:last-child {
          border-bottom: none;
        }
      }
      & > div:nth-child(5) {
        color: #0e72af;
        background: #a6d8f7;
        & > div:nth-child(2) {
          background: #d2f0ff;
        }
        & > div {
          border-bottom: 1.695px solid #3993d3;
        }
        & > div:last-child {
          border-bottom: none;
        }
      }
    }
  }
  .type-show-style {
    display: block;
    margin: 30px auto 20px;
    min-height: 252px;
    & > div:nth-child(1) {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 20px;
    }
  }
  .type-show-style-text {
    display: block;
    margin: 0 auto;
    & > span {
      width: 100%;
      display: inline-block;
      color: var(--Deep-Blue, #3e5270);
      text-align: center;
      font-family: "Noto Sans HK";
      font-size: 33.75px;
      font-style: normal;
      font-weight: 700;
      line-height: 45px; /* 133.333% */
      letter-spacing: 1.688px;
    }
    & > p {
      margin-top: 10px;
      color: var(--Grey, #4d4d4d);
      text-align: center;
      font-family: "Noto Sans CJK TC";
      font-size: 21px;
      font-style: normal;
      font-weight: 500;
      line-height: 45px; /* 214.286% */
      & > span {
        color: var(--Brand-Color, #00a6ce);
        font-family: "Noto Sans CJK TC";
        font-size: 21px;
        font-style: normal;
        font-weight: 500;
        line-height: 45px;
      }
    }
  }
  .active-bg {
    border: 2px solid #00a6ce;
    transform: scale(1.05);
  }
  .type {
    max-width: 960px;
    margin: 60px auto 45px;
    & > div:nth-child(3) {
      display: flex;
      flex-direction: column;
      color: var(--Brand-Color, #00a6ce);
      text-align: center;
      font-family: "Noto Sans CJK TC";
      font-size: 15px;
      font-style: normal;
      font-weight: 700;
      line-height: 22.5px; /* 150% */
    }
    & > div:nth-child(4) {
      margin: 50px auto;
      display: flex;
      justify-content: center;
      gap: 0 28px;
      & > div {
        cursor: pointer;
        border-radius: 15px;
        box-shadow: 0px 4.5px 4.5px 0px rgba(0, 0, 0, 0.25);
        position: relative;
        & > div:nth-child(2) {
          position: absolute;
          bottom: 0;
          color: var(--Deep-Blue, #3e5270);
          text-align: center;
          font-family: "Noto Sans HK";
          font-size: 20px;
          font-style: normal;
          font-weight: 500;
          line-height: 33.35px; /* 166.75% */
          left: 50%;
          transform: translateX(-50%);
          width: 100%;
          min-height: 42px;
          border-radius: 0px 0px 14.342px 14.342px;
          background: var(--Skin, #eafbff);
        }
      }
      & > div:hover {
        transform: scale(1.05);
        box-shadow: 0px 0px 2px 2px var(--Brand-Color, #00a6ce);
      }
    }
  }
  .theory {
    background: #eafbff;
    padding: 45px 0 35px;
    & > div {
      max-width: 960px;
      margin: 0 auto;
      & > div:nth-child(2) {
        margin-top: 35px;
        display: flex;
        flex-direction: column;
        color: #60605f;
        text-align: center;
        font-family: "Noto Sans CJK TC";
        font-size: 21px;
        font-style: normal;
        font-weight: 500;
        line-height: 45px; /* 214.286% */
      }
      & > div:nth-child(3) {
        margin: 5px auto;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      & > div:nth-child(4) {
        & > span:nth-child(1) {
          color: var(--Brand-Color, #00a6ce);
          text-align: center;
          font-family: "Noto Sans CJK TC";
          font-size: 22.5px;
          font-style: normal;
          font-weight: 700;
          line-height: 45px; /* 200% */
        }
        color: #60605f;
        font-family: "Noto Sans CJK TC";
        text-align: center;
        font-size: 21px;
        font-style: normal;
        font-weight: 500;
        line-height: 45px;
        display: flex;
        flex-direction: column;
      }
    }
  }
  .comparison {
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
      }
    }
  }
  .presbyopia-glasses {
    & > div:nth-child(2) {
      min-height: 135px;
    }
  }
  .presbyopia-glasses,
  .what-presbyopia {
    max-width: 960px;
    margin: 95px auto 75px;
    box-sizing: border-box;
    & > div:nth-child(2) {
      padding: 0 85px;
      margin-top: 28px;
      display: flex;
      flex-direction: column;
      color: #60605f;
      text-align: center;
      font-family: "Noto Sans CJK TC";
      font-size: 21px;
      font-style: normal;
      font-weight: 500;
      line-height: 45px; /* 214.286% */
    }
  }
  .profile-title {
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
  .imagetowebp {
    &-canvasWebp {
      max-width: 567px;
      margin: 0 auto;
      position: relative;
      display: flex;
      justify-content: center;
      img {
        //禁止选中
        user-select: none;
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
          width: auto;
          height: 100%;
        }
      }
      span {
        width: 62px;
        height: 567px;
        background: url("https://static.cmereye.com/imgs/2024/05/1a68b54b1a299577.png")
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
}
@media screen and (max-width: 767px) {
  .presbyopia-box {
    // padding: 0 23px 0 22px;
  }
  .maintain {
    margin-top: 31px;
    margin-bottom: 41px;
    padding: 0 23px;
    & > div:nth-child(2) {
      margin-top: 23px;
      & > div {
        margin-bottom: 10px;
        border-radius: 20px;
        background: var(--Skin, #eafbff);
        display: flex;
        box-sizing: border-box;
        gap: 0 10px;
        padding: 18px 12px 18px 16px;
        & > div:nth-child(1) {
          min-width: 102px;
          min-height: 102px;
          width: 102px;
          height: 102px;
          & > img {
            width: 100%;
            height: 100%;
          }
        }
        & > div:nth-child(2) {
          display: flex;
          flex-direction: column;
          color: var(--Grey-Deep, #4d4d4d);
          text-align: justify;
          font-family: "Noto Sans CJK TC";
          font-size: 13.6px;
          font-style: normal;
          font-weight: 400;
          line-height: 20px; /* 142.857% */
          & > span:nth-child(1) {
            color: var(--Brand-Color, #00a6ce);
            font-family: "Noto Sans HK";
            font-size: 16px;
            font-style: normal;
            font-weight: 700;
            line-height: 19.88px; /* 124.248% */
            letter-spacing: 0.8px;
            display: block;
            padding-right: 85px;
            margin-bottom: 10px;
          }
        }
      }
    }
  }
  :deep(.question) {
    padding: 0 23px 0 22px;
    margin-top: 32px;
    & > div {
      & > div:nth-child(2) {
        & > div {
          button {
            font-size: 18px;
            font-style: normal;
            font-weight: 700;
            line-height: 26px;
            text-align: left;
            padding-left: 50px;
            min-height: 71px;
          }
          .el-collapse-item__header::before {
            font-size: 28px;
            font-style: normal;
            font-weight: 700;
            line-height: 46.361px; /* 165.577% */
            letter-spacing: 1.4px;
            left: 10px;
          }
          .el-collapse-item__header {
            & > i {
              min-width: 14px;
              min-height: 26px;
            }
          }
          .el-collapse-item__arrow.is-active {
            min-width: 26px;
            min-height: 14px;
          }
          .el-collapse-item__header.is-active::before {
            font-size: 28px;
            font-style: normal;
            font-weight: 700;
            line-height: 46.361px; /* 165.577% */
            letter-spacing: 1.4px;
          }
        }
      }
    }
  }
  .brand {
    margin-top: 30px;
    margin-bottom: 32px;
    padding: 0 23px 0 22px;
    & > div:nth-child(2) {
      margin-top: 28px;
      margin-bottom: 22px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 18px;
      & > div {
        width: 162px;
        & > img {
          width: 100%;
        }
      }
    }
    & > div:nth-child(3) {
      display: flex;
      justify-content: center;
      :deep(.slot) {
        & > div {
          border-radius: 10px;
        }
      }
    }
  }
  .contrast {
    margin-top: 45px;
    background: var(--Skin, #eafbff);
    padding-bottom: 40px;
    padding-top: 20px;
    position: relative;
    & > div:nth-child(2) {
      margin-top: 20px;
      margin-left: 25px;
      margin-right: 25px;
      display: flex;
      overflow-x: scroll;
      & > div {
        flex: 1;
        width: 132px;
        min-width: 132px;
        border-radius: 25px;
        & > div:nth-child(1) {
          height: 89px;
          font-family: "Inter";
          font-size: 16px;
          font-style: normal;
          font-weight: 600;
          line-height: normal;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        & > div:nth-child(2) {
          height: 72px;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          & > span {
            display: inline;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
            line-height: 18px; /* 128.571% */
            letter-spacing: 0.7px;
          }
        }
        & > div:nth-child(3) {
          height: 94px;
          & > span {
            display: inline;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
            line-height: 18px; /* 128.571% */
            letter-spacing: 0.7px;
          }
        }
        & > div:nth-child(4) {
          height: 73px;
          & > span {
            display: inline;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
            line-height: 18px; /* 128.571% */
            letter-spacing: 0.7px;
          }
        }
      }
      & > div:nth-child(1) {
        background: #00517e;
        color: #fff;
        & > div {
          border-bottom: 1.06px solid #fff;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        & > div:nth-child(2),
        & > div:nth-child(3) {
          background: #4a83a3;
        }
        & > div:nth-child(2),
        & > div:nth-child(3),
        & > div:nth-child(4) {
          font-family: "Inter";
          font-size: 16px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
        }
        & > div:last-child {
          border-bottom: none;
        }
      }
      & > div:nth-child(2) {
        background: #d1f0f3;
        color: #00a6ce;
        & > div:nth-child(2) {
          background: #e1f3f7;
        }
        & > div {
          border-bottom: 1.06px solid #21aaca;
        }
        & > div:nth-child(3) {
          padding: 10px 10px 0 14px;
          box-sizing: border-box;
        }
        & > div:last-child {
          border-bottom: none;
          box-sizing: border-box;
          padding: 20px 10px 0 14px;
        }
      }
      & > div:nth-child(3) {
        color: #59ba68;
        background: #e6fce9;
        & > div:nth-child(2) {
          background: #cef2d4;
        }
        & > div {
          border-bottom: 1.06px solid #59ba68;
        }
        & > div:nth-child(3) {
          padding: 10px 5px 0 8px;
          box-sizing: border-box;
        }
        & > div:last-child {
          border-bottom: none;
          padding: 5px 10px 0 14px;
        }
      }
      & > div:nth-child(4) {
        color: #6c2a7e;
        background: #d2b3e2;
        & > div:nth-child(2) {
          background: #f4e1ff;
        }
        & > div {
          border-bottom: 1.06px solid #85439b;
        }
        & > div:nth-child(3) {
          padding: 5px 0 0 5px;
          box-sizing: border-box;
        }
        & > div:last-child {
          border-bottom: none;
          padding: 20px 10px 0 14px;
        }
      }
      & > div:nth-child(5) {
        color: #0e72af;
        background: #a6d8f7;
        & > div:nth-child(2) {
          background: #d2f0ff;
        }
        & > div {
          border-bottom: 1.06px solid #3993d3;
        }
        & > div:nth-child(3) {
          padding: 12px 5px 0 5px;
          box-sizing: border-box;
        }
        & > div:last-child {
          border-bottom: none;
          padding: 20px 10px 0 14px;
        }
      }
    }
    & > div:nth-child(3) {
      position: absolute;
      top: 30px;
      right: 50px;
    }
  }
  .type {
    & > div:nth-child(2) {
      padding: 0 10px 0 10px;
      & > div {
        & > img {
          width: 100%;
        }
      }
    }
    & > div:nth-child(3) {
      color: var(--Brand-Color, #00a6ce);
      text-align: center;
      font-family: "Noto Sans HK";
      font-size: 12px;
      font-style: normal;
      font-weight: 500;
      line-height: 18px; /* 150% */
      text-transform: uppercase;
      padding: 0 40px;
      margin-bottom: 20px;
    }
    & > div:nth-child(4) {
      padding: 0 23px 0 22px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      gap: 24px 20px;
      justify-items: center;
      & > div {
        position: relative;
        width: 152px;
        display: flex;
        flex-direction: column;
        align-items: center;
        & > div:nth-child(1) {
          width: 152px;
          & > img {
            width: 100%;
          }
        }
        & > div:nth-child(2) {
          position: absolute;
          bottom: 0;
          width: 100%;
          color: var(--Deep-Blue, #3e5270);
          text-align: center;
          font-family: "Noto Sans HK";
          font-size: 14px;
          font-style: normal;
          font-weight: 500;
          line-height: 23px; /* 164.286% */
          border-radius: 0px 0px 10px 10px;
          background: var(--Skin, #eafbff);
        }
      }
    }
    & > div:nth-child(5) {
      margin-top: 20px;
      padding: 0 23px 0 22px;
      & > span {
        color: var(--Deep-Blue, #3e5270);
        text-align: center;
        font-family: "Noto Sans HK";
        font-size: 24px;
        font-style: normal;
        font-weight: 700;
        line-height: 45px; /* 187.5% */
        letter-spacing: 1.2px;
        width: 100%;
        display: block;
      }
      & > p {
        & > span {
          color: var(--Brand-Color, #00a6ce);
          font-family: "Noto Sans CJK TC";
          font-size: 14px;
          font-style: normal;
          font-weight: 500;
          line-height: 22px;
        }
        color: var(--Grey, #4d4d4d);
        text-align: center;
        font-family: "Noto Sans CJK TC";
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: 22px; /* 157.143% */
      }
    }
  }
  .btn-bg {
    & > div {
      display: flex;
      align-items: center;
      border-radius: 12px;
      background: var(
        --Style,
        linear-gradient(90deg, #00a6ce 25.95%, #3346ed 100%)
      );
      width: fit-content;
      padding: 3px 8px 3px 20px;
      border: 3px solid #ffffff;
      & > span:nth-child(1) {
        color: var(--White, #fff);
        font-family: "Noto Sans HK";
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        letter-spacing: 1.4px;
        margin-right: 10px;
      }
      & > span:nth-child(2) {
        width: 23px;
        & > img {
          width: 100%;
        }
        display: flex;
        justify-content: center;
        align-items: center;
      }
      position: relative;
      z-index: 5;
    }
    background: var(
      --Style,
      linear-gradient(90deg, #00a6ce 25.95%, #3346ed 100%)
    );
    display: flex;
    border-radius: 15px;
    padding: 4px;
    width: fit-content;
    margin: 0 auto;
  }
  .theory {
    margin-top: 50px;
    background: var(--Skin, #eafbff);
    box-sizing: border-box;
    padding: 22px;
    & > div {
      & > div:nth-child(2) {
        margin-top: 20px;
        color: #60605f;
        text-align: center;
        font-family: "Noto Sans CJK TC";
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: 23.007px; /* 164.334% */
        letter-spacing: -0.07px;
      }
      & > div:nth-child(3) {
        max-width: 340px;
        margin: 15px auto 10px;
        & > img {
          width: 100%;
        }
      }
      & > div:nth-child(4) {
        & > span:nth-child(1) {
          color: var(--Brand-Color, #00a6ce);
          text-align: center;
          font-family: "Noto Sans HK";
          font-size: 14px;
          font-style: normal;
          font-weight: 500;
          line-height: 23px; /* 164.286% */
          display: block;
          padding: 0 45px;
        }
        & > span:nth-child(2) {
          padding: 0 50px;
        }
        & > span:nth-child(3) {
          padding: 0 75px;
        }
        & > span:nth-child(4) {
          padding: 0 0;
        }
        color: #60605f;
        font-family: "Noto Sans HK";
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: 23px;
        display: flex;
        flex-direction: column;
        text-align: center;
      }
    }
  }
  .comparison {
    padding: 0 23px 0 22px;
    margin-top: 51px;
    position: relative;
    & > div:nth-child(1) {
      margin-bottom: 10px;
      display: flex;
      justify-content: center;
      gap: 0 20px;
      & > div:nth-child(1) {
        color: var(--Deep-Blue, #3e5270);
        text-align: center;
        font-family: "Noto Sans HK";
        font-size: 14px;
        font-style: normal;
        font-weight: 700;
        line-height: 26.975px; /* 192.68% */
        letter-spacing: 0.7px;
      }
      & > div:nth-child(2) {
        color: var(--OkLens-color, #0192b0);
        text-align: center;
        font-family: "Noto Sans HK";
        font-size: 14px;
        font-style: normal;
        font-weight: 700;
        line-height: 26.975px; /* 192.68% */
        letter-spacing: 0.7px;
      }
    }
    & > div:nth-child(3) {
      margin-top: 10px;
      display: flex;
      justify-content: center;
      gap: 0 70px;
      & > div {
        color: var(--Grey-Light, #d9d9d9);
        text-align: center;
        font-family: "Noto Sans CJK TC";
        font-size: 21.202px;
        font-style: normal;
        font-weight: 500;
        line-height: 15.901px; /* 75% */
      }
    }
  }
  .active-bg {
    border: 2px solid #00a6ce;
    transform: scale(1.05);
  }
  .hide-active {
    transform: scale(1.05);
  }
  .presbyopia-glasses,
  .what-presbyopia {
    padding: 0 23px 0 22px;
    margin-top: 21px;
    & > div:nth-child(2) {
      margin-top: 28px;
      color: #60605f;
      text-align: center;
      font-family: "Noto Sans CJK TC";
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: 23.007px; /* 164.334% */
      letter-spacing: -0.07px;
      min-height: 92px;
      & > span {
        display: inline;
      }
    }
  }
  .profile-title {
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
  .imagetowebp {
    &-canvasWebp {
      max-width: 266px;
      margin: 0 auto;
      position: relative;
      display: flex;
      justify-content: center;
      img {
        //禁止选中
        user-select: none;
        width: 266px;
        height: 216px;
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
          width: 266px;
          height: 216px;
        }
      }
      span {
        width: 28px;
        height: 293px;
        background: url("https://static.cmereye.com/imgs/2024/05/1a68b54b1a299577.png")
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
}
</style>