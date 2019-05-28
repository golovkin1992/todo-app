import React from 'react';
import NewItemTodo from '../NewItemTodo/NewItemTodo';
import TodoList from '../TodoList/TodoList';




const App = () => {
	const arrayTodo = [
		{id: 1, text: 'one', isComplete: false},
		{id: 2, text: 'two', isComplete: true},
		{id: 3, text: 'three', isComplete: false}
	];
	return (
		<div>
		<NewItemTodo/>
		<TodoList data = { arrayTodo }/>
		</div>

	);
};

export default App;