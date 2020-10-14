export const updateData = (state, payload) => {
  state.apiData = payload;
};

export const updateDataBorsa = (state, payload) => {
  state.apiDataBorsa = payload;
};

export const updateDataAltin = (state, payload) => {
  state.apiDataAltin = payload;
};

export const updateDataGumus = (state, payload) => {
  state.apiDataGumus = payload;
};

export const updateDataCrypto = (state, payload) => {
  state.apiDataCrypto = payload;
  
  var d = new Date,
    dformat = [d.getMonth()+1,
               d.getDate(),
               d.getFullYear()].join('/')+' '+
              [d.getHours(),
               d.getMinutes(),
               d.getSeconds()].join(':');

  state.time = dformat;
};


