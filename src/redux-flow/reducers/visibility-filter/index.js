"use strict";

import { SHOW_ALL, SET_VISIBILITY_FILTER } from "./actions";
import createReducer from "../create-reducer";

const initialState = SHOW_ALL;

const visibilityFilter = createReducer(initialState, {
  [SET_VISIBILITY_FILTER]: (state, action) => action.payload.filter
});

// const visibilityFilter = (state, action) => {
//   if (!state) {
//     return initialState;
//   }

//   switch (action.type) {
//     case SET_VISIBILITY_FILTER:
//       return action.payload.filter;
//   }
//   return state;
// };

export default visibilityFilter;
