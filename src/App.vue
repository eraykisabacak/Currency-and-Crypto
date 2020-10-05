<template>
  <div id="app">
    <Container>
      <Header></Header>
      <Box></Box>
    </Container>
  </div>
</template>

<script>
import Container from "./components/Container.vue";
import Header from "./components/Header.vue";
import Box from "./components/Box.vue";

export default {
  name: "App",
  components: {
    Header,
    Container,
    Box,
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
