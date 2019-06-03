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

activeItems = () => {
	const { arrayTodo } = this.state;
	//const obj = {
	//	total: arrayTodo.length,
	const active = arrayTodo.filter( (item) => !item.isComplete).length;
	this.setState({active: active });
	return 	active;
	//	completed: arrayTodo.filter( (item) => item.isComplete).length
	//	};
	
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
		arrayTodo: 
		this.state.arrayTodo.map(el => (el.isComplete ? this.removeElement(el.id): el))
	});
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


render() {
	const filterItems = this.setFilter(this.state.filter);
	return (
		<div>
		<NewItemTodo addTodoItem={this.addElement}/>
		<TodoList items={filterItems} onToggle={this.onToggleElement} onRemove={this.removeElement} onEdit={this.editElement}/>
		<Filters currentFilter={this.state.filter} onChangeFilter= {this.onChangeFilter}/>
		<span>{this.state.arrayTodo.filter((item)=> !item.isComplete).length}</span>
		<button onClick= {this.clearCompletedOnClick}>Clear completed</button>
		</div>
	);

};


}
	
	

