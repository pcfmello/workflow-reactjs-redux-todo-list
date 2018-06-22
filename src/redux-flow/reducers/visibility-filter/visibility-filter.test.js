"use strict";

import visibilityFilter, { initialState } from "./index";
import { expect } from "chai";
import deepFreeze from "deep-freeze";

it("visibilityFilter should be a function", () => {
  expect(visibilityFilter).to.be.a("function");
});

it("Should all todos", () => {
  const before = deepFreeze("SHOW_COMPLETED");
  const action = deepFreeze({
    type: "SET_VISIBILITY_FILTER",
    payload: { filter: "SHOW_ALL" }
  });
  const after = "SHOW_ALL";

  expect(visibilityFilter(before, action)).to.be.equal(after);
});
