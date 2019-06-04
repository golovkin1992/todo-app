import React, {Component} from 'react';
import './TodoListItem.css';

export default class TodoListItem extends Component {
	state = { isEdit:false };

	handleInputClick = () => {
		const { id, isComplete, onToggle } = this.props;
		onToggle(id, isComplete);
	};  
	
	handleBtnDestroyClick = () => {
		const { id, onRemove } = this.props;
		onRemove(id);
	};

	handleLabelDblClick = () => {
		this.setState({ isEdit:true });
	};

	handleKeyDown = (e) => {
	this.handleNewInputEdit(e)
	};
	
	handleOnBlur = (e) => {
	this.handleNewInputEdit(e);
	};

	handleNewInputEdit = (e) => {
		const { id, onEdit, onRemove } = this.props;
		let { text } = this.props;
		if (!e.keyCode || e.keyCode === 13 ) {
			if (e.target.value !== '') {
				text = e.target.value;
				onEdit(id, text);
				this.setState({ isEdit:false, newInput:`` });
			} else {
				onRemove(id);
				}
		} 
	};
	
	render () {
		const { text, isComplete } = this.props;
		return (
			<div className = 'content-wrap'>
			<input className = 'complete' type = 'checkbox' checked = { isComplete }  onClick = { this.handleInputClick } />
			{ this.state.isEdit ? (
				<input className='js-edit' autoFocus onBlur= { this.handleOnBlur } onKeyDown= {this.handleKeyDown} defaultValue= {text}/>
			) : (
				<label onDoubleClick= { this.handleLabelDblClick }>
					{ text }
				</label>
			)}
			<button className = 'destroy' onClick = { this.handleBtnDestroyClick }></button>
			</div>
			);
	};
};

