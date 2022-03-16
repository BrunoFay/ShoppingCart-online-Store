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
  }, [addLocalStorage])

  const removeItens = ({ target }) => {
    const itemName = target.parentElement.firstChild.firstChild.getAttribute('id')

    const cartFiltred = itensInCart.filter((i) => i.item.id !== itemName)
    removeItensFromLS(cartFiltred)
  }
  const removeItensFromLS = (itens) => {
    const cartLocalStoge = itens.map((i) => i.item)
    setheaderStates((prevState) => ({
      ...prevState,
      itensInCart: itens
    }))
    addLocalStorage('shoppingCart', cartLocalStoge);

  }
  const removeCartLocalstorage = () => {
    removeLocalStorage('shoppingCart')
    setheaderStates((prevState) => ({ ...prevState, itensInCart: [] }))
  };
  /* fix products in cart logical */
  console.log(itensInCart);
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
                  price={(item.item.price)}
                  product={item.item}
                  cartState={itensInCart}
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
