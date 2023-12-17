<template>
  <div id="app">
    <div>{{getTime}}</div>
    <Container>
      <router-view></router-view>
    </Container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Container from './components/Container.vue';

export default {
  name: 'App',
  data: function() {
    return {
      connection: null
    }
  },
  components: {
    Container,
  },
  computed:{
      ...mapGetters(['getTime'])
  },
  created() {
    this.$store.dispatch('getAPI');
    this.$store.dispatch('getAPIAltin');
    this.$store.dispatch('getAPIBorsa');
    this.$store.dispatch('getAPIGumus');
  },
};
</script>

<style>
#app {
  font-family: 'Arial';
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}

.loader {
  width: 48px;
  height: 48px;
  border: 5px solid #FFF;
  border-bottom-color: #FF3D00;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
