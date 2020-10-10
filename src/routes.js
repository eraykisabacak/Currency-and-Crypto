import Doviz from './Page/Doviz';
import Borsa from './Page/Borsa';
import Altin from './Page/Altin';
import Gumus from './Page/Gumus';
//import Crypto from './Page/Crypto';

export const routes = [
  { path: '/', component: Doviz },
  { path: '/borsa', component: Borsa },
  { path: '/altin', component: Altin },
  { path: '/gumus', component: Gumus },
  //{ path: '/crypto', component: Crypto },
  { path: '*', component: Doviz },
];
