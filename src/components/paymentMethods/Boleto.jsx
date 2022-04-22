import React from 'react'
import './boleto.css'


export default function Boleto({
  nome,
  email,
  cpf,
  telefone,
  cep,
  endereco,
  handleChange,
  totalValue,
  quantidadeItens,
  codeBoleto
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
         className="cheackoutEmail"
          type="email"
          name="email"
          onChange={handleChange}
          value={email}
          placeholder='Email'

        />


        <input
         className="cheackoutCPF"
          type="text"
          name="cpf"
          onChange={handleChange}
          value={cpf}
          placeholder='CPF'

        />


        <input
         className="cheackoutTelefone"
          type="tel"
          name="telefone"
          onChange={handleChange}
          value={telefone}
          placeholder='Telefone para Contato'
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

        <button onClick={(e) => e.preventDefault()} className='buy-button' type='submit'>Finalizar</button>
      </form>
      <div className='boleto'>
        <div className='boleto-top'>
          <span> shoppingCart</span>
          <span className='boleto-codigo'>
          {codeBoleto}
        </span>
        </div>
        <div className='boleto-middle-1'>
          <span>N de itens:{quantidadeItens}</span>
        <div className='boleto-valores'>
          <span>(10%) valor minimo:{((totalValue||0) * 0.10).toFixed(2)} R$ </span>
          <span>(0) Descontos: 0</span>
          <span>(100%) valor total: {totalValue ||0} R$</span>
        </div>
        </div>
        <div className='boleto-middle-2'>
         <div>
            <span>{nome ? nome.toUpperCase() : 'NOME:'}</span>
            <span>{cpf ? cpf : 'CPF:'}</span>
         </div>
          <div>
            <span>{endereco ? endereco : 'ENDEREÇO:'}</span>
            <span>{cep ? cep : 'CEP:'}</span>
          </div>
        </div>
        <div className='boleto-bottom'>
          <img src='https://www.tag-id.com.br/wp-content/uploads/2019/06/barcode-306926_640-e1560291480556.png' />
        </div>
      </div>
    </>
  )

}
