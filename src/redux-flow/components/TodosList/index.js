import React from "react";
import { connect } from "react-redux";

import { toggleTodo } from "../../reducers/todos/action-creators";

import * as filterActions from "../../reducers/visibility-filter/actions";

const TodosList = ({ todos, activeFilter, handleToggleTodo }) => (
  <ul>
    {getVisibleTodos(todos, activeFilter).map(todo => (
      <li
        key={todo.id}
        style={{ textDecoration: todo.completed ? "line-through" : "none" }}
        onClick={handleToggleTodo(todo.id)}
      >
        {todo.text}
      </li>
    ))}
    {!todos.length && <li>Não existem tarefas nessa lista</li>}
  </ul>
);

const getVisibleTodos = (todos, activeFilter) => {
  // Evitando o uso do switch, pois é lento
  const filterItems = {
    [filterActions.SHOW_ALL]: todos, // cria a chave da propriedade com a string da variável
    [filterActions.SHOW_COMPLETED]: todos.filter(todo => todo.completed),
    [filterActions.SHOW_ACTIVE]: todos.filter(todo => !todo.completed)
  };
  return filterItems[activeFilter];

  // Outra forma de retornar
  /* return {
    [filterActions.SHOW_ALL] : todos, 
    [filterActions.SHOW_COMPLETED]: todos.filter(todo => todo.completed),
    [filterActions.SHOW_ACTIVE] : todos.filter(todo => !todo.completed)
  }[activeFilter]; */
};

const mapStateToProps = state => ({
  todos: state.todos,
  activeFilter: state.visibilityFilter
});

const mapDispatchToProps = dispatch => ({
  handleToggleTodo: id => e => {
    dispatch(toggleTodo(id));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodosList);
