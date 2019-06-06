import React, { Component } from 'react';
import './NewItemTodo.css';
import PropTypes from 'prop-types';

export default class NewItemTodo extends Component {
  handleBlur = (e) => {
    this.createElement(e);
  };

  handleKeyDown = (e) => {
    this.createElement(e);
  };

  createElement(e) {
    if (!e.keyCode || e.keyCode === 13) {
      if (e.target.value !== '') {
        const { onAdd } = this.props;
        const obj = { id: Date.now(), text: e.target.value, isComplete: false };
        onAdd(obj);
        e.target.value = '';
      }
    }
  }

  render() {
    return (
      <input
        className="header__new-item"
        onBlur={this.handleBlur}
        onKeyDown={this.handleKeyDown}
        placeholder="What needs to be done?"
      />
    );
  }
}

NewItemTodo.propTypes = {
  onAdd: PropTypes.func.isRequired,
};