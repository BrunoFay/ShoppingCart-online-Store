import React from 'react';
import PropTypes from 'prop-types';
import {
  addLocalStorage,
  loadLocalStorage
} from '../localStorage'

export default function AddCartButtonDetails({ result }) {

  const handleClick = () => {
    let arrayItenstoLS = [];
     arrayItenstoLS = loadLocalStorage('shoppingCart');
    arrayItenstoLS.push(result);
    addLocalStorage('shoppingCart', arrayItenstoLS);
  }

  return (
    <button
      type="button"
      data-testid="product-detail-add-to-cart"
      onClick={handleClick}
    >
      Adicionar ao Carrinho
    </button>
  );
}

AddCartButtonDetails.propTypes = {
  result: PropTypes.object,
}.isRequired;
