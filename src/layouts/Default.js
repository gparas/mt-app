import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from '../components/Navbar';
import RouteWithSubRoutes from '../components/RouteWithSubRoutes';
import routes from '../routes';

const DefaultLayout = () => {
  return (
    <Router>
      <Navbar routes={routes} />
      {routes.map((route, i) => (
        <RouteWithSubRoutes key={i} {...route} />
      ))}
    </Router>
  );
};
export default DefaultLayout;
