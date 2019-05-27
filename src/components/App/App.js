import React from 'react';
import NewItemTodo from '../NewItemTodo/NewItemTodo';
import TodoList from '../TodoList/TodoList';
import TodoListItem from '../TodoListItem/TodoListItem';



const App = () => {
	const arrayTodo = [
		{id: 1, text: 'one', isComplete: false},
		{id: 2, text: 'one', isComplete: false},
		{id: 3, text: 'one', isComplete: false}
	];
	return (
		<div>
		<NewItemTodo/>
		<TodoList data = {arrayTodo}/>
		</div>

		);
};

export default App;