import React from 'react';

export default class NewItemTodo extends React.Component {
	constructor (props) {
	super(props);

	//this.state = {};	
};
	handleKeyDown = (e) => {
		if (e.keyCode === 13) {
			const {data} = this.props;
			data.push( {id: Date.now(), text: e.target.value, isComplete: false} );
			console.log(data);

		};
	};

	render () {
	return (
		<input onKeyDown={this.handleKeyDown} placeholder='What needs to be done?'/>);
	};
};

