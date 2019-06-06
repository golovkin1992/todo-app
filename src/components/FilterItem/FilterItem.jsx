import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class FilterItem extends Component {
  handleClick = (e) => {
    const { onChangeFilter } = this.props;
    onChangeFilter(e.target.id);
  };

  render() {
    const {
      currentFilter,
      filterName,
      filterLabel,
    } = this.props;
    return (
      <li className="filters__li">
        <input
          className="filter"
          defaultChecked={currentFilter === filterName}
          type="radio"
          name="group"
          id={filterName}
          onClick={this.handleClick}
        />
        <label
          htmlFor={filterName}
          className={filterName}
        >
          {filterLabel}
        </label>
      </li>
    );
  }
}
FilterItem.propTypes = {
  onChangeFilter: PropTypes.func.isRequired,
  currentFilter: PropTypes.string.isRequired,
  filterName: PropTypes.string.isRequired,
  filterLabel: PropTypes.string.isRequired,
};
