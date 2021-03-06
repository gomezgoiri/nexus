import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Drawer from '../Drawer';
import ContactList from '../ContactList';
import Layout from '../Layout';
import StatusBar from '../StatusBar';

import { getFilteredContactsByInitialLetter } from './utils';
import Contacts from '../../services/contacts';

const Main = styled.main`
  ${({ zIndex = 1 }) => `z-index: ${zIndex};`};
`;

class AddressBook extends Layout {
  static propTypes = {
    ...Layout.propTypes,
    className: PropTypes.string,
    collapsed: PropTypes.bool,
    onToggleCollapse: PropTypes.func,
  };

  state = { contacts: [] };

  async componentDidMount() {
    const contacts = await Contacts.read();
    const sortedContacts = contacts.sort((aContact, bContact) => {
      const a = `${aContact.name.first} ${aContact.name.last}`;
      const b = `${bContact.name.first} ${bContact.name.last}`;

      if (a < b) {
        return -1;
      }
      return a > b ? 1 : 0;
    });

    this.setState({
      contacts: sortedContacts,
      filteredContacts: getFilteredContactsByInitialLetter(sortedContacts),
    });
  }

  filterContacts = searchText => {
    if (this.state.contacts && this.state.contacts.length > 0) {
      this.setState(prevState => ({
        filteredContacts: getFilteredContactsByInitialLetter(
          prevState.contacts,
          searchText,
        ),
      }));
    }
  };

  render() {
    const { collapsed, onToggleCollapse } = this.props;
    const { filteredContacts } = this.state;

    const element = super.render();

    if (!element) {
      return null;
    }

    return (
      <div>
        <StatusBar
          onToggleCollapse={onToggleCollapse}
          collapsed={collapsed}
          onSearch={this.filterContacts}
        />
        <Drawer open={!collapsed} top="64px" zIndex={10}>
          <ContactList items={filteredContacts} />
        </Drawer>
        <Main zIndex={9}>{element}</Main>
      </div>
    );
  }
}

export default AddressBook;
