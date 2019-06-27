import {
  LiveMap,
  Explore,
  Vessels,
  Ports,
  Stations,
  Companies,
} from './views/Demo';

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
    routes: [
      {
        path: '/explore/vessels',
        name: 'Vessels',
        component: Vessels,
      },
      {
        path: '/explore/ports',
        name: 'Ports',
        component: Ports,
      },
      {
        path: '/explore/stations',
        name: 'Stations',
        component: Stations,
      },
      {
        path: '/explore/companies',
        name: 'Companies',
        component: Companies,
      },
    ],
  },
];

export default routes;
