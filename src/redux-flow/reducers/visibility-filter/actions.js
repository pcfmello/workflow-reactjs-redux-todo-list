"use strict";

// Padrão de nomeação das actions
// Nome da action tem que ser única pois ele é global, por isso foi colocado o nome do reducer antes do nome da action

const reducerName = "visibilityFilter:";

export const SET_VISIBILITY_FILTER = reducerName.concat(
  "SET_VISIBILITY_FILTER"
);

export const SHOW_ALL = reducerName.concat("SHOW_ALL");
export const SHOW_COMPLETED = reducerName.concat("SHOW_COMPLETED");
export const SHOW_ACTIVE = reducerName.concat("SHOW_ACTIVE");
