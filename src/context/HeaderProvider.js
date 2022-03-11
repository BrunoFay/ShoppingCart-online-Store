
import React, { useState } from 'react';
import headerContext from './headerContext';
import { getProductsFromCategoryAndQuery } from '../services/api';

const INITIAL_STATE = {
  searchInput: '',
  searchResult: [],
  buttonClicked: false,
  loading: false
}
function headerProvider({ children }) {
  const [headerStates, setheaderStates] = useState(INITIAL_STATE)
  console.log(headerStates);
  const handleClick = async () => {
    setheaderStates(prevState => ({ ...prevState, loading: true }))
    await getProductsFromCategoryAndQuery('', headerStates.searchInput)
      .then((data) => setheaderStates(prevState => ({
        ...prevState,
        searchResult: data.results,
        buttonClicked: true,
        loading: false
      })));
  }
  const handleKeyDown = (event) => {
    if (event.charCode === 13||event.keyCode === 13) handleClick()
  }
  const handleChange = ({ target }) => {
    const { name } = target;
      setheaderStates(prevState => ({
        ...prevState,
        [name]: target.value,
      }));

  }

  const contextValue = {
    headerStates,
    setheaderStates,
    handleKeyDown,
    handleChange,
    handleClick,
    getProductsFromCategoryAndQuery
  };

  return (
    <headerContext.Provider value={contextValue}>
      {children}
    </headerContext.Provider>
  );
}

export default headerProvider;