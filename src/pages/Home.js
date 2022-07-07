import React, { Component } from 'react';
import Input from '../components/Input';

class Home extends Component {
  render() {
    const myText = 'Digite algum termo de pesquisa ou escolha uma categoria.';
    return (
      <div>
        <Input
          type="textarea"
        />
        <h3 data-testid="home-initial-message">
          {myText}
        </h3>
      </div>
    );
  }
}

export default Home;
