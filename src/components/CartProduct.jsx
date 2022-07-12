import PropTypes from 'prop-types';
import React, { Component } from 'react';

class CartProduct extends Component {
  constructor() {
    super();

    this.state = {
      quantity: 1,
    };
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
      const { id, thumbnail, price, title } = this.props;
      const { quantity } = this.state;
      return (
        <div key={ id }>
          <div>
            <p data-testid="shopping-cart-product-name">{title}</p>
            <img src={ thumbnail } alt={ title } />
            <p>{price}</p>
            <button
              type="submit"
              data-testid="product-decrease-quantity"
              onClick={ this.decrementQuantity }
            >
              -

            </button>
            <p data-testid="shopping-cart-product-quantity">{quantity}</p>
            <button
              type="submit"
              data-testid="product-increase-quantity"
              onClick={ this.incrementQuantity }
            >
              +

            </button>
          </div>
        </div>
      );
    }
}

CartProduct.propTypes = {
  id: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  thumbnail: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default CartProduct;
