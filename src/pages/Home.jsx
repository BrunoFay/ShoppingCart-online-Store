import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Products from '../components/Products';
import { getProductsFromCategoryAndQuery } from '../services/api';
import CategoriesList from '../components/CategoriesList';
import AddCartButton from '../components/AddCartButton';
import Footer from '../components/Footer';
import Loading from '../components/Loading';

const INITIAL_STATE = {
  searchInput: '',
  searchResult: [],
  buttonClicked: false,
  loading: false
}
export default function Home() {
  const [searchStates, setSearchStates] = useState(INITIAL_STATE)
  const { searchInput, searchResult, buttonClicked, loading } = searchStates;

  useEffect(() => {
    checkButtonState()
  }, [searchInput])


  const handleClick = async () => {
    await getProductsFromCategoryAndQuery('', searchInput)
      .then((data) => setSearchStates(prevState => ({
        ...prevState,
        searchResult: data.results,
        buttonClicked: true,
      })));
  }

  const handleChange = ({ target }) => {
    const { name } = target;

    setSearchStates(prevState => ({
      ...prevState,
      [name]: target.value,
    }));
  }

  const labelCLick = async ({ target }) => {
    clearListResult();
    setSearchStates(prevState => ({ ...prevState, loading: true }))
    await getProductsFromCategoryAndQuery(target.id, '')
      .then((data) => setSearchStates(prevState => ({
        ...prevState,
        searchResult: data.results,
        loading: false
      })))
  }

  const clearListResult = () => {
    setSearchStates(prevState => ({ ...prevState, searchResult: [] }));
  }

  const checkButtonState = () => {
    if (searchInput === '') {
      setSearchStates(prevState => ({
        ...prevState,
        buttonClicked: false,
      }))
    }
  }

  const loadingCheck = loading ? <Loading /> : searchResult.map((result, index) => (
    <div key={index}
      data-testid="product"
      className='products-container'>
      <Products
        title={result.title}
        thumbnail={result.thumbnail}
        price={result.price}
        result={result}
      />
      <AddCartButton result={result} />
    </div>
  ))

  return (
    <main className='home'>
      <header>
        <h1>shoppingCart</h1>
        <div className='searchDiv'>
          <input
            data-testid="query-input"
            value={searchInput}
            onChange={handleChange}
            name="searchInput"
          />
          <button
            type="submit"
            data-testid="query-button"
            onClick={handleClick}
          /* onKeyPress={} */
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
            🛒
          </Link>

        </nav>
      </header>
      <section className='search-input'>

        <span
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </span>
      </section>

      <section className='home-containers'>
        <div className='container'>
          {
            (searchResult.length === 0 && buttonClicked)
              ? <h1> Nenhum produto foi encontrado</h1>
              : loadingCheck
          }
        </div>
        <CategoriesList labelCLick={labelCLick} />

      </section>
      <div className='footer-home'><Footer id='footer-home' /></div>

    </main>
  );
}

