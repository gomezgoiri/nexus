import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Provider } from 'react-redux';
import { ConnectedRouter as Router } from 'connected-react-router';
import { Route } from 'react-router-dom';

import { store, history } from '../rredux';
import AddressBook from './AddressBook';
import ContactDetails from './ContactDetails';
import Empty from './Empty';
import Theme from './Theme';

// Just to avoid RR's annoying PropType error
const wrapStyledComponent = Component => p => <Component {...p} />;

const App = () => (
  <Provider store={store}>
    <Router history={history}>
      <Theme>
        <AddressBook>
          <Route path="/:id" component={wrapStyledComponent(ContactDetails)} />
          <Route component={wrapStyledComponent(Empty)} />
        </AddressBook>
      </Theme>
    </Router>
  </Provider>
);

export default hot(App);
