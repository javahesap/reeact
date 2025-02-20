import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import ProductsPage from './pages/ProductsPage';
import UsersPage from './pages/UsersPage';
import RepoPage from './pages/RepoPage';
import Greeting from './components/Greeting.js';
import Merhaba from './components/Merhaba.js';
//import Modal from './components/Modal';
import Counter from './components/Counter.js';
import Useeffectornek from './components/Useeffectkullanim';
import Listloop from './components/listloop.js';
import Listloop2 from './components/listloop2.js';
import Game2048 from './components/Game2048.js';
import MemoryGame from './components/MemoryGame.js';
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
            <Route path="/stateornek" element={<Counter  />} />
            <Route path="/useeffectornek" element={<Useeffectornek  />} />
            <Route path="/listeleme" element={<Listloop  />} />
            <Route path="/listeleme2" element={<Listloop2  />} />
            <Route path="/oyun" element={<MemoryGame  />} />
            <Route path="/game2048" element={<Game2048  />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
