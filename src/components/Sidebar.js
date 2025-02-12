import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Dashboard</h2>
      <ul>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/users">Users</Link></li>
      </ul>
    </div>
  );
}

export default Sidebar;
