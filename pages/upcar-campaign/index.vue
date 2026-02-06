<script lang="ts" setup>
import lazyframe from 'lazyframe';
import 'lazyframe/dist/lazyframe.css';
import { Swiper, SwiperSlide } from "swiper/vue";
import { ref } from 'vue';
// Import Swiper styles
import "swiper/scss";

import "swiper/scss/pagination";

import { Grid, Autoplay, Pagination } from "swiper/modules";

const modules = [Autoplay, Pagination];
const swiperRef = ref(null);

const swiperNext = () => {
    if (swiperRef.value) {
        swiperRef.value.slideNext();
    }
};

const swiperPrev = () => {
    if (swiperRef.value) {
        swiperRef.value.slidePrev();
    }
};

const onSwiper = (swiper) => {
    swiperRef.value = swiper;
};

useHead(() => ({
    title: "駕輛 UpCar x 希瑪視光中心｜ZEISS VISION EXPERT",
    meta: [
        {
            hid: "description",
            name: "description",
            content:
                "希瑪眼科視光中心是您的全方位視光服務中心，我們的註冊視光師提供專業的驗眼服務，並提供各種眼鏡選擇，包括hoya漸進鏡片、全視線鏡片、老花鏡等。我們的眼鏡價錢公道，並經常有配眼鏡優惠活動。我們還提供老花隱形眼鏡和兒童近視控制鏡片等產品。無論您是需要驗眼服務，還是尋找高品質的眼鏡，希瑪視光中心都能滿足您的需求。立即聯絡我們了解更多信息。",
        },
        {
            hid: "Keywords",
            name: "Keywords",
            content:
                "眼鏡優惠 配眼鏡優惠 hoya漸進鏡片價錢 漸進鏡片價錢 全視線鏡片價錢 全視線漸進鏡價錢 hoya鏡片價錢 zeiss鏡片價錢 漸進眼鏡價錢 眼鏡價錢 配眼鏡價錢 老花隱形眼鏡價錢 漸進老花眼鏡價錢 hoya兒童近視控制鏡片價錢 OK鏡 ok鏡價錢 老花鏡 老花眼鏡 老花隱形眼鏡 兒童近視控制鏡片價格 近視控制鏡片 驗眼費用 驗眼價錢 註冊視光師 視光師 視光師驗眼中心 希瑪視光 視光中心 希瑪視光中心 希瑪眼科視光中心",
        },
    ],
}));

const bannerImg = []


onMounted(() => {
    // 3. 確保在 DOM 掛載後執行
    // 直接傳入選擇器字串即可
    lazyframe('.lazyframe', {
        onLoad: (el) => console.log('影片已加載', el),
        debounce: 250
    });
});

</script>

<template>
    <div class="upcar-campaign">
        <!-- 輪播 -->
        <section class="mx-auto">
            <div class="lazyframe" data-vendor="youtube" data-src="https://youtu.be/kPM1KMcAwss?si=aszvq2zGLaZVnoEo"
                data-thumbnail="https://img.youtube.com/vi/kPM1KMcAwss/maxresdefault.jpg"></div>
        </section>


        <!-- 文字 -->
        <section>

            <div class="upcar">
                <!-- <picture>
  <source
    media="(max-width: 768px)"
    srcset="https://statichk.cmermedical.com/cmermedical/image/20260202/section2-mobile-bg.webp"
    
  />
  <img
    src="https://statichk.cmermedical.com/cmermedical/image/20260128/section-2-pc.webp"
    class="upcar__main-img"
    alt=""
  />
</picture> -->

                <div class="upcar__container">
                    <div class="upcar__content">
                        <div class="upcar__nav">
                            <span>主頁</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="2" viewBox="0 0 21 2"
                                fill="none">
                                <path d="M0 0.75H21" stroke="#AAAAAA" stroke-width="1.5" />
                            </svg>
                            <span>ZEISS Vision Expert</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="2" viewBox="0 0 21 2"
                                fill="none">
                                <path d="M0 0.75H21" stroke="#AAAAAA" stroke-width="1.5" />
                            </svg>
                            <span>ZEISS 鏡片</span>
                        </div>
                        <div>
                            <img src="https://statichk.cmermedical.com/cmermedical/image/20260128/upcar.png" alt=""
                                class="upcar__logo">
                        </div>
                        <div class="upcar__title">駕輛 UpCar x <br>
                            希瑪視光 ZEISS Vision Expert</div>
                        <p class="upcar__desc">
                            作為駕駛者，長期受到夜間視力模糊、眩光困擾？ 原來問題不只在度數，每雙眼睛如指紋般獨一無二，角膜與瞳孔細微結構的差異，會產生所謂
                            「高階像差」，令傳統鏡片難以完美對應。
                        </p>
                    </div>
                </div>
            </div>
        </section>



        <!-- zeiss -->
        <section>
            <div class="zeiss">
                <div class="zeiss__container">
                    <div class="zeiss__desc">
                         希瑪視光攜手 ZEISS Vision Expert，引入革命性蔡司 i.Technology 技術，配備高精度測量設備ZEISS i.Profiler
                        Plus，捕捉眼睛微細凹凸面，全面分析您的「光學指紋」，精確計算鏡片最佳曲率與度數分佈，精度高達 1/100 度，有效減少高階像差。 蔡司i.Technology
                        技術能夠顯著提升視覺清晰度、對比度與立體感，特別適合夜間駕駛者或對視覺質量要求極高的專業人士。
                    </div>

                    <div class="zeiss-experience__container">
                        <div class="zeiss-experience">
                            <div class="zeiss-experience__orbit zeiss-experience__orbit--outer"></div>
                            <div class="zeiss-experience__orbit zeiss-experience__orbit--inner"></div>


                            <svg  viewBox="0 0 978 978" class="zeiss-experience__svg2"
                                fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M490.482 1.14278C347.847 0.573884 206.365 62.3196 109.692 181.701C-59.6384 390.807 -27.3255 697.726 181.853 867.116"
                                    stroke="url(#paint0_linear_7282_661)" stroke-width="2.27322" stroke-miterlimit="10"
                                    stroke-linecap="round" />
                                <defs>
                                    <linearGradient id="paint0_linear_7282_661" x1="-20.5724" y1="729.882" x2="551.374"
                                        y2="23.587" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#B5CCFF" />
                                        <stop offset="1" stop-color="#2972F0" />
                                    </linearGradient>
                                </defs>
                            </svg>

                            <svg xmlns="http://www.w3.org/2000/svg" class="zeiss-experience__svg" style=""
                                viewBox="0 0 978 978" fill="none">
                                <path
                                    d="M1.13672 793.821C90.4575 905.027 227.481 976.122 381.096 976.122C650.164 976.122 868.35 757.859 868.35 488.696C868.35 219.534 650.164 1.13281 381.096 1.13281"
                                    stroke="url(#paint0_linear_7140_3340)" stroke-width="2.27322" stroke-miterlimit="10"
                                    stroke-linecap="round" />
                                <defs>
                                    <linearGradient id="paint0_linear_7140_3340" x1="889.091" y1="488.558" x2="-19.7417"
                                        y2="488.558" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#B5CCFF" />
                                        <stop offset="1" stop-color="#2972F0" />
                                    </linearGradient>
                                </defs>
                            </svg>

                            <svg xmlns="http://www.w3.org/2000/svg" class="zeiss-experience__svgmb"
                                viewBox="0 0 390 520" style="position: absolute; top: 0;right: 0;" fill="none">
                                <path
                                    d="M-6.88672 421.789C40.573 480.877 113.379 518.652 195.001 518.652C337.968 518.652 453.899 402.681 453.899 259.664C453.899 116.647 337.968 0.601562 195.001 0.601562"
                                    stroke="url(#paint0_linear_7144_4169)" stroke-width="1.20785" stroke-miterlimit="10"
                                    stroke-linecap="round" />
                                <defs>
                                    <linearGradient id="paint0_linear_7144_4169" x1="464.919" y1="259.59" x2="-17.9802"
                                        y2="259.59" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#B5CCFF" />
                                        <stop offset="1" stop-color="#2972F0" />
                                    </linearGradient>
                                </defs>
                            </svg>


                            <svg class="zeiss-experience__svgmb2" viewBox="0 0 390 520" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M59.8605 424.516C22.8463 379.707 0.603982 322.238 0.603988 259.594C0.604 116.577 116.535 0.605426 259.502 0.605438"
                                    stroke="url(#paint0_linear_7324_642)" stroke-width="1.20785" stroke-miterlimit="10"
                                    stroke-linecap="round" />
                                <defs>
                                    <linearGradient id="paint0_linear_7324_642" x1="-10.4159" y1="259.668" x2="472.483"
                                        y2="259.668" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#B5CCFF" />
                                        <stop offset="1" stop-color="#2972F0" />
                                    </linearGradient>
                                </defs>
                            </svg>

                            <!-- <svg class="zeiss-experience__svgmb2" viewBox="0 0 390 520" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M54.5234 419.057C25.2299 380.976 7.06104 335.522 2.0332 287.741C-2.99464 239.96 5.31517 191.72 26.0404 148.375C46.7656 105.031 79.0957 68.2761 119.443 42.1909C159.789 16.1057 206.575 1.71001 254.607 0.601562" stroke="url(#paint0_linear_7320_1122)" stroke-width="1.21" stroke-linecap="round"/>
  <defs>
    <linearGradient id="paint0_linear_7320_1122" x1="127.606" y1="0.601562" x2="127.606" y2="419.057" gradientUnits="userSpaceOnUse">
      <stop stop-color="#9FA8DA"/>
      <stop offset="1" stop-color="#2972F0"/>
    </linearGradient>
  </defs>
</svg> -->

                            <div class="zeiss-experience__center">
                                <span class="zeiss-experience__title">
                                    你的蔡司<br>
                                    <span>視覺體驗</span>
                                </span>
                            </div>

                            <div class="step-item step-item--pos-1">
                                <div class="step-item__icon"><img
                                        src="https://statichk.cmermedical.com/cmermedical/image/20260128/section3-icon/1.png"
                                        alt=""></div>
                                <div class="step-item__number">01</div>
                                <div class="step-item__label">視覺需求 <br class="step-item__br"> 分析</div>
                            </div>

                            <div class="step-item step-item--pos-2 step-item--active">

                                <div class="step-item__number">
                                    <div class="step-item__icon"> <img
                                            src="https://statichk.cmermedical.com/cmermedical/image/20260128/section3-icon/2.png"
                                            alt=""></div>

                                    02 <span class="step-item__arrow"><img
                                            src="https://statichk.cmermedical.com/cmermedical/image/20260128/section3-icon/down.png"
                                            alt=""></span>
                                </div>
                                <div class="step-item__label">光學指紋<br class="step-item__br">測量</div>
                                <div class="step-item__tooltip">
                                    • 分析眼睛的高階像差、日間和夜間的視覺表現<br>
                                    • 採用前導波技術全面分析<br>
                                    • 使用ZEISS i.Profiler plus 儀器
                                </div>
                            </div>

                            <div class="step-item step-item--pos-3">
                                <div class="step-item__icon"><img
                                        src="https://statichk.cmermedical.com/cmermedical/image/20260128/section3-icon/3.png"
                                        alt=""></div>
                                <div>
                                    <div class="step-item__number">03</div>
                                    <div class="step-item__label">視覺表現<br class="step-item__br">分析</div>
                                </div>
                            </div>

                            <div class="step-item step-item--pos-4">
                                <div class="step-item__icon"><img
                                        src="https://statichk.cmermedical.com/cmermedical/image/20260128/section3-icon/4.png"
                                        alt=""></div>
                                <div>
                                    <div class="step-item__number">04</div>
                                    <div class="step-item__label">鏡框選擇</div>
                                </div>
                            </div>

                            <div class="step-item step-item--pos-5">
                                <div class="step-item__icon"><img
                                        src="https://statichk.cmermedical.com/cmermedical/image/20260128/section3-icon/5.png"
                                        alt=""></div>
                                <div class="step-item__number">05 <span class="step-item__arrow"><img
                                            src="https://statichk.cmermedical.com/cmermedical/image/20260128/section3-icon/right.png"
                                            alt=""></span></div>
                                <div class="step-item__label">鏡框中心定位</div>
                            </div>

                            <div class="step-item step-item--pos-6">
                                <div class="step-item__icon"><img
                                        src="https://statichk.cmermedical.com/cmermedical/image/20260128/section3-icon/6.png"
                                        alt=""></div>
                                <div>
                                    <div class="step-item__number">06 </div>
                                    <div class="step-item__label">專屬鏡片</div>
                                </div>
                            </div>

                            <div class="step-item step-item--pos-7">
                                <div class="step-item__icon"><img
                                        src="https://statichk.cmermedical.com/cmermedical/image/20260128/section3-icon/7.png"
                                        alt=""></div>
                                <div>
                                    <div class="step-item__number">07 </div>
                                    <div class="step-item__label">領取眼鏡</div>
                                </div>
                            </div>

                            <div class="step-item step-item--pos-8">
                                <div class="step-item__icon"><img
                                        src="https://statichk.cmermedical.com/cmermedical/image/20260128/section3-icon/8.png"
                                        alt=""></div>
                                <div>
                                    <div class="step-item__number">08</div>
                                    <div class="step-item__label">服務和<br class="step-item__br">跟進</div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div class="zeiss__desc">
                        同時，透過 VISUFIT 1000 中心定位技術，精準測量眼睛與鏡框的所有角度，確保鏡片與面型完美契合，提升配戴舒適度，打造真正專屬的視覺升級方案！
                    </div>


                    <a href="https://www.cmervision.com/zve" target="_blank" class="zeiss__btn">
                        <p>
                            <span>了解更多</span><svg xmlns="http://www.w3.org/2000/svg" class="zeiss__btn-icon"
                                viewBox="0 0 18 31" fill="none">
                                <path d="M2.12109 2.125L15.1211 15.125L2.12109 28.125" stroke="white" stroke-width="3"
                                    stroke-linecap="square" />
                            </svg>
                        </p>
                    </a>


                </div>

            </div>
        </section>




        <!-- Title -->
        <section class="section-title">
            <h1 class="section-title__text">蔡司訂製鏡片系列</h1>
        </section>

        <!-- Lens Cards -->
        <section class="lens-slider">
            <div class="lens-slider__container">
                <button class="lens-slider__nav lens-slider__nav--prev" @click="swiperPrev">
                    <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.5674 1.5L2.56738 7.13415L9.8615 12.5" stroke="#2449A4" stroke-width="3"
                            stroke-linecap="round" />
                    </svg>
                </button>
                <swiper :modules="modules" :breakpoints="{
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 37,
                    },
                    768: {
                        slidesPerView: 1,
                        spaceBetween: 37,
                    },
                    900: {
                        slidesPerView: 2,
                        spaceBetween: 37,
                    },
                    1024: {
                        slidesPerView: 2,
                        spaceBetween: 37,
                    },
                    1280: {
                        slidesPerView: 2,
                        spaceBetween: 37,
                    }
                }" :slides-per-view="2" :space-between="37" :pagination="{
                    clickable: true,
                    type: 'bullets'
                }" :loop="true" :autoplay="{
                    delay: 2500,
                    disableOnInteraction: false,
                }" class="product-spec__myswiper" @swiper="onSwiper">
                    <!-- @swiper="(s) => setSwiper(0, s)"
                    @slideChange="(s) => onSlideChange(0, s)" -->
                    <swiper-slide class="product-spec__slider">
                        <!-- DriveSafe -->
                        <div class="lens-card">
                            <h2 class="lens-card__title">蔡司 DriveSafe 鏡片</h2>

                            <img src="https://statichk.cmermedical.com/cmermedical/image/20260128/section3-icon/card1-2.webp"
                                class="lens-card__circle" />

                            <p class="lens-card__desc">
                                為駕駛者度身設計，全天候提供穩定視覺，<br />夜間更安全！

                            </p>

                            <ul class="lens-card__list">
                                <li class="lens-card__item"><img
                                        src="https://statichk.cmermedical.com/cmermedical/image/20260128/section3-icon/start.png"
                                        class="lens-card__icon" alt=""> 減少夜間眩光干擾</li>
                                <li class="lens-card__item"><img
                                        src="https://statichk.cmermedical.com/cmermedical/image/20260128/section3-icon/start.png"
                                        class="lens-card__icon" alt="">合全天候配戴</li>
                                <li class="lens-card__item"><img
                                        src="https://statichk.cmermedical.com/cmermedical/image/20260128/section3-icon/start.png"
                                        class="lens-card__icon" alt="">遠近視覺輕鬆轉換</li>
                                <li class="lens-card__item"><img
                                        src="https://statichk.cmermedical.com/cmermedical/image/20260128/section3-icon/start.png"
                                        class="lens-card__icon" alt="">減輕長途駕駛疲勞</li>
                            </ul>
                        </div>
                    </swiper-slide>
                    <swiper-slide class="product-spec__slider">
                        <!-- SmartLife -->
                        <div class="lens-card">
                            <h2 class="lens-card__title">蔡司 SmartLife 鏡片</h2>

                            <img src="https://statichk.cmermedical.com/cmermedical/image/20260128/section3-icon/card2-7.webp"
                                class="lens-card__circle" />
                            <!-- <div class="lens-card__circle--smart"></div> -->
                            <p class="lens-card__desc">
                                為數碼生活度身設計，全天候視野流暢，<br />遠近視覺一樣清楚！
                            </p>

                            <ul class="lens-card__list">
                                <li class="lens-card__item">
                                    <img src="https://statichk.cmermedical.com/cmermedical/image/20260128/section3-icon/start.png"
                                        class="lens-card__icon" alt="">減輕數碼視覺壓力
                                </li>
                                <li class="lens-card__item"><img
                                        src="https://statichk.cmermedical.com/cmermedical/image/20260128/section3-icon/start.png"
                                        class="lens-card__icon" alt="">適合全天候配戴</li>
                                <li class="lens-card__item"><img
                                        src="https://statichk.cmermedical.com/cmermedical/image/20260128/section3-icon/start.png"
                                        class="lens-card__icon" alt="">遠中近視覺自然轉換</li>
                                <li class="lens-card__item"><img
                                        src="https://statichk.cmermedical.com/cmermedical/image/20260128/section3-icon/start.png"
                                        class="lens-card__icon" alt="">減輕長時間用眼疲勞</li>
                            </ul>
                        </div>
                    </swiper-slide>

                </swiper>

                <button class="lens-slider__nav lens-slider__nav--next" @click="swiperNext">
                    <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.5 1.5L9.5 7.13415L2.20588 12.5" stroke="#2449A4" stroke-width="3"
                            stroke-linecap="round" />
                    </svg>
                </button>
            </div>
        </section>

        <!-- Experience -->
        <div class="experience">
            <div class="experience__content">
                <h3 class="experience__title">
                    驗配任何蔡司鏡片<br />
                    即可體驗蔡司視覺體驗
                </h3>
                <p class="experience__price">
                    （價值$2,000）一次
                </p>
            </div>



        </div>

        <a href="https://bit.ly/4qkVawR" target="_blank" class="experience__btn">
            <p>
                <span>立即預約驗配</span>
                <svg viewBox="0 0 18 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.12109 2.125L15.1211 15.125L2.12109 28.125" stroke="white" stroke-width="3"
                        stroke-linecap="square" />
                </svg>
            </p>
        </a>





        <section class="promo-section">
            <div class="promo-section__container">
                <header class="promo-section__header">
                    <h2 class="promo-section__title">現在預約，盡享雙重優惠！</h2>
                </header>

                <div class="promo-section__content">
                    <div class="promo-section__info">


                        <p class="promo-section__date">即日起至 2026 年 3 月 31 日，</p>
                        <p class="promo-section__location">於 <span class="promo-section__brand--highlight">希瑪視光 ZEISS
                                Vision Expert</span>
                        </p>
                        <span class="promo-section__action">
                            驗配<span class="promo-section__product--highlight">任何蔡司鏡片</span>，
                        </span>

                        <ul class="promo-section__benefit-list">
                            <li class="promo-section__benefit-item">
                                <span class="promo-section__icon"><svg class="promo-section__svg" viewBox="0 0 37 37"
                                        fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_7140_3603)">
                                            <path
                                                d="M36.1477 18.0705C20.1927 19.2411 19.248 20.1916 18.0773 36.1409C16.9066 20.1858 15.9561 19.2411 0.00683594 18.0705C15.9619 16.8998 16.9066 15.9493 18.0773 0C19.248 15.9551 20.1985 16.8998 36.1477 18.0705Z"
                                                fill="#2449A4" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_7140_3603">
                                                <rect width="36.1467" height="36.1467" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg></span> <span class="promo-section__benefit-text1" >尊享 75 折優惠  <span class="promo-section__benefit-text2">*蔡司Myocare鏡片不適用此優惠</span></span>
                            </li>
                            <li class="promo-section__benefit-item">
                                <span class="promo-section__icon"><svg class="promo-section__svg" viewBox="0 0 37 37"
                                        fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_7140_3603)">
                                            <path
                                                d="M36.1477 18.0705C20.1927 19.2411 19.248 20.1916 18.0773 36.1409C16.9066 20.1858 15.9561 19.2411 0.00683594 18.0705C15.9619 16.8998 16.9066 15.9493 18.0773 0C19.248 15.9551 20.1985 16.8998 36.1477 18.0705Z"
                                                fill="#2449A4" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_7140_3603">
                                                <rect width="36.1467" height="36.1467" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg></span> 加贈 蒸氣眼罩 8片裝一盒
                            </li>
                        </ul>
                    </div>

                    <div class="promo-section__media">
                        <img src="https://statichk.cmermedical.com/cmermedical/image/20260128/section3-icon/section5-img.webp"
                            alt="ZEISS Warm Eye Masks" class="promo-section__image">
                    </div>
                </div>
            </div>
        </section>




        <!-- start address -->

        <section class="address">
            <div class="address__wrapper">
                <div class="address__item">
                    <div class="address__item-img">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448.35212245020546!2d114.15715201970383!3d22.28106878236476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34040106316e66b3%3A0xd15dcc6e17ec1b11!2z5biM55Gq6KaW5YWJIC0gWkVJU1MgVklTSU9OIEVYUEVSVA!5e0!3m2!1szh-CN!2s!4v1762496628160!5m2!1szh-CN!2s"
                            style="border: 0;" allowfullscreen="" loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>

                    <div class="address__info">
                        <div class="address__info-item">
                            <div class="address__info-item-title">地址</div>
                            <div class="address__info-item-p">
                                中環畢打街1-3號中建大廈1515室 <br />
                                （中環站G出口）
                            </div>
                        </div>

                        <div class="address__info-item">
                            <div class="address__info-item-title">營業時間</div>
                            <div class="address__info-content">
                                <div class="address__date">
                                    星期一至五：<br />
                                    09:30 – 13:30 <br />
                                    14:30 – 18:00 <br />
                                </div>
                                <div class="address__date">
                                    星期六：<br />
                                    09:30 – 13:30 <br />
                                    (星期日及公眾假期休息) <br />
                                </div>
                            </div>
                        </div>

                        <div class="address__info-item">
                            <div class="address__info-item-title">查詢電話</div>
                            <div class="address__info-content">
                                <div class="address__phone">+852 3892 5089</div>
                                <a href="https://api.whatsapp.com/send?phone=85269180511&text=%E4%BD%A0%E5%A5%BD%EF%BC%8C%E6%88%91%E6%83%B3%E6%9F%A5%E8%A9%A2"
                                    class="address__whatsapp btn-animation">
                                    <span class="address__whatsapp-icon"><svg xmlns="http://www.w3.org/2000/svg"
                                            width="26" height="26" viewBox="0 0 26 26" fill="none">
                                            <path
                                                d="M17.9324 14.886C17.6584 14.7471 16.2933 14.0873 16.0394 13.9981C15.7855 13.9038 15.5995 13.8592 15.416 14.137C15.23 14.4123 14.702 15.0249 14.5361 15.2109C14.3752 15.3945 14.2118 15.4168 13.9378 15.2804C12.3088 14.4767 11.2404 13.8468 10.167 12.0287C9.8829 11.5451 10.451 11.5798 10.9815 10.5356C11.072 10.3521 11.0267 10.1958 10.9563 10.0569C10.8859 9.91801 10.3329 8.57371 10.1016 8.02557C9.87787 7.49231 9.6466 7.56672 9.47816 7.5568C9.31727 7.54687 9.13376 7.54688 8.94773 7.54688C8.7617 7.54688 8.46255 7.61632 8.20865 7.88667C7.95474 8.16198 7.23828 8.82421 7.23828 10.1685C7.23828 11.5128 8.23127 12.815 8.36702 12.9985C8.5078 13.182 10.3203 15.9401 13.1032 17.1282C14.8629 17.8772 15.5517 17.9417 16.4316 17.8127C16.9671 17.7333 18.0707 17.153 18.2994 16.5106C18.5282 15.8707 18.5282 15.3225 18.4603 15.2084C18.3924 15.0869 18.2064 15.0174 17.9324 14.886Z"
                                                fill="white" />
                                            <path
                                                d="M23.2592 8.3918C22.6911 7.05989 21.8766 5.8644 20.8383 4.83757C19.8001 3.81322 18.5884 3.00713 17.2359 2.44907C15.8533 1.87613 14.3851 1.58594 12.8718 1.58594H12.8215C11.2981 1.59338 9.82242 1.89101 8.43475 2.47635C7.09484 3.04186 5.8932 3.84546 4.86501 4.86981C3.83683 5.89417 3.02987 7.0847 2.47178 8.41164C1.89359 9.78571 1.60198 11.2466 1.60952 12.7496C1.61706 14.4709 2.03437 16.1798 2.81619 17.7077V21.4777C2.81619 22.1077 3.33405 22.6186 3.97258 22.6186H7.79622C9.34478 23.39 11.0769 23.8017 12.8215 23.8092H12.8743C14.3801 23.8092 15.8407 23.5214 17.2158 22.9584C18.5607 22.4053 19.7699 21.6116 20.8056 20.5972C21.8439 19.5828 22.6609 18.3972 23.2315 17.0752C23.8248 15.7061 24.1265 14.2502 24.134 12.7472C24.1416 11.2367 23.8449 9.77083 23.2592 8.3918ZM19.4607 19.2554C17.6985 20.9767 15.3605 21.9242 12.8718 21.9242H12.829C11.3132 21.9167 9.80734 21.5447 8.47749 20.8452L8.26632 20.7336H4.72675V17.2414L4.61362 17.0331C3.90471 15.721 3.52762 14.2353 3.52008 12.7397C3.51002 10.2669 4.46782 7.94535 6.22503 6.19676C7.97973 4.44817 10.3252 3.48086 12.8316 3.47094H12.8743C14.1312 3.47094 15.3505 3.71153 16.4993 4.18774C17.6205 4.65155 18.6261 5.31874 19.4909 6.17196C20.3531 7.02269 21.0319 8.01728 21.502 9.12348C21.9897 10.2694 22.2335 11.4847 22.2285 12.7397C22.2134 15.2101 21.2305 17.5242 19.4607 19.2554Z"
                                                fill="white" />
                                        </svg></span>

                                    <span>Whatsapp查詢</span>
                                </a>

                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </section>


        <!-- end address -->


    </div>
</template>

<style>
   .form-public {
        margin-bottom: 0 !important;
    }
</style>
<style lang="scss" scoped>
@import "./index.css";
</style>
