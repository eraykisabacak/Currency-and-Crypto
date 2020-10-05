<template>
  <div>
    <div class="box">
      <span class="image">
        <img
          src="https://www.pngarts.com/files/3/Green-Dollar-PNG-Image-With-Transparent-Background.png"
          alt=""
        />
      </span>
      <span class="title">Dolar</span>
      <span class="price">7.7</span>
      <span class="change">1.1 %</span>
      <span class="status">+</span>
    </div>

    <div class="box">
      <span class="image">
        <img
          src="https://www.pngarts.com/files/3/Green-Dollar-PNG-Image-With-Transparent-Background.png"
          alt=""
        />
      </span>
      <span class="title">Dolar</span>
      <span class="price">7.7</span>
      <span class="change">1.1 %</span>
      <span class="status">+</span>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
let headers = new Headers();

headers.append('Content-Type', 'application/json');
headers.append('Accept', 'application/json');
headers.append('Origin', 'http://localhost:3000');

export default {
  name: 'Box',
  mounted() {
    axios
      .get(
        'https://koronacors.herokuapp.com/?https://dovizapi.herokuapp.com/api'
      )
      .then((response) => console.log(response.data));
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
  border: 0.1px solid #888888;
  /*box-shadow: 5px 8px 11px 5px #888888;*/
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
