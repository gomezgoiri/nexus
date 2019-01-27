import * as c from './constants';
import * as t from './actionTypes';

const initState = {
  collapsed: false,
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case t.TOGGLE_COLLAPSED:
      return { collapsed: !state.collapsed };

    default:
  }

  return state;
};

export default reducer;

// Selector
const getSelector = state => state[c.NAME];

const isCollapsed = state => getSelector(state).collapsed;

export { isCollapsed };
