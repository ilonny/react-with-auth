import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { Mainpage } from "./features";
export const AppRouter = () => (
  <Router>
    <Route path="/" exact component={Mainpage} />
  </Router>
);
