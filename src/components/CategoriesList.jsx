import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getCategories } from '../services/api';
import { Link } from 'react-router-dom';

const CATEGORIES_NAMES_FILTRED = ['Imóveis', 'Ingressos', 'Serviços', 'Festas e Lembrancinhas', 'Câmeras e Acessórios', 'Carros, Motos e Outros', 'Brinquedos e Hobbies', 'Antiguidades e Coleções', 'Música, Filmes e Seriados', 'Agro', 'Arte, Papelaria e Armarinho', 'Indústria e Comércio', 'Bebês', 'Ferramentas', 'Construção']
export default function CategoriesList({ labelCLick }) {
  const [categories, setCategories] = useState([])
  useEffect(() => {
    getCategories()
      .then((categoriesArray) => setCategories(categoriesArray
        .filter((item) => !CATEGORIES_NAMES_FILTRED.includes(item.name))
      ))

  }, [])




  return (
    <article className='nav-categories'>
      <ul className='container__overlay'>
        {categories
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


