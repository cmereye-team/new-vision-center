<script lang="ts" setup>
useHead(() => ({
  title: "近視防控策略 - 希瑪眼科視光中心",
}));
</script>

<template>
  <div class="myopia-control">
    <PublicBanner>
      <!-- 插槽 -->
      <template #title>
        <div class="profile-title">
          <span>近視防控策略</span>
        </div>
      </template>
    </PublicBanner>
    <PublicNavbar :link="'/center-profile'" :name="'近視防控策略'" />
    <div class="myopia-control-box">
      
    </div>
  </div>
</template>

<style lang="scss" scoped>
@media screen and (min-width: 768px) {
  .profile-title {
    background: url("https://static.cmereye.com/imgs/2024/04/5ae163616b5be08e.png")
      no-repeat;
    background-size: 100% 100%;
    width: 100%;
    min-height: 800px;
    position: relative;
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
  .myopia-control-box {
    max-width: 1300px;
    margin: 48px auto 128px auto;
  }
}
@media screen and (max-width: 767px) {
  .profile-title {
    background: url("https://static.cmereye.com/imgs/2024/04/a946bc28a9b89d42.png")
      no-repeat;
    background-size: 100% 100%;
    width: 100%;
    min-height: 390px;
    position: relative;
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
  .myopia-control-box {
    padding: 0 24px;
  }
}
</style>