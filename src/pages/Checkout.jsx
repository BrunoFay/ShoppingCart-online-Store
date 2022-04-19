import PropTypes from 'prop-types';
import React, { useContext, useEffect, useState } from 'react';
import Footer from '../components/footer/Footer';
import HeaderPages from '../components/header/HeaderPages';
import Boleto from '../components/paymentMethods/Boleto';
import CreditCard from '../components/paymentMethods/CreditCard';
import productDetailsContext from '../context/productDetailsContext';
import '../pages/checkout.css';

const SERIAL_NUMBER_BOLETO = 9 ** 16
const RANDOM_NUMER = Math.floor(Math.random() * SERIAL_NUMBER_BOLETO) + SERIAL_NUMBER_BOLETO
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
  const [codeBoleto, setCodeBoleto] = useState({ codeBoleto: '' })
  const { productStates: { itensInCart } } = useContext(productDetailsContext)
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
    generateBoletoCod()
  }, [])

  const generateBoletoCod = () => setCodeBoleto({ codeBoleto: RANDOM_NUMER })

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setCheckoutInfos((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }


  const totalValue = itensInCart && itensInCart
    .map((e) => e.item.price * e.count)
    .reduce((a, b) => a + b, 0)
    .toFixed(2)

  return (
    <>
      <HeaderPages />
      <main className='checkout-main'>
        <section className='section-itens-checkout'>
          {
            itensInCart && itensInCart.map((e) => (
              <section key={e.item.id} className='checkout-itens'>
                <img src={e.item.thumbnail} alt={e.item.title} />
               <div>
                  <span className='checkout-itens-title'>{e.item.title}</span>
                  <p>
                    R$
                    {(e.count * e.item.price).toFixed(2)}
                  </p>
               </div>
              </section>
            ))
          }
        </section>
        <p className='total-p'>
          Total: R$ {' '}
          {totalValue}
        </p>
        <section className='paymentsMethods-section' >
          <h1>Formas de pagamento</h1>
         <section className='paymentsMethods-title'>
            <select name='select' value={select} onChange={handleChange}>
              <option name="cartao" value='cartao'>Cartão de Crédito</option>
              <option name="boleto" value='boleto'>Boleto</option>
            </select>
          {select !== 'boleto' ?
            <Boleto
              select={select}
              handleChange={handleChange}
              nome={nome}
              email={email}
              cpf={cpf}
              telefone={telefone}
              endereco={endereco}
              cep={cep}
              totalValue={totalValue}
              quantidadeItens={cart && cart.length}
              codeBoleto={codeBoleto.codeBoleto}
            />
            :
            <CreditCard
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
