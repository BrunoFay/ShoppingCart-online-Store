import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import {
  addLocalStorage,
  loadLocalStorage
} from '../services/localStorage'
import { RiShoppingCartLine } from 'react-icons/ri';
import headerContext from '../context/headerContext';


export default function AddCartButton({ result }) {

  const { setheaderStates, headerStates } = useContext(headerContext)

  const addCartItensToLocalStorage = () => {
    let arrayCartItens = [];
    const getLocal = loadLocalStorage('shoppingCart');
    if (getLocal) {
      arrayCartItens = loadLocalStorage('shoppingCart');
    }
    arrayCartItens.push(result);
    addLocalStorage('shoppingCart', arrayCartItens);

  }
  const handleClick = () => {
    addCartItensToLocalStorage()  
  }


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
  result: PropTypes.object,
}.isRequired;
