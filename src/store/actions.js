import Vue from 'vue';

export const getAPI = ({ commit }) => {
  Vue.http
    .get(process.env.VUE_APP_BACKEND_URL)
    .then((res) => {
      let names = Object.keys(res.body.data[0]);
      let images = [
        'https://borsaistanbul.com/files/borsa_istanbul_logo_dikey.png',
        'https://www.pngarts.com/files/3/Green-Dollar-PNG-Image-With-Transparent-Background.png',
        'https://images.vexels.com/media/users/3/135892/isolated/preview/c1346d78abe34181589a4a60a7b86d09-euro-coin-icon-by-vexels.png',
        'https://toppng.com/uploads/preview/gold-icon-png-11552723744f0vj8surrx.png',
        'https://cdn2.iconfinder.com/data/icons/miscellaneous-13-solid/128/crude_drop_container_oil_fuel_chemical_drum-512.png',
        'https://www.pngarts.com/files/3/Green-Dollar-PNG-Image-With-Transparent-Background.png',
      ];
      var i;
      let result = [];
      let resultObj;
      for (i = 0; i < names.length; i += 2) {
        resultObj = {
          name: names[i],
          value: res.body.data[0][names[i]],
          change: res.body.data[0][names[i + 1]],
        };
        result.push(resultObj);
      }
      for (i = 0; i < result.length; i++) {
        result[i].image = images[i];
      }
        commit('updateData', result);
    });
};
/*
export const getAPIWebSocket = async ({ commit }) => {
  let connection;
  connection = await new WebSocket('wss://dovizapi.herokuapp.com/');

  var msg;

  connection.onmessage = function (event) {
    msg = JSON.parse(event.data);
    if (msg[0] == "api") {
      let names = Object.keys(msg[1]);
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
          value: msg[1][names[i]],
          change: msg[1][names[i + 1]],
        };
        result.push(resultObj);
      }
      for (i = 0; i < result.length; i++) {
        result[i].image = images[i];
      }
        commit('updateData', result);
    }
    if (msg[0] == "altin") { 
      commit('updateDataAltin', JSON.parse(msg[1]))
    }
    if (msg[0] == "gumus") {
      commit('updateDataGumus', JSON.parse(msg[1]));
    }
    if (msg[0] == "borsa") {
      commit('updateDataBorsa', JSON.parse(msg[1]).result);
    }
    if (msg[0] == "kriptopara") {
      commit('updateDataCrypto', JSON.parse(msg[1]).result)
    }
  }
};*/

export const getAPIBorsa = ({ commit }) => {
  Vue.http
    .get(
        process.env.VUE_APP_BACKEND_URL + '/borsa'
    )
    .then((res) => {
      commit('updateDataBorsa', Object.assign(res.body.data));
    });
};


export const getAPIAltin = ({ commit }) => {
  Vue.http
    .get(
        process.env.VUE_APP_BACKEND_URL + '/altin'
    )
    .then((res) => commit('updateDataAltin', res.body.data));
};

export const getAPIGumus = ({ commit }) => {
  Vue.http
    .get(
        process.env.VUE_APP_BACKEND_URL + '/gumus'
    )
    .then((res) => commit('updateDataGumus', res.body.data));
};

export const getAPICrypto = ({ commit }) => {
  Vue.http
    .get(
        process.env.VUE_APP_BACKEND_URL + '/kriptopara'
    )
    .then((res) => commit('updateDataCrypto', Object.assign(res.body.data)));
};
