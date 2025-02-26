<script lang="ts" setup>
const chooseNumber = ref();
const chooseType = (id: number) => {
  if (id == 0 || id == null) {
    fetchData();
  }
  if (id) {
    newsList.value = data.value;
  }
  // 数组去重
  newsList.value = newsList.value.filter((item: any) => {
    if (item.id == id) {
      return item;
    }
  });
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
const newsListA: any = ref([
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
      newsList.value = new Array();
      newsListA.value = new Array();
      arr.value = res.data;
      arr.value.map((item: any) => {
        console.log(item, "arr");
        newsListA.value.push({
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
      // 对数据 通过ext_addTime 日期 降序
      newsList.value = newsListA.value.sort(function (a: any, b: any) {
        return b.ext_addTime.localeCompare(a.ext_addTime);
      });
      loading.value = false;
      data.value = newsList.value;
      hashTagList(newsList.value);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

interface Options {
  value: { label: string; value: string }[];
}

const options = ref<Options>({ value: [] });
const hashTagList = (list: any) => {
  for (let i = 0; i < list.length; i++) {
    for (let j = 0; j < list[i].ext_hashTag.length; j++) {
      options.value.value.push({
        label: list[i].ext_hashTag[j].title,
        value: list[i].id,
      });
    }
  }
};

onMounted(() => {
  fetchData();
});
const newsListddd = ref([
  {
    id: 1,
    img: "https://statichk.cmermedical.com/vision/imgs/e2bac320179f4c43.png",
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
    img: "https://statichk.cmermedical.com/vision/imgs/2f5acfbe99367f1c.png",
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
    img: "https://statichk.cmermedical.com/vision/imgs/71080a0d646d164d.png",
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
    img: "https://statichk.cmermedical.com/vision/imgs/2d3cd31678781953.png",
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
    img: "https://statichk.cmermedical.com/vision/imgs/edf5a1f5dfb06aa9.png",
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
    img: "https://statichk.cmermedical.com/vision/imgs/d9c8da0ca91532cf.png",
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
const loading = ref(true);
</script>

<template>
  <div class="latest-news">
    <div class="latest-news-header">
      <div>最新資訊</div>
      <div>
        <!-- <select
          v-model="chooseNumber"
          @change="chooseType(chooseNumber)"
          class="select-type"
        >
          <option :value="0"></option>
        </select> -->
        <client-only>
          <el-select
            v-model="chooseNumber"
            @change="chooseType"
            filterable
            clearable
            placeholder="請選擇"
            style="width: 46.15vw;max-width: 300px;"
          >
            <el-option
              v-for="item in options.value"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </client-only>
      </div>
    </div>
    <div v-loading="loading" class="latest-news-box-grid">
      <div v-for="item in newsList" :key="item.id" class="news-item">
        <div>
          <img
            :src="`https://content.cmervision.com/${item.img}`"
            :alt="item.title"
          />
        </div>
        <div>
          <div>
            <a
              :href="element.link == '#' ? '#' : element.link"
              v-for="element in item.ext_hashTag"
              :key="element.id"
            >
              #{{ element.title }}
            </a>
          </div>
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
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.example-showcase .el-loading-mask {
  z-index: 9;
}
a {
  text-decoration: none;
}
:deep(.el-select__wrapper) {
  cursor: pointer;
  border-radius: 12.422px;
  border: 1.242px solid var(--Grey-Light, #d9d9d9);
}
:deep(.el-select__wrapper::before) {
  content: "";
  background: url("https://statichk.cmermedical.com/vision/imgs/264b7889aa0e7395.png")
    no-repeat;
  background-size: 100%;
  width: 22px;
  height: 22px;
}

@media screen and (min-width: 768px) {
  .latest-news {
    margin-bottom: 90px;
  }
  .news-item {
    margin-bottom: 43px;
    display: flex;
    flex-direction: column;
    gap: 0 28px;
    max-width: 289px;
    position: relative;
    & > div:nth-child(1) {
      max-width: 100%;
      height: 289px;
      border-radius: 11.25px;
      overflow: hidden;
      & > img {
        height: 100%;
        width: 100%;
        object-fit: cover;
      }
    }
    & > div:nth-child(2) {
      & > div:nth-child(2) {
        display: flex;
        align-items: center;
        margin-bottom: 10px;
        margin-top: 15px;
        & > div:nth-child(1) {
          max-width: 120px;
          width: 100%;
          min-height: 35px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          font-family: "Noto Sans HK";
          font-size: 15px;
          font-style: normal;
          font-weight: 500;
          line-height: 160%; /* 24px */
          letter-spacing: 1.5px;
          margin-right: 16px;
          position: absolute;
          top: 5px;
          left: 5px;
        }
        & > div:nth-child(2) {
          color: #00a6ce;
          font-family: "Noto Sans HK";
          font-size: 19.5px;
          font-style: normal;
          font-weight: 500;
          line-height: normal;
        }
      }
      & > a:nth-child(3) {
        color: #60605f;
        text-align: justify;
        font-family: Inter;
        font-size: 24px;
        font-style: normal;
        font-weight: 500;
        line-height: 36px; /* 150% */
        display: block;
      }
      & > div:nth-child(1) {
        display: flex;
        gap: 0 6px;
        a {
          border-radius: 71.237px;
          background: #00a6ce;
          color: #fff;
          font-family: "Noto Sans HK";
          font-size: clamp(8.823px, 0.6675vw, 12px);
          font-style: normal;
          font-weight: 500;
          line-height: normal;
          letter-spacing: 1.282px;
          padding: 5.5px 10px;
          display: flex;
          align-items: center;
        }
        margin-top: 20px;
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
      font-family: Inter;
      font-size: 37.5px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
    }
  }
  .latest-news-box-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 66px 66px;
  }
  .select-type {
    appearance: none;
    width: 314px;
    background: url("https://statichk.cmermedical.com/vision/imgs/e496d5c11cab80cf.png")
      no-repeat;
    height: 53px;
    background-position: right;
    border-radius: 18px;
    border: 1px solid #d9d9d9;
    padding: 11px 18px;
    color: var(--Brand-Color, #00a6ce);
    font-family: "Noto Sans HK";
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
  .latest-news {
    margin-bottom: 10.256vw;
  }
  .latest-news-box-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 12.82vw 5.38vw;
  }
  .news-item {
    display: flex;
    flex-direction: column;
    max-width: 40vw;
    & > div:nth-child(1) {
      max-width: 40vw;
      width: 40vw;
      height: 40vw;
      border-radius: 0.165vw;
      overflow: hidden;
      & > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    & > div:nth-child(2) {
      & > div:nth-child(2) {
        display: flex;
        align-items: flex-end;
        margin-top: 2.05vw;
        & > div:nth-child(1) {
          display: none;
        }
        & > div:nth-child(2) {
          color: #00a6ce;
          font-family: "Noto Sans HK";
          font-size: 3.07vw;
          font-style: normal;
          font-weight: 500;
          line-height: normal;
        }
      }
      & > a:nth-child(3) {
        display: block;
        color: #60605f;
        font-family: "Noto Sans HK";
        font-size: 3.58vw;
        font-style: normal;
        font-weight: 600;
        line-height: 6.15vw;
      }
      & > div:nth-child(1) {
        display: flex;
        gap: 0.5vw 1.53vw;
        flex-wrap: wrap;
        margin-top: 5.128vw;
        a {
          color: #fff;
          font-family: "Noto Sans HK";
          font-size: clamp(6px, 2.42vw, 11px);
          font-style: normal;
          font-weight: 500;
          line-height: normal;
          letter-spacing: 0.282vw;
          box-sizing: border-box;
          padding: 0.8vw 1.41vw;
          border-radius: 10.5864vw;
          background: #00a6ce;
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
    margin-bottom: 7.6923vw;
    margin-top: 5.128vw;
    display: flex;
    justify-content: space-between;
    gap: 5.128vw 0;

    & > div:nth-child(1) {
      color: #00a6ce;
      font-family: "Noto Sans HK";
      font-size: 6.15vw;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
    }
    & > div:nth-child(2) {
      display: flex;
      justify-content: flex-end;
    }
  }
  .select-type {
    appearance: none;
    width: 80.5128vw;
    background: url("https://statichk.cmermedical.com/vision/imgs/e496d5c11cab80cf.png")
      no-repeat;
    height: 13.589vw;
    background-position: right;
    border-radius: 4.615vw;
    border: 1px solid #d9d9d9;
    padding: 2.82vw 4.615vw;
    color: var(--Brand-Color, #00a6ce);
    font-family: "Noto Sans HK";
    font-size: 4.1vw;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 0.4vw;
    text-transform: uppercase;
  }
  .select-type option {
    margin-top: 2.564vw;
    padding: 5.128vw;
    line-height: 1.8;
    font-size: large;
  }

  .select-type:focus-visible {
    outline: none;
  }
}
</style>