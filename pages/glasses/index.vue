<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue'


import { Swiper, SwiperSlide } from "swiper/vue";
// Import Swiper styles
import "swiper/scss";

import "swiper/scss/pagination";
import "swiper/scss/navigation";



import { Grid, Autoplay, Pagination, Navigation } from "swiper/modules";
// 屏幕寬度
const width = ref(0)
const modules = [Autoplay, Pagination, Navigation];


const handleResize = () => {
  width.value = window.innerWidth
 
}
const getDirection = () => (width.value > 768 ? 'horizontal' : 'vertical')

const onImgLoad = () => {
  // 所有 Swiper 都刷新一次
  Object.values(swiperMap).forEach(swiper => swiper?.update())
}


useHead(() => ({
  title: "TrunkShow｜希瑪視光中心",
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
const productSpec = reactive([])
onMounted(() => {
    handleResize();
  window.addEventListener('resize', handleResize)

  const productSpec2 = [
  {
    id: 1,
    title: 'LINDBERG',
    style: {
      backgroundRotate: {
        transform: width.value >768 ? 'rotate(-1.377deg) translateZ(0)': 'rotate(0deg)',
         background: 'radial-gradient(100.98% 100.81% at 50% 50%,#fff 43.27%,#dad8d6 100%)',
         boxShadow: '0 15px 23px -2px rgba(18, 18, 18, 0.25)'
      },
      productSpecContentWrapper:{
        flexDirection: width.value >768 ? 'row':'column',
      },
       productSpecBlock2: {
        transform: width.value >768 ? 'rotate(+1.377deg) translateZ(0)': 'rotate(0deg)',
      },
    },
    mainImg:{
        pc:'https://statichk.cmermedical.com/cmermedical/image/20251225/section1-pc.webp',
        mobile:'https://statichk.cmermedical.com/cmermedical/image/20251225/section1-m.webp',
    },
    swiper: [
      { id: 1, img: 'https://statichk.cmermedical.com/cmermedical/image/20251225/section1-swiper1.png', title: '5543＿PU15' },
      { id: 2, img: 'https://statichk.cmermedical.com/cmermedical/image/20251225/section1-swiper1.png', title: '5543＿PU15' },
      { id: 3, img: 'https://statichk.cmermedical.com/cmermedical/image/20251225/section1-swiper1.png', title: '5543＿PU15' },
      { id: 4, img: 'https://statichk.cmermedical.com/cmermedical/image/20251225/section1-swiper1.png', title: '5543＿PU15' },
    ],
  },
  {
    id: 2,
    title: 'LINDBERG',
    style: {
      backgroundRotate: {
        transform: width.value >768 ? 'rotate(0.912deg) translateZ(0)':'rotate(0deg)',
         background: 'radial-gradient(100.98% 100.81% at 50% 50%, #FFF 0%, #B3B3B3 100%)',
         boxShadow: '0 15px 23px -2px rgba(18, 18, 18, 0.25)'
      },
       productSpecContentWrapper:{
      
           flexDirection: width.value >768 ? 'row-reverse':'column',
      },
      productSpecBlock2: {
        transform: width.value >768 ? 'rotate(-0.912deg)':'rotate(0deg)',
      },
      
    },
     mainImg:{
        pc:'https://statichk.cmermedical.com/cmermedical/image/20251225/section2-pc.webp',
        mobile:'https://statichk.cmermedical.com/cmermedical/image/20251225/section2-m.webp',
    },
    swiper: [
      { id: 1, img: 'https://statichk.cmermedical.com/cmermedical/image/20251225/section1-swiper1.png', title: '5543＿PU15' },
      { id: 2, img: 'https://statichk.cmermedical.com/cmermedical/image/20251225/section1-swiper1.png', title: '5543＿PU15' },
      { id: 3, img: 'https://statichk.cmermedical.com/cmermedical/image/20251225/section1-swiper1.png', title: '5543＿PU15' },
      { id: 4, img: 'https://statichk.cmermedical.com/cmermedical/image/20251225/section1-swiper1.png', title: '5543＿PU15' },
    ],
  },
]

    productSpec2.forEach((item) => {
        productSpec.push(item)
    })
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})

const swiperMap = reactive<Record<number, any>>({})

const setSwiper = (index: number, swiper: any) => {
  swiperMap[index] = swiper
}

const handlesSliNext = (index: number) => {
  swiperMap[index]?.slideNext()
}

const handlesSliPrev = (index: number) => {
  swiperMap[index]?.slidePrev()
}

</script>

<template>
    <div >
        <!-- start banner -->
        <section class="banner">
            <div class="banner__wrapper">
                <div class="banner__content">
                    
                    <div class="banner__main">

                        <div class="banner__main-text-wrap">

                            <div class="banner__main-text">
                               GLASSES
                            </div>
                            <div class="banner__text-ui">
                                <div class="banner__text-li">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="banner_text-li-icon" viewBox="0 0 6 7" fill="none">
  <path d="M5.25 3.03125L-2.85483e-07 6.06234L-2.04968e-08 0.000160941L5.25 3.03125Z" fill="#4D4D4D"/>
</svg> LINDBERG </div>
<div class="banner__text-li">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="banner_text-li-icon" viewBox="0 0 6 7" fill="none">
  <path d="M5.25 3.03125L-2.85483e-07 6.06234L-2.04968e-08 0.000160941L5.25 3.03125Z" fill="#4D4D4D"/>
</svg> 999.9 </div>
<div class="banner__text-li">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="banner_text-li-icon" viewBox="0 0 6 7" fill="none">
  <path d="M5.25 3.03125L-2.85483e-07 6.06234L-2.04968e-08 0.000160941L5.25 3.03125Z" fill="#4D4D4D"/>
</svg> MARKUS T </div>
<div class="banner__text-li">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="banner_text-li-icon" viewBox="0 0 6 7" fill="none">
  <path d="M5.25 3.03125L-2.85483e-07 6.06234L-2.04968e-08 0.000160941L5.25 3.03125Z" fill="#4D4D4D"/>
</svg> Silhouette </div>
<div class="banner__text-li">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="banner_text-li-icon" viewBox="0 0 6 7" fill="none">
  <path d="M5.25 3.03125L-2.85483e-07 6.06234L-2.04968e-08 0.000160941L5.25 3.03125Z" fill="#4D4D4D"/>
</svg> MONOQOOL </div>

                            </div>
                     
                        

                       
                       </div>

                      

                                 <img
                                  class="banner__main-img"
        src="https://statichk.cmermedical.com/cmermedical/image/20251225/banner-pc.webp"
        srcset="
          https://statichk.cmermedical.com/cmermedical/image/20251225/banner-m.webp 400w,
          https://statichk.cmermedical.com/cmermedical/image/20251225/banner-m.webp 640w,
          https://statichk.cmermedical.com/cmermedical/image/20251225/banner-pc.webp
        "
        sizes=" (max-width: 992px) 100vw,1216px"
        alt=""
      />
                    </div>
                </div>
            </div>
        </section>
        <!-- end banner -->


        <!-- start banner -->
        <div class="breadcrumb">
            <span class="breadcrumb__item1">主頁</span> <svg xmlns="http://www.w3.org/2000/svg" width="21" height="2" viewBox="0 0 21 2" fill="none">
  <path d="M0 0.75H21" stroke="#AAAAAA" stroke-width="1.5"/>
</svg> <span class="breadcrumb__item2">眼鏡</span>
        </div>
         <!-- end banner -->

        <!-- start product-spec -->

        <section class="product-spec" v-for="(v,k) in productSpec" :key="v.id"  v-if="productSpec.length>0"> 
            <div class="background-rotate" :style="v.style.backgroundRotate"></div>
            <!-- mobile -->
            <div class="product-spec__wrapper">
                  <div class="product-spec__content-wrapper" :style="v.style.productSpecContentWrapper">
                <div class="product-spec__block1">
                   <!-- <img
  class="product-spec__img"
  :src="v.mainImg.pc"
  :srcset="`${v.mainImg.mobile} 400w, ${v.mainImg.mobile} 640w, ${v.mainImg.pc} 1216w`"
  sizes="(max-width: 992px) 100vw, 1216px"
  alt=""
/> -->

  <img
                                  class="product-spec__img"
        src="https://statichk.cmermedical.com/cmermedical/image/20251225/section1-pc.webp"
        srcset="
          https://statichk.cmermedical.com/cmermedical/image/20251225/section1-m.webp 400w,
          https://statichk.cmermedical.com/cmermedical/image/20251225/section1-m.webp 640w,
          https://statichk.cmermedical.com/cmermedical/image/20251225/section1-pc.webp
        "
        sizes=" (max-width: 992px) 100vw,1216px"
        alt=""
      />

                     
                </div>
                <div class="product-spec__block2" >
                     <div class="product-spec__brand">{{ v['title'] }}</div>
                    <div class="product-spec__content">
                        <div class="product-spec__description">{{width}}來自丹麥的 LINDBERG 承襲北歐設計的優雅精髓，以簡約美學、卓越工藝與創新技術享譽全球，丹麥擁有悠久的設計傳統，強調功能性與美感並存，這些理念深深植入 LINDBERG 的品牌哲學之中。</div>
                <div class="product-spec__description">LINDBERG 以革命性的無螺絲、無焊接設計聞名，打造出極致輕盈且堅固耐用的鏡框，品牌嚴選高品質鈦金屬與醋酸纖維材質，不僅確保配戴的舒適性，更能完美貼合各種臉型。透過高度客製化的設計理念，每一副 LINDBERG 眼鏡皆是個人風格的獨特展現，展現北歐設計的極簡美學與尖端技術的完美融合。</div>
                    
                    </div>

                 <div class="product-spec__swiper-wrap">
                   <swiper
      v-if="width > 0 && v.swiper?.length"
      :direction="width > 768 ? 'horizontal' : 'vertical'"
      :modules="modules"
      :slides-per-view="3"
      :space-between="width > 768 ? 24 : 12"
      :loop="true"
      :autoplay="{
        delay: 2500,
        disableOnInteraction: false,
      }"
      class="product-spec__myswiper"
      @swiper="(s) => setSwiper(k, s)"
    >
      <template v-for="item in v.swiper" :key="item.id">
        <swiper-slide class="product-spec__slider">
          <div class="product-spec__slider-item" >
            <img :src="item.img" class="product-spec__swiper-img" @load="onImgLoad" />
            <div class="product-spec__slider-title">{{ item.title }}</div>
          </div>
        </swiper-slide>
      </template>
    </swiper>

  
      <div class="swiper-button-next-prev">
        <div class="button-prev" @click="handlesSliPrev(k)"><svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 33 62" fill="none">
  <path d="M30.8096 1.5L2.68694 27.8231C1.12148 29.2884 1.1012 31.7657 2.64246 33.2564L30.8096 60.5" stroke="#4D4D4D" stroke-width="3" stroke-linecap="round"/>
</svg></div>
        <div class="button-next"  @click="handlesSliNext(k)"><svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 33 62" fill="none">
  <path d="M1.5 1.5L29.6226 27.8231C31.1881 29.2884 31.2084 31.7657 29.6671 33.2564L1.5 60.5" stroke="#4D4D4D" stroke-width="3" stroke-linecap="round"/>
</svg></div>
      </div>
                 </div>

                 <!-- 了解更多按鈕 -->
                 <div class="product-spec__more-btn">
                    <span>了解更多</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="9" height="15" viewBox="0 0 9 15" fill="none">
  <path d="M1.01855 1.01562L7.25756 7.25463L1.01855 13.4936" stroke="white" stroke-width="1.43977" stroke-linecap="square"/>
</svg>
                 </div>

                </div>
                </div>
            </div>
        </section>
        <!-- end product-spec -->



        <!-- start address -->

        <section class="address">
            <div class="address__wrapper">
                <div class="address__item">
                    <div class="address__item-img">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448.35212245020546!2d114.15715201970383!3d22.28106878236476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34040106316e66b3%3A0xd15dcc6e17ec1b11!2z5biM55Gq6KaW5YWJIC0gWkVJU1MgVklTSU9OIEVYUEVSVA!5e0!3m2!1szh-CN!2s!4v1762496628160!5m2!1szh-CN!2s"
                            style="border:0;" allowfullscreen="" loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>

                    <div class="address__info">

                        <div class="address__info-item">
                            <div class="address__info-item-title">
                                地址
                            </div>
                            <div class="address__info-item-p">
                                中環畢打街1-3號中建大廈1515室 <br>
                                （中環站G出口）
                            </div>
                        </div>

                        <div class="address__info-item">
                            <div class="address__info-item-title">
                                營業時間
                            </div>
                            <div class="address__info-content">
                                <div class="address__date">
                                    星期一至五：<br>
                                    09:30 – 13:30 <br>
                                    14:30 – 18:00 <br>
                                </div>
                                <div class="address__date">
                                    星期六：<br>
                                    09:30 – 13:30 <br>
                                    (星期日及公眾假期休息) <br>
                                </div>
                            </div>

                        </div>


                        <div class="address__info-item ">
                            <div class="address__info-item-title">
                                查詢電話
                            </div>
                            <div class="address__info-content ">
                                <div class="address__phone">
                                    +852 3892 5089
                                </div>
                                <a href="https://api.whatsapp.com/send?phone=85269180511&text=%E4%BD%A0%E5%A5%BD%EF%BC%8C%E6%88%91%E6%83%B3%E6%9F%A5%E8%A9%A2%E5%B8%8C%E7%91%AA%E8%A6%96%E5%85%89%E4%B8%AD%E5%BF%83%20X%20999.9%20TrunkShow%E8%A9%B3%E6%83%85"
                                    class="address__whatsapp">
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26"
                                            viewBox="0 0 26 26" fill="none">
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


<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Abel&family=Playfair+Display+SC:ital,wght@0,400;0,700;0,900;1,400;1,700;1,900&display=swap");

@import "./index.css";
</style>