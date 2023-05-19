import React, { FC } from 'react';
import { Container, Typography, Link, Box, List, ListItem } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Translate from '../Translate';
import LanguageToggle from '../LangToggle';
import HeaderMenu from '../HeaderMenu';
import { APP_ROUTES } from '../../constants';
import { selectIsLoggedIn, selectUser } from '../../store/user/selectors';

const Header: FC = () => {
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <header>
      <Container sx={{ pb: 3 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Box sx={{ display: 'flex', gap: '16px', alignItems: 'baseline' }}>
            <Typography variant="h6" component="span">
              Fines App
            </Typography>
            {isLoggedIn && (
              <Typography variant="body2" component="span">
                <Translate t="header.loggedInAs" /> {user?.email}
              </Typography>
            )}
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {isLoggedIn ? (
              <HeaderMenu />
            ) : (
              <List sx={{ display: 'flex' }}>
                <ListItem>
                  <Link variant="body2" component={RouterLink} to={APP_ROUTES.LOGIN}>
                    <Translate t="header.login" />
                  </Link>
                </ListItem>
                <ListItem>
                  <Link variant="body2" component={RouterLink} to={APP_ROUTES.REGISTER}>
                    <Translate t="header.register" />
                  </Link>
                </ListItem>
              </List>
            )}
            <LanguageToggle />
          </Box>
        </Box>
      </Container>
    </header>
  );
};

export default Header;
