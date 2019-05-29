import React from 'react';
import './TodoListItem.css';

export default class TodoListItem extends React.Component {
	constructor(props) {
	super(props);
	this.state = { isComplete: this.props.isComplete };
	};
	handleLabelClick = () => {
		const {id, isComplete, onToggle} = this.props;
		this.setState( {isComplete: !this.state.isComplete} );
		onToggle(id, isComplete);
	};  
	handleOnClick = () => {
	
	};
	render () {
		return (
			<div>
			<label className= { !this.state.isComplete ? 'done': null } onClick={ this.handleLabelClick } >
			{ this.props.text }
			</label>
			<button className= "remove">Delete</button>
			</div>
			);
	};
};

