<template>
  <div>
    <Header></Header>
    <BoxBorsa></BoxBorsa>
  </div>
</template>

<script>
import Header from "../components/Header";
import BoxBorsa from "../components/BoxBorsa";

export default {
  name: "Borsa",
  components: { Header, BoxBorsa },
};
</script>

<style scoped>
</style>
