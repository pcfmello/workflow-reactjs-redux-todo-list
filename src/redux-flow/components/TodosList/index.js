import React from "react";
import { connect } from "react-redux";

import { Paper, List, ListItem } from "material-ui";
import Subheader from "material-ui/Subheader";
import { ActionDeleteForever, ActionViewList } from "material-ui/svg-icons";

import { toggleTodo } from "../../reducers/todos/action-creators";

import * as filterActions from "../../reducers/visibility-filter/actions";

const TodosList = ({ todos, activeFilter, handleToggleTodo }) => (
  <Paper style={{ marginTop: 16 }}>
    <List>
      <Subheader style={{ display: "flex", justifyContent: "center" }}>
        Lista de Tarefas
      </Subheader>
      {getVisibleTodos(todos, activeFilter).map(todo => (
        <ListItem
          primaryText={todo.text}
          key={todo.id}
          onClick={handleToggleTodo(todo.id)}
          leftIcon={
            todo.completed ? <ActionDeleteForever /> : <ActionViewList />
          }
          style={{ textDecoration: todo.completed ? "line-through" : "none" }}
        />
      ))}
      {!todos.length && <ListItem primaryText="Nenhuma tarefa cadastrada" />}
    </List>
  </Paper>
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
