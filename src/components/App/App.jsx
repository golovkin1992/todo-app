import React, { Component } from 'react';
import NewItemTodo from '../NewItemTodo';
import TodoList from '../TodoList';
import Filters from '../Filters';
import './App.css';

export default class App extends Component {
  state = {
    arrayTodo: JSON.parse(localStorage.getItem('todo')) || [],
    filter: localStorage.getItem('filter') || 'all',
  };

  handleAddElement = (obj) => {
    const { arrayTodo } = this.state;
    this.setState({
      arrayTodo: [...arrayTodo, obj],
    });
  };

  handleEditElement = (id, text) => {
    const { arrayTodo } = this.state;
    this.setState({
      arrayTodo: arrayTodo.map(el => (el.id === id ? { ...el, text } : el)),
    });
  };

  handleRemoveElement = (id) => {
    const { arrayTodo } = this.state;
    const removeIndex = arrayTodo.findIndex(el => el.id === id);
    this.setState({
      arrayTodo: [
        ...arrayTodo.slice(0, removeIndex),
        ...arrayTodo.slice(removeIndex + 1),
      ],
    });
  };

  handleToggleElement = (id, isComplete) => {
    const { arrayTodo } = this.state;
    this.setState({
      arrayTodo: arrayTodo.map(el => (el.id === id ? { ...el, isComplete: !isComplete } : el)),
    });
  };

  saveToStorage = () => {
    const { arrayTodo } = this.state;
    const str = JSON.stringify(arrayTodo);
    localStorage.setItem('todo', str);
  };

  handleChangeFilter = (filterName) => {
    this.setState({ filter: filterName });
    localStorage.setItem('filter', filterName);
  };

  getFilter = (filterName) => {
    const { arrayTodo } = this.state;
    switch (filterName) {
      case 'all':
        return arrayTodo;
      case 'completed':
        return arrayTodo.filter(item => item.isComplete);
      case 'active':
        return arrayTodo.filter(item => !item.isComplete);
      default:
        return arrayTodo;
    }
  };

  handleClearCompletedOnClick = () => {
    const { arrayTodo } = this.state;
    this.setState({
      arrayTodo: arrayTodo.filter(item => !item.isComplete),
    });
  };

  handleToggleAllClick = (e) => {
    const { arrayTodo } = this.state;
    this.setState({
      arrayTodo: arrayTodo.map(el => ({
        ...el,
        isComplete: e.target.checked,
      })),
    });
  };

  render() {
    const { arrayTodo, filter } = this.state;
    const total = arrayTodo.length;
    const active = arrayTodo.filter(item => !item.isComplete).length;
    const completed = arrayTodo.filter(item => item.isComplete).length;
    const filterItems = this.getFilter(filter);
    this.saveToStorage();
    return (
      <div>
        <input
          onClick={this.handleToggleAllClick}
          checked={active === 0}
          type="checkbox"
          id="select-all"
          className="select-all"
        />
        <label
          className="label-select-all"
          hidden={total === 0}
          htmlFor="select-all"
        />
        <NewItemTodo onAdd={this.handleAddElement} />
        <TodoList
          items={filterItems}
          onToggle={this.handleToggleElement}
          onRemove={this.handleRemoveElement}
          onEdit={this.handleEditElement}
        />
        <footer className="footer" hidden={total === 0}>
          <span className="counter">
            {active}
            {' '}
            items left
          </span>
          <Filters filter={filter} onChangeFilter={this.handleChangeFilter} />
          <button
            className="clear-completed"
            type="submit"
            hidden={completed === 0}
            onClick={this.handleClearCompletedOnClick}
          >
            Clear completed
          </button>
        </footer>
      </div>
    );
  }
}
