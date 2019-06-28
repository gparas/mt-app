import React from 'react';
import { loremIpsum } from 'lorem-ipsum';
import { Explore, Community } from './views/Demo';

const routes = [
  {
    path: '/',
    exact: true,
    name: 'Live Map',
    component: () => <h3>Live Map</h3>,
  },
  {
    path: '/explore',
    name: 'Explore',
    component: Explore,
    routes: [
      {
        path: '/explore/vessels',
        name: 'Vessels',
        component: () => <h3>Vessels</h3>,
      },
      {
        path: '/explore/lorem',
        name: 'Lorem',
        component: () => (
          <div
            dangerouslySetInnerHTML={{
              __html: loremIpsum({
                count: 4,
                format: 'html',
                units: 'paragraphs',
              }),
            }}
          />
        ),
      },
      {
        path: '/explore/ports',
        name: 'Ports',
        component: () => <h3>Ports</h3>,
      },
      {
        path: '/explore/stations',
        name: 'Stations',
        component: () => <h3>Stations</h3>,
      },
      {
        path: '/explore/companies',
        name: 'Companies',
        component: () => <h3>Companies</h3>,
      },
    ],
  },
  {
    path: '/community',
    name: 'Community',
    component: Community,
    routes: [
      {
        path: '/community/cover-your-area',
        name: 'Cover your Area',
        component: () => <h3>Cover your Area</h3>,
      },
      {
        path: '/community/free-ais-receiver',
        name: 'Free AIS Receiver',
        component: () => <h3>Free AIS Receiver</h3>,
      },
      {
        path: '/community/lis-of-stations',
        name: 'List of Stations',
        component: () => <h3>List of Stations</h3>,
      },
      {
        path: '/community/report-your-own-position',
        name: 'Report your own position',
        component: () => <h3>Report your own position</h3>,
      },
    ],
  },
];

export default routes;
