import React, { FC } from 'react';
import { Container, Typography, Link, Box, List, ListItem } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import Translate from '../Translate';
import LanguageToggle from '../LangToggle';
import { useAuth } from '../../providers/Auth';
import HeaderMenu from '../HeaderMenu';

const Header: FC = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header>
      <Container>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h6" component="span">
            Fines App
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {isLoggedIn ? (
              <HeaderMenu />
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
