import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Contact from './Contact';
import { ContactProp } from '../ContactProps';

const ContactList = ({ className, items, selectedContact, push }) => (
  <List className={className}>
    {items.map((contact, i) => (
      <React.Fragment key={contact.id}>
        {i > 0 && <Divider component="li" />}
        <Contact
          {...contact}
          selected={contact.id === selectedContact}
          onClick={() => push(`/${contact.id}`)}
        />
      </React.Fragment>
    ))}
  </List>
);

ContactList.defaultProps = {
  className: '',
  items: [],
};

ContactList.propTypes = {
  className: PropTypes.string,
  selectedContact: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape(ContactProp)),
  push: PropTypes.func.isRequired,
};

export default styled(ContactList)`
  margin-top: 0.5rem;

  @media (${({ theme }) => theme['--screen-medium']}) {
    width: 32rem;
  }
`;
