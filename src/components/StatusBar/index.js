import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import LeftIcon from '@material-ui/icons/ChevronLeft';
import RefreshIcon from '@material-ui/icons/Refresh';
import MoreIcon from '@material-ui/icons/MoreVert';

import SearchField from './SearchField';

const RightIcons = styled.div`
  position: absolute;
  right: 1em;
  display: flex;
`;

const StatusBar = ({ className, collapsed, onToggleCollapse }) => (
  <AppBar position="sticky" className={className}>
    <Toolbar>
      <IconButton color="inherit" aria-label="Menu" onClick={onToggleCollapse}>
        {collapsed ? <MenuIcon /> : <LeftIcon />}
      </IconButton>
      <Typography variant="h4" color="inherit">
        Joinedapp
      </Typography>
      <RightIcons>
        <SearchField />
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

StatusBar.propTypes = {
  collapsed: PropTypes.bool.isRequired,
  className: PropTypes.string.isRequired,
  onToggleCollapse: PropTypes.func.isRequired,
};

export default styled(StatusBar)`
  background-color: ${({ theme }) => theme['--color-primary']} !important;
`;
