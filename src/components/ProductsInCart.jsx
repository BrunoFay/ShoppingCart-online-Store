import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ProductsCard from './ProductsCard';
import ButtonsQuantity from './ButtonsQuantity';

const INITIAL_STATE = {
  total: 0,
  countItens: 1,
  buttonDisable: false,
}
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
  const [productsInCart, setProductsInCart] = useState(INITIAL_STATE)
  const { countItens, buttonDisable } = productsInCart;


  useEffect(() => {
    updateState();
  }, [])


  // referencia https://stackoverflow.com/questions/55495198/reacts-setstate-method-with-prevstate-argument/55496277
  const countProducts = (value) => {

    if (value === '+') {
      setProductsInCart(((prevState) => ({
        ...prevState,
        countItens: prevState.countItens + 1,
      })), updateButtonDisable);
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


  return (
    <main className='products-incart'>
      <div className='products-container' >
        <ProductsCard
          title={title}
          thumbnail={thumbnail}
          price={(price)}
          result={result}
          id={id}
        />
      </div>
      <div className='buttons-quantity'>
        <div>
         <ButtonsQuantity 
         countProducts={countProducts}
         value="-"/>
          <span
            data-testid="shopping-cart-product-quantity"
          >
            {countItens}
          </span>
          <ButtonsQuantity 
         countProducts={countProducts}
         value="+"
         buttonDisable={buttonDisable}/>
         
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
