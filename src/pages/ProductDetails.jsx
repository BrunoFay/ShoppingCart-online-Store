import React from 'react';
import PropTypes from 'prop-types';
import AddCartButtonDetails from '../components/AddCartButtonDetails';
import ProductRating from '../components/ProductRating';
import Footer from '../components/Footer';
import HeaderPages from '../components/HeaderPages';
import {useLocation} from 'react-router-dom'
export default function ProductDetails(props) {
  const location = useLocation() 
  console.log(props) 
  const {
    id,
    title,
    price,
    available_quantity: quantity,
    thumbnail,
    shipping: { free_shipping: freeShipping
    } } = location.state;
    ;
    /* make components trazer estado do componen*/
  return (
    <div className='details-pag'>
      <HeaderPages />
      <div className='card-details'>
        <img src={thumbnail} alt={title} />
        <div>
          <p>{id}</p>
          <p>{freeShipping ?
            <span className='freeShipping'>Frete Gratis</span> : <span className='shipping'>Frete: Consulte</span>}
          </p>
          <p className='title-product-all'>{title}</p>
          <p>R$ {price}</p>
          <p>Unidades: {quantity}</p>

          <AddCartButtonDetails result={location.state} />
        </div>
      </div>
      <a target='_blank' href='https://www.betrybe.com/'>
        <img className='ad' src='https://media-exp1.licdn.com/dms/image/C4D1BAQHh_5Yp8czsmg/company-background_10000/0/1630441315044?e=2159024400&v=beta&t=dWOtvPT95zfK7RFUaq_o-YvFPG-XK_dNO7VP7zOYzrA' alt='imagem-propaganda-trybe'></img>
      </a>
      <ProductRating />
      <Footer />
    </div>
  );

}

ProductDetails.propTypes = {
  result: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    currency_id: PropTypes.string,
    available_quantity: PropTypes.number,
    thumbnail: PropTypes.string,
    shipping: PropTypes.shape({
      free_shipping: PropTypes.bool,
    }),
  }),
}.isRequired;
