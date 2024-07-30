import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../utils/api';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const products = await fetchProducts();
      setProducts(products);
    };
    getProducts();
  }, []);

  return (
    <div>
      <h1>Home</h1>
      <div>
        {products.map(product => (
          <div key={product._id}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
