import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Input from '../components/Input';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import Categorie from '../components/Categorie';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      categories: [],
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
      categories: data,
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

  fetchCategorieItems = async (target) => {
    const { id } = target;
    const URL = `https://api.mercadolibre.com/sites/MLB/search?category=${id}`;
    const response = await fetch(URL);
    const data = await response.json();
    return data;
  }

  getCategorieItems = async ({ target }) => {
    const retorno = await this.fetchCategorieItems(target);
    this.setState({ items: retorno });
  }

  render() {
    const myText = 'Digite algum termo de pesquisa ou escolha uma categoria.';
    const { categories, searchItem, items } = this.state;
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
          { categories.map(({ id, name }) => (
            // Aqui eu troquei o button por um componente "Categorie"
            <Categorie
              key={ id }
              id={ id }
              testid="category"
              name={ name }
              onClick={ this.getCategorieItems }
            />
          ))}
        </section>
        <div>
          {
            items.length === 0 ? 'Nenhum produto foi encontrado'
              : items.results.map((item) => (
                <Link
                  to={ `/product/${item.id}` }
                  data-testid="product-detail-link"
                  key={ item.id }
                >
                  <div
                    data-testid="product"
                  >
                    <p>{item.title}</p>
                    <img src={ item.thumbnail } alt={ item.title } />
                    <p>{ item.price }</p>
                  </div>
                </Link>
              ))
          }
        </div>
      </div>
    );
  }
}

export default Home;
