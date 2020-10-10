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
    this.interval = setInterval(() => {
      this.$store.dispatch("getAPIAltin");
      this.$store.dispatch("getAPIBorsa");
      this.$store.dispatch("getAPIGumus");
    }, 1000);

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
