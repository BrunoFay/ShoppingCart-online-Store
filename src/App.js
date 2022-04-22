import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HeaderProvider from './context/HeaderProvider';
import ProductProvider from './context/ProductProvider';
import Checkout from './pages/Checkout';
import Contacts from './pages/Contacts';
import Home from './pages/Home';
import Profile from './pages/Profile';
import ShoppingCart from './pages/ShoppingCart';

export default function App() {

  return (
    <HeaderProvider>
      <ProductProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shopping-cart" element={<ShoppingCart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </ProductProvider>
    </HeaderProvider>
  );

}
