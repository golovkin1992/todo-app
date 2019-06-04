import React, {Component} from 'react';
import TodoListItem from '../TodoListItem/TodoListItem'
import './TodoList.css';

export default class TodoList extends Component {

	render () {
	const { items, 
			onToggle, 
			onRemove, 
			onEdit, 
			onToggleAll } = this.props;

	const elements = items.map((item) => {
		return (
			<li key = { item.id }>
			<TodoListItem { ...item } 
				onToggleAll = { onToggleAll } 
				onToggle = { onToggle } 
				onRemove = { onRemove } 
				onEdit = { onEdit } /></li>
		);
	});
		return (
			<ul className = 'js-todo-list'>{ elements }</ul>
 		);			
	};
};



