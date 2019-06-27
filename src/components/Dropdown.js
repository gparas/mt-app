import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

export default function Dropdown(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  const { toggleLink, menuItems } = props;

  return (
    <Fragment>
      <Button
        aria-controls={toggleLink.toLowerCase()}
        aria-haspopup="true"
        onClick={handleClick}
        color="inherit"
      >
        {toggleLink}
      </Button>
      <Menu
        id={toggleLink.toLowerCase()}
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {menuItems.map((menuItem, index) => (
          <MenuItem
            onClick={handleClose}
            component={Link}
            to={menuItem.path}
            key={index}
          >
            {menuItem.name}
          </MenuItem>
        ))}
      </Menu>
    </Fragment>
  );
}
