import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import productDetailsContext from '../../context/productDetailsContext';

export default function AddCartButtonDetails() {
  const {
    productStates: { productDetail },
    addCartItensToLocalStorage } = useContext(productDetailsContext)

  return (
    <button
      type="button"
      data-testid="product-detail-add-to-cart"
      onClick={addCartItensToLocalStorage(productDetail)}
    >
      Adicionar ao Carrinho
    </button>
  );
}

AddCartButtonDetails.propTypes = {
  result: PropTypes.object,
}.isRequired;
