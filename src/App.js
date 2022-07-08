import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home';
import ShoppingCart from './pages/ShoppingCart';
import Product from './pages/Product';
// import { getCategories, getProductsFromCategoryAndQuery } from './services/api';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={ Home } />
      <Route path="/cart" component={ ShoppingCart } />
      <Route path="/product/:id" component={ Product } />
    </BrowserRouter>
  );
}

export default App;
