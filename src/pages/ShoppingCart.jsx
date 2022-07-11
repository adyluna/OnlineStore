import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CartProduct from '../components/CartProduct';

class ShoppingCart extends Component {
  constructor() {
    super();
    this.state = { listProducts: [], total: 0 };
  }

  componentDidMount() {
    this.getProducts();
  }

  getProducts = () => {
    const { products } = this.props;
    this.setState({ listProducts: products });
  }

  // incrementQuantity = () => {
  //   this.setState((state) => ({ quantity: state.quantity + 1 }));
  // }

  //   decrementQuantity = () => {
  //     const { quantity } = this.state;
  //     if (quantity > 1) {
  //       this.setState((state) => ({ quantity: state.quantity - 1 }));
  //     }
  //   }

  render() {
    const message = 'Seu carrinho está vazio';
    const { listProducts, total } = this.state;
    const totalItens = `R$ ${total},00`;
    return (
      <div>
        <Link to="/">Home</Link>
        { listProducts.length === 0 ? (
          <h3 data-testid="shopping-cart-empty-message">{ message }</h3>
        )
          : listProducts.map(({ title, thumbnail, price, id }) => (
            <CartProduct
              key={ id }
              title={ title }
              thumbnail={ thumbnail }
              price={ price }
              id={ id }
            />
          ))}
        { totalItens }
      </div>
    );
  }
}

ShoppingCart.propTypes = {
  products: PropTypes.arrayOf.isRequired,
};

export default ShoppingCart;
