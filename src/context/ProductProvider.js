import React, { useState } from 'react'
import productDetailsContext from './productDetailsContext'

export default function ProductProvider({children}) {
  const [product, setProduct] = useState({})
  const contextValue = {product, setProduct};
  return (
    <productDetailsContext.Provider value={contextValue}>
      {children}
    </productDetailsContext.Provider>
  )
}
