import { applyMiddleware, compose, createStore } from 'redux';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import createRootReducer from './rootReducer';

export const history = createBrowserHistory();

const configureStore = () => {
  // Compose final middleware and use devtools in debug environment
  let middleware = applyMiddleware(routerMiddleware(history));

  // eslint-disable-next-line no-underscore-dangle
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;
  if (process.env.NODE_ENV === 'development' && devToolsExtension) {
    middleware = compose(
      middleware,
      devToolsExtension(),
    );
  }

  // Create final store and subscribe router in debug env ie. for devtools
  return createStore(createRootReducer(history), middleware);
};

// eslint-disable-next-line no-underscore-dangle
const initialState = window.__INITIAL_STATE__ || {};
const store = configureStore(initialState);

export { store };
