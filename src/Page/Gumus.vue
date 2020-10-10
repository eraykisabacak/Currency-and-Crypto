<template>
  <div>
    <Header></Header>
    <BoxGumus></BoxGumus>
  </div>
</template>

<script>
import Header from '../components/Header';
import BoxGumus from '../components/BoxGumus.vue';

export default {
  name: 'Gumus',
  components: {
    Header,
    BoxGumus,
  },
};
</script>

<style scoped></style>
