import React from 'react';
import PropTypes from 'prop-types';
import Filters from './Filters';

const Footer = ({
  total,
  active,
  completed,
  selectedFilter,
  onHandleClearCompletedClick,
  onChangeFilter,
}) => (
  <footer className={`footer ${total === 0 ? ' hidden' : ''}`}>
    <span className="counter">
      {`${active} items left`}
    </span>
    <Filters selectedFilter={selectedFilter} onChangeFilter={onChangeFilter} />
    <button
      className="clear-completed"
      type="submit"
      hidden={completed === 0}
      onClick={onHandleClearCompletedClick}
    >
            Clear completed
    </button>
  </footer>
);

Footer.propTypes = {
  total: PropTypes.number.isRequired,
  active: PropTypes.number.isRequired,
  completed: PropTypes.number.isRequired,
  selectedFilter: PropTypes.string.isRequired,
  onHandleClearCompletedClick: PropTypes.func.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};
export default Footer;
