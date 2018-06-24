"use strict";
import { combineReducers } from "redux";

// Importação dos reducers
import todos from "./todos";
import visibilityFilter from "./visibility-filter";

// Exemplo simples do funcionamento do combineReducers por baixo dos panos
/* const combineReducers = reducers => (state = {}, action) => {
  return Object.keys(reducers).reduce((nextState, key) => {
    nextState[key] = reducers[key](state[key], action);
    return nextState;
  }, {});
}; */
// OU
/* const combineReducers = reducers => (state = {}, action) => {
  return Object.keys(reducers).reduce((nextState, key) => {
    return {
      ...nextState,
      [key]: reducers[key](state[key], action);
    }
  }, {});
}; */

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
