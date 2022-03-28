import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductsInCart from '../components/products/ProductsInCart';
import Footer from '../components/footer/Footer';
import HeaderPages from '../components/header/HeaderPages';
import { removeLocalStorage, addLocalStorage } from '../services/localStorage'
import productDetailsContext from '../context/productDetailsContext';


export default function ShoppingCart() {
  const { productStates, setProductStates } = useContext(productDetailsContext)
  const { itensInCart } = productStates


  const removeItens = ({ target }) => {
    const itemName = target.parentElement.firstChild.firstChild.getAttribute('id')

    const cartFiltred = itensInCart.filter((i) => i.item.id !== itemName)
    removeItensFromLS(cartFiltred)
  }
  const removeItensFromLS = (itens) => {
    const cartLocalStoge = itens.map((i) => i.item)
    setProductStates((prevState) => ({
      ...prevState,
      itensInCart: itens
    }))
    addLocalStorage('shoppingCart', cartLocalStoge);

  }
  const removeCartLocalstorage = () => {
    removeLocalStorage('shoppingCart')
    setProductStates((prevState) => ({ ...prevState, itensInCart: [] }))
  };

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
                  product={item.item}
                  countI={item.count}
                  removeItens={(e) => removeItens(e)
                  }
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
