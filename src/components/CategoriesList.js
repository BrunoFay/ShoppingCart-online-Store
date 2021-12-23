import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getCategories } from '../services/api';
import { Link } from 'react-router-dom';


class CategoriesList extends Component {
  constructor() {
    super();
    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    getCategories().then((categoriesArray) => this.setState({
      categories: categoriesArray,
    }));
  }

  render() {
    const newCategoriesNames = ['Imóveis', 'Ingressos', 'Serviços', 'Festas e Lembrancinhas', 'Câmeras e Acessórios', 'Carros, Motos e Outros','Brinquedos e Hobbies','Antiguidades e Coleções','Música, Filmes e Seriados','Agro','Arte, Papelaria e Armarinho','Indústria e Comércio','Bebês','Ferramentas','Construção']
    const { categories } = this.state;
    const { labelCLick } = this.props;
    const newCategories = categories.filter((item) => !newCategoriesNames.includes(item.name))


    return (
      <article className='nav-categories'>
        <ul className="container__overlay">
          {newCategories
            .map((category) => (
              <li>
                <Link
                  type="button"
                  key={category.id}
                  id={category.id}
                  data-testid="category"
                  onClick={labelCLick}
                >
                  {category.name}
                </Link>
              </li>
            ))}
        </ul>
    
      </article>
    );
  }
}

CategoriesList.propTypes = {
  labelCLick: PropTypes.func,
}.isRequired;

export default CategoriesList;
