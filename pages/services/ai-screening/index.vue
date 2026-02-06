<script lang="ts" setup>
useHead(() => ({
  title: "人工智能眼底健康篩查服務 - 希瑪眼科視光中心",
}));
const bannerImg = {
  // pc: "https://static.cmereye.com/imgs/2024/11/f86a7c9ec8117038.png",
  // mobile: "https://static.cmereye.com/imgs/2024/11/83107af506188726.png",
  pc: "https://statichk.cmermedical.com/vision/imgs/50e6fa59e567.png",
  mobile: "https://statichk.cmermedical.com/vision/imgs/934a2d26d597.png",
};
</script>

<template>
  <div class="video-information">
    <PublicBanner :banner="bannerImg" />
    <PublicNavbar :name="'服務內容'" :isInsidePage="true" :insidePageTitle="'人工智能眼底健康篩查服務'" />
    <div class="ai-screening">
      <div class="explain">
        <PublicPageTitle :title="'人工智能眼底健康篩查服務'" />
        <div>
          現代生活節奏快，許多人往往忽略了眼睛健康的重要性。為了幫助大眾及早識別<br class="pcShow" />
          潛在眼疾及其他健康相關風險，希瑪視光中心特別推出了人工智能眼底健康篩查<br class="pcShow" />
          服務。這款眼底拍照智慧工作站是全球首創的一站式全自動化智慧眼底篩檢平<br class="pcShow" />
          台，結合了全自動眼底照相機、感光元件自動化系統以及語音引導系統，實現無<br class="pcShow" />
          人值守的眼底拍攝。透過先進的人工智慧演算法，系統能夠準確判別多種眼疾的<br class="pcShow" />
          風險，並為使用者提供相關健康風險的評級。
        </div>
      </div>
      <div class="assess">
        <div>
          <div>
            <span>自動風險分級</span>
            <span>涵蓋項目</span>
          </div>
          <div>本系統能夠自動評估並分級以下健康風險：</div>
        </div>
        <div>
          <div>
            <div>
              <img src="https://statichk.cmermedical.com/vision/imgs/34e54f5bb4cd.png" alt="糖尿眼" />
            </div>
            <div>
              <span>糖尿眼</span>
            </div>
          </div>
          <div>
            <div>
              <img src="https://statichk.cmermedical.com/vision/imgs/2b0a906966da.webp" alt="青光眼" />
            </div>
            <div>
              <span>青光眼</span>
            </div>
          </div>
          <div>
            <div>
              <img src="https://statichk.cmermedical.com/vision/imgs/bad67afca5dc.webp" alt="老年黃斑病變" />
            </div>
            <div>
              <span>老年黃斑病變</span>
            </div>
          </div>
        </div>
      </div>
      <div class="advantage">
        <PublicPageTitle :title="'服務優勢'" />
        <div>
          <div>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="131" height="109" viewBox="0 0 131 109" fill="none">
                <path
                  d="M28.8867 81.3136C30.4739 80.4145 31.9843 79.5563 33.5305 78.6828C42.0553 92.6136 54.2409 101.094 70.4713 103.122C84.5512 104.884 97.2488 101.058 108.062 91.8831C130.559 72.7978 131.158 39.756 111.032 19.838C99.645 8.57375 85.6827 3.83307 69.7852 5.97863C53.8927 8.1242 41.9273 16.5686 33.5766 30.2593C32.0048 29.3704 30.4944 28.5122 28.9891 27.6591C38.7017 9.62099 61.2706 -3.59469 85.9387 0.875246C111.18 5.44735 129.976 26.9337 130.959 52.0062C131.967 77.7632 115.077 100.746 90.1986 107.219C65.3564 113.681 40.4937 101.988 28.8867 81.3136Z"
                  fill="#00A6CE" />
                <path
                  d="M100.419 26.4621C101.806 27.8721 103.02 29.1032 104.346 30.4519C104.156 30.6511 103.854 30.9832 103.537 31.2999C97.8996 36.9295 92.2676 42.559 86.6101 48.1681C86.0161 48.7556 85.8933 49.1694 86.2568 50.0072C88.1 54.2677 87.5624 58.2881 84.4443 61.7465C81.5259 64.9853 77.7883 66.1296 73.549 64.9496C69.1099 63.7184 66.4219 60.7197 65.6744 56.1885C64.9474 51.7901 66.5653 48.1835 70.1442 45.6343C73.5643 43.1976 77.348 42.9473 81.1573 44.7761C81.9918 45.1746 82.3093 44.7506 82.7598 44.301C88.3662 38.7021 93.9777 33.1134 99.579 27.5094C99.9067 27.1824 100.163 26.7789 100.419 26.457V26.4621ZM81.8331 54.5487C81.8536 51.5857 79.3653 49.0775 76.3957 49.0723C73.4312 49.0621 70.9224 51.5704 70.9326 54.5282C70.948 57.4503 73.3646 59.887 76.3086 59.9432C79.2577 59.9994 81.8126 57.5065 81.8331 54.5487Z"
                  fill="#00A6CE" />
                <path d="M35.374 51.8867V57.1689H0V51.8867H35.374Z" fill="#00A6CE" />
                <path d="M10.916 40.7858V35.5547H46.2337V40.7858H10.916Z" fill="#00A6CE" />
                <path
                  d="M10.9219 73.4811C10.8963 73.1797 10.8656 72.9294 10.8656 72.6842C10.8604 71.2436 10.8656 69.7979 10.8656 68.25H46.2344V73.4811H10.9219Z"
                  fill="#00A6CE" />
              </svg>
            </div>
            <div>
              <div>操作簡便，快捷高效</div>
              <div>
                僅需三個簡單步驟，約 3 分鐘<br class="pcShow" />即可完成篩查並獲取報告。
              </div>
            </div>
          </div>
          <div>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="120" height="109" viewBox="0 0 120 109" fill="none">
                <path d="M90 69L104.573 76.3466L96.3223 81.7208L111 91" stroke="#00A6CE" stroke-width="5"
                  stroke-miterlimit="10" />
                <path d="M31 68L17.1212 75.3466L24.9788 80.7208L11 90" stroke="#00A6CE" stroke-width="5"
                  stroke-miterlimit="10" />
                <path d="M60.9516 78L67 92.8175L58 91.6447L62.9839 108" stroke="#00A6CE" stroke-width="5"
                  stroke-miterlimit="10" />
                <path
                  d="M116 33.5C116 33.5 90.9284 64 60 64C29.0716 64 4 33.5 4 33.5C4 33.5 29.0716 3 60 3C90.9284 3 116 33.5 116 33.5Z"
                  stroke="#00A6CE" stroke-width="5" stroke-miterlimit="10" />
                <path
                  d="M60.5 55C72.3741 55 82 45.3741 82 33.5C82 21.6259 72.3741 12 60.5 12C48.6259 12 39 21.6259 39 33.5C39 45.3741 48.6259 55 60.5 55Z"
                  stroke="#00A6CE" stroke-width="5" stroke-miterlimit="10" />
                <path d="M116 2L4 107" stroke="#00A6CE" stroke-width="5" />
              </svg>
            </div>
            <div>
              <div>非侵入性，無需放瞳</div>
              <div>
                無需使用擴瞳藥水，避免不適<br class="pcShow" />感和潛在副作用。
              </div>
            </div>
          </div>
          <div>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="88" height="127" viewBox="0 0 88 127" fill="none">
                <g clip-path="url(#clip0_3408_689)">
                  <path
                    d="M20.0364 13.9698C20.0659 13.5177 20.061 13.2743 20.1052 13.0358C20.3363 11.7591 19.7956 11.4511 18.5666 11.4709C14.1131 11.5455 9.65457 11.5008 5.19607 11.5008H3.69188C3.69188 12.1416 3.69188 12.6632 3.69188 13.1849C3.69188 37.324 3.69188 61.4681 3.69188 85.6073C3.69188 86.1438 3.70171 86.6903 3.59848 87.2119C3.40186 88.2005 2.71858 88.7172 1.7502 88.6725C0.791647 88.6278 0.157528 88.0664 0.0395525 87.0529C-0.00960403 86.6456 0.000227271 86.2283 0.000227271 85.8159C0.000227271 61.3439 0.000227271 36.8719 0.000227271 12.3999C0.000227271 9.02673 1.2488 7.76984 4.59145 7.76984C9.58083 7.76984 14.5653 7.78475 19.5547 7.745C20.1052 7.745 20.646 7.37738 21.1965 7.19853C22.0666 6.91536 22.9317 6.4285 23.8116 6.40366C27.4886 6.31424 31.1704 6.34405 34.8473 6.38379C35.6829 6.39373 36.1155 6.20991 36.435 5.32066C37.5902 2.0617 40.5986 0.00497697 43.9806 9.04507e-06C47.3724 -0.00495888 50.3807 2.03686 51.5556 5.27594C51.8604 6.11552 52.2339 6.39373 53.1089 6.38379C56.7465 6.33411 60.3841 6.37882 64.0266 6.35398C65.1719 6.34902 66.1846 6.55767 67.0694 7.39228C67.3692 7.67545 67.9542 7.74997 68.4064 7.75494C73.4745 7.77978 78.5474 7.76487 83.6155 7.76984C86.6877 7.76984 88.0002 9.10621 88.0002 12.236C88.0002 48.9837 88.0002 85.7364 88.0002 122.484C88.0002 125.693 86.7074 127 83.5516 127C57.1791 127 30.8115 127 4.43906 127C1.28813 127 0.000227271 125.688 0.000227271 122.479C0.000227271 113.8 0.000227271 105.116 0.000227271 96.4373C0.000227271 96.025 -0.0145197 95.6027 0.0592151 95.2003C0.221432 94.2614 0.81131 93.7497 1.74528 93.71C2.67926 93.6653 3.33795 94.1124 3.56407 95.0364C3.69188 95.5481 3.68697 96.0995 3.68697 96.6361C3.69188 104.987 3.69188 113.338 3.69188 121.684C3.69188 122.171 3.69188 122.653 3.69188 123.209H84.2053V11.5902H67.9886V13.9698C69.188 13.9698 70.3579 13.9698 71.5279 13.9698C73.5728 13.9698 75.6177 13.9549 77.6626 13.9698C80.3318 13.9947 81.8557 15.5099 81.8655 18.2075C81.8851 25.7289 81.8753 33.2553 81.8655 40.7767C81.8655 42.3218 81.1576 43.1862 79.9926 43.1514C78.8276 43.1166 78.1837 42.2671 78.1837 40.6873C78.1738 33.5782 78.1837 26.4691 78.1837 19.355C78.1837 18.8632 78.1837 18.3764 78.1837 17.7951H67.905C67.905 19.6283 67.9149 21.4316 67.9001 23.235C67.8952 24.0199 67.9149 24.8198 67.7822 25.5848C67.3889 27.8154 65.4472 29.2909 62.9451 29.2909C54.8933 29.3008 46.8366 29.2909 38.7847 29.2909C34.2476 29.2909 29.7104 29.3008 25.1684 29.2909C22.0125 29.281 20.1544 27.418 20.1151 24.2037C20.0905 22.1023 20.1151 20.0009 20.1151 17.8001H9.92984V67.4321V117.064H11.2915C25.5616 117.064 39.8268 117.064 54.097 117.064C60.3595 117.064 64.179 112.603 63.2942 106.17H61.8834C52.6419 106.17 43.4054 106.17 34.164 106.17C33.7953 106.17 33.4267 106.194 33.0629 106.155C32.0208 106.03 31.4112 105.404 31.3818 104.361C31.3523 103.308 31.9618 102.667 32.9744 102.478C33.3726 102.404 33.7904 102.444 34.1984 102.444C43.3956 102.444 52.5928 102.463 61.7949 102.429C64.5624 102.419 67.3397 102.304 70.1023 102.126C74.8361 101.823 78.1591 98.1016 78.1738 93.084C78.2033 84.1119 78.1837 75.1448 78.1837 66.1728C78.1837 61.0906 78.1837 56.0034 78.1886 50.9212C78.1886 50.3897 78.1001 49.6991 78.3803 49.3613C78.8276 48.8248 79.5748 48.1839 80.1548 48.2236C80.73 48.2634 81.3297 49.0235 81.777 49.5799C81.9835 49.8432 81.8704 50.3797 81.8704 50.7921C81.8704 64.8861 81.9097 78.985 81.8606 93.079C81.8213 106.025 73.8137 116.687 61.7064 119.856C59.4747 120.442 57.1152 120.74 54.8097 120.75C40.0087 120.83 25.2077 120.795 10.4116 120.79C7.67848 120.79 6.14479 119.275 6.14479 116.508C6.13496 83.7691 6.13496 51.0305 6.14479 18.2869C6.14479 15.4602 7.66864 13.9748 10.505 13.9648C13.6461 13.9549 16.7921 13.9648 20.0413 13.9648L20.0364 13.9698ZM23.8903 22.7928C23.6445 25.406 23.7822 25.5649 26.1023 25.5649C37.4624 25.5649 48.8225 25.5649 60.1826 25.5649C61.0821 25.5649 61.9817 25.5401 62.8812 25.5699C63.83 25.5997 64.2281 25.1377 64.2085 24.2186C64.1986 23.7815 64.2085 23.3443 64.2085 22.7978C63.5645 22.7978 63.0828 22.7978 62.6011 22.7978C54.0626 22.7978 45.5192 22.7978 36.9807 22.7928C36.4547 22.7928 35.9042 22.7779 35.4126 22.6239C34.5179 22.3457 34.105 21.6453 34.2033 20.7163C34.3016 19.7873 34.8522 19.2209 35.7763 19.0967C36.1794 19.0421 36.5923 19.0719 37.0003 19.0719C45.5388 19.0719 54.0822 19.0719 62.6207 19.0719H64.1249V10.1048C63.5989 10.1048 63.1565 10.1048 62.719 10.1048C59.2043 10.1048 55.6896 10.1097 52.175 10.1048C49.7958 10.0998 48.9798 9.46887 48.3162 7.16376C47.7115 5.06232 46.0697 3.75576 44.0297 3.74582C41.9996 3.73589 40.3479 5.03748 39.7285 7.12898C39.0354 9.48874 38.2342 10.0998 35.7616 10.1048C32.2469 10.1097 28.7322 10.1048 25.2175 10.1048C24.7849 10.1048 24.3524 10.1048 23.9198 10.1048V18.9576C24.1066 19.0123 24.1803 19.057 24.259 19.057C25.1979 19.0669 26.1367 19.0669 27.0756 19.0768C28.4127 19.0967 29.2434 19.7873 29.2582 20.8852C29.2729 21.9781 28.4373 22.7531 27.1346 22.7978C26.0827 22.8326 25.0258 22.8028 23.8952 22.8028L23.8903 22.7928ZM67.4036 106.189C66.9858 108.827 66.5631 111.51 66.1649 114.049C69.0701 112.881 74.3347 107.715 75.1212 104.928C72.6142 105.335 69.9549 105.772 67.4036 106.184V106.189Z"
                    fill="#00A6CE" />
                  <path
                    d="M37.9781 39.7139C37.9781 38.0149 37.9634 36.46 37.9781 34.9C38.0027 32.6645 38.9022 31.7752 41.1389 31.7653C43.0609 31.7553 44.978 31.7553 46.9 31.7653C49.1121 31.7752 49.9969 32.6744 50.0215 34.9398C50.0362 36.4649 50.0215 37.9901 50.0215 39.7139C51.6289 39.7139 53.1675 39.709 54.7011 39.7139C56.982 39.7239 57.8717 40.6231 57.8865 42.953C57.8963 44.8955 57.9012 46.8379 57.8865 48.7754C57.8668 50.9862 56.9918 51.8605 54.8388 51.8705C53.2953 51.8804 51.7518 51.8705 50.0264 51.8705C50.0264 53.5049 50.0313 55.0151 50.0264 56.5304C50.0116 58.9895 49.2055 59.8142 46.8017 59.8241C44.8404 59.8291 42.879 59.839 40.9177 59.8241C38.8973 59.8042 38.0223 58.9249 37.9879 56.8582C37.9634 55.2536 37.983 53.649 37.983 51.8754C36.2871 51.8754 34.7043 51.8854 33.1214 51.8754C31.0372 51.8605 30.1426 50.9762 30.118 48.8599C30.0934 46.7932 30.0885 44.7266 30.118 42.6649C30.1475 40.6628 31.1011 39.7338 33.0919 39.7189C34.6748 39.704 36.2576 39.7189 37.9781 39.7189V39.7139ZM41.6747 35.5558C41.6747 37.23 41.6845 38.7551 41.6747 40.2803C41.655 42.5755 40.8095 43.43 38.568 43.4399C37.0294 43.4449 35.4908 43.4399 33.9178 43.4399V48.1445C35.4957 48.1445 36.9655 48.1445 38.4303 48.1445C40.8046 48.1544 41.6599 49.0189 41.6747 51.4432C41.6845 52.9535 41.6747 54.4687 41.6747 56.0137H46.3298C46.3298 54.3743 46.315 52.8144 46.3298 51.2495C46.3544 49.0636 47.249 48.1594 49.3972 48.1445C50.9456 48.1346 52.494 48.1445 54.1064 48.1445V43.4349C52.3023 43.4349 50.5917 43.4647 48.881 43.425C47.5096 43.3952 46.5952 42.6102 46.4035 41.3186C46.315 40.7075 46.3347 40.0816 46.3298 39.4655C46.32 38.1689 46.3298 36.8673 46.3298 35.5508H41.6747V35.5558Z"
                    fill="#00A6CE" />
                  <path
                    d="M51.1029 71.7084C45.3073 71.7084 39.5069 71.6985 33.7113 71.7183C32.797 71.7183 31.9859 71.5743 31.5435 70.6651C31.0028 69.5424 31.6713 68.2557 32.9248 68.0272C33.323 67.9526 33.7408 67.9825 34.1439 67.9825C45.5334 67.9825 56.9279 67.9825 68.3175 67.9825C68.6026 67.9825 68.8926 67.9676 69.1728 67.9874C70.3231 68.0719 71.0752 68.8022 71.0899 69.8305C71.1047 70.9235 70.3329 71.6935 69.104 71.6985C65.4271 71.7233 61.7551 71.7084 58.0782 71.7084C55.7531 71.7084 53.4231 71.7084 51.098 71.7084H51.1029Z"
                    fill="#00A6CE" />
                  <path
                    d="M51.2407 85.2354C56.9232 85.2354 62.6057 85.2354 68.2882 85.2354C68.7355 85.2354 69.1927 85.2255 69.6301 85.3C70.5051 85.454 70.9918 86.0402 71.0655 86.9146C71.1442 87.8436 70.7362 88.5391 69.8317 88.8123C69.3745 88.9514 68.8633 88.9614 68.3816 88.9614C56.933 88.9713 45.4894 88.9713 34.0408 88.9614C33.5542 88.9614 33.0479 88.9465 32.5907 88.8024C31.6961 88.5192 31.1603 87.7591 31.4306 86.9046C31.6273 86.2787 32.2958 85.7322 32.8709 85.3249C33.1806 85.1063 33.7459 85.2404 34.1932 85.2354C39.8757 85.2354 45.5582 85.2354 51.2407 85.2354Z"
                    fill="#00A6CE" />
                  <path
                    d="M28.3193 70.1026C28.3193 71.1359 28.3439 72.1643 28.3094 73.1976C28.2554 74.7774 27.2526 75.8306 25.6796 75.8703C23.6396 75.925 21.5996 75.92 19.5596 75.8703C17.9718 75.8306 16.9592 74.8469 16.9051 73.2224C16.8363 71.121 16.8363 69.0146 16.9051 66.9132C16.9641 65.3036 17.9817 64.3348 19.5891 64.2951C21.5848 64.2454 23.5855 64.2454 25.5862 64.2951C27.287 64.3348 28.2701 65.393 28.3094 67.1318C28.3291 68.1204 28.3094 69.114 28.3094 70.1026H28.3193ZM24.5785 68.021C23.3987 68.021 22.3074 67.9912 21.226 68.0459C21.0048 68.0558 20.6263 68.3837 20.6164 68.5824C20.5575 69.7449 20.587 70.9123 20.587 72.0798H24.5785V68.016V68.021Z"
                    fill="#00A6CE" />
                  <path
                    d="M22.6512 92.7616C21.6337 92.7616 20.6112 92.7914 19.5937 92.7516C17.9961 92.692 16.9737 91.7481 16.9147 90.1286C16.8409 88.0271 16.8409 85.9207 16.9147 83.8193C16.9687 82.2097 17.9666 81.2211 19.574 81.1714C21.614 81.1068 23.654 81.1019 25.694 81.1714C27.3359 81.231 28.2993 82.2991 28.319 83.9783C28.3485 85.9555 28.3485 87.9377 28.319 89.9199C28.2944 91.7133 27.2769 92.7169 25.4728 92.7566C24.5339 92.7765 23.595 92.7566 22.6562 92.7566L22.6512 92.7616ZM24.588 84.957H20.6506V88.9561H24.588V84.957Z"
                    fill="#00A6CE" />
                  <path
                    d="M28.3195 103.849C28.3195 104.883 28.344 105.911 28.3096 106.944C28.2556 108.529 27.2577 109.582 25.6896 109.622C23.6496 109.672 21.6096 109.667 19.5696 109.622C18.0212 109.587 16.984 108.653 16.925 107.108C16.8414 104.927 16.8414 102.736 16.925 100.556C16.984 99.0751 17.972 98.1163 19.4664 98.0617C21.5457 97.9872 23.6299 97.9822 25.7043 98.0617C27.3511 98.1213 28.2752 99.1894 28.3096 100.883C28.3293 101.872 28.3096 102.866 28.3096 103.854L28.3195 103.849ZM20.5822 105.836H24.5639V101.768C23.4087 101.768 22.3174 101.728 21.2311 101.798C21.0001 101.812 20.6265 102.215 20.6117 102.453C20.5429 103.551 20.5822 104.659 20.5822 105.832V105.836Z"
                    fill="#00A6CE" />
                  <path
                    d="M45.8136 8.17069C45.8333 9.22389 45.0075 10.0684 43.9752 10.0535C42.9921 10.0386 42.2056 9.24376 42.1908 8.24024C42.1712 7.21685 42.9036 6.42198 43.9064 6.37727C44.9731 6.32759 45.7989 7.09762 45.8136 8.17069Z"
                    fill="#00A6CE" />
                </g>
                <defs>
                  <clipPath id="clip0_3408_689">
                    <rect width="88" height="127" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div>
              <div>多項健康風險分級</div>
              <div>
                同時檢測多種眼疾及全身疾病<br class="pcShow" />風險，提供全面的健康報告。
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="limiting">
        <div>服務限制</div>
        <div>
          <div>
            <div>
              <img src="https://statichk.cmermedical.com/vision/imgs/1a4396621113.png" alt="" />
            </div>
            <div>若瞳孔過小（小於3mm）或眼皮鬆弛，可能影響拍攝效果。</div>
          </div>
          <div>
            <div>
              <img src="https://statichk.cmermedical.com/vision/imgs/1a4396621113.png" alt="" />
            </div>
            <div>
              曾更換人工晶體、患有白內障、斜視或眼球震顫者，可能無法取得理想的眼底圖像。
            </div>
          </div>
        </div>
      </div>
      <div class="ai-step">
        <div>
          <span>1</span>
          <div>
            <img src="https://statichk.cmermedical.com/vision/imgs/5e4c95e59df4.png" alt="" />
          </div>
          <div>
            <span>使用全自動眼底相機</span>
            <span>為雙眼拍攝眼底照片。</span>
          </div>
        </div>
        <div>
          <span>2</span>
          <div>
            <img src="https://statichk.cmermedical.com/vision/imgs/dacaac1d5557.png" alt="" />
          </div>
          <div>
            <span>由人工智能系統</span>
            <span>進行自動風險分級。</span>
          </div>
        </div>
        <div>
          <span>3</span>
          <div>
            <img src="https://statichk.cmermedical.com/vision/imgs/cfabe0b85df2.png" alt="" />
          </div>
          <div>
            <span>掃描QR碼，</span>
            <span>即時取得詳細篩查報告。</span>
          </div>
        </div>
      </div>
      <div class="announcements">
        <PublicPageTitle :title="'注意事項'" />
        <div>
          <span>*此服務的眼疾篩查結果僅供參考，無法替代專業醫療診斷。如有異常，</span>
          <span>請務必諮詢專業的眼科醫生，以獲得準確的診斷和治療建議。</span>
        </div>
      </div>
    </div>


    <div class="promo-box">
    
      <span class="promo-box__corner promo-box__corner--top-left"></span>
      <span class="promo-box__corner promo-box__corner--top-right"></span>
      <span class="promo-box__corner promo-box__corner--bottom-left"></span>
      <span class="promo-box__corner promo-box__corner--bottom-right"></span>

     
     <div class="promo-box__content">
       <p class="promo-box__text">
        凡預約眼睛檢查服務，即可以$150升級加購AI人工智能眼底健康篩查（原價 $350）
      </p>
      <p class="promo-box__text promo-box__text--highlight">
        如成功驗配眼鏡，可獲全額豁免AI人工智能眼底健康篩查費用。
      </p>
     </div>


    </div>


    <PublicForm />
  </div>
</template>

<style lang="scss" scoped>
@media screen and (min-width: 768px) {
  .explain {
    margin-top: 85px;
    color: #60605f;
    text-align: center;
    font-family: "Noto Sans CJK TC";
    font-size: 21px;
    font-style: normal;
    font-weight: 500;
    line-height: 45px;

    /* 214.286% */
    &>div:nth-child(2) {
      margin-top: 30px;
    }
  }

  .assess {
    margin: 96px auto;
    max-width: 1355px;
    background: #feeee6;
    box-shadow: 0px 0px 7.5px 0px rgba(0, 0, 0, 0.25);
    box-sizing: border-box;
    padding: 65px 95px;

    &>div:nth-child(1) {
      display: flex;
      gap: 0 15px;
      justify-content: center;
      align-items: center;

      &>div:nth-child(1) {
        display: flex;
        flex-direction: column;

        &>span:nth-child(1) {
          color: #f26722;
          font-family: "Noto Sans HK";
          font-size: 22.5px;
          font-style: normal;
          font-weight: 700;
          line-height: 33.75px;
          /* 150% */
          letter-spacing: 1.125px;
        }

        &>span:nth-child(2) {
          color: #f26722;
          font-family: "Noto Sans HK";
          font-size: 33.75px;
          font-style: normal;
          font-weight: 700;
          line-height: 45px;
          /* 133.333% */
          letter-spacing: 1.688px;
          padding-left: 20px;
        }
      }

      &>div:nth-child(2) {
        color: #60605f;
        text-align: center;
        font-family: "Noto Sans CJK TC";
        font-size: 21px;
        font-style: normal;
        font-weight: 500;
        line-height: 45px;
        /* 214.286% */
      }
    }

    &>div:nth-child(2) {
      display: flex;
      justify-content: space-between;
      margin-top: 30px;

      &>div {
        &>div:nth-child(2) {
          margin-top: 30px;
          display: flex;
          flex-direction: column;
          align-items: center;
          color: #f26722;
          text-align: center;
          font-family: "Noto Sans HK";
          font-size: 50px;
          font-style: normal;
          font-weight: 500;
          line-height: 58px;
          /* 116% */
          letter-spacing: 2.5px;
        }
      }
    }
  }

  .advantage {
    margin: 96px auto;
    width: 1140px;

    &>div:nth-child(2) {
      margin-top: 30px;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 0 44px;

      &>div {
        border-radius: 20px;
        border: 2px solid var(--Brand-Color, #00a6ce);
        display: flex;
        flex-direction: column;
        align-items: center;
        box-sizing: border-box;
        padding: 40px 34px 30px;

        &>div:nth-child(1) {
          width: 130px;
          height: 130px;
          display: flex;
          justify-content: center;
          align-items: center;

          &>svg {
            width: 100%;
          }
        }

        &>div:nth-child(2) {
          &>div:nth-child(1) {
            color: var(--Brand-Color, #00a6ce);
            font-family: "Noto Sans HK";
            font-size: 21px;
            font-style: normal;
            font-weight: 500;
            line-height: 22.5px;
            /* 107.143% */
            letter-spacing: 1.05px;
            margin: 25px auto;
            text-align: center;
          }

          &>div:nth-child(2) {
            color: #60605f;
            text-align: center;
            font-family: "Noto Sans CJK TC";
            font-size: 21px;
            font-style: normal;
            font-weight: 500;
            line-height: 40px;
            /* 190.476% */
          }
        }
      }
    }
  }

  .limiting {
    margin: 96px auto;
    width: 1140px;
    box-sizing: border-box;
    padding: 48px 50px;
    background: #eafbff;
    border: 2px solid var(--Brand-Color, #00a6ce);
    border-radius: 20px;
    display: flex;
    align-items: center;

    &>div:nth-child(1) {
      color: #00a6ce;
      text-align: justify;
      font-family: "Noto Sans HK";
      font-size: 34px;
      font-style: normal;
      font-weight: 700;
      line-height: 45px;
      /* 132.353% */
      letter-spacing: 1.7px;
      padding-right: 35px;
    }

    &>div:nth-child(2) {
      display: flex;
      flex-direction: column;
      padding-left: 25px;
      border-left: 3px solid #00a6ce;

      &>div {
        display: flex;
        align-items: center;
        color: var(--Brand-Color, #00a6ce);
        font-family: "Noto Sans CJK TC";
        font-size: 21px;
        font-style: normal;
        font-weight: 500;
        line-height: 45px;

        /* 214.286% */
        &>div:nth-child(1) {
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
    }
  }

  .ai-step {
    margin: 96px auto;
    width: 1140px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    &>div {
      position: relative;
      border-radius: 9px;
      overflow: hidden;

      &>span:nth-child(1) {
        position: absolute;
        z-index: 5;
        top: 15px;
        left: 15px;
        color: #fff;
        text-align: center;
        text-shadow: 4px 4px 0px rgba(255, 255, 255, 0.25);
        font-family: "Noto Sans HK";
        font-size: 80px;
        font-style: normal;
        font-weight: 700;
        line-height: 1;
        /* 597.656% */
        letter-spacing: 4px;
      }

      &>div:nth-child(2) {
        border-radius: 9px;
        background: var(--Brand-Color, #00a6ce);
      }

      &>div:nth-child(3) {
        display: flex;
        flex-direction: column;
        color: #fff;
        font-family: "Noto Sans HK";
        font-size: 21px;
        font-style: normal;
        font-weight: 500;
        line-height: 31.5px;
        /* 150% */
        letter-spacing: 1.05px;
        position: absolute;
        bottom: 32px;
        left: 30px;
      }
    }
  }

  .announcements {
    background: #eafbff;
    border: 2px solid var(--Brand-Color, #00a6ce);
    border-radius: 20px;
    width: 940px;
    margin: 96px auto;
    box-sizing: border-box;
    padding: 40px 40px;

    &>div:nth-child(2) {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 30px;
      color: var(--Grey-Deep, #4d4d4d);
      text-align: center;
      font-family: "Noto Sans CJK TC";
      font-size: 21px;
      font-style: normal;
      font-weight: 500;
      line-height: 45px;
      /* 214.286% */
    }
  }



  .promo-box {
  position: relative;
  max-width: 1140px;;
  margin: 0px auto 96px auto;
  padding: 20px 18px;

  text-align: center;
  font-size: 16px;
  line-height: 1.6;
  background-color: #fff;
}



.promo-box__content{
  border: 3px solid #2BAAE2;
background: rgba(43, 170, 226, 0.04);
padding: 23px;
box-shadow: 0 4px 15px rgba(0, 204, 255, 0.35);
        // height: 158px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
                gap: 15px;

}

/* 文字 */
.promo-box__text {
  color: #3B5A7D;
text-align: center;

/* Txt_PC */
font-family: "Noto Sans CJK TC";
font-size: 21px;
font-style: normal;
font-weight: 500;
line-height: 45px; /* 214.286% */

}

.promo-box__text--highlight {
  color: var(--Orange-Bright, #F90);
text-align: center;
// -webkit-text-stroke-width: 3px;
-webkit-text-stroke-color: #FFF;
font-family: "Noto Sans HK";
font-size: 33.75px;
font-style: normal;
font-weight: 700;
line-height: 45px; /* 133.333% */
letter-spacing: 1.688px;
}

/* 四個角的裝飾線 */
.promo-box__corner {
  position: absolute;
 width: 39px;
height: 40px;
  border-color: #4aa3ff;
}

.promo-box__corner--top-left {
  top: -4px;
  left: -4px;
  border-top: 3px solid;
  border-left: 3px solid;
    border-color: #2BAAE2;
}

.promo-box__corner--top-right {
  top: -4px;
  right: -4px;
  border-top: 3px solid;
  border-right: 3px solid;
    border-color: #2BAAE2;
}

.promo-box__corner--bottom-left {
  bottom: -4px;
  left: -4px;
  border-bottom: 3px solid;
  border-left: 3px solid;
    border-color: #2BAAE2;
}

.promo-box__corner--bottom-right {
  bottom: -4px;
  right: -4px;
  border-bottom: 3px solid;
  border-right: 3px solid;
    border-color: #2BAAE2;
}


}

@media screen and (max-width: 767px) {
  .pcShow {
    display: none;
  }

  .ai-screening {
    box-sizing: border-box;
    padding: 0 30px;
  }

  .explain {
    margin-bottom: 42px;

    &>div:nth-child(2) {
      margin-top: 24px;
      color: #60605f;
      text-align: center;
      font-family: "Noto Sans CJK TC";
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: 24px;
      /* 171.429% */
    }
  }

  .assess {
    background: #feeee6;
    box-shadow: 0px 0px 7.5px 0px rgba(0, 0, 0, 0.25);
    box-sizing: border-box;
    padding: 25px 45px 55px;
    margin: 42px auto;

    &>div:nth-child(1) {
      &>div:nth-child(1) {
        display: flex;
        flex-direction: column;
        align-items: center;

        &>span:nth-child(1) {
          color: #f26722;
          font-family: "Noto Sans HK";
          font-size: 20px;
          font-style: normal;
          font-weight: 700;
          line-height: 33.75px;
          /* 168.75% */
          letter-spacing: 1px;
        }

        &>span:nth-child(2) {
          color: #f26722;
          font-family: "Noto Sans HK";
          font-size: 30px;
          font-style: normal;
          font-weight: 700;
          line-height: 45px;
          /* 150% */
          letter-spacing: 1.5px;
        }
      }

      &>div:nth-child(2) {
        margin-top: 10px;
        color: #60605f;
        font-family: "Noto Sans CJK TC";
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
      }
    }

    &>div:nth-child(2) {
      margin-top: 33px;

      &>div {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px 0;
        margin-bottom: 50px;

        &>div:nth-child(1) {
          width: 190px;
          height: 190px;

          &>img {
            width: 100%;
            height: 100%;
          }
        }

        &>div:nth-child(2) {
          color: #f26722;
          text-align: center;
          font-family: "Noto Sans HK";
          font-size: 37px;
          font-style: normal;
          font-weight: 500;
          line-height: 1;
          /* 60.811% */
          letter-spacing: 1.85px;
          display: flex;
          flex-direction: column;
        }
      }
    }
  }

  .advantage {
    margin: 42px auto;

    &>div:nth-child(2) {
      display: flex;
      flex-direction: column;
      gap: 24px 0;
      margin-top: 25px;

      &>div {
        border-radius: 20px;
        border: 2px solid var(--Brand-Color, #00a6ce);
        display: flex;
        gap: 0 20px;
        padding: 20px 24px;
        box-sizing: border-box;

        &>div:nth-child(1) {
          width: 65px;
          height: 65px;
          display: flex;
          align-items: center;
          justify-content: center;

          &>img,
          &>svg {
            width: 100%;
            height: 100%;
          }
        }

        &>div:nth-child(2) {
          &>div:nth-child(1) {
            color: var(--Brand-Color, #00a6ce);
            font-family: "Noto Sans HK";
            font-size: 18px;
            font-style: normal;
            font-weight: 500;
            line-height: 22.5px;
            /* 125% */
            letter-spacing: 0.9px;
            margin-bottom: 7px;
            text-align: center;
          }

          &>div:nth-child(2) {
            color: #60605f;
            text-align: center;
            font-family: "Noto Sans CJK TC";
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
          }
        }
      }
    }
  }

  .limiting {
    background: #eafbff;
    border-radius: 8px;
    box-shadow: 0px 0px 7.5px rgba(0, 0, 0, 0.25);
    box-sizing: border-box;
    padding: 18px 14px 18px 20px;
    margin: 42px auto;

    &>div:nth-child(1) {
      color: #00a6ce;
      text-align: justify;
      font-family: "Noto Sans HK";
      font-size: 24px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      letter-spacing: 1.2px;
      padding-bottom: 2px;
      border-bottom: 3px solid #00a6ce;
      width: fit-content;
      margin-bottom: 20px;
    }

    &>div:nth-child(2) {
      display: flex;
      flex-direction: column;
      gap: 15px 0;

      &>div {
        display: flex;
        align-items: center;
        gap: 0 7px;
        color: var(--Brand-Color, #00a6ce);
        font-family: "Noto Sans CJK TC";
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;

        &>div:nth-child(1) {
          width: 28px;
          height: 28px;
          display: flex;
          align-items: center;
          justify-content: center;
          min-width: 28px;

          &>img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }

  .ai-step {
    display: flex;
    flex-direction: column;
    gap: 22px 0;
    margin: 42px auto;

    &>div {
      position: relative;
      border-radius: 9px;
      overflow: hidden;

      &>div:nth-child(2) {
        border-radius: 9px;
        overflow: hidden;
        background: var(--Brand-Color, #00a6ce);
        height: 135px;

        &>img {
          width: 50%;
          height: 200px;
          object-fit: cover;
        }
      }

      &>span:nth-child(1) {
        position: absolute;
        top: 10px;
        left: 10px;
        color: #fff;
        text-align: center;
        text-shadow: 1.962px 1.962px 0px rgba(255, 255, 255, 0.25);
        font-family: "Noto Sans HK";
        font-size: 39.248px;
        font-style: normal;
        font-weight: 700;
        line-height: 100%;
        /* 597.656% */
        letter-spacing: 1.962px;
      }

      &>div:nth-child(3) {
        position: absolute;
        left: calc(50% + 12px);
        top: 50%;
        transform: translateY(-50%);
        display: flex;
        flex-direction: column;
        color: #fff;
        font-family: "Noto Sans HK";
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: 24px;
        /* 171.429% */
        letter-spacing: 0.7px;
      }
    }
  }

  .announcements {
    margin: 42px auto;
    box-sizing: border-box;
    padding: 20px;
    background: #eafbff;
    border-radius: 8px;
    box-shadow: 0px 0px 7.5px rgba(0, 0, 0, 0.25);

    &>div:nth-child(2) {
      margin-top: 25px;
      display: flex;
      flex-direction: column;
      color: var(--Grey-Deep, #4d4d4d);
      text-align: center;
      font-family: "Noto Sans CJK TC";
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      gap: 2px 0;
    }
  }

  .promo-box {
  position: relative;
  max-width: 1140px;;
  margin: 40px 30px;
  padding: 20px 18px;

  text-align: center;
  font-size: 16px;
  line-height: 1.6;
  background-color: #fff;
}



.promo-box__content{
  border: 3px solid #2BAAE2;
background: rgba(43, 170, 226, 0.04);
padding: 23px 8px;
box-shadow: 0 4px 15px rgba(0, 204, 255, 0.35);
        // height: 158px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
                gap: 15px;

}

/* 文字 */
.promo-box__text {
  color: #3B5A7D;
text-align: center;

/* Txt_PC */
font-family: "Noto Sans CJK TC";
font-size: 21px;
font-style: normal;
font-weight: 500;
line-height: 45px; /* 214.286% */

}

.promo-box__text--highlight {
  color: var(--Orange-Bright, #F90);
text-align: center;

-webkit-text-stroke-color: #FFF;
font-family: "Noto Sans HK";
font-size: 24px;
font-style: normal;
font-weight: 700;
line-height: 45px; /* 187.5% */
letter-spacing: 1.2px;
}

/* 四個角的裝飾線 */
.promo-box__corner {
  position: absolute;
 width: 39px;
height: 40px;
  border-color: #4aa3ff;
}

.promo-box__corner--top-left {
  top: -4px;
  left: -4px;
  border-top: 3px solid;
  border-left: 3px solid;
    border-color: #2BAAE2;
}

.promo-box__corner--top-right {
  top: -4px;
  right: -4px;
  border-top: 3px solid;
  border-right: 3px solid;
    border-color: #2BAAE2;
}

.promo-box__corner--bottom-left {
  bottom: -4px;
  left: -4px;
  border-bottom: 3px solid;
  border-left: 3px solid;
    border-color: #2BAAE2;
}

.promo-box__corner--bottom-right {
  bottom: -4px;
  right: -4px;
  border-bottom: 3px solid;
  border-right: 3px solid;
    border-color: #2BAAE2;
}
}
</style>