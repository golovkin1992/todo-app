import React, { Component } from 'react';
import NewItemTodo from '../NewItemTodo/NewItemTodo';
import TodoList from '../TodoList/TodoList';
import Filters from '../Filters/Filters';
import './App.css';


export default class App extends Component {
	state = {
		arrayTodo: JSON.parse(localStorage.getItem('todo')) || [],	
		filter: localStorage.getItem('filter') || 'all',
	};

addElement = (obj) => {
	const { arrayTodo } = this.state;
	this.setState({ 
		arrayTodo: [...arrayTodo, obj] },
		() => {
			const str = JSON.stringify(arrayTodo);
			localStorage.setItem('todo', str)}
		);
};

editElement = (id, text) => {
	const { arrayTodo } = this.state;
	this.setState({
  		arrayTodo: arrayTodo.map(el => (el.id === id ? {...el, text} : el))},
  		() => {
			const str = JSON.stringify(arrayTodo);
			localStorage.setItem('todo',str )}
		 );
};

removeElement = (id) => {
	const { arrayTodo } = this.state;
	const removeIndex = arrayTodo.findIndex(el => (el.id === id));
	this.setState({
		arrayTodo: [
		...arrayTodo.slice(0, removeIndex),
		...arrayTodo.slice(removeIndex + 1)
		]},
		() => {
			const str = JSON.stringify(arrayTodo);
			localStorage.setItem('todo',str )}
		);
};

onToggleElement = (id, isComplete) => {
	const { arrayTodo } = this.state;
	this.setState({
  		arrayTodo: arrayTodo.map(el => (el.id === id ? {...el, isComplete:!isComplete} : el))},
  		() => {
			const str = JSON.stringify(arrayTodo);
			localStorage.setItem('todo', str)}
		);	
  	
};
		
onChangeFilter = (filterName) => {
	this.setState({filter: filterName});
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
	};
	 	
};

clearCompletedOnClick = () => {
	const { arrayTodo } = this.state;
	this.setState({
		arrayTodo: arrayTodo.filter( (item) => !item.isComplete)},
		() => {
			const str = JSON.stringify(arrayTodo);
			localStorage.setItem('todo', str)}
		);
};

handleToggleAllClick = (e) => {
	const { arrayTodo } = this.state;
	if (e.target.checked) {
		this.setState({
		arrayTodo: arrayTodo.map(el => ({...el, isComplete: true}))
		});
	} else {
		this.setState({
			arrayTodo: arrayTodo.map(el => ({...el, isComplete: false}))	
		});
	}
};

render() {
	const { arrayTodo, filter } = this.state;
	const counter = {
			total: arrayTodo.length,
			active: arrayTodo.filter(item => !item.isComplete).length,
			completed: arrayTodo.filter(item => item.isComplete).length
	};
	const { total, active, completed } = counter;
	const filterItems = this.getFilter(filter);
	return (
		<div>
			<input onClick = { this.handleToggleAllClick } 
			   checked = { active === 0 }
			   type = 'checkbox' 
			   id = 'js-select-all' 
			   className='js-select-all'/>
			<label hidden = { total === 0}  htmlFor="js-select-all"></label>
			<NewItemTodo addElement = { this.addElement }/>
			<TodoList items = { filterItems } 
				onToggleAll = { this.handleToggleAllClick } 
				onToggle = { this.onToggleElement } 
				onRemove = { this.removeElement } 
				onEdit = { this.editElement }/>
			<footer className='js-footer' hidden = { total === 0}>
				<span className = 'counter'>{ active } items left</span>
				<Filters currentFilter = { filter } 
				 	onChangeFilter = {this.onChangeFilter}/>
				<button className = 'js-clear-completed' 
					hidden = { completed <= 0 } 
					onClick = { this.clearCompletedOnClick }>Clear completed
				</button>
			</footer>
		</div>

	);

};


}
	
	

