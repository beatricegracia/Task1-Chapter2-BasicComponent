import React from 'react';
import { useParams } from 'react-router-dom';


export const ProductDetailPage = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Product Detail</h1>
      
      <p>Product ID: {id}</p>
    </div>
  );
};

export default ProductDetailPage;
