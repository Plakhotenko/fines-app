import React, { FC, MouseEvent, useState } from 'react';
import { Divider, IconButton, ListItemIcon, ListItemText, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link as RouterLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Translate from '../Translate';
import { APP_ROUTES } from '../../constants';
import { logOutThunk } from '../../store/user/thunk';

const useHeaderMenu = () => {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = !!anchorEl;

  const handleMenuClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    dispatch(logOutThunk());
  };
  return { open, handleMenuClick, handleClose, handleLogout, anchorEl };
};

const HeaderMenu: FC = () => {
  const { open, handleMenuClick, handleClose, handleLogout, anchorEl } = useHeaderMenu();

  return (
    <>
      <IconButton onClick={handleMenuClick}>
        <MenuIcon />
      </IconButton>
      <Menu open={open} anchorEl={anchorEl} onClose={handleClose}>
        <MenuItem component={RouterLink} to={APP_ROUTES.DASHBOARD} onClick={handleClose}>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText>
            <Translate t="header.menu.dashboard" />
          </ListItemText>
        </MenuItem>
        <MenuItem component={RouterLink} to={APP_ROUTES.SETTINGS} onClick={handleClose}>
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText>
            <Translate t="header.menu.settings" />
          </ListItemText>
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleLogout}>
          <ListItemIcon>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText>
            <Translate t="header.menu.logout" />
          </ListItemText>
        </MenuItem>
      </Menu>
    </>
  );
};

export default HeaderMenu;
