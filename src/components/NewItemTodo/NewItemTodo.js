import React from 'react';

export default class NewItemTodo extends React.Component {
	constructor (props) {
	super(props);
	this.state = { props };	
};
	handleKeyDown = (e) => {
		if (e.keyCode === 13 && e.target.value !== '') {
			const { arrayTodo, addTodoItem } = this.props;
			const obj = {id: Date.now(), text: e.target.value, isComplete: false};
			addTodoItem(obj);
			e.target.value = '';
		};
	};

	render () { 
	
		return (
			<input onKeyDown={this.handleKeyDown} placeholder='What needs to be done?'/>);
		};
};

