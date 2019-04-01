import React from "react";
import "./App.css";
import { AppRouter } from "./AppRouter";
import { LoginPage } from "./features";
export const App = () =>
  localStorage.getItem("user") ? (
    <AppRouter />
  ) : (
    // <Redirect to={{ pathname: "/login", state: { } }} />
    <LoginPage />
  );

export default App;
