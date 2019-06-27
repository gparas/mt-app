import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import Dropdown from './Dropdown';

export default function Navbar(props) {
  const { routes } = props;
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">Marinetraffic</Typography>
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
              color="inherit"
            >
              {route.name}
            </Button>
          );
        })}
      </Toolbar>
    </AppBar>
  );
}
