
import React, { useState,useEffect } from 'react';
import headerContext from './headerContext';
import { getProductsFromCategoryAndQuery } from '../services/api';
import { useLocation, useNavigate } from 'react-router-dom';



const INITIAL_STATE = {
  searchInput: '',
  searchResult: [],
  buttonClicked: false,
  loading: false,
  itensInCart: [],
  categories: [],
}

function HeaderProvider({ children }) {
  const [headerStates, setHeaderStates] = useState(INITIAL_STATE)
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const checkLocation =async () => {
    if(pathname !== '/') {
      await handleClick ();
      return navigate("/");
    }
  }
  const handleClick = async () => {
    
    setHeaderStates(prevState => ({ ...prevState, loading: true }))
    checkLocation()
    
    await getProductsFromCategoryAndQuery('', headerStates.searchInput)
      .then((data) => setHeaderStates(prevState => ({
        ...prevState,
        searchResult: data.results,
        buttonClicked: true,
        loading: false
      })));
  }
  const handleKeyDown = (event) => {
    if (event.charCode === 13 || event.keyCode === 13) handleClick()
  }
  const handleChange = ({ target }) => {
    const { name } = target;
    setHeaderStates(prevState => ({
      ...prevState,
      [name]: target.value,
    }));

  }
  
 


/* setar uma vez o estado vindo do locastorage no hedear e usar o useeffect para atualizar a acada nova adição de itens no carrinho */ 


  const contextValue = {
    headerStates,
    setHeaderStates,
    handleKeyDown,
    handleChange,
    handleClick,
    getProductsFromCategoryAndQuery,
    checkLocation,
    pathname
  };

  return (
    <headerContext.Provider value={contextValue}>
      {children}
    </headerContext.Provider>
  );
}

export default HeaderProvider;