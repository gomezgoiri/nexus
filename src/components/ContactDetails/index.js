import { connect } from 'react-redux';
import { utils as layout } from '../../ducks/layout';
import { utils as router } from '../../ducks/router';
import ContactDetails from './ContactDetails';

const mapStateToProps = state => ({
  collapsed: layout.isCollapsed(state),
  contactId: router.getPathParams(state, '/:id').id,
});

export default connect(mapStateToProps)(ContactDetails);
