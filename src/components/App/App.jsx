import React, { Component } from 'react';
import NewItemTodo from '../NewItemTodo';
import SelectAllTodo from '../SelectAllTodo';
import TodoList from '../TodoList';
import Footer from '../Footer';
import './App.css';

export default class App extends Component {
  state = {
    arrayTodo: JSON.parse(localStorage.getItem('todo')) || [],
    filter: localStorage.getItem('filter') || 'all',
  };

  componentDidUpdate() {
    this.saveToStorage();
  }

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
    const changeIndex = arrayTodo.findIndex(el => el.id === id);
    const updatedObj = Object.assign({}, arrayTodo[changeIndex], { isComplete: !isComplete });
    this.setState({
      arrayTodo: [
        ...arrayTodo.slice(0, changeIndex),
        updatedObj,
        ...arrayTodo.slice(changeIndex + 1),
      ],
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

  handleClearCompletedClick = () => {
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
    return (
      <>
        <SelectAllTodo
          onToggleAllClick={this.handleToggleAllClick}
          total={total}
          active={active}
        />
        <NewItemTodo onAdd={this.handleAddElement} />
        <TodoList
          items={filterItems}
          onToggle={this.handleToggleElement}
          onRemove={this.handleRemoveElement}
          onEdit={this.handleEditElement}
        />
        <Footer
          total={total}
          active={active}
          completed={completed}
          selectedFilter={filter}
          onHandleClearCompletedClick={this.handleClearCompletedClick}
          onChangeFilter={this.handleChangeFilter}
        />
      </>
    );
  }
}
