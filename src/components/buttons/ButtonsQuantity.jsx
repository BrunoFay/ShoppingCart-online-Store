import React from 'react'

export default function ButtonsQuantity({ countProducts, value,buttonDisable = false }) {
  return (
    <button
      className='quantity'
      value={value}
      data-testid="product-decrease-quantity"
      type="button"
      onClick={() => countProducts(value)}
      disabled={buttonDisable}
    >
      {value}
    </button>

  )
}
