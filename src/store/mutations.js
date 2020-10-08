export const updateData = (state, payload) => {
  state.apiData.push(payload);
};

export const updateDataBorsa = (state, payload) => {
  state.apiDataBorsa.push(payload);
};
