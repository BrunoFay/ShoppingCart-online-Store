import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ShoppingCart from './pages/ShoppingCart';
import Checkout from './pages/Checkout';
import HeaderProvider from './context/HeaderProvider'
import ProductProvider from './context/ProductProvider';

export default function App() {

  return (
    <HeaderProvider>
      <ProductProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shopping-cart" element={<ShoppingCart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </ProductProvider>
    </HeaderProvider>
  );

}
