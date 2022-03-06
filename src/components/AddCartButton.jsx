import React from 'react';
import PropTypes from 'prop-types';
import {
  addLocalStorage,
  loadLocalStorage
} from '../localStorage'

export default function AddCartButton({ result }) {


  const handleClick = () => {
    let arr = [];
    const getLocal = loadLocalStorage('shoppingCart');
    if (getLocal) {
      arr = loadLocalStorage('shoppingCart');
    }
    arr.push(result);
    addLocalStorage('shoppingCart', arr);
  }


  return (
    <>
      <button
        type="button"
        data-testid="product-add-to-cart"
        onClick={handleClick}
      >
        Comprar 🛒
      </button>
    </>
  );

}

AddCartButton.propTypes = {
  result: PropTypes.object,
}.isRequired;
