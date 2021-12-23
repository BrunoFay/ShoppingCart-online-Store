import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class Products extends Component {
  render() {
    const { title, thumbnail, price, result,id } = this.props;
    const { shipping: { free_shipping: freeShipping } } = result;
    return (
      <>
        <img className='image-card' src={ thumbnail } alt={ title } id={id} />
        <span className='product-price'>
          
          {`R$ ${price}`}
        </span>
        {freeShipping && <span 
        className='freeShipping'
        data-testid="free-shipping">Frete Grátis</span>}
        <span className='title-product title-product-all'>{title}</span>
        <Link
          to={ { pathname: '/product-details', state: result } }
          data-testid="product-detail-link"
        >
          Detalhes
        </Link>
      </>
    );
  }
}
Products.propTypes = {
  title: PropTypes.string,
  thumbnail: PropTypes.string,
  price: PropTypes.number,
}.isRequired;
