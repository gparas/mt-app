import React from 'react';
import RouteWithSubRoutes from '../components/RouteWithSubRoutes';

export function Explore({ routes }) {
  return (
    <React.Fragment>
      {routes.map((route, i) => (
        <RouteWithSubRoutes key={i} {...route} />
      ))}
    </React.Fragment>
  );
}
export function Community({ routes }) {
  return (
    <React.Fragment>
      {routes.map((route, i) => (
        <RouteWithSubRoutes key={i} {...route} />
      ))}
    </React.Fragment>
  );
}

export default {
  Explore,
  Community,
};
