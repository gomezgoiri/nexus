import { connect } from 'react-redux';
import * as layout from '../../ducks/layout';
import AddressBook from './AddressBook';

const mapStateToProps = state => ({
  collapsed: layout.utils.isCollapsed(state),
});

const mapDispatchToProps = dispatch => ({
  onToggleCollapse: () => {
    dispatch(layout.actions.toggleCollapse());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddressBook);
