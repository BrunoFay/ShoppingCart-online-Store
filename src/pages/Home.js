import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Products from '../components/Products';
import { getProductsFromCategoryAndQuery } from '../services/api';
import CategoriesList from '../components/CategoriesList';
import AddCartButton from '../components/AddCartButton';
import Footer from '../components/Footer';
import Loading from '../components/Loading';
export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      searchInput: '',
      searchResult: [],
      buttonClicked: false,
      loading:false
    };
  }

  handleClick = async () => {
    const { searchInput } = this.state;
    await getProductsFromCategoryAndQuery('', searchInput)
      .then((data) => this.setState({
        searchResult: data.results,
        buttonClicked: true,
      }));
  }

  handleChange = ({ target }) => {
    const { name } = target;

    this.setState({
      [name]: target.value,
    }, this.checkButtonState);
  }

  labelCLick = async ({ target }) => {
    this.clearListResult();
    this.setState({loading:true})
    await getProductsFromCategoryAndQuery(target.id, '')
      .then((data) => this.setState({ searchResult: data.results,loading:false }));
  }

  clearListResult = () => {
    this.setState({ searchResult: [] });
  }

  checkButtonState = () => {
    const { searchInput } = this.state;
    if (searchInput === '') {
      this.setState({
        buttonClicked: false,
      });
    }
  }
 

  render() {
    const { searchInput, searchResult, buttonClicked,loading } = this.state;
    const loadingCheck = loading?<Loading/>:searchResult.map((result, index) => (
      <div key={ index } 
      data-testid="product"
      className='products-container'>
        <Products
          title={ result.title }
          thumbnail={ result.thumbnail }
          price={ result.price }
          result={ result }
        />
        <AddCartButton result={ result } />
      </div>
    ))

    return (
      <main className='home'>
        <header>
          <h1>shoppingCart</h1>
          <div className='searchDiv'>
            <input
              data-testid="query-input"
              value={ searchInput }
              onChange={ this.handleChange }
              name="searchInput"
              />
            <button
              type="submit"
              data-testid="query-button"
              onClick={ this.handleClick }
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
          <CategoriesList labelCLick={ this.labelCLick } />
        
      </section>
      <div className='footer-home'><Footer id='footer-home'/></div>
      
      </main>
    );
  }
}
