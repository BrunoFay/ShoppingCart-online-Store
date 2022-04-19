import React, { useContext, useEffect } from 'react';
import Footer from '../components/footer/Footer';
import HeaderPages from '../components/header/HeaderPages';
import HomecardContainer from '../components/homeCardContainer/HomecardContainer';
import Loading from '../components/loading/Loading';
import ProductNotFoundMessage from '../components/productNotFoundMessage/ProductNotFoundMessage';
import headerContext from '../context/headerContext';
import productDetailsContext from '../context/productDetailsContext';
import './home.css';

export default function Home() {
  const {
    setHeaderStates,
    headerStates,
    getProductsFromCategoryAndQuery,
  } = useContext(headerContext)

  const { searchInput, loading, searchResult, buttonClicked } = headerStates
  const { getLocalStorage, productStates: { itensInCart } } = useContext(productDetailsContext)


  useEffect(() => {
    getLocalStorage()
  }, [])

  useEffect(() => {
    checkButtonState()
  }, [searchInput])

  useEffect(async () => {
    await getProductsFromCategoryAndQuery('MLB1648', '')
      .then((data) => setHeaderStates(prevState => ({
        ...prevState,
        searchResult: data.results,
      })))
  }, [])




  const checkButtonState = () => {
    if (headerStates.searchInput === '') {
      setHeaderStates(prevState => ({
        ...prevState,
        buttonClicked: false,
      }))
    }
  }

  return (
    <main className='home'>

      <HeaderPages />
      <section className='search-input'>

        <span
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </span>
      </section>

      <section className='home-containers'>

        <ProductNotFoundMessage
          searchResult={searchResult}
          buttonClicked={buttonClicked} />

        {loading ? <Loading /> : <HomecardContainer searchResult={searchResult} />}

      </section>
      <Footer />

    </main>
  );
}

