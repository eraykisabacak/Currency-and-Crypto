<template>
  <div>
    <Loading :data="getDataGumus"></Loading>
    <div class="box" v-for="(datas,key) in getDataGumus" :key="key">
      <span class="title">{{ ChangeName(key)  }}</span>
      <span class="price">{{ datas.Alis }}</span>
      <span class="price">{{ datas.Satis }}</span>
      <span
        class="change" :style="datas.Degisim[2] == '-' ? 'color:red' : ''">{{ datas.Degisim }}</span>
      <span
        class="time"
        >{{ datas.Saat }}</span
      >
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Loading from "@/components/Loading.vue";

export default {
  name: 'ListBoxGumus',
  components: {Loading},
  computed: {
    ...mapGetters(['getDataGumus']),
    },
  methods:{
    ChangeName(key){
      if(key == "GumusGramSpot"){
        return "Gümüş Gram Spot";
      }else if(key == "Gumus"){
        return "Gümüş";
      }else if(key == "GumusEuro"){
        return "Gümüş / €";
      }else if(key == "GumusGramDolar"){
        return "Gümüş / $";
      }else if(key == "GumusGramTurkLirasi"){
        return "Gümüş Gram / ₺";
      }
    }
  }
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
.image {
  width: 80px;
  margin: auto;
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
