import React, { Component } from "react";
import "./Filters.css";
import PropTypes from "prop-types";

export default class Filters extends Component {
  handleClick = e => {
    const { onChangeFilter } = this.props;
    onChangeFilter(e.target.id);
  };

  render() {
    const { filter } = this.props;
    return (
      <ul className="filters">
        <li className="filters__li">
          <input
            className="filter"
            defaultChecked={filter === "all"}
            type="radio"
            name="group"
            id="all"
            onClick={this.handleClick}
          />
          <label htmlFor="all" className="all">
            All
          </label>
        </li>
        <li className="filters__li">
          <input
            defaultChecked={filter === "active"}
            type="radio"
            name="group"
            className="filter"
            onClick={this.handleClick}
            id="active"
          />
          <label htmlFor="active" className="all">
            Active
          </label>
        </li>
        <li className="filters__li">
          <input
            defaultChecked={filter === "completed"}
            type="radio"
            name="group"
            className="filter"
            onClick={this.handleClick}
            id="completed"
          />
          <label htmlFor="completed" className="all">
            Completed
          </label>
        </li>
      </ul>
    );
  }
}

Filters.propTypes = {
  filter: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired
};
