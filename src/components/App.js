import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Route } from 'react-router-dom';

import AddressBook from './AddressBook';
import ContactDetails from './ContactDetails';
import Empty from './Empty';
import Router from './Router';
import Theme from './Theme';

// Just to avoid RR's annoying PropType error
const wrapStyledComponent = Component => p => <Component {...p} />;

const App = () => (
  <Router>
    <Theme>
      <AddressBook>
        <Route path="/:id" component={wrapStyledComponent(ContactDetails)} />
        <Route component={wrapStyledComponent(Empty)} />
      </AddressBook>
    </Theme>
  </Router>
);

export default hot(App);
