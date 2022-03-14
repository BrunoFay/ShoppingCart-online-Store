import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import productDetailsContext from '../context/productDetailsContext';

export default function ProductsCard({ title, thumbnail, price, result, id }) {

  /* chance the name for products card colocar o state do details no contex*/
  const { product, setProduct } = useContext(productDetailsContext)
  const { shipping: { free_shipping: freeShipping } } = result;

  return (
    <>
      <img className='image-card' loading='lazy' src={thumbnail} alt={title} id={id} />
      <span className='product-price'>

        {`R$ ${price}`}
      </span>
      {freeShipping && <span
        className='freeShipping'
        data-testid='free-shipping'>Frete Grátis</span>}
      <span className='title-product title-product-all'>{title}</span>
      <Link
        to='/product-details'
        onClick={() => setProduct(result)}
      >
        Detalhes
      </Link>
    </>
  );

}
ProductsCard.propTypes = {
  title: PropTypes.string,
  thumbnail: PropTypes.string,
  price: PropTypes.number,
}.isRequired;
