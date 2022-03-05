import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Products from './Products';

export default function ProductsInCart({
  title,
  thumbnail,
  price,
  result,
  removeItens,
  id,
  result: { available_quantity: quantity },
  countI,

}) {
  const [productsInCart, setProductsInCart] = useState({
    total: 0,
    countItens: 1,
    buttonDisable: false,
  })
  const { countItens, buttonDisable } = productsInCart;


  useEffect(() => {
    updateState();
  }, [])


  // referencia https://stackoverflow.com/questions/55495198/reacts-setstate-method-with-prevstate-argument/55496277
  const countProducts = (value) => {

    if (value === '+') {
      setProductsInCart(((prevState) => ({
        countItens: prevState.countItens + 1,
      })), updateButtonDisable);
    }
    if (value === '-' && countItens > 1) {
      setProductsInCart((prevState) => ({

        countItens: prevState.countItens - 1,
      }));
    }
  }

  const updateButtonDisable = () => {
    if (countItens >= quantity) {
      setProductsInCart({ buttonDisable: true });
    }
  }

  const updateState = () => {
    setProductsInCart({
      countItens: countI,
    });
  }


  return (
    <main className='products-incart'>
      <div className='products-container' >
        <Products
          title={title}
          thumbnail={thumbnail}
          price={(price)}
          result={result}
          id={id}
        />
      </div>
      <div className='buttons-quantity'>
        <div>
          <button
            className='quantity'
            value="-"
            data-testid="product-decrease-quantity"
            type="button"
            onClick={() => countProducts('-')}
          >
            -
          </button>

          <span
            data-testid="shopping-cart-product-quantity"
          >
            {countItens}
          </span>
          <button
            className='quantity'
            value="+"
            data-testid="product-increase-quantity"
            type="button"
            onClick={() => countProducts('+')}
            disabled={buttonDisable}
          >
            +
          </button>
        </div>

        <span className='price-item'>  R$ {(countItens * price).toFixed(2)}</span>
      </div>
      <button type="button" onClick={removeItens} className='remove-cart-item'>x</button>

    </main>
  );

}
ProductsInCart.propTypes = {
  result: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
  }),
}.isRequired;
