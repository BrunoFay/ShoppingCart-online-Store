import React from 'react';
import PropTypes from 'prop-types';

export default function AddCartButton({ result }) {


  const handleClick = () => {
    let arr = [];
    const getLocal = localStorage.getItem('shoppingCart');
    if (getLocal) {
      arr = (JSON.parse(localStorage.getItem('shoppingCart')));
    }
    arr.push(result);
    localStorage.setItem('shoppingCart', JSON.stringify(arr));
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
