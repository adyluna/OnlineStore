import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Input from '../components/Input';
// import ShoppingCart from './ShoppingCart';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      categorie: [],
      searchItem: '',
      items: [],
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

  showItem = async () => {
    const { searchItem } = this.state;
    const retorno = await getProductsFromCategoryAndQuery('_categoryId', searchItem);
    this.setState({ items: retorno });
  }

  onChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const myText = 'Digite algum termo de pesquisa ou escolha uma categoria.';
    const { categorie, searchItem, items } = this.state;
    return (
      <div>
        <Input
          type="textarea"
          testid="query-input"
          name="searchItem"
          value={ searchItem }
          onChange={ this.onChange }
        />

        <button
          type="submit"
          data-testid="query-button"
          id="button"
          onClick={ this.showItem }
        >
          pesquisa

        </button>

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
        <div>
          {items.length === 0 ? 'Nenhum produto foi encontrado' : items.results.map((item) => (
            <div key={ item.id } data-testid="product">
              <p>{item.title}</p>
              <img src={ item.thumbnail } alt={ item.title } />
              <p>{ item.price }</p>
            </div>
          )) }
        </div>
      </div>
    );
  }
}

export default Home;
