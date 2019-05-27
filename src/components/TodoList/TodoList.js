import React from 'react';

const TodoList = ( {data} ) => {
	const elements = data.map( (item) => {
	return (
	
		<li>{item.text}</li>
	
		);
	});
	return (
	<ul>{ elements }</ul>

	);
};

export default TodoList;

