import Doviz from './Page/Doviz';
import Borsa from './Page/Borsa';

export const routes = [
  { path: '/', component: Doviz },
  { path: '/borsa', component: Borsa },
  { path: '*', component: Doviz },
];
