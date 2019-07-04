import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Navbar from '../components/Navbar';
import RouteWithSubRoutes from '../components/RouteWithSubRoutes';
import routes from '../routes';

const useStyles = makeStyles(theme => ({
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
}));

const DefaultLayout = () => {
  const classes = useStyles();
  return (
    <Router>
      <Navbar routes={routes} />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        {routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
      </main>
    </Router>
  );
};
export default DefaultLayout;
