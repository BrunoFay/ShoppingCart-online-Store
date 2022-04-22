import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { RiShoppingCartLine } from 'react-icons/ri';
import productDetailsContext from '../../context/productDetailsContext';

function AddCartButton({ product }) {
  const {
    addCartItensToLocalStorage,
    setProductStates,
    productStates: { itensInCart },
  } = useContext(productDetailsContext);

  const handleClick = () => {
    addCartItensToLocalStorage(product)

    setProductStates((prevState) => ({
      ...prevState,
      itensInCart
    }));
  }


  return (
    <>
      <button
        type="button"
        onClick={handleClick}
      >
        <RiShoppingCartLine className='cart-logo' />
      </button>
    </>
  );

}
export default AddCartButton;
AddCartButton.propTypes = {
  product: PropTypes.object,
}.isRequired;
