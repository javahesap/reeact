import React from 'react';
import ReactDOM from 'react-dom/client'; // ✅ React 18 uyumlu import
import { Provider } from 'react-redux';
import { store } from './store';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')); // ✅ createRoot kullanılıyor
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
