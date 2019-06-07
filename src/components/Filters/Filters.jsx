import React from 'react';
import PropTypes from 'prop-types';
import FilterItem from '../FilterItem';
import './Filters.css';


const Filters = (props) => {
  const { filter, onChangeFilter } = props;
  const filters = [
    { name: 'all', label: 'All' },
    { name: 'active', label: 'Active' },
    { name: 'completed', label: 'Completed' },
  ];

  const elements = filters.map(({ name, label }) => (
    <FilterItem
      key={name}
      currentFilter={filter}
      filterName={name}
      filterLabel={label}
      onChangeFilter={onChangeFilter}
    />
  ));
  return <ul className="filters">{elements}</ul>;
};
export default Filters;

Filters.propTypes = {
  filter: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};
