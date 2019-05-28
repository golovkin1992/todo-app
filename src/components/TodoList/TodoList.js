import React from 'react';
import TodoListItem from '../TodoListItem/TodoListItem'

const TodoList = ( { data } ) => {
	const elements = data.map( (item) => {
	return (
	
		<li key={ item.id }><TodoListItem {...item}/></li>
	
		);
	});
	return (

	<ul>{ elements }</ul>

	);
};

export default TodoList;

