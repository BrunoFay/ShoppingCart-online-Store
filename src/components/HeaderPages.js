import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class HeaderPages extends Component {
  render() {
    const {cart}=this.props
    return (
      <nav className='nav-home-link'>
      <h1 id='title-out-main'>shoppingCart</h1>
      <Link to='/' >
        Home
      </Link>
      <Link
            to="/shopping-cart"
            type="submit"
            data-testid="shopping-cart-button"
            
          >
         {cart && cart.length} 🛒
          </Link>
      
    </nav>
    )
  }
}
