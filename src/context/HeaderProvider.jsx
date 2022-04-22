import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getProductsFromCategoryAndQuery } from '../services/api';
import headerContext from './headerContext';
import {INITIAL_STATE_HEADERSTATES_PROVIDER}from '../services/constants';

function HeaderProvider({ children }) {
  const [headerStates, setHeaderStates] = useState(INITIAL_STATE_HEADERSTATES_PROVIDER)
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const checkLocation = async () => {
    console.log(pathname);
    if(pathname !== '/') {
      navigate('/'); 
    }
  }
  const handleClick = async () => {
   await checkLocation()
    setHeaderStates(prevState => ({ ...prevState, loading: true }))
    await getProductsFromCategoryAndQuery('', headerStates.searchInput)
      .then((data) => setHeaderStates(prevState => ({
        ...prevState,
        searchResult: data.results,
        buttonClicked: true,
        loading: false
      })
      ));
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
  
  const labelCLick = async ({ target }) => {
    clearListResult();
    setHeaderStates(prevState => ({ ...prevState, loading: true }))
    const responseCategoryApi = await getProductsFromCategoryAndQuery(target.value, '')
    setHeaderStates(prevState => ({
      ...prevState,
      searchResult: responseCategoryApi.results,
      loading: false
    }))
  }

  const clearListResult = () => {
    setHeaderStates(prevState => ({ ...prevState, searchResult: [] }));
  }

  const contextValue = {
    headerStates,
    setHeaderStates,
    handleKeyDown,
    handleChange,
    handleClick,
    getProductsFromCategoryAndQuery,
    checkLocation,
    pathname,
    labelCLick
  };

  return (
    <headerContext.Provider value={contextValue}>
      {children}
    </headerContext.Provider>
  );
}

export default HeaderProvider;