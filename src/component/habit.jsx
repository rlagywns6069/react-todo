import React, { PureComponent } from "react";

class Habit extends PureComponent {
  handleIncrease = () => {
    this.props.onIncrease(this.props.habit);
  };

  handleDecrease = () => {
    this.props.onDecrease(this.props.habit);
  };

  handleDelete = () => {
    this.props.handleDelete(this.props.habit);
  };
  render() {
    const { name, count } = this.props.habit;
    return (
      <li className="habit">
        <span className="habit-name">{name}</span>
        <span className="habit-count">{count}</span>
        <button
          className="habit-button habit-increase"
          onClick={this.handleIncrease}
        >
          <i className="fa-solid fa-square-plus"></i>
        </button>
        <button
          className="habit-button habit-decrease"
          onClick={this.handleDecrease}
        >
          <i className="fa-solid fa-square-minus"></i>
        </button>
        <button
          className="habit-button habit-delete"
          onClick={this.handleDelete}
        >
          <i className="fa-solid fa-trash"></i>
        </button>
      </li>
    );
  }
}

export default Habit;
