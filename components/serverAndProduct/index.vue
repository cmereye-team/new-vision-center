<script lang="ts" setup>
let cur = ref("");

const handleccc = (idx: any) => {
  cur.value = String(idx + 1);
  changeContextOrder();
};

const contextOrder = ref(5);
let isPc = ref(false);
const changeContextOrder = () => {
  if (isPc.value) {
    if (Number(cur.value) <= 5) {
      contextOrder.value = 5;
    } else if (Number(cur.value) > 5 && Number(cur.value) <= 10) {
      contextOrder.value = 10;
    } else {
      contextOrder.value = 14;
    }
  } else {
    if (Number(cur.value) <= 3) {
      contextOrder.value = 3;
    } else if (Number(cur.value) > 3 && Number(cur.value) <= 6) {
      contextOrder.value = 6;
    } else if (Number(cur.value) > 6 && Number(cur.value) <= 9) {
      contextOrder.value = 9;
    } else if (Number(cur.value) > 9 && Number(cur.value) <= 12) {
      contextOrder.value = 12;
    } else {
      contextOrder.value = 14;
    }
  }
};

const props = defineProps({
  allData: {
    type: Array,
    default: () => {},
  },
  detailList: {
    type: Array,
    default: () => {},
  },
});
</script>

<template>
  <div class="test-2">
    <div
      class="test-2-in"
      v-for="(item, index) in props.allData"
      :style="{ order: index + 1 }"
      :key="index"
      @click="handleccc(index)"
    >
      {{ item }}
    </div>
    <div
      class="test-2-in context"
      v-if="cur !== ''"
      :style="{ order: contextOrder }"
      @click="cur = ''"
    >
      {{ props.detailList[cur] }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
@media screen and (min-width: 768px) {
  .test-2 {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 20px;
    max-width: 580px;
    margin: 0 auto;
  }
  .test-2-in {
    height: 100px;
    width: 100%;
    background: #ccc;
  }
  .context {
    width: 100%;
    grid-column: span 5;
  }
}
@media screen and (max-width: 767px) {
  .test-2 {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }
  .test-2-in {
    height: 100px;
    width: 100%;
    background: #ccc;
  }
  .context {
    grid-column: span 3;
  }
}
</style>