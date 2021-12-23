import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AddCartButtonDetails extends Component {
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
      <button
        type="button"
        data-testid="product-detail-add-to-cart"
        onClick={ this.handleClick }
      >
        Adicionar ao Carrinho
      </button>
    );
  }
}

AddCartButtonDetails.propTypes = {
  result: PropTypes.object,
}.isRequired;
