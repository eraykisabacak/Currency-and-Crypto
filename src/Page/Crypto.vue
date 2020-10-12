<template>
  <div>
    <Header></Header>
    <BoxCrypto></BoxCrypto>
  </div>
</template>

<script>
import Header from '../components/Header';
import BoxCrypto from '../components/BoxCrypto.vue';

export default {
  name: 'Crypto',
  components: {
    Header,
    BoxCrypto,
  },
};
</script>

<style scoped></style>
