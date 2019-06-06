import React from 'react';
import PropTypes from 'prop-types';
import TodoListItem from '../TodoListItem';
import './TodoList.css';

const TodoList = (props) => {
  const {
    items,
    onToggle,
    onRemove,
    onEdit,
  } = props;

  const elements = items.map(item => (
    <li className="item" key={item.id}>
      <TodoListItem
        {...item}
        onToggle={onToggle}
        onRemove={onRemove}
        onEdit={onEdit}
        />
    </li>
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
