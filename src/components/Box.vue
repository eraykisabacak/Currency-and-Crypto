<template>
  <div>
    <div class="box" v-for="datas in getData" :key="datas.name">
      <span class="image">
        <img :src="datas" alt="" />
      </span>
      <span class="title">{{ datas }}</span>
      <span class="price">{{ datas.value }}</span>
      <span class="change">{{ datas.change }}</span>
      <span class="status">+</span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Box',
  computed: {
    ...mapGetters(['getData']),
    appointments_() {
      this.$forceUpdate();
      return this.$store.state.apiData;
    },
  },
};
/* getData[data].image
{{/*<div
      class="box"
      :v-if="
        getData[data] !== empty &&
          getData[data] !== undefined &&
          getData[data] !== ''
      "
      v-for="data in Object.keys(getData)"
      :key="data"
    >
      <span class="image">
        <img :src="getData[data].image" alt="" />
      </span>
      <span class="title">{{ data }}</span>
      <span
        class="price"
        :style="getData[data].change[0] === '-' ? 'color:red' : ''"
        >{{ getData[data].value }}</span
      >
      <span
        class="change"
        :style="getData[data].change[0] === '-' ? 'color:red' : ''"
        >{{ getData[data].change }}</span
      >
      <span
        class="status"
        :style="getData[data].change[0] === '-' ? 'color:red' : ''"
        >{{ getData[data].change[0] === '-' ? '-' : '+' }}</span
      >*/
</script>

<style scoped>
.box:first-child {
  margin-top: 45px;
}
.box {
  margin-top: 5px;
  width: 100%;
  height: 60px;
  border: 0.1px solid #888888;
  border-radius: 25px;
  display: flex;
}
.image {
  width: 80px;
  margin: auto;
}
.title {
  font-size: 32px;
  margin: auto;
  width: 350px;
  text-align: center;
}
.price {
  font-size: 32px;
  margin: auto;
  width: 180px;
  text-align: center;
}
.change {
  font-size: 32px;
  color: green;
  width: 150px;
  text-align: center;
  margin: auto;
}
.status {
  font-size: 32px;
  margin: auto;
  color: green;
  margin-right: 5px;
  width: 50px;
  text-align: center;
}
.image img {
  height: 50px;
  width: 50px;
  border-radius: 50%;
}
</style>
