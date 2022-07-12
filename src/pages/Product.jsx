import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import { productID } from '../services/api';

class Product extends React.Component {
  constructor() {
    super();
    this.state = {
      infos: [],
      quantity: 1,
    };
  }

  componentDidMount() {
    this.request();
  }

  request = () => {
    const { match } = this.props;
    const { id } = match.params;
    productID(id).then((item) => {
      this.setState({
        infos: item,
      });
    });
  }

  incrementQuantity = () => {
    this.setState((state) => ({ quantity: state.quantity + 1 }));
  }

    decrementQuantity = () => {
      this.setState((state) => ({ quantity: state.quantity - 1 }));
    }

    render() {
      const { infos, quantity } = this.state;
      const { addProduct } = this.props;
      return (
        <div>
          <Link to="/">Home</Link>
          <Link data-testid="shopping-cart-button" to="/cart">Carrinho</Link>
          <div>
            <div>
              <p data-testid="product-detail-name">{infos.title}</p>
              <img src={ infos.thumbnail } alt={ infos.title } />
              <p>{infos.price}</p>
              <button
                type="submit"
                data-testid="product-increase-quantity"
                onClick={ this.decrementQuantity }
              >
                -

              </button>
              <p>{quantity}</p>
              <button
                type="submit"
                data-testid="product-decrease-quantity"
                onClick={ this.incrementQuantity }
              >
                +

              </button>
              <button
                type="button"
                data-testid="product-detail-add-to-cart"
                name="favorites"
                onClick={ () => addProduct(infos) }
              >
                Adicionar ao Carrinho
              </button>
            </div>
          </div>
        </div>
      );
    }
}

Product.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
  addProduct: PropTypes.func.isRequired,
};

export default Product;
