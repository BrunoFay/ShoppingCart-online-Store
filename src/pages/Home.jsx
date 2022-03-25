import React, { useEffect, useContext } from 'react';
import ProductsCard from '../components/ProductsCard';
import CategoriesList from '../components/CategoriesList';
import AddCartButton from '../components/AddCartButton';
import Footer from '../components/Footer';
import Loading from '../components/Loading';
import HeaderPages from '../components/HeaderPages';
import headerContext from '../context/headerContext';
import productDetailsContext from '../context/productDetailsContext';

export default function Home() {
  const {
    setHeaderStates,
    headerStates,
    getProductsFromCategoryAndQuery,
  } = useContext(headerContext)

  const { searchInput, loading, searchResult, buttonClicked } = headerStates
  const { getLocalStorage,productStates:{itensInCart} } = useContext(productDetailsContext)
  

  useEffect(() => {
    getLocalStorage()
  }, [itensInCart])

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


  const labelCLick = async ({ target }) => {
    clearListResult();
    setHeaderStates(prevState => ({ ...prevState, loading: true }))
    const responseCategoryApi = await getProductsFromCategoryAndQuery(target.id, '')
    setHeaderStates(prevState => ({
      ...prevState,
      searchResult: responseCategoryApi.results,
      loading: false
    }))
  }

  const clearListResult = () => {
    setHeaderStates(prevState => ({ ...prevState, searchResult: [] }));
  }

  const checkButtonState = () => {
    if (headerStates.searchInput === '') {
      setHeaderStates(prevState => ({
        ...prevState,
        buttonClicked: false,
      }))
    }
  }

  const loadingCheck = loading ? (
    <Loading />
  )
    : (
      searchResult.map((product, index) => (
        <div key={index}
          data-testid="product"
          className='products-container'>
          <ProductsCard
            product={product}
          />
          <AddCartButton product={product} />

        </div>
      ))
    )

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

