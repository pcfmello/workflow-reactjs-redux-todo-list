"use strict";
import { combineReducers } from "redux";

// Importação dos reducers
import todos from "./todos";
import visibilityFilter from "./visibility-filter";

/**
 * combineReducers
 * about: Função do Redux que combina os vários reducers da aplicação
 * return: Objeto contendo os reducers a serem configurados na store
 *
 */
export default combineReducers({
  todos,
  visibilityFilter
});
