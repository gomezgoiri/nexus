import React from 'react';
import styled from 'styled-components';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import RefreshIcon from '@material-ui/icons/Refresh';
import MoreIcon from '@material-ui/icons/MoreVert';

const RightIcons = styled.div`
  position: absolute;
  right: 1em;
`;

const StatusBar = () => (
  <AppBar position="sticky">
    <Toolbar>
      <IconButton color="inherit" aria-label="Menu">
        <MenuIcon />
      </IconButton>
      <Typography variant="h4" color="inherit">
        Joinedapp
      </Typography>
      <RightIcons>
        <IconButton color="inherit">
          <RefreshIcon />
        </IconButton>
        <IconButton color="inherit">
          <MoreIcon />
        </IconButton>
      </RightIcons>
    </Toolbar>
  </AppBar>
);

export default StatusBar;
