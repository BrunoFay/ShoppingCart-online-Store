import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import HeaderPages from '../components/HeaderPages';
import Footer from '../components/Footer';
import Boleto from '../components/Boleto';
import CreditCard from '../components/CreditCard';
import {loadCartArrayLocalStorage } from '../localStorage'



const INITIAL_STATE = {
  nome: '',
  email: '',
  cpf: '',
  telefone: '',
  cep: '',
  endereco: '',
  select: '',
  validade: '',
  cardNumber: '',
  cvv: ''
}
export default function Checkout() {
  const [checkoutInfos, setCheckoutInfos] = useState(INITIAL_STATE)
  const {
    nome,
    email,
    cpf,
    telefone,
    cep,
    endereco,
    cart,
    select,
    cardNumber,
    validade,
    cvv
  } = checkoutInfos;

  useEffect(() => {
    getLocalStorage()
  }, [])

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setCheckoutInfos((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const getLocalStorage = () => {
    setCheckoutInfos((prevState) => ({
      ...prevState,
      cart: loadCartArrayLocalStorage('shoppingCart')
    }))
  }

const totalValue = cart && cart
  .map((e) => e.item.price * e.count)
  .reduce((a, b) => a + b, 0)
  .toFixed(2)

return (
  <>
    <HeaderPages />
    <main className='checkout-main'>

      <section className='section-itens-checkout'>
        {
          cart && cart.map((e, index) => (
            <div key={index} className='checkout-itens'>
              <img src={e.item.thumbnail} alt={e.item.title} />
              <span className='title-product-all'>{e.item.title}</span>
              <p>
                R$
                {(e.count * e.item.price).toFixed(2)}
              </p>
            </div>
          ))
        }
      </section>
      <p className='total-p'>
        Soma total: R$
        {totalValue}
      </p>

      <section >
        <h1>Formas de pagamento</h1>
        <select name='select' value={select} onChange={handleChange}>
          <option name="cartao" value='cartao'>Cartão de Crédito</option>
          <option name="boleto" value='boleto'>Boleto</option>
        </select>
        {select === 'boleto' ? <Boleto
          handleChange={handleChange}
          nome={nome}
          email={email}
          cpf={cpf}
          telefone={telefone}
          endereco={endereco}
          cep={cep}
          totalValue={totalValue}
          quantidadeItens={cart && cart.length}
        />
          : <CreditCard
            nome={nome}
            endereco={endereco}
            cep={cep}
            handleChange={handleChange}
            cardNumber={cardNumber}
            validade={validade}
            cvv={cvv}
          />
        }
      </section>
    </main>
    <Footer />
  </>
);

}

Checkout.propTypes = {
  nome: PropTypes.string,
  email: PropTypes.string,
  cpf: PropTypes.string,
  telefone: PropTypes.string,
  cep: PropTypes.string,
  endereco: PropTypes.string,
}.isRequired;
