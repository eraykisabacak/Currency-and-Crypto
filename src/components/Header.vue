<template>
  <div>
    <h1>Header</h1>
    <ul>
      <li class="active">Döviz</li>
      <li>Borsa</li>
      <li>Altın</li>
      <li>Crypto</li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
ul {
  width: 50%;
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
