import React from 'react';
import { useSelector } from 'react-redux';
import withLoading from '../hoc/withLoading';
import { fetchProducts } from '../store/actions';

function ProductsPage() {
  const products = useSelector((state) => state.products.products);

  return (
    <div>
      <h2>Products</h2>
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
    </div>
  );
}

// ✅ HOC'u fetchProducts ile birlikte kullan
export default withLoading(ProductsPage, fetchProducts, (state) => state.products);
