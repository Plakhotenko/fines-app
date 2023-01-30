import React, { FC } from 'react';
import { Container, Typography, Link, Box, List, ListItem } from '@mui/material';
import Translate from '../translate';
import LanguageToggle from '../lang-toggle';

const Header: FC = () => (
  <header>
    <Container>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h6" component="span">
          Fines App
        </Typography>
        <Box sx={{ display: 'flex' }}>
          <List sx={{ display: 'flex' }}>
            <ListItem>
              <Link variant="body2">
                <Translate t="header.login" />
              </Link>
            </ListItem>
            <ListItem>
              <Link variant="body2">
                <Translate t="header.register" />
              </Link>
            </ListItem>
          </List>
          <LanguageToggle />
        </Box>
      </Box>
    </Container>
  </header>
);

export default Header;
