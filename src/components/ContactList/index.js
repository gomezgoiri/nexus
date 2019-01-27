import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { push } from 'connected-react-router';

import { utils as router } from '../../ducks/router';
import ContactList from './ContactList';

const mapStateToProps = state => ({
  selectedContact: router.getPathParams(state, '/:id').id,
});

const mapDispatchToProps = dispatch => bindActionCreators({ push }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ContactList);
