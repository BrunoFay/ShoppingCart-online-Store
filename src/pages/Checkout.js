import React, { Component } from 'react';
import PropTypes from 'prop-types';
import HeaderPages from '../components/HeaderPages';
import Footer from '../components/Footer';
import Boleto from '../components/Boleto';
import CreditCard from '../components/CreditCard';

export default class Checkout extends Component {
  constructor() {
    super();

    this.state = {
      nome: '',
      email: '',
      cpf: '',
      telefone: '',
      cep: '',
      endereco: '',
      select:'',
      validade:'',
      cardNumber:'',
      cvv:''
    };
  }

  componentDidMount() {
    this.getLocalStorage();
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
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

  render() {
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
    } = this.state;
    const totalValue= cart && cart
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
            <select name='select' value={select} onChange={this.handleChange}>
                <option name="cartao" value='cartao'>Cartão de Crédito</option>
                <option name="boleto" value='boleto'>Boleto</option> 
              </select>
           {  select==='boleto' ? <Boleto
            handleChange={this.handleChange}
             nome={nome} 
             email={email} 
             cpf={cpf} 
             telefone={telefone}
             endereco={endereco}
             cep={cep}
             totalValue={totalValue}
             quantidadeItens={cart&&cart.length}
             /> 
            :<CreditCard
            nome={nome}
            endereco={endereco}
            cep={cep}
            handleChange={this.handleChange}
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
}

Checkout.propTypes = {
  nome: PropTypes.string,
  email: PropTypes.string,
  cpf: PropTypes.string,
  telefone: PropTypes.string,
  cep: PropTypes.string,
  endereco: PropTypes.string,
}.isRequired;
