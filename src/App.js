import React, { Component } from 'react';
import {  Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import ShoppingCart from './pages/ShoppingCart';
import Checkout from './pages/Checkout';

export default class App extends Component {
  render() {
    return (
     
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shopping-cart" element={<ShoppingCart />} />
          <Route path="/product-details" element={<ProductDetails />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
     
    );
  }
}
