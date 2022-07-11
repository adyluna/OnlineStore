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
    this.state = { favorites: [], favoritesInfo: [] };
  }

  addProduct = (elem) => {
    this.setState((prev) => ({ favorites: [...prev.favorites, elem] }));
  }

  addProductInfo = (elem) => {
    this.setState({ favoritesInfo: elem });
  }

  render() {
    const { favorites, favoritesInfo } = this.state;
    return (
      <BrowserRouter>
        <Route exact path="/" render={ () => <Home addProduct={ this.addProduct } /> } />
        <Route
          path="/cart"
          render={ () => (<ShoppingCart
            addCart={ favorites }
            addInfo={ favoritesInfo }
          />) }
        />
        <Route
          path="/product/:id"
          render={ (props) => (<Product
            addProduct={ this.addProductInfo }
            { ...props }
          />) }
        />
      </BrowserRouter>
    );
  }
}

export default App;
