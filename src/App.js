import React from "react";
import "./App.css";

import { Provider } from "react-redux";
import configureStore from "./store";
import { AppRouter } from "./AppRouter";
import { LoginPage } from "./features";
export const App = () => (
  <Provider
    key={module.hot ? Date.now() : configureStore()}
    store={configureStore()}
  >
    {localStorage.getItem("user") ? (
    <AppRouter />
    ) : (
    <LoginPage />
    )}
  </Provider>
);

export default App;
