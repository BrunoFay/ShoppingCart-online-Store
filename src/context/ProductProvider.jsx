import React, { useCallback, useState } from 'react'
import {
  addLocalStorage, loadCartArrayLocalStorage, loadLocalStorage
} from '../services/localStorage'
import productDetailsContext from './productDetailsContext'

const INITIAL_STATE = {
  itensInCart: [],
  categories: [],
  productDetail: {},
}

export default function ProductProvider({ children }) {
  const [productStates, setProductStates] = useState(INITIAL_STATE)

  const getLocalStorage = useCallback(() => {
    setProductStates((prevState) => ({
      ...prevState,
      itensInCart: loadCartArrayLocalStorage('shoppingCart')
    }))
  }, [productStates.itensInCart])


  const addCartItensToLocalStorage = (item) => {
    let arrayCartItens = [];
    const getLocal = loadLocalStorage('shoppingCart');
    if (getLocal) {
      arrayCartItens = loadLocalStorage('shoppingCart');
    }
    arrayCartItens.push(item);
    addLocalStorage('shoppingCart', arrayCartItens);
  }

  const contextValues = {
     productStates,
     setProductStates,
     getLocalStorage,
     addCartItensToLocalStorage,
     };
  
  return (
    <productDetailsContext.Provider value={contextValues}>
      {children}
    </productDetailsContext.Provider>
  )
}
