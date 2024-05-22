<script lang="ts" setup>
useHead(() => ({
  title: "最新資訊 - 希瑪眼科視光中心",
}));
const bannerImg = {
  pc: 'https://static.cmereye.com/imgs/2024/04/5ae163616b5be08e.png',
  mobile: 'https://static.cmereye.com/imgs/2024/04/a946bc28a9b89d42.png'
}
</script>

<template>
  <div class="video-information">
    <PublicBanner  :banner="bannerImg">
      <!-- 插槽 -->
      <template #title>
        <div class="profile-title">
          <span>最新資訊</span>
        </div>
      </template>
    </PublicBanner>
    <PublicNavbar :link="'/center-profile'" :name="'最新資訊'" />
    <div class="video-information-box">
      <LatestNews />
      <PublicForm />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@media screen and (min-width: 768px) {
  .profile-title {
    // background: url("https://static.cmereye.com/imgs/2024/04/5ae163616b5be08e.png")
    //   no-repeat;
    // background-size: 100% 100%;
    // width: 100%;
    // min-height: 800px;
    // position: relative;
    span {
      position: absolute;
      right: 220px;
      bottom: 350px;
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
  .video-information-box {
    max-width: 1300px;
    margin: 48px auto 128px auto;
  }
}
@media screen and (max-width: 767px) {
  .profile-title {
    // background: url("https://static.cmereye.com/imgs/2024/04/a946bc28a9b89d42.png")
    //   no-repeat;
    // background-size: 100% 100%;
    // width: 100%;
    // min-height: 390px;
    // position: relative;
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
  .video-information-box{
    padding: 0 24px;
  }
}
</style>