import React from 'react';

class ProductRating extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      comment: '',
      rating: 1,
    };
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  handleClick = (event) => {
    event.preventDefault();
    this.setState({
      email: '',
      comment: '',
      rating: 1,
    });
  }

  render() {
    const { email, rating, comment } = this.state;
    return (
      <div>
        <form className='rating'>
        <h3>Avaliações:</h3>
          <label htmlFor="email">
            Email:
            <input
              type="text"
              name="email"
              value={ email }
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="rating">
            Nota:
            <input
              type="number"
              name="rating"
              min="1"
              max="5"
              value={ rating }
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="comment">
            Deixe um comentário:
          </label>
            <textarea
              data-testid="product-detail-evaluation"
              name="comment"
              value={ comment }
              onChange={ this.handleChange }
            />
          <button type="button" onClick={ this.handleClick }>
            Enviar
          </button>
        </form>
      </div>
    );
  }
}

export default ProductRating;
