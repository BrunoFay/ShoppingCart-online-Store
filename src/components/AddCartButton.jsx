import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { addLocalStorage, loadLocalStorage } from '../services/localStorage'
import { RiShoppingCartLine } from 'react-icons/ri';
import headerContext from '../context/headerContext';




export default function AddCartButton({ product }) {
  const { getLocalStorage } = useContext(headerContext);
  const addCartItensToLocalStorage = () => {
    let arrayCartItens = [];
    const getLocal = loadLocalStorage('shoppingCart');
    if (getLocal) {
      arrayCartItens = loadLocalStorage('shoppingCart');
    }
    arrayCartItens.push(product);
    addLocalStorage('shoppingCart', arrayCartItens);

  }
  const handleClick = () => {
    addCartItensToLocalStorage()
  }
  useEffect(() => {
    getLocalStorage()
  }, [handleClick])


  return (
    <>
      <button
        type="button"
        data-testid="product-add-to-cart"
        onClick={handleClick}
      >
        <RiShoppingCartLine className='cart-logo' />
      </button>
    </>
  );

}

AddCartButton.propTypes = {
  product: PropTypes.object,
}.isRequired;
