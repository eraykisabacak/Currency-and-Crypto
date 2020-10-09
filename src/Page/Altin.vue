<template>
  <div>
    <Header></Header>
    <BoxAltin></BoxAltin>
  </div>
</template>

<script>
import Header from '../components/Header';
import BoxAltin from '../components/BoxAltin.vue';

export default {
  name: 'Doviz',
  components: {
    Header,
    BoxAltin,
  },
};
</script>

<style scoped></style>
