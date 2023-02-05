import React, { FC, useContext } from 'react';
import { Container, Typography, Link, Box, List, ListItem } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import Translate from '../translate';
import LanguageToggle from '../lang-toggle';
import { AuthContext } from '../../providers/auth';

const Header: FC = () => {
  const { user, logOut } = useContext(AuthContext);

  return (
    <header>
      <Container>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h6" component="span">
            Fines App
          </Typography>
          <Box sx={{ display: 'flex' }}>
            {user?.token ? (
              <Link onClick={logOut} component="button" variant="body2">
                <Translate t="header.logout" />
              </Link>
            ) : (
              <List sx={{ display: 'flex' }}>
                <ListItem>
                  <Link variant="body2" component={RouterLink} to="/login">
                    <Translate t="header.login" />
                  </Link>
                </ListItem>
                <ListItem>
                  <Link variant="body2" component={RouterLink} to="/register">
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
