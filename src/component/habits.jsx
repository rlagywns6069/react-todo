import React, { PureComponent } from "react";
import Habit from "./habit";
import HabitAddForm from "./habitAddForm";

class Habits extends PureComponent {
  handleIncrease = (habit) => {
    this.props.onIncrease(habit);
  };

  handleDecrease = (habit) => {
    this.props.onDecrease(habit);
  };

  handleDelete = (habit) => {
    this.props.handleDelete(habit);
  };

  handleAdd = (name) => {
    this.props.onAdd(name);
  };

  render() {
    return (
      <>
        <HabitAddForm onAdd={this.handleAdd} />
        <ul>
          {this.props.habits.map((habit) => (
            <Habit
              key={habit.id}
              habit={habit}
              onIncrease={this.handleIncrease}
              onDecrease={this.handleDecrease}
              handleDelete={this.handleDelete}
            />
          ))}
        </ul>
        <button className="habit-reset" onClick={this.props.onReset}>
          Reset All
        </button>
      </>
    );
  }
}

export default Habits;
