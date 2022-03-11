import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import ShoppingCart from './pages/ShoppingCart';
import Checkout from './pages/Checkout';
import HeaderProvider from './context/HeaderProvider'

export default function App() {

  return (
    <HeaderProvider>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shopping-cart" element={<ShoppingCart />} />
        <Route path="/product-details" element={<ProductDetails />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>

    </HeaderProvider>
  );

}
