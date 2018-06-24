"use strict";
// Padrão de nomeação das actions
// Nome da action tem que ser única pois ele é global, por isso foi colocado o nome do reducer antes do nome da action

const reducerName = "todos:";

export const ADD_TODO = reducerName.concat("ADD_TODO");
export const TOGGLE_TODO = reducerName.concat("TOGGLE_TODO");
