import React from 'react';
import { Link } from 'react-router-dom';

class Product extends React.Component {
  render() {
    return (
      <div>
        <Link data-testid="shopping-cart-button" to="/cart">Carrinho</Link>
      </div>
    );
  }
}

export default Product;
