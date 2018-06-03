"use strict";

import { ADD_TODO, TOGGLE_TODO } from "./actions";

const initialState = [];

const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return state.concat({
        id: action.payload.id,
        text: action.payload.text,
        completed: false
      });

    case TOGGLE_TODO:
      return state.map(todo => ({
        ...todo,
        completed: todo.id === action.payload ? !todo.completed : todo.completed
      }));
  }
  return state;
};

export default todos;
