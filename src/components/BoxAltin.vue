<template>
  <div>
    <div class="box" v-for="(datas,key) in getDataAltin" :key="key">
      <span class="title">{{ ChangeName(key) }}</span>
      <span class="price">{{ datas.Alis }}</span>
      <span class="price">{{ datas.Satis }}</span>
      <span
        class="change">{{ datas.Degisim }}</span>
      <span
        class="time"
        >{{ datas.Saat }}</span
      >
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'ListBoxAltin',
  computed: {
    ...mapGetters(['getDataAltin']),
    },
  methods:{
    ChangeName(key){
        if(key == "Altin"){
          return "Altın"
        }
        else if(key == "Bilezik22Ayar"){
          return "Bikezik 22 Ayar"
        }
        else if(key == "AltinOns"){
          return "Altın ONS"
        }
        else if(key == "HasAltinGram"){
           return "Has Altın Gram"
        }
        else if(key == "AltinKGDolar"){
          return "Altın KG/DOLAR"
        }
        else if(key == "AltinKGEuro"){
           return "Altın KG/EURO"
        }
        else if(key == "CumhuriyetAltin"){
          return "Cumhuriyet Altın"
        }
        else if(key == "TamAltin"){
          return "Tam Altın"
        }
        else if(key == "YarimAltin"){
          return "Yarım Altın"
        }
        else if(key == "CeyrekAltin"){
           return "Çeyrek Altın"
        }
        else{
          return key;
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
