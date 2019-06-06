import React, { Component } from "react";
import "./TodoListItem.css";
import PropTypes from "prop-types";

export default class TodoListItem extends Component {
  state = { isEdit: false };

  handleInputClick = () => {
    const { id, isComplete, onToggle } = this.props;
    onToggle(id, isComplete);
  };

  handleBtnDestroyClick = () => {
    const { id, onRemove } = this.props;
    onRemove(id);
  };

  handleLabelDblClick = () => {
    this.setState({ isEdit: true });
  };

  handleKeyDown = e => {
    this.handleNewInputEdit(e);
  };

  handleOnBlur = e => {
    this.handleNewInputEdit(e);
  };

  handleNewInputEdit = e => {
    const { id, onEdit, onRemove } = this.props;
    let { text } = this.props;
    if (!e.keyCode || e.keyCode === 13) {
      if (e.target.value !== "") {
        text = e.target.value;
        onEdit(id, text);
        // eslint-disable-next-line react/no-unused-state
        this.setState({ isEdit: false, newInput: `` });
      } else {
        onRemove(id);
      }
    }
  };

  render() {
    const { text, isComplete } = this.props;
    const { isEdit } = this.state;
    return (
      <div className="content-wrap">
        <input
          className="complete"
          type="checkbox"
          checked={isComplete}
          onClick={this.handleInputClick}
        />
        {isEdit ? (
          <input
            className="edit"
            // eslint-disable-next-line jsx-a11y/no-autofocus
            autoFocus
            onBlur={this.handleOnBlur}
            onKeyDown={this.handleKeyDown}
            defaultValue={text}
          />
        ) : (
          // eslint-disable-next-line jsx-a11y/label-has-associated-control
          <label className="caption" onDoubleClick={this.handleLabelDblClick}>
            {text}
          </label>
        )}
        <button
          className="destroy"
          type="submit"
          onClick={this.handleBtnDestroyClick}
        />
      </div>
    );
  }
}
TodoListItem.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  isComplete: PropTypes.bool.isRequired,
  onEdit: PropTypes.func.isRequired,
  onToggle: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired
};
