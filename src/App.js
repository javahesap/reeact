import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import ProductsPage from './pages/ProductsPage';
import UsersPage from './pages/UsersPage';
import RepoPage from './pages/RepoPage';
import Greeting from './components/Greeting.js';
import Merhaba from './components/Merhaba.js';
import './App.css';

function App() {
  return (
    <Router>
      <div className="dashboard">
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/users" element={<UsersPage />} />
            <Route path="/repo" element={<RepoPage />} />
            <Route path="/funtionalcomponet" element={<Greeting name="beşir" />} />     
            <Route path="/classcomponet" element={<Merhaba name="beşir" />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
