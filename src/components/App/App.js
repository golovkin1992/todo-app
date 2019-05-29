import React from 'react';
import NewItemTodo from '../NewItemTodo/NewItemTodo';
import TodoList from '../TodoList/TodoList';


export default class App extends React.Component {
	constructor () {
		super();
		this.state = { 
		arrayTodo: [
		{id: 1, text: 'one', isComplete: false},
		{id: 2, text: 'two', isComplete: true},
		{id: 3, text: 'three', isComplete: false}
		],
	};
	console.log(this.state);
	};

onToggleElement = (id, isComplete) => {
	this.setState({
  		arrayTodo: this.state.arrayTodo.map(el => (el.id === id ?  {...el, isComplete:!isComplete}  : el))});
};
addElement = (obj) => {
	this.setState({ arrayTodo: [...this.state.arrayTodo, obj] });
		//arrayTodo: this.state.arrayTodo.splice(3, 0, obj)});
	console.log(this.state);
};
	 

render() {
	return (
		<div>
		<NewItemTodo {...this.handleKeyDown} addTodoItem={this.addElement}/>
		<TodoList {...this.state} onToggle={this.onToggleElement} />
		</div>
	);

};


}
	
	

