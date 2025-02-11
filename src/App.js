import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, fetchUsers } from './store/actions';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const loading = useSelector((state) => state.products.loading);
  const users = useSelector((state) => state.users.users);
  const usersLoading = useSelector((state) => state.users.loading);

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div className="App">
      <h1>Dashboard</h1>

      <h2>Products</h2>
      {loading ? (
        <p>Loading products...</p>
      ) : (
        <div className="products-list">
          {products.map((product) => (
            <div key={product._id} className="product-card">
              <img src={product.image} alt={product.title} />
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <p>Price: ${product.price}</p>
            </div>
          ))}
        </div>
      )}

      <h2>Users</h2>
      {usersLoading ? (
        <p>Loading users...</p>
      ) : (
        <div className="users-list">
          {users.map((user) => (
            <div key={user.id} className="user-card">
              <img src={user.image} alt={user.firstName} />
              <h3>{user.firstName} {user.lastName}</h3>
              <p>Email: {user.email}</p>
              <p>Phone: {user.phone}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
