import React, {Component} from 'react';
import TodoListItem from '../TodoListItem/TodoListItem'

export default class TodoList extends Component {

	render () {
	const { arrayTodo, onToggle, onRemove, onEdit } = this.props;
	const elements = arrayTodo.map( (item) => {
		return (
	
		<li key={ item.id }><TodoListItem {...item} onToggle={ onToggle } onRemove={ onRemove } onEdit={ onEdit } /></li>
	
		);
		});

	return (

	<ul>{ elements }</ul>

	);			
	};


};



