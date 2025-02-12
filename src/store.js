import { createStore, applyMiddleware, combineReducers } from 'redux';
import { thunk } from 'redux-thunk';  // Named import olarak düzeltildi
import { productsReducer } from './store/productsReducer';
import { usersReducer } from './store/usersReducer';
import { reposReducer } from './store/reposReducer';
const rootReducer = combineReducers({
  products: productsReducer,
  users: usersReducer,
  repos: reposReducer,
});

export const store = createStore(
  rootReducer,
  applyMiddleware(thunk) // Doğru şekilde referans veriliyor
);