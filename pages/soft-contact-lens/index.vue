<script lang="ts" setup>
useHead(() => ({
  title: "軟性隱形眼鏡 - 希瑪眼科視光中心",
}));
const bannerImg = {
  pc: "https://static.cmereye.com/imgs/2024/05/0820bdc6f6ea1c8f.png",
  mobile: "https://static.cmereye.com/imgs/2024/05/a6ebf7f784038fed.png",
};
</script>

<template>
  <div class="soft-contact-lens">
    <PublicBanner :banner="bannerImg">
      <!-- 插槽 -->
      <template #title>
        <div class="profile-title"></div>
      </template>
    </PublicBanner>
    <PublicNavbar
      :name="'成人視力服務'"
      :isInsidePage="true"
      :insidePageTitle="'軟性隱形眼鏡'"
    />
    <div class="soft-contact">

    </div>
  </div>
</template>

<style lang="scss" scoped>
@media screen and (min-width: 768px) {
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
}
@media screen and (max-width: 767px) {
  .profile-title {
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
}
</style>