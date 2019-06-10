import React from 'react';
import PropTypes from 'prop-types';
import TodoListItem from './TodoListItem/index';
import './TodoList.css';

const TodoList = ({
  items,
  onToggle,
  onRemove,
  onEdit,
}) => {
  const elements = items.map(item => (
    <TodoListItem
      key={item.id}
      {...item}
      onToggle={onToggle}
      onRemove={onRemove}
      onEdit={onEdit}
    />

  ));
  return <ul className="todo-list">{elements}</ul>;
};
export default TodoList;

TodoList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  onEdit: PropTypes.func.isRequired,
  onToggle: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
};
