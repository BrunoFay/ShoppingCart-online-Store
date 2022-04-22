import React from 'react';
import AddCartButton from '../buttons/AddCartButton';
import ProductsCard from '../products/ProductsCard';

export default function HomecardContainer({searchResult}) {
  return (
    <>
      {
      searchResult.map((product, index) => (
        <div key={index}
          className='products-container'>
          <ProductsCard
            product={product}
          />
          <AddCartButton product={product} />

        </div>
      ))
      }
    </>
  )
}
