export const getData = (state) => {
  return {
    Bist100: state.apiData.Bist100,
    Dolar: state.apiData.Dolar,
    Euro: state.apiData.Euro,
    Altın: state.apiData.Altın,
    Bono: state.apiData.Bono,
    Petrol: state.apiData.Petrol,
  };
};
