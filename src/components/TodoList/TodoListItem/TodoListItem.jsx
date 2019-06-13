import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './TodoListItem.css';


export default class TodoListItem extends PureComponent {
  state = { isEdit: false };

  inputFocusRef = React.createRef();

  componentDidUpdate() {
    const { isEdit } = this.state;
    if (isEdit) {
      this.inputFocusRef.current.focus();
    }
  }


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

  handleKeyDown = (e) => {
    this.handleNewInputEdit(e);
  };

  handleBlur = (e) => {
    this.handleNewInputEdit(e);
  };

  handleNewInputEdit = (e) => {
    const { id, onEdit, onRemove } = this.props;
    let { text } = this.props;
    if (!e.keyCode || e.keyCode === 13) {
      if (e.target.value !== '') {
        text = e.target.value;
        onEdit(id, text);
        this.setState({ isEdit: false });
      } else {
        onRemove(id);
      }
    }
  };

  render() {
    const { text, isComplete } = this.props;
    const { isEdit } = this.state;
    return (
      <li className="item">
        <div className="content-wrap">
          <input
            onClick={this.handleInputClick}
            onChange={() => {}}
            className="complete"
            type="checkbox"
            checked={isComplete}
          />
          {isEdit ? (
            <input
              className="edit"
              ref={this.inputFocusRef}
              onBlur={this.handleBlur}
              onKeyDown={this.handleKeyDown}
              defaultValue={text}
            />
          ) : (
            <span className="caption" onDoubleClick={this.handleLabelDblClick}>
              {text}
            </span>
          )}
          <button
            className="destroy"
            type="submit"
            onClick={this.handleBtnDestroyClick}
          />
        </div>
      </li>
    );
  }
}
TodoListItem.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  isComplete: PropTypes.bool.isRequired,
  onEdit: PropTypes.func.isRequired,
  onToggle: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
};
