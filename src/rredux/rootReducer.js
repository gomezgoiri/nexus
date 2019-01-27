import { combineReducers } from 'redux';

import { connectRouter } from 'connected-react-router';
import * as layout from '../ducks/layout';
import * as router from '../ducks/router';

export default history =>
  combineReducers({
    [layout.constants.NAME]: layout.reducer,
    [router.constants.NAME]: connectRouter(history),
  });
