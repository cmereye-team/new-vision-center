<script lang="ts" setup>
useHead(() => ({
  title: "XXXX - 希瑪眼科視光中心",
}));
const bannerImg = {
  pc: "https://static.cmereye.com/imgs/2024/04/5ae163616b5be08e.png",
  mobile: "https://static.cmereye.com/imgs/2024/04/a946bc28a9b89d42.png",
};
</script>

<template>
  <div class="video-information">
    <PublicBanner :banner="bannerImg">
      <!-- 插槽 -->
      <template #title>
        <div class="profile-title">
          <span>XXXXX</span>
        </div>
      </template>
    </PublicBanner>
    <PublicNavbar
      :name="'有三级菜单的二级'"
      :isInsidePage="true"
      :insidePageTitle="'当前页面title'"
    />
    <div class="xxxx-box"></div>
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
}
</style>