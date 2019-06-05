import React, { Component } from 'react';
import './Filters.css';

export default class Filters extends Component {

	handleClick = (e) => {
		const { onChangeFilter } = this.props;
		onChangeFilter(e.target.id);
	};
	
	render() {
		const { currentFilter } = this.props;
		return (
		<ul className="js-filters">
			<li>
			<input defaultChecked = {currentFilter === 'all'} 
				   type = "radio" 
				   name = "group" 
				   className = "filter" 
				   onClick = {this.handleClick}
				   id = 'all'
				   />
			<label htmlFor = "all" className="all">All</label>
		</li>
		<li>
			<input defaultChecked = {currentFilter === 'active'} 
				   type = "radio" 
				   name = "group" 
				   className = "filter" 
				   onClick = {this.handleClick}  
				   id = 'active'/>
			<label htmlFor = "active" className="all">Active</label>
		</li>
		<li>
			<input defaultChecked = {currentFilter === 'completed'} 
				   type = "radio" 
				   name = "group" 
				   className = "filter" 
				   onClick = {this.handleClick}  
				   id = 'completed'/>
			<label htmlFor = "completed" className = "all">Completed</label>
		</li>
		</ul>
		);
	};
};