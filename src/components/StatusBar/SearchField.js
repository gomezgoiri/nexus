import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';

const IconContainer = styled.div`
  width: 72px;
  height: 100%;
  position: absolute;
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SearchField = ({ className }) => (
  <div className={className}>
    <IconContainer>
      <SearchIcon />
    </IconContainer>
    <InputBase
      placeholder="Search…"
      classes={{
        root: 'root',
        input: 'input',
      }}
    />
  </div>
);

SearchField.propTypes = {
  className: PropTypes.string.isRequired,
};

export default styled(SearchField)`
  display: inline-flex;
  position: relative;
  border-radius: 4px;

  background-color: rgba(255, 255, 255, 0.15);
  &:hover {
    background-color: rgba(255, 255, 255, 0.25);
  }
  margin-left: 0;
  width: 100%;

  .root {
    color: inherit;
    width: 100%;

    .input {
      padding: 8px 8px 8px 72px;
      transition: width 300ms;
      width: 100%;
      font-size: 1.5rem;

      width: 120px;
      &:focus {
        width: 200px;
      }
    }
  }
`;
