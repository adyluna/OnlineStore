import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ShoppingCart extends Component {
  constructor() {
    super();
    this.state = { listProducts: [], listProductsInfo: [], quantity: 2 };
  }

  componentDidMount() {
    this.getProducts();
    this.getProductsInfos();
  }

  getProducts = () => {
    const { addCart } = this.props;
    this.setState({ listProducts: addCart });
  }

  getProductsInfos = () => {
    const { addInfo } = this.props;
    this.setState({ listProductsInfo: addInfo });
  }

  incrementQuantity = () => {
    this.setState((state) => ({ quantity: state.quantity + 1 }));
  }

    decrementQuantity = () => {
      const { quantity } = this.state;
      if (quantity > 1) {
        this.setState((state) => ({ quantity: state.quantity - 1 }));
      }
    }

    render() {
      const message = 'Seu carrinho está vazio';
      const { listProducts, listProductsInfo, quantity } = this.state;
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
                  <button
                    type="submit"
                    data-testid="product-increase-quantity"
                    onClick={ this.decrementQuantity }
                  >
                    -

                  </button>
                  <p data-testid="shopping-cart-product-quantity">{quantity}</p>
                  <button
                    type="submit"
                    data-testid="product-decrease-quantity"
                    onClick={ this.incrementQuantity }
                  >
                    +

                  </button>
                </div>
              </div>
            ))}
          <div>
            <p data-testid="shopping-cart-product-name">{listProductsInfo.title}</p>
            <img src={ listProductsInfo.thumbnail } alt={ listProductsInfo.title } />
            <p>{listProductsInfo.price}</p>
            <p data-testid="shopping-cart-product-quantity">
              {
                quantity === 1 ? null : quantity
              }

            </p>
          </div>
        </div>
      );
    }
}

ShoppingCart.propTypes = {
  addCart: PropTypes.arrayOf.isRequired,
  addInfo: PropTypes.arrayOf.isRequired,
};

export default ShoppingCart;
