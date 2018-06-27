import React from "react";
import { connect } from "react-redux";

import { TextField, FloatingActionButton } from "material-ui";
import ContentAdd from "material-ui/svg-icons/content/add";

import { addTodo } from "../../reducers/todos/action-creators";

const Form = ({ handleAddTodo }) => (
  <form onSubmit={handleAddTodo}>
    <TextField
      hintText="Nova tarefa"
      name="todo"
      floatingLabelText="Insira uma nova tarefa"
    />
    <FloatingActionButton mini type="submit">
      <ContentAdd />
    </FloatingActionButton>
  </form>
);

const mapDispatchToProps = dispatch => ({
  handleAddTodo: e => {
    e.preventDefault();
    dispatch(addTodo(e.target.todo.value));
    e.target.todo.value = "";
  }
});

export default connect(
  null,
  mapDispatchToProps
)(Form);
