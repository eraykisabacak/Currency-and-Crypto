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
    //this.$store.dispatch('getAPI');
    //this.$store.dispatch('getAPIAltin');
  //  this.$store.dispatch('getAPIBorsa');
  //  this.$store.dispatch('getAPIGumus');
   // this.$store.dispatch('getAPICrypto');
  
  this.$store.dispatch('getAPIWebSocket');
    this.interval = setInterval(() => {
      //this.$store.dispatch('getAPI');
      //this.$store.dispatch('getAPIAltin');
      //this.$store.dispatch('getAPIBorsa');
      //this.$store.dispatch('getAPIGumus');
      //this.$store.dispatch('getAPICrypto');
    }, 60000);
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
</style>
