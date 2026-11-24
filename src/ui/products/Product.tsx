import React from 'react'
import products from '../../data/ProductData'
import ProductCard from '../components/ProductCard';

export default function Product() {

  const productList = products.products;

  return (
    <div>
      {productList.map((product) => (
       <ProductCard
        
         product={product}
       /> 
      ))}
    </div>
  )
}
