import { createStore, applyMiddleware, combineReducers } from 'redux';
import { thunk } from 'redux-thunk';  // Named import olarak düzeltildi
import { productsReducer } from './store/productsReducer';
import { usersReducer } from './store/usersReducer';

const rootReducer = combineReducers({
  products: productsReducer,
  users: usersReducer,
});

export const store = createStore(
  rootReducer,
  applyMiddleware(thunk) // Doğru şekilde referans veriliyor
);