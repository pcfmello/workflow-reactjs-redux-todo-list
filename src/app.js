"use strict";

import React from "react";
import styles from "./css/main.css";

import lightBaseTheme from "material-ui/styles/baseThemes/lightBaseTheme";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";

import { Paper } from "material-ui";

import Form from "./redux-flow/components/Form";
import TodosList from "./redux-flow/components/TodosList";
import Filter from "./redux-flow/components/Filter";

const App = () => (
  <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
    <div>
      <Paper
        style={{
          width: 336,
          padding: 16,
          display: "flex",
          flexDirection: "column"
        }}
      >
        <Form />
        <TodosList />
        <Filter />
      </Paper>
    </div>
  </MuiThemeProvider>
);

export default App;
