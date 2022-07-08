import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Categorie extends Component {
  render() {
    const { testid, name, id, onClick } = this.props;
    return (
      <button
        data-testid={ testid }
        type="button"
        id={ id }
        onClick={ onClick }
      >
        { name }
      </button>
    );
  }
}

Categorie.propTypes = {
  testid: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Categorie;
