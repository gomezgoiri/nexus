import React from 'react';
import PropTypes from 'prop-types';

import Drawer from '../Drawer';
import ContactList from '../ContactList';
import Layout from '../Layout';
import StatusBar from '../StatusBar';

import Contacts from '../../services/contacts';

class AddressBook extends Layout {
  static propTypes = {
    ...Layout.propTypes,
    className: PropTypes.string,
    collapsed: PropTypes.bool,
    onToggleCollapse: PropTypes.func,
  };

  state = { contacts: [] };

  async componentDidMount() {
    this.setState({ contacts: await Contacts.read() });
  }

  render() {
    const { collapsed, onToggleCollapse } = this.props;
    const { contacts } = this.state;

    const element = super.render();

    if (!element) {
      return null;
    }

    return (
      <div>
        <StatusBar onToggleCollapse={onToggleCollapse} collapsed={collapsed} />
        <Drawer open={!collapsed} top="64px">
          <ContactList items={contacts} />
        </Drawer>
        <main>{element}</main>
      </div>
    );
  }
}

export default AddressBook;
