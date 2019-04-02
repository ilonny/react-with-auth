import React from "react";
import "./App.css";

import { Provider } from 'react-redux'
import configureStore from './store'
import { AppRouter } from "./AppRouter";
import { LoginPage } from "./features";
export const App = () =>
  localStorage.getItem("user") ? (
    
    <Provider key={ module.hot ? Date.now() : configureStore()} store={configureStore()}>
      <AppRouter />
    </Provider>
  ) : (
    // <Redirect to={{ pathname: "/login", state: { } }} />
    <LoginPage />
  );

export default App;
