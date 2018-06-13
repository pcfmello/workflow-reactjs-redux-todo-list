"use strict";

import { ADD_TODO as ADD, TOGGLE_TODO } from "./actions";
import { v4 } from "uuid";

export const addTodo = text => ({
  type: ADD,
  payload: { id: v4(), text }
});

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  payload: { id }
});
