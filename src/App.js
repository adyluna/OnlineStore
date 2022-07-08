import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home';
import ShoppingCart from './pages/ShoppingCart';
import Product from './pages/Product';
// import { getCategories, getProductsFromCategoryAndQuery } from './services/api';

class App extends React.Component {
  constructor() {
    super();
    this.state = { favorites: [] };
  }

  addProduct = (elem) => {
    this.setState((prev) => ({ favorites: [...prev.favorites, elem] }));
  }

  render() {
    const { favorites } = this.state;
    return (
      <BrowserRouter>
        <Route exact path="/" render={ () => <Home onClick={ this.addProduct } /> } />
        <Route path="/cart" render={ () => <ShoppingCart addCart={ favorites } /> } />
        <Route path="/product/:id" component={ Product } />
      </BrowserRouter>
    );
  }
}

export default App;
