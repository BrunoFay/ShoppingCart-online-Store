import React from 'react';
import PropTypes from 'prop-types';
import './productsCard.css';
export default function ProductsCard({ product }) {

  /* chance the name for products card colocar o state do details no contex*/

  const {
    shipping: { free_shipping: freeShipping },
    title,
    thumbnail,
    price,
    id } = product;

  return (
    <div className='card-container'>
      <div>
        <img
          className='image-card'
          loading='lazy'
          src={thumbnail}
          alt={title}
          id={id} />
      </div>
      <div className='card-infos'>
        <span className='title-product title-product-all'
        >{title}</span>
        <span className='product-price'>
          {`R$ ${price}`}
        </span>
        {
          freeShipping && <span
            className='freeShipping'
            data-testid='free-shipping'>Frete Grátis</span>
        }
      </div>
    </div>
  );

}
ProductsCard.propTypes = {
  title: PropTypes.string,
  thumbnail: PropTypes.string,
  price: PropTypes.number,
}.isRequired;
