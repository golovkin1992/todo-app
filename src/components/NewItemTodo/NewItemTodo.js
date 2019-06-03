import React, { Component }from 'react';

export default class NewItemTodo extends Component {
	constructor (props) {
	super(props);
	this.state = { props };	
};
	handleBlur = (e) => {
		this.createElement(e);
	};
	handleKeyDown = (e) => {
		this.createElement(e);
	};

	createElement (e) {
		if (!e.keyCode || e.keyCode === 13) {
			if (e.target.value !== '') {
				const { addTodoItem } = this.props;
				const obj = { id: Date.now(), text: e.target.value, isComplete: false };
				addTodoItem(obj);
				e.target.value = '';
			};
		};
	};

	render () { 
	
		return (
			<input onBlur={ this.handleBlur } onKeyDown={ this.handleKeyDown } placeholder='What needs to be done?'/>);
		};
};

