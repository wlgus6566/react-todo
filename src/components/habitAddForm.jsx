import React, { Component } from 'react';

class HabitAddForm extends Component {
  render() {
    return (
      <form className="add-form" onSubmit={this.onSubmit}>
        <input type="text" placeholder="write to do..." className="add-input" />
        <button className="add-button">Add</button>
      </form>
    );
  }
}

export default HabitAddForm;
