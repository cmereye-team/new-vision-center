<script lang="ts" setup>
useHead(() => ({
  title: "聯絡我們 - 希瑪眼科視光中心",
}));
const bannerImg = {
  pc: "https://static.cmereye.com/imgs/2024/04/5ae163616b5be08e.png",
  mobile: "https://static.cmereye.com/imgs/2024/04/7f4b5bcf029a0f4c.png",
};
</script>

<template>
  <div class="contact-us">
    <PublicBanner :banner="bannerImg">
      <!-- 插槽 -->
      <template #title>
        <div class="profile-title">
          <span>聯絡我們</span>
        </div>
      </template>
    </PublicBanner>
    <PublicNavbar :link="'/center-profile'" :name="'聯絡我們'" />
    <div class="contact-us-content">
      <ContactUsMapList />
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
      position: relative;
      right: -180%;
      color: #fff;
      text-align: center;
      font-family: "Inter";
      font-size: 60px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      letter-spacing: 12px;
    }
  }
  .contact-us-content {
    max-width: 960px;
    margin: 0 auto;
  }
}
@media screen and (max-width: 767px) {
  .contact-us-content {
    padding: 0 24px;
  }
  .profile-title {
    // background: url("https://static.cmereye.com/imgs/2024/04/7f4b5bcf029a0f4c.png")
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
      color: #fff;
      text-align: center;
      font-family: "Inter";
      font-size: 28px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      letter-spacing: 5.6px;
    }
  }
}
</style>