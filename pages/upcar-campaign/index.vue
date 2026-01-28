<script lang="ts" setup>
import lazyframe from 'lazyframe';
import 'lazyframe/dist/lazyframe.css';
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
              <div class="upcar__container">
                  <div class="upcar__nav">
                    <span>主頁</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="2" viewBox="0 0 21 2" fill="none">
  <path d="M0 0.75H21" stroke="#AAAAAA" stroke-width="1.5"/>
</svg>
                    <span>ZEISS Vision Expert</span>
                     <svg xmlns="http://www.w3.org/2000/svg" width="21" height="2" viewBox="0 0 21 2" fill="none">
  <path d="M0 0.75H21" stroke="#AAAAAA" stroke-width="1.5"/>
</svg>
                 <span>ZEISS 鏡片</span>
                </div>
                <div >
                    <img src="https://statichk.cmermedical.com/cmermedical/image/20260128/upcar.png" alt="" class="upcar__logo">
                </div>
                <div class="upcar__title">駕輛 UpCar x <br>
                    希瑪視光 ZEISS Vision Expert</div>
                <p class="upcar__desc">
                    作為駕駛者，長期受到夜間視力模糊、眩光困擾？ 原來問題不只在度數，每雙眼睛如指紋般獨一無二，角膜與瞳孔細微結構的差異，會產生所謂
                    「高階像差」，令傳統鏡片難以完美對應。
                </p>
              </div>
            </div>
        </section>



        <!-- zeiss -->
        <section>
            <div class="zeiss">
                <div class="zeiss__container">
                    <div class="zeiss__desc">
                         希瑪視光攜手 ZEISS Vision Expert，引入革命性蔡司 i.Technology 技術，配備高精度測量設備ZEISS i.Profiler Plus，捕捉眼睛微細凹凸面，全面分析您的「光學指紋」，精確計算鏡片最佳曲率與度數分佈，精度高達 1/100 度，有效減少高階像差。 蔡司i.Technology 技術能夠顯著提升視覺清晰度、對比度與立體感，特別適合夜間駕駛者或對視覺質量要求極高的專業人士。
                    </div>

                     <div class="zeiss-experience">
        <div class="zeiss-experience__orbit zeiss-experience__orbit--outer"></div>
        <div class="zeiss-experience__orbit zeiss-experience__orbit--inner"></div>

        <svg xmlns="http://www.w3.org/2000/svg" class="zeiss-experience__svg" style="position: absolute; top: 0;right: 0;" viewBox="0 0 870 978" fill="none">
  <path d="M1.13672 793.821C90.4575 905.027 227.481 976.122 381.096 976.122C650.164 976.122 868.35 757.859 868.35 488.696C868.35 219.534 650.164 1.13281 381.096 1.13281" stroke="url(#paint0_linear_7140_3340)" stroke-width="2.27322" stroke-miterlimit="10" stroke-linecap="round"/>
  <defs>
    <linearGradient id="paint0_linear_7140_3340" x1="889.091" y1="488.558" x2="-19.7417" y2="488.558" gradientUnits="userSpaceOnUse">
      <stop stop-color="#B5CCFF"/>
      <stop offset="1" stop-color="#2972F0"/>
    </linearGradient>
  </defs>
</svg>

<svg xmlns="http://www.w3.org/2000/svg" class="zeiss-experience__svgmb" width="390" height="520" viewBox="0 0 390 520" style="position: absolute;" fill="none">
  <path d="M-6.88672 421.789C40.573 480.877 113.379 518.652 195.001 518.652C337.968 518.652 453.899 402.681 453.899 259.664C453.899 116.647 337.968 0.601562 195.001 0.601562" stroke="url(#paint0_linear_7144_4169)" stroke-width="1.20785" stroke-miterlimit="10" stroke-linecap="round"/>
  <defs>
    <linearGradient id="paint0_linear_7144_4169" x1="464.919" y1="259.59" x2="-17.9802" y2="259.59" gradientUnits="userSpaceOnUse">
      <stop stop-color="#B5CCFF"/>
      <stop offset="1" stop-color="#2972F0"/>
    </linearGradient>
  </defs>
</svg>

        <div class="zeiss-experience__center">
            <span class="zeiss-experience__title">
                你的蔡司<br>
                <span >視覺體驗</span>
            </span>
        </div>

        <div class="step-item step-item--pos-1">
            <div class="step-item__icon"><img src="https://statichk.cmermedical.com/cmermedical/image/20260128/section3-icon/1.png" alt=""></div>
            <div class="step-item__number">01</div>
            <div class="step-item__label">視覺需求分析</div>
        </div>

        <div class="step-item step-item--pos-2 step-item--active">
           
            <div class="step-item__number">
                <div class="step-item__icon"> <img src="https://statichk.cmermedical.com/cmermedical/image/20260128/section3-icon/2.png" alt=""></div>
                
                02 <span class="step-item__arrow"><img src="https://statichk.cmermedical.com/cmermedical/image/20260128/section3-icon/down.png" alt=""></span>
            </div>
            <div class="step-item__label">光學指紋測量</div>
            <div class="step-item__tooltip">
                • 分析眼睛的高階像差、日間和夜間的視覺表現<br>
                • 採用前導波技術全面分析<br>
                • 使用 VISUCORE 500 儀器
            </div>
        </div>

        <div class="step-item step-item--pos-3">
            <div class="step-item__icon"><img src="https://statichk.cmermedical.com/cmermedical/image/20260128/section3-icon/3.png" alt=""></div>
            <div>
                <div class="step-item__number">03</div>
            <div class="step-item__label">視覺表現分析</div>
            </div>
        </div>

         <div class="step-item step-item--pos-4">
            <div class="step-item__icon"><img src="https://statichk.cmermedical.com/cmermedical/image/20260128/section3-icon/4.png" alt=""></div>
            <div>
                <div class="step-item__number">04</div>
            <div class="step-item__label">視覺表現分析</div>
            </div>
        </div>

        <div class="step-item step-item--pos-5">
            <div class="step-item__icon"><img src="https://statichk.cmermedical.com/cmermedical/image/20260128/section3-icon/5.png" alt=""></div>
            <div class="step-item__number">05 <img src="https://statichk.cmermedical.com/cmermedical/image/20260128/section3-icon/right.png" alt=""></div>
            <div class="step-item__label">鏡框中心定位</div>
        </div>

         <div class="step-item step-item--pos-6">
            <div class="step-item__icon"><img src="https://statichk.cmermedical.com/cmermedical/image/20260128/section3-icon/6.png" alt=""></div>
            <div>
                <div class="step-item__number">06 </div>
            <div class="step-item__label">鏡框中心定位</div>
            </div>
        </div>

         <div class="step-item step-item--pos-7">
            <div class="step-item__icon"><img src="https://statichk.cmermedical.com/cmermedical/image/20260128/section3-icon/7.png" alt=""></div>
           <div>
             <div class="step-item__number">07 </div>
            <div class="step-item__label">鏡框中心定位</div>
           </div>
        </div>

        <div class="step-item step-item--pos-8">
            <div class="step-item__icon"><img src="https://statichk.cmermedical.com/cmermedical/image/20260128/section3-icon/8.png" alt=""></div>
            <div>
                <div class="step-item__number">08</div>
            <div class="step-item__label">服務和跟進</div>
            </div>
        </div>

        </div>

                    <div class="zeiss__desc">
                        同時，透過 VISUFIT 1000 中心定位技術，精準測量眼睛與鏡框的所有角度，確保鏡片與面型完美契合，提升配戴舒適度，打造真正專屬的視覺升級方案！
                    </div>


                    <div class="zeiss__btn">
 <span>了解更多</span><svg xmlns="http://www.w3.org/2000/svg" width="18" height="31" viewBox="0 0 18 31" fill="none">
  <path d="M2.12109 2.125L15.1211 15.125L2.12109 28.125" stroke="white" stroke-width="3" stroke-linecap="square"/>
</svg>
                    </div>


                </div>

            </div>
        </section>



    </div>
</template>


<style lang="scss" scoped>
@import "./index.css";
</style>
