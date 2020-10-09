import Doviz from './Page/Doviz';
import Borsa from './Page/Borsa';
import Altin from './Page/Altin';
//import Crypto from './Page/Crypto';

export const routes = [
  { path: '/', component: Doviz },
  { path: '/borsa', component: Borsa },
  { path: '/altin', component: Altin },
  //{ path: '/crypto', component: Crypto },
  { path: '*', component: Doviz },
];
