import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';

import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import CalendarIcon from '@material-ui/icons/CalendarToday';
import LocationIcon from '@material-ui/icons/LocationOn';
import Divider from '@material-ui/core/Divider';

import { ContactProp } from '../../ContactProps';

const NoAvatar = styled.div`
  width: 40px;
`;

/* eslint-disable react/require-default-props */
const AttributeItem = ({ icon, ...other }) => (
  <ListItem>
    {icon ? <Avatar>{icon}</Avatar> : <NoAvatar />}
    <ListItemText {...other} />
  </ListItem>
);

AttributeItem.propTypes = {
  icon: PropTypes.node,
};

const LocationText = styled(({ street, city, state, postcode, className }) => (
  <div className={className}>
    {street}
    <br /> 
    {' '}
    {city}
, 
    {' '}
    {state} 
    {' '}
    {postcode}
  </div>
))`
  text-transform: capitalize;
`;

const AttributeList = ({ phone, cell, email, dob, location, className }) => (
  <List className={className}>
    <AttributeItem
      icon={<PhoneIcon />}
      primary={String(cell)}
      secondary="Mobile"
    />
    <AttributeItem primary={String(phone)} secondary="Work" />
    <Divider variant="inset" component="li" />
    <AttributeItem icon={<EmailIcon />} primary={email} secondary="E-mail" />
    <Divider variant="inset" component="li" />
    <AttributeItem
      icon={<CalendarIcon />}
      primary={dob && new Date(dob.date).toLocaleString()}
      secondary="Date of birth"
    />
    <Divider variant="inset" component="li" />
    <AttributeItem
      icon={<LocationIcon />}
      primary={<LocationText {...location} />}
      secondary="Home"
    />
  </List>
);

AttributeList.propTypes = ContactProp;

export default styled(AttributeList)`
  width: 100%;
`;
