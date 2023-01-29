import React, { FC } from 'react';
import { Container, Typography, Link, Box, List, ListItem } from '@mui/material';

const Header: FC = () => (
  <header>
    <Container>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h6" component="span">
          Fines App
        </Typography>
        <List sx={{ display: 'flex' }}>
          <ListItem>
            <Link variant="body2">Login</Link>
          </ListItem>
          <ListItem>
            <Link variant="body2">Register</Link>
          </ListItem>
        </List>
      </Box>
    </Container>
  </header>
);
export default Header;
