import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import Dropdown from './Dropdown';

const useStyles = makeStyles(theme => ({
  title: {
    flexGrow: 1,
  },
}));

export default function Navbar(props) {
  const classes = useStyles();
  const { routes } = props;
  return (
    <AppBar>
      <Toolbar>
        <Typography
          component='h1'
          variant='h6'
          color='inherit'
          noWrap
          className={classes.title}
        >
          Marinetraffic
        </Typography>
        {routes.map((route, index) => {
          if (route.routes !== undefined) {
            return (
              <Dropdown
                key={index}
                toggleLink={route.name}
                menuItems={route.routes}
              />
            );
          }
          return (
            <Button
              key={index}
              component={Link}
              to={route.path}
              color='inherit'
            >
              {route.name}
            </Button>
          );
        })}
      </Toolbar>
    </AppBar>
  );
}
