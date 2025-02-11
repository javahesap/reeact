import { createStore, combineReducers } from 'redux';
import { productsReducer } from './productsReducer';
import { usersReducer } from './usersReducer';

const rootReducer = combineReducers({
  products: productsReducer,
  users: usersReducer,
});

export const store = createStore(rootReducer);
