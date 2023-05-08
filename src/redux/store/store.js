import {
  legacy_createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from 'redux';
import { logger } from '../middleware/logger';

import thunk from 'redux-thunk';

let allReducers = combineReducers({});

const composeEnhancers =
  (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

export const store = legacy_createStore(
  allReducers,
  composeEnhancers(applyMiddleware(thunk))
);
