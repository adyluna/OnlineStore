import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Input extends Component {
  render() {
    const { type, label } = this.props;
    return (
      <label htmlFor={ label }>
        {label}
        <input
          type={ type }
        />
      </label>
    );
  }
}

Input.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string.isRequired,
};

Input.defaultProps = {
  label: null,
};

export default Input;
