export const updateData = (state, payload) => {
  state.apiData.push(payload);
};

export const updateDataBorsa = (state, payload) => {
 // state.apiDataBorsa.push(payload);
  state.apiDataBorsa = payload;
};

export const updateDataAltin = (state, payload) => {
  state.apiDataAltin = payload;
};

