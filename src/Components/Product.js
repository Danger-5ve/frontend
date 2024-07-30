import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProductById } from '../utils/api';

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const getProduct = async () => {
      const fetchedProduct = await fetchProductById(id);
      setProduct(fetchedProduct);
    };
    getProduct();
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>${product.price}</p>
    </div>
  );
};

export default Product;
