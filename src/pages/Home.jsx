import React, {  useEffect, useContext } from 'react';
import ProductsCard from '../components/ProductsCard';
import CategoriesList from '../components/CategoriesList';
import AddCartButton from '../components/AddCartButton';
import Footer from '../components/Footer';
import Loading from '../components/Loading';
import HeaderPages from '../components/HeaderPages';
import headerContext from '../context/headerContext';


export default function Home() {
  const {
    setheaderStates,
    headerStates,
    getProductsFromCategoryAndQuery, 
  } = useContext(headerContext)
  
   useEffect(() => {
    checkButtonState()
  }, [headerStates.searchInput])  



  const labelCLick = async ({ target }) => {
    clearListResult();
    setheaderStates(prevState => ({ ...prevState, loading: true }))
    await getProductsFromCategoryAndQuery(target.id, '')
      .then((data) => setheaderStates(prevState => ({
        ...prevState,
        searchResult: data.results,
        loading: false
      })))
  }

  const clearListResult = () => {
    setheaderStates(prevState => ({ ...prevState, searchResult: [] }));
  }

  const checkButtonState = () => {
    if (headerStates.searchInput === '') {
      setheaderStates(prevState => ({
        ...prevState,
        buttonClicked: false,
      }))
    }
  }

  const loadingCheck = headerStates.loading ?
    <Loading />
    : headerStates.searchResult.map((result, index) => (
      <div key={index}
        data-testid="product"
        className='products-container'>
        <ProductsCard
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
      {/* make a component and implement keypress event */}
      <HeaderPages />
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
            (headerStates.searchResult.length === 0 && headerStates.buttonClicked)
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

