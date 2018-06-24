"use strict";

import React from "react";

import Form from "./redux-flow/components/Form";
import TodosList from "./redux-flow/components/TodosList";
import Filter from "./redux-flow/components/Filter";

const App = () => (
  <div>
    <Form />
    <TodosList />
    <Filter />
  </div>
);

export default App;
