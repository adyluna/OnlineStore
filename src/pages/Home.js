import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Input from '../components/Input';
// import ShoppingCart from './ShoppingCart';
import { getCategories } from '../services/api';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      categorie: [],
    };
  }

  componentDidMount() {
    this.showCategories();
  }

  showCategories = async () => {
    const data = await getCategories();
    this.setState({
      categorie: data,
    });
  }

  render() {
    const myText = 'Digite algum termo de pesquisa ou escolha uma categoria.';
    const { categorie } = this.state;
    return (
      <div>
        <Input
          type="textarea"
        />
        <h3 data-testid="home-initial-message">
          {myText}
        </h3>
        <Link data-testid="shopping-cart-button" to="/cart">Carrinho</Link>
        <section>
          { categorie.map((cat) => (
            <button
              type="button"
              data-testid="category"
              key={ cat.id }
            >
              { cat.name }
            </button>))}
        </section>
      </div>
    );
  }
}

export default Home;
