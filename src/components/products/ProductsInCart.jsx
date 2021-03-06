import PropTypes from 'prop-types';
import React, { useContext, useEffect, useState } from 'react';
import productDetailsContext from '../../context/productDetailsContext';
import ButtonsQuantity from '../buttons/ButtonsQuantity';
import ProductsCard from './ProductsCard';
import './productsInCart.css';
import { INITIAL_STATE_PRODUCTSINCART } from '../../services/constants';

export default function ProductsInCart({ product, countI, removeItens }) {
  const [productsInCart, setProductsInCart] = useState(INITIAL_STATE_PRODUCTSINCART)
  const { countItens, buttonDisable } = productsInCart;
  const { price, available_quantity: quantity } = product
  const { addCartItensToLocalStorage } = useContext(productDetailsContext)

  const countProducts = (value) => {
    if (value === '+') {
      setProductsInCart(((prevState) => ({
        ...prevState,
        countItens: prevState.countItens + 1,
      })), updateButtonDisable);
      addCartItensToLocalStorage(product)
    }
    if (value === '-' && countItens > 1) {
      setProductsInCart((prevState) => ({
        ...prevState,
        countItens: prevState.countItens - 1,
      }));
    }
  }

  const updateButtonDisable = () => {
    if (countItens >= quantity) {
      setProductsInCart((prevState) => ({
        ...prevState,
        buttonDisable: true
      }));
    }
  }

  const updateState = () => {
    setProductsInCart((prevState) => ({
      ...prevState,
      countItens: countI,
    }));
  }
  useEffect(() => {
    updateState();
  }, [])

  return (
    < >
      <div className='products-container' id={product.id} >
        <ProductsCard
          product={product}
        />
        <div className='buttons-quantity'>
          <div>
            <ButtonsQuantity
              countProducts={countProducts}
              value="-" />
            <span
              data-testid="shopping-cart-product-quantity"
            >
              <span className='price-item'>  R$ {(countItens * price).toFixed(2)}
              </span>

            </span>
            <ButtonsQuantity
              countProducts={countProducts}
              value="+"
              buttonDisable={buttonDisable} />

          </div>

        </div>
      </div>
      <button
        type="button"
        onClick={(e) => removeItens(e)}
        className='remove-cart-item'>
        x
      </button>
    </>
  );
}
ProductsInCart.propTypes = {
  result: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
  }),
}.isRequired;
