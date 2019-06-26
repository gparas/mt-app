import LiveMap from './views/LiveMap';
import Explore from './views/Explore';

const routes = [
  {
    path: '/',
    exact: true,
    name: 'Live Map',
    component: LiveMap,
  },
  {
    path: '/explore',
    name: 'Explore',
    component: Explore,
  },
];

export default routes;
