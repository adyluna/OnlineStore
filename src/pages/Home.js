import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Input from '../components/Input';
// import ShoppingCart from './ShoppingCart';

class Home extends Component {
  render() {
    const myText = 'Digite algum termo de pesquisa ou escolha uma categoria.';
    return (
      <div>
        <Input
          type="textarea"
        />
        <h3 data-testid="home-initial-message">
          {myText}
        </h3>
        <Link data-testid="shopping-cart-button" to="/cart">Carrinho</Link>
      </div>
    );
  }
}

export default Home;
