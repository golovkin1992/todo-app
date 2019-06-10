import React from 'react';
import PropTypes from 'prop-types';

const FilterItem = ({
  isCurrent,
  filterName,
  filterLabel,
  onChangeFilter,
}) => {
  const handleClick = (e) => {
    onChangeFilter(e.target.id);
  };

  return (
    <li className="filters__item">
      <input
        className="filter"
        defaultChecked={isCurrent}
        type="radio"
        name="group"
        id={filterName}
        onClick={handleClick}
      />
      <label
        htmlFor={filterName}
        className={filterName}
      >
        {filterLabel}
      </label>
    </li>
  );
};

FilterItem.propTypes = {
  onChangeFilter: PropTypes.func.isRequired,
  isCurrent: PropTypes.bool.isRequired,
  filterName: PropTypes.string.isRequired,
  filterLabel: PropTypes.string.isRequired,
};
export default FilterItem;
