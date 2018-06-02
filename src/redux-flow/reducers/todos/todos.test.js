"use strict";

import { expect } from "chai";
import deepFreeze from "deep-freeze";
import todos from "./index";
import { ADD_TODO } from "./actions";

it("Todos should to be a function", () => {
  expect(todos).to.be.a("function");
});

it("Should add todo item", () => {
  const before = deepFreeze([]);
  const action = deepFreeze({
    type: ADD_TODO,
    payload: {
      id: 0,
      text: "Hey"
    }
  });
  const after = [
    {
      id: 0,
      text: "Hey",
      completed: false
    }
  ];
  expect(todos(before, action)).to.be.deep.equal(after);
});
