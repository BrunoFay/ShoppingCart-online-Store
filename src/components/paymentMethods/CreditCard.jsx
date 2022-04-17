import React from 'react'
import './creditCard.css'

export default function CreditCard({
  nome,
  cep,
  endereco,
  cardNumber,
  validade,
  handleChange,
  cvv
}) {


  return (
    <>
      <form>
        <input
          className="cheackoutName"
          type="text"
          name="nome"
          onChange={handleChange}
          value={nome}
          placeholder='Nome Completo'
        />
        <input
          className="cheackoutCardNumber"
          type='text'
          name="cardNumber"
          onChange={handleChange}
          value={cardNumber}
          placeholder='Numero do cartão'
          maxLength={16}
        />
        <input
          className="cheackoutValid"
          type='text'
          name="validade"
          onChange={handleChange}
          value={validade}
          placeholder='Valid'
          maxLength={4}
        />

        <input
          className='cheackoutCVV'
          type='text'
          name='cvv'
          onChange={handleChange}
          value={cvv}
          placeholder='CVV'
          maxLength={3}

        />
        <input
          className="cheackoutCEP"
          type="text"
          name="cep"
          onChange={handleChange}
          value={cep}
          placeholder='CEP'

        />


        <input
          className="cheackoutEndereço"
          type="text"
          name="endereco"
          onChange={handleChange}
          value={endereco}
          placeholder='Endereço'

        />
        <button className='buy-button' onClick={(e) => e.preventDefault()} type='submit'>Finalizar</button>

      </form>
      <div className='card-credit'>
        <div className='card-top'>
          <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Mastercard_2019_logo.svg/800px-Mastercard_2019_logo.svg.png' alt='imagem do chip do cartao' />      
        </div>
        <div className='card-middle'>
          <img src='https://cdn-icons-png.flaticon.com/512/105/105603.png' alt='chipimage' />
          <span className='card-number'>{cardNumber.replace(/(\d{4}(?!\s))/g, "$1 ")}</span>
          <div className='card-infos'>
          <span >Valid:<span className='info1'>{validade.replace(/(\d{2}(?!\s))/, "$1/")}</span></span>
          <span >CVV:<span className='info2'>{cvv}</span></span>
        </div>
        </div>
        <div className='card-bottom'>
          <img src='https://logospng.org/download/nubank/logo-nu-nubank-roxo-icon-256.png' alt='chipimage' />
          <span>{nome.toUpperCase()}</span>
        </div>
      

      </div>
    </>
  )

}
