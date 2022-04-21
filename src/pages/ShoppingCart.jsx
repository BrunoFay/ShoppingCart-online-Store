import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/footer/Footer';
import HeaderPages from '../components/header/HeaderPages';
import ProductsInCart from '../components/products/ProductsInCart';
import productDetailsContext from '../context/productDetailsContext';
import { addLocalStorage, removeLocalStorage } from '../services/localStorage';


export default function ShoppingCart() {
  const { productStates, setProductStates } = useContext(productDetailsContext)
  const { itensInCart } = productStates


  const removeItens = ({ target }) => {
    const itemName = target.parentElement.firstChild.getAttribute('id')
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
      <div className='checkout-button'>
        <button
          id='removeCart'
          onClick={() => removeCartLocalstorage()}
        >
          Limpar Carrinho
        </button>
        <Link
          to="/checkout"
          type="submit"
          data-testid="checkout-products"
        >
          Finalizar compra
        </Link>
      </div>
      <main className='shoppingCart' value={''}>
        <section className='scroll-itens'>
          {!itensInCart
            ? (
              <h2 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h2>
            )
            : itensInCart.map((item, index) => (
              <div className='products-incart' key={index} >
                <ProductsInCart
                  product={item.item}
                  countI={item.count}
                  removeItens={removeItens}
                />
              </div>
            ))}
        </section>
      </main>
      <Footer className='footer-shoppingCart' />
    </>
  );

}
