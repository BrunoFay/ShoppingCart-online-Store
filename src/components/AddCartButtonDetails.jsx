import React from 'react';
import PropTypes from 'prop-types';

export default function AddCartButtonDetails ({result}) {

 const handleClick = () => {
    let arrayItenstoLS = [];
    const getLocal = localStorage.getItem('shoppingCart');
    if (getLocal) {
      arrayItenstoLS = (JSON.parse(localStorage.getItem('shoppingCart')));
    }
    arrayItenstoLS.push(result);
    localStorage.setItem('shoppingCart', JSON.stringify(arrayItenstoLS));
  }

    return (
      <button
        type="button"
        data-testid="product-detail-add-to-cart"
        onClick={ handleClick }
      >
        Adicionar ao Carrinho
      </button>
    );
}

AddCartButtonDetails.propTypes = {
  result: PropTypes.object,
}.isRequired;
