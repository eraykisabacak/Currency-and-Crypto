<template>
  <div>
    <h1>Currency and Crypto</h1>
    <ul>
      <router-link to="/" tag="li" active-class="active" exact
        >Döviz</router-link
      >
      <router-link to="/borsa" tag="li" active-class="active" exact
        >Borsa</router-link
      >
      <router-link to="/altin" tag="li" active-class="active" exact
        >Altın</router-link
      >
      <router-link to="/gumus" tag="li" active-class="active" exact
        >Gümüş</router-link
      >
     <router-link to="/crypto" tag="li" active-class="active" exact
        >Crypto</router-link>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
ul {
  width: 65%;
  margin-left: auto;
  margin-right: auto;
  border: 0.5px solid black;
  border-radius: 25px;
  box-shadow: 5px 8px 11px 5px #888888;
}
li {
  list-style-type: none;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 22px;
  padding: 15px 22px;
  margin-right: 10px;
}
li:hover,
.active {
  background-color: #344bfa;
  color: #fff;
  border-radius: 15px;
}
</style>
