<template>
  <div>
    <span class="head" v-if="getDataCrypto.length > 0">
      <span class="sira">Sıra</span>
      <span class="isim">İsim</span>
      <span class="fiyat">Fiyat</span>
      <span class="volume">24 Saatlik Volume</span>
      <span class="degisim">7 Günlük Değişim</span>
      <span class="degisim24">24 Saatlik Değişim</span>
    </span>
    <div class="box" v-for="(datas,key) in getDataCrypto" :key="key">
      <span class="rank">{{ datas.Rank }}</span>
      <img class="image" :src="datas.Image" alt="">
      <span class="title">{{ datas.Name }}
        <span class="sembol">{{ datas.Sembol }}</span>
      </span>
      
      <span class="price">{{ datas.Price }}</span>
      <span class="title">{{ datas.Volume24h }}</span>

      <span
        class="change" :style="datas.Change7d[0] == '-' ? 'color:red' : ''">{{ datas.Change7d }}</span>
      <span
        class="change" :style="datas.Change24h[0] == '-' ? 'color:red' : ''"
        >{{ datas.Change24h }}</span
      >
    </div>
  </div>
</template>

<script>
/*

      <span class="title">{{ datas.CirculatingSupply }}</span>
      <span class="title">{{ datas.MarketCap }}</span>
*/
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
.head{
  margin-top: 30px;
  width: 100%;
  height: 60px;
  border-bottom: 5px solid #98989898;
  border-radius: 25px;
  display:flex;
  font-size: 22px;
  font-weight: bold;
}
.sira{
  width: 5%;
  margin: auto;
}
.isim{
  margin: auto;
  display: inline-block;
  width: 300px;
}
.volume{
  display: inline-block;
  margin: auto;

  width: 235px;
}
.fiyat{
  display: inline-block;
  width: 150px;
  margin: auto;
}
.degisim{
  display: inline-block;
  width: 117px;
  margin: auto;
}
.degisim24{
  margin: auto;
  display: inline-block;
  width: 117px;
}
.rank{
  width: 5%;
  margin: auto;
}
.title .sembol{
  font-size: 10px;
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
  display:flex;
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
  font-size: 25px;
  margin: auto;
  width: 300px;
  text-align: center;  
}
.price {
  font-size: 25px;
  margin: auto;
  width: 180px;
  text-align: center;
}
.change {
  font-size: 25px;
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
