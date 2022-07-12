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
    this.state = { products: [] };
  }

  addProduct = (elem) => {
    this.setState((prev) => ({ products: [...prev.products, elem] }));
  }

  render() {
    const { products } = this.state;
    return (
      <BrowserRouter>
        <Route exact path="/" render={ () => <Home addProduct={ this.addProduct } /> } />
        <Route
          path="/cart"
          render={ () => (<ShoppingCart
            products={ products }
          />) }
        />
        <Route
          path="/product/:id"
          render={ (props) => (<Product
            addProduct={ this.addProduct }
            { ...props }
          />) }
        />
      </BrowserRouter>
    );
  }
}

export default App;
