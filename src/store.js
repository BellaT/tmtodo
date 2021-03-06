import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import rootReducer from './reducers';

/* eslint-disable no-underscore-dangle */
const composeEnhancers =
  (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  composeWithDevTools;
/* eslint-enable no-underscore-dangle */

const middleware = applyMiddleware(thunk);

export default createStore(rootReducer, composeEnhancers(middleware));
