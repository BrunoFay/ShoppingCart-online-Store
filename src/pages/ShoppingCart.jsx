import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductsInCart from '../components/ProductsInCart';
import Footer from '../components/Footer';
import HeaderPages from '../components/HeaderPages';
import {
  removeLocalStorage,
  addLocalStorage,
  loadCartArrayLocalStorage
} from '../localStorage'

const INITIAL_STATE = {
  cart: [],
}
export default function ShoppingCart() {
  const [cartItens, setCartItens] = useState(INITIAL_STATE)
  const { cart } = cartItens

  useEffect(() => {
    getLocalStorage()
  }, [])

  const getLocalStorage = () => {
    setCartItens({ cart: loadCartArrayLocalStorage('shoppingCart') });
  }

  const removeItens = ({ target }) => {
    const itemName = target.parentElement.firstChild.firstChild.getAttribute('id')
    const cartFiltred = cart.filter((i) => i.item.id !== itemName)
    const cartLocalStoge = cartFiltred.map((i) => i.item)
    setCartItens({ cart: cartFiltred })
    addLocalStorage('shoppingCart', cartLocalStoge);
  }
  const removeCartLocalstorage = () => {
    removeLocalStorage('shoppingCart')
    setCartItens({ cart: [] })
  };
  /* fix products in cart logical */
  return (
    <>
      <HeaderPages cart={cart} />
      <main className='shoppingCart' value={''}>
        <button
          className='checkout-button'
          id='removeCart'
          onClick={() => removeCartLocalstorage()}
        >Limpar Carrinho</button>
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
