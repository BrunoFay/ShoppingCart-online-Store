import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ProductsInCart from '../components/ProductsInCart';
import Footer from '../components/Footer';
import HeaderPages from '../components/HeaderPages';


export default class ShoppingCart extends Component {
  constructor() {
    super();
    this.state = {
      cart: null,
    };

  }

  componentDidMount() {
    this.getLocalStorage();
  }

  getLocalStorage = () => {
    const arr = JSON.parse(localStorage.getItem('shoppingCart'));
    const newCart = arr;
    if (newCart) {
      const arrIds = newCart.map((element) => element.id);
      const newArr = [...new Set(arrIds)];
      const arrObj = newArr.map((id) => newCart.find((item) => item.id === id));
      const arrArr = newArr.map((id) => newCart.filter((item) => item.id === id));
      const answer = arrObj
        .map((obj, indice) => ({ item: obj, count: arrArr[indice].length }));
      this.setState({ cart: answer });
    }
  }
  removeItens = ({target})=>{
    const {cart}=this.state
    const itemName =target.parentElement.firstChild.firstChild.getAttribute('id')
    const cartFiltred = cart.filter((i)=>  i.item.id!== itemName)
    const cartLocalStoge = cartFiltred.map((i)=>i.item)
    this.setState({cart:cartFiltred})
    localStorage.setItem('shoppingCart', JSON.stringify(cartLocalStoge));
    console.log(cartFiltred);
  }
  removeCartLocalstorage=()=>{
    localStorage.removeItem('shoppingCart')
  this.setState({cart:''})
  };
  render() {
    const { cart } = this.state;
    //console.log(cart);

    return (
      <>
     <HeaderPages cart={cart}/>
      <main className='shoppingCart' value={''}>
         <button  className='checkout-button' id='removeCart' onClick={()=>this.removeCartLocalstorage()}>Limpar Carrinho</button>
          <section className='scroll-itens'>
           
            {!cart
              ? <h2 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h2>
              : cart.map((item, index) => (
                <div key={index}>
    
                  <ProductsInCart
                    title={item.item.title}
                    thumbnail={item.item.thumbnail}
                    price={(item.item.price)}
                    result={item.item}
                    cartState={cart}
                    id={item.item.id}
                    countI={item.count}
                    removeItens={(e)=>this.removeItens(e)}
                  />
    
                </div>
              ))}
         
          </section>
         <div className='checkout-button'>
            <Link
                to="/checkout"
                type="submit"
                data-testid="checkout-products"
              >
                Finalizar compra
              </Link>
         </div>
         
      </main>
        
        <Footer />
      </>
    );
  }
}
