import React, { useEffect, useContext, useCallback } from 'react';
import PropTypes from 'prop-types';
import { getCategories } from '../services/api';
import { Link } from 'react-router-dom';
import headerContext from '../context/headerContext';

const CATEGORIES_NAMES_TO_REMOVE = ['Imóveis', 'Ingressos', 'Serviços', 'Festas e Lembrancinhas', 'Câmeras e Acessórios', 'Carros, Motos e Outros', 'Brinquedos e Hobbies', 'Antiguidades e Coleções', 'Música, Filmes e Seriados', 'Agro', 'Arte, Papelaria e Armarinho', 'Indústria e Comércio', 'Bebês', 'Ferramentas', 'Construção']

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
    <article className='nav-categories'>
      <ul className='container__overlay'>
        {
          categories
            .map((category) => (
              <li key={category.id}>
                <Link
                  type='button'
                  id={category.id}
                  data-testid='category'
                  onClick={labelCLick}
                  to=''
                >
                  {category.name}
                </Link>
              </li>
            ))}
      </ul>

    </article>
  );
}

CategoriesList.propTypes = {
  labelCLick: PropTypes.func,
}.isRequired;


