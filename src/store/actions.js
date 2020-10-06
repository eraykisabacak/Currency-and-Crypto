import Vue from 'vue';

export const getAPI = ({ commit }) => {
  Vue.http
    .get('https://koronacors.herokuapp.com/?https://dovizapi.herokuapp.com/api')
    .then((res) => {
      console.log(res);
      commit('updateData', res.body[0]);
    });
};
