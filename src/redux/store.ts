// store.ts

import { createStore, combineReducers, applyMiddleware, Store } from 'redux';
import thunk from 'redux-thunk';
import { AuthState } from './reducers/authReducer';
import authReducer from './reducers/authReducer';

const rootReducer = combineReducers({
  auth: authReducer,
});

const store: Store<{ auth: AuthState }> = createStore(rootReducer, applyMiddleware(thunk));

export default store;
