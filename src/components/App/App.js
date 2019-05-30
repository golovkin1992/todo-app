import React from 'react';
import NewItemTodo from '../NewItemTodo/NewItemTodo';
import TodoList from '../TodoList/TodoList';


export default class App extends React.Component {
	constructor () {
		super();
		this.state = {arrayTodo: JSON.parse(localStorage.getItem('todo')) || [] , 
	};
	console.log(this.state);
	};

onToggleElement = (id, isComplete) => {
	this.setState({
  		arrayTodo: this.state.arrayTodo.map(el => (el.id === id ?  {...el, isComplete:!isComplete}  : el))},
  		() => {
			const str = JSON.stringify(this.state.arrayTodo);
			localStorage.setItem('todo',str )}
		);	
  	
};
addElement = (obj) => {
	this.setState({ 
		arrayTodo: [...this.state.arrayTodo, obj] },
		() => {
			const str = JSON.stringify(this.state.arrayTodo);
			localStorage.setItem('todo',str )}
		);
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

render() {
	return (
		<div>
		<NewItemTodo {...this.handleKeyDown} addTodoItem={this.addElement}/>
		<TodoList {...this.state} onToggle={this.onToggleElement} onRemove={this.removeElement}/>
		</div>
	);

};


}
	
	

