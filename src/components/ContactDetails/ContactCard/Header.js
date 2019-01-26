import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import EditIcon from '@material-ui/icons/Edit';

import Link from '../../Link';

import { NameProp, PictureProp } from './ContactProp';

const FullName = styled(
  ({ showTitle = false, title, first, last, className }) => (
    <h1 className={className}>
      {showTitle && title} 
      {' '}
      {first} 
      {' '}
      {last}
    </h1>
  ),
)`
  position: absolute;
  left: 0.5em;
  bottom: 0.5em;
  display: flex;
  text-transform: capitalize;
`;

const Actions = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const LeftActions = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Header = ({ name, className }) => (
  <header className={className}>
    <Actions>
      <Link to="/">
        <IconButton aria-label="Go back">
          <ArrowBackIcon />
        </IconButton>
      </Link>
      <LeftActions>
        <IconButton aria-label="Go back">
          <EditIcon />
        </IconButton>
        <IconButton aria-label="Go back">
          <MoreVertIcon />
        </IconButton>
      </LeftActions>
    </Actions>
    <FullName {...name} />
  </header>
);

Header.propTypes = {
  className: PropTypes.string.isRequired,
  name: NameProp.isRequired,
  picture: PictureProp.isRequired,
};

export default styled(Header)`
  position: relative;
  height: 30%;
  min-height: 200px;
  min-height: 300px;
  width: 100%;
  background: ${({ picture = {} }) =>
    `url('${picture.large}') no-repeat center center;`};
  background-size: 100%;

  .div {
    height: 100%;
  }
`;
