import React, {Component} from 'react';
import './TodoListItem.css';

export default class TodoListItem extends Component {
	constructor(props) {
	super(props);
	this.state = { 
		isComplete: this.props.isComplete,
		newInput: ``,
		hiddenElement: false
	 };
	};

	handleLabelClick = () => {
		const {id, isComplete, onToggle} = this.props;
		this.setState( {isComplete: !this.state.isComplete} );
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
				this.setState({ newInput:`` });
				this.setState({ hiddenElement: false });
			} else {
				onRemove(id);
			}
		} 
	};
	handleDblClick = () => {
		const {text}= this.props;
		this.setState({ newInput: 
			<input autoFocus onBlur= {this.handleOnBlur} onKeyDown= {this.handleKeyDown} defaultValue={text}/>
		});
		this.setState({ hiddenElement: true});	
	};

	render () {
		
		return (
			<div>
			<input type='checkbox' defaultChecked={this.state.isComplete ? true:false}  onClick={ this.handleLabelClick } />
			<label hidden={ this.state.hiddenElement } className= {'label__item'+ (this.state.isComplete ? ' done': '')} onDoubleClick= { this.handleDblClick}>
			{ this.props.text }
			</label>
			{ this.state.newInput }
			<button className= "remove" onClick={this.handleOnClick}>Delete</button>
			</div>
			);
	};
};

