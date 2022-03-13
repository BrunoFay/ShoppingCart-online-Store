import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductsInCart from '../components/ProductsInCart';
import Footer from '../components/Footer';
import HeaderPages from '../components/HeaderPages';
import { removeLocalStorage, addLocalStorage } from '../services/localStorage'
import headerContext from '../context/headerContext';


export default function ShoppingCart() {
  const { headerStates, setheaderStates, getLocalStorage } = useContext(headerContext)
  const { itensInCart } = headerStates
  
  useEffect(() => {
    getLocalStorage()
  }, [itensInCart])

  const removeItens = ({ target }) => {
    const itemName = target.parentElement.firstChild.firstChild.getAttribute('id')
    const cartFiltred = itensInCart.filter((i) => i.item.id !== itemName)
    const cartLocalStoge = cartFiltred.map((i) => i.item)
    setheaderStates((prevState) => ({ ...prevState, itensInCart: cartFiltred }))
    addLocalStorage('shoppingCart', cartLocalStoge);
  }
  const removeCartLocalstorage = () => {
    removeLocalStorage('shoppingCart')
    setheaderStates((prevState) => ({ ...prevState, itensInCart: [] }))
  };
  /* fix products in cart logical */
  return (
    <>
      <HeaderPages />
      <main className='shoppingCart' value={''}>
        <button
          className='checkout-button'
          id='removeCart'
          onClick={() => removeCartLocalstorage()}
        >Limpar Carrinho</button>
        <section className='scroll-itens'>

          {!itensInCart
            ? <h2 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h2>
            : itensInCart.map((item, index) => (
              <div key={index}>

                <ProductsInCart
                  title={item.item.title}
                  thumbnail={item.item.thumbnail}
                  price={(item.item.price)}
                  result={item.item}
                  cartState={itensInCart}
                  id={item.item.id}
                  countI={item.count}
                  removeItens={(e) => removeItens(e)}
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
