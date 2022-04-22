import PropTypes from 'prop-types';
import React, { useCallback, useContext, useEffect } from 'react';
import headerContext from '../../context/headerContext';
import { getCategories } from '../../services/api';
import {CATEGORIES_NAMES_TO_REMOVE} from '../../services/constants';


export default function CategoriesList({ labelCLick }) {
  const { headerStates: { categories }, setHeaderStates } = useContext(headerContext);
  const setCategories = useCallback(async () => {
    const categories = await getCategories()
    setHeaderStates((prevState) => ({
      ...prevState,
      categories: categories.filter((item) => !CATEGORIES_NAMES_TO_REMOVE.includes(item.name))
    }))
  }, [])

  useEffect(() => {
    setCategories()
  }, [])

  return (
    <select onChange={labelCLick}  className='container__overlay'>
      <option value="">Categorias</option>
      {
        categories
          .map((category) => (
            <option
              key={category.id}
              type='button'
              value={category.id}>
              {category.name}
            </option>
          ))}
    </select>
  );
}

CategoriesList.propTypes = {
  labelCLick: PropTypes.func,
}.isRequired;


