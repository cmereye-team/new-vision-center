<script lang="ts" setup>
useHead(() => ({
  title: "test - 希瑪眼科視光中心",
}));
const bannerImg = {
  pc: "https://statichk.cmermedical.com/vision/imgs/5ae163616b5be08e.png",
  mobile: "https://statichk.cmermedical.com/vision/imgs/a946bc28a9b89d42.png",
};
const witness = ref({
  section2: [
    {
      name: "Carson",
      img: "https://statichk.cmermedical.com/vision/imgs/00f4eb10c798679f.png",
      services: "角膜矯形鏡 (ok鏡)",
      slogan: "安心、舒服、無痛",
      text: "童星Carson黃梓賢平時熱愛運動，不過有近視要戴眼鏡做運動冇咁方便。最後決定去配OK鏡，童星細佬Sean更有一齊陪哥哥去做檢查。",
    },
    {
      name: "Carson",
      img: "https://statichk.cmermedical.com/vision/imgs/00f4eb10c798679f.png",
      services: "角膜矯形鏡 (ok鏡)",
      slogan: "安心、舒服、無痛",
      text: "童星Carson黃梓賢平時熱愛運動，不過有近視要戴眼鏡做運動冇咁方便。最後決定去配OK鏡，童星細佬Sean更有一齊陪哥哥去做檢查。",
    },
    {
      name: "Carson",
      img: "https://statichk.cmermedical.com/vision/imgs/00f4eb10c798679f.png",
      services: "角膜矯形鏡 (ok鏡)",
      slogan: "安心、舒服、無痛",
      text: "童星Carson黃梓賢平時熱愛運動，不過有近視要戴眼鏡做運動冇咁方便。最後決定去配OK鏡，童星細佬Sean更有一齊陪哥哥去做檢查。",
    },
  ],
});
</script>

<template>
  <div class="information witness">
    <section class="section2">
      <div
        class="list-in"
        v-for="(item, index) in witness.section2"
        :key="index"
      >
        <div class="list-in-t">
          <div class="image">
            <img :src="item.img" :alt="item.name" :title="item.name" />
          </div>
          <div class="context">
            <h3>{{ item.name }}</h3>
            <h4>{{ item.services }}</h4>
            <p>{{ item.slogan }}</p>
          </div>
        </div>
        <div class="list-in-b">
          <p>{{ item.text }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.witness {
  width: 100%;
  margin: 200px auto 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .section2 {
    width: 100%;
    max-width: 960px;
    margin-top: 65px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    .list-in {
      padding: 0 10px 15px;
      position: relative;
      &-t {
        display: flex;
        align-items: flex-end;
        position: relative;
        z-index: 1;
        .image {
          width: 120px;
          padding: 0 10px;
          img {
            width: 100%;
            border-radius: 50%;
          }
        }
        .context {
          h3 {
            color: var(--Grey-Deep, #4d4d4d);
            font-family: "Noto Sans HK";
            font-size: 16.5px;
            font-style: normal;
            font-weight: 700;
            line-height: 21px; /* 127.273% */
            letter-spacing: 0.825px;
            margin-bottom: 5px;
          }
          h4 {
            color: var(--Brand-Color, #00a6ce);
            font-family: "Noto Sans HK";
            font-size: 15px;
            font-style: normal;
            font-weight: 700;
            line-height: 21px; /* 140% */
            letter-spacing: 0.75px;
          }
          p {
            color: var(--Basic-2, #59ba68);
            font-family: "Noto Sans HK";
            font-size: 13.5px;
            font-style: normal;
            font-weight: 500;
            line-height: 18.75px; /* 138.889% */
            letter-spacing: 0.675px;
            margin-bottom: 10px;
          }
        }
      }
      &-b {
        margin-top: 10px;
        position: relative;
        z-index: 1;
        p {
          color: var(--Grey-Deep, #4d4d4d);
          font-family: "Noto Sans HK";
          font-size: 13.5px;
          font-style: normal;
          font-weight: 500;
          line-height: 21px; /* 155.556% */
          text-transform: uppercase;
        }
      }
      &::after {
        content: "";
        width: 100%;
        height: calc(100% - 50px);
        position: absolute;
        z-index: 0;
        bottom: 0;
        left: 0;
        background: rgba(211, 240, 253, 0.5);
        border-radius: 10px;
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .witness {
    padding: 0 6.4102vw;
    box-sizing: border-box;
    margin: 12.2vw auto;
    overflow: hidden;
    &-t {
      font-size: 6.1538vw;
      line-height: 1.6;
    }
    .section2 {
      grid-template-columns: repeat(1, 1fr);
      gap: 5.128vw;
      margin-top: 15.128vw;
      .list-in {
        &-t {
          .image {
            width: 34.1vw;
            img {
              width: 100%;
            }
          }
          .context {
            h3 {
              font-size: 5.128vw;
              line-height: 6.1538vw;
            }
            h4 {
              font-size: 4.1025vw;
              line-height: 6.1538vw;
              letter-spacing: 0.8px;
            }
            p {
              font-size: 3.589vw;
              line-height: 5.128vw;
              letter-spacing: 0.7px;
            }
          }
        }
        &-b {
          p {
            font-size: 3.589vw;
            line-height: 6.1538vw;
          }
        }
      }
    }
  }
}
</style>