import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';

import { ContactProp } from '../ContactProps';

const StyledListItem = styled(({ className, ...other }) => (
  <ListItemText primaryTypographyProps={{ className }} {...other} />
))`
  font-size: 14px !important;
  font-weight: bold !important;
  text-transform: capitalize;
  ${({ selected = false, theme }) =>
    selected ? `color: ${theme['--color-primary']} !important;` : ``}
`;

const Contact = ({ picture, name, selected, onClick }) => (
  <ListItem button onClick={onClick}>
    <Avatar src={picture.thumbnail} />
    <StyledListItem
      selected={selected}
      primary={`${name.first} ${name.last}`}
    />
  </ListItem>
);

Contact.propTypes = {
  selected: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  ...ContactProp,
};

export default Contact;
