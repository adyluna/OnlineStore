import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ShoppingCart extends Component {
  constructor() {
    super();
    this.state = { listProducts: [] };
  }

  componentDidMount() {
    this.getProducts();
  }

  getProducts = () => {
    const { addCart } = this.props;
    this.setState({ listProducts: addCart });
  }

  render() {
    const message = 'Seu carrinho está vazio';
    const { listProducts } = this.state;
    return (
      <div>
        <Link to="/">Home</Link>
        { listProducts.length === 0 ? (
          <h3 data-testid="shopping-cart-empty-message">{ message }</h3>
        )
          : listProducts.map(({ title, thumbnail, price, id }) => (
            <div key={ id }>
              <div>
                <p data-testid="shopping-cart-product-name">{title}</p>
                <img src={ thumbnail } alt={ title } />
                <p>{price}</p>
                <p data-testid="shopping-cart-product-quantity">1</p>
              </div>
            </div>
          ))}
      </div>
    );
  }
}

ShoppingCart.propTypes = {
  addCart: PropTypes.arrayOf.isRequired,
};

export default ShoppingCart;
