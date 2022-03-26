import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

import ProtectedRoute from "./ProtectedRoute";
import Login from "../pages/Login";
import Units from "../Units";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Switch>
        <ProtectedRoute path="/units/:id" component={Units} />
        <ProtectedRoute path="/units" component={Units} />
        <Route path="/login" component={Login} />
        <Redirect from="/" exact to="/login" />
      </Switch>
    </>
  );
}

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: "Helvetica Neue";
  }
`;
