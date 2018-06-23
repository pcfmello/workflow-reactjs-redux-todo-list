"use strict";

import visibilityFilter, { initialState } from "./index";
import { expect } from "chai";
import deepFreeze from "deep-freeze";
import { setVisibilityFilter } from "./action-creators";
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from "./actions";

it("visibilityFilter should be a function", () => {
  expect(visibilityFilter).to.be.a("function");
});

it("Should all todos", () => {
  const before = SHOW_COMPLETED;
  const action = deepFreeze(setVisibilityFilter(SHOW_ALL));
  const after = SHOW_ALL;

  expect(visibilityFilter(before, action)).to.be.equal(after);
});

it("Should show just completed todos", () => {
  const before = SHOW_ALL;
  const action = deepFreeze(setVisibilityFilter(SHOW_COMPLETED));
  const after = SHOW_COMPLETED;

  expect(visibilityFilter(before, action)).to.be.equal(after);
});

it("Should show just active todos", () => {
  const before = SHOW_ALL;
  const action = deepFreeze(setVisibilityFilter(SHOW_ACTIVE));
  const after = SHOW_ACTIVE;

  expect(visibilityFilter(before, action)).to.be.equal(after);
});

it("Should return latest state when action is unknown ", () => {
  const before = SHOW_ALL;
  const action = deepFreeze({
    type: "SET_VISIBILITY_FILTER_UNKNOWN",
    payload: { filter: SHOW_ACTIVE }
  });
  const after = SHOW_ALL;

  expect(visibilityFilter(before, action)).to.be.equal(after);
});

it("Should return initialState when latest state is undefined", () => {
  const before = undefined;
  const action = deepFreeze(setVisibilityFilter(SHOW_ALL));
  const after = initialState;

  expect(visibilityFilter(before, action)).to.be.equal(after);
});
