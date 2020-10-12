import Vue from 'vue';

export const getAPI = ({ commit }) => {
  Vue.http
    .get('https://koronacors.herokuapp.com/?https://dovizapi.herokuapp.com/api')
    .then((res) => {
      let names = Object.keys(res.body[0]);
      let images = [
        'https://borsaistanbul.com/files/borsa_istanbul_logo_dikey.png',
        'https://www.pngarts.com/files/3/Green-Dollar-PNG-Image-With-Transparent-Background.png',
        'https://images.vexels.com/media/users/3/135892/isolated/preview/c1346d78abe34181589a4a60a7b86d09-euro-coin-icon-by-vexels.png',
        'https://toppng.com/uploads/preview/gold-icon-png-11552723744f0vj8surrx.png',
        'https://cdn2.iconfinder.com/data/icons/miscellaneous-13-solid/128/crude_drop_container_oil_fuel_chemical_drum-512.png',
        'https://img2.pngio.com/tiaa-cref-guidance-wizard-your-retirement-program-stocks-and-bond-png-578_437.png',
      ];
      var i;
      let result = [];
      let resultObj;
      for (i = 0; i < names.length; i += 2) {
        resultObj = {
          name: names[i],
          value: res.body[0][names[i]],
          change: res.body[0][names[i + 1]],
        };
        result.push(resultObj);
      }
      for (i = 0; i < result.length; i++) {
        result[i].image = images[i];
        commit('updateData', result[i]);
      }
    });
};

export const getAPIBorsa = ({ commit }) => {
  Vue.http
    .get(
      'https://koronacors.herokuapp.com/?https://dovizapi.herokuapp.com/api/borsa'
    )
    .then((res) => {
      commit('updateDataBorsa', Object.assign(res.body.result));
    });
};


export const getAPIAltin = ({ commit }) => {
  Vue.http
    .get(
      'https://koronacors.herokuapp.com/?https://dovizapi.herokuapp.com/api/altin'
    )
    .then((res) => commit('updateDataAltin', res.body));
};

export const getAPIGumus = ({ commit }) => {
  Vue.http
    .get(
      'https://koronacors.herokuapp.com/?https://dovizapi.herokuapp.com/api/gumus'
    )
    .then((res) => commit('updateDataGumus', res.body));
};

export const getAPICrypto = ({ commit }) => {
  Vue.http
    .get(
      'https://koronacors.herokuapp.com/?https://dovizapi.herokuapp.com/api/kriptopara'
    )
    .then((res) => commit('updateDataCrypto', Object.assign(res.body.result)));
};
