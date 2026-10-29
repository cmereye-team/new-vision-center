<!--
 * @Author: 谭洁莹
 * @Date: 2026-10-29 14:34:28
 * @LastEditTime: 2026-10-29 16:48:53
 * @FilePath: /components/banner/Main.vue
 * @Description: 轮播图分流
-->
<script lang="ts" setup>
import type { ApiResponse, SlideItem } from "@/types/api";
const route = useRoute();
const bannerImg = ref([] as SlideItem[]);
const props = defineProps<{
  data?: SlideItem;
  gid?: string | number;
  isExpandable?: boolean; //展开式轮播图：首页、尊享优惠
}>();
const isSwiper = ref(false);
const bannerPic = ref<SlideItem | null>(props.data || null);
const getBanner = async () => {
  try {
    const res = await $api<ApiResponse<SlideItem[]>>("/api/v1/slides", {
      params: { pathname: route.path },
    });
    // console.log(`正在获取轮播图,path=${route.path},res=`, res);
    switch (res.data.length) {
      case 1:
        bannerPic.value = res.data[0];
        break;
      case 0:
        // if (props.data) bannerPic.value = props.data;
        break;
      default:
        if (Array.isArray(res.data)) bannerImg.value = res.data.map((item) => ({ ...item }));
        isSwiper.value = true;
    }
  } catch (error) {
    console.error("获取轮播图失败:", error);
  }
};
const getLinkComponent = (link?: string | null) => {
  if (!link || link.trim() === "") {
    return "div"; // 没有链接，用普通的 div
  }
  if (link.startsWith("http://") || link.startsWith("https://") || link.startsWith("//")) {
    return "a"; // 外部绝对路径链接，用原生 a 标签
  }
  return resolveComponent("NuxtLink"); // 内部站内路由，用 NuxtLink
};
const getLinkAttrs = (link?: string | null) => {
  if (!link || link.trim() === "") {
    return {}; // 无链接不需要跳转属性
  }

  if (link.startsWith("http://") || link.startsWith("https://") || link.startsWith("//")) {
    return {
      href: link,
      target: "_blank",
      rel: "noopener noreferrer", // 安全优化
    };
  }

  // 针对 NuxtLink 的属性
  return {
    to: link,
  };
};
onMounted(() => {
  getBanner();
});
</script>
<template>
  <div class="banner">
    <template v-if="isSwiper">
      <BannerHomeBanner v-if="isExpandable" :data="bannerImg" ref="homeBanner" key="home_banner" />
      <BannerPageBanner v-else :data="bannerImg" ref="pageBanner" key="page_banner" class="banner-pic" />
    </template>
    <template v-else-if="bannerPic">
      <component
        :is="getLinkComponent(bannerPic.link)"
        v-bind="getLinkAttrs(bannerPic.link)"
        class="banner-pic"
      >
        <picture>
          <source media="(min-width: 768px)" :srcset="bannerPic.pic" />
          <img :src="bannerPic.pic_mobile" :alt="bannerPic.title" :title="bannerPic.subtitle" />
        </picture>
      </component>
    </template>
  </div>
</template>
<style lang="scss" scoped>
.banner {
  .banner-pic {
    max-width: 1320px;
    margin: 64px auto 0;
  }
}
@media screen and (min-width: 768px) {
  .banner {
    .banner-pic {
      margin-top: 7.083vw;
    }
  }
}
@media screen and (min-width: 1621px) {
  .banner {
    .banner-pic {
      margin-top: 132px;
    }
  }
}
</style>
