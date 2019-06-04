import React, {Component} from 'react';
import './TodoListItem.css';

export default class TodoListItem extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isEdit: false
		};
	};

	handleLabelClick = () => {
		const {id, isComplete, onToggle} = this.props;
		onToggle(id, isComplete);

	};  
	handleOnClick = () => {
		const {id, onRemove} = this.props;
		onRemove(id);
	};

	handleKeyDown = (e) => {
	this.handleKeyDownNewInput(e)
	};
	
	handleOnBlur = (e) => {
	this.handleKeyDownNewInput(e);
	};

	handleKeyDownNewInput = (e) => {
		const {id, onEdit, onRemove} = this.props;
		let {text} = this.props;
		if (!e.keyCode || e.keyCode === 13 ) {
			if (e.target.value !== '') {
				text = e.target.value;
				onEdit(id, text);
				this.setState({ isEdit: false, newInput:`` });
			} else {
				onRemove(id);
			}
		} 
	};
	
	handleDblClick = () => {
		const {text}= this.props;
		this.setState({isEdit: true});
	};

	render () {
		const { text, isComplete } = this.props;
		return (
			<div>
			<input type='checkbox' checked={isComplete}  onClick={ this.handleLabelClick } />
			{this.state.isEdit ? (
				<input autoFocus onBlur= {this.handleOnBlur} onKeyDown= {this.handleKeyDown} defaultValue= {text}/>
			) : (
				<label className= {'label__item'+ (isComplete ? ' done': '')} onDoubleClick= { this.handleDblClick}>
					{ text }
				</label>
			)}
			<button className= "remove" onClick={this.handleOnClick}>Delete</button>
			</div>
			);
	};
};

