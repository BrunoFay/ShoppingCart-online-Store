import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import headerContext from '../context/headerContext';
import { BsSearch } from 'react-icons/bs';
import { RiShoppingCartLine } from 'react-icons/ri';

export default function HeaderPages() {
  const {
    headerStates,
    handleKeyDown,
    handleChange,
    handleClick, } = useContext(headerContext)
  const { searchInput,itensInCart } = headerStates;
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
       <BsSearch className='search-button' onClick={handleClick}/>
      </div>
      <nav className='cart'>
        <Link
          to="/shopping-cart"
          type="submit"
          data-testid="shopping-cart-button"

        >
          {itensInCart && itensInCart.length} 
          <RiShoppingCartLine />
        </Link>

      </nav>
    </header>
  )
}
