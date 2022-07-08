import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Input extends Component {
  render() {
    const { type, label, testid, value, name, onChange } = this.props;
    return (
      <label htmlFor={ label }>
        {label}
        <input
          type={ type }
          data-testid={ testid }
          value={ value }
          name={ name }
          onChange={ onChange }
        />
      </label>
    );
  }
}

Input.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  testid: PropTypes.string,
  type: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),
};

Input.defaultProps = {
  label: null,
  testid: null,
  value: null,
  name: null,
  onChange: null,
};

export default Input;
