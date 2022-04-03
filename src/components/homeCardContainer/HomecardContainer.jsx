import React from 'react'
import ProductsCard from '../products/ProductsCard';
import AddCartButton from '../buttons/AddCartButton';
export default function HomecardContainer({searchResult}) {
  return (
    <>
      {
      searchResult.map((product, index) => (
        <div key={index}
          data-testid="product"
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
