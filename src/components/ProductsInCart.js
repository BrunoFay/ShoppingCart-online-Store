import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Products from './Products';

export default class ProductsInCart extends Component {
  constructor() {
    super();
    this.state = {  
      total:0,
      countItens: 1,
      buttonDisable: false,
    };
  }
  
  componentDidMount() {
    this.updateState();
  }

  // referencia https://stackoverflow.com/questions/55495198/reacts-setstate-method-with-prevstate-argument/55496277
    countProducts =(value) => {
      const { countItens } = this.state;
  
      if (value === '+') {
        this.setState(((prevState) => ({
          countItens: prevState.countItens + 1,
        })), this.updateButtonDisable);
      }
      if (value === '-' && countItens > 1) {
        this.setState((prevState) => ({
         
          countItens: prevState.countItens - 1,
        }));
      }
    }

    updateButtonDisable = () => {
      const { result: { available_quantity: quantity } } = this.props;
      const { countItens } = this.state;
      if (countItens >= quantity) {
        this.setState({ buttonDisable: true });
      }
    }

      updateState = () => {
        const { countI } = this.props;
        this.setState({
          countItens: countI,
        });
      }

      render() {
        const { title, thumbnail, price, result,removeItens,id } = this.props;
        const { countItens, buttonDisable } = this.state;
        return (
          <main className='products-incart'>
           <div className='products-container' >
              <Products
                title={ title }
                thumbnail={ thumbnail }
                price={ (price) }
                result={ result }
                id={id}
              />
           </div>
         <div className = 'buttons-quantity'>
             <div>
             <button
                className='quantity'
                  value="-"
                  data-testid="product-decrease-quantity"
                  type="button"
                  onClick={ () => this.countProducts('-') }
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
                  onClick={ () => this.countProducts('+') }
                  disabled={ buttonDisable }
                >
                  +
                </button>
              </div>
              
            <span className='price-item'>  R$ {(countItens*price).toFixed(2)}</span>
         </div>
            <button type="button" onClick={removeItens} className='remove-cart-item'>x</button>
           
          </main>
        );
      }
}
ProductsInCart.propTypes = {
  result: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
  }),
}.isRequired;
