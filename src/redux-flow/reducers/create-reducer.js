"use strict";

/*
  CreateReducer é uma função que recebe initialState e handleActions(as actions), 
  retorna uma nova função (o reducer) que recebe o state ou initialState caso state não for passado 
  e recebe também a action, depois verifica nas actions se action passada existe 
  (se o action.type é uma propriedade desse objeto). Se existir, é executada essa action(função) 
  pasando o state e a action, senão, ele retorna o state.
*/
const createReducer = (initialState, handleActions) => {
  if (typeof initialState === "undefined") {
    throw new Error("initialState should not be undefined");
  }

  if (typeof handleActions === "undefined") {
    throw new Error(
      "createReducer expects the second argument as an object representing reducer"
    );
  }

  return (state = initialState, action) =>
    handleActions.hasOwnProperty(action.type)
      ? handleActions[action.type](state, action)
      : state;
};

export default createReducer;
