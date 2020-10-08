<template>
  <div id="app">
    <Container>
      <router-view></router-view>
    </Container>
  </div>
</template>

<script>
import Container from "./components/Container.vue";

export default {
  name: "App",
  components: {
    Container,
  },
  created() {
    this.$store.dispatch("getAPI");
    this.$store.dispatch("getAPIBorsa");
  },
};
</script>

<style>
#app {
  font-family: "Arial";
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
</style>
