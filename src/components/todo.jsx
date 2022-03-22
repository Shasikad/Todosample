import React, { Component } from "react";

class Todo extends Component {
  render() {
    return (
      <div>
        <td>
          <input
            type="checkbox"
            defaultChecked={this.props.todo.isDone}
            onChange={() => this.props.fooDoneDone(this.props.todo)}
          />
        </td>
        <td>{this.renderTodo()}</td>
        <td>
          <button
            onClick={() => this.props.fooDelete(this.props.todo.id)}
            className="btn btn-danger btn-sm"
          >
            x
          </button>
        </td>
      </div>
    );
  }

  renderTodo() {
    if (this.props.todo.isDone) return <s>{this.props.todo.value}</s>;
    else return this.props.todo.value;
  }
}

export default Todo;
