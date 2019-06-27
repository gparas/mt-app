import React from 'react';
import RouteWithSubRoutes from '../components/RouteWithSubRoutes';

export function LiveMap() {
  return <h3>Live Map</h3>;
}

export function Explore({ routes }) {
  return (
    <React.Fragment>
      <h3>Explore</h3>
      {routes.map((route, i) => (
        <RouteWithSubRoutes key={i} {...route} />
      ))}
    </React.Fragment>
  );
}

export function Vessels() {
  return <h3>Vessels</h3>;
}

export function Ports() {
  return <h3>Ports</h3>;
}

export function Stations() {
  return <h3>Stations</h3>;
}

export function Companies() {
  return <h3>Companies</h3>;
}

export default {
  LiveMap,
  Explore,
  Vessels,
  Ports,
  Stations,
  Companies,
};
