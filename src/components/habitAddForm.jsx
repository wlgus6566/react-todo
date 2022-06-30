import React, { PureComponent } from 'react';

class HabitAddForm extends PureComponent {
  inputRef = React.createRef();
  formRef = React.createRef();
  render() {
    onsubmit = (event) => {
      event.preventDefault();
      const name = this.inputRef.current.value;
      name && this.props.onAdd(name);
      this.inputRef.current.value = '';
    };
    return (
      <form ref={this.formRef} className="add-form" onSubmit={this.onSubmit}>
        <input
          ref={this.inputRef}
          minLength="1"
          type="text"
          placeholder="write to buy..."
          className="add-input"
        />
        <button className="add-button">Add</button>
      </form>
    );
  }
}

export default HabitAddForm;
