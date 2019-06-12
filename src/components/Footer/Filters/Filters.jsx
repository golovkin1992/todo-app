import React from 'react';
import PropTypes from 'prop-types';
import FilterItem from './FilterItem/index';
import './Filters.css';


const Filters = ({
  selectedFilter,
  onChangeFilter,
}) => {
  const filters = [
    { name: 'all', label: 'All' },
    { name: 'active', label: 'Active' },
    { name: 'completed', label: 'Completed' },
  ];

  const elements = filters.map(({ name, label }) => (
    <FilterItem
      key={name}
      filterName={name}
      filterLabel={label}
      onChangeFilter={onChangeFilter}
      isCurrent={selectedFilter === name}
    />
  ));
  return <ul className="filters">{elements}</ul>;
};
export default Filters;

Filters.propTypes = {
  selectedFilter: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};
