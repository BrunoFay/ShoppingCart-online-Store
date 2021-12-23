import React, { Component } from 'react'
const RANDOM_NUMER = Math.floor(Math.random() * 999999999909999999) + 999999999909999999
export default class Boleto extends Component {
  constructor() {
    super()
    this.state = {
      codeBoleto: ''
    }
  }
  componentDidMount() {
    this.generateBoletoCod()
  }
  generateBoletoCod = () => this.setState({
    codeBoleto: RANDOM_NUMER,
  })

  render() {
    const {
      nome,
      email,
      cpf,
      telefone,
      cep,
      endereco,
      handleChange,
      totalValue,
      quantidadeItens
    } = this.props;
    const { codeBoleto } = this.state
    return (
      <>
        <form>

          <input
            id="cheackoutName"
            type="text"
            name="nome"
            data-testid="checkout-fullname"
            onChange={handleChange}
            value={nome}
            placeholder='Nome Completo'
          />


          <input
            id="cheackoutEmail"
            type="email"
            name="email"
            data-testid="checkout-email"
            onChange={handleChange}
            value={email}
            placeholder='Email'

          />


          <input
            id="cheackoutCPF"
            type="text"
            name="cpf"
            data-testid="checkout-cpf"
            onChange={handleChange}
            value={cpf}
            placeholder='CPF'

          />


          <input
            id="cheackoutTelefone"
            type="tel"
            name="telefone"
            data-testid="checkout-phone"
            onChange={handleChange}
            value={telefone}
            placeholder='Telefone para Contato'
          />


          <input
            id="cheackoutCEP"
            type="text"
            name="cep"
            data-testid="checkout-cep"
            onChange={handleChange}
            value={cep}
            placeholder='CEP'

          />


          <input
            id="cheackoutEndereço"
            type="text"
            name="endereco"
            data-testid="checkout-address"
            onChange={handleChange}
            value={endereco}
            placeholder='Endereço'

          />

          <button onClick={(e)=>e.preventDefault()} className='buy-button' type='submit'>Finalizar</button>
        </form>
        <div className='boleto'>
          <div className='boleto-titulo'>
            <span> shoppingCart</span>
          </div>
          <div className='boleto-infos'>
            <span>numero de itens:{quantidadeItens}</span>
          </div>
          <div className='boleto-valores'>
            <span>(10%) valor minimo:{(totalValue * 0.10).toFixed(2)} R$ </span>
            <span>(0) Descontos: 0</span>
            <span>(100%) valor total:{totalValue} R$</span>

          </div>
          <div className='boleto-barras'>

            <img src='https://www.tag-id.com.br/wp-content/uploads/2019/06/barcode-306926_640-e1560291480556.png' />
          </div>
          <div className='boleto-usuario'>
            <span>{nome ? nome.toUpperCase() : 'NOME'}</span>
            <span>{cpf ? cpf : 'CPF'}</span>
            <span>{endereco ? endereco : 'ENDEREÇO'}</span>
            <span>{cep ? cep : 'CEP'}</span>
          </div>
          <div className='boleto-codigo'>
            {codeBoleto}
          </div>
        </div>
      </>
    )
  }
}
