<script lang="ts" setup>
const route = useRoute();
const _id = route.params.id as string;

useHead(() => ({
  title: "最新資訊 - 希瑪眼科視光中心",
}));

const fetchData = async () => {
  await fetch(`https://content.cmervision.com/api.php/content/${_id}`)
    .then((response) => response.json())
    .then((res) => {
      const newObject = Object.assign({}, res.data);
      insidePageTitle.value = newObject.title;
      content.value = newObject.content;
      source.value = newObject.source;
      linkPage.value = newObject.ext_linkPage;
      addTime.value = newObject.ext_addTime;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

onMounted(() => {
  fetchData();
});

const insidePageTitle = ref("最新資訊");
const content = ref("");
const source = ref("");
const linkPage = ref("");
const addTime = ref("");
</script>

<template>
  <div class="news">
    <PublicBanner>
      <!-- 插槽 -->
      <template #title>
        <div class="news-title">
          <span>最新資訊</span>
        </div>
      </template>
    </PublicBanner>
    <PublicNavbar
      :link="'/latest-news'"
      :name="'最新資訊'"
      :isInsidePage="true"
      :insidePageTitle="insidePageTitle"
    />
    <div class="news-box">
      <div class="title"></div>
      <InsidePage :id="_id" :content="content"/>
      <div class="news-info">
        <p>
          <span>文章來源︰</span><span>{{ source }}</span>
        </p>
        <p>
          <span>原文鏈接︰</span
          ><a :href="linkPage" style="border-bottom: 1px solid; cursor: pointer">{{
            linkPage.toUpperCase()
          }}</a>
        </p>
        <p>
          <span>更新時間︰</span><span>{{ addTime.split(" ")[0] }}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
a {
  text-decoration: none;
}
@media screen and (min-width: 768px) {
  .news-title {
    background: url("https://static.cmereye.com/imgs/2024/04/d1372c5de907c9e3.png")
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
  .news-box {
    max-width: 1300px;
    margin: 48px auto 128px auto;
  }
  .news-info {
    margin-top: 50px;
    margin-bottom: 90px;
    border-radius: 20px;
    margin-left: 100px;
    margin-right: 100px;
    border: 1px solid var(--Brand-Color, #00a6ce);
    padding: 26px 16px 26px 50px;
    color: #60605f;
    font-family: "Inter";
    font-size: 20px;
    font-style: normal;
    font-weight: 300;
    line-height: 40px; /* 200% */
    text-transform: uppercase;
    &>p {
      overflow: hidden;
      width: 100%;
      text-wrap: nowrap;
      a {
        color: var(--Brand-Color, #60605f);
      }
    }
  }
}
@media screen and (max-width: 767px) {
  .news-title {
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
  .news-box {
    padding: 0 24px;
  }
}
</style>