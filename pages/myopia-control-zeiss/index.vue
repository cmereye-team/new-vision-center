<script lang="ts" setup>
useHead(() => ({
  title: "ZEISS兒童近視控制鏡片 - 希瑪眼科視光中心",
}));
const detail = {
  title: "立即體驗ZEISS MyoVision Pro 兒童近視控制鏡片",
  brand: "zeiss",
  explain: "立即1分鐘登記！",
  brandTitle: "ZEISS MyoVision Pro 兒童近視控制鏡片(送鏡架) $1,398起",
};
const btnElement = ref({
  title: "哪一款鏡片最適合你的小朋友?",
  svgIcon: `<svg data-v-f39dd64a="" xmlns="http://www.w3.org/2000/svg" width="31" height="32" viewBox="0 0 31 32" fill="none"><path data-v-f39dd64a="" d="M8.69818 13.784L7.12698 14.7845M8.14371 10.663L6.32422 10.269M9.97263 8.05797L8.9707 6.50049M13.1167 7.49603L13.5193 5.68729M15.7324 9.30498L17.3036 8.30452M30.125 15.875C30.125 23.9522 23.5772 30.5 15.5 30.5C7.42284 30.5 0.875 23.9522 0.875 15.875C0.875 7.79784 7.42284 1.25 15.5 1.25C23.5772 1.25 30.125 7.79784 30.125 15.875ZM24.4299 15.3654L12.4305 10.5875C12.1657 10.4047 11.809 10.631 11.8644 10.9475L11.1063 23.8327C11.1509 24.0883 11.486 24.1592 11.6337 23.9447L14.7104 19.2976C14.8738 19.06 15.2279 19.0645 15.3835 19.3064L19.4847 25.6941C19.6665 25.9773 20.0456 26.0598 20.3313 25.8782L22.4179 24.5522C22.7036 24.3706 22.7879 23.9938 22.606 23.7106L18.5053 17.3228C18.3498 17.0809 18.4948 16.7591 18.7804 16.7114L24.3115 15.8881C24.5695 15.8453 24.6443 15.5132 24.4299 15.3654Z" stroke="#DB4444" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>`,
  isExternalLink: true,
  // isExternalLink 外链 true
  link: "https://www.baidu.com",
});
const isKindCare = ref(false);
const isKindVision = ref(false);
const isKindKids = ref(false);
const handKind = (index: number) => {
  if (index === 0) {
    isKindCare.value = true;
    isKindVision.value = false;
    isKindKids.value = false;
  } else if (index === 1) {
    isKindCare.value = false;
    isKindVision.value = true;
    isKindKids.value = false;
  } else {
    isKindCare.value = false;
    isKindVision.value = false;
    isKindKids.value = true;
  }
};
onMounted(() => {
  handKind(0);
});
const bannerImg = {
  pc: "https://static.cmereye.com/imgs/2024/05/2411d80b7ca6dfb0.png",
  mobile: "https://static.cmereye.com/imgs/2024/05/ac3b7c31e12a7393.png",
};
</script>

<template>
  <div class="myopia-control-zeiss">
    <PublicBanner :banner="bannerImg">
      <!-- 插槽 -->
      <template #title>
        <div class="profile-title"></div>
      </template>
    </PublicBanner>
    <PublicNavbar
      :isInsidePage="true"
      :insidePageTitle="'ZEISS兒童近視控制鏡片'"
      :name="'兒童視力服務'"
    />
    <div class="zeiss-container">
      <div class="myopia-control-head">
        <PublicPageTitle :title="'ZEISS兒童近視控制鏡片'" />
        <div>
          <p>
            ZEISS
            鏡片是專為控制兒童近視度數而設計。鏡片採用先進的光學科技和設計，
          </p>
          <p>
            以確保配戴者視野清晰，同時減慢眼球增長，能夠有效減緩兒童近視的發展。
          </p>
        </div>
        <div>
          <div>
            鏡片具備耐用性和舒適度，適合6至12歲兒童長時間配戴。有別於一般眼鏡，一般鏡片中央位置能矯正視力，但是鏡片周邊將影像投射到視網膜的後面，這樣有機會拉長眼球，令近視加深。但是，獨特設計的ZEISS
            鏡片即可以修正這個離焦的情況，從而減慢近視加深。
          </div>
          <div>
            <img
              src="https://static.cmereye.com/imgs/2024/05/fe745a9f6300fb6f.png"
              alt="周遠視離焦"
            />
          </div>
        </div>
      </div>
      <div class="myopia-control-form">
        <PublicMyopiaForm :detail="detail">
          <template #terms>
            <div class="terms-content">
              <p>*條款及細則:*</p>
              <p>
                凡於希瑪眼科視光中心購買ZEISS MyoVision
                Pro近視控制鏡片，即送指定精美鏡架乙副。此優惠只適用於購買ZEISS
                MyoVision
                Pro近視控制鏡片。此優惠所贈送之鏡架是指定品牌及型號，如選擇其他鏡架需補回差價。此優惠不可兌換或找續現金。
              </p>
            </div>
          </template>
        </PublicMyopiaForm>
      </div>
      <div class="myopia-form-kind">
        <PublicPageTitle :title="'ZEISS兒童近視控制鏡片種類'" />
        <div>
          <div>
            <div
              @click="handKind(0)"
              :class="[isKindCare ? 'kind-active' : 'kind-item']"
            >
              <div>
                <img
                  src="https://static.cmereye.com/imgs/2024/05/293e63cc80e333c7.png"
                  alt="MyoCare鏡片"
                />
              </div>
              <div :class="[isKindCare ? 'kind-btn-active' : 'kind-btn-item']">
                MyoCare鏡片
              </div>
            </div>
            <div
              @click="handKind(1)"
              :class="[isKindVision ? 'kind-active' : 'kind-item']"
            >
              <div>
                <img
                  src="https://static.cmereye.com/imgs/2024/05/0757ddde6b5bd37c.png"
                  alt="MyoVision Pro鏡片"
                />
              </div>
              <div
                :class="[isKindVision ? 'kind-btn-active' : 'kind-btn-item']"
              >
                MyoVision Pro鏡片
              </div>
            </div>
            <div
              @click="handKind(2)"
              :class="[isKindKids ? 'kind-active' : 'kind-item']"
            >
              <div>
                <img
                  src="https://static.cmereye.com/imgs/2024/05/92ca57e15e76e126.png"
                  alt="MyoKids鏡片"
                />
              </div>
              <div :class="[isKindKids ? 'kind-btn-active' : 'kind-btn-item']">
                MyoKids鏡片
              </div>
            </div>
          </div>
          <div>
            <div
              class="btn-care"
              :class="[
                isKindCare ? 'kind-container-active' : 'kind-container-item',
              ]"
            >
              <div>
                <div>
                  <div>MyoCare鏡片</div>
                  <div>
                    ZEISS最新一代兒童近視控制鏡片應用同步性競爭性離焦，MyoCare
                    再度提升離焦技術，有助更有效控制兒童近視發展。
                  </div>
                </div>
                <div>
                  <img
                    src="https://static.cmereye.com/imgs/2024/05/e7d60cc1e0476820.png"
                    alt="MyoCare鏡片"
                  />
                </div>
              </div>
              <div>
                <div>
                  <div>
                    <img
                      src="https://static.cmereye.com/imgs/2024/05/c4674b1170219ef2.png"
                      alt="專利C.A.R.E技術"
                    />
                  </div>
                  <div>
                    <p>專利C.A.R.E技術</p>
                    <p>
                      採用同心圓環鏡片設計，應用同步
                      競爭性離焦理論。將周邊影像更精確聚焦在視網
                      膜，形成有效的近視離焦，有效減緩近視發展。
                    </p>
                  </div>
                </div>
                <div>
                  <div>
                    <img
                      src="https://static.cmereye.com/imgs/2024/05/07fb99fc7caed21e.png"
                      alt="Clear Focus設計"
                    />
                  </div>
                  <div>
                    <p>Clear Focus設計</p>
                    <p>
                      有效阻止不必要的遠視離焦，配戴者的度數矯正及預期的近視離焦在任何視覺方向維持不變，讓每一度近視發展能有效減緩。
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="btn-vision"
              :class="[
                isKindVision ? 'kind-container-active' : 'kind-container-item',
              ]"
            >
              <div>
                <div>MyoVision Pro鏡片</div>
                <div>
                  ZEISS MyoVision
                  Pro兒童近視控制鏡片採用了周邊視力離焦控制技術，減緩近視加深。
                </div>
              </div>
              <div>
                <div>
                  <div>
                    <div>傳統單光鏡片</div>
                    <div>
                      <img
                        src="https://static.cmereye.com/imgs/2024/05/e5bbc5701d95ee9e.png"
                        alt="周邊遠視離焦"
                      />
                    </div>
                  </div>
                  <div>
                    <div>MyoVision Pro鏡片</div>
                    <div>
                      <img
                        src="https://static.cmereye.com/imgs/2024/05/26b10d99f94ed7e1.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <p>MyoVision Pro鏡片</p>
                  <p>
                    ・鏡片周邊位置是控制近視的區域，將周邊影像聚焦在
                    視網膜前，抑制眼球增長。
                  </p>
                  <p>・中央區域能矯正視力，讓配戴者有清晰的視力。</p>
                </div>
              </div>
            </div>
            <div
              class="btn-kids"
              :class="[
                isKindKids ? 'kind-container-active' : 'kind-container-item',
              ]"
            >
              <div>
                <div>
                  <div>MyoCare鏡片</div>
                  <div>
                    ZEISS最新一代兒童近視控制鏡片應用同步性競爭性離焦，MyoCare
                    再度提升離焦技術，有助更有效控制兒童近視發展。
                  </div>
                </div>
                <div>
                  <img
                    src="https://static.cmereye.com/imgs/2024/05/e7d60cc1e0476820.png"
                    alt="MyoCare鏡片"
                  />
                </div>
              </div>
              <div>
                <div>
                  <div>
                    <img
                      src="https://static.cmereye.com/imgs/2024/05/c4674b1170219ef2.png"
                      alt="專利C.A.R.E技術"
                    />
                  </div>
                  <div>
                    <p>專利C.A.R.E技術</p>
                    <p>
                      採用同心圓環鏡片設計，應用同步
                      競爭性離焦理論。將周邊影像更精確聚焦在視網
                      膜，形成有效的近視離焦，有效減緩近視發展。
                    </p>
                  </div>
                </div>
                <div>
                  <div>
                    <img
                      src="https://static.cmereye.com/imgs/2024/05/07fb99fc7caed21e.png"
                      alt="Clear Focus設計"
                    />
                  </div>
                  <div>
                    <p>Clear Focus設計</p>
                    <p>
                      有效阻止不必要的遠視離焦，配戴者的度數矯正及預期的近視離焦在任何視覺方向維持不變，讓每一度近視發展能有效減緩。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- <a class="btn-bg">
          <div>
            <span>哪一款鏡片最適合你的小朋友?</span>
            <span
              ><img
                src="https://static.cmereye.com/imgs/2024/05/93740deca665eceb.png"
                alt="哪一款鏡片最適合你的小朋友?"
            /></span>
          </div>
        </a> -->
        <div>
          <BtnAnimation :btnElement="btnElement" />
        </div>
      </div>
      <div class="myopia-effect">
        <div></div>
        <div>
          <p>達致效果</p>
          <div>
            <span>為配戴者提供清晰視野</span>
            <span>減緩近視加深速度</span>
            <span>減慢眼球軸增長</span>
          </div>
          <a class="effect-btn">
            <div>立即預約檢查</div>
            <div>
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
            </div>
          </a>
        </div>
      </div>
      <div class="myopia-crowd">
        <div>合適對象</div>
        <div>
          <div>
            <div>
              <img
                src="https://static.cmereye.com/imgs/2024/05/dab0df8b59d28a82.png"
                alt="不超過600度"
              />
            </div>
            <div>
              <span>1.5：近視+散光</span>
              <span>不超過600度</span>
            </div>
          </div>
          <div>
            <div>
              <img
                src="https://static.cmereye.com/imgs/2024/05/9436e8d17d602585.png"
                alt="不超過950"
              />
            </div>
            <div>
              <span>1.6以上：近視</span>
              <span>+散光不超過950</span>
              <span>度</span>
            </div>
          </div>
          <div>
            <div>
              <img
                src="https://static.cmereye.com/imgs/2024/05/3aa2439bc5194614.png"
                alt="6至12歲之間的"
              />
            </div>
            <div>
              <span>6至12歲之間的</span>
              <span>兒童</span>
            </div>
          </div>
          <div>
            <div>
              <img
                src="https://static.cmereye.com/imgs/2024/05/0ff5a394c75818b7.png"
                alt="近視持續快速加"
              />
            </div>
            <div>
              <span>近視持續快速加</span>
              <span>深者</span>
            </div>
          </div>
          <div>
            <div>
              <img
                src="https://static.cmereye.com/imgs/2024/05/1ed3fcaecd9f556a.png"
                alt="抗拒或不適合戴"
              />
            </div>
            <div>
              <span>抗拒或不適合戴</span>
              <span>隱形眼鏡兒童</span>
            </div>
          </div>
          <div>
            <div>
              <img
                src="https://static.cmereye.com/imgs/2024/05/fa4c62669ce4a73c.png"
                alt="初次嘗試近視方"
              />
            </div>
            <div>
              <span>初次嘗試近視方</span>
              <span>案人士</span>
            </div>
          </div>
        </div>
      </div>
      <div class="myopia-server">
        <PublicPageTitle :title="'服務內容'" />
        <div>
          <div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="109"
                height="76"
                viewBox="0 0 109 76"
                fill="none"
              >
                <g clip-path="url(#clip0_1_7378)">
                  <path
                    d="M10.7489 5.93932C10.7489 5.93932 14.9607 1.30228 41.3681 1.22868C67.7755 1.15508 66.3034 25.6938 65.9027 28.5112C64.725 36.7548 56.7758 56.9713 36.5593 58.3452C16.3428 59.7191 4.76246 45.1947 1.72017 28.8056C-1.32212 12.4165 10.7489 5.93932 10.7489 5.93932Z"
                    stroke="#00A6CE"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M48.3516 12.7598C48.3516 12.7598 57.0859 15.3114 58.6561 24.3401"
                    stroke="#59BA68"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M51.704 22.279C51.704 22.279 58.6555 16.8323 82.3232 18.5498C108.751 20.4635 107.258 42.0335 106.858 44.8508C105.68 53.0945 97.7309 73.311 77.5144 74.6849C57.2979 76.0588 45.7175 61.5344 42.6753 45.1453C39.633 28.7561 51.704 22.279 51.704 22.279Z"
                    fill="#EAFBFF"
                    stroke="#00A6CE"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M89.3086 29.0977C89.3086 29.0977 98.0429 31.6493 99.6131 40.678"
                    stroke="#59BA68"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_7378">
                    <rect width="108.243" height="76" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div>鏡片</div>
          </div>
          <div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="103"
                height="76"
                viewBox="0 0 103 76"
                fill="none"
              >
                <g clip-path="url(#clip0_1_7385)">
                  <path
                    d="M33.6164 36.5214H21.089C10.0666 36.5214 1.15197 45.7471 1.15197 57.0612C1.02527 66.4942 8.55398 74.2533 17.9869 74.4107C32.4646 74.4107 44.1858 62.2711 44.1858 47.3749C44.2549 41.4587 39.525 36.6059 33.6126 36.5176L33.6164 36.5214Z"
                    stroke="#00A6CE"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M81.4427 36.5195H68.9154C62.9914 36.5925 58.25 41.4529 58.3191 47.3768C58.3191 62.273 70.0402 74.4126 84.5179 74.4126C93.9509 74.2591 101.483 66.5 101.353 57.0632C101.353 45.749 92.4382 36.5234 81.4274 36.5234H81.4389L81.4427 36.5195Z"
                    stroke="#00A6CE"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M31.4015 49.2129L20.9473 60.888"
                    stroke="#59BA68"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M36.4283 2.03314C36.4283 2.03314 31.9019 -1.32234 28.0435 5.05077C24.1889 11.4239 4.80469 45.2243 4.80469 45.2243"
                    stroke="#00A6CE"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M66.2969 2.03314C66.2969 2.03314 70.8233 -1.32234 74.6817 5.05077C78.5401 11.4239 98.8074 47.0173 98.8074 47.0173"
                    stroke="#00A6CE"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M38.3848 37.719C38.3848 37.719 49.9946 36.3868 63.3896 38.149"
                    stroke="#00A6CE"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M44.1328 49.1131C44.1328 49.1131 51.2047 48.2685 58.3226 49.2129"
                    stroke="#00A6CE"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_7385">
                    <rect width="102.511" height="75.5635" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div>指定鏡架</div>
          </div>
          <div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="110"
                height="62"
                viewBox="0 0 110 62"
                fill="none"
              >
                <g clip-path="url(#clip0_1_7395)">
                  <path
                    d="M90.2931 1.13672H18.8105V12.2994H90.2931V1.13672Z"
                    stroke="#00A6CE"
                    stroke-width="3"
                    stroke-miterlimit="10"
                  />
                  <path
                    d="M18.8044 3.2832H7.85739V9.3186H18.8044V3.2832Z"
                    stroke="#00A6CE"
                    stroke-width="3"
                    stroke-miterlimit="10"
                  />
                  <path
                    d="M101.234 3.2832H90.2871V9.3186H101.234V3.2832Z"
                    stroke="#00A6CE"
                    stroke-width="3"
                    stroke-miterlimit="10"
                  />
                  <path
                    d="M30.3279 12.2988V20.6689H1.13474V30.2196L9.14914 36.1226C9.14914 36.1226 3.56781 64.6006 34.6227 60.4496C34.6227 60.4496 50.3639 58.1603 48.5022 35.835V12.2988"
                    stroke="#00A6CE"
                    stroke-width="3"
                    stroke-miterlimit="10"
                  />
                  <path
                    d="M79.5578 12.2988V20.6689H108.751V30.2196L100.737 36.1226C100.737 36.1226 106.318 64.6006 75.263 60.4496C75.263 60.4496 59.5218 58.1603 61.3835 35.835V12.2988"
                    stroke="#00A6CE"
                    stroke-width="3"
                    stroke-miterlimit="10"
                  />
                  <path
                    d="M28.1635 54.9598C35.5823 54.9598 41.5965 48.9456 41.5965 41.5268C41.5965 34.1079 35.5823 28.0938 28.1635 28.0938C20.7446 28.0938 14.7304 34.1079 14.7304 41.5268C14.7304 48.9456 20.7446 54.9598 28.1635 54.9598Z"
                    stroke="#59BA68"
                    stroke-width="3"
                    stroke-miterlimit="10"
                  />
                  <path
                    d="M81.5443 54.9598C88.9632 54.9598 94.9773 48.9456 94.9773 41.5268C94.9773 34.1079 88.9632 28.0938 81.5443 28.0938C74.1255 28.0938 68.1113 34.1079 68.1113 41.5268C68.1113 48.9456 74.1255 54.9598 81.5443 54.9598Z"
                    stroke="#59BA68"
                    stroke-width="3"
                    stroke-miterlimit="10"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_7395">
                    <rect width="109.886" height="62" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div>綜合眼睛檢查</div>
          </div>
          <div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="78"
                height="91"
                viewBox="0 0 78 91"
                fill="none"
              >
                <g clip-path="url(#clip0_1_7405)">
                  <path
                    d="M45.8154 75.5054H9.43054C4.84743 75.5054 1.13477 71.7927 1.13477 67.2096V9.43054C1.13477 4.84743 4.84743 1.13477 9.43054 1.13477H54.7583C59.3415 1.13477 63.0541 4.84743 63.0541 9.43054V44.9222"
                    stroke="#00A6CE"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M13.8633 17.9629H48.5413"
                    stroke="#00A6CE"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M13.8633 29.127H48.5413"
                    stroke="#00A6CE"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M13.8633 40.998H48.5413"
                    stroke="#00A6CE"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M13.8633 52.5488H26.5908"
                    stroke="#00A6CE"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M46.633 53.4141H38.7308C38.7308 53.4141 35.3701 73.6237 54.626 71.2924C54.626 71.2924 68.629 72.1969 67.1757 53.4141H58.4712"
                    stroke="#59BA68"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M52.892 71.4824V80.5919C52.892 80.5919 52.6271 87.8583 59.5301 89.1299C59.5301 89.1299 65.8882 89.6749 68.4314 84.4067"
                    stroke="#59BA68"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M70.6762 83.3895C74.0915 83.3895 76.8602 80.6208 76.8602 77.2055C76.8602 73.7901 74.0915 71.0215 70.6762 71.0215C67.2609 71.0215 64.4922 73.7901 64.4922 77.2055C64.4922 80.6208 67.2609 83.3895 70.6762 83.3895Z"
                    stroke="#59BA68"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_7405">
                    <rect width="78" height="90.2809" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div>覆診</div>
          </div>
        </div>
      </div>
      <div class="myopia-container-step">
        <div>
          <div><span>ZEISS兒童近視控制鏡片</span><span>套餐療程</span></div>
          <div>
            <div>
              <div>
                <div>
                  <span>STEP 1</span>
                </div>
                <div>
                  <span>1-3星期</span>
                  <span>綜合眼睛檢查 + 鏡片試配+ 鏡片訂製</span>
                </div>
              </div>
              <div>
                <div>
                  <span>STEP 2</span>
                </div>
                <div>
                  <span>取鏡前</span>
                  <span>取眼鏡前，再次確定鏡片度數及眼鏡架位置合適</span>
                </div>
              </div>
            </div>
            <div>
              <div>
                <div>
                  <span>STEP 3</span>
                </div>
                <div>
                  <span>取鏡後</span>
                  <span>開始配戴，除了睡覺時間，應大多數時間</span>
                  <span>戴上</span>
                </div>
              </div>
              <div>
                <div>
                  <span>STEP 4</span>
                </div>
                <div>
                  <span>3個月</span>
                  <span>建議每3至6個月接受視光檢查及眼軸量度</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="myopia-promise">
        <PublicPageTitle :title="'希瑪視光3大保證'" />
        <div>
          <div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="171"
                height="77"
                viewBox="0 0 171 77"
                fill="none"
              >
                <path
                  d="M9.24096 39.6953H2.55731"
                  stroke="#59BA68"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M79.7015 38.1758H90.1549"
                  stroke="#59BA68"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M160.494 39.6953H168.738"
                  stroke="#59BA68"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M44.5765 74.3526C25.2115 74.3526 9.45245 58.1216 9.45245 38.1763C9.45245 18.231 25.2055 2 44.5765 2C63.9476 2 79.7006 18.231 79.7006 38.1763C79.7006 58.1216 63.9415 74.3526 44.5765 74.3526Z"
                  stroke="#00A6CE"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M125.274 74.3526C105.909 74.3526 90.1495 58.1216 90.1495 38.1763C90.1495 18.231 105.909 2 125.274 2C144.639 2 160.398 18.231 160.398 38.1763C160.398 58.1216 144.645 74.3526 125.274 74.3526Z"
                  stroke="#00A6CE"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div>
              <div>品質保證</div>
              <div><span>鏡架或太陽眼鏡</span><span>享有12個月保養</span></div>
            </div>
          </div>
          <div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="107"
                height="107"
                viewBox="0 0 107 107"
                fill="none"
              >
                <path
                  d="M4.91182 105H102.094C104.637 105 105.911 101.925 104.112 100.124L6.93 2.84049C5.13162 1.04524 2.05939 2.31542 2.05939 4.86078V102.145C2.05939 103.72 3.33823 105 4.91182 105Z"
                  stroke="#00A6CE"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M23.6501 50.9609V87.371C23.6501 88.8462 24.8441 90.0364 26.3127 90.0364H62.69C65.0628 90.0364 66.2518 87.161 64.5733 85.4808L28.201 49.0756C26.5226 47.3954 23.6501 48.5855 23.6501 50.9609Z"
                  stroke="#59BA68"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M3.49734 25.4238H15.9062"
                  stroke="#00A6CE"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M3.49734 37.3047H12.4493"
                  stroke="#00A6CE"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M3.49734 50.0859H15.9062"
                  stroke="#00A6CE"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M3.49734 61.9688H12.4493"
                  stroke="#00A6CE"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M3.49734 74.3516H15.9062"
                  stroke="#00A6CE"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M3.49734 86.2324H12.4493"
                  stroke="#00A6CE"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div>
              <div>度數保證</div>
              <div><span>鏡片度數享60日</span><span>內更換保證</span></div>
            </div>
          </div>
          <div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="104"
                height="108"
                viewBox="0 0 104 108"
                fill="none"
              >
                <path
                  d="M42.9732 65.0223C25.6248 65.0223 11.5152 50.9011 11.5152 33.5385C11.5152 16.1759 25.6201 2.05469 42.9732 2.05469C60.3263 2.05469 74.4405 16.1759 74.4405 33.5385C74.4405 50.9011 60.3216 65.0223 42.9732 65.0223Z"
                  stroke="#00A6CE"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M69.448 105.249C54.6607 105.249 42.0514 99.2289 38.0835 90.2762C37.7189 89.4483 37.7189 88.5035 38.0835 87.6756C42.0607 78.723 54.6607 72.7031 69.448 72.7031C84.2352 72.7031 96.8446 78.723 100.812 87.6756C101.177 88.5035 101.177 89.4483 100.812 90.2762C96.8353 99.2289 84.2306 105.249 69.448 105.249Z"
                  stroke="#59BA68"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M69.4476 95.9415C65.6059 95.9415 62.4933 92.8217 62.4933 88.9815C62.4933 85.1413 65.6106 82.0215 69.4476 82.0215C73.2847 82.0215 76.4019 85.1413 76.4019 88.9815C76.4019 92.8217 73.2753 95.9415 69.4476 95.9415Z"
                  stroke="#59BA68"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M31.9798 63.0391C31.9798 63.0391 7.4855 67.1084 3.67184 99.6634"
                  stroke="#00A6CE"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div>
              <div>信心保證</div>
              <div><span>驗眼服務由註冊</span><span>視光師進行</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@media screen and (min-width: 768px) {
  .zeiss-container {
    margin-bottom: 65px;
  }
  .myopia-control-head {
    max-width: 960px;
    margin: 72px auto 0;
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
    & > div:nth-child(3) {
      margin-top: 30px;
      border-radius: 27.75px;
      background: var(--Skin, #eafbff);
      box-shadow: 0px 0px 7.5px 0px rgba(0, 0, 0, 0.25);
      display: flex;
      align-items: center;
      gap: 0 20px;
      box-sizing: border-box;
      padding: 32px 40px 30px 34px;
      & > div:nth-child(1) {
        color: #60605f;
        font-family: "Noto Sans CJK TC";
        font-size: 21px;
        font-style: normal;
        font-weight: 500;
        line-height: 45px;
      }
      & > div:nth-child(2) {
        width: 360px;
        min-width: 360px;
        & > img {
          width: 100%;
        }
      }
    }
  }
  .myopia-promise {
    max-width: 960px;
    margin: 55px auto 80px;
    & > div:nth-child(2) {
      display: flex;
      justify-content: center;
      gap: 0 32px;
      margin-top: 35px;
      & > div {
        width: 299.25px;
        height: 284.25px;
        border-radius: 20px;
        background: var(--Skin, #eafbff);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        & > div:nth-child(1) {
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 78px;
        }
        & > div:nth-child(2) {
          margin-top: 35px;
          & > div:nth-child(1) {
            color: var(--Brand-Color, #00a6ce);
            text-align: center;
            font-family: "Inter";
            font-size: 22.5px;
            font-style: normal;
            font-weight: 600;
            line-height: 22.5px; /* 100% */
            text-transform: uppercase;
          }
          & > div:nth-child(2) {
            margin-top: 14px;
            display: flex;
            flex-direction: column;
            color: #60605f;
            text-align: center;
            font-family: "Inter";
            font-size: 16.5px;
            font-style: normal;
            font-weight: 500;
            line-height: 22.5px; /* 136.364% */
            text-transform: uppercase;
          }
        }
      }
      & > div:nth-child(1) {
        & > div:nth-child(1) {
          & > svg {
            width: 124.636px;
            height: 54.264px;
          }
        }
      }
      & > div:nth-child(2) {
        & > div:nth-child(1) {
          & > svg {
            width: 77.171px;
            height: 77.25px;
          }
        }
      }
      & > div:nth-child(3) {
        & > div:nth-child(1) {
          & > svg {
            width: 75.656px;
            height: 77.542px;
          }
        }
      }
    }
  }
  .myopia-container-step {
    margin-top: 70px;
    background: var(--Skin, #eafbff);
    & > div {
      max-width: 960px;
      margin: 0 auto;
      box-sizing: border-box;
      padding-top: 40px;
      padding-bottom: 55px;
      & > div:nth-child(1) {
        color: var(--Brand-Color, #00a6ce);
        text-align: center;
        font-family: "Noto Sans HK";
        font-size: 33.75px;
        font-style: normal;
        font-weight: 700;
        line-height: 45px; /* 133.333% */
        letter-spacing: 1.688px;
        margin-bottom: 65px;
      }
      & > div:nth-child(2) {
        display: flex;
        justify-content: center;
        gap: 0 42px;
        & > div {
          & > div {
            display: flex;
            & > div:nth-child(1) {
              margin-right: 20px;
              color: #60605f;
              font-family: "Inter";
              font-size: 16.5px;
              font-style: normal;
              font-weight: 600;
              line-height: 23.465px;
            }
            & > div:nth-child(2) {
              display: flex;
              flex-direction: column;
              & > span {
                color: #60605f;
                font-family: "Inter";
                font-size: 16.5px;
                font-style: normal;
                font-weight: 600;
                line-height: 23.465px;
              }
              & > span:nth-child(1) {
                color: #59ba68;
                font-family: "Inter";
                font-size: 30px;
                font-style: normal;
                font-weight: 600;
                line-height: 23.465px;
                margin-bottom: 5px;
              }
            }
          }
          & > div:nth-child(1) {
            margin-bottom: 30px;
            position: relative;
          }
          & > div:nth-child(1)::after {
            position: absolute;
            top: 30px;
            left: 35px;
            content: "";
            width: 3px;
            height: 50px;
            background: #4d4d4d;
            border-radius: 3px;
          }
        }
        & > div:nth-child(2) {
          & > div:nth-child(1)::after {
            height: 60px;
          }
        }
      }
    }
  }
  .myopia-server {
    max-width: 960px;
    margin: 0 auto;
    margin-top: 55px;
    & > div:nth-child(2) {
      display: flex;
      gap: 0 28px;
      justify-content: center;
      margin-top: 55px;
      & > div {
        display: flex;
        flex-direction: column;
        & > div:nth-child(1) {
          width: 130.081px;
          height: 130.081px;
          border-radius: 24.591px;
          background: var(--Skin, #eafbff);
          box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25);
          display: flex;
          justify-content: center;
          align-items: center;
        }
        & > div:nth-child(2) {
          margin-top: 13px;
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
      & > div:nth-child(1) {
        & > div:nth-child(1) {
          & > svg {
            width: 81.182px;
            height: 57px;
          }
        }
      }
      & > div:nth-child(2) {
        & > div:nth-child(1) {
          & > svg {
            width: 76.883px;
            height: 56.673px;
          }
        }
      }
      & > div:nth-child(3) {
        & > div:nth-child(1) {
          & > svg {
            width: 82.414px;
            height: 46.5px;
          }
        }
      }
      & > div:nth-child(4) {
        & > div:nth-child(1) {
          & > svg {
            width: 58.5px;
            height: 67.711px;
          }
        }
      }
    }
  }
  .myopia-crowd {
    max-width: 960px;
    margin: 55px auto 0;
    & > div:nth-child(1) {
      color: var(--Brand-Color, #00a6ce);
      font-family: "Inter";
      font-size: 30px;
      font-style: normal;
      font-weight: 600;
      line-height: 22.5px; /* 75% */
      text-transform: uppercase;
    }
    & > div:nth-child(2) {
      margin-top: 35px;
      display: grid;
      grid-template-columns: auto auto auto;
      grid-gap: 12px 20px;
      & > div {
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.05);
        background: #eafbff;
        border-radius: 20px;
        padding-right: 30px;
        padding-bottom: 40px;
        padding-left: 40px;
        padding-top: 40px;
        display: flex;
        gap: 0 15px;
        justify-content: center;
        align-items: center;

        & > div:nth-child(1) {
          display: flex;
          justify-content: center;
          align-items: center;
          & > img {
            width: 100%;
            height: 100%;
          }
        }
        & > div:nth-child(2) {
          display: flex;
          flex-direction: column;
          color: var(--Brand-Color, #00a6ce);
          font-family: "Noto Sans HK";
          font-size: 16.5px;
          font-style: normal;
          font-weight: 500;
          line-height: 22.5px; /* 136.364% */
          letter-spacing: 0.825px;
        }
      }
      & > div:nth-child(1) {
        & > div:nth-child(1) {
          width: 87.702px;
        }
      }
      & > div:nth-child(2) {
        & > div:nth-child(1) {
          width: 87.702px;
        }
      }
      & > div:nth-child(3) {
        & > div:nth-child(1) {
          width: 42.707px;
          height: 68.815px;
        }
      }
      & > div:nth-child(4) {
        & > div:nth-child(1) {
          width: 76.5px;
          height: 55.3px;
        }
      }
      & > div:nth-child(5) {
        & > div:nth-child(1) {
          width: 54.75px;
          height: 71.25px;
        }
      }
      & > div:nth-child(6) {
        & > div:nth-child(1) {
          width: 72.982px;
          height: 72.982px;
        }
      }
    }
  }
  .myopia-effect {
    background: url("https://static.cmereye.com/imgs/2024/05/f5b58cad2961cb33.jpg")
      no-repeat;
    background-size: 100% 100%;
    height: 370px;
    max-width: 960px;
    width: 100%;
    margin: 100px auto;
    display: flex;
    box-sizing: border-box;
    padding-top: 60px;
    padding-right: 165px;
    padding-left: 165px;
    padding-bottom: 45px;
    & > div {
      flex: 1;
    }
    & > div:nth-child(2) {
      & > p:nth-child(1) {
        color: var(--White, #fff);
        font-family: "Noto Sans HK";
        font-size: 30px;
        font-style: normal;
        font-weight: 700;
        line-height: 45px; /* 150% */
        letter-spacing: 1.5px;
        padding-left: 50px;
      }
      & > div:nth-child(2) {
        margin-bottom: 25px;
        padding-left: 50px;
        display: flex;
        flex-direction: column;
        color: var(--White, #fff);
        font-family: "Noto Sans HK";
        font-size: 22.5px;
        font-style: normal;
        font-weight: 700;
        line-height: 45px; /* 200% */
        letter-spacing: 1.125px;
        & > span {
          position: relative;
        }
        & > span::before {
          content: "";
          background: url("https://static.cmereye.com/imgs/2024/05/94ccdd234fb8a5c4.png")
            no-repeat;
          background-size: 100% 100%;
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          left: -40px;
          width: 24px;
          height: 16px;
        }
      }
      & > a {
        margin-left: 50px;
      }
    }
  }
  .myopia-form-kind {
    max-width: 960px;
    margin: 35px auto 75px;
    & > div:nth-child(2) {
      margin: 65px auto 85px;
      & > div:nth-child(1) {
        display: flex;
        gap: 0 40px;
        justify-content: center;
      }
      & > div:nth-child(2) {
        margin-top: 25px;
        & > div {
          box-sizing: border-box;
          & > div:nth-child(1) {
            display: flex;
          }
        }
      }
    }
    & > div:nth-child(3) {
      display: flex;
      justify-content: center;
    }
  }
  .btn-care {
    background: url("https://static.cmereye.com/imgs/2024/05/523275638821fa23.png")
      no-repeat;
    background-size: 100% 100%;
    height: 522px;
    width: 100%;
    padding-top: calc(30px + 37px);
    padding-left: 32px;
    padding-right: 30px;
    padding-bottom: 40px;
    & > div:nth-child(1) {
      display: flex;
      gap: 0 10px;
      & > div:nth-child(1) {
        & > div:nth-child(1) {
          color: var(--Deep-Blue, #3e5270);
          font-family: "Noto Sans HK";
          font-size: 33.75px;
          font-style: normal;
          font-weight: 700;
          line-height: 45px; /* 133.333% */
          letter-spacing: 1.688px;
        }
        & > div:nth-child(2) {
          margin-top: 15px;
          color: #60605f;
          font-family: "Noto Sans CJK TC";
          font-size: 21px;
          font-style: normal;
          font-weight: 500;
          line-height: 45px;
        }
      }
      & > div:nth-child(2) {
        min-width: 410px;
        & > img {
          width: 100%;
        }
      }
    }
    & > div:nth-child(2) {
      position: relative;
      top: -15px;
      display: flex;
      gap: 0 70px;
      & > div {
        display: flex;
        & > div:nth-child(2) {
          margin-left: 20px;
          max-width: 300px;
          & > p:nth-child(1) {
            color: var(--Brand-Color, #00a6ce);
            font-family: "Noto Sans HK";
            font-size: 22.5px;
            font-style: normal;
            font-weight: 700;
            line-height: 33.75px; /* 150% */
            letter-spacing: 1.125px;
          }
          & > p:nth-child(2) {
            color: #60605f;
            font-family: "Noto Sans HK";
            font-size: 16.5px;
            font-style: normal;
            font-weight: 500;
            line-height: 30px;
            letter-spacing: 0.825px;
          }
        }
      }
      & > div:nth-child(1) {
        & > div:nth-child(1) {
          min-width: 82.86px;
          & > img {
            width: 100%;
          }
        }
      }
      & > div:nth-child(2) {
        & > div:nth-child(1) {
          min-width: 107.563px;
          & > img {
            width: 100%;
          }
        }
      }
    }
  }
  .btn-vision {
    background: url("https://static.cmereye.com/imgs/2024/05/6edaf38a082c2a25.png")
      no-repeat;
    background-size: 100% 100%;
    height: 718px;
    width: 100%;
    padding-top: calc(30px + 37px);
    padding-bottom: 35px;
    padding-right: 18px;
    padding-left: 40px;
    & > div:nth-child(1) {
      display: flex;
      align-items: center;
      & > div:nth-child(1) {
        color: var(--Deep-Blue, #3e5270);
        font-family: "Noto Sans HK";
        font-size: 33.75px;
        font-style: normal;
        font-weight: 700;
        line-height: 45px;
        letter-spacing: 1.688px;
        padding-right: 30px;
        border-right: 3px solid #00a6ce;
      }
      & > div:nth-child(2) {
        margin-left: 30px;
        color: #60605f;
        font-family: "Noto Sans CJK TC";
        font-size: 22px;
        font-style: normal;
        font-weight: 500;
        line-height: 40px; /* 142.857% */
        max-width: 460px;
      }
    }
    & > div:nth-child(2) {
      margin-top: 45px;
      & > div:nth-child(1) {
        display: flex;
        gap: 0 100px;
        margin-bottom: 15px;
        & > div {
          color: var(--Brand-Color, #00a6ce);
          font-family: "Noto Sans HK";
          font-size: 30px;
          font-style: normal;
          font-weight: 700;
          line-height: 45px; /* 150% */
          letter-spacing: 1.5px;
          & > div:nth-child(2) {
            min-height: 315px;
            max-width: 320px;
            display: flex;
            align-items: center;
            & > img {
              width: 100%;
            }
          }
        }
      }
      & > div:nth-child(2) {
        color: #60605f;
        font-family: "Noto Sans HK";
        font-size: 18px;
        font-style: normal;
        font-weight: 500;
        line-height: 40px;
        letter-spacing: 1.1px;
        & > p:nth-child(1) {
          font-weight: 700;
        }
      }
    }
  }
  .btn-kids {
    background: url("https://static.cmereye.com/imgs/2024/05/523275638821fa23.png")
      no-repeat;
    background-size: 100% 100%;
    height: 522px;
    width: 100%;
    padding-top: calc(30px + 37px);
    padding-left: 32px;
    padding-right: 30px;
    padding-bottom: 40px;
    & > div:nth-child(1) {
      display: flex;
      gap: 0 10px;
      & > div:nth-child(1) {
        & > div:nth-child(1) {
          color: var(--Deep-Blue, #3e5270);
          font-family: "Noto Sans HK";
          font-size: 33.75px;
          font-style: normal;
          font-weight: 700;
          line-height: 45px; /* 133.333% */
          letter-spacing: 1.688px;
        }
        & > div:nth-child(2) {
          margin-top: 15px;
          color: #60605f;
          font-family: "Noto Sans CJK TC";
          font-size: 21px;
          font-style: normal;
          font-weight: 500;
          line-height: 45px;
        }
      }
      & > div:nth-child(2) {
        min-width: 410px;
        & > img {
          width: 100%;
        }
      }
    }
    & > div:nth-child(2) {
      position: relative;
      top: -15px;
      display: flex;
      gap: 0 70px;
      & > div {
        display: flex;
        & > div:nth-child(2) {
          margin-left: 20px;
          max-width: 300px;
          & > p:nth-child(1) {
            color: var(--Brand-Color, #00a6ce);
            font-family: "Noto Sans HK";
            font-size: 22.5px;
            font-style: normal;
            font-weight: 700;
            line-height: 33.75px; /* 150% */
            letter-spacing: 1.125px;
          }
          & > p:nth-child(2) {
            color: #60605f;
            font-family: "Noto Sans HK";
            font-size: 16.5px;
            font-style: normal;
            font-weight: 500;
            line-height: 30px;
            letter-spacing: 0.825px;
          }
        }
      }
      & > div:nth-child(1) {
        & > div:nth-child(1) {
          min-width: 82.86px;
          & > img {
            width: 100%;
          }
        }
      }
      & > div:nth-child(2) {
        & > div:nth-child(1) {
          min-width: 107.563px;
          & > img {
            width: 100%;
          }
        }
      }
    }
  }
  .kind-active {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    & > div:nth-child(1) {
      cursor: pointer;
      position: relative;
      width: 247.5px;
      height: 247.5px;
      & > img {
        width: 100%;
      }
      margin-bottom: 17px;
    }

    & > div:nth-child(2) {
      max-width: 314px;
      width: 100%;
      margin: 0 auto;
      border-radius: 15px;
      color: #fff;
      border: 2px solid #00a6ce;
      background: #00a6ce;
      font-family: "Noto Sans HK";
      font-size: 18.75px;
      font-style: normal;
      font-weight: 700;
      line-height: 33.75px; /* 180% */
      letter-spacing: 0.938px;
      text-align: center;
    }
  }
  .kind-item {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    & > div:nth-child(1) {
      cursor: pointer;
      position: relative;
      margin-bottom: 17px;
      width: 247.5px;
      height: 247.5px;
      & > img {
        width: 100%;
      }
    }

    & > div:nth-child(1)::after {
      position: absolute;
      content: "";
      width: 247.5px;
      height: 247.5px;
      background: #d9d9d980;
      border-radius: 15px;
      top: 0;
      left: 0;
    }
    & > div:nth-child(2) {
      max-width: 314px;
      width: 100%;
      margin: 0 auto;
      border: 2px solid #00a6ce;
      border-radius: 15px;
      color: #00a6ce;
      font-family: "Noto Sans HK";
      font-size: 18.75px;
      font-style: normal;
      font-weight: 700;
      line-height: 33.75px; /* 180% */
      letter-spacing: 0.938px;
      text-align: center;
    }
  }
  .kind-container-active {
    display: block;
  }
  .kind-container-item {
    display: none;
  }
  .myopia-control-form {
    margin: 60px auto 35px;
  }
  .profile-title {
    // background: url("https://static.cmereye.com/imgs/2024/05/2411d80b7ca6dfb0.png")
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
  .terms-content {
    color: var(--Grey-Deep, #4d4d4d);
    font-family: "Noto Sans HK";
    font-size: 10.5px;
    font-style: normal;
    font-weight: 400;
    line-height: 15px; /* 142.857% */
    letter-spacing: 0.525px;
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
  .effect-btn {
    display: flex;
    align-items: center;
    width: fit-content;
    & > div:nth-child(1) {
      position: relative;
      z-index: 6;
      color: var(--White, #fff);
      text-align: center;
      font-family: "Noto Sans HK";
      font-size: 18px;
      font-style: normal;
      font-weight: 500;
      line-height: 25px; /* 138.889% */
      letter-spacing: 0.9px;
      margin-right: 5px;
    }
    & > div:nth-child(2) {
      position: relative;
      z-index: 6;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    padding: 10px 10px 10px 18px;
    border-radius: 100px;
    position: relative;
  }
  .effect-btn::before {
    border-radius: 100px;
    position: absolute;
    z-index: 5;
    top: 0;
    left: 0;
    content: "";
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, #de9f40 25.95%, #ed33ae 100%);
  }
  .effect-btn::after {
    content: "";
    position: absolute;
    z-index: 3;
    width: 86%;
    text-align: center;
    height: 30px;
    display: inline-block;
    bottom: -10px;
    left: 50%;
    background: linear-gradient(270deg, #de9f40 25.95%, #ed33ae 100%);
    border-radius: 100px;
    filter: blur(15px); /* 添加模糊效果 */
    transform: translateX(-50%) scaleY(-1) rotate(180deg);
  }
}
@media screen and (max-width: 767px) {
  .myopia-control-zeiss {
    margin-bottom: 40px;
  }
  .myopia-control-head {
    padding: 0 25px;
    & > div:nth-child(2) {
      color: var(--Grey-Deep, #4d4d4d);
      text-align: justify;
      font-family: "Noto Sans HK";
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: 26px; /* 185.714% */
      margin: 18px 0;
      & > p {
        display: inline;
      }
    }
    & > div:nth-child(3) {
      border-radius: 30px;
      background: var(--Skin, #eafbff);
      box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25);
      padding: auto;
      box-sizing: border-box;
      padding: 30px 25px;
      display: flex;
      flex-direction: column-reverse;
      & > div:nth-child(2) {
        width: 285px;
        margin: 0 auto 20px;
        & > img {
          width: 100%;
        }
      }
      & > div:nth-child(1) {
        color: #60605f;
        text-align: justify;
        font-family: "Noto Sans HK";
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: 26px; /* 185.714% */
      }
    }
  }
  .myopia-container-step {
    margin-top: 45px;
    background: #eafbff;
    & > div {
      padding: 24px 25px 33px;
      & > div:nth-child(1) {
        display: flex;
        flex-direction: column;
        align-items: center;
        color: #00a6ce;
        text-align: center;
        font-family: "Noto Sans HK";
        font-size: 24px;
        font-style: normal;
        font-weight: 700;
        line-height: 40.107px; /* 167.112% */
      }
      & > div:nth-child(2) {
        margin-top: 20px;
        border-radius: 20px;
        background: var(--White, #fff);
        padding: 18px 28px;
        & > div {
          margin-bottom: 10px;
          & > div {
            display: flex;
            & > div:nth-child(1) {
              flex: 1.8;
              color: #60605f;
              font-family: "Inter";
              font-size: 14px;
              font-style: normal;
              font-weight: 600;
              line-height: 20.566px;
            }
            & > div:nth-child(2) {
              flex: 8;
              display: flex;
              flex-direction: column;
              & > span:nth-child(1) {
                color: #59ba68;
                font-family: "Inter";
                font-size: 16px;
                font-style: normal;
                font-weight: 600;
                line-height: 20.566px;
                margin-bottom: 7px;
              }
              & > span:nth-child(2) {
                color: #60605f;
                font-family: "Noto Sans HK";
                font-size: 14px;
                font-style: normal;
                font-weight: 500;
                line-height: 18px; /* 128.571% */
                text-transform: uppercase;
              }
            }
          }
        }
        & > div:nth-child(1) {
          & > div:nth-child(1) {
            margin-bottom: 22px;
          }
          & > div:nth-child(2) {
            margin-bottom: 22px;
          }
          & > div {
            position: relative;
          }
          & > div::after {
            position: absolute;
            left: 15px;
            top: 20px;
            content: "";
            width: 1.97px;
            height: 40px;
            border-radius: 1.97px;
            background: #4d4d4d;
          }
          & > div:nth-child(2)::after {
            top: 25px;
            height: 45px;
          }
        }
        & > div:nth-child(2) {
          & > div:nth-child(1) {
            margin-bottom: 22px;
          }
          & > div:nth-child(1) {
            position: relative;
          }
          & > div:nth-child(1)::after {
            position: absolute;
            left: 15px;
            top: 20px;
            content: "";
            width: 1.97px;
            height: 40px;
            border-radius: 1.97px;
            background: #4d4d4d;
          }
        }
      }
    }
  }
  .myopia-promise {
    margin-top: 30px;
    margin-bottom: 55px;
    padding: 0 25px;
    & > div:nth-child(2) {
      margin-top: 30px;
      display: flex;
      gap: 0 12px;
      & > div {
        & > div:nth-child(1) {
          border-radius: 5.284px;
          background: var(--Skin, #eafbff);
          box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
          width: 105.426px;
          height: 100.141px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        & > div:nth-child(2) {
          & > div:nth-child(1) {
            color: var(--Brand-Color, #00a6ce);
            text-align: center;
            font-family: "Inter";
            font-size: 16px;
            font-style: normal;
            font-weight: 600;
            line-height: 20px; /* 125% */
            text-transform: uppercase;
            margin: 8px auto 7px;
          }
          & > div:nth-child(2) {
            display: flex;
            flex-direction: column;
            color: #60605f;
            text-align: center;
            font-family: "Noto Sans HK";
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
            line-height: 18px; /* 128.571% */
            text-transform: uppercase;
          }
        }
      }
      & > div:nth-child(1) {
        & > div:nth-child(1) {
          & > svg {
            width: 65.241px;
            height: 28.449px;
          }
        }
      }
      & > div:nth-child(2) {
        & > div:nth-child(1) {
          & > svg {
            width: 44.502px;
            height: 44.615px;
          }
        }
      }
      & > div:nth-child(3) {
        & > div:nth-child(1) {
          & > svg {
            width: 41.892px;
            height: 43.002px;
          }
        }
      }
    }
  }
  .myopia-server {
    margin-top: 27px;
    padding: 0 25px;
    & > div:nth-child(2) {
      display: grid;
      grid-template-columns: auto auto;
      gap: 30px 18px;
      margin-top: 25px;
      & > div {
        & > div:nth-child(1) {
          width: 159px;
          height: 159px;
          border-radius: 5px;
          background: #e4faff;
          box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
          display: flex;
          justify-content: center;
          align-items: center;
        }
        & > div:nth-child(2) {
          margin-top: 16px;
          color: #60605f;
          text-align: center;
          font-family: "Noto Sans HK";
          font-size: 14px;
          font-style: normal;
          font-weight: 500;
          line-height: 18px; /* 128.571% */
          text-transform: uppercase;
        }
      }
    }
  }
  .myopia-crowd {
    padding: 0 25px;
    & > div:nth-child(1) {
      color: #00a6ce;
      font-family: "Inter";
      font-size: 20px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
    }
    & > div:nth-child(2) {
      display: grid;
      grid-template-columns: auto auto auto;
      gap: 15px 12px;
      margin-top: 17px;
      & > div {
        display: flex;
        flex-direction: column;
        align-items: center;
        & > div:nth-child(1) {
          width: 105px;
          height: 105px;
          display: flex;
          justify-content: center;
          align-items: center;
          box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
          background: #e4faff;
          border-radius: 15px;
        }
        & > div:nth-child(2) {
          margin-top: 17px;
          color: #60605f;
          text-align: center;
          font-family: "Noto Sans HK";
          font-size: 12px;
          font-style: normal;
          font-weight: 500;
          line-height: 18px; /* 128.571% */
          text-transform: uppercase;
        }
      }
      & > div:nth-child(1) {
        & > div:nth-child(1) {
          & > img {
            width: 76.725px;
            height: 51.095px;
          }
        }
      }
      & > div:nth-child(2) {
        & > div:nth-child(1) {
          & > img {
            width: 76.725px;
            height: 51.095px;
          }
        }
      }
      & > div:nth-child(3) {
        & > div:nth-child(1) {
          & > img {
            width: 38.9px;
            height: 62.78px;
          }
        }
      }
      & > div:nth-child(4) {
        & > div:nth-child(1) {
          & > img {
            width: 72.617px;
            height: 52.493px;
          }
        }
      }
      & > div:nth-child(5) {
        & > div:nth-child(1) {
          & > img {
            width: 49px;
            height: 63.767px;
          }
        }
      }
      & > div:nth-child(6) {
        & > div:nth-child(1) {
          & > img {
            width: 61px;
            height: 61px;
          }
        }
      }
    }
  }
  .myopia-effect {
    box-sizing: border-box;
    background: url("https://static.cmereye.com/imgs/2024/05/1098483523cbe84c.jpg")
      no-repeat;
    background-size: 100% 100%;
    width: 340px;
    height: 320px;
    margin: 40px auto;
    display: flex;
    & > div {
      flex: 1;
    }
    & > div:nth-child(2) {
      padding-top: 50px;
      padding-bottom: 50px;
      & > p:nth-child(1) {
        color: var(--White, #fff);
        font-family: "Noto Sans HK";
        font-size: 18px;
        font-style: normal;
        font-weight: 700;
        line-height: 20px; /* 111.111% */
        letter-spacing: 0.9px;
        position: relative;
        padding-bottom: 5px;
        padding-left: 20px;
      }
      & > p:nth-child(1)::after {
        content: "";
        display: inline-block;
        position: absolute;
        bottom: 0;
        left: 20px;
        height: 2px;
        background: #fff;
        border-radius: 2px;
        width: 48%;
      }
      & > div:nth-child(2) {
        padding-left: 20px;
        margin-top: 12px;
        display: flex;
        flex-direction: column;
        color: var(--White, #fff);
        font-family: "Noto Sans HK";
        font-size: 14px;
        font-style: normal;
        font-weight: 700;
        line-height: 28.235px; /* 201.681% */
        letter-spacing: 0.7px;
        margin-bottom: 50px;
        & > span {
          position: relative;
        }
        & > span::before {
          content: "";
          position: absolute;
          background: url("https://static.cmereye.com/imgs/2024/05/94ccdd234fb8a5c4.png")
            no-repeat;
          background-size: 100% 100%;
          width: 12px;
          height: 8px;
          top: 50%;
          left: -20px;
          transform: translateY(-50%);
        }
      }
    }
  }
  .myopia-form-kind {
    padding: 0 24px;
    & > div:nth-child(2) {
      margin-top: 20px;
      margin-bottom: 18px;
      & > div:nth-child(1) {
        display: flex;
        gap: 0 15px;
        justify-content: center;
      }
    }
    & > div:nth-child(3) {
      display: flex;
      justify-content: center;
    }
  }
  .myopia-control-form {
    margin: 42px auto 37px;
  }
  .profile-title {
    // background: url("https://static.cmereye.com/imgs/2024/05/ac3b7c31e12a7393.png")
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
  .btn-care {
    background: url("https://static.cmereye.com/imgs/2024/05/d8fbc8b63ad7ee46.png")
      no-repeat;
    background-size: 100% 100%;
    height: 714px;
    max-width: 340px;
    margin: 0 auto;
    width: 100%;
    padding-top: 43px;
    & > div:nth-child(1) {
      & > div:nth-child(1) {
        & > div:nth-child(1) {
          padding-left: 20px;
          padding-right: 20px;
          color: var(--Deep-Blue, #3e5270);
          text-align: justify;
          font-family: "Noto Sans HK";
          font-size: 24px;
          font-style: normal;
          font-weight: 700;
          line-height: 40.107px; /* 167.112% */
          letter-spacing: 1.2px;
        }
        & > div:nth-child(2) {
          color: var(--Grey-Deep, #4d4d4d);
          font-family: "Noto Sans HK";
          font-size: 14px;
          font-style: normal;
          font-weight: 500;
          line-height: 26px; /* 185.714% */
          padding-left: 20px;
          padding-right: 20px;
        }
      }
      & > div:nth-child(2) {
        width: 320px;
        & > img {
          width: 100%;
        }
      }
    }
    & > div:nth-child(2) {
      display: flex;
      flex-direction: column;
      & > div {
        display: flex;
        align-items: center;
        & > div:nth-child(2) {
          margin-left: 19px;
          max-width: 410px;
          & > p:nth-child(1) {
            color: var(--Brand-Color, #00a6ce);
            font-family: "Noto Sans HK";
            font-size: 24px;
            font-style: normal;
            font-weight: 700;
            line-height: 45px; /* 187.5% */
            letter-spacing: 1.2px;
          }
          & > p:nth-child(2) {
            color: #60605f;
            font-family: "Noto Sans HK";
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
            line-height: 26px;
          }
        }
      }
      & > div:nth-child(1) {
        padding: 0 16px;
        & > div:nth-child(1) {
          min-width: 88px;
          height: 88px;
          & > img {
            width: 100%;
            height: 100%;
          }
        }
      }
      & > div:nth-child(2) {
        padding: 0 12px;
        & > div:nth-child(1) {
          min-width: 106px;
          height: 80px;
          & > img {
            width: 100%;
            height: 100%;
          }
        }
        & > div:nth-child(2) {
          margin-left: 5px;
        }
      }
    }
  }
  .btn-vision {
    background: url("https://static.cmereye.com/imgs/2024/05/0200365be6cf2d1f.png")
      no-repeat;
    background-size: 100% 100%;
    height: 942px;
    max-width: 340px;
    margin: 0 auto;
    padding: 43px 25px 0 20px;
    & > div:nth-child(1) {
      display: flex;
      flex-direction: column;

      & > div:nth-child(1) {
        color: var(--Deep-Blue, #3e5270);
        text-align: justify;
        font-family: "Noto Sans HK";
        font-size: 24px;
        font-style: normal;
        font-weight: 700;
        line-height: 40.107px; /* 167.112% */
        letter-spacing: 1.2px;
      }
      & > div:nth-child(2) {
        color: #60605f;
        text-align: justify;
        font-family: "Noto Sans HK";
        font-size: 18px;
        font-style: normal;
        font-weight: 500;
        line-height: 28px; /* 155.556% */
        text-transform: uppercase;
      }
    }
    & > div:nth-child(2) {
      margin-top: 34px;
      & > div:nth-child(1) {
        display: flex;
        flex-direction: column;
        gap: 0 200px;
        margin-bottom: 35px;
        & > div:nth-child(1) {
          margin-bottom: 90px;
        }
        & > div {
          color: var(--Brand-Color, #00a6ce);
          font-family: "Noto Sans HK";
          font-size: 17.223px;
          font-style: normal;
          font-weight: 700;
          line-height: 25.834px; /* 150% */
          letter-spacing: 0.861px;
          & > div:nth-child(2) {
            max-width: 280px;
            margin: 0 auto;
            margin-top: 10px;
            & > img {
              width: 100%;
            }
          }
        }
      }
      & > div:nth-child(2) {
        color: #60605f;
        font-family: "Noto Sans HK";
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: 26px;
        & > p:nth-child(1) {
          font-weight: 700;
        }
      }
    }
  }
  .btn-kids {
    background: url("https://static.cmereye.com/imgs/2024/05/d8fbc8b63ad7ee46.png")
      no-repeat;
    background-size: 100% 100%;
    height: 714px;
    max-width: 340px;
    margin: 0 auto;
    width: 100%;
    padding-top: 43px;
    & > div:nth-child(1) {
      & > div:nth-child(1) {
        & > div:nth-child(1) {
          padding-left: 20px;
          padding-right: 20px;
          color: var(--Deep-Blue, #3e5270);
          text-align: justify;
          font-family: "Noto Sans HK";
          font-size: 24px;
          font-style: normal;
          font-weight: 700;
          line-height: 40.107px; /* 167.112% */
          letter-spacing: 1.2px;
        }
        & > div:nth-child(2) {
          color: var(--Grey-Deep, #4d4d4d);
          font-family: "Noto Sans HK";
          font-size: 14px;
          font-style: normal;
          font-weight: 500;
          line-height: 26px; /* 185.714% */
          padding-left: 20px;
          padding-right: 20px;
        }
      }
      & > div:nth-child(2) {
        width: 320px;
        & > img {
          width: 100%;
        }
      }
    }
    & > div:nth-child(2) {
      display: flex;
      flex-direction: column;
      & > div {
        display: flex;
        align-items: center;
        & > div:nth-child(2) {
          margin-left: 19px;
          max-width: 410px;
          & > p:nth-child(1) {
            color: var(--Brand-Color, #00a6ce);
            font-family: "Noto Sans HK";
            font-size: 24px;
            font-style: normal;
            font-weight: 700;
            line-height: 45px; /* 187.5% */
            letter-spacing: 1.2px;
          }
          & > p:nth-child(2) {
            color: #60605f;
            font-family: "Noto Sans HK";
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
            line-height: 26px;
          }
        }
      }
      & > div:nth-child(1) {
        padding: 0 16px;
        & > div:nth-child(1) {
          min-width: 88px;
          height: 88px;
          & > img {
            width: 100%;
            height: 100%;
          }
        }
      }
      & > div:nth-child(2) {
        padding: 0 12px;
        & > div:nth-child(1) {
          min-width: 106px;
          height: 80px;
          & > img {
            width: 100%;
            height: 100%;
          }
        }
        & > div:nth-child(2) {
          margin-left: 5px;
        }
      }
    }
  }
  .kind-active {
    & > div:nth-child(1) {
      position: relative;
      width: 103.087px;
      height: 103.087px;
      & > img {
        width: 100%;
      }
      margin-bottom: 5px;
    }

    & > div:nth-child(2) {
      max-width: 102px;
      margin: 0 auto;
      border-radius: 4px;
      background: var(--Brand-Color, #00a6ce);
      color: var(--White, #fff);
      text-align: center;
      font-family: "Noto Sans HK";
      font-size: 14px;
      font-style: normal;
      font-weight: 700;
      line-height: 18.794px; /* 134.242% */
      letter-spacing: 0.7px;
      box-sizing: border-box;
      padding: 7px 12px;
    }
  }
  .kind-item {
    & > div:nth-child(1) {
      position: relative;
      margin-bottom: 5px;
      width: 103.087px;
      height: 103.087px;
      & > img {
        width: 100%;
      }
    }

    & > div:nth-child(1)::after {
      position: absolute;
      content: "";
      width: 103.087px;
      height: 103.087px;
      background: #d9d9d980;
      top: 0;
      left: 0;
    }
    & > div:nth-child(2) {
      max-width: 102px;
      margin: 0 auto;
      border: 2px solid #00a6ce;
      border-radius: 4px;
      color: var(--Brand-Color, #00a6ce);
      text-align: center;
      font-family: "Noto Sans HK";
      font-size: 14px;
      font-style: normal;
      font-weight: 700;
      line-height: 18.794px;
      box-sizing: border-box;
      padding: 7px 12px;
    }
  }
  .kind-container-active {
    display: block;
  }
  .kind-container-item {
    display: none;
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
  .terms-content {
    color: var(--Grey-Deep, #4d4d4d);
    font-family: "Noto Sans HK";
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 142.857% */
    letter-spacing: 0.7px;
  }
  .effect-btn {
    display: flex;
    align-items: center;
    & > div:nth-child(1) {
      position: relative;
      z-index: 6;
      color: var(--White, #fff);
      text-align: center;
      font-family: "Noto Sans HK";
      font-size: 9.767px;
      font-style: normal;
      font-weight: 500;
      line-height: 13.566px; /* 138.889% */
      letter-spacing: 0.488px;
      margin-right: 5px;
    }
    & > div:nth-child(2) {
      position: relative;
      z-index: 6;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 10px;
      height: 18px;
      & > svg {
        width: 100%;
        height: 100%;
      }
    }
    padding: 3px;
    border-radius: 100px;
    width: 120px;
    height: 28px;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  .effect-btn::before {
    padding: 3px 0;
    border-radius: 100px;
    position: absolute;
    z-index: 5;
    top: 0;
    left: 0;
    content: "";
    width: 120px;
    height: 28px;
    background: linear-gradient(90deg, #de9f40 25.95%, #ed33ae 100%);
  }
  .effect-btn::after {
    content: "";
    position: absolute;
    z-index: 3;
    width: 86%;
    text-align: center;
    height: 30px;
    display: inline-block;
    bottom: -10px;
    left: 50%;
    background: linear-gradient(270deg, #de9f40 25.95%, #ed33ae 100%);
    border-radius: 100px;
    filter: blur(15px); /* 添加模糊效果 */
    transform: translateX(-50%) scaleY(-1) rotate(180deg);
  }
}
</style>