"use strict";

import { expect } from "chai";
import deepFreeze from "deep-freeze";
import createReducer from "./create-reducer";

const initialState = 0;

const reducer = createReducer(initialState, {
  INCREMENT: (state, action) => state + 1,
  DECREMENT: (state, action) => state - 1
});

it("should createReducer be a function", () => {
  expect(createReducer).to.be.a("function");
});

it("createReducer(initialState, {}) should return a reducer function", () => {
  const initialState = {};
  const actions = {};
  expect(createReducer(initialState, actions)).to.be.a("function");
});

it("should create a reducer", () => {
  const before = 0;
  const action = deepFreeze({ type: "INCREMENT" });
  const after = 1;

  expect(reducer(before, action)).to.be.equal(after);
});

it("should return the latest state when action is unknown", () => {
  const before = 3;
  const action = deepFreeze({ type: "ANYTHING" });
  const after = 3;
  expect(reducer(before, action)).to.be.equal(after);
});

it("should return initialState when before state is undefined", () => {
  const before = undefined;
  const action = deepFreeze({});
  const after = initialState;
  expect(reducer(before, action)).to.be.deep.equal(after);
});

it("initialState should not be undefined", () => {
  try {
    createReducer();
  } catch (e) {
    expect(e.message).to.be.equal("initialState should not be undefined");
  }
});

it("handleActions should not be different from object", () => {
  try {
    createReducer([]);
  } catch (e) {
    expect(e.message).to.be.equal(
      "createReducer expects the second argument as an object representing reducer"
    );
  }
});
