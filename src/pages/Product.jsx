import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import { productID } from '../services/api';

class Product extends React.Component {
  constructor() {
    super();
    this.state = {
      infos: [],
    };
  }

  componentDidMount() {
    this.request();
  }

  request = () => {
    console.log(this.props);
    const { match } = this.props;
    const { id } = match.params;
    productID(id).then((item) => {
      this.setState({
        infos: item,
      });
    });
  }

  render() {
    const { infos } = this.state;
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
