import React from 'react'

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
          id="cheackoutName"
          type="text"
          name="nome"
          onChange={handleChange}
          value={nome}
          placeholder='Nome Completo'
        />
        <input
          id="cheackoutCardNumber"
          type='text'
          name="cardNumber"
          onChange={handleChange}
          value={cardNumber}
          placeholder='Numero do cartão'
          maxLength={16}
        />
        <input
          id="cheackoutValid"
          type='text'
          name="validade"
          onChange={handleChange}
          value={validade}
          placeholder='Valid'
          maxLength={4}
        />

        <input
          id='cheackoutCVV'
          type='text'
          name='cvv'
          onChange={handleChange}
          value={cvv}
          placeholder='CVV'
          maxLength={3}

        />
        <input
          id="cheackoutCEP"
          type="text"
          name="cep"
          onChange={handleChange}
          value={cep}
          placeholder='CEP'

        />


        <input
          id="cheackoutEndereço"
          type="text"
          name="endereco"
          onChange={handleChange}
          value={endereco}
          placeholder='Endereço'

        />
        <button className='buy-button' onClick={(e) => e.preventDefault()} type='submit'>Finalizar</button>

      </form>
      {/* refact in cards itens */}
      <div className='card-credit'>
        <div className='card-chip'>
          <img src='https://cdn-icons-png.flaticon.com/512/105/105603.png' alt='chipimage' />
        </div>
        <div className='card-name'>
          <span>{nome.toUpperCase()}</span>

        </div>
        <div className='card-number'>
          {/* FORMATADOR DE CARTÃO DE CREDITO https://stackoverflow.com/questions/25101781/javascript-regex-split-credit-card-numbers/40971044 */}
          <span>{cardNumber.replace(/(\d{4}(?!\s))/g, "$1 ")}</span>

        </div>
        <div className='card-flag'>
          <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Mastercard_2019_logo.svg/800px-Mastercard_2019_logo.svg.png' alt='chipimage' />

        </div>
        <div className='card-logo'>
          <img src='https://logospng.org/download/nubank/logo-nu-nubank-roxo-icon-256.png' alt='chipimage' />

        </div>
        <div className='card-infos'>
          {/* validate format */}
          <span >Valid:<span id='info1'>{validade.replace(/(\d{2}(?!\s))/, "$1/")}</span></span>
          <span >CVV:<span id='info2'>{cvv}</span></span>
        </div>

      </div>
    </>
  )

}
