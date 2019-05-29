import React from 'react';
import NewItemTodo from '../NewItemTodo/NewItemTodo';
import TodoList from '../TodoList/TodoList';


export default class App extends React.Component {
	constructor () {
		super();
	//	let storage = JSON.parse(localStorage.getItem('todo'));
    //if ( !storage ) {
     // storage = [];
	//} 
		this.state = {arrayTodo: JSON.parse(localStorage.getItem('todo')) || [] , 
		
	//	arrayTodo: [
	//	{id: 1, text: 'one', isComplete: false},
	//	{id: 2, text: 'two', isComplete: true},
	//	{id: 3, text: 'three', isComplete: false}
	//	],
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
console.log(id);
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
	
	

