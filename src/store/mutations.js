export const updateData = (state, payload) => {
  state.apiData.Bist100.value = payload.Bist100;
  state.apiData.Bist100.change = payload.Bist100Degisim;

  state.apiData.Altın.value = payload.Altın;
  state.apiData.Altın.change = payload.AltınDegisim;

  state.apiData.Bono.value = payload.Bono;
  state.apiData.Bono.change = payload.BonoDegisim;

  state.apiData.Dolar.value = payload.Dolar;
  state.apiData.Dolar.change = payload.DolarDegisim;

  state.apiData.Euro.value = payload.Euro;
  state.apiData.Euro.change = payload.EuroDegisim;

  state.apiData.Petrol.value = payload.Petrol;
  state.apiData.Petrol.change = payload.PetrolDegisim;

  /* state.apiData.Bist100.name = 'Bist100';
  state.apiData.Bist100.image =
    'https://borsaistanbul.com/files/borsa_istanbul_logo_dikey.png';

  state.apiData.Altın.name = 'Altın';
  state.apiData.Altın.image =
    'https://toppng.com/uploads/preview/gold-icon-png-11552723744f0vj8surrx.png';

  state.apiData.Bono.name = 'Bono';
  state.apiData.Bono.image =
    'https://img2.pngio.com/tiaa-cref-guidance-wizard-your-retirement-program-stocks-and-bond-png-578_437.png';

  state.apiData.Dolar.name = 'Dolar';
  state.apiData.Dolar.image =
    'https://www.pngarts.com/files/3/Green-Dollar-PNG-Image-With-Transparent-Background.png';

  state.apiData.Euro.name = 'Euro';
  state.apiData.Euro.image =
    'https://images.vexels.com/media/users/3/135892/isolated/preview/c1346d78abe34181589a4a60a7b86d09-euro-coin-icon-by-vexels.png';

  state.apiData.Petrol.name = 'Petrol';
  state.apiData.Petrol.image =
    'https://cdn2.iconfinder.com/data/icons/miscellaneous-13-solid/128/crude_drop_container_oil_fuel_chemical_drum-512.png';*/
};
