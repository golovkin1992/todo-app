import React from 'react';
import TodoListItem from '../TodoListItem/TodoListItem'

export default class TodoList extends React.Component {
	constructor (props) {
		super(props);
	};





	render () {
	const { arrayTodo, onToggle, onRemove } = this.props;
	const elements = arrayTodo.map( (item) => {
		return (
	
		<li key={ item.id }><TodoListItem {...item} onToggle={ onToggle } onRemove={ onRemove } /></li>
	
		);
		});

	return (

	<ul>{ elements }</ul>

	);			
	};


};



