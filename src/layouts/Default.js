import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import routes from '../routes';

const DefaultLayout = () => {
  return (
    <Router>
      <Link to='/'>Home</Link>
      <Link to='/explore'>Explore</Link>
      <Switch>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.component}
          />
        ))}
      </Switch>
    </Router>
  );
};
export default DefaultLayout;
