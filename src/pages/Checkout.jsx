import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import HeaderPages from '../components/header/HeaderPages';
import Footer from '../components/footer/Footer';
import Boleto from '../components/paymentMethods/Boleto';
import CreditCard from '../components/paymentMethods/CreditCard';
import productDetailsContext from '../context/productDetailsContext';


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
              <div key={e.item.id} className='checkout-itens'>
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
          {select === 'boleto' ?
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
