import React, { useState } from 'react';
const INITIAL_STATE = {
  email: '',
  comment: '',
  rating: 1,
}
export default function ProductRating() {
  const [ratingState, setRatingState] = useState(INITIAL_STATE)
  const { email, rating, comment } = ratingState;

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setRatingState(prevState => ({
      ...prevState,
      [name]: value,
    }));
  }

  const handleClick = (event) => {
    event.preventDefault();
    setRatingState(INITIAL_STATE);
  }

  return (
    <div>
      <form className='rating'>
        <h3>Avaliações:</h3>
        <label htmlFor="email">
          Email:
          <input
            type="text"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="rating">
          Nota:
          <input
            type="number"
            name="rating"
            min="1"
            max="5"
            value={rating}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="comment">
          Deixe um comentário:
        </label>
        <textarea
          data-testid="product-detail-evaluation"
          name="comment"
          value={comment}
          onChange={handleChange}
        />
        <button type="button" onClick={handleClick}>
          Enviar
        </button>
      </form>
    </div>
  );
}



