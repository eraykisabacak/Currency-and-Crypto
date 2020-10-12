<template>
  <div>
    <div class="box" v-for="(datas,key) in getDataCrypto" :key="key">
      <span class="rank">{{ datas.Rank }}</span>
      <img class="image" :src="datas.Image" alt="">
      <span class="title">{{ datas.Name }}
        <span class="sembol">{{ datas.Sembol }}</span>
      </span>
      
      <span class="price">{{ datas.Price }}</span>
      <span
        class="change" :style="datas.Change7d[0] == '-' ? 'color:red' : ''">{{ datas.Change7d }}</span>
      <span
        class="change"
        >{{ datas.Change24h }}</span
      >
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'ListBoxCrypto',
  computed: {
    ...mapGetters(['getDataCrypto']),
    },
  methods:{
    
  }
};
</script>

<style scoped>
.rank{
  width: 5%;
  margin: auto;
}
.title .sembol{
  font-size: 12px;
  width: 5%;
  margin: auto;
}
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
.image {
  width: 50px;
  margin: auto;
  margin-left: 5px;
}
.title {
  font-size: 32px;
  margin: auto;
  width: 300px;
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
.time {
  font-size: 16px;
  margin: auto;
  margin-right: 5px;
  width: 105px;
  text-align: center;
}
.image img {
  height: 50px;
  width: 50px;
  border-radius: 50%;
}
</style>
