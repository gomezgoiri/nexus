import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Drawer from '@material-ui/core/Drawer';

const CustomDrawer = ({ children, className, ...other }) => (
  <Drawer
    variant="persistent"
    anchor="left"
    PaperProps={{ className }}
    {...other}
  >
    {children}
  </Drawer>
);

CustomDrawer.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default styled(CustomDrawer)`
  top: ${props => props.top};
  height: calc(100% - ${props => props.top});
  border-right: 1px solid rgba(0, 0, 0, 0.12);
  overflow-y: auto;
  width: 32rem;
`;
