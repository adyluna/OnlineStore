import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ShoppingCart extends Component {
  constructor() {
    super();
    this.state = { listProducts: [] , listProductsInfo: [] };
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

  render() {
    const message = 'Seu carrinho está vazio';
    const { listProducts, listProductsInfo } = this.state;
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
                <p data-testid="shopping-cart-product-quantity">01</p>
              </div>
            </div>
          ))}
          <div>
            <p data-testid="shopping-cart-product-name">{listProductsInfo.title}</p>
            <img src={listProductsInfo.thumbnail} alt={listProductsInfo.title } />
            <p>{listProductsInfo.price}</p>
            <p data-testid="shopping-cart-product-quantity">01</p>
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
