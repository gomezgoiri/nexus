import { matchPath } from 'react-router';
import * as c from './constants';

const getSelector = state => state[c.NAME];

const getCurrentPath = state => getSelector(state).location.pathname;
const getPathParams = (state, pathEx) => {
  const match = matchPath(getCurrentPath(state), { path: pathEx });
  return match ? match.params : {};
};

export { getCurrentPath, getPathParams };
