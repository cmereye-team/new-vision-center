<script lang="ts" setup>
const chooseNumber = ref();
const chooseType = (type: number) => {
  console.log(type);
  // switch (Number(type)) {
  // case 0:
  //   allData.value = true;
  //   synthesis.value = true;
  //   myopia.value = true;
  //   contactLens.value = true;
  //   glaucoma.value = true;
  //   break;
  // case 1:
  //   allData.value = false;
  //   synthesis.value = true;
  //   myopia.value = false;
  //   contactLens.value = false;
  //   glaucoma.value = false;
  //   break;
  // case 2:
  //   allData.value = false;
  //   synthesis.value = false;
  //   myopia.value = true;
  //   contactLens.value = false;
  //   glaucoma.value = false;
  //   break;
  // case 3:
  //   allData.value = false;
  //   synthesis.value = false;
  //   myopia.value = false;
  //   contactLens.value = true;
  //   glaucoma.value = false;
  //   break;
  // case 4:
  //   allData.value = false;
  //   synthesis.value = false;
  //   myopia.value = false;
  //   contactLens.value = false;
  //   glaucoma.value = true;
  //   break;
  // default:
  //   break;
  // }
};

let arr = ref([]);
const newsList: any = ref([
  {
    id: null,
    title: "",
    type: "",
    source: "",
    tags: "",
    img: "",
    ext_hashTag: "",
    ext_addTime: "",
  },
]);

let data = ref([]);

const fetchData = async () => {
  await fetch("https://content.cmervision.com/api.php/list/14")
    .then((response) => response.json())
    .then((res) => {
      // 清空数组
      newsList.value= new Array();
      arr.value = res.data;
      arr.value.map((item: any) => {
        newsList.value.push({
          id: item.id,
          title: item.title,
          type: item.scode,
          source: item.source,
          tags: item.tags,
          img: item.ico,
          ext_hashTag: JSON.parse(item.ext_hashTag),
          ext_addTime: item.ext_addTime.split(" ")[0],
        });
      });
      data.value = newsList.value;
      console.log(newsList.value);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

onMounted(() => {
  fetchData();
});
const newsListddd= ref([
  {
    id: 1,
    img: "https://static.cmereye.com/imgs/2024/04/e2bac320179f4c43.png",
    tag: "新聞資訊",
    source: "香港01",
    releaseTime: "｜10-11-2021",
    title:
      "希瑪眼科收購眼科視光中心60%股權，目標公司連同其分行主要在香港從事經營眼科視光中心",
    hashTag: [
      {
        name: "收 購",
        link: "",
      },
      {
        name: "眼科視光中心",
        link: "",
      },
      {
        name: "希瑪眼科",
        link: "",
      },
    ],
  },
  {
    id: 2,
    img: "https://static.cmereye.com/imgs/2024/04/2f5acfbe99367f1c.png",
    tag: "新聞資訊",
    source: "香港01",
    releaseTime: "｜13-12-2021",
    title:
      "理大與希瑪眼科合作於粵港澳大灣區培育香港年輕視光專才攜手推動香港和內地的眼科視光學發展",
    hashTag: [
      {
        name: "人 才",
        link: "",
      },
      {
        name: "粵港澳大灣區",
        link: "",
      },
      {
        name: "希瑪眼科",
        link: "",
      },
    ],
  },
  {
    id: 3,
    img: "https://static.cmereye.com/imgs/2024/04/71080a0d646d164d.png",
    tag: "最新文章推薦",
    source: "香港01",
    releaseTime: "｜27-9-2023",
    title: "童星梓賢梓樂戴OK鏡成功控制近視 視光師解構4大兒童近視控制方案",
    hashTag: [
      {
        name: "OK鏡",
        link: "",
      },
      {
        name: "近視控制方案",
        link: "",
      },
      {
        name: "視力問題",
        link: "",
      },
    ],
  },
  {
    id: 4,
    img: "https://static.cmereye.com/imgs/2024/04/2d3cd31678781953.png",
    tag: "新聞資訊",
    source: "Bowtie",
    releaseTime: "｜5-7-2023",
    title: "阿托品眼藥水和OK鏡是甚麼？適合甚麼人士？即睇配戴 重點！",
    hashTag: [
      {
        name: "OK鏡",
        link: "",
      },
      {
        name: "阿托品眼藥水",
        link: "",
      },
      {
        name: "配戴重點",
        link: "",
      },
    ],
  },
  {
    id: 5,
    img: "https://static.cmereye.com/imgs/2024/04/edf5a1f5dfb06aa9.png",
    tag: "最新文章推薦",
    source: "Urban life",
    releaseTime: "｜1-6-2023",
    title:
      "戴隱形眼鏡瞓覺就可以控制近視同睇嘢清返？Sean黃梓 樂Carson黃梓賢帶你直擊配鏡過程！",
    hashTag: [
      {
        name: "隱形眼鏡",
        link: "",
      },
      {
        name: "配鏡過程",
        link: "",
      },
      {
        name: "控制近視",
        link: "",
      },
    ],
  },
  {
    id: 6,
    img: "https://static.cmereye.com/imgs/2024/04/d9c8da0ca91532cf.png",
    tag: "最新文章推薦",
    source: "Bowtie",
    releaseTime: "｜5-7-2023",
    title: "復課｜疫情留家易加劇近視 視光師3招減慢近視加深 附護 眼食譜",
    hashTag: [
      {
        name: "疫情",
        link: "",
      },
      {
        name: "減慢近視加深",
        link: "",
      },
      {
        name: "護眼食譜",
        link: "",
      },
    ],
  },
]);
</script>

<template>
  <div class="latest-news">
    <div class="latest-news-header">
      <div>最新資訊</div>
      <div class="hide-on-mobile">
        <select
          v-model="chooseNumber"
          @change="chooseType(chooseNumber)"
          class="select-type"
        >
          <option :value="0"></option>
        </select>
      </div>
    </div>
    <div>
      <div v-for="item in newsList" :key="item.id" class="news-item">
        <div><img :src="`https://content.cmervision.com/${item.img}`" :alt="item.title" /></div>
        <div>
          <div>
            <div :class="item.type == '12' ? 'bgBlue' : 'bgGreen'">
              {{ item.tags }}
            </div>
            <div>
              <span>{{ item.source }}</span
              ><span> | {{ item.ext_addTime }}</span>
            </div>
          </div>
          <!-- <nuxt-link>{{ item.title }}</nuxt-link> -->
          <nuxt-link :to="`/news/${item.id}`">{{ item.title }}</nuxt-link>
          <div>
            <a
              :href="element.link == '#' ? '#' : element.link"
              v-for="(element) in item.ext_hashTag"
              :key="element.id"
            >
              {{ element.title }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
a {
  text-decoration: none;
}
@media screen and (min-width: 768px) {
  .latest-news {
    margin-bottom: 90px;
  }
  .news-item {
    margin-bottom: 58px;
    display: flex;

    & > div:nth-child(1) {
      flex: 2.5;
    }
    & > div:nth-child(2) {
      flex: 7.5;
      & > div:nth-child(1) {
        display: flex;
        align-items: flex-end;
        margin-bottom: 20px;
        & > div:nth-child(1) {
          max-width: 160px;
          width: 100%;
          min-height: 45px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;

          font-family: "Noto Sans HK";
          font-size: 20px;
          font-style: normal;
          font-weight: 500;
          line-height: 160%; /* 32px */
          letter-spacing: 2px;
          margin-right: 16px;
        }
        & > div:nth-child(2) {
          color: #00a6ce;
          font-family: "Inter";
          font-size: 26px;
          font-style: normal;
          font-weight: 500;
          line-height: normal;
        }
      }
      & > a:nth-child(2) {
        margin-bottom: 40px;
        display: block;
        color: #60605f;
        font-family: "Inter";
        font-size: 34px;
        font-style: normal;
        font-weight: 600;
        line-height: 60px;
      }
      & > div {
        a {
          margin-right: 20px;
          padding: 16px 28px;
          color: #60605f;
          font-family: "Inter";
          font-size: 24px;
          font-style: normal;
          font-weight: 600;
          line-height: normal;
          border-radius: 50px;
          border: 1px solid #afafad;
        }
      }
    }
  }
  .bgBlue {
    background: #00a6ce;
  }
  .bgGreen {
    background-color: #59ba68;
  }
  .latest-news-header {
    margin-bottom: 60px;
    display: flex;
    justify-content: space-between;
    & > div:nth-child(1) {
      color: #00a6ce;
      font-family: "Inter";
      font-size: 50px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
    }
  }
  .select-type {
    appearance: none;
    width: 314px;
    background: url("https://static.cmereye.com/imgs/2024/04/e496d5c11cab80cf.png")
      no-repeat;
    height: 53px;
    background-position: right;
    border-radius: 18px;
    border: 1px solid #d9d9d9;
    padding: 11px 18px;
    color: var(--Brand-Color, #00a6ce);
    font-family: "Inter";
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 1.6px;
    text-transform: uppercase;
  }
  .select-type option {
    margin-top: 10px;
    padding: 20px;
    line-height: 1.8;
    font-size: large;
  }

  .select-type:focus-visible {
    outline: none;
  }
}
@media screen and (max-width: 768px) {
  .hide-on-mobile {
    display: none;
  }
  .latest-news {
    margin-bottom: 40px;
  }
  .news-item {
    margin-bottom: 18px;
    display: flex;

    & > div:nth-child(1) {
      flex: 3.5;
      max-width: 120px;
      & > img {
        width: 100%;
      }
    }
    & > div:nth-child(2) {
      flex: 6.5;
      margin-left: 10px;
      & > div:nth-child(1) {
        display: flex;
        align-items: flex-end;
        margin-bottom: 8px;
        & > div:nth-child(1) {
          display: none;
        }
        & > div:nth-child(2) {
          color: #00a6ce;
          font-family: "Inter";
          font-size: 12px;
          font-style: normal;
          font-weight: 500;
          line-height: normal;
        }
      }
      & > a:nth-child(2) {
        margin-bottom: 15px;
        display: block;
        color: #60605f;
        font-family: "Inter";
        font-size: 14px;
        font-style: normal;
        font-weight: 600;
        line-height: 24px;

        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      & > div {
        a {
          margin-right: 8px;
          padding: 6px 10px;
          color: #60605f;
          font-family: "Inter";
          font-size: 10px;
          font-style: normal;
          font-weight: 500;
          line-height: normal;
          border-radius: 50px;
          border: 1px solid #afafad;
        }
      }
    }
  }
  .bgBlue {
    background: #00a6ce;
  }
  .bgGreen {
    background-color: #59ba68;
  }
  .latest-news-header {
    margin-bottom: 30px;
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    & > div:nth-child(1) {
      color: #00a6ce;

      font-family: "Inter";
      font-size: 24px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
    }
  }
  .select-type {
    appearance: none;
    width: 314px;
    background: url("https://static.cmereye.com/imgs/2024/04/e496d5c11cab80cf.png")
      no-repeat;
    height: 53px;
    background-position: right;
    border-radius: 18px;
    border: 1px solid #d9d9d9;
    padding: 11px 18px;
    color: var(--Brand-Color, #00a6ce);
    font-family: "Inter";
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 1.6px;
    text-transform: uppercase;
  }
  .select-type option {
    margin-top: 10px;
    padding: 20px;
    line-height: 1.8;
    font-size: large;
  }

  .select-type:focus-visible {
    outline: none;
  }
}
</style>