import React, { useContext, useEffect } from 'react';
import Footer from '../components/footer/Footer';
import HeaderPages from '../components/header/HeaderPages';
import HomecardContainer from '../components/homeCardContainer/HomecardContainer';
import Loading from '../components/loading/Loading';
import ProductNotFoundMessage from '../components/products/ProductNotFoundMessage';
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
  const { getLocalStorage } = useContext(productDetailsContext)

  useEffect(() => {
    getLocalStorage()
  }, [])

  useEffect(() => {
    checkButtonState()
  }, [searchInput])

  useEffect(async () => {
    setHeaderStates(prevState => ({
      ...prevState,
      loading: true,
    }))
    await getProductsFromCategoryAndQuery('MLB1648', '')
      .then((data) => setHeaderStates(prevState => ({
        ...prevState,
        searchResult: data.results,
         loading: false, 
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

