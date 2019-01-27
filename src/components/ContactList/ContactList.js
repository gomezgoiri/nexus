import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';

import Contact from './Contact';
import { ContactProp } from '../ContactProps';

const Letter = styled.p`
  text-transform: uppercase;
  margin-left: 1em;
`;

const ContactList = ({ className, items, selectedContact, push }) => (
  <List className={className}>
    {Object.keys(items).map(letter => (
      <React.Fragment key={`letter-${letter}`}>
        <Divider component="li" variant="inset" />
        <li>
          <Letter>{letter}</Letter>
        </li>

        {items[letter].map(contact => (
          <Contact
            key={contact.id}
            {...contact}
            selected={contact.id === selectedContact}
            onClick={() => push(`/${contact.id}`)}
          />
        ))}
      </React.Fragment>
    ))}
  </List>
);

ContactList.defaultProps = {
  selectedContact: '',
  items: {},
};

ContactList.propTypes = {
  selectedContact: PropTypes.string,
  className: PropTypes.string.isRequired,
  items: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.shape(ContactProp))),
  push: PropTypes.func.isRequired,
};

export default styled(ContactList)`
  margin-top: 0.5rem;

  @media (${({ theme }) => theme['--screen-medium']}) {
    width: 32rem;
  }
`;
