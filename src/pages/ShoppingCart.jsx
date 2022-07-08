import React, { Component } from 'react';

class ShoppingCart extends Component {
  render() {
    const message = 'Seu carrinho está vazio';
    return (
      <div>
        <h3 data-testid="shopping-cart-empty-message">{ message }</h3>
      </div>
    );
  }
}

export default ShoppingCart;
