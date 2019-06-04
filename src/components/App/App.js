import React, { Component } from 'react';
import NewItemTodo from '../NewItemTodo/NewItemTodo';
import TodoList from '../TodoList/TodoList';
import Filters from '../Filters/Filters';


export default class App extends Component {
	constructor () {
	super();
	this.state = {
		arrayTodo: JSON.parse(localStorage.getItem('todo')) || [] ,	
		filter: localStorage.getItem('filter') || 'all',
	}
	
	console.log(this.state);
	
	};


	

onChangeFilter = (filterName) => {
	this.setState({filter: filterName});
	localStorage.setItem('filter', filterName);
};

setFilter = (filterName) => {
	const { arrayTodo } = this.state;
	switch (filterName) {
		case 'all':
			return arrayTodo;
		case 'completed':
			return arrayTodo.filter( (item) => item.isComplete);
		case 'active':
			return arrayTodo.filter( (item) => !item.isComplete);
	};
	 	
};

onToggleElement = (id, isComplete) => {
	this.setState({
  		arrayTodo: this.state.arrayTodo.map(el => (el.id === id ?  {...el, isComplete:!isComplete}  : el))},
  		() => {
			const str = JSON.stringify(this.state.arrayTodo);
			localStorage.setItem('todo', str)}
		);	
  	
};
addElement = (obj) => {
	this.setState({ 
		arrayTodo: [...this.state.arrayTodo, obj] },
		() => {
			const str = JSON.stringify(this.state.arrayTodo);
			localStorage.setItem('todo', str)}
		);
};

clearCompletedOnClick = () => {
	this.setState({
	arrayTodo: this.state.arrayTodo.filter( (item) => !item.isComplete)});
};

removeElement = (id) => {
	const removeIndex = this.state.arrayTodo.findIndex(el => (el.id === id) );
	this.setState({
		arrayTodo: [
		...this.state.arrayTodo.slice(0, removeIndex),
		...this.state.arrayTodo.slice(removeIndex + 1)
		] },
		() => {
			const str = JSON.stringify(this.state.arrayTodo);
			localStorage.setItem('todo',str )}
		);
};

editElement = (id, text) => {
	this.setState({
  		arrayTodo: this.state.arrayTodo.map(el => (el.id === id ? {...el, text} : el))},
  		() => {
			const str = JSON.stringify(this.state.arrayTodo);
			localStorage.setItem('todo',str )});
};

toggleAll = (e) => {
	if (e.target.checked) {
		this.setState({
		arrayTodo: this.state.arrayTodo.map((el, i) => (  {...el, isComplete: true} ))
		});
	} else {
		this.setState({
			arrayTodo: this.state.arrayTodo.map((el, i) => (  {...el, isComplete: false} ))	
		});
	}
};


render() {
	const counter = {
			active: this.state.arrayTodo.filter( (item) => !item.isComplete).length,
			completed: this.state.arrayTodo.filter( (item) => item.isComplete).length
	};
	const { active, completed } = counter;
	const filterItems = this.setFilter(this.state.filter);
	return (
		<div>
		<input onClick={ this.toggleAll } checked= {active === 0} type='checkbox' id='js-select-all' className='js-select-all'/>
		<label htmlFor="js-select-all"></label>
		<NewItemTodo addTodoItem={this.addElement}/>
		<TodoList items={filterItems} onToggleAll={this.state.toggleAll} onToggle={this.onToggleElement} onRemove={this.removeElement} onEdit={this.editElement}/>
		<Filters currentFilter={this.state.filter} onChangeFilter= {this.onChangeFilter}/>
		<span>{this.state.arrayTodo.filter((item)=> !item.isComplete).length}</span>
		<button hidden= {completed <= 0} onClick= {this.clearCompletedOnClick}>Clear completed</button>
		</div>
	);

};


}
	
	

