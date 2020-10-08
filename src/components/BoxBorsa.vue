<template>
  <div>
    <div class="box" v-for="(datas, key) in getDataBorsa" :key="key">
      <span class="time">{{ datas.time[0] }}</span>
      <span class="title">{{ datas.name[0] }}</span>
      <span class="price">{{ datas.value }}</span>
      <span class="change" :style="datas.change[0] == '-' ? 'color:red' : ''">{{
        datas.change
      }}</span>
      <span class="status" :style="datas.change[0] == '-' ? 'color:red' : ''">{{
        datas.change[0] == "-" ? "-" : "+"
      }}</span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "ListBoxBorsa",
  computed: {
    ...mapGetters(["getDataBorsa"]),
  },
};
</script>

<style scoped>
.box:first-child {
  margin-top: 45px;
}
.box {
  margin-top: 5px;
  width: 100%;
  height: 60px;
  border: 2px solid #888888;
  border-radius: 25px;
  display: flex;
}
.box:hover {
  border: 2px solid #3f241b;
}
.time {
  width: 30px;
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
