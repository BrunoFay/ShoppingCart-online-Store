import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AddCartButton extends Component {
  constructor() {
    super();
    this.state = {
    };
  }

  handleClick = () => {
    const { result } = this.props;
    let arr = [];
    const getLocal = localStorage.getItem('shoppingCart');
    if (getLocal) {
      arr = (JSON.parse(localStorage.getItem('shoppingCart')));
    }
    arr.push(result);
    localStorage.setItem('shoppingCart', JSON.stringify(arr));
  }

  render() {
    return (
      <>
        <button
          type="button"
          data-testid="product-add-to-cart"
          onClick={ this.handleClick }
        >
         Comprar 🛒
        </button>
      </>
    );
  }
}

AddCartButton.propTypes = {
  result: PropTypes.object,
}.isRequired;
