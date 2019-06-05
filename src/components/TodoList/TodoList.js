import React from 'react';
import TodoListItem from '../TodoListItem/TodoListItem'
import './TodoList.css';

const TodoList = (props) => {
	const { items, 
			onToggle, 
			onRemove, 
			onEdit, 
			onToggleAll } = props;

	const elements = items.map((item) => {
		return (
			<li key = {item.id}>
			<TodoListItem {...item} 
				onToggleAll = {onToggleAll} 
				onToggle = {onToggle} 
				onRemove = {onRemove} 
				onEdit = {onEdit} /></li>
		);
	});
		return (
			<ul className = 'js-todo-list'>{elements}</ul>
 		);			
	
};
export default TodoList;



