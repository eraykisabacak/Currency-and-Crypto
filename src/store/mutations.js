export const updateData = (state, payload) => {
  state.apiData = payload;
};

export const updateDataBorsa = (state, payload) => {
  state.apiDataBorsa = payload;

   var d = new Date,
    dformat = [d.getDate(),
              d.getMonth() + 1, 
               d.getFullYear()].join('/')+' '+
              [d.getHours(),
               d.getMinutes(),
               d.getSeconds()].join(':');

  state.time = dformat;
};

export const updateDataAltin = (state, payload) => {
  state.apiDataAltin = payload;

   var d = new Date,
    dformat = [d.getDate(),
              d.getMonth() + 1, 
               d.getFullYear()].join('/')+' '+
              [d.getHours(),
               d.getMinutes(),
               d.getSeconds()].join(':');

  state.time = dformat;
};

export const updateDataGumus = (state, payload) => {
  state.apiDataGumus = payload;

   var d = new Date,
    dformat = [d.getDate(),
              d.getMonth() + 1, 
               d.getFullYear()].join('/')+' '+
              [d.getHours(),
               d.getMinutes(),
               d.getSeconds()].join(':');

  state.time = dformat;
};

export const updateDataCrypto = (state, payload) => {
  state.apiDataCrypto = payload;
  
  var d = new Date,
    dformat = [d.getDate(),
              d.getMonth() + 1, 
               d.getFullYear()].join('/')+' '+
              [d.getHours(),
               d.getMinutes(),
               d.getSeconds()].join(':');

  state.time = dformat;
};


