import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import productDetailsContext from '../../context/productDetailsContext';
import './productsCard.css';
export default function ProductsCard({ product }) {

  /* chance the name for products card colocar o state do details no contex*/
  const { setProductStates } = useContext(productDetailsContext)
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
        <div>
          <span className='product-price'>
            {`R$ ${price}`}
          </span>
          {freeShipping && <span
            className='freeShipping'
            data-testid='free-shipping'>Frete Grátis</span>}
        </div>
        <div>
          <Link
            to='/product-details'
            onClick={() => setProductStates((prevState) => ({ ...prevState, productDetail: product }))}
          >
            Detalhes
          </Link>
        </div>
      </div>
    </div>
  );

}
ProductsCard.propTypes = {
  title: PropTypes.string,
  thumbnail: PropTypes.string,
  price: PropTypes.number,
}.isRequired;
