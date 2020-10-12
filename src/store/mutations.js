export const updateData = (state, payload) => {
  state.apiData.push(payload);
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
};


