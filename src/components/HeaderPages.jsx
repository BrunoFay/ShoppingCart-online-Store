import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import headerContext from '../context/headerContext';

export default function HeaderPages({ cart }) {
  const {
    headerStates,
    handleKeyDown,
    handleChange,
    handleClick, } = useContext(headerContext)
  const { searchInput } = headerStates;
  return (
    <header>
      <h1>shoppingCart</h1>
      <div className='searchDiv'>
        <input
          data-testid="query-input"
          value={searchInput}
          onChange={handleChange}
          name="searchInput"
          onKeyPress={(e) => handleKeyDown(e)}
        />
        <button
          type="submit"
          data-testid="query-button"
          onClick={handleClick}
        >
          🔍
        </button>
      </div>
      <nav className='cart'>
        <Link
          to="/shopping-cart"
          type="submit"
          data-testid="shopping-cart-button"

        >
          {cart && cart.length} 🛒
        </Link>

      </nav>
    </header>
  )
}
