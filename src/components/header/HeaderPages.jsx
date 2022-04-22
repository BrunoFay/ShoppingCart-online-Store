import React, { useContext, useEffect } from 'react';
import { BsSearch } from 'react-icons/bs';
import { IoHomeOutline } from 'react-icons/io5';
import { RiShoppingCartLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import headerContext from '../../context/headerContext';
import productDetailsContext from '../../context/productDetailsContext';
import CategoriesList from './CategoriesList';
import './headerPages.css';


function HeaderPages() {
  const {
    headerStates: { searchInput },
    handleKeyDown,
    handleChange,
    handleClick,
    labelCLick
  } = useContext(headerContext)

  const { getLocalStorage } = useContext(productDetailsContext)

  useEffect(() => {
    getLocalStorage()
  }, [])





  return (
    <header className='responsive-header'>
      <h1>ShoppingCart</h1>
      <div className='searchDiv'>
        <nav className='link-home'>
          <Link
            to="/"
            type="submit"

          >
            <IoHomeOutline />
          </Link>

        </nav>
        <section className='searchSection'>
          <input
            value={searchInput}
            onChange={handleChange}
            name="searchInput"
            onKeyPress={(e) => handleKeyDown(e)}
          />
          <BsSearch className='search-button' onClick={handleClick} />
        </section>
        <nav className='headers-links'>
          <Link
            to="/"
          >
            Home
          </Link>
          <CategoriesList labelCLick={labelCLick} />
          <Link
            to="/shopping-cart"
            type="submit">

          </Link>
        </nav>
      </div>
      <nav className='cart'>
        <Link
          to="/shopping-cart"
          type="submit"
        >
          <RiShoppingCartLine />
        </Link>
        <div className='profileAndContact-container'>
        <Link
          to="/profile"
          type="submit"
        >
          Perfil
        </Link>
        <Link
          to="/contacts"
          type="submit"
        >
          Contatos
        </Link>
        </div>
      </nav>
    </header >
  )
}


export default HeaderPages